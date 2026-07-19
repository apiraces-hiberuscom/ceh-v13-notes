# MODULE 11 — SESSION HIJACKING (EXAM CONTEXT)

|Item|Memorize|
|---|---|
|Module Number|11|
|Module Name|Session Hijacking|
|Focus|Session hijacking concepts, phases, application/network-level attacks, tools, countermeasures|

---

## LEARNING OBJECTIVES (DO NOT SKIP — EXAM LIST)

|Objective #|Description|
|---|---|
|01|Understand session hijacking concepts and why it is successful|
|02|Identify session hijacking phases|
|03|Explain passive vs active hijacking and spoofing vs hijacking|
|04|Demonstrate application-level session hijacking techniques|
|05|Explain network-level session hijacking techniques|
|06|Identify session hijacking tools and countermeasures|

---

# SESSION HIJACKING CONCEPTS

|Item|Memorize|
|---|---|
|Definition|Taking control of a valid, established TCP communication session|
|Core Mechanism|Steal a valid session ID to authenticate with the server after initial authentication|
|When Authentication Occurs|Only at the start of the TCP session (most cases)|

---

## WHY SESSION HIJACKING IS SUCCESSFUL

|Reason|Detail|
|---|---|
|No account lockout|Invalid session IDs are not rejected|
|Weak session-ID generation|Small session IDs or weak algorithms|
|Insecure handling of session IDs|Session IDs transmitted or stored insecurely|
|Indefinite session timeout|Sessions never expire|
|TCP/IP vulnerability|Most computers using TCP/IP are vulnerable|
|Encryption absence|Most countermeasures fail without encryption|

MEMORY HOOK:
**No lockout + weak ID + no timeout + no encryption = successful hijack**

---

# SESSION HIJACKING PHASES

|Phase|Action|Tools / Detail|
|---|---|---|
|1. Tracking the connection|Sniff victim traffic, identify target|Sniffer, Nmap (predictable TCP sequence numbers)|
|2. Desynchronizing the connection|Change server SEQ/ACK numbers|Send null data or RST flag to desync|
|3. Injecting attacker packet|Insert data into network or act as MITM|Crafted packets with predicted sequence number|

EXAM TRAP:
Packet analysis of local session hijack requires knowing the **Next Sequence Number (NSN)**.

---

# PASSIVE vs ACTIVE HIJACKING

|Feature|Passive Hijacking|Active Hijacking|
|---|---|---|
|Attacker activity|Observe and record traffic only|Actively break connection or participate|
|Data captured|Session IDs and passwords|Full session control|
|Example|Sniffing cookies from network traffic|MITM — guess sequence number before target responds|
|Detection risk|Low|High|
|Sequence number guessing|Not required|Often required (random generation limits success)|

MEMORY HOOK:
**Passive = watch, Active = act**

---

# SPOOFING vs HIJACKING

|Feature|Spoofing|Hijacking|
|---|---|---|
|Definition|Pretend to be another user or machine|Seize control of an existing active session|
|Session state|Initiates a new session using stolen credentials|Relies on user already making the connection|
|Key difference|Identity theft|Session theft|

MEMORY HOOK:
**Spoofing = new session, Hijacking = existing session**

---

# APPLICATION LEVEL SESSION HIJACKING

---

## STEALING SESSION IDS

|Technique|Description|
|---|---|
|Stealing|Use different techniques (XSS, sniffing, malware) to steal session IDs|
|Guessing|Try to guess session ID by observing session variables|
|Brute forcing|Try all possible permutations of session ID|

---

## SESSION SNIFFING

|Item|Memorize|
|---|---|
|Target|HTTP request header (cookie) or HTTP request body|
|Method|Sniff network traffic to capture session tokens|

---

## PREDICTING SESSION TOKENS

|Weakness|Detail|
|---|---|
|Sequential tokens|Tokens follow predictable order|
|Timestamp-based tokens|Tokens derived from time values|
|Small token space|Limited range (e.g., 01–55)|
|Weak PRNG|Pseudorandom number generators with low entropy|
|No rate limiting|No throttle on token guessing attempts|

---

# MAN-IN-THE-MIDDLE (MITM) — SPLIT TCP CONNECTIONS

|Item|Memorize|
|---|---|
|Concept|Split TCP connection into two separate connections|
|Connection 1|Client → Attacker|
|Connection 2|Attacker → Server|
|Capability|Attacker can modify and insert into intercepted communication|
|HTTP Target|TCP connection becomes the HTTP transaction target|

MEMORY HOOK:
**MITM splits the pipe: Client ↔ Attacker ↔ Server**

---

# MAN IN THE BROWSER (MITB)

|Step|Description|
|---|---|
|1|Trojan infects computer software|
|2|Trojan installs malicious code|
|3|After browser restart, code loads|
|4|Handler registered for every webpage visit|
|5|Extension matches URL with known targeted sites|
|6|User logs into site|
|7|Extension registers event handler|
|8|Extension extracts DOM field values and modifies them|
|9|Browser sends modified values to server|
|10|Server receives modified values|
|11|Receipt is granted|
|12|Browser receives receipt for modified transaction|
|13|Browser displays receipt with original details|
|14|User does not know anything happened|

MEMORY HOOK:
**MITB = Trojan → modify DOM → user sees original, server sees modified**

---

# CLIENT-SIDE SESSION ATTACKS

|Attack|Core Idea|How It Works|Key Requirement|CEH Exam Keyword|Prevention|
|---|---|---|---|---|---|
|**Cross-Site Scripting (XSS)**|Inject JS to steal session cookies|`<SCRIPT>alert(document.cookie);</SCRIPT>` executes in victim's browser; webapp fails to sanitize input|Poor input sanitization|Client-side code execution|Input validation, output encoding, HttpOnly cookies|
|**Malicious JavaScript**|JS payload steals or forwards tokens|JS captures session ID and sends it to attacker|Script injection vector|Session token exfiltration|CSP, sanitization, HttpOnly|
|**Trojan**|Malware steals session data|Trojan reads browser memory or cookies|Victim system infected|Client compromise|AV, endpoint security|
|**Cross-Site Request Forgery (CSRF)**|Abuse authenticated session|One-click session riding; victim clicks link → browser sends valid cookies automatically; app does not verify request origin|User already logged in|One-click attack / Session riding|Anti-CSRF tokens, SameSite cookies|
|**Session Replay Attack**|Capture & reuse auth token|Sniff traffic, capture authentication token, replay request to server|Token reuse allowed|Replay authentication|TLS, nonce, token expiration|
|**Session Fixation**|Attacker sets session ID in advance|Attacker gets session ID, victim opens link and enters creds, validating attacker's session|Session ID not regenerated|Pre-authentication session ID|Regenerate session ID after login|
|**Proxy-based Session Hijacking**|Steal session via fake proxy|Use proxy server as site, then replay token|User trusts proxy|Man-in-the-Browser|HTTPS, certificate validation|
|**CRIME Attack**|Leak secrets via compression|Compression Ratio Information Leak Made Easy; exploits TLS/SPDY/HTTPS compression vulnerabilities|TLS compression enabled|Compression side-channel|Disable TLS compression|
|**Forbidden Attack**|Break TLS crypto via nonce reuse|MITM exploits cryptographic nonce reuse during TLS handshake; injects malicious code and forged content; affects AES-GCM|Weak TLS config|TLS nonce reuse|Strong ciphers, TLS hardening|
|**Session Donation Attack**|Victim authenticates to attacker session|Attacker logs in → victim clicks link → attacker gains access to victim's info|Shared or reused session|Session misbinding|Bind session to user/IP/device|

MEMORY HOOK (CLIENT ATTACKS):
**CODE → XSS, Malicious JS | TRUST → CSRF, Session Donation | REUSE → Replay, Fixation | NETWORK → Proxy, CRIME | CRYPTO → Forbidden**

---

# ATTACK COMPARISON TABLE (ALL ATTACKS)

|Attack|Core Idea (1-liner)|How It Works (Condensed Flow)|Key Requirement|CEH Exam Keyword|Prevention|
|---|---|---|---|---|---|
|**XSS**|Inject JS to steal session cookies|Malicious script executes in victim's browser → reads `document.cookie`|Poor input sanitization|Client-side code execution|Input validation, output encoding, HttpOnly cookies|
|**Malicious JavaScript**|JS payload steals or forwards tokens|JS captures session ID → sends to attacker|Script injection vector|Session token exfiltration|CSP, sanitization, HttpOnly|
|**Trojan**|Malware steals session data|Trojan reads browser memory or cookies|Victim system infected|Client compromise|AV, endpoint security|
|**CSRF**|Abuse authenticated session|Victim clicks link → browser sends valid cookies automatically|User already logged in|One-click attack / Session riding|Anti-CSRF tokens, SameSite cookies|
|**Session Replay**|Capture & reuse auth token|Sniff traffic → capture auth token → replay request|Token reuse allowed|Replay authentication|TLS, nonce, token expiration|
|**Session Fixation**|Attacker sets session ID in advance|Victim logs in using attacker-known session ID|Session ID not regenerated|Pre-authentication session ID|Regenerate session ID after login|
|**Proxy-based**|Steal session via fake proxy|Victim connects through attacker-controlled proxy|User trusts proxy|Man-in-the-Browser|HTTPS, certificate validation|
|**CRIME**|Leak secrets via compression|Exploits TLS/HTTP compression ratio to infer cookies|TLS compression enabled|Compression side-channel|Disable TLS compression|
|**Forbidden**|Break TLS crypto|MITM forces nonce reuse (AES-GCM)|Weak TLS config|TLS nonce reuse|Strong ciphers, TLS hardening|
|**Session Donation**|Victim authenticates attacker session|Attacker logs in → victim clicks link → attacker gains access|Shared or reused session|Session misbinding|Bind session to user/IP/device|

---

# NETWORK LEVEL SESSION HIJACKING

**Exploits vulnerabilities in the TCP three-way handshake.**

---

## TCP/IP HIJACKING

|Step|Description|
|---|---|
|1|Sniff victim connection|
|2|Send spoofed packet with predicted sequence number|
|3|Receiver processes packet and increments sequence number|
|4|Victim's machine ignores ACK packet with off-sequence number count|
|5|Receiver receives packets with incorrect sequence number|
|6|Attacker forces victim's connection into desynchronized state|
|7|Tracks sequence numbers and continuously spoofs packets from victim's IP|
|8|Attacker communicates while victim's connection hangs|

---

## IP SPOOFING — SOURCE ROUTED PACKETS

|Step|Description|
|---|---|
|1|Gain access using trusted host's IP|
|2|Attacker spoofs IP so server accepts packets from attacker|
|3|Inject forged packets before host responds to server|
|4|Original packet lost; server receives packet with sequence number already used by attacker|
|5|Packets are source-routed with destination IP specified by attacker|

---

## RST HIJACKING

|Item|Memorize|
|---|---|
|Method|Inject spoofed TCP packet with RST flag and accurate ACK number|
|Effect|Victim believes peer reset connection → session drops|
|Tools|Colasoft Packet Builder, tcpdump|

---

## BLIND HIJACKING

|Item|Memorize|
|---|---|
|Method|Inject malicious data or commands into TCP session without seeing responses|
|Limitation|Attacker cannot sniff traffic; must predict sequence numbers|
|Applicability|Works even when source routing is disabled|

---

## UDP HIJACKING

|Step|Description|
|---|---|
|1|Attacker sends forged server reply to victim's UDP request|
|2|Uses MITM to intercept real server response|
|3|Victim accepts fake data|

---

## MITM USING FORGED ICMP

|Item|Memorize|
|---|---|
|Method|Forge ICMP error packets to redirect traffic between client and host through attacker|
|Mechanism|Error messages fool server into routing through attacker|

---

## ARP SPOOFING

|Item|Memorize|
|---|---|
|Method|Broadcast ARP request and change victim's ARP tables by sending forged replies|
|Effect|Traffic rerouted to attacker|

---

## PETITPOTAM HIJACKING

|Step|Description|
|---|---|
|1|Force domain controller to initiate authentication to attacker's server|
|2|Use MS-EFSRPC API for authentication session hijacking|
|3|Relay NTLM authentication shared by domain controller to AD Certificate Services|
|4|Gain admin privileges|

MEMORY HOOK:
**PetitPotam = Force DC auth → relay NTLM → admin**

---

# NETWORK ATTACK CLASSIFICATION

|Category|Attacks|
|---|---|
|TCP Sequence Abuse|TCP/IP Hijacking, Blind Hijacking, RST Hijacking|
|Trust Abuse|IP Spoofing, PetitPotam|
|Stateless Abuse|UDP Hijacking|
|Routing Abuse|ICMP Forgery|
|LAN Poisoning|ARP Spoofing|

---

# NETWORK ATTACK COMPARISON TABLE

|Attack|Core Idea (1-liner)|How the Attack Works (Condensed Flow)|Key Requirement|CEH Exam Keywords|
|---|---|---|---|---|
|**TCP/IP Hijacking**|Take over active TCP session by desynchronizing sequence numbers|Sniffs connection → sends spoofed packet with predicted seq → receiver increments seq → victim ignores ACK → connection desync → attacker keeps spoofing packets as victim|Ability to sniff or predict TCP sequence numbers|Sequence number prediction, desynchronization|
|**IP Spoofing (Source Routing)**|Impersonate trusted host using spoofed IP|Attacker spoofs trusted IP → injects forged packets before real host responds → server accepts attacker packets → source-routed packets control path|Source routing enabled + trusted IP|Trusted host abuse, source routing|
|**RST Hijacking**|Forcibly terminate a TCP session|Attacker injects spoofed TCP packet with RST flag + valid ACK → victim believes peer reset connection → session drops|Accurate sequence/ACK number|TCP RST flag, forced reset|
|**Blind Hijacking**|Inject data without seeing responses|Attacker cannot sniff traffic → predicts sequence numbers → injects data → cannot see replies|Predictable sequence numbers|Blind injection, no sniffing|
|**UDP Hijacking**|Inject or replace UDP communication|Attacker sends forged UDP reply → races or MITMs real server response → victim accepts fake data|Stateless UDP communication|Packet spoofing, connectionless|
|**MITM using Forged ICMP**|Redirect traffic using fake ICMP errors|Attacker forges ICMP error messages → client/server reroute traffic through attacker → MITM achieved|Trust in ICMP routing messages|ICMP redirect, traffic rerouting|
|**ARP Spoofing**|Poison ARP cache to intercept traffic|Attacker sends forged ARP replies → victims update ARP tables → traffic routed to attacker|Local network access|ARP poisoning, MAC spoofing|
|**PetitPotam Hijacking**|Force DC authentication and relay it|Attacker abuses MS-EFSRPC → forces DC to authenticate → relays NTLM auth to AD CS → gains admin privileges|NTLM enabled + AD CS|Authentication coercion, NTLM relay|

---

# SESSION HIJACKING TOOLS

|Tool|Description|
|---|---|
|Hetty|MITM proxy; HTTP client for manually creating requests and replaying proxied requests|
|Caido|Security auditing toolkit|
|bettercap|Written in Go; network attack and monitoring framework|

---

# SESSION HIJACK DETECTION

|Tool|Use|
|---|---|
|USM Anywhere|Unified security monitoring and session anomaly detection|
|Wireshark|Packet analysis to detect session anomalies and hijacking attempts|

---

# PREVENTING SESSION HIJACKING

|Countermeasure|Description|
|---|---|
|HTTP Strict Transport Security (HSTS)|Forces HTTPS connections, prevents downgrade attacks|
|Token Binding|Binds session tokens to TLS connection, prevents token theft|
|Tools: Checkmarx One (SAST)|Static application security testing to find session vulnerabilities|
|Tools: Fiddler|Traffic inspection and debugging proxy|

MEMORY HOOK:
**HSTS + Token Binding = session protection backbone**

---

# PREVENTING MAN-IN-THE-MIDDLE

|Countermeasure|Description|
|---|---|
|DNS over HTTPS (DoH)|Encrypts DNS queries to prevent DNS spoofing|
|WPA3|Stronger wireless encryption than WPA2|
|VPN|Encrypts all traffic between endpoints|
|Two-Factor Authentication (2FA)|Adds second authentication layer|
|Password Manager|Prevents credential reuse and phishing|
|Zero-Trust Architecture|Never trust, always verify — all access authenticated and encrypted|
|PKI|Public Key Infrastructure for certificate-based trust|
|Network Segmentation|Limits lateral movement if one segment is compromised|

---

# IPsec

|Mode|What It Encrypts|
|---|---|
|Transport Mode|Encrypts only the payload of the IP packet|
|Tunnel Mode|IPsec encapsulates and encrypts the entire IP packet|

MEMORY HOOK:
**Transport = payload only, Tunnel = whole packet**

---

## EXAM EXTRAS (Boson Practice Test)

### XSS, CSRF, SSRF DEFINITIONS

|Term|Definition|
|---|---|
|Cross-Site Scripting (XSS)|Mitigated by setting HttpOnly flag in cookies; occurs when attacker injects code into webpage to harvest session cookies|
|Cross-Site Request Forgery (CSRF)|Sends unintended authenticated requests|
|Server-Side Request Forgery (SSRF)|Makes application send requests to other domains|

---

# EXAM FLASHCARDS

|Term|Definition|
|---|---|
|Session Hijacking|Taking control of a valid, established TCP communication session|
|Session ID|Unique identifier assigned to a user session; stolen to authenticate|
|Passive Hijacking|Observe and record traffic to capture session IDs without altering data|
|Active Hijacking|Actively break or participate in a connection to seize session control|
|Spoofing|Pretending to be another user or machine; initiates new session with stolen credentials|
|MITM (Split TCP)|Splitting a TCP connection into two: client↔attacker and attacker↔server|
|MITB|Trojan modifies DOM in browser; user sees original, server receives modified data|
|XSS|Injecting malicious scripts into web apps to steal session cookies|
|CSRF|One-click attack exploiting trust in user's authenticated session|
|Session Fixation|Attacker pre-sets session ID before victim authenticates|
|TCP/IP Hijacking|Desynchronizing sequence numbers to take over active TCP session|
|RST Hijacking|Injecting spoofed RST packets to forcibly terminate victim's connection|
|Blind Hijacking|Injecting data into TCP session without seeing server responses|
|ARP Spoofing|Poisoning ARP cache to redirect local network traffic through attacker|
|PetitPotam|Forcing domain controller authentication and relaying NTLM to gain admin|
|HSTS|HTTP Strict Transport Security; forces HTTPS to prevent downgrade attacks|
|IPsec Transport|Encrypts only the IP packet payload|
|IPsec Tunnel|Encrypts the entire IP packet|

---

# PRACTICE QUESTIONS

**Q1.** A penetration tester sniffs network traffic and captures a valid session cookie from an HTTP request without modifying any packets. What type of session hijacking is this?
- A) Active Hijacking
- B) Passive Hijacking
- C) TCP/IP Hijacking
- D) RST Hijacking

**Answer:** B — Passive Hijacking involves observing and recording traffic without altering the connection.

---

**Q2.** An attacker pre-sets a session ID on a web application, then sends the victim a link containing that session ID. When the victim logs in, the attacker's session becomes authenticated. What attack is this?
- A) Session Replay
- B) Session Fixation
- C) CSRF
- D) CRIME Attack

**Answer:** B — Session Fixation occurs when the attacker sets the session ID in advance and the victim authenticates using it.

---

**Q3.** Which of the following BEST describes the difference between spoofing and hijacking?
- A) Spoofing seizes an existing session; hijacking creates a new one
- B) Spoofing initiates a new session with stolen credentials; hijacking takes over an existing session
- C) Both require the user to be currently connected
- D) Hijacking always uses passive techniques

**Answer:** B — Spoofing creates a new session using stolen credentials; hijacking seizes control of an already-active session.

---

**Q4.** An attacker uses MS-EFSRPC to force a domain controller to authenticate to their server, then relays NTLM to AD Certificate Services to gain admin. What attack is this?
- A) ARP Spoofing
- B) TCP/IP Hijacking
- C) PetitPotam
- D) RST Hijacking

**Answer:** C — PetitPotam forces DC authentication via MS-EFSRPC and relays NTLM to AD CS.

---

**Q5.** Which countermeasure binds session tokens to the TLS connection to prevent token theft?
- A) VPN
- B) Token Binding
- C) WPA3
- D) DoH

**Answer:** B — Token Binding cryptographically binds session tokens to the TLS connection, preventing interception and reuse.
