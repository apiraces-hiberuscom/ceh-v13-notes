# Módulo 15 · Parte 3 — SQLi Methodology

> **Módulo 15 — SQL Injection** · Parte 3 de 5 · Las 7 fases de la metodología de SQL injection: detectar, identificar la BD, enumerar, extraer, evadir la autenticación, ejecutar comandos del SO y mantener el acceso.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [CEH CORE STATEMENT 🔥](#ceh-core-statement-high-yield)
- [SQL INJECTION METHODOLOGY — PHASES](#sql-injection-methodology--phases)
- [PHASE 1 — DETECT SQL INJECTION](#phase-1--detect-sql-injection)
- [PHASE 2 — IDENTIFY DATABASE TYPE](#phase-2--identify-database-type)
- [PHASE 3 — ENUMERATE DATABASE STRUCTURE](#phase-3--enumerate-database-structure)
- [PHASE 4 — EXTRACT DATA](#phase-4--extract-data)
- [PHASE 5 — BYPASS AUTHENTICATION](#phase-5--bypass-authentication)
- [PHASE 6 — EXECUTE OS COMMANDS](#phase-6--execute-os-commands)
- [PHASE 7 — MAINTAIN ACCESS](#phase-7--maintain-access)
- [COMPLETE SQL INJECTION FLOW 🔥](#complete-sql-injection-flow-high-yield)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **Orden de las fases** — Detect → Identify DB → Enumerate → Extract → Bypass Auth → Execute OS Commands → Maintain Access (Persist).
- **Phase 1 — Detect** — probar `'`, `"`, `' OR '1'='1`, `' AND 1=2--`; indicios de inyección: error de BD, cambio en la página o retardo en la respuesta.
- **Phase 2 — Identify Database** — tras confirmar la SQLi, lo primero es el tipo/versión del DBMS: `@@version` (MySQL/MSSQL), `version()` (PostgreSQL), `banner from v$version` (Oracle).
- **Phase 3 — Enumerate** — `information_schema` es la base de datos de metadatos: `information_schema.tables`, `.columns`, `.schemata`.
- **Phase 4 — Extract** — nombres de usuario, password hashes, emails y tarjetas, mediante extracción UNION-based, blind o time-based (primero la estructura, luego los datos).
- **Phase 5 — Bypass Authentication** — condición always-true o comentar el resto de la consulta: `' OR '1'='1--`, `admin'--`.
- **Phase 6 — Execute OS Commands** — requiere que la BD permita ejecutar comandos y privilegios elevados: MSSQL `xp_cmdshell`, MySQL `INTO OUTFILE` (escribe archivos), Oracle Java stored procedures.
- **Phase 7 — Maintain Access** — crear usuarios administradores, backdoors y web shells.
- **HTTPS** — es seguridad de transporte: no indica (ni evita) una vulnerabilidad de SQLi.

---

## CEH CORE STATEMENT (HIGH YIELD)

|Item|Memorize|
|---|---|
|SQL Injection Methodology|Un proceso paso a paso utilizado por atacantes para detectar, explotar y extraer datos de consultas SQL vulnerables|

---

## SQL INJECTION METHODOLOGY — PHASES

|Phase No.|Phase|
|---|---|
|1|Detect SQL Injection — detectar si hay inyección|
|2|Identify Database — identificar el DBMS backend|
|3|Enumerate Database Structure — enumerar la estructura de la BD|
|4|Extract Data — extraer datos|
|5|Bypass Authentication — evadir la autenticación|
|6|Execute OS Commands — ejecutar comandos del sistema operativo|
|7|Maintain Access — mantener el acceso|

> 🧠 *Para recordar:* **Detect → Identify → Enumerate → Extract → Bypass → Execute → Persist**

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
|Single quote injection — inyectar una comilla simple|
|Boolean testing — probar condiciones verdaderas/falsas|
|Time delay testing — probar retardos en la respuesta|
|Error message observation — observar los mensajes de error|

---

### TEST PAYLOADS

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
|Error de base de datos|
|Cambio en el contenido de la página|
|Retardo en la respuesta|

> 🧠 *Para recordar:* **Error / Cambio / Retardo = inyectable**

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
|Error message fingerprinting — identificar el DBMS por sus mensajes de error|
|DB-specific functions — funciones propias de cada DBMS|
|Version banners — banners de versión|

---

### DB-SPECIFIC FUNCTIONS (HIGH YIELD)

|Database|Function|
|---|---|
|MySQL|@@version|
|MSSQL|@@version|
|Oracle|banner from v$version|
|PostgreSQL|version()|

---

> 🧠 *Para recordar:* **La función de versión revela la BD**

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
|Nombre de la base de datos|
|Nombres de tablas|
|Nombres de columnas|
|Privilegios de usuario|

---

### INFORMATION_SCHEMA (HIGH YIELD)

|Item|Description|
|---|---|
|information_schema|Base de datos de metadatos (metadata database)|

---

### IMPORTANT TABLES (HIGH YIELD)

|Table|
|---|
|information_schema.tables|
|information_schema.columns|
|information_schema.schemata|

---

> 🧠 *Para recordar:* **El schema guarda la estructura**

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
|Nombres de usuario|
|Password hashes (hashes de contraseñas)|
|Correos electrónicos|
|Datos de tarjetas de crédito|

---

### EXTRACTION METHODS

|Method|
|---|
|UNION-based extraction — extracción con UNION|
|Blind extraction — extracción por inferencia|
|Time-based extraction — extracción mediante retardos|

---

> 🧠 *Para recordar:* **Primero la estructura, luego los datos**

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
|Always-true condition — condición siempre verdadera|
|Commenting query — comentar el resto de la consulta|
|Login logic manipulation — manipular la lógica del login|

---

### EXAM PAYLOADS

|Payload|
|---|
|' OR '1'='1--|
|admin'--|

---

> 🧠 *Para recordar:* **TRUE evade la autenticación**

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
|La BD permite ejecutar comandos|
|Privilegios elevados|

---

### DB-SPECIFIC METHODS

|Database|Method|
|---|---|
|MSSQL|xp_cmdshell|
|MySQL|INTO OUTFILE|
|Oracle|Java stored procedures|

---

> 🧠 *Para recordar:* **Puente BD → SO**

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
|Crear usuarios administradores|
|Backdoors|
|Web shells|

---

## COMPLETE SQL INJECTION FLOW (HIGH YIELD)

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

## Flashcards

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
| `information_schema` | Base de datos de metadatos que contiene información de tablas, columnas y esquemas en todas las bases de datos |
| `information_schema.tables` | Consulta esta tabla para listar todas las tablas en la base de datos |
| `information_schema.columns` | Consulta esta tabla para listar todas las columnas en las tablas |
| `xp_cmdshell` | Stored procedure de MSSQL que permite ejecutar comandos del sistema operativo |
| `INTO OUTFILE` | Técnica de MySQL para escribir archivos en el sistema de archivos del servidor |

---

## Preguntas de práctica

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
