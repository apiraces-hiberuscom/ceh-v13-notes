# MODULE 20 — CRYPTOGRAPHY (CEHv13)

SOURCE: _CEHv13 – Module 20 – Cryptography_

---

## LEARNING OBJECTIVES (EXAM-MANDATORY)

You must be able to:

|#|Learning Objective|
|---|---|
|01|Explain cryptography concepts|
|02|Understand different encryption algorithms|
|03|Use different cryptography tools|
|04|Apply applications of cryptography|
|05|Describe cryptography attacks|
|06|Use cryptanalysis tools|

MEMORY HOOK:  
**Concepts → Algorithms → Tools → Applications → Attacks → Analysis**

---

# OBJECTIVE 01 — CRYPTOGRAPHY CONCEPTS AND ENCRYPTION ALGORITHMS

---

## WHAT IS CRYPTOGRAPHY (DEFINITION — EXACT CEH MEANING)

|Term|Definition|
|---|---|
|Cryptography|The practice of concealing information by converting readable data into an unreadable format using encryption|

ORIGIN (EXAM FACT):

- Greek **kryptos** = hidden
    
- Greek **graphia** = writing
    

MEMORY HOOK:  
**Crypto = hidden writing**

---

## WHAT ENCRYPTION DOES

|Action|Description|
|---|---|
|Encryption|Converts plaintext into ciphertext|
|Decryption|Converts ciphertext back into plaintext|

---

## CRYPTOGRAPHY PROCESS (LOGIC FLOW)

|Step|
|---|
|Plaintext|
|Encryption algorithm + key|
|Ciphertext|
|Transmission|
|Decryption algorithm + key|
|Plaintext|

EXAM TRAP:  
Encryption **does not remove data**, it only **transforms representation**.

---

## OBJECTIVES OF CRYPTOGRAPHY (VERY HIGH YIELD)

|Objective|Meaning|
|---|---|
|Confidentiality|Only authorized users can access information|
|Integrity|Data is not altered improperly|
|Authentication|Identity of sender/receiver is verified|
|Non-repudiation|Sender cannot deny sending the message|

MEMORY HOOK:  
**CIA + N**

EXAM TRAP:  
Encryption alone ≠ authentication or integrity.

---

## BASIC CRYPTOGRAPHY TERMINOLOGY

|Term|Meaning|
|---|---|
|Plaintext|Readable original data|
|Ciphertext|Encrypted unreadable data|
|Cipher|Algorithm used to encrypt/decrypt|
|Key|Secret value controlling encryption|
|Cryptanalysis|Breaking encryption|
|Cryptosystem|Algorithms + keys + protocols|

---

## TYPES OF CRYPTOGRAPHY (TOP-TIER EXAM CONTENT)

Cryptography is classified **based on number of keys used**.

---

### 1. SYMMETRIC KEY CRYPTOGRAPHY

|Property|Description|
|---|---|
|Keys used|Same key for encryption and decryption|
|Speed|Fast|
|Security issue|Key distribution problem|
|Also called|Secret-key cryptography|

LOGIC:

- Sender encrypts using shared secret key
    
- Receiver decrypts using same key
    

MEMORY HOOK:  
**One key → fast → hard to share**

---

### 2. ASYMMETRIC KEY CRYPTOGRAPHY

|Property|Description|
|---|---|
|Keys used|Public key + private key|
|Speed|Slow|
|Security|Solves key distribution problem|
|Also called|Public-key cryptography|

LOGIC:

- Public key encrypts
    
- Private key decrypts
    

MEMORY HOOK:  
**Two keys → secure sharing → slower**

---

## ASYMMETRIC ENCRYPTION MESSAGE FLOW (EXAM LOGIC)

|Step|Description|
|---|---|
|1|Sender finds receiver’s public key|
|2|Sender encrypts message using public key|
|3|Only receiver’s private key can decrypt|
|4|Ensures confidentiality|
|5|Digital signatures ensure authentication|

EXAM TRAP:  
Public key **cannot decrypt** what it encrypts.

---

## STRENGTHS & WEAKNESSES (VERY COMMON MCQs)

### SYMMETRIC ENCRYPTION

|Strengths|Weaknesses|
|---|---|
|Fast|Key distribution problem|
|Efficient|Difficult key management|
|Less CPU usage|No authentication|

---

### ASYMMETRIC ENCRYPTION

|Strengths|Weaknesses|
|---|---|
|Secure key exchange|Slow|
|Digital signatures|High CPU usage|
|Authentication|Not suitable for bulk data|

MEMORY HOOK:  
**Symmetric = fast, Asymmetric = trust**

---

## GOVERNMENT ACCESS TO KEYS (GAK) — EXAM CONCEPT

|Term|Explanation|
|---|---|
|GAK|Government-mandated access to encryption keys|
|Purpose|Lawful interception|
|Method|Key escrow|
|Risk|Weakens privacy|

MEMORY HOOK:  
**Key escrow = third party holds keys**

EXAM TRAP:  
Key escrow ≠ backdoor (but effect is similar).

---

## WHAT IS A CIPHER

|Definition|
|---|
|A cipher is a set of mathematical steps used to encrypt or decrypt data|

---

## TYPES OF CIPHERS

### CLASSICAL CIPHERS

|Type|Description|
|---|---|
|Substitution|Replace characters|
|Transposition|Rearrange characters|

EXAMPLES (EXAM):

- Caesar cipher
    
- Hill cipher
    
- Rail fence cipher
    

MEMORY HOOK:  
**Classical = letters**

---

### MODERN CIPHERS

Classified by:

#### A. TYPE OF KEY USED

|Type|
|---|
|Symmetric|
|Asymmetric|

#### B. TYPE OF INPUT DATA

|Type|Description|
|---|---|
|Block cipher|Encrypts fixed-size blocks|
|Stream cipher|Encrypts data bit-by-bit|

MEMORY HOOK:  
**Block = chunks, Stream = flow**

---

## OBJECTIVE 01 — MEMORY CHECKLIST

You must remember:

- Cryptography goals = **CIA + N**
    
- Symmetric vs Asymmetric differences
    
- Encryption ≠ authentication
    
- Public key encrypts, private key decrypts
    
- Block vs Stream cipher difference
    
- Key distribution problem
    
- Key escrow definition
    

---

### STATUS

Module 20  
Objective 01: **COMPLETE**

---


## EXAM EXTRAS (Boson Practice Test)

### BLOWFISH

|Item|Memorize|
|---|---|
|Blowfish|Symmetric 64-bit block cipher, 32-448 bit key|
|Standard|IDEA 64-bit block cipher with 128-bit key — used by PGP|

---

### AES BLOCK SIZE

|Item|Memorize|
|---|---|
|AES|128-bit block size regardless of key length|

---

### SERPENT

|Item|Memorize|
|---|---|
|Serpent|Symmetric 128-bit block cipher with key lengths of 128, 192, or 256 bits|

---

### DROWN / SSLv2

|Item|Memorize|
|---|---|
|DROWN attack|Disable SSLv2|
|SSLv2|Extremely broken — should use TLS 1.2 or 1.3|

---

### SIDE-CHANNEL ATTACK

|Item|Memorize|
|---|---|
|Side-channel attack|Attempt to break encryption by monitoring something external to the algorithm|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Cryptography | Practice of concealing information by converting readable data into unreadable format using encryption |
| Plaintext | Readable original data before encryption |
| Ciphertext | Encrypted unreadable data after encryption |
| Cipher | Algorithm used to encrypt or decrypt data |
| Key | Secret value controlling encryption process |
| Cryptanalysis | Breaking encryption without authorization |
| Cryptosystem | Complete set of algorithms, keys, and protocols |
| Symmetric Key Cryptography | Same key for encryption and decryption — fast but key distribution problem |
| Asymmetric Key Cryptography | Public key encrypts, private key decrypts — solves key distribution but slower |
| Key Distribution Problem | Challenge of securely sharing symmetric keys between parties |
| Key Escrow | Third party holds encryption keys for government access (GAK) |
| Block Cipher | Encrypts fixed-size blocks of data |
| Stream Cipher | Encrypts data bit-by-bit continuously |
| Confidentiality | Only authorized users can access information |
| Integrity | Data is not altered improperly |
| Authentication | Identity of sender/receiver is verified |
| Non-repudiation | Sender cannot deny sending the message |
| Substitution Cipher | Classical cipher replacing characters |
| Transposition Cipher | Classical cipher rearranging characters |

---

# PRACTICE QUESTIONS

**1.** What is the primary advantage of symmetric encryption over asymmetric encryption?
- a) Better key distribution
- b) Faster speed and lower CPU usage
- c) Provides authentication
- d) Solves non-repudiation
**Answer:** b) — Symmetric encryption is much faster and uses less CPU, but has key distribution challenges.

**2.** In asymmetric cryptography, which key encrypts the message?
- a) Private key
- b) Public key
- c) Session key
- d) Master key
**Answer:** b) — Public key encrypts, and only the corresponding private key can decrypt.

**3.** What is the "key distribution problem" in symmetric cryptography?
- a) Keys are too long to remember
- b) Difficulty of securely sharing the same key between sender and receiver
- c) Keys expire too quickly
- d) Keys require hardware storage
**Answer:** b) — The key distribution problem is the challenge of securely sharing symmetric keys without exposing them.

**4.** Which cryptography objective ensures the sender cannot deny sending a message?
- a) Confidentiality
- b) Integrity
- c) Authentication
- d) Non-repudiation
**Answer:** d) — Non-repudiation prevents the sender from denying they sent the message.

**5.** What type of cipher encrypts data bit-by-bit?
- a) Block cipher
- b) Stream cipher
- c) Substitution cipher
- d) Transposition cipher
**Answer:** b) — Stream ciphers encrypt data continuously bit-by-bit, while block ciphers encrypt fixed-size blocks.
