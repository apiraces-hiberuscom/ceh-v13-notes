# MODULE 13 — Hacking Web Servers

|Item|Memorize|
|---|---|
|Module Number|13|
|Module Name|Hacking Web Servers|
|Focus|Web server architecture, vulnerabilities, attacks, countermeasures|

---

## LEARNING OBJECTIVES

|Objective #|Description|
|---|---|
|01|Identify web server architecture, components, and platforms (Apache, IIS, Nginx)|
|02|Describe web server attacks such as DNS hijacking, DNS amplification, directory traversal, misconfiguration, response-splitting, cache poisoning, brute force, HTTP/2 flood, and frontjacking|
|03|Explain countermeasures against web server attacks|
|04|Perform web server penetration testing|

---

# WEB SERVER CONCEPTS

## What Is a Web Server (Exam Definition)

|Concept|Memorize Exactly|
|---|---|
|Web Server|A computer system that stores, processes, and delivers web pages to clients using HTTP/HTTPS|
|Client|Browser that generates HTTP requests|
|Server Role|Receives request, processes it, returns HTTP response|
|Failure Case|If requested resource is unavailable, server returns an error message|

MEMORY HOOK:
**Browser asks → Server fetches → Server responds**

---

## Web Server Components (Very High Exam Weight)

|Component|Purpose|Exam Hook|
|---|---|---|
|Document Root|Stores HTML files related to domain name|Public web files live here|
|Server Root|Stores configuration, logs, executables|Admin-level directory|
|conf|Configuration files|Server behavior|
|logs|Server logs|Recon goldmine|
|cgi-bin|CGI scripts|Command execution risk|

MEMORY HOOK:
**Document root = content | Server root = control**

---

## Virtual Document Tree

|Feature|Memorize|
|---|---|
|Purpose|Provides storage on a different machine or disk|
|Trigger|Used when original disk is full|
|Security Impact|Can provide object-level security|

---

## Virtual Hosting (Exam Favorite)

|Type|Description|
|---|---|
|Name-based|Multiple domains on same IP|
|IP-based|Each domain has unique IP|
|Port-based|Multiple sites using different ports|

MEMORY HOOK:
**Name, IP, Port = Virtual Hosting Trinity**

---

## Web Proxy

|Feature|Memorize|
|---|---|
|Location|Between client and web server|
|Purpose|Prevent IP blocking, maintain anonymity|
|Function|Forwards client requests|

---

## Why Web Servers Are Compromised

|Cause|Memorize|
|---|---|
|Improper configuration|Most common|
|Weak/default credentials|Easy exploitation|
|Unpatched software|Known exploits|
|Misconfigured SSL/TLS|MITM risk|
|Third-party plugins|Supply-chain risk|

MEMORY HOOK:
**Config > Passwords > Patching > Crypto > Plugins**

---

## Impact of Web Server Attacks

|Impact Category|Memorize|
|---|---|
|Compromise of user accounts|Credential theft|
|Website defacement|Visual manipulation|
|Secondary attacks|Attacks launched from server|
|Root access|Full control|
|Data tampering|Alter/delete data|
|Reputation damage|Business impact|

---

## Common Goals of Web Server Attackers

|Goal|Exam Phrase|
|---|---|
|Steal credentials|Phishing, sniffing|
|Botnet integration|DoS/DDoS|
|Database compromise|Data theft|
|Obtain source code|Intellectual property|
|Redirect traffic|Monetization|
|Privilege escalation|Persistence|

MEMORY HOOK:
**Steal, Bot, Break DB, Copy Code, Redirect, Escalate**

---

## Security Flaws Due to Admin Negligence

|Flaw|Result|
|---|---|
|Same admin credentials reused|Lateral movement|
|Unrestricted inbound/outbound traffic|Easy exploitation|
|Unhardened servers|Wide attack surface|
|Verbose errors|Recon advantage|
|Weak SSL/TLS algorithms|MITM|
|Third-party plugins|Backdoors|

---

## Oversights That Compromise Web Servers (Must Memorize All)

|Oversight|
|---|
|Improper file and directory permissions|
|Installed server with default settings|
|Unnecessary services enabled|
|Security conflicts with business requirements|
|Lack of security policy|
|Improper authentication with external systems|
|Default accounts without passwords|
|Sample/backup files left|
|OS, server, app misconfigurations|
|SSL certificate mismanagement|
|Admin/debug functions exposed|
|Self-signed certificates|
|Excessive privileges|

MEMORY HOOK:
**Defaults, Files, Services, Crypto, Privileges**

---

## Why Web Servers Get Compromised — Perspectives

### Webmaster Perspective

|Risk|Memorize|
|---|---|
|LAN exposure|Corporate network compromise|
|Arbitrary script execution|RCE|
|Insecure scripts|Code execution|

### Network Administrator Perspective

|Risk|Memorize|
|---|---|
|Improper access control|Admin bypass|
|Poor segmentation|Full LAN exposure|
|Weak privilege assignment|Escalation|

### End User Perspective

|Risk|Memorize|
|---|---|
|Malicious scripts|Browser compromise|
|Session hijacking|Account takeover|
|LAN access|Internal attack|

---

# WEB SERVER PLATFORMS

## Apache Web Server

### Apache Core Architecture

|Component|Memorize Exactly|
|---|---|
|Apache HTTP Server|Open-source web server developed by Apache Software Foundation|
|Role|Middleman — accepts requests, applies rules and security logic, serves content or forwards to app server|
|Process Model|Multi-process or multi-threaded|
|Configuration Files|httpd.conf, apache2.conf|
|Modules|Extend server functionality|

MEMORY HOOK:
**Apache = process-based + modular**

Apache serves static content itself; dynamic requests are forwarded to the application server.

---

### Apache Process Models (Very Important)

|Model|Description|
|---|---|
|Prefork MPM|Multiple child processes, one request per process|
|Worker MPM|Multiple threads per process|
|Event MPM|Optimized worker model handling keep-alive connections|

MEMORY HOOK:
**Prefork = process | Worker = threads | Event = optimized worker**

---

### Apache Modules (Exam Favorite)

|Module|Purpose|
|---|---|
|mod_ssl|Enables SSL/TLS encryption|
|mod_rewrite|Rewrites URLs dynamically|
|mod_proxy|Allows Apache to act as proxy or gateway|
|mod_auth|Controls authentication and authorization|
|mod_cgi|Executes CGI scripts|
|mod_headers|Manipulates HTTP headers|

MEMORY HOOK:
**SSL, Rewrite, Proxy, Auth, CGI, Headers**

Apache is dangerous if modules are misconfigured.

---

### Apache Vulnerabilities

|Vulnerability|Memorize|
|---|---|
|Misconfigured permissions|Unauthorized file access|
|Directory listing enabled|Sensitive file exposure|
|Default/sample files|Information disclosure|
|mod_cgi misconfiguration|Command execution|
|mod_proxy abuse|SSRF|
|Weak SSL configuration|MITM|
|Verbose error messages|Recon advantage|
|HTTP response splitting|Improperly validates input|
|SQL injection in components|Improperly neutralizes SQL elements|
|Code injection / env variable injection|Manipulate code or variables|
|Memory exhaustion (HTTP/2)|DoS via endless continuation frames|

---

### Apache Attack Surface Summary

|Attack Vector|Result|
|---|---|
|Directory traversal|Access outside web root|
|File inclusion|Code execution|
|Buffer overflow|DoS / RCE|
|Misconfigured modules|Privilege escalation|

MEMORY HOOK:
**Apache breaks via modules + misconfig**

---

## IIS Web Server

### IIS Core Architecture

|Component|Purpose|
|---|---|
|IIS (Internet Information Services)|Microsoft web server platform|
|Supported Protocols|HTTP/HTTPS, FTP/FTPS, SNMP, NNTP|
|Application Pool|Isolates web applications|
|Worker Process (w3wp.exe)|Handles requests in user mode|
|web.config|IIS configuration file|
|inetmgr|IIS management console|

MEMORY HOOK:
**IIS = App Pool isolation**

---

### IIS Request Flow

|Step|Memorize|
|---|---|
|1. Client sends request|Entry point|
|2. HTTP.sys receives request|Kernel-mode driver listens for requests|
|3. WAS (Windows Activation Service)|Reads ApplicationHost.config, decides which app pool handles request, starts worker process if needed|
|4. WWW Service|Uses config info; web publishing service|
|5. Worker process (w3wp.exe)|Runs in user mode — processes request, performs authentication, executes app code, writes logs, generates response|
|6. Response goes back|Return to client|

Key: HTTP.sys handles traffic in kernel mode. w3wp.exe handles execution in user mode. WAS coordinates everything using config files.

---

### IIS Vulnerabilities

|Vulnerability|Result|
|---|---|
|Authentication & authorization failures|Unauthorized access|
|Trust boundary violation|Fails to properly separate privilege levels|
|File and directory access problems|Sensitive file exposure|
|Privilege escalation|Total compromise|
|Input handling and injection issues (XSS, CRLF)|Script injection|
|Directory browsing enabled|Sensitive file exposure|
|Unrestricted file upload|Web shell|
|Weak NTFS permissions|Privilege escalation|
|web.config exposure|Credential leakage|
|Default ISAPI filters|RCE|
|Verbose errors|Recon|
|TYPO3 XSS — PATH_INFO|Unfiltered env variables|
|XSS in password manager|User-controllable input improperly neutralized|
|Credential exposure|IIS logs sensitive credentials improperly|
|Mail-related vulnerability|File upload in public directories → RCE|

---

### IIS Attack Surface Summary

|Vector|Impact|
|---|---|
|File upload|Shell execution|
|Config exposure|Full compromise|
|Permission flaws|SYSTEM access|
|Legacy components|Exploitable services|

MEMORY HOOK:
**IIS fails via config + permissions**

---

## Nginx Web Server

### Nginx Core Design

|Feature|Memorize|
|---|---|
|Architecture|Master–worker|
|Worker Model|Single-threaded|
|I/O Model|Event-driven, non-blocking|
|Role|Web server, reverse proxy, load balancer|
|Strength|Extremely fast, memory efficient|

---

### Nginx Components

|Component|Function|
|---|---|
|Master Process|Controls workers|
|Worker Processes|Handle client requests (single-threaded, non-blocking I/O — can handle thousands of connections)|
|Proxy Cache|Stores cached content|
|Cache Loader|Loads cache at startup|
|Cache Manager|Removes expired cache|

Other components:
- **Web server** — handles HTTP requests, serves static content, routes dynamic requests
- **Application server** — processes server-side scripts, generates dynamic content
- **Memcache** — key-value store

---

### Nginx Process

|Step|Action|
|---|---|
|1|Client connects — single thread keeps connections open using event loop|
|2|Worker process accepts request|
|3|Backend interaction — HTTP, FastCGI, PHP-FPM, Memcache|
|4|Response + caching — sends response, stores in proxy cache|

MEMORY HOOK:
**Master controls, workers serve**

---

### Nginx Vulnerabilities

|Vulnerability|Impact|
|---|---|
|NULL pointer dereference (HTTP/3)|DoS / RCE|
|SSRF|Internal network access|
|RCE via Nginx-UI|Full compromise|
|Improper certificate validation|File write|
|SQL injection|Data breach|
|Unauthenticated private key access|TLS compromise|
|HTTP/2 memory exhaustion|DoS|
|OS command injection|Remote execution|
|Default file permissions|Sensitive modification|
|Access control failures|Nginx does not support .htaccess|

### Nginx Dangers

|Danger|
|---|
|Config errors affect all workers|
|Exposed admin interfaces are dangerous|
|Caching can leak sensitive data|
|Event-driven model amplifies DoS impact|

---

# WEB SERVER ATTACKS

## DNS Server Hijacking

|Item|Memorize|
|---|---|
|Attack Type|DNS infrastructure attack|
|Target|DNS server configuration|
|Result|Silent redirection to malicious site|

### Attack Flow

|Step|Action|
|---|---|
|1|Attacker compromises target DNS server and modifies DNS config|
|2|User attempts to access legitimate website by entering correct URL|
|3|Request sent to compromised DNS server|
|4|Compromised server redirects user to malicious website|

### Key Characteristics

|Characteristic|
|---|
|Attack is done to DNS server config, not user side|
|Redirect happens before HTTP communication begins|
|Users are unaware because URL appears to be legit|

---

## DNS Amplification Attack

|Item|Memorize|
|---|---|
|Attack Type|DDoS|
|Exploits|Recursive DNS queries|
|Mechanism|Small spoofed requests → large DNS responses|
|Protocol|Usually UDP (stateless)|
|Result|DNS service unavailability|

Uses IP spoofing and exploits recursive behaviour.

---

## Directory Traversal Attacks

|Item|Memorize|
|---|---|
|Attack Type|File system attack|
|Exploits|Improper input validation|
|Mechanism|Uses ../ to navigate outside web root|
|Targets|File system structure|
|Result|Access to files outside web root directory|

---

## Web Server Misconfiguration

|Item|Memorize|
|---|---|
|Attack Type|Infrastructure weakness|
|Scope|Configuration weakness in web infrastructure|

### Common Issues

|Issue|
|---|
|Verbose debug or error messages|
|Default credentials|
|Sample configs and scripts|
|Remote admin functions|
|Unnecessary services enabled|
|SSL problems|

### Apache Misconfiguration Example

```apache
<Location "/server-status">
  SetHandler server-status
  Require host example.com
</Location>
```

### Verbose PHP Messages

```ini
display_error = On
log_errors = On
error_log = syslog
ignore_repeated_errors = Off
```

### IIS Misconfiguration Example

Directory browsing enabled in IIS allows file exposure.

---

## HTTP Response-Splitting Attack (Exam Favorite)

|Item|Memorize|
|---|---|
|Attack Type|Web-based attack|
|Exploits|Improper input validation|
|Mechanism|Injecting new line characters (CRLF) into HTTP response headers|
|Result|Server splits one response into two|
|Injection Type|CRLF (Carriage Return + Line Feed)|

### Attack Flow

|Step|Action|
|---|---|
|1|Attacker injects CRLF into input|
|2|Server includes injected data in header|
|3|Server generates two HTTP responses|
|4|Attacker controls first response|
|5|Browser discards second response|

MEMORY HOOK:
**CRLF → Header break → Double response**

### Exploitable Outcomes

|Outcome|
|---|
|Cross-Site Scripting (XSS)|
|Cross-Site Request Forgery (CSRF)|
|SQL Injection|
|Web Cache Poisoning|
|User redirection|

Happens at HTTP header level. Enables cache poisoning and XSS.

### Exam Traps

|Trap|Correct|
|---|---|
|Happens in body|NO (headers)|
|Browser executes both responses|NO|
|Requires authentication|NO|

---

## Web Cache Poisoning Attack

|Item|Memorize|
|---|---|
|Attack Type|Cache integrity attack|
|Target|Intermediate web cache|
|Result|Users unknowingly receive poisoned content|
|Persistence|Until cache is flushed|
|Depends On|HTTP response-splitting flaws|

### Attack Flow

|Step|Action|
|---|---|
|1|Attacker forces cache flush|
|2|Attacker sends crafted request|
|3|Malicious response stored in cache|
|4|Users request cached resource|
|5|Users receive malicious content|

MEMORY HOOK:
**Poison once → infect many**

### Key Dependencies

|Dependency|
|---|
|HTTP response-splitting flaws|
|Improper cache key handling|
|Inadequate validation|

Affects multiple users. Persistent until cache expiration.

### Exam Traps

|Trap|Correct|
|---|---|
|DNS poisoning|NO|
|Affects one user|NO|
|Temporary|NO (persistent until flush)|

---

## SSH Brute Force Attack

|Item|Memorize|
|---|---|
|Protocol|SSH|
|Port|TCP 22|
|Attack Type|Credential brute force|
|Goal|Unauthorized SSH access|

### Attack Flow

|Step|Action|
|---|---|
|1|Attacker scans port 22|
|2|SSH service identified|
|3|Automated brute-force login attempts|
|4|Valid credentials found|
|5|SSH tunnel compromised|

Tools: Nmap (discovery), Ncrack (SSH brute force), THC Hydra (credential attacks)

Precedes lateral movement.

MEMORY HOOK:
**Encrypted tunnel ≠ safe login**

### Exam Traps

|Trap|Correct|
|---|---|
|SSH encryption blocks brute force|NO|
|Attack targets encryption|NO|
|Single login attempt|NO|

---

## FTP Brute Force with AI

|Item|Memorize|
|---|---|
|Protocol|FTP|
|Attack Type|Brute-force authentication|
|Enhancement|AI-generated attack commands|
|Credential Exposure|Plaintext|

### Attack Flow

|Step|Action|
|---|---|
|1|Attacker uses AI to generate command|
|2|Hydra performs brute-force attack|
|3|Wordlists used for credentials|
|4|FTP access gained|

### Hydra Command Structure

|Flag|Meaning|
|---|---|
|hydra|Execute Hydra|
|-L|Username list|
|-P|Password list|
|ftp://IP|Target FTP server|

### Exam Traps

|Trap|Correct|
|---|---|
|AI performs attack|NO|
|FTP encrypts credentials|NO|
|Hydra optional|NO|

---

## HTTP/2 Continuation Flood Attack

|Item|Memorize|
|---|---|
|Attack Type|Denial-of-Service|
|Protocol|HTTP/2|
|Exploited Element|CONTINUATION frames|
|Target|Server memory and CPU|

### Attack Flow

|Step|Action|
|---|---|
|1|Attacker establishes TCP connection|
|2|Sends HEADERS frame|
|3|END_HEADERS flag omitted|
|4|Sends multiple CONTINUATION frames|
|5|Server allocates memory repeatedly|
|6|Resources exhausted|
|7|Server crashes or hangs|

HTTP/2 large headers are split into one headers frame and multiple continuation frames. Server expects END_HEADERS flag but in this attack it is never set.

Impact: memory exhaustion, CPU exhaustion, DoS.

MEMORY HOOK:
**No END_HEADERS → infinite wait → DoS**

### Exam Traps

|Trap|Correct|
|---|---|
|Requires many connections|NO|
|Uses high bandwidth|NO|
|Exploits HTTP/1.1|NO|

---

## Frontjacking

|Item|Memorize|
|---|---|
|Attack Type|Web server attack|
|Target|Front-end components of web application|
|Exploits|Reverse proxy misconfiguration|
|Common Platform|Nginx reverse proxy|
|Environment|Shared hosting|

### Attack Components

|Component|Role|
|---|---|
|Attacker|Injects malicious headers|
|Vulnerable Reverse Proxy|Accepts injected headers|
|Attacker-controlled Server|Serves malicious content|
|User Browser|Displays malicious response|

### Attack Flow

|Step|Action|
|---|---|
|1|Attacker sends HTTP request with CRLF characters|
|2|Malicious Host header injected|
|3|Vulnerable Nginx reverse proxy processes header|
|4|Proxy routes request to attacker-controlled server|
|5|Attacker server responds with malicious content|
|6|User browser displays malicious content|

MEMORY HOOK:
**CRLF → Host header → Proxy reroute → Fake content**

### Exploited Weaknesses

|Weakness|
|---|
|Improper sanitization of $uri|
|Improper sanitization of $document_uri|
|Host header injection|
|CRLF injection|
|Reverse proxy misconfiguration|

### Impact

|Impact|
|---|
|Phishing|
|Fake websites|
|Reflected XSS|
|Malware injection|

### Exam Traps

|Trap|Correct|
|---|---|
|Backend server vulnerability|NO|
|Client-side only|NO|
|DNS-based|NO|

---

# OTHER WEB SERVER ATTACKS

## Password Cracking Techniques

### Common Targets

|Target|
|---|
|SMTP servers|
|FTP servers|
|Web shares|
|SSH tunnels|
|Web form authentication|

### Attack Enablers

|Enabler|
|---|
|Weak passwords|
|Default credentials|
|Poor authentication mechanisms|

### Guessing

|Feature|Memorize|
|---|---|
|Method|Manual or automated guessing|
|Common Inputs|Names, pets, dates|
|Weak Password Examples|password, admin, qwerty|
|Exploited Factor|Human behavior|

### Dictionary Attack

|Feature|Memorize|
|---|---|
|Method|Uses predefined wordlist|
|Speed|Faster than brute force|
|Weakness|Ineffective against complex passwords|

### Brute-Force Attack

|Feature|Memorize|
|---|---|
|Method|Tests all combinations|
|Character Sets|A–Z, a–z, 0–9, symbols|
|Time|Very long|
|Effectiveness|Guaranteed eventually|

### Hybrid Attack

|Feature|Memorize|
|---|---|
|Method|Dictionary + brute force|
|Modification|Adds numbers/symbols|
|Strength|More powerful than others|

MEMORY HOOK:
**Guess → Dictionary → Brute → Hybrid**

---

## DoS/DDoS Attacks on Web Servers

|Item|Memorize|
|---|---|
|Attack Type|Availability attack|
|Method|Flood with fake requests|
|Result|Service unavailable|

### Targeted Resources

|Resource|
|---|
|Network bandwidth|
|Server memory|
|CPU|
|Disk space|
|Database resources|
|Application exception handling|

### High-Value Targets

|Target|
|---|
|Bank servers|
|Payment gateways|
|Root DNS servers|

---

## MITM Attack

|Item|Memorize|
|---|---|
|Attack Type|Interception attack|
|Position|Between user and server|
|Goal|Steal or modify data|

### Attack Flow

|Step|Action|
|---|---|
|1|Attacker positions between user and server|
|2|Intercepts traffic|
|3|Steals credentials|
|4|Relays traffic to avoid detection|

### Stolen Data

|Data|
|---|
|Usernames|
|Passwords|
|Session IDs|
|Banking details|

---

## Phishing Attacks

|Item|Memorize|
|---|---|
|Attack Type|Social engineering|
|Delivery|Malicious email|
|Deception|Fake legitimate website|

### Attack Flow

|Step|Action|
|---|---|
|1|Attacker sends phishing email|
|2|Victim clicks malicious link|
|3|Redirected to fake website|
|4|Victim enters credentials|
|5|Attacker captures credentials|
|6|Attacker impersonates victim|

### Exam Traps

|Trap|Correct|
|---|---|
|Requires malware|NO|
|Requires server exploit|NO|
|Purely technical|NO|

---

# MASTER MEMORY MAP — MODULE 13

## Attack → Root Cause → Result

|Attack|Root Cause|Result|
|---|---|---|
|Misconfiguration|Poor admin practices|Full compromise|
|Directory Traversal|Input validation failure|File access|
|DNS Hijacking|DNS compromise|Silent redirection|
|DNS Amplification|Recursive DNS abuse|DDoS|
|Response Splitting|CRLF injection|Cache poisoning|
|Cache Poisoning|Bad caching logic|Mass infection|
|SSH Brute Force|Weak credentials|Server access|
|FTP Brute Force|Plaintext auth|Credential theft|
|HTTP/2 Flood|Protocol abuse|DoS|
|Frontjacking|Proxy misconfig|Phishing/XSS|
|Password Cracking|Weak auth|Lateral movement|
|MITM|Insecure comms|Credential theft|
|Phishing|User deception|Account takeover|
|Defacement|Post-compromise|Reputation damage|

---

## EXAM EXTRAS (Boson Practice Test)

### ROBOTS.TXT

|Item|Memorize|
|---|---|
|robots.txt|File that lists locations of restricted files and directories|

---

# EXAM FLASHCARDS

|Term|Definition|
|---|---|
|HTTP Response-Splitting|Web attack where CRLF injection into headers causes the server to send two HTTP responses instead of one|
|Web Cache Poisoning|Attack that targets the integrity of intermediate web caches, causing users to receive poisoned content|
|DNS Server Hijacking|Compromising DNS server config to silently redirect users to malicious websites|
|DNS Amplification|DDoS attack exploiting recursive DNS queries with small spoofed requests to generate large responses|
|Directory Traversal|Attack using ../ sequences to access files outside the web root|
|Frontjacking|Attack injecting malicious headers into a vulnerable reverse proxy to hijack user interactions|
|HTTP/2 Continuation Flood|DoS attack where END_HEADERS flag is never set, causing infinite memory allocation via CONTINUATION frames|
|Web Server Misconfiguration|Weaknesses in web infrastructure config such as default creds, verbose errors, unnecessary services|
|Virtual Hosting|Technique allowing multiple domains on a single server via name-based, IP-based, or port-based methods|
|SSH Brute Force|Automated credential attacks against SSH service on TCP port 22|
|FTP Brute Force with AI|Using AI-generated commands to enhance brute-force attacks against FTP plaintext authentication|
|Application Pool (IIS)|Component that isolates web applications in IIS for process-level separation|
|Prefork MPM (Apache)|Apache process model using multiple child processes, one request per process|
|Master-Worker (Nginx)|Nginx architecture where master process controls worker processes that handle requests|
|CRLF|Carriage Return Line Feed — character sequence used to inject line breaks into HTTP headers|

---

# PRACTICE QUESTIONS

**Q1.** Which Apache module enables SSL/TLS encryption?
**A:** mod_ssl

**Q2.** In IIS, what component listens for requests in kernel mode and passes them to the appropriate worker process?
**A:** HTTP.sys

**Q3.** What is the key difference between DNS hijacking and DNS amplification?
**A:** DNS hijacking compromises the DNS server to redirect users; DNS amplification uses spoofed small requests to generate large DNS responses for DDoS.

**Q4.** An attacker sends an HTTP/2 HEADERS frame without setting the END_HEADERS flag and then sends multiple CONTINUATION frames. What is this attack?
**A:** HTTP/2 Continuation Flood — a DoS attack that exhausts server memory and CPU.

**Q5.** Which Nginx variables, when improperly sanitized, enable Frontjacking attacks?
**A:** $uri and $document_uri
