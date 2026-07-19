# MODULE 02 — Footprinting and Reconnaissance

|Item|Memorize|
|---|---|
|Module Number|02|
|Module Name|Footprinting and Reconnaissance|
|Focus|Information gathering, OSINT, DNS/WHOIS, network scanning, social engineering, port scanning|

---

## LEARNING OBJECTIVES (DO NOT SKIP — EXAM LIST)

|Objective #|Description|
|---|---|
|01|Understand TCP/IP networking fundamentals|
|02|Learn packet crafting tools and techniques|
|03|Identify types of reconnaissance (passive vs active)|
|04|Use Google advanced search operators for footprinting|
|05|Explore search engines for OSINT|
|06|Enumerate sub-domains and DNS records|
|07|Perform competitive intelligence gathering|
|08|Conduct social network reconnaissance|
|09|Perform WHOIS and DNS footprinting|
|10|Understand port scanning techniques and Nmap|

---

# OBJECTIVE 01 — TCP/IP NETWORKING

---

## TCP FLAGS (CRITICAL — MEMORIZE FOR EXAM)

|Flag|Full Name|Purpose|
|---|---|---|
|SYN|Synchronize|Initial communication, negotiation of parameters and sequence numbers|
|ACK|Acknowledgement|Acknowledges SYN flags; set on all segments after initial SYN|
|RST|Reset|Forces termination of connection in both directions|
|FIN|Finish|Closes communications gracefully|
|URG|Urgent|Indicates data is being sent out of band (e.g., canceling message midstream)|

[Imagen disponible en Obsidian: TCP segment structure]

[Imagen disponible en Obsidian: Three-way handshake]

MEMORY HOOK:
**SYN → SYN/ACK → ACK → FIN/RST** (three-way handshake + teardown)

EXAM TRAP:
SYN sequence number is random and increments with each packet sent — many attacks attempt to guess this number.

---

## UDP — KEY PROTOCOLS

|Item|Memorize|
|---|---|
|Nature|Connectionless|
|Most used protocols|TFTP, DNS, DHCP|

EXAM TRAP:
UDP is connectionless — no handshake, no guaranteed delivery.

---

## TCP/UDP COMPARISON

|Feature|TCP|UDP|
|---|---|---|
|Connection|Connection-oriented|Connectionless|
|Reliability|Guaranteed delivery|No guarantee|
|Speed|Slower|Faster|
|Handshake|Yes (three-way)|No|

---

## NETWORKING CONCEPTS

|Item|Memorize|
|---|---|
|Switched networks|Reduces number of received frames not addressed to your system|
|IPv4 addressing|Unicast, multicast, broadcast|
|ICMP|Internet Control Message Protocol (Network layer)|

---

## ICMP MESSAGE CODES

|Code|Type|
|---|---|
|0|Echo Reply|
|3|Destination unreachable|
|3/0|Destination network unreachable|
|3/1|Destination host unreachable|
|3/6|Network unknown|
|3/9|Network administratively prohibited|
|3/13|Communication administratively prohibited|
|4|Source quench|
|5|Redirect|
|8|Echo request|
|11|Time exceeded|

---

# OBJECTIVE 02 — PACKET CRAFTING TOOLS

|Tool|Description|
|---|---|
|NetScanTools|Network scanning and packet analysis|
|Ostinato|Packet crafting and traffic generator|
|packETH|Ethernet packet generator|
|LANforge FIRE|Traffic generator and network impairment|
|Colasoft Packet Builder|Construct and send custom packets|

TCP handshake sequence used: **SYN, SYN/ACK, ACK, FIN**

IANA maintains the Service Name/Transport Protocol Port Number Registry — the official list of all port number reservations.

---

# OBJECTIVE 03 — TYPES OF RECONNAISSANCE

|Type|Interaction|Examples|
|---|---|---|
|Passive|Without direct interaction|OSINT, databases, intelligence sharing|
|Active|Direct interaction with target|DNS interrogation, social engineering, port scanning|

EXAM TRAP:
Passive reconnaissance leaves **no trace** on the target. Active reconnaissance can be **detected**.

---

# OBJECTIVE 04 — GOOGLE ADVANCED SEARCH OPERATORS

|Search Operator|Purpose|
|---|---|
|cache:|Displays webpages in Google cache|
|link:|Lists web pages that have links to specified web page|
|related:|Lists web pages that are similar to specified web page|
|info:|Presents information Google has about a particular webpage|
|site:|Restricts results to given domain|
|allintitle:|Restricts results to websites containing all search keywords in title|
|intitle:|Restricts results to documents containing specific keywords in title|
|allinurl:|Restricts to results in URL containing all keywords|
|inurl:|Documents containing keyword in URL|
|location:|Find information for specific location|

MEMORY HOOK:
**site:domain.com intitle:keyword** — most common combination in exam questions.

---

# OBJECTIVE 05 — SEARCH ENGINES FOR OSINT

## META SEARCH ENGINES

|Tool|Description|
|---|---|
|Startpage|Hides user's IP address|
|Metager|Meta search aggregation|
|etools.ch|Multi-engine search|

## FTP SEARCH ENGINES

|Tool|URL/Description|
|---|---|
|NAPALM FTP Indexer|FTP directory search|
|FreewareWeb|FTP file search|
|Mamont|FTP search|
|globalfilesearch.com|Global FTP search|

## SCADA / IoT SEARCH ENGINES

|Tool|Description|
|---|---|
|Shodan|Search engine for Internet-connected devices|
|Censys|Internet-wide scanning and search|
|ZoomEye|Cyberspace search engine|

EXAM TRAP:
Shodan, Censys, and ZoomEye are specifically designed for **SCADA/IoT device discovery**.

---

# OBJECTIVE 06 — SUB-DOMAIN AND DNS TOOLS

|Tool|Purpose|
|---|---|
|Netcraft|Top-level domains, OS detection, sub-domains|
|DNSdumpster|DNS enumeration and sub-domain discovery|
|pentest-tools|Sub-domain and vulnerability scanning|
|sublist3r|Sub-domain brute-force enumeration|
|Photon|Retrieve archived URLs|

---

# OBJECTIVE 07 — COMPETITIVE INTELLIGENCE GATHERING

|Tool/Database|Description|
|---|---|
|EDGAR Database|SEC filings and financial reports|
|D&B Hoovers|Sales intelligence|
|LexisNexis|Legal and business research|
|BusinessWire|Press releases and news|
|Factiva|News and business information|
|MarketWatch|Financial market data|
|The Wall Street Transcript|Corporate earnings transcripts|
|Euromonitor|International market research|
|Experian|Credit and business data|
|The Search Monitor|Brand and ad monitoring|
|USPTO|Patent and trademark database|
|ABI Inform Global|Business periodicals|
|SimilarWeb|Website traffic analytics|
|SE Ranking|SEO and competitive analysis|

---

# OBJECTIVE 08 — SOCIAL NETWORK RECONNAISSANCE

|Tool|Purpose|
|---|---|
|TheHarvester|Email and sub-domain harvesting from public sources|
|BuzzSumo|Analyze social media content presence|
|Sherlock|Username enumeration across social networks|
|Social Searcher|Social media people search|

## THEHARVESTER COMMAND EXAMPLES

```bash
theharvester -d microsoft -l 200 -b linkedin
```

|Flag|Purpose|
|---|---|
|-d|Specifies the target domain|
|-b|Specifies the data source (e.g., linkedin)|
|-l|Limits results (e.g., -l 200 = 200 results)|

EXAM TRAP:
**-d** is domain, **-b** is data source, **-l** is result limit. Do not confuse these flags.

---

## PUBLIC SOURCE CODE REPOSITORIES

|Tool|Description|
|---|---|
|ReconNG|Web reconnaissance framework, open-source|

---

# OBJECTIVE 09 — WHOIS AND DNS FOOTPRINTING

---

## WHOIS — DEFINITION

|Item|Memorize|
|---|---|
|WHOIS|Protocol for querying databases about domain registration and IP assignment|

---

## TYPES OF WHOIS

|Type|Description|
|---|---|
|Thick WHOIS|Stores complete WHOIS information for the domain|
|Thin WHOIS|Stores only the name of the WHOIS server|
|Decentralized WHOIS|Complete info managed by independent entities|

MEMORY HOOK:
**Thick = complete, Thin = server name only**

EXAM TRAP:
Decentralized WHOIS means each registrar manages its own records independently.

---

## REGIONAL INTERNET REGISTRIES (RIRs)

|Registry|Region|
|---|---|
|ARIN|Americas (North America)|
|AFRINIC|Africa|
|APNIC|Asia-Pacific Network Information Centre|
|RIPE|Europe, Middle East, Central Asia|
|LACNIC|Latin America and Caribbean|

MEMORY HOOK:
**ARIN → Americas, AFRINIC → Africa, APNIC → Asia, RIPE → Europe, LACNIC → Latin America**

---

## GEOLOCATION

|Tool|Description|
|---|---|
|IP2Location|Determine geographic location from IP address|

---

## DNS RECORD TYPES (HIGH YIELD)

|Record Type|Label|Description|
|---|---|---|
|A|Address record|Maps hostname to IPv4|
|AAAA|IPv6 address record|Maps hostname to IPv6|
|MX|Mail exchange|Identifies mail server for domain|
|NS|Name server|Identifies authoritative name servers|
|CNAME|Canonical name|Maps alias to true hostname|
|SOA|Start of Authority|Defines authority for DNS zone (contains name of server responsible for all DNS records within namespace)|
|SRV|Service record|Specifies service location (LDAP, SIP)|
|PTR|Pointer record|Reverse lookup — maps IP address to hostname (usually associated with email servers)|
|RP|Responsible person|Lists admin/owner of domain|
|HINFO|Host information|Stores hardware type and operating system|
|TXT|Text record|Stores text data for DKIM and SPF|

MEMORY HOOK:
**A = IPv4, AAAA = IPv6, MX = mail, NS = nameserver, PTR = reverse**

---

## DNS ENUMERATION TOOLS

|Tool|Description|
|---|---|
|Fierce|Finds subdomains, DNS misconfigurations, IP ranges, hostnames, internal naming patterns|
|DNSRecon|DNS enumeration, discovers hosts and subdomains|
|mxtoolbox|MX record and DNS diagnostics|

---

# PORTS AND PORT SCANNING

---

## PORT RANGES

|Range|Type|
|---|---|
|0–1023|Well-known ports|
|1024–49151|Registered ports|
|49152–65535|Dynamic/private ports|

---

## IMPORTANT PORT NUMBERS (MEMORIZE)

|Port Number|Protocol|Transport|
|---|---|---|
|20/21|FTP|TCP|
|22|SSH|TCP|
|23|Telnet|TCP|
|25|SMTP|TCP|
|53|DNS|TCP and UDP|
|67|DHCP|UDP|
|69|TFTP|UDP|
|80|HTTP|TCP|
|88|Kerberos|TCP|
|110|POP3|TCP|
|123|NTP|UDP|
|135|MS RPC|TCP|
|137–139|NetBIOS|TCP/UDP|
|143|IMAP|TCP|
|161/162|SNMP|UDP|
|178|RTSP|TCP/UDP|
|389|LDAP|TCP/UDP|
|443|HTTPS|TCP|
|445|SMB|TCP|
|514|Syslog|UDP/TCP|

MEMORY HOOK:
**21=FTP, 22=SSH, 23=Telnet, 25=SMTP, 53=DNS, 80=HTTP, 443=HTTPS** — first 7 are exam favorites.

EXAM TRAP:
DNS uses **both TCP and UDP** on port 53. DHCP uses **UDP** on port 67.

---

## PORT STATES

|State|Meaning|
|---|---|
|CLOSE_WAIT|Remote side has closed the connection|
|TIME_WAIT|Your side has closed the connection|

---

## NETSTAT COMMANDS

|Command|Description|
|---|---|
|netstat -an|Displays all connections and listening ports|
|netstat -b|Shows executable tied to the open port|

---

## PORT SCANNING TECHNIQUES (VERY HIGH YIELD)

|Scan Type|Description|Detection Difficulty|
|---|---|---|
|Full connect|TCP connect / full open scan — completes three-way handshake, tears down with RST. Open ports respond with SYN/ACK, closed with RST|Easiest to detect, most reliable|
|Stealth (SYN scan)|Half-open scan — only SYN packets sent. No full connection established|Less noticeable|
|Inverse TCP flag|Uses FIN, URG, or PSH flags. Open = no response, closed = RST/ACK|Medium|
|Christmas scan (XMAS)|All flags turned on. Same response as inverse TCP scan. Does not work against Microsoft machines|Medium|
|ACK flag probe|Sends ACK, checks TTL (if RST < 64 = open) or Window size (if > 0 = open). Can also detect firewalls (RST back = no firewall)|Medium|
|IDLE scan|Spoofs an IP address, requires an idle machine|Hard to trace back|

MEMORY HOOK:
**Full connect = reliable but noisy, SYN = stealthy, XMAS = all flags on but fails on Windows**

EXAM TRAP:
Christmas scan does **NOT** work against **Microsoft** machines.

---

## PING SWEEP

|Item|Memorize|
|---|---|
|Purpose|Find active machines on a network|
|Noise level|Very noisy|

### PING SWEEP TOOLS

|Tool|
|---|
|Angry IP Scanner|
|SolarWinds Engineers Toolset|
|Network Ping|
|OpUtils|
|Superscan|
|Advanced IP Scanner|
|Pinkie|

---

## ARP

|Item|Memorize|
|---|---|
|Purpose|Ties IP address to MAC address in local network|
|ARP scan (Nmap)|nmap -sn -PR 192.168.1.69|

---

## ADDITIONAL SCANNING TOOLS

|Tool|Description|
|---|---|
|Nmap|Default scan type is SYN scan|
|NetScanTools|Network utility suite|
|Hping3|Network packet crafting and scanning|

EXAM TRAP:
Nmap without any options runs a **SYN scan** by default.

---

## NMAP THROUGH TOR

|Item|Memorize|
|---|---|
|Use case|Anonymize scanning traffic|
|Note|Port scanners work by manipulating TCP flags to identify active hosts and scan ports|

---

# SOCIAL ENGINEERING (FOOTPRINTING CONTEXT)

|Technique|Description|
|---|---|
|Eavesdropping|Listening to conversations|
|Shoulder surfing|Observing the target secretly|
|Dumpster diving|Searching through discarded materials|
|Impersonation|Pretending to be a legitimate or authorized person|

---

# AUTOMATING FOOTPRINTING TASKS

|Tool|Description|
|---|---|
|Maltego|Determine relationships and real-world links|
|Recon-ng|Web reconnaissance framework, open-source|
|FOCA|Find metadata and hidden information in scanned documents|
|subfinder|Subdomain discovery|
|OSINT Framework|Aggregated OSINT tools|
|Recon-dog|Uses APIs to collect information about target system|
|BillCipher|DNS lookup, WHOIS, port scanning, zone transfer, and more|

---

# MIB INFORMATION

|Item|Memorize|
|---|---|
|MIB|Management Information Base — stores SNMP object information|

---

## EXAM EXTRAS (Boson Practice Test)

### ZOOMINFO

|Item|Memorize|
|---|---|
|Zoominfo|Get info about companies, CEOs, CTOs etc.|

---

### CISCO VPN FILETYPE

|Item|Memorize|
|---|---|
|Cisco VPN file type|PCF — use Google dork `filetype:pcf`|

---

### RIPE NCC

|Item|Memorize|
|---|---|
|RIPE NCC|Europe regional internet registry (RIR)|

---

# EXAM FLASHCARDS

|Term|Definition|
|---|---|
|Footprinting|First phase of ethical hacking — systematic information gathering|
|Reconnaissance|Process of discovering and collecting information about a target|
|OSINT|Open Source Intelligence — information gathered from public sources|
|Passive reconnaissance|Gathering info without direct interaction with target|
|Active reconnaissance|Direct interaction with target (port scanning, DNS queries)|
|Thick WHOIS|WHOIS record storing complete domain information|
|Thin WHOIS|WHOIS record storing only the WHOIS server name|
|SOA record|Start of Authority — defines authority for a DNS zone|
|PTR record|Pointer record — reverse DNS lookup (IP to hostname)|
|SYN scan|Half-open port scan — sends SYN, analyzes response without completing handshake|
|Christmas scan|XMAS scan — all TCP flags set; does not work on Microsoft systems|
|Full connect scan|Completes three-way handshake on each port; most reliable but most detectable|
|ACK probe|Sends ACK packet, checks TTL or Window size to determine port state and firewall presence|
|Shodan|Search engine for Internet-connected devices (SCADA/IoT)|
|TheHarvester|Tool for email and sub-domain harvesting using public sources|

---

# PRACTICE QUESTIONS

|Q#|Question|Answer|
|---|---|---|
|1|What are the three types of WHOIS records and how do they differ?|Thick = complete domain info, Thin = only WHOIS server name, Decentralized = complete info managed independently by each registrar|
|2|Which TCP flag combination is used in a Christmas scan and why does it fail on Microsoft systems?|All flags set (FIN+PSH+URG); Microsoft implementations do not respond to this non-standard combination|
|3|What is the difference between a SYN scan and a full connect scan?|SYN scan sends only SYN (half-open, stealthy); Full connect completes the three-way handshake (reliable, detectable)|
|4|Name three SCADA/IoT search engines and their purpose.|Shodan, Censys, ZoomEye — all designed to discover Internet-connected devices and SCADA systems|
|5|Which DNS record type is used for reverse lookups and what does it map?|PTR record — maps an IP address back to a hostname (reverse of A record)|

---

MEMORY BLOCK (OVERALL):
**Footprinting = passive first → gather OSINT → WHOIS/DNS → scan ports → social engineering → automate with tools**
