# OBJECTIVE 03 — ASYMMETRIC ENCRYPTION ALGORITHMS

---

## ASYMMETRIC ENCRYPTION (EXAM DEFINITION)

|Property|Description|
|---|---|
|Keys|Uses two mathematically related keys|
|Public key|Used for encryption or verification|
|Private key|Used for decryption or signing|
|Speed|Slow|
|Primary use|Key exchange, authentication, digital signatures|

MEMORY HOOK:  
**Public encrypts, private decrypts**

EXAM TRAP:  
Asymmetric encryption is **not used for bulk data**.

---

## WHY ASYMMETRIC CRYPTOGRAPHY IS NEEDED

|Problem|Solution|
|---|---|
|Secure key distribution|Public keys|
|Authentication|Digital signatures|
|Non-repudiation|Private key ownership|

---

# RSA (MOST IMPORTANT ASYMMETRIC ALGORITHM)

---

## RSA OVERVIEW

|Property|Description|
|---|---|
|Full name|Rivest–Shamir–Adleman|
|Key size|1024–4096 bits|
|Based on|Integer factorization|
|Used for|Encryption, signatures, key exchange|

LOGIC:

- Encrypt with public key
    
- Decrypt with private key
    

MEMORY HOOK:  
**RSA = factor large numbers**

EXAM TRAP:  
RSA ≠ symmetric encryption.

---

## RSA ATTACK WEAKNESSES (EXAM KNOWLEDGE)

|Weakness|
|---|
|Small key sizes|
|Poor padding (PKCS#1)|
|Side-channel attacks|

---

# DIFFIE–HELLMAN (KEY EXCHANGE ONLY)

---

## DIFFIE–HELLMAN OVERVIEW

|Property|Description|
|---|---|
|Purpose|Secure key exchange|
|Encryption|NO|
|Authentication|NO|
|Vulnerability|MITM attack|

LOGIC:

- Two parties agree on a shared secret
    
- Used to derive symmetric keys
    

MEMORY HOOK:  
**DH shares secrets, not messages**

EXAM TRAP:  
Diffie-Hellman does **not encrypt data**.

---

## EPHEMERAL DIFFIE–HELLMAN

|Variant|Description|
|---|---|
|DHE|Ephemeral DH|
|ECDHE|Elliptic Curve DHE|

Purpose:

- Provides **Perfect Forward Secrecy (PFS)**
    

MEMORY HOOK:  
**Ephemeral = temporary keys**

---

# DIGITAL SIGNATURE ALGORITHM (DSA)

---

## DSA OVERVIEW

|Property|Description|
|---|---|
|Purpose|Digital signatures only|
|Encryption|NO|
|Based on|Discrete logarithms|
|Used for|Authentication, integrity|

LOGIC:

- Private key signs
    
- Public key verifies
    

MEMORY HOOK:  
**DSA = Sign, not encrypt**

EXAM TRAP:  
DSA cannot encrypt data.

---

# ELGAMAL

---

## ELGAMAL OVERVIEW

|Property|Description|
|---|---|
|Based on|Diffie–Hellman|
|Usage|Encryption + signatures|
|Drawback|Large ciphertext|

MEMORY HOOK:  
**ElGamal = DH-based encryption**

---

# ELLIPTIC CURVE CRYPTOGRAPHY (ECC)

---

## ECC OVERVIEW (VERY IMPORTANT MODERN CRYPTO)

|Property|Description|
|---|---|
|Based on|Elliptic curves|
|Key size|Much smaller|
|Speed|Faster than RSA|
|Security|Strong|

LOGIC:

- 256-bit ECC ≈ 3072-bit RSA
    

MEMORY HOOK:  
**ECC = small keys, high security**

---

## ECC USE CASES

|Usage|
|---|
|Mobile devices|
|IoT|
|TLS|
|Digital signatures|

EXAM TRAP:  
ECC ≠ RSA replacement by algorithm, but by efficiency.

---

# ASYMMETRIC ALGORITHMS COMPARISON (EXAM FAVORITE)

|Algorithm|Encrypt|Sign|Key Exchange|
|---|---|---|---|
|RSA|Yes|Yes|Yes|
|Diffie–Hellman|No|No|Yes|
|DSA|No|Yes|No|
|ElGamal|Yes|Yes|Yes|
|ECC|Yes|Yes|Yes|

---

# DIGITAL SIGNATURE PROCESS (EXAM LOGIC)

|Step|
|---|
|Hash message|
|Encrypt hash with private key|
|Send message + signature|
|Receiver decrypts hash with public key|
|Compare hashes|

MEMORY HOOK:  
**Sign = private, verify = public**

---

# PUBLIC KEY INFRASTRUCTURE (PKI) INTRODUCTION

---

## PKI COMPONENTS (PREVIEW FOR NEXT OBJECTIVE)

|Component|
|---|
|Certificate Authority (CA)|
|Digital certificates|
|Public keys|
|Trust chains|

MEMORY HOOK:  
**PKI = trust system**

---

# OBJECTIVE 03 — MEMORY CHECKLIST

You must remember:

- RSA = encryption + signatures
    
- Diffie-Hellman = key exchange only
    
- DSA = signatures only
    
- ECC = smaller keys, faster
    
- Public key encrypts
    
- Private key decrypts/signs
    
- Asymmetric crypto is slow
    

---

### STATUS

Objective 03: COMPLETE

---

Reply **next** to continue with:

**OBJECTIVE 04 — HASH FUNCTIONS AND MESSAGE DIGEST ALGORITHMS (MD5, SHA-1, SHA-2, SHA-3, HMAC)**

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| RSA | Rivest–Shamir–Adleman — asymmetric algorithm for encryption, signatures, key exchange; based on integer factorization |
| Diffie-Hellman | Key exchange algorithm only — does NOT encrypt data; vulnerable to MITM |
| DHE | Ephemeral Diffie-Hellman — provides Perfect Forward Secrecy |
| ECDHE | Elliptic Curve Diffie-Hellman Ephemeral — provides PFS with smaller keys |
| DSA | Digital Signature Algorithm — signs data only, cannot encrypt |
| ElGamal | Asymmetric algorithm based on Diffie-Hellman; supports encryption and signatures |
| ECC | Elliptic Curve Cryptography — 256-bit ECC ≈ 3072-bit RSA; smaller keys, faster |
| Perfect Forward Secrecy | Property where compromised long-term keys don't affect past session keys |
| Digital Signature | Private key signs, public key verifies — provides authentication and integrity |
| Integer Factorization | Mathematical problem underlying RSA security |
| Discrete Logarithms | Mathematical problem underlying DSA and Diffie-Hellman |
| PKI | Public Key Infrastructure — framework managing certificates, public keys, and trust |

---

# PRACTICE QUESTIONS

**1.** Which asymmetric algorithm is used ONLY for key exchange and cannot encrypt data?
- a) RSA
- b) Diffie-Hellman
- c) ECC
- d) ElGamal
**Answer:** b) — Diffie-Hellman is a key exchange algorithm only; it does not encrypt data directly.

**2.** What does Perfect Forward Secrecy (PFS) ensure?
- a) All keys are stored permanently
- b) Compromised long-term keys don't affect past session keys
- c) Encryption is faster
- d) Keys never expire
**Answer:** b) — PFS ensures that even if long-term keys are compromised, past session keys remain secure.

**3.** Why is ECC preferred over RSA for mobile devices?
- a) ECC is slower but more secure
- b) ECC uses much smaller keys for equivalent security
- c) ECC uses larger keys
- d) ECC is only for signing
**Answer:** b) — ECC provides equivalent security with much smaller keys, making it faster and more efficient for mobile.

**4.** In digital signature process, which key signs the message?
- a) Public key
- b) Private key
- c) Session key
- d) Master key
**Answer:** b) — The private key signs, and the public key verifies the signature.

**5.** What is the primary purpose of DSA (Digital Signature Algorithm)?
- a) Encrypt data
- b) Exchange keys
- c) Create digital signatures only
- d) Hash messages
**Answer:** c) — DSA is designed specifically for digital signatures and cannot encrypt data.