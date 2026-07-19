## OBJECTIVE 02 — WEB APPLICATION THREATS

### CEH CORE STATEMENT (MEMORIZE)

|Item|Memorize|
|---|---|
|Web Application Threat|Any weakness in application logic, input handling, authentication, or configuration that can be exploited to compromise confidentiality, integrity, or availability|

---

## OWASP TOP 10 (2021) — MASTER LIST (EXAM MUST)

|Rank|Vulnerability Code|Name|
|---|---|---|
|1|A01:2021|Broken Access Control|
|2|A02:2021|Cryptographic Failures|
|3|A03:2021|Injection|
|4|A04:2021|Insecure Design|
|5|A05:2021|Security Misconfiguration|
|6|A06:2021|Vulnerable and Outdated Components|
|7|A07:2021|Identification and Authentication Failures|
|8|A08:2021|Software and Data Integrity Failures|
|9|A09:2021|Security Logging and Monitoring Failures|
|10|A10:2021|Server-Side Request Forgery (SSRF)|

MEMORY HOOK:  
**Access → Crypto → Injection → Design → Config → Components → Auth → Integrity → Logging → SSRF**

---

## A01:2021 — BROKEN ACCESS CONTROL

### Core Definition

|Item|Memorize|
|---|---|
|Meaning|Failure to enforce restrictions on authenticated users|
|Result|Unauthorized actions|

---

### Common Causes

|Cause|
|---|
|Missing access checks|
|Client-side access control|
|IDOR (Insecure Direct Object Reference)|
|Metadata manipulation|
|Force browsing|

---

### Attack Logic

|Step|Action|
|---|---|
|1|User authenticates|
|2|Modifies request|
|3|Server fails to verify authorization|
|4|Unauthorized resource accessed|

---

### Impact

|Impact|
|---|
|Data exposure|
|Privilege escalation|
|Account takeover|

---

## A02:2021 — CRYPTOGRAPHIC FAILURES

### Core Definition

|Item|Memorize|
|---|---|
|Meaning|Improper use or absence of cryptography|
|Affects|Data in transit and at rest|

---

### Common Failures

|Failure|
|---|
|Plaintext data transmission|
|Weak encryption algorithms|
|Hardcoded keys|
|No TLS|
|Improper key management|

---

### Impact

|Impact|
|---|
|Data leakage|
|MITM attacks|
|Credential theft|

---

MEMORY HOOK:  
**No crypto → stolen data**

---

## A03:2021 — INJECTION

### Core Definition

|Item|Memorize|
|---|---|
|Meaning|Untrusted input interpreted as commands|
|Root Cause|Lack of input validation|

---

### Injection Types

|Type|
|---|
|SQL Injection|
|NoSQL Injection|
|OS Command Injection|
|LDAP Injection|
|XPath Injection|

---

### Injection Logic

|Step|Action|
|---|---|
|1|Attacker submits crafted input|
|2|Application trusts input|
|3|Interpreter executes payload|

---

### Impact

|Impact|
|---|
|Data loss|
|Authentication bypass|
|Remote code execution|

---

## A04:2021 — INSECURE DESIGN

### Core Definition

|Item|Memorize|
|---|---|
|Meaning|Missing or ineffective security controls|
|Phase|Design stage|

---

### Characteristics

|Characteristic|
|---|
|No threat modeling|
|Missing business logic validation|
|Insecure workflows|

---

### Exam Trap

|Trap|Correct|
|---|---|
|Coding bug|NO|
|Design flaw|YES|

---

## A05:2021 — SECURITY MISCONFIGURATION

### Core Definition

|Item|Memorize|
|---|---|
|Meaning|Incorrect security configuration|
|Layer|Application, server, platform|

---

### Examples

|Example|
|---|
|Default credentials|
|Verbose errors|
|Unnecessary services|
|Directory listing|
|Unpatched software|

---

### Impact

|Impact|
|---|
|Information disclosure|
|Full compromise|

---

## A06:2021 — VULNERABLE AND OUTDATED COMPONENTS

### Core Definition

|Item|Memorize|
|---|---|
|Meaning|Using components with known vulnerabilities|
|Includes|Libraries, frameworks, OS|

---

### Causes

|Cause|
|---|
|No inventory|
|No patching|
|Unsupported software|

---

### Impact

|Impact|
|---|
|Exploitable known CVEs|
|Full system compromise|

---

MEMORY HOOK:  
**Old = exploitable**

---

## A07:2021 — IDENTIFICATION AND AUTHENTICATION FAILURES

### Core Definition

|Item|Memorize|
|---|---|
|Meaning|Weak or broken auth mechanisms|
|Replaces|Broken Authentication|

---

### Examples

|Example|
|---|
|Weak passwords|
|No MFA|
|Session fixation|
|Credential stuffing|

---

### Impact

|Impact|
|---|
|Account takeover|
|Privilege escalation|

---

## A08:2021 — SOFTWARE AND DATA INTEGRITY FAILURES

### Core Definition

|Item|Memorize|
|---|---|
|Meaning|Lack of integrity verification|
|Target|Updates, CI/CD, serialized data|

---

### Examples

|Example|
|---|
|Unsigned updates|
|Insecure deserialization|
|Compromised plugins|

---

### Impact

|Impact|
|---|
|Remote code execution|
|Supply-chain compromise|

---

## A09:2021 — SECURITY LOGGING AND MONITORING FAILURES

### Core Definition

|Item|Memorize|
|---|---|
|Meaning|Inability to detect attacks|
|Root Cause|Missing or weak logging|

---

### Examples

|Example|
|---|
|No logs|
|Logs not monitored|
|No alerts|

---

### Impact

|Impact|
|---|
|Delayed breach detection|
|Extended attacker persistence|

---

## A10:2021 — SERVER-SIDE REQUEST FORGERY (SSRF)

### Core Definition

|Item|Memorize|
|---|---|
|Meaning|Server makes unauthorized requests|
|Controlled By|Attacker input|

---

### SSRF Logic

|Step|Action|
|---|---|
|1|Attacker supplies URL|
|2|Server fetches resource|
|3|Internal systems accessed|

---

### Impact

|Impact|
|---|
|Internal port scanning|
|Cloud metadata access|
|Credential leakage|

---

MEMORY HOOK:  
**Server becomes attacker’s proxy**

---


## EXAM EXTRAS (Boson Practice Test)

### XXE (XML EXTERNAL ENTITY)

|Item|Memorize|
|---|---|
|XXE|XML injection that targets XML libraries using `<!DOCTYPE>`|

---

### IDOR (INSECURE DIRECT OBJECT REFERENCE)

|Item|Memorize|
|---|---|
|IDOR|Vulnerability allowing access to unauthorized resources by manipulating object references|

---

### WS-SECURITY

|Item|Memorize|
|---|---|
|WS-Security|Provides integrity and confidentiality for SOAP messages|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Broken Access Control (A01) | Failure to enforce restrictions on authenticated users, allowing unauthorized actions |
| Cryptographic Failures (A02) | Improper use or absence of cryptography affecting data in transit and at rest |
| Injection (A03) | Untrusted input interpreted as commands due to lack of input validation |
| Insecure Design (A04) | Missing or ineffective security controls at the design stage, not a coding bug |
| Security Misconfiguration (A05) | Incorrect security configuration across application, server, or platform layers |
| Vulnerable and Outdated Components (A06) | Using libraries, frameworks, or OS with known CVEs and no patching |
| Identification and Authentication Failures (A07) | Weak or broken auth mechanisms such as weak passwords, no MFA, session fixation |
| Software and Data Integrity Failures (A08) | Lack of integrity verification in updates, CI/CD pipelines, and serialized data |
| Security Logging and Monitoring Failures (A09) | Inability to detect attacks due to missing or weak logging and no alerts |
| SSRF — Server-Side Request Forgery (A10) | Server makes unauthorized requests to internal systems controlled by attacker input |
| XXE — XML External Entity | XML injection targeting XML libraries using `<!DOCTYPE>` declarations |
| IDOR — Insecure Direct Object Reference | Manipulating object references to access unauthorized resources |
| WS-Security | Protocol providing integrity and confidentiality for SOAP messages |

---

# PRACTICE QUESTIONS

**1.** Which OWASP Top 10 (2021) category replaces the previous "Broken Authentication" category?
- a) A01 — Broken Access Control
- b) A07 — Identification and Authentication Failures
- c) A08 — Software and Data Integrity Failures
- d) A05 — Security Misconfiguration
**Answer:** B — A07:2021 Identification and Authentication Failures replaces the old Broken Authentication category.

**2.** An attacker supplies a URL via a form field and the server fetches the resource, exposing internal cloud metadata. Which vulnerability is this?
- a) SQL Injection
- b) Insecure Design
- c) Server-Side Request Forgery (SSRF)
- d) IDOR
**Answer:** C — SSRF occurs when the server makes requests on behalf of the attacker, accessing internal systems like cloud metadata endpoints.

**3.** A developer skips threat modeling during the design phase, resulting in missing security controls. This is classified under which OWASP category?
- a) A03 — Injection
- b) A04 — Insecure Design
- c) A05 — Security Misconfiguration
- d) A06 — Vulnerable and Outdated Components
**Answer:** B — Insecure Design (A04) is a design-stage flaw, not a coding bug — it reflects missing threat modeling and business logic validation.

**4.** Which of the following is a characteristic of Broken Access Control (A01)?
- a) Using weak encryption algorithms
- b) IDOR and metadata manipulation allowing unauthorized resource access
- c) Server fetching internal resources via attacker-controlled URLs
- d) Missing logging and monitoring of security events
**Answer:** B — Broken Access Control includes IDOR, metadata manipulation, and force browsing that bypass authorization checks.

**5.** An application uses default admin credentials and displays verbose stack traces on errors. Which OWASP category do these issues fall under?
- a) A02 — Cryptographic Failures
- b) A07 — Identification and Authentication Failures
- c) A05 — Security Misconfiguration
- d) A09 — Security Logging and Monitoring Failures
**Answer:** C — Default credentials and verbose error messages are classic examples of Security Misconfiguration (A05).
