# Módulo 15 · Parte 2 — SQLi Types

> **Módulo 15 — SQL Injection** · Parte 2 de 5 · Clasificación de los tipos de SQL injection: in-band (error-based, UNION-based), inferential/blind (boolean-based, time-based) y out-of-band.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [MASTER CLASSIFICATION 🔥](#master-classification-high-yield)
- [1. IN-BAND SQL INJECTION](#1-in-band-sql-injection)
- [1.1 ERROR-BASED SQL INJECTION](#11-error-based-sql-injection)
- [1.2 UNION-BASED SQL INJECTION](#12-union-based-sql-injection)
- [2. INFERENTIAL (BLIND) SQL INJECTION](#2-inferential-blind-sql-injection)
- [2.1 BOOLEAN-BASED BLIND SQL INJECTION](#21-boolean-based-blind-sql-injection)
- [2.2 TIME-BASED BLIND SQL INJECTION](#22-time-based-blind-sql-injection)
- [3. OUT-OF-BAND SQL INJECTION](#3-out-of-band-sql-injection)
- [COMPLETE TYPE COMPARISON 🔥](#complete-type-comparison-high-yield)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **In-band SQLi** — usa el mismo canal para inyectar y recibir resultados; la más común y rápida. Subtipos: **Error-based** y **UNION-based**.
- **Inferential (Blind) SQLi** — no hay errores ni salida visible: el atacante infiere el resultado. Subtipos: **Boolean-based** y **Time-based**.
- **Out-of-band SQLi** — exfiltra datos por un canal distinto (**DNS** o **HTTP**); se usa cuando in-band no está disponible y blind es demasiado lenta.
- **Error-based** — aprovecha errores verbosos y un mal manejo de errores: filtran tipo de BD, nombres de tablas y columnas y estructura de la consulta.
- **UNION-based: prerrequisitos** — mismo número de columnas y tipos de datos compatibles (p. ej. `' UNION SELECT 1,2,3--`).
- **Boolean-based** — se compara la respuesta de la página con `' AND 1=1--` (TRUE) frente a `' AND 1=2--` (FALSE).
- **Time-based: funciones por BD** — MySQL `SLEEP()`, MSSQL `WAITFOR DELAY`, PostgreSQL `pg_sleep()`, Oracle `DBMS_LOCK.SLEEP`.
- **Velocidad** — Error-based/UNION-based (rápidas) > Out-of-band (media) > Boolean-based (lenta) > Time-based (muy lenta).

---

## MASTER CLASSIFICATION (HIGH YIELD)

|Category|Subtypes|
|---|---|
|In-band SQL Injection|Error-based, UNION-based|
|Inferential (Blind) SQL Injection|Boolean-based, Time-based|
|Out-of-band SQL Injection|DNS/HTTP-based|

> 🧠 *Para recordar:* **In-band → Blind → Out-of-band**

---

## 1. IN-BAND SQL INJECTION

### CEH DEFINITION

|Item|Memorize|
|---|---|
|In-band SQL Injection|El atacante utiliza el mismo canal de comunicación para inyectar SQL y recuperar resultados|

---

### CHARACTERISTICS

|Characteristic|
|---|
|La más común|
|Explotación rápida|
|Mismo canal de solicitud/respuesta|

---

## 1.1 ERROR-BASED SQL INJECTION

### DEFINITION

|Item|Memorize|
|---|---|
|Error-based SQL Injection|Explota los mensajes de error de la base de datos para extraer información|

---

### WHY IT WORKS

|Reason|
|---|
|Errores de base de datos verbosos|
|Manejo deficiente de errores|

---

### ATTACK LOGIC

|Step|Action|
|---|---|
|1|El atacante envía SQL malformado|
|2|La base de datos lanza un error|
|3|El error revela información de la BD|

---

### INFORMATION LEAKED

|Data|
|---|
|Tipo de base de datos|
|Nombres de tablas|
|Nombres de columnas|
|Estructura de la consulta|

---

### EXAM PAYLOADS

|Payload|
|---|
|'|
|"|
|' OR 1=1--|

---

> 🧠 *Para recordar:* **Error = información**

---

## 1.2 UNION-BASED SQL INJECTION

### DEFINITION

|Item|Memorize|
|---|---|
|UNION-based SQL Injection|Utiliza el operador UNION para combinar la consulta del atacante con una consulta legítima|

---

### PREREQUISITES (HIGH YIELD)

|Requirement|
|---|
|Número igual de columnas|
|Tipos de datos compatibles|

---

### ATTACK LOGIC

|Step|Action|
|---|---|
|1|Encontrar el número de columnas|
|2|Identificar columnas inyectables|
|3|Usar UNION SELECT|
|4|Extraer datos|

---

### EXAM PAYLOADS

|Payload|
|---|
|' UNION SELECT NULL--|
|' UNION SELECT 1,2,3--|

---

> 🧠 *Para recordar:* **UNION = combinar resultados**

---

## 2. INFERENTIAL (BLIND) SQL INJECTION

### CEH DEFINITION

|Item|Memorize|
|---|---|
|Blind SQL Injection|No se muestra ningún error de base de datos ni salida directa|

---

### CHARACTERISTICS

|Characteristic|
|---|
|Lenta|
|Sin errores visibles|
|Basada en inferencia|

---

## 2.1 BOOLEAN-BASED BLIND SQL INJECTION

### DEFINITION

|Item|Memorize|
|---|---|
|Boolean-based SQL Injection|El atacante infiere los resultados observando las respuestas TRUE/FALSE|

---

### ATTACK LOGIC

|Step|Action|
|---|---|
|1|Inyectar condición|
|2|Observar respuesta de la página|
|3|Inferir resultado|

---

### EXAM PAYLOADS

|Payload|
|---|
|' AND 1=1--|
|' AND 1=2--|

---

> 🧠 *Para recordar:* **Cambio en la página = respuesta**

---

## 2.2 TIME-BASED BLIND SQL INJECTION

### DEFINITION

|Item|Memorize|
|---|---|
|Time-based SQL Injection|Utiliza retardos temporales para inferir la ejecución de la consulta|

---

### ATTACK LOGIC

|Step|Action|
|---|---|
|1|Inyectar condición de retardo|
|2|Medir tiempo de respuesta|
|3|Inferir resultado|

---

### EXAM FUNCTIONS (DB-SPECIFIC)

|DB|Function|
|---|---|
|MySQL|SLEEP()|
|MSSQL|WAITFOR DELAY|
|PostgreSQL|pg_sleep()|
|Oracle|DBMS_LOCK.SLEEP|

---

> 🧠 *Para recordar:* **Delay = TRUE**

---

## 3. OUT-OF-BAND SQL INJECTION

### DEFINITION

|Item|Memorize|
|---|---|
|Out-of-band SQL Injection|Exfiltración de datos utilizando un canal diferente|

---

### WHEN USED

|Condition|
|---|
|In-band no disponible|
|Blind demasiado lenta|

---

### CHANNELS USED

|Channel|
|---|
|DNS|
|HTTP|

---

### ATTACK LOGIC

|Step|Action|
|---|---|
|1|Inyectar SQL|
|2|La BD dispara una solicitud externa|
|3|El atacante recibe los datos|

---

> 🧠 *Para recordar:* **Canal distinto = Out-of-band**

---

## COMPLETE TYPE COMPARISON (HIGH YIELD)

|Type|Speed|Output|
|---|---|---|
|Error-based|Rápida|Errores|
|UNION-based|Rápida|Resultados de la consulta|
|Boolean-based|Lenta|Comportamiento de la página|
|Time-based|Muy lenta|Retardo en la respuesta|
|Out-of-band|Media|Respuesta externa|

---

## Flashcards

| Term | Definition |
|------|------------|
| In-band SQL Injection | Utiliza el mismo canal de comunicación para inyectar SQL y recuperar resultados |
| Error-based SQLi | Explota los mensajes de error verbosos de la base de datos para extraer información |
| UNION-based SQLi | Utiliza el operador UNION para combinar la consulta del atacante con los resultados de una consulta legítima |
| Blind SQL Injection | No se muestra error ni salida directa; el atacante infiere los resultados indirectamente |
| Boolean-based Blind SQLi | Infiere los resultados observando las diferencias en la respuesta de la página TRUE/FALSE |
| Time-based Blind SQLi | Utiliza retardos temporales (por ejemplo, SLEEP()) para inferir el resultado de la ejecución de la consulta |
| Out-of-band SQLi | Exfiltración de datos utilizando un canal diferente como DNS o HTTP |
| UNION Prerequisites | Mismo número de columnas y tipos de datos compatibles entre las consultas |
| SLEEP() | Función de MySQL utilizada para SQL injection blind basada en tiempo |
| WAITFOR DELAY | Función de MSSQL utilizada para SQL injection blind basada en tiempo |
| pg_sleep() | Función de PostgreSQL utilizada para SQL injection blind basada en tiempo |
| Error = Information | Los errores verbosos filtran el tipo de base de datos, nombres de tablas, nombres de columnas y la estructura de la consulta |
| Speed Ranking | Error-based/UNION-based (rápido) > Out-of-band (medio) > Boolean (lento) > Time-based (muy lento) |

---

## Preguntas de práctica

**1.** Un atacante inyecta `' UNION SELECT 1,2,3--` y la página muestra los números 1, 2 y 3. ¿Qué tipo de SQL injection es este?
- a) Boolean-based blind SQLi
- b) Time-based blind SQLi
- c) UNION-based SQLi
- d) Out-of-band SQLi
**Answer:** c — UNION-based SQL injection combina la consulta del atacante con la consulta legítima usando UNION SELECT.

**2.** ¿Cuáles son los dos prerrequisitos para un ataque exitoso de UNION-based SQL injection?
- a) Mismo nombre de tabla y mismo usuario de base de datos
- b) Mismo número de columnas y tipos de datos compatibles
- c) Mismo método HTTP y misma cookie de sesión
- d) Misma codificación y mismo conjunto de caracteres
**Answer:** b — La consulta UNION inyectada debe coincidir con el número de columnas de la consulta original y tener tipos de datos compatibles.

**3.** Un atacante observa que una página web devuelve contenido diferente cuando se inyecta `' AND 1=1--` versus `' AND 1=2--`. ¿Qué tipo de SQLi es este?
- a) Error-based
- b) UNION-based
- c) Boolean-based blind
- d) Time-based blind
**Answer:** c — Boolean-based blind SQLi infiere los datos observando los cambios en el contenido de la página entre condiciones verdaderas y falsas.

**4.** ¿Qué función de MySQL se utiliza en time-based blind SQL injection?
- a) WAITFOR DELAY
- b) pg_sleep()
- c) SLEEP()
- d) DBMS_LOCK.SLEEP
**Answer:** c — SLEEP() es específico de MySQL; WAITFOR DELAY es de MSSQL, pg_sleep() es de PostgreSQL, DBMS_LOCK.SLEEP es de Oracle.

**5.** ¿Cuándo usaría un atacante out-of-band SQL injection en lugar de in-band?
- a) Cuando la base de datos no tiene mensajes de error
- b) Cuando los canales in-band no están disponibles o el blind SQLi es demasiado lento
- c) Cuando la inyección UNION-based falla por incompatibilidad de columnas
- d) Cuando el objetivo utiliza consultas parametrizadas
**Answer:** b — Out-of-band se utiliza cuando los canales in-band están bloqueados y los métodos blind son demasiado lentos para la exfiltración de datos.
