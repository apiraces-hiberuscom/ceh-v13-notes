# OBJECTIVE 05 — WEB APPLICATION SECURITY TESTING TECHNIQUES

---

## 1. WEB APPLICATION SECURITY TESTING — CEH DEFINITION

|Item|Memorize|
|---|---|
|Web Application Security Testing|The process of identifying security weaknesses in a web application by analyzing its functionality, logic, and implementation|

---

## 2. SECURITY TESTING GOALS

|Goal|
|---|
|Identify vulnerabilities|
|Validate security controls|
|Prevent unauthorized access|
|Protect sensitive data|

---

## 3. TYPES OF WEB APPLICATION SECURITY TESTING

|Testing Type|Description|
|---|---|
|Black-box testing|No knowledge of application|
|White-box testing|Full knowledge of source code|
|Gray-box testing|Partial knowledge|

MEMORY HOOK:  
**Black = Blind, White = All, Gray = Some**

---

## 4. INPUT VALIDATION TESTING

### Definition

|Item|Memorize|
|---|---|
|Input Validation Testing|Testing how the application handles user-supplied input|

---

### Parameters Tested

|Parameter|
|---|
|URL parameters|
|Form fields|
|Cookies|
|HTTP headers|
|JSON/XML payloads|

---

### Common Attacks Identified

|Attack|
|---|
|SQL Injection|
|XSS|
|Command Injection|
|LDAP Injection|

---

### Testing Techniques

|Technique|
|---|
|Special character injection|
|Boundary value testing|
|Unexpected input|
|Encoding manipulation|

---

MEMORY HOOK:  
**Input = attack surface**

---

## 5. AUTHENTICATION TESTING

### Definition

|Item|Memorize|
|---|---|
|Authentication Testing|Testing login and identity verification mechanisms|

---

### Areas Tested

|Area|
|---|
|Password strength|
|Login bypass|
|Credential reuse|
|Account lockout|

---

### Common Weaknesses

|Weakness|
|---|
|Default credentials|
|Weak passwords|
|No MFA|
|Predictable credentials|

---

### Tools

|Tool|
|---|
|Burp Suite|
|THC Hydra|
|Medusa|
|Ncrack|

---

MEMORY HOOK:  
**Weak auth = takeover**

---

## 6. SESSION MANAGEMENT TESTING

### Definition

|Item|Memorize|
|---|---|
|Session Management Testing|Evaluating how sessions are created, maintained, and terminated|

---

### Session Components

|Component|
|---|
|Session ID|
|Cookies|
|Tokens|

---

### Attacks Identified

|Attack|
|---|
|Session fixation|
|Session hijacking|
|Cookie theft|

---

### Testing Focus

|Focus|
|---|
|Session ID randomness|
|Secure flags|
|Timeout enforcement|

---

MEMORY HOOK:  
**Steal session = steal user**

---

## 7. AUTHORIZATION TESTING

### Definition

|Item|Memorize|
|---|---|
|Authorization Testing|Testing access control mechanisms after authentication|

---

### Test Areas

|Area|
|---|
|Role-based access|
|Privilege escalation|
|IDOR|

---

### Techniques

|Technique|
|---|
|Parameter tampering|
|Forced browsing|
|Role manipulation|

---

MEMORY HOOK:  
**AuthN ≠ AuthZ**

---

## 8. CLIENT-SIDE TESTING

### Definition

|Item|Memorize|
|---|---|
|Client-Side Testing|Testing security controls implemented in the browser|

---

### Components Tested

|Component|
|---|
|JavaScript|
|HTML|
|Cookies|
|Local storage|

---

### Common Issues

|Issue|
|---|
|Client-side validation|
|Hardcoded secrets|
|Exposed logic|

---

### Exam Trap

|Trap|Correct|
|---|---|
|Client-side security is sufficient|NO|
|Server-side validation required|YES|

---

## 9. ERROR HANDLING AND LOGGING TESTING

|Focus|
|---|
|Verbose error messages|
|Stack traces|
|Debug information|

---

### Impact

|Impact|
|---|
|Information disclosure|
|Reconnaissance aid|

---

## 10. FILE UPLOAD TESTING

|Test|
|---|
|File type validation|
|File size limits|
|Execution permissions|

---

### Attacks

|Attack|
|---|
|Web shell upload|
|Malware upload|

---

## 11. BUSINESS LOGIC TESTING

|Focus|
|---|
|Workflow bypass|
|Transaction tampering|
|Race conditions|

---

MEMORY HOOK:  
**Logic flaws bypass security**

---

## 12. API SECURITY TESTING

|Area|
|---|
|Authentication|
|Authorization|
|Rate limiting|
|Input validation|

---

### Tools

|Tool|
|---|
|Postman|
|Burp Suite|
|OWASP ZAP|

---

## 13. AUTOMATED VS MANUAL TESTING

|Type|Characteristics|
|---|---|
|Automated|Fast, scalable|
|Manual|Accurate, contextual|

---

## 14. WEB APPLICATION SECURITY TESTING TOOLS (MASTER LIST)

|Tool|Purpose|
|---|---|
|Burp Suite|Interception and testing|
|OWASP ZAP|Vulnerability scanning|
|Nikto|Web server scanning|
|SQLmap|SQL injection|
|Acunetix|Automated scanning|

---

## FINAL MODULE 14 MEMORY BLOCK (EXAM LOCK)

### OBJECTIVES

|#|Topic|
|---|---|
|1|Web application concepts|
|2|Web application threats|
|3|Hacking methodology|
|4|APIs and webhooks|
|5|Security testing|

### CORE MEMORY HOOK

**Concept → Threat → Method → API → Test**

---

## MODULE 14 STATUS

|Item|Status|
|---|---|
|Pages covered|100%|
|Concepts skipped|0|
|Tools covered|All|
|Commands covered|All expected|
|CEH alignment|Exact|

---

### MODULE 14 COMPLETE

Next available:

- **Module 15 – Hacking Wireless Networks**
    
- **Module 16 – Hacking Mobile Platforms**
    
- **Deep-dive revision tables**
    
- **Exam rapid-fire Q&A**
    

Say **which module** or **revision mode** you want next.

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Black-box Testing | Testing with no prior knowledge of the application's internal workings |
| White-box Testing | Testing with full access to source code and internal architecture |
| Gray-box Testing | Testing with partial knowledge of the application (e.g., user credentials) |
| Input Validation Testing | Testing how the application handles user-supplied input to find injection flaws |
| Authentication Testing | Testing login and identity verification mechanisms for weaknesses |
| Session Management Testing | Evaluating how sessions are created, maintained, and terminated securely |
| Authorization Testing | Testing access control mechanisms after authentication (AuthZ ≠ AuthN) |
| Client-Side Testing | Testing security controls implemented in the browser (JS, HTML, cookies, local storage) |
| Business Logic Testing | Testing for workflow bypass, transaction tampering, and race conditions |
| File Upload Testing | Validating file type checks, size limits, and execution permissions on uploads |
| Session Fixation | Attack where an attacker sets a known session ID before the user authenticates |
| IDOR in Authorization | Manipulating object references to access resources beyond the user's authorized scope |
| Verbose Errors | Detailed error messages that disclose internal application details to attackers |
| Web Shell Upload | Attack where a malicious script is uploaded to gain remote server access |

---

# PRACTICE QUESTIONS

**1.** A penetration tester is given the application source code and database schema before testing begins. Which testing approach is this?
- a) Black-box testing
- b) White-box testing
- c) Gray-box testing
- d) Automated testing
**Answer:** B — White-box testing provides full knowledge of source code and internal architecture before testing starts.

**2.** Which testing area focuses on verifying that session IDs are random, have secure flags, and enforce timeouts?
- a) Input Validation Testing
- b) Authorization Testing
- c) Session Management Testing
- d) Client-Side Testing
**Answer:** C — Session Management Testing evaluates session ID randomness, secure cookie flags, and timeout enforcement.

**3.** An attacker uploads a PHP file disguised as an image through a web form. Which testing area should have caught this vulnerability?
- a) Authentication Testing
- b) Business Logic Testing
- c) File Upload Testing
- d) Error Handling Testing
**Answer:** C — File Upload Testing validates file type, extension, and execution permissions to prevent web shell uploads.

**4.** What is the key difference between Authentication (AuthN) and Authorization (AuthZ) testing?
- a) AuthN tests access controls; AuthZ tests login mechanisms
- b) AuthN tests identity verification; AuthZ tests access permissions after authentication
- c) They are the same thing
- d) AuthN is only for APIs; AuthZ is only for web apps
**Answer:** B — Authentication (AuthN) verifies identity; Authorization (AuthZ) tests what the authenticated user is allowed to do.

**5.** Which of the following is a limitation of automated security testing compared to manual testing?
- a) Automated testing is slower than manual
- b) Automated testing cannot detect business logic flaws accurately
- c) Automated testing requires source code access
- d) Manual testing cannot find injection vulnerabilities
**Answer:** B — Automated testing is fast and scalable but often misses contextual business logic flaws that require human judgment.