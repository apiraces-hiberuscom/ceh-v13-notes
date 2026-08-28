# MODULE 08 — NETWORK SNIFFING

|Item|Memorize|
|---|---|
|Module Number|08|
|Module Name|Network Sniffing|
|Focus|Conceptos de packet sniffing, métodos de sniffing, protocolos, herramientas, contramedidas|

---

## LEARNING OBJECTIVES (DO NOT SKIP — EXAM LIST)

|Objective #|Description|
|---|---|
|01|Comprender los conceptos y tipos de packet sniffing|
|02|Explicar las técnicas de ARP poisoning y spoofing|
|03|Describir VLAN hopping y ataques STP|
|04|Identificar protocolos vulnerables al sniffing|
|05|Usar Wireshark y otras herramientas de sniffing|
|06|Explicar DNS poisoning y ataques DHCP|
|07|Implementar contramedidas y detección de sniffing|

---

# OBJECTIVE 01 — PACKET SNIFFING CONCEPTS

---

## PACKET SNIFFING — CORE DEFINITION

|Term|Definition|
|---|---|
|Packet Sniffing|Monitoreo y captura de paquetes de datos que pasan por una red determinada utilizando una aplicación de software o un dispositivo de hardware|
|Capability|Permite a un atacante observar y atacar una red completa desde cualquier punto dado|

MEMORY HOOK:
**Sniffing = captura pasiva de todo el tráfico**

---

## PROMISCUOUS MODE

|Item|Memorize|
|---|---|
|Promiscuous Mode|Modo de NIC que escucha TODOS los datos en su segmento|
|Purpose|El atacante cambia la NIC a modo promiscuo para capturar todos los paquetes|
|Requirement|Funciona directamente solo en entornos de Ethernet compartido|

EXAM TRAP:
El modo promiscuo captura todos los paquetes **independientemente de la MAC de destino**.

---

## ETHERNET ENVIRONMENTS

|Environment|Behavior|Sniffing Impact|
|---|---|---|
|Shared Ethernet|Un solo bus conecta a todos los hosts para competir por el ancho de banda (basado en hub)|La NIC en modo promiscuo captura TODO el tráfico automáticamente|
|Switched Ethernet|El switch mantiene una tabla ARP — mapea MAC a puerto; los paquetes se envían solo al equipo destino|El modo promiscuo por sí solo NO funciona; requiere métodos de ataque adicionales|

MEMORY HOOK:
**Hub = todos ven todo; Switch = entrega selectiva**

---

# OBJECTIVE 02 — SNIFFING METHODS FOR SWITCHED NETWORKS

---

## ARP SPOOFING / POISONING

|Item|Memorize|
|---|---|
|ARP Protocol|Sin estado — la máquina puede enviar una respuesta ARP incluso sin haber sido preguntada|
|Attack|Mensajes ARP falsificados que asocian la MAC del atacante con la IP de otro host|
|Result|Permite una posición Man-in-the-Middle (MITM)|
|Tools|arpspoof, Habu|
|Defence|Dynamic ARP Inspection (DAI)|
|Detection|Capsa portable network analyzer, Wireshark, OPUtils, Netspionage|

---

## MAC FLOODING

|Item|Memorize|
|---|---|
|Layer|Layer 2|
|Technique|El atacante envía direcciones MAC falsas hasta que la tabla CAM se llena|
|Result|El switch comienza a funcionar como un HUB — transmite TODOS los paquetes a todas partes|
|Command|macof -i eth0|

EXAM TRAP:
MAC flooding convierte un **switch en un hub**.

---

## MAC SPOOFING / DUPLICATING

|Item|Memorize|
|---|---|
|Technique|Suplantar una dirección MAC para conectarse a un puerto de switch|
|Method (Windows)|Cambiar MAC en la configuración del adaptador|
|Tool|MAC Address Changer|
|Defence|DHCP snooping binding table, Dynamic ARP Inspection, IP Source Guard|

---

## ICMP ROUTER DISCOVERY PROTOCOL (IDPR) SPOOFING

|Item|Memorize|
|---|---|
|Function|Permite al host descubrir la IP de routers activos en su subred|
|Attack|Mensajes de descubrimiento de router ICMP falsificados redirigen el tráfico|

---

## VLAN HOPPING

|Technique|Description|Defence|
|---|---|---|
|Switch Spoofing|Un switch ilegal crea un trunk entre el switch legítimo y el ilegal. Solo es posible cuando la interfaz está configurada con "dynamic auto", "dynamic desirable" o trunk mode|Configurar los puertos como puertos de acceso; deshabilitar la negociación de trunk|
|Double Tagging|Agrega y modifica las etiquetas 802.1Q externa e interna en la trama Ethernet; el tráfico fluye a través de cualquier VLAN en la red (el atacante quiere llegar a la etiqueta interna)|Establecer la VLAN por defecto como un VLAN ID no utilizado; etiquetar explícitamente todos los puertos VLAN en todos los trunks|

---

## STP ATTACK (SPANNING TREE PROTOCOL)

|Item|Memorize|
|---|---|
|STP Purpose|Eliminar bucles en la red|
|Attack|Se introduce un switch ilegal con una prioridad más baja que cualquier otro switch|
|Result|El ilegal se convierte en el root bridge — TODO el tráfico fluye a través de él|
|Defence|BPDU Guard, Root Guard, Loop Guard, UDLD (Unidirectional Link Detection)|

MEMORY HOOK:
**STP attack = el root bridge ilegal roba todo el tráfico**

---

# OBJECTIVE 03 — TYPES OF SNIFFING

---

## PASSIVE vs ACTIVE SNIFFING

|Type|Definition|Characteristics|
|---|---|---|
|Passive Sniffing|Observar tráfico sin enviar ningún paquete|Indetectable; solo funciona en medios compartidos (hubs)|
|Active Sniffing|Inyectar tráfico en la red para buscar tráfico|Detectable; funciona en redes con switches|

---

## ACTIVE SNIFFING SUB-TYPES

|Sub-Type|Description|
|---|---|
|MAC Flooding|Sobrecarga la tabla CAM para forzar el modo de transmisión|
|DNS Poisoning|Redirige las consultas DNS a servidores controlados por el atacante|
|ARP Poisoning|Fuerza el tráfico a través del atacante mediante respuestas ARP falsificadas|
|DHCP Attacks|Agota el pool de direcciones o introduce un servidor DHCP ilegal|
|Switch Port Stealing|Envía paquetes ARP falsificados usando la MAC de la víctima para robar el puerto|
|Spoofing Attack|Suplantación de identidad general para redirigir el tráfico|

---

# OBJECTIVE 04 — PROTOCOLS VULNERABLE TO SNIFFING

---

## VULNERABLE PROTOCOLS TABLE

|Protocol|Full Name|Vulnerability|
|---|---|---|
|Telnet|—|Transmite datos en texto claro|
|Rlogin|—|Transmite datos en texto claro|
|HTTP|HyperText Transfer Protocol|Sin cifrado por defecto|
|SNMP|Simple Network Management Protocol|Community strings en texto claro|
|SMTP|Simple Mail Transfer Protocol|Contenido del correo en texto claro|
|NNTP|Network News Transfer Protocol|Datos de grupo de noticias en texto claro|
|POP|Post Office Protocol|Recuperación de correo en texto claro|
|FTP|File Transfer Protocol|Credenciales y datos en texto claro|
|IMAP|Internet Message Access Protocol|Acceso a correo en texto claro|
|TFTP|Trivial File Transfer Protocol|Sin autenticación; datos en texto claro|

MEMORY HOOK:
**Si no hay cifrado = vulnerable al sniffing**

---

# OBJECTIVE 05 — HARDWARE PROTOCOL ANALYZERS

---

## HARDWARE SNIFFERS

|Device|Key Feature|
|---|---|
|Xgig 1000 32/128 G|Captura en línea y no intrusiva, auto-negociación, entrenamiento de enlace, corrección de errores hacia adelante|
|SierraNet M1288|Análisis de fabrics de canal de fibra|

---

## SPAN PORT

|Item|Memorize|
|---|---|
|SPAN|Switched Port Analyzer — característica de Cisco|
|Also Known As|Port Mirroring|
|Function|Duplica el tráfico de un puerto/VLAN a otro para monitoreo|
|Risk|Si un atacante se conecta al puerto SPAN, puede comprometer toda la red|

EXAM TRAP:
SPAN = **port mirroring**, no es una herramienta de sniffing en sí.

---

# WIRETAPPING

---

## WIRETAPPING — DEFINITION

|Item|Memorize|
|---|---|
|Wiretapping|Intercepción oficial o no oficial de líneas telefónicas para grabar conversaciones|
|Types|Intercepción de línea directa, intercepción de radio|

---

## ACTIVE vs PASSIVE TAPPING

|Type|Definition|
|---|---|
|Active Tapping|Posición MITM — inyectar o alterar datos en tránsito|
|Passive Tapping|Vigilancia u escucha — observar sin modificación|

---

# OBJECTIVE 06 — DHCP ATTACKS

---

## DHCP ATTACKS TABLE

|Attack|Technique|Tools|Defence|
|---|---|---|---|
|DHCP Starvation|Envía un gran número de solicitudes al servidor DHCP agotando el pool de direcciones; el servidor no puede asignar configuraciones a nuevos clientes|Yersinia, dhcpStarvation.py, Metasploit, Hyenae|Habilitar port security, DHCP filtering|
|Rogue DHCP Server|Ataque MITM; introduce un servidor DHCP ilegal para que los paquetes lleguen a él primero; puede asignar una IP que sirve como puerta de enlace predeterminada del cliente. Establecer la conexión entre la interfaz y el ilegal como no confiable|mitm6, Ettercap, Gobbler|DHCP snooping, port security|

MEMORY HOOK:
**Starvation = agota el pool; Rogue = servidor falso**

---

# OBJECTIVE 07 — DNS POISONING TECHNIQUES

---

## DNS POISONING TABLE

|Technique|Description|
|---|---|
|Intranet DNS Spoofing|Usa ARP poisoning para redirigir consultas DNS internas|
|Internet DNS Spoofing|Servidor DNS ilegal con IP estática; envía un Troyano que cambia las entradas DNS en la PC de la víctima|
|Proxy Server DNS Poisoning|El Troyano modifica la configuración de proxy en Internet Explorer o cualquier navegador|
|DNS Cache Poisoning|Alterar o agregar registros DNS falsificados al resolvedor DNS|
|SAD DNS Attack|Inyectar entradas DNS dañinas en la caché para desviar el tráfico a servidores del atacante; explota canales laterales y fallas en dnsmasq, unbound y BIND|

---

## DNS POISONING — TOOLS AND DEFENCE

|Item|Details|
|---|---|
|Tools|DerpNSpoof, Deserter, PolarDNS, Ettercap, Evilgrade, DNS Poisoner|
|Defence|DNSSEC, SSL|

MEMORY HOOK:
**Intranet = basado en ARP; Internet = DNS ilegal + Troyano; Cache = falsificar registros del resolvedor**

---

# WIRESHARK FILTERS — EXAM CRITICAL

---

|Filter / Expression|Description|
|---|---|
|tcp.port == 23|Monitoreo de puerto específico (Telnet)|
|ip.addr == 192.168.1.100|Filtrar tráfico hacia/desde una máquina específica|
|ip.addr == 192.168.1.100 && tcp.port == 23|Máquina + puerto específico combinados|
|tcp.port == 23 ip.addr == 10.0.0.4 or ip.addr == 10.0.0.5|Filtrar por múltiples direcciones|
|ip.addr == 10.0.0.4|Filtrar por dirección IP|
|ip.dst == 10.0.1.50 && frame_len > 400|Filtro de destino con longitud de trama|
|tcp.flags.reset == 1|Mostrar todos los TCP resets|
|udp.contains|Establecer filtro para valores hexadecimales|
|http.request|Muestra todas las solicitudes HTTP GET|
|tcp.analysis.retransmission|Muestra todas las retransmisiones en el rastreo|
|tcp contains traffic|Muestra todos los paquetes TCP que contienen la palabra "traffic"|
|!(arp or icmp or dns)|Enmascara ARP, ICMP, DNS u otros protocolos|
|tcp.port == 4000|Establece filtro para cualquier paquete TCP con 4000 como puerto origen o destino|
|tcp.port eq 25 or icmp|Muestra solo tráfico SMTP (puerto 25) e ICMP|
|ip.src == 192.168.0.0/16 and ip.dst == 192.168.0.0/16|Muestra tráfico en la LAN entre estaciones de trabajo y servidores|

---

# SNIFFING TOOLS

---

|Tool|Type|
|---|---|
|Capsa Portable Network Analyzer|Analizador de red portátil|
|OmniPeek|Analizador de red|
|Wireshark|Analizador de protocolos (usa WinPcap)|
|macof|Herramienta de MAC flooding (macof -i eth0)|

---

# SNIFFING COUNTERMEASURES

---

|Countermeasure|Purpose|
|---|---|
|Restringir el acceso físico a la red|Prevenir la conexión de dispositivos de sniffing no autorizados|
|Cifrado de extremo a extremo|Cifrar datos para que los paquetes capturados sean ilegibles|
|Agregar MAC a la caché ARP|Prevenir ARP spoofing mediante entradas estáticas|
|Dynamic ARP Inspection|Validar paquetes ARP contra la tabla de DHCP snooping|
|DHCP Snooping|Prevenir servidores DHCP ilegales y DHCP starvation|
|Port Security|Limitar direcciones MAC por puerto|
|BPDU / Root / Loop Guard|Prevenir ataques STP|
|Usar VPN|Cifrar tráfico en redes no confiables|
|Usar SSH en lugar de Telnet|Acceso remoto cifrado|

---

# HOW TO DETECT SNIFFING

---

## DETECTION METHODS TABLE

|Method|Description|
|---|---|
|IDS (Intrusion Detection System)|Monitorea actividad sospechosa de sniffing en la red|
|Promiscuous Mode Detection|Herramientas como nmap --script=sniffer-detect, NetScanToolsPro detectan NICs en modo promiscuo|

---

## SPECIFIC DETECTION TECHNIQUES

|Technique|Description|
|---|---|
|Ping Method|Enviar ping con dirección MAC incorrecta; si el host responde, puede estar haciendo sniffing (el modo promiscuo procesa todas las tramas)|
|DNS Method|Monitorear aumento de tráfico de red, búsquedas DNS inversas, o enviar solicitud ICMP a una dirección IP inexistente; los sniffer suelen realizar búsquedas DNS inversas|
|ARP Method|Enviar solicitud ARP de difusión a todos los nodos; solo un sniffer en modo promiscuo responderá a un ARP de difusión|

---

## EXAM EXTRAS (Boson Practice Test)

### ARP POISONING

|Item|Memorize|
|---|---|
|ARP poisoning|Asocia la MAC del atacante con la dirección IP de la víctima|

---

### DHCP STARVATION

|Item|Memorize|
|---|---|
|DHCP starvation|Suplantación de clientes DHCP para agotar el pool de direcciones|

---

# EXAM FLASHCARDS

---

|Term|Definition|
|---|---|
|Packet Sniffing|Monitoreo y captura de paquetes de datos que pasan por una red|
|Promiscuous Mode|Modo de NIC que captura todo el tráfico en el segmento sin importar el destino|
|Shared Ethernet|Red basada en hub donde todos los hosts compiten por el ancho de banda|
|Switched Ethernet|Red basada en switch que dirige el tráfico solo al puerto previsto|
|ARP Spoofing|Mensajes ARP falsificados que asocian la MAC del atacante con la IP de otro host|
|MAC Flooding|Sobrecarga la tabla CAM para que el switch transmita todo el tráfico como un hub|
|MAC Spoofing|Suplantar la dirección MAC de otro dispositivo para obtener acceso a la red|
|VLAN Hopping|Técnica para saltar entre VLANs usando switch spoofing o double tagging|
|Double Tagging|Agregar etiquetas 802.1Q duales para eludir la segmentación VLAN|
|STP Attack|Introducir un switch ilegal con prioridad más baja para convertirse en root bridge|
|DHCP Starvation|Agotar el pool de direcciones DHCP con solicitudes masivas falsas|
|Rogue DHCP Server|Servidor DHCP no autorizado que intercepta solicitudes de clientes|
|DNS Cache Poisoning|Inyectar registros DNS falsificados en la caché del resolvedor|
|SAD DNS Attack|Explotar fallas de canales laterales en software DNS para inyectar entradas maliciosas|
|SPAN Port|Switched Port Analyzer — característica de port mirroring de Cisco|

---

# PRACTICE QUESTIONS

---

**Q1:** ¿Qué sucede cuando la tabla CAM de un switch se llena con direcciones MAC falsas?

<details><summary>Answer</summary>El switch deja de aprender nuevas direcciones MAC y comienza a transmitir todo el tráfico entrante a cada puerto, funcionando efectivamente como un hub. Este es el mecanismo central de un ataque de MAC flooding.</details>

---

**Q2:** Un atacante envía respuestas ARP falsificadas para asociar su MAC con la IP de la puerta de enlace predeterminada. ¿Qué ataque es este y cuál es la principal defensa?

<details><summary>Answer</summary>Este es ARP spoofing/poisoning. La principal defensa es Dynamic ARP Inspection (DAI), que valida los paquetes ARP contra la tabla de vinculación de DHCP snooping.</details>

---

**Q3:** ¿Cuáles son las dos técnicas de VLAN hopping que un candidato CEH debe conocer, y cómo se defiende contra switch spoofing?

<details><summary>Answer</summary>Switch spoofing y double tagging. Se defiende contra switch spoofing configurando todos los puertos como puertos de acceso y deshabilitando la negociación de trunk (no usar dynamic auto, dynamic desirable o trunk mode).</details>

---

**Q4:** En Wireshark, ¿qué filtro muestra todas las solicitudes HTTP GET?

<details><summary>Answer</summary>http.request</details>

---

**Q5:** ¿Cuál es la diferencia clave entre passive sniffing y active sniffing?

<details><summary>Answer</summary>El passive sniffing no implica inyección de paquetes y es indetectable (funciona en medios compartidos/hubs). El active sniffing implica inyectar tráfico en la red (por ejemplo, ARP poisoning, MAC flooding) y es detectable (funciona en redes con switches).</details>

---
