# MODULE 01 — INTRODUCTION TO ETHICAL HACKING

|Item|Memorize|
|---|---|
|Module Number|01|
|Module Name|Introduction to Ethical Hacking|
|Focus|Security fundamentals, risk analysis, frameworks, attack types, pen testing|

---

## LEARNING OBJECTIVES

|Objective #|Description|
|---|---|
|01|Understand the elements of information security (CIA + Authenticity + Non-repudiation)|
|02|Explain risk analysis concepts (ARO, SLE, ALE)|
|03|Describe incident response phases|
|04|Outline hacking methodology and the cyber kill chain|
|05|Identify TTPs, IoCs, and adversary behavioral patterns|
|06|Summarize MITRE ATT&CK and Diamond Model frameworks|
|07|Explain information assurance and threat intelligence lifecycle|
|08|Recognize relevant laws and standards (PCI DSS, ISO 27001, HIPAA, SOX, DMCA, FISMA, DPA 2018)|
|09|Differentiate hacking types (white hat, black hat, gray hat, etc.)|
|10|Categorize attack types (passive, active, close-in, insider, distribution)|
|11|Describe pen test phases|

---

## ELEMENTS OF INFORMATION SECURITY

|Element|Definition|
|---|---|
|Confidentiality|Data accessible only to those authorized|
|Integrity|Preventing unauthorized changes so data can be trusted|
|Availability|Resources available to authorized users when needed|
|Authenticity|Guarantee that files, communications, and transactions are genuine|
|Non-repudiation|Guarantee that the sender cannot deny having sent a message|

MEMORY HOOK:
**CIA + A + N = Can I Always Authenticate? No!**

---

## RISK ANALYSIS

|Term|Definition|
|---|---|
|Risk Matrix|Tool to visualize and prioritize risks based on likelihood and impact|
|ARO|Annual Rate of Occurrence — expected frequency of a threat per year|
|SLE|Single Loss Expectancy — cost of a single loss event|
|ALE|Annualized Loss Expectancy — expected yearly loss from a risk|
|BCP|Business Continuity Plan — strategy for maintaining operations during disruption|

### Key Formula

`ALE = SLE × ARO`

---

## CIA TRIAD — DETAILED

|Element|Security Focus|Example Controls|
|---|---|---|
|Confidentiality|Secrecy, privacy|Passwords, user IDs, encryption, access controls|
|Integrity|Accuracy, trustworthiness|Hash functions, checksums, version control|
|Availability|Uptime, access|Redundancy, backups, DoS protection, failover|

EXAM TRAP:
Integrity is assured via **hash functions** — not encryption.

---

## INCIDENT RESPONSE (IR) — 9 PHASES

|Phase|Description|
|---|---|
|1. Preparation|Establish IR capability, train team, equip tools|
|2. Recording and Assignment|Log the incident and assign ownership|
|3. Triage|Assess severity and prioritize|
|4. Notification|Alert stakeholders and relevant parties|
|5. Containment|Isolate the incident to prevent spread|
|6. Evidence Gathering|Collect forensic data for analysis|
|7. Eradication|Remove the root cause of the incident|
|8. Recovery|Restore systems to normal operation|
|9. Post-Incident Activity|Review, document lessons learned, improve|

MEMORY HOOK:
**Prep → Record → Triage → Notify → Contain → Evidence → Erase → Recover → Review**

---

## HACKING METHODOLOGY — 5 STEPS

|Step|Phase|Description|
|---|---|---|
|1|Footprinting|Gathering information about the target. Passive = no direct interaction. Active = requires action.|
|2|Scanning|Identifying live hosts, open ports, OS, architecture, and vulnerabilities|
|3|Enumeration|Extracting detailed information (usually from intranet environment)|
|4|Vulnerability Analysis|Identifying and assessing security weaknesses|
|5|System Hacking|Gaining access → Escalating privileges → Maintaining access → Clearing logs|

### System Hacking Sub-Steps

|Action|Description|
|---|---|
|Gaining Access|Password cracking, SQL injection|
|Escalation of Privileges|Increase access rights, change passwords, delete files|
|Maintaining Access|Ensure persistent access (backdoors, rootkits)|
|Clearing Logs|Conceal attack by altering logs, hiding files, using tunneling|

EXAM TRAP:
**SIEM** (Security Incident and Event Management) tools like **Splunk** are used to detect and respond to incidents — not to conduct attacks.

---

## CYBER KILL CHAIN — 7 PHASES

|Phase|Description|
|---|---|
|1. Reconnaissance|Gathering data, identifying vulnerabilities|
|2. Weaponization|Creating a malicious payload using vulnerabilities and backdoors|
|3. Delivery|Sending the payload to the target (email, USB, web)|
|4. Exploitation|Executing the delivered code on the target system|
|5. Installation|Installing malware or backdoor on the target|
|6. Command & Control (C2)|Establishing a channel for data exfiltration and remote control|
|7. Actions on Objectives|Carrying out the mission: data theft, destruction, botnet deployment|

MEMORY HOOK:
**Recon → Weapon → Deliver → Exploit → Install → C2 → Act**

---

## TTPS AND ADVERSARY BEHAVIORAL IDENTIFICATION

|Term|Definition|
|---|---|
|Tactics|How a threat actor operates during different phases of an attack (e.g., APT behavior patterns)|
|Techniques|The specific technical methods used (e.g., tools for privilege escalation)|
|Procedures|A sequence of actions or steps taken to execute an attack|

MEMORY HOOK:
**TTP = How they think (tactics) → What they do (techniques) → Step by step (procedures)**

---

## IOC — INDICATORS OF COMPROMISE

|Indicator Type|Examples|
|---|---|
|Email Indicators|Specific senders, addresses, subject lines, attachment types|
|Network Indicators|Malicious URLs, domains, IP addresses|
|Host-Based Indicators|Specific filenames, file hashes, registry keys|
|Behavioral Indicators|PowerShell execution, remote command execution, unusual process behavior|

MEMORY HOOK:
**IoC = Clues left behind. Check: Email → Network → Host → Behavior**

---

## MITRE ATT&CK FRAMEWORK

|Element|Description|
|---|---|
|Tactics|Why the attacker performs an action (the goal) — 14 tactics total|
|Techniques|How the attacker achieves the goal|
|Sub-Techniques|Lower-level description of adversarial behavior|
|Procedures|Specific implementation or in-the-wild use of techniques|

### 14 Tactics

|#|Tactic|
|---|---|
|1|Reconnaissance|
|2|Resource Development|
|3|Initial Access|
|4|Execution|
|5|Persistence|
|6|Privilege Escalation|
|7|Defense Evasion|
|8|Credential Access|
|9|Discovery|
|10|Lateral Movement|
|11|Collection|
|12|Command and Control|
|13|Exfiltration|
|14|Impact|

MEMORY HOOK:
**Recon → Resource → Access → Execute → Persist → Escalate → Evade → Credentials → Discover → Move → Collect → C2 → Exfil → Impact**

EXAM TRAP:
MITRE ATT&CK is a **free, nonprofit framework** — not a commercial product. Use it to map adversary behavior systematically.

---

## DIAMOND MODEL

|Element|Question|Examples|
|---|---|---|
|Adversary|Who?|APT groups, cybercriminal organizations|
|Capability|What?|Malware, exploits, ransomware|
|Infrastructure|Where?|C2 servers, malicious domains, IP addresses|
|Victim|Who is targeted?|Organizations, individuals, industries|

MEMORY HOOK:
**Diamond = Who + What + Where + Whom**

---

## INFORMATION ASSURANCE (IA)

|Definition|IA starts with policy, ends with people — everything in between is risk management|
|---|---|

### IA Lifecycle

|Step|Action|
|---|---|
|1|Plan|
|2|Design|
|3|Find problems|
|4|Get resources|
|5|Plan fixes|
|6|Apply controls|
|7|Verify|
|8|Train people|

MEMORY HOOK:
**Plan → Design → Find → Fund → Fix → Apply → Verify → Train**

---

## RISK FORMULAS

|Formula|Meaning|
|---|---|
|RISK = Threats × Vulnerabilities × Impact|Standard risk equation|
|RISK = Threat × Vulnerability × Asset Value|Alternative risk equation|
|Level of RISK = Consequence × Likelihood|Risk matrix calculation|

EXAM TRAP:
Risk is multiplicative — a zero in any factor means no risk.

---

## CYBER THREAT INTELLIGENCE (CTI)

|Definition|Evidence-based knowledge about threats that helps organizations make better security decisions|
|---|---|

### CTI Types

|Type|Audience|Purpose|
|---|---|---|
|Strategic Intelligence|Executives|High-level trends, risk posture, business decisions|
|Tactical Intelligence|Security Teams|Upcoming attack methods, tools, patterns|
|Operational Intelligence|Incident Response|Specific campaigns, attacker intent, timing|
|Technical Intelligence|Systems/SIEM/IDS|IPs, hashes, domains, signatures|

### CTI Lifecycle

|Phase|Description|
|---|---|
|1. Direction|Define what to know and why|
|2. Collection|Gather data (logs, OSINT, feeds)|
|3. Processing|Clean, normalize, enrich raw data|
|4. Analysis|Transform data into actionable intelligence|
|5. Dissemination|Deliver intelligence to the right people|
|6. Feedback|Refine requirements based on outcomes|

MEMORY HOOK:
**Direction → Collect → Process → Analyze → Disseminate → Feedback**

---

## THREAT MODELING

|Definition|Process of identifying what can go wrong, how it can be attacked, and how to mitigate|
|---|---|

---

## INCIDENT MANAGEMENT

|Definition|Identify, prioritize, analyze, resolve, and improve incident handling|

### Comparison

|Model|Phases|
|---|---|
|Incident Management|Identify → Prioritize → Analyze → Resolve → Improve|
|Incident Response|Preparation → Recording → Triage → Notification → Containment → Evidence → Eradication → Recovery → Post-Incident|

EXAM TRAP:
Incident **Management** is broader (identify → improve). Incident **Response** is tactical (contain → recover).

---

## LAWS AND STANDARDS

|Standard / Law|Full Name|Scope|
|---|---|---|
|PCI DSS|Payment Card Industry Data Security Standard|Organizations handling payment card data|
|ISO/IEC 27001|Information Security Management Framework|Framework for establishing, maintaining, and improving ISMS|
|HIPAA|Health Insurance Portability and Accountability Act|Protects identifiable health information (USA)|
|SOX|Sarbanes-Oxley Act|Protects investors, mandates corporate disclosures, includes PCAOB (USA)|
|DMCA|Digital Millennium Copyright Act|USA copyright law protecting digital content (DRM)|
|FISMA|Federal Information Security Management Act|U.S. federal agencies and contractors; uses NIST standards|
|DPA 2018|Data Protection Act 2018|UK primary personal data protection law|

MEMORY HOOK:
**PCI = Cards, ISO = Framework, HIPAA = Health, SOX = Finance, DMCA = Copyright, FISMA = Federal, DPA = UK**

---

## HACKING TERMINOLOGY

|Term|Definition|
|---|---|
|White Hat|Ethical hackers — work with permission|
|Black Hat|Malicious hackers — break the law|
|Gray Hat|Neither fully good nor bad — may hack without permission but not maliciously|
|Script Kiddies|Unskilled individuals who use pre-made tools|
|Cyber Terrorists|Motivated by religious or political beliefs|
|State-Sponsored|Employed by a nation-state to attack other nations|
|Hacktivists|Motivated by political agenda — defacing or disabling websites|
|Hacker Teams|Skilled hackers operating with their own resources|
|Industrial Spies|Engage in corporate espionage|
|Insiders|Trusted users carrying out attacks from within the organization|
|Criminal Syndicates|Organized crime operating for financial gain|
|Organized Hackers|Rent out hacked assets, profit from victims|

---

## ATTACK TYPES

|Type|Description|Examples|
|---|---|---|
|Passive Attack|Monitoring without altering anything|Sniffing, eavesdropping|
|Active Attack|Attempts to change, alter, or delete data|SQL injection, DDoS, modified packets|
|Close-In Attack|Physically close to the target|Shoulder surfing, social engineering|
|Insider Attack|Carried out by someone with authorized access|Disgruntled employee, credential abuse|
|Distribution Attack|Occurs before the system reaches the customer|Tampered hardware, infected supply chain|

EXAM TRAP:
Passive attacks = **no modification**, harder to detect. Active attacks = **data altered**, higher risk of discovery.

---

## PEN TEST PHASES

|Phase|Description|
|---|---|
|1. Preparation|Define time period, scope, allowed attack types, team assignments|
|2. Assessment|Execute the actual penetration test|
|3. Conclusion (Post-Assessment)|Report preparation, findings, recommendations|

MEMORY HOOK:
**Prep → Assess → Report**

---

## EXAM EXTRAS (Boson Practice Test)

### APT LIFECYCLE

|Phase|Description|
|---|---|
|1. Preparation|Identify and research target|
|2. Initial Intrusion|Infiltrate target environment, deploy malware|
|3. Expansion|Expand access, obtain administrative privileges|
|4. Persistence|Create additional footholds, establish C2|
|5. Cleanup|Evade detection, remove evidence|

---

### THREAT INTELLIGENCE TYPES

|Type|Focus|
|---|---|
|Tactical|Tools, techniques, and procedures (TTPs) and vulnerabilities|
|Strategic|Overview of threat landscape, not very technical|
|Technical|Indicators of compromise (IOCs), malware samples, phishing samples, URLs|
|Operational|Gathers information from online discussions, social media, chat rooms|

---

### CYBER KILL CHAIN — ACTIONS & OBJECTIVES

|Phase|Description|
|---|---|
|Actions on Objectives|System destruction phase — carrying out the final mission|

---

### SOX (SARBANES-OXLEY)

|Item|Memorize|
|---|---|
|SOX|Requires companies to disclose financial information|

---

## EXAM FLASHCARDS

|Term|Answer|
|---|---|
|ALE formula|`ALE = SLE × ARO`|
|CIA + A + N|Confidentiality, Integrity, Availability, Authenticity, Non-repudiation|
|Integrity is ensured via|Hash functions|
|Phases of hacking methodology|Footprinting → Scanning → Enumeration → Vulnerability Analysis → System Hacking|
|System hacking sub-steps|Gain access → Escalate privileges → Maintain access → Clear logs|
|Cyber Kill Chain phases|Recon → Weaponize → Deliver → Exploit → Install → C2 → Act|
|MITRE ATT&CK tactics count|14|
|Diamond Model elements|Adversary, Capability, Infrastructure, Victim|
|IoC categories|Email, Network, Host-Based, Behavioral|
|PCI DSS scope|Payment card data|
|HIPAA protects|Health information|
|DMCA protects|Digital copyrighted content (DRM)|
|ISO 27001 is about|ISMS framework|
|Passive attack example|Sniffing, eavesdropping|
|Active attack example|SQL injection, DDoS|
|CTI lifecycle|Direction → Collection → Processing → Analysis → Dissemination → Feedback|
|Risk formula|`Risk = Threat × Vulnerability × Impact`|
|Incident Management vs IR|Management = identify→improve; IR = preparation→post-incident|
|SIEM tool example|Splunk|
|Threat modeling definition|Identify what can go wrong, how attacked, how to mitigate|

---

## PRACTICE QUESTIONS

**Q1:** What is the correct formula for Annualized Loss Expectancy (ALE)?

> A) ALE = SLE + ARO
> B) ALE = SLE × ARO
> C) ALE = SLE / ARO
> D) ALE = SLE - ARO

**Answer: B**

---

**Q2:** Which phase of the Cyber Kill Chain involves creating a malicious payload?

> A) Reconnaissance
> B) Weaponization
> C) Delivery
> D) Exploitation

**Answer: B**

---

**Q3:** An attacker monitors network traffic without modifying any data. What type of attack is this?

> A) Active attack
> B) Close-in attack
> C) Passive attack
> D) Distribution attack

**Answer: C**

---

**Q4:** Which of the following is NOT one of the five elements of information security?

> A) Confidentiality
> B) Authenticity
> C) Scalability
> D) Non-repudiation

**Answer: C**

---

**Q5:** Which law specifically protects identifiable health information in the United States?

> A) PCI DSS
> B) SOX
> C) DMCA
> D) HIPAA

**Answer: D**
