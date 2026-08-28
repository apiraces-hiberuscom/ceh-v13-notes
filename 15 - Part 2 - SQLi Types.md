# OBJECTIVE 02 — TYPES OF SQL INJECTION

---

## MASTER CLASSIFICATION (EXAM MUST)

|Category|Subtypes|
|---|---|
|In-band SQL Injection|Error-based, UNION-based|
|Inferential (Blind) SQL Injection|Boolean-based, Time-based|
|Out-of-band SQL Injection|DNS/HTTP-based|

MEMORY HOOK:  
**In-band → Blind → Out-of-band**

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

### EXAM PAYLOADS (RECOGNITION)

|Payload|
|---|
|'|
|"|
|' OR 1=1--|

---

### MEMORY HOOK

**Error = information**

---

## 1.2 UNION-BASED SQL INJECTION

### DEFINITION

|Item|Memorize|
|---|---|
|UNION-based SQL Injection|Utiliza el operador UNION para combinar la consulta del atacante con una consulta legítima|

---

### PREREQUISITES (VERY IMPORTANT)

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

### MEMORY HOOK

**UNION = merge results**

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

### MEMORY HOOK

**Page change = answer**

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

### MEMORY HOOK

**Delay = TRUE**

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

### MEMORY HOOK

**Different channel = Out-of-band**

---

## COMPLETE TYPE COMPARISON (EXAM GOLD)

|Type|Speed|Output|
|---|---|---|
|Error-based|Fast|Errores|
|UNION-based|Fast|Resultados de la consulta|
|Boolean-based|Slow|Comportamiento de la página|
|Time-based|Very slow|Retardo en la respuesta|
|Out-of-band|Medium|Respuesta externa|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| In-band SQL Injection | Utiliza el mismo canal de comunicación para inyectar SQL y recuperar resultados |
| Error-based SQLi | Explota los mensajes de error verbosos de la base de datos para extraer información |
| UNION-based SQLi | Utiliza el operador UNION para combinar la consulta del atacante con los resultados de una consulta legítima |
| Blind SQL Injection | No se muestra error ni salida directa; el atacante infiere los resultados indirectamente |
| Boolean-based Blind SQLi | Infere los resultados observando las diferencias en la respuesta de la página TRUE/FALSE |
| Time-based Blind SQLi | Utiliza retardos temporales (por ejemplo, SLEEP()) para inferir los resultados de la ejecución de la consulta |
| Out-of-band SQLi | Exfiltración de datos utilizando un canal diferente como DNS o HTTP |
| UNION Prerequisites | Mismo número de columnas y tipos de datos compatibles entre las consultas |
| SLEEP() | Función de MySQL utilizada para SQL injection blind basada en tiempo |
| WAITFOR DELAY | Función de MSSQL utilizada para SQL injection blind basada en tiempo |
| pg_sleep() | Función de PostgreSQL utilizada para SQL injection blind basada en tiempo |
| Error = Information | Los errores verbosos filtran el tipo de base de datos, nombres de tablas, nombres de columnas y la estructura de la consulta |
| Speed Ranking | Error-based/UNION-based (rápido) > Out-of-band (medio) > Boolean (lento) > Time-based (muy lento) |

---

# PRACTICE QUESTIONS

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
