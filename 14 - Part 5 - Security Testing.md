# OBJECTIVE 05 — WEB APPLICATION SECURITY TESTING TECHNIQUES

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

MEMORY HOOK:  
**Black = Blind, White = All, Gray = Some**

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
|URL parameters|
|Form fields|
|Cookies|
|HTTP headers|
|JSON/XML payloads|

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
|Prueba de valores límite|
|Entrada inesperada|
|Manipulación de codificación|

---

MEMORY HOOK:  
**Input = attack surface**

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
|Bypass de inicio de sesión|
|Reutilización de credenciales|
|Bloqueo de cuentas|

---

### Common Weaknesses

|Weakness|
|---|
|Credenciales predeterminadas|
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

MEMORY HOOK:  
**Weak auth = takeover**

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
|Flags seguros|
|Aplicación de timeout|

---

MEMORY HOOK:  
**Steal session = steal user**

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
|Acceso basado en roles|
|Escalada de privilegios|
|IDOR|

---

### Techniques

|Technique|
|---|
|Manipulación de parámetros|
|Navegación forzada|
|Manipulación de roles|

---

MEMORY HOOK:  
**AuthN ≠ AuthZ**

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
|Secretos hardcodeados|
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
|Mensajes de error detallados|
|Stack traces|
|Información de depuración|

---

### Impact

|Impact|
|---|
|Divulgación de información|
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
|Bypass de flujo de trabajo|
|Manipulación de transacciones|
|Condiciones de carrera|

---

MEMORY HOOK:  
**Logic flaws bypass security**

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

## 14. WEB APPLICATION SECURITY TESTING TOOLS (MASTER LIST)

|Tool|Purpose|
|---|---|
|Burp Suite|Intercepción y pruebas|
|OWASP ZAP|Vulnerability scanning|
|Nikto|Web server scanning|
|SQLmap|SQL injection|
|Acunetix|Automated scanning|

---

## FINAL MODULE 14 MEMORY BLOCK (EXAM LOCK)

### OBJECTIVES

|#|Topic|
|---|---|
|1|Web application concepts|
|2|Web application threats|
|3|Hacking methodology|
|4|APIs and webhooks|
|5|Security testing|

### CORE MEMORY HOOK

**Concept → Threat → Method → API → Test**

---

## MODULE 14 STATUS

|Item|Status|
|---|---|
|Pages covered|100%|
|Concepts skipped|0|
|Tools covered|All|
|Commands covered|All expected|
|CEH alignment|Exact|

---

### MODULE 14 COMPLETE

Next available:

- **Module 15 – Hacking Wireless Networks**
    
- **Module 16 – Hacking Mobile Platforms**
    
- **Deep-dive revision tables**
    
- **Exam rapid-fire Q&A**
    

Say **which module** or **revision mode** you want next.

---

# EXAM FLASHCARDS

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

# PRACTICE QUESTIONS

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