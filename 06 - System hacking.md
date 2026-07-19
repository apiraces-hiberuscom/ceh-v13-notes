# MODULE 06 — SYSTEM HACKING (EXAM CONTEXT)

|Item|Memorize|
|---|---|
|Module Number|06|
|Module Name|System Hacking|
|Focus|Gaining access, password cracking, privilege escalation, maintaining access, hiding evidence|

---

## LEARNING OBJECTIVES (DO NOT SKIP — EXAM LIST)

|Objective #|Description|
|---|---|
|01|Describe various types of password cracking attacks and tools|
|02|Explain privilege escalation techniques and tools|
|03|Describe methods to maintain persistent access|
|04|Explain techniques for hiding evidence of compromise|
|05|Explain buffer overflow concepts and exploit techniques|

---

# 01 — GAINING ACCESS

---

## WINDOWS SAM DATABASE

|Property|Detail|
|---|---|
|Full Name|Windows Security Accounts Manager (SAM)|
|Purpose|Manage accounts and passwords in hashed format (one-way hash)|
|Password Storage|Does NOT store plaintext — uses hash only|
|File Role|Database registry file|
|Copy Restriction|Cannot copy SAM file while Windows is running|
|Dump Method|Possible to dump disk contents including SAM with various techniques|
|Encryption|Uses SYSKEY function to partially encrypt password hashes|

|Property|Detail|
|---|---|
|Location|%SystemRoot%\system32\config\SAM|
|Registry Key|HKEY_LOCAL_MACHINE\SAM|
|Hash Types Stored|LM or NTLM hashed passwords|

MEMORY HOOK:
**SAM = hashes only, cannot copy while running, SYSKEY encrypts**

---

## NTLM AUTHENTICATION

|Property|Detail|
|---|---|
|Full Name|NT LAN Manager (NTLM)|
|Status|Default authentication scheme|
|Protocol Spec|No official protocol specification — no guarantee of effective operation every time|
|LM Status (Vista+)|LM hashing disabled; LM hash value is blank|
|Security|NTLMv2 reasonably secure but still weaker than Kerberos|

|Tool|Purpose|
|---|---|
|pwdump7|Main password hash extraction|
|Mimikatz|Credential extraction|
|DSInternals|Directory services internals|
|hashcat|Offline hash cracking|
|PyCrack|Python-based cracking|

### NTLM Authentication Process

|Step|Action|
|---|---|
|1|Client requests access|
|2|Server sends challenge|
|3|Client computes response|
|4|Server verifies via AD or SAM|

EXAM TRAP:
**NTLMv2 is stronger than LM but still weaker than Kerberos**

---

## KERBEROS AUTHENTICATION

|Component|Full Name|
|---|---|
|KDC|Key Distribution Center|
|AS|Authentication Server|
|TGS|Ticket Granting Server|

|Property|Detail|
|---|---|
|Method|Secret key cryptography|
|Status|Upgrade from NTLM|

### Kerberos Authentication Process

|Step|Action|
|---|---|
|1|Login and request ticket|
|2|Receive Ticket-Granting Ticket (TGT)|
|3|Request access to service|
|4|Receive Service Ticket|
|5|Access the service|

---

## CRACKING OPTIONS — OVERVIEW

|Category|Methods|
|---|---|
|Dumping Credentials|Dump creds from memory, steal local copy of SAM, steal AD file ntds.dit, extract SYSKEY boot key|
|Intercept Credentials|Passive sniffing, MITM, plaintext password capture|
|Hash Types Intercepted|LM, NTLM, NTLMv2, Kerberos|
|Brute Force Network Services|Logon/SMB (TCP 139, 445), Web servers (80, 443), MS Exchange (TCP 25, 110, 143), MSSQL (1433)|
|Brute Force Remote Control|RDP (TCP 3389), Telnet (23)|

---

# 02 — PASSWORD CRACKING

---

## PASSWORD CRACKING TYPES

|Type|Description|
|---|---|
|Non-Electronic|Social engineering, dumpster diving, etc.|
|Active Online|Password guessing, dictionary/brute forcing, password spraying, mask attack, hash injection, LLMNR/NBT-NS poisoning, trojans/spyware/keyloggers, internal monologue attacks, markov-chain|
|Passive Online|Does not change system in any way; password gained by passively monitoring data|
|Offline|Recover passwords from hash dump|

---

## ATTACK TYPES (ACTIVE ONLINE)

|Attack|Description|
|---|---|
|Dictionary Attack|Dictionary file loaded into cracking application run against user accounts|
|Brute Force Attack|Software uses every combination until password is cracked|
|Rule-Based Attack|Have partial password info; hybrid uses dictionary + old password; syllable attack uses dictionary + other methods|
|Password Spraying|Targets multiple accounts simultaneously|
|Hash Injection (Pass the Hash)|Inject compromised hash into local session to validate network resources; use logged-in user hash to log into domain controller|
|LLMNR/NBT-NS Poisoning|LLMNR and NBT-NS are two main elements of Windows for name resolution on same link (Tool: Responder)|
|Internal Monologue Attack|Uses SSPI from user mode application to calculate NetNTLM response|

|Attack|Description|
|---|---|
|Rainbow Table Attack|Uses pre-calculated information stored in memory to crack encryption; Tool: rtgen|
|Distributed Network Attack|Uses many machines in network; Tool: Exterro Password Recovery Toolkit|

---

## LLMNR/NBT-NS POISONING DETECTION TOOLS

|Tool|Purpose|
|---|---|
|Vindicate|Detect LLMNR/NBT-NS poisoning|
|Respounder|Detects presence of Responder|
|got-responder|Detect LLMNR/NBT-NS poisoning|

---

# 03 — PASSWORD CRACKING TOOLS

---

## PASSWORD CRACKING TOOLS

|Tool|Purpose|
|---|---|
|L0phtCrack|Recovers lost Microsoft passwords|
|THC Hydra|Online brute force (hydra -l login -p password -L logins -P passwords)|
|RainbowCrack|Rainbow table based cracking|
|Metasploit|Password spraying|
|Rubeus|Kerberos attack tool|
|adfsbrute|ADFS brute force|
|CrackMapExec|Network protocol attack tool|

---

## MASK ATTACK

|Property|Detail|
|---|---|
|Method|Brute-force recovers passwords from hashes using pattern of password|
|Tool|hashcat -m to specify hash mode (e.g., MD5)|

---

## DEFAULT PASSWORD RESOURCES

|Resource|URL|
|---|---|
|Default Passwords|fortypoundhead.com|
|Default Passwords|cirt.net|

---

## PASSWORD SALTING

|Property|Detail|
|---|---|
|Definition|Adding random string of characters before calculating hashes|

---

## PASSWORD RECOVERY TOOLS

|Tool|Purpose|
|---|---|
|Elcomsoft Distributed Password Recovery|Enterprise password recovery|
|Passware Kit|Password recovery|
|hashcat|Offline hash cracking|
|pcunlocker|Password recovery|
|lazersoft|Password recovery|
|Passper WinSenior|Windows password recovery|

---

# 04 — KERBEROS CRACKING

---

## KERBEROS ATTACK TECHNIQUES

|Technique|Description|
|---|---|
|AS-REP Roasting|Cracking TGT; requires connectivity to DC and domain account; only targets accounts without Kerberos pre-authentication required|
|Kerberoasting|Obtain and crack service account hashes; aims to access higher-privilege accounts and move laterally; Tool: hashcat|
|Pass the Ticket|Using Kerberos ticket without providing password; steals ST/TGT from user machine or server; Tool: Mimikatz|
|NTLM Relay|Interception and relay of NTLM authentication requests; Tools: Responder, ntlmrelayx; command: responder -I eth0|
|Fingerprint Attack|Password broken character by character ('p', 'a', 's', etc.)|
|PRINCE Attack|Uses chains of combined words|
|Markov Chain Attack|Splits password into two-three character syllables creating new alphabet|

EXAM TRAP:
**AS-REP Roasting only works on accounts WITHOUT Kerberos pre-authentication**

---

# 05 — VULNERABILITY EXPLOITATION

---

## EXPLOITATION STEPS

|Step|Description|
|---|---|
|1|Identify the vulnerability|
|2|Determine risk associated with vulnerability|
|3|Determined capability of vulnerability|
|4|Develop an exploit|
|5|Select method for delivery — local or remote|
|6|Generate and deliver payload|
|7|Gain remote access|

---

## EXPLOIT DATABASE SITES

|Site|Purpose|
|---|---|
|ExploitDB|Exploit database|
|vulnDB|Vulnerability database|
|OSV.dev|Open source project vulnerabilities|
|MITRE CVE|Common Vulnerabilities and Exposures|
|Windows Exploit Suggester (WES-NG)|Windows privilege escalation suggestions|

---

## AI-POWERED EXPLOITATION TOOLS

|Tool|Purpose|
|---|---|
|Nebula|AI-powered vulnerability exploitation|
|DeepExploit|AI exploitation linked with Metasploit|

---

# 06 — METASPLOIT

---

## METASPLOIT MODULES

|Module|Description|
|---|---|
|Exploit|1. Configure an active exploit 2. Verify exploit option 3. Select target 4. Select payload 5. Launch the exploit|
|Payload|Establishes communications channel between Metasploit and victim; combines arbitrary code executed due to exploit success; select: msf payload|
|Auxiliary|Used for one-time actions: port scanning, DoS, fuzzing; Usage: use, exploit; show auxiliary — list all modules; exploit/run — launch command|
|NOPS|Generate no-operation instruction for blocking buffers; msf generate -t c 50 — generate 50-byte NOP sled|
|Encoder|Hide/encode payloads to avoid detection by AV, IDS; obfuscation; bypassing signature detection; polymorphism — changes payload each time generated|
|Evasion|Modify behavior and characteristics of payloads/exploits to avoid detection; evasion/windows/windows_defender.exe; evasion/windows/antivirus_disable; evasion/unix/antivirus_disable|
|Post-Exploitation|Used after successful system compromise; allows further interaction; post/windows/gather/enum_logged_on_users; post/linux/gather/enum_configs; post/windows/manage/portproxy|

---

## PAYLOAD MODULE TYPES

|Type|Description|
|---|---|
|Singles|Self-contained and completely standalone|
|Stagers|Set up network connection between attacker and victim|
|Stages|Downloaded by stager modules|

|Capability|Detail|
|---|---|
|Payload Module Functions|Upload/download files, take screenshots, collect password hashes|

---

# 07 — BUFFER OVERFLOW

---

## BUFFER OVERFLOW — CORE CONCEPT

|Property|Detail|
|---|---|
|Buffer|Area of adjacent memory locations allocated to program/application to handle runtime data|
|Buffer Overflow|Common vulnerability in programs that accept more data than the allocated buffer|
|Impact|Application exceeds buffer while writing data, overwriting neighboring memory locations|
|Attacker Use|Inject malicious code; damage files, modify data, access critical info, escalate privileges, gain shell access|

---

## VULNERABLE PROGRAMS/APPLICATIONS

|Vulnerability Factor|
|---|
|Boundary checks not performed|
|Applications using older programming language versions|
|Programs using unsafe/vulnerable functions to validate buffer size|
|No good programming practices|
|No proper filtering and validation|
|Code execution in stack segment|
|Improper memory allocation and sanitization|
|Pointer use for accessing heap memory|

---

## BUFFER OVERFLOW TYPES

|Type|Description|
|---|---|
|Stack-Based Overflow|Stack used for static memory allocation (LIFO); PUSH stores data, POP removes data; attacker takes control of EIP register to replace return address and gain shell access|
|Heap-Based Overflow|Heap memory dynamically allocated at runtime; overflow occurs when block of memory allocated to heap; vulnerability leads to overwriting object pointers; heap overflows are inconsistent with different exploit techniques|

---

## x86 REGISTERS (STACK-BASED BUFFER OVERFLOW)

|Register|Full Name|Function|
|---|---|---|
|EBP|Extended Base Pointer|Stores address of first data element stored onto stack (StackBase)|
|ESP|Extended Stack Pointer|Stores address of next instruction|
|EIP|Extended Instruction Pointer|Stores address of next instruction to be executed|
|ESI|Extended Source Index|Maintains source index for various string operations|
|EDI|Extended Destination Index|Maintains destination index for various string operations|

EXAM TRAP:
**EIP is the key register — overwriting EIP = code execution**

---

## BUFFER OVERFLOW DETECTION TOOLS

|Tool|Purpose|
|---|---|
|OllyDbg|Debugger for buffer overflow analysis|
|Veracode|Security testing|
|Flawfinder|Source code review for C/C++|
|Kiuwan|Code analysis|
|Splint|Static analysis for C|
|Valgrind|Memory debugging and profiling|

---

# 08 — WINDOWS BUFFER OVERFLOW

---

## WINDOWS BUFFER OVERFLOW STEPS

|Step|Description|
|---|---|
|Spiking|Crafted TCP and UDP packets to make it crash; nc -nv ip port — establish connection; generate template using STATS function; generic_send_tcp ip port spike_script SKIPVAR SKIPSTR|
|Fuzzing|Sends large amount of data overwriting EIP register; helps identify number of bytes to crash target server; helps determine location of EIP register for code injection; while loop in Python script; use pattern_create Ruby tool to generate random bytes; Metasploit pattern_offset to find random bytes; overwrite EIP register; configure netcat: nc -nvlp 4444|
|Identify Offset|Metasploit pattern_create and pattern_offset Ruby tools to find where EIP register is being overwritten|

---

# 09 — ADVANCED EXPLOIT TECHNIQUES

---

## EXPLOIT TECHNIQUES

|Technique|Definition|
|---|---|
|Return Oriented Programming (ROP)|Reuse of code snippets already existing in code, usually in libc or kernel32.dll|
|Heap Spraying|Flood free space of process memory by writing multiple copies of malicious code|
|JIT (Just-In-Time) Spraying|Execute arbitrary code to victim system via JIT compilation feature in modern browsers; attacker uses JavaScript code containing malicious payload|
|Exploit Chaining|Combines various exploits and vulnerabilities|

---

## AD DOMAIN MAPPING WITH BLOODHOUND

|Property|Detail|
|---|---|
|Tool|BloodHound (JS web application)|
|Purpose|AD domain mapping|

---

# 10 — AD ENUMERATION WITH POWERVIEW

---

## POST AD ENUMERATION COMMANDS

|Command|Description|
|---|---|
|Get-ADomain / Get-NetDomain|Retrieves information related to current domain including DCs|
|Get-DomainSID|Retrieves security IDs|
|Get-DomainPolicy|Retrieves information related to the policy configurations of the domain's system access|
|(Get-DomainPolicy)."SystemAccess"|Retrieves information related to policy configs on domain's system access|
|(Get-DomainPolicy)."kerberospolicy"|Retrieves information related to domain Kerberos policy|
|Get-NetDomainController|Retrieves information related to current domain controller|
|Get-NetUser|Info for current user|
|Get-NetLoggedon -ComputerName|Current active domain user|
|Get-UserProperty -Properties pwdlastset|Date and time password was last set for each domain user|
|Find-LocalAdminAccess / Invoke-EnumerateLocalAdmin|Retrieves users having local administrative privileges (requires admin)|
|Computer-NetSession -ComputerName|Retrieves information on the current user logged in the machine|

---

## GHOSTPACK SEATBUCKET

|Property|Detail|
|---|---|
|Tool|GhostPack Seatbucket|
|Purpose|Identifies vulnerabilities; collects information including PowerShell, Kerberos tickets, and items in RecycleBin|

---

# 11 — DOMAIN TRUST FORESTS

---

## DOMAIN TRUST TYPES

|Trust Type|Description|
|---|---|
|One-Way Trust|Unidirectional trust; allows users in trusted domain access resources of trusting domain|
|Two-Way Trust|Allows users to access another domain and vice versa|

|Property|Detail|
|---|---|
|Tool|domain_trusts utility — collect information about trusted domains|

---

# 12 — PRIVILEGE ESCALATION

---

## HORIZONTAL vs VERTICAL PRIVILEGE ESCALATION

|Type|Description|
|---|---|
|Horizontal|Tries to access resources belonging to authorized user with similar permissions; same user level but from protected location|
|Vertical|Unauthorized user gains access to user with higher privileges; user executes code at higher privilege level|

---

## DLL HIJACKING

|Property|Detail|
|---|---|
|Method|Placing malicious DLL in application library|
|Tool|Spartacus|
|Defense|Dependency Walker, Dylib Hijack Scanner|

---

## DYLIB HIJACKING (macOS)

|Property|Detail|
|---|---|
|Method|Dynamic library attacks on macOS|
|Tool|Dylib Hijack Scanner|

---

## SPECTRE VULNERABILITY

|Property|Detail|
|---|---|
|Affected Processors|AMD, Apple, ARM, Intel, etc.|
|Method|Tricks processor into exploiting speculative execution to read restricted data|

---

## MELTDOWN VULNERABILITY

|Property|Detail|
|---|---|
|Affected Processors|All ARM, Intel (deployed by Apple)|
|Method|Tricks processor into accessing out-of-bounds memory|

---

## NAMED PIPE IMPERSONATION

|Property|Detail|
|---|---|
|Platform|Windows|
|Mechanism|Pipes provide legitimate communication between running processes|
|Tool|Metasploit|

---

## UNSQUOTED SERVICE PATHS

|Property|Detail|
|---|---|
|Mechanism|Executable path enclosed in quotation marks "" so system can locate application binary|
|Exploit|Attackers exploit services with unquoted paths to elevate privileges|

---

## SERVICE OBJECT PERMISSIONS

|Property|Detail|
|---|---|
|Issue|Misconfigured service permissions allow attacker to modify attributes associated with that service|
|Impact|Add new users, hijack account, elevate privileges|
|Common Source|Zero-days|

---

## PIVOTING

|Property|Detail|
|---|---|
|Purpose|Bypass firewall to pivot via compromised system to access other vulnerable systems|

---

## MISCONFIGURED NFS PRIVILEGE ESCALATION

|Step|Command/Action|
|---|---|
|1|nmap -sV ip — check if NFS service is running|
|2|sudo apt-get install nfs-common|
|3|showmount -e|
|4|mkdir /tmp/nfs|
|5|sudo mount -t nfs|

|Property|Detail|
|---|---|
|Port|2049|
|Protocol|RPC|

---

## UAC BYPASS

|Method|
|---|
|Metasploit via memory injection|
|FodHelper Registry key|
|Eventvwr registry key|
|COM handler hijacking|

---

## BOOT/LOGIN INITIALIZATION PRIVILEGE ESCALATION

|Platform|Method|
|---|---|
|Windows Logon Script|Embedding script in registry key: HKEY_CURRENT_USER\environment\userinitMPRLogonScript|
|macOS Logon Script|Known as login hooks|
|Network Logon Scripts|Allocated using AD GPOs|
|UNIX RC Scripts|Malicious binary/shell/path in RC scripts such as rc.common or rc.local|
|macOS StartupItems|Attackers create malicious files/folders in /Library/StartupItems — used to boot stage with root privileges|

---

## DOMAIN POLICY MODIFICATION

|Method|Description|
|---|---|
|Group Policy Modification|Modify ScheduledTasks.xml using scripts as New-GPOImmediateTask|
|Domain Trust Modification|Use domain_trusts utility to collect information about trusted domains|

---

## DCSYNC ATTACK

|Property|Detail|
|---|---|
|Method|Attacker obtains privileged account with domain replication rights|
|Result|Virtual DC created similar to original AD; enables NTLM hashes, golden ticket attacks, Living off the Land attacks|
|Tool|mimikatz mimikatz "lsadump::dcsync /domain: (domain name) /user:Administrator"|

---

## ADCS (ACTIVE DIRECTORY CERTIFICATE SERVICES) ABUSE

|Property|Detail|
|---|---|
|Purpose|Public key infrastructure|
|Risk|Can lead to critical vulnerabilities|
|Tool|Certipy|

---

## OTHER PRIVILEGE ESCALATION TECHNIQUES

|Technique|Description|
|---|---|
|Access Token Manipulation|Tokens determine security context of process|
|Parent PID Spoofing|Parent process ID spoofing via svchost.exe or consent.exe|
|Application Shimming|Application compatibility framework; bypass UAC and inject malicious DLLs|
|Filesystem Permission Weakness|Exploiting filesystem misconfigurations|
|Path Interception|Executing application from path instead of real one|
|Abusing Accessibility Features|Leveraging accessibility tools for escalation|
|SID-History Injection|Inject SID of administrator (Windows Security Identifier)|
|COM Hijacking|Hijacking valid Component Object Model references and adding own references to infect target system|
|Scheduled Tasks (Windows)|Abusing Windows Task Scheduler|
|Scheduled Tasks (Linux)|cron and crond|
|Launch Daemon (macOS)|macOS launchd|
|Plist Modification|macOS plist manipulation|
|Setuid and Setgid|Linux and macOS permission abuse|
|Web Shell|Allows access to web server|
|Abusing Sudo Rights|Leveraging sudo configuration|
|Abusing SUID/SGID Permissions|Unix-based systems|
|Abusing '.' Path|Path manipulation|
|Abusing Elevation Mechanism (macOS)|macOS privilege escalation|
|Process Injection via Ptrace|Unix/Linux system call injection|
|Abusing MSI|Microsoft Software Installer abuse|
|Abusing WFP (NoFilter)|Windows Filtering Platform abuse|

---

# 13 — PRIVILEGE ESCALATION TOOLS

---

## PRIVILEGE ESCALATION TOOLS

|Tool|Purpose|
|---|---|
|BeRoot|Post-exploitation privilege escalation|
|pwncat|Privilege escalation|
|PowerSploit|PowerShell post-exploitation|
|Traitor|Linux privilege escalation|
|PEASS-ng|Privilege Escalation Awesome Scripts Suite|
|FullPowers|Windows privilege escalation|

---

## DLL/DYLIB HIJACKING DEFENSE TOOLS

|Tool|Purpose|
|---|---|
|Dependency Walker|Detect DLL hijacking|
|Dylib Hijack Scanner|Detect Dylib hijacking|

---

# 14 — MAINTAINING ACCESS

---

## BACKDOORS

|Property|Detail|
|---|---|
|Purpose|Deny or disrupt operation; gain unauthorized access to system resources|

---

## REMOTE CODE EXECUTION TECHNIQUES

|Technique|Description|
|---|---|
|Exploitation for Client Execution|Web browser based (spear phishing), Office application based (MS Office), Third party apps exploitation|
|Service Execution|Direct service exploitation|
|Windows Management Instrumentation (WMI)|WMI-based execution|
|Windows Remote Management (WinRM)|WinRM-based execution|

|Tool|Purpose|
|---|---|
|Dameware Remote Support|Remote support|
|Ninja|Remote access|
|Pupy|Post-exploitation|
|PDQ Deploy|Software deployment|
|ManageEngine Endpoint Central|Endpoint management|
|PsExec|Remote execution|

---

## KEYLOGGERS

|Type|Description|
|---|---|
|Software|Metasploit can create remote keylogger|
|Hardware|Physical keylogging devices|

|Platform|Tool|
|---|---|
|Windows|REFOG, All-in-One Keylogger, Revealer Keylogger, NetBull, Spytector|
|macOS|Hoverwatch|

---

## SPYWARE

|Tool|Purpose|
|---|---|
|Spytech SpyAgent|Spyware|
|Spyrix Personal Monitor|Spyware|

### Spyware Types

|Type|Examples/Details|
|---|---|
|Desktop Spyware|Monitoring desktop activity|
|Email Spyware|Monitoring email|
|Internet Spyware|Monitoring internet usage|
|Child Monitoring Spyware|Parental monitoring|
|Screen Capturing Spyware|Screenshot capture|
|USB Spyware|USB-based monitoring|
|Audio Spyware|theOneSpy, Snooper|
|Video Spyware|iSpy, Perfect IP Camera Viewer, Optiview VMS, Eyeline Video Surveillance Software|
|Print Spyware|Print monitoring|
|Cellphone Spyware|mSpy, XNSPY, iKeyMonitor, ONESPY, Highster Mobile|

---

## ROOTKITS

|Level|Description|
|---|---|
|Hypervisor Level|Virtual machine based|
|Hardware/Firmware|Hardware embedded|
|Kernel Level|Kernel modification|
|Boot-Loader|Boot sector modification|
|Application Level|Application modification|
|Library Level|Library modification|
|Memory|In-memory only|

|Rootkit|Note|
|---|---|
|FudModule Rootkit|Advanced rootkit|
|Fire Chili Rootkit|Exploits log4shell|

### Rootkit Detection

|Method|
|---|
|Integrity-based detection — signatures, tripwire, AIDE to baseline system|
|Analyzing memory dumps|

|Anti-Rootkit Tool|Purpose|
|---|---|
|GMER|Rootkit detection|
|Stinger|Rootkit removal|
|Avast One|Antivirus/anti-rootkit|
|TDSSKiller|Rootkit removal|

---

## NTFS ALTERNATE DATA STREAMS (ADS)

|Property|Detail|
|---|---|
|Full Name|Alternate Data Stream|
|Mechanism|Fork data into existing files; Windows hidden stream|
|Risk|Allows injection of malicious code in files|

|Detection Tool|Purpose|
|---|---|
|Stream Armor|ADS detection|
|GMER|Rootkit/ADS detection|
|ADS Scanner|ADS scanning|
|Stream|ADS detection|
|AlternateStreamView|ADS viewing|

---

## STEGANOGRAPHY

|Property|Detail|
|---|---|
|Definition|Hiding secret message within ordinary message, utilizing graphic image as cover|

### Steganography Tools by Media Type

|Media Type|Tool|Purpose|
|---|---|---|
|Text|SNOW|Text steganography|
|Images|OpenStego|Image steganography|
|Images|StegOnline|Image steganography|
|Images|Coagula|Image steganography|
|Images|SSuite Picsel|Image steganography|
|Images|CryptaPix|Image steganography|
|Documents|StegoStick|Document steganography|
|Documents|StegJ|Document steganography|
|Documents|Office XML|Document steganography|
|Documents|SNOW|Document steganography|
|Documents|Data Stash|Document steganography|
|Video|OmniHide Pro|Video steganography|
|Audio|DeepSound|Audio steganography|
|Folder|GillSoft File Lock Pro|Folder steganography|
|Email|Spam Mimic|Email steganography|

### Steganography Detection Tools

|Tool|Purpose|
|---|---|
|zsteg|Detection|
|StegoVeritas|Detection|
|Stegextract|Detection|
|StegoHunt|Detection|
|Steganography Studio|Detection|
|Virtual Steganographic Laboratory|Detection|

---

# 15 — DOMAIN DOMINANCE

---

## DOMAIN DOMINANCE TECHNIQUES

|Technique|Description|
|---|---|
|Malicious Replication|Creating exact copy of user data using admin credentials|
|Skeleton Key Attack|Injecting false credentials; memory-resident virus; Tool: Mimikatz|
|Golden Ticket Attack|Post-exploitation; forge TGT by compromising Key Distribution Service account|
|Silver Ticket Attack|Steal user credentials and create fake TGS ticket; Tool: Mimikatz|
|AdminSDHolder|Protects accounts and groups with high privileges; attacker abuses SDProp process|
|WMI Event Subscription|Maintaining persistence; Tool: PowerLurk|
|Overpass the Hash (OPtH)|Extension of pass-the-ticket and pass-the-hash; Tool: Mimikatz|

---

# 16 — HIDING EVIDENCE

---

## HIDING EVIDENCE OF COMPROMISE

|Step|Description|
|---|---|
|1|Disable auditing|
|2|Clear logs — Metasploit Meterpreter|
|3|Manipulate logs|
|4|Cover tracks on the network/OS|
|5|Delete files / hiding artifacts|
|6|Disable Windows functionality|

|Property|Detail|
|---|---|
|File Deletion Tool|cipher.exe|

---

## EXAM EXTRAS (Boson Practice Test)

### MIMIKATZ — PASS THE TICKET

|Item|Memorize|
|---|---|
|Tool|Mimikatz|
|Attack|Pass the ticket — steals Kerberos TGT from user machine|

---

### SESSION HIJACKING — MAIL SERVER WITH ISN

|Item|Memorize|
|---|---|
|Method|Cancel connection as soon as response received to obtain Initial Sequence Number (ISN)|
|Target|Mail server using IP for authentication|

---

### MSFVENOM PAYLOAD OPTIONS

|Option|Purpose|
|---|---|
|LHOST|Specifies IP address of attacker|
|LPORT|Specifies listening port (default: 4444)|

---

### RAINBOW TABLES AND SALT

|Item|Memorize|
|---|---|
|Rainbow table|Hash comparison to list of known hashes|
|Mitigation|Use salt value to prevent rainbow table attacks|

---

# EXAM FLASHCARDS

---

|Term|Definition|
|---|---|
|SAM|Security Accounts Manager — Windows database storing hashed passwords |
|NTLM|NT LAN Manager — default Windows authentication scheme |
|Kerberos|Secret key cryptography authentication using KDC, AS, and TGS |
|LLMNR|Link Local Multicast Name Resolution — Windows name resolution protocol |
|NBT-NS|NetBIOS Name Service — Windows name resolution protocol |
|AS-REP Roasting|Attack targeting Kerberos accounts without pre-authentication |
|Kerberoasting|Attack to obtain and crack service account hashes |
|Golden Ticket|Forged TGT by compromising KDC service account |
|Silver Ticket|Forged TGS ticket using stolen user credentials |
|DCSync|Attack replicating AD to extract NTLM hashes |
|DLL Hijacking|Placing malicious DLL in application library |
|Spectre|Processor vulnerability exploiting speculative execution |
|Meltdown|Processor vulnerability accessing out-of-bounds memory |
|ROP|Return Oriented Programming — reusing existing code snippets |
|Heap Spraying|Flooding process memory with copies of malicious code |
|JIT Spraying|Executing arbitrary code via browser JIT compilation |
|Exploit Chaining|Combining multiple exploits and vulnerabilities |
|ADS|Alternate Data Stream — NTFS hidden data stream for file injection |
|Skeleton Key|Injecting false credentials into memory-resident virus |
|AdminSDHolder|AD object protecting privileged accounts; abused via SDProp |

---

# PRACTICE QUESTIONS

---

|Q#|Question|
|---|---|
|1|Which Windows registry hive contains the Security Accounts Manager (SAM) database?|
|2|What is the main difference between NTLM and Kerberos authentication?|
|3|Which Metasploit module type is used to hide payloads from antivirus detection?|
|4|What does AS-REP Roasting target in Kerberos environments?|
|5|Which technique involves forging a Ticket Granting Ticket by compromising the Key Distribution Service account?|

|Q#|Answer|
|---|---|
|1|HKEY_LOCAL_MACHINE\SAM (file located at %SystemRoot%\system32\config\SAM)|
|2|NTLM uses challenge-response with no official protocol spec; Kerberos uses secret key cryptography with KDC, AS, TGS|
|3|Encoder modules — used to encode payloads to avoid AV/IDS detection with polymorphism|
|4|Accounts without Kerberos pre-authentication required|
|5|Golden Ticket attack — forge TGT by compromising the KDC service account|
