# Módulo 20 · Parte 1 — Cryptography Concepts

> **Módulo 20 — Cryptography** · Parte 1 de 6 · Qué es la criptografía, sus objetivos (CIA + N), symmetric vs asymmetric, GAK/key escrow y tipos de cipher

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
- [OBJECTIVE 01 — CRYPTOGRAPHY CONCEPTS AND ENCRYPTION ALGORITHMS](#objective-01--cryptography-concepts-and-encryption-algorithms)
- [Extras de examen (Boson Practice Test)](#extras-de-examen-boson-practice-test)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **Cryptography** — del griego *kryptos* (oculto) + *graphia* (escritura); convierte plaintext en ciphertext mediante encryption
- **Objetivos (CIA + N)** — Confidentiality, Integrity, Authentication y Non-repudiation; el cifrado por sí solo no da authentication ni integrity
- **Symmetric (secret-key)** — una sola clave para cifrar y descifrar: rápida y con poco CPU, pero con key distribution problem y sin authentication
- **Asymmetric (public-key)** — par public key + private key: resuelve la distribución de claves y permite digital signatures, pero es lenta y no apta para datos masivos
- **Flujo asymmetric** — se cifra con la public key del receptor y solo su private key descifra; la public key no descifra lo que ella cifra
- **GAK / key escrow** — Government Access to Keys: un tercero custodia las claves para intercepción legal (key escrow ≠ backdoor, aunque el efecto es similar)
- **Classical ciphers** — substitution (reemplaza caracteres) y transposition (reordena caracteres); ej. Caesar, Hill, Rail fence
- **Block vs stream cipher** — block cifra bloques de tamaño fijo; stream cifra los datos bit a bit
- **AES / Serpent** — AES usa bloque de 128 bits sea cual sea la clave; Serpent: bloque de 128 bits y claves de 128/192/256 bits
- **Blowfish / IDEA** — Blowfish: bloque de 64 bits y clave de 32–448 bits; IDEA: bloque de 64 bits, clave de 128 bits, usado por PGP
- **DROWN attack** — se mitiga deshabilitando SSLv2 (roto); usar TLS 1.2 o 1.3
- **Side-channel attack** — intenta romper el cifrado monitorizando algo externo al algoritmo

---

## Objetivos de aprendizaje

Debes ser capaz de:

|#|Objetivo de aprendizaje|
|---|---|
|01|Explicar conceptos de Cryptography|
|02|Entender diferentes algoritmos de encriptación|
|03|Usar diferentes herramientas de Cryptography|
|04|Conocer las aplicaciones de Cryptography|
|05|Describir ataques de Cryptography|
|06|Usar herramientas de Cryptanalysis|

> 🧠 *Para recordar:* **Conceptos → Algoritmos → Herramientas → Aplicaciones → Ataques → Análisis**

---

## OBJECTIVE 01 — CRYPTOGRAPHY CONCEPTS AND ENCRYPTION ALGORITHMS

### WHAT IS CRYPTOGRAPHY

|Término|Definición|
|---|---|
|Cryptography|La práctica de ocultar información convirtiendo datos legibles en un formato ilegible mediante encriptación|

ORIGEN (EXAM FACT):

- Griego **kryptos** = oculto
- Griego **graphia** = escritura

> 🧠 *Para recordar:* **Crypto = escritura oculta**

---

### WHAT ENCRYPTION DOES

|Acción|Descripción|
|---|---|
|Encryption|Convierte plaintext en ciphertext|
|Decryption|Convierte ciphertext de vuelta a plaintext|

---

### CRYPTOGRAPHY PROCESS

|Paso|
|---|
|Plaintext|
|Encryption algorithm + key|
|Ciphertext|
|Transmisión|
|Decryption algorithm + key|
|Plaintext|

> ⚠️ *Trampa de examen:* Encryption **no elimina datos**, solo **transforma la representación**.

---

### OBJECTIVES OF CRYPTOGRAPHY (HIGH YIELD)

|Objetivo|Significado|
|---|---|
|Confidentiality|Solo usuarios autorizados pueden acceder a la información|
|Integrity|Los datos no se alteran de manera inapropiada|
|Authentication|Se verifica la identidad del emisor/receptor|
|Non-repudiation|El emisor no puede negar haber enviado el mensaje|

> 🧠 *Para recordar:* **CIA + N**

> ⚠️ *Trampa de examen:* Encryption por sí sola ≠ authentication o integrity.

---

### BASIC CRYPTOGRAPHY TERMINOLOGY

|Término|Significado|
|---|---|
|Plaintext|Datos originales legibles|
|Ciphertext|Datos encriptados ilegibles|
|Cipher|Algoritmo utilizado para encriptar/desencriptar|
|Key|Valor secreto que controla la encriptación|
|Cryptanalysis|Ruptura de la encriptación|
|Cryptosystem|Algoritmos + keys + protocolos|

---

### TYPES OF CRYPTOGRAPHY (HIGH YIELD)

Cryptography se clasifica **según el número de claves utilizadas**.

---

#### 1. SYMMETRIC KEY CRYPTOGRAPHY

|Propiedad|Descripción|
|---|---|
|Claves utilizadas|Misma clave para encriptación y desencriptación|
|Velocidad|Rápida|
|Problema de seguridad|Problema de distribución de claves|
|También llamada|Secret-key cryptography|

LÓGICA:

- El emisor encripta usando una clave secreta compartida
- El receptor desencripta usando la misma clave

> 🧠 *Para recordar:* **Una clave → rápida → difícil de compartir**

---

#### 2. ASYMMETRIC KEY CRYPTOGRAPHY

|Propiedad|Descripción|
|---|---|
|Claves utilizadas|Public key + private key|
|Velocidad|Lenta|
|Seguridad|Resuelve el problema de distribución de claves|
|También llamada|Public-key cryptography|

LÓGICA:

- La public key encripta
- La private key desencripta

> 🧠 *Para recordar:* **Dos claves → intercambio seguro → más lenta**

---

### ASYMMETRIC ENCRYPTION MESSAGE FLOW

|Paso|Descripción|
|---|---|
|1|El emisor encuentra la public key del receptor|
|2|El emisor encripta el mensaje usando la public key|
|3|Solo la private key del receptor puede desencriptar|
|4|Garantiza confidentiality|
|5|Las digital signatures garantizan authentication|

> ⚠️ *Trampa de examen:* La public key **no puede desencriptar** lo que ella misma encripta.

---

### STRENGTHS & WEAKNESSES (HIGH YIELD)

#### SYMMETRIC ENCRYPTION

|Fortalezas|Debilidades|
|---|---|
|Rápida|Problema de distribución de claves|
|Eficiente|Gestión de claves difícil|
|Menor uso de CPU|No proporciona authentication|

---

#### ASYMMETRIC ENCRYPTION

|Fortalezas|Debilidades|
|---|---|
|Intercambio seguro de claves|Lenta|
|Digital signatures|Alto uso de CPU|
|Authentication|No adecuada para datos masivos|

> 🧠 *Para recordar:* **Symmetric = rápida, Asymmetric = confianza**

---

### GOVERNMENT ACCESS TO KEYS (GAK) — EXAM CONCEPT

|Término|Explicación|
|---|---|
|GAK|Acceso gubernamental obligatorio a las claves de encriptación|
|Propósito|Intercepción legal|
|Método|Key escrow|
|Riesgo|Debilita la privacidad|

> 🧠 *Para recordar:* **Key escrow = una tercera parte guarda las claves**

> ⚠️ *Trampa de examen:* Key escrow ≠ backdoor (pero el efecto es similar).

---

### WHAT IS A CIPHER

|Definición|
|---|
|Un cipher es un conjunto de pasos matemáticos utilizados para encriptar o desencriptar datos|

---

### TYPES OF CIPHERS

#### CLASSICAL CIPHERS

|Tipo|Descripción|
|---|---|
|Substitution|Reemplazar caracteres|
|Transposition|Reorganizar caracteres|

EJEMPLOS (EXAM):

- Caesar cipher
- Hill cipher
- Rail fence cipher

> 🧠 *Para recordar:* **Clásicos = letras**

---

#### MODERN CIPHERS

Clasificados por:

##### A. TIPO DE CLAVE UTILIZADA

|Tipo|
|---|
|Symmetric|
|Asymmetric|

##### B. TIPO DE DATOS DE ENTRADA

|Tipo|Descripción|
|---|---|
|Block cipher|Encripta bloques de tamaño fijo|
|Stream cipher|Encripta datos bit por bit|

> 🧠 *Para recordar:* **Block = bloques, Stream = flujo**

---

## Extras de examen (Boson Practice Test)

|Concepto|Qué recordar|
|---|---|
|Blowfish|Symmetric block cipher de 64 bits, clave de 32-448 bits|
|IDEA|Block cipher de 64 bits con clave de 128 bits — utilizado por PGP|
|AES block size|Bloque de 128 bits independientemente de la longitud de la clave|
|Serpent|Symmetric block cipher de 128 bits con longitudes de clave de 128, 192 o 256 bits|
|DROWN attack|Contramedida: deshabilitar SSLv2 (DROWN explota servidores que todavía aceptan SSLv2)|
|SSLv2|Extremadamente roto — se debe usar TLS 1.2 o 1.3|
|Side-channel attack|Intento de romper la encriptación monitorizando algo externo al algoritmo|

---

## Flashcards

| Término | Definición |
|------|------------|
| Cryptography | Práctica de ocultar información convirtiendo datos legibles en formato ilegible mediante encriptación |
| Plaintext | Datos originales legibles antes de la encriptación |
| Ciphertext | Datos encriptados ilegibles después de la encriptación |
| Cipher | Algoritmo utilizado para encriptar o desencriptar datos |
| Key | Valor secreto que controla el proceso de encriptación |
| Cryptanalysis | Ruptura de la encriptación sin autorización |
| Cryptosystem | Conjunto completo de algoritmos, claves y protocolos |
| Symmetric Key Cryptography | Misma clave para encriptación y desencriptación — rápida pero con problema de distribución de claves |
| Asymmetric Key Cryptography | La public key encripta, la private key desencripta — resuelve la distribución de claves pero es más lenta |
| Key Distribution Problem | El desafío de compartir claves de forma segura entre las partes |
| Key Escrow | Una tercera parte guarda las claves de encriptación para acceso gubernamental (GAK) |
| Block Cipher | Encripta bloques de datos de tamaño fijo |
| Stream Cipher | Encripta datos continuamente bit por bit |
| Confidentiality | Solo usuarios autorizados pueden acceder a la información |
| Integrity | Los datos no se alteran de manera inapropiada |
| Authentication | Se verifica la identidad del emisor/receptor |
| Non-repudiation | El emisor no puede negar haber enviado el mensaje |
| Substitution Cipher | Cipher clásico que reemplaza caracteres |
| Transposition Cipher | Cipher clásico que reorganiza caracteres |

---

## Preguntas de práctica

**1.** ¿Cuál es la principal ventaja de la encryption symmetric sobre la asymmetric?
- a) Mejor distribución de claves
- b) Mayor velocidad y menor uso de CPU
- c) Proporciona authentication
- d) Resuelve la non-repudiation
**Respuesta:** b) — La encryption symmetric es mucho más rápida y usa menos CPU, pero tiene desafíos en la distribución de claves.

**2.** En la cryptography asymmetric, ¿qué clave encripta el mensaje?
- a) Private key
- b) Public key
- c) Session key
- d) Master key
**Respuesta:** b) — La public key encripta, y solo la private key correspondiente puede desencriptar.

**3.** ¿Qué es el "problema de distribución de claves" en la cryptography symmetric?
- a) Las claves son demasiado largas para recordar
- b) La dificultad de compartir la misma clave de manera segura entre emisor y receptor
- c) Las claves expiran demasiado rápido
- d) Las claves requieren almacenamiento en hardware
**Respuesta:** b) — El problema de distribución de claves es el desafío de compartir claves de forma segura sin exponerlas.

**4.** ¿Qué objetivo de cryptography garantiza que el emisor no pueda negar haber enviado un mensaje?
- a) Confidentiality
- b) Integrity
- c) Authentication
- d) Non-repudiation
**Respuesta:** d) — La non-repudiation impide que el emisor niegue haber enviado el mensaje.

**5.** ¿Qué tipo de cipher encripta datos bit por bit?
- a) Block cipher
- b) Stream cipher
- c) Substitution cipher
- d) Transposition cipher
**Respuesta:** b) — Los stream ciphers encriptan datos continuamente bit por bit, mientras que los block ciphers encriptan bloques de tamaño fijo.
