# OBJECTIVE 02 — WIRELESS ENCRYPTION ALGORITHMS

---

## WHY WIRELESS ENCRYPTION EXISTS (EXAM DEFINITION)

|Item|Memorize|
|---|---|
|Purpose|Proteger la confidencialidad e integridad de los datos inalámbricos|
|Problem Addressed|Medio de difusión abierto|

MEMORY HOOK:  
**Wireless = everyone can hear**

---

## WIRELESS SECURITY GOALS (CEH LANGUAGE)

|Goal|
|---|
|Authentication|
|Confidentiality|
|Integrity|
|Access control|

---

# WIRED EQUIVALENT PRIVACY (WEP)

---

## WEP — CORE DEFINITION (VERY IMPORTANT)

|Item|Memorize|
|---|---|
|WEP|Protocolo de seguridad diseñado para proporcionar privacidad equivalente a la red cableada para WLANs|

---

## WEP CHARACTERISTICS

|Feature|Detail|
|---|---|
|Encryption|RC4 stream cipher|
|Key Size|64-bit / 128-bit|
|IV Size|24-bit|
|Authentication|Open System / Shared Key|

---

## WEP WORKING (LOGIC FLOW)

|Step|
|---|
|Clave secreta compartida configurada|
|IV se anexa a la clave|
|RC4 cifra los datos|
|Datos cifrados transmitidos|

---

## WEP WEAKNESSES (EXAM MUST)

|Weakness|
|---|
|Tamaño de IV pequeño|
|Reutilización de IV|
|Programación de claves débil|
|Sin gestión de claves|
|Fácilmente crackeable|

MEMORY HOOK:  
**WEP = Weak Encryption Protocol**

---

## WEP ATTACK RESULT

|Outcome|
|---|
|La clave puede ser crackeada en minutos|

---

# WI-FI PROTECTED ACCESS (WPA)

---

## WPA — CORE DEFINITION

|Item|Memorize|
|---|---|
|WPA|Protocolo de seguridad introducido para corregir las vulnerabilidades de WEP|

---

## WPA FEATURES

|Feature|Detail|
|---|---|
|Encryption|TKIP|
|Cipher|RC4|
|Key Management|Claves dinámicas|
|Integrity|MIC (Message Integrity Check)|

---

## TEMPORAL KEY INTEGRITY PROTOCOL (TKIP)

|Item|Memorize|
|---|---|
|TKIP|Cambia dinámicamente las claves para cada paquete|

---

## WPA MODES

|Mode|Description|
|---|---|
|WPA-Personal|Pre-Shared Key (PSK)|
|WPA-Enterprise|Utiliza servidor RADIUS|

---

## WPA LIMITATIONS (EXAM)

|Limitation|
|---|
|Aún utiliza RC4|
|Vulnerable a ataques|
|Obsoleto|

MEMORY HOOK:  
**WPA = WEP with patches**

---

# WI-FI PROTECTED ACCESS 2 (WPA2)

---

## WPA2 — CORE DEFINITION

|Item|Memorize|
|---|---|
|WPA2|Estándar IEEE 802.11i para seguridad de WLAN|

---

## WPA2 FEATURES

|Feature|Detail|
|---|---|
|Encryption|AES|
|Cipher Mode|CCMP|
|Key Size|128-bit|
|Authentication|PSK / Enterprise|

---

## COUNTER MODE WITH CBC-MAC PROTOCOL (CCMP)

|Item|Memorize|
|---|---|
|CCMP|Protocolo de cifrado e integridad utilizado con AES|

---

## WPA2 MODES

|Mode|Description|
|---|---|
|WPA2-Personal|Pre-Shared Key|
|WPA2-Enterprise|Autenticación RADIUS|

---

## WPA2 WEAKNESSES (EXAM TRAPS)

|Weakness|
|---|
|Frases de contraseña débiles|
|Ataque KRACK|
|Cracking de PSK|

MEMORY HOOK:  
**Strong crypto, weak passwords**

---

# WI-FI PROTECTED ACCESS 3 (WPA3)

---

## WPA3 — CORE DEFINITION

|Item|Memorize|
|---|---|
|WPA3|Último estándar de seguridad para WLAN|

---

## WPA3 SECURITY IMPROVEMENTS

|Feature|Benefit|
|---|---|
|SAE|Protege contra ataques de diccionario offline|
|Forward Secrecy|Previene la descifrado de sesiones anteriores|
|Strong encryption|Protección mejorada|

---

## SIMULTANEOUS AUTHENTICATION OF EQUALS (SAE)

|Item|Memorize|
|---|---|
|SAE|Autenticación basada en contraseña resistente a fuerza bruta|

MEMORY HOOK:  
**WPA3 stops offline guessing**

---

## WPA3 MODES

|Mode|Description|
|---|---|
|WPA3-Personal|Basado en SAE|
|WPA3-Enterprise|Cifrado de 192-bit|

---

# COMPARISON TABLE (VERY HIGH YIELD)

|Feature|WEP|WPA|WPA2|WPA3|
|---|---|---|---|---|
|Cipher|RC4|RC4|AES|AES|
|Key Mgmt|Static|TKIP|CCMP|SAE|
|Security|Débil|Medio|Fuerte|Muy Fuerto|
|Status|Obsoleto|Obsoleto|Común|Último|

---

# EXAM FAVORITE QUESTIONS (MEMORY TRAPS)

|Question|Correct Answer|
|---|---|
|Seguridad WLAN más débil|WEP|
|Utiliza AES|WPA2 / WPA3|
|Utiliza TKIP|WPA|
|Utiliza SAE|WPA3|
|Vulnerable a reutilización de IV|WEP|

---

# QUICK MEMORY LADDER

|Order|
|---|
|WEP → WPA → WPA2 → WPA3|

MEMORY HOOK:  
**Weak → Better → Strong → Strongest**

---


## EXAM EXTRAS (Boson Practice Test)

### WEP/WPA/WPA2/WPA3 COMPARISON TABLE

|Standard|Cipher / Handshake|Notes|
|---|---|---|
|**WEP**|RC4 + 24-bit IV|Totalmente roto|
|**WPA**|RC4 + TKIP|Parche, aún débil|
|**WPA2**|AES-CCMP + 4-way|Fuerte, ampliamente utilizado|
|**WPA3**|**SAE / Dragonfly**|Vulnerabilidad Dragonblood|

---

### KRACK ATTACK

|Item|Memorize|
|---|---|
|KRACK|Key Reinstallation Attack — explota el handshake de 4 vías de WPA2|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| WEP | Protocolo de cifrado inalámbrico que utiliza RC4 con IV de 24-bit; considerado totalmente roto |
| WPA | Estándar de seguridad intermedio que utiliza TKIP para corregir las debilidades de WEP; ahora obsoleto |
| WPA2 | Estándar IEEE 802.11i que utiliza cifrado AES-CCMP; ampliamente desplegado |
| WPA3 | Último estándar de seguridad para WLAN que utiliza SAE para protección contra ataques de diccionario offline |
| TKIP | Temporal Key Integrity Protocol; cambia dinámicamente las claves por paquete (utilizado en WPA) |
| CCMP | Counter Mode with CBC-MAC Protocol; protocolo de cifrado e integridad utilizado con AES |
| SAE | Simultaneous Authentication of Equals; autenticación basada en contraseña resistente a fuerza bruta |
| KRACK | Key Reinstallation Attack; explota el handshake de 4 vías de WPA2 para descifrar tráfico |
| PSK | Pre-Shared Key mode; utilizado en WPA/WPA2/WPA3-Personal |
| RADIUS | Servidor de autenticación utilizado en modo Enterprise (WPA/WPA2/WPA3-Enterprise) |
| IV | Initialization Vector; 24-bit en WEP, provocando reutilización y fácil cracking |
| AES | Advanced Encryption Standard; utilizado en WPA2 y WPA3 |
| Dragonblood | Vulnerabilidad que afecta a la implementación SAE de WPA3 |

---

# PRACTICE QUESTIONS

**1.** ¿Qué protocolo de cifrado inalámbrico utiliza AES con CCMP?
- a) WEP
- b) WPA
- c) WPA2
- d) WPA3
**Answer:** C — WPA2 utiliza AES-CCMP tanto para cifrado como para integridad.

**2.** ¿Cuál es la debilidad principal que permite crackear las claves WEP rápidamente?
- a) Vulnerabilidad de AES
- b) Tamaño de IV pequeño de 24-bit que conduce a la reutilización de IV
- c) Autenticación RADIUS débil
- d) Fallo en la implementación de SAE
**Answer:** B — El IV de 24-bit es demasiado pequeño, causando reutilización que revela la clave.

**3.** ¿Qué protocolo utiliza WPA en lugar de CCMP?
- a) AES
- b) SAE
- c) TKIP
- d) RSA
**Answer:** C — WPA introdujo TKIP para cambiar dinámicamente las claves por paquete, reemplazando el enfoque estático de WEP.

**4.** ¿Contra qué protege SAE en WPA3?
- a) Ataques KRACK
- b) Ataques de diccionario offline
- c) Ataques evil twin
- d) Jamming
**Answer:** B — SAE (Simultaneous Authentication of Equals) previene la adivinanza de contraseñas offline.

**5.** ¿Qué afirmación sobre el ataque KRACK es correcta?
- a) Se dirige a redes WEP
- b) Explota el handshake de 4 vías de WPA2
- c) Solo afecta a WPA3
- d) Requiere acceso físico al AP
**Answer:** B — KRACK fuerza la reutilización de nonce en el handshake de 4 vías de WPA2 para descifrar tráfico.
