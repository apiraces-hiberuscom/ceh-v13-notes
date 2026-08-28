# OBJECTIVE 02 — IoT THREATS AND ATTACKS

---

## IoT THREAT — CORE DEFINITION (EXAM)

|Term|Definition|
|---|---|
|IoT Threat|Cualquier acción potencial o evento que explota vulnerabilidades en dispositivos, redes o plataformas IoT para comprometer confidencialidad, integridad o disponibilidad|

MEMORY HOOK:
**Threat exploits weakness**

---

## WHY IoT DEVICES ARE HIGHLY VULNERABLE

|Reason|
|---|
|Credenciales por defecto|
|Contraseñas codificadas|
|Cifrado débil o inexistente|
|Interfaces web inseguras|
|Falta de parches|
|Potencia de procesamiento limitada|
|Accesibilidad física|
|Ciclo de vida largo del dispositivo|

MEMORY HOOK:
**Cheap, old, exposed**

---

# IoT ATTACK SURFACE (EXAM FAVORITE)

|Layer|Attack Surface|
|---|---|
|Device|Firmware, hardware ports|
|Network|Protocols, wireless|
|Gateway|Authentication flaws|
|Cloud|APIs, web apps|
|Application|Web/mobile apps|

MEMORY HOOK:
**Every layer is attackable**

---

# IoT THREAT CATEGORIES (CEH LIST)

|Category|
|---|
|Physical attacks|
|Network-based attacks|
|Software attacks|
|Cloud attacks|
|Supply chain attacks|

---

# DEVICE-LEVEL ATTACKS (CRITICAL)

---

## 1. DEFAULT CREDENTIAL ATTACK

|Aspect|Description|
|---|---|
|Cause|Nombres de usuario/contraseñas por defecto|
|Method|Reutilización de credenciales|
|Impact|Takeover completo del dispositivo|

MEMORY HOOK:
**Default creds = instant access**

---

## 2. FIRMWARE TAMPERING

|Aspect|Description|
|---|---|
|Method|Modificar imagen de firmware|
|Vector|Mecanismo de actualización|
|Result|Backdoor persistente|

MEMORY HOOK:
**Firmware = permanent control**

---

## 3. PHYSICAL TAMPERING

|Method|
|---|
|Acceso JTAG|
|Acceso UART|
|Chip-off attacks|
|Side-channel attacks|

MEMORY HOOK:
**Physical access = root**

---

## 4. HARDWARE BACKDOORS

|Aspect|
|---|
|Chips maliciosos|
|Compromiso de cadena de suministro|
|Persistencia indetectable|

---

# NETWORK-LEVEL ATTACKS (VERY HIGH YIELD)

---

## 1. MAN-IN-THE-MIDDLE (MITM)

|Description|
|---|
|Intercepta la comunicación del dispositivo|
|Alterar comandos/datos|
|Explota cifrado débil|

---

## 2. PROTOCOL-BASED ATTACKS

### MQTT ATTACKS

|Attack|
|---|
|Suscripción no autorizada a topics|
|Inyección de mensajes|
|Compromiso del broker|

MEMORY HOOK:
**MQTT without auth = broadcast**

---

### CoAP ATTACKS

|Attack|
|---|
|Amplificación|
|Spoofing|
|Replay attacks|

---

## 3. DNS ATTACKS

|Attack|
|---|
|DNS spoofing|
|DNS hijacking|
|Rogue DNS servers|

---

## 4. JAMMING ATTACKS

|Aspect|
|---|
|Interferencia inalámbrica|
|Condición de DoS|
|Targets ZigBee, Bluetooth|

MEMORY HOOK:
**Noise = DoS**

---

# SOFTWARE-LEVEL ATTACKS

---

## 1. INSECURE WEB INTERFACES (OWASP IoT TOP)

|Issue|
|---|
|Autenticación débil|
|No HTTPS|
|Command injection|
|XSS|

---

## 2. INSECURE MOBILE APPS

|Issue|
|---|
|APIs codificadas|
|Autenticación débil|
|Validación de certificados incorrecta|

---

## 3. BUFFER OVERFLOWS

|Cause|
|---|
|Manejo inseguro de memoria|
|Sin verificación de límites|

---

## 4. INJECTION ATTACKS

|Type|
|---|
|Command injection|
|SQL injection|
|XML injection|

---

# CLOUD & BACKEND ATTACKS

---

## 1. API ABUSE

|Issue|
|---|
|Autenticación débil|
|Autorización rota|
|Exceso de privilegios|

---

## 2. DATA BREACHES

|Cause|
|---|
|Almacenamiento en la nube mal configurado|
|Controles de acceso débiles|

---

## 3. ACCOUNT TAKEOVER

|Vector|
|---|
|Credential stuffing|
|Phishing|

---

# BOTNET-BASED IoT ATTACKS (EXAM FAVORITE)

---

## IoT BOTNET — DEFINITION

|Term|Definition|
|---|---|
|IoT Botnet|Una red de dispositivos IoT comprometidos controlados por un atacante|

---

## MIRAI BOTNET (MUST MEMORIZE)

|Feature|
|---|
|Targeta dispositivos IoT|
|Usa credenciales por defecto|
|Realiza ataques DDoS|
|Escanea Telnet/SSH|

MEMORY HOOK:
**Mirai = IoT DDoS**

---

## OTHER IoT BOTNETS (RECOGNITION)

|Botnet|
|---|
|Reaper|
|Hajime|
|Bashlite|
|Mozi|

---

# IoT DDoS ATTACK FLOW (STEP LOGIC)

1. El atacante escanea dispositivos IoT vulnerables

2. Compromete dispositivos usando credenciales por defecto

3. Instala malware bot

4. El botnet recibe comandos C2

5. Los dispositivos inundan el objetivo con tráfico

MEMORY HOOK:
**Scan → Infect → Control → Flood**

---

# SUPPLY CHAIN ATTACKS (IMPORTANT)

|Attack|
|---|
|Firmware comprometido|
|Actualizaciones maliciosas|
|Backdoors en bibliotecas de terceros|

MEMORY HOOK:
**Trust vendor = risk**

---

# IoT PRIVACY THREATS

|Threat|
|---|
|Rastreo de ubicación|
|Vigilancia de audio/video|
|Perfilado de comportamiento|

---

# OBJECTIVE 02 — EXAM MEMORY BLOCK

**Las amenazas IoT targetan dispositivos, redes, software y componentes en la nube.
Las credenciales por defecto, el cifrado débil y las interfaces inseguras son debilidades principales.
Botnets como Mirai explotan IoT a escala para ataques DDoS.
El acceso físico y los ataques a firmware permiten compromiso persistente.**

---

## OBJECTIVE 02 — STATUS

|Item|Status|
|---|---|
|Device attacks|COMPLETE|
|Network attacks|COMPLETE|
|Software attacks|COMPLETE|
|Cloud attacks|COMPLETE|
|Botnets|COMPLETE|
|Exam alignment|EXACT|

---


## EXAM EXTRAS (Boson Practice Test)

### HMI ATTACK

|Item|Memorize|
|---|---|
|HMI attack|Ataque a la interfaz hombre-máquina — targeta monitor, pantalla táctil, usualmente en entornos OT|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| IoT Threat | Cualquier acción que explota vulnerabilidades IoT para comprometer confidencialidad, integridad o disponibilidad |
| JTAG | Interfaz de depuración de hardware usada para probar, depurar y programar dispositivos embebidos — proporciona acceso a nivel root |
| UART | Universal Asynchronous Receiver/Transmitter — interfaz de comunicación serial que expone consolas de depuración |
| Chip-off Attack | Extracción física de un chip de memoria para obtener datos cuando JTAG/UART están deshabilitados |
| Firmware Tampering | Modificación de imágenes de firmware para crear backdoors persistentes |
| MQTT Attack | Explota suscripción no autorizada a topics, inyección de mensajes o compromiso del broker en mensajería IoT |
| CoAP Attack | Amplificación, spoofing o replay attacks que explotan el protocolo UDP-based CoAP |
| IoT Botnet | Red de dispositivos IoT comprometidos controlados por un atacante (ej., Mirai) |
| Mirai | Famoso IoT botnet que escanea Telnet/SSH usando credenciales por defecto para ataques DDoS |
| Reaper | IoT botnet que evolucionó más allá de Mirai con capacidades de explotación adicionales |
| BlueBorne | Vector de ataque basado en Bluetooth para compromiso de dispositivos IoT |
| Supply Chain Attack | Compromiso de dispositivos a través de firmware malicioso, actualizaciones o backdoors en bibliotecas de terceros |
| Rolling Code Attack | Explotación de secuencias de códigos predecibles en sistemas de entrada inalámbricos |
| Jamming Attack | Interferencia inalámbrica que causa denegación de servicio, targetando ZigBee y Bluetooth |
| Firmware Extraction | Obtención de imágenes de firmware vía JTAG, UART, flash dump o interceptación OTA |

---

# PRACTICE QUESTIONS

**1.** Un atacante obtiene acceso root a un dispositivo IoT conectándose a pines UART expuestos en la PCB. ¿Qué tipo de ataque es este?
- a) Firmware tampering
- b) Physical interface attack
- c) Network protocol attack
- d) Supply chain attack
**Answer:** b) — UART access es un ataque de interfaz física que expone una consola de depuración sin autenticación.

**2.** El botnet Mirai compromete dispositivos IoT principalmente usando ¿qué método?
- a) SQL injection
- b) Default credentials via Telnet/SSH brute force
- c) Phishing emails
- d) Zero-day exploits
**Answer:** b) — Mirai escanea Telnet/SSH y usa una lista de credenciales por defecto para comprometer dispositivos IoT.

**3.** ¿Qué ataque implica la extracción física de un chip de memoria para obtener datos de firmware?
- a) JTAG attack
- b) UART attack
- c) Chip-off attack
- d) Side-channel attack
**Answer:** c) — Los chip-off attacks eliminan el chip de memoria directamente cuando JTAG/UART están deshabilitados.

**4.** Un atacante intercepta y altera comandos entre un dispositivo IoT y su servidor en la nube. ¿Qué ataque es este?
- a) Jamming
- b) Man-in-the-Middle (MITM)
- c) Firmware tampering
- d) Rolling code attack
**Answer:** b) — Los ataques MITM interceptan y modifican la comunicación dispositivo-nube explotando cifrado débil.

**5.** ¿Qué IoT botnet es conocido por realizar ataques DDoS a gran escala usando dispositivos IoT comprometidos con credenciales por defecto?
- a) Stuxnet
- b) Reaper
- c) Mirai
- d) Bashlite
**Answer:** c) — Mirai es el IoT botnet más famoso que escanea credenciales por defecto y realiza ataques DDoS.