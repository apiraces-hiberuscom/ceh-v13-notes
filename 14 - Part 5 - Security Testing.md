# Módulo 14 · Parte 5 — Security Testing

> **Módulo 14 — Hacking Web Applications** · Parte 5 de 5 · Técnicas de pruebas de seguridad de web applications: tipos de testing, entrada, autenticación, sesiones, autorización, cliente, errores, file upload, lógica de negocio, APIs y herramientas.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [1. WEB APPLICATION SECURITY TESTING — CEH DEFINITION](#1-web-application-security-testing--ceh-definition)
- [2. SECURITY TESTING GOALS](#2-security-testing-goals)
- [3. TYPES OF WEB APPLICATION SECURITY TESTING](#3-types-of-web-application-security-testing)
- [4. INPUT VALIDATION TESTING](#4-input-validation-testing)
- [5. AUTHENTICATION TESTING](#5-authentication-testing)
- [6. SESSION MANAGEMENT TESTING](#6-session-management-testing)
- [7. AUTHORIZATION TESTING](#7-authorization-testing)
- [8. CLIENT-SIDE TESTING](#8-client-side-testing)
- [9. ERROR HANDLING AND LOGGING TESTING](#9-error-handling-and-logging-testing)
- [10. FILE UPLOAD TESTING](#10-file-upload-testing)
- [11. BUSINESS LOGIC TESTING](#11-business-logic-testing)
- [12. API SECURITY TESTING](#12-api-security-testing)
- [13. AUTOMATED VS MANUAL TESTING](#13-automated-vs-manual-testing)
- [14. WEB APPLICATION SECURITY TESTING TOOLS](#14-web-application-security-testing-tools)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **Black-box / White-box / Gray-box** — sin conocimiento / conocimiento completo del código fuente / conocimiento parcial (Black = Blind, White = All, Gray = Some).
- **Input Validation Testing** — prueba parámetros de URL, campos de formulario, cookies, HTTP headers y payloads JSON/XML; detecta SQLi, XSS, command y LDAP injection.
- **Authentication Testing** — fortaleza de contraseñas, login bypass, account lockout, default credentials, sin MFA; herramientas: Burp Suite, THC Hydra, Medusa, Ncrack.
- **Session Management Testing** — aleatoriedad del session ID, secure flags y timeout; ataques: session fixation (el atacante fija un session ID conocido antes del login), session hijacking, cookie theft.
- **AuthN ≠ AuthZ** — Authentication verifica la identidad; Authorization Testing prueba qué puede hacer el usuario ya autenticado (IDOR, privilege escalation, forced browsing, parameter tampering).
- **Client-Side Testing** — la seguridad en el cliente NO basta: siempre validación en el servidor (también busca hardcoded secrets y lógica expuesta).
- **Error handling** — verbose errors, stack traces e información de depuración → information disclosure que ayuda al reconocimiento.
- **File Upload Testing** — tipo, tamaño y permisos de ejecución del archivo; evita el web shell upload (p. ej. un PHP disfrazado de imagen).
- **Business Logic Testing / automated vs manual** — workflow bypass, transaction tampering, race conditions; el testing automatizado (rápido, escalable) suele no detectarlos, el manual (preciso, contextual) sí.
- **Herramientas** — Burp Suite (intercepción y pruebas), OWASP ZAP (vulnerability scanning), Nikto (web server), SQLmap (SQL injection), Acunetix (escaneo automatizado).
- **Objetivos del Módulo 14 (repaso)** — 1 Web application concepts · 2 Web application threats · 3 Hacking methodology · 4 APIs and webhooks · 5 Security testing.
- **Gancho del módulo** — **Concept → Threat → Method → API → Test**.

---

## 1. WEB APPLICATION SECURITY TESTING — CEH DEFINITION

|Item|Memorize|
|---|---|
|Web Application Security Testing|El proceso de identificar debilidades de seguridad en una aplicación web analizando su funcionalidad, lógica e implementación|

---

## 2. SECURITY TESTING GOALS

|Goal|
|---|
|Identificar vulnerabilidades|
|Validar controles de seguridad|
|Prevenir acceso no autorizado|
|Proteger datos sensibles|

---

## 3. TYPES OF WEB APPLICATION SECURITY TESTING

|Testing Type|Description|
|---|---|
|Black-box testing|Sin conocimiento de la aplicación|
|White-box testing|Conocimiento completo del código fuente|
|Gray-box testing|Conocimiento parcial|

> 🧠 *Para recordar:* **Black = Blind, White = All, Gray = Some**

---

## 4. INPUT VALIDATION TESTING

### Definition

|Item|Memorize|
|---|---|
|Input Validation Testing|Prueba de cómo la aplicación maneja la entrada proporcionada por el usuario|

---

### Parameters Tested

|Parameter|
|---|
|Parámetros de URL|
|Campos de formulario|
|Cookies|
|HTTP headers (cabeceras)|
|Payloads JSON/XML|

---

### Common Attacks Identified

|Attack|
|---|
|SQL Injection|
|XSS|
|Command Injection|
|LDAP Injection|

---

### Testing Techniques

|Technique|
|---|
|Inyección de caracteres especiales|
|Boundary value testing — prueba de valores límite|
|Entrada inesperada|
|Manipulación de la codificación (encoding)|

---

> 🧠 *Para recordar:* **Input = superficie de ataque (attack surface)**

---

## 5. AUTHENTICATION TESTING

### Definition

|Item|Memorize|
|---|---|
|Authentication Testing|Prueba de mecanismos de inicio de sesión y verificación de identidad|

---

### Areas Tested

|Area|
|---|
|Fortaleza de contraseñas|
|Login bypass — eludir el inicio de sesión|
|Reutilización de credenciales|
|Account lockout — bloqueo de cuentas|

---

### Common Weaknesses

|Weakness|
|---|
|Default credentials — credenciales por defecto|
|Contraseñas débiles|
|Sin MFA|
|Credenciales predecibles|

---

### Tools

|Tool|
|---|
|Burp Suite|
|THC Hydra|
|Medusa|
|Ncrack|

---

> 🧠 *Para recordar:* **Autenticación débil = account takeover**

---

## 6. SESSION MANAGEMENT TESTING

### Definition

|Item|Memorize|
|---|---|
|Session Management Testing|Evaluación de cómo se crean, mantienen y terminan las sesiones|

---

### Session Components

|Component|
|---|
|Session ID|
|Cookies|
|Tokens|

---

### Attacks Identified

|Attack|
|---|
|Session fixation|
|Session hijacking|
|Cookie theft|

---

### Testing Focus

|Focus|
|---|
|Aleatoriedad del Session ID|
|Secure flags — flags de seguridad de las cookies|
|Timeout enforcement — expiración de la sesión|

---

> 🧠 *Para recordar:* **Robar la sesión = robar al usuario**

---

## 7. AUTHORIZATION TESTING

### Definition

|Item|Memorize|
|---|---|
|Authorization Testing|Prueba de mecanismos de control de acceso después de la autenticación|

---

### Test Areas

|Area|
|---|
|Role-based access — acceso basado en roles|
|Privilege escalation — escalada de privilegios|
|IDOR|

---

### Techniques

|Technique|
|---|
|Parameter tampering — manipulación de parámetros|
|Forced browsing — navegación forzada|
|Manipulación de roles|

---

> 🧠 *Para recordar:* **AuthN ≠ AuthZ**

---

## 8. CLIENT-SIDE TESTING

### Definition

|Item|Memorize|
|---|---|
|Client-Side Testing|Prueba de controles de seguridad implementados en el navegador|

---

### Components Tested

|Component|
|---|
|JavaScript|
|HTML|
|Cookies|
|Local storage|

---

### Common Issues

|Issue|
|---|
|Validación del lado del cliente|
|Hardcoded secrets — secretos escritos en el código|
|Lógica expuesta|

---

### Exam Trap

|Trap|Correct|
|---|---|
|La seguridad del lado del cliente es suficiente|NO|
|Se requiere validación del lado del servidor|SÍ|

---

## 9. ERROR HANDLING AND LOGGING TESTING

|Focus|
|---|
|Verbose error messages — mensajes de error detallados|
|Stack traces|
|Información de depuración|

---

### Impact

|Impact|
|---|
|Information disclosure — divulgación de información|
|Apoyo al reconocimiento|

---

## 10. FILE UPLOAD TESTING

|Test|
|---|
|Validación de tipo de archivo|
|Límites de tamaño de archivo|
|Permisos de ejecución|

---

### Attacks

|Attack|
|---|
|Web shell upload|
|Malware upload|

---

## 11. BUSINESS LOGIC TESTING

|Focus|
|---|
|Workflow bypass — saltarse el flujo de trabajo|
|Transaction tampering — manipulación de transacciones|
|Race conditions — condiciones de carrera|

---

> 🧠 *Para recordar:* **Los logic flaws eluden los controles de seguridad**

---

## 12. API SECURITY TESTING

|Area|
|---|
|Autenticación|
|Autorización|
|Rate limiting|
|Validación de entrada|

---

### Tools

|Tool|
|---|
|Postman|
|Burp Suite|
|OWASP ZAP|

---

## 13. AUTOMATED VS MANUAL TESTING

|Type|Characteristics|
|---|---|
|Automated|Rápido, escalable|
|Manual|Preciso, contextual|

---

## 14. WEB APPLICATION SECURITY TESTING TOOLS

|Tool|Purpose|
|---|---|
|Burp Suite|Intercepción y pruebas|
|OWASP ZAP|Vulnerability scanning — escaneo de vulnerabilidades|
|Nikto|Escaneo de web servers|
|SQLmap|SQL injection|
|Acunetix|Escaneo automatizado|

---

## Flashcards

| Term | Definition |
|------|------------|
| Black-box Testing | Prueba sin conocimiento previo del funcionamiento interno de la aplicación |
| White-box Testing | Prueba con acceso completo al código fuente y arquitectura interna |
| Gray-box Testing | Prueba con conocimiento parcial de la aplicación (por ejemplo, credenciales de usuario) |
| Input Validation Testing | Prueba de cómo la aplicación maneja la entrada del usuario para encontrar errores de inyección |
| Authentication Testing | Prueba de mecanismos de inicio de sesión y verificación de identidad en busca de debilidades |
| Session Management Testing | Evaluación de cómo se crean, mantienen y terminan las sesiones de forma segura |
| Authorization Testing | Prueba de mecanismos de control de acceso después de la autenticación (AuthZ ≠ AuthN) |
| Client-Side Testing | Prueba de controles de seguridad implementados en el navegador (JS, HTML, cookies, local storage) |
| Business Logic Testing | Prueba de bypass de flujo de trabajo, manipulación de transacciones y condiciones de carrera |
| File Upload Testing | Validación de verificación de tipo de archivo, límites de tamaño y permisos de ejecución en cargas |
| Session Fixation | Ataque donde un atacante establece un Session ID conocido antes de que el usuario se autentique |
| IDOR in Authorization | Manipulación de referencias de objetos para acceder a recursos más allá del alcance autorizado del usuario |
| Verbose Errors | Mensajes de error detallados que revelan detalles internos de la aplicación a los atacantes |
| Web Shell Upload | Ataque donde se carga un script malicioso para obtener acceso remoto al servidor |

---

## Preguntas de práctica

**1.** Un penetration tester recibe el código fuente de la aplicación y el esquema de la base de datos antes de que comience la prueba. ¿Qué enfoque de prueba es este?
- a) Black-box testing
- b) White-box testing
- c) Gray-box testing
- d) Automated testing
**Respuesta:** B — White-box testing proporciona conocimiento completo del código fuente y la arquitectura interna antes de que comience la prueba.

**2.** ¿Qué área de prueba se enfoca en verificar que los session IDs sean aleatorios, tengan flags seguros y apliquen timeouts?
- a) Input Validation Testing
- b) Authorization Testing
- c) Session Management Testing
- d) Client-Side Testing
**Respuesta:** C — Session Management Testing evalúa la aleatoriedad del session ID, los flags seguros de cookies y la aplicación de timeouts.

**3.** Un atacante carga un archivo PHP disfrazado de imagen a través de un formulario web. ¿Qué área de prueba debería haber detectado esta vulnerabilidad?
- a) Authentication Testing
- b) Business Logic Testing
- c) File Upload Testing
- d) Error Handling Testing
**Respuesta:** C — File Upload Testing valida el tipo de archivo, la extensión y los permisos de ejecución para prevenir cargas de web shells.

**4.** ¿Cuál es la diferencia clave entre las pruebas de Authentication (AuthN) y Authorization (AuthZ)?
- a) AuthN prueba controles de acceso; AuthZ prueba mecanismos de inicio de sesión
- b) AuthN prueba verificación de identidad; AuthZ prueba permisos de acceso después de la autenticación
- c) Son lo mismo
- d) AuthN es solo para APIs; AuthZ es solo para aplicaciones web
**Respuesta:** B — Authentication (AuthN) verifica la identidad; Authorization (AuthZ) prueba lo que el usuario autenticado está autorizado a hacer.

**5.** ¿Cuál de las siguientes es una limitación de la prueba automatizada de seguridad en comparación con la prueba manual?
- a) La prueba automatizada es más lenta que la manual
- b) La prueba automatizada no puede detectar errores de lógica de negocio con precisión
- c) La prueba automatizada requiere acceso al código fuente
- d) La prueba manual no puede encontrar vulnerabilidades de inyección
**Respuesta:** B — La prueba automatizada es rápida y escalable pero a menudo pierde errores de lógica de negocio contextuales que requieren juicio humano.