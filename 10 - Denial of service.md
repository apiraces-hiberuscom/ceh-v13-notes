# Módulo 10 — Denial-of-Service

> **Enfoque:** Conceptos de DoS/DDoS, arquitectura y propagación de botnets, categorías y técnicas de ataque DDoS, herramientas y contramedidas

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
- [OBJECTIVE 01 — DoS/DDoS CONCEPTS AND BOTNET ARCHITECTURE](#objective-01--dosddos-concepts-and-botnet-architecture)
- [OBJECTIVE 02 — DDoS ATTACK TECHNIQUES](#objective-02--ddos-attack-techniques)
- [OBJECTIVE 03 — DDoS ATTACK TOOLS](#objective-03--ddos-attack-tools)
- [OBJECTIVE 04 — DoS/DDoS COUNTERMEASURES](#objective-04--dosddos-countermeasures)
- [DDoS CASE STUDY — HTTP/2 RAPID RESET](#ddos-case-study--http2-rapid-reset)
- [Extras de examen (Boson Practice Test)](#extras-de-examen-boson-practice-test)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **DoS vs DDoS / botnet** — DoS = una sola fuente; DDoS = muchos bots controlados por el botmaster a través del C2 server (el C2 retransmite, no es el atacante)
- **Hit-list vs Permutation scanning** — hit-list: lista precompilada de objetivos vulnerables; permutation: lista pseudoaleatoria compartida (cifrado de bloque de 32 bits), la más eficiente porque evita escaneos redundantes
- **Malicious code propagation** — Central source (desde una fuente central), Back-chaining (desde la máquina del atacante, p. ej. por TFTP), Autonomous (la víctima se convierte en atacante)
- **Categorías DDoS** — Volumetric = ancho de banda, Protocol = tablas de estado, Application = lógica de la aplicación (HTTP)
- **Smurf / Fraggle / Ping of Death** — Smurf: ICMP ECHO a broadcast; Fraggle: UDP ECHO a los puertos 7 (Echo) / 19 (CHARGEN); Ping of Death: ICMP de más de 65,535 bytes
- **Amplificación** — NTP (monlist), DNS (hasta 50x), SSDP (M-SEARCH a dispositivos UPnP), CHARGEN (UDP 19): petición pequeña con la IP de la víctima falsificada, respuesta enorme
- **SYN flood / TCP SACK Panic** — SYN flood deja conexiones half-open (el ACK nunca llega); TCP SACK Panic: solo Linux, kernel panic con paquetes de 48 bytes
- **Slowloris vs R.U.D.Y.** — Slowloris envía cabeceras HTTP parciales; R.U.D.Y. hace slow POST byte a byte; ambos tumban servidores con un ancho de banda mínimo
- **Phlashing (Permanent DoS)** — actualizaciones de firmware fraudulentas que causan daño permanente al hardware; no es una inundación de tráfico
- **Detection techniques** — Activity profiling (línea base), Sequential change-point detection (cambios bruscos por IP/flujo), Wavelet-based signal analysis (componentes espectrales)
- **Herramientas** — LOIC (floods HTTP/UDP/TCP), HOIC (sucesor de LOIC, "booster scripts"), HULK (peticiones aleatorias para evadir el caching)
- **HTTP/2 Rapid Reset** — Google Cloud 2023: abusa del stream multiplexing de HTTP/2 (hasta 100 streams por conexión TCP), no del ancho de banda

---

## Objetivos de aprendizaje

|Objective #|Description|
|---|---|
|01|Resumir conceptos de DoS/DDoS y arquitectura de botnets|
|02|Explicar diversas técnicas de ataques DDoS|
|03|Identificar herramientas de ataques DDoS|
|04|Explicar contramedidas de DoS/DDoS|

---

## OBJECTIVE 01 — DoS/DDoS CONCEPTS AND BOTNET ARCHITECTURE

### DoS vs DDoS — CORE DIFFERENCE

|Item|Definition|
|---|---|
|DoS|Una sola fuente inunda un solo objetivo para agotar recursos|
|DDoS|Múltiples fuentes distribuidas (botnet) inundan un solo objetivo simultáneamente|

> 🧠 *Para recordar:* **DoS = un atacante, DDoS = ejército de zombies**

---

### BOTNET ARCHITECTURE

|Component|Role|
|---|---|
|Botmaster|Atacante que controla toda la botnet|
|C2 Server (Command and Control)|Servidor central que retransmite comandos del botmaster a los bots|
|Bots / Zombies|Máquinas comprometidas que ejecutan ataques bajo demanda|

> 🧠 *Para recordar:* **Botmaster → C2 → Bots (uno comanda, uno retransmite, muchos ejecutan)**

> ⚠️ *Trampa de examen:* El servidor C2 **no** es el atacante — es el **retransmisor**. El botmaster emite comandos **a través** del servidor C2.

---

### BOTNET PROPAGATION TECHNIQUES

|Technique|Description|
|---|---|
|Random Scanning|Los bots escanean direcciones IP aleatorias buscando máquinas vulnerables|
|Hit-List Scanning|El atacante precompila una lista de objetivos vulnerables, luego los bots escanean desde esa lista para construir rápidamente un ejército de zombies|
|Topological Scanning|La máquina infectada usa información de sus propias conexiones (por ejemplo, listas de pares, registros de chat) para descubrir nuevos objetivos|
|Local Subnet Scanning|Los bots escanean su propia subred local para encontrar otras máquinas vulnerables en la misma red|
|Permutation Scanning|Usa una lista de permutación pseudoaleatoria de todas las direcciones IP; un cifrado de bloque de 32 bits con una clave preseleccionada genera el orden — los bots comparten la misma lista de permutación para evitar escaneo redundante|

> ⚠️ *Trampa de examen:* **Permutation scanning** es la técnica más **eficiente** porque todos los bots comparten la misma lista de permutación, evitando superposiciones.

---

### MALICIOUS CODE PROPAGATION TECHNIQUES

|Technique|Description|
|---|---|
|Central Source Propagation|El atacante coloca el kit de herramientas de ataque en una fuente central; las víctimas copian el código de esa fuente y luego repiten el proceso|
|Back-Chaining Propagation|El atacante distribuye el kit de herramientas desde su propia máquina usando protocolos como TFTP|
|Autonomous Propagation|El host atacante transfiere el kit de herramientas de ataque a las víctimas al mismo tiempo que las compromete — la víctima se convierte en atacante, la cadena continúa|

> 🧠 *Para recordar:* **Central = una fuente, Back-chain = el atacante impulsa, Autonomous = la víctima se convierte en atacante**

---

## OBJECTIVE 02 — DDoS ATTACK TECHNIQUES

### DDoS ATTACK CLASSIFICATIONS

|Category|Target|
|---|---|
|Volumetric|Agotar el ancho de banda — suelen apuntar a servicios stateless como NTP y SSDP|
|Protocol|Explotar debilidades de los protocolos de red — apuntan a las tablas de estado de conexión y al reensamblado de paquetes|
|Application|Inundar con tráfico web de apariencia legítima — apuntan a HTTP, SQL y la lógica de la aplicación|

> 🧠 *Para recordar:* **Volumetric = ancho de banda, Protocol = estado, Application = lógica**

> ⚠️ *Trampa de examen:* Los ataques volumétricos suelen apuntar a servicios **stateless** (NTP, SSDP) porque una solicitud pequeña genera una respuesta mucho mayor (amplificación).

---

### VOLUMETRIC ATTACKS — COMPREHENSIVE TABLE

|Attack|Description|Key Detail|
|---|---|---|
|UDP Flood|Paquetes UDP falsificados enviados a una tasa muy alta en puertos aleatorios|Agota ancho de banda y recursos del servidor|
|ICMP Flood|Gran cantidad de solicitudes ICMP echo (ping) enviadas al objetivo|También llamado Ping Flood|
|Ping of Death|Paquetes ICMP malformados o de tamaño excesivo (mayores de 65,535 bytes)|Bloquea o congela sistemas vulnerables|
|Smurf Attack|Solicitud ICMP ECHO falsificada enviada a una dirección de broadcast con la IP de la víctima como origen|Todos los hosts en la red de broadcast responden a la víctima simultáneamente|
|Fraggle Attack|Similar a Smurf pero usa UDP ECHO en lugar de ICMP|Apunta al puerto UDP 7 (Echo) o 19 (CHARGEN)|
|NTP Amplification|La botnet envía paquetes UDP pequeños a servidores NTP con monlist habilitado, IP de la víctima falsificada|Relación de amplificación muy alta — solicitud pequeña, respuesta enorme|
|DNS Amplification|Consulta DNS pequeña falsificada con la IP de la víctima enviada a resolutores abiertos|Factor de amplificación hasta 50x|
|SSDP Amplification|Solicitudes SSDP M-SEARCH falsificadas a dispositivos UPnP|Refleja respuestas grandes hacia la víctima|
|CHARGEN|Apunta al puerto UDP 19 — Character Generator Protocol (generación de caracteres)|Usado en ataques de amplificación estilo Fraggle|

MEMORY HOOK (AMPLIFICATION):
**NTP, DNS, SSDP, CHARGEN — todos son "pedir poco, recibir mucho"**

> ⚠️ *Trampa de examen:* Smurf usa **ICMP**, Fraggle usa **UDP**. Ambos usan amplificación por broadcast.

---

### PROTOCOL ATTACKS — COMPREHENSIVE TABLE

|Attack|Description|Key Detail|
|---|---|---|
|SYN Flood|TCP SYN enviado con IP de origen falsa; el servidor espera un ACK que nunca llega|Agota tablas de estado de conexión; explota el three-way handshake de TCP|
|Fragmentation Attack|Gran cantidad de paquetes fragmentados de 1500 bytes enviados al objetivo|La víctima no puede reensamblar; puede evadir firewalls, IDS/IPS|
|Spoofed Session Flood|Sesión TCP falsa establecida usando paquetes SYN, ACK y RST o FIN|Agota tablas de sesión sin tráfico legítimo|
|TCP SACK Panic|Ataque exclusivo de Linux que usa paquetes SACK malformados con MSS incorrecto|Causa un integer overflow (desbordamiento de entero) en el socket buffer de Linux; kernel panic con paquetes de tan solo 48 bytes|

MEMORY HOOK (SYN FLOOD):
**SYN = "half-open" — el servidor abre pero nunca cierra porque el ACK nunca llega**

> ⚠️ *Trampa de examen:* TCP SACK Panic afecta **solo a Linux** y funciona con paquetes de tan solo **48 bytes**.

---

### APPLICATION-LAYER ATTACKS — COMPREHENSIVE TABLE

|Attack|Description|Key Detail|
|---|---|---|
|HTTP GET Flood|Inunda el objetivo con solicitudes HTTP GET usando cabeceras con retardo de tiempo para mantener las conexiones abiertas|Agota hilos y memoria del servidor web|
|HTTP POST Flood|Inunda el objetivo con solicitudes HTTP POST con payloads grandes|Agota recursos de procesamiento del lado del servidor|
|Slowloris|Abre muchas conexiones HTTP parciales al objetivo, envía cabeceras parciales para mantenerlas vivas|Una sola máquina puede derribar un servidor; mantiene conexiones abiertas indefinidamente|
|R.U.D.Y. (R-U-Dead-Yet)|Usa ataques slow POST con campos de cabecera con retardo de tiempo|Mantiene sesiones HTTP abiertas enviando datos de formulario byte por byte|
|HULK (HTTP Unbearable Load King)|Genera solicitudes HTTP únicas y aleatorias para evadir el caching|Ataca directamente la capa de aplicación; evita la detección|
|Multi-Vector DDoS|Combina ataques volumétricos + de protocolo + de capa de aplicación simultáneamente|El más difícil de mitigar porque ataca varias capas a la vez|
|Peer-to-Peer|Abusa de redes P2P (por ejemplo, DC++) para redirigir tráfico hacia la víctima|No se necesita botnet — usuarios legítimos de P2P inundan el objetivo sin saberlo|

MEMORY HOOK (SLOW ATTACKS):
**Slowloris = cabeceras parciales, R.U.D.Y. = slow POST — ambos mantienen conexiones abiertas para siempre**

> ⚠️ *Trampa de examen:* Slowloris es devastador porque funciona con **ancho de banda mínimo** — una sola máquina puede derribar servidores grandes.

---

### OTHER ATTACK TYPES — COMPREHENSIVE TABLE

|Attack|Description|Key Detail|
|---|---|---|
|Pulse Wave DDoS|Ráfagas repetitivas de paquetes como pulsos a intervalos regulares (por ejemplo, cada 10 minutos)|La recuperación entre pulsos es casi imposible; interrupción sostenida|
|Zero-Day DDoS|Explota vulnerabilidades sin parche y sin protección conocida|No hay firmas ni parches disponibles al momento del ataque|
|Permanent DoS (Phlashing)|Envía actualizaciones falsas de firmware/hardware que causan daño físico irreversible|A diferencia de otros DoS, el daño persiste después de que el ataque termina|
|Ransom DDoS|El atacante amenaza o lanza DDoS a menos que se pague un rescate|Táctica de extorsión combinada con capacidad de DDoS|
|DRDoS (Distributed Reflection DoS)|Ataque falsificado que usa múltiples máquinas intermediarias y secundarias para reflejar tráfico|Múltiples servicios intermediarios amplifican el ataque hacia la víctima|

> ⚠️ *Trampa de examen:* Phlashing causa **daño permanente al hardware** — no es una inundación de tráfico, es un **ataque de firmware**.

---

## OBJECTIVE 03 — DDoS ATTACK TOOLS

### DDoS ATTACK TOOL KITS

|Tool|Description|
|---|---|
|LOIC (Low Orbit Ion Cannon)|Herramienta de código abierto para DoS/DDoS; soporta floods de HTTP, UDP, TCP; usada originalmente por Anonymous|
|HOIC (High Orbit Ion Cannon)|Sucesor de LOIC; usa "booster scripts" (scripts de refuerzo) basados en JavaScript para mayor volumen de ataque|
|HULK (HTTP Unbearable Load King)|Genera solicitudes HTTP GET aleatorias para evadir el caching; ataca la capa de aplicación|
|Slowloris|Mantiene muchas conexiones abiertas con solicitudes HTTP parciales; bajo ancho de banda, alto impacto|
|UFO Net|Herramienta de botnet DDoS; usa C2 basado en HTTP para distribución de comandos|
|ISB (I'm So Bored)|Soporta ataques flood de HTTP, UDP, TCP e ICMP|
|UltraDDOS-v2|Herramienta DDoS con soporte para múltiples vectores de ataque|

> ⚠️ *Trampa de examen:* HULK es tanto un **tipo de ataque** como un **nombre de herramienta** — conoce la diferencia. La herramienta genera solicitudes aleatorias para evadir la detección.

---

## OBJECTIVE 04 — DoS/DDoS COUNTERMEASURES

### DDoS DETECTION TECHNIQUES

|Technique|Description|
|---|---|
|Activity Profiling|Establecer una línea base de patrones normales de flujo de red; detectar anomalías que se desvían del promedio|
|Sequential Change-Point Detection|Monitorear tráfico filtrado por direcciones IP y flujo a lo largo del tiempo; identificar cambios bruscos|
|Wavelet-Based Signal Analysis|Analizar componentes espectrales del tráfico de red para detectar firmas de ataque|

> 🧠 *Para recordar:* **Profiling = línea base, Change-point = cambio, Wavelet = espectro**

---

### DDoS COUNTERMEASURES TABLE

|Countermeasure|Purpose|
|---|---|
|Activity Profiling|Establecer una línea base de tráfico normal para detectar anomalías|
|Sequential Change-Point Detection|Identificar cambios bruscos de tráfico por IP y flujo a lo largo del tiempo|
|Wavelet-Based Signal Analysis|Detectar ataques analizando componentes espectrales del tráfico|
|Blumira (Honeypot)|Sistema señuelo que detecta y analiza tráfico de ataque para extracción de firmas|

---

### GENERAL DEFENSE STRATEGIES

|Strategy|Description|
|---|---|
|Rate Limiting|Limitar el número de solicitudes por dirección IP|
|Traffic Filtering|Descartar tráfico de IPs o patrones conocidos como maliciosos|
|Anycast Network|Distribuir tráfico de ataque a través de múltiples centros de datos|
|ISP-Level Scrubbing|Desviar el tráfico a scrubbing centers (centros de limpieza) antes de que llegue al objetivo|
|Redundancy|Desplegar múltiples servidores y rutas de red para conmutación por fallo|
|Patch Management|Mantener los sistemas actualizados para prevenir ataques Zero-Day y Phlashing|

MEMORY HOOK (DEFENSE LAYERS):
**Rate → Filter → Anycast → Scrub → Redundancy → Patch**

---

## DDoS CASE STUDY — HTTP/2 RAPID RESET

|Item|Detail|
|---|---|
|Attack Name|HTTP/2 "Rapid Reset"|
|Target|Google Cloud (2023)|
|Technique|Abusó del stream multiplexing de HTTP/2 — hasta 100 streams activos a través de una conexión TCP|
|Impact|Ataque DDoS récord en ese momento|
|Why It Worked|Los atacantes crearon y reiniciaron streams rápidamente, abrumando los recursos del servidor por conexión|

> 🧠 *Para recordar:* **HTTP/2 Rapid Reset = 100 streams por TCP, crear rápido, reiniciar rápido, el servidor muere**

> ⚠️ *Trampa de examen:* Rapid Reset apunta **específicamente a HTTP/2** — explota la función de multiplexing del protocolo, no el ancho de banda.

---

## Extras de examen (Boson Practice Test)

|Concepto|Qué recordar|
|---|---|
|Slowloris|Ataque DDoS que abre muchas conexiones HTTPS con cabeceras parciales para mantenerlas vivas|
|HULK|HTTP Unbearable Load King — DDoS que evade el caching y la detección por IDS|

---

## Flashcards

|Term|Quick Memory|
|---|---|
|DoS|Una sola fuente, un solo objetivo|
|DDoS|Múltiples fuentes (botnet), un solo objetivo|
|Botmaster|Controla la botnet|
|C2 Server|Retransmite comandos del botmaster a los bots|
|Bot / Zombie|Máquina comprometida en la botnet|
|Smurf|ICMP a broadcast, la víctima recibe todas las respuestas|
|Fraggle|UDP ECHO a broadcast, la víctima recibe todas las respuestas|
|SYN Flood|Conexiones TCP half-open agotan tablas de estado|
|Slowloris|Solicitudes HTTP parciales mantienen conexiones abiertas para siempre|
|TCP SACK Panic|Panic del kernel de Linux por paquetes SACK malformados (48 bytes)|
|Phlashing|Daño permanente al hardware por actualizaciones de firmware fraudulentas|
|HTTP/2 Rapid Reset|Abusa de stream multiplexing para abrumar servidores (Google 2023)|
|Pulse Wave|Intervalos de ráfagas regulares, imposible recuperarse entre pulsos|
|Ransom DDoS|Extorsión — paga o serás atacado|
|DRDoS|Refleja tráfico falsificado a través de servicios intermediarios|

---

## Preguntas de práctica

---

|Q#|Question|Answer|
|---|---|---|
|1|¿Cuál es la diferencia clave entre DoS y DDoS?|DoS usa una sola fuente; DDoS usa múltiples fuentes distribuidas (botnet)|
|2|¿Qué técnica de propagación usa una lista precompilada de objetivos vulnerables?|Hit-list scanning|
|3|¿Qué ataque DDoS dirige al kernel de Linux enviando paquetes SACK malformados?|TCP SACK Panic|
|4|¿Qué protocolo usa un ataque Smurf para la amplificación?|ICMP (solicitud ECHO a dirección de broadcast)|
|5|¿Qué técnica analiza componentes espectrales del tráfico de red para detectar ataques?|Wavelet-based signal analysis|
