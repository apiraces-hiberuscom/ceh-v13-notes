# OBJECTIVE 06 — CRYPTOGRAPHY ATTACKS AND CRYPTANALYSIS

---

## WHAT IS CRYPTANALYSIS (EXAM DEFINITION)

|Term|Definition|
|---|---|
|Cryptanalysis|The process of analyzing cryptographic systems to discover weaknesses and recover plaintext or keys without authorization|

MEMORY HOOK:  
**Cryptoanalysis = breaking crypto**

---

## GOALS OF CRYPTANALYSIS

|Goal|
|---|
|Recover plaintext|
|Discover secret keys|
|Bypass cryptographic protections|

---

# CLASSIFICATION OF CRYPTOGRAPHY ATTACKS (EXAM FAVORITE)

---

## BASED ON ATTACKER KNOWLEDGE

---

### CIPHERTEXT-ONLY ATTACK (COA)

|Property|Description|
|---|---|
|Attacker has|Only ciphertext|
|Goal|Recover plaintext|
|Difficulty|Hardest|

MEMORY HOOK:  
**Ciphertext only = blind attack**

---

### KNOWN-PLAINTEXT ATTACK (KPA)

|Property|Description|
|---|---|
|Attacker has|Plaintext + ciphertext pairs|
|Goal|Recover key|
|Example|Known file headers|

MEMORY HOOK:  
**Known plaintext leaks structure**

---

### CHOSEN-PLAINTEXT ATTACK (CPA)

|Property|Description|
|---|---|
|Attacker can|Choose plaintext|
|Observes|Ciphertext|
|Example|Encryption oracle|

MEMORY HOOK:  
**Chosen input = strong attacker**

---

### CHOSEN-CIPHERTEXT ATTACK (CCA)

|Property|Description|
|---|---|
|Attacker can|Choose ciphertext|
|Observes|Decrypted output|
|Example|Padding oracle|

MEMORY HOOK:  
**Chosen ciphertext = very powerful**

---

# BRUTE-FORCE ATTACK

|Property|Description|
|---|---|
|Method|Try all possible keys|
|Effective against|Small key sizes|
|Prevented by|Strong keys|

MEMORY HOOK:  
**Short key = brute-force bait**

---

# DICTIONARY ATTACK

|Property|Description|
|---|---|
|Method|Guess keys/passwords|
|Uses|Wordlists|
|Target|Weak passwords|

---

# RAINBOW TABLE ATTACK

|Property|Description|
|---|---|
|Target|Password hashes|
|Method|Precomputed hash tables|
|Defense|Salting|

MEMORY HOOK:  
**Salt defeats rainbow tables**

---

# BIRTHDAY ATTACK (VERY HIGH YIELD)

---

## WHAT IS A BIRTHDAY ATTACK

|Concept|Explanation|
|---|---|
|Based on|Birthday paradox|
|Targets|Hash functions|
|Goal|Find collisions|

LOGIC:

- Easier to find collisions than reverse hashes
    

EXAM RULE:

- For n-bit hash, collision resistance ≈ 2^(n/2)
    

MEMORY HOOK:  
**Hash length ÷ 2 = collision effort**

---

# COLLISION ATTACK

|Property|Description|
|---|---|
|Goal|Two inputs → same hash|
|Affects|MD5, SHA-1|
|Impact|Digital signature forgery|

---

# MAN-IN-THE-MIDDLE (MITM) IN CRYPTO

|Property|Description|
|---|---|
|Target|Key exchange|
|Affects|Diffie-Hellman|
|Defense|Authentication|

MEMORY HOOK:  
**DH without auth = MITM risk**

---

# SIDE-CHANNEL ATTACKS (IMPORTANT)

---

## WHAT IS A SIDE-CHANNEL ATTACK

|Explanation|
|---|
|Exploits physical information leakage|

---

## TYPES OF SIDE-CHANNEL ATTACKS

|Type|Leakage|
|---|---|
|Timing attack|Execution time|
|Power analysis|Power consumption|
|EM analysis|Electromagnetic signals|
|Acoustic|Sound|

MEMORY HOOK:  
**Not math, physics**

---

# PADDING ORACLE ATTACK (VERY IMPORTANT)

---

## WHAT IT TARGETS

|Target|
|---|
|Block cipher modes|
|CBC mode|

---

## HOW IT WORKS (HIGH-LEVEL)

|Step|
|---|
|Observe padding error messages|
|Modify ciphertext|
|Infer plaintext|

EXAM TRAP:  
Error messages leak information.

MEMORY HOOK:  
**Errors leak secrets**

---

# DOWNGRADE ATTACK

|Property|Description|
|---|---|
|Goal|Force weak crypto|
|Example|SSL → TLS downgrade|
|Defense|Disable legacy protocols|

MEMORY HOOK:  
**Backward compatibility = weakness**

---

# REPLAY ATTACK

|Property|Description|
|---|---|
|Method|Reuse captured data|
|Target|Authentication protocols|
|Defense|Nonces, timestamps|

MEMORY HOOK:  
**Replay stops with freshness**

---

# CRYPTOGRAPHY MISCONFIGURATION ATTACKS

|Misconfiguration|
|---|
|Weak algorithms|
|Short keys|
|Poor randomness|
|Reused IVs|
|ECB mode|

MEMORY HOOK:  
**Crypto fails in implementation**

---

# COMMON CRYPTOGRAPHY TOOLS (CEH RECOGNITION)

---

## CRYPTANALYSIS TOOLS

|Tool|Purpose|
|---|---|
|Hashcat|Password cracking|
|John the Ripper|Password cracking|
|Cain & Abel|Credential recovery|
|OpenSSL|Crypto operations|
|CrypTool|Learning cryptography|

---

## OPENSSL COMMANDS (RECOGNITION ONLY)

|Command|Purpose|
|---|---|
|openssl enc|Encrypt/decrypt|
|openssl dgst|Hash generation|
|openssl genrsa|Generate RSA key|
|openssl req|Create CSR|

MEMORY HOOK:  
**OpenSSL = crypto Swiss army knife**

---

# OBJECTIVE 06 — EXAM MEMORY BLOCK

**Cryptanalysis exploits weaknesses in algorithms, keys, and implementations.  
Birthday attacks target hash collisions.  
MITM attacks exploit unauthenticated key exchange.  
Side-channel attacks exploit physical leakage.  
Padding oracle attacks exploit error messages.  
Salting, authentication, and strong algorithms mitigate attacks.**

---

# MODULE 20 — FINAL CHECKLIST (VERY IMPORTANT)

You must remember:

- Hash collision = birthday attack
    
- Diffie-Hellman vulnerable to MITM
    
- MD5 and SHA-1 broken
    
- AES is secure
    
- ECC uses smaller keys
    
- PKI solves trust problem
    
- CRL vs OCSP
    
- Padding oracle targets CBC
    
- Salt defeats rainbow tables
    

---

## MODULE 20 STATUS

|Section|Status|
|---|---|
|Objective 01|COMPLETE|
|Objective 02|COMPLETE|
|Objective 03|COMPLETE|
|Objective 04|COMPLETE|
|Objective 05|COMPLETE|
|Objective 06|COMPLETE|

---

You have now **fully completed Module 20 – Cryptography**.

Next options:

- **Module 20 ultra-condensed exam cheat sheet**
    
- **Full CEH mock exam questions (crypto-heavy)**
    
- **Continue to next CEH module**
    
- **PKI-only drill with scenarios**

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Cryptanalysis | Analyzing cryptographic systems to discover weaknesses and recover plaintext/keys |
| Ciphertext-Only Attack (COA) | Attacker has only ciphertext — hardest attack type |
| Known-Plaintext Attack (KPA) | Attacker has plaintext-ciphertext pairs to recover key |
| Chosen-Plaintext Attack (CPA) | Attacker chooses plaintext and observes ciphertext |
| Chosen-Ciphertext Attack (CCA) | Attacker chooses ciphertext and observes decrypted output |
| Brute-Force Attack | Trying all possible keys — effective against small key sizes |
| Dictionary Attack | Guessing passwords using wordlists |
| Rainbow Table Attack | Precomputed hash tables for password cracking |
| Birthday Attack | Finds hash collisions using birthday paradox — effort ≈ 2^(n/2) for n-bit hash |
| Collision Attack | Finding two inputs producing same hash — affects MD5, SHA-1 |
| MITM in Crypto | Man-in-the-Middle exploiting unauthenticated key exchange (Diffie-Hellman) |
| Side-Channel Attack | Exploits physical leakage — timing, power, EM, acoustic |
| Padding Oracle Attack | Exploits error messages in CBC mode to infer plaintext |
| Downgrade Attack | Forcing weak cryptography by exploiting backward compatibility |
| Replay Attack | Reusing captured authentication data |
| Timing Attack | Measuring execution time to deduce secret keys |
| Power Analysis | Analyzing power consumption to extract keys |
| Salting | Defeats rainbow table attacks by adding random data before hashing |

---

# PRACTICE QUESTIONS

**1.** What is the collision resistance of an n-bit hash function according to the birthday attack?
- a) 2^n operations
- b) 2^(n/2) operations
- c) 2^(2n) operations
- d) n^2 operations
**Answer:** b) — Birthday attack finds collisions in approximately 2^(n/2) operations due to birthday paradox.

**2.** Which attack exploits error messages in CBC mode to infer plaintext?
- a) Brute-force attack
- b) Rainbow table attack
- c) Padding oracle attack
- d) Dictionary attack
**Answer:** c) — Padding oracle attacks exploit padding error messages to decrypt CBC ciphertext.

**3.** Why is Diffie-Hellman vulnerable to Man-in-the-Middle attacks?
- a) It uses weak encryption
- b) It does not authenticate the parties
- c) It is too slow
- d) It requires too much memory
**Answer:** b) — Diffie-Hellman provides key exchange but no authentication, allowing MITM interception.

**4.** What is the primary defense against rainbow table attacks?
- a) Using longer passwords
- b) Salting hashes
- c) Using faster hardware
- d) Encrypting the database
**Answer:** b) — Salting adds random data before hashing, making precomputed rainbow tables ineffective.

**5.** Which side-channel attack type measures execution time to deduce secret keys?
- a) Power analysis
- b) EM analysis
- c) Timing attack
- d) Acoustic attack
**Answer:** c) — Timing attacks measure execution time differences to infer secret key values.

