# OBJECTIVE 04 — SQL INJECTION EVASION TECHNIQUES

---

## CEH CORE STATEMENT (MEMORIZE)

|Item|Memorize|
|---|---|
|SQL Injection Evasion|Techniques used by attackers to bypass security filters, firewalls, and input validation mechanisms|

---

## WHY EVASION IS REQUIRED

|Reason|
|---|
|Web Application Firewalls (WAFs)|
|Input validation|
|Blacklist filters|
|Signature-based detection|

MEMORY HOOK:  
**Blocked ≠ Secure**

---

## CLASSIFICATION OF EVASION TECHNIQUES (EXAM MUST)

|Category|
|---|
|Encoding techniques|
|Case manipulation|
|Comment injection|
|Whitespace manipulation|
|Operator substitution|
|Logical obfuscation|

---

## 1. ENCODING TECHNIQUES

### PURPOSE

|Purpose|
|---|
|Bypass input filters by encoding payloads|

---

### TYPES OF ENCODING

|Encoding Type|Description|
|---|---|
|URL encoding|Encodes characters as % values|
|Hex encoding|Uses hexadecimal values|
|Unicode encoding|Encodes characters using Unicode|
|Double encoding|Encodes already encoded data|

---

### EXAM EXAMPLES (RECOGNITION)

|Normal|Encoded|
|---|---|
|'|%27|
|space|%20|
|OR|%4F%52|

---

MEMORY HOOK:  
**Encoded ≠ detected**

---

## 2. CASE MANIPULATION

### PURPOSE

|Purpose|
|---|
|Bypass case-sensitive filters|

---

### TECHNIQUES

|Technique|
|---|
|Uppercase keywords|
|Lowercase keywords|
|Mixed-case keywords|

---

### EXAM EXAMPLES

|Keyword|Variation|
|---|---|
|SELECT|SeLeCt|
|UNION|UnIoN|
|OR|oR|

---

MEMORY HOOK:  
**Case changes bypass weak filters**

---

## 3. COMMENT INJECTION

### PURPOSE

|Purpose|
|---|
|Break query logic and ignore remaining SQL|

---

### COMMENT TYPES (REPEAT – EXAM IMPORTANT)

|Comment|DB Support|
|---|---|
|--|Most DBs|
|#|MySQL|
|/* */|All DBs|

---

### EXAM PAYLOADS

|Payload|
|---|
|' OR 1=1--|
|' OR 1=1#|

---

MEMORY HOOK:  
**Comment = query terminator**

---

## 4. WHITESPACE MANIPULATION

### PURPOSE

|Purpose|
|---|
|Bypass space-based filtering|

---

### TECHNIQUES

|Technique|
|---|
|Replace space with comments|
|Replace space with tabs|
|Replace space with newline|

---

### EXAM EXAMPLES

|Normal|Manipulated|
|---|---|
|SELECT * FROM|SELECT/**/FROM|

---

MEMORY HOOK:  
**No space ≠ no SQL**

---

## 5. OPERATOR SUBSTITUTION

### PURPOSE

|Purpose|
|---|
|Replace blocked operators with equivalents|

---

### SUBSTITUTIONS

|Original|Substitute|
|---|---|
|=|LIKE|
|AND|&&|
|OR||

---

MEMORY HOOK:  
**Same logic, different syntax**

---

## 6. LOGICAL OBFUSCATION

### PURPOSE

|Purpose|
|---|
|Hide malicious logic|

---

### TECHNIQUES

|Technique|
|---|
|Arithmetic expressions|
|Boolean expressions|
|Nested queries|

---

### EXAM EXAMPLES

|Original|Obfuscated|
|---|---|
|1=1|2-1=1|
|TRUE|NOT FALSE|

---

MEMORY HOOK:  
**Math hides truth**

---

## 7. CHAR() AND ASCII FUNCTIONS

### PURPOSE

|Purpose|
|---|
|Build strings without quotes|

---

### DB-SPECIFIC FUNCTIONS

|Database|Function AJ|
|---|---|
|MySQL|CHAR()|
|MSSQL|CHAR()|
|Oracle|CHR()|

---

### EXAM EXAMPLE

|Payload|
|---|
|CHAR(65,66,67)|

---

MEMORY HOOK:  
**No quotes, no filter**

---

## 8. CONCATENATION EVASION

### PURPOSE

|Purpose|
|---|
|Break keywords into parts|

---

### TECHNIQUES

|Technique|
|---|
|CONCAT()|
|+ operator|
||

---

### EXAM EXAMPLE

|Keyword|Obfuscated|
|---|---|
|UNION|UN|

---

MEMORY HOOK:  
**Split keyword survives filter**

---

## 9. SQL INJECTION EVASION SUMMARY (EXAM GOLD)

|Technique|Bypasses|
|---|---|
|Encoding|Signature filters|
|Case manipulation|Case-sensitive filters|
|Comments|Query parsing|
|Whitespace tricks|Space filters|
|Operator substitution|Keyword filters|
|Obfuscation|Pattern detection|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| SQL Injection Evasion | Techniques used to bypass WAFs, input validation, and signature-based detection |
| URL Encoding | Encodes characters as % hex values (e.g., `'` becomes `%27`) |
| Hex Encoding | Represents characters using hexadecimal values to bypass filters |
| Double Encoding | Encodes already-encoded data to bypass secondary decoding layers |
| Case Manipulation | Uses mixed-case keywords (e.g., `SeLeCt`) to bypass case-sensitive filters |
| Comment Injection | Inserts SQL comments (`--`, `#`, `/* */`) to break query logic and ignore remaining SQL |
| Whitespace Manipulation | Replaces spaces with comments, tabs, or newlines to bypass space-based filters |
| Operator Substitution | Replaces blocked operators with equivalents (e.g., `=` with `LIKE`, `AND` with `&&`) |
| Logical Obfuscation | Hides malicious logic using arithmetic expressions (`2-1=1`) or boolean expressions (`NOT FALSE`) |
| CHAR()/CHR() Functions | Builds strings without quotes (MySQL/MSSQL use CHAR(), Oracle uses CHR()) |
| Concatenation Evasion | Breaks keywords into parts using CONCAT(), `+`, or `\|\|` to survive keyword filters |
| WAF Bypass Goal | Evade security controls that block known SQL injection signatures |
| `SELECT/**/FROM` | Whitespace evasion using inline comments instead of spaces |

---

# PRACTICE QUESTIONS

**1.** An attacker wants to bypass a WAF that blocks the keyword "SELECT". Which evasion technique would be most effective?
- a) Use a longer payload
- b) Use mixed-case keywords like `SeLeCt`
- c) Use a different HTTP method
- d) Use HTTPS instead of HTTP
**Answer:** b — Case manipulation (mixed-case like `SeLeCt`) bypasses case-sensitive filters that only block exact keyword matches.

**2.** What does the payload `%27%20OR%201%3D1--` represent?
- a) A time-based blind injection
- b) A URL-encoded version of `' OR 1=1--`
- c) A hex-encoded UNION SELECT
- d) A double-encoded WAF payload
**Answer:** b — `%27` = `'`, `%20` = space, `%3D` = `=` — this is standard URL encoding of the classic bypass payload.

**3.** Which technique would bypass a WAF that filters out all space characters in input?
- a) Hex encoding only
- b) Replacing spaces with inline comments like `/**/`
- c) Using uppercase keywords
- d) Using operator substitution
**Answer:** b — `SELECT/**/FROM` uses inline comments as space substitutes, bypassing space-based filtering.

**4.** An attacker replaces `1=1` with `2-1=1` in their payload. What evasion technique is this?
- a) Encoding
- b) Comment injection
- c) Logical obfuscation using arithmetic
- d) Operator substitution
**Answer:** c — Arithmetic expressions like `2-1=1` are logically equivalent to `1=1` but evade pattern-based detection.

**5.** Which function allows building SQL strings without using quotes, thus bypassing quote-based filters?
- a) SLEEP()
- b) CHAR()
- c) WAITFOR DELAY
- d) pg_sleep()
**Answer:** b — CHAR() (and CHR() in Oracle) converts ASCII values to characters, eliminating the need for literal quotes in the payload.

