# Módulo 20 · Parte 4 — Hash Functions

> **Módulo 20 — Cryptography** · Parte 4 de 6 · Hash functions y message digests (MD5, SHA-1, SHA-2, SHA-3, RIPEMD-160), HMAC, password hashing y salt

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [OBJECTIVE 04 — HASH FUNCTIONS AND MESSAGE DIGEST ALGORITHMS](#objective-04--hash-functions-and-message-digest-algorithms)
- [MESSAGE DIGEST ALGORITHMS](#message-digest-algorithms)
- [HMAC (HASH-BASED MESSAGE AUTHENTICATION CODE)](#hmac-hash-based-message-authentication-code)
- [PASSWORD HASHING 🔥](#password-hashing-high-yield)
- [COMMON HASH ATTACKS](#common-hash-attacks)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **Hash function** — convierte datos de cualquier tamaño en un valor de longitud fija; es unidireccional y **NO es cifrado**
- **Hash = integrity** — un hash aporta integridad, no confidencialidad
- **Propiedades** — deterministic, fixed output size, pre-image resistance, second pre-image resistance y collision resistance
- **MD5** — salida de 128 bits; roto por colisiones, no usar para seguridad
- **SHA-1** — salida de 160 bits; roto por collision attacks
- **SHA-2** — SHA-224/256/384/512; seguro y estándar actual
- **SHA-3 (Keccak)** — sponge construction; respaldo de SHA-2, no una variante suya ni su reemplazo automático
- **RIPEMD-160** — salida de 160 bits; alternativa menos común a SHA
- **HMAC** — hash + secret key: integrity + authentication, pero NO confidentiality; un hash simple no usa clave ni autentica
- **Password hashing** — débil: MD5, SHA-1, hashes sin salt; fuerte: bcrypt (lento, con salt), scrypt (memory-hard), PBKDF2 (iterativo)
- **Salt** — valor aleatorio añadido antes del hashing; derrota las rainbow tables (ataques precalculados)

---

## OBJECTIVE 04 — HASH FUNCTIONS AND MESSAGE DIGEST ALGORITHMS

### WHAT IS A HASH FUNCTION

|Término|Definición|
|---|---|
|Hash function|Una función matemática que convierte datos de tamaño arbitrario en un valor de longitud fija|

> 🧠 *Para recordar:* **Hash = huella digital de los datos**

> ⚠️ *Trampa de examen:* Hashing **NO** es cifrado.

---

### PURPOSE OF HASH FUNCTIONS

|Propósito|
|---|
|Integridad de datos|
|Almacenamiento de contraseñas|
|Firmas digitales|
|Autenticación de mensajes|

---

### PROPERTIES OF A GOOD HASH FUNCTION (HIGH YIELD)

|Propiedad|Significado|
|---|---|
|Deterministic|Misma entrada → misma salida|
|Fixed output size|Siempre la misma longitud|
|Pre-image resistance|No se puede revertir el hash|
|Second pre-image resistance|Dada una entrada, no se puede encontrar otra distinta con el mismo hash|
|Collision resistance|No se pueden encontrar dos entradas distintas con el mismo hash|

> 🧠 *Para recordar:* **No hay reversión, no hay colisiones**

---

### HASHING PROCESS

1. Mensaje de entrada
2. Algoritmo de hash
3. Valor hash de longitud fija

---

## MESSAGE DIGEST ALGORITHMS

### MD5 (MESSAGE DIGEST 5)

|Propiedad|Valor|
|---|---|
|Output size|128-bit|
|Estado|Roto|
|Debilidad|Collisions (colisiones)|

LOGIC:

- Produce el mismo hash para diferentes entradas

> ⚠️ *Trampa de examen:* MD5 **no** debe usarse para seguridad.

> 🧠 *Para recordar:* **MD5 = Mayormente Muerto (Mostly Dead)**

---

### SHA-1 (SECURE HASH ALGORITHM 1)

|Propiedad|Valor|
|---|---|
|Output size|160-bit|
|Estado|Roto|
|Debilidad|Collision attacks (ataques de colisión)|

> 🧠 *Para recordar:* **SHA-1 ya no es seguro**

---

### SHA-2 FAMILY

Incluye:

|Algoritmo|Salida|
|---|---|
|SHA-224|224-bit|
|SHA-256|256-bit|
|SHA-384|384-bit|
|SHA-512|512-bit|

ESTADO ACTUAL:

- Seguro
- Ampliamente utilizado

> 🧠 *Para recordar:* **SHA-2 = estándar actual**

---

### SHA-3 (KECCAK)

|Propiedad|Valor|
|---|---|
|Estructura|Sponge construction|
|Propósito|Respaldo (backup) de SHA-2|
|Estado|Seguro|

> 🧠 *Para recordar:* **SHA-3 ≠ variante de SHA-2**

> ⚠️ *Trampa de examen:* SHA-3 no reemplaza SHA-2 automáticamente.

---

### RIPEMD-160

|Propiedad|Valor|
|---|---|
|Output size|160-bit|
|Estado|Menos común|
|Uso|Alternativa a SHA|

---

## HMAC (HASH-BASED MESSAGE AUTHENTICATION CODE)

### WHAT IS HMAC (HIGH YIELD)

|Propiedad|Descripción|
|---|---|
|Usa|Hash function + secret key|
|Proporciona|Integrity + authentication|
|NO proporciona|Confidentiality|

> 🧠 *Para recordar:* **HMAC = hash + clave**

> ⚠️ *Trampa de examen:* HMAC ≠ cifrado.

---

### HMAC PROCESS

1. Mensaje + clave secreta
2. Función hash
3. Valor HMAC

---

### HASH VS HMAC (HIGH YIELD)

|Característica|Hash|HMAC|
|---|---|---|
|Usa clave|No|Sí|
|Integrity|Sí|Sí|
|Authentication|No|Sí|

---

## PASSWORD HASHING (HIGH YIELD)

### WHY PASSWORDS ARE HASHED

|Motivo|
|---|
|Prevenir almacenamiento en texto plano|
|Reducir el impacto de una filtración|

---

### WEAK PASSWORD HASHING METHODS

|Método|
|---|
|MD5|
|SHA-1|
|Unsalted hashes (hashes sin salt)|

---

### STRONG PASSWORD HASHING METHODS

|Método|Característica|
|---|---|
|bcrypt|Lento, con salt|
|scrypt|Memory-hard (exige mucha memoria)|
|PBKDF2|Iterativo|

> 🧠 *Para recordar:* **Hashing lento = seguridad fuerte**

---

### SALT (HIGH YIELD)

|Término|Significado|
|---|---|
|Salt|Valor aleatorio añadido antes del hashing|

PROPÓSITO:

- Prevenir ataques de rainbow tables

> 🧠 *Para recordar:* **Salt derrota ataques precalculados**

---

## COMMON HASH ATTACKS

|Ataque|
|---|
|Collision attack (ataque de colisión)|
|Pre-image attack (ataque de pre-imagen)|
|Rainbow table attack|

---

## Flashcards

| Término | Definición |
|------|------------|
| Hash Function | Función matemática que convierte datos arbitrarios en un valor de longitud fija; proporciona huella digital |
| Pre-image Resistance | No se puede revertir el hash para recuperar la entrada original |
| Second Pre-image Resistance | No se puede encontrar una entrada diferente que produzca el mismo hash |
| Collision Resistance | No se pueden encontrar dos entradas diferentes que produzcan el mismo hash |
| MD5 | Message Digest 5 — salida de 128-bit, roto, no debe usarse |
| SHA-1 | Secure Hash Algorithm 1 — salida de 160-bit, roto debido a collision attacks |
| SHA-2 | Familia Secure Hash Algorithm 2 — salidas de 224/256/384/512-bit, seguro |
| SHA-3 | Keccak — sponge construction, respaldo de SHA-2, seguro |
| RIPEMD-160 | Hash de 160-bit, alternativa menos común a SHA |
| HMAC | Hash-based Message Authentication Code — hash + clave secreta proporciona integridad + autenticación |
| Salt | Valor aleatorio añadido antes del hashing para prevenir ataques de rainbow tables |
| bcrypt | Función de hashing de contraseñas lenta, con salt |
| scrypt | Función de hashing de contraseñas memory-hard |
| PBKDF2 | Función de hashing de contraseñas iterativa |
| Rainbow Table | Tablas de hash precalculadas para crackeo de contraseñas |
| Collision Attack | Encontrar dos entradas que produzcan el mismo hash |
| Pre-image Attack | Recuperar la entrada original a partir de un valor hash |

---

## Preguntas de práctica

**1.** ¿Cuál es la diferencia principal entre hashing y cifrado?
- a) El hashing es reversible, el cifrado no
- b) El hashing es unidireccional, el cifrado es reversible con una clave
- c) Son idénticos
- d) El hashing usa claves, el cifrado no
**Answer:** b) — El hashing es una función unidireccional que no se puede revertir, mientras que el cifrado es reversible con la clave correcta.

**2.** ¿Por qué MD5 se considera inseguro para fines de seguridad?
- a) Es demasiado lento
- b) Produce colisiones — mismo hash para diferentes entradas
- c) Requiere demasiada memoria
- d) Solo funciona con texto
**Answer:** b) — MD5 está roto porque produce colisiones, haciéndolo inadecuado para seguridad.

**3.** ¿Cuál es el propósito de agregar salt a los hashes de contraseñas?
- a) Hacer los hashes más largos
- b) Prevenir ataques de rainbow tables
- c) Acelerar el hashing
- d) Hacer las contraseñas más débiles
**Answer:** b) — Salt agrega datos aleatorios antes del hashing, haciendo ineficaces los ataques de rainbow tables precalculados.

**4.** ¿Qué función de hash se considera el estándar actual para la seguridad?
- a) MD5
- b) SHA-1
- c) SHA-2
- d) RIPEMD
**Answer:** c) — La familia SHA-2 (especialmente SHA-256) es el estándar seguro actual.

**5.** ¿Qué proporciona HMAC que el hashing regular no?
- a) Confidencialidad
- b) Autenticación
- c) Cifrado
- d) No repudio
**Answer:** b) — HMAC usa una clave secreta para proporcionar tanto integridad como autenticación, mientras que el hashing regular solo proporciona integridad.
