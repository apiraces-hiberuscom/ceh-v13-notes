# Módulo 14 · Parte 2 — OWASP Top 10

> **Módulo 14 — Hacking Web Applications** · Parte 2 de 5 · Amenazas de web applications según el OWASP Top 10 (2021): significado, causas, ejemplos e impacto de cada categoría A01–A10.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [OBJECTIVE 02 — WEB APPLICATION THREATS](#objective-02--web-application-threats)
- [OWASP TOP 10 (2021) — MASTER LIST 🔥](#owasp-top-10-2021--master-list-high-yield)
- [A01:2021 — BROKEN ACCESS CONTROL](#a012021--broken-access-control)
- [A02:2021 — CRYPTOGRAPHIC FAILURES](#a022021--cryptographic-failures)
- [A03:2021 — INJECTION](#a032021--injection)
- [A04:2021 — INSECURE DESIGN](#a042021--insecure-design)
- [A05:2021 — SECURITY MISCONFIGURATION](#a052021--security-misconfiguration)
- [A06:2021 — VULNERABLE AND OUTDATED COMPONENTS](#a062021--vulnerable-and-outdated-components)
- [A07:2021 — IDENTIFICATION AND AUTHENTICATION FAILURES](#a072021--identification-and-authentication-failures)
- [A08:2021 — SOFTWARE AND DATA INTEGRITY FAILURES](#a082021--software-and-data-integrity-failures)
- [A09:2021 — SECURITY LOGGING AND MONITORING FAILURES](#a092021--security-logging-and-monitoring-failures)
- [A10:2021 — SERVER-SIDE REQUEST FORGERY (SSRF)](#a102021--server-side-request-forgery-ssrf)
- [Extras de examen (Boson Practice Test)](#extras-de-examen-boson-practice-test)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **OWASP Top 10 (2021), en orden** — A01 Broken Access Control → A02 Cryptographic Failures → A03 Injection → A04 Insecure Design → A05 Security Misconfiguration → A06 Vulnerable and Outdated Components → A07 Identification and Authentication Failures → A08 Software and Data Integrity Failures → A09 Security Logging and Monitoring Failures → A10 SSRF.
- **A01 Broken Access Control** — un usuario autenticado realiza acciones no autorizadas: IDOR, force browsing, metadata manipulation, control de acceso en el cliente.
- **A02 Cryptographic Failures** — cifrado ausente o débil (texto plano, sin TLS, hardcoded keys); afecta a datos en tránsito y en reposo.
- **A03 Injection** — entrada no confiable interpretada como comando (SQL, NoSQL, OS command, LDAP, XPath); causa raíz: falta de validación de entrada.
- **A04 Insecure Design** — fallo de diseño (sin threat modeling), NO un error de codificación.
- **A05 Security Misconfiguration** — default credentials, verbose errors/stack traces, directory listing, servicios innecesarios.
- **A06 Vulnerable and Outdated Components** — bibliotecas, frameworks o SO con CVEs conocidos y sin parchear.
- **A07 Identification and Authentication Failures** — sustituye a la antigua **Broken Authentication**: contraseñas débiles, sin MFA, session fixation, credential stuffing.
- **A08 Software and Data Integrity Failures** — unsigned updates, insecure deserialization, CI/CD o plugins comprometidos.
- **A09 Security Logging and Monitoring Failures** — sin logs, sin monitorizar o sin alertas → detección tardía de la brecha.
- **A10 SSRF** — el servidor hace peticiones a sistemas internos con una URL controlada por el atacante (escaneo interno, cloud metadata).
- **XXE / WS-Security** — XXE: XML injection contra bibliotecas XML usando `<!DOCTYPE>`; WS-Security: integridad y confidencialidad de mensajes SOAP.

---

## OBJECTIVE 02 — WEB APPLICATION THREATS

### CEH CORE STATEMENT (HIGH YIELD)

|Item|Memorize|
|---|---|
|Web Application Threat|Cualquier debilidad en la lógica de la aplicación, manejo de entrada, autenticación o configuración que pueda ser explotada para comprometer la confidencialidad, integridad o disponibilidad|

---

## OWASP TOP 10 (2021) — MASTER LIST (HIGH YIELD)

|Rank|Vulnerability Code|Name|
|---|---|---|
|1|A01:2021|Broken Access Control|
|2|A02:2021|Cryptographic Failures|
|3|A03:2021|Injection|
|4|A04:2021|Insecure Design|
|5|A05:2021|Security Misconfiguration|
|6|A06:2021|Vulnerable and Outdated Components|
|7|A07:2021|Identification and Authentication Failures|
|8|A08:2021|Software and Data Integrity Failures|
|9|A09:2021|Security Logging and Monitoring Failures|
|10|A10:2021|Server-Side Request Forgery (SSRF)|

> 🧠 *Para recordar:* **Access → Crypto → Injection → Design → Config → Components → Auth → Integrity → Logging → SSRF**

---

## A01:2021 — BROKEN ACCESS CONTROL

### Core Definition

|Item|Memorize|
|---|---|
|Meaning|Falta de aplicación de restricciones a usuarios autenticados|
|Result|Acciones no autorizadas|

---

### Common Causes

|Cause|
|---|
|Missing access checks — falta de comprobaciones de autorización|
|Client-side access control — control de acceso solo en el cliente|
|IDOR (Insecure Direct Object Reference)|
|Metadata manipulation — manipulación de metadatos|
|Force browsing — navegación forzada a recursos no enlazados|

---

### Attack Logic

|Step|Action|
|---|---|
|1|El usuario se autentica|
|2|Modifica la solicitud|
|3|El servidor falla al verificar la autorización|
|4|Se accede a un recurso no autorizado|

---

### Impact

|Impact|
|---|
|Exposición de datos (data exposure)|
|Privilege escalation — escalada de privilegios|
|Account takeover — toma de control de la cuenta|

---

## A02:2021 — CRYPTOGRAPHIC FAILURES

### Core Definition

|Item|Memorize|
|---|---|
|Meaning|Uso inadecuado o ausencia de criptografía|
|Affects|Datos en tránsito y en reposo|

---

### Common Failures

|Failure|
|---|
|Transmisión de datos en texto plano (plaintext)|
|Algoritmos de cifrado débiles|
|Hardcoded keys — claves escritas en el código|
|Sin TLS|
|Gestión inadecuada de claves (key management)|

---

### Impact

|Impact|
|---|
|Filtración de datos|
|Ataques MITM|
|Robo de credenciales|

---

> 🧠 *Para recordar:* **No crypto → datos robados**

---

## A03:2021 — INJECTION

### Core Definition

|Item|Memorize|
|---|---|
|Meaning|Entrada no confiable interpretada como comandos|
|Root Cause|Falta de validación de entrada|

---

### Injection Types

|Type|
|---|
|SQL Injection|
|NoSQL Injection|
|OS Command Injection|
|LDAP Injection|
|XPath Injection|

---

### Injection Logic

|Step|Action|
|---|---|
|1|El atacante envía una entrada manipulada (crafted input)|
|2|La aplicación confía en la entrada|
|3|El intérprete ejecuta el payload|

---

### Impact

|Impact|
|---|
|Pérdida de datos|
|Authentication bypass — evasión de la autenticación|
|Remote code execution (RCE)|

---

## A04:2021 — INSECURE DESIGN

### Core Definition

|Item|Memorize|
|---|---|
|Meaning|Controles de seguridad faltantes o ineficaces|
|Phase|Fase de diseño|

---

### Characteristics

|Characteristic|
|---|
|Sin threat modeling|
|Falta de validación de la lógica de negocio|
|Flujos de trabajo inseguros (insecure workflows)|

---

### Exam Trap

|Trap|Correct|
|---|---|
|Error de codificación (coding bug)|NO|
|Fallo de diseño (design flaw)|SÍ|

---

## A05:2021 — SECURITY MISCONFIGURATION

### Core Definition

|Item|Memorize|
|---|---|
|Meaning|Configuración de seguridad incorrecta|
|Layer|Aplicación, servidor, plataforma|

---

### Examples

|Example|
|---|
|Default credentials — credenciales por defecto|
|Verbose errors — mensajes de error detallados|
|Servicios innecesarios|
|Directory listing — listado de directorios|
|Software sin parchear|

---

### Impact

|Impact|
|---|
|Divulgación de información|
|Compromiso total|

---

## A06:2021 — VULNERABLE AND OUTDATED COMPONENTS

### Core Definition

|Item|Memorize|
|---|---|
|Meaning|Uso de componentes con vulnerabilidades conocidas|
|Includes|Bibliotecas, frameworks, SO|

---

### Causes

|Cause|
|---|
|Sin inventario de componentes|
|Sin aplicación de parches|
|Software sin soporte|

---

### Impact

|Impact|
|---|
|CVEs conocidos explotables|
|Compromiso total del sistema|

---

> 🧠 *Para recordar:* **Viejo = explotable**

---

## A07:2021 — IDENTIFICATION AND AUTHENTICATION FAILURES

### Core Definition

|Item|Memorize|
|---|---|
|Meaning|Mecanismos de autenticación débiles o rotos|
|Replaces|Broken Authentication|

---

### Examples

|Example|
|---|
|Contraseñas débiles|
|Sin MFA|
|Session fixation|
|Credential stuffing|

---

### Impact

|Impact|
|---|
|Account takeover — toma de control de la cuenta|
|Privilege escalation — escalada de privilegios|

---

## A08:2021 — SOFTWARE AND DATA INTEGRITY FAILURES

### Core Definition

|Item|Memorize|
|---|---|
|Meaning|Falta de verificación de integridad|
|Target|Actualizaciones, CI/CD, datos serializados|

---

### Examples

|Example|
|---|
|Unsigned updates — actualizaciones sin firmar|
|Insecure deserialization — deserialización insegura|
|Plugins comprometidos|

---

### Impact

|Impact|
|---|
|Ejecución remota de código|
|Compromiso de la cadena de suministro (supply chain)|

---

## A09:2021 — SECURITY LOGGING AND MONITORING FAILURES

### Core Definition

|Item|Memorize|
|---|---|
|Meaning|Incapacidad para detectar ataques|
|Root Cause|Logging faltante o débil|

---

### Examples

|Example|
|---|
|Sin registros|
|Registros no monitorizados|
|Sin alertas|

---

### Impact

|Impact|
|---|
|Detección retrasada de brechas|
|Persistencia extendida del atacante|

---

## A10:2021 — SERVER-SIDE REQUEST FORGERY (SSRF)

### Core Definition

|Item|Memorize|
|---|---|
|Meaning|El servidor realiza solicitudes no autorizadas|
|Controlled By|Entrada del atacante|

---

### SSRF Logic

|Step|Action|
|---|---|
|1|El atacante proporciona una URL|
|2|El servidor obtiene el recurso|
|3|Se accede a sistemas internos|

---

### Impact

|Impact|
|---|
|Escaneo de puertos internos|
|Acceso a los metadatos de la nube (cloud metadata)|
|Filtración de credenciales|

---

> 🧠 *Para recordar:* **El servidor se convierte en proxy del atacante**

---

## Extras de examen (Boson Practice Test)

|Concepto|Qué recordar|
|---|---|
|XXE (XML External Entity)|XML injection que se dirige a bibliotecas XML usando `<!DOCTYPE>`|
|IDOR (Insecure Direct Object Reference)|Vulnerabilidad que permite acceder a recursos no autorizados manipulando referencias de objetos|
|WS-Security|Proporciona integridad y confidencialidad para mensajes SOAP|

---

## Flashcards

| Term | Definition |
|------|------------|
| Broken Access Control (A01) | Falta de aplicación de restricciones a usuarios autenticados, permitiendo acciones no autorizadas |
| Cryptographic Failures (A02) | Uso inadecuado o ausencia de criptografía que afecta datos en tránsito y en reposo |
| Injection (A03) | Entrada no confiable interpretada como comandos debido a falta de validación de entrada |
| Insecure Design (A04) | Controles de seguridad faltantes o ineficaces en la fase de diseño, no es un error de codificación |
| Security Misconfiguration (A05) | Configuración de seguridad incorrecta en capas de aplicación, servidor o plataforma |
| Vulnerable and Outdated Components (A06) | Uso de bibliotecas, frameworks o SO con CVEs conocidos y sin parches |
| Identification and Authentication Failures (A07) | Mecanismos de autenticación débiles o rotos como contraseñas débiles, sin MFA, session fixation |
| Software and Data Integrity Failures (A08) | Falta de verificación de integridad en actualizaciones, pipelines CI/CD y datos serializados |
| Security Logging and Monitoring Failures (A09) | Incapacidad para detectar ataques debido a logging faltante o débil y sin alertas |
| SSRF — Server-Side Request Forgery (A10) | El servidor realiza solicitudes no autorizadas a sistemas internos controladas por la entrada del atacante |
| XXE — XML External Entity | XML injection que se dirige a bibliotecas XML usando declaraciones `<!DOCTYPE>` |
| IDOR — Insecure Direct Object Reference | Manipulación de referencias de objetos para acceder a recursos no autorizados |
| WS-Security | Protocolo que proporciona integridad y confidencialidad para mensajes SOAP |

---

## Preguntas de práctica

**1.** ¿Qué categoría del OWASP Top 10 (2021) reemplaza la categoría anterior "Broken Authentication"?
- a) A01 — Broken Access Control
- b) A07 — Identification and Authentication Failures
- c) A08 — Software and Data Integrity Failures
- d) A05 — Security Misconfiguration
**Answer:** B — A07:2021 Identification and Authentication Failures reemplaza la categoría anterior Broken Authentication.

**2.** Un atacante proporciona una URL a través de un campo de formulario y el servidor obtiene el recurso, exponiendo metadatos internos de la nube. ¿Qué vulnerabilidad es esta?
- a) SQL Injection
- b) Insecure Design
- c) Server-Side Request Forgery (SSRF)
- d) IDOR
**Answer:** C — SSRF ocurre cuando el servidor realiza solicitudes en nombre del atacante, accediendo a sistemas internos como endpoints de metadatos de la nube.

**3.** Un desarrollador omite el threat modeling durante la fase de diseño, resultando en controles de seguridad faltantes. ¿Bajo qué categoría OWASP se clasifica esto?
- a) A03 — Injection
- b) A04 — Insecure Design
- c) A05 — Security Misconfiguration
- d) A06 — Vulnerable and Outdated Components
**Answer:** B — Insecure Design (A04) es una falla de diseño, no un error de codificación — refleja la falta de threat modeling y validación de lógica de negocio.

**4.** ¿Cuál de las siguientes es una característica de Broken Access Control (A01)?
- a) Uso de algoritmos de cifrado débiles
- b) IDOR y manipulación de metadatos que permiten acceso no autorizado a recursos
- c) El servidor obtiene recursos internos a través de URLs controladas por el atacante
- d) Falta de logging y monitoreo de eventos de seguridad
**Answer:** B — Broken Access Control incluye IDOR, manipulación de metadatos y forzar navegación que evitan las verificaciones de autorización.

**5.** Una aplicación usa credenciales admin por defecto y muestra stack traces detallados en errores. ¿Bajo qué categoría OWASP caen estos problemas?
- a) A02 — Cryptographic Failures
- b) A07 — Identification and Authentication Failures
- c) A05 — Security Misconfiguration
- d) A09 — Security Logging and Monitoring Failures
**Answer:** C — Las credenciales por defecto y los mensajes de error detallados son ejemplos clásicos de Security Misconfiguration (A05).