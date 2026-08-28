# OBJETIVO 06 — ATAQUES A CRIPTOGRAFÍA Y CRIPTANÁLISIS

---

## QUÉ ES CRIPTANÁLISIS (DEFINICIÓN DE EXAMEN)

|Término|Definición|
|---|---|
|Cryptanalysis|El proceso de analizar sistemas criptográficos para descubrir debilidades y recuperar texto plano o claves sin autorización|

MEMORY HOOK:  
**Cryptoanalysis = breaking crypto**

---

## OBJETIVOS DEL CRIPTANÁLISIS

|Objetivo|
|---|
|Recuperar texto plano|
|Descubrir claves secretas|
|Omitir protecciones criptográficas|

---

# CLASIFICACIÓN DE ATAQUES A CRIPTOGRAFÍA (FAVORITO DEL EXAMEN)

---

## SEGÚN EL CONOCIMIENTO DEL ATACANTE

---

### CIPHERTEXT-ONLY ATTACK (COA)

|Propiedad|Descripción|
|---|---|
|Attacker has|Solo ciphertext|
|Goal|Recuperar texto plano|
|Difficulty|El más difícil|

MEMORY HOOK:  
**Ciphertext only = blind attack**

---

### KNOWN-PLAINTEXT ATTACK (KPA)

|Propiedad|Descripción|
|---|---|
|Attacker has|Pares de texto plano + ciphertext|
|Goal|Recuperar clave|
|Example|Encabezados de archivos conocidos|

MEMORY HOOK:  
**Known plaintext leaks structure**

---

### CHOSEN-PLAINTEXT ATTACK (CPA)

|Propiedad|Descripción|
|---|---|
|Attacker can|Elegir texto plano|
|Observes|Ciphertext|
|Example|Encryption oracle|

MEMORY HOOK:  
**Chosen input = strong attacker**

---

### CHOSEN-CIPHERTEXT ATTACK (CCA)

|Propiedad|Descripción|
|---|---|
|Attacker can|Elegir ciphertext|
|Observes|Salida descifrada|
|Example|Padding oracle|

MEMORY HOOK:  
**Chosen ciphertext = very powerful**

---

# BRUTE-FORCE ATTACK

|Propiedad|Descripción|
|---|---|
|Method|Probar todas las claves posibles|
|Effective against|Tamaños de clave pequeños|
|Prevented by|Claves fuertes|

MEMORY HOOK:  
**Short key = brute-force bait**

---

# DICTIONARY ATTACK

|Propiedad|Descripción|
|---|---|
|Method|Adivinar claves/contraseñas|
|Uses|Listas de palabras|
|Target|Contraseñas débiles|

---

# RAINBOW TABLE ATTACK

|Propiedad|Descripción|
|---|---|
|Target|Hashes de contraseñas|
|Method|Tablas de hashes precalculadas|
|Defense|Salting|

MEMORY HOOK:  
**Salt defeats rainbow tables**

---

# BIRTHDAY ATTACK (MUY ALTO RENDIMIENTO)

---

## QUÉ ES UN BIRTHDAY ATTACK

|Concepto|Explicación|
|---|---|
|Based on|Paradoja del cumpleaños|
|Targets|Funciones de hash|
|Goal|Encontrar colisiones|

LÓGICA:

- Es más fácil encontrar colisiones que invertir hashes
    

REGLA DEL EXAMEN:

- Para hash de n bits, resistencia a colisiones ≈ 2^(n/2)
    

MEMORY HOOK:  
**Hash length ÷ 2 = collision effort**

---

# COLLISION ATTACK

|Propiedad|Descripción|
|---|---|
|Goal|Dos entradas → mismo hash|
|Affects|MD5, SHA-1|
|Impact|Falsificación de firmas digitales|

---

# MAN-IN-THE-MIDDLE (MITM) EN CRIPTOGRAFÍA

|Propiedad|Descripción|
|---|---|
|Target|Intercambio de claves|
|Affects|Diffie-Hellman|
|Defense|Autenticación|

MEMORY HOOK:  
**DH without auth = MITM risk**

---

# SIDE-CHANNEL ATTACKS (IMPORTANTE)

---

## QUÉ ES UN SIDE-CHANNEL ATTACK

|Explicación|
|---|
|Explota la fuga de información física|

---

## TIPOS DE SIDE-CHANNEL ATTACKS

|Tipo|Fuga|
|---|---|
|Timing attack|Tiempo de ejecución|
|Power analysis|Consumo de energía|
|EM analysis|Señales electromagnéticas|
|Acoustic|Sonido|

MEMORY HOOK:  
**Not math, physics**

---

# PADDING ORACLE ATTACK (MUY IMPORTANTE)

---

## QUÉ OBJETIVO

|Target|
|---|
|Modos de cifrado por bloques|
|Modo CBC|

---

## CÓMO FUNCIONA (NIVEL ALTO)

|Paso|
|---|
|Observar mensajes de error de relleno|
|Modificar ciphertext|
|Inferir texto plano|

EXAM TRAP:  
Los mensajes de error filtran información.

MEMORY HOOK:  
**Errors leak secrets**

---

# DOWNGRADE ATTACK

|Propiedad|Descripción|
|---|---|
|Goal|Forzar criptografía débil|
|Example|Degradación de SSL → TLS|
|Defense|Deshabilitar protocolos heredados|

MEMORY HOOK:  
**Backward compatibility = weakness**

---

# REPLAY ATTACK

|Propiedad|Descripción|
|---|---|
|Method|Reutilizar datos capturados|
|Target|Protocolos de autenticación|
|Defense|Nonces, marcas de tiempo|

MEMORY HOOK:  
**Replay stops with freshness**

---

# ATAQUES POR CONFIGURACIÓN INCORRECTA DE CRIPTOGRAFÍA

|Configuración incorrecta|
|---|
|Algoritmos débiles|
|Claves cortas|
|Aleatoriedad deficiente|
|IVs reutilizados|
|Modo ECB|

MEMORY HOOK:  
**Crypto fails in implementation**

---

# HERRAMIENTAS COMUNES DE CRIPTOGRAFÍA (RECONOCIMIENTO CEH)

---

## HERRAMIENTAS DE CRIPTANÁLISIS

|Herramienta|Propósito|
|---|---|
|Hashcat|Ruptura de contraseñas|
|John the Ripper|Ruptura de contraseñas|
|Cain & Abel|Recuperación de credenciales|
|OpenSSL|Operaciones criptográficas|
|CrypTool|Aprendizaje de criptografía|

---

## COMANDOS OPENSSL (SOLO RECONOCIMIENTO)

|Comando|Propósito|
|---|---|
|openssl enc|Cifrar/descifrar|
|openssl dgst|Generación de hashes|
|openssl genrsa|Generar clave RSA|
|openssl req|Crear CSR|

MEMORY HOOK:  
**OpenSSL = crypto Swiss army knife**

---

# OBJETIVO 06 — BLOQUE DE MEMORIA DEL EXAMEN

**El criptanálisis explota debilidades en algoritmos, claves e implementaciones.  
Los ataques de cumpleaños objetivan colisiones de hashes.  
Los ataques MITM explotan el intercambio de claves sin autenticar.  
Los side-channel attacks explotan fugas físicas.  
Los padding oracle attacks explotan mensajes de error.  
El salting, la autenticación y algoritmos fuertes mitigan ataques.**

---

# MÓDULO 20 — LISTA DE VERIFICACIÓN FINAL (MUY IMPORTANTE)

Debes recordar:

- Colisión de hash = birthday attack
    
- Diffie-Hellman vulnerable a MITM
    
- MD5 y SHA-1 están rotos
    
- AES es seguro
    
- ECC usa claves más pequeñas
    
- PKI resuelve el problema de confianza
    
- CRL vs OCSP
    
- Padding oracle objetiva CBC
    
- Salting derrota rainbow tables
    

---

## ESTADO DEL MÓDULO 20

|Sección|Estado|
|---|---|
|Objective 01|COMPLETO|
|Objective 02|COMPLETO|
|Objective 03|COMPLETO|
|Objective 04|COMPLETO|
|Objective 05|COMPLETO|
|Objective 06|COMPLETO|

---

Ahora has **completado completamente el Módulo 20 – Criptografía**.

Opciones siguientes:

- **Hoja de trucos ultracondensada para el examen del Módulo 20**
    
- **Preguntas completas de examen simulado CEH (énfasis en criptografía)**
    
- **Continuar al siguiente módulo CEH**
    
- **Ejercicio exclusivo de PKI con escenarios**
    

---

# TARJETAS DE MEMORIA DEL EXAMEN

| Término | Definición |
|------|------------|
| Cryptanalysis | Analizar sistemas criptográficos para descubrir debilidades y recuperar texto plano/claves |
| Ciphertext-Only Attack (COA) | El atacante tiene solo ciphertext — tipo de ataque más difícil |
| Known-Plaintext Attack (KPA) | El atacante tiene pares de texto plano-ciphertext para recuperar la clave |
| Chosen-Plaintext Attack (CPA) | El atacante elige texto plano y observa ciphertext |
| Chosen-Ciphertext Attack (CCA) | El atacante elige ciphertext y observa la salida descifrada |
| Brute-Force Attack | Probar todas las claves posibles — efectivo contra tamaños de clave pequeños |
| Dictionary Attack | Adivinar contraseñas usando listas de palabras |
| Rainbow Table Attack | Tablas de hashes precalculadas para ruptura de contraseñas |
| Birthday Attack | Encuentra colisiones de hashes usando la paradoja del cumpleaños — esfuerzo ≈ 2^(n/2) para hash de n bits |
| Collision Attack | Encontrar dos entradas que producen el mismo hash — afecta MD5, SHA-1 |
| MITM in Crypto | Man-in-the-Middle explotando intercambio de claves sin autenticar (Diffie-Hellman) |
| Side-Channel Attack | Explota fugas físicas — timing, energía, EM, acústico |
| Padding Oracle Attack | Explota mensajes de error en modo CBC para inferir texto plano |
| Downgrade Attack | Forzar criptografía débil explotando compatibilidad hacia atrás |
| Replay Attack | Reutilizar datos de autenticación capturados |
| Timing Attack | Medir tiempo de ejecución para deducir claves secretas |
| Power Analysis | Analizar consumo de energía para extraer claves |
| Salting | Derrota ataques de rainbow table agregando datos aleatorios antes del hashing |

---

# PREGUNTAS DE PRÁCTICA

**1.** ¿Cuál es la resistencia a colisiones de una función hash de n bits según el birthday attack?
- a) 2^n operaciones
- b) 2^(n/2) operaciones
- c) 2^(2n) operaciones
- d) n^2 operaciones
**Respuesta:** b) — El birthday attack encuentra colisiones en aproximadamente 2^(n/2) operaciones debido a la paradoja del cumpleaños.

**2.** ¿Qué ataque explota mensajes de error en modo CBC para inferir texto plano?
- a) Brute-force attack
- b) Rainbow table attack
- c) Padding oracle attack
- d) Dictionary attack
**Respuesta:** c) — Los padding oracle attacks explotan mensajes de error de relleno para descifrar ciphertext CBC.

**3.** ¿Por qué Diffie-Hellman es vulnerable a ataques Man-in-the-Middle?
- a) Usa cifrado débil
- b) No autentica las partes
- c) Es demasiado lento
- d) Requiere demasiada memoria
**Respuesta:** b) — Diffie-Hellman proporciona intercambio de claves pero no autenticación, permitiendo la interceptación MITM.

**4.** ¿Cuál es la defensa principal contra los rainbow table attacks?
- a) Usar contraseñas más largas
- b) Salting hashes
- c) Usar hardware más rápido
- d) Cifrar la base de datos
**Respuesta:** b) — Salting agrega datos aleatorios antes del hashing, haciendo ineficaces las rainbow tables precalculadas.

**5.** ¿Qué tipo de side-channel attack mide el tiempo de ejecución para deducir claves secretas?
- a) Power analysis
- b) EM analysis
- c) Timing attack
- d) Acoustic attack
**Respuesta:** c) — Los timing attacks miden diferencias en el tiempo de ejecución para inferir valores de claves secretas.
