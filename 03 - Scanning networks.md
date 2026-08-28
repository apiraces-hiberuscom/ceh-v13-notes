# MODULE 03 — SCANNING NETWORKS

|Item|Memorize|
|---|---|
|Module Number|03|
|Module Name|Scanning Networks|
|Focus|TCP flags, host discovery, port scanning, Nmap, Hping3, OS/banner discovery|

---

## LEARNING OBJECTIVES (DO NOT SKIP — EXAM LIST)

|Objective #|Description|
|---|---|
|01|Comprender las flags de comunicación TCP|
|02|Explicar técnicas de escaneo para descubrimiento de hosts|
|03|Identificar métodos de descubrimiento de puertos y servicios|
|04|Describir tipos de escaneo de puertos y respuestas de escaneo|
|05|Usar Nmap para escaneo|
|06|Usar Hping3 para escaneo|
|07|Realizar descubrimiento de versiones de servicios|
|08|Realizar descubrimiento de SO y banner grabbing|
|09|Explicar técnicas para escaneo más allá de firewalls|

---

# TCP COMMUNICATION FLAGS

|Flag|Meaning|
|---|---|
|SYN|Inicia conexión TCP, flag SYN inicial|
|ACK|Confirma recepción del flag SYN, se establece en todos los segmentos después del SYN inicial|
|FIN|Cierra comunicaciones de forma elegante|
|RST|Fuerza la terminación de comunicaciones|
|PSH|Fuerza la entrega de datos|
|URG|Marca datos como prioritarios, enviado fuera de banda|

Tools: Metasploit, Nmap, Hping3, Colasoft Packet Builder

---

# HPING3 — COMMAND EXAMPLES

|Command|Description|
|---|---|
|`hping3 -1 0.0.0.0`|ICMP ping (ping sweep)|
|`hping3 -A 10.10.10.10 -p 80`|ACK scan on port 80|
|`hping3 -2 0.0.0.0 -p 80`|UDP scan port 80|
|`hping3 10.10.10.10 -Q -p 139`|Collecting initial sequence number|
|`hping3 -S 10.10.10.10 -p 80 --tcp-timestamp`|SYN scan with TCP timestamp|
|`hping3 -8 50-60 -S 10.10.10.10 -V`|SYN scan on ports 50-60|
|`hping3 -F -P -U 10.10.10.10 -p 80`|FIN, PUSH and URG scan|
|`hping3 -1 10.0.1.x --rand-dest -I eth0`|Scan entire subnet for live host|
|`hping3 -9 HTTP -I eth0`|Intercept traffic containing HTTP signature|
|`hping3 -S 10.10.1.1 -a 192.168.1.254 -p 22 --flood`|SYN flood a victim|

---

# SCANNING TECHNIQUES FOR HOST DISCOVERY

**Base command:** `nmap -sn` (host discovery only)

|Technique|Command|Notes|
|---|---|---|
|ARP Ping Scan|`nmap -sn -PR 192.168.1.0/24`|Solo local; no se puede usar hping3|
|UDP Ping Scan|`nmap -sn -PU`|Envía probes UDP|
|ICMP Echo Ping Scan|`nmap -sn -PI`|`-L` número de pings, `-T` tiempo de espera del ping|
|ICMP Timestamp Ping Scan|`nmap -sn -PP`|Obtiene la hora actual de la máquina|
|ICMP Address Mask Ping Scan|`nmap -sn -PM`|Obtiene la máscara de subred|
|TCP SYN Ping Scan|`nmap -sn -PS`|Detecta máquina en línea sin crear conexión|
|TCP ACK Ping Scan|`nmap -sn -PA`|Usa puerto predeterminado 80; aumenta las posibilidades de pasar el firewall|
|IP Protocol Ping Scan|`nmap -sn -PO`|Envía diferentes paquetes de prueba; cualquier respuesta = host en línea|

---

# PING SWEEP TOOLS

|Tool|
|---|
|Angry IP Scanner|
|SolarWinds Engineer's Toolset (https://www.solarwinds.com)|
|NetScanTools Pro (https://www.netscantools.com)|
|Colasoft Ping Tool (https://www.colasoft.com)|
|Advanced IP Scanner (https://www.advanced-ip-scanner.com)|
|OpUtils (https://www.manageengine.com)|

---

# PORT AND SERVICE DISCOVERY

## PORT RANGES

|Type|Range|
|---|---|
|Well-Known Ports|0–1023|
|Registered Ports|1024–49141|
|Dynamic Ports|49152–65535|

## MUST-KNOW PORTS

|Port|Service|
|---|---|
|20/21|FTP|
|22|SSH|
|23|Telnet|
|25|SMTP|
|53|DNS|
|67/68|DHCP|
|69|TFTP|
|80|HTTP|
|110|POP3|
|123|NTP|
|135|RPC|
|137–139|NetBIOS|
|143|IMAP|
|161|SNMP|
|389|LDAP|
|443|HTTPS|
|445|SMB|
|500|ISAKMP|
|514|Syslog|
|1433|MSSQL|
|3306|MySQL|
|3389|RDP|
|5060|SIP|

---

# PORT SCAN TYPES

|Scan Type|Description|Nmap Switch|
|---|---|---|
|TCP Connect / Full Open|Si el puerto está abierto, el handshake tiene éxito; si está cerrado, se obtiene RST|`nmap -sT -v`|
|Stealth (Half-Open)|Reinicia la conexión TCP abruptamente, no completa el handshake; más sigiloso que -sT|`nmap -sS`|
|Inverse TCP|Envía combinaciones no estándar de flags TCP para evitar IDS; no es efectivo contra Windows, se usa para Unix|Various|
|Xmas|Flags FIN, URG y PUSH establecidas para enviar trama TCP|`nmap -sX`|
|FIN Scan|Envía solo el flag FIN|`nmap -sF`|
|NULL Scan|No se establecen flags|`nmap -sN`|
|TCP Maimon|Envía flags FIN y ACK; si el puerto está cerrado, responde con RST|`nmap -sM`|
|ACK Flag Probe|Envía flag ACK y examina el TTL; si RST < 64 bytes, el puerto está abierto|`nmap -ttl time target`|
|IDLE/IPID|Envía dirección de origen falsificada al objetivo usando un host zombie de terceros|`nmap -sI zombieIP targetIP`|
|UDP|Envía datagrama al puerto; si hay respuesta, está cerrado; sin respuesta, probablemente está abierto|`nmap -sU`|
|SSDP / UpnP|Escanea dispositivos habilitados para UPnP|`nmap -sS -A -f`|

EXAM TRAP:  
El escaneo IDLE/IPID usa un **host zombie** para ocultar la identidad del escáner.

---

# SCAN RESPONSES

|Scan|Open|Closed|Filtered|Unfiltered (Reachable Path)|
|---|---|---|---|---|
|-sT|SYN-ACK|RST|No reply / ICMP unreachable||
|-sS|SYN-ACK|RST|No reply / ICMP unreachable||
|-sA||||No Reply|RST|
|-sI|IPID increases (RST sent by zombie)|IPID unchanged|Unclear / odd changes||
|-sU|No response|ICMP unreachable (type 3, code 3)|Other ICMP unreachable / no reply||
|-sN|No response|RST|ICMP||
|-sF|No response|RST|ICMP||
|-sX|No response|RST|ICMP||
|-sM|No response|RST|ICMP||

---

# NMAP SCAN TYPES

|Switch|Description|
|---|---|
|-sA|ACK scan|
|-sF|FIN scan|
|-sI|IDLE (Zombie) scan|
|-sL|List (DNS resolution only) scan|
|-sN|NULL scan|
|-sO|Protocol scan|
|-sP|Ping scan *(old, now -sn)*|
|-sR|RPC scan|
|-sS|SYN (Stealth / Half-open) scan|
|-sT|TCP Connect scan|
|-sW|Window scan|
|-sX|XMAS scan|

---

# HOST DISCOVERY SWITCHES

|Switch|Description|
|---|---|
|-PI|ICMP Echo ping|
|-PS|TCP SYN ping|
|-PT|TCP ping|
|-PO|IP Protocol ping (no TCP/UDP/ICMP)|

---

# OUTPUT OPTIONS

|Switch|Description|
|---|---|
|-oN|Normal text output|
|-oX|XML output|

---

# TIMING TEMPLATES

|Switch|Speed|Description|
|---|---|---|
|-T0|Serial|Slowest, paranoid|
|-T1|Serial|Very slow|
|-T2|Serial|Polite|
|-T3|Parallel|Normal speed|
|-T4|Parallel|Fast|
|-T5|Parallel|Insane speed|

---

# HPING3 SWITCHES

## SCAN / MODE SWITCHES

|Switch|Description|Example|
|---|---|---|
|`-1`|ICMP mode (ICMP ping)|`hping3 -1 172.17.15.12`|
|`-2`|UDP mode|`hping3 -2 192.168.12.55 -p 80`|
|`-8`|Scan mode (port scan); accepts single, range, or `all`|`hping3 -8 20-100`|
|`-9`|Listen mode; triggers on a signature|`hping3 -9 HTTP -I eth0`|
|`--flood`|Sends packets as fast as possible (no reply display); useful for DoS simulation|`hping3 -S 192.168.10.10 -p 22 --flood`|
|`-Q`|Collect TCP sequence numbers to analyze predictability|`hping3 172.17.15.12 -Q -p 139 -s`|

## TCP FLAG SWITCHES

|Switch|Description|
|---|---|
|`-F`|Set FIN flag|
|`-S`|Set SYN flag|
|`-R`|Set RST flag|
|`-P`|Set PSH flag|
|`-A`|Set ACK flag|
|`-U`|Set URG flag|
|`-X`|Set Xmas (FIN + PSH + URG) flags|
|`-p`|Port|
|`-c`|Packet count|
|`-i`|Interval|
|`--traceroute`|TCP traceroute|

---

# SERVICE VERSION DISCOVERY

|Item|Memorize|
|---|---|
|Command|`nmap -sV`|
|Purpose|Identifica versiones de servicios ejecutándose en puertos abiertos|

---

# OS DISCOVERY / BANNER GRABBING

## ACTIVE BANNER GRABBING — TTL VALUES

|Operating System|TTL Value|
|---|---|
|Linux|64|
|Windows|128|
|FreeBSD|64|
|OpenBSD|255|
|Cisco|255|
|Solaris|255|
|AIX|255|

## NMAP OS DISCOVERY

|Command|Description|
|---|---|
|`nmap -O`|Descubrimiento de SO|
|`nmap --script` or `-sC`|Nmap Scripting Engine|
|`nmap -6 -O <target>`|Descubrimiento de SO IPv6|

Spoofing tools: Hping, Scapy, Komodia, Ettercap, Cain
G-zapper: removes Google tracking cookie

---

# SCANNING BEYOND FIREWALL

|Technique|Example / Detail|
|---|---|
|Packet Fragmentation|`nmap -sS -t4 -A -f -v`|
|Source Routing||
|Source Port Manipulation||
|IP Address Decoy||
|IP Address Spoofing|`hping3 www.certifiedhacker.com -a 7.7.7.7`|
|MAC Address Spoofing||
|Creating Custom Packets||
|Randomizing Host Order||
|Sending Bad Checksums||
|Proxy Servers||
|Anonymizers||

---

## EXAM EXTRAS (Boson Practice Test)

### NMAP SCAN TYPES — MAIMON, FIN, XMAS, ACK

|Scan|Command|Description|
|---|---|---|
|Maimon scan|`nmap -sM`|Envía probes FIN/ACK|
|FIN scan|`nmap -sF`|Si el puerto está abierto, paquete descartado; si está cerrado, se envía RST|
|XMAS scan|`nmap -sX`|Envía flags FIN, PSH y URG|
|ACK scan|`nmap -sA`|Determina si el puerto está filtrado o no filtrado|

---

### TCP ACK PING

|Item|Memorize|
|---|---|
|Command|`nmap -sn -PA`|
|Purpose|Detectar dispositivos activos detrás de un firewall|

---

### NMAP — DECOY SCAN

|Item|Memorize|
|---|---|
|Command|`nmap -D`|
|Purpose|Dirección IP de origen falsificada para ocultar el escáner|

---

### HPING3

|Item|Memorize|
|---|---|
|Command|`hping3 -c 1`|
|Purpose|Envía una sola solicitud ICMP echo; no funcionará en Windows (descarta paquetes ICMP echo no dirigidos a la IP del dispositivo)|

---

### TTL VALUES

|OS|TTL Value|
|---|---|
|Linux|64|
|Windows|128|
|Network devices|255|

---

### ZOMBIE ATTACK (IDLE SCAN)

|Item|Memorize|
|---|---|
|Command|`nmap -sI`|
|Purpose|Usa el IPID del host zombie para verificar puertos abiertos/cerrados|

---

### NMAP ADVANCED COMMANDS

|Command|Description|
|---|---|
|`nmap -sI`|Idle scan — IPID devuelto por el host zombie|
|`nmap -sF`|FIN scan|
|`nmap -g`|Spoof port number (alternate: `--source-port`); only for SYN/UDP scans|
|`nmap -A`|Aggressive scan|
|`nmap -D`|Decoy scan or spoofed source address scan|
|`nmap -f`|Fragmented IP packets to avoid IDS|

---

# EXAM FLASHCARDS

|Term|Definition|
|---|---|
|SYN|Flag que inicia la conexión TCP|
|ACK|Flag que confirma la recepción de datos|
|RST|Flag que fuerza la terminación de la conexión|
|FIN|Flag que cierra elegantemente una conexión|
|Stealth Scan|Escaneo half-open (-sS) que no completa el handshake TCP|
|Xmas Scan|Envía flags FIN + URG + PSH (-sX)|
|IDLE/IPID Scan|Usa un host zombie para falsificar la dirección de origen (-sI)|
|UDP Scan|Envía datagramas; sin respuesta probablemente significa abierto (-sU)|
|ARP Ping Scan|Descubrimiento de host solo local usando solicitudes ARP (-PR)|
|TCP SYN Ping|Detecta host en línea sin completar la conexión (-PS)|
|ICMP Echo Ping|Ping tradicional usando solicitud ICMP echo (-PI)|
|-T0|Timing template paranoico, el más lento|
|-T5|Timing template insano, el más rápido|
|Banner Grabbing|Técnica para identificar SO y servicios a través de TTL y respuestas|
|Packet Fragmentation|Divide paquetes en fragmentos más pequeños para evadir firewalls (-f)|

---

# PRACTICE QUESTIONS

**Q1:** What Nmap switch performs a SYN (stealth) scan?  
**A:** `-sS`

**Q2:** Which scanning technique uses a third-party zombie host to hide the scanner's real IP?  
**A:** IDLE/IPID scan (`-sI`)

**Q3:** What is the default TTL value for a Windows operating system?  
**A:** 128

**Q4:** What is the range of Well-Known Ports?  
**A:** 0–1023

**Q5:** Which Hping3 flag sets the FIN + PSH + URG flags simultaneously?  
**A:** `-X` (Xmas mode)
