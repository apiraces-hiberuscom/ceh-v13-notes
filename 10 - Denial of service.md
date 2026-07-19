# MODULE 10 — OVERVIEW (EXAM CONTEXT)

|Item|Memorize|
|---|---|
|Module Number|10|
|Module Name|Denial of Service (DoS/DDoS)|
|Focus|DoS/DDoS concepts, botnets, attack types, tools, countermeasures|

---

## LEARNING OBJECTIVES (DO NOT SKIP — EXAM LIST)

|Objective #|Description|
|---|---|
|01|Summarize DoS/DDoS concepts and botnet architecture|
|02|Explain various DDoS attack techniques|
|03|Identify DDoS attack tools|
|04|Explain DoS/DDoS countermeasures|

---

# OBJECTIVE 01 — DoS/DDoS CONCEPTS AND BOTNET ARCHITECTURE

---

## DoS vs DDoS — CORE DIFFERENCE

|Item|Definition|
|---|---|
|DoS|Single source floods a single target to exhaust resources|
|DDoS|Multiple distributed sources (botnet) flood a single target simultaneously|

MEMORY HOOK:
**DoS = one attacker, DDoS = army of zombies**

---

## BOTNET ARCHITECTURE

|Component|Role|
|---|---|
|Botmaster|Attacker who controls the entire botnet|
|C2 Server (Command and Control)|Central server that relays commands from botmaster to bots|
|Bots / Zombies|Compromised machines that carry out attacks on command|

MEMORY HOOK:
**Botmaster → C2 → Bots (one commands, one relays, many execute)**

EXAM TRAP:
The C2 server is **not** the attacker — it is the **relay**. The botmaster issues commands **through** the C2 server.

---

## BOTNET PROPAGATION TECHNIQUES

|Technique|Description|
|---|---|
|Random Scanning|Bots scan random IP addresses looking for vulnerable machines|
|Hit-List Scanning|Attacker pre-compiles a list of vulnerable targets, then bots scan from that list to build zombie army quickly|
|Topological Scanning|Infected machine uses information from its own connections (e.g., peer lists, chat logs) to discover new targets|
|Local Subnet Scanning|Bots scan their own local subnet to find other vulnerable machines on the same network|
|Permutation Scanning|Uses a pseudorandom permutation list of all IP addresses; a 32-bit block cipher with a preselected key generates the order — bots share the same permutation list to avoid redundant scanning|

EXAM TRAP:
Permutation scanning is the most **efficient** because all bots share the same permutation list, preventing overlap.

---

## MALICIOUS CODE PROPAGATION TECHNIQUES

|Technique|Description|
|---|---|
|Central Source Propagation|Attacker places attack toolkit on a central source; victims copy the code from that source, then repeat the process|
|Back-Chaining Propagation|Attacker distributes toolkit from their own machine using protocols like TFTP|
|Autonomous Propagation|Attacking host transfers the attack toolkit to victims at the same time it compromises them — victim becomes attacker, chain continues|

MEMORY HOOK:
**Central = one source, Back-chain = attacker pushes, Autonomous = victim becomes attacker**

---

# OBJECTIVE 02 — DDoS ATTACK TECHNIQUES

---

## DDoS ATTACK CLASSIFICATIONS

|Category|Target|
|---|---|
|Volumetric|Exhaust bandwidth — usually target stateless services like NTP and SSDP|
|Protocol|Exploit network protocol weaknesses — target connection state tables, packet reassembly|
|Application|Flood legitimate-looking web traffic — target HTTP, SQL, application logic|

MEMORY HOOK:
**Volumetric = bandwidth, Protocol = state, Application = logic**

EXAM TRAP:
Volumetric attacks usually target **stateless** services (NTP, SSDP) because a small request generates a much larger response (amplification).

---

## VOLUMETRIC ATTACKS — COMPREHENSIVE TABLE

|Attack|Description|Key Detail|
|---|---|---|
|UDP Flood|Spoofed UDP packets sent at very high rate on random ports|Exhausts bandwidth and server resources|
|ICMP Flood|Large amount of ICMP echo requests (ping) sent to target|Also called Ping Flood|
|Ping of Death|Malformed or oversized ICMP packets (larger than 65,535 bytes)|Crashes or freezes vulnerable systems|
|Smurf Attack|Spoofed ICMP ECHO request sent to a broadcast address with victim's IP as source|All hosts on the broadcast network reply to victim simultaneously|
|Fraggle Attack|Similar to Smurf but uses UDP ECHO instead of ICMP|Targets UDP port 7 (Echo) or 19 (CHARGEN)|
|NTP Amplification|Botnet sends small UDP packets to NTP servers with monlist enabled, spoofed victim IP|Very high amplification ratio — small request, huge response|
|DNS Amplification|Small DNS query spoofed with victim IP sent to open resolvers|Amplification factor up to 50x|
|SSDP Amplification|Spoofed SSDP M-SEARCH requests to UPnP devices|Reflects large responses to victim|
|CHARGEN|Targets UDP port 19 — character generation protocol|Used in Fraggle-style amplification attacks|

MEMORY HOOK (AMPLIFICATION):
**NTP, DNS, SSDP, CHARGEN — all are "small ask, big reply"**

EXAM TRAP:
Smurf uses **ICMP**, Fraggle uses **UDP**. Both use broadcast amplification.

---

## PROTOCOL ATTACKS — COMPREHENSIVE TABLE

|Attack|Description|Key Detail|
|---|---|---|
|SYN Flood|TCP SYN sent with fake source IP; server waits for ACK that never arrives|Exhausts connection state tables; exploits TCP three-way handshake|
|Fragmentation Attack|Large number of 1500-byte fragmented packets sent to target|Victim cannot reassemble; can bypass firewalls, IDS/IPS|
|Spoofed Session Flood|Fake TCP session established using SYN, ACK, and RST or FIN packets|Exhausts session tables without legitimate traffic|
|TCP SACK Panic|Linux-only attack using malformed SACK packets with bad MSS|Causes integer overflow in Linux socket buffer; kernel panic with packets as low as 48 bytes|

MEMORY HOOK (SYN FLOOD):
**SYN = "half-open" — server opens but never closes because ACK never comes**

EXAM TRAP:
TCP SACK Panic targets **Linux only** and works with packets as small as **48 bytes**.

---

## APPLICATION-LAYER ATTACKS — COMPREHENSIVE TABLE

|Attack|Description|Key Detail|
|---|---|---|
|HTTP GET Flood|Flood target with HTTP GET requests using time-delayed headers to hold connections open|Exhausts web server threads and memory|
|HTTP POST Flood|Flood target with HTTP POST requests with large payloads|Exhausts server-side processing resources|
|Slowloris|Opens many partial HTTP connections to target, sends partial headers to keep them alive|One machine can take down a server; keeps connections open indefinitely|
|R.U.D.Y. (R-U-Dead-Yet)|Uses slow POST attacks with time-delayed header fields|Holds HTTP sessions open by sending form data byte-by-byte|
|HULK (HTTP Unbearable Load Generation)|Generates unique, randomized HTTP requests to bypass caching|Targets application layer directly; avoids detection|
|Multi-Vector DDoS|Combines volumetric + protocol + application layer attacks simultaneously|Most difficult to mitigate because multiple layers are targeted|
|Peer-to-Peer|Abuses P2P networks (e.g., DC++) to redirect traffic to victim|No botnet needed — legitimate P2P users unknowingly flood target|

MEMORY HOOK (SLOW ATTACKS):
**Slowloris = partial headers, R.U.D.Y. = slow POST — both hold connections open forever**

EXAM TRAP:
Slowloris is devastating because it works with **minimal bandwidth** — one machine can take down large servers.

---

## OTHER ATTACK TYPES — COMPREHENSIVE TABLE

|Attack|Description|Key Detail|
|---|---|---|
|Pulse Wave DDoS|Repetitive bursts of packets as pulses at regular intervals (e.g., every 10 minutes)|Recovery between pulses is nearly impossible; sustained disruption|
|Zero-Day DDoS|Exploits unpatched vulnerabilities with no known protection|No signatures or patches available at time of attack|
|Permanent DoS (Phlashing)|Sends fraudulent firmware/hardware updates causing irreversible physical damage|Unlike other DoS, damage persists after attack ends|
|Ransom DDoS|Attacker threatens or launches DDoS unless ransom is paid|Extortion tactic combined with DDoS capability|
|DRDoS (Distributed Reflection DoS)|Spoofed attack using multiple intermediary and secondary machines to reflect traffic|Multiple intermediary services amplify the attack toward the victim|

EXAM TRAP:
Phlashing causes **permanent hardware damage** — it is not a traffic flood, it is a **firmware attack**.

---

# OBJECTIVE 03 — DDoS ATTACK TOOLS

---

## DDoS ATTACK TOOL KITS

|Tool|Description|
|---|---|
|LOIC (Low Orbit Ion Cannon)|Open-source tool for DoS/DDoS; supports HTTP, UDP, TCP floods; originally used by Anonymous|
|HOIC (High Orbit Ion Cannon)|Successor to LOIC; uses JavaScript-based "booster scripts" for higher attack volume|
|HULK (HTTP Unbearable Load Generation)|Generates randomized HTTP GET requests to bypass caching; targets application layer|
|Slowloris|Keeps many connections open with partial HTTP requests; low bandwidth, high impact|
|UFO Net|DDoS botnet tool; uses HTTP-based C2 for command distribution|
|ISB (I'm So Bored)|Supports HTTP, UDP, TCP, and ICMP flood attacks|
|UltraDDOS-v2|DDoS tool with support for multiple attack vectors|

EXAM TRAP:
HULK is both an **attack type** and a **tool name** — know the difference. The tool generates randomized requests to evade detection.

---

# OBJECTIVE 04 — DoS/DDoS COUNTERMEASURES

---

## DDoS DETECTION TECHNIQUES

|Technique|Description|
|---|---|
|Activity Profiling|Baseline normal network flow patterns; detect anomalies that deviate from average|
|Sequential Change-Point Detection|Monitor traffic filtered by IP addresses and flow over time; identify sudden shifts|
|Wavelet-Based Signal Analysis|Analyze spectral components of network traffic to detect attack signatures|

MEMORY HOOK:
**Profiling = baseline, Change-point = shift, Wavelet = spectrum**

---

## DDoS COUNTERMEASURES TABLE

|Countermeasure|Purpose|
|---|---|
|Activity Profiling|Establish normal traffic baseline to detect anomalies|
|Sequential Change-Point Detection|Identify sudden traffic changes by IP and flow over time|
|Wavelet-Based Signal Analysis|Detect attacks by analyzing spectral components of traffic|
|Blumira (Honeypot)|Decoy system that detects and analyzes attack traffic for signature extraction|

---

## GENERAL DEFENSE STRATEGIES

|Strategy|Description|
|---|---|
|Rate Limiting|Limit number of requests per IP address|
|Traffic Filtering|Drop traffic from known malicious IPs or patterns|
|Anycast Network|Distribute attack traffic across multiple data centers|
|ISP-Level Scrubbing|Offload traffic to cleaning centers before reaching target|
|Redundancy|Deploy multiple servers and network paths for failover|
|Patch Management|Keep systems updated to prevent Zero-Day and Phlashing attacks|

MEMORY HOOK (DEFENSE LAYERS):
**Rate → Filter → Anycast → Scrub → Redundancy → Patch**

---

# DDoS CASE STUDY — HTTP/2 RAPID RESET

---

|Item|Detail|
|---|---|
|Attack Name|HTTP/2 "Rapid Reset"|
|Target|Google Cloud (2023)|
|Technique|Abused HTTP/2 stream multiplexing — up to 100 live streams through one TCP connection|
|Impact|Record-breaking DDoS attack at the time|
|Why It Worked|Attackers rapidly created and reset streams, overwhelming server resources per connection|

MEMORY HOOK:
**HTTP/2 Rapid Reset = 100 streams per TCP, create fast, reset fast, server dies**

EXAM TRAP:
The Rapid Reset attack targets **HTTP/2 specifically** — it exploits the protocol's multiplexing feature, not bandwidth.

---

## EXAM EXTRAS (Boson Practice Test)

### SLOWLORIS

|Item|Memorize|
|---|---|
|Slowloris|DDoS attack that opens many HTTPS connections with partial headers to keep them alive|

---

### HULK

|Item|Memorize|
|---|---|
|HULK|HTTP Unbearable Load Generation — DDoS with caching and IDS detection avoidance|

---

# EXAM FLASHCARDS

---

|Term|Quick Memory|
|---|---|
|DoS|Single source, single target|
|DDoS|Multiple sources (botnet), single target|
|Botmaster|Controls the botnet|
|C2 Server|Relays commands from botmaster to bots|
|Bot / Zombie|Compromised machine in the botnet|
|Smurf|ICMP to broadcast, victim receives all replies|
|Fraggle|UDP ECHO to broadcast, victim receives all replies|
|SYN Flood|Half-open TCP connections exhaust state tables|
|Slowloris|Partial HTTP requests hold connections open forever|
|TCP SACK Panic|Linux kernel panic via malformed SACK packets (48 bytes)|
|Phlashing|Permanent hardware damage via fraudulent firmware updates|
|HTTP/2 Rapid Reset|Abuses stream multiplexing to overwhelm servers (Google 2023)|
|Pulse Wave|Regular burst intervals, recovery impossible between pulses|
|Ransom DDoS|Extortion — pay or get attacked|
|DRDoS|Reflects spoofed traffic through intermediary services|

---

# PRACTICE QUESTIONS

---

|Q#|Question|Answer|
|---|---|---|
|1|What is the key difference between DoS and DDoS?|DoS uses a single source; DDoS uses multiple distributed sources (botnet)|
|2|Which propagation technique uses a pre-compiled list of vulnerable targets?|Hit-list scanning|
|3|Which DDoS attack targets Linux kernel by sending malformed SACK packets?|TCP SACK Panic|
|4|What protocol does a Smurf attack use for amplification?|ICMP (ECHO request to broadcast address)|
|5|What technique analyzes spectral components of network traffic to detect attacks?|Wavelet-based signal analysis|
