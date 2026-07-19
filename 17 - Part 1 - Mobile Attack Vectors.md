# MODULE 17 — OVERVIEW (EXAM)

## MODULE NAME

Hacking Mobile Platforms

## WHY THIS MODULE MATTERS

Mobile devices store sensitive personal and corporate data and are always connected to networks, making them high-value targets for attackers.

---

## LEARNING OBJECTIVES (EXAM LIST)

|Objective No.|Objective|
|---|---|
|01|Explain Mobile Platform Attack Vectors|
|02|Explain Various Android OS Threats and Attacks|
|03|Explain Various iOS Threats and Attacks|
|04|Summarize Mobile Device Management (MDM) Concepts|
|05|Present Mobile Security Guidelines and Tools|

MEMORY HOOK:  
**Vectors → Android → iOS → MDM → Defense**

---

# OBJECTIVE 01 — MOBILE PLATFORM ATTACK VECTORS

---

## CORE DEFINITION (EXAM)

|Term|Definition|
|---|---|
|Mobile Platform Attack Vector|A path or method used by attackers to compromise mobile devices, networks, or backend systems|

---

## WHY MOBILE PLATFORMS ARE TARGETED

|Reason|
|---|
|Always connected (Internet, Wi-Fi, Bluetooth, Cellular)|
|Carry sensitive data|
|Used for authentication (OTP, banking apps)|
|User trust in apps|
|Bring Your Own Device (BYOD)|

MEMORY HOOK:  
**Always on + personal data = prime target**

---

## VULNERABLE AREAS IN A MOBILE BUSINESS ENVIRONMENT

### ENTRY POINTS (EXAM FAVORITE)

|Area|
|---|
|Mobile device|
|Wi-Fi device|
|Telecom service provider|
|Internet|
|App store|
|Website|
|Corporate intranet|
|Corporate VPN gateway|

MEMORY HOOK:  
**Device → Network → Cloud**

---

## MOBILE ATTACK SURFACE (HIGH-YIELD)

|Layer|Description|
|---|---|
|Device|OS, apps, hardware|
|Network|Wi-Fi, cellular, Bluetooth|
|Data center / Cloud|Web servers, databases|

---

# OWASP TOP 10 MOBILE RISKS — 2024 (MUST MEMORIZE)

|ID|Risk|
|---|---|
|M1|Improper Credential Usage|
|M2|Inadequate Supply Chain Security|
|M3|Insecure Authentication/Authorization|
|M4|Insufficient Input/Output Validation|
|M5|Insecure Communication|
|M6|Inadequate Privacy Controls|
|M7|Insufficient Binary Protections|
|M8|Security Misconfiguration|
|M9|Insecure Data Storage|
|M10|Insufficient Cryptography|

MEMORY HOOK:  
**Credentials → Supply → Auth → Input → Comm → Privacy → Binary → Config → Storage → Crypto**

---

## OWASP MOBILE RISKS — EXPLANATIONS (NOT SKIPPED)

### M1 — Improper Credential Usage

|Details|
|---|
|Weak credential handling|
|Hardcoded passwords|
|Insecure storage|
|Transmission without encryption|

---

### M2 — Inadequate Supply Chain Security

|Details|
|---|
|Vulnerable third-party libraries|
|Poor app signing|
|Weak update mechanisms|

---

### M3 — Insecure Authentication/Authorization

|Details|
|---|
|Weak password policies|
|Broken session handling|
|Authorization bypass|

---

### M4 — Insufficient Input/Output Validation

|Details|
|---|
|SQL injection|
|Command injection|
|XSS|

---

### M5 — Insecure Communication

|Details|
|---|
|Weak SSL/TLS|
|Invalid certificates|
|Unencrypted data transmission|

---

### M6 — Inadequate Privacy Controls

|Details|
|---|
|Poor PII protection|
|Non-compliance with privacy laws|

---

### M7 — Insufficient Binary Protections

|Details|
|---|
|Reverse engineering|
|Code tampering|
|No obfuscation|

---

### M8 — Security Misconfiguration

|Details|
|---|
|Weak encryption|
|Improper permissions|
|Debugging enabled|

---

### M9 — Insecure Data Storage

|Details|
|---|
|Plaintext storage|
|Unsecured databases|
|Improper credential storage|

---

### M10 — Insufficient Cryptography

|Details|
|---|
|Weak algorithms|
|Poor key management|
|Improper randomness|

---

# ANATOMY OF A MOBILE ATTACK (EXAM CRITICAL)

## THREE PRIMARY ATTACK POINTS

|Point|Target|
|---|---|
|Point 01|Device|
|Point 02|Network|
|Point 03|Data Center / Cloud|

MEMORY HOOK:  
**Device → Network → Cloud**

---

# ATTACK VECTORS — DEVICE LEVEL

## BROWSER-BASED ATTACKS

|Attack|Description|
|---|---|
|Phishing|Fake websites|
|Framing|Hidden malicious iframes|
|Clickjacking|UI deception|
|Man-in-the-Mobile|Malware intercepting data|

---

## PHONE/SMS-BASED ATTACKS

|Attack|Description|
|---|---|
|Baseband attacks|GSM/3GPP exploitation|
|Smishing|SMS phishing|
|Call-based attacks|Premium numbers|

---

## APPLICATION-BASED ATTACKS

|Attack|Description|
|---|---|
|Insecure data storage|Sensitive data exposed|
|Weak encryption|Data theft|
|Improper validation|Input abuse|
|Configuration manipulation|App logic abuse|
|Escalated privileges|Root-level access|

---

## OS-BASED ATTACKS

|Attack|Description|
|---|---|
|No passcode|Data exposure|
|Jailbreaking (iOS)|Security bypass|
|Rooting (Android)|Privilege escalation|
|OS data caching|Sensitive data leaks|
|Password cracking|Weak crypto|
|User-initiated code|Malicious installs|

---

# ATTACK VECTORS — NETWORK LEVEL

|Attack|
|---|
|Wi-Fi sniffing|
|Rogue access points|
|Packet sniffing|
|MITM|
|Session hijacking|
|DNS poisoning|
|SSL stripping|
|Fake certificates|

MEMORY HOOK:  
**Sniff → Intercept → Redirect**

---

# ATTACK VECTORS — DATA CENTER / CLOUD

## WEB SERVER-BASED

|Attack|
|---|
|Platform vulnerabilities|
|Server misconfiguration|
|XSS|
|CSRF|
|Web input validation flaws|
|Brute-force|
|SQL injection|

---

# WHAT HAPPENS AFTER DEVICE COMPROMISE (TABLE 17.1)

|Category|Examples|
|---|---|
|Surveillance|Camera, mic, call logs|
|Data theft|Contacts, SMS, files|
|Botnet activity|DDoS, click fraud|
|Impersonation|Fake emails, social posts|

MEMORY HOOK:  
**Spy → Steal → Spread → Impersonate**

---

# OBJECTIVE 01 — EXAM MEMORY BLOCK

**Mobile attacks target devices, networks, and clouds.  
OWASP Mobile Top 10 define the risk model.  
Apps, OS, SMS, browser, and Wi-Fi are entry points.  
Compromise leads to surveillance, theft, impersonation, and botnets.**

---

## STATUS CHECK

|Item|Status|
|---|---|
|Objective 01|COMPLETE|
|OWASP Top 10|COMPLETE|
|Attack vectors|COMPLETE|
|Exam alignment|EXACT|

---


## EXAM EXTRAS (Boson Practice Test)

### INTENTFUZZER

|Item|Memorize|
|---|---|
|IntentFuzzer|Targets Android inter-process communication (IPC)|

---

### SEMI-TETHERED JAILBREAK

|Item|Memorize|
|---|---|
|Semi-tethered jailbreak|Sideloaded app can jailbreak device even after reboot|

---

### TRIDENT

|Item|Memorize|
|---|---|
|Trident|Monitors iPhone calls; requires remote jailbreak|

---

### TRUSTJACKING

|Item|Memorize|
|---|---|
|Trustjacking|Compromised host with iTunes can control iPhone over wireless network|

---

### SPEARPHONE

|Item|Memorize|
|---|---|
|Spearphone|Exploits phone loudspeaker and accelerometer|

---

### ALTER

|Item|Memorize|
|---|---|
|aLTEr|Uses layer 2 meta-information to determine which sites user visits|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Mobile Platform Attack Vector | A path or method used to compromise mobile devices, networks, or backend systems |
| OWASP Mobile Top 10 | Industry-standard list of the most critical mobile security risks |
| Smishing | Phishing attack delivered via SMS messages |
| Man-in-the-Mobile (MITMO) | Malware that intercepts mobile traffic, targeting banking apps |
| Clickjacking | UI deception tricking users into performing unintended actions |
| Baseband Attack | Exploitation of GSM/3GPP cellular protocol stack |
| Phishing | Fake websites designed to steal credentials |
| Framing | Hidden malicious iframes injected into legitimate web pages |
| Jailbreaking | Removing iOS restrictions to gain root access |
| Rooting | Gaining superuser access on Android devices |
| Botnet Activity | Compromised mobile devices used for DDoS or click fraud |
| SSL Stripping | Downgrading HTTPS connections to HTTP for interception |
| DNS Poisoning | Redirecting DNS queries to malicious servers |
| BYOD | Bring Your Own Device; personal devices used for corporate access |

---

# PRACTICE QUESTIONS

**1.** According to the OWASP Mobile Top 10, which risk involves weak credential handling and hardcoded passwords?
- a) M3 — Insecure Authentication
- b) M1 — Improper Credential Usage
- c) M9 — Insecure Data Storage
- d) M5 — Insecure Communication
**Answer:** B — M1 specifically addresses weak credential handling, hardcoded passwords, and insecure storage.

**2.** What are the three primary attack points in a mobile attack?
- a) App, Browser, SMS
- b) Device, Network, Data Center/Cloud
- c) Wi-Fi, Bluetooth, Cellular
- d) OS, Applications, Hardware
**Answer:** B — Mobile attacks target the device itself, the network layer, and the cloud/backend.

**3.** Which attack uses SMS messages to deliver phishing links?
- a) Clickjacking
- b) Framing
- c) Smishing
- d) Baseband attack
**Answer:** C — Smishing (SMS phishing) delivers malicious links via text messages.

**4.** What happens after a mobile device is compromised by spyware?
- a) Only network speed decreases
- b) Camera, mic, call logs, and contacts can be surveilled and stolen
- c) The device automatically updates
- d) Encryption is automatically enabled
**Answer:** B — Compromised devices enable surveillance (camera/mic), data theft, and impersonation.

**5.** What is the Trustjacking attack vector?
- a) Exploiting Bluetooth connections
- b) A compromised host with iTunes can control iPhone over wireless
- c) Intercepting SMS messages
- d) Rooting the Android device
**Answer:** B — Trustjacking exploits iTunes syncing to gain control of an iPhone over the network.
