# OBJECTIVE 05 — SQL INJECTION COUNTERMEASURES

---

## CEH CORE DEFINITION (MEMORIZE)

|Item|Memorize|
|---|---|
|SQL Injection Countermeasures|Security controls implemented to prevent attackers from injecting malicious SQL code into queries|

---

## ROOT CAUSE OF SQL INJECTION (EXAM STATEMENT)

|Root Cause|
|---|
|Lack of proper input validation and unsafe dynamic SQL query construction|

MEMORY HOOK:  
**Dynamic SQL = danger**

---

## PRIMARY SQL INJECTION PREVENTION TECHNIQUES

---

## 1. PARAMETERIZED QUERIES (MOST IMPORTANT)

### DEFINITION

|Item|Memorize|
|---|---|
|Parameterized Query|A query where SQL logic is separated from user input|

---

### WHY IT WORKS

|Reason|
|---|
|User input treated as data|
|SQL structure cannot be altered|

---

### EXAM NOTE

|Item|
|---|
|Most effective SQL injection prevention|

---

MEMORY HOOK:  
**Code ≠ Data**

---

## 2. PREPARED STATEMENTS

### DEFINITION

|Item|Memorize|
|---|---|
|Prepared Statement|SQL statement compiled once and executed multiple times with different parameters|

---

### ADVANTAGES

|Advantage|
|---|
|Prevents injection|
|Improves performance|

---

### TECHNOLOGIES SUPPORTING IT

|Technology|
|---|
|Java|
|PHP|
|.NET|
|Python|

---

MEMORY HOOK:  
**Prepare once, execute safely**

---

## 3. STORED PROCEDURES

### DEFINITION

|Item|Memorize|
|---|---|
|Stored Procedure|Precompiled SQL code stored in the database|

---

### SECURITY NOTE (EXAM TRAP)

| Statement                     | Correct |
| ----------------------------- | ------- |
| Stored procedures always safe | NO      |
| Safe only if parameterized    | YES     |

---

MEMORY HOOK:  
**Stored ≠ secure**

---

## 4. INPUT VALIDATION

### DEFINITION

|Item|Memorize|
|---|---|
|Input Validation|Ensuring user input matches expected format|

---

### TECHNIQUES

|Technique|
|---|
|Whitelisting|
|Length checking|
|Type checking|

---

### EXAM NOTE

|Item|
|---|
|Whitelisting > blacklisting|

---

MEMORY HOOK:  
**Allow known good only**

---

## 5. ESCAPING USER INPUT

### PURPOSE

|Purpose|
|---|
|Neutralize special characters|

---

### LIMITATION (EXAM TRAP)

|Item|
|---|
|Escaping alone is NOT sufficient|

---

MEMORY HOOK:  
**Escape helps, not enough**

---

## 6. LEAST PRIVILEGE

### DEFINITION

|Item|Memorize|
|---|---|
|Least Privilege|Granting minimum database permissions|

---

### IMPLEMENTATION

|Practice|
|---|
|No admin DB users|
|Separate read/write users|

---

MEMORY HOOK:  
**Less privilege, less damage**

---

## 7. WEB APPLICATION FIREWALL (WAF)

### ROLE

|Role|
|---|
|Detect and block SQL injection payloads|

---

### LIMITATION

|Limitation|
|---|
|Can be bypassed using evasion techniques|

---

MEMORY HOOK:  
**WAF ≠ silver bullet**

---

## OBJECTIVE 06 — SQL INJECTION TOOLS

---

## SQL INJECTION DETECTION TOOLS (EXAM MUST)

|Tool|Purpose|
|---|---|
|SQLmap|Automated SQL injection exploitation|
|Havij|Automated SQL injection|
|jSQL Injection|Java-based SQL injection tool|
|SQLninja|MSSQL exploitation|
|BBQSQL|Blind SQL injection|

---

## SQLMAP — CEH FAVORITE TOOL

### PURPOSE

|Purpose|
|---|
|Detect and exploit SQL injection|

---

### SQLMAP CAPABILITIES

|Capability|
|---|
|Detect injection|
|Enumerate DB|
|Dump data|
|Execute OS commands|

---

### BASIC SQLMAP COMMAND STRUCTURE (RECOGNITION)

|Structure|
|---|
|sqlmap -u [options]|

---

### IMPORTANT SQLMAP OPTIONS (EXAM)

|Option|Purpose|
|---|---|
|-u|Target URL|
|--dbs|List databases|
|--tables|List tables|
|--columns|List columns|
|--dump|Dump data|
|--os-shell|OS shell|

---

MEMORY HOOK:  
**sqlmap = automate everything**

---

## OTHER SQL INJECTION TOOLS

|Tool|Specialty|
|---|---|
|Havij|GUI-based SQLi|
|SQLninja|MSSQL focus|
|jSQL|Cross-platform|
|BBQSQL|Blind SQLi|

---

## SQL INJECTION PREVENTION CHECKLIST (EXAM GOLD)

|#|Control|
|---|---|
|1|Use parameterized queries|
|2|Use prepared statements|
|3|Validate input|
|4|Use least privilege|
|5|Hide error messages|
|6|Patch DBMS|
|7|Deploy WAF|

---

## FINAL MODULE 15 MEMORY BLOCK

### OBJECTIVES

|Objective|Status|
|---|---|
|Concepts|Covered|
|Types|Covered|
|Methodology|Covered|
|Evasion|Covered|
|Countermeasures|Covered|
|Tools|Covered|

---

### CORE MEMORY HOOK

**Inject → Enumerate → Extract → Evade → Prevent**

---

## MODULE 15 STATUS

|Item|Status|
|---|---|
|Pages covered|100%|
|Concepts skipped|0|
|Tools skipped|0|
|Exam alignment|Exact|

---

## MODULE 15 COMPLETE

Next available modules:

- **Module 16 – Hacking Wireless Networks**
    
- **Module 17 – Hacking Mobile Platforms**
    
- **Rapid SQLi exam drills**
    
- **One-page SQLi memory sheet**
    

Tell me **what’s next**.
---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Parameterized Queries | Queries where SQL logic is separated from user input; the most effective SQLi prevention |
| Prepared Statements | SQL statements compiled once and executed multiple times with different safe parameters |
| Stored Procedures | Precompiled SQL code in the database; safe ONLY when parameterized, not inherently secure |
| Input Validation | Ensuring user input matches expected format; whitelisting is superior to blacklisting |
| Whitelisting | Only allowing known-good input patterns; preferred over blacklisting for input validation |
| Escaping User Input | Neutralizing special characters; helpful but NOT sufficient as a standalone defense |
| Least Privilege | Granting minimum database permissions; no admin DB users, separate read/write users |
| Web Application Firewall (WAF) | Detects and blocks SQL injection payloads but can be bypassed with evasion techniques |
| SQLmap | Automated SQL injection detection and exploitation tool (CEH favorite) |
| Havij | GUI-based automated SQL injection tool |
| SQLninja | Specialized MSSQL exploitation tool |
| BBQSQL | Tool focused on blind SQL injection attacks |
| --dbs | SQLmap option to list all databases |
| --os-shell | SQLmap option to execute operating system commands on the target |

---

# PRACTICE QUESTIONS

**1.** Which of the following is the MOST effective technique to prevent SQL injection?
- a) Deploy a WAF
- b) Use parameterized queries
- c) Escape all user input
- d) Disable database error messages
**Answer:** b -- Parameterized queries separate SQL logic from user input, making it impossible to alter query structure via injection.

**2.** A developer claims stored procedures are always safe from SQL injection. Is this correct?
- a) Yes, stored procedures are precompiled and always safe
- b) No, stored procedures are safe only when they use parameterized input
- c) Yes, but only for MySQL databases
- d) No, stored procedures should never be used
**Answer:** b -- Stored procedures are NOT inherently safe; they must use parameterized input to prevent injection.

**3.** Which SQLmap command would you use to enumerate all databases on a target URL?
- a) sqlmap -u "http://target/?id=1" --tables
- b) sqlmap -u "http://target/?id=1" --dbs
- c) sqlmap -u "http://target/?id=1" --dump
- d) sqlmap -u "http://target/?id=1" --os-shell
**Answer:** b -- --dbs lists all databases; --tables lists tables, --dump extracts data, --os-shell gives OS access.

**4.** Why is whitelisting preferred over blacklisting for SQL injection prevention?
- a) Whitelisting is faster to implement
- b) Whitelisting only allows known-good input, while blacklisting can be bypassed by new attack patterns
- c) Blacklisting blocks all input
- d) Whitelisting does not require code changes
**Answer:** b -- Whitelisting accepts only input matching expected patterns, while blacklisting can be evaded with novel encoding or obfuscation.

**5.** What is the limitation of using escaping user input as the sole SQL injection defense?
- a) It slows down the database
- b) It is not sufficient alone and can be bypassed with certain encoding techniques
- c) It only works for MySQL databases
- d) It increases the attack surface
**Answer:** b -- Escaping helps neutralize special characters but is not sufficient as a standalone defense; it can be bypassed through various evasion techniques.
