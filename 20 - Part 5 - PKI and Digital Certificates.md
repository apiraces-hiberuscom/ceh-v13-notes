# Módulo 20 · Parte 5 — PKI and Digital Certificates

> **Módulo 20 — Cryptography** · Parte 5 de 6 · PKI: CA, RA, digital certificates, CRL/OCSP, emisión y validación, trust chain y tipos de certificado

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [WHY PKI EXISTS](#why-pki-exists)
- [WHAT IS PKI](#what-is-pki)
- [CORE PKI COMPONENTS 🔥](#core-pki-components-high-yield)
- [HOW PKI WORKS 🔥](#how-pki-works-high-yield)
- [TRUST CHAIN 🔥](#trust-chain-high-yield)
- [SELF-SIGNED CERTIFICATES](#self-signed-certificates)
- [TYPES OF DIGITAL CERTIFICATES](#types-of-digital-certificates)
- [APPLICATIONS OF PKI 🔥](#applications-of-pki-high-yield)
- [DIGITAL SIGNATURES VS CERTIFICATES 🔥](#digital-signatures-vs-certificates-high-yield)
- [COMMON PKI ATTACKS](#common-pki-attacks)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **PKI (Public Key Infrastructure)** — marco que gestiona digital certificates, public keys y relaciones de confianza; resuelve el problema de confiar en una public key
- **CA (Certificate Authority)** — trusted third party que emite y firma certificados (trust anchor); no es un proveedor de cifrado
- **RA (Registration Authority)** — verifica la identidad y aprueba las solicitudes de certificado en nombre de la CA
- **Digital certificate** — vincula identidad y public key: subject name, subject public key, issuer, validity period, serial number y firma de la CA
- **CRL vs OCSP** — CRL: lista de certificados revocados mantenida por la CA; OCSP: estado en tiempo real por consulta, más rápido
- **Emisión** — generar key pair → la RA verifica la identidad → la CA firma → se emite el certificado
- **Validación** — firma de la CA → trust chain → expiración → estado de revocación
- **Trust chain** — Root CA (pre-confiada) → Intermediate CA → end-entity certificate; el navegador confía en las CAs, no en los sitios
- **Self-signed certificate** — issuer = subject; no confiable por defecto, solo para pruebas
- **DV < OV < EV** — niveles de validación; EV es el más alto
- **Certificate vs digital signature** — el certificado prueba QUIÉN (identidad); la firma, hecha con la private key, prueba QUÉ (el mensaje)
- **CA compromise** — si la CA se ve comprometida, toda la PKI se derrumba

---

## WHY PKI EXISTS

### THE CORE PROBLEM PKI SOLVES

|Problema|
|---|
|¿Cómo confías en que una clave pública realmente pertenece a la entidad real?|

Ejemplo de problema (EXAM SCENARIO):

- El atacante te da **su** clave pública
- Afirma que pertenece a un banco
- Cifras datos → el atacante descifra

> 🧠 *Para recordar:* **Las public keys necesitan confianza**

---

## WHAT IS PKI

|Término|Definición CEH|
|---|---|
|Public Key Infrastructure (PKI)|Un marco que gestiona certificados digitales, claves públicas y relaciones de confianza|

PKI PROPORCIONA:

- Authentication
- Integrity
- Confidentiality
- Non-repudiation

> 🧠 *Para recordar:* **PKI = trust framework (marco de confianza)**

---

## CORE PKI COMPONENTS (HIGH YIELD)

### 1. CERTIFICATE AUTHORITY (CA)

|Propiedad|Explicación|
|---|---|
|Rol|Trusted third party (tercero de confianza)|
|Función|Emite y firma certificados|
|Confianza|Los sistemas confían en ella implícitamente|

Ejemplos:

- DigiCert
- GlobalSign
- Let's Encrypt

> 🧠 *Para recordar:* **CA = trust anchor**

> ⚠️ *Trampa de examen:* CA ≠ proveedor de cifrado (emite y firma certificados; no cifra tus datos).

---

### 2. DIGITAL CERTIFICATE

|Propiedad|Explicación|
|---|---|
|Contiene|Public key + identidad|
|Emitido por|CA|
|Propósito|Vincular la identidad con la public key|

---

### WHAT A DIGITAL CERTIFICATE CONTAINS (HIGH YIELD)

|Campo|
|---|
|Subject name (nombre del sujeto)|
|Subject public key (clave pública del sujeto)|
|Issuer (emisor: la CA)|
|Validity period (período de validez)|
|Serial number (número de serie)|
|Digital signature de la CA|

> 🧠 *Para recordar:* **Certificate = DNI de la public key**

---

### 3. REGISTRATION AUTHORITY (RA)

|Propiedad|Explicación|
|---|---|
|Rol|Verifica la identidad|
|Función|Aprueba solicitudes de certificados|
|Relación|Trabaja en nombre de la CA|

> 🧠 *Para recordar:* **RA = verificador de identidad**

---

### 4. CERTIFICATE REVOCATION LIST (CRL)

|Propiedad|Explicación|
|---|---|
|Propósito|Lista de certificados revocados|
|Motivo|Certificados comprometidos o invalidados antes de su fecha de expiración|
|Mantenida por|CA|

> 🧠 *Para recordar:* **CRL = lista negra de certificados**

---

### 5. ONLINE CERTIFICATE STATUS PROTOCOL (OCSP)

|Propiedad|Explicación|
|---|---|
|Propósito|Estado del certificado en tiempo real|
|Más rápido que|CRL|
|Basado en consultas|Sí|

> 🧠 *Para recordar:* **OCSP = comprobación del certificado en vivo**

> ⚠️ *Trampa de examen:* OCSP NO reemplaza a los certificados (solo consulta su estado).

---

## HOW PKI WORKS (HIGH YIELD)

### CERTIFICATE ISSUANCE PROCESS

|Paso|Descripción|
|---|---|
|1|El usuario genera un key pair (par de claves)|
|2|Envía la clave pública a la RA|
|3|La RA verifica la identidad|
|4|La CA firma la clave pública|
|5|Se emite el certificado|

> 🧠 *Para recordar:* **Generar → Verificar → Firmar → Confiar**

---

### CERTIFICATE VALIDATION PROCESS (HIGH YIELD)

|Paso|Descripción|
|---|---|
|1|El cliente recibe el certificado|
|2|Verifica la firma de la CA|
|3|Verifica la cadena de confianza|
|4|Verifica la expiración|
|5|Verifica el estado de revocación|

> 🧠 *Para recordar:* **Firma → Cadena → Fecha → Revocación**

---

## TRUST CHAIN (HIGH YIELD)

### TRUST CHAIN EXPLAINED

|Nivel|
|---|
|Root CA|
|Intermediate CA|
|End-entity certificate (certificado de entidad final)|

LÓGICA:

- La Root CA es pre-confiada
- La Root firma la Intermediate
- La Intermediate firma el sitio web

> 🧠 *Para recordar:* **La confianza fluye hacia abajo**

> ⚠️ *Trampa de examen:* Los navegadores NO confían directamente en los sitios web — confían en las CAs.

---

## SELF-SIGNED CERTIFICATES

|Propiedad|Explicación|
|---|---|
|Issuer|Igual que el subject|
|Confianza|NO es confiable por defecto|
|Uso|Pruebas|

> 🧠 *Para recordar:* **Self-signed = sin confianza externa**

---

## TYPES OF DIGITAL CERTIFICATES

### BASED ON VALIDATION LEVEL

|Tipo|Descripción|
|---|---|
|DV|Domain Validation|
|OV|Organization Validation|
|EV|Extended Validation|

> 🧠 *Para recordar:* **DV < OV < EV**

---

### BASED ON PURPOSE

|Certificado|
|---|
|Certificado SSL/TLS|
|Code signing certificate (firma de código)|
|Certificado de email (S/MIME)|
|Client authentication certificate (autenticación de cliente)|

---

## APPLICATIONS OF PKI (HIGH YIELD)

|Aplicación|
|---|
|SSL/TLS|
|Email seguro|
|Firmas digitales|
|Smart cards (tarjetas inteligentes)|
|Autenticación VPN|

> 🧠 *Para recordar:* **PKI allí donde importa la confianza**

---

## DIGITAL SIGNATURES VS CERTIFICATES (HIGH YIELD)

|Característica|Digital signature|Certificate|
|---|---|---|
|Propósito|Verificar el mensaje|Verificar la identidad|
|Clave usada|Private key|Public key|
|Emitido por|Usuario|CA|

> 🧠 *Para recordar:* **El certificado prueba QUIÉN, la firma prueba QUÉ**

---

## COMMON PKI ATTACKS

|Ataque|
|---|
|Fake CA (CA falsa)|
|Certificate spoofing (suplantación de certificados)|
|CA compromise (compromiso de la CA)|
|Man-in-the-middle|

> ⚠️ *Trampa de examen:* Si la CA se ve comprometida, toda la PKI se derrumba.

---

## Flashcards

| Término | Definición |
|------|------------|
| PKI | Public Key Infrastructure — marco que gestiona certificados digitales, claves públicas y confianza |
| Certificate Authority (CA) | Tercera parte de confianza que emite y firma certificados digitales |
| Digital Certificate | Vincula la identidad con la clave pública; contiene sujeto, emisor, validez, número de serie |
| Registration Authority (RA) | Verifica la identidad y aprueba solicitudes de certificados en nombre de la CA |
| CRL | Certificate Revocation List — lista negra de certificados revocados mantenida por la CA |
| OCSP | Online Certificate Status Protocol — verificación de estado de certificado en tiempo real, más rápido que CRL |
| Trust Chain | Jerarquía Root CA → Intermediate CA → Certificado de entidad final |
| Root CA | CA de nivel superior pre-confiada por navegadores y sistemas operativos |
| Intermediate CA | Firma certificados en nombre de la Root CA |
| Self-Signed Certificate | Emisor igual que el sujeto; no confiable por defecto; usado para pruebas |
| DV Certificate | Domain Validation — certificado básico que verifica propiedad del dominio |
| OV Certificate | Organization Validation — verifica la identidad de la organización |
| EV Certificate | Extended Validation — nivel de validación más alto |
| SSL/TLS Certificate | Cifra el tráfico web entre cliente y servidor |
| Code Signing Certificate | Firma software para verificar la identidad del editor |
| S/MIME Certificate | Certificado de email seguro para cifrado y firma |
| Digital Signature | Verifica la integridad del mensaje y la identidad del remitente usando clave privada |

---

## Preguntas de práctica

**1.** ¿Qué problema resuelve PKI?
- a) Almacenamiento de contraseñas
- b) Confianza de claves públicas — verificar que pertenecen a la entidad real
- c) Velocidad de red
- d) Compresión de datos
**Answer:** b) — PKI resuelve el problema de confiar en que una clave pública realmente pertenece a la entidad reclamada.

**2.** En la cadena de confianza, ¿qué CA es pre-confiada por los navegadores?
- a) Intermediate CA
- b) Root CA
- c) CA de entidad final
- d) Registration Authority
**Answer:** b) — Las Root CAs son pre-confiadas por navegadores y sistemas operativos.

**3.** ¿Cuál es la diferencia entre CRL y OCSP?
- a) CRL es más rápido que OCSP
- b) CRL es una lista, OCSP proporciona estado en tiempo real
- c) Son idénticos
- d) OCSP está sin conexión
**Answer:** b) — CRL es una lista descargable de certificados revocados, mientras que OCSP proporciona estado en tiempo real basado en consultas.

**4.** ¿Qué nivel de validación de certificado proporciona la mayor confianza?
- a) DV (Domain Validation)
- b) OV (Organization Validation)
- c) EV (Extended Validation)
- d) Autofirmado
**Answer:** c) — Los certificados EV tienen el nivel de validación más alto, verificando la identidad de la organización de manera más completa.

**5.** ¿Cuál es el propósito principal de una firma digital?
- a) Cifrar datos
- b) Verificar la integridad del mensaje y la identidad del remitente
- c) Intercambiar claves
- d) Almacenar contraseñas
**Answer:** b) — Las firmas digitales usan la clave privada para firmar y la clave pública para verificar, proporcionando integridad y autenticación.
