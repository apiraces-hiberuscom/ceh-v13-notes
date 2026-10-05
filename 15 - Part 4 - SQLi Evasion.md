# Módulo 15 · Parte 4 — SQLi Evasion

> **Módulo 15 — SQL Injection** · Parte 4 de 5 · Técnicas para evadir WAF, filtros y detección por firmas: encoding, case manipulation, comentarios, whitespace, sustitución de operadores, ofuscación lógica, CHAR() y concatenación.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [CEH CORE STATEMENT 🔥](#ceh-core-statement-high-yield)
- [WHY EVASION IS REQUIRED](#why-evasion-is-required)
- [CLASSIFICATION OF EVASION TECHNIQUES 🔥](#classification-of-evasion-techniques-high-yield)
- [1. ENCODING TECHNIQUES](#1-encoding-techniques)
- [2. CASE MANIPULATION](#2-case-manipulation)
- [3. COMMENT INJECTION](#3-comment-injection)
- [4. WHITESPACE MANIPULATION](#4-whitespace-manipulation)
- [5. OPERATOR SUBSTITUTION](#5-operator-substitution)
- [6. LOGICAL OBFUSCATION](#6-logical-obfuscation)
- [7. CHAR AND ASCII FUNCTIONS](#7-char-and-ascii-functions)
- [8. CONCATENATION EVASION](#8-concatenation-evasion)
- [9. SQL INJECTION EVASION SUMMARY 🔥](#9-sql-injection-evasion-summary-high-yield)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **SQL Injection Evasion** — técnicas para evadir WAF, input validation, blacklist filters y signature-based detection (Blocked ≠ Secure).
- **URL encoding** — `'` = `%27`, espacio = `%20`, `=` = `%3D`, `OR` = `%4F%52`; `%27%20OR%201%3D1--` es `' OR 1=1--` codificado.
- **Double encoding** — codifica datos ya codificados para evadir una segunda capa de decodificación.
- **Case manipulation** — `SeLeCt`, `UnIoN`, `oR`: evade filtros sensibles a mayúsculas/minúsculas.
- **Comment injection** — `--` (la mayoría de BD), `#` (MySQL), `/* */` (todas las BD): rompen la lógica e ignoran el resto de la consulta.
- **Whitespace manipulation** — sustituir espacios por comentarios, tabulaciones o saltos de línea: `SELECT/**/FROM`.
- **Operator substitution** — `=` → `LIKE`, `AND` → `&&`, `OR` → `||`: misma lógica, otra sintaxis.
- **Logical obfuscation** — expresiones aritméticas o booleanas equivalentes: `1=1` → `2-1=1`, `TRUE` → `NOT FALSE`.
- **CHAR() / CHR()** — construyen cadenas sin comillas: `CHAR()` en MySQL/MSSQL, `CHR()` en Oracle (p. ej. `CHAR(65,66,67)`).
- **Concatenation evasion** — dividir palabras clave con `CONCAT()`, `+` o `||` para sobrevivir a los filtros de palabras clave.
- **Técnica → qué evade** — encoding: filtros de firmas; case: filtros case-sensitive; operator substitution: filtros de palabras clave; obfuscation: detección por patrones.

---

## CEH CORE STATEMENT (HIGH YIELD)

|Item|Memorize|
|---|---|
|SQL Injection Evasion|Técnicas utilizadas por los atacantes para evadir filtros de seguridad, firewalls y mecanismos de validación de entrada|

---

## WHY EVASION IS REQUIRED

|Reason|
|---|
|Web Application Firewalls (WAFs)|
|Input validation — validación de entrada|
|Blacklist filters — filtros de lista negra|
|Signature-based detection — detección basada en firmas|

> 🧠 *Para recordar:* **Blocked ≠ Secure**

---

## CLASSIFICATION OF EVASION TECHNIQUES (HIGH YIELD)

|Category|
|---|
|Encoding techniques — técnicas de codificación|
|Case manipulation — alternar mayúsculas y minúsculas|
|Comment injection — inyección de comentarios|
|Whitespace manipulation — manipulación de espacios en blanco|
|Operator substitution — sustitución de operadores|
|Logical obfuscation — ofuscación lógica|

---

## 1. ENCODING TECHNIQUES

### PURPOSE

|Purpose|
|---|
|Evadir filtros de entrada codificando los payloads|

---

### TYPES OF ENCODING

|Encoding Type|Description|
|---|---|
|URL encoding|Codifica caracteres como valores %|
|Hex encoding|Utiliza valores hexadecimales|
|Unicode encoding|Codifica caracteres usando Unicode|
|Double encoding|Codifica datos que ya han sido codificados|

---

### EXAM EXAMPLES

|Normal|Encoded|
|---|---|
|'|%27|
|espacio|%20|
|OR|%4F%52|

---

> 🧠 *Para recordar:* **Encoded ≠ detected**

---

## 2. CASE MANIPULATION

### PURPOSE

|Purpose|
|---|
|Evadir filtros sensibles a mayúsculas/minúsculas|

---

### TECHNIQUES

|Technique|
|---|
|Uppercase keywords — palabras clave en mayúsculas|
|Lowercase keywords — palabras clave en minúsculas|
|Mixed-case keywords — mezcla de mayúsculas y minúsculas|

---

### EXAM EXAMPLES

|Keyword|Variation|
|---|---|
|SELECT|SeLeCt|
|UNION|UnIoN|
|OR|oR|

---

> 🧠 *Para recordar:* **Cambiar mayúsculas/minúsculas evade los filtros débiles**

---

## 3. COMMENT INJECTION

### PURPOSE

|Purpose|
|---|
|Romper la lógica de la consulta e ignorar el resto del SQL|

---

### COMMENT TYPES (HIGH YIELD)

|Comment|DB Support|
|---|---|
|--|La mayoría de las BD|
|#|MySQL|
|/* */|Todas las BD|

---

### EXAM PAYLOADS

|Payload|
|---|
|' OR 1=1--|
|' OR 1=1#|

---

> 🧠 *Para recordar:* **Comentario = fin de la consulta**

---

## 4. WHITESPACE MANIPULATION

### PURPOSE

|Purpose|
|---|
|Evadir el filtrado basado en espacios|

---

### TECHNIQUES

|Technique|
|---|
|Sustituir espacios por comentarios|
|Sustituir espacios por tabulaciones|
|Sustituir espacios por saltos de línea|

---

### EXAM EXAMPLES

|Normal|Manipulated|
|---|---|
|SELECT * FROM|SELECT/**/FROM|

---

> 🧠 *Para recordar:* **No space ≠ no SQL**

---

## 5. OPERATOR SUBSTITUTION

### PURPOSE

|Purpose|
|---|
|Reemplazar operadores bloqueados con equivalentes|

---

### SUBSTITUTIONS

|Original|Substitute|
|---|---|
|=|LIKE|
|AND|&&|
|OR|\|\||

---

> 🧠 *Para recordar:* **Misma lógica, distinta sintaxis**

---

## 6. LOGICAL OBFUSCATION

### PURPOSE

|Purpose|
|---|
|Ocultar la lógica maliciosa|

---

### TECHNIQUES

|Technique|
|---|
|Arithmetic expressions — expresiones aritméticas|
|Boolean expressions — expresiones booleanas|
|Nested queries — consultas anidadas|

---

### EXAM EXAMPLES

|Original|Obfuscated|
|---|---|
|1=1|2-1=1|
|TRUE|NOT FALSE|

---

> 🧠 *Para recordar:* **La aritmética oculta la condición verdadera**

---

## 7. CHAR AND ASCII FUNCTIONS

### PURPOSE

|Purpose|
|---|
|Construir cadenas sin usar comillas|

---

### DB-SPECIFIC FUNCTIONS

|Database|Function|
|---|---|
|MySQL|CHAR()|
|MSSQL|CHAR()|
|Oracle|CHR()|

---

### EXAM EXAMPLE

|Payload|
|---|
|CHAR(65,66,67)|

---

> 🧠 *Para recordar:* **Sin comillas no hay filtro**

---

## 8. CONCATENATION EVASION

### PURPOSE

|Purpose|
|---|
|Dividir las palabras clave en partes|

---

### TECHNIQUES

|Technique|
|---|
|CONCAT()|
|Operador +|
|Operador \|\||

---

### EXAM EXAMPLE

|Keyword|Obfuscated|
|---|---|
|UNION|CONCAT('UN','ION')|

---

> 🧠 *Para recordar:* **La palabra clave dividida sobrevive al filtro**

---

## 9. SQL INJECTION EVASION SUMMARY (HIGH YIELD)

|Technique|Bypasses|
|---|---|
|Encoding|Filtros basados en firmas|
|Case manipulation|Filtros sensibles a mayúsculas/minúsculas|
|Comments|El parsing (análisis) de la consulta|
|Whitespace tricks|Filtros de espacios|
|Operator substitution|Filtros de palabras clave|
|Obfuscation|Detección por patrones|

---

## Flashcards

| Term | Definition |
|------|------------|
| SQL Injection Evasion | Técnicas utilizadas para evadir WAFs, validación de entrada y detección basada en firmas |
| URL Encoding | Codifica caracteres como valores % hex (por ejemplo, `'` se convierte en `%27`) |
| Hex Encoding | Representa caracteres usando valores hexadecimales para evadir filtros |
| Double Encoding | Codifica datos ya codificados para evadir capas de decodificación secundarias |
| Case Manipulation | Usa palabras clave mezclando mayúsculas y minúsculas (por ejemplo, `SeLeCt`) para evadir filtros sensibles a mayúsculas/minúsculas |
| Comment Injection | Inserta comentarios SQL (`--`, `#`, `/* */`) para romper la lógica de la consulta e ignorar el resto del SQL |
| Whitespace Manipulation | Reemplaza espacios con comentarios, tabulaciones o saltos de línea para evadir filtros basados en espacios |
| Operator Substitution | Reemplaza operadores bloqueados con equivalentes (por ejemplo, `=` con `LIKE`, `AND` con `&&`) |
| Logical Obfuscation | Oculta la lógica maliciosa usando expresiones aritméticas (`2-1=1`) o expresiones booleanas (`NOT FALSE`) |
| CHAR()/CHR() Functions | Construye cadenas sin comillas (MySQL/MSSQL usan CHAR(), Oracle usa CHR()) |
| Concatenation Evasion | Divide las palabras clave en partes usando CONCAT(), `+`, o `\|\|` para sobrevivir a los filtros de palabras clave |
| WAF Bypass Goal | Evadir controles de seguridad que bloquean firmas conocidas de SQL injection |
| `SELECT/**/FROM` | Evasión de whitespace usando comentarios en línea en lugar de espacios |

---

## Preguntas de práctica

**1.** Un atacante quiere evadir un WAF que bloquea la palabra clave "SELECT". ¿Qué técnica de evasion sería más efectiva?
- a) Usar un payload más largo
- b) Usar palabras clave en caso mixto como `SeLeCt`
- c) Usar un método HTTP diferente
- d) Usar HTTPS en lugar de HTTP
**Answer:** b — Case manipulation (caso mixto como `SeLeCt`) evita los filtros sensibles a mayúsculas/minúsculas que solo bloquean coincidencias exactas de palabras clave.

**2.** ¿Qué representa el payload `%27%20OR%201%3D1--`?
- a) Una inyección ciega basada en tiempo
- b) Una versión codificada en URL de `' OR 1=1--`
- c) Un UNION SELECT codificado en hex
- d) Un payload WAF codificado en doble
**Answer:** b — `%27` = `'`, `%20` = espacio, `%3D` = `=` — esto es la codificación URL estándar del payload de bypass clásico.

**3.** ¿Qué técnica evadiría un WAF que filtra todos los caracteres de espacio en la entrada?
- a) Solo hex encoding
- b) Reemplazar espacios con comentarios en línea como `/**/`
- c) Usar palabras clave en mayúsculas
- d) Usar operator substitution
**Answer:** b — `SELECT/**/FROM` usa comentarios en línea como sustitutos de espacios, evitando el filtrado basado en espacios.

**4.** Un atacante reemplaza `1=1` con `2-1=1` en su payload. ¿Qué técnica de evasion es esta?
- a) Encoding
- b) Comment injection
- c) Logical obfuscation usando aritmética
- d) Operator substitution
**Answer:** c — Las expresiones aritméticas como `2-1=1` son lógicamente equivalentes a `1=1` pero evitan la detección basada en patrones.

**5.** ¿Qué función permite construir cadenas SQL sin usar comillas, evitando así los filtros basados en comillas?
- a) SLEEP()
- b) CHAR()
- c) WAITFOR DELAY
- d) pg_sleep()
**Answer:** b — CHAR() (y CHR() en Oracle) convierte valores ASCII a caracteres, eliminando la necesidad de comillas literales en el payload.
