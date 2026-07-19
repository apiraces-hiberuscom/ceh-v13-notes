# MODULE 12 — EVADING IDS, FIREWALLS AND HONEYPOTS (EXAM CONTEXT)

|Item|Memorize|
|---|---|
|Module Number|12|
|Module Name|Evading IDS, Firewalls and Honeypots|
|Focus|Intrusion detection, firewalls, evasion techniques, honeypots, endpoint security|

---

## LEARNING OBJECTIVES (DO NOT SKIP — EXAM LIST)

|Objective #|Description|
|---|---|
|01|Summarize IDS, IPS, and firewall concepts|
|02|Explain IDS/Firewall evasion techniques|
|03|Describe endpoint security evasion techniques|
|04|Explain honeypot types and detection|
|05|Demonstrate IDS/Firewall evasion tools|

---

# IDS CONCEPTS

---

## INTRUSION DETECTION SYSTEM — CORE

|Item|Memorize|
|---|---|
|Main Function|Gathers and analyzes information within computer or network to identify unauthorized access and misuse|
|Nature|Packet sniffer which intercepts packets, usually TCP/IP|
|Behavior|Packets are analyzed then captured; evaluates traffic and raises alarm|

---

## IDS PLACEMENT

|Placement|Detail|
|---|---|
|Near Firewall|Outside or inside the firewall|
|Inside Network|Ideal location near DMZ|
|Best Practice|One outside FW and one inside near DMZ|

MEMORY HOOK:
**Outside + Inside near DMZ = best practice**

---

## HOW IDS WORKS

|Step|Action|
|---|---|
|1|IDS have sensors to detect malicious signatures; advanced IDS include behavioral activity|
|2|If signature matches, IDS performs predefined actions|
|3|When signature matches, anomaly detection will be skipped|
|4|When packets pass all tests, IDS forwards to the network|

---

## HOW IDS DETECTS INTRUSION

|Detection Method|Explanation|EXAM Key|
|---|---|---|
|Signature Recognition|Misuse detection; matches known patterns|Most common method|
|Anomaly Detection|Intrusion based on behavioral characteristics|Baseline comparison|
|Protocol Anomaly Detection|Deviations from established protocol standards|RFC compliance check|

EXAM TRAP:
Signature match → anomaly detection is **skipped**

---

# NIDS VS HIDS COMPARISON

|Feature|NIDS|HIDS|
|---|---|---|
|Type|Network-based|Host-based|
|Placement|Black box on network in promiscuous mode|Installed on specific host|
|Monitors|Network traffic patterns|File modification, system calls, logs|
|Detects|DDoS, network anomalies|File changes, local attacks|
|Resource Usage|Low on hosts|High — eats lots of resources|
|Commonality|Common|Not common|
|Visibility|Network-wide|Single host detail|

MEMORY HOOK:
**NIDS = network watchdog; HIDS = host watchdog**

---

# TYPES OF IDS ALERTS

|Alert Type|Action|Explanation|
|---|---|---|
|True Positive|Attack → Alert|IDS raises alarm when legitimate attack occurs|
|False Positive|No Attack → Alert|IDS raises alarm when there is no attack|
|False Negative|Attack → No Alert|IDS does not raise alarm when there is attack — MOST DANGEROUS|
|True Negative|No Attack → No Alert|IDS does not raise alarm when no attack has taken place|

MEMORY HOOK:
**True = correct; Positive = alert; Negative = no alert**
**False Negative = worst case = attack missed**

---

# INTRUSION PREVENTION SYSTEM (IPS)

---

## IPS — DEFINITION

|Item|Memorize|
|---|---|
|IPS|Considered active IDS; detects AND prevents intrusions|
|Difference from IDS|IPS can actively block malicious traffic|

---

## IPS CAPABILITIES

|Capability|Detail|
|---|---|
|Alerts|Generates alerts if abnormal traffic is detected|
|Logging|Records real-time logs|
|Blocking|Blocks and filters malicious traffic|
|Elimination|Detects and eliminates threats quickly|
|Accuracy|Identifies threats accurately without generating false positives|

---

## IPS CLASSIFICATION

|Type|Placement|
|---|---|
|Host-based IPS (HIPS)|On individual host|
|Network-based IPS (NIPS)|Inline on network segment|

---

# FIREWALL CONCEPTS

---

## FIREWALL — DEFINITION

|Item|Memorize|
|---|---|
|Purpose|Prevent unauthorized access|
|Placement|Junction or gateway between two networks|
|Function|Examines all messages entering and leaving the internet|

---

## FIREWALL ARCHITECTURE

|Architecture|Definition|
|---|---|
|Bastion Host|Designed for defending network against attacks; mediator between inside and outside; two interfaces — public (direct to internet) and private (connected to internal network)|
|Screened Subnet (DMZ)|Created with two or three-homed firewall behind screening firewall; multi-homed firewall = node with multiple NICs connecting to separate network segments|
|DMZ|Placed in neutral zone between internal and untrusted external network; serves as buffer between secure internal network and insecure internet|

MEMORY HOOK:
**Bastion = mediator; Screened subnet = two-firewall DMZ; DMZ = buffer zone**

---

# TYPES OF FIREWALLS

---

## BY CONFIGURATION

|Type|Description|Examples|
|---|---|---|
|Network-based|Placed at perimeter; inspects packet headers and enforces security rules|Cisco Secure Firewall ASA, Palo Alto PA7500, Fortigate 7121F|
|Host-based|On individual PCs or servers; protects against unauthorized access, trojans, worms|MS Defender, Comodo Firewall, Norton Firewall|

---

## BY WORKING MECHANISM

|Firewall Type|How It Works|Key Features|
|---|---|---|
|Packet Filtering|Compares packets to set of criteria before forwarded|Filters: src IP, dst IP, src/dst TCP/UDP port, TCP flags, protocol, direction, interface|
|Circuit-Level Gateway|Validates TCP three-way handshake|Works at session layer; gives controlled access to network services and host requests; allow or prevent data streams|
|Application-Level Firewall|Focus on application layer; analyzes application information|Proxy-based; can permit or deny traffic|
|Stateful Multi-Layer Inspection|Can remember packets passed through|Combines best features of packet filtering and application-based; Cisco PIX = stateful|
|Application Proxy|Useful for logging; reduces load on network|Performs user-level authentication; protects weak or faulty IP implementations|
|Network Address Translation (NAT)|Translates private IPs to public IPs|Hides internal IP structure|
|VPN Firewall|Connects WAN; encrypts traffic|Checks integrity protection; decrypts traffic eventually|
|Next-Generation Firewall (NGFW)|Deep packet inspection + application awareness + control|Integrated IPS; cloud-based threat intelligence; operates at various OSI layers|

---

# FIREWALL COMPARISON TABLE (EXAM FAVORITE)

|Firewall Type|OSI Layer|How It Works|CEH Keywords|
|---|---|---|---|
|Packet-Filtering Firewall|L3 / L4|Filters based on IP, port, protocol|Stateless filtering|
|Stateful Firewall|L3 / L4|Tracks connection state|Session awareness|
|Circuit-Level Gateway|L5|Validates TCP handshakes|Session validation|
|Application-Level Firewall (Proxy)|L7|Inspects application data|Deep packet inspection|
|Next-Generation Firewall (NGFW)|L3–L7|DPI + IDS/IPS + app awareness|Application awareness|

---

# YARA RULES (INTRUSION DETECTION)

|Item|Memorize|
|---|---|
|YARA|Malware research tool using rule-based approach|
|Condition|When result will be true against a file|
|Strings|Defines all strings that need to be searched within the files|
|Metadata|Part of YARA rule that includes general information|
|Tool|yarGen|

---

# IDS/IPS TOOLS

|Tool|Type|Key Features|
|---|---|---|
|Snort|IDS|Traffic analysis and packet logging; protocol analysis and content searching/matching; uses flexible rules language|
|Suricata|IDS/IPS|Real-time IDS; inline IPS; network security monitoring; offline pcap processing|
|Trellix IPS|IPS|Finds botnets, worms, and reconnaissance attacks|
|Check Point Quantum IPS|IPS|Enterprise-grade IPS solution|
|McAfee Network Security Platform|IPS|Integrated threat prevention|

---

# IDS/FIREWALL EVASION TECHNIQUES

---

## IDENTIFICATION TECHNIQUES

|Technique|Definition|Detail|
|---|---|---|
|Port Scanning|Discover open ports and services|Identify IDS/firewall rules|
|Firewalking|Uses TTL values to determine gateway ACL filters|Probes same way as traceroute; packet has TTL value one hop greater than firewall|
|Banner Grabbing|Intercept service announcements|Banners are service announcements revealing version/config|

---

## IP ADDRESS SPOOFING, SOURCE ROUTING, AND FRAGMENTATION

|Technique|Definition|Tool/Detail|
|---|---|---|
|IP Address Spoofing|Altering source IP; creating packets with forged source addresses|Hping for packet creation|
|Source Routing|Packets routed through less designated, less structured, less monitored, or alternate segments|Firewall solutions partially or not entirely installed on those segments|
|Tiny Fragments|Create tiny fragments of outgoing packets|Forces some TCP header information into next fragment; IDS cannot reassemble in time|

---

## PROXY SERVER BYPASS

|Item|Memorize|
|---|---|
|Method|Add proxy settings to PC; traffic routes from device → proxy → firewall|
|Purpose|Hide true origin of traffic from IDS/firewall|

---

## ICMP TUNNELING

|Item|Memorize|
|---|---|
|Tool|ICMPTX|
|Method|Insert malicious client commands or payloads into data portion of ICMP echo requests|
|Why it works|IDS assumes it is legitimate ICMP and lets them pass|

---

## ACK TUNNELING

|Step|Action|
|---|---|
|1|Many firewalls do not filter ACK packets because they come from already established connections|
|2|Attacker establishes legitimate connection|
|3|Using Hping, crafts ACK packet|
|4|Firewall allows them through|

MEMORY HOOK:
**ACK = already established = allowed**

---

## HTTP TUNNELING

|Item|Memorize|
|---|---|
|Method|Tunnel traffic via TCP port 80 using tool like Chisel|
|Purpose|Hide identity, surf blocked sites, share resources securely over HTTP|

---

## SSH TUNNELING

|Type|Description|
|---|---|
|Local Port Forwarding|LPR to access internal resources|
|Remote Port Forwarding|Access remote services from local machine|
|Dynamic Port Forwarding|SOCKS proxy through SSH; Tool: Bitvise SSH Client|

---

## DNS TUNNELING

|Item|Memorize|
|---|---|
|Method|Using UDP 255 byte limit on outbound queries|
|Detail|Malicious data embedded in DNS packets; DNSSEC cannot detect|
|Use Case|Malware avoids IDS and maintains connection to C&C|
|Tools|Iodine, dnscat2|

MEMORY HOOK:
**DNS tunnel = 255 bytes of evil in UDP**

---

## EXTERNAL SYSTEM ATTACKS

|Step|Action|
|---|---|
|1|User works from home with laptop that can access corporate system|
|2|Attacker steals user traffic, session ID, or cookies|
|3|Attacker accesses corporate network|
|4|Attacker issues openURL() command|
|5|User's browser redirects to attacker's web server|
|6|Malicious code is downloaded and executed|

---

## MITM ATTACKS (EVASION CONTEXT)

|Step|Action|
|---|---|
|1|Attacker performs DNS server poisoning|
|2|User sends facebook.com request|
|3|User accesses malicious server|
|4|Attacker tunnels user's HTTP traffic|

---

## CONTENT-BASED BYPASS

|Item|Memorize|
|---|---|
|Method|Send content containing malicious code|
|Techniques|Macro bypass exploit; executable formats: .exe, .com, .bat|

---

## XSS ATTACK (EVASION CONTEXT)

|Item|Memorize|
|---|---|
|Cause|Occurs when processing input parameters|
|Method|Inject malicious HTML code|
|Evasion|Use ASCII values; HEX encoding; obfuscation|

---

## WAF BYPASS

|Technique|Detail|Tool|
|---|---|---|
|HTTP Header Spoofing|Spoofed headers and syntaxes|Manual crafting|
|Blacklist Detection|Identify blacklisted keywords (SQL)|Automated scanning|
|Fuzzing/Brute Forcing|Test wordlists against WAF rules|Assetnote wordlists|
|Abusing SSL/TLS Ciphers|Exploit cipher negotiation weaknesses|sslscan2|

---

## HTML SMUGGLING

|Method|Detail|
|---|---|
|HTML5 Attachment|Embed payload in HTML5 attachment|
|Via JavaScript|JavaScript decodes and executes payload client-side|
|URL Lure|Phishing link triggers download|

---

## WINDOWS BITS (BACKGROUND INTELLIGENT TRANSFER SERVICE)

|Item|Memorize|
|---|---|
|Purpose|Distributes Windows automatic updates|
|Attack|bitsadmin can create job to transfer malicious file|
|Goal|Create persistence|

---

## OTHER EVASION TECHNIQUES

|Technique|Definition|
|---|---|
|Insertion Attack|Confusing IDS by forcing it to read invalid packets|
|Evasion|IDS discards packets but the host accepts them; occurs at IP layer; TCP connection must be in opened state with handshake|
|DoS|Creating state where all resources are consumed; causes device to lock up and not investigate all alarms|
|Obfuscating|Only destination can decode, not the IDS|
|False Positive Generation|Packets constructed to generate large amount of false reports; hides real attack in between|
|Session Splicing|Splits traffic into excessive number of packets so no single packet triggers IDS; IDS cannot handle excessive small packets; Tool: Nessus|
|Unicode Evasion|Multiple representations of single character (UTF-16: "/" = "%u2215"; UTF-8: "©" = "%c2%a9")|
|Fragmentation Attack|If MTU is exceeded, packets split into multiple fragments|
|TTL Attack|When TTL reaches 0, packet is dropped; requires knowledge of victim's network topology|
|Urgency Flag|TCP ignores all data before URG pointer; IDS do not consider TCP urgency feature|
|Invalid RST Packets|TCP 16-bit checksums used; RST packet sent with invalid checksum|
|Polymorphic Shellcode|NIDS identifies attack by matching signatures; polymorphic attack includes multiple signatures|
|ASCII Shellcode|Only characters from ASCII standard; evades binary signature detection|
|Application Layer Attacks|Via media files — images, audios, videos; flaws in compressed data exploited|
|Desynchronization|Pre-connection SYN with invalid checksum before real connection; post-connection SYN with divergent sequence numbers|
|Domain Generation Algorithms (DGA)|Software generates new domain names to execute malware; helps change domains frequently to evade blocking|

MEMORY HOOK:
**Insertion → Evasion → DoS → Obfuscation → False Positives = 5 pillars of evasion**

---

# NAC AND ENDPOINT SECURITY EVASION

---

## NETWORK ACCESS CONTROL (NAC) EVASION

|Technique|Definition|Tool|
|---|---|---|
|VLAN Hopping|Gain access to dynamic trunking protocol (DTP); switch mode changed by attacker to dynamic auto to dynamic desirable|VLANPWN|
|Pre-Authenticated Device|Gain access to authenticated device; device used to log into network then smuggle packages; usually Raspberry Pi|nac_bypass_setup.sh, FENRIR|

---

## BYPASS ENDPOINT SECURITY

|Technique|Definition|
|---|---|
|Ghostwriting|Modifying structure of malware without affecting functionality; bypass AV using binary deconstruction, insertion of arbitrary assembly code, reconstruction; Tool: Ghostwriting.sh|
|Application Whitelisting|DLL hijacking to place malicious DLL with legitimate name that application is looking for|
|Dechaining Macros|Spawning through ShellCOM; referencing any COM-associated object through VBA script; spawning using XMLDOM to download and run code inside Office process|
|Clearing Memory Hooks|Find DLLs associated with functions/syscalls exported; use x64dbg to identify syscalls in memory; create payload that overwrites hooks by restoring exact bytes of data|
|Process Injection|Malware in memory space of running process; maintain persistence, escalate privileges; API functions: VirtualAllocEx(), WriteProcessMemory(), CreateRemoteThread()|
|LoL Bins|Living off the Land binaries; tools pre-installed on system; configure Deimos C2 to communicate over HTTPS; run command to download remote file, execute custom shell|
|Control Panel Side Loading|Mimics original CPL applet functionality to hide itself; Tool: CPLResourceRunner|
|Metasploit Templates|msfvenom payloads; test with VirusTotal to check detection rate|
|AMSI Bypass|PowerShell downgrade to 2.0; use obfuscation; force an error; hijack memory|
|Hosting Phishing Sites|Serve malicious content from attacker-controlled infrastructure|
|Encoded Commands|Pass encoded commands to evade content inspection|
|Fast Flux|DNS method that changes both IP addresses and DNS names rapidly; circumvents blacklists; hides C&C|
|Timing-Based Evasion|Sleep patching; delay APIs; time bombs|
|Single Binary Proxy Execution|rundll32 to execute malicious code|
|Shellcode Encryption|Encrypt shellcode to evade signature detection|
|Reducing Entropy|Manipulate binary characteristics to lower entropy scores|
|Escaping Local AV Sandbox|Evade sandbox analysis in endpoint protection|
|Disabling Event Tracing|Disable ETW to prevent logging of malicious activity|
|Spoofing Thread Call Stack|Fake thread call stack to evade detection|
|In-Memory Encryption|Encrypt beacon in memory to avoid detection|

MEMORY HOOK:
**Ghostwriting → DLL hijack → Process injection → AMSI bypass = top 4 endpoint evasion**

---

# IDS/FIREWALL EVASION TOOLS

|Tool|Purpose|
|---|---|
|Traffic IQ Professional|Test IDS/firewall effectiveness with simulated attacks|
|Colasoft Packet Builder|Craft custom packets for evasion testing|
|Hping|Packet crafting and spoofing|
|Chisel|HTTP tunneling|
|Bitvise SSH Client|SSH tunneling / SOCKS proxy|
|Iodine / dnscat2|DNS tunneling|
|Nessus|Session splicing attacks|
|sslscan2|SSL/TLS cipher abuse|

---

# HONEYPOTS

---

## HONEYPOT — CORE PURPOSE

|Function|Detail|
|---|---|
|Log Port Access|Record all connection attempts|
|Monitor Keystrokes|Capture attacker input|
|Early Warnings|Alert on suspicious activity|

---

## TYPES OF HONEYPOTS

|Type|Definition|
|---|---|
|Low-Interaction|Emulate limited number of services and apps; Tools: Tiny-SSH-Honeypot, KFSensor, Honeytrap|
|Medium-Interaction|Simulate real operating system, application, and services|
|High-Interaction|Simulate all services and applications of target network|
|Pure Honeypot|Emulate real production network|
|Production Honeypots|Deployed inside production; capture only limited information; low interaction|
|Research Honeypots|Deployed by research institutes to study attack patterns|
|Malware Honeypots|Used to trap malware campaigns; simulated with outdated APIs, vulnerable SMBv1 protocols|
|Database Honeypots|Trap database-specific attacks|
|Spam Honeypots|Open mail relays and open proxies|
|Email Honeypots|Fake email addresses to lure attackers|
|Spider Honeypots|Designed to trap web crawlers and spiders|
|Honeynets|Network of honeypots|

MEMORY HOOK:
**Low = emulate; Medium = simulate partial; High = full simulation**

---

## HONEYPOT TOOLS

|Tool|Type|
|---|---|
|HoneyBOT|Medium interaction|
|Blumira|Security analytics platform|
|NeroSwarm|Swarm-based honeypot|

---

# DETECTING HONEYPOTS

|Technique|Method / Command|
|---|---|
|Fingerprinting Running Service|nmap -sV -p 80 ip|
|Analyze Response Time|Measure latency responses; nmap -p --scan-delay 1s --max-retries 5 ip|
|Examine MAC Addresses|arp-scan --interface=eth0 --localnet; look for unusual OUI|
|Enumerate Unexpected Open Ports|nmap -p ip; check default configs, outdated banners, discrepancies in system info|
|Analyze System Configuration and Metadata|Summarize configuration settings; check default configs|

MEMORY HOOK:
**nmap + arp-scan + MAC = honeypot detection trio**

---

# DETECTING AND DEFEATING HONEYPOTS

|Technique|Definition / Detail|
|---|---|
|Layer 7 Tar Pits|Similar to honeypots; slow down unauthorized attempts; detected by latency of response|
|Layer 4 Tar Pits|Manipulate TCP/IP stack; slow down spreading of worms/backdoors; iptables switch to zero-window size blocking further data|
|Layer 2 Tar Pits|Protect from attacks on same network segment|
|Honeypots on VMware|Identify by analyzing MAC address for VMware OUI prefix|
|Honeyd Honeypot|Honeypot daemon; creates fake SMTP responses; identify with time-based TCP fingerprinting; SYN proxy behavior|
|User-Mode UML Linux|Analyze files in /proc/mounts, /proc/interrupts, /proc/cmdline|
|snort_inline|Capable of packet manipulation; rewrite rules in iptables; mainly used in Gen 2 honeynets|
|Bait and Switch|Redirect all traffic to honeypot; divert attacker attention|

---

## HONEYPOT DETECTION TOOLS

|Tool|Purpose|
|---|---|
|Send Safe Honeypot Hunter|Detect and identify honeypots|

---

# EXAM FLASHCARDS

|Term|Definition|
|---|---|
|NIDS|Network-based IDS; black box on network in promiscuous mode|
|HIDS|Host-based IDS; installed on specific host; detects file modification|
|IPS|Active IDS that detects AND prevents intrusions|
|Firewalking|Uses TTL to determine gateway ACL filters; probes like traceroute|
|Session Splicing|Splits traffic into many small packets to evade IDS signature matching|
|DGA|Domain generation algorithms; malware generates new domain names rapidly|
|AMSI|Antimalware Scan Interface; bypassed via PowerShell downgrade to 2.0|
|LoL Bin|Living off the Land binary; uses pre-installed system tools for attack|
|Fast Flux|DNS method that rapidly changes IP and DNS names to hide C&C|
|HTML Smuggling|Payload embedded in HTML5/JavaScript; decoded client-side|
|Bastion Host|Public-facing server mediating between inside and outside networks|
|DMZ|Buffer zone between secure internal network and insecure internet|
|Packet Filtering|Filters based on src/dst IP, port, protocol — stateless|
|Stateful Firewall|Tracks connection state — session awareness|
|Honeynet|Network of honeypots working together|

---

# PRACTICE QUESTIONS

|Q#|Question|
|---|---|
|1|Which IDS detection method matches traffic against known attack patterns?|
|2|What firewall type tracks the state of active connections and combines packet filtering with application inspection?|
|3|Which evasion technique splits network traffic into many small packets so no single packet triggers IDS signature matching?|
|4|What is the DNS technique that rapidly changes both IP addresses and DNS names to circumvent blacklists and hide command-and-control servers?|
|5|Which honeypot type emulates all services and applications of a target network?|

---

|A#|Answer|
|---|---|
|1|Signature Recognition (misuse detection)|
|2|Stateful Multi-Layer Inspection Firewall|
|3|Session Splicing|
|4|Fast Flux DNS|
|5|High-Interaction Honeypot|

---

MEMORY HOOK (MODULE 12 MASTER):
**Detect (IDS) → Prevent (IPS) → Block (Firewall) → Evade (Techniques) → Lure (Honeypots)**
