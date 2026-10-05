# Módulo 03 — Scanning Networks

> **Enfoque:** flags TCP, host discovery, port scanning y sus respuestas, Nmap y Hping3, descubrimiento de servicios/SO (banner grabbing) y técnicas para escanear más allá del firewall.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
- [TCP COMMUNICATION FLAGS](#tcp-communication-flags)
- [HPING3 — COMMAND EXAMPLES](#hping3--command-examples)
- [SCANNING TECHNIQUES FOR HOST DISCOVERY](#scanning-techniques-for-host-discovery)
- [PING SWEEP TOOLS](#ping-sweep-tools)
- [PORT AND SERVICE DISCOVERY](#port-and-service-discovery)
- [PORT SCAN TYPES](#port-scan-types)
- [SCAN RESPONSES](#scan-responses)
- [NMAP SCAN TYPES](#nmap-scan-types)
- [HOST DISCOVERY SWITCHES](#host-discovery-switches)
- [OUTPUT OPTIONS](#output-options)
- [TIMING TEMPLATES](#timing-templates)
- [HPING3 SWITCHES](#hping3-switches)
- [SERVICE VERSION DISCOVERY](#service-version-discovery)
- [OS DISCOVERY / BANNER GRABBING](#os-discovery--banner-grabbing)
- [SCANNING BEYOND FIREWALL](#scanning-beyond-firewall)
- [Extras de examen (Boson Practice Test)](#extras-de-examen-boson-practice-test)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **TCP flags** — SYN inicia, ACK confirma, FIN cierra de forma ordenada, RST fuerza el cierre, PSH fuerza la entrega, URG marca datos prioritarios.
- **Port ranges** — well-known 0–1023, registered 1024–49151, dynamic 49152–65535.
- **`-sS` vs `-sT`** — SYN/stealth/half-open (no completa el handshake, envía RST) vs TCP connect/full open (completa el handshake); abierto = SYN-ACK, cerrado = RST.
- **Xmas / FIN / NULL / Maimon** — `-sX` = FIN+URG+PSH, `-sF` = solo FIN, `-sN` = sin flags, `-sM` = FIN/ACK; abierto = sin respuesta, cerrado = RST; inverse TCP flag scans no funcionan contra Windows.
- **ACK scan (`-sA`)** — no indica abierto/cerrado sino **filtered** (sin respuesta) vs **unfiltered** (RST); detecta firewalls.
- **Idle/IPID scan (`-sI`)** — usa un **zombie** para ocultar al escáner; IPID del zombie +2 = abierto, +1 = cerrado.
- **UDP scan (`-sU`)** — sin respuesta = probablemente abierto; ICMP port unreachable (type 3, code 3) = cerrado.
- **Host discovery (`-sn`)** — `-PR` ARP (solo red local), `-PU` UDP, `-PE` ICMP echo, `-PP` timestamp, `-PM` address mask, `-PS` TCP SYN, `-PA` TCP ACK (puerto 80; atraviesa firewalls), `-PO` IP protocol.
- **Timing templates** — `-T0` Paranoid (el más lento) … `-T3` Normal … `-T5` Insane (el más rápido).
- **TTL por defecto** — Linux/FreeBSD 64, Windows 128, Cisco/Solaris/AIX/OpenBSD 255.
- **Evasión de firewall/IDS** — `-f` fragmentación, `-D` decoy, `-g`/`--source-port` puerto origen, spoofing de IP/MAC, source routing, bad checksums, proxies y anonymizers.
- **Otros switches** — `-sV` versión de servicios, `-O` SO, `-A` aggressive, `-sC`/`--script` NSE, `-oN`/`-oX` salida; hping3: `-1` ICMP, `-2` UDP, `-8` scan, `-9` listen, `--flood`.

---

## Objetivos de aprendizaje

|Objective #|Description|
|---|---|
|01|Comprender las TCP communication flags|
|02|Explicar técnicas de escaneo para host discovery (descubrimiento de hosts)|
|03|Identificar métodos de port and service discovery|
|04|Describir los port scan types y sus respuestas|
|05|Usar Nmap para escaneo|
|06|Usar Hping3 para escaneo|
|07|Realizar service version discovery|
|08|Realizar OS discovery y banner grabbing|
|09|Explicar técnicas de scanning beyond firewall (escaneo más allá de firewalls/IDS)|

---

## TCP COMMUNICATION FLAGS

|Flag|Meaning|
|---|---|
|SYN|Inicia conexión TCP, flag SYN inicial|
|ACK|Confirma recepción del flag SYN, se establece en todos los segmentos después del SYN inicial|
|FIN|Cierra comunicaciones de forma ordenada|
|RST|Fuerza la terminación de comunicaciones|
|PSH|Fuerza la entrega de datos|
|URG|Marca datos como prioritarios, enviado fuera de banda|

Herramientas: Metasploit, Nmap, Hping3, Colasoft Packet Builder

---

## HPING3 — COMMAND EXAMPLES

|Command|Description|
|---|---|
|`hping3 -1 0.0.0.0`|ICMP ping (ping sweep)|
|`hping3 -A 10.10.10.10 -p 80`|ACK scan al puerto 80|
|`hping3 -2 0.0.0.0 -p 80`|UDP scan al puerto 80|
|`hping3 10.10.10.10 -Q -p 139`|Recopilar el initial sequence number (ISN)|
|`hping3 -S 10.10.10.10 -p 80 --tcp-timestamp`|SYN scan con TCP timestamp|
|`hping3 -8 50-60 -S 10.10.10.10 -V`|SYN scan a los puertos 50-60|
|`hping3 -F -P -U 10.10.10.10 -p 80`|Scan con FIN, PUSH y URG (Xmas)|
|`hping3 -1 10.0.1.x --rand-dest -I eth0`|Escanear toda la subred en busca de hosts activos|
|`hping3 -9 HTTP -I eth0`|Interceptar tráfico que contenga la firma HTTP|
|`hping3 -S 10.10.1.1 -a 192.168.1.254 -p 22 --flood`|SYN flood contra una víctima (IP de origen falsificada con `-a`)|

---

## SCANNING TECHNIQUES FOR HOST DISCOVERY

**Comando base:** `nmap -sn` (solo host discovery, sin escaneo de puertos)

|Technique|Command|Notes|
|---|---|---|
|ARP Ping Scan|`nmap -sn -PR 192.168.1.0/24`|Solo local; no se puede usar hping3|
|UDP Ping Scan|`nmap -sn -PU`|Envía probes UDP|
|ICMP Echo Ping Scan|`nmap -sn -PE` (sintaxis antigua: `-PI`)|`-L` número de pings, `-T` tiempo de espera del ping|
|ICMP Timestamp Ping Scan|`nmap -sn -PP`|Obtiene la hora actual de la máquina|
|ICMP Address Mask Ping Scan|`nmap -sn -PM`|Obtiene la máscara de subred|
|TCP SYN Ping Scan|`nmap -sn -PS`|Detecta máquina en línea sin crear conexión|
|TCP ACK Ping Scan|`nmap -sn -PA`|Usa puerto predeterminado 80; aumenta las posibilidades de pasar el firewall|
|IP Protocol Ping Scan|`nmap -sn -PO`|Envía diferentes paquetes de prueba; cualquier respuesta = host en línea|

---

## PING SWEEP TOOLS

|Tool|
|---|
|Angry IP Scanner|
|SolarWinds Engineer's Toolset (https://www.solarwinds.com)|
|NetScanTools Pro (https://www.netscantools.com)|
|Colasoft Ping Tool (https://www.colasoft.com)|
|Advanced IP Scanner (https://www.advanced-ip-scanner.com)|
|OpUtils (https://www.manageengine.com)|

---

## PORT AND SERVICE DISCOVERY

### PORT RANGES

|Type|Range|
|---|---|
|Well-Known Ports|0–1023|
|Registered Ports|1024–49151|
|Dynamic Ports|49152–65535|

### MUST-KNOW PORTS

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

## PORT SCAN TYPES

|Scan Type|Description|Nmap Switch|
|---|---|---|
|TCP Connect / Full Open|Si el puerto está abierto, el handshake tiene éxito; si está cerrado, se obtiene RST|`nmap -sT -v`|
|Stealth (Half-Open)|Resetea (RST) la conexión TCP abruptamente, sin completar el handshake; más sigiloso que -sT|`nmap -sS`|
|Inverse TCP|Envía combinaciones no estándar de flags TCP para evitar IDS; no es efectivo contra Windows, se usa para Unix|Varios|
|Xmas|Flags FIN, URG y PUSH establecidas para enviar trama TCP|`nmap -sX`|
|FIN Scan|Envía solo el flag FIN|`nmap -sF`|
|NULL Scan|No se establecen flags|`nmap -sN`|
|TCP Maimon|Envía flags FIN y ACK; si el puerto está cerrado, responde con RST|`nmap -sM`|
|ACK Flag Probe|Envía flag ACK y examina el RST de respuesta; si su TTL es < 64 (o su Window > 0), el puerto está abierto|`nmap -ttl time target`|
|IDLE/IPID|Envía dirección de origen falsificada al objetivo usando un host zombie de terceros|`nmap -sI zombieIP targetIP`|
|UDP|Envía datagrama al puerto; si responde ICMP port unreachable, está cerrado; sin respuesta, probablemente está abierto|`nmap -sU`|
|SSDP / UPnP|Escanea dispositivos habilitados para UPnP|`nmap -sS -A -f`|

> ⚠️ *Trampa de examen:* El escaneo IDLE/IPID usa un **host zombie** para ocultar la identidad del escáner.

---

## SCAN RESPONSES

|Scan|Open|Closed|Filtered|Unfiltered (Reachable Path)|
|---|---|---|---|---|
|-sT|SYN-ACK|RST|Sin respuesta / ICMP unreachable||
|-sS|SYN-ACK|RST|Sin respuesta / ICMP unreachable||
|-sA|||Sin respuesta|RST|
|-sI|IPID del zombie +2 (el zombie envió un RST)|IPID del zombie +1 (sin incremento extra)|Cambios poco claros / anómalos||
|-sU|Sin respuesta|ICMP port unreachable (type 3, code 3)|Otro ICMP unreachable / sin respuesta||
|-sN|Sin respuesta|RST|ICMP unreachable||
|-sF|Sin respuesta|RST|ICMP unreachable||
|-sX|Sin respuesta|RST|ICMP unreachable||
|-sM|Sin respuesta|RST|ICMP unreachable||

---

## NMAP SCAN TYPES

|Switch|Description|
|---|---|
|-sA|ACK scan|
|-sF|FIN scan|
|-sI|IDLE (Zombie) scan|
|-sL|List scan (solo resolución DNS, no envía paquetes al objetivo)|
|-sN|NULL scan|
|-sO|IP protocol scan|
|-sP|Ping scan *(antiguo, ahora -sn)*|
|-sR|RPC scan|
|-sS|SYN (Stealth / Half-open) scan|
|-sT|TCP Connect scan|
|-sW|Window scan|
|-sX|XMAS scan|

---

## HOST DISCOVERY SWITCHES

|Switch|Description|
|---|---|
|-PE (antiguo -PI)|ICMP Echo ping|
|-PS|TCP SYN ping|
|-PT|TCP ping (sintaxis antigua del TCP ACK ping, hoy -PA)|
|-PO|IP Protocol ping (envía paquetes con distintos números de protocolo IP)|

---

## OUTPUT OPTIONS

|Switch|Description|
|---|---|
|-oN|Salida en texto normal|
|-oX|Salida en XML|

---

## TIMING TEMPLATES

|Switch|Speed|Description|
|---|---|---|
|-T0|Serie|Paranoid — el más lento (evasión de IDS)|
|-T1|Serie|Sneaky — muy lento (evasión de IDS)|
|-T2|Serie|Polite — lento, consume menos ancho de banda|
|-T3|Paralelo|Normal — velocidad por defecto|
|-T4|Paralelo|Aggressive — rápido|
|-T5|Paralelo|Insane — el más rápido|

---

## HPING3 SWITCHES

### SCAN / MODE SWITCHES

|Switch|Description|Example|
|---|---|---|
|`-1`|ICMP mode (ICMP ping)|`hping3 -1 172.17.15.12`|
|`-2`|UDP mode|`hping3 -2 192.168.12.55 -p 80`|
|`-8`|Scan mode (port scan); acepta un puerto, un rango o `all`|`hping3 -8 20-100`|
|`-9`|Listen mode; se activa al detectar una firma|`hping3 -9 HTTP -I eth0`|
|`--flood`|Envía paquetes lo más rápido posible (sin mostrar respuestas); útil para simular DoS|`hping3 -S 192.168.10.10 -p 22 --flood`|
|`-Q`|Recopila números de secuencia TCP para analizar su predictibilidad|`hping3 172.17.15.12 -Q -p 139 -s`|

### TCP FLAG SWITCHES

|Switch|Description|
|---|---|
|`-F`|Activa el flag FIN|
|`-S`|Activa el flag SYN|
|`-R`|Activa el flag RST|
|`-P`|Activa el flag PSH|
|`-A`|Activa el flag ACK|
|`-U`|Activa el flag URG|
|`-X`|Activa los flags Xmas (FIN + PSH + URG)|
|`-p`|Puerto|
|`-c`|Número de paquetes (packet count)|
|`-i`|Intervalo entre paquetes|
|`--traceroute`|TCP traceroute|

---

## SERVICE VERSION DISCOVERY

|Item|Memorize|
|---|---|
|Comando|`nmap -sV`|
|Propósito|Identifica versiones de servicios ejecutándose en puertos abiertos|

---

## OS DISCOVERY / BANNER GRABBING

### ACTIVE BANNER GRABBING — TTL VALUES

|Operating System|TTL Value|
|---|---|
|Linux|64|
|Windows|128|
|FreeBSD|64|
|OpenBSD|255|
|Cisco|255|
|Solaris|255|
|AIX|255|

### NMAP OS DISCOVERY

|Command|Description|
|---|---|
|`nmap -O`|Descubrimiento de SO|
|`nmap --script` or `-sC`|Nmap Scripting Engine|
|`nmap -6 -O <target>`|Descubrimiento de SO IPv6|

Herramientas de spoofing: Hping, Scapy, Komodia, Ettercap, Cain
G-Zapper: elimina la cookie de seguimiento (tracking cookie) de Google

---

## SCANNING BEYOND FIREWALL

|Technique|Example / Detail|
|---|---|
|Packet Fragmentation|`nmap -sS -T4 -A -f -v` — divide los paquetes en fragmentos pequeños|
|Source Routing|El emisor especifica la ruta del paquete para esquivar el firewall|
|Source Port Manipulation|Usar un puerto de origen "de confianza" (p. ej. 53, 80): `nmap -g` / `--source-port`|
|IP Address Decoy|Mezclar la IP real con IPs señuelo: `nmap -D`|
|IP Address Spoofing|`hping3 www.certifiedhacker.com -a 7.7.7.7`|
|MAC Address Spoofing|`nmap --spoof-mac`|
|Creating Custom Packets|Paquetes a medida con herramientas de packet crafting (p. ej. Colasoft Packet Builder)|
|Randomizing Host Order|`nmap --randomize-hosts`|
|Sending Bad Checksums|`nmap --badsum`|
|Proxy Servers|Encadenar proxies para ocultar el origen del escaneo|
|Anonymizers|Ocultar la identidad del escáner (p. ej. Tor)|

---

## Extras de examen (Boson Practice Test)

|Concepto|Qué recordar|
|---|---|
|TCP ACK Ping (`nmap -sn -PA`)|Detectar dispositivos activos detrás de un firewall|
|Decoy scan (`nmap -D`)|Direcciones IP de origen falsificadas (señuelos) para ocultar el escáner|
|`hping3 -c 1`|Envía una sola solicitud ICMP echo; no funcionará en Windows (descarta paquetes ICMP echo no dirigidos a la IP del dispositivo)|
|Zombie attack / Idle scan (`nmap -sI`)|Usa el IPID del host zombie para verificar puertos abiertos/cerrados|

### NMAP SCAN TYPES — MAIMON, FIN, XMAS, ACK

|Scan|Command|Description|
|---|---|---|
|Maimon scan|`nmap -sM`|Envía probes FIN/ACK|
|FIN scan|`nmap -sF`|Si el puerto está abierto, paquete descartado; si está cerrado, se envía RST|
|XMAS scan|`nmap -sX`|Envía flags FIN, PSH y URG|
|ACK scan|`nmap -sA`|Determina si el puerto está filtrado o no filtrado|

---

### TTL VALUES

|OS|TTL Value|
|---|---|
|Linux|64|
|Windows|128|
|Dispositivos de red (network devices)|255|

---

### NMAP ADVANCED COMMANDS

|Command|Description|
|---|---|
|`nmap -sI`|Idle scan — IPID devuelto por el host zombie|
|`nmap -sF`|FIN scan|
|`nmap -g`|Falsificar el puerto de origen (alternativa: `--source-port`); solo para SYN/UDP scans|
|`nmap -A`|Aggressive scan|
|`nmap -D`|Decoy scan (escaneo con direcciones de origen falsificadas)|
|`nmap -f`|Paquetes IP fragmentados para evadir IDS|

---

## Flashcards

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
|ICMP Echo Ping|Ping tradicional usando solicitud ICMP echo (-PE; antiguo -PI)|
|-T0|Timing template Paranoid, el más lento|
|-T5|Timing template Insane, el más rápido|
|Banner Grabbing|Técnica para identificar SO y servicios a través de TTL y respuestas|
|Packet Fragmentation|Divide paquetes en fragmentos más pequeños para evadir firewalls (-f)|

---

## Preguntas de práctica

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
