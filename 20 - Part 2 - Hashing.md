# OBJECTIVE 02 — SYMMETRIC ENCRYPTION ALGORITHMS

---

## SYMMETRIC ENCRYPTION (RECAP – EXAM CONTEXT)

|Property|Description|
|---|---|
|Keys|Same key for encryption and decryption|
|Speed|Very fast|
|Usage|Bulk data encryption|
|Weakness|Key distribution|

MEMORY HOOK:  
**Same key → speed**

---

## CLASSIFICATION OF SYMMETRIC ALGORITHMS

### BY DATA HANDLING

|Type|Description|
|---|---|
|Block Cipher|Encrypts fixed-size blocks|
|Stream Cipher|Encrypts bit/byte stream|

---

# BLOCK CIPHERS (VERY HIGH EXAM WEIGHT)

---

## DATA ENCRYPTION STANDARD (DES)

|Property|Value|
|---|---|
|Key size|56-bit|
|Block size|64-bit|
|Structure|Feistel|
|Status|Broken / insecure|

LOGIC:

- Uses substitution and permutation
    
- Vulnerable to brute-force attacks
    

EXAM TRAP:  
DES is **NOT secure**, even if implemented correctly.

MEMORY HOOK:  
**DES = Dead Encryption Standard**

---

## TRIPLE DES (3DES)

|Property|Value|
|---|---|
|Key size|112 or 168-bit|
|Block size|64-bit|
|Operation|Encrypt–Decrypt–Encrypt|
|Status|Deprecated but stronger than DES|

LOGIC:

- Applies DES three times
    
- Slower than DES
    

EXAM TRAP:  
3DES ≠ three different algorithms.

MEMORY HOOK:  
**DES × 3 = slow but safer**

---

## ADVANCED ENCRYPTION STANDARD (AES)

MOST IMPORTANT SYMMETRIC ALGORITHM IN CEH

|Property|Value|
|---|---|
|Key sizes|128, 192, 256-bit|
|Block size|128-bit|
|Structure|Substitution–Permutation|
|Status|Secure and recommended|

LOGIC:

- Faster than 3DES
    
- Resistant to known attacks
    

EXAM TRAP:  
AES is **NOT Feistel-based**.

MEMORY HOOK:  
**AES = gold standard**

---

## BLOWFISH

|Property|Value|
|---|---|
|Key size|32–448-bit|
|Block size|64-bit|
|Creator|Bruce Schneier|
|Status|Secure but aging|

LOGIC:

- Fast in software
    
- Free and unpatented
    

MEMORY HOOK:  
**Blowfish = flexible key size**

---

## TWOFISH

|Property|Value|
|---|---|
|Key size|Up to 256-bit|
|Block size|128-bit|
|Relation|Successor to Blowfish|
|Status|Secure|

EXAM TRAP:  
Twofish ≠ Blowfish upgrade inside AES (AES won Rijndael).

MEMORY HOOK:  
**Twofish = AES finalist**

---

## RC (RIVEST CIPHERS) FAMILY

---

### RC2

|Property|Value|
|---|---|
|Key size|Variable|
|Block size|64-bit|
|Status|Weak|

---

### RC4 (STREAM CIPHER – IMPORTANT)

|Property|Value|
|---|---|
|Type|Stream cipher|
|Key size|40–2048-bit|
|Usage|SSL, WEP (historically)|
|Status|Broken|

EXAM TRAP:  
RC4 vulnerabilities allow keystream reuse attacks.

MEMORY HOOK:  
**RC4 = Rapidly Cracked**

---

### RC5

|Property|Value|
|---|---|
|Block size|Variable|
|Key size|Variable|
|Rounds|Variable|
|Status|Experimental|

---

### RC6

|Property|Value|
|---|---|
|Block size|128-bit|
|Key size|Up to 256-bit|
|Status|AES finalist|

MEMORY HOOK:  
**RC6 = AES runner-up**

---

## CAST (CARLISLE ADAMS AND STAFFORD TAVARES)

|Property|Value|
|---|---|
|Block size|64 or 128-bit|
|Key size|Up to 256-bit|
|Usage|PGP|
|Status|Secure|

---

## GOST

|Property|Value|
|---|---|
|Origin|Russia|
|Block size|64-bit|
|Key size|256-bit|
|Status|Secure|

MEMORY HOOK:  
**GOST = Russian crypto**

---

## CAMELLIA

|Property|Value|
|---|---|
|Block size|128-bit|
|Key sizes|128, 192, 256-bit|
|Status|AES-equivalent|

MEMORY HOOK:  
**Camellia = AES alternative**

---

## CHACHA20 (STREAM CIPHER – MODERN)

|Property|Value|
|---|---|
|Type|Stream cipher|
|Key size|256-bit|
|Usage|TLS, VPNs|
|Status|Secure|

LOGIC:

- Faster than AES on mobile devices
    
- Resistant to timing attacks
    

MEMORY HOOK:  
**ChaCha20 = modern RC4 replacement**

---

# BLOCK VS STREAM CIPHER (EXAM FAVORITE)

|Feature|Block|Stream|
|---|---|---|
|Data handling|Fixed blocks|Continuous stream|
|Error impact|Whole block|Single bit|
|Examples|AES, DES|RC4, ChaCha20|

---

# MODES OF OPERATION (VERY HIGH YIELD)

Block ciphers **require modes**.

|Mode|Description|
|---|---|
|ECB|Electronic Codebook (INSECURE)|
|CBC|Cipher Block Chaining|
|CFB|Cipher Feedback|
|OFB|Output Feedback|
|CTR|Counter|
|GCM|Galois/Counter Mode|

EXAM TRAP:  
ECB reveals patterns.

MEMORY HOOK:  
**Never use ECB**

---

# OBJECTIVE 02 — MEMORY CHECKLIST

You must remember:

- DES is broken
    
- 3DES is slow
    
- AES is standard
    
- RC4 is insecure
    
- ChaCha20 replaces RC4
    
- Block vs Stream differences
    
- ECB mode is insecure
    
- AES block size is always 128-bit
    

---

### STATUS

Objective 02: COMPLETE

---

Reply **next** to continue with:

**OBJECTIVE 03 — ASYMMETRIC ENCRYPTION ALGORITHMS (RSA, DSA, Diffie-Hellman, ECC, ElGamal)**

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| DES | Data Encryption Standard — 56-bit key, 64-bit block, broken/insecure |
| 3DES | Triple DES — applies DES three times, 112/168-bit key, deprecated but stronger than DES |
| AES | Advanced Encryption Standard — 128/192/256-bit key, 128-bit block, secure and recommended |
| Blowfish | Symmetric cipher with 32-448 bit key, 64-bit block, created by Bruce Schneier |
| Twofish | Successor to Blowfish, up to 256-bit key, 128-bit block, AES finalist |
| RC4 | Stream cipher — 40-2048 bit key, broken, used in SSL/WEP historically |
| ChaCha20 | Modern stream cipher — 256-bit key, faster than AES on mobile, RC4 replacement |
| CAST | Symmetric cipher — 64/128-bit block, up to 256-bit key, used in PGP |
| Camellia | AES-equivalent cipher — 128-bit block, 128/192/256-bit keys |
| GOST | Russian symmetric cipher — 64-bit block, 256-bit key |
| Block Cipher | Encrypts fixed-size blocks (AES, DES) |
| Stream Cipher | Encrypts continuous data stream (RC4, ChaCha20) |
| ECB | Electronic Codebook mode — INSECURE, reveals patterns |
| CBC | Cipher Block Chaining mode — uses initialization vector |
| GCM | Galois/Counter Mode — provides encryption and authentication |
| Feistel Structure | DES cipher structure using substitution and permutation |

---

# PRACTICE QUESTIONS

**1.** Which symmetric algorithm is considered the current gold standard for encryption?
- a) DES
- b) 3DES
- c) AES
- d) RC4
**Answer:** c) — AES is the secure, recommended standard with 128-bit blocks and variable key sizes.

**2.** Why is ECB mode considered insecure?
- a) It uses weak keys
- b) It reveals patterns in encrypted data
- c) It is too slow
- d) It requires hardware support
**Answer:** b) — ECB mode encrypts identical blocks to identical ciphertext, revealing patterns.

**3.** What is the key difference between block ciphers and stream ciphers?
- a) Block ciphers are always faster
- b) Block ciphers encrypt fixed blocks, stream ciphers encrypt bit-by-bit
- c) Stream ciphers are always more secure
- d) Block ciphers only work on text
**Answer:** b) — Block ciphers process fixed-size blocks, while stream ciphers encrypt data continuously.

**4.** Which cipher is considered the modern replacement for RC4?
- a) DES
- b) 3DES
- c) Blowfish
- d) ChaCha20
**Answer:** d) — ChaCha20 is a modern stream cipher designed to replace insecure RC4.

**5.** What is the block size of AES regardless of key length?
- a) 64-bit
- b) 128-bit
- c) 256-bit
- d) 512-bit
**Answer:** b) — AES always uses 128-bit blocks, regardless of whether the key is 128, 192, or 256 bits.