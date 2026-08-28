# OBJECTIVE 04 — WIRELESS HACKING METHODOLOGY

---

## CEH WIRELESS HACKING — CORE DEFINITION

|Item|Memorize|
|---|---|
|Wireless Hacking|Identificar y explotar vulnerabilidades en redes inalámbricas para obtener acceso no autorizado|

---

## CEH WIRELESS ATTACK METHODOLOGY (EXAM SEQUENCE)

|Phase #|Phase Name|
|---|---|
|1|Reconnaissance|
|2|Scanning|
|3|Gaining Access|
|4|Maintaining Access|
|5|Covering Tracks|

MEMORY HOOK:  
**Recon → Scan → Access → Persist → Hide**

---

# PHASE 1 — WIRELESS RECONNAISSANCE

---

## PURPOSE

|Purpose|
|---|
|Identificar redes inalámbricas|
|Identificar SSID, BSSID|
|Identificar canales|
|Identificar cifrado|

---

## INFORMATION GATHERED

|Parameter|
|---|
|SSID|
|BSSID|
|Channel|
|Fuerza de señal|
|Tipo de cifrado|

---

## TOOLS USED (PASSIVE MODE)

|Tool|Purpose|
|---|---|
|airodump-ng|Capturar paquetes inalámbricos|
|Kismet|Sniffer inalámbrico pasivo|
|NetStumbler|Detectar WLANs|
|inSSIDer|Descubrimiento de WLAN|

---

MEMORY HOOK:  
**Recon = listen only**

---

# PHASE 2 — WIRELESS SCANNING

---

## PURPOSE

|Purpose|
|---|
|Identificar objetivos activos|
|Identificar clientes conectados|
|Identificar mecanismos de seguridad|

---

## ACTIVE SCANNING TOOLS

|Tool|Purpose|
|---|---|
|airmon-ng|Habilitar modo monitor|
|iwconfig|Configurar interfaz inalámbrica|
|wash|Detectar APs con WPS habilitado|

---

## COMMAND RECOGNITION (EXAM)

|Command|Purpose|
|---|---|
|airmon-ng start wlan0|Habilitar modo monitor|
|iwconfig|Mostrar información de la interfaz inalámbrica|

---

MEMORY HOOK:  
**Monitor mode = hacking mode**

---

# PHASE 3 — GAINING ACCESS

---

## COMMON ACCESS METHODS

|Method|
|---|
|Cifrado WEP|
|Cifrado de handshake WPA/WPA2|
|Evil Twin|
|Ataque WPS PIN|

---

## WEP ATTACK METHOD (LOGIC)

|Step|
|---|
|Capturar paquetes|
|Recopilar IVs|
|Descifrar clave|

---

## WPA/WPA2 ATTACK METHOD

|Step|
|---|
|Capturar handshake|
|Deauth al cliente|
|Descifrar PSK sin conexión|

---

## TOOLS USED

|Tool|Purpose|
|---|---|
|aireplay-ng|Ataque de deauthentication e inyección de paquetes|
|aircrack-ng|Descifrar claves WEP/WPA|
|reaver|Fuerza bruta WPS|
|bully|Ataque WPS|

---

## COMMAND RECOGNITION (EXAM)

|Command|Purpose|
|---|---|
|aireplay-ng --deauth|Ataque de deauthentication|
|aircrack-ng capture.cap|Descifrar handshake capturado|

---

MEMORY HOOK:  
**Handshake first, crack later**

---

# PHASE 4 — MAINTAINING ACCESS

---

## METHODS

|Method|
|---|
|Backdoor AP|
|Suplantación de MAC (MAC spoofing)|
|Conexión persistente|

---

## TOOLS

|Tool|Purpose|
|---|---|
|macchanger|Cambiar dirección MAC|
|hostapd|Crear AP falso|

---

MEMORY HOOK:  
**Persistence = stay connected**

---

# PHASE 5 — COVERING TRACKS

---

## TECHNIQUES

|Technique|
|---|
|Suplantación de dirección MAC (MAC spoofing)|
|Borrar registros (logs)|
|Deshabilitar registros del AP|

---

MEMORY HOOK:  
**No logs, no proof**

---

# CEH WIRELESS TOOLS — MASTER TABLE (VERY HIGH YIELD)

|Tool|Function|
|---|---|
|Aircrack-ng|Descifrar WEP/WPA|
|Airodump-ng|Capturar paquetes|
|Aireplay-ng|Inyección de paquetes|
|Airmon-ng|Modo monitor|
|Kismet|Sniffing pasivo|
|Reaver|Fuerza bruta WPS|
|Bully|Ataque WPS|
|Wash|Detección de WPS|
|NetStumbler|Descubrimiento de WLAN|
|inSSIDer|Análisis de WLAN|

---

# TOOL → ATTACK MAPPING (MEMORY TABLE)

|Tool|Attack|
|---|---|
|airodump-ng|Recon|
|aireplay-ng|Deauth|
|aircrack-ng|Descifrado de claves|
|reaver|Fuerza bruta WPS|
|Kismet|Sniffing pasivo|

---

# EXAM TRAPS (VERY IMPORTANT)

|Trap|Correct Answer|
|---|---|
|El modo monitor es necesario para sniffing|SÍ|
|¿El SSID oculto es seguro?|NO|
|¿WPA2 es inmune a ataques?|NO|
|¿El deauth rompe el cifrado?|NO|

---

# OBJECTIVE 04 — MEMORY BLOCK

**Recon listens.  
Monitor mode captures.  
Deauth forces handshake.  
Aircrack cracks keys.  
Reaver attacks WPS.**

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Wireless Hacking Methodology | Proceso de 5 fases: Recon, Scan, Gaining Access, Maintaining Access, Covering Tracks |
| Reconnaissance | Fase 1: Identificar redes inalámbricas, SSIDs, canales y cifrado de forma pasiva |
| Scanning | Fase 2: Identificar objetivos activos, clientes conectados y mecanismos de seguridad |
| Monitor Mode | Modo de la interfaz inalámbrica que captura todo el tráfico sin asociarse a un AP |
| airodump-ng | Herramienta utilizada para capturar paquetes inalámbricos durante el reconocimiento |
| aireplay-ng | Herramienta utilizada para deauthentication e inyección de paquetes |
| aircrack-ng | Herramienta utilizada para descifrar claves WEP y WPA/WPA2 a partir de handshakes capturados |
| airmon-ng | Herramienta utilizada para habilitar el modo monitor en una interfaz inalámbrica |
| reaver | Herramienta utilizada para ataques de fuerza bruta de PIN WPS |
| Kismet | Sniffer y detector inalámbrico pasivo |
| WPS PIN Attack | Fuerza bruta del PIN de 8 dígitos de WPS para obtener acceso a la red |
| Handshake Capture | Captura del intercambio de autenticación WPA2 de 4 vías para descifrado sin conexión |
| MAC Spoofing | Cambiar la dirección MAC para suplantar un dispositivo autorizado |
| Wash | Herramienta de línea de comandos para detectar puntos de acceso con WPS habilitado |

---

# PRACTICE QUESTIONS

**1.** ¿Cuál es el orden correcto de la metodología de wireless hacking de CEH?
- a) Scan → Recon → Access → Hide → Persist
- b) Recon → Scan → Gaining Access → Maintaining Access → Covering Tracks
- c) Access → Recon → Scan → Persist → Hide
- d) Recon → Access → Scan → Cover → Persist
**Respuesta:** B — La metodología de 5 fases sigue: Recon → Scan → Access → Persist → Hide.

**2.** ¿Qué comando habilita el modo monitor en una interfaz inalámbrica?
- a) airodump-ng start wlan0
- b) airmon-ng start wlan0
- c) aireplay-ng --monitor wlan0
- d) wash --enable wlan0
**Respuesta:** B — `airmon-ng start wlan0` pone la interfaz en modo monitor para captura de paquetes.

**3.** ¿Qué se debe capturar ANTES de descifrar una clave WPA2?
- a) IVs
- b) El SSID
- c) El handshake de 4 vías
- d) El BSSID
**Respuesta:** C — Aircrack-ng necesita el handshake de 4 vías capturado para realizar el descifrado offline de PSK.

**4.** ¿Qué herramienta se usa específicamente para ataques de fuerza bruta WPS?
- a) airodump-ng
- b) Kismet
- c) reaver
- d) macchanger
**Respuesta:** C — Reaver realiza fuerza bruta del PIN de WPS para obtener acceso no autorizado a la red.

**5.** ¿Cuál es el propósito del MAC spoofing en la Fase 4 de la metodología?
- a) Para descifrar la clave de cifrado
- b) Para habilitar el modo monitor
- c) Para suplantar un dispositivo autorizado y mantener el acceso
- d) Para capturar el handshake
**Respuesta:** C — El MAC spoofing permite al atacante eludir el filtrado de MAC y mantener acceso persistente.
