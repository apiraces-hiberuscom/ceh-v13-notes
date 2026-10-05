#!/usr/bin/env python3
"""Regenera el índice de cada nota y el fichero REPASO-FINAL.md.

Uso (desde la raíz del repositorio):

    python scripts/generar_indices.py

Qué hace, sobre los ficheros "01 - ..." a "20 - ...":

1. Convierte los callouts escritos en formato antiguo
       MEMORY HOOK:            EXAM TRAP:
       **texto**               texto
   al formato de cita destacada ("> 🧠 *Para recordar:* ..." / "> ⚠️ *Trampa de examen:* ...").
2. Regenera el índice plegable de cada nota (bloque entre <!-- toc --> y <!-- /toc -->).
3. Regenera REPASO-FINAL.md con "Lo esencial", las trampas de examen y las reglas
   para recordar de todos los módulos.

Es idempotente: si las notas no han cambiado, volver a ejecutarlo no modifica nada.
Opcionalmente acepta la carpeta de las notas como argumento (por defecto, la raíz del repo).
"""
import re
import sys
from pathlib import Path
from urllib.parse import quote

ROOT = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path(__file__).resolve().parent.parent
NOTE_RE = re.compile(r'^(0[1-9]|1\d|20) - .+\.md$')
REPASO = 'REPASO-FINAL.md'

HOOK = '> 🧠 *Para recordar:*'
TRAP = '> ⚠️ *Trampa de examen:*'
LEGACY_CALLOUTS = {'MEMORY HOOK': HOOK, 'GANCHO DE MEMORIA': HOOK, 'EXAM TRAP': TRAP}
LEGACY_RE = re.compile(r'^(MEMORY HOOK|GANCHO DE MEMORIA|EXAM TRAP):\s*$')
FENCE_RE = re.compile(r'^\s*(```|~~~)')
HEADING_RE = re.compile(r'^(#{1,6})\s+(.*?)\s*$')
TOC_START, TOC_END = '<!-- toc -->', '<!-- /toc -->'
ESSENTIAL = 'Lo esencial para el examen'
TRAPS_SECTION_RE = re.compile(r'^(EXAM TRAPS?|TRAMPAS? (DEL|DE) EXAMEN)\b', re.I)
TABLE_SEP_RE = re.compile(r'^\s*:?-+:?\s*$')
HIGH_YIELD = ' (HIGH YIELD)'


def note_files():
    return sorted(p for p in ROOT.iterdir() if NOTE_RE.match(p.name))


def read_lines(path):
    return path.read_text(encoding='utf-8').split('\n')


def write_lines(path, lines):
    text = '\n'.join(lines)
    if path.exists() and path.read_text(encoding='utf-8') == text:
        return False
    path.write_text(text, encoding='utf-8', newline='\n')
    return True


def strip_md(text):
    text = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', text)
    return text.replace('**', '').replace('`', '').replace('*', '').strip()


def slugify(text):
    # Same rules as GitHub (github-slugger): lowercase, drop punctuation/symbols, spaces -> '-'.
    return re.sub(r'[^\w\- ]', '', strip_md(text).lower()).replace(' ', '-')


class Slugger:
    def __init__(self):
        self.seen = {}

    def slug(self, text):
        base = slug = slugify(text)
        while slug in self.seen:
            self.seen[base] += 1
            slug = f'{base}-{self.seen[base]}'
        self.seen[slug] = 0
        return slug


def headings(lines):
    """(index, level, text) of every heading outside fenced code blocks."""
    found, in_code = [], False
    for i, line in enumerate(lines):
        if FENCE_RE.match(line):
            in_code = not in_code
            continue
        m = None if in_code else HEADING_RE.match(line)
        if m:
            found.append((i, len(m.group(1)), m.group(2)))
    return found


def convert_callouts(lines):
    out, i, in_code = [], 0, False
    while i < len(lines):
        line = lines[i]
        if FENCE_RE.match(line):
            in_code = not in_code
        m = None if in_code else LEGACY_RE.match(line)
        if m:
            body, j = [], i + 1
            while j < len(lines) and lines[j].strip():
                body.append(lines[j].strip())
                j += 1
            if body:
                prefix = LEGACY_CALLOUTS[m.group(1)]
                for k, text in enumerate(body):
                    lead = f'{prefix} ' if k == 0 else '> '
                    out.append(lead + text + ('  ' if k < len(body) - 1 else ''))
                i = j
                continue
        out.append(line)
        i += 1
    return out


def toc_block(lines, title='Índice'):
    slugger, items = Slugger(), []
    for _, level, text in headings(lines):
        slug = slugger.slug(text)
        if level == 2:
            label = strip_md(text).replace(HIGH_YIELD, ' 🔥')
            label = label.replace('[', r'\[').replace(']', r'\]')
            items.append(f'- [{label}](#{slug})')
    return [TOC_START, '<details>', f'<summary><b>{title}</b></summary>', '', *items, '',
            '</details>', TOC_END]


def set_toc(lines, title='Índice'):
    if TOC_START in lines and TOC_END in lines:
        start, end = lines.index(TOC_START), lines.index(TOC_END)
        lines = lines[:start] + lines[end + 1:]
        return lines[:start] + toc_block(lines, title) + lines[start:]
    h1 = next((i for i, lvl, _ in headings(lines) if lvl == 1), None)
    if h1 is None:
        return lines
    at = h1 + 1
    while at < len(lines) and not lines[at].strip():
        at += 1
    while at < len(lines) and lines[at].startswith('>'):  # header summary blockquote
        at += 1
    before, after = lines[:at], lines[at:]
    while before and not before[-1].strip():
        before.pop()
    while after and not after[0].strip():
        after.pop(0)
    return before + [''] + toc_block(lines, title) + [''] + after


# ---------------------------------------------------------------- REPASO-FINAL.md

def section_body(lines, start, level):
    """Lines after heading `start` until the next heading of the same or higher level."""
    body = []
    for line in lines[start + 1:]:
        m = HEADING_RE.match(line)
        if m and len(m.group(1)) <= level:
            break
        body.append(line)
    return body


def callouts(lines, prefix):
    """[(context heading, [text lines])] for every callout starting with `prefix`."""
    found, context, i = [], '', 0
    while i < len(lines):
        m = HEADING_RE.match(lines[i])
        if m:
            context = strip_md(m.group(2)).replace(HIGH_YIELD, '')
        if lines[i].startswith(prefix):
            texts = [lines[i][len(prefix):].strip()]
            i += 1
            while i < len(lines) and lines[i].startswith('> '):
                texts.append(lines[i][2:].strip())
                i += 1
            found.append((context, texts))
            continue
        i += 1
    return found


def as_bullets(items):
    out = []
    for context, texts in items:
        texts = [t.rstrip() for t in texts if t.strip()]
        label = f'_{context}_: ' if context else ''
        out.append(f'- {label}{texts[0]}' + ('  ' if len(texts) > 1 else ''))
        out += [f'  {t}' + ('  ' if k < len(texts) - 1 else '') for k, t in enumerate(texts[1:], 1)]
    return out


def table_cells(line):
    return [c.strip() for c in re.split(r'(?<!\\)\|', line.strip().strip('|'))]


def trap_section(body, context):
    """Bullets for an "Exam Traps" section: two-column tables become "trap → **answer**"."""
    label = f'_{context}_: ' if context else ''
    out, i = [], 0
    while i < len(body):
        if body[i].lstrip().startswith('|'):
            j = i
            while j < len(body) and body[j].lstrip().startswith('|'):
                j += 1
            table, rows = body[i:j], [table_cells(l) for l in body[i:j]]
            if len(rows) > 2 and all(len(r) == 2 for r in rows) and all(TABLE_SEP_RE.match(c) for c in rows[1]):
                out += [f'- {label}{a} → **{b}**' for a, b in rows[2:]]
            else:
                out += ([''] if out else []) + table + ['']
            i = j
            continue
        if body[i].strip() and body[i].strip() != '---':
            out.append(body[i])
        i += 1
    return out


def note_summary(path):
    lines = read_lines(path)
    hs = headings(lines)
    title = next((t for _, lvl, t in hs if lvl == 1), path.stem)
    module = re.search(r'\*\*Módulo (\d+) — ([^*]+)\*\*', '\n'.join(lines[:12]))
    essential, traps_sections, stack = [], [], []
    for i, level, text in hs:
        stack = [(lvl, t) for lvl, t in stack if lvl < level]
        parent = stack[-1][1] if stack and stack[-1][0] > 1 else ''
        stack.append((level, text))
        if text.strip() == ESSENTIAL:
            essential = [l for l in section_body(lines, i, level) if l.strip() and l.strip() != '---']
        elif TRAPS_SECTION_RE.search(strip_md(text)):
            context = strip_md(parent).replace(HIGH_YIELD, '')
            traps_sections += trap_section(section_body(lines, i, level), context)
    return {
        'file': path.name,
        'title': title,
        'module': module.groups() if module else None,
        'essential': essential,
        'traps': as_bullets(callouts(lines, TRAP)),
        'traps_sections': traps_sections,
        'hooks': as_bullets(callouts(lines, HOOK)),
    }


def summary_block(s, heading):
    out = [heading, '', f'[Abrir la nota completa]({quote(s["file"])})', '']
    for label, body in (('Lo esencial', s['essential']),
                        ('Trampas de examen', s['traps']),
                        ('Para recordar', s['hooks'])):
        if label == 'Trampas de examen':
            body = body + s['traps_sections']
        while body and not body[-1].strip():
            body = body[:-1]
        if body:
            out += [f'**{label}**', '', *body, '']
    return out


def build_repaso(summaries):
    lines = [
        '# Repaso final — CEH v13',
        '',
        '> Lo imprescindible de cada módulo en un solo sitio: **lo esencial**, las **trampas de examen** '
        'y las **reglas para recordar**. Se genera automáticamente desde las notas: no lo edites a mano, '
        'cambia las notas y ejecuta `python scripts/generar_indices.py`.',
        '',
    ]
    current = None
    for s in summaries:
        num = s['file'][:2]
        title = s['title']
        if ' · Parte ' in title and s['module']:
            if current != num:
                current = num
                lines += ['---', '', f'## Módulo {num} — {s["module"][1].strip()}', '']
            part = re.sub(r'^Módulo \d+ · ', '', title)
            lines += summary_block(s, f'### {part}')
        else:
            current = num
            lines += ['---', '']
            lines += summary_block(s, f'## {title}')
    lines = set_toc(lines, 'Módulos')
    return lines + [''] if lines[-1] != '' else lines


def main():
    changed = []
    summaries = []
    for path in note_files():
        lines = read_lines(path)
        lines = set_toc(convert_callouts(lines))
        if write_lines(path, lines):
            changed.append(path.name)
        summaries.append(note_summary(path))
    if write_lines(ROOT / REPASO, build_repaso(summaries)):
        changed.append(REPASO)
    print(f'{len(changed)} fichero(s) actualizado(s)' + (':' if changed else '.'))
    for name in changed:
        print(f'  - {name}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
