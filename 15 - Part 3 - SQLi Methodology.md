# OBJECTIVE 03 — SQL INJECTION METHODOLOGY

---

## CEH CORE STATEMENT (MEMORIZE)

|Item|Memorize|
|---|---|
|SQL Injection Methodology|Un proceso paso a paso utilizado por atacantes para detectar, explotar y extraer datos de consultas SQL vulnerables|

---

## SQL INJECTION METHODOLOGY — PHASES

|Phase No.|Phase|
|---|---|
|1|Detect SQL Injection|
|2|Identify Database|
|3|Enumerate Database Structure|
|4|Extract Data|
|5|Bypass Authentication|
|6|Execute OS Commands|
|7|Maintain Access|

MEMORY HOOK:  
**Detect → Identify → Enumerate → Extract → Bypass → Execute → Persist**

---

## PHASE 1 — DETECT SQL INJECTION

### Goal

|Goal|
|---|
|Determinar si la aplicación es vulnerable|

---

### DETECTION TECHNIQUES

|Technique|
|---|
|Single quote injection|
|Boolean testing|
|Time delay testing|
|Error message observation|

---

### TEST PAYLOADS (EXAM RECOGNITION)

|Payload|
|---|
|'|
|"|
|' OR '1'='1|
|' AND 1=2--|

---

### SUCCESS INDICATORS

|Indicator|
|---|
|Database error|
|Page content change|
|Response delay|

MEMORY HOOK:  
**Error / Change / Delay = injectable**

---

## PHASE 2 — IDENTIFY DATABASE TYPE

### Goal

|Goal|
|---|
|Determinar el DBMS backend|

---

### IDENTIFICATION METHODS

|Method|
|---|
|Error message fingerprinting|
|DB-specific functions|
|Version banners|

---

### DB-SPECIFIC FUNCTIONS (EXAM MUST)

|Database|Function|
|---|---|
|MySQL|@@version|
|MSSQL|@@version|
|Oracle|banner from v$version|
|PostgreSQL|version()|

---

MEMORY HOOK:  
**Version function reveals DB**

---

## PHASE 3 — ENUMERATE DATABASE STRUCTURE

### Goal

|Goal|
|---|
|Descubrir tablas, columnas y esquemas|

---

### ENUMERATION TARGETS

|Target|
|---|
|Database name|
|Table names|
|Column names|
|User privileges|

---

### INFORMATION_SCHEMA (CRITICAL)

|Item|Description|
|---|---|
|information_schema|Metadata database|

---

### IMPORTANT TABLES (EXAM GOLD)

|Table|
|---|
|information_schema.tables|
|information_schema.columns|
|information_schema.schemata|

---

MEMORY HOOK:  
**Schema stores structure**

---

## PHASE 4 — EXTRACT DATA

### Goal

|Goal|
|---|
|Recuperar datos sensibles|

---

### DATA TYPES EXTRACTED

|Data|
|---|
|Usernames|
|Password hashes|
|Emails|
|Credit card details|

---

### EXTRACTION METHODS

|Method|
|---|
|UNION-based extraction|
|Blind extraction|
|Time-based extraction|

---

MEMORY HOOK:  
**Structure first, data next**

---

## PHASE 5 — BYPASS AUTHENTICATION

### Goal

|Goal|
|---|
|Obtener acceso no autorizado|

---

### COMMON TECHNIQUES

|Technique|
|---|
|Always-true condition|
|Commenting query|
|Login logic manipulation|

---

### EXAM PAYLOADS

|Payload|
|---|
|' OR '1'='1--|
|admin'--|

---

MEMORY HOOK:  
**TRUE bypasses auth**

---

## PHASE 6 — EXECUTE OS COMMANDS

### Goal

|Goal|
|---|
|Ejecutar comandos a nivel de sistema|

---

### REQUIREMENTS

|Requirement|
|---|
|DB supports command execution|
|High privileges|

---

### DB-SPECIFIC METHODS

|Database|Method|
|---|---|
|MSSQL|xp_cmdshell|
|MySQL|INTO OUTFILE|
|Oracle|Java stored procedures|

---

MEMORY HOOK:  
**DB → OS bridge**

---

## PHASE 7 — MAINTAIN ACCESS

### Goal

|Goal|
|---|
|Mantener acceso del atacante|

---

### TECHNIQUES

|Technique|
|---|
|Create admin users|
|Backdoors|
|Web shells|

---

## COMPLETE SQL INJECTION FLOW (EXAM LOCK)

|Order|
|---|
|Detect|
|Identify DB|
|Enumerate|
|Extract|
|Bypass|
|Execute|
|Persist|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| SQL Injection Methodology | Proceso paso a paso para detectar, explotar y extraer datos de consultas SQL vulnerables |
| Phase 1 — Detect | Determinar si la aplicación es vulnerable a SQL injection |
| Phase 2 — Identify DB | Determinar el tipo de DBMS backend usando mensajes de error y funciones específicas de la base de datos |
| Phase 3 — Enumerate | Descubrir tablas, columnas, esquemas y privilegios de usuario en la base de datos |
| Phase 4 — Extract | Recuperar datos sensibles como nombres de usuario, contraseñas, correos electrónicos y tarjetas de crédito |
| Phase 5 — Bypass Auth | Obtener acceso no autorizado usando condiciones always-true o manipulación de consultas basada en comentarios |
| Phase 6 — Execute OS | Ejecutar comandos a nivel de sistema desde la base de datos (por ejemplo, xp_cmdshell, INTO OUTFILE) |
| Phase 7 — Persist | Mantener acceso del atacante a través de usuarios administrador, backdoors o web shells |
| `@@version` | Función de MySQL/MSSQL para recuperar información de versión de la base de datos |
| `information_schema` | Base de datos de metadata que contiene información de tablas, columnas y esquemas en todas las bases de datos |
| `information_schema.tables` | Consulta esta tabla para listar todas las tablas en la base de datos |
| `information_schema.columns` | Consulta esta tabla para listar todas las columnas en las tablas |
| `xp_cmdshell` | Stored procedure de MSSQL que permite ejecutar comandos del sistema operativo |
| `INTO OUTFILE` | Técnica de MySQL para escribir archivos en el sistema de archivos del servidor |

---

# PRACTICE QUESTIONS

**1.** ¿Cuál es el orden correcto de las fases de la metodología de SQL injection?
- a) Extract → Detect → Enumerate → Identify → Bypass → Execute → Persist
- b) Detect → Identify → Enumerate → Extract → Bypass → Execute → Persist
- c) Identify → Detect → Extract → Enumerate → Execute → Bypass → Persist
- d) Detect → Enumerate → Identify → Extract → Execute → Bypass → Persist
**Answer:** b — La secuencia correcta es: Detect → Identify DB → Enumerate → Extract → Bypass Auth → Execute OS → Persist.

**2.** ¿Qué consulta SQL usarías para enumerar nombres de tablas en una base de datos MySQL?
- a) `SELECT * FROM v$version`
- b) `SELECT table_name FROM information_schema.tables`
- c) `SELECT * FROM pg_tables`
- d) `SHOW DATABASES`
**Answer:** b — `information_schema.tables` es la tabla de metadata estándar que contiene los nombres de tablas en todas las bases de datos.

**3.** Un atacante quiere ejecutar comandos del OS desde una base de datos MSSQL comprometida. ¿Qué función debería usar?
- a) `INTO OUTFILE`
- b) `pg_sleep()`
- c) `xp_cmdshell`
- d) `CHAR()`
**Answer:** c — `xp_cmdshell` es el stored procedure de MSSQL que conecta la base de datos con el sistema operativo.

**4.** Durante la Fase 1 (Detection), ¿cuál de las siguientes opciones NO indicaría una vulnerabilidad de SQL injection?
- a) Mensajes de error de la base de datos devueltos al usuario
- b) Cambios en el contenido de la página al inyectar AND 1=2--
- c) La aplicación enforce HTTPS en todas las páginas
- d) Retraso en la respuesta al inyectar payloads basados en tiempo
**Answer:** c — El enforce de HTTPS es una medida de seguridad de transporte y no indica vulnerabilidad de SQL injection.

**5.** ¿Cuál es la primera pieza de información que un atacante típicamente extrae después de confirmar que existe SQLi?
- a) Password hashes
- b) Tipo y versión de la base de datos
- c) Privilegios de usuario
- d) Detalles del sistema operativo
**Answer:** b — Después de la detección, el atacante identifica el tipo y versión del DBMS para diseñar payloads de explotación específicos de la base de datos.
