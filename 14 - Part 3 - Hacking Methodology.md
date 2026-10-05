# Módulo 14 · Parte 3 — Hacking Methodology

> **Módulo 14 — Hacking Web Applications** · Parte 3 de 5 · Las 8 fases de la metodología de hacking de web applications, con el objetivo, las técnicas y las herramientas de cada fase.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [CEH CORE PRINCIPLE 🔥](#ceh-core-principle-high-yield)
- [PHASES OF WEB APPLICATION HACKING](#phases-of-web-application-hacking)
- [PHASE 1 — INFORMATION GATHERING](#phase-1--information-gathering)
- [PHASE 2 — WEB APPLICATION FOOTPRINTING](#phase-2--web-application-footprinting)
- [PHASE 3 — VULNERABILITY SCANNING](#phase-3--vulnerability-scanning)
- [PHASE 4 — WEB APPLICATION ENUMERATION](#phase-4--web-application-enumeration)
- [PHASE 5 — EXPLOITATION](#phase-5--exploitation)
- [PHASE 6 — POST-EXPLOITATION](#phase-6--post-exploitation)
- [PHASE 7 — MAINTAINING ACCESS](#phase-7--maintaining-access)
- [PHASE 8 — COVERING TRACKS](#phase-8--covering-tracks)
- [COMPLETE METHODOLOGY FLOW 🔥](#complete-methodology-flow-high-yield)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **Orden de las 8 fases** — Information Gathering → Web Application Footprinting → Vulnerability Scanning → Web Application Enumeration → Exploitation → Post-Exploitation → Maintaining Access → Covering Tracks.
- **Versión corta** — Recon → Footprint → Scan → Enumerate → Exploit → Post-exploit → Persist → Cover (**I F S E E P M C**).
- **Information Gathering (fase 1)** — Whois (propietario del dominio), Nslookup/Dig (DNS), Netcraft (hosting y SO), Google Dorks (datos sensibles expuestos).
- **Web Application Footprinting (fase 2)** — identifica el tech stack con Wappalyzer, BuiltWith, WhatWeb y Netcraft; es **recon pasivo**, no scanning.
- **Vulnerability Scanning (fase 3)** — Nikto (web server), Nessus, OpenVAS, Acunetix; salida: CVE IDs, severidad y componentes afectados. **Scanner ≠ exploit**.
- **Web Application Enumeration (fase 4)** — es **activa**: directorios, archivos, parámetros, roles y APIs.
- **Dirb / Gobuster** — directory brute-forcing y content discovery; **wfuzz** — parameter fuzzing.
- **Exploitation (fase 5)** — SQLmap (SQL injection automatizada), Metasploit (exploit framework), Burp Suite (explotación manual), BeEF (browser exploitation).
- **Post-Exploitation (fase 6)** — credential harvesting, data exfiltration y lateral movement (Meterpreter, Mimikatz).
- **Maintaining Access (fase 7)** — backdoors, web shells y scheduled tasks; la persistencia ≠ la explotación inicial.
- **Covering Tracks (fase 8)** — borrado y modificación de logs, timestamp manipulation.

---

## CEH CORE PRINCIPLE (HIGH YIELD)

|Item|Memorize|
|---|---|
|Web Application Hacking Methodology|Un proceso sistemático utilizado por atacantes para identificar, analizar, explotar y mantener acceso a vulnerabilidades en web applications|

---

## PHASES OF WEB APPLICATION HACKING

|Phase No.|Phase Name|
|---|---|
|1|Information Gathering|
|2|Web Application Footprinting|
|3|Vulnerability Scanning|
|4|Web Application Enumeration|
|5|Exploitation|
|6|Post-Exploitation|
|7|Maintaining Access|
|8|Covering Tracks|

> 🧠 *Para recordar:* **I F S E E P M C**

---

## PHASE 1 — INFORMATION GATHERING

### Objective

|Goal|
|---|
|Recopilar la máxima información sobre la web application objetivo|

---

### Information Collected

|Category|
|---|
|Nombre de dominio|
|Dirección IP|
|Ubicación del servidor|
|Proveedor de hosting|
|Tecnologías utilizadas|

---

### Tools

|Tool|Purpose|
|---|---|
|Whois|Propietario del dominio|
|Nslookup|Registros DNS|
|Dig|Enumeración DNS|
|Netcraft|Información de hosting y SO|
|Google Dorks|Descubrimiento de datos sensibles expuestos|

---

> 🧠 *Para recordar:* **Quién es el dueño → Dónde está → Qué ejecuta** (Who owns it → Where it is → What runs it)

---

## PHASE 2 — WEB APPLICATION FOOTPRINTING

### Objective

|Goal|
|---|
|Identificar tecnologías, frameworks y puntos de entrada|

---

### Information Identified

|Item|
|---|
|Tipo de web server|
|OS|
|CMS|
|Lenguaje de programación|
|Framework|

---

### Tools

|Tool|Purpose|
|---|---|
|Wappalyzer|Detección del tech stack|
|BuiltWith|Identificación de frameworks|
|WhatWeb|Fingerprinting del servidor|
|Netcraft|Detalles del SO y del servidor|

---

### Exam Trap

|Trap|Correct|
|---|---|
|Footprinting = scanning|NO|
|Footprinting = recon pasivo|SÍ|

---

## PHASE 3 — VULNERABILITY SCANNING

### Objective

|Goal|
|---|
|Identificar vulnerabilidades conocidas|

---

### Scanner Types

|Type|
|---|
|Scanners automatizados|
|Signature-based scanners — basados en firmas|

---

### Tools

|Tool|Purpose|
|---|---|
|Nikto|Vulnerabilidades del web server|
|Nessus|Escaneo de vulnerabilidades general|
|OpenVAS|Detección de vulnerabilidades|
|Acunetix|Escaneo de web applications|

---

### Output

|Output|
|---|
|CVE IDs|
|Severidad de la vulnerabilidad|
|Componentes afectados|

---

> 🧠 *Para recordar:* **Scanner ≠ exploit**

---

## PHASE 4 — WEB APPLICATION ENUMERATION

### Objective

|Goal|
|---|
|Extraer datos detallados a nivel de aplicación|

---

### Enumeration Targets

|Target|
|---|
|Directorios|
|Archivos|
|Parámetros|
|Roles de usuario|
|APIs|

---

### Tools

|Tool|Purpose|
|---|---|
|Dirb|Directory brute-force — fuerza bruta de directorios|
|Gobuster|Content discovery — descubrimiento de contenido|
|Burp Suite|Análisis de parámetros|
|wfuzz|Parameter fuzzing — fuzzing de parámetros|

---

### Exam Trap

|Trap|Correct|
|---|---|
|La enumeración es pasiva|NO|
|La enumeración es activa|SÍ|

---

## PHASE 5 — EXPLOITATION

### Objective

|Goal|
|---|
|Explotar vulnerabilidades identificadas|

---

### Common Exploits

|Exploit|
|---|
|SQL Injection|
|XSS|
|Command Injection|
|File Inclusion|
|Authentication bypass|

---

### Tools

|Tool|Purpose|
|---|---|
|SQLmap|Explotación de SQL injection|
|Metasploit|Exploit framework — framework de explotación|
|Burp Suite|Explotación manual|
|BeEF|Browser exploitation — explotación del navegador|

---

### Impact

|Impact|
|---|
|Compromiso de datos|
|Acceso a una shell|
|Privilege escalation — escalada de privilegios|

---

## PHASE 6 — POST-EXPLOITATION

### Objective

|Goal|
|---|
|Ampliar el acceso y recopilar datos|

---

### Activities

|Activity|
|---|
|Credential harvesting — recolección de credenciales|
|Data exfiltration — exfiltración de datos|
|Lateral movement — movimiento lateral|

---

### Tools

|Tool|
|---|
|Meterpreter|
|Mimikatz|
|Scripts personalizados|

---

## PHASE 7 — MAINTAINING ACCESS

### Objective

|Goal|
|---|
|Garantizar acceso persistente|

---

### Techniques

|Technique|
|---|
|Backdoors|
|Web shells|
|Scheduled tasks — tareas programadas|

---

### Exam Note

La persistencia (persistence) ≠ la explotación inicial (initial exploitation)

---

## PHASE 8 — COVERING TRACKS

### Objective

|Goal|
|---|
|Ocultar la presencia del atacante|

---

### Techniques

|Technique|
|---|
|Log deletion — borrado de logs|
|Log modification — modificación de logs|
|Timestamp manipulation — manipulación de marcas de tiempo|

---

## COMPLETE METHODOLOGY FLOW (HIGH YIELD)

|Order|
|---|
|Recon|
|Footprint|
|Scan|
|Enumerate|
|Exploit|
|Post-exploit|
|Persist|
|Cover|

---

## Flashcards

| Term | Definition |
|------|------------|
| Information Gathering | Fase 1 — recopilación de datos sobre domain, IP, hosting y tecnologías del objetivo |
| Web Application Footprinting | Fase 2 — identificación del tipo de web server, OS, CMS, frameworks y puntos de entrada (recon pasivo) |
| Vulnerability Scanning | Fase 3 — uso de scanners automatizados para identificar CVEs conocidos y la severidad de vulnerabilidades |
| Web Application Enumeration | Fase 4 — extracción activa de directorios, archivos, parámetros, roles de usuario y APIs |
| Exploitation | Fase 5 — uso de herramientas como SQLmap, Metasploit y Burp Suite para explotar vulnerabilidades identificadas |
| Post-Exploitation | Fase 6 — ampliación del acceso mediante credential harvesting, data exfiltration y lateral movement |
| Maintaining Access | Fase 7 — garantización de persistencia mediante backdoors, web shells y scheduled tasks |
| Covering Tracks | Fase 8 — ocultación de la presencia del atacante mediante log deletion y timestamp manipulation |
| Google Dorks | Consultas de motor de búsqueda utilizadas para descubrir datos sensibles expuestos en la web |
| Wappalyzer | Herramienta para detectar el tech stack de un objetivo (frameworks, CMS, lenguajes) |
| Dirb / Gobuster | Herramientas para directory brute-forcing y content discovery durante la enumeración |
| SQLmap | Herramienta automatizada para detectar y explotar vulnerabilidades de SQL injection |
| BeEF | Browser Exploitation Framework utilizado para ataques del lado del cliente después de la explotación |
| Footprinting vs Scanning | Footprinting es recon pasivo; scanning es detección activa de vulnerabilidades |

---

## Preguntas de práctica

**1.** ¿Cuál es el orden correcto de las 8 fases en la metodología de hacking de web applications de CEH?
- a) Footprint → Recon → Scan → Enumerate → Exploit → Post-exploit → Persist → Cover
- b) Recon → Footprint → Scan → Enumerate → Exploit → Post-exploit → Persist → Cover
- c) Recon → Scan → Footprint → Enumerate → Exploit → Post-exploit → Cover → Persist
- d) Scan → Recon → Footprint → Enumerate → Exploit → Cover → Post-exploit → Persist
**Answer:** B — La secuencia correcta es Recon → Footprint → Scan → Enumerate → Exploit → Post-exploit → Persist → Cover.

**2.** ¿Qué herramienta se utiliza principalmente para directory brute-forcing durante la fase de enumeración?
- a) Whois
- b) Wappalyzer
- c) Gobuster
- d) SQLmap
**Answer:** C — Gobuster (y Dirb) se utilizan para directory brute-forcing y content discovery durante la fase 4 de enumeración.

**3.** Un atacante usa consultas de Google como `site:target.com filetype:pdf` para encontrar documentos expuestos. ¿A qué fase pertenece esto?
- a) Web Application Footprinting
- b) Information Gathering
- c) Vulnerability Scanning
- d) Exploitation
**Answer:** B — Los Google Dorks son parte de Information Gathering (Fase 1), utilizados para descubrir datos sensibles a través de consultas de motor de búsqueda.

**4.** ¿Cuál es la diferencia clave entre footprinting y scanning en la metodología CEH?
- a) Footprinting es activo; scanning es pasivo
- b) Footprinting es recon pasivo; scanning es detección activa de vulnerabilidades
- c) Ambos son actividades pasivas
- d) Scanning solo ocurre después de la explotación
**Answer:** B — Footprinting es identificación pasiva de tecnologías mientras que scanning sondea activamente vulnerabilidades conocidas.

**5.** ¿Qué herramienta usaría un atacante para automatizar la explotación de SQL injection?
- a) Wappalyzer
- b) Burp Suite
- c) SQLmap
- d) Netcraft
**Answer:** C — SQLmap es la herramienta automatizada dedicada para detectar y explotar vulnerabilidades de SQL injection durante la fase de explotación.
