# OBJECTIVE 04 — WIRELESS HACKING METHODOLOGY

---

## CEH WIRELESS HACKING — CORE DEFINITION

|Item|Memorize|
|---|---|
|Wireless Hacking|Identifying and exploiting vulnerabilities in wireless networks to gain unauthorized access|

---

## CEH WIRELESS ATTACK METHODOLOGY (EXAM SEQUENCE)

|Phase #|Phase Name|
|---|---|
|1|Reconnaissance|
|2|Scanning|
|3|Gaining Access|
|4|Maintaining Access|
|5|Covering Tracks|

MEMORY HOOK:  
**Recon → Scan → Access → Persist → Hide**

---

# PHASE 1 — WIRELESS RECONNAISSANCE

---

## PURPOSE

|Purpose|
|---|
|Identify wireless networks|
|Identify SSID, BSSID|
|Identify channels|
|Identify encryption|

---

## INFORMATION GATHERED

|Parameter|
|---|
|SSID|
|BSSID|
|Channel|
|Signal strength|
|Encryption type|

---

## TOOLS USED (PASSIVE MODE)

|Tool|Purpose|
|---|---|
|airodump-ng|Capture wireless packets|
|Kismet|Passive wireless sniffer|
|NetStumbler|Detect WLANs|
|inSSIDer|WLAN discovery|

---

MEMORY HOOK:  
**Recon = listen only**

---

# PHASE 2 — WIRELESS SCANNING

---

## PURPOSE

|Purpose|
|---|
|Identify active targets|
|Identify connected clients|
|Identify security mechanisms|

---

## ACTIVE SCANNING TOOLS

|Tool|Purpose|
|---|---|
|airmon-ng|Enable monitor mode|
|iwconfig|Configure wireless interface|
|wash|Detect WPS-enabled APs|

---

## COMMAND RECOGNITION (EXAM)

|Command|Purpose|
|---|---|
|airmon-ng start wlan0|Enable monitor mode|
|iwconfig|Display wireless interface info|

---

MEMORY HOOK:  
**Monitor mode = hacking mode**

---

# PHASE 3 — GAINING ACCESS

---

## COMMON ACCESS METHODS

|Method|
|---|
|WEP cracking|
|WPA/WPA2 handshake cracking|
|Evil Twin|
|WPS PIN attack|

---

## WEP ATTACK METHOD (LOGIC)

|Step|
|---|
|Capture packets|
|Collect IVs|
|Crack key|

---

## WPA/WPA2 ATTACK METHOD

|Step|
|---|
|Capture handshake|
|Deauth client|
|Crack PSK offline|

---

## TOOLS USED

|Tool|Purpose|
|---|---|
|aireplay-ng|Deauth and packet injection|
|aircrack-ng|Crack WEP/WPA keys|
|reaver|WPS brute force|
|bully|WPS attack|

---

## COMMAND RECOGNITION (EXAM)

|Command|Purpose|
|---|---|
|aireplay-ng --deauth|Deauthentication attack|
|aircrack-ng capture.cap|Crack captured handshake|

---

MEMORY HOOK:  
**Handshake first, crack later**

---

# PHASE 4 — MAINTAINING ACCESS

---

## METHODS

|Method|
|---|
|Backdoor AP|
|MAC spoofing|
|Persistent connection|

---

## TOOLS

|Tool|Purpose|
|---|---|
|macchanger|Change MAC address|
|hostapd|Create fake AP|

---

MEMORY HOOK:  
**Persistence = stay connected**

---

# PHASE 5 — COVERING TRACKS

---

## TECHNIQUES

|Technique|
|---|
|MAC address spoofing|
|Clearing logs|
|Disabling AP logs|

---

MEMORY HOOK:  
**No logs, no proof**

---

# CEH WIRELESS TOOLS — MASTER TABLE (VERY HIGH YIELD)

|Tool|Function|
|---|---|
|Aircrack-ng|Crack WEP/WPA|
|Airodump-ng|Capture packets|
|Aireplay-ng|Packet injection|
|Airmon-ng|Monitor mode|
|Kismet|Passive sniffing|
|Reaver|WPS brute force|
|Bully|WPS attack|
|Wash|WPS detection|
|NetStumbler|WLAN discovery|
|inSSIDer|WLAN analysis|

---

# TOOL → ATTACK MAPPING (MEMORY TABLE)

|Tool|Attack|
|---|---|
|airodump-ng|Recon|
|aireplay-ng|Deauth|
|aircrack-ng|Key cracking|
|reaver|WPS brute force|
|Kismet|Passive sniffing|

---

# EXAM TRAPS (VERY IMPORTANT)

|Trap|Correct Answer|
|---|---|
|Monitor mode needed for sniffing|YES|
|Hidden SSID secure|NO|
|WPA2 immune to attacks|NO|
|Deauth breaks encryption|NO|

---

# OBJECTIVE 04 — MEMORY BLOCK

**Recon listens.  
Monitor mode captures.  
Deauth forces handshake.  
Aircrack cracks keys.  
Reaver attacks WPS.**

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Wireless Hacking Methodology | 5-phase process: Recon, Scan, Gaining Access, Maintaining Access, Covering Tracks |
| Reconnaissance | Phase 1: Identify wireless networks, SSIDs, channels, encryption passively |
| Scanning | Phase 2: Identify active targets, connected clients, and security mechanisms |
| Monitor Mode | Wireless interface mode that captures all traffic without associating to an AP |
| airodump-ng | Tool used to capture wireless packets during reconnaissance |
| aireplay-ng | Tool used for deauthentication and packet injection |
| aircrack-ng | Tool used to crack WEP and WPA/WPA2 keys from captured handshakes |
| airmon-ng | Tool used to enable monitor mode on a wireless interface |
| reaver | Tool used for WPS brute-force PIN attacks |
| Kismet | Passive wireless sniffer and detector |
| WPS PIN Attack | Brute-forcing the 8-digit WPS PIN to gain network access |
| Handshake Capture | Capturing the 4-way WPA2 authentication exchange for offline cracking |
| MAC Spoofing | Changing the MAC address to impersonate an authorized device |
| Wash | Command-line tool to detect WPS-enabled access points |

---

# PRACTICE QUESTIONS

**1.** What is the correct order of the CEH wireless hacking methodology?
- a) Scan → Recon → Access → Hide → Persist
- b) Recon → Scan → Gaining Access → Maintaining Access → Covering Tracks
- c) Access → Recon → Scan → Persist → Hide
- d) Recon → Access → Scan → Cover → Persist
**Answer:** B — The 5-phase methodology follows: Recon → Scan → Access → Persist → Hide.

**2.** Which command enables monitor mode on a wireless interface?
- a) airodump-ng start wlan0
- b) airmon-ng start wlan0
- c) aireplay-ng --monitor wlan0
- d) wash --enable wlan0
**Answer:** B — `airmon-ng start wlan0` puts the interface into monitor mode for packet capture.

**3.** What must be captured BEFORE cracking a WPA2 key?
- a) IVs
- b) The SSID
- c) The 4-way handshake
- d) The BSSID
**Answer:** C — Aircrack-ng needs the captured 4-way handshake to perform offline PSK cracking.

**4.** Which tool is specifically used for WPS brute-force attacks?
- a) airodump-ng
- b) Kismet
- c) reaver
- d) macchanger
**Answer:** C — Reaver brute-forces the WPS PIN to gain unauthorized access to the network.

**5.** What is the purpose of MAC spoofing in Phase 4 of the methodology?
- a) To crack the encryption key
- b) To enable monitor mode
- c) To impersonate an authorized device and maintain access
- d) To capture the handshake
**Answer:** C — MAC spoofing allows the attacker to bypass MAC filtering and maintain persistent access.

