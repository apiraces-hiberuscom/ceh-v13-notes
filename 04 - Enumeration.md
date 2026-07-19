# MODULE 04 — Enumeration

|Item|Memorize|
|---|---|
|Module Number|04|
|Module Name|Enumeration|
|Focus|Extracting usernames, groups, shares, services from target systems|

---

## LEARNING OBJECTIVES (DO NOT SKIP — EXAM LIST)

|Objective #|Description|
|---|---|
|01|Extract usernames using email ID|
|02|Perform default password attacks|
|03|Brute force Active Directory|
|04|Perform DNS zone transfer using dig|
|05|Extract user groups from Windows|
|06|Extract usernames using SNMP|
|07|Extract network resources and topology using SNMP|

---

## TECHNIQUES OF ENUMERATION

|Technique|Detail|
|---|---|
|Extracting usernames using Email id|Email harvesting reveals valid accounts|
|Default password|Try vendor defaults on services|
|Brute force AD|Password spray / brute force Active Directory|
|DNS zone transfer — dig|AXFR request to replicate DNS records|
|Extract user groups from Windows|Net group /domain|
|Extract user names using SNMP|Walk the OID tree for user lists|
|Extract network resources and topology using SNMP|SNMP MIB queries reveal hosts and routes|

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
|TCP/UDP 445|SMB|SMB over TCP (Direct Host) — printers|
|UDP 161|SNMP|Agent|
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
|TCP 23|Telnet|Remote terminal|
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
|IPv6 Support|Does NOT work on IPv6|

### NETBIOS CODE TABLE (EXAM FAVORITE)

|Name|NetBIOS Code|Type|Information Obtained|
|---|---|---|---|
|Host name|<00>|UNIQUE|Hostname|
|Domain|<00>|Group|Domain name|
|Host name|<03>|UNIQUE|Messenger service|
|Username|<03>|UNIQUE|Messenger service for logged-in user|
|Host name|<20>|UNIQUE|Server service running|
|Domain|1B|UNIQUE|Domain Master Browser name|
|Domain|1E|Group|Browser service elections|

### NETBIOS TOOLS AND COMMANDS

|Tool / Command|Purpose|
|---|---|
|nbstat -m|Local NetBIOS table|
|nbstat -A 10.10.10.10|Remote system NetBIOS table|
|nbstat -c|Remote NetBIOS cache|
|PsExec|Enumerate user accounts|
|PsFile|View remotely opened files|
|net view \\\\computername|Enumerate shared resources on host|
|net view \\\\domain|Enumerate shared resources on domain|

---

## SNMP ENUMERATION

|Port|Protocol|Service|
|---|---|---|
|UDP 161|SNMP|Agent|
|UDP 162|SNMP|Trap|

### SNMP VERSIONS TABLE (EXAM FAVORITE)

|Version|Security|Detail|
|---|---|---|
|v1|None|Plaintext community strings|
|v2c|None|Faster than v1, still plaintext|
|v3|Auth + Encryption|Secure — recommended|

EXAM TRAP:
**v1 = none, v2c = none (faster), v3 = encrypted**

### SNMP TOOLS

|Tool|Detail|
|---|---|
|SNMPCheck|Query target via SNMP|
|Engineers Toolset|Multi-function SNMP scanner|
|SNMP Scanner|Discover SNMP-enabled hosts|
|OpUtils 5|IP and SNMP utilities|
|SNScan|SNMP network scanner|
|snmpwalk -v1 -c public|View all OIDs on target|
|snmp-check|Query and dump SNMP data|
|SoftPerfect Network Scanner|Network + SNMP scanner|

### MANAGEMENT INFORMATION BASE (MIB) TABLE (EXAM FAVORITE)

|MIB Module|Color|Purpose|
|---|---|---|
|MIB-II|🟢|TCP/IP networking management|
|HOSTMIB|🟡|Hardware and system stats|
|LNMIB2|🔵|Windows LAN Manager services|
|WINS.MIB|🟣|NetBIOS name database|
|DHCP.MIB|🟠|DHCP service monitoring|

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
|ldapsearch|Command-line LDAP query tool|
|AD Explorer|Microsoft Active Directory explorer|
|Softerra LDAP Administrator|GUI LDAP browser and editor|
|nmap ldap-brute NSE script|Brute-force LDAP credentials via Nmap|

---

## NTP AND NFS ENUMERATION

### NTP

|Port|Protocol|Service|
|---|---|---|
|UDP 123|NTP|Network Time Protocol|

|Tool|Detail|
|---|---|
|ntptrace|Trace NTP path to server|
|ntpdc|Query NTP daemon|
|ntpq|Query NTP server|

### NFS

|Port|Protocol|Service|
|---|---|---|
|TCP 2049|NFS|Network File System|

|Tool|Detail|
|---|---|
|rpcinfo -p|List open RPC ports|
|showmount|Show exported NFS shares|
|rpc-scan|Scan RPC services|
|SuperEnum|Enumerate NFS shares|

---

## SMTP AND DNS ENUMERATION

### SMTP

|Port|Protocol|Service|
|---|---|---|
|TCP 25|SMTP|Simple Mail Transfer Protocol|

|Tool / Command|Purpose|
|---|---|
|Telnet SMTP VRFY|Check if address exists for user|
|Telnet SMTP EXPN|Expand mailing list into individual recipients|
|Telnet SMTP RCPT TO|Specify recipient of message|
|Telnet <email server>|Manual SMTP interaction|
|Nmap|Service and user enumeration|
|Metasploit|SMTP auxiliary modules|
|NetScanTools Pro|GUI network + SMTP scanner|
|smtp-user-enum|Brute-force SMTP user enumeration|

### DNS ENUMERATION USING ZONE TRANSFER

|Port|Protocol|Service|
|---|---|---|
|UDP/TCP 53|DNS|Domain Name System|

|Tool|Purpose|
|---|---|
|dig ns|Retrieve all DNS name servers|
|nslookup|Windows hosts, name servers, mail records|
|DNSRecon -t axfr -d -|Perform DNS zone transfer|

### DNS CACHE SNOOPING

|Method|Detail|
|---|---|
|Non-recursive|Responds with root hints — dig +norecursive|
|Recursive|TTL is examined to determine cached entries|

### DNSSEC ZONE WALKING

|Item|Detail|
|---|---|
|Concept|Enumerating DNSSEC-signed zones|
|Tools|LDNS, DNSRecon, Knock, Raccoon, Turbolist3r, OWASP Amass|
|Amass Command|amass enum -d <domain>|

---

## IPSEC ENUMERATION

|Tool / Command|Purpose|
|---|---|
|nmap -sU -p 500|Scan UDP 500 for IKE|
|ike-scan -M|Discover and fingerprint IKE endpoints|

---

## VoIP ENUMERATION

|Tool|Detail|
|---|---|
|Svmap|SIP VoIP scanner and enumerator|

---

## RPC ENUMERATION

|Tool / Command|Purpose|
|---|---|
|nmap -sR|RPC service enumeration|
|nmap -T4 -A|Aggressive scan with OS/service detection|

---

## UNIX/LINUX USER ENUMERATION

|Tool / Command|Purpose|
|---|---|
|rusers -a, -l, -u, -i|Remote user enumeration with flags|
|rwho -a|Show who is logged in across network|
|finger -s|Display user information|

---

## SMB ENUMERATION

|Tool / Command|Purpose|
|---|---|
|nmap -p 445 -A|Full scan on SMB port|
|nmap -p 445 --script smb-protocols|Enumerate SMB protocol versions|
|nmap -p 139 --script smb-protocols|Enumerate SMB over NetBIOS|

---

## EXAM EXTRAS (Boson Practice Test)

### SMTP COMMANDS

|Command|Purpose|
|---|---|
|EHLO|Connection initiation (servers that support EHLO; if not supported, falls back to HELO)|
|RCPT TO|Indicate recipient|
|VRFY|Verify existence of mailbox|
|EXPN|Request recipients of mailing list|

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
|Enumeration|Process of extracting usernames, groups, shares, and services|
|NetBIOS Ports|137 UDP, 138 UDP, 139 TCP — does NOT work on IPv6|
|SNMP v1|No security, plaintext community strings|
|SNMP v2c|Faster than v1, still plaintext|
|SNMP v3|Auth + encryption — recommended|
|LDAP Port|TCP 389 — LDAPS is TCP 636|
|NFS Port|TCP 2049|
|NTP Port|UDP 123|
|SMTP Port|TCP 25|
|DNS Port|UDP/TCP 53 — zone transfer = AXFR|
|IPSec Port|UDP 500 — IKE/ISAKMP|
|SIP Ports|TCP/UDP 5060, 5061|
|MIB-II|Manages TCP/IP networking|
|HOSTMIB|Monitors hardware and system resources|
|LNMIB2|Windows LAN Manager services|
|WINS.MIB|NetBIOS name database|
|DHCP.MIB|DHCP service monitoring|
|NetBIOS Code <00>|Hostname (UNIQUE) or Domain (Group)|
|NetBIOS Code <20>|Server service running|
|NetBIOS Code 1B|Domain Master Browser|

---

## PRACTICE QUESTIONS

|Q#|Question|Answer|
|---|---|---|
|1|Which SNMP version provides encryption and authentication?|SNMPv3|
|2|What port does LDAP use for secure connections?|TCP 636 (LDAPS)|
|3|Which NetBIOS code identifies a Domain Master Browser?|1B|
|4|What command performs a DNS zone transfer with dig?|dig ns (then dig @server domain AXFR)|
|5|Which tool is used to scan for IKE endpoints in IPSec enumeration?|ike-scan -M|
