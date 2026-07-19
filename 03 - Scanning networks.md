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
|01|Understand TCP communication flags|
|02|Explain scanning techniques for host discovery|
|03|Identify port and service discovery methods|
|04|Describe port scan types and scan responses|
|05|Use Nmap for scanning|
|06|Use Hping3 for scanning|
|07|Perform service version discovery|
|08|Perform OS discovery and banner grabbing|
|09|Explain techniques for scanning beyond firewalls|

---

# TCP COMMUNICATION FLAGS

|Flag|Meaning|
|---|---|
|SYN|Starts TCP connection, initial SYN flag|
|ACK|Acknowledges SYN flag, set on all segments after initial SYN|
|FIN|Closes communications, gracefully|
|RST|Forces termination of communications|
|PSH|Forces delivery of data|
|URG|Marks data as priority, sent out of band|

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
|ARP Ping Scan|`nmap -sn -PR 192.168.1.0/24`|Local only; cannot use hping3|
|UDP Ping Scan|`nmap -sn -PU`|Sends UDP probes|
|ICMP Echo Ping Scan|`nmap -sn -PI`|`-L` number of pings, `-T` ping timeout|
|ICMP Timestamp Ping Scan|`nmap -sn -PP`|Gets current time from machine|
|ICMP Address Mask Ping Scan|`nmap -sn -PM`|Gets subnet mask|
|TCP SYN Ping Scan|`nmap -sn -PS`|Detects online machine without creating connection|
|TCP ACK Ping Scan|`nmap -sn -PA`|Uses default port 80; increases chances of bypassing firewall|
|IP Protocol Ping Scan|`nmap -sn -PO`|Sends different probe packets; any response = host online|

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
|TCP Connect / Full Open|If port open, handshake succeeds; if closed, get RST|`nmap -sT -v`|
|Stealth (Half-Open)|Resets TCP connection abruptly, does not complete handshake; more stealthy than -sT|`nmap -sS`|
|Inverse TCP|Sends non-standard TCP flag combinations to avoid IDS; not effective against Windows, used for Unix|Various|
|Xmas|FIN, URG and PUSH flags set to send TCP frame|`nmap -sX`|
|FIN Scan|Sends FIN flag only|`nmap -sF`|
|NULL Scan|No flags set|`nmap -sN`|
|TCP Maimon|Sends FIN and ACK flags; if port closed, responds with RST|`nmap -sM`|
|ACK Flag Probe|Sends ACK flag and looks at TTL; if RST < 64 bytes, port is open|`nmap -ttl time target`|
|IDLE/IPID|Sends spoofed source address to target using third-party zombie host|`nmap -sI zombieIP targetIP`|
|UDP|Sends datagram to port; if response, closed; no response, probably open|`nmap -sU`|
|SSDP / UpnP|Scans for UPnP-enabled devices|`nmap -sS -A -f`|

EXAM TRAP:  
IDLE/IPID scan uses a **zombie host** to hide the scanner's identity.

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
|Purpose|Identifies service versions running on open ports|

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
|`nmap -O`|OS discovery|
|`nmap --script` or `-sC`|Nmap Scripting Engine|
|`nmap -6 -O <target>`|IPv6 OS discovery|

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
|Maimon scan|`nmap -sM`|Sends FIN/ACK probes|
|FIN scan|`nmap -sF`|If port open, packet discarded; if closed, RST sent|
|XMAS scan|`nmap -sX`|Sends FIN, PSH and URG flags|
|ACK scan|`nmap -sA`|Determines if port is filtered or unfiltered|

---

### TCP ACK PING

|Item|Memorize|
|---|---|
|Command|`nmap -sn -PA`|
|Purpose|Detect active devices behind firewall|

---

### NMAP — DECOY SCAN

|Item|Memorize|
|---|---|
|Command|`nmap -D`|
|Purpose|Spoofed source IP address to hide scanner|

---

### HPING3

|Item|Memorize|
|---|---|
|Command|`hping3 -c 1`|
|Purpose|Sends single ICMP echo request; will not work on Windows (drops ICMP echo packets not directed to device's IP)|

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
|Purpose|Uses zombie host IPID to check open/closed ports|

---

### NMAP ADVANCED COMMANDS

|Command|Description|
|---|---|
|`nmap -sI`|Idle scan — IPID returned by zombie host|
|`nmap -sF`|FIN scan|
|`nmap -g`|Spoof port number (alternate: `--source-port`); only for SYN/UDP scans|
|`nmap -A`|Aggressive scan|
|`nmap -D`|Decoy scan or spoofed source address scan|
|`nmap -f`|Fragmented IP packets to avoid IDS|

---

# EXAM FLASHCARDS

|Term|Definition|
|---|---|
|SYN|Flag that initiates TCP connection|
|ACK|Flag that acknowledges receipt of data|
|RST|Flag that forces connection termination|
|FIN|Flag that gracefully closes a connection|
|Stealth Scan|Half-open scan (-sS) that does not complete TCP handshake|
|Xmas Scan|Sends FIN + URG + PSH flags (-sX)|
|IDLE/IPID Scan|Uses a zombie host to spoof source address (-sI)|
|UDP Scan|Sends datagrams; no response likely means open (-sU)|
|ARP Ping Scan|Local-only host discovery using ARP requests (-PR)|
|TCP SYN Ping|Detects online host without completing connection (-PS)|
|ICMP Echo Ping|Traditional ping using ICMP echo request (-PI)|
|-T0|Paranoid timing template, slowest|
|-T5|Insane timing template, fastest|
|Banner Grabbing|Technique to identify OS and services via TTL and responses|
|Packet Fragmentation|Breaks packets into smaller fragments to evade firewalls (-f)|

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
