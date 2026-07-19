# OBJECTIVE 03 — iOS THREATS AND ATTACKS

---

## iOS — CORE DEFINITION (EXAM)

|Item|Memorize|
|---|---|
|iOS|A closed-source mobile operating system developed by Apple for iPhone and iPad devices|

MEMORY HOOK:  
**Closed-source ≠ immune**

---

## iOS SECURITY MODEL (EXAM FOUNDATION)

| Security Feature    | Description                |
| ------------------- | -------------------------- |
| Code signing        | Only signed apps can run   |
| Sandboxing          | App isolation              |
| Secure Boot Chain   | Verifies integrity at boot |
| App Store vetting   | Apple review process       |
| Data Protection API | File-level encryption      |

MEMORY HOOK:  
**Sign → Sandbox → Secure Boot**

---

## WHY iOS IS STILL ATTACKED

|Reason|
|---|
|Jailbreaking bypasses controls|
|User trust in App Store|
|Zero-day exploits|
|Phishing and configuration abuse|

---

# iOS THREAT CATEGORIES (EXAM LIST)

|Category|
|---|
|Spyware|
|Malware|
|Trojans|
|Configuration profile abuse|
|Jailbreak-based attacks|
|Network-based attacks|

---

# JAILBREAKING — iOS (EXAM FAVORITE)

## JAILBREAKING — DEFINITION

|Item|Memorize|
|---|---|
|Jailbreaking|The process of removing iOS restrictions to gain root access|

MEMORY HOOK:  
**Jailbreak = root access**

---

## JAILBREAKING — SECURITY IMPACT

|Impact|
|---|
|Disables code signing enforcement|
|Bypasses sandbox|
|Enables unauthorized apps|
|Breaks MDM enforcement|

MEMORY HOOK:  
**No sandbox, no trust**

---

## TYPES OF JAILBREAK (EXAM)

|Type|Description|
|---|---|
|Tethered|Requires computer at boot|
|Semi-tethered|Partial functionality|
|Untethered|Persistent jailbreak|

MEMORY HOOK:  
**Un-tethered = persistent**

---

# iOS ATTACK VECTORS (MUST MEMORIZE)

---

## 1. MALICIOUS APPLICATIONS

|Aspect|Description|
|---|---|
|Source|Third-party stores|
|Delivery|Jailbroken devices|
|Impact|Data theft, spyware|

---

## 2. ENTERPRISE CERTIFICATE ABUSE

|Aspect|Description|
|---|---|
|What|Misuse of Apple enterprise certificates|
|Result|Unsigned apps installed|
|Impact|Malware distribution|

MEMORY HOOK:  
**Enterprise cert = bypass gatekeeper**

---

## 3. CONFIGURATION PROFILE ATTACKS

|Aspect|Description|
|---|---|
|Method|Malicious profiles|
|Abuse|VPN, proxy, cert install|
|Result|Traffic interception|

MEMORY HOOK:  
**Profile = silent control**

---

## 4. iOS SPYWARE

|Capability|
|---|
|Call recording|
|SMS monitoring|
|GPS tracking|
|App data theft|

---

## 5. NETWORK-BASED ATTACKS

|Attack|
|---|
|Rogue Wi-Fi|
|MITM|
|SSL stripping|
|Fake certificates|

---

# iOS APP VULNERABILITIES (EXAM TABLE)

|Vulnerability|
|---|
|Insecure local storage|
|Weak cryptography|
|Improper session handling|
|Hardcoded credentials|
|Insufficient certificate validation|

---

# iOS DATA STORAGE LOCATIONS (EXAM)

|Location|Risk|
|---|---|
|Keychain|Credential exposure|
|SQLite DB|Plaintext data|
|Plist files|Config leaks|
|Cache files|Sensitive remnants|

MEMORY HOOK:  
**Keychain ≠ invincible**

---

# iOS COMMUNICATION THREATS

|Threat|
|---|
|Insecure TLS|
|Invalid cert acceptance|
|Proxy interception|

---

# iOS SECURITY TOOLS (CEH EXPECTS RECOGNITION)

|Tool|Purpose|
|---|---|
|Cydia|Package manager (jailbroken)|
|Frida|Runtime instrumentation|
|Objection|iOS runtime analysis|
|iFunBox|File system access|
|Burp Suite|Traffic interception|

MEMORY HOOK:  
**Frida = runtime control**

---

# iOS ATTACK CONSEQUENCES (EXAM TABLE)

|Impact|
|---|
|Data leakage|
|Privacy violations|
|Credential theft|
|Corporate compromise|

---

# ANDROID VS iOS — EXAM COMPARISON (VERY HIGH YIELD)

|Feature|Android|iOS|
|---|---|---|
|Source model|Open|Closed|
|Root access|Rooting|Jailbreaking|
|App vetting|Weak|Strong|
|Custom ROMs|Yes|No|
|Enterprise abuse|Less|More|

MEMORY HOOK:  
**Android = open risk, iOS = controlled risk**

---

# OBJECTIVE 03 — EXAM MEMORY BLOCK

**iOS relies on code signing, sandboxing, and secure boot.  
Jailbreaking removes all protections.  
Attacks use malicious apps, enterprise certificates, and configuration profiles.  
Network interception and spyware remain key threats.**

---

## OBJECTIVE 03 — STATUS

|Item|Status|
|---|---|
|iOS threats|COMPLETE|
|Jailbreaking|COMPLETE|
|Attack vectors|COMPLETE|
|Tools|COMPLETE|
|Exam alignment|EXACT|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Jailbreaking | Removing iOS restrictions to gain root access, bypassing code signing and sandbox |
| Tethered Jailbreak | Requires computer connection at every boot to function |
| Semi-tethered Jailbreak | Partially functional after reboot without computer; needs re-jailbreak |
| Untethered Jailbreak | Persistent jailbreak that survives device reboots without assistance |
| Enterprise Certificate Abuse | Misusing Apple enterprise certs to install unsigned malicious apps |
| Configuration Profile Attack | Malicious profiles that install VPN, proxy, or certs to intercept traffic |
| Cydia | Package manager for jailbroken iOS devices to install unauthorized software |
| Frida | Dynamic instrumentation toolkit for runtime analysis on iOS and Android |
| Objection | iOS runtime analysis and manipulation framework built on Frida |
| Data Protection API | iOS file-level encryption tied to device passcode |
| Secure Boot Chain | Verifies integrity of each boot stage before loading |
| Code Signing | iOS requirement that only Apple-signed code can execute |
| Sandboxing | App isolation mechanism preventing apps from accessing each other's data |
| Keychain | iOS secure credential storage; not immune to attacks on jailbroken devices |

---

# PRACTICE QUESTIONS

**1.** What does jailbreaking an iOS device disable?
- a) Bluetooth functionality
- b) Code signing enforcement and sandboxing
- c) Cellular network access
- d) GPS tracking
**Answer:** B — Jailbreaking removes code signing and sandbox protections, granting root access.

**2.** Which type of jailbreak persists through device reboots without a computer?
- a) Tethered
- b) Semi-tethered
- c) Untethered
- d) Semi-untethered
**Answer:** C — Untethered jailbreaks are fully persistent across reboots without any external assistance.

**3.** What is the risk of enterprise certificate abuse on iOS?
- a) It improves app performance
- b) It allows installation of unsigned malicious apps bypassing the App Store
- c) It encrypts all device data
- d) It disables Wi-Fi connections
**Answer:** B — Enterprise certs can be misused to distribute malware without Apple App Store review.

**4.** How do configuration profile attacks compromise iOS traffic?
- a) By brute-forcing the passcode
- b) By installing malicious VPN, proxy, or certificate profiles to intercept traffic
- c) By jailbreaking the device remotely
- d) By disabling the firewall
**Answer:** B — Malicious profiles silently configure VPNs, proxies, or install rogue certificates for MITM.

**5.** Which tool allows runtime instrumentation of iOS applications?
- a) iFunBox
- b) Cydia
- c) Frida
- d) MobSF
**Answer:** C — Frida provides dynamic instrumentation to hook and analyze app behavior at runtime.

