# OBJECTIVE 02 — IoT THREATS AND ATTACKS

---

## IoT THREAT — CORE DEFINITION (EXAM)

|Term|Definition|
|---|---|
|IoT Threat|Any potential action or event that exploits vulnerabilities in IoT devices, networks, or platforms to compromise confidentiality, integrity, or availability|

MEMORY HOOK:  
**Threat exploits weakness**

---

## WHY IoT DEVICES ARE HIGHLY VULNERABLE

|Reason|
|---|
|Default credentials|
|Hardcoded passwords|
|Weak/no encryption|
|Insecure web interfaces|
|Lack of patching|
|Limited processing power|
|Physical accessibility|
|Long device lifecycle|

MEMORY HOOK:  
**Cheap, old, exposed**

---

# IoT ATTACK SURFACE (EXAM FAVORITE)

|Layer|Attack Surface|
|---|---|
|Device|Firmware, hardware ports|
|Network|Protocols, wireless|
|Gateway|Authentication flaws|
|Cloud|APIs, web apps|
|Application|Web/mobile apps|

MEMORY HOOK:  
**Every layer is attackable**

---

# IoT THREAT CATEGORIES (CEH LIST)

|Category|
|---|
|Physical attacks|
|Network-based attacks|
|Software attacks|
|Cloud attacks|
|Supply chain attacks|

---

# DEVICE-LEVEL ATTACKS (CRITICAL)

---

## 1. DEFAULT CREDENTIAL ATTACK

|Aspect|Description|
|---|---|
|Cause|Default usernames/passwords|
|Method|Credential reuse|
|Impact|Full device takeover|

MEMORY HOOK:  
**Default creds = instant access**

---

## 2. FIRMWARE TAMPERING

|Aspect|Description|
|---|---|
|Method|Modify firmware image|
|Vector|Update mechanism|
|Result|Persistent backdoor|

MEMORY HOOK:  
**Firmware = permanent control**

---

## 3. PHYSICAL TAMPERING

|Method|
|---|
|JTAG access|
|UART access|
|Chip-off attacks|
|Side-channel attacks|

MEMORY HOOK:  
**Physical access = root**

---

## 4. HARDWARE BACKDOORS

|Aspect|
|---|
|Malicious chips|
|Supply chain compromise|
|Undetectable persistence|

---

# NETWORK-LEVEL ATTACKS (VERY HIGH YIELD)

---

## 1. MAN-IN-THE-MIDDLE (MITM)

|Description|
|---|
|Intercepts device communication|
|Alters commands/data|
|Exploits weak encryption|

---

## 2. PROTOCOL-BASED ATTACKS

### MQTT ATTACKS

|Attack|
|---|
|Unauthorized topic subscription|
|Message injection|
|Broker compromise|

MEMORY HOOK:  
**MQTT without auth = broadcast**

---

### CoAP ATTACKS

|Attack|
|---|
|Amplification|
|Spoofing|
|Replay attacks|

---

## 3. DNS ATTACKS

|Attack|
|---|
|DNS spoofing|
|DNS hijacking|
|Rogue DNS servers|

---

## 4. JAMMING ATTACKS

|Aspect|
|---|
|Wireless interference|
|DoS condition|
|Targets ZigBee, Bluetooth|

MEMORY HOOK:  
**Noise = DoS**

---

# SOFTWARE-LEVEL ATTACKS

---

## 1. INSECURE WEB INTERFACES (OWASP IoT TOP)

|Issue|
|---|
|Weak authentication|
|No HTTPS|
|Command injection|
|XSS|

---

## 2. INSECURE MOBILE APPS

|Issue|
|---|
|Hardcoded APIs|
|Weak auth|
|Improper certificate validation|

---

## 3. BUFFER OVERFLOWS

|Cause|
|---|
|Unsafe memory handling|
|No bounds checking|

---

## 4. INJECTION ATTACKS

|Type|
|---|
|Command injection|
|SQL injection|
|XML injection|

---

# CLOUD & BACKEND ATTACKS

---

## 1. API ABUSE

|Issue|
|---|
|Weak authentication|
|Broken authorization|
|Excessive privileges|

---

## 2. DATA BREACHES

|Cause|
|---|
|Misconfigured cloud storage|
|Weak access controls|

---

## 3. ACCOUNT TAKEOVER

|Vector|
|---|
|Credential stuffing|
|Phishing|

---

# BOTNET-BASED IoT ATTACKS (EXAM FAVORITE)

---

## IoT BOTNET — DEFINITION

|Term|Definition|
|---|---|
|IoT Botnet|A network of compromised IoT devices controlled by an attacker|

---

## MIRAI BOTNET (MUST MEMORIZE)

|Feature|
|---|
|Targets IoT devices|
|Uses default credentials|
|Performs DDoS attacks|
|Scans Telnet/SSH|

MEMORY HOOK:  
**Mirai = IoT DDoS**

---

## OTHER IoT BOTNETS (RECOGNITION)

|Botnet|
|---|
|Reaper|
|Hajime|
|Bashlite|
|Mozi|

---

# IoT DDoS ATTACK FLOW (STEP LOGIC)

1. Attacker scans for vulnerable IoT devices
    
2. Compromises devices using default credentials
    
3. Installs bot malware
    
4. Botnet receives C2 commands
    
5. Devices flood target with traffic
    

MEMORY HOOK:  
**Scan → Infect → Control → Flood**

---

# SUPPLY CHAIN ATTACKS (IMPORTANT)

|Attack|
|---|
|Compromised firmware|
|Malicious updates|
|Third-party library backdoors|

MEMORY HOOK:  
**Trust vendor = risk**

---

# IoT PRIVACY THREATS

|Threat|
|---|
|Location tracking|
|Audio/video surveillance|
|Behavioral profiling|

---

# OBJECTIVE 02 — EXAM MEMORY BLOCK

**IoT threats target devices, networks, software, and cloud components.  
Default credentials, weak encryption, and insecure interfaces are primary weaknesses.  
Botnets like Mirai exploit IoT at scale for DDoS attacks.  
Physical access and firmware attacks enable persistent compromise.**

---

## OBJECTIVE 02 — STATUS

|Item|Status|
|---|---|
|Device attacks|COMPLETE|
|Network attacks|COMPLETE|
|Software attacks|COMPLETE|
|Cloud attacks|COMPLETE|
|Botnets|COMPLETE|
|Exam alignment|EXACT|

---


## EXAM EXTRAS (Boson Practice Test)

### HMI ATTACK

|Item|Memorize|
|---|---|
|HMI attack|Human Machine Interface attack — targets monitor, touchscreen, usually in OT environments|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| IoT Threat | Any action exploiting IoT vulnerabilities to compromise confidentiality, integrity, or availability |
| JTAG | Hardware debugging interface used to test, debug, and program embedded devices — provides root-level access |
| UART | Universal Asynchronous Receiver/Transmitter — serial communication interface exposing debug consoles |
| Chip-off Attack | Physically removing a memory chip to extract data when JTAG/UART are disabled |
| Firmware Tampering | Modifying firmware images to create persistent backdoors |
| MQTT Attack | Exploits unauthorized topic subscription, message injection, or broker compromise in IoT messaging |
| CoAP Attack | Amplification, spoofing, or replay attacks exploiting UDP-based CoAP protocol |
| IoT Botnet | Network of compromised IoT devices controlled by an attacker (e.g., Mirai) |
| Mirai | Famous IoT botnet that scans Telnet/SSH using default credentials for DDoS attacks |
| Reaper | IoT botnet that evolved beyond Mirai with additional exploit capabilities |
| BlueBorne | Bluetooth-based attack vector for IoT device compromise |
| Supply Chain Attack | Compromising devices through malicious firmware, updates, or third-party library backdoors |
| Rolling Code Attack | Exploiting predictable code sequences in wireless entry systems |
| Jamming Attack | Wireless interference causing denial of service, targeting ZigBee and Bluetooth |
| Firmware Extraction | Obtaining firmware images via JTAG, UART, flash dump, or OTA interception |

---

# PRACTICE QUESTIONS

**1.** An attacker gains root access to an IoT device by connecting to exposed UART pins on the PCB. What type of attack is this?
- a) Firmware tampering
- b) Physical interface attack
- c) Network protocol attack
- d) Supply chain attack
**Answer:** b) — UART access is a physical interface attack that exposes a debug console without authentication.

**2.** The Mirai botnet primarily compromises IoT devices using which method?
- a) SQL injection
- b) Default credentials via Telnet/SSH brute force
- c) Phishing emails
- d) Zero-day exploits
**Answer:** b) — Mirai scans for Telnet/SSH and uses a list of default credentials to compromise IoT devices.

**3.** Which attack involves physically removing a memory chip to extract firmware data?
- a) JTAG attack
- b) UART attack
- c) Chip-off attack
- d) Side-channel attack
**Answer:** c) — Chip-off attacks remove the memory chip directly when JTAG/UART are disabled.

**4.** An attacker intercepts and alters commands between an IoT device and its cloud server. What attack is this?
- a) Jamming
- b) Man-in-the-Middle (MITM)
- c) Firmware tampering
- d) Rolling code attack
**Answer:** b) — MITM attacks intercept and modify device-to-cloud communication exploiting weak encryption.

**5.** Which IoT botnet is known for performing large-scale DDoS attacks using compromised IoT devices with default credentials?
- a) Stuxnet
- b) Reaper
- c) Mirai
- d) Bashlite
**Answer:** c) — Mirai is the most famous IoT botnet that scans for default credentials and performs DDoS attacks.
