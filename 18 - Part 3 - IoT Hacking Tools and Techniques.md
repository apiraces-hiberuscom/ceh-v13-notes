# OBJECTIVE 03 — IoT HACKING TOOLS AND TECHNIQUES

---

## WHAT IS IoT HACKING (EXAM DEFINITION)

|Term|Definition|
|---|---|
|IoT Hacking|El proceso de identificar y explotar vulnerabilidades en dispositivos IoT, firmware, protocolos y sistemas backend|

MEMORY HOOK:  
**Device + Firmware + Network + Cloud**

---

# IoT HACKING PHASES (EXAM FLOW)

|Phase|
|---|
|Reconnaissance|
|Scanning|
|Gaining access|
|Maintaining access|
|Covering tracks|

MEMORY HOOK:  
**Find → Scan → Break → Stay → Hide**

---

# DEVICE-LEVEL HACKING TECHNIQUES (CRITICAL)

---

## PHYSICAL INTERFACE ATTACKS (NEW TERMS EXPLAINED)

---

## JTAG — DETAILED EXPLANATION (VERY IMPORTANT)

### WHAT IS JTAG

|Item|Explanation|
|---|---|
|JTAG|Una interfaz de depuración de hardware utilizada para probar, depurar y programar dispositivos empotrados|

### WHY JTAG EXISTS

- Diseñado para **fabricación y depuración**
    
- Permite acceso de bajo nivel a la CPU y la memoria
    

### WHY JTAG IS DANGEROUS

|Capability|Result|
|---|---|
|Read memory|Extraer firmware|
|Write memory|Modificar firmware|
|Control execution|Evadir autenticación|

### HOW ATTACKERS USE JTAG

1. Abrir la carcasa del dispositivo IoT
    
2. Localizar los pines JTAG en la placa de circuito impreso
    
3. Conectar el depurador JTAG
    
4. Volcar firmware o memoria
    
5. Extraer credenciales o claves
    

MEMORY HOOK:  
**JTAG = hardware root shell**

---

## UART — DETAILED EXPLANATION

### WHAT IS UART

|Item|Explanation|
|---|---|
|UART|Universal Asynchronous Receiver/Transmitter, utilizado para comunicación en serie|

### WHY UART IS DANGEROUS

|Risk|
|---|
|Debug console access|
|Login prompt exposure|
|No authentication|

### ATTACK FLOW

1. Identificar los pines UART
    
2. Conectar un adaptador USB a TTL
    
3. Acceder a la consola serie
    
4. Obtener root shell
    

MEMORY HOOK:  
**UART = hidden console**

---

## CHIP-OFF ATTACK (NEW)

|Term|Explanation|
|---|---|
|Chip-off attack|Eliminación física del chip de memoria para extraer datos|

### USED WHEN

- JTAG/UART deshabilitados
    
- Firmware cifrado débilmente
    

MEMORY HOOK:  
**Chip removed = data exposed**

---

# FIRMWARE-LEVEL HACKING (EXAM FAVORITE)

---

## FIRMWARE — CORE DEFINITION

|Term|Definition|
|---|---|
|Firmware|Software programado en memoria no volátil que controla el comportamiento del dispositivo|

---

## FIRMWARE ANALYSIS TECHNIQUES

|Technique|Explanation|
|---|---|
|Firmware extraction|Obtener imagen del firmware|
|Static analysis|Analizar código sin ejecutarlo|
|Dynamic analysis|Ejecutar firmware en un emulador|
|Reverse engineering|Comprender la lógica|

MEMORY HOOK:  
**Firmware = device brain**

---

## FIRMWARE EXTRACTION METHODS

|Method|
|---|
|JTAG|
|UART|
|Flash memory dump|
|OTA update interception|
|Vendor website|

---

## COMMON FIRMWARE VULNERABILITIES

|Vulnerability|
|---|
|Hardcoded credentials|
|Insecure update mechanism|
|Backdoors|
|Debug code left enabled|
|Weak encryption|

MEMORY HOOK:  
**Hardcoded creds never change**

---

# NETWORK-LEVEL IoT HACKING TECHNIQUES

---

## PROTOCOL ANALYSIS (EXAM CRITICAL)

---

## MQTT — EXPLANATION RECAP

|Aspect|Explanation|
|---|---|
|MQTT|Protocolo ligero de publicación/suscripción|
|Broker|Hub central de mensajes|
|Topic|Canal para mensajes|

### ATTACKS ON MQTT

|Attack|
|---|
|Subscribe without auth|
|Publish fake messages|
|Broker takeover|

MEMORY HOOK:  
**No auth MQTT = open mic**

---

## CoAP — EXPLANATION

|Aspect|Explanation|
|---|---|
|CoAP|Protocolo ligero similar a HTTP|
|Runs over|UDP|

### ATTACKS

|Attack|
|---|
|Amplification|
|Replay|
|Spoofing|

MEMORY HOOK:  
**UDP = spoofable**

---

# IoT SCANNING & DISCOVERY TOOLS (EXAM TOOLS)

---

## SHODAN (VERY IMPORTANT)

|Tool|Purpose|
|---|---|
|Shodan|Motor de búsqueda para dispositivos conectados a Internet|

### WHAT SHODAN FINDS

|Finds|
|---|
|Open ports|
|IoT devices|
|Default credentials|
|Firmware versions|

MEMORY HOOK:  
**Shodan = Google for devices**

---

## CENSYS

|Tool|Purpose|
|---|---|
|Censys|Descubimiento de activos a escala de Internet|

---

## NMAP (IoT USE)

|Command|Purpose|
|---|---|
|nmap -sV|Service detection|
|nmap -p|Port scanning|

MEMORY HOOK:  
**Scan before exploit**

---

# IoT EXPLOITATION FRAMEWORKS

|Tool|Purpose|
|---|---|
|Metasploit|Explotar vulnerabilidades IoT|
|RouterSploit|Explotación de routers|
|ExploitDB|Base de datos de vulnerabilidades|

---

# MALWARE & BOTNET TOOLS

---

## IoT MALWARE BEHAVIOR

|Behavior|
|---|
|Scans network|
|Brute-forces credentials|
|Downloads payload|
|Connects to C2|

---

## COMMON BOTNET EXPLOIT METHODS

|Method|
|---|
|Telnet brute force|
|SSH brute force|
|Web interface exploit|

MEMORY HOOK:  
**Telnet = IoT graveyard**

---

# CLOUD & BACKEND IoT HACKING TECHNIQUES

|Technique|
|---|
|API fuzzing|
|Token abuse|
|Cloud misconfiguration|
|Credential reuse|

---

# OBJECTIVE 03 — EXAM MEMORY BLOCK

**El hacking IoT se dirige a hardware, firmware, protocolos y servicios en la nube.  
JTAG y UART exponen acceso de bajo nivel.  
El firmware contiene credenciales y puertas traseras.  
Protocolos como MQTT y CoAP a menudo carecen de autenticación.  
Shodan revela dispositivos expuestos.**

---

## OBJECTIVE 03 — STATUS

|Item|Status|
|---|---|
|JTAG explained|COMPLETE|
|UART explained|COMPLETE|
|Firmware hacking|COMPLETE|
|Network attacks|COMPLETE|
|Tools|COMPLETE|
|Exam alignment|EXACT|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| IoT Hacking | Identificación y explotación de vulnerabilidades en dispositivos IoT, firmware, protocolos y sistemas backend |
| JTAG | Interfaz de depuración de hardware que proporciona acceso de nivel raíz a CPU y memoria para extracción de firmware |
| UART | Interfaz de comunicación en serie que expone consolas de depuración sin autenticación |
| Firmware | Software en memoria no volátil que controla el comportamiento del dispositivo |
| Firmware Extraction | Obtención de firmware mediante JTAG, UART, volcado de flash, intercepción OTA o sitios web del proveedor |
| Static Analysis | Análisis del código del firmware sin ejecutarlo |
| Dynamic Analysis | Ejecución de firmware en un emulador para observar su comportamiento |
| Shodan | Motor de búsqueda para dispositivos conectados a Internet — encuentra puertos abiertos, dispositivos IoT, credenciales predeterminadas |
| Censys | Herramienta de descubrimiento de activos a escala de Internet |
| RouterSploit | Marco de explotación diseñado específicamente para la explotación de routers e IoT |
| Metasploit | Marco de explotación general utilizado para vulnerabilidades IoT |
| MQTT | Protocolo ligero de publicación/suscripción — los ataques incluyen suscripción no autorizada y secuestro de broker |
| CoAP | Protocolo ligero basado en UDP — vulnerable a amplificación, spoofing y ataques de repetición |
| Hardcoded Credentials | Credenciales incrustadas en el firmware que no pueden ser cambiadas por los usuarios |
| OTA Update Interception | Captura de actualizaciones OTA de firmware para extraer o modificar el firmware |

---

# PRACTICE QUESTIONS

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
