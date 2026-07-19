# OBJECTIVE 02 — CLOUD COMPUTING THREATS AND ATTACKS

---

## WHY CLOUD IS A TARGET (EXAM LOGIC)

|Reason|
|---|
|Shared infrastructure|
|Internet exposure|
|Misconfiguration|
|Weak access control|
|API dependency|

MEMORY HOOK:  
**Shared + exposed + misconfigured**

---

# CLOUD THREAT ACTORS (EXAM)

|Threat Actor|
|---|
|External attackers|
|Malicious insiders|
|Compromised accounts|
|Rogue administrators|

---

# CLOUD-SPECIFIC THREATS (MUST MEMORIZE)

---

## DATA BREACH

|Aspect|Explanation|
|---|---|
|What|Unauthorized access to sensitive data|
|Cause|Weak IAM, misconfiguration|
|Impact|Data loss, compliance violation|

EXAM TRAP:  
Cloud provider does NOT prevent data breaches automatically.

MEMORY HOOK:  
**Misconfig = data leak**

---

## DATA LOSS

|Aspect|Explanation|
|---|---|
|What|Permanent loss of data|
|Cause|Accidental deletion, ransomware|
|Impact|Business disruption|

---

## ACCOUNT OR SERVICE HIJACKING (VERY IMPORTANT)

|Aspect|Explanation|
|---|---|
|What|Attacker gains control of cloud account|
|Method|Phishing, credential theft|
|Impact|Full resource control|

MEMORY HOOK:  
**Account = keys to kingdom**

---

## INSECURE INTERFACES AND APIs

|Aspect|Explanation|
|---|---|
|What|Poorly protected cloud APIs|
|Risk|Unauthorized access|
|Example|No authentication, weak tokens|

EXAM TRAP:  
APIs are the PRIMARY cloud attack surface.

MEMORY HOOK:  
**Cloud = API-driven**

---

## MISCONFIGURATION (TOP EXAM ITEM)

|Example|
|---|
|Public S3 buckets|
|Open storage|
|Default credentials|
|Over-permissive IAM|

MEMORY HOOK:  
**Most cloud breaches = misconfig**

---

## MALICIOUS INSIDERS

|Aspect|Explanation|
|---|---|
|Who|Employees, contractors|
|Risk|Abuse of privileges|
|Impact|Data theft, sabotage|

---

## SHARED TECHNOLOGY VULNERABILITIES

|Aspect|Explanation|
|---|---|
|What|Weakness in shared components|
|Example|Hypervisor escape|
|Impact|Cross-tenant attacks|

MEMORY HOOK:  
**Shared hardware = shared risk**

---

## DENIAL OF SERVICE (DoS/DDoS)

|Aspect|Explanation|
|---|---|
|What|Resource exhaustion|
|Target|Availability|
|Impact|Service outage|

EXAM TRAP:  
Auto-scaling does NOT stop DDoS completely.

---

## ABUSE AND NEFARIOUS USE OF CLOUD SERVICES

|Example|
|---|
|Crypto mining|
|Malware hosting|
|Botnet C2|

MEMORY HOOK:  
**Cloud = attacker infrastructure**

---

# CLOUD ATTACK TYPES (DETAILED)

---

## CLOUD MALWARE INJECTION ATTACK

|Step|
|---|
|Attacker injects malicious service|
|Instance treated as legitimate|
|Malware executed|

MEMORY HOOK:  
**Fake instance attack**

---

## METADATA SERVICE ATTACK

|Aspect|Explanation|
|---|---|
|Target|Cloud metadata API|
|Data|Credentials, tokens|
|Example|SSRF to metadata|

MEMORY HOOK:  
**Metadata = secret store**

---

## VM ESCAPE ATTACK

|Aspect|Explanation|
|---|---|
|What|Break out of VM|
|Target|Hypervisor|
|Impact|Host compromise|

EXAM TRAP:  
Rare but critical.

---

## SIDE-CHANNEL ATTACKS

|Aspect|Explanation|
|---|---|
|What|Information leakage|
|Method|Cache timing|
|Target|Co-resident VMs|

---

# CLOUD IDENTITY & ACCESS ATTACKS

---

## IAM MISUSE

|Issue|
|---|
|Overprivileged roles|
|No MFA|
|Long-lived credentials|

MEMORY HOOK:  
**IAM mistakes = breach**

---

## TOKEN THEFT

|Method|
|---|
|XSS|
|Malware|
|SSRF|

---

# CLOUD ATTACK FLOW (EXAM LOGIC)

1. Recon cloud assets
    
2. Identify misconfiguration
    
3. Exploit IAM or API
    
4. Escalate privileges
    
5. Persist access
    

MEMORY HOOK:  
**Recon → Misconfig → IAM → Control**

---

# COMMON CLOUD ATTACK TOOLS (EXAM)

|Tool|Purpose|
|---|---|
|ScoutSuite|Cloud security auditing|
|Prowler|AWS security assessment|
|Pacu|AWS exploitation|
|CloudSploit|Misconfiguration scanning|
|Metasploit|Cloud exploitation|

---

# EXAM TRAPS (VERY IMPORTANT)

|Trap|Correct Understanding|
|---|---|
|Cloud is secure by default|False|
|Provider handles all security|False|
|Encryption prevents breaches|False|
|No need for monitoring|False|

---

# OBJECTIVE 02 — EXAM MEMORY BLOCK

**Cloud threats primarily arise from misconfiguration, weak IAM, and insecure APIs.  
Account hijacking leads to full compromise.  
Most attacks exploit configuration errors rather than vulnerabilities.  
Shared infrastructure introduces unique risks.**

---

## STATUS

|Objective|Status|
|---|---|
|Cloud threats|COMPLETE|
|Attack types|COMPLETE|
|Tools|COMPLETE|
|Exam readiness|HIGH|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Data Breach | Unauthorized access to sensitive data caused by weak IAM or misconfiguration |
| Data Loss | Permanent loss of data due to accidental deletion or ransomware |
| Account Hijacking | Attacker gains control of cloud account through phishing or credential theft |
| Insecure APIs | Poorly protected cloud APIs allowing unauthorized access |
| Misconfiguration | Most common cloud breach cause — public S3 buckets, open storage, default credentials |
| Malicious Insiders | Employees or contractors abusing privileges for data theft or sabotage |
| Shared Technology Vulnerabilities | Weaknesses in shared components like hypervisors enabling cross-tenant attacks |
| Hypervisor Escape | Breaking out of a VM to compromise the host system |
| Cloud Malware Injection | Injecting malicious service that appears as legitimate instance |
| Metadata Service Attack | Exploiting SSRF to access cloud metadata endpoints containing credentials |
| VM Escape Attack | Rare but critical attack breaking out of virtual machine boundaries |
| Side-Channel Attack | Information leakage through cache timing or power analysis on co-resident VMs |
| IAM Misuse | Overprivileged roles, missing MFA, long-lived credentials |
| Token Theft | Stealing cloud tokens via XSS, malware, or SSRF |
| ScoutSuite | Cloud security auditing tool |
| Prowler | AWS security assessment tool |
| Pacu | AWS exploitation framework |

---

# PRACTICE QUESTIONS

**1.** What is the most common cause of cloud data breaches?
- a) Physical theft of servers
- b) Misconfiguration of cloud services
- c) Hardware failure
- d) Natural disasters
**Answer:** b) — Misconfiguration, such as public S3 buckets and over-permissive IAM, is the leading cause of cloud breaches.

**2.** An attacker exploits SSRF to access the cloud metadata service and extract instance credentials. What type of attack is this?
- a) Side-channel attack
- b) VM escape attack
- c) Metadata service attack
- d) Cloud malware injection
**Answer:** c) — Metadata service attacks use SSRF to query internal endpoints containing credentials and tokens.

**3.** Which tool is specifically designed for AWS exploitation?
- a) ScoutSuite
- b) CloudSploit
- c) Pacu
- d) Metasploit
**Answer:** c) — Pacu is an AWS exploitation framework, while ScoutSuite is for auditing and CloudSploit for scanning.

**4.** Why are APIs considered the primary cloud attack surface?
- a) APIs are always unencrypted
- b) Cloud is entirely API-driven, and poor protection leads to unauthorized access
- c) APIs are slower than direct connections
- d) APIs cannot be monitored
**Answer:** b) — Cloud services are accessed via APIs, making them the primary attack vector when poorly protected.

**5.** What is a shared technology vulnerability in cloud computing?
- a) Using the same password across services
- b) Weaknesses in shared components like hypervisors enabling cross-tenant attacks
- c) Sharing files with colleagues
- d) Using public Wi-Fi
**Answer:** b) — Shared technology vulnerabilities exploit weaknesses in hypervisors or shared infrastructure affecting multiple tenants.

