# OBJECTIVE 03 — CLOUD COMPUTING ATTACK TOOLS AND TECHNIQUES

---

## CLOUD ATTACK SURFACE (EXAM FOUNDATION)

|Attack Surface|
|---|
|Cloud management console|
|APIs|
|IAM|
|Storage services|
|Virtual machines|
|Containers|
|Metadata services|

MEMORY HOOK:  
**Console + API + IAM = control**

---

# CLOUD RECONNAISSANCE TECHNIQUES

---

## CLOUD ASSET DISCOVERY

|Technique|Explanation|
|---|---|
|DNS enumeration|Identify cloud-hosted domains|
|IP range identification|Map provider IPs|
|Service fingerprinting|Detect cloud services|
|OSINT|Public cloud metadata|

---

## OSINT TOOLS FOR CLOUD RECON

|Tool|Purpose|
|---|---|
|Shodan|Find cloud services|
|Censys|Discover exposed cloud assets|
|Amass|DNS enumeration|
|theHarvester|Email & domain info|

MEMORY HOOK:  
**Recon starts outside cloud**

---

# CLOUD MISCONFIGURATION DISCOVERY (TOP EXAM AREA)

---

## STORAGE ENUMERATION

|Target|Method|
|---|---|
|S3 buckets|Name guessing|
|Azure blobs|Public access checks|
|Google buckets|Enumeration|

MEMORY HOOK:  
**Public storage = data leak**

---

## COMMON MISCONFIGURATIONS

|Misconfiguration|
|---|
|Public buckets|
|Over-permissive IAM|
|Open management ports|
|No logging enabled|
|Default credentials|

---

# CLOUD EXPLOITATION TECHNIQUES

---

## IAM ATTACK TECHNIQUES (VERY IMPORTANT)

---

### CREDENTIAL HARVESTING

|Method|
|---|
|Phishing|
|Malware|
|GitHub secrets leakage|
|Metadata service abuse|

MEMORY HOOK:  
**Credentials = cloud access**

---

### PRIVILEGE ESCALATION IN CLOUD

|Technique|
|---|
|Role chaining|
|Policy abuse|
|Misconfigured trust relationships|

EXAM TRAP:  
Cloud privilege escalation is POLICY-based, not kernel-based.

MEMORY HOOK:  
**Policies = power**

---

## METADATA SERVICE ATTACKS (HIGH-YIELD)

---

### WHAT IS METADATA SERVICE

|Item|Explanation|
|---|---|
|Metadata service|Internal endpoint providing instance info|
|Access|No authentication from VM|

---

### ATTACK METHOD

|Step|
|---|
|Exploit SSRF|
|Query metadata endpoint|
|Extract credentials|

MEMORY HOOK:  
**SSRF → metadata → creds**

---

## CLOUD MALWARE INJECTION

|Step|
|---|
|Inject malicious service|
|Register as valid instance|
|Execute payload|

---

## VM ATTACK TECHNIQUES

|Technique|
|---|
|Snapshot abuse|
|Disk image extraction|
|VM cloning|

---

## CONTAINER ATTACK TECHNIQUES

---

### CONTAINER ESCAPE

|Cause|
|---|
|Privileged containers|
|Kernel vulnerabilities|
|Misconfigured namespaces|

MEMORY HOOK:  
**Container ≠ VM**

---

### IMAGE POISONING

|Method|
|---|
|Backdoored images|
|Public registries|

---

# CLOUD-SPECIFIC ATTACK TOOLS (EXAM LIST)

---

## AWS ATTACK TOOLS

|Tool|Purpose|
|---|---|
|Pacu|AWS exploitation framework|
|Prowler|AWS security auditing|
|ScoutSuite|Multi-cloud auditing|
|CloudMapper|AWS visualization|

---

## AZURE ATTACK TOOLS

|Tool|Purpose|
|---|---|
|MicroBurst|Azure penetration testing|
|Stormspotter|Azure attack path mapping|

---

## GCP ATTACK TOOLS

|Tool|Purpose|
|---|---|
|GCPBucketBrute|Bucket enumeration|
|GCPEnum|Resource discovery|

---

## GENERIC CLOUD TOOLS

|Tool|Purpose|
|---|---|
|Metasploit|Cloud exploitation|
|Nuclei|Misconfiguration scanning|
|Burp Suite|API testing|

---

# CLOUD API ATTACKS (CRITICAL)

---

## API ATTACK TECHNIQUES

|Technique|
|---|
|Broken authentication|
|Broken authorization|
|Excessive data exposure|
|Injection attacks|

MEMORY HOOK:  
**APIs are the cloud**

---

# CLOUD ATTACK FLOW (EXAM LOGIC)

1. OSINT and recon
    
2. Identify misconfiguration
    
3. Exploit IAM/API
    
4. Escalate privileges
    
5. Persist via keys or roles
    

MEMORY HOOK:  
**Find → Misconfig → IAM → Persist**

---

# CLOUD LOG EVASION TECHNIQUES

|Technique|
|---|
|Disable logging|
|Delete trails|
|Rotate keys|

EXAM TRAP:  
Logging deletion is a red flag in exams.

---

# EXAM TRAPS (VERY IMPORTANT)

|Trap|Correct Understanding|
|---|---|
|VM escape is common|False|
|IAM attacks need exploits|False|
|Cloud attacks are network-based|False|
|Encryption stops attackers|False|

---

# OBJECTIVE 03 — EXAM MEMORY BLOCK

**Cloud attacks focus on IAM misuse, API abuse, and misconfiguration.  
Metadata services expose credentials.  
Most privilege escalation is policy-based.  
Attackers persist using keys and roles.**

---

## STATUS

|Objective|Status|
|---|---|
|Recon|COMPLETE|
|Exploitation|COMPLETE|
|Tools|COMPLETE|
|Exam readiness|HIGH|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Cloud Attack Surface | Management console, APIs, IAM, storage, VMs, containers, metadata services |
| Cloud Asset Discovery | DNS enumeration, IP range mapping, service fingerprinting, OSINT |
| Storage Enumeration | Discovering and exploiting public S3 buckets, Azure blobs, Google buckets |
| Credential Harvesting | Collecting cloud credentials via phishing, malware, GitHub leakage, metadata abuse |
| Privilege Escalation in Cloud | Policy-based escalation through role chaining, policy abuse, trust relationship exploitation |
| Metadata Service | Internal endpoint providing instance info; accessible from VM without authentication |
| Container Escape | Breaking out of container due to privileged containers, kernel vulnerabilities, or misconfigured namespaces |
| Image Poisoning | Injecting backdoors into container images in public registries |
| Pacu | AWS exploitation framework for privilege escalation and persistence |
| Prowler | AWS security auditing tool |
| ScoutSuite | Multi-cloud auditing tool |
| MicroBurst | Azure penetration testing tool |
| Stormspotter | Azure attack path mapping tool |
| CloudMapper | AWS visualization tool |
| GCPBucketBrute | GCP bucket enumeration tool |
| API Attack | Broken authentication, broken authorization, excessive data exposure, injection attacks |
| Cloud Log Evasion | Disabling logging, deleting trails, rotating keys to cover tracks |

---

# PRACTICE QUESTIONS

**1.** An attacker discovers a publicly accessible S3 bucket containing sensitive data. Which technique did they use?
- a) Privilege escalation
- b) Storage enumeration
- c) Container escape
- d) Metadata service attack
**Answer:** b) — Storage enumeration involves discovering and exploiting public cloud storage like S3 buckets.

**2.** How does privilege escalation differ in cloud environments compared to traditional systems?
- a) It uses kernel exploits
- b) It is policy-based, exploiting IAM roles and trust relationships
- c) It requires physical access
- d) It is impossible in cloud
**Answer:** b) — Cloud privilege escalation is policy-based, exploiting misconfigured IAM roles and trust relationships rather than kernel vulnerabilities.

**3.** What is the primary risk of the cloud metadata service?
- a) It stores user passwords
- b) It provides instance credentials without authentication from within the VM
- c) It encrypts all data by default
- d) It cannot be accessed remotely
**Answer:** b) — The metadata service provides credentials and tokens that can be extracted via SSRF attacks.

**4.** Which tool is used for Azure penetration testing?
- a) Pacu
- b) Prowler
- c) MicroBurst
- d) CloudMapper
**Answer:** c) — MicroBurst is specifically designed for Azure penetration testing.

**5.** An attacker modifies cloud audit logs to hide their activity. What technique is this?
- a) Credential harvesting
- b) Cloud log evasion
- c) Storage enumeration
- d) Container escape
**Answer:** b) — Cloud log evasion involves disabling logging, deleting trails, or rotating keys to cover tracks.

