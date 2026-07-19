# MODULE 15 — SQL INJECTION

---

## LEARNING OBJECTIVES (EXAM MUST-MEMORIZE)

|#|Objective|
|---|---|
|1|Summarize SQL injection concepts|
|2|Demonstrate various types of SQL injection|
|3|Explain SQL injection methodology|
|4|Demonstrate different evasion techniques|
|5|Explain SQL injection countermeasures|
|6|Use different SQL injection detection tools|

MEMORY HOOK:  
**Concept → Types → Method → Evasion → Defense → Tools**

---

## WHAT IS SQL INJECTION (CEH DEFINITION)

|Item|Memorize Exactly|
|---|---|
|SQL Injection|An attack that exploits unsanitized user input to execute malicious SQL queries on a database|

---

## WHY SQL INJECTION IS DANGEROUS

|Impact|
|---|
|Authentication bypass|
|Authorization bypass|
|Information disclosure|
|Data manipulation|
|Data deletion|
|Remote code execution|

MEMORY HOOK:  
**Bypass → Read → Modify → Delete → Execute**

---

## SQL — BASIC CONCEPTS (NO ASSUMPTIONS)

### WHAT IS SQL

|Item|Memorize|
|---|---|
|SQL|Structured Query Language|
|Purpose|Communicate with databases|
|Used For|Create, read, update, delete data|

---

### COMMON SQL COMMANDS

|Command|Purpose|
|---|---|
|SELECT|Retrieve data|
|INSERT|Add data|
|UPDATE|Modify data|
|DELETE|Remove data|
|CREATE|Create objects|
|DROP|Delete objects|

MEMORY HOOK:  
**S I U D C D**

---

## WHERE SQL INJECTION OCCURS

|Location|
|---|
|Login forms|
|Search fields|
|URL parameters|
|Cookies|
|HTTP headers|

MEMORY HOOK:  
**Anywhere input touches SQL**

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
|1|User submits input|
|2|Application builds SQL query|
|3|Database executes query|
|4|Result returned|

---

## UNDERSTANDING SQL INJECTION QUERY

### MALICIOUS INPUT EXAMPLE

|Field|Value|
|---|---|
|Username|blah' OR '1'='1|
|Password|anything|

---

### RESULTING QUERY

|Query|
|---|
|SELECT * FROM Users WHERE username='blah' OR '1'='1' AND password='anything';|

---

### WHY IT WORKS

|Reason|
|---|
|OR '1'='1' is always true|
|WHERE clause always evaluates to true|
|Authentication bypassed|

MEMORY HOOK:  
**True condition breaks logic**

---

## SQL INJECTION — CORE PRINCIPLE (EXAM SENTENCE)

|Memorize|
|---|
|SQL injection occurs because user input is concatenated into SQL queries without proper validation|

---

## SQL INJECTION ATTACK GOALS

|Goal|
|---|
|Bypass authentication|
|Extract database data|
|Modify database records|
|Execute administrative operations|
|Compromise backend system|

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
**Language irrelevant — SQL is target**

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
|GET|Parameters in URL|
|POST|Parameters in body|

---

## SQL INJECTION — BASIC LOGIC FLOW

|Step|Action|
|---|---|
|1|Attacker finds input field|
|2|Submits malicious SQL|
|3|Application builds query|
|4|Database executes injected SQL|
|5|Attacker gains control|

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
|--|Single-line comment|
|/* */|Multi-line comment|

MEMORY HOOK:  
**Comment = ignore rest of query**

---


## EXAM EXTRAS (Boson Practice Test)

### SQL INJECTION SPACING TECHNIQUE

|Item|Memorize|
|---|---|
|Spacing trick|SQL injection uses spacing to avoid IDS or WAF|
|Example|SELECT * FROM 'mydb'.'users' 'WHERE' role='1'|
|Normal query|SELECT * FROM users WHERE role='1';|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| SQL Injection | Attack that exploits unsanitized user input to execute malicious SQL queries on a database |
| Core Root Cause | User input concatenated into SQL queries without proper validation |
| `' OR '1'='1` | Classic always-true payload that bypasses authentication |
| `--` (double dash) | Single-line comment symbol in SQL used to ignore the rest of a query |
| `/* */` | Multi-line comment symbols supported by all major databases |
| Authentication Bypass | Gaining access without valid credentials by making the WHERE clause always true |
| Error Message Disclosure | Verbose database errors that reveal internal structure to attackers |
| GET Parameter Injection | SQLi via URL query string parameters |
| POST Parameter Injection | SQLi via HTTP request body data |
| Injection Points | Login forms, search fields, URL parameters, cookies, HTTP headers |
| Affected Technologies | ASP, ASP.NET, PHP, JSP, Python, Ruby, Perl — language is irrelevant, SQL is the target |
| Target Databases | MySQL, MSSQL, Oracle, PostgreSQL, SQLite |
| Spacing Technique | Using extra whitespace to evade IDS/WAF signature detection |

---

# PRACTICE QUESTIONS

**1.** Which SQL payload is commonly used to test for authentication bypass vulnerabilities?
- a) `' OR 1=1--`
- b) `SELECT * FROM users`
- c) `DROP TABLE users`
- d) `UPDATE users SET role='admin'`
**Answer:** a — `' OR 1=1--` makes the WHERE clause always true, bypassing authentication checks.

**2.** What is the primary reason SQL injection works?
- a) The database is outdated
- b) User input is concatenated into SQL queries without proper validation
- c) The firewall is misconfigured
- d) HTTPS is not enforced
**Answer:** b — The core principle is that unsanitized user input becomes part of the SQL query structure.

**3.** Which of the following is NOT an injection point for SQL injection?
- a) Login forms
- b) URL parameters
- c) Compiled binaries
- d) Cookies
**Answer:** c — SQL injection targets anything that touches SQL: login forms, search fields, URL parameters, cookies, and HTTP headers.

**4.** What does the `--` symbol do in an SQL injection payload?
- a) Executes multiple queries
- b) Comments out the rest of the query
- c) Encodes the payload
- d) Creates a new database connection
**Answer:** b — `--` is a single-line comment in SQL that causes the database to ignore everything after it.

**5.** Why is the programming language of the web application irrelevant to SQL injection?
- a) SQL injection targets the database, not the application language
- b) All languages use the same SQL syntax
- c) Only PHP applications are vulnerable
- d) SQL injection only works on legacy code
**Answer:** a — SQL injection attacks the database layer directly; any language that constructs SQL queries can be vulnerable.
