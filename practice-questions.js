const practiceQuestions = {
  "01": [
    {
      question: "Which of the following is NOT part of the CIA triad?",
      options: ["Confidentiality", "Integrity", "Availability", "Authentication"],
      answer: "D",
      explanation: "The CIA triad consists of Confidentiality, Integrity, and Availability. Authentication is a security control but not part of the core CIA triad."
    },
    {
      question: "What is the primary goal of ethical hacking?",
      options: ["To cause damage to systems", "To identify vulnerabilities before malicious hackers", "To steal data", "To disrupt business operations"],
      answer: "B",
      explanation: "Ethical hacking aims to identify and fix vulnerabilities before they can be exploited by malicious actors."
    },
    {
      question: "Which of the following is an example of a technical control?",
      options: ["Security policies", "Firewalls", "Security guards", "Background checks"],
      answer: "B",
      explanation: "Firewalls are technical controls (also called logical controls). Security policies are administrative, security guards are physical, and background checks are administrative."
    },
    {
      question: "The Cyber Kill Chain was developed by which organization?",
      options: ["MITRE", "Lockheed Martin", "NIST", "OWASP"],
      answer: "B",
      explanation: "The Cyber Kill Chain was developed by Lockheed Martin as a framework for understanding and defending against cyber attacks."
    },
    {
      question: "What does the 'Reconnaissance' phase involve?",
      options: ["Gaining unauthorized access", "Gathering information about the target", "Covering tracks", "Escalating privileges"],
      answer: "B",
      explanation: "Reconnaissance is the first phase of hacking where attackers gather information about the target system or organization."
    },
    {
      question: "Which law is specifically designed to protect health information in the United States?",
      options: ["GDPR", "HIPAA", "SOX", "PCI-DSS"],
      answer: "B",
      explanation: "HIPAA (Health Insurance Portability and Accountability Act) is a US law designed to provide privacy standards to protect patients' medical records and other health information."
    },
    {
      question: "What is the difference between vulnerability and exploit?",
      options: ["They are the same thing", "A vulnerability is a weakness, an exploit is code that takes advantage of it", "An exploit is a weakness, a vulnerability is code", "Neither is related to security"],
      answer: "B",
      explanation: "A vulnerability is a weakness or flaw in a system, while an exploit is the code or technique used to take advantage of that vulnerability."
    },
    {
      question: "Which of the following is the best description of 'footprinting'?",
      options: ["Scanning for open ports", "Collecting information about a target network", "Exploiting a vulnerability", "Installing malware"],
      answer: "B",
      explanation: "Footprinting is the process of gathering information about a target network or system, which is the first step in the hacking methodology."
    },
    {
      question: "What is the purpose of a penetration test?",
      options: ["To fix all vulnerabilities", "To simulate an attack to identify security weaknesses", "To install security software", "To monitor network traffic"],
      answer: "B",
      explanation: "A penetration test simulates a real-world attack to identify security weaknesses and vulnerabilities in a system or network."
    },
    {
      question: "Which of the following is NOT a phase of the ethical hacking methodology?",
      options: ["Reconnaissance", "Scanning", "Exploitation", "Marketing"],
      answer: "D",
      explanation: "The ethical hacking methodology includes Reconnaissance, Scanning, Gaining Access, Maintaining Access, and Covering Tracks. Marketing is not part of this methodology."
    }
  ],
  "02": [
    {
      question: "Which Google dork operator is used to search for specific file types?",
      options: ["site:", "filetype:", "inurl:", "intitle:"],
      answer: "B",
      explanation: "The 'filetype:' operator is used to search for specific file types (e.g., filetype:pdf, filetype:doc)."
    },
    {
      question: "What information can be obtained from a WHOIS lookup?",
      options: ["Only the domain name", "Domain registrant contact information, nameservers, and registration dates", "Only the IP address", "Only the hosting provider"],
      answer: "B",
      explanation: "WHOIS lookups provide domain registrant contact information, nameservers, registration and expiration dates, and registrar information."
    },
    {
      question: "Which tool is commonly used for DNS enumeration?",
      options: ["Nmap", "nslookup/dig", "Wireshark", "Metasploit"],
      answer: "B",
      explanation: "nslookup and dig are command-line tools used for querying DNS servers to obtain domain name or IP address mapping information."
    },
    {
      question: "What is the purpose of OSINT (Open Source Intelligence)?",
      options: ["To hack into systems", "To gather publicly available information about a target", "To encrypt data", "To monitor network traffic"],
      answer: "B",
      explanation: "OSINT involves gathering intelligence from publicly available sources to be used in an investigation or analysis."
    },
    {
      question: "Which of the following is a passive reconnaissance technique?",
      options: ["Port scanning", "Social media profiling", "Vulnerability scanning", "Network mapping"],
      answer: "B",
      explanation: "Passive reconnaissance gathers information without directly interacting with the target. Social media profiling is passive because it uses publicly available information."
    },
    {
      question: "What is a DNS zone transfer?",
      options: ["Transferring domain ownership", "Copying DNS records from one server to another", "A type of DDoS attack", "Encrypting DNS queries"],
      answer: "B",
      explanation: "A DNS zone transfer is the process of replicating DNS records across DNS servers. If not properly secured, it can reveal internal network information."
    },
    {
      question: "Which tool is used for network footprinting?",
      options: ["John the Ripper", "Maltego", "Hashcat", "Burp Suite"],
      answer: "B",
      explanation: "Maltego is an open-source intelligence and forensics application that provides graphical link analysis for footprinting and reconnaissance."
    },
    {
      question: "What is the difference between active and passive reconnaissance?",
      options: ["There is no difference", "Active interacts with the target, passive does not", "Passive is illegal, active is legal", "Active is faster than passive"],
      answer: "B",
      explanation: "Active reconnaissance involves direct interaction with the target system (like port scanning), while passive reconnaissance gathers information without direct contact."
    },
    {
      question: "Which of the following can be discovered through Google dorking?",
      options: ["Only public websites", "Sensitive files, login pages, and exposed data", "Only email addresses", "Only social media profiles"],
      answer: "B",
      explanation: "Google dorking can reveal sensitive files, login pages, exposed data, directory listings, and other information that is inadvertently made public."
    },
    {
      question: "What is the purpose of a traceroute?",
      options: ["To encrypt data", "To trace the path packets take to reach a destination", "To crack passwords", "To scan for vulnerabilities"],
      answer: "B",
      explanation: "Traceroute shows the path that packets take from the source to the destination, revealing the intermediate hops and network topology."
    }
  ],
  "03": [
    {
      question: "Which Nmap option is used for service version detection?",
      options: ["-sS", "-sV", "-sU", "-sP"],
      answer: "B",
      explanation: "The -sV option in Nmap is used to detect service versions running on open ports."
    },
    {
      question: "What is the difference between a TCP connect scan and a SYN scan?",
      options: ["There is no difference", "SYN scan is stealthier as it doesn't complete the three-way handshake", "TCP connect is stealthier", "SYN scan is slower"],
      answer: "B",
      explanation: "SYN scan (-sS) is stealthier because it doesn't complete the TCP three-way handshake, while TCP connect scan (-sT) establishes a full connection."
    },
    {
      question: "Which Nmap timing template is the most aggressive?",
      options: ["-T0", "-T3", "-T4", "-T5"],
      answer: "D",
      explanation: "-T5 is the most aggressive timing template in Nmap, making the scan very fast but potentially noisy and unreliable."
    },
    {
      question: "What does the -A option in Nmap do?",
      options: ["Performs only port scanning", "Enables OS detection, version detection, script scanning, and traceroute", "Scans only common ports", "Performs a ping scan only"],
      answer: "B",
      explanation: "The -A option enables aggressive scan options including OS detection, version detection, script scanning, and traceroute."
    },
    {
      question: "Which tool is used for network discovery and port scanning?",
      options: ["Wireshark", "Nmap", "Metasploit", "John the Ripper"],
      answer: "B",
      explanation: "Nmap (Network Mapper) is a free and open-source tool for network discovery and security auditing, commonly used for port scanning."
    },
    {
      question: "What is a NULL scan?",
      options: ["A scan that sends no flags", "A scan that sends all flags", "A scan that sends only SYN flag", "A scan that sends only FIN flag"],
      answer: "A",
      explanation: "A NULL scan sends packets with no TCP flags set, which can help evade some firewalls and IDS systems."
    },
    {
      question: "Which Nmap scan type is used to scan UDP ports?",
      options: ["-sS", "-sT", "-sU", "-sA"],
      answer: "C",
      explanation: "The -sU option in Nmap is used to scan UDP ports, which is slower than TCP scanning due to the connectionless nature of UDP."
    },
    {
      question: "What is the purpose of host discovery in Nmap?",
      options: ["To find open ports", "To identify active hosts on a network", "To detect operating systems", "To enumerate services"],
      answer: "B",
      explanation: "Host discovery identifies which hosts are online and responsive on a network before performing detailed scanning."
    },
    {
      question: "Which of the following is a stealthy port scanning technique?",
      options: ["TCP connect scan", "SYN scan", "ACK scan", "Window scan"],
      answer: "B",
      explanation: "SYN scan is considered stealthy because it doesn't complete the TCP handshake, making it less likely to be logged by target systems."
    },
    {
      question: "What is the purpose of the -O option in Nmap?",
      options: ["Service detection", "OS detection", "Output to file", "Only scan open ports"],
      answer: "B",
      explanation: "The -O option enables OS detection, which attempts to identify the operating system of the target based on network responses."
    }
  ],
  "04": [
    {
      question: "What is the purpose of enumeration in ethical hacking?",
      options: ["To scan for open ports", "To extract detailed information from target systems", "To exploit vulnerabilities", "To cover tracks"],
      answer: "B",
      explanation: "Enumeration is the process of extracting detailed information from target systems such as user names, services, shares, and network resources."
    },
    {
      question: "Which protocol is used for network device management and provides information about network devices?",
      options: ["FTP", "SMTP", "SNMP", "HTTP"],
      answer: "C",
      explanation: "SNMP (Simple Network Management Protocol) is used for managing and monitoring network devices, and can reveal valuable information about the network."
    },
    {
      question: "What is NetBIOS enumeration used for?",
      options: ["To scan for vulnerabilities", "To extract information about Windows systems and services", "To encrypt data", "To perform denial of service"],
      answer: "B",
      explanation: "NetBIOS enumeration extracts information about Windows systems including computer names, shares, user accounts, and security settings."
    },
    {
      question: "Which tool is commonly used for SNMP enumeration?",
      options: ["Wireshark", "snmpwalk", "Nmap", "Metasploit"],
      answer: "B",
      explanation: "snmpwalk is a tool used to query SNMP devices and enumerate information about network devices."
    },
    {
      question: "What is LDAP enumeration?",
      options: ["Enumerating web servers", "Extracting information from directory services", "Scanning for open ports", "Cracking passwords"],
      answer: "B",
      explanation: "LDAP enumeration involves extracting information from directory services like Active Directory, including user accounts, groups, and organizational units."
    },
    {
      question: "Which protocol is used for email transmission?",
      options: ["SNMP", "LDAP", "SMTP", "DNS"],
      answer: "C",
      explanation: "SMTP (Simple Mail Transfer Protocol) is used for sending and routing email messages between mail servers."
    },
    {
      question: "What is DNS zone transfer enumeration?",
      options: ["A type of DNS attack", "A method to copy DNS records between servers", "A way to encrypt DNS queries", "A method to enumerate email accounts"],
      answer: "B",
      explanation: "DNS zone transfer enumeration attempts to replicate DNS records, which can reveal internal network information if not properly secured."
    },
    {
      question: "Which tool is used for enumerating Windows shares?",
      options: ["Nmap", "enum4linux", "Wireshark", "Burp Suite"],
      answer: "B",
      explanation: "enum4linux is a tool used to enumerate information from Windows and Samba systems, including shares, users, and policies."
    },
    {
      question: "What information can be obtained through SMTP enumeration?",
      options: ["Only email addresses", "Valid usernames, email addresses, and mail server information", "Only mail server IP", "Only email attachments"],
      answer: "B",
      explanation: "SMTP enumeration can reveal valid usernames, email addresses, mail server information, and potentially user credentials."
    },
    {
      question: "What is the purpose of NTP enumeration?",
      options: ["To enumerate web servers", "To gather information about network time synchronization", "To scan for vulnerabilities", "To crack passwords"],
      answer: "B",
      explanation: "NTP (Network Time Protocol) enumeration gathers information about time synchronization servers, which can reveal network topology and configuration."
    }
  ],
  "05": [
    {
      question: "What is a vulnerability?",
      options: ["A type of malware", "A weakness in a system that can be exploited", "A security control", "A patch for software"],
      answer: "B",
      explanation: "A vulnerability is a weakness or flaw in a system, application, or process that can be exploited by a threat actor to gain unauthorized access."
    },
    {
      question: "What does CVSS stand for?",
      options: ["Computer Vulnerability Scoring System", "Common Vulnerability Scoring System", "Critical Vulnerability Security System", "Cyber Vulnerability Standard System"],
      answer: "B",
      explanation: "CVSS stands for Common Vulnerability Scoring System, which provides a standardized way to assess the severity of security vulnerabilities."
    },
    {
      question: "Which of the following is a vulnerability scanning tool?",
      options: ["Wireshark", "Nessus", "Metasploit", "John the Ripper"],
      answer: "B",
      explanation: "Nessus is a comprehensive vulnerability scanner that identifies vulnerabilities, misconfigurations, and compliance issues."
    },
    {
      question: "What is CVE?",
      options: ["A type of firewall", "Common Vulnerabilities and Exposures - a list of publicly disclosed vulnerabilities", "A vulnerability scanning tool", "A security certification"],
      answer: "B",
      explanation: "CVE (Common Vulnerabilities and Exposures) is a standardized list of publicly disclosed cybersecurity vulnerabilities."
    },
    {
      question: "What is the purpose of vulnerability assessment?",
      options: ["To exploit vulnerabilities", "To identify, quantify, and prioritize vulnerabilities", "To fix all vulnerabilities", "To monitor network traffic"],
      answer: "B",
      explanation: "Vulnerability assessment identifies, quantifies, and prioritizes vulnerabilities in a system or network to help organizations understand their security posture."
    },
    {
      question: "Which tool is an open-source vulnerability scanner?",
      options: ["Nessus", "OpenVAS", "Burp Suite", "Metasploit"],
      answer: "B",
      explanation: "OpenVAS (Open Vulnerability Assessment Scanner) is a full-featured open-source vulnerability scanner."
    },
    {
      question: "What is the difference between vulnerability assessment and penetration testing?",
      options: ["There is no difference", "Vulnerability assessment finds weaknesses, penetration testing exploits them", "Penetration testing is passive", "Vulnerability assessment is active"],
      answer: "B",
      explanation: "Vulnerability assessment identifies and reports potential vulnerabilities, while penetration testing actively attempts to exploit them to verify their impact."
    },
    {
      question: "What is a zero-day vulnerability?",
      options: ["A vulnerability that has been patched", "A vulnerability unknown to the vendor with no available patch", "A vulnerability in legacy systems", "A vulnerability that only affects Windows"],
      answer: "B",
      explanation: "A zero-day vulnerability is a security flaw unknown to the vendor or for which no patch exists, making it particularly dangerous."
    },
    {
      question: "Which of the following is NOT a common vulnerability scanning tool?",
      options: ["Nessus", "Qualys", "OpenVAS", "Wireshark"],
      answer: "D",
      explanation: "Wireshark is a network protocol analyzer, not a vulnerability scanner. Nessus, Qualys, and OpenVAS are all vulnerability scanning tools."
    },
    {
      question: "What is the purpose of a vulnerability management program?",
      options: ["To ignore vulnerabilities", "To systematically identify, evaluate, and remediate vulnerabilities", "To only scan for viruses", "To monitor employee activity"],
      answer: "B",
      explanation: "A vulnerability management program provides a systematic approach to identifying, evaluating, treating, and reporting on security vulnerabilities."
    }
  ],
  "06": [
    {
      question: "What is the SAM database in Windows?",
      options: ["A web server", "Security Account Manager - stores user credentials", "A firewall", "An antivirus program"],
      answer: "B",
      explanation: "SAM (Security Account Manager) is a database in Windows that stores users' passwords and can be used to authenticate local and remote users."
    },
    {
      question: "What is the difference between brute force and dictionary attack?",
      options: ["There is no difference", "Brute force tries all combinations, dictionary uses predefined words", "Dictionary is faster", "Brute force uses a wordlist"],
      answer: "B",
      explanation: "Brute force attacks try all possible combinations of characters, while dictionary attacks use a predefined list of common passwords and words."
    },
    {
      question: "Which tool is commonly used for password cracking?",
      options: ["Nmap", "John the Ripper", "Wireshark", "Burp Suite"],
      answer: "B",
      explanation: "John the Ripper is a popular password cracking tool that performs brute-force and dictionary attacks against password hashes."
    },
    {
      question: "What is privilege escalation?",
      options: ["Reducing user privileges", "Gaining higher-level permissions than authorized", "Creating new user accounts", "Installing security software"],
      answer: "B",
      explanation: "Privilege escalation is the act of exploiting a vulnerability to gain elevated access to resources that are normally protected."
    },
    {
      question: "What is the difference between vertical and horizontal privilege escalation?",
      options: ["There is no difference", "Vertical gains higher privileges, horizontal accesses other users' resources", "Vertical is for admins, horizontal is for users", "Horizontal is more dangerous"],
      answer: "B",
      explanation: "Vertical privilege escalation gains higher-level permissions (e.g., user to admin), while horizontal privilege escalation accesses resources of other users at the same privilege level."
    },
    {
      question: "What is NTLM?",
      options: ["A type of firewall", "Windows authentication protocol", "A vulnerability scanning tool", "A type of malware"],
      answer: "B",
      explanation: "NTLM (NT LAN Manager) is a suite of Microsoft security protocols that provides authentication, integrity, and confidentiality for users."
    },
    {
      question: "What is the purpose of steganography?",
      options: ["To encrypt data", "To hide information within other files", "To scan for vulnerabilities", "To crack passwords"],
      answer: "B",
      explanation: "Steganography is the practice of hiding information within other non-secret files or messages to avoid detection."
    },
    {
      question: "Which of the following is a privilege escalation technique on Windows?",
      options: ["ARP spoofing", "Token impersonation", "DNS poisoning", "SQL injection"],
      answer: "B",
      explanation: "Token impersonation allows an attacker to use a stolen token to impersonate a user and gain their privileges."
    },
    {
      question: "What is Metasploit?",
      options: ["A vulnerability scanner", "An exploitation framework", "A password cracker", "A network analyzer"],
      answer: "B",
      explanation: "Metasploit is a penetration testing framework that provides information about security vulnerabilities and aids in penetration testing and IDS signature development."
    },
    {
      question: "What is the purpose of keylogging?",
      options: ["To monitor network traffic", "To record keystrokes to capture sensitive information", "To scan for vulnerabilities", "To encrypt data"],
      answer: "B",
      explanation: "Keylogging is the action of recording the keys struck on a keyboard, typically in a covert manner, to capture passwords and other sensitive information."
    }
  ],
  "07": [
    {
      question: "What is the difference between a virus and a worm?",
      options: ["There is no difference", "A virus requires a host file, a worm is self-replicating", "A worm is more dangerous", "A virus is always malicious"],
      answer: "B",
      explanation: "A virus attaches to a host file and requires user interaction to spread, while a worm is self-replicating and can spread automatically across networks."
    },
    {
      question: "What is a Trojan horse?",
      options: ["A type of firewall", "Malware disguised as legitimate software", "A type of worm", "A network monitoring tool"],
      answer: "B",
      explanation: "A Trojan horse is malware that appears to be legitimate software but actually performs malicious actions when executed."
    },
    {
      question: "What is ransomware?",
      options: ["Malware that monitors activity", "Malware that encrypts files and demands payment", "A type of worm", "A network scanning tool"],
      answer: "B",
      explanation: "Ransomware is a type of malware that encrypts a victim's files and demands payment (ransom) for the decryption key."
    },
    {
      question: "What is an APT (Advanced Persistent Threat)?",
      options: ["A type of virus", "A long-term targeted attack by skilled attackers", "A network scanning tool", "A password cracking method"],
      answer: "B",
      explanation: "An APT is a prolonged and targeted cyberattack in which an attacker gains access to a network and remains undetected for an extended period."
    },
    {
      question: "What is the purpose of a rootkit?",
      options: ["To scan for vulnerabilities", "To provide remote access while hiding its presence", "To encrypt data", "To monitor network traffic"],
      answer: "B",
      explanation: "A rootkit is designed to provide continued privileged access to a computer while actively hiding its presence from users and security software."
    },
    {
      question: "What is a keylogger?",
      options: ["A network monitoring tool", "Software that records keystrokes", "A type of firewall", "A vulnerability scanner"],
      answer: "B",
      explanation: "A keylogger is software or hardware that records every keystroke made on a computer, often used to capture passwords and sensitive information."
    },
    {
      question: "What is the difference between polymorphic and metamorphic malware?",
      options: ["There is no difference", "Polymorphic changes its appearance, metamorphic changes its code", "Metamorphic is older technology", "Polymorphic is more dangerous"],
      answer: "B",
      explanation: "Polymorphic malware changes its signature while keeping the underlying code, while metamorphic malware rewrites its own code to evade detection."
    },
    {
      question: "What is a botnet?",
      options: ["A type of firewall", "A network of compromised computers controlled by an attacker", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "A botnet is a network of infected computers (bots) that are controlled by a central server and can be used for DDoS attacks, spam, and other malicious activities."
    },
    {
      question: "What is malware analysis?",
      options: ["Creating malware", "Studying malware to understand its behavior and functionality", "Installing antivirus", "Scanning for vulnerabilities"],
      answer: "B",
      explanation: "Malware analysis is the process of studying malicious software to understand its purpose, functionality, and potential impact."
    },
    {
      question: "What is the purpose of a backdoor?",
      options: ["To scan for vulnerabilities", "To provide unauthorized access while bypassing normal authentication", "To encrypt data", "To monitor network traffic"],
      answer: "B",
      explanation: "A backdoor is a method of bypassing normal authentication in a computer system, providing unauthorized access while hiding from users."
    }
  ],
  "08": [
    {
      question: "What is ARP spoofing?",
      options: ["A type of DNS attack", "A technique to link an attacker's MAC address with a legitimate IP", "A password cracking method", "A vulnerability scanning technique"],
      answer: "B",
      explanation: "ARP spoofing involves sending fake ARP messages to link an attacker's MAC address with the IP address of a legitimate network device."
    },
    {
      question: "What is the purpose of Wireshark?",
      options: ["To crack passwords", "To capture and analyze network traffic", "To scan for vulnerabilities", "To exploit systems"],
      answer: "B",
      explanation: "Wireshark is a network protocol analyzer that captures and displays detailed information about network traffic in real-time."
    },
    {
      question: "What is MAC flooding?",
      options: ["A type of DDoS attack", "Overwhelming a switch's MAC address table", "A password cracking technique", "A DNS attack"],
      answer: "B",
      explanation: "MAC flooding involves sending a large number of fake MAC addresses to overwhelm a switch's CAM table, potentially causing it to fail open."
    },
    {
      question: "What is VLAN hopping?",
      options: ["Jumping between network segments", "Attacking VLAN tagging to gain unauthorized access", "A type of DNS attack", "A password cracking method"],
      answer: "B",
      explanation: "VLAN hopping is a network attack that exploits misconfigurations to jump between VLANs and gain unauthorized access to different network segments."
    },
    {
      question: "What is DNS poisoning?",
      options: ["A type of physical attack", "Corrupting DNS cache to redirect traffic", "A password cracking method", "A vulnerability scanning technique"],
      answer: "B",
      explanation: "DNS poisoning (or cache poisoning) involves corrupting DNS cache entries to redirect users to malicious websites."
    },
    {
      question: "What is a promiscuous mode?",
      options: ["A security setting", "A network interface mode that captures all traffic", "A type of firewall", "A vulnerability scanning mode"],
      answer: "B",
      explanation: "Promiscuous mode allows a network interface to capture all network traffic, not just traffic addressed to it, which is useful for network analysis."
    },
    {
      question: "What is the purpose of a network tap?",
      options: ["To connect to a network", "To intercept and monitor network traffic", "To scan for vulnerabilities", "To encrypt data"],
      answer: "B",
      explanation: "A network tap is a device that provides a way to access data flowing across a computer network for monitoring and analysis purposes."
    },
    {
      question: "What is a Man-in-the-Middle (MITM) attack?",
      options: ["A type of DDoS attack", "Intercepting communication between two parties", "A password cracking method", "A vulnerability scanning technique"],
      answer: "B",
      explanation: "A MITM attack involves an attacker secretly intercepting and possibly altering communication between two parties who believe they are communicating directly."
    },
    {
      question: "What is the purpose of port mirroring?",
      options: ["To scan for open ports", "To copy network traffic to a monitoring port", "To encrypt data", "To perform denial of service"],
      answer: "B",
      explanation: "Port mirroring copies network traffic from one switch port to another, allowing monitoring and analysis of network traffic."
    },
    {
      question: "What is a network sniffer?",
      options: ["A type of malware", "Software or hardware that captures network packets", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "A network sniffer is a tool that captures and analyzes network packets, which can be used for legitimate network troubleshooting or malicious purposes."
    }
  ],
  "09": [
    {
      question: "What is phishing?",
      options: ["A physical attack", "A fraudulent attempt to obtain sensitive information via electronic communication", "A type of DDoS attack", "A vulnerability scanning technique"],
      answer: "B",
      explanation: "Phishing is a social engineering attack that uses fraudulent emails or websites to trick users into revealing sensitive information."
    },
    {
      question: "What is pretexting?",
      options: ["A type of malware", "Creating a fabricated scenario to obtain information", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "Pretexting involves creating a false scenario or story to trick someone into revealing information or performing actions."
    },
    {
      question: "What is tailgating?",
      options: ["A type of phishing", "Following an authorized person into a restricted area", "A password cracking method", "A network attack"],
      answer: "B",
      explanation: "Tailgating (or piggybacking) involves following an authorized person into a restricted area without proper authentication."
    },
    {
      question: "What is vishing?",
      options: ["A type of email attack", "Voice-based phishing over the phone", "A network scanning technique", "A vulnerability exploitation"],
      answer: "B",
      explanation: "Vishing (voice phishing) is the phone-based equivalent of phishing, where attackers use phone calls to trick victims into revealing information."
    },
    {
      question: "What is the purpose of a social engineering attack?",
      options: ["To scan for vulnerabilities", "To manipulate people into divulging confidential information", "To encrypt data", "To monitor network traffic"],
      answer: "B",
      explanation: "Social engineering attacks exploit human psychology to manipulate people into breaking security procedures or revealing sensitive information."
    },
    {
      question: "What is spear phishing?",
      options: ["A type of DDoS attack", "A targeted phishing attack aimed at specific individuals", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "Spear phishing is a targeted form of phishing that focuses on specific individuals or organizations, often using personalized messages."
    },
    {
      question: "What is an insider threat?",
      options: ["A type of malware", "A security risk from within the organization", "A network attack", "A vulnerability scanning technique"],
      answer: "B",
      explanation: "An insider threat comes from individuals within the organization who have legitimate access but misuse their privileges."
    },
    {
      question: "What is baiting?",
      options: ["A type of phishing", "Leaving infected media devices for victims to find", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "Baiting involves leaving infected USB drives or other media devices in locations where potential victims might find and use them."
    },
    {
      question: "What is quid pro quo?",
      options: ["A type of malware", "Offering a service in exchange for information", "A password cracking method", "A network attack"],
      answer: "B",
      explanation: "Quid pro quo attacks involve offering something of value in exchange for information or access, such as fake tech support."
    },
    {
      question: "What is the best defense against social engineering?",
      options: ["Installing antivirus", "Security awareness training", "Using a firewall", "Encrypting data"],
      answer: "B",
      explanation: "Security awareness training is the most effective defense against social engineering as it teaches employees to recognize and respond to attacks."
    }
  ],
  "10": [
    {
      question: "What is a DDoS attack?",
      options: ["A type of phishing", "Distributed Denial of Service - overwhelming a target with traffic from multiple sources", "A password cracking method", "A vulnerability scanning technique"],
      answer: "B",
      explanation: "A DDoS attack overwhelms a target system with traffic from multiple distributed sources, making it unavailable to legitimate users."
    },
    {
      question: "What is a SYN flood attack?",
      options: ["A type of DDoS that exploits TCP handshake", "A phishing attack", "A password cracking method", "A vulnerability scanning technique"],
      answer: "A",
      explanation: "A SYN flood exploits the TCP three-way handshake by sending numerous SYN requests without completing the handshake, exhausting server resources."
    },
    {
      question: "What is a botnet?",
      options: ["A type of firewall", "A network of compromised computers used for attacks", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "A botnet is a network of infected computers controlled by an attacker, often used to launch DDoS attacks."
    },
    {
      question: "What is amplification in DDoS attacks?",
      options: ["Reducing traffic", "Using third-party servers to amplify attack traffic", "Encrypting data", "Scanning for vulnerabilities"],
      answer: "B",
      explanation: "Amplification attacks use third-party servers to magnify the volume of traffic directed at a target, making the attack more powerful."
    },
    {
      question: "What is Slowloris?",
      options: ["A type of virus", "A DDoS tool that keeps connections open", "A password cracker", "A vulnerability scanner"],
      answer: "B",
      explanation: "Slowloris is a DDoS tool that keeps many connections to the target web server open and holds them open as long as possible."
    },
    {
      question: "What is a SYN-ACK flood?",
      options: ["A type of phishing", "A DDoS attack targeting the SYN-ACK stage", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "A SYN-ACK flood targets the second step of the TCP handshake, overwhelming the server with SYN-ACK responses."
    },
    {
      question: "What is the purpose of a DNS amplification attack?",
      options: ["To encrypt DNS queries", "To amplify DNS responses to overwhelm a target", "To scan for vulnerabilities", "To crack passwords"],
      answer: "B",
      explanation: "DNS amplification uses small queries to DNS servers that generate much larger responses directed at the target, amplifying the attack volume."
    },
    {
      question: "What is a teardrop attack?",
      options: ["A type of phishing", "A DDoS attack that exploits IP fragmentation", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "A teardrop attack sends fragmented packets to a target, exploiting vulnerabilities in the reassembly process to crash the system."
    },
    {
      question: "What is the best defense against DDoS attacks?",
      options: ["Installing antivirus", "Using rate limiting and traffic filtering", "Encrypting data", "Using strong passwords"],
      answer: "B",
      explanation: "Rate limiting, traffic filtering, and DDoS mitigation services are effective defenses against DDoS attacks."
    },
    {
      question: "What is a ping of death?",
      options: ["A type of phishing", "A DDoS attack using malformed ping packets", "A password cracking method", "A vulnerability scanning technique"],
      answer: "B",
      explanation: "A ping of death sends malformed or oversized ping packets to crash or destabilize the target system."
    }
  ],
  "11": [
    {
      question: "What is session hijacking?",
      options: ["A type of DDoS attack", "Taking over an active session between two parties", "A password cracking method", "A vulnerability scanning technique"],
      answer: "B",
      explanation: "Session hijacking involves an attacker taking control of a legitimate user's session after authentication."
    },
    {
      question: "What is XSS (Cross-Site Scripting)?",
      options: ["A type of SQL injection", "Injecting malicious scripts into web pages", "A network scanning technique", "A password cracking method"],
      answer: "B",
      explanation: "XSS involves injecting malicious scripts into web pages viewed by other users, potentially stealing session cookies or other sensitive data."
    },
    {
      question: "What is CSRF (Cross-Site Request Forgery)?",
      options: ["A type of XSS", "Forcing a user to execute unwanted actions on a web application", "A network scanning technique", "A password cracking method"],
      answer: "B",
      explanation: "CSRF tricks a user into executing unwanted actions on a web application where they are authenticated, potentially changing settings or transferring funds."
    },
    {
      question: "What is TCP session hijacking?",
      options: ["A type of DDoS attack", "Predicting TCP sequence numbers to take over a connection", "A password cracking method", "A vulnerability scanning technique"],
      answer: "B",
      explanation: "TCP session hijacking involves predicting TCP sequence numbers to inject data or take control of an established TCP connection."
    },
    {
      question: "What is a session token?",
      options: ["A type of malware", "A unique identifier for a user session", "A password", "A network packet"],
      answer: "B",
      explanation: "A session token is a unique identifier generated by a server to identify a specific user session."
    },
    {
      question: "What is the purpose of session fixation?",
      options: ["To fix session errors", "To set a user's session ID before authentication", "To encrypt sessions", "To monitor sessions"],
      answer: "B",
      explanation: "Session fixation involves an attacker setting a user's session ID before authentication, allowing the attacker to hijack the session after login."
    },
    {
      question: "What is RST hijacking?",
      options: ["A type of DDoS attack", "Injecting a reset packet to terminate a connection", "A password cracking method", "A vulnerability scanning technique"],
      answer: "B",
      explanation: "RST hijacking involves injecting a TCP reset packet to terminate an active connection between two parties."
    },
    {
      question: "What is a cookie poisoning attack?",
      options: ["A type of malware", "Modifying cookie data to manipulate user behavior", "A network scanning technique", "A password cracking method"],
      answer: "B",
      explanation: "Cookie poisoning involves modifying cookie data to manipulate a user's session or gain unauthorized access."
    },
    {
      question: "What is the best defense against session hijacking?",
      options: ["Installing antivirus", "Using HTTPS and secure session management", "Encrypting data", "Using strong passwords"],
      answer: "B",
      explanation: "Using HTTPS, secure cookie attributes, and proper session management practices are the best defenses against session hijacking."
    },
    {
      question: "What is sidejacking?",
      options: ["A type of DDoS attack", "Sniffing session cookies from unencrypted traffic", "A password cracking method", "A vulnerability scanning technique"],
      answer: "B",
      explanation: "Sidejacking involves sniffing network traffic to capture session cookies from unencrypted HTTP connections."
    }
  ],
  "12": [
    {
      question: "What is an IDS?",
      options: ["A type of firewall", "Intrusion Detection System - monitors network for suspicious activity", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "An IDS (Intrusion Detection System) monitors network traffic or system activities for malicious activity or policy violations."
    },
    {
      question: "What is the difference between IDS and IPS?",
      options: ["There is no difference", "IDS detects, IPS detects and prevents", "IPS is older technology", "IDS is more accurate"],
      answer: "B",
      explanation: "IDS detects and alerts on suspicious activity, while IPS (Intrusion Prevention System) can also automatically block or prevent the detected threats."
    },
    {
      question: "What is a honeypot?",
      options: ["A type of malware", "A decoy system designed to attract and trap attackers", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "A honeypot is a decoy system designed to look like a legitimate target to attract, detect, and analyze attacks."
    },
    {
      question: "What is firewall evasion?",
      options: ["A type of DDoS attack", "Techniques to bypass firewall security controls", "A password cracking method", "A vulnerability scanning technique"],
      answer: "B",
      explanation: "Firewall evasion involves techniques to bypass or circumvent firewall security controls to gain unauthorized access."
    },
    {
      question: "What is packet fragmentation?",
      options: ["A type of DDoS attack", "Breaking packets into smaller pieces to evade detection", "A password cracking method", "A vulnerability scanning technique"],
      answer: "B",
      explanation: "Packet fragmentation involves breaking packets into smaller pieces to evade IDS/IPS detection or to exploit vulnerabilities in packet reassembly."
    },
    {
      question: "What is a false positive in IDS?",
      options: ["A successful attack", "A legitimate activity incorrectly flagged as malicious", "A missed attack", "A system crash"],
      answer: "B",
      explanation: "A false positive occurs when an IDS incorrectly identifies legitimate activity as malicious, potentially causing unnecessary alerts."
    },
    {
      question: "What is tunneling in the context of evasion?",
      options: ["A type of DDoS attack", "Encapsulating one protocol within another to bypass security", "A password cracking method", "A vulnerability scanning technique"],
      answer: "B",
      explanation: "Tunneling involves encapsulating one protocol within another to bypass firewall rules and evade security controls."
    },
    {
      question: "What is a firewall rule?",
      options: ["A type of malware", "A rule that determines how traffic is allowed or blocked", "A password cracking method", "A vulnerability scanning technique"],
      answer: "B",
      explanation: "Firewall rules define how network traffic should be filtered, allowing or blocking specific traffic based on defined criteria."
    },
    {
      question: "What is the purpose of network segmentation?",
      options: ["To increase network speed", "To divide a network into segments to limit attack surface", "To encrypt data", "To monitor traffic"],
      answer: "B",
      explanation: "Network segmentation divides a network into smaller segments to limit the spread of attacks and reduce the attack surface."
    },
    {
      question: "What is a UTM device?",
      options: ["A type of malware", "Unified Threat Management - all-in-one security appliance", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "A UTM (Unified Threat Management) device is an all-in-one security appliance that provides multiple security features in a single device."
    }
  ],
  "13": [
    {
      question: "What is directory traversal?",
      options: ["A type of DDoS attack", "Accessing files outside the web root directory", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "Directory traversal (or path traversal) allows attackers to access files outside the intended web root directory by manipulating file paths."
    },
    {
      question: "What is HTTP response splitting?",
      options: ["A type of DDoS attack", "Injecting content into HTTP responses", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "HTTP response splitting involves injecting content into HTTP responses, potentially enabling XSS or cache poisoning attacks."
    },
    {
      question: "What is a web server?",
      options: ["A type of firewall", "Software that serves web content to clients", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "A web server is software that handles HTTP requests and serves web content (HTML, images, etc.) to clients (browsers)."
    },
    {
      question: "What is Apache Tomcat?",
      options: ["A type of firewall", "A web server and servlet container", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "Apache Tomcat is an open-source web server and servlet container that runs Java web applications."
    },
    {
      question: "What is IIS?",
      options: ["A type of malware", "Microsoft's web server software", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "IIS (Internet Information Services) is Microsoft's web server software included with Windows Server operating systems."
    },
    {
      question: "What is a web server misconfiguration?",
      options: ["A type of malware", "Incorrect settings that create security vulnerabilities", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "Web server misconfiguration refers to incorrect settings that can create security vulnerabilities, such as default credentials or unnecessary services."
    },
    {
      question: "What is DNS rebinding?",
      options: ["A type of DDoS attack", "An attack that changes DNS records to point to attacker-controlled servers", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "DNS rebinding attacks manipulate DNS responses to redirect traffic from legitimate servers to attacker-controlled servers."
    },
    {
      question: "What is the purpose of a web application firewall (WAF)?",
      options: ["To scan for vulnerabilities", "To filter and monitor HTTP traffic to web applications", "To encrypt data", "To crack passwords"],
      answer: "B",
      explanation: "A WAF filters and monitors HTTP traffic between a web application and the Internet, protecting against web-based attacks."
    },
    {
      question: "What is a buffer overflow attack?",
      options: ["A type of DDoS attack", "Writing data beyond buffer boundaries to execute code", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "A buffer overflow writes more data than a buffer can hold, potentially overwriting adjacent memory to execute malicious code."
    },
    {
      question: "What is a web shell?",
      options: ["A type of firewall", "A script placed on a web server for remote access", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "A web shell is a malicious script uploaded to a web server that provides remote access and control to attackers."
    }
  ],
  "14": [
    {
      question: "What is OWASP?",
      options: ["A type of firewall", "Open Web Application Security Project", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "OWASP (Open Web Application Security Project) is a nonprofit foundation that works to improve software security through community-led open-source projects."
    },
    {
      question: "What is the OWASP Top 10?",
      options: ["A list of the most dangerous hackers", "A standard awareness document for web application security risks", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "The OWASP Top 10 is a standard awareness document representing a broad consensus about the most critical security risks to web applications."
    },
    {
      question: "What is a web application?",
      options: ["A type of firewall", "An application accessed through a web browser", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "A web application is an application that runs on a web server and is accessed through a web browser over HTTP/HTTPS."
    },
    {
      question: "What is the difference between authentication and authorization?",
      options: ["There is no difference", "Authentication verifies identity, authorization determines access rights", "Authorization is more important", "Authentication is always done first"],
      answer: "B",
      explanation: "Authentication verifies who you are, while authorization determines what you are allowed to do after authentication."
    },
    {
      question: "What is a session management vulnerability?",
      options: ["A type of DDoS attack", "Weaknesses in how sessions are created and managed", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "Session management vulnerabilities involve weaknesses in how applications create, manage, and destroy user sessions."
    },
    {
      question: "What is an insecure deserialization vulnerability?",
      options: ["A type of DDoS attack", "Exploiting flaws in how objects are serialized/deserialized", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "Insecure deserialization occurs when an application deserializes untrusted data without proper validation, potentially leading to remote code execution."
    },
    {
      question: "What is a broken access control vulnerability?",
      options: ["A type of DDoS attack", "Restrictions on what authenticated users can do are not properly enforced", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "Broken access control occurs when restrictions on what authenticated users can do are not properly enforced, allowing unauthorized actions."
    },
    {
      question: "What is security misconfiguration?",
      options: ["A type of malware", "Improperly configured security settings", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "Security misconfiguration occurs when security settings are not properly configured, leaving systems vulnerable to attack."
    },
    {
      question: "What is a web application penetration test?",
      options: ["Installing security software", "Testing a web application for vulnerabilities", "Scanning for viruses", "Monitoring network traffic"],
      answer: "B",
      explanation: "A web application penetration test systematically tests a web application for vulnerabilities that could be exploited by attackers."
    },
    {
      question: "What is the purpose of Burp Suite?",
      options: ["To crack passwords", "To perform web application security testing", "To scan for network vulnerabilities", "To encrypt data"],
      answer: "B",
      explanation: "Burp Suite is an integrated platform for performing security testing of web applications, including scanning, crawling, and exploitation."
    }
  ],
  "15": [
    {
      question: "What is SQL injection?",
      options: ["A type of DDoS attack", "Inserting malicious SQL code into queries", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "SQL injection involves inserting malicious SQL code into application queries to manipulate the database and extract or modify data."
    },
    {
      question: "What is the difference between in-band and out-of-band SQLi?",
      options: ["There is no difference", "In-band uses same channel, out-of-band uses different channel", "Out-of-band is faster", "In-band is more dangerous"],
      answer: "B",
      explanation: "In-band SQLi uses the same communication channel for attack and data retrieval, while out-of-band SQLi uses a different channel."
    },
    {
      question: "What is blind SQL injection?",
      options: ["A type of DDoS attack", "SQLi where no direct output is returned", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "Blind SQL injection occurs when the application doesn't return SQL errors or data directly, requiring inferential techniques to extract information."
    },
    {
      question: "What is SQLmap?",
      options: ["A type of firewall", "An automated SQL injection tool", "A password cracking tool", "A network analyzer"],
      answer: "B",
      explanation: "SQLmap is an open-source penetration testing tool that automates the detection and exploitation of SQL injection vulnerabilities."
    },
    {
      question: "What is union-based SQL injection?",
      options: ["A type of DDoS attack", "Using UNION SQL operator to combine results", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "Union-based SQL injection uses the UNION SQL operator to combine the results of the original query with results from injected queries."
    },
    {
      question: "What is error-based SQL injection?",
      options: ["A type of DDoS attack", "Using database error messages to extract information", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "Error-based SQL injection exploits database error messages to extract information about the database structure and data."
    },
    {
      question: "What is the purpose of input validation?",
      options: ["To scan for vulnerabilities", "To ensure user input meets expected criteria", "To encrypt data", "To monitor network traffic"],
      answer: "B",
      explanation: "Input validation ensures that user input meets expected criteria, preventing malicious data from being processed by the application."
    },
    {
      question: "What is a parameterized query?",
      options: ["A type of DDoS attack", "Using placeholders for user input to prevent SQLi", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "Parameterized queries use placeholders for user input, preventing SQL injection by separating SQL code from data."
    },
    {
      question: "What is second-order SQL injection?",
      options: ["A type of DDoS attack", "SQLi that stores malicious data for later execution", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "Second-order SQL injection stores malicious SQL code in the database, which is executed later when retrieved and used in queries."
    },
    {
      question: "What is SQL firewall?",
      options: ["A type of malware", "A security control that filters SQL queries", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "A SQL firewall filters and monitors SQL queries to prevent SQL injection attacks by blocking malicious queries."
    }
  ],
  "16": [
    {
      question: "What is the difference between WEP and WPA?",
      options: ["There is no difference", "WPA is more secure than WEP", "WEP is newer", "WPA is easier to crack"],
      answer: "B",
      explanation: "WPA (Wi-Fi Protected Access) is more secure than WEP (Wired Equivalent Privacy) and uses stronger encryption methods."
    },
    {
      question: "What is a rogue access point?",
      options: ["A type of firewall", "An unauthorized access point on a network", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "A rogue access point is an unauthorized wireless access point installed on a network, potentially allowing attackers to intercept traffic."
    },
    {
      question: "What is an evil twin attack?",
      options: ["A type of DDoS attack", "A fake access point mimicking a legitimate one", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "An evil twin attack involves setting up a fake wireless access point that appears legitimate to trick users into connecting."
    },
    {
      question: "What is Aircrack-ng?",
      options: ["A type of firewall", "A wireless network security tool", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "Aircrack-ng is a suite of tools for assessing WiFi network security, including monitoring, attacking, testing, and cracking."
    },
    {
      question: "What is the difference between WPA2 and WPA3?",
      options: ["There is no difference", "WPA3 provides stronger security than WPA2", "WPA2 is newer", "WPA3 is easier to implement"],
      answer: "B",
      explanation: "WPA3 provides stronger security than WPA2 with features like SAE (Simultaneous Authentication of Equals) and improved encryption."
    },
    {
      question: "What is a wireless deauthentication attack?",
      options: ["A type of DDoS attack", "Forcing clients to disconnect from a wireless network", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "A deauthentication attack sends forged deauthentication frames to disconnect clients from a wireless network."
    },
    {
      question: "What is WPS (Wi-Fi Protected Setup)?",
      options: ["A type of malware", "A simplified wireless connection method", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "WPS is a simplified method for connecting devices to a wireless network, but it has known vulnerabilities that can be exploited."
    },
    {
      question: "What is a wireless packet capture?",
      options: ["A type of DDoS attack", "Capturing wireless network packets for analysis", "A password cracking method", "A vulnerability scanning technique"],
      answer: "B",
      explanation: "Wireless packet capture involves capturing and analyzing wireless network packets for security assessment or troubleshooting."
    },
    {
      question: "What is a WLAN?",
      options: ["A type of firewall", "Wireless Local Area Network", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "A WLAN (Wireless Local Area Network) is a computer network that links two or more devices using wireless communication."
    },
    {
      question: "What is the purpose of a wireless IDS?",
      options: ["To crack passwords", "To detect and prevent wireless network attacks", "To encrypt data", "To monitor wired traffic"],
      answer: "B",
      explanation: "A wireless IDS (Intrusion Detection System) monitors wireless networks for unauthorized access and attacks."
    }
  ],
  "17": [
    {
      question: "What is mobile device management (MDM)?",
      options: ["A type of malware", "Software for managing and securing mobile devices", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "MDM (Mobile Device Management) is software that allows organizations to manage, monitor, and secure mobile devices."
    },
    {
      question: "What is BYOD?",
      options: ["A type of firewall", "Bring Your Own Device - personal devices used for work", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "BYOD (Bring Your Own Device) is a policy that allows employees to use their personal devices for work purposes."
    },
    {
      question: "What is the OWASP Mobile Top 10?",
      options: ["A list of mobile hackers", "A standard document for mobile application security risks", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "The OWASP Mobile Top 10 is a standard awareness document for the most critical mobile application security risks."
    },
    {
      question: "What is Android rooting?",
      options: ["A type of malware", "Gaining root access on Android devices", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "Android rooting is the process of gaining root (administrator) access on Android devices, allowing modification of system settings."
    },
    {
      question: "What is iOS jailbreaking?",
      options: ["A type of malware", "Removing software restrictions on iOS devices", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "iOS jailbreaking removes software restrictions imposed by Apple, allowing installation of unauthorized applications."
    },
    {
      question: "What is a mobile malware?",
      options: ["A type of firewall", "Malicious software designed for mobile devices", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "Mobile malware is malicious software specifically designed to attack mobile devices like smartphones and tablets."
    },
    {
      question: "What is mobile device encryption?",
      options: ["A type of DDoS attack", "Encrypting data stored on mobile devices", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "Mobile device encryption protects data stored on mobile devices by encrypting it, making it unreadable without the proper key."
    },
    {
      question: "What is a mobile application vulnerability?",
      options: ["A type of DDoS attack", "A weakness in a mobile app that can be exploited", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "A mobile application vulnerability is a security flaw in a mobile app that could be exploited by attackers."
    },
    {
      question: "What is mobile device provisioning?",
      options: ["A type of malware", "Configuring mobile devices with required settings", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "Mobile device provisioning is the process of configuring mobile devices with the necessary settings, applications, and policies."
    },
    {
      question: "What is mobile forensic analysis?",
      options: ["A type of DDoS attack", "Examining mobile devices for evidence", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "Mobile forensic analysis involves examining mobile devices to extract and analyze digital evidence for investigation purposes."
    }
  ],
  "18": [
    {
      question: "What is IoT?",
      options: ["A type of firewall", "Internet of Things - network of connected physical devices", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "IoT (Internet of Things) refers to the network of physical devices embedded with sensors and software that connect and exchange data."
    },
    {
      question: "What is SCADA?",
      options: ["A type of malware", "Supervisory Control and Data Acquisition - industrial control systems", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "SCADA is a system of software and hardware elements that allows industrial organizations to control industrial processes locally or remotely."
    },
    {
      question: "What is an IoT vulnerability?",
      options: ["A type of DDoS attack", "A weakness in IoT devices that can be exploited", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "An IoT vulnerability is a security flaw in IoT devices or their firmware that could be exploited by attackers."
    },
    {
      question: "What is the purpose of IoT device hardening?",
      options: ["To scan for vulnerabilities", "To secure IoT devices by reducing attack surface", "To encrypt data", "To monitor network traffic"],
      answer: "B",
      explanation: "IoT device hardening involves securing IoT devices by disabling unnecessary services, changing default credentials, and applying security configurations."
    },
    {
      question: "What is an ICS (Industrial Control System)?",
      options: ["A type of malware", "Control systems used in industrial settings", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "ICS (Industrial Control Systems) are control systems used in industrial settings to manage critical infrastructure like power plants and water treatment."
    },
    {
      question: "What is an IoT botnet?",
      options: ["A type of firewall", "A network of compromised IoT devices", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "An IoT botnet is a network of compromised IoT devices (like cameras and routers) controlled by attackers for DDoS attacks."
    },
    {
      question: "What is the Mirai botnet?",
      options: ["A type of firewall", "A famous IoT botnet that infected millions of devices", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "Mirai is a notorious IoT botnet that infected millions of IoT devices and was used to launch massive DDoS attacks."
    },
    {
      question: "What is OT (Operational Technology)?",
      options: ["A type of malware", "Hardware and software that detects or causes changes through monitoring", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "OT (Operational Technology) refers to hardware and software that detects or causes changes through direct monitoring and control of physical devices."
    },
    {
      question: "What is the difference between IT and OT security?",
      options: ["There is no difference", "IT focuses on data, OT focuses on physical processes", "OT is less important", "IT is more complex"],
      answer: "B",
      explanation: "IT security focuses on protecting data and information systems, while OT security focuses on protecting physical processes and industrial systems."
    },
    {
      question: "What is IoT device fingerprinting?",
      options: ["A type of DDoS attack", "Identifying IoT devices by their characteristics", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "IoT device fingerprinting identifies and classifies IoT devices based on their unique characteristics and behaviors on a network."
    }
  ],
  "19": [
    {
      question: "What is cloud computing?",
      options: ["A type of firewall", "On-demand delivery of computing services over the internet", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "Cloud computing is the on-demand delivery of computing power, database storage, applications, and other IT resources over the internet."
    },
    {
      question: "What is the difference between IaaS, PaaS, and SaaS?",
      options: ["There is no difference", "IaaS provides infrastructure, PaaS provides platform, SaaS provides software", "SaaS is the most flexible", "IaaS is the easiest to use"],
      answer: "B",
      explanation: "IaaS provides virtualized computing resources, PaaS provides a platform for development, and SaaS delivers software applications over the internet."
    },
    {
      question: "What is a cloud security risk?",
      options: ["A type of DDoS attack", "A threat to cloud computing environments", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "Cloud security risks are threats specific to cloud computing environments, such as data breaches, misconfigurations, and account hijacking."
    },
    {
      question: "What is a cloud access security broker (CASB)?",
      options: ["A type of malware", "A security policy enforcement point for cloud services", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "A CASB is a security policy enforcement point that sits between cloud service consumers and cloud service providers to enforce security policies."
    },
    {
      question: "What is container security?",
      options: ["A type of DDoS attack", "Securing containerized applications and their environments", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "Container security involves protecting containerized applications and the infrastructure they run on from vulnerabilities and attacks."
    },
    {
      question: "What is serverless computing?",
      options: ["A type of firewall", "A cloud model where the provider manages server infrastructure", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "Serverless computing is a cloud model where the provider dynamically manages the allocation of machine resources, charging only for actual usage."
    },
    {
      question: "What is cloud penetration testing?",
      options: ["Installing cloud software", "Testing cloud environments for vulnerabilities", "Scanning for viruses", "Monitoring cloud traffic"],
      answer: "B",
      explanation: "Cloud penetration testing systematically tests cloud environments for vulnerabilities that could be exploited by attackers."
    },
    {
      question: "What is a cloud access control?",
      options: ["A type of DDoS attack", "Managing who can access cloud resources", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "Cloud access control defines who can access cloud resources and what they can do with those resources."
    },
    {
      question: "What is cloud encryption?",
      options: ["A type of malware", "Encrypting data stored in or transmitted through cloud services", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "Cloud encryption protects data by encrypting it before it's stored in or transmitted through cloud services."
    },
    {
      question: "What is a cloud security posture management (CSPM)?",
      options: ["A type of DDoS attack", "Automated monitoring of cloud configurations for compliance", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "CSPM tools continuously monitor cloud environments for misconfigurations and compliance violations."
    }
  ],
  "20": [
    {
      question: "What is the difference between symmetric and asymmetric encryption?",
      options: ["There is no difference", "Symmetric uses one key, asymmetric uses two keys", "Asymmetric is slower", "Symmetric is more secure"],
      answer: "B",
      explanation: "Symmetric encryption uses a single key for both encryption and decryption, while asymmetric encryption uses a pair of public and private keys."
    },
    {
      question: "What is a hash function?",
      options: ["A type of encryption", "A function that produces a fixed-size output from variable-size input", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "A hash function takes input data and produces a fixed-size string of bytes, which is typically used for data integrity verification."
    },
    {
      question: "What is PKI?",
      options: ["A type of malware", "Public Key Infrastructure - manages digital certificates", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "PKI (Public Key Infrastructure) is a system that manages digital certificates and public-key encryption for secure communication."
    },
    {
      question: "What is RSA?",
      options: ["A type of firewall", "A widely used asymmetric encryption algorithm", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "RSA is one of the first practical asymmetric encryption algorithms and is widely used for secure data transmission."
    },
    {
      question: "What is the purpose of a digital signature?",
      options: ["To encrypt data", "To verify the authenticity and integrity of a message", "To crack passwords", "To scan for vulnerabilities"],
      answer: "B",
      explanation: "A digital signature verifies the authenticity and integrity of a message, ensuring it was sent by the claimed sender and hasn't been modified."
    },
    {
      question: "What is a digital certificate?",
      options: ["A type of malware", "An electronic document proving ownership of a public key", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "A digital certificate is an electronic document that uses a digital signature to bind a public key with an identity."
    },
    {
      question: "What is the difference between a hash and encryption?",
      options: ["There is no difference", "Hashing is one-way, encryption is two-way", "Encryption is faster", "Hashing is more secure"],
      answer: "B",
      explanation: "Hashing is a one-way function that cannot be reversed, while encryption is a two-way process that can be decrypted with the correct key."
    },
    {
      question: "What is AES?",
      options: ["A type of firewall", "Advanced Encryption Standard - a symmetric encryption algorithm", "A password cracking tool", "A vulnerability scanner"],
      answer: "B",
      explanation: "AES (Advanced Encryption Standard) is a symmetric encryption algorithm widely used for securing sensitive data."
    },
    {
      question: "What is a cryptographic attack?",
      options: ["A type of DDoS attack", "An attack on cryptographic systems to break or weaken security", "A password cracking method", "A network scanning technique"],
      answer: "B",
      explanation: "A cryptographic attack is an attempt to break or weaken cryptographic security, such as brute-force attacks or known-plaintext attacks."
    },
    {
      question: "What is the purpose of a key escrow?",
      options: ["To store public keys", "To hold cryptographic keys for recovery purposes", "To crack passwords", "To scan for vulnerabilities"],
      answer: "B",
      explanation: "Key escrow is an arrangement where cryptographic keys are held in escrow so that a third party can access them under certain conditions."
    }
  ]
};