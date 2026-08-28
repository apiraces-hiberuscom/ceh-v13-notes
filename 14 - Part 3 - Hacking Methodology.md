# OBJECTIVE 03 — METODOLOGÍA DE HACKING DE WEB APPLICATIONS

## CEH CORE PRINCIPLE (MEMORIZE)

|Item|Memorize|
|---|---|
|Web Application Hacking Methodology|Un proceso sistemático utilizado por atacantes para identificar, analizar, explotar y mantener acceso a vulnerabilidades en web applications|

---

## PHASES OF WEB APPLICATION HACKING (EXAM ORDER)

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

MEMORY HOOK:  
**I F S E E P M C**

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
|Domain name|
|IP address|
|Server location|
|Hosting provider|
|Technologies used|

---

### Tools (CEH-EXPECTED)

|Tool|Purpose|
|---|---|
|Whois|Domain ownership|
|Nslookup|DNS records|
|Dig|DNS enumeration|
|Netcraft|Hosting and OS info|
|Google Dorks|Sensitive data discovery|

---

### Memory Hook

**Who owns it → Where it is → What runs it**

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
|Web server type|
|OS|
|CMS|
|Programming language|
|Framework|

---

### Tools

|Tool|Purpose|
|---|---|
|Wappalyzer|Tech stack detection|
|BuiltWith|Framework identification|
|WhatWeb|Server fingerprinting|
|Netcraft|OS and server details|

---

### Exam Trap

|Trap|Correct|
|---|---|
|Footprinting = scanning|NO|
|Footprinting = passive recon|YES|

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
|Automated scanners|
|Signature-based scanners|

---

### Tools

|Tool|Purpose|
|---|---|
|Nikto|Web server vulnerabilities|
|Nessus|General vulnerability scanning|
|OpenVAS|Vulnerability detection|
|Acunetix|Web app scanning|

---

### Output

|Output|
|---|
|CVE IDs|
|Vulnerability severity|
|Affected components|

---

MEMORY HOOK:  
**Scanner ≠ exploit**

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
|Directories|
|Files|
|Parameters|
|User roles|
|APIs|

---

### Tools

|Tool|Purpose|
|---|---|
|Dirb|Directory brute-force|
|Gobuster|Content discovery|
|Burp Suite|Parameter analysis|
|wfuzz|Parameter fuzzing|

---

### Exam Trap

|Trap|Correct|
|---|---|
|Enumeration is passive|NO|
|Enumeration is active|YES|

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
|SQLmap|SQL injection exploitation|
|Metasploit|Exploit framework|
|Burp Suite|Manual exploitation|
|BeEF|Browser exploitation|

---

### Impact

|Impact|
|---|
|Data compromise|
|Shell access|
|Privilege escalation|

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
|Credential harvesting|
|Data exfiltration|
|Lateral movement|

---

### Tools

|Tool|
|---|
|Meterpreter|
|Mimikatz|
|Custom scripts|

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
|Scheduled tasks|

---

### Exam Note

Persistence ≠ initial exploitation

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
|Log deletion|
|Log modification|
|Timestamp manipulation|

---

## COMPLETE METHODOLOGY FLOW (EXAM GOLD)

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

# EXAM FLASHCARDS

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

# PRACTICE QUESTIONS

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
