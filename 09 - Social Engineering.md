# MODULE 09 — OVERVIEW (EXAM CONTEXT)

|Item|Memorize|
|---|---|
|Module Number|09|
|Module Name|Social Engineering|
|Focus|Concepts, types, attack techniques, AI-powered attacks, countermeasures|

---

## LEARNING OBJECTIVES (DO NOT SKIP — EXAM LIST)

|Objective #|Description|
|---|---|
|01|Understand social engineering concepts and lifecycle|
|02|Explain social engineering principles and psychological triggers|
|03|Identify all types of social engineering attacks|
|04|Describe AI-powered social engineering threats|
|05|Apply social engineering countermeasures|

---

# OBJECTIVE 01 — SOCIAL ENGINEERING CONCEPTS

---

## SOCIAL ENGINEERING — CORE DEFINITION

|Term|Definition|
|---|---|
|Social Engineering|Manipulation of people into performing actions or divulging confidential information by exploiting human psychology rather than technical vulnerabilities|

MEMORY HOOK:  
**Hacking humans, not machines**

---

## SOCIAL ENGINEERING LIFECYCLE (EXAM CRITICAL)

|Phase|Action|Detail|
|---|---|---|
|1. Research|Gather information|OSINT, social media, public records|
|2. Develop|Craft attack vector|Tailor pretext, choose target|
|3. Launch|Execute the attack|Deliver email, call, or in-person approach|
|4. Access|Obtain entry or data|Credentials, physical access, system compromise|
|5. Analyze|Evaluate results|Assess what was gained, plan next steps|

MEMORY HOOK:  
**R-D-L-A-A = "Really Devious Lying Attacker Achieves"**

EXAM TRAP:  
Lifecycle phases are sequential — exam may reorder them as distractors.

---

## SOCIAL ENGINEERING PRINCIPLES (CIALDINI'S 6 — VERY HIGH YIELD)

|Principle|Definition|Attack Example|
|---|---|---|
|Authority|People obey authority figures|Attacker impersonates CEO demanding wire transfer|
|Scarcity|Limited availability drives action|"Only 2 slots left — act now"|
|Urgency|Time pressure forces quick decisions|"Account suspended — verify within 1 hour"|
|Social Proof|People follow what others do|"1,000 employees already enrolled"|
|Likability|People trust those they like|Friendly attacker builds rapport before asking for info|
|Reciprocity|People return favors|"I helped you — can you share your login?"|

MEMORY HOOK:  
**A-S-U-S-L-R = "A Smart Undercover Spy Leverages Rapport"**

EXAM TRAP:  
Reciprocity = doing something first so the target feels obligated. Do NOT confuse with quid pro quo.

---

# OBJECTIVE 03 — TYPES OF SOCIAL ENGINEERING ATTACKS

---

## SOCIAL ENGINEERING ATTACKS — MASTER TABLE

|Attack|Medium|Description|Key Detail|
|---|---|---|---|
|Phishing|Email|Mass fraudulent emails impersonating trusted entities|Broad target, low specificity|
|Spear Phishing|Email|Targeted phishing aimed at specific individuals|Uses personal info gathered during Research phase|
|Vishing|Voice/Phone|Voice-based phishing using phone calls|Often spoofed caller ID|
|Smishing|SMS/Mobile|Phishing via SMS or text messages|Short links, urgent language|
|Pharming|DNS/Network|Redirects traffic to attacker's website|DNS cache poisoning, host file modifications|
|Baiting|Physical/Media|Leaves infected media (USB, CDs) for victims to find|Exploits curiosity|
|Pretexting|In-person/Phone|Attacker creates fabricated scenario (pretext) to gain trust|Examples: IT support, auditor, vendor|
|Tailgating|Physical|Follows authorized person through secured door|No consent needed — just walks in behind|
|Piggybacking|Physical|Follows authorized person WITH consent|Victim holds door open for attacker|
|Quid Pro Quo|Phone/Email|Offers service in exchange for data or credentials|"Free security audit — just provide your login"|
|Honey Trap|Online/Romance|Uses romantic or sexual attraction to extract info|Targets executives, military, government|
|Watering Hole|Web|Compromises website frequently visited by target group|Infects site, waits for targets to visit|
|Diversion Theft|Physical/Logistics|Tricks delivery person into sending package to wrong location|Redirects shipments or parcels|
|Shoulder Surfing|Physical|Observes victim entering PIN, password, or sensitive data|Works in cafes, ATMs, airports|

---

## ADVANCED PHISHING VARIANTS (EXAM FAVORITES)

|Variant|Description|Key Detail|
|---|---|---|
|Clone Phishing|Clones a legitimate email, website, or digital content|Replaces links/attachments with malicious versions|
|E-wallet Phishing|Targets e-wallet credentials|Fake login pages for PayPal, Venmo, etc.|
|Tabnabbing / Reverse Tabnabbing|Targets users with multiple open tabs|Inactive tab silently transforms into fake login page|
|Consent Phishing|Exploits OAuth permissions|Tricks user into granting app access to accounts|
|Search Engine Phishing|Manipulates search engine results|Fake sites appear in top search results|
|Angler Phishing|Fake social media account impersonating org|Posts fake helpdesk service links in replies/comments|

MEMORY HOOK (ADVANCED VARIANTS):  
**C-E-T-C-S-A = "Cow Eats Tab Cookies So A"**

EXAM TRAP:  
Clone phishing uses a PREVIOUSLY legitimate email — not a new creation.  
Tabnabbing targets IDLE tabs, not active ones.  
Consent phishing exploits OAuth, NOT passwords directly.

---

## PHARMING — DEEP DIVE

|Technique|Description|
|---|---|
|DNS Cache Poisoning|Corrupts DNS resolver cache to redirect traffic|
|Hosts File Modification|Modifies local hosts file to point domains to attacker IP|
|Domain Spoofing|Registers look-alike domains|

MEMORY HOOK:  
**Pharming = "Phake DNS"**

EXAM TRAP:  
Pharming does NOT require the victim to click a link — it works at the DNS/network level.

---

## SPIMMING

|Item|Memorize|
|---|---|
|Spimming|Spam sent over instant messaging platforms|
|Target|IM services (Skype, Slack, Teams, etc.)|

---

## QRL JACKING

|Item|Memorize|
|---|---|
|QRL Jacking|Attack on Quick Response Login (QR-based login)|
|Tool|QRTiger (used to generate fake QR codes)|
|Method|Attacker creates phishing page with fake QR code|

---

## ELICITATION

|Item|Memorize|
|---|---|
|Elicitation|Technique of extracting information through casual, disarming conversation|
|Nature|Non-confrontational, natural dialogue|

MEMORY HOOK:  
**Elicitation = "Casual chat that steals data"**

---

## SOCIAL ENGINEERING TOOLS

|Tool|Use Case|Detail|
|---|---|---|
|ShellPhish|Social network phishing|Creates fake login pages for social platforms|
|Social Engineering Toolkit (SET)|Email, Web, USB attacks|Multi-vector attack framework|
|OhPhish|Phishing simulation|Simulates phishing campaigns for training|
|Netcraft|Anti-phishing toolbar|Browser extension for site reputation|
|PhishTank|Anti-phishing database|Community-verified phishing URL database|
|QRTiger|QR code generation|Used in QRL jacking attacks|

---

# OBJECTIVE 03 (CONTINUED) — INSIDER THREATS

---

## INSIDER THREATS — DEFINITION

|Term|Definition|
|---|---|
|Insider Threat|Security risk originating from within the organization — employees, contractors, or business associates|

---

## TYPES OF INSIDER THREATS

|Type|Description|Motivation|
|---|---|---|
|Malicious Insider|Deliberately harms the organization|Financial gain, revenge, ideology|
|Negligent Insider|Accidentally causes security incidents|Lack of training, carelessness|
|Compromised Insider|Account or credentials taken over by attacker|Unknowing participant — credentials stolen via phishing|

MEMORY HOOK:  
**M-N-C = "Malicious Needs Compensation"**

EXAM TRAP:  
Compromised insider is STILL an insider threat even though they didn't act intentionally.  
Negligent insider is the MOST COMMON type.

---

## INSIDER THREAT MOTIVATIONS

|Motivation|Description|
|---|---|
|Financial|Bribery, selling data, embezzlement|
|Revenge|Disgruntled employee seeking retaliation|
|Ideology|Political or social beliefs|
|Curiosity|Accidental access to data outside job scope|
|Coercion|Forced by external threat actor|

---

# OBJECTIVE 04 — AI-POWERED SOCIAL ENGINEERING

---

## AI-POWERED SOCIAL ENGINEERING — CORE CONCEPT

|Term|Definition|
|---|---|
|AI-Powered Social Engineering|Uses artificial intelligence to generate realistic fake content (video, audio, text) for deception at scale|

MEMORY HOOK:  
**AI makes social engineering scalable and realistic**

---

## DEEPFAKES

|Item|Memorize|
|---|---|
|Deepfake|AI-generated synthetic media — video or audio that convincingly mimics a real person|
|Use in attacks|Impersonate executives, fabricate evidence, bypass biometric verification|
|Risk|Extremely difficult to detect with naked eye|

---

## AI DEEPFAKE TOOLS

|Tool|Type|
|---|---|
|Synthesia|AI video generation — avatar-based|
|DeepBrain AI|AI video generation|
|Deepfakesweb|Deepfake video creation|
|Deepfake Lab|Deepfake video creation|
|Vidnaz|Deepfake video creation|
|Hoodem|Deepfake creation|

---

## AI VOICE CLONING TOOLS

|Tool|Detail|
|---|---|
|ElevenLabs|High-fidelity voice cloning|
|Resemble.AI|Real-time voice cloning|
|Murf.AI|AI voice generation|
|PlayHT|Text-to-speech with voice cloning|
|VEED.IO|Video and voice AI tools|
|voice.ai|Real-time voice changer and cloner|

MEMORY HOOK:  
**"Eleven Labs Resembles Murf Playing at Voice"**

EXAM TRAP:  
AI voice cloning can bypass voice-based authentication (voice biometrics).  
Deepfakes can be used for CEO fraud (fake video call approving transfer).

---

# OBJECTIVE 05 — SOCIAL ENGINEERING COUNTERMEASURES

---

## SOCIAL ENGINEERING COUNTERMEASURES — MASTER TABLE

|Countermeasure|Description|
|---|---|
|Security Awareness Training|Regular training on recognizing social engineering tactics|
|Phishing Simulations|Simulated phishing campaigns using tools like OhPhish|
|Email Filtering|Block phishing emails before they reach users|
|Anti-Phishing Toolbars|Browser tools like Netcraft, PhishTank for real-time warnings|
|Verification Procedures|Always verify identity through secondary channel|
|Least Privilege|Limit access to only what is needed|
|Data Classification|Label and protect sensitive data|
|Incident Response Plan|Establish procedures for reporting suspected attacks|
|Physical Security|Badges, mantraps, access controls prevent tailgating/piggybacking|
|Multi-Factor Authentication|Reduces impact of compromised credentials|
|Patch Management|Prevents watering hole and pharming attacks|
|DNS Security (DNSSEC)|Prevents DNS cache poisoning (pharming)|
|Content Inspection|Detect deepfake media using AI detection tools|

MEMORY HOOK:  
**"Train, Simulate, Filter, Verify, Limit, Classify, Respond, Secure, Patch, DNS"**

---

## EXAM EXTRAS (Boson Practice Test)

### SPIMMING AND SMISHING

|Term|Description|
|---|---|
|Spimming|Spam sent over instant messaging platforms|
|Smishing|Phishing via SMS/text messages|

---

### WATERING HOLE

|Item|Memorize|
|---|---|
|Watering hole|Infecting a website that users are likely to visit|

---

### MEDUSA AND HOOTSUITE

|Tool|Purpose|
|---|---|
|MEDUSA|OSINT tool for social media|
|Hootsuite|Social media management platform|

---

### EVILGINX

|Item|Memorize|
|---|---|
|Evilginx|MITM tool that spoofs a website|

---

### CLICKJACKING

|Item|Memorize|
|---|---|
|Clickjacking|Fake iframe technique to deceive users|

---

### VAWTRAK

|Item|Memorize|
|---|---|
|VAWTRAK|Email disguised as package delivery notification; Trojan|

---

# EXAM FLASHCARDS

---

|Term|Quick Definition|
|---|---|
|Social Engineering|Exploiting human psychology to bypass security|
|Phishing|Mass fraudulent emails impersonating trusted entities|
|Spear Phishing|Targeted phishing using personal information|
|Vishing|Voice-based phishing over phone calls|
|Smishing|Phishing via SMS/text messages|
|Pharming|DNS redirection to attacker-controlled website|
|Pretexting|Fabricated scenario to gain trust and extract data|
|Tailgating|Following authorized person through secured door without consent|
|Piggybacking|Following authorized person WITH consent|
|Quid Pro Quo|Offering service in exchange for credentials|
|Baiting|Leaving infected media for curious victims|
|Watering Hole|Compromising a website frequented by target group|
|Diversion Theft|Redirecting deliveries to wrong location|
|Clone Phishing|Cloning legitimate email with malicious replacements|
|Tabnabbing|Inactive browser tab transforms into fake login page|
|Consent Phishing|Exploiting OAuth to gain account permissions|
|Deepfake|AI-generated synthetic video or audio|
|Insider Threat|Security risk from within the organization|
|Angler Phishing|Fake social media helpdesk account posting malicious links|
|QRL Jacking|Phishing via fake QR code login|

---

# PRACTICE QUESTIONS

---

**Q1.** An attacker calls an employee pretending to be from IT support and requests their password to "fix a remote issue." What type of social engineering is this?

|Answer|
|---|
|**Vishing** — voice-based phishing using a fabricated pretext (pretexting is also involved, but the medium makes it vishing) |

---

**Q2.** Which of the following redirects a user to a fake website WITHOUT requiring them to click a link?

|Answer|
|---|
|**Pharming** — works via DNS cache poisoning or hosts file modification at the network level |

---

**Q3.** What is the difference between tailgating and piggybacking?

|Answer|
|---|
|**Tailgating** = following without consent. **Piggybacking** = following with consent (victim holds door open) |

---

**Q4.** An attacker compromises a website that CFOs in the finance industry frequently visit. They inject a keylogger into the site. What attack is this?

|Answer|
|---|
|**Watering Hole** — compromising a site frequented by the target group |

---

**Q5.** Which Cialdini principle is exploited when an attacker says "Only 2 licenses remain — purchase now"?

|Answer|
|---|
|**Scarcity** — limited availability drives urgency in decision-making |

---

*End of Module 09 — Social Engineering*
