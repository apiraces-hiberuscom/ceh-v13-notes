# OBJECTIVE 04 — MOBILE DEVICE MANAGEMENT (MDM)

---

## MDM — CORE DEFINITION (EXAM)

|Term|Definition|
|---|---|
|Mobile Device Management (MDM)|A security solution used to monitor, manage, and secure mobile devices deployed across organizations|

MEMORY HOOK:  
**MDM = control + policy + enforcement**

---

## WHY MDM IS REQUIRED (EXAM CONTEXT)

|Reason|
|---|
|BYOD environments|
|Data leakage prevention|
|Centralized control|
|Compliance enforcement|
|Device loss or theft|

---

## MDM — PRIMARY OBJECTIVES (MUST MEMORIZE)

|Objective|
|---|
|Secure corporate data|
|Enforce security policies|
|Control device access|
|Monitor device activity|
|Enable remote actions|

MEMORY HOOK:  
**Secure, Enforce, Control, Monitor, Respond**

---

# MDM ARCHITECTURE (EXAM)

|Component|Description|
|---|---|
|MDM Server|Central management console|
|MDM Agent|Installed on device|
|Policy Engine|Enforces rules|
|Communication Channel|Secure device-server link|

MEMORY HOOK:  
**Server → Agent → Policy**

---

## MDM DEPLOYMENT MODELS (EXAM)

|Model|Description|
|---|---|
|On-Premises|Hosted internally|
|Cloud-Based|Hosted by vendor|
|Hybrid|Combination|

---

# MDM FUNCTIONALITIES (HIGH-YIELD TABLE)

|Function|Description|
|---|---|
|Device enrollment|Registers device|
|Policy enforcement|Passwords, encryption|
|App management|Whitelisting/blacklisting|
|Content control|Data access rules|
|Remote wipe|Erases data|
|Remote lock|Locks device|
|Location tracking|GPS-based|
|Compliance monitoring|Policy violations|

MEMORY HOOK:  
**Enroll → Control → Enforce → Wipe**

---

# SECURITY POLICIES ENFORCED BY MDM

|Policy|
|---|
|Password complexity|
|Screen lock timeout|
|Encryption enforcement|
|Jailbreak/root detection|
|App restrictions|
|Network usage control|

MEMORY HOOK:  
**Password, Encrypt, Detect, Restrict**

---

## MDM — APP MANAGEMENT (EXAM)

|Feature|Description|
|---|---|
|App whitelisting|Allow approved apps|
|App blacklisting|Block risky apps|
|App containerization|Isolate corporate apps|
|App updates|Forced updates|

MEMORY HOOK:  
**Whitelist beats blacklist**

---

# CONTAINERIZATION (EXAM FAVORITE)

## CONTAINERIZATION — DEFINITION

|Item|Memorize|
|---|---|
|Containerization|Isolating corporate data and apps from personal data on a device|

MEMORY HOOK:  
**Work separated from personal**

---

## BENEFITS OF CONTAINERIZATION

|Benefit|
|---|
|Data isolation|
|Selective wipe|
|Privacy preservation|
|BYOD-friendly|

---

# REMOTE ACTIONS VIA MDM (EXAM)

|Action|
|---|
|Remote wipe|
|Selective wipe|
|Device lock|
|Password reset|
|Factory reset|

MEMORY HOOK:  
**Lost device = wipe**

---

# MDM SECURITY LIMITATIONS (EXAM TRAP)

|Limitation|
|---|
|Cannot stop zero-day exploits|
|Rooted/jailbroken devices bypass controls|
|Depends on user compliance|
|Limited against social engineering|

MEMORY HOOK:  
**MDM ≠ invincible**

---

# MDM ATTACK SURFACE (IMPORTANT)

|Attack|
|---|
|Agent tampering|
|Policy bypass|
|Jailbreak evasion|
|Malicious profiles|
|Certificate abuse|

---

# COMMON MDM SOLUTIONS (CEH EXPECTS RECOGNITION)

|Tool|
|---|
|Microsoft Intune|
|VMware Workspace ONE|
|IBM MaaS360|
|MobileIron|
|Cisco Meraki MDM|

MEMORY HOOK:  
**Intune = Microsoft**

---

# MDM VS EMM VS UEM (EXAM COMPARISON)

|Term|Scope|
|---|---|
|MDM|Device management|
|EMM|Device + apps + content|
|UEM|Unified endpoint management|

MEMORY HOOK:  
**MDM ⊂ EMM ⊂ UEM**

---

# OBJECTIVE 04 — EXAM MEMORY BLOCK

**MDM provides centralized control over mobile devices.  
It enforces security policies, manages apps, and enables remote actions.  
Containerization separates corporate and personal data.  
MDM improves security but does not eliminate all risks.**

---

## OBJECTIVE 04 — STATUS

|Item|Status|
|---|---|
|MDM concepts|COMPLETE|
|Architecture|COMPLETE|
|Policies|COMPLETE|
|Limitations|COMPLETE|
|Exam alignment|EXACT|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| MDM | Mobile Device Management; centralized solution to monitor, manage, and secure mobile devices |
| BYOD | Bring Your Own Device; employee-owned devices used for corporate work |
| Containerization | Isolating corporate data/apps from personal data on a shared device |
| Remote Wipe | Erasing all data from a lost or stolen device remotely |
| Selective Wipe | Erasing only corporate data while preserving personal data |
| App Whitelisting | Allowing only pre-approved applications on managed devices |
| App Blacklisting | Blocking known risky or unauthorized applications |
| EMM | Enterprise Mobility Management; extends MDM to include apps and content |
| UEM | Unified Endpoint Management; manages all endpoint types (mobile, desktop, IoT) |
| Jailbreak/Root Detection | MDM feature that identifies and flags compromised devices |
| Compliance Monitoring | Tracking devices to ensure they adhere to security policies |
| MDM Agent | Software installed on mobile devices that communicates with the MDM server |
| Policy Engine | MDM component that enforces security rules on enrolled devices |
| Intune | Microsoft's cloud-based MDM solution |

---

# PRACTICE QUESTIONS

**1.** What is the primary purpose of containerization in MDM?
- a) To increase device storage
- b) To isolate corporate data from personal data on a BYOD device
- c) To speed up network connections
- d) To enable remote desktop access
**Answer:** B — Containerization separates work and personal data, allowing selective wipe without affecting personal files.

**2.** Which MDM feature allows erasing only corporate data from a device?
- a) Remote wipe
- b) Selective wipe
- c) Factory reset
- d) Device lock
**Answer:** B — Selective wipe targets only corporate data, preserving the user's personal content.

**3.** What happens when a rooted or jailbroken device connects to an MDM-enrolled network?
- a) The device is automatically repaired
- b) MDM detects the compromise and may block access or flag the device
- c) The device gains elevated privileges
- d) MDM is automatically disabled
**Answer:** B — MDM solutions include jailbreak/root detection to enforce compliance and restrict access.

**4.** How do MDM, EMM, and UEM relate to each other?
- a) They are identical solutions
- b) MDM ⊂ EMM ⊂ UEM (each is a superset of the previous)
- c) UEM ⊂ EMM ⊂ MDM
- d) They address completely different areas
**Answer:** B — MDM manages devices; EMM adds apps and content; UEM unifies all endpoint management.

**5.** Why can MDM alone NOT eliminate all mobile security risks?
- a) MDM is too expensive
- b) It cannot stop zero-day exploits, social engineering, or fully compromised devices
- c) MDM only works on iOS
- d) MDM does not support encryption
**Answer:** B — MDM has limitations against zero-days, social engineering, and devices with root/jailbreak bypass.

