# Módulo 18 · Parte 2 — IoT Threats and Attacks

> **Módulo 18 — IoT and OT Hacking** · Parte 2 de 5 · Amenazas IoT: superficie de ataque, ataques a nivel de dispositivo, red, software y nube, botnets IoT (Mirai), supply chain y privacidad.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [OBJECTIVE 02 — IoT THREATS AND ATTACKS](#objective-02--iot-threats-and-attacks)
- [IoT ATTACK SURFACE 🔥](#iot-attack-surface-high-yield)
- [IoT THREAT CATEGORIES](#iot-threat-categories)
- [DEVICE-LEVEL ATTACKS 🔥](#device-level-attacks-high-yield)
- [NETWORK-LEVEL ATTACKS 🔥](#network-level-attacks-high-yield)
- [SOFTWARE-LEVEL ATTACKS](#software-level-attacks)
- [CLOUD & BACKEND ATTACKS](#cloud--backend-attacks)
- [BOTNET-BASED IoT ATTACKS 🔥](#botnet-based-iot-attacks-high-yield)
- [IoT DDoS ATTACK FLOW](#iot-ddos-attack-flow)
- [SUPPLY CHAIN ATTACKS 🔥](#supply-chain-attacks-high-yield)
- [IoT PRIVACY THREATS](#iot-privacy-threats)
- [Extras de examen (Boson Practice Test)](#extras-de-examen-boson-practice-test)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **IoT attack surface** — todas las capas son atacables: device (firmware, puertos hardware), network, gateway, cloud (APIs) y application.
- **IoT threat categories** — Physical, Network-based, Software, Cloud y Supply chain attacks.
- **Physical tampering** — acceso por JTAG o UART, chip-off y side-channel attacks: "acceso físico = root".
- **Firmware tampering** — modificar la imagen de firmware a través del mecanismo de actualización → backdoor persistente.
- **Default credential attack** — usuarios/contraseñas por defecto → toma de control completa del dispositivo.
- **MQTT attacks** — suscripción no autorizada a topics, message injection y broker compromise ("MQTT sin auth = broadcast").
- **CoAP attacks** — amplification, spoofing y replay (CoAP funciona sobre UDP).
- **Jamming** — interferencia inalámbrica → DoS contra ZigBee y Bluetooth.
- **Mirai** — escanea Telnet/SSH y entra con credenciales por defecto → DDoS masivo; otras botnets IoT: Reaper, Hajime, Bashlite, Mozi.
- **Flujo de un DDoS con botnet IoT** — Scan → Infect → Control (C2) → Flood.
- **Supply chain attacks** — firmware comprometido, actualizaciones maliciosas, backdoors en librerías de terceros y chips maliciosos (hardware backdoors).
- **HMI attack** — ataque a la Human Machine Interface (monitor, pantalla táctil), típico de entornos OT.

---

## OBJECTIVE 02 — IoT THREATS AND ATTACKS

### IoT THREAT — CORE DEFINITION

|Term|Definition|
|---|---|
|IoT Threat|Cualquier acción potencial o evento que explota vulnerabilidades en dispositivos, redes o plataformas IoT para comprometer confidencialidad, integridad o disponibilidad|

> 🧠 *Para recordar:* **Threat exploits weakness**

---

### WHY IoT DEVICES ARE HIGHLY VULNERABLE

|Reason|
|---|
|Credenciales por defecto|
|Contraseñas hardcodeadas (hardcoded passwords)|
|Cifrado débil o inexistente|
|Interfaces web inseguras|
|Falta de parches|
|Potencia de procesamiento limitada|
|Accesibilidad física|
|Ciclo de vida largo del dispositivo|

> 🧠 *Para recordar:* **Cheap, old, exposed**

---

## IoT ATTACK SURFACE (HIGH YIELD)

|Layer|Attack Surface|
|---|---|
|Device|Firmware, puertos hardware|
|Network|Protocolos, comunicación inalámbrica|
|Gateway|Fallos de autenticación|
|Cloud|APIs, aplicaciones web|
|Application|Apps web y móviles|

> 🧠 *Para recordar:* **Every layer is attackable**

---

## IoT THREAT CATEGORIES

|Category|
|---|
|Physical attacks — ataques físicos|
|Network-based attacks — ataques de red|
|Software attacks — ataques de software|
|Cloud attacks — ataques a la nube|
|Supply chain attacks — ataques a la cadena de suministro|

---

## DEVICE-LEVEL ATTACKS (HIGH YIELD)

### 1. DEFAULT CREDENTIAL ATTACK

|Aspect|Description|
|---|---|
|Cause|Nombres de usuario/contraseñas por defecto|
|Method|Reutilización de credenciales|
|Impact|Toma de control completa del dispositivo (full device takeover)|

> 🧠 *Para recordar:* **Default creds = instant access**

---

### 2. FIRMWARE TAMPERING

|Aspect|Description|
|---|---|
|Method|Modificar imagen de firmware|
|Vector|Mecanismo de actualización|
|Result|Backdoor persistente|

> 🧠 *Para recordar:* **Firmware = permanent control**

---

### 3. PHYSICAL TAMPERING

|Method|
|---|
|Acceso JTAG|
|Acceso UART|
|Chip-off attacks|
|Side-channel attacks|

> 🧠 *Para recordar:* **Physical access = root**

---

### 4. HARDWARE BACKDOORS

|Aspect|
|---|
|Chips maliciosos|
|Compromiso de cadena de suministro|
|Persistencia indetectable|

---

## NETWORK-LEVEL ATTACKS (HIGH YIELD)

### 1. MAN-IN-THE-MIDDLE (MITM)

|Description|
|---|
|Intercepta la comunicación del dispositivo|
|Altera comandos/datos|
|Explota cifrado débil|

---

### 2. PROTOCOL-BASED ATTACKS

#### MQTT ATTACKS

|Attack|
|---|
|Suscripción no autorizada a topics|
|Inyección de mensajes|
|Compromiso del broker|

> 🧠 *Para recordar:* **MQTT without auth = broadcast**

---

#### CoAP ATTACKS

|Attack|
|---|
|Amplificación|
|Spoofing|
|Replay attacks|

---

### 3. DNS ATTACKS

|Attack|
|---|
|DNS spoofing|
|DNS hijacking|
|Rogue DNS servers|

---

### 4. JAMMING ATTACKS

|Aspect|
|---|
|Interferencia inalámbrica|
|Condición de DoS|
|Afecta a ZigBee y Bluetooth|

> 🧠 *Para recordar:* **Noise = DoS**

---

## SOFTWARE-LEVEL ATTACKS

### 1. INSECURE WEB INTERFACES (OWASP IoT TOP)

|Issue|
|---|
|Autenticación débil|
|Sin HTTPS|
|Command injection|
|XSS|

---

### 2. INSECURE MOBILE APPS

|Issue|
|---|
|APIs/claves hardcodeadas (hardcoded APIs)|
|Autenticación débil|
|Validación de certificados incorrecta|

---

### 3. BUFFER OVERFLOWS

|Cause|
|---|
|Manejo inseguro de memoria|
|Sin verificación de límites|

---

### 4. INJECTION ATTACKS

|Type|
|---|
|Command injection|
|SQL injection|
|XML injection|

---

## CLOUD & BACKEND ATTACKS

### 1. API ABUSE

|Issue|
|---|
|Autenticación débil|
|Autorización rota|
|Exceso de privilegios|

---

### 2. DATA BREACHES

|Cause|
|---|
|Almacenamiento en la nube mal configurado|
|Controles de acceso débiles|

---

### 3. ACCOUNT TAKEOVER

|Vector|
|---|
|Credential stuffing|
|Phishing|

---

## BOTNET-BASED IoT ATTACKS (HIGH YIELD)

### IoT BOTNET — DEFINITION

|Term|Definition|
|---|---|
|IoT Botnet|Una red de dispositivos IoT comprometidos controlados por un atacante|

---

### MIRAI BOTNET (HIGH YIELD)

|Feature|
|---|
|Ataca dispositivos IoT|
|Usa credenciales por defecto|
|Realiza ataques DDoS|
|Escanea Telnet/SSH|

> 🧠 *Para recordar:* **Mirai = IoT DDoS**

---

### OTHER IoT BOTNETS

|Botnet|
|---|
|Reaper|
|Hajime|
|Bashlite|
|Mozi|

---

## IoT DDoS ATTACK FLOW

1. El atacante escanea dispositivos IoT vulnerables
2. Compromete dispositivos usando credenciales por defecto
3. Instala malware bot
4. El botnet recibe comandos C2
5. Los dispositivos inundan el objetivo con tráfico

> 🧠 *Para recordar:* **Scan → Infect → Control → Flood**

---

## SUPPLY CHAIN ATTACKS (HIGH YIELD)

|Attack|
|---|
|Firmware comprometido|
|Actualizaciones maliciosas|
|Backdoors en bibliotecas de terceros|

> 🧠 *Para recordar:* **Trust vendor = risk**

---

## IoT PRIVACY THREATS

|Threat|
|---|
|Rastreo de ubicación|
|Vigilancia de audio/video|
|Perfilado de comportamiento|

---

## Extras de examen (Boson Practice Test)

|Concepto|Qué recordar|
|---|---|
|HMI attack|Ataque a la Human Machine Interface (interfaz hombre-máquina): monitor, pantalla táctil; habitual en entornos OT|

---

## Flashcards

| Term | Definition |
|------|------------|
| IoT Threat | Cualquier acción que explota vulnerabilidades IoT para comprometer confidencialidad, integridad o disponibilidad |
| JTAG | Interfaz de depuración de hardware usada para probar, depurar y programar dispositivos embebidos — proporciona acceso a nivel root |
| UART | Universal Asynchronous Receiver/Transmitter — interfaz de comunicación serial que expone consolas de depuración |
| Chip-off Attack | Extracción física de un chip de memoria para obtener datos cuando JTAG/UART están deshabilitados |
| Firmware Tampering | Modificación de imágenes de firmware para crear backdoors persistentes |
| MQTT Attack | Explota suscripción no autorizada a topics, inyección de mensajes o compromiso del broker en mensajería IoT |
| CoAP Attack | Amplification, spoofing o replay attacks que explotan el protocolo CoAP (basado en UDP) |
| IoT Botnet | Red de dispositivos IoT comprometidos controlados por un atacante (ej., Mirai) |
| Mirai | Botnet IoT famosa que escanea Telnet/SSH usando credenciales por defecto para ataques DDoS |
| Reaper | Botnet IoT que evolucionó más allá de Mirai con capacidades de explotación adicionales |
| BlueBorne | Vector de ataque basado en Bluetooth para compromiso de dispositivos IoT |
| Supply Chain Attack | Compromiso de dispositivos a través de firmware malicioso, actualizaciones o backdoors en bibliotecas de terceros |
| Rolling Code Attack | El atacante hace jamming y captura (sniffing) el código de un sistema de apertura inalámbrico (p. ej., un coche) para reutilizarlo después y abrirlo |
| Jamming Attack | Interferencia inalámbrica que causa denegación de servicio; afecta a ZigBee y Bluetooth |
| Firmware Extraction | Obtención de imágenes de firmware vía JTAG, UART, flash dump o interceptación OTA |

---

## Preguntas de práctica

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