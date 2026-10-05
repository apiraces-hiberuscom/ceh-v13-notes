# Módulo 20 · Parte 2 — Symmetric Encryption

> **Módulo 20 — Cryptography** · Parte 2 de 6 · Algoritmos symmetric (DES, 3DES, AES, Blowfish, Twofish, familia RC, ChaCha20…), block vs stream cipher y modes of operation

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [OBJECTIVE 02 — SYMMETRIC ENCRYPTION ALGORITHMS](#objective-02--symmetric-encryption-algorithms)
- [BLOCK CIPHERS 🔥](#block-ciphers-high-yield)
- [BLOCK VS STREAM CIPHER 🔥](#block-vs-stream-cipher-high-yield)
- [MODES OF OPERATION 🔥](#modes-of-operation-high-yield)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **DES** — key de 56 bits, bloque de 64 bits, estructura Feistel; roto (cae por brute force)
- **3DES** — DES tres veces en modo Encrypt–Decrypt–Encrypt; key de 112 o 168 bits, bloque de 64 bits; más fuerte que DES, pero lento y obsoleto
- **AES** — keys de 128/192/256 bits y bloque **siempre de 128 bits**; substitution–permutation (NO Feistel); el estándar recomendado
- **Blowfish** — key de 32–448 bits, bloque de 64 bits; de Bruce Schneier, rápido en software y sin patente
- **Twofish** — sucesor de Blowfish: bloque de 128 bits, key de hasta 256 bits; finalista de AES (ganó Rijndael)
- **RC4** — stream cipher con key de 40–2048 bits, usado en SSL y WEP; roto
- **RC6** — bloque de 128 bits, key de hasta 256 bits; finalista de AES
- **ChaCha20** — stream cipher moderno con key de 256 bits (TLS, VPN); sustituto de RC4, más rápido que AES en móviles
- **CAST / GOST / Camellia** — CAST se usa en PGP; GOST es ruso (bloque 64, key 256); Camellia equivale a AES (bloque 128, keys 128/192/256)
- **Block vs stream** — block: bloques fijos, un error afecta a todo el bloque (AES, DES); stream: flujo continuo, afecta a un solo bit (RC4, ChaCha20)
- **Modes of operation** — ECB, CBC, CFB, OFB, CTR, GCM; **ECB es inseguro** (revela patrones); CBC usa IV; GCM da cifrado + autenticación

---

## OBJECTIVE 02 — SYMMETRIC ENCRYPTION ALGORITHMS

### SYMMETRIC ENCRYPTION (RECAP)

|Propiedad|Descripción|
|---|---|
|Claves|La misma key para encryption y decryption|
|Velocidad|Muy rápido|
|Uso|Cifrado de datos masivos (bulk)|
|Debilidad|Key distribution (distribución de claves)|

> 🧠 *Para recordar:* **Misma key → velocidad**

---

### CLASSIFICATION OF SYMMETRIC ALGORITHMS

#### BY DATA HANDLING

|Tipo|Descripción|
|---|---|
|Block Cipher|Encripta bloques de tamaño fijo|
|Stream Cipher|Encripta un flujo (stream) de bits/bytes|

---

## BLOCK CIPHERS (HIGH YIELD)

### DATA ENCRYPTION STANDARD (DES)

|Propiedad|Valor|
|---|---|
|Key size|56-bit|
|Block size|64-bit|
|Estructura|Feistel|
|Estado|Roto / inseguro|

LOGIC:

- Usa sustitución y permutación
- Vulnerable a ataques brute-force

> ⚠️ *Trampa de examen:* DES **NO es seguro**, incluso si se implementa correctamente.

> 🧠 *Para recordar:* **DES = Dead Encryption Standard**

---

### TRIPLE DES (3DES)

|Propiedad|Valor|
|---|---|
|Key size|112 o 168-bit|
|Block size|64-bit|
|Operación|Encrypt–Decrypt–Encrypt (EDE)|
|Estado|Obsoleto (deprecated), pero más fuerte que DES|

LOGIC:

- Aplica DES tres veces
- Más lento que DES

> ⚠️ *Trampa de examen:* 3DES ≠ tres algoritmos diferentes.

> 🧠 *Para recordar:* **DES × 3 = más lento pero más seguro**

---

### ADVANCED ENCRYPTION STANDARD (AES)

EL ALGORITMO SYMMETRIC MÁS IMPORTANTE EN CEH

|Propiedad|Valor|
|---|---|
|Key sizes|128, 192, 256-bit|
|Block size|128-bit|
|Estructura|Substitution–Permutation|
|Estado|Seguro y recomendado|

LOGIC:

- Más rápido que 3DES
- Resistente a ataques conocidos

> ⚠️ *Trampa de examen:* AES **NO se basa en Feistel**.

> 🧠 *Para recordar:* **AES = gold standard**

---

### BLOWFISH

|Propiedad|Valor|
|---|---|
|Key size|32–448-bit|
|Block size|64-bit|
|Creador|Bruce Schneier|
|Estado|Seguro, aunque ya antiguo|

LOGIC:

- Rápido en software
- Gratuito y sin patente

> 🧠 *Para recordar:* **Blowfish = key size flexible**

---

### TWOFISH

|Propiedad|Valor|
|---|---|
|Key size|Hasta 256-bit|
|Block size|128-bit|
|Relación|Sucesor de Blowfish|
|Estado|Seguro|

> ⚠️ *Trampa de examen:* Twofish fue finalista de AES, pero no ganó: el algoritmo elegido como AES fue Rijndael.

> 🧠 *Para recordar:* **Twofish = finalista de AES**

---

### RC (RIVEST CIPHERS) FAMILY

#### RC2

|Propiedad|Valor|
|---|---|
|Key size|Variable|
|Block size|64-bit|
|Estado|Débil|

---

#### RC4 (STREAM CIPHER) (HIGH YIELD)

|Propiedad|Valor|
|---|---|
|Tipo|Stream cipher|
|Key size|40–2048-bit|
|Uso|SSL, WEP (históricamente)|
|Estado|Roto|

> ⚠️ *Trampa de examen:* Las vulnerabilidades de RC4 permiten ataques de keystream reuse.

> 🧠 *Para recordar:* **RC4 = Rapidly Cracked**

---

#### RC5

|Propiedad|Valor|
|---|---|
|Block size|Variable|
|Key size|Variable|
|Rondas|Variable|
|Estado|Experimental|

---

#### RC6

|Propiedad|Valor|
|---|---|
|Block size|128-bit|
|Key size|Hasta 256-bit|
|Estado|Finalista de AES|

> 🧠 *Para recordar:* **RC6 = otro finalista de AES**

---

### CAST (CARLISLE ADAMS AND STAFFORD TAVARES)

|Propiedad|Valor|
|---|---|
|Block size|64 o 128-bit|
|Key size|Hasta 256-bit|
|Uso|PGP|
|Estado|Seguro|

---

### GOST

|Propiedad|Valor|
|---|---|
|Origen|Rusia|
|Block size|64-bit|
|Key size|256-bit|
|Estado|Seguro|

> 🧠 *Para recordar:* **GOST = cripto rusa**

---

### CAMELLIA

|Propiedad|Valor|
|---|---|
|Block size|128-bit|
|Key sizes|128, 192, 256-bit|
|Estado|Equivalente a AES|

> 🧠 *Para recordar:* **Camellia = alternativa a AES**

---

### CHACHA20 (STREAM CIPHER — MODERN)

|Propiedad|Valor|
|---|---|
|Tipo|Stream cipher|
|Key size|256-bit|
|Uso|TLS, VPN|
|Estado|Seguro|

LOGIC:

- Más rápido que AES en dispositivos móviles
- Resistente a timing attacks

> 🧠 *Para recordar:* **ChaCha20 = sustituto moderno de RC4**

---

## BLOCK VS STREAM CIPHER (HIGH YIELD)

|Característica|Block|Stream|
|---|---|---|
|Manejo de datos|Bloques fijos|Flujo continuo (stream)|
|Impacto de un error|Bloque entero|Un solo bit|
|Ejemplos|AES, DES|RC4, ChaCha20|

---

## MODES OF OPERATION (HIGH YIELD)

Los block ciphers **requieren modes of operation**.

|Modo|Descripción|
|---|---|
|ECB|Electronic Codebook (INSEGURO)|
|CBC|Cipher Block Chaining|
|CFB|Cipher Feedback|
|OFB|Output Feedback|
|CTR|Counter|
|GCM|Galois/Counter Mode|

> ⚠️ *Trampa de examen:* ECB revela patrones.

> 🧠 *Para recordar:* **Nunca uses ECB**

---

## Flashcards

| Término | Definición |
|------|------------|
| DES | Data Encryption Standard — key de 56-bit, block de 64-bit, roto/inseguro |
| 3DES | Triple DES — aplica DES tres veces, key de 112/168-bit, obsoleto (deprecated) pero más fuerte que DES |
| AES | Advanced Encryption Standard — key de 128/192/256-bit, block de 128-bit, seguro y recomendado |
| Blowfish | Cipher simétrico con key de 32-448 bit, block de 64-bit, creado por Bruce Schneier |
| Twofish | Sucesor de Blowfish, key de hasta 256-bit, block de 128-bit, finalista de AES |
| RC4 | Stream cipher — key de 40-2048 bit, roto, usado históricamente en SSL/WEP |
| ChaCha20 | Stream cipher moderno — key de 256-bit, más rápido que AES en móviles, reemplazo de RC4 |
| CAST | Cipher simétrico — block de 64/128-bit, key de hasta 256-bit, usado en PGP |
| Camellia | Cipher equivalente a AES — block de 128-bit, keys de 128/192/256-bit |
| GOST | Cipher simétrico ruso — block de 64-bit, key de 256-bit |
| Block Cipher | Encripta bloques de tamaño fijo (AES, DES) |
| Stream Cipher | Encripta stream continuo de datos (RC4, ChaCha20) |
| ECB | Modo Electronic Codebook — INSEGURO, revela patrones |
| CBC | Modo Cipher Block Chaining — usa un initialization vector (IV) |
| GCM | Galois/Counter Mode — proporciona encryption y autenticación |
| Feistel Structure | Estructura del cipher DES usando sustitución y permutación |

---

## Preguntas de práctica

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
