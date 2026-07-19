# OBJECTIVE 04 — HASH FUNCTIONS AND MESSAGE DIGEST ALGORITHMS

---

## WHAT IS A HASH FUNCTION (EXAM DEFINITION)

|Term|Definition|
|---|---|
|Hash function|A mathematical function that converts data of arbitrary size into a fixed-length value|

MEMORY HOOK:  
**Hash = fingerprint of data**

EXAM TRAP:  
Hashing is **NOT encryption**.

---

## PURPOSE OF HASH FUNCTIONS

|Purpose|
|---|
|Data integrity|
|Password storage|
|Digital signatures|
|Message authentication|

---

## PROPERTIES OF A GOOD HASH FUNCTION (VERY IMPORTANT)

|Property|Meaning|
|---|---|
|Deterministic|Same input → same output|
|Fixed output size|Always same length|
|Pre-image resistance|Cannot reverse hash|
|Second pre-image resistance|Cannot find same hash|
|Collision resistance|No two inputs share hash|

MEMORY HOOK:  
**No reverse, no collisions**

---

## HASHING PROCESS (LOGIC FLOW)

1. Input message
    
2. Hash algorithm
    
3. Fixed-length hash value
    

---

# MESSAGE DIGEST ALGORITHMS (EXAM LIST)

---

## MD5 (MESSAGE DIGEST 5)

|Property|Value|
|---|---|
|Output size|128-bit|
|Status|Broken|
|Weakness|Collisions|

LOGIC:

- Produces same hash for different inputs
    

EXAM TRAP:  
MD5 should **not** be used for security.

MEMORY HOOK:  
**MD5 = Mostly Dead**

---

## SHA-1 (SECURE HASH ALGORITHM 1)

|Property|Value|
|---|---|
|Output size|160-bit|
|Status|Broken|
|Weakness|Collision attacks|

MEMORY HOOK:  
**SHA-1 is no longer secure**

---

## SHA-2 FAMILY

Includes:

|Algorithm|Output|
|---|---|
|SHA-224|224-bit|
|SHA-256|256-bit|
|SHA-384|384-bit|
|SHA-512|512-bit|

STATUS:

- Secure
    
- Widely used
    

MEMORY HOOK:  
**SHA-2 = current standard**

---

## SHA-3 (KECCAK)

|Property|Value|
|---|---|
|Structure|Sponge construction|
|Purpose|Backup to SHA-2|
|Status|Secure|

MEMORY HOOK:  
**SHA-3 ≠ SHA-2 variant**

EXAM TRAP:  
SHA-3 does not replace SHA-2 automatically.

---

## RIPEMD

|Property|Value|
|---|---|
|Output size|160-bit|
|Status|Less common|
|Usage|Alternative to SHA|

---

# HMAC (HASH-BASED MESSAGE AUTHENTICATION CODE)

---

## WHAT IS HMAC (VERY IMPORTANT)

|Property|Description|
|---|---|
|Uses|Hash function + secret key|
|Provides|Integrity + authentication|
|Does NOT provide|Confidentiality|

MEMORY HOOK:  
**HMAC = hash + key**

EXAM TRAP:  
HMAC ≠ encryption.

---

## HMAC PROCESS (LOGIC)

1. Message + secret key
    
2. Hash function
    
3. HMAC value
    

---

## HASH VS HMAC (EXAM FAVORITE)

|Feature|Hash|HMAC|
|---|---|---|
|Key used|No|Yes|
|Integrity|Yes|Yes|
|Authentication|No|Yes|

---

# PASSWORD HASHING (IMPORTANT SECURITY CONCEPT)

---

## WHY PASSWORDS ARE HASHED

|Reason|
|---|
|Prevent plaintext storage|
|Reduce breach impact|

---

## WEAK PASSWORD HASHING METHODS

|Method|
|---|
|MD5|
|SHA-1|
|Unsalted hashes|

---

## STRONG PASSWORD HASHING METHODS

|Method|Feature|
|---|---|
|bcrypt|Slow, salted|
|scrypt|Memory-hard|
|PBKDF2|Iterative|

MEMORY HOOK:  
**Slow hashing = strong security**

---

## SALT (VERY IMPORTANT)

|Term|Meaning|
|---|---|
|Salt|Random value added before hashing|

PURPOSE:

- Prevent rainbow table attacks
    

MEMORY HOOK:  
**Salt defeats precomputed attacks**

---

# COMMON HASH ATTACKS (PREVIEW)

|Attack|
|---|
|Collision attack|
|Pre-image attack|
|Rainbow table attack|

---

# OBJECTIVE 04 — MEMORY CHECKLIST

You must remember:

- Hashing ≠ encryption
    
- MD5 and SHA-1 are broken
    
- SHA-2 and SHA-3 are secure
    
- HMAC = hash + key
    
- Salt prevents rainbow tables
    
- Hash provides integrity, not confidentiality
    

---

### STATUS

Objective 04: COMPLETE

---

Reply **next** to continue with:

**OBJECTIVE 05 — DIGITAL CERTIFICATES, PKI, AND APPLICATIONS OF CRYPTOGRAPHY**

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Hash Function | Mathematical function converting arbitrary data into fixed-length value; provides fingerprint |
| Pre-image Resistance | Cannot reverse hash to recover original input |
| Second Pre-image Resistance | Cannot find different input producing same hash |
| Collision Resistance | No two different inputs produce same hash |
| MD5 | Message Digest 5 — 128-bit output, broken, should not be used |
| SHA-1 | Secure Hash Algorithm 1 — 160-bit output, broken due to collision attacks |
| SHA-2 | Secure Hash Algorithm 2 family — 224/256/384/512-bit outputs, secure |
| SHA-3 | Keccak — sponge construction, backup to SHA-2, secure |
| RIPEMD | 160-bit hash, less common alternative to SHA |
| HMAC | Hash-based Message Authentication Code — hash + secret key provides integrity + authentication |
| Salt | Random value added before hashing to prevent rainbow table attacks |
| bcrypt | Slow, salted password hashing function |
| scrypt | Memory-hard password hashing function |
| PBKDF2 | Iterative password hashing function |
| Rainbow Table | Precomputed hash tables for password cracking |
| Collision Attack | Finding two inputs that produce same hash |
| Pre-image Attack | Recovering original input from hash value |

---

# PRACTICE QUESTIONS

**1.** What is the primary difference between hashing and encryption?
- a) Hashing is reversible, encryption is not
- b) Hashing is one-way, encryption is reversible with a key
- c) They are identical
- d) Hashing uses keys, encryption does not
**Answer:** b) — Hashing is a one-way function that cannot be reversed, while encryption is reversible with the correct key.

**2.** Why is MD5 considered insecure for security purposes?
- a) It is too slow
- b) It produces collisions — same hash for different inputs
- c) It requires too much memory
- d) It only works on text
**Answer:** b) — MD5 is broken because it produces collisions, making it unsuitable for security.

**3.** What is the purpose of adding salt to password hashes?
- a) Make hashes longer
- b) Prevent rainbow table attacks
- c) Speed up hashing
- d) Make passwords weaker
**Answer:** b) — Salt adds random data before hashing, making precomputed rainbow table attacks ineffective.

**4.** Which hash function is considered the current standard for security?
- a) MD5
- b) SHA-1
- c) SHA-2
- d) RIPEMD
**Answer:** c) — SHA-2 family (especially SHA-256) is the current secure standard.

**5.** What does HMAC provide that regular hashing does not?
- a) Confidentiality
- b) Authentication
- c) Encryption
- d) Non-repudiation
**Answer:** b) — HMAC uses a secret key to provide both integrity and authentication, while regular hashing only provides integrity.