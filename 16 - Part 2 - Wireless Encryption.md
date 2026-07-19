# OBJECTIVE 02 — WIRELESS ENCRYPTION ALGORITHMS

---

## WHY WIRELESS ENCRYPTION EXISTS (EXAM DEFINITION)

|Item|Memorize|
|---|---|
|Purpose|Protect confidentiality and integrity of wireless data|
|Problem Addressed|Open broadcast medium|

MEMORY HOOK:  
**Wireless = everyone can hear**

---

## WIRELESS SECURITY GOALS (CEH LANGUAGE)

|Goal|
|---|
|Authentication|
|Confidentiality|
|Integrity|
|Access control|

---

# WIRED EQUIVALENT PRIVACY (WEP)

---

## WEP — CORE DEFINITION (VERY IMPORTANT)

|Item|Memorize|
|---|---|
|WEP|Security protocol designed to provide wired-equivalent privacy for WLANs|

---

## WEP CHARACTERISTICS

|Feature|Detail|
|---|---|
|Encryption|RC4 stream cipher|
|Key Size|64-bit / 128-bit|
|IV Size|24-bit|
|Authentication|Open System / Shared Key|

---

## WEP WORKING (LOGIC FLOW)

|Step|
|---|
|Shared secret key configured|
|IV appended to key|
|RC4 encrypts data|
|Encrypted data transmitted|

---

## WEP WEAKNESSES (EXAM MUST)

|Weakness|
|---|
|Small IV size|
|IV reuse|
|Weak key scheduling|
|No key management|
|Easily crackable|

MEMORY HOOK:  
**WEP = Weak Encryption Protocol**

---

## WEP ATTACK RESULT

|Outcome|
|---|
|Key can be cracked in minutes|

---

# WI-FI PROTECTED ACCESS (WPA)

---

## WPA — CORE DEFINITION

|Item|Memorize|
|---|---|
|WPA|Security protocol introduced to fix WEP vulnerabilities|

---

## WPA FEATURES

|Feature|Detail|
|---|---|
|Encryption|TKIP|
|Cipher|RC4|
|Key Management|Dynamic keys|
|Integrity|MIC (Message Integrity Check)|

---

## TEMPORAL KEY INTEGRITY PROTOCOL (TKIP)

|Item|Memorize|
|---|---|
|TKIP|Dynamically changes keys for each packet|

---

## WPA MODES

|Mode|Description|
|---|---|
|WPA-Personal|Pre-Shared Key (PSK)|
|WPA-Enterprise|Uses RADIUS server|

---

## WPA LIMITATIONS (EXAM)

|Limitation|
|---|
|Still uses RC4|
|Vulnerable to attacks|
|Deprecated|

MEMORY HOOK:  
**WPA = WEP with patches**

---

# WI-FI PROTECTED ACCESS 2 (WPA2)

---

## WPA2 — CORE DEFINITION

|Item|Memorize|
|---|---|
|WPA2|IEEE 802.11i standard for WLAN security|

---

## WPA2 FEATURES

|Feature|Detail|
|---|---|
|Encryption|AES|
|Cipher Mode|CCMP|
|Key Size|128-bit|
|Authentication|PSK / Enterprise|

---

## COUNTER MODE WITH CBC-MAC PROTOCOL (CCMP)

|Item|Memorize|
|---|---|
|CCMP|Encryption and integrity protocol used with AES|

---

## WPA2 MODES

|Mode|Description|
|---|---|
|WPA2-Personal|Pre-Shared Key|
|WPA2-Enterprise|RADIUS authentication|

---

## WPA2 WEAKNESSES (EXAM TRAPS)

|Weakness|
|---|
|Weak passphrases|
|KRACK attack|
|PSK cracking|

MEMORY HOOK:  
**Strong crypto, weak passwords**

---

# WI-FI PROTECTED ACCESS 3 (WPA3)

---

## WPA3 — CORE DEFINITION

|Item|Memorize|
|---|---|
|WPA3|Latest WLAN security standard|

---

## WPA3 SECURITY IMPROVEMENTS

|Feature|Benefit|
|---|---|
|SAE|Protects against offline dictionary attacks|
|Forward Secrecy|Prevents past session decryption|
|Strong encryption|Enhanced protection|

---

## SIMULTANEOUS AUTHENTICATION OF EQUALS (SAE)

|Item|Memorize|
|---|---|
|SAE|Password-based authentication resistant to brute-force|

MEMORY HOOK:  
**WPA3 stops offline guessing**

---

## WPA3 MODES

|Mode|Description|
|---|---|
|WPA3-Personal|SAE-based|
|WPA3-Enterprise|192-bit encryption|

---

# COMPARISON TABLE (VERY HIGH YIELD)

|Feature|WEP|WPA|WPA2|WPA3|
|---|---|---|---|---|
|Cipher|RC4|RC4|AES|AES|
|Key Mgmt|Static|TKIP|CCMP|SAE|
|Security|Weak|Medium|Strong|Very Strong|
|Status|Obsolete|Deprecated|Common|Latest|

---

# EXAM FAVORITE QUESTIONS (MEMORY TRAPS)

|Question|Correct Answer|
|---|---|
|Weakest WLAN security|WEP|
|Uses AES|WPA2 / WPA3|
|Uses TKIP|WPA|
|Uses SAE|WPA3|
|Vulnerable to IV reuse|WEP|

---

# QUICK MEMORY LADDER

|Order|
|---|
|WEP → WPA → WPA2 → WPA3|

MEMORY HOOK:  
**Weak → Better → Strong → Strongest**

---


## EXAM EXTRAS (Boson Practice Test)

### WEP/WPA/WPA2/WPA3 COMPARISON TABLE

|Standard|Cipher / Handshake|Notes|
|---|---|---|
|**WEP**|RC4 + 24-bit IV|Totally broken|
|**WPA**|RC4 + TKIP|Patch, still weak|
|**WPA2**|AES-CCMP + 4-way|Strong, widely used|
|**WPA3**|**SAE / Dragonfly**|Dragonblood vuln|

---

### KRACK ATTACK

|Item|Memorize|
|---|---|
|KRACK|Key Reinstallation Attack — exploits WPA2 4-way handshake|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| WEP | Wireless encryption protocol using RC4 with 24-bit IV; considered totally broken |
| WPA | Interim security standard using TKIP to fix WEP weaknesses; now deprecated |
| WPA2 | IEEE 802.11i standard using AES-CCMP encryption; widely deployed |
| WPA3 | Latest WLAN security standard using SAE for offline dictionary attack protection |
| TKIP | Temporal Key Integrity Protocol; dynamically changes keys per packet (used in WPA) |
| CCMP | Counter Mode with CBC-MAC Protocol; encryption and integrity protocol used with AES |
| SAE | Simultaneous Authentication of Equals; password-based auth resistant to brute-force |
| KRACK | Key Reinstallation Attack; exploits WPA2 4-way handshake to decrypt traffic |
| PSK | Pre-Shared Key mode; used in WPA/WPA2/WPA3-Personal |
| RADIUS | Authentication server used in Enterprise mode (WPA/WPA2/WPA3-Enterprise) |
| IV | Initialization Vector; 24-bit in WEP, leading to reuse and easy cracking |
| AES | Advanced Encryption Standard; used in WPA2 and WPA3 |
| Dragonblood | Vulnerability affecting WPA3 SAE implementation |

---

# PRACTICE QUESTIONS

**1.** Which wireless encryption protocol uses AES with CCMP?
- a) WEP
- b) WPA
- c) WPA2
- d) WPA3
**Answer:** C — WPA2 uses AES-CCMP for both encryption and integrity.

**2.** What is the primary weakness that allows WEP keys to be cracked quickly?
- a) AES vulnerability
- b) Small 24-bit IV size leading to IV reuse
- c) Weak RADIUS authentication
- d) SAE implementation flaw
**Answer:** B — The 24-bit IV is too small, causing reuse that reveals the key.

**3.** Which protocol does WPA use instead of CCMP?
- a) AES
- b) SAE
- c) TKIP
- d) RSA
**Answer:** C — WPA introduced TKIP to dynamically change keys per packet, replacing WEP's static approach.

**4.** What does SAE protect against in WPA3?
- a) KRACK attacks
- b) Offline dictionary attacks
- c) Evil twin attacks
- d) Jamming
**Answer:** B — SAE (Simultaneous Authentication of Equals) prevents offline password guessing.

**5.** Which statement about the KRACK attack is correct?
- a) It targets WEP networks
- b) It exploits the WPA2 4-way handshake
- c) It only affects WPA3
- d) It requires physical access to the AP
**Answer:** B — KRACK forces nonce reuse in the WPA2 4-way handshake to decrypt traffic.
