# OBJECTIVE 02 — SYMMETRIC ENCRYPTION ALGORITHMS

---

## SYMMETRIC ENCRYPTION (RECAP – EXAM CONTEXT)

|Property|Description|
|---|---|
|Keys|La misma key para encryption y decryption|
|Speed|Muy rápido|
|Usage|Encriptación de datos masivos|
|Weakness|Distribución de keys|

MEMORY HOOK:  
**Same key → speed**

---

## CLASSIFICATION OF SYMMETRIC ALGORITHMS

### BY DATA HANDLING

|Type|Description|
|---|---|
|Block Cipher|Encripta bloques de tamaño fijo|
|Stream Cipher|Encripta stream de bits/bytes|

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

- Usa substitución y permutación
    
- Vulnerable a ataques brute-force
    

EXAM TRAP:  
DES **NO es seguro**, incluso si se implementa correctamente.

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

- Aplica DES tres veces
    
- Más lento que DES
    

EXAM TRAP:  
3DES ≠ tres algoritmos diferentes.

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

- Más rápido que 3DES
    
- Resistente a ataques conocidos
    

EXAM TRAP:  
AES **NO se basa en Feistel**.

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

- Rápido en software
    
- Gratuito y sin patente
    

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
Twofish ≠ actualización de Blowfish dentro de AES (AES ganó con Rijndael).

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
Las vulnerabilidades de RC4 permiten ataques de keystream reuse.

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

- Más rápido que AES en dispositivos móviles
    
- Resistente a ataques de timing
    

MEMORY HOOK:  
**ChaCha20 = modern RC4 replacement**

---

# BLOCK VS STREAM CIPHER (EXAM FAVORITE)

|Feature|Block|Stream|
|---|---|---|
|Data handling|Bloques fijos|Stream continuo|
|Error impact|Bloco entero|Un solo bit|
|Examples|AES, DES|RC4, ChaCha20|

---

# MODES OF OPERATION (VERY HIGH YIELD)

Los Block ciphers **requieren modos**.

|Mode|Description|
|---|---|
|ECB|Electronic Codebook (INSECURE)|
|CBC|Cipher Block Chaining|
|CFB|Cipher Feedback|
|OFB|Output Feedback|
|CTR|Counter|
|GCM|Galois/Counter Mode|

EXAM TRAP:  
ECB revela patrones.

MEMORY HOOK:  
**Never use ECB**

---

# OBJECTIVE 02 — MEMORY CHECKLIST

Debes recordar:

- DES está roto
    
- 3DES es lento
    
- AES es el estándar
    
- RC4 no es seguro
    
- ChaCha20 reemplaza a RC4
    
- Diferencias entre Block y Stream
    
- El modo ECB no es seguro
    
- El block size de AES siempre es 128-bit
    

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
| DES | Data Encryption Standard — key de 56-bit, block de 64-bit, broken/insecure |
| 3DES | Triple DES — aplica DES tres veces, key de 112/168-bit, deprecated pero más fuerte que DES |
| AES | Advanced Encryption Standard — key de 128/192/256-bit, block de 128-bit, secure y recomendado |
| Blowfish | Cipher simétrico con key de 32-448 bit, block de 64-bit, creado por Bruce Schneier |
| Twofish | Sucesor de Blowfish, key de hasta 256-bit, block de 128-bit, finalista de AES |
| RC4 | Stream cipher — key de 40-2048 bit, broken, usado en SSL/WEP históricamente |
| ChaCha20 | Stream cipher moderno — key de 256-bit, más rápido que AES en móviles, reemplazo de RC4 |
| CAST | Cipher simétrico — block de 64/128-bit, key de hasta 256-bit, usado en PGP |
| Camellia | Cipher equivalente a AES — block de 128-bit, keys de 128/192/256-bit |
| GOST | Cipher simétrico ruso — block de 64-bit, key de 256-bit |
| Block Cipher | Encripta bloques de tamaño fijo (AES, DES) |
| Stream Cipher | Encripta stream continuo de datos (RC4, ChaCha20) |
| ECB | Modo Electronic Codebook — INSECURE, revela patrones |
| CBC | Modo Cipher Block Chaining — usa vector de inicialización |
| GCM | Galois/Counter Mode — provee encryption y autenticación |
| Feistel Structure | Estructura del cipher DES usando substitución y permutación |

---

# PRACTICE QUESTIONS

**1.** ¿Qué algoritmo simétrico se considera el gold standard actual para encriptación?
- a) DES
- b) 3DES
- c) AES
- d) RC4
**Answer:** c) — AES es el estándar seguro y recomendado con blocks de 128-bit y keys de tamaño variable.

**2.** ¿Por qué el modo ECB se considera inseguro?
- a) Usa keys débiles
- b) Revela patrones en los datos encriptados
- c) Es demasiado lento
- d) Requiere soporte de hardware
**Answer:** b) — El modo ECB encripta bloques idénticos a ciphertext idéntico, revelando patrones.

**3.** ¿Cuál es la diferencia clave entre block ciphers y stream ciphers?
- a) Los block ciphers siempre son más rápidos
- b) Los block ciphers encriptan bloques fijos, los stream ciphers encriptan bit por bit
- c) Los stream ciphers siempre son más seguros
- d) Los block ciphers solo funcionan con texto
**Answer:** b) — Los block ciphers procesan bloques de tamaño fijo, mientras que los stream ciphers encriptan datos continuamente.

**4.** ¿Qué cipher se considera el reemplazo moderno de RC4?
- a) DES
- b) 3DES
- c) Blowfish
- d) ChaCha20
**Answer:** d) — ChaCha20 es un stream cipher moderno diseñado para reemplazar al inseguro RC4.

**5.** ¿Cuál es el block size de AES independientemente de la longitud de la key?
- a) 64-bit
- b) 128-bit
- c) 256-bit
- d) 512-bit
**Answer:** b) — AES siempre usa blocks de 128-bit, independientemente de si la key es de 128, 192 o 256 bits.
