# MÓDULO 20 — CRYPTOGRAPHY (CEHv13)

FUENTE: _CEHv13 – Module 20 – Cryptography_

---

## LEARNING OBJECTIVES (EXAM-MANDATORY)

Debes ser capaz de:

|#|Objetivo de aprendizaje|
|---|---|
|01|Explicar conceptos de Cryptography|
|02|Entender diferentes algoritmos de encriptación|
|03|Usar diferentes herramientas de Cryptography|
|04|Aplicar aplicaciones de Cryptography|
|05|Describir ataques de Cryptography|
|06|Usar herramientas de Cryptanalysis|

MEMORY HOOK:  
**Conceptos → Algoritmos → Herramientas → Aplicaciones → Ataques → Análisis**

---

# OBJETIVO 01 — CRYPTOGRAPHY CONCEPTS AND ENCRYPTION ALGORITHMS

---

## WHAT IS CRYPTOGRAPHY (DEFINITION — EXACT CEH MEANING)

|Término|Definición|
|---|---|
|Cryptography|La práctica de ocultar información convirtiendo datos legibles en un formato ilegible mediante encriptación|

ORIGEN (EXAM FACT):

- Griego **kryptos** = oculto
    
- Griego **graphia** = escritura
    

MEMORY HOOK:  
**Crypto = escritura oculta**

---

## WHAT ENCRYPTION DOES

|Acción|Descripción|
|---|---|
|Encryption|Convierte plaintext en ciphertext|
|Decryption|Convierte ciphertext de vuelta a plaintext|

---

## CRYPTOGRAPHY PROCESS (LOGIC FLOW)

|Paso|
|---|
|Plaintext|
|Encryption algorithm + key|
|Ciphertext|
|Transmisión|
|Decryption algorithm + key|
|Plaintext|

EXAM TRAP:  
Encryption **no elimina datos**, solo **transforma la representación**.

---

## OBJECTIVES OF CRYPTOGRAPHY (VERY HIGH YIELD)

|Objetivo|Significado|
|---|---|
|Confidentiality|Solo usuarios autorizados pueden acceder a la información|
|Integrity|Los datos no se alteran de manera inapropiada|
|Authentication|Se verifica la identidad del emisor/receptor|
|Non-repudiation|El emisor no puede negar haber enviado el mensaje|

MEMORY HOOK:  
**CIA + N**

EXAM TRAP:  
Encryption por sí sola ≠ authentication o integrity.

---

## BASIC CRYPTOGRAPHY TERMINOLOGY

|Término|Significado|
|---|---|
|Plaintext|Datos originales legibles|
|Ciphertext|Datos encriptados ilegibles|
|Cipher|Algoritmo utilizado para encriptar/desencriptar|
|Key|Valor secreto que controla la encriptación|
|Cryptanalysis|Ruptura de la encriptación|
|Cryptosystem|Algoritmos + keys + protocolos|

---

## TYPES OF CRYPTOGRAPHY (TOP-TIER EXAM CONTENT)

Cryptography se clasifica **según el número de claves utilizadas**.

---

### 1. SYMMETRIC KEY CRYPTOGRAPHY

|Propiedad|Descripción|
|---|---|
|Claves utilizadas|Misma clave para encriptación y desencriptación|
|Velocidad|Rápida|
|Problema de seguridad|Problema de distribución de claves|
|También llamada|Secret-key cryptography|

LÓGICA:

- El emisor encripta usando una clave secreta compartida
    
- El receptor desencripta usando la misma clave
    

MEMORY HOOK:  
**Una clave → rápida → difícil de compartir**

---

### 2. ASYMMETRIC KEY CRYPTOGRAPHY

|Propiedad|Descripción|
|---|---|
|Claves utilizadas|Public key + private key|
|Velocidad|Lenta|
|Seguridad|Resuelve el problema de distribución de claves|
|También llamada|Public-key cryptography|

LÓGICA:

- La public key encripta
    
- La private key desencripta
    

MEMORY HOOK:  
**Dos claves → intercambio seguro → más lenta**

---

## ASYMMETRIC ENCRYPTION MESSAGE FLOW (EXAM LOGIC)

|Paso|Descripción|
|---|---|
|1|El emisor encuentra la public key del receptor|
|2|El emisor encripta el mensaje usando la public key|
|3|Solo la private key del receptor puede desencriptar|
|4|Garantiza confidentiality|
|5|Las digital signatures garantizan authentication|

EXAM TRAP:  
La public key **no puede desencriptar** lo que ella misma encripta.

---

## STRENGTHS & WEAKNESSES (VERY COMMON MCQs)

### SYMMETRIC ENCRYPTION

|Fortalezas|Debilidades|
|---|---|
|Rápida|Problema de distribución de claves|
|Eficiente|Gestión de claves difícil|
|Menor uso de CPU|No proporciona authentication|

---

### ASYMMETRIC ENCRYPTION

|Fortalezas|Debilidades|
|---|---|
|Intercambio seguro de claves|Lenta|
|Digital signatures|Alto uso de CPU|
|Authentication|No adecuada para datos masivos|

MEMORY HOOK:  
**Symmetric = rápida, Asymmetric = confianza**

---

## GOVERNMENT ACCESS TO KEYS (GAK) — EXAM CONCEPT

|Término|Explicación|
|---|---|
|GAK|Accceso gubernamental obligatorio a las claves de encriptación|
|Propósito|Intercepción legal|
|Método|Key escrow|
|Riesgo|Debilita la privacidad|

MEMORY HOOK:  
**Key escrow = una tercera parte guarda las claves**

EXAM TRAP:  
Key escrow ≠ backdoor (pero el efecto es similar).

---

## WHAT IS A CIPHER

|Definición|
|---|
|Un cipher es un conjunto de pasos matemáticos utilizados para encriptar o desencriptar datos|

---

## TYPES OF CIPHERS

### CLASSICAL CIPHERS

|Tipo|Descripción|
|---|---|
|Substitution|Reemplazar caracteres|
|Transposition|Reorganizar caracteres|

EJEMPLOS (EXAM):

- Caesar cipher
    
- Hill cipher
    
- Rail fence cipher
    

MEMORY HOOK:  
**Clásicos = letras**

---

### MODERN CIPHERS

Clasificados por:

#### A. TIPO DE CLAVE UTILIZADA

|Tipo|
|---|
|Symmetric|
|Asymmetric|

#### B. TIPO DE DATOS DE ENTRADA

|Tipo|Descripción|
|---|---|
|Block cipher|Encripta bloques de tamaño fijo|
|Stream cipher|Encripta datos bit por bit|

MEMORY HOOK:  
**Block = bloques, Stream = flujo**

---

## OBJETIVO 01 — MEMORY CHECKLIST

Debes recordar:

- Los objetivos de Cryptography = **CIA + N**
    
- Diferencias entre Symmetric y Asymmetric
    
- Encryption ≠ authentication
    
- La public key encripta, la private key desencripta
    
- Diferencia entre Block y Stream cipher
    
- El problema de distribución de claves
    
- Definición de key escrow
    

---

### STATUS

Módulo 20  
Objetivo 01: **COMPLETADO**

---


## EXAM EXTRAS (Boson Practice Test)

### BLOWFISH

|Elemento|Memorizar|
|---|---|
|Blowfish|Symmetric block cipher de 64 bits, clave de 32-448 bits|
|Estándar|IDEA block cipher de 64 bits con clave de 128 bits — utilizado por PGP|

---

### AES BLOCK SIZE

|Elemento|Memorizar|
|---|---|
|AES|Tamaño de bloque de 128 bits independientemente de la longitud de la clave|

---

### SERPENT

|Elemento|Memorizar|
|---|---|
|Serpent|Symmetric block cipher de 128 bits con longitudes de clave de 128, 192 o 256 bits|

---

### DROWN / SSLv2

|Elemento|Memorizar|
|---|---|
|DROWN attack|Deshabilitar SSLv2|
|SSLv2|Extremadamente roto — se debe usar TLS 1.2 o 1.3|

---

### SIDE-CHANNEL ATTACK

|Elemento|Memorizar|
|---|---|
|Side-channel attack|Intento de romper la encriptación monitoreando algo externo al algoritmo|

---

# EXAM FLASHCARDS

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

# PRACTICE QUESTIONS

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
