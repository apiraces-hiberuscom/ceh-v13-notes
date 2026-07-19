# OBJECTIVE 05 — WIRELESS ATTACK COUNTERMEASURES

---

## WIRELESS SECURITY — CORE DEFINITION (EXAM)

|Item|Memorize|
|---|---|
|Wireless Security|Measures implemented to protect wireless networks from unauthorized access and attacks|

MEMORY HOOK:  
**Wireless security = prevention + detection**

---

## WHY WIRELESS NETWORKS NEED COUNTERMEASURES

|Reason|
|---|
|Open broadcast medium|
|Easy eavesdropping|
|Rogue device risk|
|Weak default configurations|

---

# PRIMARY WIRELESS SECURITY CONTROLS

---

## 1. STRONG ENCRYPTION (MOST IMPORTANT)

|Control|Description|
|---|---|
|WPA3|Recommended security standard|
|WPA2-AES|Acceptable minimum|
|Disable WEP/WPA|Mandatory|

MEMORY HOOK:  
**No WEP. No WPA.**

---

## 2. STRONG AUTHENTICATION

|Control|Description|
|---|---|
|Strong passphrases|Prevent dictionary attacks|
|WPA2/WPA3-Enterprise|Uses RADIUS|
|Certificates|Stronger authentication|

MEMORY HOOK:  
**Enterprise > Personal**

---

## 3. DISABLE WPS

|Reason|
|---|
|Vulnerable to brute-force|
|PIN-based weakness|

MEMORY HOOK:  
**WPS = weak point**

---

## 4. ACCESS POINT CONFIGURATION HARDENING

|Hardening Step|
|---|
|Change default credentials|
|Disable SSID broadcasting|
|Reduce signal strength|
|Change default SSID|

EXAM TRAP:  
Hidden SSID ≠ security  
Still useful as a **deterrent**, not protection.

---

## 5. MAC ADDRESS FILTERING

|Feature|Reality|
|---|---|
|Allows known devices|YES|
|Prevents attacks|NO|
|Easily spoofed|YES|

MEMORY HOOK:  
**MAC filtering = speed bump**

---

## 6. WIRELESS INTRUSION DETECTION / PREVENTION SYSTEMS (WIDS/WIPS)

---

### WIDS — DEFINITION

|Item|Memorize|
|---|---|
|WIDS|Monitors wireless traffic for attacks|

---

### WIPS — DEFINITION

|Item|Memorize|
|---|---|
|WIPS|Detects and actively prevents attacks|

---

### DETECTED THREATS

|Threat|
|---|
|Rogue AP|
|Evil Twin|
|Deauth attacks|
|MAC spoofing|

MEMORY HOOK:  
**IDS sees, IPS stops**

---

## 7. NETWORK SEGMENTATION

|Technique|
|---|
|Separate WLAN from LAN|
|Use VLANs|
|Guest network isolation|

MEMORY HOOK:  
**Compartmentalize damage**

---

## 8. VPN OVER WIRELESS

|Benefit|
|---|
|Encrypts traffic end-to-end|
|Protects open Wi-Fi|

MEMORY HOOK:  
**VPN shields wireless**

---

## 9. REGULAR PATCHING AND FIRMWARE UPDATES

|Component|
|---|
|Access points|
|Routers|
|Wireless controllers|

MEMORY HOOK:  
**Old firmware = open door**

---

## 10. PHYSICAL SECURITY

|Measure|
|---|
|Secure AP placement|
|Prevent rogue device installation|
|Control access to network hardware|

MEMORY HOOK:  
**Physical access = total access**

---

# WIRELESS ATTACK → COUNTERMEASURE MAPPING (EXAM FAVORITE)

|Attack|Countermeasure|
|---|---|
|Evil Twin|WIPS|
|Rogue AP|WIDS/WIPS|
|Deauth|802.11w|
|WEP cracking|WPA3|
|MITM|Strong encryption|
|Jamming|Spectrum analysis|

---

## IEEE 802.11w — MANAGEMENT FRAME PROTECTION

|Item|Memorize|
|---|---|
|802.11w|Protects management frames|
|Prevents|Deauth/Disassoc attacks|

MEMORY HOOK:  
**11w stops deauth**

---

# WIRELESS SECURITY BEST PRACTICES (CEH LIST)

|#|Practice|
|---|---|
|1|Use WPA3|
|2|Disable WPS|
|3|Enable WIPS|
|4|Use strong passwords|
|5|Segment networks|
|6|Patch firmware|
|7|Monitor continuously|

---

# MODULE 16 — COMPLETE MEMORY BLOCK

**Wireless is broadcast.  
Encryption is mandatory.  
WEP is broken.  
WPA3 is best.  
Recon listens.  
Deauth forces reconnect.  
Aircrack cracks keys.  
WIPS stops attacks.**

---

# MODULE 16 — FINAL STATUS

|Item|Status|
|---|---|
|Objectives covered|100%|
|Tools covered|100%|
|Commands covered|100%|
|Attacks covered|100%|
|Countermeasures covered|100%|
|Exam alignment|Exact|

---

## MODULE 16 COMPLETE

You are now ready for:

- **Module 17 – Hacking Mobile Platforms**
    
- **Wireless attack scenario drills**
    
- **Aircrack / Reaver command flash review**
    
- **One-page wireless exam cheat sheet**
    

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| WPA3 | Recommended wireless security standard using SAE authentication |
| WPA2-AES | Acceptable minimum encryption standard for wireless networks |
| WIDS | Wireless Intrusion Detection System; monitors traffic for attacks |
| WIPS | Wireless Intrusion Prevention System; detects and actively prevents attacks |
| 802.11w | Management Frame Protection standard that prevents deauth/disassoc attacks |
| WPS | Wi-Fi Protected Setup; convenience feature vulnerable to brute-force attacks |
| MAC Filtering | Allows only known devices but easily bypassed via MAC spoofing |
| Containerization | Isolating corporate data and apps from personal data on a device |
| Network Segmentation | Separating WLAN from LAN using VLANs to limit attack impact |
| VPN over Wireless | Encrypts all traffic end-to-end, protecting data on open Wi-Fi |
| Firmware Patching | Regularly updating AP, router, and controller firmware to fix vulnerabilities |
| RADIUS Server | Enterprise authentication server used in WPA2/WPA3-Enterprise mode |
| Spectrum Analysis | Technique used to detect jamming and wireless interference |
| SSID Hiding | Disabling SSID broadcast; provides deterrence but NOT true security |

---

# PRACTICE QUESTIONS

**1.** Which countermeasure directly prevents deauthentication attacks?
- a) MAC filtering
- b) IEEE 802.11w (Management Frame Protection)
- c) Disabling SSID broadcast
- d) WPA3-SAE
**Answer:** B — 802.11w protects management frames, preventing forged deauth/disassoc frames.

**2.** A WIDS detects a Rogue AP on the network. What does a WIPS do differently?
- a) It only logs the event
- b) It actively blocks or contains the Rogue AP
- c) It disables all wireless traffic
- d) It changes the AP channel
**Answer:** B — WIDS monitors and alerts; WIPS goes further by actively preventing the threat.

**3.** Why is MAC address filtering considered insufficient security?
- a) It slows down network performance
- b) MAC addresses can be easily spoofed with tools like macchanger
- c) It only works with WEP
- d) It prevents legitimate users from connecting
**Answer:** B — MAC addresses are transmitted in cleartext and can be trivially spoofed.

**4.** Which is the MOST important wireless security control according to CEH?
- a) Disabling SSID broadcast
- b) Using MAC filtering
- c) Strong encryption (WPA3/WPA2-AES)
- d) Reducing signal strength
**Answer:** C — Strong encryption is the primary defense; all other controls are supplementary.

**5.** What is the benefit of segmenting the wireless network from the wired LAN?
- a) Increases throughput
- b) Limits damage if a wireless device is compromised
- c) Eliminates the need for encryption
- d) Prevents all MITM attacks
**Answer:** B — Network segmentation using VLANs contains breaches and limits lateral movement.

