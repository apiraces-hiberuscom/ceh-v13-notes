# MODULE 16 — OVERVIEW (EXAM CONTEXT)

|Item|Memorize|
|---|---|
|Module Number|16|
|Module Name|Hacking Wireless Networks|
|Focus|Conceptos inalámbricos, amenazas, ataques, herramientas, contramedidas|

---

## LEARNING OBJECTIVES (DO NOT SKIP — EXAM LIST)

|Objective #|Description|
|---|---|
|01|Resumir conceptos inalámbricos|
|02|Explicar diferentes algoritmos de cifrado inalámbrico|
|03|Explicar diferentes amenazas inalámbricas|
|04|Demostrar metodología de hacking inalámbrico|
|05|Explicar contramedidas de ataques inalámbricos|

---

# OBJECTIVE 01 — SUMMARIZE WIRELESS CONCEPTS

---

## WIRELESS NETWORK — CORE DEFINITION

|Term|Definition|
|---|---|
|Wireless Network|Una red que usa transmisión por ondas de radio para comunicarse en la capa física en lugar de cables|

MEMORY HOOK:  
**No wires = radio waves**

---

## WIRELESS COMMUNICATION MEDIUM

|Component|Explanation|
|---|---|
|Transmission|Usa ondas electromagnéticas (EM)|
|Carrier|Aire|
|Nature|Basado en difusión|

EXAM TRAP:  
Wireless = **broadcast**, not point-to-point.

---

## WIRELESS NETWORK TERMINOLOGY (VERY HIGH YIELD)

---

### GLOBAL SYSTEM FOR MOBILE COMMUNICATIONS (GSM)

|Item|Memorize|
|---|---|
|GSM|Sistema universal para la transmisión de datos móviles en todo el mundo|

---

### BANDWIDTH

|Item|Memorize|
|---|---|
|Bandwidth|Cantidad de datos transferidos por segundo|
|Unit|bits por segundo (bps)|

---

### ACCESS POINT (AP)

|Item|Memorize|
|---|---|
|Access Point|Dispositivo que conecta dispositivos inalámbricos a una red cableada|
|Function|Actúa como un switch o hub|

---

### BASIC SERVICE SET IDENTIFIER (BSSID)

|Item|Memorize|
|---|---|
|BSSID|Dirección MAC del access point|
|Role|Identifica un access point inalámbrico|

EXAM TRAP:  
SSID ≠ BSSID

---

### HOTSPOT

|Item|Memorize|
|---|---|
|Hotspot|Ubicación de acceso inalámbrico público|
|Examples|Aeropuertos, cafeterías, bibliotecas|

---

### ASSOCIATION

|Item|Memorize|
|---|---|
|Association|Proceso de conectar un dispositivo inalámbrico a un AP|

---

## WIRELESS SIGNAL TECHNIQUES (VERY EXAM-IMPORTANT)

---

### ORTHOGONAL FREQUENCY-DIVISION MULTIPLEXING (OFDM)

|Item|Memorize|
|---|---|
|OFDM|Modulación digital usando múltiples subportadoras ortogonales|
|Benefit|Mayores velocidades de datos, reducción de interferencia|

---

### MULTIPLE INPUT MULTIPLE OUTPUT (MIMO)

|Item|Memorize|
|---|---|
|MIMO|Usa múltiples antenas|
|Benefit|Mayor rendimiento y fiabilidad|

---

### DIRECT-SEQUENCE SPREAD SPECTRUM (DSSS)

|Item|Memorize|
|---|---|
|DSSS|Propaga la señal en una banda de frecuencia amplia|
|Purpose|Prevenir interferencias|

---

### FREQUENCY-HOPPING SPREAD SPECTRUM (FHSS)

|Item|Memorize|
|---|---|
|FHSS|Cambios rápidos de frecuencia|
|Purpose|Reducir la interceptación|

---

MEMORY BLOCK (SIGNALS):  
**OFDM = speed, MIMO = power, DSSS = spread, FHSS = hop**

---

# WIRELESS NETWORKS — DEFINITION

|Item|Memorize|
|---|---|
|Wireless Network|Usa transmisión por ondas de radio para comunicarse en la capa física|

---

## ADVANTAGES OF WIRELESS NETWORKS

|Advantage|
|---|
|Instalación fácil|
|Sin cables|
|Movilidad|
|Disponibilidad de acceso público|

---

## DISADVANTAGES OF WIRELESS NETWORKS

|Disadvantage|
|---|
|Riesgos de seguridad|
|Degradación del ancho de banda|
|Interferencias|
|Problemas de compatibilidad de hardware|

EXAM TRAP:  
Wireless = **less secure by default**

---

# TYPES OF WIRELESS NETWORKS

---

## EXTENSION TO WIRED NETWORK

|Feature|Description|
|---|---|
|Purpose|Extender la LAN cableada|
|Device|Access Point|
|Function|Conecta redes cableadas e inalámbricas|

---

## MULTIPLE ACCESS POINTS

|Feature|Description|
|---|---|
|Purpose|Expandir la cobertura|
|Requirement|Canales superpuestos|
|Benefit|Roaming sin interrupciones|

---

## LAN-TO-LAN WIRELESS NETWORK

|Feature|Description|
|---|---|
|Purpose|Conectar dos LANs|
|Medium|Puente inalámbrico|
|Complexity|Alta|

---

## 3G / 4G / 5G HOTSPOT

|Feature|Description|
|---|---|
|Source|Red celular|
|Devices|Teléfonos, tabletas, portátiles|
|Role|Proporciona Wi-Fi a través de datos móviles|

---

MEMORY HOOK:  
**Extend → Expand → Bridge → Hotspot**

---

# WIRELESS STANDARDS (IEEE 802.11) — CRITICAL

---

## IEEE 802.11 — CORE IDEA

|Item|Memorize|
|---|---|
|IEEE 802.11|Estándar de red inalámbrica LAN|
|Operates|2.4 GHz / 5 GHz|

---

## COMMON IEEE 802.11 STANDARDS (TABLE — EXAM FAVORITE)

|Standard|Frequency|Modulation|Speed (Mbps)|Range (m)|
|---|---|---|---|---|
|802.11|2.4|DSSS, FHSS|1–2|20–100|
|802.11a|5|OFDM|6–54|35–100|
|802.11b|2.4|DSSS|1–11|35–140|
|802.11g|2.4|OFDM|54|38–140|
|802.11n|2.4/5|MIMO-OFDM|54–600|70–250|

---

## EXTENDED STANDARDS (DO NOT SKIP)

|Standard|Purpose|
|---|---|
|802.11i|Seguridad (WPA2)|
|802.11e|QoS|
|802.11h|Control de energía|
|802.11ac|Alto rendimiento|
|802.11ax|Wi-Fi 6|

---

MEMORY HOOK (ORDER):  
**b → a → g → n → ac → ax**

---

# SERVICE SET IDENTIFIER (SSID)

---

## SSID — DEFINITION

|Item|Memorize|
|---|---|
|SSID|Nombre de la red inalámbrica legible por humanos|
|Nature|Identificador lógico|

---

## SSID BEHAVIOR

|Property|Detail|
|---|---|
|Broadcast|Habilitado por defecto|
|Security|No proporciona seguridad|
|Visibility|Puede ocultarse|

EXAM TRAP:  
Hidden SSID ≠ secure network

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Wireless Network | Red que usa transmisión por ondas de radio en la capa física en lugar de cables |
| SSID | Identificador lógico legible por humanos para una red inalámbrica |
| BSSID | Dirección MAC del access point inalámbrico |
| Access Point (AP) | Dispositivo que conecta dispositivos inalámbricos a una red cableada |
| OFDM | Modulación digital usando múltiples subportadoras ortogonales para mayor velocidad de datos |
| MIMO | Usa múltiples antenas para aumentar el rendimiento y la fiabilidad |
| DSSS | Propaga la señal en una banda de frecuencia amplia para prevenir interferencias |
| FHSS | Cambia rápidamente las frecuencias para reducir la interceptación |
| Association | Proceso de conectar un dispositivo inalámbrico a un access point |
| Hotspot | Ubicación de acceso inalámbrico público (aeropuertos, cafeterías, bibliotecas) |
| IEEE 802.11 | Estándar de red inalámbrica LAN que opera a 2.4 GHz / 5 GHz |
| 802.11n | Estándar MIMO-OFDM que soporta 54–600 Mbps a 2.4/5 GHz |
| 802.11i | Estándar de seguridad que define WPA2 |
| Bandwidth | Cantidad de datos transferidos por segundo, medidos en bps |
| GSM | Sistema universal para la transmisión de datos móviles en todo el mundo |

---

# PRACTICE QUESTIONS

**1.** ¿Cómo se llama la dirección MAC de un access point inalámbrico?
- a) SSID
- b) BSSID
- c) ESSID
- d) MAC ID
**Answer:** B — BSSID es la dirección MAC que identifica de forma única cada access point.

**2.** ¿Qué técnica de modulación usa múltiples subportadoras ortogonales para obtener mayores velocidades de datos?
- a) DSSS
- b) FHSS
- c) OFDM
- d) MIMO
**Answer:** C — OFDM divide la señal entre múltiples subportadoras, aumentando el rendimiento y reduciendo la interferencia.

**3.** ¿Qué representa el SSID de una red inalámbrica?
- a) La dirección MAC del AP
- b) El protocolo de cifrado utilizado
- c) El nombre legible por humanos de la red inalámbrica
- d) La frecuencia del canal
**Answer:** C — SSID es un identificador lógico legible por humanos, no una función de seguridad.

**4.** ¿Qué estándar IEEE 802.11 introdujo la tecnología MIMO-OFDM?
- a) 802.11a
- b) 802.11b
- c) 802.11g
- d) 802.11n
**Answer:** D — 802.11n fue el primero en usar MIMO-OFDM, alcanzando hasta 600 Mbps.

**5.** ¿Por qué un SSID oculto NO se considera una medida de seguridad?
- a) Cifra datos con WEP
- b) Puede descubrirse mediante escaneo pasivo
- c) Desactiva el access point
- d) Cambia la dirección MAC
**Answer:** B — Los SSID ocultos todavía se transmiten en las solicitudes de probe y pueden descubrirse fácilmente.
