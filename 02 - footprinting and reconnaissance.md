# Módulo 02 — Footprinting and Reconnaissance

> **Enfoque:** recopilación de información sobre el objetivo: OSINT, Google operators, WHOIS/DNS, redes sociales, fundamentos TCP/IP, escaneo de puertos y social engineering.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
- [OBJECTIVE 01 — TCP/IP NETWORKING](#objective-01--tcpip-networking)
- [OBJECTIVE 02 — PACKET CRAFTING TOOLS](#objective-02--packet-crafting-tools)
- [OBJECTIVE 03 — TYPES OF RECONNAISSANCE](#objective-03--types-of-reconnaissance)
- [OBJECTIVE 04 — GOOGLE ADVANCED SEARCH OPERATORS](#objective-04--google-advanced-search-operators)
- [OBJECTIVE 05 — SEARCH ENGINES FOR OSINT](#objective-05--search-engines-for-osint)
- [OBJECTIVE 06 — SUB-DOMAIN AND DNS TOOLS](#objective-06--sub-domain-and-dns-tools)
- [OBJECTIVE 07 — COMPETITIVE INTELLIGENCE GATHERING](#objective-07--competitive-intelligence-gathering)
- [OBJECTIVE 08 — SOCIAL NETWORK RECONNAISSANCE](#objective-08--social-network-reconnaissance)
- [OBJECTIVE 09 — WHOIS AND DNS FOOTPRINTING](#objective-09--whois-and-dns-footprinting)
- [PORTS AND PORT SCANNING](#ports-and-port-scanning)
- [SOCIAL ENGINEERING (FOOTPRINTING CONTEXT)](#social-engineering-footprinting-context)
- [AUTOMATING FOOTPRINTING TASKS](#automating-footprinting-tasks)
- [MIB INFORMATION](#mib-information)
- [Extras de examen (Boson Practice Test)](#extras-de-examen-boson-practice-test)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **Passive vs Active reconnaissance** — passive: sin interacción directa (OSINT), no deja rastro; active: interactúa con el objetivo (DNS interrogation, social engineering, port scanning) y puede detectarse.
- **TCP flags** — SYN, ACK, PSH, URG, FIN, RST; handshake SYN → SYN/ACK → ACK; FIN cierra de forma ordenada, RST fuerza el cierre.
- **Google operators** — `site:` (dominio), `intitle:`/`allintitle:`, `inurl:`/`allinurl:`, `cache:`, `link:`, `related:`, `info:`, `location:`; `filetype:pcf` = configuraciones de Cisco VPN.
- **Shodan, Censys, ZoomEye** — motores de búsqueda de dispositivos conectados a Internet (IoT/SCADA).
- **theHarvester** — `-d` dominio, `-b` fuente de datos, `-l` límite de resultados; recolecta emails y subdominios.
- **WHOIS** — Thick = información WHOIS completa; Thin = solo el nombre del servidor WHOIS del registrador.
- **RIRs** — ARIN (Norteamérica), AFRINIC (África), APNIC (Asia-Pacífico), RIPE NCC (Europa, Oriente Medio, Asia Central), LACNIC (Latinoamérica y Caribe).
- **DNS records** — A = IPv4, AAAA = IPv6, MX = correo, NS = name server, CNAME = alias, SOA = autoridad de la zona, PTR = búsqueda inversa, HINFO = hardware/SO, TXT = SPF/DKIM.
- **Port ranges** — well-known 0–1023, registered 1024–49151, dynamic/private 49152–65535; DNS usa 53 TCP y UDP, DHCP 67 UDP.
- **Full connect vs SYN scan** — connect completa el handshake (el más fiable y el más detectable); SYN = half-open/stealth y es el scan por defecto de Nmap con privilegios.
- **XMAS scan / ACK flag probe** — XMAS = FIN + URG + PSH (abierto = sin respuesta, cerrado = RST; no funciona contra Windows); ACK probe: abierto si el RST trae TTL < 64 o Window > 0, y RST de vuelta = sin firewall.
- **Orden del footprinting** — passive primero → OSINT → WHOIS/DNS → port scanning → social engineering → automatizar (Maltego, Recon-ng, FOCA).

---

## Objetivos de aprendizaje

|Objective #|Description|
|---|---|
|01|Comprender los fundamentos de redes TCP/IP|
|02|Aprender herramientas y técnicas de packet crafting (creación de paquetes)|
|03|Identificar tipos de reconnaissance (passive vs active)|
|04|Usar los Google advanced search operators para footprinting|
|05|Explorar motores de búsqueda para OSINT|
|06|Enumerar subdominios y registros DNS|
|07|Realizar competitive intelligence gathering (inteligencia competitiva)|
|08|Realizar reconnaissance en redes sociales|
|09|Realizar footprinting WHOIS y DNS|
|10|Comprender técnicas de escaneo de puertos y Nmap|

---

## OBJECTIVE 01 — TCP/IP NETWORKING

### TCP FLAGS (HIGH YIELD)

|Flag|Full Name|Purpose|
|---|---|---|
|SYN|Synchronize|Comunicación inicial, negociación de parámetros y números de secuencia|
|ACK|Acknowledgement|Confirma flags SYN; se establece en todos los segmentos después del SYN inicial|
|RST|Reset|Fuerza la terminación de la conexión en ambas direcciones|
|FIN|Finish|Cierra las comunicaciones de forma ordenada|
|URG|Urgent|Indica que se están enviando datos fuera de banda (por ejemplo, cancelando un mensaje en medio del flujo)|
|PSH|Push|Fuerza el envío inmediato de los datos del buffer a la aplicación|

> 🧠 *Para recordar:* **SYN → SYN/ACK → ACK → FIN/RST** (three-way handshake + teardown)

> ⚠️ *Trampa de examen:* El número de secuencia SYN es aleatorio e incrementa con cada paquete enviado — muchos ataques intentan adivinar este número.

---

### UDP — KEY PROTOCOLS

|Item|Memorize|
|---|---|
|Naturaleza|Connectionless (sin conexión)|
|Protocolos más usados|TFTP, DNS, DHCP|

> ⚠️ *Trampa de examen:* UDP es connectionless — no hay handshake, no hay entrega garantizada.

---

### TCP/UDP COMPARISON

|Feature|TCP|UDP|
|---|---|---|
|Conexión|Connection-oriented|Connectionless|
|Fiabilidad|Garantía de entrega|Sin garantía|
|Velocidad|Más lento|Más rápido|
|Handshake|Sí (three-way)|No|

---

### NETWORKING CONCEPTS

|Item|Memorize|
|---|---|
|Switched networks|Reduce el número de tramas recibidas que no están dirigidas a tu sistema|
|IPv4 addressing|Unicast, multicast, broadcast|
|ICMP|Internet Control Message Protocol (network layer, capa 3)|

---

### ICMP MESSAGE CODES

|Type/Code|Mensaje|
|---|---|
|0|Echo Reply|
|3|Destination Unreachable — destino inalcanzable|
|3/0|Destination Network Unreachable — red de destino inalcanzable|
|3/1|Destination Host Unreachable — host de destino inalcanzable|
|3/6|Destination Network Unknown — red de destino desconocida|
|3/9|Network Administratively Prohibited — red administrativamente prohibida|
|3/13|Communication Administratively Prohibited — comunicación administrativamente prohibida|
|4|Source Quench|
|5|Redirect|
|8|Echo Request|
|11|Time Exceeded — tiempo excedido|

---

## OBJECTIVE 02 — PACKET CRAFTING TOOLS

|Tool|Description|
|---|---|
|NetScanTools|Escaneo de red y análisis de paquetes|
|Ostinato|Creación de paquetes y generador de tráfico|
|packETH|Generador de paquetes Ethernet|
|LANforge FIRE|Generador de tráfico y degradación de red|
|Colasoft Packet Builder|Construye y envía paquetes personalizados|

Secuencia de handshake TCP utilizada: **SYN, SYN/ACK, ACK, FIN**

IANA mantiene el Service Name/Transport Protocol Port Number Registry — la lista oficial de todas las reservas de números de puerto.

---

## OBJECTIVE 03 — TYPES OF RECONNAISSANCE

|Type|Interaction|Examples|
|---|---|---|
|Passive|Sin interacción directa|OSINT, bases de datos, intercambio de inteligencia|
|Active|Interacción directa con el objetivo|DNS interrogation, social engineering, port scanning|

> ⚠️ *Trampa de examen:* La passive reconnaissance no deja **ningún rastro** en el objetivo. La active reconnaissance puede ser **detectada**.

---

## OBJECTIVE 04 — GOOGLE ADVANCED SEARCH OPERATORS

|Search Operator|Purpose|
|---|---|
|cache:|Muestra páginas web en la caché de Google|
|link:|Lista páginas web que tienen enlaces a la página web especificada|
|related:|Lista páginas web que son similares a la página web especificada|
|info:|Presenta información que Google tiene sobre una página web en particular|
|site:|Restringe los resultados a un dominio dado|
|allintitle:|Restringe los resultados a sitios web que contengan todas las palabras clave en el título|
|intitle:|Restringe los resultados a documentos que contengan palabras clave específicas en el título|
|allinurl:|Restringe los resultados a URLs que contengan todas las palabras clave|
|inurl:|Documentos que contengan la palabra clave en la URL|
|location:|Buscar información para una ubicación específica|

> 🧠 *Para recordar:* **site:domain.com intitle:keyword** — la combinación más común en preguntas de examen.

---

## OBJECTIVE 05 — SEARCH ENGINES FOR OSINT

### META SEARCH ENGINES

|Tool|Description|
|---|---|
|Startpage|Oculta la dirección IP del usuario|
|Metager|Agregación de metabúsqueda|
|etools.ch|Búsqueda multi-motor|

### FTP SEARCH ENGINES

|Tool|URL/Description|
|---|---|
|NAPALM FTP Indexer|Búsqueda de directorios FTP|
|FreewareWeb|Búsqueda de archivos FTP|
|Mamont|Búsqueda FTP|
|globalfilesearch.com|Búsqueda FTP global|

### SCADA / IoT SEARCH ENGINES

|Tool|Description|
|---|---|
|Shodan|Motor de búsqueda para dispositivos conectados a Internet|
|Censys|Escaneo y búsqueda en toda la Internet|
|ZoomEye|Motor de búsqueda de ciberespacio|

> ⚠️ *Trampa de examen:* Shodan, Censys y ZoomEye están diseñados específicamente para el **descubrimiento de dispositivos SCADA/IoT**.

---

## OBJECTIVE 06 — SUB-DOMAIN AND DNS TOOLS

|Tool|Purpose|
|---|---|
|Netcraft|Dominios de nivel superior, detección de SO, subdominios|
|DNSdumpster|Enumeración DNS y descubrimiento de subdominios|
|pentest-tools|Escaneo de subdominios y vulnerabilidades|
|sublist3r|Enumeración por fuerza bruta de subdominios|
|Photon|Recuperar URLs archivadas|

---

## OBJECTIVE 07 — COMPETITIVE INTELLIGENCE GATHERING

|Tool/Database|Description|
|---|---|
|EDGAR Database|Documentos SEC y reportes financieros|
|D&B Hoovers|Inteligencia de ventas|
|LexisNexis|Investigación legal y empresarial|
|BusinessWire|Comunicados de prensa y noticias|
|Factiva|Información de noticias y negocios|
|MarketWatch|Datos de mercados financieros|
|The Wall Street Transcript|Transcripciones de presentaciones de resultados (earnings) de empresas|
|Euromonitor|Investigación de mercados internacionales|
|Experian|Datos de crédito y empresariales|
|The Search Monitor|Monitoreo de marcas y publicidad|
|USPTO|Base de datos de patentes y marcas registradas|
|ABI Inform Global|Publicaciones periódicas empresariales|
|SimilarWeb|Análisis de tráfico web|
|SE Ranking|SEO y análisis competitivo|

---

## OBJECTIVE 08 — SOCIAL NETWORK RECONNAISSANCE

|Tool|Purpose|
|---|---|
|TheHarvester|Recolección de correos electrónicos y subdominios de fuentes públicas|
|BuzzSumo|Analizar presencia de contenido en redes sociales|
|Sherlock|Enumeración de nombres de usuario en redes sociales|
|Social Searcher|Búsqueda de personas en redes sociales|

### THEHARVESTER COMMAND EXAMPLES

```bash
theharvester -d microsoft -l 200 -b linkedin
```

|Flag|Purpose|
|---|---|
|-d|Especifica el dominio objetivo|
|-b|Especifica la fuente de datos (por ejemplo, linkedin)|
|-l|Limita los resultados (por ejemplo, -l 200 = 200 resultados)|

> ⚠️ *Trampa de examen:* **-d** es dominio, **-b** es fuente de datos, **-l** es límite de resultados. No confundas estos flags.

---

### PUBLIC SOURCE CODE REPOSITORIES

|Tool|Description|
|---|---|
|ReconNG|Web reconnaissance framework, open-source|

---

## OBJECTIVE 09 — WHOIS AND DNS FOOTPRINTING

### WHOIS — DEFINITION

|Item|Memorize|
|---|---|
|WHOIS|Protocolo para consultar bases de datos sobre registro de dominios y asignación de IP|

---

### TYPES OF WHOIS

|Type|Description|
|---|---|
|Thick WHOIS|Almacena la información WHOIS completa del dominio|
|Thin WHOIS|Almacena solo el nombre del servidor WHOIS|
|Decentralized WHOIS|Información completa gestionada por entidades independientes|

> 🧠 *Para recordar:* **Thick = completa, Thin = solo nombre del servidor**

> ⚠️ *Trampa de examen:* El WHOIS descentralizado significa que cada registrador gestiona sus propios registros de forma independiente.

---

### REGIONAL INTERNET REGISTRIES (RIRs)

|Registry|Region|
|---|---|
|ARIN|Américas (Norteamérica)|
|AFRINIC|África|
|APNIC|Asia-Pacific Network Information Centre — Asia-Pacífico|
|RIPE|Europa, Oriente Medio, Asia Central|
|LACNIC|América Latina y el Caribe|

> 🧠 *Para recordar:* **ARIN → Américas, AFRINIC → África, APNIC → Asia, RIPE → Europa, LACNIC → América Latina**

---

### GEOLOCATION

|Tool|Description|
|---|---|
|IP2Location|Determinar la ubicación geográfica a partir de una dirección IP|

---

### DNS RECORD TYPES (HIGH YIELD)

|Record Type|Label|Description|
|---|---|---|
|A|Address record|Asocia hostname con IPv4|
|AAAA|IPv6 address record|Asocia hostname con IPv6|
|MX|Mail exchange|Identifica el servidor de correo del dominio|
|NS|Name server|Identifica los name servers autoritativos|
|CNAME|Canonical name|Asocia un alias al hostname real|
|SOA|Start of Authority|Define la autoridad para la zona DNS (contiene el nombre del servidor responsable de todos los registros DNS dentro del namespace)|
|SRV|Service record|Especifica la ubicación del servicio (LDAP, SIP)|
|PTR|Pointer record|Búsqueda inversa — asocia una dirección IP con un hostname (generalmente asociado con servidores de correo)|
|RP|Responsible person|Lista el administrador/propietario del dominio|
|HINFO|Host information|Almacena el tipo de hardware y el sistema operativo|
|TXT|Text record|Almacena datos de texto para DKIM y SPF|

> 🧠 *Para recordar:* **A = IPv4, AAAA = IPv6, MX = correo, NS = nameserver, PTR = inverso**

---

### DNS ENUMERATION TOOLS

|Tool|Description|
|---|---|
|Fierce|Encuentra subdominios, configuraciones incorrectas de DNS, rangos de IP, hostnames, patrones de nomenclatura interna|
|DNSRecon|Enumeración DNS, descubre hosts y subdominios|
|mxtoolbox|Diagnósticos de registros MX y DNS|

---

## PORTS AND PORT SCANNING

### PORT RANGES

|Range|Type|
|---|---|
|0–1023|Well-known ports — puertos conocidos|
|1024–49151|Registered ports — puertos registrados|
|49152–65535|Dynamic/private ports — puertos dinámicos/privados|

---

### IMPORTANT PORT NUMBERS (HIGH YIELD)

|Port Number|Protocol|Transport|
|---|---|---|
|20/21|FTP|TCP|
|22|SSH|TCP|
|23|Telnet|TCP|
|25|SMTP|TCP|
|53|DNS|TCP y UDP|
|67|DHCP|UDP|
|69|TFTP|UDP|
|80|HTTP|TCP|
|88|Kerberos|TCP/UDP|
|110|POP3|TCP|
|123|NTP|UDP|
|135|MS RPC|TCP|
|137–139|NetBIOS|TCP/UDP|
|143|IMAP|TCP|
|161/162|SNMP|UDP|
|389|LDAP|TCP/UDP|
|443|HTTPS|TCP|
|445|SMB|TCP|
|514|Syslog|UDP/TCP|
|554|RTSP|TCP/UDP|

> 🧠 *Para recordar:* **21=FTP, 22=SSH, 23=Telnet, 25=SMTP, 53=DNS, 80=HTTP, 443=HTTPS** — estos 7 son los favoritos del examen.

> ⚠️ *Trampa de examen:* DNS usa **tanto TCP como UDP** en el puerto 53. DHCP usa **UDP** en el puerto 67.

---

### PORT STATES

|State|Meaning|
|---|---|
|CLOSE_WAIT|El lado remoto ha cerrado la conexión|
|TIME_WAIT|Tu lado ha cerrado la conexión|

---

### NETSTAT COMMANDS

|Command|Description|
|---|---|
|netstat -an|Muestra todas las conexiones y puertos en escucha|
|netstat -b|Muestra el ejecutable asociado al puerto abierto|

---

### PORT SCANNING TECHNIQUES (HIGH YIELD)

|Scan Type|Description|Detection Difficulty|
|---|---|---|
|Full connect|TCP connect / full open scan — completa el three-way handshake, termina con RST. Los puertos abiertos responden con SYN/ACK, los cerrados con RST|El más fácil de detectar, el más confiable|
|Stealth (SYN scan)|Half-open scan — solo envía paquetes SYN. No se establece una conexión completa|Menos notorio|
|Inverse TCP flag|Usa flags FIN, URG o PSH. Abiertos = sin respuesta, cerrados = RST/ACK|Medio|
|Christmas scan (XMAS)|Flags FIN, URG y PSH activados. Misma respuesta que el inverse TCP scan. No funciona contra máquinas Microsoft|Medio|
|ACK flag probe|Envía ACK, verifica TTL (si RST < 64 = abierto) o Window size (si > 0 = abierto). También puede detectar firewalls (RST de vuelta = sin firewall)|Medio|
|IDLE scan|Suplanta una dirección IP, requiere una máquina idle (zombie)|Difícil de rastrear|

> 🧠 *Para recordar:* **Full connect = fiable pero ruidoso, SYN = sigiloso, XMAS = FIN+URG+PSH pero falla en Windows**

> ⚠️ *Trampa de examen:* El Christmas scan **NO** funciona contra máquinas **Microsoft**.

---

### PING SWEEP

|Item|Memorize|
|---|---|
|Propósito|Encontrar máquinas activas en una red|
|Nivel de ruido|Muy ruidoso|

#### PING SWEEP TOOLS

|Tool|
|---|
|Angry IP Scanner|
|SolarWinds Engineer's Toolset|
|Network Ping|
|OpUtils|
|Superscan|
|Advanced IP Scanner|
|Pinkie|

---

### ARP

|Item|Memorize|
|---|---|
|Propósito|Asocia dirección IP con dirección MAC en la red local|
|ARP scan (Nmap)|nmap -sn -PR 192.168.1.69|

---

### ADDITIONAL SCANNING TOOLS

|Tool|Description|
|---|---|
|Nmap|El tipo de escaneo por defecto es el SYN scan|
|NetScanTools|Suite de utilidades de red|
|Hping3|Packet crafting y escaneo de red|

> ⚠️ *Trampa de examen:* Nmap sin opciones ejecuta un **SYN scan** por defecto (si se ejecuta con privilegios root/administrador; sin privilegios usa TCP connect, `-sT`).

---

### NMAP THROUGH TOR

|Item|Memorize|
|---|---|
|Caso de uso|Anonimizar el tráfico de escaneo|
|Nota|Los port scanners funcionan manipulando los flags TCP para identificar hosts activos y escanear puertos|

---

## SOCIAL ENGINEERING (FOOTPRINTING CONTEXT)

|Technique|Description|
|---|---|
|Eavesdropping|Escuchar conversaciones|
|Shoulder surfing|Observar en secreto al objetivo (pantalla, teclado) por encima del hombro|
|Dumpster diving|Buscar en materiales descartados|
|Impersonation|Hacerse pasar por una persona legítima o autorizada|

---

## AUTOMATING FOOTPRINTING TASKS

|Tool|Description|
|---|---|
|Maltego|Determinar relaciones y enlaces del mundo real|
|Recon-ng|Web reconnaissance framework, open-source|
|FOCA|Encontrar metadatos e información oculta en documentos escaneados|
|subfinder|Descubrimiento de subdominios|
|OSINT Framework|Colección de herramientas OSINT agrupadas por categoría|
|Recon-dog|Usa APIs para recopilar información sobre el sistema objetivo|
|BillCipher|DNS lookup, WHOIS, escaneo de puertos, transferencia de zona y más|

---

## MIB INFORMATION

|Item|Memorize|
|---|---|
|MIB|Management Information Base — almacena información de objetos SNMP|

---

## Extras de examen (Boson Practice Test)

|Concepto|Qué recordar|
|---|---|
|ZoomInfo|Obtener información sobre empresas, CEOs, CTOs, etc.|
|Cisco VPN file type|PCF — usar el Google dork `filetype:pcf`|
|RIPE NCC|Regional Internet Registry (RIR) de Europa|

---

## Flashcards

|Term|Definition|
|---|---|
|Footprinting|Primera fase del ethical hacking — recopilación sistemática de información|
|Reconnaissance|Proceso de descubrir y recopilar información sobre un objetivo|
|OSINT|Open Source Intelligence — información recopilada de fuentes públicas|
|Passive reconnaissance|Recopilación de información sin interacción directa con el objetivo|
|Active reconnaissance|Interacción directa con el objetivo (escaneo de puertos, consultas DNS)|
|Thick WHOIS|Registro WHOIS que almacena información completa del dominio|
|Thin WHOIS|Registro WHOIS que almacena solo el nombre del servidor WHOIS|
|SOA record|Start of Authority — define la autoridad para una zona DNS|
|PTR record|Pointer record — búsqueda DNS inversa (IP a hostname)|
|SYN scan|Escaneo de puertos half-open — envía SYN, analiza la respuesta sin completar el handshake|
|Christmas scan|Escaneo XMAS — flags FIN, URG y PSH activados; no funciona en sistemas Microsoft|
|Full connect scan|Completa el three-way handshake en cada puerto; más confiable pero más detectable|
|ACK probe|Envía paquete ACK, verifica TTL o Window size para determinar el estado del puerto y la presencia de firewall|
|Shodan|Motor de búsqueda para dispositivos conectados a Internet (SCADA/IoT)|
|TheHarvester|Herramienta para recolección de correos electrónicos y subdominios usando fuentes públicas|

---

## Preguntas de práctica

|Q#|Question|Answer|
|---|---|---|
|1|¿Cuáles son los tres tipos de registros WHOIS y en qué se diferencian?|Thick = información completa del dominio, Thin = solo nombre del servidor WHOIS, Decentralized = información completa gestionada independientemente por cada registrador|
|2|¿Qué combinación de flags TCP se usa en un Christmas scan y por qué falla en sistemas Microsoft?|Todos los flags activados (FIN+PSH+URG); las implementaciones Microsoft no responden a esta combinación no estándar|
|3|¿Cuál es la diferencia entre un SYN scan y un full connect scan?|SYN scan envía solo SYN (half-open, sigiloso); Full connect completa el three-way handshake (confiable, detectable)|
|4|Nombra tres motores de búsqueda SCADA/IoT y su propósito.|Shodan, Censys, ZoomEye — todos diseñados para descubrir dispositivos conectados a Internet y sistemas SCADA|
|5|¿Qué tipo de registro DNS se usa para búsquedas inversas y qué asocia?|Registro PTR — asocia una dirección IP de vuelta a un hostname (inverso del registro A)|
