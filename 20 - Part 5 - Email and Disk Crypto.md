# OBJECTIVE 05 — DIGITAL CERTIFICATES AND PKI

---

## WHY PKI EXISTS (START HERE)

### THE CORE PROBLEM PKI SOLVES

|Problem|
|---|
|How do you trust that a public key actually belongs to the real entity?|

Example problem (EXAM SCENARIO):

- Attacker gives you **their** public key
    
- Claims it belongs to a bank
    
- You encrypt data → attacker decrypts
    

MEMORY HOOK:  
**Public keys need trust**

---

## WHAT IS PKI (DEFINITION)

|Term|CEH Definition|
|---|---|
|Public Key Infrastructure (PKI)|A framework that manages digital certificates, public keys, and trust relationships|

PKI PROVIDES:

- Authentication
    
- Integrity
    
- Confidentiality
    
- Non-repudiation
    

MEMORY HOOK:  
**PKI = trust framework**

---

## CORE PKI COMPONENTS (ABSOLUTELY EXAM-CRITICAL)

---

### 1. CERTIFICATE AUTHORITY (CA)

|Property|Explanation|
|---|---|
|Role|Trusted third party|
|Function|Issues and signs certificates|
|Trust|Implicitly trusted by systems|

Examples:

- DigiCert
    
- GlobalSign
    
- Let’s Encrypt
    

MEMORY HOOK:  
**CA = trust anchor**

EXAM TRAP:  
CA ≠ encryption provider.

---

### 2. DIGITAL CERTIFICATE

|Property|Explanation|
|---|---|
|Contains|Public key + identity|
|Issued by|CA|
|Purpose|Bind identity to key|

---

### WHAT A DIGITAL CERTIFICATE CONTAINS (EXAM FAVORITE)

|Field|
|---|
|Subject name|
|Subject public key|
|Issuer (CA)|
|Validity period|
|Serial number|
|Digital signature of CA|

MEMORY HOOK:  
**Certificate = ID card for public key**

---

### 3. REGISTRATION AUTHORITY (RA)

|Property|Explanation|
|---|---|
|Role|Verifies identity|
|Function|Approves certificate requests|
|Relation|Works on behalf of CA|

MEMORY HOOK:  
**RA = identity checker**

---

### 4. CERTIFICATE REVOCATION LIST (CRL)

|Property|Explanation|
|---|---|
|Purpose|List of revoked certificates|
|Reason|Compromised or expired certs|
|Maintained by|CA|

MEMORY HOOK:  
**CRL = blacklist of certs**

---

### 5. ONLINE CERTIFICATE STATUS PROTOCOL (OCSP)

|Property|Explanation|
|---|---|
|Purpose|Real-time certificate status|
|Faster than|CRL|
|Query-based|Yes|

MEMORY HOOK:  
**OCSP = live cert check**

EXAM TRAP:  
OCSP does NOT replace certificates.

---

## HOW PKI WORKS (STEP-BY-STEP LOGIC — MEMORIZE)

---

### CERTIFICATE ISSUANCE PROCESS

|Step|Description|
|---|---|
|1|User generates key pair|
|2|Sends public key to RA|
|3|RA verifies identity|
|4|CA signs public key|
|5|Certificate is issued|

MEMORY HOOK:  
**Generate → Verify → Sign → Trust**

---

### CERTIFICATE VALIDATION PROCESS (VERY IMPORTANT)

|Step|Description|
|---|---|
|1|Client receives certificate|
|2|Checks CA signature|
|3|Verifies trust chain|
|4|Checks expiration|
|5|Checks revocation status|

MEMORY HOOK:  
**Signature → Chain → Time → Revocation**

---

## TRUST CHAIN (MOST CONFUSING PART — SIMPLIFIED)

---

### TRUST CHAIN EXPLAINED

|Level|
|---|
|Root CA|
|Intermediate CA|
|End-entity certificate|

LOGIC:

- Root CA is pre-trusted
    
- Root signs Intermediate
    
- Intermediate signs website
    

MEMORY HOOK:  
**Trust flows downward**

EXAM TRAP:  
Browsers do NOT trust websites directly — they trust CAs.

---

## SELF-SIGNED CERTIFICATES

|Property|Explanation|
|---|---|
|Issuer|Same as subject|
|Trust|NOT trusted by default|
|Usage|Testing|

MEMORY HOOK:  
**Self-signed = no external trust**

---

## TYPES OF DIGITAL CERTIFICATES (EXAM LIST)

---

### BASED ON VALIDATION LEVEL

|Type|Description|
|---|---|
|DV|Domain Validation|
|OV|Organization Validation|
|EV|Extended Validation|

MEMORY HOOK:  
**DV < OV < EV**

---

### BASED ON PURPOSE

|Certificate|
|---|
|SSL/TLS certificate|
|Code signing certificate|
|Email (S/MIME) certificate|
|Client authentication certificate|

---

## APPLICATIONS OF PKI (EXAM QUESTIONS LOVE THIS)

|Application|
|---|
|SSL/TLS|
|Secure email|
|Digital signatures|
|Smart cards|
|VPN authentication|

MEMORY HOOK:  
**PKI everywhere trust matters**

---

## DIGITAL SIGNATURES VS CERTIFICATES (CONFUSION ZONE)

|Feature|Digital Signature|Certificate|
|---|---|---|
|Purpose|Verify message|Verify identity|
|Uses key|Private key|Public key|
|Issued by|User|CA|

MEMORY HOOK:  
**Cert proves WHO, signature proves WHAT**

---

## COMMON PKI ATTACKS (EXAM PREVIEW)

|Attack|
|---|
|Fake CA|
|Certificate spoofing|
|CA compromise|
|Man-in-the-middle|

EXAM TRAP:  
If CA is compromised, PKI collapses.

---

## OBJECTIVE 05 — MEMORY CHECKLIST (CRITICAL)

You must remember:

- PKI = trust framework
    
- CA signs certificates
    
- Certificates bind identity to public key
    
- Trust chain = Root → Intermediate → End entity
    
- CRL = revoked cert list
    
- OCSP = real-time cert status
    
- Self-signed certs are untrusted
    
- PKI solves public key trust problem
    

---

### STATUS

Objective 05: COMPLETE (PKI-focused)

---

Reply **next** to continue with:

**OBJECTIVE 06 — CRYPTOGRAPHY ATTACKS AND CRYPTANALYSIS TECHNIQUES (birthday attack, brute force, side-channel, MITM, padding oracle, downgrade attacks)**

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| PKI | Public Key Infrastructure — framework managing digital certificates, public keys, and trust |
| Certificate Authority (CA) | Trusted third party that issues and signs digital certificates |
| Digital Certificate | Binds identity to public key; contains subject, issuer, validity, serial number |
| Registration Authority (RA) | Verifies identity and approves certificate requests on behalf of CA |
| CRL | Certificate Revocation List — blacklist of revoked certificates maintained by CA |
| OCSP | Online Certificate Status Protocol — real-time certificate status check, faster than CRL |
| Trust Chain | Root CA → Intermediate CA → End-entity certificate hierarchy |
| Root CA | Top-level CA pre-trusted by browsers and operating systems |
| Intermediate CA | Signs certificates on behalf of Root CA |
| Self-Signed Certificate | Issuer same as subject; not trusted by default; used for testing |
| DV Certificate | Domain Validation — basic certificate验证 domain ownership |
| OV Certificate | Organization Validation —验证 organization identity |
| EV Certificate | Extended Validation — highest validation level |
| SSL/TLS Certificate | Encrypts web traffic between client and server |
| Code Signing Certificate | Signs software to verify publisher identity |
| S/MIME Certificate | Secure email certificate for encryption and signing |
| Digital Signature | Verifies message integrity and sender identity using private key |

---

# PRACTICE QUESTIONS

**1.** What problem does PKI solve?
- a) Password storage
- b) Trust of public keys — verifying they belong to the real entity
- c) Network speed
- d) Data compression
**Answer:** b) — PKI solves the problem of trusting that a public key actually belongs to the claimed entity.

**2.** In the trust chain, which CA is pre-trusted by browsers?
- a) Intermediate CA
- b) Root CA
- c) End-entity CA
- d) Registration Authority
**Answer:** b) — Root CAs are pre-trusted by browsers and operating systems.

**3.** What is the difference between CRL and OCSP?
- a) CRL is faster than OCSP
- b) CRL is a list, OCSP provides real-time status
- c) They are identical
- d) OCSP is offline
**Answer:** b) — CRL is a downloadable list of revoked certificates, while OCSP provides real-time query-based status.

**4.** Which certificate validation level provides the highest trust?
- a) DV (Domain Validation)
- b) OV (Organization Validation)
- c) EV (Extended Validation)
- d) Self-signed
**Answer:** c) — EV certificates have the highest validation level, verifying organization identity most thoroughly.

**5.** What is the primary purpose of a digital signature?
- a) Encrypt data
- b) Verify message integrity and sender identity
- c) Exchange keys
- d) Store passwords
**Answer:** b) — Digital signatures use private key to sign and public key to verify, providing integrity and authentication.