# Módulo 15 · Parte 1 — SQL Injection Fundamentals

> **Módulo 15 — SQL Injection** · Parte 1 de 5 · Qué es SQL injection, por qué funciona, dónde se produce, payloads básicos de authentication bypass y símbolos de comentario.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
- [WHAT IS SQL INJECTION](#what-is-sql-injection)
- [WHY SQL INJECTION IS DANGEROUS](#why-sql-injection-is-dangerous)
- [SQL — BASIC CONCEPTS](#sql--basic-concepts)
- [WHERE SQL INJECTION OCCURS](#where-sql-injection-occurs)
- [UNDERSTANDING NORMAL SQL QUERY 🔥](#understanding-normal-sql-query-high-yield)
- [UNDERSTANDING SQL INJECTION QUERY](#understanding-sql-injection-query)
- [SQL INJECTION — CORE PRINCIPLE](#sql-injection--core-principle)
- [SQL INJECTION ATTACK GOALS](#sql-injection-attack-goals)
- [APPLICATION TECHNOLOGIES AFFECTED](#application-technologies-affected)
- [DATABASE TYPES TARGETED](#database-types-targeted)
- [HTTP METHODS USED IN SQL INJECTION](#http-methods-used-in-sql-injection)
- [SQL INJECTION — BASIC LOGIC FLOW](#sql-injection--basic-logic-flow)
- [COMMON SQL INJECTION TEST STRINGS](#common-sql-injection-test-strings)
- [COMMENT SYMBOLS IN SQL 🔥](#comment-symbols-in-sql-high-yield)
- [Extras de examen (Boson Practice Test)](#extras-de-examen-boson-practice-test)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **SQL Injection** — explota la entrada de usuario no sanitizada para ejecutar consultas SQL maliciosas en la base de datos.
- **Causa raíz** — la entrada del usuario se concatena en la consulta SQL sin una validación adecuada.
- **`' OR '1'='1` / `' OR 1=1--`** — payloads clásicos siempre-true: la cláusula WHERE siempre es verdadera → **authentication bypass**.
- **`--` vs `/* */`** — `--` es comentario de una línea, `/* */` de varias líneas; ambos hacen que se ignore el resto de la consulta.
- **Injection points** — formularios de login, campos de búsqueda, parámetros de URL, cookies y HTTP headers (cualquier entrada que toque SQL).
- **GET vs POST** — GET lleva los parámetros en la URL (query string); POST, en el body de la petición.
- **Lenguaje irrelevante** — ASP, ASP.NET, PHP, JSP, Python, Ruby o Perl: el objetivo es la base de datos (MySQL, MSSQL, Oracle, PostgreSQL, SQLite).
- **Impactos** — authentication/authorization bypass, information disclosure, data manipulation, data deletion y remote code execution.
- **Error Message Disclosure** — los errores verbosos de la BD revelan su estructura interna al atacante.
- **DELETE vs DROP** — DELETE elimina datos (filas); DROP elimina objetos (tablas, bases de datos).
- **Spacing technique** — usar espaciado extra en la consulta para evadir las firmas de IDS/WAF.

---

## Objetivos de aprendizaje

|#|Objective|
|---|---|
|1|Resumir conceptos de SQL injection|
|2|Demostrar varios tipos de SQL injection|
|3|Explicar la metodología de SQL injection|
|4|Demostrar diferentes técnicas de evasión|
|5|Explicar contramedidas de SQL injection|
|6|Usar diferentes herramientas de detección de SQL injection|

> 🧠 *Para recordar:* **Concept → Types → Method → Evasion → Defense → Tools**

---

## WHAT IS SQL INJECTION

|Item|Memorize Exactly|
|---|---|
|SQL Injection|Un ataque que explota la entrada de usuario no sanitizada para ejecutar consultas SQL maliciosas en una base de datos|

---

## WHY SQL INJECTION IS DANGEROUS

|Impact|
|---|
|Authentication bypass — evadir la autenticación|
|Authorization bypass — evadir la autorización|
|Information disclosure — divulgación de información|
|Data manipulation — manipulación de datos|
|Data deletion — eliminación de datos|
|Remote code execution — ejecución remota de código|

> 🧠 *Para recordar:* **Bypass → Read → Modify → Delete → Execute**

---

## SQL — BASIC CONCEPTS

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

> 🧠 *Para recordar:* **S I U D C D**

---

## WHERE SQL INJECTION OCCURS

|Location|
|---|
|Formularios de login|
|Campos de búsqueda|
|Parámetros de URL|
|Cookies|
|HTTP headers|

> 🧠 *Para recordar:* **En cualquier lugar donde la entrada toque SQL**

---

## UNDERSTANDING NORMAL SQL QUERY (HIGH YIELD)

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

> 🧠 *Para recordar:* **Una condición verdadera rompe la lógica**

---

## SQL INJECTION — CORE PRINCIPLE

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

> 🧠 *Para recordar:* **El lenguaje es irrelevante — SQL es el objetivo**

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

> 🧠 *Para recordar:* **Input → Query → Execute → Control**

---

## COMMON SQL INJECTION TEST STRINGS

|Payload|
|---|
|' OR '1'='1|
|' OR 1=1--|
|' OR 'a'='a|
|--|
|/*|

---

## COMMENT SYMBOLS IN SQL (HIGH YIELD)

|Symbol|Meaning|
|---|---|
|--|Comentario de una sola línea|
|/* */|Comentario de múltiples líneas|

> 🧠 *Para recordar:* **Comment = ignorar el resto de la consulta**

---

## Extras de examen (Boson Practice Test)

### SQL INJECTION SPACING TECHNIQUE

|Item|Memorize|
|---|---|
|Spacing trick|SQL injection usa espacios para evadir IDS o WAF|
|Example|SELECT * FROM 'mydb'.'users' 'WHERE' role='1'|
|Normal query|SELECT * FROM users WHERE role='1';|

---

## Flashcards

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

## Preguntas de práctica

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
