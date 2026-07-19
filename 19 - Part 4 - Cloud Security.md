# OBJECTIVE 04 — CLOUD SECURITY CONTROLS AND COUNTERMEASURES

---

## CLOUD SECURITY RESPONSIBILITY MODEL (ABSOLUTELY CRITICAL)

### SHARED RESPONSIBILITY MODEL

|Cloud Provider Responsible For|Customer Responsible For|
|---|---|
|Physical data centers|Data|
|Hardware|IAM configuration|
|Network infrastructure|OS and applications|
|Hypervisor|Encryption|
|Physical security|Patch management|

MEMORY HOOK:  
**Provider secures the cloud, customer secures what’s in the cloud**

EXAM TRAP:  
Customers ARE responsible for data breaches caused by misconfiguration.

---

## IDENTITY AND ACCESS MANAGEMENT (IAM) CONTROLS

---

### IAM SECURITY CONTROLS

|Control|Purpose|
|---|---|
|Least privilege|Restrict permissions|
|Role-based access|Eliminate shared credentials|
|MFA|Prevent credential abuse|
|Key rotation|Reduce credential lifetime|
|Conditional access|Context-based restrictions|

MEMORY HOOK:  
**IAM is the first line of defense**

---

### IAM BEST PRACTICES

|Practice|
|---|
|Avoid root account usage|
|Enforce MFA|
|Use roles instead of keys|
|Regular permission audits|

---

## CLOUD NETWORK SECURITY CONTROLS

---

### VIRTUAL NETWORK SECURITY

|Control|Explanation|
|---|---|
|Security Groups|Stateful firewall|
|Network ACLs|Stateless filtering|
|Private subnets|Reduce exposure|
|Bastion hosts|Secure admin access|

MEMORY HOOK:  
**Security Groups = instance firewall**

EXAM TRAP:  
Security groups are STATEFUL; NACLs are STATELESS.

---

## CLOUD DATA SECURITY CONTROLS

---

### DATA PROTECTION MECHANISMS

|Mechanism|Purpose|
|---|---|
|Encryption at rest|Protect stored data|
|Encryption in transit|Secure data transfer|
|Key management services|Centralized key control|
|Tokenization|Reduce sensitive data exposure|

---

### KEY MANAGEMENT

|Control|
|---|
|Customer-managed keys|
|Automatic key rotation|
|Hardware Security Modules (HSMs)|

MEMORY HOOK:  
**Keys protect encrypted data**

---

## CLOUD STORAGE SECURITY CONTROLS

---

### STORAGE HARDENING

|Control|
|---|
|Disable public access|
|Bucket policies|
|Access logging|
|Object versioning|

EXAM TRAP:  
Public storage exposure is the most common cloud breach cause.

---

## CLOUD COMPUTE SECURITY CONTROLS

---

### VM HARDENING

|Control|
|---|
|OS patching|
|Minimal services|
|Host-based firewall|
|Endpoint protection|

---

### CONTAINER SECURITY

|Control|
|---|
|Trusted images|
|Image scanning|
|Runtime monitoring|
|Least privilege containers|

MEMORY HOOK:  
**Containers share the kernel**

---

## CLOUD MONITORING AND LOGGING

---

### LOGGING SERVICES

|Service|Purpose|
|---|---|
|CloudTrail|API activity|
|CloudWatch|Resource monitoring|
|Azure Monitor|Logs and metrics|
|GCP Cloud Logging|Central logging|

---

### LOGGING BEST PRACTICES

|Practice|
|---|
|Enable logs by default|
|Centralize logs|
|Protect log integrity|
|Monitor anomalies|

EXAM TRAP:  
Attackers delete logs to cover tracks.

---

## CLOUD INCIDENT RESPONSE

---

### INCIDENT RESPONSE STEPS

1. Detect incident
    
2. Contain affected resources
    
3. Analyze root cause
    
4. Eradicate threat
    
5. Recover services
    
6. Perform post-incident review
    

MEMORY HOOK:  
**Detect → Contain → Recover**

---

## CLOUD BACKUP AND DISASTER RECOVERY

---

### BACKUP CONTROLS

|Control|
|---|
|Automated backups|
|Snapshot integrity|
|Cross-region replication|
|Immutable backups|

---

### DISASTER RECOVERY MODELS

|Model|
|---|
|Backup and restore|
|Pilot light|
|Warm standby|
|Multi-site|

MEMORY HOOK:  
**Higher availability = higher cost**

---

## CLOUD COMPLIANCE AND GOVERNANCE

---

### GOVERNANCE CONTROLS

|Control|
|---|
|Security policies|
|Compliance monitoring|
|Resource tagging|
|Configuration baselines|

---

### COMPLIANCE STANDARDS (EXAM LIST)

|Standard|
|---|
|ISO 27001|
|GDPR|
|HIPAA|
|PCI DSS|

---

## CLOUD SECURITY TOOLS (DEFENSIVE)

---

### CLOUD NATIVE SECURITY TOOLS

|Platform|Tool|
|---|---|
|AWS|GuardDuty|
|Azure|Defender for Cloud|
|GCP|Security Command Center|

---

### THIRD-PARTY TOOLS

|Tool|Purpose|
|---|---|
|Prisma Cloud|CSPM|
|Wiz|Cloud risk analysis|
|Lacework|Behavior monitoring|

---

## CLOUD COUNTERMEASURE SUMMARY FLOW

1. Harden IAM
    
2. Secure network
    
3. Encrypt data
    
4. Monitor continuously
    
5. Respond quickly
    

MEMORY HOOK:  
**IAM → Network → Data → Monitor**

---

## OBJECTIVE 04 — EXAM MEMORY BLOCK

**Cloud security relies on shared responsibility.  
IAM misconfiguration causes most breaches.  
Logging and monitoring detect attacks.  
Encryption protects data, but keys must be secured.**

---

## EXAM TRAPS (FINAL)

|Trap|Reality|
|---|---|
|Provider handles all security|False|
|Encryption prevents breaches|False|
|Logs are optional|False|
|Cloud is inherently secure|False|

---

## MODULE 19 STATUS

|Section|Status|
|---|---|
|Attacks|COMPLETE|
|Tools|COMPLETE|
|Countermeasures|COMPLETE|
|Exam readiness|VERY HIGH|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Shared Responsibility Model | Provider secures cloud infrastructure, customer secures data and IAM configuration |
| IAM | Identity and Access Management — first line of defense for cloud security |
| Least Privilege | Granting minimum necessary permissions to reduce attack surface |
| MFA | Multi-Factor Authentication — prevents credential abuse |
| Security Groups | Stateful firewalls controlling instance-level traffic |
| NACLs | Network Access Control Lists — stateless filtering at subnet level |
| Encryption at Rest | Protecting stored data using encryption |
| Encryption in Transit | Securing data during transfer using TLS/SSL |
| KMS | Key Management Service — centralized encryption key control |
| HSM | Hardware Security Module — dedicated cryptographic hardware |
| CloudTrail | AWS service logging API activity |
| CloudWatch | AWS service for resource monitoring and metrics |
| GuardDuty | AWS native threat detection service |
| Defender for Cloud | Azure native security tool |
| CSPM | Cloud Security Posture Management — Prisma Cloud, Wiz |
| Immutable Backups | Backups that cannot be modified or deleted |
| Pilot Light | Disaster recovery model keeping minimal infrastructure running |
| Warm Standby | Disaster recovery model with scaled-down full environment |

---

# PRACTICE QUESTIONS

**1.** In cloud security, what is the primary difference between Security Groups and NACLs?
- a) Security Groups are stateless, NACLs are stateful
- b) Security Groups are stateful, NACLs are stateless
- c) They are identical
- d) NACLs are faster
**Answer:** b) — Security Groups are stateful (return traffic automatically allowed), while NACLs are stateless (must explicitly allow both directions).

**2.** Which AWS service logs all API activity for security auditing?
- a) CloudWatch
- b) CloudTrail
- c) GuardDuty
- d) IAM
**Answer:** b) — CloudTrail records all API calls, while CloudWatch monitors resources and GuardDuty detects threats.

**3.** What is the recommended approach for cloud key management?
- a) Store keys in metadata service
- b) Use customer-managed keys with automatic rotation and HSMs
- c) Share keys across all services
- d) Never rotate keys
**Answer:** b) — Customer-managed keys with automatic rotation and HSMs provide the strongest key security.

**4.** Why are public storage exposures the most common cloud breach cause?
- a) Storage is always public
- b) Default settings often allow public access, and misconfiguration is easy
- c) Encryption is impossible for storage
- d) Cloud providers intentionally expose data
**Answer:** b) — Default storage settings often allow public access, and misconfiguration is the most frequent security error.

**5.** Which disaster recovery model provides the highest availability?
- a) Backup and restore
- b) Pilot light
- c) Warm standby
- d) Multi-site
**Answer:** d) — Multi-site provides highest availability by running full environments in multiple locations, but at highest cost.
