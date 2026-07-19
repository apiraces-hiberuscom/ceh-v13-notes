# OBJECTIVE 03 — WEB APPLICATION HACKING METHODOLOGY

## CEH CORE PRINCIPLE (MEMORIZE)

|Item|Memorize|
|---|---|
|Web Application Hacking Methodology|A systematic process used by attackers to identify, analyze, exploit, and maintain access to vulnerabilities in web applications|

---

## PHASES OF WEB APPLICATION HACKING (EXAM ORDER)

|Phase No.|Phase Name|
|---|---|
|1|Information Gathering|
|2|Web Application Footprinting|
|3|Vulnerability Scanning|
|4|Web Application Enumeration|
|5|Exploitation|
|6|Post-Exploitation|
|7|Maintaining Access|
|8|Covering Tracks|

MEMORY HOOK:  
**I F S E E P M C**

---

## PHASE 1 — INFORMATION GATHERING

### Objective

|Goal|
|---|
|Collect maximum information about the target web application|

---

### Information Collected

|Category|
|---|
|Domain name|
|IP address|
|Server location|
|Hosting provider|
|Technologies used|

---

### Tools (CEH-EXPECTED)

|Tool|Purpose|
|---|---|
|Whois|Domain ownership|
|Nslookup|DNS records|
|Dig|DNS enumeration|
|Netcraft|Hosting and OS info|
|Google Dorks|Sensitive data discovery|

---

### Memory Hook

**Who owns it → Where it is → What runs it**

---

## PHASE 2 — WEB APPLICATION FOOTPRINTING

### Objective

|Goal|
|---|
|Identify technologies, frameworks, and entry points|

---

### Information Identified

|Item|
|---|
|Web server type|
|OS|
|CMS|
|Programming language|
|Framework|

---

### Tools

|Tool|Purpose|
|---|---|
|Wappalyzer|Tech stack detection|
|BuiltWith|Framework identification|
|WhatWeb|Server fingerprinting|
|Netcraft|OS and server details|

---

### Exam Trap

|Trap|Correct|
|---|---|
|Footprinting = scanning|NO|
|Footprinting = passive recon|YES|

---

## PHASE 3 — VULNERABILITY SCANNING

### Objective

|Goal|
|---|
|Identify known vulnerabilities|

---

### Scanner Types

|Type|
|---|
|Automated scanners|
|Signature-based scanners|

---

### Tools

|Tool|Purpose|
|---|---|
|Nikto|Web server vulnerabilities|
|Nessus|General vulnerability scanning|
|OpenVAS|Vulnerability detection|
|Acunetix|Web app scanning|

---

### Output

|Output|
|---|
|CVE IDs|
|Vulnerability severity|
|Affected components|

---

MEMORY HOOK:  
**Scanner ≠ exploit**

---

## PHASE 4 — WEB APPLICATION ENUMERATION

### Objective

|Goal|
|---|
|Extract detailed application-level data|

---

### Enumeration Targets

|Target|
|---|
|Directories|
|Files|
|Parameters|
|User roles|
|APIs|

---

### Tools

|Tool|Purpose|
|---|---|
|Dirb|Directory brute-force|
|Gobuster|Content discovery|
|Burp Suite|Parameter analysis|
|wfuzz|Parameter fuzzing|

---

### Exam Trap

|Trap|Correct|
|---|---|
|Enumeration is passive|NO|
|Enumeration is active|YES|

---

## PHASE 5 — EXPLOITATION

### Objective

|Goal|
|---|
|Exploit identified vulnerabilities|

---

### Common Exploits

|Exploit|
|---|
|SQL Injection|
|XSS|
|Command Injection|
|File Inclusion|
|Authentication bypass|

---

### Tools

|Tool|Purpose|
|---|---|
|SQLmap|SQL injection exploitation|
|Metasploit|Exploit framework|
|Burp Suite|Manual exploitation|
|BeEF|Browser exploitation|

---

### Impact

|Impact|
|---|
|Data compromise|
|Shell access|
|Privilege escalation|

---

## PHASE 6 — POST-EXPLOITATION

### Objective

|Goal|
|---|
|Expand access and collect data|

---

### Activities

|Activity|
|---|
|Credential harvesting|
|Data exfiltration|
|Lateral movement|

---

### Tools

|Tool|
|---|
|Meterpreter|
|Mimikatz|
|Custom scripts|

---

## PHASE 7 — MAINTAINING ACCESS

### Objective

|Goal|
|---|
|Ensure persistent access|

---

### Techniques

|Technique|
|---|
|Backdoors|
|Web shells|
|Scheduled tasks|

---

### Exam Note

Persistence ≠ initial exploitation

---

## PHASE 8 — COVERING TRACKS

### Objective

|Goal|
|---|
|Hide attacker presence|

---

### Techniques

|Technique|
|---|
|Log deletion|
|Log modification|
|Timestamp manipulation|

---

## COMPLETE METHODOLOGY FLOW (EXAM GOLD)

|Order|
|---|
|Recon|
|Footprint|
|Scan|
|Enumerate|
|Exploit|
|Post-exploit|
|Persist|
|Cover|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Information Gathering | Phase 1 — collecting domain, IP, hosting, and technology data about the target |
| Web Application Footprinting | Phase 2 — identifying web server type, OS, CMS, frameworks, and entry points (passive recon) |
| Vulnerability Scanning | Phase 3 — using automated scanners to identify known CVEs and vulnerability severity |
| Web Application Enumeration | Phase 4 — actively extracting directories, files, parameters, user roles, and APIs |
| Exploitation | Phase 5 — using tools like SQLmap, Metasploit, and Burp Suite to exploit identified vulnerabilities |
| Post-Exploitation | Phase 6 — expanding access through credential harvesting, data exfiltration, and lateral movement |
| Maintaining Access | Phase 7 — ensuring persistence via backdoors, web shells, and scheduled tasks |
| Covering Tracks | Phase 8 — hiding attacker presence through log deletion and timestamp manipulation |
| Google Dorks | Search engine queries used to discover sensitive data exposed on the web |
| Wappalyzer | Tool for detecting a target's technology stack (frameworks, CMS, languages) |
| Dirb / Gobuster | Tools for directory brute-forcing and content discovery during enumeration |
| SQLmap | Automated tool for detecting and exploiting SQL injection vulnerabilities |
| BeEF | Browser Exploitation Framework used for client-side attacks after exploitation |
| Footprinting vs Scanning | Footprinting is passive recon; scanning is active vulnerability detection |

---

# PRACTICE QUESTIONS

**1.** What is the correct order of the 8 phases in the CEH web application hacking methodology?
- a) Footprint → Recon → Scan → Enumerate → Exploit → Post-exploit → Persist → Cover
- b) Recon → Footprint → Scan → Enumerate → Exploit → Post-exploit → Persist → Cover
- c) Recon → Scan → Footprint → Enumerate → Exploit → Post-exploit → Cover → Persist
- d) Scan → Recon → Footprint → Enumerate → Exploit → Cover → Post-exploit → Persist
**Answer:** B — The correct sequence is Recon → Footprint → Scan → Enumerate → Exploit → Post-exploit → Persist → Cover.

**2.** Which tool is primarily used for directory brute-forcing during the enumeration phase?
- a) Whois
- b) Wappalyzer
- c) Gobuster
- d) SQLmap
**Answer:** C — Gobuster (and Dirb) are used for directory brute-forcing and content discovery during Phase 4 enumeration.

**3.** An attacker uses Google search queries like `site:target.com filetype:pdf` to find exposed documents. Which phase does this belong to?
- a) Web Application Footprinting
- b) Information Gathering
- c) Vulnerability Scanning
- d) Exploitation
**Answer:** B — Google Dorks are part of Information Gathering (Phase 1), used to discover sensitive data through search engine queries.

**4.** What is the key difference between footprinting and scanning in the CEH methodology?
- a) Footprinting is active; scanning is passive
- b) Footprinting is passive recon; scanning is active vulnerability detection
- c) Both are passive activities
- d) Scanning only occurs after exploitation
**Answer:** B — Footprinting is passive technology identification while scanning actively probes for known vulnerabilities.

**5.** Which tool would an attacker use to automate SQL injection exploitation?
- a) Wappalyzer
- b) Burp Suite
- c) SQLmap
- d) Netcraft
**Answer:** C — SQLmap is the dedicated automated tool for detecting and exploiting SQL injection vulnerabilities during the exploitation phase.

