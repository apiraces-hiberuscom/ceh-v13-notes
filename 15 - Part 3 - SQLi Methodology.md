# OBJECTIVE 03 — SQL INJECTION METHODOLOGY

---

## CEH CORE STATEMENT (MEMORIZE)

|Item|Memorize|
|---|---|
|SQL Injection Methodology|A step-by-step process used by attackers to detect, exploit, and extract data from vulnerable SQL queries|

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
|Determine whether the application is vulnerable|

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
|Determine backend DBMS|

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
|Discover tables, columns, and schemas|

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
|Retrieve sensitive data|

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
|Gain unauthorized login|

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
|Execute system-level commands|

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
|Persist attacker access|

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
| SQL Injection Methodology | Step-by-step process to detect, exploit, and extract data from vulnerable SQL queries |
| Phase 1 — Detect | Determine whether the application is vulnerable to SQL injection |
| Phase 2 — Identify DB | Determine the backend DBMS type using error messages and DB-specific functions |
| Phase 3 — Enumerate | Discover tables, columns, schemas, and user privileges in the database |
| Phase 4 — Extract | Retrieve sensitive data such as usernames, passwords, emails, and credit cards |
| Phase 5 — Bypass Auth | Gain unauthorized login using always-true conditions or comment-based query manipulation |
| Phase 6 — Execute OS | Run system-level commands from the database (e.g., xp_cmdshell, INTO OUTFILE) |
| Phase 7 — Persist | Maintain attacker access via admin users, backdoors, or web shells |
| `@@version` | MySQL/MSSQL function to retrieve database version information |
| `information_schema` | Metadata database containing table, column, and schema information across databases |
| `information_schema.tables` | Query this table to list all tables in the database |
| `information_schema.columns` | Query this table to list all columns across tables |
| `xp_cmdshell` | MSSQL stored procedure that allows executing operating system commands |
| `INTO OUTFILE` | MySQL technique to write files to the server's filesystem |

---

# PRACTICE QUESTIONS

**1.** What is the correct order of the SQL injection methodology phases?
- a) Extract → Detect → Enumerate → Identify → Bypass → Execute → Persist
- b) Detect → Identify → Enumerate → Extract → Bypass → Execute → Persist
- c) Identify → Detect → Extract → Enumerate → Execute → Bypass → Persist
- d) Detect → Enumerate → Identify → Extract → Execute → Bypass → Persist
**Answer:** b — The correct sequence is: Detect → Identify DB → Enumerate → Extract → Bypass Auth → Execute OS → Persist.

**2.** Which SQL query would you use to enumerate table names in a MySQL database?
- a) `SELECT * FROM v$version`
- b) `SELECT table_name FROM information_schema.tables`
- c) `SELECT * FROM pg_tables`
- d) `SHOW DATABASES`
**Answer:** b — `information_schema.tables` is the standard metadata table containing table names across all databases.

**3.** An attacker wants to execute OS commands from a compromised MSSQL database. Which function should they use?
- a) `INTO OUTFILE`
- b) `pg_sleep()`
- c) `xp_cmdshell`
- d) `CHAR()`
**Answer:** c — `xp_cmdshell` is the MSSQL stored procedure that bridges the database to the operating system.

**4.** During Phase 1 (Detection), which of the following would NOT indicate a SQL injection vulnerability?
- a) Database error messages returned to the user
- b) Page content changes when injecting AND 1=2--
- c) The application enforces HTTPS on all pages
- d) Response delay when injecting time-based payloads
**Answer:** c — HTTPS enforcement is a transport security measure and does not indicate SQL injection vulnerability.

**5.** What is the first piece of information an attacker typically extracts after confirming SQLi exists?
- a) Password hashes
- b) Database type and version
- c) User privileges
- d) Operating system details
**Answer:** b — After detection, the attacker identifies the DBMS type and version to craft database-specific exploitation payloads.

