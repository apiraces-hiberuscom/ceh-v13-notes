# Módulo 18 · Parte 3 — IoT Hacking Tools and Techniques

> **Módulo 18 — IoT and OT Hacking** · Parte 3 de 5 · Metodología y técnicas de hacking IoT: interfaces físicas (JTAG, UART, chip-off), análisis de firmware, ataques a MQTT/CoAP, descubrimiento con Shodan, Censys y Nmap, y frameworks de explotación.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [OBJECTIVE 03 — IoT HACKING TOOLS AND TECHNIQUES](#objective-03--iot-hacking-tools-and-techniques)
- [IoT HACKING PHASES](#iot-hacking-phases)
- [DEVICE-LEVEL HACKING TECHNIQUES 🔥](#device-level-hacking-techniques-high-yield)
- [FIRMWARE-LEVEL HACKING 🔥](#firmware-level-hacking-high-yield)
- [NETWORK-LEVEL IoT HACKING TECHNIQUES](#network-level-iot-hacking-techniques)
- [IoT SCANNING & DISCOVERY TOOLS](#iot-scanning--discovery-tools)
- [IoT EXPLOITATION FRAMEWORKS](#iot-exploitation-frameworks)
- [MALWARE & BOTNET TOOLS](#malware--botnet-tools)
- [CLOUD & BACKEND IoT HACKING TECHNIQUES](#cloud--backend-iot-hacking-techniques)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **IoT Hacking Methodology (CEH)** — Information Gathering → Vulnerability Scanning → Launch Attacks → Gain Remote Access → Maintain Access.
- **JTAG** — interfaz de depuración hardware: leer memoria (extraer firmware), escribirla (modificar firmware) y controlar la ejecución (bypass de autenticación) = "hardware root shell".
- **UART** — consola serie de depuración, a menudo sin autenticación; con un adaptador USB-to-TTL se obtiene una root shell.
- **Chip-off attack** — extraer físicamente el chip de memoria; se usa cuando JTAG/UART están deshabilitados o el firmware está mal cifrado.
- **Firmware extraction** — JTAG, UART, flash memory dump, OTA update interception o descarga desde la web del fabricante.
- **Static vs Dynamic analysis** — estático: analizar el código sin ejecutarlo; dinámico: ejecutar el firmware en un emulador.
- **Vulnerabilidades de firmware** — hardcoded credentials (el usuario no puede cambiarlas), insecure update mechanism, backdoors, debug code habilitado y cifrado débil.
- **MQTT** — broker (hub central) + topics; ataques: suscribirse sin autenticación, publicar mensajes falsos, broker takeover.
- **CoAP** — "HTTP ligero" sobre UDP → amplification, replay y spoofing ("UDP = spoofable").
- **Shodan vs Censys** — Shodan = "Google para dispositivos" (puertos abiertos, dispositivos IoT, credenciales por defecto, versiones de firmware); Censys = descubrimiento de activos a escala de Internet.
- **Frameworks de explotación** — RouterSploit (routers e IoT), Metasploit (general), ExploitDB (base de datos de vulnerabilidades).
- **Malware/botnets IoT** — escanean la red, hacen fuerza bruta por Telnet/SSH, descargan el payload y se conectan al C2 ("Telnet = IoT graveyard").

---

## OBJECTIVE 03 — IoT HACKING TOOLS AND TECHNIQUES

### WHAT IS IoT HACKING

|Term|Definition|
|---|---|
|IoT Hacking|El proceso de identificar y explotar vulnerabilidades en dispositivos IoT, firmware, protocolos y sistemas backend|

> 🧠 *Para recordar:* **Device + Firmware + Network + Cloud**

---

## IoT HACKING PHASES

|Phase|
|---|
|1. Information Gathering — recopilar información del dispositivo (Shodan, Censys)|
|2. Vulnerability Scanning — buscar vulnerabilidades (Nmap)|
|3. Launch Attacks — lanzar los ataques|
|4. Gain Remote Access — obtener acceso remoto|
|5. Maintain Access — mantener el acceso|

> 🧠 *Para recordar:* **Gather → Scan → Attack → Remote access → Maintain**

> ⚠️ *Trampa de examen:* No confundir con el ciclo genérico de hacking (Reconnaissance → Scanning → Gaining access → Maintaining access → Covering tracks): la **IoT Hacking Methodology** de CEH termina en **Maintain Access**.

---

## DEVICE-LEVEL HACKING TECHNIQUES (HIGH YIELD)

### PHYSICAL INTERFACE ATTACKS

### JTAG — DETAILED EXPLANATION (HIGH YIELD)

#### WHAT IS JTAG

|Item|Explanation|
|---|---|
|JTAG|Joint Test Action Group: interfaz de depuración de hardware utilizada para probar, depurar y programar dispositivos embebidos|

#### WHY JTAG EXISTS

- Diseñado para **fabricación y depuración**
- Permite acceso de bajo nivel a la CPU y la memoria

#### WHY JTAG IS DANGEROUS

|Capability|Result|
|---|---|
|Read memory|Extraer firmware|
|Write memory|Modificar firmware|
|Control execution|Evadir autenticación|

#### HOW ATTACKERS USE JTAG

1. Abrir la carcasa del dispositivo IoT
2. Localizar los pines JTAG en la placa de circuito impreso (PCB)
3. Conectar el depurador JTAG
4. Volcar firmware o memoria
5. Extraer credenciales o claves

> 🧠 *Para recordar:* **JTAG = hardware root shell**

---

### UART — DETAILED EXPLANATION

#### WHAT IS UART

|Item|Explanation|
|---|---|
|UART|Universal Asynchronous Receiver/Transmitter, utilizado para comunicación en serie|

#### WHY UART IS DANGEROUS

|Risk|
|---|
|Acceso a la debug console (consola de depuración)|
|Login prompt expuesto|
|Sin autenticación|

#### ATTACK FLOW

1. Identificar los pines UART
2. Conectar un adaptador USB-to-TTL
3. Acceder a la consola serie
4. Obtener una root shell

> 🧠 *Para recordar:* **UART = hidden console**

---

### CHIP-OFF ATTACK

|Term|Explanation|
|---|---|
|Chip-off attack|Extracción física (desoldado) del chip de memoria para leer sus datos|

#### USED WHEN

- JTAG/UART deshabilitados
- Firmware cifrado débilmente

> 🧠 *Para recordar:* **Chip removed = data exposed**

---

## FIRMWARE-LEVEL HACKING (HIGH YIELD)

### FIRMWARE — CORE DEFINITION

|Term|Definition|
|---|---|
|Firmware|Software programado en memoria no volátil que controla el comportamiento del dispositivo|

---

### FIRMWARE ANALYSIS TECHNIQUES

|Technique|Explanation|
|---|---|
|Firmware extraction|Obtener imagen del firmware|
|Static analysis|Analizar código sin ejecutarlo|
|Dynamic analysis|Ejecutar firmware en un emulador|
|Reverse engineering|Comprender la lógica|

> 🧠 *Para recordar:* **Firmware = device brain**

---

### FIRMWARE EXTRACTION METHODS

|Method|
|---|
|JTAG|
|UART|
|Flash memory dump — volcado de la memoria flash|
|OTA update interception — interceptar actualizaciones over-the-air|
|Vendor website — descarga desde la web del fabricante|

---

### COMMON FIRMWARE VULNERABILITIES

|Vulnerability|
|---|
|Hardcoded credentials — credenciales incrustadas en el firmware|
|Insecure update mechanism — mecanismo de actualización inseguro|
|Backdoors|
|Debug code left enabled — código de depuración habilitado|
|Weak encryption — cifrado débil|

> 🧠 *Para recordar:* **Hardcoded creds never change**

---

## NETWORK-LEVEL IoT HACKING TECHNIQUES

### PROTOCOL ANALYSIS (HIGH YIELD)

### MQTT — EXPLANATION RECAP

|Aspect|Explanation|
|---|---|
|MQTT|Protocolo ligero de publicación/suscripción|
|Broker|Nodo central que recibe y distribuye los mensajes|
|Topic|Canal para mensajes|

#### ATTACKS ON MQTT

|Attack|
|---|
|Suscribirse a topics sin autenticación|
|Publicar mensajes falsos|
|Broker takeover — toma de control del broker|

> 🧠 *Para recordar:* **No auth MQTT = open mic**

---

### CoAP — EXPLANATION

|Aspect|Explanation|
|---|---|
|CoAP|Protocolo ligero similar a HTTP|
|Transporte|UDP (puerto 5683; 5684 con DTLS)|

#### ATTACKS

|Attack|
|---|
|Amplification|
|Replay|
|Spoofing|

> 🧠 *Para recordar:* **UDP = spoofable**

---

## IoT SCANNING & DISCOVERY TOOLS

### SHODAN (HIGH YIELD)

|Tool|Purpose|
|---|---|
|Shodan|Motor de búsqueda para dispositivos conectados a Internet|

#### WHAT SHODAN FINDS

|Finds|
|---|
|Puertos abiertos|
|Dispositivos IoT|
|Credenciales por defecto|
|Versiones de firmware|

> 🧠 *Para recordar:* **Shodan = Google for devices**

---

### CENSYS

|Tool|Purpose|
|---|---|
|Censys|Descubrimiento de activos a escala de Internet|

---

### NMAP (IoT USE)

|Command|Purpose|
|---|---|
|nmap -sV|Detección de servicios y versiones|
|nmap -p|Escaneo de puertos concretos|

> 🧠 *Para recordar:* **Scan before exploit**

---

## IoT EXPLOITATION FRAMEWORKS

|Tool|Purpose|
|---|---|
|Metasploit|Explotar vulnerabilidades IoT|
|RouterSploit|Explotación de routers e IoT|
|ExploitDB|Base de datos de vulnerabilidades|

---

## MALWARE & BOTNET TOOLS

### IoT MALWARE BEHAVIOR

|Behavior|
|---|
|Escanea la red|
|Fuerza bruta de credenciales|
|Descarga el payload|
|Se conecta al C2|

---

### COMMON BOTNET EXPLOIT METHODS

|Method|
|---|
|Fuerza bruta por Telnet|
|Fuerza bruta por SSH|
|Explotación de la interfaz web|

> 🧠 *Para recordar:* **Telnet = IoT graveyard**

---

## CLOUD & BACKEND IoT HACKING TECHNIQUES

|Technique|
|---|
|API fuzzing|
|Token abuse — abuso de tokens|
|Cloud misconfiguration — mala configuración de la nube|
|Credential reuse — reutilización de credenciales|

---

## Flashcards

| Term | Definition |
|------|------------|
| IoT Hacking | Identificación y explotación de vulnerabilidades en dispositivos IoT, firmware, protocolos y sistemas backend |
| JTAG | Interfaz de depuración de hardware que proporciona acceso de nivel root a CPU y memoria para extracción de firmware |
| UART | Interfaz de comunicación en serie que expone consolas de depuración sin autenticación |
| Firmware | Software en memoria no volátil que controla el comportamiento del dispositivo |
| Firmware Extraction | Obtención de firmware mediante JTAG, UART, volcado de flash, intercepción OTA o sitios web del proveedor |
| Static Analysis | Análisis del código del firmware sin ejecutarlo |
| Dynamic Analysis | Ejecución de firmware en un emulador para observar su comportamiento |
| Shodan | Motor de búsqueda para dispositivos conectados a Internet — encuentra puertos abiertos, dispositivos IoT, credenciales predeterminadas |
| Censys | Herramienta de descubrimiento de activos a escala de Internet |
| RouterSploit | Framework de explotación diseñado específicamente para la explotación de routers e IoT |
| Metasploit | Framework de explotación general utilizado para vulnerabilidades IoT |
| MQTT | Protocolo ligero de publicación/suscripción — los ataques incluyen suscripción no autorizada y secuestro de broker |
| CoAP | Protocolo ligero basado en UDP — vulnerable a amplification, spoofing y replay attacks |
| Hardcoded Credentials | Credenciales incrustadas en el firmware que no pueden ser cambiadas por los usuarios |
| OTA Update Interception | Captura de actualizaciones OTA de firmware para extraer o modificar el firmware |

---

## Preguntas de práctica

**1.** Un probador de seguridad conecta un depurador JTAG a la placa de circuito de un dispositivo IoT para volcar el firmware. ¿Qué puede extraer?
- a) Solo configuración de red
- b) Imagen del firmware, credenciales y claves de cifrado
- c) Solo la dirección MAC del dispositivo
- d) Nada — JTAG es de solo lectura
**Respuesta:** b) — JTAG permite leer la memoria para extraer firmware, credenciales y claves, además de escribir en la memoria para modificar el firmware.

**2.** ¿Qué herramienta se describe como el "Google para dispositivos IoT"?
- a) Metasploit
- b) Nmap
- c) Shodan
- d) Censys
**Respuesta:** c) — Shodan es un motor de búsqueda para dispositivos conectados a Internet que encuentra puertos abiertos, credenciales predeterminadas y versiones de firmware.

**3.** Un atacante intercepta una actualización OTA de firmware y la modifica antes de la instalación. ¿Qué método de extracción representa esto?
- a) Volcado de memoria flash
- b) Acceso UART
- c) Intercepción de actualización OTA
- d) Ataque chip-off
**Respuesta:** c) — La intercepción de actualización OTA implica capturar y modificar actualizaciones de firmware en tránsito.

**4.** ¿Cuál es la vulnerabilidad principal del protocolo MQTT que explotan los atacantes?
- a) Utiliza canales cifrados por defecto
- b) Requiere tokens de hardware
- c) Permite la suscripción no autorizada a topics sin autenticación
- d) Solo funciona con conexiones cableadas
**Respuesta:** c) — MQTT sin autenticación permite a los atacantes suscribirse a topics e inyectar mensajes falsos.

**5.** ¿Qué técnica implica ejecutar firmware en un emulador para observar su comportamiento sin ejecutarlo en hardware real?
- a) Análisis estático
- b) Análisis dinámico
- c) Ingeniería inversa
- d) Firma de firmware
**Respuesta:** b) — El análisis dinámico ejecuta firmware en un emulador para observar el comportamiento en tiempo de ejecución e interacciones.
