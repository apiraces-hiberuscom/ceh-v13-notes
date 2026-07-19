# MODULE 08 — NETWORK SNIFFING

|Item|Memorize|
|---|---|
|Module Number|08|
|Module Name|Network Sniffing|
|Focus|Packet sniffing concepts, sniffing methods, protocols, tools, countermeasures|

---

## LEARNING OBJECTIVES (DO NOT SKIP — EXAM LIST)

|Objective #|Description|
|---|---|
|01|Understand packet sniffing concepts and types|
|02|Explain ARP poisoning and spoofing techniques|
|03|Describe VLAN hopping and STP attacks|
|04|Identify protocols vulnerable to sniffing|
|05|Use Wireshark and other sniffing tools|
|06|Explain DNS poisoning and DHCP attacks|
|07|Implement sniffing countermeasures and detection|

---

# OBJECTIVE 01 — PACKET SNIFFING CONCEPTS

---

## PACKET SNIFFING — CORE DEFINITION

|Term|Definition|
|---|---|
|Packet Sniffing|Monitoring and capturing data packets passing through a given network using a software application or hardware device|
|Capability|Allows an attacker to observe and attack an entire network from any given point|

MEMORY HOOK:
**Sniffing = passive capture of all traffic**

---

## PROMISCUOUS MODE

|Item|Memorize|
|---|---|
|Promiscuous Mode|NIC mode that listens to ALL data on its segment|
|Purpose|Attacker switches NIC into promiscuous mode to capture all packets|
|Requirement|Works directly only in shared ethernet environments|

EXAM TRAP:
Promiscuous mode captures all packets **regardless of destination MAC**.

---

## ETHERNET ENVIRONMENTS

|Environment|Behavior|Sniffing Impact|
|---|---|
|Shared Ethernet|Single bus connects all hosts to compete for bandwidth (hub-based)|NIC in promiscuous mode captures ALL traffic automatically|
|Switched Ethernet|Switch maintains ARP table — maps MAC to port; packets sent only to destined computer|Promiscuous mode alone does NOT work; requires additional attack methods|

MEMORY HOOK:
**Hub = everyone sees everything; Switch = selective delivery**

---

# OBJECTIVE 02 — SNIFFING METHODS FOR SWITCHED NETWORKS

---

## ARP SPOOFING / POISONING

|Item|Memorize|
|---|---|
|ARP Protocol|Stateless — machine can send ARP reply even without being asked|
|Attack|Forged ARP messages that associate attacker's MAC with IP of another host|
|Result|Enables Man-in-the-Middle (MITM) position|
|Tools|arpspoof, Habu|
|Defence|Dynamic ARP Inspection (DAI)|
|Detection|Capsa portable network analyzer, Wireshark, OPUtils, Netspionage|

---

## MAC FLOODING

|Item|Memorize|
|---|---|
|Layer|Layer 2|
|Technique|Attacker sends fake MAC addresses until CAM table is full|
|Result|Switch starts acting as a HUB — broadcasts ALL packets everywhere|
|Command|macof -i eth0|

EXAM TRAP:
MAC flooding converts a **switch into a hub**.

---

## MAC SPOOFING / DUPLICATING

|Item|Memorize|
|---|---|
|Technique|Impersonate a MAC address to connect to a switch port|
|Method (Windows)|Change MAC in adapter settings|
|Tool|MAC Address Changer|
|Defence|DHCP snooping binding table, Dynamic ARP Inspection, IP Source Guard|

---

## ICMP ROUTER DISCOVERY PROTOCOL (IDPR) SPOOFING

|Item|Memorize|
|---|---|
|Function|Allows host to discover IP of active routers on its subnet|
|Attack|Spoofed ICMP router discovery messages redirect traffic|

---

## VLAN HOPPING

|Technique|Description|Defence|
|---|---|---|
|Switch Spoofing|Rogue switch creates trunk between legitimate and rogue switch. Only possible when interface configured with "dynamic auto", "dynamic desirable", or trunk mode|Configure ports as access ports; disable trunk negotiation|
|Double Tagging|Adds and modifies 802.1Q outer and inner tags in Ethernet frame; traffic flows through any VLAN in network (attacker wants to reach inner tag)|Set default VLAN to unused VLAN ID; explicitly tag all VLAN ports on all trunks|

---

## STP ATTACK (SPANNING TREE PROTOCOL)

|Item|Memorize|
|---|---|
|STP Purpose|Removing loops in network|
|Attack|Rogue switch introduced with lower priority than any other switch|
|Result|Rogue becomes root bridge — ALL traffic flows through it|
|Defence|BPDU Guard, Root Guard, Loop Guard, UDLD (Unidirectional Link Detection)|

MEMORY HOOK:
**STP attack = rogue root bridge steals all traffic**

---

# OBJECTIVE 03 — TYPES OF SNIFFING

---

## PASSIVE vs ACTIVE SNIFFING

|Type|Definition|Characteristics|
|---|---|---|
|Passive Sniffing|Observing traffic without sending any packets|Undetectable; works only on shared media (hubs)|
|Active Sniffing|Injecting traffic into the network to search for traffic|Detectable; works on switched networks|

---

## ACTIVE SNIFFING SUB-TYPES

|Sub-Type|Description|
|---|---|
|MAC Flooding|Overwhelms CAM table to force broadcast mode|
|DNS Poisoning|Redirects DNS queries to attacker-controlled servers|
|ARP Poisoning|Forces traffic through attacker via forged ARP replies|
|DHCP Attacks|Exhausts address pool or introduces rogue DHCP server|
|Switch Port Stealing|Sends forged ARP packets using victim's MAC to steal port|
|Spoofing Attack|General identity spoofing to redirect traffic|

---

# OBJECTIVE 04 — PROTOCOLS VULNERABLE TO SNIFFING

---

## VULNERABLE PROTOCOLS TABLE

|Protocol|Full Name|Vulnerability|
|---|---|---|
|Telnet|—|Transmits data in cleartext|
|Rlogin|—|Transmits data in cleartext|
|HTTP|HyperText Transfer Protocol|Unencrypted by default|
|SNMP|Simple Network Management Protocol|Community strings in cleartext|
|SMTP|Simple Mail Transfer Protocol|Email content in cleartext|
|NNTP|Network News Transfer Protocol|Newsgroup data in cleartext|
|POP|Post Office Protocol|Email retrieval in cleartext|
|FTP|File Transfer Protocol|Credentials and data in cleartext|
|IMAP|Internet Message Access Protocol|Email access in cleartext|
|TFTP|Trivial File Transfer Protocol|No authentication; data in cleartext|

MEMORY HOOK:
**If no encryption = vulnerable to sniffing**

---

# OBJECTIVE 05 — HARDWARE PROTOCOL ANALYZERS

---

## HARDWARE SNIFFERS

|Device|Key Feature|
|---|---|
|Xgig 1000 32/128 G|Inline, non-intrusive capture, auto negotiation, link training, forward error correction|
|SierraNet M1288|Fiber channel fabrics analysis|

---

## SPAN PORT

|Item|Memorize|
|---|---|
|SPAN|Switched Port Analyzer — Cisco feature|
|Also Known As|Port Mirroring|
|Function|Duplicates traffic from one port/ VLAN to another for monitoring|
|Risk|If attacker connects to SPAN port, they can compromise the whole network|

EXAM TRAP:
SPAN = **port mirroring**, not a sniffing tool itself.

---

# WIRETAPPING

---

## WIRETAPPING — DEFINITION

|Item|Memorize|
|---|---|
|Wiretapping|Official or unofficial tapping of phone lines to record conversations|
|Types|Direct line wiretap, radio wiretap|

---

## ACTIVE vs PASSIVE TAPPING

|Type|Definition|
|---|---|
|Active Tapping|MITM position — inject or alter data in transit|
|Passive Tapping|Snooping or eavesdropping — observe without modification|

---

# OBJECTIVE 06 — DHCP ATTACKS

---

## DHCP ATTACKS TABLE

|Attack|Technique|Tools|Defence|
|---|---|---|---|
|DHCP Starvation|Sends large number of requests to DHCP server exhausting address pool; server unable to allocate configs to new clients|Yersinia, dhcpStarvation.py, Metasploit, Hyenae|Enable port security, DHCP filtering|
|Rogue DHCP Server|MITM attack; introduces rogue DHCP server so packets reach it first; may assign IP that serves as client's default gateway. Set connection between interface and rogue as untrusted|mitm6, Ettercap, Gobbler|DHCP snooping, port security|

MEMORY HOOK:
**Starvation = exhaust pool; Rogue = fake server**

---

# OBJECTIVE 07 — DNS POISONING TECHNIQUES

---

## DNS POISONING TABLE

|Technique|Description|
|---|---|
|Intranet DNS Spoofing|Uses ARP poisoning to redirect internal DNS queries|
|Internet DNS Spoofing|Rogue DNS server with static IP; sends Trojan that changes DNS entries on victim's PC|
|Proxy Server DNS Poisoning|Trojan modifies proxy settings in Internet Explorer or any browser|
|DNS Cache Poisoning|Altering or adding forged DNS records to DNS resolver|
|SAD DNS Attack|Injecting harmful DNS entries in cache to divert traffic to attacker's servers; exploits side channels and flaws in dnsmasq, unbound, and BIND|

---

## DNS POISONING — TOOLS AND DEFENCE

|Item|Details|
|---|---|
|Tools|DerpNSpoof, Deserter, PolarDNS, Ettercap, Evilgrade, DNS Poisoner|
|Defence|DNSSEC, SSL|

MEMORY HOOK:
**Intranet = ARP-based; Internet = rogue DNS + Trojan; Cache = forge resolver records**

---

# WIRESHARK FILTERS — EXAM CRITICAL

---

|Filter / Expression|Description|
|---|---|
|tcp.port == 23|Monitoring specific port (Telnet)|
|ip.addr == 192.168.1.100|Filter traffic to/from specific machine|
|ip.addr == 192.168.1.100 && tcp.port == 23|Machine + specific port combined|
|tcp.port == 23 ip.addr == 10.0.0.4 or ip.addr == 10.0.0.5|Filter by multiple addresses|
|ip.addr == 10.0.0.4|Filter by IP address|
|ip.dst == 10.0.1.50 && frame_len > 400|Destination filter with frame length|
|tcp.flags.reset == 1|Display all TCP resets|
|udp.contains|Set filter for hex values|
|http.request|Displays all HTTP GET requests|
|tcp.analysis.retransmission|Displays all retransmissions in the trace|
|tcp contains traffic|Displays all TCP packets containing the word "traffic"|
|!(arp or icmp or dns)|Masks out ARP, ICMP, DNS or other protocols|
|tcp.port == 4000|Sets filter for any TCP packet with 4000 as source or destination port|
|tcp.port eq 25 or icmp|Displays only SMTP (port 25) and ICMP traffic|
|ip.src == 192.168.0.0/16 and ip.dst == 192.168.0.0/16|Displays traffic in LAN between workstations and servers|

---

# SNIFFING TOOLS

---

|Tool|Type|
|---|---|
|Capsa Portable Network Analyzer|Portable network analyzer|
|OmniPeek|Network analyzer|
|Wireshark|Protocol analyzer (uses WinPcap)|
|macof|MAC flooding tool (macof -i eth0)|

---

# SNIFFING COUNTERMEASURES

---

|Countermeasure|Purpose|
|---|---|
|Restrict physical access to network|Prevent unauthorized sniffing device attachment|
|End-to-end encryption|Encrypt data so captured packets are unreadable|
|Add MAC to ARP cache|Prevent ARP spoofing by static entries|
|Dynamic ARP Inspection|Validate ARP packets against DHCP snooping table|
|DHCP Snooping|Prevent rogue DHCP servers and DHCP starvation|
|Port Security|Limit MAC addresses per port|
|BPDU / Root / Loop Guard|Prevent STP attacks|
|Use VPN|Encrypt traffic over untrusted networks|
|Use SSH instead of Telnet|Encrypted remote access|

---

# HOW TO DETECT SNIFFING

---

## DETECTION METHODS TABLE

|Method|Description|
|---|---|
|IDS (Intrusion Detection System)|Monitors for suspicious sniffing activity on the network|
|Promiscuous Mode Detection|Tools like nmap --script=sniffer-detect, NetScanToolsPro detect NICs in promiscuous mode|

---

## SPECIFIC DETECTION TECHNIQUES

|Technique|Description|
|---|---|
|Ping Method|Send ping with incorrect MAC address; if host responds, it may be sniffing (promiscuous mode processes all frames)|
|DNS Method|Monitor for increased network traffic, reverse DNS lookups, or send ICMP request to non-existing IP address; sniffers often perform reverse DNS lookups|
|ARP Method|Send non-broadcast ARP request to all nodes; only a sniffer in promiscuous mode will respond to non-broadcast ARP|

---

## EXAM EXTRAS (Boson Practice Test)

### ARP POISONING

|Item|Memorize|
|---|---|
|ARP poisoning|Associates attacker's MAC with victim's IP address|

---

### DHCP STARVATION

|Item|Memorize|
|---|---|
|DHCP starvation|Impersonation of DHCP clients to exhaust address pool|

---

# EXAM FLASHCARDS

---

|Term|Definition|
|---|---|
|Packet Sniffing|Monitoring and capturing data packets passing through a network|
|Promiscuous Mode|NIC mode that captures all traffic on the segment regardless of destination|
|Shared Ethernet|Hub-based network where all hosts compete for bandwidth|
|Switched Ethernet|Switch-based network that directs traffic only to intended port|
|ARP Spoofing|Forged ARP messages associating attacker's MAC with another host's IP|
|MAC Flooding|Overwhelming CAM table so switch broadcasts all traffic like a hub|
|MAC Spoofing|Impersonating another device's MAC address to gain network access|
|VLAN Hopping|Technique to jump between VLANs using switch spoofing or double tagging|
|Double Tagging|Adding dual 802.1Q tags to bypass VLAN segmentation|
|STP Attack|Introducing a rogue switch with lower priority to become root bridge|
|DHCP Starvation|Exhausting DHCP address pool with massive fake requests|
|Rogue DHCP Server|Unauthorized DHCP server that intercepts client requests|
|DNS Cache Poisoning|Injecting forged DNS records into resolver cache|
|SAD DNS Attack|Exploiting side-channel flaws in DNS software to inject malicious entries|
|SPAN Port|Switched Port Analyzer — Cisco port mirroring feature|

---

# PRACTICE QUESTIONS

---

**Q1:** What happens when a switch's CAM table is flooded with fake MAC addresses?

<details><summary>Answer</summary>The switch stops learning new MAC addresses and begins broadcasting all incoming traffic to every port, effectively functioning as a hub. This is the core mechanism of a MAC flooding attack.</details>

---

**Q2:** An attacker sends forged ARP replies to associate their MAC with the default gateway's IP. What attack is this, and what is the primary defence?

<details><summary>Answer</summary>This is ARP spoofing/poisoning. The primary defence is Dynamic ARP Inspection (DAI), which validates ARP packets against the DHCP snooping binding table.</details>

---

**Q3:** Which two VLAN hopping techniques must a CEH candidate know, and how do you defend against switch spoofing?

<details><summary>Answer</summary>Switch spoofing and double tagging. Defend against switch spoofing by configuring all ports as access ports and disabling trunk negotiation (do not use dynamic auto, dynamic desirable, or trunk mode).</details>

---

**Q4:** In Wireshark, what filter displays all HTTP GET requests?

<details><summary>Answer</summary>http.request</details>

---

**Q5:** What is the key difference between passive and active sniffing?

<details><summary>Answer</summary>Passive sniffing involves no packet injection and is undetectable (works on shared media/hubs). Active sniffing involves injecting traffic into the network (e.g., ARP poisoning, MAC flooding) and is detectable (works on switched networks).</details>

---
