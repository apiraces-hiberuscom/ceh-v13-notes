# Módulo 20 · Parte 6 — Cryptographic Attacks

> **Módulo 20 — Cryptography** · Parte 6 de 6 · Cryptanalysis y ataques criptográficos (COA, KPA, CPA, CCA, birthday, side-channel, padding oracle, downgrade, replay) y herramientas

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [OBJECTIVE 06 — CRYPTOGRAPHY ATTACKS AND CRYPTANALYSIS](#objective-06--cryptography-attacks-and-cryptanalysis)
- [CLASIFICACIÓN DE CRYPTOGRAPHY ATTACKS 🔥](#clasificación-de-cryptography-attacks-high-yield)
- [BRUTE-FORCE ATTACK](#brute-force-attack)
- [DICTIONARY ATTACK](#dictionary-attack)
- [RAINBOW TABLE ATTACK](#rainbow-table-attack)
- [BIRTHDAY ATTACK 🔥](#birthday-attack-high-yield)
- [COLLISION ATTACK](#collision-attack)
- [MAN-IN-THE-MIDDLE (MITM) EN CRIPTOGRAFÍA](#man-in-the-middle-mitm-en-criptografía)
- [SIDE-CHANNEL ATTACKS 🔥](#side-channel-attacks-high-yield)
- [PADDING ORACLE ATTACK 🔥](#padding-oracle-attack-high-yield)
- [DOWNGRADE ATTACK](#downgrade-attack)
- [REPLAY ATTACK](#replay-attack)
- [CRYPTOGRAPHY MISCONFIGURATION ATTACKS](#cryptography-misconfiguration-attacks)
- [HERRAMIENTAS COMUNES DE CRIPTOGRAFÍA](#herramientas-comunes-de-criptografía)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **Cryptanalysis** — analizar sistemas criptográficos para hallar debilidades (algoritmos, claves, implementación) y recuperar plaintext o claves sin autorización
- **Ciphertext-only attack (COA)** — el atacante solo tiene ciphertext: es el ataque más difícil
- **Known-plaintext attack (KPA)** — tiene pares plaintext + ciphertext (p. ej. cabeceras de archivo conocidas) para recuperar la clave
- **Chosen-plaintext (CPA) vs chosen-ciphertext (CCA)** — CPA elige plaintext y observa el ciphertext (encryption oracle); CCA elige ciphertext y observa el descifrado (padding oracle)
- **Birthday attack** — busca colisiones de hash con la birthday paradox: esfuerzo ≈ **2^(n/2)** para un hash de n bits
- **Collision attack** — dos entradas → mismo hash; afecta a MD5 y SHA-1 (rotos) y permite falsificar digital signatures
- **MITM en criptografía** — explota el key exchange sin autenticar (Diffie-Hellman); defensa: autenticación
- **Side-channel attacks** — explotan fugas físicas, no matemáticas: timing attack, power analysis, EM analysis, acoustic
- **Padding oracle attack** — explota los mensajes de error de padding en modo CBC para inferir el plaintext
- **Downgrade / replay attack** — downgrade fuerza cripto débil (TLS → SSL) por backward compatibility (defensa: deshabilitar protocolos legacy); replay se frena con nonces y timestamps
- **Repaso del módulo** — el salting derrota las rainbow tables; AES es seguro; ECC usa claves más pequeñas; PKI resuelve el problema de confianza; CRL (lista) vs OCSP (tiempo real)
- **Herramientas** — Hashcat y John the Ripper (password cracking), Cain & Abel (recuperación de credenciales), OpenSSL (`enc`, `dgst`, `genrsa`, `req`), CrypTool (aprendizaje)

---

## OBJECTIVE 06 — CRYPTOGRAPHY ATTACKS AND CRYPTANALYSIS

### QUÉ ES CRYPTANALYSIS

|Término|Definición|
|---|---|
|Cryptanalysis|El proceso de analizar sistemas criptográficos para descubrir debilidades y recuperar el plaintext o las claves sin autorización|

> 🧠 *Para recordar:* **Cryptanalysis = romper la criptografía**

---

### OBJETIVOS DEL CRYPTANALYSIS

|Objetivo|
|---|
|Recuperar el plaintext|
|Descubrir claves secretas|
|Eludir (bypass) las protecciones criptográficas|

---

## CLASIFICACIÓN DE CRYPTOGRAPHY ATTACKS (HIGH YIELD)

### SEGÚN EL CONOCIMIENTO DEL ATACANTE

#### CIPHERTEXT-ONLY ATTACK (COA)

|Propiedad|Descripción|
|---|---|
|El atacante tiene|Solo ciphertext|
|Objetivo|Recuperar el plaintext|
|Dificultad|El más difícil|

> 🧠 *Para recordar:* **Ciphertext-only = ataque a ciegas**

---

#### KNOWN-PLAINTEXT ATTACK (KPA)

|Propiedad|Descripción|
|---|---|
|El atacante tiene|Pares plaintext + ciphertext|
|Objetivo|Recuperar la clave|
|Ejemplo|Cabeceras de archivo conocidas|

> 🧠 *Para recordar:* **El known plaintext revela la estructura**

---

#### CHOSEN-PLAINTEXT ATTACK (CPA)

|Propiedad|Descripción|
|---|---|
|El atacante puede|Elegir el plaintext|
|Observa|El ciphertext|
|Ejemplo|Encryption oracle|

> 🧠 *Para recordar:* **Entrada elegida = atacante fuerte**

---

#### CHOSEN-CIPHERTEXT ATTACK (CCA)

|Propiedad|Descripción|
|---|---|
|El atacante puede|Elegir el ciphertext|
|Observa|La salida descifrada|
|Ejemplo|Padding oracle|

> 🧠 *Para recordar:* **Chosen ciphertext = muy potente**

---

## BRUTE-FORCE ATTACK

|Propiedad|Descripción|
|---|---|
|Método|Probar todas las claves posibles|
|Eficaz contra|Key sizes pequeños|
|Se previene con|Claves fuertes|

> 🧠 *Para recordar:* **Clave corta = presa fácil del brute force**

---

## DICTIONARY ATTACK

|Propiedad|Descripción|
|---|---|
|Método|Adivinar claves/contraseñas|
|Usa|Wordlists (listas de palabras)|
|Objetivo|Contraseñas débiles|

---

## RAINBOW TABLE ATTACK

|Propiedad|Descripción|
|---|---|
|Objetivo|Password hashes (hashes de contraseñas)|
|Método|Tablas de hashes precalculadas|
|Defensa|Salting|

> 🧠 *Para recordar:* **El salt derrota las rainbow tables**

---

## BIRTHDAY ATTACK (HIGH YIELD)

### QUÉ ES UN BIRTHDAY ATTACK

|Concepto|Explicación|
|---|---|
|Basado en|Birthday paradox (paradoja del cumpleaños)|
|Ataca a|Hash functions|
|Objetivo|Encontrar collisions (colisiones)|

LÓGICA:

- Es más fácil encontrar colisiones que invertir hashes

REGLA DEL EXAMEN:

- Para hash de n bits, resistencia a colisiones ≈ 2^(n/2)

> 🧠 *Para recordar:* **Bits del hash ÷ 2 = exponente del esfuerzo de colisión (2^(n/2))**

---

## COLLISION ATTACK

|Propiedad|Descripción|
|---|---|
|Objetivo|Dos entradas → mismo hash|
|Afecta a|MD5, SHA-1|
|Impacto|Falsificación de digital signatures|

---

## MAN-IN-THE-MIDDLE (MITM) EN CRIPTOGRAFÍA

|Propiedad|Descripción|
|---|---|
|Objetivo|Key exchange (intercambio de claves)|
|Afecta a|Diffie-Hellman|
|Defensa|Autenticación|

> 🧠 *Para recordar:* **DH sin autenticación = riesgo de MITM**

---

## SIDE-CHANNEL ATTACKS (HIGH YIELD)

### QUÉ ES UN SIDE-CHANNEL ATTACK

|Explicación|
|---|
|Explota la fuga de información física|

---

### TIPOS DE SIDE-CHANNEL ATTACKS

|Tipo|Fuga|
|---|---|
|Timing attack|Tiempo de ejecución|
|Power analysis|Consumo de energía|
|EM analysis|Señales electromagnéticas|
|Acoustic|Sonido|

> 🧠 *Para recordar:* **No es matemática, es física**

---

## PADDING ORACLE ATTACK (HIGH YIELD)

### A QUÉ ATACA

|Objetivo|
|---|
|Block cipher modes (modos de cifrado por bloques)|
|CBC mode|

---

### CÓMO FUNCIONA (VISIÓN GENERAL)

|Paso|
|---|
|Observar los mensajes de error de padding|
|Modificar ciphertext|
|Inferir el plaintext|

> ⚠️ *Trampa de examen:* Los mensajes de error filtran información.

> 🧠 *Para recordar:* **Los errores filtran secretos**

---

## DOWNGRADE ATTACK

|Propiedad|Descripción|
|---|---|
|Objetivo|Forzar criptografía débil|
|Ejemplo|Downgrade de TLS → SSL (p. ej. POODLE fuerza SSL 3.0)|
|Defensa|Deshabilitar protocolos legacy (heredados)|

> 🧠 *Para recordar:* **Backward compatibility = debilidad**

---

## REPLAY ATTACK

|Propiedad|Descripción|
|---|---|
|Método|Reutilizar datos capturados|
|Objetivo|Protocolos de autenticación|
|Defensa|Nonces, timestamps (marcas de tiempo)|

> 🧠 *Para recordar:* **El replay se frena con frescura (nonces, timestamps)**

---

## CRYPTOGRAPHY MISCONFIGURATION ATTACKS

|Misconfiguration (configuración incorrecta)|
|---|
|Algoritmos débiles|
|Claves cortas|
|Aleatoriedad deficiente|
|IVs reutilizados|
|Modo ECB|

> 🧠 *Para recordar:* **La criptografía falla en la implementación**

---

## HERRAMIENTAS COMUNES DE CRIPTOGRAFÍA

### HERRAMIENTAS DE CRYPTANALYSIS

|Herramienta|Propósito|
|---|---|
|Hashcat|Password cracking (crackeo de contraseñas)|
|John the Ripper|Password cracking (crackeo de contraseñas)|
|Cain & Abel|Recuperación de credenciales|
|OpenSSL|Operaciones criptográficas|
|CrypTool|Aprendizaje de criptografía|

---

### COMANDOS OPENSSL

|Comando|Propósito|
|---|---|
|openssl enc|Cifrar/descifrar|
|openssl dgst|Generación de hashes|
|openssl genrsa|Generar clave RSA|
|openssl req|Crear CSR|

> 🧠 *Para recordar:* **OpenSSL = la navaja suiza de la criptografía**

---

## Flashcards

| Término | Definición |
|------|------------|
| Cryptanalysis | Analizar sistemas criptográficos para descubrir debilidades y recuperar plaintext/claves |
| Ciphertext-Only Attack (COA) | El atacante tiene solo ciphertext — tipo de ataque más difícil |
| Known-Plaintext Attack (KPA) | El atacante tiene pares plaintext-ciphertext para recuperar la clave |
| Chosen-Plaintext Attack (CPA) | El atacante elige plaintext y observa el ciphertext |
| Chosen-Ciphertext Attack (CCA) | El atacante elige ciphertext y observa la salida descifrada |
| Brute-Force Attack | Probar todas las claves posibles — efectivo contra tamaños de clave pequeños |
| Dictionary Attack | Adivinar contraseñas usando listas de palabras |
| Rainbow Table Attack | Tablas de hashes precalculadas para ruptura de contraseñas |
| Birthday Attack | Encuentra colisiones de hashes usando la paradoja del cumpleaños — esfuerzo ≈ 2^(n/2) para hash de n bits |
| Collision Attack | Encontrar dos entradas que producen el mismo hash — afecta MD5, SHA-1 |
| MITM in Crypto | Man-in-the-Middle explotando intercambio de claves sin autenticar (Diffie-Hellman) |
| Side-Channel Attack | Explota fugas físicas — timing, energía, EM, acústico |
| Padding Oracle Attack | Explota mensajes de error de padding en modo CBC para inferir el plaintext |
| Downgrade Attack | Forzar criptografía débil explotando la backward compatibility (compatibilidad hacia atrás) |
| Replay Attack | Reutilizar datos de autenticación capturados |
| Timing Attack | Medir tiempo de ejecución para deducir claves secretas |
| Power Analysis | Analizar consumo de energía para extraer claves |
| Salting | Derrota ataques de rainbow table agregando datos aleatorios antes del hashing |

---

## Preguntas de práctica

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
