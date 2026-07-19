# OBJECTIVE 03 — IoT HACKING TOOLS AND TECHNIQUES

---

## WHAT IS IoT HACKING (EXAM DEFINITION)

|Term|Definition|
|---|---|
|IoT Hacking|The process of identifying and exploiting vulnerabilities in IoT devices, firmware, protocols, and backend systems|

MEMORY HOOK:  
**Device + Firmware + Network + Cloud**

---

# IoT HACKING PHASES (EXAM FLOW)

|Phase|
|---|
|Reconnaissance|
|Scanning|
|Gaining access|
|Maintaining access|
|Covering tracks|

MEMORY HOOK:  
**Find → Scan → Break → Stay → Hide**

---

# DEVICE-LEVEL HACKING TECHNIQUES (CRITICAL)

---

## PHYSICAL INTERFACE ATTACKS (NEW TERMS EXPLAINED)

---

## JTAG — DETAILED EXPLANATION (VERY IMPORTANT)

### WHAT IS JTAG

|Item|Explanation|
|---|---|
|JTAG|A hardware debugging interface used to test, debug, and program embedded devices|

### WHY JTAG EXISTS

- Designed for **manufacturing and debugging**
    
- Allows low-level access to CPU and memory
    

### WHY JTAG IS DANGEROUS

|Capability|Result|
|---|---|
|Read memory|Extract firmware|
|Write memory|Modify firmware|
|Control execution|Bypass authentication|

### HOW ATTACKERS USE JTAG

1. Open IoT device casing
    
2. Locate JTAG pins on PCB
    
3. Connect JTAG debugger
    
4. Dump firmware or memory
    
5. Extract credentials or keys
    

MEMORY HOOK:  
**JTAG = hardware root shell**

---

## UART — DETAILED EXPLANATION

### WHAT IS UART

|Item|Explanation|
|---|---|
|UART|Universal Asynchronous Receiver/Transmitter, used for serial communication|

### WHY UART IS DANGEROUS

|Risk|
|---|
|Debug console access|
|Login prompt exposure|
|No authentication|

### ATTACK FLOW

1. Identify UART pins
    
2. Connect USB-to-TTL adapter
    
3. Access serial console
    
4. Obtain root shell
    

MEMORY HOOK:  
**UART = hidden console**

---

## CHIP-OFF ATTACK (NEW)

|Term|Explanation|
|---|---|
|Chip-off attack|Physically removing memory chip to extract data|

### USED WHEN

- JTAG/UART disabled
    
- Firmware encrypted poorly
    

MEMORY HOOK:  
**Chip removed = data exposed**

---

# FIRMWARE-LEVEL HACKING (EXAM FAVORITE)

---

## FIRMWARE — CORE DEFINITION

|Term|Definition|
|---|---|
|Firmware|Software programmed into non-volatile memory that controls device behavior|

---

## FIRMWARE ANALYSIS TECHNIQUES

|Technique|Explanation|
|---|---|
|Firmware extraction|Obtain firmware image|
|Static analysis|Analyze code without execution|
|Dynamic analysis|Run firmware in emulator|
|Reverse engineering|Understand logic|

MEMORY HOOK:  
**Firmware = device brain**

---

## FIRMWARE EXTRACTION METHODS

|Method|
|---|
|JTAG|
|UART|
|Flash memory dump|
|OTA update interception|
|Vendor website|

---

## COMMON FIRMWARE VULNERABILITIES

|Vulnerability|
|---|
|Hardcoded credentials|
|Insecure update mechanism|
|Backdoors|
|Debug code left enabled|
|Weak encryption|

MEMORY HOOK:  
**Hardcoded creds never change**

---

# NETWORK-LEVEL IoT HACKING TECHNIQUES

---

## PROTOCOL ANALYSIS (EXAM CRITICAL)

---

## MQTT — EXPLANATION RECAP

|Aspect|Explanation|
|---|---|
|MQTT|Lightweight publish/subscribe protocol|
|Broker|Central message hub|
|Topic|Channel for messages|

### ATTACKS ON MQTT

|Attack|
|---|
|Subscribe without auth|
|Publish fake messages|
|Broker takeover|

MEMORY HOOK:  
**No auth MQTT = open mic**

---

## CoAP — EXPLANATION

|Aspect|Explanation|
|---|---|
|CoAP|Lightweight HTTP-like protocol|
|Runs over|UDP|

### ATTACKS

|Attack|
|---|
|Amplification|
|Replay|
|Spoofing|

MEMORY HOOK:  
**UDP = spoofable**

---

# IoT SCANNING & DISCOVERY TOOLS (EXAM TOOLS)

---

## SHODAN (VERY IMPORTANT)

|Tool|Purpose|
|---|---|
|Shodan|Search engine for Internet-connected devices|

### WHAT SHODAN FINDS

|Finds|
|---|
|Open ports|
|IoT devices|
|Default credentials|
|Firmware versions|

MEMORY HOOK:  
**Shodan = Google for devices**

---

## CENSYS

|Tool|Purpose|
|---|---|
|Censys|Internet-wide asset discovery|

---

## NMAP (IoT USE)

|Command|Purpose|
|---|---|
|nmap -sV|Service detection|
|nmap -p|Port scanning|

MEMORY HOOK:  
**Scan before exploit**

---

# IoT EXPLOITATION FRAMEWORKS

|Tool|Purpose|
|---|---|
|Metasploit|Exploit IoT vulnerabilities|
|RouterSploit|Router exploitation|
|ExploitDB|Vulnerability database|

---

# MALWARE & BOTNET TOOLS

---

## IoT MALWARE BEHAVIOR

|Behavior|
|---|
|Scans network|
|Brute-forces credentials|
|Downloads payload|
|Connects to C2|

---

## COMMON BOTNET EXPLOIT METHODS

|Method|
|---|
|Telnet brute force|
|SSH brute force|
|Web interface exploit|

MEMORY HOOK:  
**Telnet = IoT graveyard**

---

# CLOUD & BACKEND IoT HACKING TECHNIQUES

|Technique|
|---|
|API fuzzing|
|Token abuse|
|Cloud misconfiguration|
|Credential reuse|

---

# OBJECTIVE 03 — EXAM MEMORY BLOCK

**IoT hacking targets hardware, firmware, protocols, and cloud services.  
JTAG and UART expose low-level access.  
Firmware contains credentials and backdoors.  
Protocols like MQTT and CoAP are often unauthenticated.  
Shodan reveals exposed devices.**

---

## OBJECTIVE 03 — STATUS

|Item|Status|
|---|---|
|JTAG explained|COMPLETE|
|UART explained|COMPLETE|
|Firmware hacking|COMPLETE|
|Network attacks|COMPLETE|
|Tools|COMPLETE|
|Exam alignment|EXACT|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| IoT Hacking | Identifying and exploiting vulnerabilities in IoT devices, firmware, protocols, and backend systems |
| JTAG | Hardware debugging interface providing root-level CPU and memory access for firmware extraction |
| UART | Serial communication interface exposing debug consoles with no authentication |
| Firmware | Software in non-volatile memory controlling device behavior |
| Firmware Extraction | Obtaining firmware via JTAG, UART, flash dump, OTA interception, or vendor websites |
| Static Analysis | Analyzing firmware code without execution |
| Dynamic Analysis | Running firmware in an emulator to observe behavior |
| Shodan | Search engine for Internet-connected devices — finds open ports, IoT devices, default credentials |
| Censys | Internet-wide asset discovery tool |
| RouterSploit | Exploitation framework specifically designed for router and IoT exploitation |
| Metasploit | General exploitation framework used for IoT vulnerabilities |
| MQTT | Lightweight publish/subscribe protocol — attacks include unauthorized subscription and broker takeover |
| CoAP | Lightweight UDP-based protocol — vulnerable to amplification, spoofing, and replay attacks |
| Hardcoded Credentials | Credentials embedded in firmware that cannot be changed by users |
| OTA Update Interception | Capturing over-the-air firmware updates to extract or modify firmware |

---

# PRACTICE QUESTIONS

**1.** A security tester connects a JTAG debugger to an IoT device's PCB to dump the firmware. What can they extract?
- a) Only network configuration
- b) Firmware image, credentials, and encryption keys
- c) Only the device MAC address
- d) Nothing — JTAG is read-only
**Answer:** b) — JTAG allows reading memory to extract firmware, credentials, and keys, plus writing memory to modify firmware.

**2.** Which tool is described as the "Google for IoT devices"?
- a) Metasploit
- b) Nmap
- c) Shodan
- d) Censys
**Answer:** c) — Shodan is a search engine for Internet-connected devices that finds open ports, default credentials, and firmware versions.

**3.** An attacker intercepts an OTA firmware update and modifies it before installation. Which extraction method does this represent?
- a) Flash memory dump
- b) UART access
- c) OTA update interception
- d) Chip-off attack
**Answer:** c) — OTA update interception involves capturing and modifying firmware updates in transit.

**4.** What is the primary vulnerability of the MQTT protocol that attackers exploit?
- a) It uses encrypted channels by default
- b) It requires hardware tokens
- c) It allows unauthorized topic subscription without authentication
- d) It only works with wired connections
**Answer:** c) — MQTT without authentication allows attackers to subscribe to topics and inject fake messages.

**5.** Which technique involves running firmware in an emulator to observe its behavior without executing it on actual hardware?
- a) Static analysis
- b) Dynamic analysis
- c) Reverse engineering
- d) Firmware signing
**Answer:** b) — Dynamic analysis runs firmware in an emulator to observe runtime behavior and interactions.

