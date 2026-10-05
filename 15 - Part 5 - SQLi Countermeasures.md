# Módulo 15 · Parte 5 — SQLi Countermeasures

> **Módulo 15 — SQL Injection** · Parte 5 de 5 · Contramedidas contra SQL injection (parameterized queries, prepared statements, input validation, least privilege, WAF) y herramientas de SQLi como sqlmap.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [DEFINICIÓN BÁSICA DE CEH 🔥](#definición-básica-de-ceh-high-yield)
- [CAUSA RAÍZ DE SQL INJECTION](#causa-raíz-de-sql-injection)
- [TÉCNICAS PRINCIPALES DE PREVENCIÓN DE SQL INJECTION](#técnicas-principales-de-prevención-de-sql-injection)
- [1. PARAMETERIZED QUERIES 🔥](#1-parameterized-queries-high-yield)
- [2. PREPARED STATEMENTS](#2-prepared-statements)
- [3. STORED PROCEDURES](#3-stored-procedures)
- [4. INPUT VALIDATION](#4-input-validation)
- [5. ESCAPING USER INPUT](#5-escaping-user-input)
- [6. LEAST PRIVILEGE](#6-least-privilege)
- [7. WEB APPLICATION FIREWALL (WAF)](#7-web-application-firewall-waf)
- [HERRAMIENTAS DE DETECCIÓN DE SQL INJECTION 🔥](#herramientas-de-detección-de-sql-injection-high-yield)
- [SQLMAP — HERRAMIENTA FAVORITA DE CEH](#sqlmap--herramienta-favorita-de-ceh)
- [OTHER SQL INJECTION TOOLS](#other-sql-injection-tools)
- [SQL INJECTION PREVENTION CHECKLIST 🔥](#sql-injection-prevention-checklist-high-yield)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **Root cause** — falta de validación de entrada y construcción insegura de consultas SQL dinámicas (Dynamic SQL = danger).
- **Parameterized queries** — la defensa MÁS eficaz: separan la lógica SQL de la entrada, que se trata siempre como datos (Code ≠ Data).
- **Prepared statements** — se compilan una vez y se ejecutan muchas veces con distintos parámetros; previenen la inyección y mejoran el rendimiento.
- **Stored procedures** — NO son seguros por sí mismos: solo lo son si usan parameterized input (EXAM TRAP).
- **Input validation** — whitelisting > blacklisting, más comprobación de longitud y de tipo; la blacklist se evade con codificación u ofuscación.
- **Escaping user input** — neutraliza caracteres especiales, pero por sí solo NO es suficiente.
- **Least privilege** — permisos mínimos en la BD: nada de usuarios admin, usuarios separados para lectura y escritura.
- **WAF** — detecta y bloquea payloads de SQLi, pero se puede evadir con técnicas de evasión.
- **Prevention checklist** — parameterized queries, prepared statements, validar la entrada, least privilege, ocultar mensajes de error, parchear el DBMS, desplegar un WAF.
- **sqlmap** — herramienta favorita de CEH para detectar y explotar SQLi: `-u` URL objetivo, `--dbs` bases de datos, `--tables`, `--columns`, `--dump` volcar datos, `--os-shell` shell del SO.
- **Otras herramientas** — Havij (GUI), jSQL Injection (Java, multiplataforma), SQLninja (MSSQL), BBQSQL (blind SQLi).
- **Resumen del módulo 15** — Inject → Enumerate → Extract → Evade → Prevent: conceptos, tipos, metodología, evasión, contramedidas y herramientas.

---

## DEFINICIÓN BÁSICA DE CEH (HIGH YIELD)

|Item|Memorize|
|---|---|
|SQL Injection Countermeasures|Controles de seguridad implementados para evitar que los atacantes inyecten código SQL malicioso en las consultas|

---

## CAUSA RAÍZ DE SQL INJECTION

|Root Cause|
|---|
|Falta de validación de entrada adecuada y construcción insegura de consultas SQL dinámicas|

> 🧠 *Para recordar:* **Dynamic SQL = danger**

---

## TÉCNICAS PRINCIPALES DE PREVENCIÓN DE SQL INJECTION

## 1. PARAMETERIZED QUERIES (HIGH YIELD)

### DEFINITION

|Item|Memorize|
|---|---|
|Parameterized Query|Una consulta donde la lógica SQL se separa de la entrada del usuario|

---

### POR QUÉ FUNCIONA

|Reason|
|---|
|La entrada del usuario se trata como datos|
|La estructura SQL no puede ser alterada|

---

### EXAM NOTE

|Item|
|---|
|La técnica más efectiva para prevenir SQL injection|

---

> 🧠 *Para recordar:* **Code ≠ Data**

---

## 2. PREPARED STATEMENTS

### DEFINITION

|Item|Memorize|
|---|---|
|Prepared Statement|Sentencia SQL compilada una vez y ejecutada múltiples veces con diferentes parámetros|

---

### ADVANTAGES

|Advantage|
|---|
|Previene la inyección|
|Mejora el rendimiento|

---

### TECHNOLOGIES SUPPORTING IT

|Technology|
|---|
|Java|
|PHP|
|.NET|
|Python|

---

> 🧠 *Para recordar:* **Se prepara una vez, se ejecuta de forma segura**

---

## 3. STORED PROCEDURES

### DEFINITION

|Item|Memorize|
|---|---|
|Stored Procedure|Código SQL precompilado almacenado en la base de datos|

---

### SECURITY NOTE (HIGH YIELD)

| Statement                                      | Correct |
| ---------------------------------------------- | ------- |
| Los stored procedures siempre son seguros      | NO      |
| Solo son seguros si están parametrizados       | SÍ      |

---

> 🧠 *Para recordar:* **Stored ≠ secure**

---

## 4. INPUT VALIDATION

### DEFINITION

|Item|Memorize|
|---|---|
|Input Validation|Garantizar que la entrada del usuario coincida con el formato esperado|

---

### TECHNIQUES

|Technique|
|---|
|Whitelisting — permitir solo la entrada conocida como válida|
|Length checking — comprobar la longitud|
|Type checking — comprobar el tipo de dato|

---

### EXAM NOTE

|Item|
|---|
|Whitelisting > blacklisting|

---

> 🧠 *Para recordar:* **Permitir solo lo conocido como bueno**

---

## 5. ESCAPING USER INPUT

### PURPOSE

|Purpose|
|---|
|Neutralizar caracteres especiales|

---

### LIMITATION (HIGH YIELD)

|Item|
|---|
|El escaping por sí solo NO es suficiente|

---

> 🧠 *Para recordar:* **El escaping ayuda, pero no basta**

---

## 6. LEAST PRIVILEGE

### DEFINITION

|Item|Memorize|
|---|---|
|Least Privilege|Otorgar permisos mínimos de base de datos|

---

### IMPLEMENTATION

|Practice|
|---|
|No usar usuarios admin en la DB|
|Usuarios separados para lectura/escritura|

---

> 🧠 *Para recordar:* **Menos privilegios, menos daño**

---

## 7. WEB APPLICATION FIREWALL (WAF)

### ROLE

|Role|
|---|
|Detectar y bloquear payloads de SQL injection|

---

### LIMITATION

|Limitation|
|---|
|Puede ser evadido usando técnicas de evasión|

---

> 🧠 *Para recordar:* **Un WAF no es la solución definitiva**

---

## HERRAMIENTAS DE DETECCIÓN DE SQL INJECTION (HIGH YIELD)

|Tool|Purpose|
|---|---|
|SQLmap|Explotación automatizada de SQL injection|
|Havij|SQL injection automatizado|
|jSQL Injection|Herramienta de SQL injection basada en Java|
|SQLninja|Explotación de MSSQL|
|BBQSQL|Blind SQL injection|

---

## SQLMAP — HERRAMIENTA FAVORITA DE CEH

### PURPOSE

|Purpose|
|---|
|Detectar y explotar SQL injection|

---

### SQLMAP CAPABILITIES

|Capability|
|---|
|Detectar inyección|
|Enumerar DB|
|Volcar datos|
|Ejecutar comandos del SO|

---

### BASIC SQLMAP COMMAND STRUCTURE

|Structure|
|---|
|sqlmap -u [options]|

---

### IMPORTANT SQLMAP OPTIONS

|Option|Purpose|
|---|---|
|-u|URL objetivo|
|--dbs|Listar bases de datos|
|--tables|Listar tablas|
|--columns|Listar columnas|
|--dump|Volcar datos|
|--os-shell|Shell del SO|

---

> 🧠 *Para recordar:* **sqlmap = automatizarlo todo**

---

## OTHER SQL INJECTION TOOLS

|Tool|Specialty|
|---|---|
|Havij|SQLi basado en GUI|
|SQLninja|Enfoque en MSSQL|
|jSQL|Multiplataforma|
|BBQSQL|Blind SQLi|

---

## SQL INJECTION PREVENTION CHECKLIST (HIGH YIELD)

|#|Control|
|---|---|
|1|Usar parameterized queries|
|2|Usar prepared statements|
|3|Validar entrada|
|4|Usar least privilege|
|5|Ocultar mensajes de error|
|6|Parchear DBMS|
|7|Desplegar WAF|

---

## Flashcards

| Term | Definition |
|------|------------|
| Parameterized Queries | Consultas donde la lógica SQL se separa de la entrada del usuario; la prevención de SQLi más efectiva |
| Prepared Statements | Sentencias SQL compiladas una vez y ejecutadas múltiples veces con diferentes parámetros seguros |
| Stored Procedures | Código SQL precompilado en la base de datos; seguro SOLO cuando usa parameterized input, no inherentemente seguro |
| Input Validation | Garantizar que la entrada del usuario coincida con el formato esperado; whitelisting es superior a blacklisting |
| Whitelisting | Solo permitir patrones de entrada conocidos como buenos; preferido sobre blacklisting para la validación de entrada |
| Escaping User Input | Neutralizar caracteres especiales; útil pero NO suficiente como defensa por sí solo |
| Least Privilege | Otorgar permisos mínimos de base de datos; no usar usuarios admin en la DB, usuarios separados para lectura/escritura |
| Web Application Firewall (WAF) | Detecta y bloquea payloads de SQL injection pero puede ser evadido con técnicas de evasión |
| SQLmap | Herramienta automatizada de detección y explotación de SQL injection (favorita de CEH) |
| Havij | Herramienta automatizada de SQL injection basada en GUI |
| SQLninja | Herramienta especializada en explotación de MSSQL |
| BBQSQL | Herramienta enfocada en ataques de blind SQL injection |
| --dbs | Opción de SQLmap para listar todas las bases de datos |
| --os-shell | Opción de SQLmap para ejecutar comandos del sistema operativo en el objetivo |

---

## Preguntas de práctica

**1.** ¿Cuál de las siguientes es la técnica MÁS efectiva para prevenir SQL injection?
- a) Desplegar un WAF
- b) Usar parameterized queries
- c) Escapar toda la entrada del usuario
- d) Deshabilitar los mensajes de error de la base de datos
**Respuesta:** b -- Las parameterized queries separan la lógica SQL de la entrada del usuario, haciendo imposible alterar la estructura de la consulta mediante inyección.

**2.** Un desarrollador afirma que los stored procedures siempre están seguros contra SQL injection. ¿Es correcto?
- a) Sí, los stored procedures están precompilados y siempre son seguros
- b) No, los stored procedures son seguros solo cuando usan parameterized input
- c) Sí, pero solo para bases de datos MySQL
- d) No, los stored procedures nunca deben usarse
**Respuesta:** b -- Los stored procedures NO son inherentemente seguros; deben usar parameterized input para prevenir la inyección.

**3.** ¿Qué comando de SQLmap usarías para enumerar todas las bases de datos en una URL objetivo?
- a) sqlmap -u "http://target/?id=1" --tables
- b) sqlmap -u "http://target/?id=1" --dbs
- c) sqlmap -u "http://target/?id=1" --dump
- d) sqlmap -u "http://target/?id=1" --os-shell
**Respuesta:** b -- --dbs lista todas las bases de datos; --tables lista tablas, --dump extrae datos, --os-shell da acceso al SO.

**4.** ¿Por qué se prefiere whitelisting sobre blacklisting para la prevención de SQL injection?
- a) Whitelisting es más rápido de implementar
- b) Whitelisting solo permite entrada conocida como buena, mientras que blacklisting puede ser evadido por nuevos patrones de ataque
- c) Blacklisting bloquea toda la entrada
- d) Whitelisting no requiere cambios en el código
**Respuesta:** b -- Whitelisting acepta solo entrada que coincide con los patrones esperados, mientras que blacklisting puede ser evadido con codificación novedosa u ofuscación.

**5.** ¿Cuál es la limitación de usar escaping de entrada del usuario como la única defensa contra SQL injection?
- a) Ralentiza la base de datos
- b) No es suficiente por sí solo y puede ser evadido con ciertas técnicas de codificación
- c) Solo funciona para bases de datos MySQL
- d) Aumenta la superficie de ataque
**Respuesta:** b -- El escaping ayuda a neutralizar caracteres especiales pero no es suficiente como defensa por sí solo; puede ser evadido a través de diversas técnicas de evasión.