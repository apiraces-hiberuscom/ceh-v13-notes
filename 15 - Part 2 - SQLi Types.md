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
|In-band SQL Injection|Attacker uses the same communication channel to inject SQL and retrieve results|

---

### CHARACTERISTICS

|Characteristic|
|---|
|Most common|
|Fast exploitation|
|Same request/response channel|

---

## 1.1 ERROR-BASED SQL INJECTION

### DEFINITION

|Item|Memorize|
|---|---|
|Error-based SQL Injection|Exploits database error messages to extract information|

---

### WHY IT WORKS

|Reason|
|---|
|Verbose database errors|
|Poor error handling|

---

### ATTACK LOGIC

|Step|Action|
|---|---|
|1|Attacker submits malformed SQL|
|2|Database throws error|
|3|Error reveals DB info|

---

### INFORMATION LEAKED

|Data|
|---|
|Database type|
|Table names|
|Column names|
|Query structure|

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
|UNION-based SQL Injection|Uses UNION operator to combine attacker query with legitimate query|

---

### PREREQUISITES (VERY IMPORTANT)

|Requirement|
|---|
|Same number of columns|
|Compatible data types|

---

### ATTACK LOGIC

|Step|Action|
|---|---|
|1|Find column count|
|2|Identify injectable columns|
|3|Use UNION SELECT|
|4|Extract data|

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
|Blind SQL Injection|No direct database error or output is visible|

---

### CHARACTERISTICS

|Characteristic|
|---|
|Slow|
|No visible errors|
|Inference-based|

---

## 2.1 BOOLEAN-BASED BLIND SQL INJECTION

### DEFINITION

|Item|Memorize|
|---|---|
|Boolean-based SQL Injection|Attacker infers results by observing TRUE/FALSE responses|

---

### ATTACK LOGIC

|Step|Action|
|---|---|
|1|Inject condition|
|2|Observe page response|
|3|Infer result|

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
|Time-based SQL Injection|Uses time delays to infer query execution|

---

### ATTACK LOGIC

|Step|Action|
|---|---|
|1|Inject delay condition|
|2|Measure response time|
|3|Infer result|

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
|Out-of-band SQL Injection|Data exfiltration using a different channel|

---

### WHEN USED

|Condition|
|---|
|In-band unavailable|
|Blind too slow|

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
|1|Inject SQL|
|2|DB triggers external request|
|3|Attacker receives data|

---

### MEMORY HOOK

**Different channel = Out-of-band**

---

## COMPLETE TYPE COMPARISON (EXAM GOLD)

|Type|Speed|Output|
|---|---|---|
|Error-based|Fast|Errors|
|UNION-based|Fast|Query results|
|Boolean-based|Slow|Page behavior|
|Time-based|Very slow|Response delay|
|Out-of-band|Medium|External response|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| In-band SQL Injection | Uses the same communication channel to inject SQL and retrieve results |
| Error-based SQLi | Exploits verbose database error messages to extract information |
| UNION-based SQLi | Uses UNION operator to combine attacker query with legitimate query results |
| Blind SQL Injection | No direct error or output visible; attacker infers results indirectly |
| Boolean-based Blind SQLi | Infers results by observing TRUE/FALSE page response differences |
| Time-based Blind SQLi | Uses time delays (e.g., SLEEP()) to infer query execution results |
| Out-of-band SQLi | Data exfiltration using a different channel such as DNS or HTTP |
| UNION Prerequisites | Same number of columns and compatible data types between queries |
| SLEEP() | MySQL function used for time-based blind SQL injection |
| WAITFOR DELAY | MSSQL function used for time-based blind SQL injection |
| pg_sleep() | PostgreSQL function used for time-based blind SQL injection |
| Error = Information | Verbose errors leak database type, table names, column names, and query structure |
| Speed Ranking | Error-based/UNION-based (fast) > Out-of-band (medium) > Boolean (slow) > Time-based (very slow) |

---

# PRACTICE QUESTIONS

**1.** An attacker injects `' UNION SELECT 1,2,3--` and the page displays the numbers 1, 2, and 3. What type of SQL injection is this?
- a) Boolean-based blind SQLi
- b) Time-based blind SQLi
- c) UNION-based SQLi
- d) Out-of-band SQLi
**Answer:** c — UNION-based SQL injection combines the attacker's query with the legitimate query using UNION SELECT.

**2.** What are the two prerequisites for a successful UNION-based SQL injection attack?
- a) Same table name and same database user
- b) Same number of columns and compatible data types
- c) Same HTTP method and same session cookie
- d) Same encoding and same character set
**Answer:** b — The injected UNION query must match the original query's column count and have compatible data types.

**3.** An attacker notices that a web page returns different content when `' AND 1=1--` is injected versus `' AND 1=2--`. What type of SQLi is this?
- a) Error-based
- b) UNION-based
- c) Boolean-based blind
- d) Time-based blind
**Answer:** c — Boolean-based blind SQLi infers data by observing page content changes between true and false conditions.

**4.** Which MySQL function is used in time-based blind SQL injection?
- a) WAITFOR DELAY
- b) pg_sleep()
- c) SLEEP()
- d) DBMS_LOCK.SLEEP
**Answer:** c — SLEEP() is MySQL-specific; WAITFOR DELAY is MSSQL, pg_sleep() is PostgreSQL, DBMS_LOCK.SLEEP is Oracle.

**5.** When would an attacker use out-of-band SQL injection instead of in-band?
- a) When the database has no error messages
- b) When in-band channels are unavailable or blind SQLi is too slow
- c) When UNION-based injection fails due to column mismatch
- d) When the target uses parameterized queries
**Answer:** b — Out-of-band is used when in-band channels are blocked and blind methods are too slow for data exfiltration.

