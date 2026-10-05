# OBJECTIVE 04 — HASH FUNCTIONS AND MESSAGE DIGEST ALGORITHMS

---

## WHAT IS A HASH FUNCTION (EXAM DEFINITION)

|Term|Definition|
|---|---|
|Hash function|Una función matemática que convierte datos de tamaño arbitrario en un valor de longitud fija|

MEMORY HOOK:  
**Hash = huella digital de los datos**

EXAM TRAP:  
Hashing **NO** es cifrado.

---

## PURPOSE OF HASH FUNCTIONS

|Purpose|
|---|
|Integridad de datos|
|Almacenamiento de contraseñas|
|Firmas digitales|
|Autenticación de mensajes|

---

## PROPERTIES OF A GOOD HASH FUNCTION (VERY IMPORTANT)

|Property|Meaning|
|---|---|
|Deterministic|Entrada相同的 → salida相同的|
|Fixed output size|Siempre la misma longitud|
|Pre-image resistance|No se puede revertir el hash|
|Second pre-image resistance|No se puede encontrar el mismo hash|
|Collision resistance|No dos entradas comparten el mismo hash|

MEMORY HOOK:  
**No hay reversión, no hay colisiones**

---

## HASHING PROCESS (LOGIC FLOW)

1. Mensaje de entrada
    
2. Algoritmo de hash
    
3. Valor hash de longitud fija
    

---

# MESSAGE DIGEST ALGORITHMS (EXAM LIST)

---

## MD5 (MESSAGE DIGEST 5)

|Property|Value|
|---|---|
|Output size|128-bit|
|Status|Roto|
|Weakness|Colisiones|

LOGIC:

- Produce el mismo hash para diferentes entradas
    

EXAM TRAP:  
MD5 **no** debe usarse para seguridad.

MEMORY HOOK:  
**MD5 = Mayormente Muerto (Mostly Dead)**

---

## SHA-1 (SECURE HASH ALGORITHM 1)

|Property|Value|
|---|---|
|Output size|160-bit|
|Status|Roto|
|Weakness|Ataques de colisión|

MEMORY HOOK:  
**SHA-1 ya no es seguro**

---

## SHA-2 FAMILY

Includes:

|Algorithm|Output|
|---|---|
|SHA-224|224-bit|
|SHA-256|256-bit|
|SHA-384|384-bit|
|SHA-512|512-bit|

STATUS:

- Seguro
    
- Ampliamente utilizado
    

MEMORY HOOK:  
**SHA-2 = estándar actual**

---

## SHA-3 (KECCAK)

|Property|Value|
|---|---|
|Structure|Construcción sponge|
|Purpose|Respaldo de SHA-2|
|Status|Seguro|

MEMORY HOOK:  
**SHA-3 ≠ variante de SHA-2**

EXAM TRAP:  
SHA-3 no reemplaza SHA-2 automáticamente.

---

## RIPEMD

|Property|Value|
|---|---|
|Output size|160-bit|
|Status|Menos común|
|Usage|Alternativa a SHA|

---

# HMAC (HASH-BASED MESSAGE AUTHENTICATION CODE)

---

## WHAT IS HMAC (VERY IMPORTANT)

|Property|Description|
|---|---|
|Uses|Función hash + clave secreta|
|Provides|Integridad + autenticación|
|Does NOT provide|Confidencialidad|

MEMORY HOOK:  
**HMAC = hash + clave**

EXAM TRAP:  
HMAC ≠ cifrado.

---

## HMAC PROCESS (LOGIC)

1. Mensaje + clave secreta
    
2. Función hash
    
3. Valor HMAC
    

---

## HASH VS HMAC (EXAM FAVORITE)

|Feature|Hash|HMAC|
|---|---|---|
|Key used|No|Sí|
|Integrity|Sí|Sí|
|Authentication|No|Sí|

---

# PASSWORD HASHING (IMPORTANT SECURITY CONCEPT)

---

## WHY PASSWORDS ARE HASHED

|Reason|
|---|
|Prevenir almacenamiento en texto plano|
|Reducir el impacto de una filtración|

---

## WEAK PASSWORD HASHING METHODS

|Method|
|---|
|MD5|
|SHA-1|
|Hashes sin salt|

---

## STRONG PASSWORD HASHING METHODS

|Method|Feature|
|---|---|
|bcrypt|Lento, con salt|
|scrypt|Memoria-hard|
|PBKDF2|Iterativo|

MEMORY HOOK:  
**Hashing lento = seguridad fuerte**

---

## SALT (VERY IMPORTANT)

|Term|Meaning|
|---|---|
|Salt|Valor aleatorio añadido antes del hashing|

PURPOSE:

- Prevenir ataques de rainbow tables
    

MEMORY HOOK:  
**Salt derrota ataques precalculados**

---

# COMMON HASH ATTACKS (PREVIEW)

|Attack|
|---|
|Ataque de colisión|
|Ataque de pre-imagen|
|Ataque de rainbow tables|

---

# OBJECTIVE 04 — MEMORY CHECKLIST

Debes recordar:

- Hashing ≠ cifrado
    
- MD5 y SHA-1 están rotos
    
- SHA-2 y SHA-3 son seguros
    
- HMAC = hash + clave
    
- Salt previene rainbow tables
    
- Hash proporciona integridad, no confidencialidad
    

---

### STATUS

Objective 04: COMPLETE

---

Reply **next** para continuar con:

**OBJECTIVE 05 — DIGITAL CERTIFICATES, PKI, AND APPLICATIONS OF CRYPTOGRAPHY**

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Hash Function | Función matemática que convierte datos arbitrarios en un valor de longitud fija; proporciona huella digital |
| Pre-image Resistance | No se puede revertir el hash para recuperar la entrada original |
| Second Pre-image Resistance | No se puede encontrar una entrada diferente que produzca el mismo hash |
| Collision Resistance | No dos entradas diferentes producen el mismo hash |
| MD5 | Message Digest 5 — salida de 128-bit, roto, no debe usarse |
| SHA-1 | Secure Hash Algorithm 1 — salida de 160-bit, roto debido a ataques de colisión |
| SHA-2 | Familia Secure Hash Algorithm 2 — salidas de 224/256/384/512-bit, seguro |
| SHA-3 | Keccak — construcción sponge, respaldo de SHA-2, seguro |
| RIPEMD | Hash de 160-bit, alternativa menos común a SHA |
| HMAC | Hash-based Message Authentication Code — hash + clave secreta proporciona integridad + autenticación |
| Salt | Valor aleatorio añadido antes del hashing para prevenir ataques de rainbow tables |
| bcrypt | Función de hashing de contraseñas lenta, con salt |
| scrypt | Función de hashing de contraseñas memoria-hard |
| PBKDF2 | Función de hashing de contraseñas iterativa |
| Rainbow Table | Tablas de hash precalculadas para crackeo de contraseñas |
| Collision Attack | Encontrar dos entradas que produzcan el mismo hash |
| Pre-image Attack | Recuperar la entrada original a partir de un valor hash |

---

# PRACTICE QUESTIONS

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
