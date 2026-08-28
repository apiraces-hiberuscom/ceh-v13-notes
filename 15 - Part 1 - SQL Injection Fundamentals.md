# MODULE 15 — SQL INJECTION

---

## LEARNING OBJECTIVES (EXAM MUST-MEMORIZE)

|#|Objective|
|---|---|
|1|Resumir conceptos de SQL injection|
|2|Demostrar varios tipos de SQL injection|
|3|Explicar la metodología de SQL injection|
|4|Demostrar diferentes técnicas de evasión|
|5|Explicar contramedidas de SQL injection|
|6|Usar diferentes herramientas de detección de SQL injection|

MEMORY HOOK:  
**Concept → Types → Method → Evasion → Defense → Tools**

---

## WHAT IS SQL INJECTION (CEH DEFINITION)

|Item|Memorize Exactly|
|---|---|
|SQL Injection|Un ataque que explota la entrada de usuario no sanitizada para ejecutar consultas SQL maliciosas en una base de datos|

---

## WHY SQL INJECTION IS DANGEROUS

|Impact|
|---|
|Bypass de autenticación|
|Bypass de autorización|
|Divulgación de información|
|Manipulación de datos|
|Eliminación de datos|
|Ejecución remota de código|

MEMORY HOOK:  
**Bypass → Read → Modify → Delete → Execute**

---

## SQL — BASIC CONCEPTS (NO ASSUMPTIONS)

### WHAT IS SQL

|Item|Memorize|
|---|---|
|SQL|Structured Query Language|
|Purpose|Comunicarse con bases de datos|
|Used For|Crear, leer, actualizar, eliminar datos|

---

### COMMON SQL COMMANDS

|Command|Purpose|
|---|---|
|SELECT|Recuperar datos|
|INSERT|Agregar datos|
|UPDATE|Modificar datos|
|DELETE|Eliminar datos|
|CREATE|Crear objetos|
|DROP|Eliminar objetos|

MEMORY HOOK:  
**S I U D C D**

---

## WHERE SQL INJECTION OCCURS

|Location|
|---|
|Formularios de login|
|Campos de búsqueda|
|Parámetros de URL|
|Cookies|
|HTTP headers|

MEMORY HOOK:  
**En cualquier lugar donde la entrada toque SQL**

---

## UNDERSTANDING NORMAL SQL QUERY (EXAM CRITICAL)

### NORMAL LOGIN QUERY

|Example|
|---|
|SELECT * FROM Users WHERE username='smith' AND password='simpson';|

---

### NORMAL EXECUTION FLOW

|Step|Description|
|---|---|
|1|El usuario envía la entrada|
|2|La aplicación construye la consulta SQL|
|3|La base de datos ejecuta la consulta|
|4|Se retorna el resultado|

---

## UNDERSTANDING SQL INJECTION QUERY

### MALICIOUS INPUT EXAMPLE

|Field|Value|
|---|---|
|Username|blah' OR '1'='1|
|Password|cualquiera|

---

### RESULTING QUERY

|Query|
|---|
|SELECT * FROM Users WHERE username='blah' OR '1'='1' AND password='anything';|

---

### WHY IT WORKS

|Reason|
|---|
|OR '1'='1' siempre es verdadero|
|La cláusula WHERE siempre se evalúa como verdadera|
|La autenticación se evita|

MEMORY HOOK:  
**Una condición verdadera rompe la lógica**

---

## SQL INJECTION — CORE PRINCIPLE (EXAM SENTENCE)

|Memorize|
|---|
|SQL injection ocurre porque la entrada de usuario se concatena en consultas SQL sin una validación adecuada|

---

## SQL INJECTION ATTACK GOALS

|Goal|
|---|
|Evadir autenticación|
|Extraer datos de la base de datos|
|Modificar registros de la base de datos|
|Ejecutar operaciones administrativas|
|Comprometer el sistema backend|

---

## APPLICATION TECHNOLOGIES AFFECTED

|Technology|
|---|
|ASP|
|ASP.NET|
|PHP|
|JSP|
|Python|
|Ruby|
|Perl|

MEMORY HOOK:  
**El lenguaje es irrelevante — SQL es el objetivo**

---

## DATABASE TYPES TARGETED

|Database|
|---|
|MySQL|
|MSSQL|
|Oracle|
|PostgreSQL|
|SQLite|

---

## HTTP METHODS USED IN SQL INJECTION

|Method|Description|
|---|---|
|GET|Parámetros en la URL|
|POST|Parámetros en el body|

---

## SQL INJECTION — BASIC LOGIC FLOW

|Step|Action|
|---|---|
|1|El atacante encuentra un campo de entrada|
|2|Envía SQL malicioso|
|3|La aplicación construye la consulta|
|4|La base de datos ejecuta el SQL inyectado|
|5|El atacante obtiene control|

MEMORY HOOK:  
**Input → Query → Execute → Control**

---

## COMMON SQL INJECTION TEST STRINGS (EXAM RECOGNITION)

|Payload|
|---|
|' OR '1'='1|
|' OR 1=1--|
|' OR 'a'='a|
|--|
|/*|

---

## COMMENT SYMBOLS IN SQL (VERY IMPORTANT)

|Symbol|Meaning|
|---|---|
|--|Comentario de una sola línea|
|/* */|Comentario de múltiples líneas|

MEMORY HOOK:  
**Comment = ignorar el resto de la consulta**

---


## EXAM EXTRAS (Boson Practice Test)

### SQL INJECTION SPACING TECHNIQUE

|Item|Memorize|
|---|---|
|Spacing trick|SQL injection usa espacios para evadir IDS o WAF|
|Example|SELECT * FROM 'mydb'.'users' 'WHERE' role='1'|
|Normal query|SELECT * FROM users WHERE role='1';|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| SQL Injection | Ataque que explota la entrada de usuario no sanitizada para ejecutar consultas SQL maliciosas en una base de datos |
| Core Root Cause | La entrada de usuario se concatena en consultas SQL sin una validación adecuada |
| `' OR '1'='1` | Payload clásico siempre-true que evita la autenticación |
| `--` (double dash) | Símbolo de comentario de una sola línea en SQL que se usa para ignorar el resto de una consulta |
| `/* */` | Símbolos de comentario de múltiples líneas soportados por todas las principales bases de datos |
| Authentication Bypass | Obtener acceso sin credenciales válidas haciendo que la cláusula WHERE siempre sea verdadera |
| Error Message Disclosure | Errores detallados de la base de datos que revelan la estructura interna a los atacantes |
| GET Parameter Injection | SQLi a través de parámetros de la query string de la URL |
| POST Parameter Injection | SQLi a través de datos del body de la petición HTTP |
| Injection Points | Formularios de login, campos de búsqueda, parámetros de URL, cookies, HTTP headers |
| Affected Technologies | ASP, ASP.NET, PHP, JSP, Python, Ruby, Perl — el lenguaje es irrelevante, SQL es el objetivo |
| Target Databases | MySQL, MSSQL, Oracle, PostgreSQL, SQLite |
| Spacing Technique | Usar espacio en blanco extra para evadir la detección de firmas de IDS/WAF |

---

# PRACTICE QUESTIONS

**1.** ¿Qué payload SQL se usa comúnmente para prober vulnerabilidades de authentication bypass?
- a) `' OR 1=1--`
- b) `SELECT * FROM users`
- c) `DROP TABLE users`
- d) `UPDATE users SET role='admin'`
**Answer:** a — `' OR 1=1--` hace que la cláusula WHERE siempre sea verdadera, evitando las verificaciones de autenticación.

**2.** ¿Cuál es la razón principal por la que funciona SQL injection?
- a) La base de datos está desactualizada
- b) La entrada de usuario se concatena en consultas SQL sin una validación adecuada
- c) El firewall está mal configurado
- d) No se fuerza HTTPS
**Answer:** b — El principio fundamental es que la entrada de usuario no sanitizada se convierte en parte de la estructura de la consulta SQL.

**3.** ¿Cuál de los siguientes NO es un punto de inyección para SQL injection?
- a) Formularios de login
- b) Parámetros de URL
- c) Binarios compilados
- d) Cookies
**Answer:** c — SQL injection apunta a cualquier cosa que toque SQL: formularios de login, campos de búsqueda, parámetros de URL, cookies y HTTP headers.

**4.** ¿Qué hace el símbolo `--` en un payload de SQL injection?
- a) Ejecuta múltiples consultas
- b) Comenta el resto de la consulta
- c) Codifica el payload
- d) Crea una nueva conexión a la base de datos
**Answer:** b — `--` es un comentario de una sola línea en SQL que hace que la base de datos ignore todo lo que está después.

**5.** ¿Por qué el lenguaje de programación de la aplicación web es irrelevante para SQL injection?
- a) SQL injection ataca la base de datos, no el lenguaje de la aplicación
- b) Todos los lenguajes usan la misma sintaxis SQL
- c) Solo las aplicaciones PHP son vulnerables
- d) SQL injection solo funciona en código legacy
**Answer:** a — SQL injection ataca directamente la capa de la base de datos; cualquier lenguaje que construya consultas SQL puede ser vulnerable.
