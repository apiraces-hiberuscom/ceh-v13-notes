# Módulo 20 · Parte 3 — Asymmetric Encryption

> **Módulo 20 — Cryptography** · Parte 3 de 6 · Algoritmos asymmetric (RSA, Diffie-Hellman, DSA, ElGamal, ECC), Perfect Forward Secrecy y proceso de digital signature

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [OBJECTIVE 03 — ASYMMETRIC ENCRYPTION ALGORITHMS](#objective-03--asymmetric-encryption-algorithms)
- [RSA (MOST IMPORTANT ASYMMETRIC ALGORITHM)](#rsa-most-important-asymmetric-algorithm)
- [DIFFIE–HELLMAN (KEY EXCHANGE ONLY)](#diffiehellman-key-exchange-only)
- [DIGITAL SIGNATURE ALGORITHM (DSA)](#digital-signature-algorithm-dsa)
- [ELGAMAL](#elgamal)
- [ELLIPTIC CURVE CRYPTOGRAPHY (ECC)](#elliptic-curve-cryptography-ecc)
- [ASYMMETRIC ALGORITHMS COMPARISON 🔥](#asymmetric-algorithms-comparison-high-yield)
- [DIGITAL SIGNATURE PROCESS](#digital-signature-process)
- [PUBLIC KEY INFRASTRUCTURE (PKI) INTRODUCTION](#public-key-infrastructure-pki-introduction)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **Asymmetric encryption** — dos claves relacionadas: public key para cifrar/verificar, private key para descifrar/firmar; lenta, no se usa para datos masivos
- **RSA** — Rivest–Shamir–Adleman, basado en **integer factorization**, keys de 1024–4096 bits; cifra, firma y sirve para key exchange
- **Debilidades de RSA** — key sizes pequeños, poor padding (PKCS#1) y side-channel attacks
- **Diffie-Hellman** — SOLO key exchange (acuerda un shared secret para derivar symmetric keys); no cifra ni autentica → vulnerable a MITM
- **DHE / ECDHE** — Diffie-Hellman ephemeral (claves temporales) → **Perfect Forward Secrecy (PFS)**
- **DSA** — SOLO digital signatures, no cifra; basado en **discrete logarithms**
- **ElGamal** — basado en Diffie-Hellman; cifra y firma, pero genera un ciphertext grande
- **ECC** — claves mucho más pequeñas y más rápida que RSA: **256-bit ECC ≈ 3072-bit RSA**; móviles, IoT, TLS
- **Digital signature** — hash del mensaje cifrado con la private key del emisor; el receptor lo verifica con la public key y compara hashes
- **Comparativa** — RSA, ElGamal y ECC cifran, firman e intercambian claves; Diffie-Hellman solo key exchange; DSA solo firma

---

## OBJECTIVE 03 — ASYMMETRIC ENCRYPTION ALGORITHMS

### ASYMMETRIC ENCRYPTION

|Propiedad|Descripción|
|---|---|
|Claves|Utiliza dos claves matemáticamente relacionadas|
|Public key|Utilizada para encryption o verification|
|Private key|Utilizada para decryption o signing|
|Velocidad|Lenta|
|Uso principal|Key exchange, authentication, digital signatures|

> 🧠 *Para recordar:* **Public key encripta, private key desencripta**

> ⚠️ *Trampa de examen:* Asymmetric encryption **no se utiliza para datos masivos**.

---

### WHY ASYMMETRIC CRYPTOGRAPHY IS NEEDED

|Problema|Solución|
|---|---|
|Distribución segura de claves|Public keys|
|Authentication|Digital signatures|
|Non-repudiation (no repudio)|Posesión exclusiva de la private key|

---

## RSA (MOST IMPORTANT ASYMMETRIC ALGORITHM)

### RSA OVERVIEW

|Propiedad|Descripción|
|---|---|
|Nombre completo|Rivest–Shamir–Adleman|
|Key size|1024–4096 bits|
|Basado en|Integer factorization (factorización de enteros)|
|Utilizado para|Encryption, signatures, key exchange|

LÓGICA:

- Se cifra con la public key
- Se descifra con la private key

> 🧠 *Para recordar:* **RSA = factorizar números grandes**

> ⚠️ *Trampa de examen:* RSA ≠ symmetric encryption.

---

### RSA ATTACK WEAKNESSES

|Debilidad|
|---|
|Key sizes pequeños|
|Poor padding (PKCS#1)|
|Side-channel attacks|

---

## DIFFIE–HELLMAN (KEY EXCHANGE ONLY)

### DIFFIE–HELLMAN OVERVIEW

|Propiedad|Descripción|
|---|---|
|Propósito|Key exchange seguro|
|Encryption|NO|
|Authentication|NO|
|Vulnerabilidad|MITM attack|

LÓGICA:

- Dos partes acuerdan un shared secret
- Utilizado para derivar symmetric keys

> 🧠 *Para recordar:* **DH comparte secrets, no mensajes**

> ⚠️ *Trampa de examen:* Diffie-Hellman **no encripta datos**.

---

### EPHEMERAL DIFFIE–HELLMAN

|Variante|Descripción|
|---|---|
|DHE|Ephemeral DH|
|ECDHE|Elliptic Curve DHE|

Propósito:

- Proporciona **Perfect Forward Secrecy (PFS)**

> 🧠 *Para recordar:* **Ephemeral = claves temporales**

---

## DIGITAL SIGNATURE ALGORITHM (DSA)

### DSA OVERVIEW

|Propiedad|Descripción|
|---|---|
|Propósito|Solo digital signatures|
|Encryption|NO|
|Basado en|Discrete logarithms (logaritmos discretos)|
|Utilizado para|Authentication, integrity|

LÓGICA:

- Private key firma
- Public key verifica

> 🧠 *Para recordar:* **DSA = firmar, no encriptar**

> ⚠️ *Trampa de examen:* DSA no puede encriptar datos.

---

## ELGAMAL

### ELGAMAL OVERVIEW

|Propiedad|Descripción|
|---|---|
|Basado en|Diffie–Hellman|
|Uso|Encryption + signatures|
|Desventaja|Ciphertext grande|

> 🧠 *Para recordar:* **ElGamal = encriptación basada en DH**

---

## ELLIPTIC CURVE CRYPTOGRAPHY (ECC)

### ECC OVERVIEW (VERY IMPORTANT MODERN CRYPTO)

|Propiedad|Descripción|
|---|---|
|Basado en|Elliptic curves|
|Key size|Mucho más pequeña|
|Velocidad|Más rápida que RSA|
|Seguridad|Fuerte|

LÓGICA:

- 256-bit ECC ≈ 3072-bit RSA

> 🧠 *Para recordar:* **ECC = claves pequeñas, alta seguridad**

---

### ECC USE CASES

|Uso|
|---|
|Dispositivos móviles|
|IoT|
|TLS|
|Digital signatures|

> ⚠️ *Trampa de examen:* ECC no sustituye a RSA por ser un algoritmo «mejor», sino por eficiencia: misma seguridad con claves más pequeñas.

---

## ASYMMETRIC ALGORITHMS COMPARISON (HIGH YIELD)

|Algoritmo|Cifra (encrypt)|Firma (sign)|Key exchange|
|---|---|---|---|
|RSA|Sí|Sí|Sí|
|Diffie–Hellman|No|No|Sí|
|DSA|No|Sí|No|
|ElGamal|Sí|Sí|Sí|
|ECC|Sí|Sí|Sí|

---

## DIGITAL SIGNATURE PROCESS

|Paso|
|---|
|Hash del mensaje|
|Cifrar el hash con la private key del emisor|
|Enviar mensaje + firma|
|El receptor descifra el hash con la public key del emisor|
|Comparar hashes|

> 🧠 *Para recordar:* **Firmar = private, verificar = public**

---

## PUBLIC KEY INFRASTRUCTURE (PKI) INTRODUCTION

### PKI COMPONENTS

|Componente|
|---|
|Certificate Authority (CA)|
|Digital certificates|
|Public keys|
|Trust chains (cadenas de confianza)|

> 🧠 *Para recordar:* **PKI = sistema de confianza**

---

## Flashcards

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

## Preguntas de práctica

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
