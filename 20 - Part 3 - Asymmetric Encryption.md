# OBJECTIVE 03 — ASYMMETRIC ENCRYPTION ALGORITHMS

---

## ASYMMETRIC ENCRYPTION (EXAM DEFINITION)

|Property|Description|
|---|---|
|Keys|Utiliza dos claves matemáticamente relacionadas|
|Public key|Utilizada para encryption o verification|
|Private key|Utilizada para decryption o signing|
|Speed|Lenta|
|Primary use|Key exchange, autenticación, digital signatures|

MEMORY HOOK:
**Public encrypts, private decrypts**

EXAM TRAP:
Asymmetric encryption **no se utiliza para datos masivos**.

---

## WHY ASYMMETRIC CRYPTOGRAPHY IS NEEDED

|Problem|Solution|
|---|---|
|Distribución segura de claves|Public keys|
|Autenticación|Digital signatures|
|No repudiación|Propiedad de la private key|

---

# RSA (MOST IMPORTANT ASYMMETRIC ALGORITHM)

---

## RSA OVERVIEW

|Property|Description|
|---|---|
|Full name|Rivest–Shamir–Adleman|
|Key size|1024–4096 bits|
|Basado en|Factorización de enteros|
|Utilizado para|Encryption, signatures, key exchange|

LÓGICA:

- Encrypt con public key
    
- Decrypt con private key
    

MEMORY HOOK:
**RSA = factorizar números grandes**

EXAM TRAP:
RSA ≠ symmetric encryption.

---

## RSA ATTACK WEAKNESSES (EXAM KNOWLEDGE)

|Debilidad|
|---|
|Key sizes pequeños|
|Poor padding (PKCS#1)|
|Side-channel attacks|

---

# DIFFIE–HELLMAN (KEY EXCHANGE ONLY)

---

## DIFFIE–HELLMAN OVERVIEW

|Property|Description|
|---|---|
|Purpose|Key exchange seguro|
|Encryption|NO|
|Authentication|NO|
|Vulnerability|Ataque MITM|

LÓGICA:

- Dos partes acuerdan un shared secret
    
- Utilizado para derivar symmetric keys
    

MEMORY HOOK:
**DH comparte secrets, no mensajes**

EXAM TRAP:
Diffie-Hellman **no encripta datos**.

---

## EPHEMERAL DIFFIE–HELLMAN

|Variant|Description|
|---|---|
|DHE|Ephemeral DH|
|ECDHE|Elliptic Curve DHE|

Propósito:

- Proporciona **Perfect Forward Secrecy (PFS)**
    

MEMORY HOOK:
**Ephemeral = claves temporales**

---

# DIGITAL SIGNATURE ALGORITHM (DSA)

---

## DSA OVERVIEW

|Property|Description|
|---|---|
|Purpose|Solo digital signatures|
|Encryption|NO|
|Basado en|Logaritmos discretos|
|Utilizado para|Autenticación, integridad|

LÓGICA:

- Private key firma
    
- Public key verifica
    

MEMORY HOOK:
**DSA = firmar, no encriptar**

EXAM TRAP:
DSA no puede encriptar datos.

---

# ELGAMAL

---

## ELGAMAL OVERVIEW

|Property|Description|
|---|---|
|Basado en|Diffie–Hellman|
|Uso|Encryption + signatures|
|Desventaja|Ciphertext grande|

MEMORY HOOK:
**ElGamal = encriptación basada en DH**

---

# ELLIPTIC CURVE CRYPTOGRAPHY (ECC)

---

## ECC OVERVIEW (VERY IMPORTANT MODERN CRYPTO)

|Property|Description|
|---|---|
|Basado en|Elliptic curves|
|Key size|Mucho más pequeña|
|Speed|Más rápida que RSA|
|Security|Fuerte|

LÓGICA:

- 256-bit ECC ≈ 3072-bit RSA
    

MEMORY HOOK:
**ECC = claves pequeñas, alta seguridad**

---

## ECC USE CASES

|Uso|
|---|
|Dispositivos móviles|
|IoT|
|TLS|
|Digital signatures|

EXAM TRAP:
ECC ≠ reemplazo de RSA por algoritmo, sino por eficiencia.

---

# ASYMMETRIC ALGORITHMS COMPARISON (EXAM FAVORITE)

|Algorithm|Encrypt|Sign|Key Exchange|
|---|---|---|---|
|RSA|Sí|Sí|Sí|
|Diffie–Hellman|No|No|Sí|
|DSA|No|Sí|No|
|ElGamal|Sí|Sí|Sí|
|ECC|Sí|Sí|Sí|

---

# DIGITAL SIGNATURE PROCESS (EXAM LOGIC)

|Paso|
|---|
|Hash del mensaje|
|Encrypt del hash con private key|
|Enviar mensaje + firma|
|Receiver descifra el hash con public key|
|Comparar hashes|

MEMORY HOOK:
**Sign = private, verify = public**

---

# PUBLIC KEY INFRASTRUCTURE (PKI) INTRODUCTION

---

## PKI COMPONENTS (PREVIEW FOR NEXT OBJECTIVE)

|Componente|
|---|
|Certificate Authority (CA)|
|Digital certificates|
|Public keys|
|Cadenas de confianza|

MEMORY HOOK:
**PKI = sistema de confianza**

---

# OBJECTIVE 03 — MEMORY CHECKLIST

Debes recordar:

- RSA = encryption + signatures
    
- Diffie-Hellman = solo key exchange
    
- DSA = solo signatures
    
- ECC = claves más pequeñas, más rápida
    
- Public key encripta
    
- Private key descifra/firma
    
- Asymmetric crypto es lenta
    

---

### STATUS

Objetivo 03: COMPLETADO

---

Responde **next** para continuar con:

**OBJECTIVE 04 — HASH FUNCTIONS AND MESSAGE DIGEST ALGORITHMS (MD5, SHA-1, SHA-2, SHA-3, HMAC)**

---

# EXAM FLASHCARDS

| Término | Definición |
|------|------------|
| RSA | Rivest–Shamir–Adleman — algoritmo asimétrico para encryption, signatures, key exchange; basado en factorización de enteros |
| Diffie-Hellman | Algoritmo de key exchange únicamente — NO encripta datos; vulnerable a MITM |
| DHE | Ephemeral Diffie-Hellman — proporciona Perfect Forward Secrecy |
| ECDHE | Elliptic Curve Diffie-Hellman Ephemeral — proporciona PFS con claves más pequeñas |
| DSA | Digital Signature Algorithm — solo firma datos, no puede encriptar |
| ElGamal | Algoritmo asimétrico basado en Diffie-Hellman; soporta encryption y signatures |
| ECC | Elliptic Curve Cryptography — 256-bit ECC ≈ 3072-bit RSA; claves más pequeñas, más rápido |
| Perfect Forward Secrecy | Propiedad donde claves a largo plazo comprometidas no afectan claves de sesión pasadas |
| Digital Signature | Private key firma, public key verifica — proporciona autenticación e integridad |
| Integer Factorization | Problema matemático subyacente a la seguridad de RSA |
| Discrete Logarithms | Problema matemático subyacente a DSA y Diffie-Hellman |
| PKI | Public Key Infrastructure — marco que gestiona certificates, public keys y confianza |

---

# PRACTICE QUESTIONS

**1.** ¿Qué algoritmo asimétrico se utiliza ÚNICAMENTE para key exchange y no puede encriptar datos?
- a) RSA
- b) Diffie-Hellman
- c) ECC
- d) ElGamal
**Respuesta:** b) — Diffie-Hellman es un algoritmo de key exchange únicamente; no encripta datos directamente.

**2.** ¿Qué garantiza Perfect Forward Secrecy (PFS)?
- a) Todas las claves se almacenan permanentemente
- b) Las claves a largo plazo comprometidas no afectan claves de sesión pasadas
- c) La encriptación es más rápida
- d) Las claves nunca expiran
**Respuesta:** b) — PFS garantiza que incluso si las claves a largo plazo son comprometidas, las claves de sesión pasadas permanecen seguras.

**3.** ¿Por qué se prefiere ECC sobre RSA para dispositivos móviles?
- a) ECC es más lenta pero más segura
- b) ECC usa claves mucho más pequeñas para seguridad equivalente
- c) ECC usa claves más grandes
- d) ECC es solo para firmar
**Respuesta:** b) — ECC proporciona seguridad equivalente con claves mucho más pequeñas, haciéndola más rápida y eficiente para móviles.

**4.** En el proceso de digital signature, ¿qué clave firma el mensaje?
- a) Public key
- b) Private key
- c) Session key
- d) Master key
**Respuesta:** b) — La private key firma, y la public key verifica la firma.

**5.** ¿Cuál es el propósito principal de DSA (Digital Signature Algorithm)?
- a) Encriptar datos
- b) Intercambiar claves
- c) Crear digital signatures únicamente
- d) Hashear mensajes
**Respuesta:** c) — DSA está diseñado específicamente para digital signatures y no puede encriptar datos.
