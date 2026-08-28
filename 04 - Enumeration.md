# MODULE 04 — Enumeration

|Item|Memorize|
|---|---|
|Module Number|04|
|Module Name|Enumeration|
|Focus|Extracción de nombres de usuario, grupos, shares y servicios de sistemas objetivo|

---

## LEARNING OBJECTIVES (DO NOT SKIP — EXAM LIST)

|Objective #|Description|
|---|---|
|01|Extraer nombres de usuario utilizando email ID|
|02|Realizar ataques de contraseña por defecto|
|03|Fuerza bruta contra Active Directory|
|04|Realizar zone transfer DNS utilizando dig|
|05|Extraer grupos de usuario desde Windows|
|06|Extraer nombres de usuario utilizando SNMP|
|07|Extraer recursos de red y topología utilizando SNMP|

---

## TECHNIQUES OF ENUMERATION

|Technique|Detail|
|---|---|
|Extracting usernames using Email id|Email harvesting revela cuentas válidas|
|Default password|Probar contraseñas por defecto del fabricante en servicios|
|Brute force AD|Password spray / fuerza bruta contra Active Directory|
|DNS zone transfer — dig|Solicitud AXFR para replicar registros DNS|
|Extract user groups from Windows|Net group /domain|
|Extract user names using SNMP|Recorrer el OID tree para obtener listas de usuarios|
|Extract network resources and topology using SNMP|Consultas SNMP MIB revelan hosts y rutas|

MEMORY HOOK:
**Username → Default Pass → AD Brute → DNS Zone → Groups → SNMP Users → SNMP Topology**

---

## SERVICES AND PORTS TO ENUMERATE

|Port|Protocol|Service|
|---|---|---|
|TCP/UDP 53|DNS|Zone transfer|
|TCP/UDP 134|MS|RPC Endpoint Mapper|
|UDP 137|NetBIOS|Name Service (NBNS)|
|TCP 139|NetBIOS|Session Service (SMB over NetBIOS)|
|TCP/UDP 445|SMB|SMB over TCP (Direct Host) — impresoras|
|UDP 161|SNMP|Agente|
|TCP/UDP 162|SNMP|Trap|
|TCP/UDP 389|LDAP|Lightweight Directory Access Protocol|
|TCP 636|LDAP|Secure LDAP (LDAPS)|
|TCP 2049|NFS|Network File System|
|TCP 25|SMTP|Simple Mail Transfer Protocol|
|UDP 500|IPSec|ISAKMP / IKE|
|TCP 22|SSH|Secure Shell / SFTP|
|TCP/UDP 3268|AD|Global Catalog Service|
|TCP/UDP 5060, 5061|VoIP|Session Initiation Protocol (SIP)|
|TCP 20/21|FTP|File Transfer Protocol|
|TCP 23|Telnet|Terminal remota|
|UDP 69|TFTP|Trivial File Transfer Protocol|
|TCP 179|BGP|Border Gateway Protocol|
|UDP 123|NTP|Network Time Protocol|

---

## NETBIOS ENUMERATION

|Item|Memorize|
|---|---|
|Port 137|UDP — Name Service|
|Port 138|UDP — Datagram Service|
|Port 139|TCP — Session Service|
|IPv6 Support|NO funciona en IPv6|

### NETBIOS CODE TABLE (EXAM FAVORITE)

|Name|NetBIOS Code|Type|Information Obtained|
|---|---|---|---|
|Host name|<00>|UNIQUE|Nombre del host|
|Domain|<00>|Group|Nombre del dominio|
|Host name|<03>|UNIQUE|Servicio de mensajería|
|Username|<03>|UNIQUE|Servicio de mensajería para el usuario conectado|
|Host name|<20>|UNIQUE|Servicio server ejecutándose|
|Domain|1B|UNIQUE|Nombre del Domain Master Browser|
|Domain|1E|Group|Elecciones del servicio de navegador|

### NETBIOS TOOLS AND COMMANDS

|Tool / Command|Purpose|
|---|---|
|nbstat -m|Tabla local NetBIOS|
|nbstat -A 10.10.10.10|Tabla NetBIOS del sistema remoto|
|nbstat -c|Caché NetBIOS remoto|
|PsExec|Enumerar cuentas de usuario|
|PsFile|Ver archivos abiertos remotamente|
|net view \\\\computername|Enumerar recursos compartidos en el host|
|net view \\\\domain|Enumerar recursos compartidos en el dominio|

---

## SNMP ENUMERATION

|Port|Protocol|Service|
|---|---|---|
|UDP 161|SNMP|Agente|
|UDP 162|SNMP|Trap|

### SNMP VERSIONS TABLE (EXAM FAVORITE)

|Version|Security|Detail|
|---|---|---|
|v1|Ninguna|Community strings en texto plano|
|v2c|Ninguna|Más rápido que v1, aún en texto plano|
|v3|Autenticación + Cifrado|Seguro — recomendado|

EXAM TRAP:
**v1 = none, v2c = none (faster), v3 = encrypted**

### SNMP TOOLS

|Tool|Detail|
|---|---|
|SNMPCheck|Consultar objetivo via SNMP|
|Engineers Toolset|Escáner SNMP multifunción|
|SNMP Scanner|Descubrir hosts habilitados para SNMP|
|OpUtils 5|Utilidades IP y SNMP|
|SNScan|Escáner de red SNMP|
|snmpwalk -v1 -c public|Ver todos los OIDs en el objetivo|
|snmp-check|Consultar y volcar datos SNMP|
|SoftPerfect Network Scanner|Escáner de red + SNMP|

### MANAGEMENT INFORMATION BASE (MIB) TABLE (EXAM FAVORITE)

|MIB Module|Color|Purpose|
|---|---|---|
|MIB-II|🟢|Gestión de red TCP/IP|
|HOSTMIB|🟡|Estadísticas de hardware y sistema|
|LNMIB2|🔵|Servicios Windows LAN Manager|
|WINS.MIB|🟣|Base de datos de nombres NetBIOS|
|DHCP.MIB|🟠|Monitoreo del servicio DHCP|

MEMORY HOOK:
**MIB-II = TCP/IP, HOSTMIB = hardware, LNMIB2 = LAN Manager, WINS = NetBIOS, DHCP = DHCP only**

---

## LDAP ENUMERATION

|Port|Protocol|Service|
|---|---|---|
|TCP 389|LDAP|Lightweight Directory Access Protocol|
|TCP 636|LDAPS|Secure LDAP|

### LDAP TOOLS

|Tool|Detail|
|---|---|
|ldapsearch|Herramienta de consulta LDAP desde línea de comandos|
|AD Explorer|Explorador de Microsoft Active Directory|
|Softerra LDAP Administrator|Navegador y editor LDAP con interfaz gráfica|
|nmap ldap-brute NSE script|Fuerza bruta contra credenciales LDAP mediante Nmap|

---

## NTP AND NFS ENUMERATION

### NTP

|Port|Protocol|Service|
|---|---|---|
|UDP 123|NTP|Network Time Protocol|

|Tool|Detail|
|---|---|
|ntptrace|Rastrear ruta NTP hasta el servidor|
|ntpdc|Consultar daemon NTP|
|ntpq|Consultar servidor NTP|

### NFS

|Port|Protocol|Service|
|---|---|---|
|TCP 2049|NFS|Network File System|

|Tool|Detail|
|---|---|
|rpcinfo -p|Listar puertos RPC abiertos|
|showmount|Mostrar shares NFS exportados|
|rpc-scan|Escanear servicios RPC|
|SuperEnum|Enumerar shares NFS|

---

## SMTP AND DNS ENUMERATION

### SMTP

|Port|Protocol|Service|
|---|---|---|
|TCP 25|SMTP|Simple Mail Transfer Protocol|

|Tool / Command|Purpose|
|---|---|
|Telnet SMTP VRFY|Verificar si la dirección existe para el usuario|
|Telnet SMTP EXPN|Expandir lista de correo en destinatarios individuales|
|Telnet SMTP RCPT TO|Especificar destinatario del mensaje|
|Telnet <email server>|Interacción SMTP manual|
|Nmap|Enumeración de servicios y usuarios|
|Metasploit|Módulos auxiliares SMTP|
|NetScanTools Pro|Escáner de red + SMTP con interfaz gráfica|
|smtp-user-enum|Fuerza bruta para enumeración de usuarios SMTP|

### DNS ENUMERATION USING ZONE TRANSFER

|Port|Protocol|Service|
|---|---|---|
|UDP/TCP 53|DNS|Domain Name System|

|Tool|Purpose|
|---|---|
|dig ns|Obtener todos los name servers DNS|
|nslookup|Hosts Windows, name servers, registros de correo|
|DNSRecon -t axfr -d -|Realizar zone transfer DNS|

### DNS CACHE SNOOPING

|Method|Detail|
|---|---|
|Non-recursive|Responde con root hints — dig +norecursive|
|Recursive|Se examina el TTL para determinar entradas en caché|

### DNSSEC ZONE WALKING

|Item|Detail|
|---|---|
|Concept|Enumerar zonas firmadas con DNSSEC|
|Tools|LDNS, DNSRecon, Knock, Raccoon, Turbolist3r, OWASP Amass|
|Amass Command|amass enum -d <domain>|

---

## IPSEC ENUMERATION

|Tool / Command|Purpose|
|---|---|
|nmap -sU -p 500|Escanear UDP 500 para IKE|
|ike-scan -M|Descubrir y hacer fingerprint de endpoints IKE|

---

## VoIP ENUMERATION

|Tool|Detail|
|---|---|
|Svmap|Escáner y enumerador SIP VoIP|

---

## RPC ENUMERATION

|Tool / Command|Purpose|
|---|---|
|nmap -sR|Enumeración de servicios RPC|
|nmap -T4 -A|Escan agresivo con detección de SO/servicios|

---

## UNIX/LINUX USER ENUMERATION

|Tool / Command|Purpose|
|---|---|
|rusers -a, -l, -u, -i|Enumeración remota de usuarios con flags|
|rwho -a|Mostrar quién está conectado en la red|
|finger -s|Mostrar información de usuario|

---

## SMB ENUMERATION

|Tool / Command|Purpose|
|---|---|
|nmap -p 445 -A|Escan completo en el puerto SMB|
|nmap -p 445 --script smb-protocols|Enumerar versiones del protocolo SMB|
|nmap -p 139 --script smb-protocols|Enumerar SMB over NetBIOS|
|nmap -Pn -p445 --script smb2-security-mode|Comprobar funcion firma mensajes|
---

## EXAM EXTRAS (Boson Practice Test)

### SMTP COMMANDS

|Command|Purpose|
|---|---|
|EHLO|Inicio de conexión (servidores que soportan EHLO; si no se soporta, se usa HELO como alternativa)|
|RCPT TO|Indicar destinatario|
|VRFY|Verificar existencia de buzón|
|EXPN|Solicitar destinatarios de la lista de correo|

---

### PORT NUMBERS — EXTRAS

|Port|Protocol|Service|
|---|---|---|
|TCP 636|LDAPS|Secure LDAP|
|TCP 389|LDAP|Lightweight Directory Access Protocol|
|TCP 110|POP3|Post Office Protocol|
|TCP 995|POP3S|POP3 over SSL|
|TCP 445|SMB|Server Message Block|

---

## EXAM FLASHCARDS

|Term|Memorize|
|---|---|
|Enumeration|Proceso de extraer nombres de usuario, grupos, shares y servicios|
|NetBIOS Ports|137 UDP, 138 UDP, 139 TCP — NO funciona en IPv6|
|SNMP v1|Sin seguridad, community strings en texto plano|
|SNMP v2c|Más rápido que v1, aún en texto plano|
|SNMP v3|Autenticación + cifrado — recomendado|
|LDAP Port|TCP 389 — LDAPS es TCP 636|
|NFS Port|TCP 2049|
|NTP Port|UDP 123|
|SMTP Port|TCP 25|
|DNS Port|UDP/TCP 53 — zone transfer = AXFR|
|IPSec Port|UDP 500 — IKE/ISAKMP|
|SIP Ports|TCP/UDP 5060, 5061|
|MIB-II|Gestiona la red TCP/IP|
|HOSTMIB|Monitorea hardware y recursos del sistema|
|LNMIB2|Servicios Windows LAN Manager|
|WINS.MIB|Base de datos de nombres NetBIOS|
|DHCP.MIB|Monitoreo del servicio DHCP|
|NetBIOS Code <00>|Nombre de host (UNIQUE) o Dominio (Group)|
|NetBIOS Code <20>|Servicio server ejecutándose|
|NetBIOS Code 1B|Domain Master Browser|

---

## PRACTICE QUESTIONS

|Q#|Question|Answer|
|---|---|---|
|1|¿Qué versión de SNMP proporciona cifrado y autenticación?|SNMPv3|
|2|¿Qué puerto utiliza LDAP para conexiones seguras?|TCP 636 (LDAPS)|
|3|¿Qué código NetBIOS identifica a un Domain Master Browser?|1B|
|4|¿Qué comando realiza un zone transfer DNS con dig?|dig ns (luego dig @server domain AXFR)|
|5|¿Qué herramienta se usa para escanear endpoints IKE en la enumeración IPSec?|ike-scan -M|