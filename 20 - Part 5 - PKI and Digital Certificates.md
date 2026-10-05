# OBJECTIVE 05 — DIGITAL CERTIFICATES AND PKI

---

## WHY PKI EXISTS (START HERE)

### THE CORE PROBLEM PKI SOLVES

|Problem|
|---|
|¿Cómo confías en que una clave pública realmente pertenece a la entidad real?|

Ejemplo de problema (EXAM SCENARIO):

- El atacante te da **su** clave pública
    
- Afirma que pertenece a un banco
    
- Cifras datos → el atacante descifra
    

MEMORY HOOK:  
**Public keys need trust**

---

## WHAT IS PKI (DEFINITION)

|Term|CEH Definition|
|---|---|
|Public Key Infrastructure (PKI)|Un marco que gestiona certificados digitales, claves públicas y relaciones de confianza|

PKI PROPORCIONA:

- Autenticación
    
- Integridad
    
- Confidencialidad
    
- No repudio
    

MEMORY HOOK:  
**PKI = trust framework**

---

## CORE PKI COMPONENTS (ABSOLUTELY EXAM-CRITICAL)

---

### 1. CERTIFICATE AUTHORITY (CA)

|Property|Explanation|
|---|---|
|Role|Tercera parte de confianza|
|Function|Emite y firma certificados|
|Trust|Confianza implícita por parte de los sistemas|

Ejemplos:

- DigiCert
    
- GlobalSign
    
- Let's Encrypt
    

MEMORY HOOK:  
**CA = trust anchor**

EXAM TRAP:  
CA ≠ encryption provider.

---

### 2. DIGITAL CERTIFICATE

|Property|Explanation|
|---|---|
|Contains|Clave pública + identidad|
|Issued by|CA|
|Purpose|Vincular la identidad con la clave|

---

### WHAT A DIGITAL CERTIFICATE CONTAINS (EXAM FAVORITE)

|Field|
|---|
|Nombre del sujeto|
|Clave pública del sujeto|
|Emisor (CA)|
|Período de validez|
|Número de serie|
|Firma digital de la CA|

MEMORY HOOK:  
**Certificate = ID card for public key**

---

### 3. REGISTRATION AUTHORITY (RA)

|Property|Explanation|
|---|---|
|Role|Verifica la identidad|
|Function|Aprueba solicitudes de certificados|
|Relation|Trabaja en nombre de la CA|

MEMORY HOOK:  
**RA = identity checker**

---

### 4. CERTIFICATE REVOCATION LIST (CRL)

|Property|Explanation|
|---|---|
|Purpose|Lista de certificados revocados|
|Reason|Certificados comprometidos o expirados|
|Maintained by|CA|

MEMORY HOOK:  
**CRL = blacklist of certs**

---

### 5. ONLINE CERTIFICATE STATUS PROTOCOL (OCSP)

|Property|Explanation|
|---|---|
|Purpose|Estado del certificado en tiempo real|
|Faster than|CRL|
|Query-based|Sí|

MEMORY HOOK:  
**OCSP = live cert check**

EXAM TRAP:  
OCSP does NOT replace certificates.

---

## HOW PKI WORKS (STEP-BY-STEP LOGIC — MEMORIZE)

---

### CERTIFICATE ISSUANCE PROCESS

|Step|Description|
|---|---|
|1|El usuario genera un par de claves|
|2|Envía la clave pública a la RA|
|3|La RA verifica la identidad|
|4|La CA firma la clave pública|
|5|Se emite el certificado|

MEMORY HOOK:  
**Generate → Verify → Sign → Trust**

---

### CERTIFICATE VALIDATION PROCESS (VERY IMPORTANT)

|Step|Description|
|---|---|
|1|El cliente recibe el certificado|
|2|Verifica la firma de la CA|
|3|Verifica la cadena de confianza|
|4|Verifica la expiración|
|5|Verifica el estado de revocación|

MEMORY HOOK:  
**Signature → Chain → Time → Revocation**

---

## TRUST CHAIN (MOST CONFUSING PART — SIMPLIFIED)

---

### TRUST CHAIN EXPLAINED

|Level|
|---|
|Root CA|
|Intermediate CA|
|Certificado de entidad final|

LÓGICA:

- La Root CA es pre-confiada
    
- La Root firma la Intermediate
    
- La Intermediate firma el sitio web
    

MEMORY HOOK:  
**Trust flows downward**

EXAM TRAP:  
Browsers do NOT trust websites directly — they trust CAs.

---

## SELF-SIGNED CERTIFICATES

|Property|Explanation|
|---|---|
|Issuer|Igual que el sujeto|
|Trust|NO es confiable por defecto|
|Usage|Pruebas|

MEMORY HOOK:  
**Self-signed = no external trust**

---

## TYPES OF DIGITAL CERTIFICATES (EXAM LIST)

---

### BASED ON VALIDATION LEVEL

|Type|Description|
|---|---|
|DV|Domain Validation|
|OV|Organization Validation|
|EV|Extended Validation|

MEMORY HOOK:  
**DV < OV < EV**

---

### BASED ON PURPOSE

|Certificate|
|---|
|Certificado SSL/TLS|
|Certificado de firma de código|
|Certificado de email (S/MIME)|
|Certificado de autenticación de cliente|

---

## APPLICATIONS OF PKI (EXAM QUESTIONS LOVE THIS)

|Application|
|---|
|SSL/TLS|
|Email seguro|
|Firmas digitales|
|Tarjetas inteligentes|
|Autenticación VPN|

MEMORY HOOK:  
**PKI everywhere trust matters**

---

## DIGITAL SIGNATURES VS CERTIFICATES (CONFUSION ZONE)

|Feature|Digital Signature|Certificate|
|---|---|---|
|Purpose|Verificar mensaje|Verificar identidad|
|Uses key|Clave privada|Clave pública|
|Issued by|Usuario|CA|

MEMORY HOOK:  
**Cert proves WHO, signature proves WHAT**

---

## COMMON PKI ATTACKS (EXAM PREVIEW)

|Attack|
|---|
|CA falsa|
|Suplantación de certificados|
|Compromiso de CA|
|Man-in-the-middle|

EXAM TRAP:  
If CA is compromised, PKI collapses.

---

## OBJECTIVE 05 — MEMORY CHECKLIST (CRITICAL)

Debes recordar:

- PKI = marco de confianza
    
- La CA firma certificados
    
- Los certificados vinculan la identidad con la clave pública
    
- Cadena de confianza = Root → Intermediate → Entidad final
    
- CRL = lista de certificados revocados
    
- OCSP = estado del certificado en tiempo real
    
- Los certificados autofirmados no son confiables
    
- PKI resuelve el problema de confianza de claves públicas
    

---

### STATUS

Objective 05: COMPLETE (PKI-focused)

---

Reply **next** to continue with:

**OBJECTIVE 06 — CRYPTOGRAPHY ATTACKS AND CRYPTANALYSIS TECHNIQUES (birthday attack, brute force, side-channel, MITM, padding oracle, downgrade attacks)**

---

# EXAM FLASHCARDS

| Term | Definition |
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

# PRACTICE QUESTIONS

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
