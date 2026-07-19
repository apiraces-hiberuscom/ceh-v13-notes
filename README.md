# CEH v13 Study Notes

Structured, beginner-friendly notes for CEH v13 certification exam preparation. All 20 modules covered with tables, flashcards, and practice questions.

---

## Navigation

| # | Module | Files | Key Topics |
|---|--------|-------|------------|
| 01 | Introduction to Ethical Hacking | `01 - Intro.md` | CIA triad, Cyber Kill Chain, MITRE ATT&CK, Diamond Model, Laws & Standards |
| 02 | Footprinting and Reconnaissance | `02 - footprinting and reconnaissance.md` | Google Dorking, WHOIS, DNS, TCP/IP, OSINT |
| 03 | Scanning Networks | `03 - Scanning networks.md` | Nmap, Hping3, Port Scans, Host Discovery, Timing Templates |
| 04 | Enumeration | `04 - Enumeration.md` | NetBIOS, SNMP, LDAP, NTP/NFS, SMTP, DNS Zone Transfer |
| 05 | Vulnerability Analysis | `05 - Vulnerability analysis.md` | CVSS, CVE, CWE, NVD, Nessus, OpenVAS, Qualys |
| 06 | System Hacking | `06 - System hacking.md` | SAM/NTLM/Kerberos, Password Cracking, Metasploit, Privilege Escalation, Steganography |
| 07 | Malware Threats | `07 - Malware threats.md` | Trojans, Viruses, Worms, Ransomware, APT, Malware Analysis |
| 08 | Network Sniffing | `08 - Network sniffing.md` | ARP Spoofing, MAC Flooding, VLAN Hopping, DNS Poisoning, Wireshark |
| 09 | Social Engineering | `09 - Social Engineering.md` | Phishing, Pretexting, Tailgating, AI Deepfakes, Insider Threats |
| 10 | Denial of Service | `10 - Denial of service.md` | Botnets, DDoS Types, SYN Flood, Slowloris, Amplification |
| 11 | Session Hijacking | `11 - Session hijacking.md` | XSS, CSRF, TCP/IP Hijacking, RST Hijacking, PetitPotam |
| 12 | Evading IDS, Firewalls & Honeypots | `12 - Evading IDS, Firewalls and Honeypots.md` | IDS/IPS, Firewall Types, YARA, Tunneling, Honeypots |
| 13 | Hacking Web Servers | `13 - Hacking Web Servers.md` | Apache/IIS/Nginx, DNS Attacks, Directory Traversal, HTTP Response Splitting |
| 14 | Hacking Web Applications | `14 - Part 1 - Foundations.md`, `14 - Part 2 - OWASP Top 10.md`, `14 - Part 3 - Hacking Methodology.md`, `14 - Part 4 - APIs and Webhooks.md`, `14 - Part 5 - Security Testing.md` | OWASP Top 10, Web App Hacking Methodology, APIs, Security Testing |
| 15 | SQL Injection | `15 - Part 1 - SQL Injection Fundamentals.md`, `15 - Part 2 - SQLi Types.md`, `15 - Part 3 - SQLi Methodology.md`, `15 - Part 4 - SQLi Evasion.md`, `15 - Part 5 - SQLi Countermeasures.md` | SQLi Types, Methodology, Evasion, Countermeasures, SQLmap |
| 16 | Hacking Wireless Networks | `16 - Part 1 - Wireless Concepts.md`, `16 - Part 2 - Wireless Encryption.md`, `16 - Part 3 - Wireless Attacks.md`, `16 - Part 4 - Wireless Hacking Methodology.md`, `16 - Part 5 - Wireless Countermeasures.md` | WEP/WPA/WPA2/WPA3, Rogue AP, Evil Twin, Aircrack-ng |
| 17 | Hacking Mobile Platforms | `17 - Part 1 - Mobile Attack Vectors.md`, `17 - Part 2 - Android Threats.md`, `17 - Part 3 - iOS Threats.md`, `17 - Part 4 - MDM and BYOD.md`, `17 - Part 5 - Mobile Security Tools.md` | OWASP Mobile Top 10, Android/iOS Threats, MDM, BYOD |
| 18 | Hacking IoT & OT | `18 - Part 1 - IoT Concepts.md`, `18 - Part 2 - OT and SCADA.md`, `18 - Part 3 - IoT Threats.md`, `18 - Part 4 - IoT Hacking Methodology.md`, `18 - Part 5 - IoT Countermeasures.md` | IoT Concepts, SCADA/ICS, IoT Attacks, OT Security |
| 19 | Cloud Computing | `19 - Part 1 - Cloud Concepts.md`, `19 - Part 2 - Cloud Threats.md`, `19 - Part 3 - Cloud Attacks.md`, `19 - Part 4 - Cloud Security.md` | Cloud Models, Threats, Attacks, DevSecOps |
| 20 | Cryptography | `20 - Part 1 - Symmetric and Asymmetric.md`, `20 - Part 2 - Hashing.md`, `20 - Part 3 - PKI.md`, `20 - Part 4 - Wireless Crypto.md`, `20 - Part 5 - Email and Disk Crypto.md`, `20 - Part 6 - Cryptographic Attacks.md` | Symmetric/Asymmetric, Hashing, PKI, Email/Disk Crypto |
| Extra | Web Servers Deep Dive | `Extra - Web Servers Deep Dive.md` | Apache/IIS/Nginx architecture in depth (exam supplement) |

---

## How to Use These Notes

1. **Read** the notes module by module
2. **Study** the tables -- they are designed for quick scanning
3. **Use Flashcards** at the end of each file for memorization
4. **Test yourself** with the Practice Questions at the end of each file
5. **Reference** the Exam Cheat Sheet below for last-minute review

---

## Suggested Study Plan

| Week | Modules | Est. Time | Priority |
|------|---------|-----------|----------|
| 1 | 01, 02, 03, 04 | 4-6 hours | Foundation |
| 2 | 05, 06, 07 | 4-6 hours | Core |
| 3 | 08, 09, 10, 11 | 4-6 hours | Core |
| 4 | 12, 13 | 3-4 hours | Core |
| 5 | 14, 15 | 4-6 hours | Web (heavy exam weight) |
| 6 | 16, 17 | 3-4 hours | Wireless & Mobile |
| 7 | 18, 19, 20 | 3-4 hours | IoT, Cloud, Crypto |
| 8 | Review all + Extra | 4-6 hours | Final review |

---

## Exam Cheat Sheet

### Must-Memorize Ports

| Port | Protocol | Service |
|------|----------|---------|
| 20/21 | TCP | FTP |
| 22 | TCP | SSH/SFTP |
| 23 | TCP | Telnet |
| 25 | TCP | SMTP |
| 53 | TCP/UDP | DNS |
| 67/68 | UDP | DHCP |
| 69 | UDP | TFTP |
| 80 | TCP | HTTP |
| 110 | TCP | POP3 |
| 123 | UDP | NTP |
| 135 | TCP | RPC |
| 137-139 | TCP/UDP | NetBIOS |
| 143 | TCP | IMAP |
| 161 | UDP | SNMP |
| 389 | TCP | LDAP |
| 443 | TCP | HTTPS |
| 445 | TCP | SMB |
| 500 | UDP | ISAKMP/IKE |
| 636 | TCP | LDAPS |
| 993 | TCP | IMAPS |
| 995 | TCP | POP3S |
| 1433 | TCP | MSSQL |
| 3306 | TCP | MySQL |
| 3389 | TCP | RDP |
| 5060/5061 | TCP/UDP | SIP |

### Must-Memorize Formulas

| Formula | Definition |
|---------|------------|
| ALE = SLE x ARO | Annual Loss Expectancy |
| SLE = Asset Value x Exposure Factor | Single Loss Expectancy |
| ARO = Annual Rate of Occurrence | How often per year |
| RISK = Threat x Vulnerability x Impact | Risk calculation |

### TTL Values

| OS | TTL |
|----|-----|
| Linux/Unix | 64 |
| Windows | 128 |
| Network Devices | 255 |

### Key Frameworks

| Framework | Purpose |
|-----------|---------|
| MITRE ATT&CK | Categorize adversary behavior (Tactics, Techniques, Procedures) |
| Cyber Kill Chain | 7-phase attack lifecycle (Lockheed Martin) |
| Diamond Model | Adversary, Capability, Infrastructure, Victim |
| OWASP Top 10 | Top 10 web application security risks |

---

## Disclaimer

This repository is strictly for educational purposes. Use the knowledge only for ethical learning, research, and defensive cybersecurity practices.
