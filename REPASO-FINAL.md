# Repaso final — CEH v13

> Lo imprescindible de cada módulo en un solo sitio: **lo esencial**, las **trampas de examen** y las **reglas para recordar**. Se genera automáticamente desde las notas: no lo edites a mano, cambia las notas y ejecuta `python scripts/generar_indices.py`.

<!-- toc -->
<details>
<summary><b>Módulos</b></summary>

- [Módulo 01 — Introduction to Ethical Hacking](#módulo-01--introduction-to-ethical-hacking)
- [Módulo 02 — Footprinting and Reconnaissance](#módulo-02--footprinting-and-reconnaissance)
- [Módulo 03 — Scanning Networks](#módulo-03--scanning-networks)
- [Módulo 04 — Enumeration](#módulo-04--enumeration)
- [Módulo 05 — Vulnerability Analysis](#módulo-05--vulnerability-analysis)
- [Módulo 06 — System Hacking](#módulo-06--system-hacking)
- [Módulo 07 — Malware Threats](#módulo-07--malware-threats)
- [Módulo 08 — Sniffing](#módulo-08--sniffing)
- [Módulo 09 — Social Engineering](#módulo-09--social-engineering)
- [Módulo 10 — Denial-of-Service](#módulo-10--denial-of-service)
- [Módulo 11 — Session Hijacking](#módulo-11--session-hijacking)
- [Módulo 12 — Evading IDS, Firewalls, and Honeypots](#módulo-12--evading-ids-firewalls-and-honeypots)
- [Módulo 13 — Hacking Web Servers](#módulo-13--hacking-web-servers)
- [Módulo 14 — Hacking Web Applications](#módulo-14--hacking-web-applications)
- [Módulo 15 — SQL Injection](#módulo-15--sql-injection)
- [Módulo 16 — Hacking Wireless Networks](#módulo-16--hacking-wireless-networks)
- [Módulo 17 — Hacking Mobile Platforms](#módulo-17--hacking-mobile-platforms)
- [Módulo 18 — IoT and OT Hacking](#módulo-18--iot-and-ot-hacking)
- [Módulo 19 — Cloud Computing](#módulo-19--cloud-computing)
- [Módulo 20 — Cryptography](#módulo-20--cryptography)

</details>
<!-- /toc -->

---

## Módulo 01 — Introduction to Ethical Hacking

[Abrir la nota completa](01%20-%20Intro.md)

**Lo esencial**

- **Elements of information security** — 5: Confidentiality, Integrity, Availability, Authenticity, Non-repudiation.
- **Integrity** — se garantiza con **hash functions** (checksums), no con cifrado.
- **ALE = SLE × ARO** — pérdida anual esperada = coste de un incidente × nº de ocurrencias al año.
- **Hacking methodology (5 fases)** — Footprinting → Scanning → Enumeration → Vulnerability Analysis → System Hacking (Gaining Access → Escalating Privileges → Maintaining Access → Clearing Logs).
- **Cyber Kill Chain (7 fases)** — Reconnaissance → Weaponization (se crea el payload) → Delivery → Exploitation → Installation → Command & Control → Actions on Objectives.
- **MITRE ATT&CK** — 14 tactics (de Reconnaissance a Impact); tactic = el porqué (objetivo), technique = el cómo; marco gratuito y sin ánimo de lucro.
- **Diamond Model** — Adversary, Capability, Infrastructure, Victim.
- **Incident Response (9 fases)** — Preparation → Recording and Assignment → Triage → Notification → Containment → Evidence Gathering → Eradication → Recovery → Post-Incident Activity.
- **Tipos de CTI** — Strategic = alto nivel para directivos; Tactical = TTPs para el personal de seguridad; Operational = ataques/campañas concretas próximas (chat rooms, redes sociales, foros); Technical = IoCs para el SOC y sus herramientas.
- **Passive vs Active attack** — passive no modifica nada (sniffing, eavesdropping) y es más difícil de detectar; active altera datos (SQL injection, DDoS).
- **Leyes** — PCI DSS = tarjetas de pago, HIPAA = salud (EE. UU.), SOX = información financiera, DMCA = copyright digital, FISMA = agencias federales de EE. UU. (NIST), DPA 2018 = Reino Unido, ISO/IEC 27001 = ISMS.
- **SIEM (p. ej. Splunk)** — herramienta para detectar y responder a incidentes, no para atacar.

**Trampas de examen**

- _CIA TRIAD — DETAILED_: Integrity se garantiza con **hash functions**, no con cifrado.
- _System Hacking Sub-Steps_: Las herramientas **SIEM** (Security Information and Event Management) como **Splunk** se usan para detectar y responder a incidentes — no para realizar ataques.
- _14 Tactics_: MITRE ATT&CK es un marco de trabajo **gratuito y sin fines de lucro** — no es un producto comercial. Úsalo para mapear el comportamiento de adversarios de forma sistemática.
- _RISK FORMULAS_: El riesgo es multiplicativo — un cero en cualquier factor significa sin riesgo.
- _CTI Types_: "Ataque concreto que se está preparando" o fuentes como chat rooms/redes sociales = **Operational**. TTPs = **Tactical**. IoCs = **Technical**. Visión de alto nivel para directivos = **Strategic**.
- _Comparison_: Incident **Management** es más amplio (identify → improve). Incident **Response** es táctico (contain → recover).
- _ATTACK TYPES_: Los ataques passive = **sin modificación**, más difíciles de detectar. Los ataques active = **datos alterados**, mayor riesgo de ser descubiertos.

**Para recordar**

- _ELEMENTS OF INFORMATION SECURITY_: **CIA + A + N = Can I Always Authenticate? No!**
- _INCIDENT RESPONSE (IR) — 9 PHASES_: **Prep → Record → Triage → Notify → Contain → Evidence → Erase → Recover → Review**
- _CYBER KILL CHAIN — 7 PHASES_: **Recon → Weapon → Deliver → Exploit → Install → C2 → Act**
- _TTPS AND ADVERSARY BEHAVIORAL IDENTIFICATION_: **TTP = cómo piensan (tactics) → qué hacen (techniques) → paso a paso (procedures)**
- _IOC — INDICATORS OF COMPROMISE_: **IoC = pistas que deja el atacante. Revisa: Email → Network → Host → Behavioral**
- _14 Tactics_: **Recon → Resource → Access → Execute → Persist → Escalate → Evade → Credentials → Discover → Move → Collect → C2 → Exfil → Impact**
- _DIAMOND MODEL_: **Diamond = Who + What + Where + Whom**
- _IA Lifecycle_: **Plan → Design → Find → Fund → Fix → Apply → Verify → Train**
- _CTI Lifecycle_: **Direction → Collect → Process → Analyze → Disseminate → Feedback**
- _LAWS AND STANDARDS_: **PCI = Cards, ISO = Framework, HIPAA = Health, SOX = Finance, DMCA = Copyright, FISMA = Federal, DPA = UK**
- _PEN TEST PHASES_: **Prep → Assess → Report**

---

## Módulo 02 — Footprinting and Reconnaissance

[Abrir la nota completa](02%20-%20footprinting%20and%20reconnaissance.md)

**Lo esencial**

- **Passive vs Active reconnaissance** — passive: sin interacción directa (OSINT), no deja rastro; active: interactúa con el objetivo (DNS interrogation, social engineering, port scanning) y puede detectarse.
- **TCP flags** — SYN, ACK, PSH, URG, FIN, RST; handshake SYN → SYN/ACK → ACK; FIN cierra de forma ordenada, RST fuerza el cierre.
- **Google operators** — `site:` (dominio), `intitle:`/`allintitle:`, `inurl:`/`allinurl:`, `cache:`, `link:`, `related:`, `info:`, `location:`; `filetype:pcf` = configuraciones de Cisco VPN.
- **Shodan, Censys, ZoomEye** — motores de búsqueda de dispositivos conectados a Internet (IoT/SCADA).
- **theHarvester** — `-d` dominio, `-b` fuente de datos, `-l` límite de resultados; recolecta emails y subdominios.
- **WHOIS** — Thick = información WHOIS completa; Thin = solo el nombre del servidor WHOIS del registrador.
- **RIRs** — ARIN (Norteamérica), AFRINIC (África), APNIC (Asia-Pacífico), RIPE NCC (Europa, Oriente Medio, Asia Central), LACNIC (Latinoamérica y Caribe).
- **DNS records** — A = IPv4, AAAA = IPv6, MX = correo, NS = name server, CNAME = alias, SOA = autoridad de la zona, PTR = búsqueda inversa, HINFO = hardware/SO, TXT = SPF/DKIM.
- **Port ranges** — well-known 0–1023, registered 1024–49151, dynamic/private 49152–65535; DNS usa 53 TCP y UDP, DHCP 67 UDP.
- **Full connect vs SYN scan** — connect completa el handshake (el más fiable y el más detectable); SYN = half-open/stealth y es el scan por defecto de Nmap con privilegios.
- **XMAS scan / ACK flag probe** — XMAS = FIN + URG + PSH (abierto = sin respuesta, cerrado = RST; no funciona contra Windows); ACK probe: abierto si el RST trae TTL < 64 o Window > 0, y RST de vuelta = sin firewall.
- **Orden del footprinting** — passive primero → OSINT → WHOIS/DNS → port scanning → social engineering → automatizar (Maltego, Recon-ng, FOCA).

**Trampas de examen**

- _TCP FLAGS_: El número de secuencia SYN es aleatorio e incrementa con cada paquete enviado — muchos ataques intentan adivinar este número.
- _UDP — KEY PROTOCOLS_: UDP es connectionless — no hay handshake, no hay entrega garantizada.
- _OBJECTIVE 03 — TYPES OF RECONNAISSANCE_: La passive reconnaissance no deja **ningún rastro** en el objetivo. La active reconnaissance puede ser **detectada**.
- _SCADA / IoT SEARCH ENGINES_: Shodan, Censys y ZoomEye están diseñados específicamente para el **descubrimiento de dispositivos SCADA/IoT**.
- _THEHARVESTER COMMAND EXAMPLES_: **-d** es dominio, **-b** es fuente de datos, **-l** es límite de resultados. No confundas estos flags.
- _TYPES OF WHOIS_: El WHOIS descentralizado significa que cada registrador gestiona sus propios registros de forma independiente.
- _IMPORTANT PORT NUMBERS_: DNS usa **tanto TCP como UDP** en el puerto 53. DHCP usa **UDP** en el puerto 67.
- _PORT SCANNING TECHNIQUES_: El Christmas scan **NO** funciona contra máquinas **Microsoft**.
- _ADDITIONAL SCANNING TOOLS_: Nmap sin opciones ejecuta un **SYN scan** por defecto (si se ejecuta con privilegios root/administrador; sin privilegios usa TCP connect, `-sT`).

**Para recordar**

- _TCP FLAGS_: **SYN → SYN/ACK → ACK → FIN/RST** (three-way handshake + teardown)
- _OBJECTIVE 04 — GOOGLE ADVANCED SEARCH OPERATORS_: **site:domain.com intitle:keyword** — la combinación más común en preguntas de examen.
- _TYPES OF WHOIS_: **Thick = completa, Thin = solo nombre del servidor**
- _REGIONAL INTERNET REGISTRIES (RIRs)_: **ARIN → Américas, AFRINIC → África, APNIC → Asia, RIPE → Europa, LACNIC → América Latina**
- _DNS RECORD TYPES_: **A = IPv4, AAAA = IPv6, MX = correo, NS = nameserver, PTR = inverso**
- _IMPORTANT PORT NUMBERS_: **21=FTP, 22=SSH, 23=Telnet, 25=SMTP, 53=DNS, 80=HTTP, 443=HTTPS** — estos 7 son los favoritos del examen.
- _PORT SCANNING TECHNIQUES_: **Full connect = fiable pero ruidoso, SYN = sigiloso, XMAS = FIN+URG+PSH pero falla en Windows**

---

## Módulo 03 — Scanning Networks

[Abrir la nota completa](03%20-%20Scanning%20networks.md)

**Lo esencial**

- **TCP flags** — SYN inicia, ACK confirma, FIN cierra de forma ordenada, RST fuerza el cierre, PSH fuerza la entrega, URG marca datos prioritarios.
- **Port ranges** — well-known 0–1023, registered 1024–49151, dynamic 49152–65535.
- **`-sS` vs `-sT`** — SYN/stealth/half-open (no completa el handshake, envía RST) vs TCP connect/full open (completa el handshake); abierto = SYN-ACK, cerrado = RST.
- **Xmas / FIN / NULL / Maimon** — `-sX` = FIN+URG+PSH, `-sF` = solo FIN, `-sN` = sin flags, `-sM` = FIN/ACK; abierto = sin respuesta, cerrado = RST; inverse TCP flag scans no funcionan contra Windows.
- **ACK scan (`-sA`)** — no indica abierto/cerrado sino **filtered** (sin respuesta) vs **unfiltered** (RST); detecta firewalls.
- **Idle/IPID scan (`-sI`)** — usa un **zombie** para ocultar al escáner; IPID del zombie +2 = abierto, +1 = cerrado.
- **UDP scan (`-sU`)** — sin respuesta = probablemente abierto; ICMP port unreachable (type 3, code 3) = cerrado.
- **Host discovery (`-sn`)** — `-PR` ARP (solo red local), `-PU` UDP, `-PE` ICMP echo, `-PP` timestamp, `-PM` address mask, `-PS` TCP SYN, `-PA` TCP ACK (puerto 80; atraviesa firewalls), `-PO` IP protocol.
- **Timing templates** — `-T0` Paranoid (el más lento) … `-T3` Normal … `-T5` Insane (el más rápido).
- **TTL por defecto** — Linux/FreeBSD 64, Windows 128, Cisco/Solaris/AIX/OpenBSD 255.
- **Evasión de firewall/IDS** — `-f` fragmentación, `-D` decoy, `-g`/`--source-port` puerto origen, spoofing de IP/MAC, source routing, bad checksums, proxies y anonymizers.
- **Otros switches** — `-sV` versión de servicios, `-O` SO, `-A` aggressive, `-sC`/`--script` NSE, `-oN`/`-oX` salida; hping3: `-1` ICMP, `-2` UDP, `-8` scan, `-9` listen, `--flood`.

**Trampas de examen**

- _PORT SCAN TYPES_: El escaneo IDLE/IPID usa un **host zombie** para ocultar la identidad del escáner.

---

## Módulo 04 — Enumeration

[Abrir la nota completa](04%20-%20Enumeration.md)

**Lo esencial**

- **NetBIOS** — UDP 137 (Name Service), UDP 138 (Datagram Service), TCP 139 (Session Service); no funciona en IPv6.
- **NetBIOS codes** — <00> UNIQUE = hostname, <00> GROUP = dominio, <03> = Messenger service, <20> = Server service, 1B = Domain Master Browser, 1E = browser service elections.
- **nbtstat** — `-A <IP>` tabla NetBIOS remota, `-c` caché de nombres, `-n` tabla local.
- **SNMP** — UDP 161 (agent), 162 (trap); v1 y v2c envían las community strings en texto plano; solo **SNMPv3** ofrece autenticación + cifrado.
- **MIB** — MIB-II = TCP/IP, HOSTMIB = hardware/recursos, LNMIB2 = Windows LAN Manager, WINS.MIB = nombres NetBIOS, DHCP.MIB = DHCP.
- **LDAP** — TCP/UDP 389; LDAPS TCP 636; Global Catalog 3268 (herramientas: ldapsearch, AD Explorer, Softerra).
- **NFS / NTP** — NFS TCP 2049 (`rpcinfo -p`, `showmount`, SuperEnum); NTP UDP 123 (ntptrace, ntpdc, ntpq).
- **SMTP (TCP 25)** — VRFY = verifica si existe el usuario, EXPN = expande una lista de correo, RCPT TO = destinatario; smtp-user-enum.
- **DNS zone transfer (AXFR)** — `dig ns <dominio>` → `dig @<servidor> <dominio> axfr`; también `dnsrecon -t axfr -d <dominio>`.
- **DNS cache snooping** — non-recursive (`dig +norecursive`) vs recursive (se examina el TTL de las entradas en caché).
- **IPsec / VoIP** — IPsec UDP 500 (IKE/ISAKMP) con `ike-scan -M`; SIP 5060/5061 con svmap.
- **SMB (TCP 445) / MS RPC (135)** — `nmap --script smb-protocols` para versiones SMB, `smb2-security-mode` para comprobar la firma de mensajes.

**Trampas de examen**

- _SNMP VERSIONS TABLE_: **v1 = sin seguridad, v2c = sin seguridad (más rápido), v3 = autenticación + cifrado**

**Para recordar**

- _TECHNIQUES OF ENUMERATION_: **Username → Default Pass → AD Brute → DNS Zone → Groups → SNMP Users → SNMP Topology**
- _MANAGEMENT INFORMATION BASE (MIB) TABLE_: **MIB-II = TCP/IP, HOSTMIB = hardware, LNMIB2 = LAN Manager, WINS = NetBIOS, DHCP = DHCP only**

---

## Módulo 05 — Vulnerability Analysis

[Abrir la nota completa](05%20-%20Vulnerability%20analysis.md)

**Lo esencial**

- **CVSS (base score)** — None 0.0 · Low 0.1–3.9 · Medium 4.0–6.9 · High 7.0–8.9 · Critical 9.0–10.0
- **CVE vs NVD vs CWE** — CVE = identificador (diccionario, no base de datos); NVD = base de datos del gobierno de EE.UU. que analiza y puntúa los CVE; CWE = categorías (taxonomía) de debilidades
- **Vulnerability management lifecycle** — 3 fases: Pre-Assessment (Identify Assets, Create Baseline) → Assessment (Vulnerability Scan, Vulnerability Analysis) → Post-Assessment (Risk Assessment, Remediation, Verification, Monitoring)
- **Active vs Passive scanning** — el activo interactúa directamente con el objetivo; el pasivo deduce vulnerabilidades de la información expuesta, sin interacción
- **Credentialed vs Non-credentialed scan** — el credentialed (authenticated) inicia sesión con credenciales válidas; el non-credentialed solo prueba lo visible desde fuera
- **External vs Internal scanning** — desde fuera de la red (firewalls, routers, servidores perimetrales) vs. desde dentro (puertos abiertos, configuración de router/firewall)
- **Zero-Day / TOCTOU / System Sprawl** — vulnerabilidad desconocida para el vendor y sin parche / race condition (Application Flaws) / shadow IT y activos no documentados
- **Product-based vs Service-based solutions** — software o hardware instalado en la propia red vs. servicio ofrecido por terceros (auditoras o consultoras)
- **Cómo trabaja un scanner** — 1) localizar nodos → 2) descubrir servicios y SO → 3) probar vulnerabilidades conocidas
- **Agent-based / Proxy / Cluster scanner** — agentes instalados en los hosts / escanea desde cualquier máquina de la red / dos o más escaneos simultáneos en máquinas distintas
- **Herramientas** — Nessus (Tenable), OpenVAS (open source), Qualys (cloud), GFI LanGuard (incluye patch management), Nikto (servidores web)
- **Vulnerability assessment report** — Executive Summary → Assessment Overview → Findings → Risk Assessment → Recommendations

**Trampas de examen**

- _CVE / NVD / CWE — DEFINITIONS TABLE_: CVE = **identifier** (dictionary), NVD = **database** (analysis), CWE = **category** (weakness taxonomy)

**Para recordar**

- _VULNERABILITY CLASSIFICATION — COMPLETE TABLE_: **Misconfig → Flaws → Patches → Design → Third-Party → Supply → Default → OS → Passwords → Zero-Day → Legacy → Sprawl → Certs**
- _CVSS — COMMON VULNERABILITY SCORING SYSTEM_: **None=0.0, Low=0.1-3.9, Med=4.0-6.9, High=7.0-8.9, Critical=9.0-10.0**
- _VULNERABILITY MANAGEMENT LIFECYCLE_: **Identify → Baseline → Scan → Analyze → Assess Risk → Remediate → Verify → Monitor**
- _TYPES OF VULNERABILITY SCANNING — FULL TABLE_: **External → Internal → Host → Network → App → DB → Wireless → Distributed → Credentialed → Manual → Automated → Cloud → Mobile → Physical → IoT**
- _TYPES OF VULNERABILITY ASSESSMENT TOOLS — FULL TABLE_: **Host → Depth → App → Scope → Active/Passive → Location → Agent → Proxy → Cluster**
- _VULNERABILITY ASSESSMENT REPORT — STRUCTURE_: **Executive → Overview → Findings → Risk → Recommendations**

---

## Módulo 06 — System Hacking

[Abrir la nota completa](06%20-%20System%20hacking.md)

**Lo esencial**

- **SAM** — `%SystemRoot%\system32\config\SAM` (`HKEY_LOCAL_MACHINE\SAM`); guarda solo hashes LM/NTLM, cifrados parcialmente con SYSKEY, y no se puede copiar con Windows en ejecución
- **Kerberos vs NTLM** — Kerberos = secret key cryptography (KDC, AS, TGS): AS → TGT → TGS → Service Ticket → servicio; NTLM = challenge-response; NTLMv2 > LM pero < Kerberos
- **Password cracking types** — Non-electronic (social engineering), Active online, Passive online (no modifica el sistema) y Offline (a partir de un volcado de hashes)
- **LLMNR/NBT-NS poisoning** — se explota con Responder; se detecta con Vindicate, Respounder o got-responder
- **AS-REP Roasting vs Kerberoasting** — AS-REP solo funciona en cuentas SIN Kerberos pre-authentication; Kerberoasting crackea hashes de cuentas de servicio (hashcat)
- **Pass the Hash / Pass the Ticket** — PtH = hash injection del hash comprometido; PtT = robar TGT/ST con Mimikatz; Overpass the Hash (OPtH) extiende ambos
- **Golden vs Silver Ticket** — Golden = TGT falsificado comprometiendo la cuenta del Key Distribution Service; Silver = ticket TGS falsificado (ambos con Mimikatz)
- **Rainbow table attack** — usa hashes precalculados (rtgen, RainbowCrack); se mitiga con **salt**
- **Metasploit modules** — Encoder codifica payloads para evadir AV/IDS (polimorfismo); Evasion modifica su comportamiento; NOPS genera NOP sleds; Auxiliary = acciones puntuales (scan, DoS, fuzzing)
- **Payload types** — Singles (autónomos), Stagers (establecen la conexión atacante-víctima), Stages (descargados por el stager); msfvenom: LHOST = IP del atacante, LPORT por defecto 4444
- **Buffer overflow** — sobrescribir **EIP** = ejecución de código; en Windows: Spiking → Fuzzing → Identify Offset (`pattern_create` / `pattern_offset`)
- **Horizontal vs Vertical privilege escalation** — acceder a recursos de otro usuario con permisos similares vs. obtener privilegios superiores
- **DCSync** — requiere una cuenta con derechos de replicación del dominio; `lsadump::dcsync` de Mimikatz extrae los hashes NTLM
- **Ocultar datos** — NTFS **ADS** (detección: Stream Armor, AlternateStreamView) y **steganography** (SNOW texto, OpenStego imágenes, DeepSound audio, Spam Mimic email)
- **Hiding evidence** — Disable auditing → Clear logs (Meterpreter) → Manipulate logs → Cover tracks → Delete files → Disable Windows functionality; `cipher.exe` para borrar archivos

**Trampas de examen**

- _NTLM Authentication Process_: **NTLMv2 es más fuerte que LM pero aún más débil que Kerberos**
- _KERBEROS ATTACK TECHNIQUES_: **AS-REP Roasting solo funciona en cuentas SIN Kerberos pre-authentication**
- _KERBEROS ATTACK TECHNIQUES_: **NTLM Relay**, **Fingerprint**, **PRINCE** y **Markov Chain** aparecen en esta tabla pero **no son ataques Kerberos**: NTLM Relay ataca NTLM y los otros tres son técnicas de password cracking (active online).
- _x86 REGISTERS (STACK-BASED BUFFER OVERFLOW)_: **EIP es el registro clave — sobrescribir EIP = ejecución de código**

**Para recordar**

- _WINDOWS SAM DATABASE_: **SAM = solo hashes, no se puede copiar mientras Windows está en ejecución, SYSKEY cifra**

---

## Módulo 07 — Malware Threats

[Abrir la nota completa](07%20-%20Malware%20threats.md)

**Lo esencial**

- **Crypter vs Packer vs Obfuscator** — el crypter cifra para ocultar la existencia del malware; el packer lo comprime a un formato ilegible; el obfuscator oculta el código.
- **Dropper vs Downloader** — el dropper es el transporte encubierto que lleva el malware dentro; el downloader descarga malware adicional.
- **PUAs** — grayware/junkware, adware, torrent, marketing, cryptomining y dialers; no siempre se clasifican como malware.
- **APT lifecycle (6 fases)** — Preparation → Initial Intrusion → Expansion → Persistence → Search and Exfiltration → Cleanup.
- **Trojan** — se ejecuta con los mismos privilegios que el usuario; RAT = control remoto; Command Shell Trojan = netcat; Defacement Trojan = Restorator.
- **E-banking Trojans** — TAN Grabber captura el Transaction Authentication Number; Form Grabber intercepta la petición POST completa; HTML Injection crea campos de formulario falsos.
- **Infección con Trojan** — trojan (njRAT) → dropper/downloader (Amadey) → wrapper (IExpress: app legítima en primer plano, trojan en segundo plano) → crypter → despliegue → damage routine.
- **Polymorphic vs Metamorphic** — polymorphic muta el código pero conserva la funcionalidad; metamorphic se reescribe por completo en cada infección.
- **Tipos de virus clave** — Multipartite (archivo + boot record), Macro (VBA), Sparse Infector (cada n ejecuciones), Cavity (zonas nulas, sin aumentar tamaño), Armored (anti-debugging), TSR (residente en memoria).
- **Fileless malware (non-malware)** — reside en RAM y usa LOL (Living off the Land: PowerShell, WMI, macros); Type 1 sin archivos, Type 2 actividad indirecta (repositorio WMI), Type 3 requiere archivos.
- **BotenaGo** — exploit kit escrito en Go; hasta 33 vulnerabilidades; lanza Mirai; puertos 31412/19412.
- **AI-based malware** — FakeGPT (extensión de Chrome), WormGPT (emails), FraudGPT (cracking tools), BlackMamba (polimórfico con LLM); GANs para generar malware.
- **Sheep Dip** — análisis de archivos y mensajes sospechosos en un entorno controlado.
- **Static vs Dynamic analysis** — estático sin ejecutar (strings/FLOSS, hashes, PEiD/DIE, Ghidra/IDA); dinámico ejecutando la muestra (Process Explorer, Regshot, TCPView, Wireshark).
- **Virus detection methods** — Scanning (firmas), Integrity Checking, Interception, Code Emulation (sandbox), Heuristic Analysis.

**Trampas de examen**

- _POTENTIALLY UNWANTED APPLICATIONS (PUAs)_: Las PUAs **no siempre se clasifican como malware** pero conllevan riesgos de seguridad/privacidad.
- _E-BANKING TROJAN TYPES_: **TAN grabber ≠ form grabber** — TAN captura el número de autenticación; form grabber captura los datos completos de la solicitud POST.

**Para recordar**

- _MALWARE COMPONENTS_: **Crypt-Drop-Down-Exploit-Inject-Obfusc-Pack-Payload-Malice**
- _APT — CHARACTERISTICS (14)_: **Objectives → Timeliness → Resources → Risk → Skills → Actions → Points → Numbers → Knowledge → Multi-Phased → Tailored → Multiple Entries → Evasion → Signs → Targeted → Long-Term → Advanced → Complex C2**
- _APT LIFECYCLE (6 PHASES)_: **Prepare → Intrude → Expand → Persist → Exfiltrate → Clean**
- _TROJAN TYPES_: **RAT → Backdoor → Botnet → Rootkit → E-Banking → POS → Defacement → Protocol → Mobile → IoT → Disable → Destroy → DDoS → Shell**
- _EXPLOIT KITS_: **BotenaGo = Go + Mirai + 33 vulns + ports 31412/19412**
- _TYPES OF VIRUSES_: **Boot → File → Multi → Macro → Cluster → Stealth → Encrypt → Sparse → Poly → Meta → Overwrite → Companion → Shell → Extension → FAT → Logic Bomb → Web → Email → Armored → Add-on → Intrusive → Direct Action → TSR**
- _AI-BASED MALWARE EXAMPLES_: **FakeGPT → WormGPT → FraudGPT → BlackMamba = AI malware evolution**

---

## Módulo 08 — Sniffing

[Abrir la nota completa](08%20-%20Network%20sniffing.md)

**Lo esencial**

- **Promiscuous mode** — la NIC captura todas las tramas sin importar la MAC de destino; sin otros ataques, solo sirve en shared Ethernet (hub).
- **Passive vs Active sniffing** — passive no envía paquetes, es indetectable y funciona en hubs; active inyecta tráfico, es detectable y funciona en redes con switches.
- **MAC flooding** — `macof -i eth0` llena la tabla CAM y el switch se comporta como un hub (difunde todo); defensa: port security.
- **ARP spoofing/poisoning** — ARP es stateless (acepta respuestas no solicitadas); asocia la MAC del atacante a la IP de otro host → MITM; herramientas arpspoof, Habu; defensa: Dynamic ARP Inspection (DAI).
- **VLAN hopping** — switch spoofing (defensa: puertos access y sin negociación de trunk) vs double tagging (dos etiquetas 802.1Q; defensa: VLAN por defecto en un VLAN ID sin usar).
- **STP attack** — un rogue switch con prioridad más baja se convierte en root bridge; defensa: BPDU Guard, Root Guard, Loop Guard, UDLD.
- **DHCP starvation vs Rogue DHCP server** — starvation agota el pool (Yersinia, Hyenae; defensa: port security); rogue server = MITM como puerta de enlace falsa (defensa: DHCP snooping).
- **DNS poisoning** — Intranet (vía ARP poisoning), Internet (rogue DNS + Trojan), Proxy Server, DNS Cache Poisoning, SAD DNS; defensa: DNSSEC.
- **SPAN port** — Switched Port Analyzer de Cisco = port mirroring; no es una herramienta de sniffing.
- **Wireshark** — `http.request` = peticiones HTTP GET; `tcp.flags.reset == 1` = TCP resets; `tcp.analysis.retransmission` = retransmisiones.
- **Protocolos vulnerables** — Telnet, Rlogin, HTTP, SNMP, SMTP, NNTP, POP, FTP, IMAP, TFTP: transmiten en texto claro.
- **Detección de sniffers** — Ping method (MAC incorrecta), ARP method (ARP non-broadcast), DNS method (reverse DNS lookups); `nmap --script=sniffer-detect`.

**Trampas de examen**

- _PROMISCUOUS MODE_: El modo promiscuo captura todos los paquetes **independientemente de la MAC de destino**.
- _MAC FLOODING_: MAC flooding convierte un **switch en un hub**.
- _SPAN PORT_: SPAN = **port mirroring**, no es una herramienta de sniffing en sí.

**Para recordar**

- _PACKET SNIFFING — CORE DEFINITION_: **Sniffing = captura pasiva de todo el tráfico**
- _ETHERNET ENVIRONMENTS_: **Hub = todos ven todo; Switch = entrega selectiva**
- _STP ATTACK (SPANNING TREE PROTOCOL)_: **STP attack = el rogue root bridge roba todo el tráfico**
- _VULNERABLE PROTOCOLS TABLE_: **Si no hay cifrado = vulnerable al sniffing**
- _DHCP ATTACKS TABLE_: **Starvation = agota el pool; Rogue = servidor falso**
- _DNS POISONING — TOOLS AND DEFENCE_: **Intranet = basado en ARP; Internet = rogue DNS + Trojan; Cache = falsificar registros del resolver**

---

## Módulo 09 — Social Engineering

[Abrir la nota completa](09%20-%20Social%20Engineering.md)

**Lo esencial**

- **Social engineering lifecycle** — 5 fases en orden: Research → Develop → Launch → Access → Analyze (el examen las reordena como distractores)
- **Principios de social engineering** — Authority, Scarcity, Urgency, Social Proof, Likability, Reciprocity
- **Reciprocity vs Quid pro quo** — reciprocity: el atacante hace un favor primero para que la víctima se sienta obligada; quid pro quo: ofrece un servicio a cambio de datos o credenciales
- **Tailgating vs Piggybacking** — tailgating: entrar detrás de una persona autorizada SIN su consentimiento; piggybacking: CON consentimiento (la víctima sostiene la puerta)
- **Phishing según el medio** — email masivo (phishing), dirigido (spear phishing), voz (vishing), SMS (smishing), mensajería instantánea (spimming)
- **Pharming** — redirige a un sitio falso mediante DNS cache poisoning o modificación del archivo hosts; NO requiere que la víctima haga clic; se previene con DNSSEC
- **Watering hole** — comprometer un sitio que frecuenta el grupo objetivo y esperar a que lo visiten
- **Clone / Tabnabbing / Consent phishing** — clone reutiliza un email PREVIAMENTE legítimo; tabnabbing transforma pestañas INACTIVAS; consent phishing abusa de permisos OAuth, no de contraseñas
- **Angler phishing** — cuenta falsa de soporte en redes sociales que publica enlaces maliciosos en respuestas/comentarios
- **Insider threats** — Malicious, Negligent (el tipo MÁS COMÚN) y Compromised (sigue siendo insider threat aunque no actúe intencionadamente)
- **Herramientas** — SET (framework multivector), ShellPhish (phishing en redes sociales), OhPhish (simulación de phishing), Netcraft/PhishTank (anti-phishing), QRTiger (QRL jacking)
- **AI-powered social engineering** — deepfakes y voice cloning (ElevenLabs, Resemble.AI) permiten fraude de CEO y evadir la biometría de voz

**Trampas de examen**

- _SOCIAL ENGINEERING LIFECYCLE_: Las fases del ciclo de vida son secuenciales — el examen puede reordenarlas como distractores.
- _SOCIAL ENGINEERING PRINCIPLES (CIALDINI'S 6)_: Reciprocity = hacer algo primero para que el objetivo se sienta obligado. No confundir con quid pro quo.
- _ADVANCED PHISHING VARIANTS_: Clone phishing utiliza un email PREVIAMENTE legítimo — no es una creación nueva.  
  Tabnabbing se dirige a pestañas INACTIVAS, no activas.  
  Consent phishing explota OAuth, NO contraseñas directamente.
- _PHARMING — DEEP DIVE_: Pharming NO requiere que la víctima haga clic en un enlace — funciona a nivel de DNS/red.
- _TYPES OF INSIDER THREATS_: Compromised insider AÚN es una amenaza interna aunque no actuó intencionalmente.  
  Negligent insider es el tipo MÁS COMÚN.
- _AI VOICE CLONING TOOLS_: La clonación de voz con IA puede evadir autenticación basada en voz (biometría de voz).  
  Los deepfakes pueden usarse para fraude de CEO (llamada de video falsa aprobando una transferencia).

**Para recordar**

- _SOCIAL ENGINEERING — CORE DEFINITION_: **Hacking humans, not machines**
- _SOCIAL ENGINEERING LIFECYCLE_: **R-D-L-A-A = "Really Devious Lying Attacker Achieves"**
- _SOCIAL ENGINEERING PRINCIPLES (CIALDINI'S 6)_: **A-S-U-S-L-R = "A Smart Undercover Spy Leverages Rapport"**
- _PHARMING — DEEP DIVE_: **Pharming = "Phake DNS"**
- _ELICITATION_: **Elicitation = "Casual chat that steals data"**
- _TYPES OF INSIDER THREATS_: **M-N-C = "Malicious Needs Compensation"**
- _AI-POWERED SOCIAL ENGINEERING — CORE CONCEPT_: **AI makes social engineering scalable and realistic**
- _AI VOICE CLONING TOOLS_: **"Eleven Labs Resembles Murf Playing at Voice"**
- _SOCIAL ENGINEERING COUNTERMEASURES — MASTER TABLE_: **"Train, Simulate, Filter, Verify, Limit, Classify, Respond, Secure, Patch, DNS"**

---

## Módulo 10 — Denial-of-Service

[Abrir la nota completa](10%20-%20Denial%20of%20service.md)

**Lo esencial**

- **DoS vs DDoS / botnet** — DoS = una sola fuente; DDoS = muchos bots controlados por el botmaster a través del C2 server (el C2 retransmite, no es el atacante)
- **Hit-list vs Permutation scanning** — hit-list: lista precompilada de objetivos vulnerables; permutation: lista pseudoaleatoria compartida (cifrado de bloque de 32 bits), la más eficiente porque evita escaneos redundantes
- **Malicious code propagation** — Central source (desde una fuente central), Back-chaining (desde la máquina del atacante, p. ej. por TFTP), Autonomous (la víctima se convierte en atacante)
- **Categorías DDoS** — Volumetric = ancho de banda, Protocol = tablas de estado, Application = lógica de la aplicación (HTTP)
- **Smurf / Fraggle / Ping of Death** — Smurf: ICMP ECHO a broadcast; Fraggle: UDP ECHO a los puertos 7 (Echo) / 19 (CHARGEN); Ping of Death: ICMP de más de 65,535 bytes
- **Amplificación** — NTP (monlist), DNS (hasta 50x), SSDP (M-SEARCH a dispositivos UPnP), CHARGEN (UDP 19): petición pequeña con la IP de la víctima falsificada, respuesta enorme
- **SYN flood / TCP SACK Panic** — SYN flood deja conexiones half-open (el ACK nunca llega); TCP SACK Panic: solo Linux, kernel panic con paquetes de 48 bytes
- **Slowloris vs R.U.D.Y.** — Slowloris envía cabeceras HTTP parciales; R.U.D.Y. hace slow POST byte a byte; ambos tumban servidores con un ancho de banda mínimo
- **Phlashing (Permanent DoS)** — actualizaciones de firmware fraudulentas que causan daño permanente al hardware; no es una inundación de tráfico
- **Detection techniques** — Activity profiling (línea base), Sequential change-point detection (cambios bruscos por IP/flujo), Wavelet-based signal analysis (componentes espectrales)
- **Herramientas** — LOIC (floods HTTP/UDP/TCP), HOIC (sucesor de LOIC, "booster scripts"), HULK (peticiones aleatorias para evadir el caching)
- **HTTP/2 Rapid Reset** — Google Cloud 2023: abusa del stream multiplexing de HTTP/2 (hasta 100 streams por conexión TCP), no del ancho de banda

**Trampas de examen**

- _BOTNET ARCHITECTURE_: El servidor C2 **no** es el atacante — es el **retransmisor**. El botmaster emite comandos **a través** del servidor C2.
- _BOTNET PROPAGATION TECHNIQUES_: **Permutation scanning** es la técnica más **eficiente** porque todos los bots comparten la misma lista de permutación, evitando superposiciones.
- _DDoS ATTACK CLASSIFICATIONS_: Los ataques volumétricos suelen apuntar a servicios **stateless** (NTP, SSDP) porque una solicitud pequeña genera una respuesta mucho mayor (amplificación).
- _VOLUMETRIC ATTACKS — COMPREHENSIVE TABLE_: Smurf usa **ICMP**, Fraggle usa **UDP**. Ambos usan amplificación por broadcast.
- _PROTOCOL ATTACKS — COMPREHENSIVE TABLE_: TCP SACK Panic afecta **solo a Linux** y funciona con paquetes de tan solo **48 bytes**.
- _APPLICATION-LAYER ATTACKS — COMPREHENSIVE TABLE_: Slowloris es devastador porque funciona con **ancho de banda mínimo** — una sola máquina puede derribar servidores grandes.
- _OTHER ATTACK TYPES — COMPREHENSIVE TABLE_: Phlashing causa **daño permanente al hardware** — no es una inundación de tráfico, es un **ataque de firmware**.
- _DDoS ATTACK TOOL KITS_: HULK es tanto un **tipo de ataque** como un **nombre de herramienta** — conoce la diferencia. La herramienta genera solicitudes aleatorias para evadir la detección.
- _DDoS CASE STUDY — HTTP/2 RAPID RESET_: Rapid Reset apunta **específicamente a HTTP/2** — explota la función de multiplexing del protocolo, no el ancho de banda.

**Para recordar**

- _DoS vs DDoS — CORE DIFFERENCE_: **DoS = un atacante, DDoS = ejército de zombies**
- _BOTNET ARCHITECTURE_: **Botmaster → C2 → Bots (uno comanda, uno retransmite, muchos ejecutan)**
- _MALICIOUS CODE PROPAGATION TECHNIQUES_: **Central = una fuente, Back-chain = el atacante impulsa, Autonomous = la víctima se convierte en atacante**
- _DDoS ATTACK CLASSIFICATIONS_: **Volumetric = ancho de banda, Protocol = estado, Application = lógica**
- _DDoS DETECTION TECHNIQUES_: **Profiling = línea base, Change-point = cambio, Wavelet = espectro**
- _DDoS CASE STUDY — HTTP/2 RAPID RESET_: **HTTP/2 Rapid Reset = 100 streams por TCP, crear rápido, reiniciar rápido, el servidor muere**

---

## Módulo 11 — Session Hijacking

[Abrir la nota completa](11%20-%20Session%20hijacking.md)

**Lo esencial**

- **Session hijacking** — tomar el control de una sesión TCP válida ya establecida robando o prediciendo el session ID (la autenticación solo ocurre al inicio de la sesión)
- **Session hijacking phases** — Tracking the connection → Desynchronizing the connection → Injecting attacker packet
- **Next Sequence Number (NSN)** — dato necesario para el análisis de paquetes de un session hijacking local
- **Passive vs Active hijacking** — passive: solo observa y registra tráfico (sniffing de cookies, bajo riesgo de detección); active: interviene en la conexión y toma la sesión (MITM)
- **Spoofing vs Hijacking** — spoofing inicia una sesión NUEVA con credenciales robadas; hijacking toma una sesión YA activa
- **XSS vs CSRF** — XSS roba cookies con `document.cookie` (se mitiga con la flag HttpOnly); CSRF = one-click attack / session riding (anti-CSRF tokens, cookies SameSite)
- **Session fixation** — el atacante fija el session ID antes de que la víctima inicie sesión; defensa: regenerar el session ID tras el login
- **CRIME vs Forbidden attack** — CRIME: canal lateral por compresión TLS (deshabilitar la compresión); Forbidden: reutilización de nonce en AES-GCM durante el TLS handshake
- **Man-in-the-Browser (MITB)** — un troyano modifica valores del DOM: el servidor recibe la transacción modificada y el usuario ve los datos originales
- **RST vs Blind hijacking** — RST: paquete falsificado con flag RST y ACK correcto que corta la sesión (Colasoft Packet Builder, tcpdump); blind: inyecta sin ver respuestas prediciendo números de secuencia
- **PetitPotam** — abusa de MS-EFSRPC para forzar al DC a autenticarse y hace NTLM relay a AD CS para obtener admin
- **Contramedidas** — HSTS fuerza HTTPS (evita downgrade); Token Binding vincula los tokens a la conexión TLS; IPsec Transport cifra solo el payload, Tunnel el paquete completo

**Trampas de examen**

- _SESSION HIJACKING PHASES_: El análisis de paquetes de session hijacking local requiere conocer el **Next Sequence Number (NSN)**.

**Para recordar**

- _WHY SESSION HIJACKING IS SUCCESSFUL_: **Sin bloqueo + ID débil + sin tiempo de expiración + sin cifrado = hijacking exitoso**
- _PASSIVE vs ACTIVE HIJACKING_: **Passive = observar, Active = actuar**
- _SPOOFING vs HIJACKING_: **Spoofing = nueva sesión, Hijacking = sesión existente**
- _MAN-IN-THE-MIDDLE (MITM) — SPLIT TCP CONNECTIONS_: **MITM divide la tubería: Cliente ↔ Atacante ↔ Servidor**
- _MAN IN THE BROWSER (MITB)_: **MITB = Troyano → modificar DOM → usuario ve original, servidor ve modificado**
- _PETITPOTAM HIJACKING_: **PetitPotam = Forzar auth del DC → NTLM relay → admin**
- _PREVENTING SESSION HIJACKING_: **HSTS + Token Binding = columna vertebral de protección de sesión**
- _IPsec_: **Transport = solo payload, Tunnel = paquete completo**

---

## Módulo 12 — Evading IDS, Firewalls, and Honeypots

[Abrir la nota completa](12%20-%20Evading%20IDS%2C%20Firewalls%20and%20Honeypots.md)

**Lo esencial**

- **Signature Recognition** (misuse detection) — el método más común: compara con patrones conocidos; si hay coincidencia, la anomaly detection se omite
- **Anomaly Detection vs Protocol Anomaly Detection** — desviación respecto a una baseline de comportamiento vs desviación de los estándares del protocolo (RFC)
- **False Negative** — ataque real sin alarma: el caso más peligroso (False Positive = alarma sin ataque)
- **NIDS vs HIDS** — NIDS: black box en modo promiscuo que vigila el tráfico de la red; HIDS: en un host, vigila archivos, llamadas al sistema y logs (consume muchos recursos)
- **IPS** — IDS activo que además bloquea el tráfico; HIPS en un host, NIPS inline en el segmento de red
- **Capas OSI de los firewalls** — Packet filtering y Stateful L3/L4; Circuit-level gateway L5 (valida el three-way handshake); Application-level (proxy) L7; NGFW L3–L7
- **Bastion host / Screened subnet / DMZ** — mediador con interfaz pública y privada / DMZ creada con un firewall de dos o tres interfaces (multi-homed) / zona búfer entre la red interna e internet
- **Firewalking** — envía paquetes con un TTL un salto mayor que el firewall (como traceroute) para descubrir las ACL del gateway
- **Session Splicing vs Tiny Fragments** — repartir el payload en muchos paquetes pequeños para que ninguno dispare la firma vs forzar parte del header TCP al siguiente fragmento
- **Tunneling → herramienta** — ICMP: ICMPTX · ACK: Hping · HTTP (TCP 80): Chisel · SSH/SOCKS: Bitvise · DNS (límite UDP de 255 bytes): Iodine, dnscat2
- **Fast Flux vs DGA** — Fast Flux cambia rápidamente IPs y nombres DNS para ocultar el C&C; DGA genera dominios nuevos para evadir bloqueos
- **Honeypots** — Low emula pocos servicios (KFSensor, Honeytrap), Medium simula SO/apps/servicios, High simula todos los servicios; se delatan por el OUI de VMware en la MAC, la latencia o Send Safe Honeypot Hunter

**Trampas de examen**

- _HOW IDS DETECTS INTRUSION_: Si hay signature match (coincidencia de firma) → la anomaly detection se **omite**

**Para recordar**

- _IDS PLACEMENT_: **Uno fuera + uno dentro cerca de la DMZ = best practice**
- _NIDS VS HIDS COMPARISON_: **NIDS = vigila la red; HIDS = vigila el host**
- _TYPES OF IDS ALERTS_: **True = acierto; Positive = hay alerta; Negative = no hay alerta**  
  **False Negative = el peor caso = ataque no detectado**
- _FIREWALL ARCHITECTURE_: **Bastion = mediador; Screened subnet = DMZ tras el screening firewall; DMZ = zona búfer**
- _ACK TUNNELING_: **ACK = conexión ya establecida = se deja pasar**
- _DNS TUNNELING_: **DNS tunnel = 255 bytes maliciosos dentro de UDP**
- _OTHER EVASION TECHNIQUES_: **Insertion → Evasion → DoS → Obfuscation → False Positives = los 5 pilares de la evasión**
- _BYPASS ENDPOINT SECURITY_: **Ghostwriting → DLL hijack → Process injection → AMSI bypass = top 4 de evasión de endpoint**
- _TYPES OF HONEYPOTS_: **Low = emula; Medium = simula en parte; High = simulación completa**
- _DETECTING HONEYPOTS_: **nmap + arp-scan + MAC = trío para detectar honeypots**

---

## Módulo 13 — Hacking Web Servers

[Abrir la nota completa](13%20-%20Hacking%20Web%20Servers.md)

**Lo esencial**

- **Document Root vs Server Root** — document root guarda los archivos web públicos del dominio; server root guarda configuración, logs y ejecutables (conf, logs, cgi-bin)
- **Virtual Hosting** — name-based (varios dominios en la misma IP), IP-based (una IP por dominio), port-based (sitios en distintos puertos)
- **Improper configuration** — la causa más común de compromiso de un web server, por delante de credenciales débiles/por defecto y software sin parchear
- **Apache** — MPM: Prefork (un proceso hijo por solicitud), Worker (hilos), Event (keep-alive); mod_ssl = SSL/TLS, abuso de mod_proxy = SSRF, mod_cgi = ejecución de comandos
- **IIS request flow** — HTTP.sys (modo kernel) → WAS (lee ApplicationHost.config y elige el application pool) → WWW Service → w3wp.exe (modo usuario)
- **IIS** — configuración en web.config, consola inetmgr; el Application Pool aísla las aplicaciones web
- **Nginx** — arquitectura master–worker con workers single-threaded, event-driven y non-blocking; no soporta .htaccess
- **DNS Server Hijacking vs DNS Amplification** — modificar la configuración del servidor DNS para redirigir en silencio vs DDoS con consultas recursivas pequeñas y falsificadas (UDP) que generan respuestas grandes
- **Directory Traversal** — secuencias `../` para leer archivos fuera del web root por una validación de entrada incorrecta
- **HTTP Response-Splitting** — inyección CRLF en los headers de respuesta (no en el body): el servidor genera dos respuestas, el atacante controla la primera; habilita XSS y web cache poisoning
- **Web Cache Poisoning** — depende de fallos de response-splitting; afecta a muchos usuarios y persiste hasta que se vacía la caché (no es DNS poisoning)
- **HTTP/2 Continuation Flood** — HEADERS frame sin flag END_HEADERS + muchos CONTINUATION frames → agota memoria y CPU; no requiere muchas conexiones ni mucho ancho de banda
- **Frontjacking** — CRLF + Host header injection en un Nginx reverse proxy mal configurado (shared hosting); variables mal saneadas: `$uri` y `$document_uri`
- **SSH / FTP brute force** — SSH en TCP 22 (Nmap, Ncrack, THC Hydra); FTP expone credenciales en texto plano; Hydra `-L` = lista de usuarios, `-P` = lista de contraseñas
- **Hybrid attack** — dictionary + brute force (añade números/símbolos a las palabras); dictionary es más rápido que brute force pero falla con contraseñas complejas

**Trampas de examen**

- _HTTP Response-Splitting Attack_: Ocurre en el body → **NO (en los headers)**
- _HTTP Response-Splitting Attack_: El navegador ejecuta ambas respuestas → **NO**
- _HTTP Response-Splitting Attack_: Requiere autenticación → **NO**
- _Web Cache Poisoning Attack_: Es DNS poisoning → **NO**
- _Web Cache Poisoning Attack_: Afecta a un solo usuario → **NO**
- _Web Cache Poisoning Attack_: Es temporal → **NO (persiste hasta que se vacía la caché)**
- _SSH Brute Force Attack_: El cifrado de SSH impide el brute force → **NO**
- _SSH Brute Force Attack_: El ataque va contra el cifrado → **NO**
- _SSH Brute Force Attack_: Basta un solo intento de login → **NO**
- _FTP Brute Force with AI_: La AI ejecuta el ataque → **NO (genera los comandos; ataca Hydra)**
- _FTP Brute Force with AI_: FTP cifra las credenciales → **NO**
- _FTP Brute Force with AI_: Hydra es opcional → **NO**
- _HTTP/2 Continuation Flood Attack_: Requiere muchas conexiones → **NO**
- _HTTP/2 Continuation Flood Attack_: Usa mucho ancho de banda → **NO**
- _HTTP/2 Continuation Flood Attack_: Explota HTTP/1.1 → **NO**
- _Frontjacking_: Es una vulnerabilidad del servidor backend → **NO**
- _Frontjacking_: Es solo del lado del cliente → **NO**
- _Frontjacking_: Se basa en DNS → **NO**
- _Phishing Attacks_: Requiere malware → **NO**
- _Phishing Attacks_: Requiere explotar el servidor → **NO**
- _Phishing Attacks_: Es puramente técnico → **NO**

**Para recordar**

- _What Is a Web Server_: **El navegador pide → el servidor busca → el servidor responde**
- _Web Server Components_: **Document root = contenido | Server root = control**
- _Virtual Hosting_: **Name, IP, Port = las tres formas de Virtual Hosting**
- _Why Web Servers Are Compromised_: **Config > Passwords > Patching > Crypto > Plugins**
- _Common Goals of Web Server Attackers_: **Steal, Bot, Break DB, Copy Code, Redirect, Escalate**
- _Oversights That Compromise Web Servers_: **Defaults, Files, Services, Crypto, Privileges**
- _Apache Core Architecture_: **Apache = process-based + modular**
- _Apache Process Models_: **Prefork = procesos | Worker = hilos | Event = worker optimizado**
- _Apache Modules_: **SSL, Rewrite, Proxy, Auth, CGI, Headers**
- _Apache Attack Surface Summary_: **Apache cae por módulos + misconfiguration**
- _IIS Core Architecture_: **IIS = App Pool isolation**
- _IIS Attack Surface Summary_: **IIS cae por configuración + permisos**
- _Nginx Process_: **El master controla, los workers sirven**
- _Attack Flow_: **CRLF → se rompe el header → doble respuesta**
- _Attack Flow_: **Envenena una vez → infecta a muchos**
- _Attack Flow_: **Túnel cifrado ≠ login seguro**
- _Attack Flow_: **Sin END_HEADERS → espera infinita → DoS**
- _Attack Flow_: **CRLF → Host header → el proxy redirige → contenido falso**
- _Hybrid Attack_: **Guess → Dictionary → Brute → Hybrid**

---

## Módulo 14 — Hacking Web Applications

### Parte 1 — Foundations

[Abrir la nota completa](14%20-%20Part%201%20-%20Foundations.md)

**Lo esencial**

- **Web Application** — programa que se ejecuta en el browser y hace de interfaz con el web server vía HTTP/HTTPS (arquitectura cliente–servidor).
- **3-layer architecture** — Presentation Layer (UI, browser) → Business Logic Layer (web server + application server) → Database Layer (DBMS).
- **Client-side validation** — NO es seguridad: se puede eludir; siempre hace falta validación en el servidor.
- **Static vs dynamic content** — el estático lo devuelve el web server directamente; el dinámico se reenvía al application server (y a la base de datos si hace falta).
- **Causa raíz** — CEH vincula la mayoría de los ataques web con **entrada del usuario + mala validación**.
- **Web service roles** — Service Provider (aloja y publica), Service Requester (consume), Service Registry (almacena las descripciones).
- **Publish → Find → Bind (PFB)** — orden de las operaciones de un web service.
- **SOAP vs REST** — SOAP: solo XML, estricto, más lento; REST: JSON o XML sobre HTTP, ligero y más rápido.
- **UDDI / WSDL / WS-Security** — service registry / descripción del servicio / seguridad de los mensajes SOAP.
- **Vulnerability stack (7 capas)** — L7 web app → L6 third-party components → L5 web server → L4 database → L3 OS → L2 network → L1 IPS/IDS.
- **Ataques por capa** — L7 XSS y validación de entrada, L4 SQL injection, L3 privilege escalation, L2 DoS, L1 IDS evasion.
- **Objetivos del módulo (C-T-M-A-S)** — Concepts, Threats, Methodology, APIs, Security.

### Parte 2 — OWASP Top 10

[Abrir la nota completa](14%20-%20Part%202%20-%20OWASP%20Top%2010.md)

**Lo esencial**

- **OWASP Top 10 (2021), en orden** — A01 Broken Access Control → A02 Cryptographic Failures → A03 Injection → A04 Insecure Design → A05 Security Misconfiguration → A06 Vulnerable and Outdated Components → A07 Identification and Authentication Failures → A08 Software and Data Integrity Failures → A09 Security Logging and Monitoring Failures → A10 SSRF.
- **A01 Broken Access Control** — un usuario autenticado realiza acciones no autorizadas: IDOR, force browsing, metadata manipulation, control de acceso en el cliente.
- **A02 Cryptographic Failures** — cifrado ausente o débil (texto plano, sin TLS, hardcoded keys); afecta a datos en tránsito y en reposo.
- **A03 Injection** — entrada no confiable interpretada como comando (SQL, NoSQL, OS command, LDAP, XPath); causa raíz: falta de validación de entrada.
- **A04 Insecure Design** — fallo de diseño (sin threat modeling), NO un error de codificación.
- **A05 Security Misconfiguration** — default credentials, verbose errors/stack traces, directory listing, servicios innecesarios.
- **A06 Vulnerable and Outdated Components** — bibliotecas, frameworks o SO con CVEs conocidos y sin parchear.
- **A07 Identification and Authentication Failures** — sustituye a la antigua **Broken Authentication**: contraseñas débiles, sin MFA, session fixation, credential stuffing.
- **A08 Software and Data Integrity Failures** — unsigned updates, insecure deserialization, CI/CD o plugins comprometidos.
- **A09 Security Logging and Monitoring Failures** — sin logs, sin monitorizar o sin alertas → detección tardía de la brecha.
- **A10 SSRF** — el servidor hace peticiones a sistemas internos con una URL controlada por el atacante (escaneo interno, cloud metadata).
- **XXE / WS-Security** — XXE: XML injection contra bibliotecas XML usando `<!DOCTYPE>`; WS-Security: integridad y confidencialidad de mensajes SOAP.

**Trampas de examen**

- _A04:2021 — INSECURE DESIGN_: Error de codificación (coding bug) → **NO**
- _A04:2021 — INSECURE DESIGN_: Fallo de diseño (design flaw) → **SÍ**

**Para recordar**

- _OWASP TOP 10 (2021) — MASTER LIST_: **Access → Crypto → Injection → Design → Config → Components → Auth → Integrity → Logging → SSRF**
- _Impact_: **No crypto → datos robados**
- _Impact_: **Viejo = explotable**
- _Impact_: **El servidor se convierte en proxy del atacante**

### Parte 3 — Hacking Methodology

[Abrir la nota completa](14%20-%20Part%203%20-%20Hacking%20Methodology.md)

**Lo esencial**

- **Orden de las 8 fases** — Information Gathering → Web Application Footprinting → Vulnerability Scanning → Web Application Enumeration → Exploitation → Post-Exploitation → Maintaining Access → Covering Tracks.
- **Versión corta** — Recon → Footprint → Scan → Enumerate → Exploit → Post-exploit → Persist → Cover (**I F S E E P M C**).
- **Information Gathering (fase 1)** — Whois (propietario del dominio), Nslookup/Dig (DNS), Netcraft (hosting y SO), Google Dorks (datos sensibles expuestos).
- **Web Application Footprinting (fase 2)** — identifica el tech stack con Wappalyzer, BuiltWith, WhatWeb y Netcraft; es **recon pasivo**, no scanning.
- **Vulnerability Scanning (fase 3)** — Nikto (web server), Nessus, OpenVAS, Acunetix; salida: CVE IDs, severidad y componentes afectados. **Scanner ≠ exploit**.
- **Web Application Enumeration (fase 4)** — es **activa**: directorios, archivos, parámetros, roles y APIs.
- **Dirb / Gobuster** — directory brute-forcing y content discovery; **wfuzz** — parameter fuzzing.
- **Exploitation (fase 5)** — SQLmap (SQL injection automatizada), Metasploit (exploit framework), Burp Suite (explotación manual), BeEF (browser exploitation).
- **Post-Exploitation (fase 6)** — credential harvesting, data exfiltration y lateral movement (Meterpreter, Mimikatz).
- **Maintaining Access (fase 7)** — backdoors, web shells y scheduled tasks; la persistencia ≠ la explotación inicial.
- **Covering Tracks (fase 8)** — borrado y modificación de logs, timestamp manipulation.

**Trampas de examen**

- _PHASE 2 — WEB APPLICATION FOOTPRINTING_: Footprinting = scanning → **NO**
- _PHASE 2 — WEB APPLICATION FOOTPRINTING_: Footprinting = recon pasivo → **SÍ**
- _PHASE 4 — WEB APPLICATION ENUMERATION_: La enumeración es pasiva → **NO**
- _PHASE 4 — WEB APPLICATION ENUMERATION_: La enumeración es activa → **SÍ**

**Para recordar**

- _PHASES OF WEB APPLICATION HACKING_: **I F S E E P M C**
- _Tools_: **Quién es el dueño → Dónde está → Qué ejecuta** (Who owns it → Where it is → What runs it)
- _Output_: **Scanner ≠ exploit**

### Parte 4 — APIs and Webhooks

[Abrir la nota completa](14%20-%20Part%204%20-%20APIs%20and%20Webhooks.md)

**Lo esencial**

- **Web API types** — REST (métodos HTTP, stateless), SOAP (solo XML, mensajería estricta, WS-Security), GraphQL (el cliente define la consulta de datos).
- **REST principles** — stateless, separación client-server, cacheable, uniform interface.
- **HTTP methods** — GET obtiene, POST envía, PUT actualiza, PATCH actualiza parcialmente, DELETE elimina (**G P P P D**).
- **SOAP components** — WSDL (describe operaciones e interfaz del servicio), Envelope (envoltorio), Header (seguridad y metadatos), Body (petición/respuesta).
- **API authentication** — API Keys (token estático), Basic Auth (usuario/contraseña), OAuth 2.0 (acceso delegado basado en tokens), JWT (tokens JSON firmados).
- **BOLA (Broken Object Level Authorization)** — cambiar IDs de objetos en los parámetros para acceder a registros de otro usuario.
- **Mass Assignment** — el atacante modifica propiedades del objeto no previstas a través de los parámetros de la API.
- **Lack of Rate Limiting** — se mitiga con **rate limiting**: límite de peticiones por periodo de tiempo.
- **API testing tools** — Postman e Insomnia (REST), SoapUI (SOAP), Burp Suite (intercepción), OWASP ZAP (escaneo).
- **Webhook** — envía datos en tiempo real vía **HTTP POST** cuando ocurre un evento: Event → Trigger → POST → Process.
- **API vs Webhook** — API: el cliente pide (pull), basada en peticiones, bidireccional; webhook: el servidor envía (push), basado en eventos, unidireccional.
- **Webhook risks** — sin autenticación, payload tampering, replay attacks, data leakage.

**Para recordar**

- _HTTP METHODS USED IN REST APIs_: **G P P P D**
- _6. API AUTHENTICATION METHODS_: **Key → Basic → Token → JWT**
- _12. HOW WEBHOOKS WORK_: **Event → Trigger → POST → Process**

### Parte 5 — Security Testing

[Abrir la nota completa](14%20-%20Part%205%20-%20Security%20Testing.md)

**Lo esencial**

- **Black-box / White-box / Gray-box** — sin conocimiento / conocimiento completo del código fuente / conocimiento parcial (Black = Blind, White = All, Gray = Some).
- **Input Validation Testing** — prueba parámetros de URL, campos de formulario, cookies, HTTP headers y payloads JSON/XML; detecta SQLi, XSS, command y LDAP injection.
- **Authentication Testing** — fortaleza de contraseñas, login bypass, account lockout, default credentials, sin MFA; herramientas: Burp Suite, THC Hydra, Medusa, Ncrack.
- **Session Management Testing** — aleatoriedad del session ID, secure flags y timeout; ataques: session fixation (el atacante fija un session ID conocido antes del login), session hijacking, cookie theft.
- **AuthN ≠ AuthZ** — Authentication verifica la identidad; Authorization Testing prueba qué puede hacer el usuario ya autenticado (IDOR, privilege escalation, forced browsing, parameter tampering).
- **Client-Side Testing** — la seguridad en el cliente NO basta: siempre validación en el servidor (también busca hardcoded secrets y lógica expuesta).
- **Error handling** — verbose errors, stack traces e información de depuración → information disclosure que ayuda al reconocimiento.
- **File Upload Testing** — tipo, tamaño y permisos de ejecución del archivo; evita el web shell upload (p. ej. un PHP disfrazado de imagen).
- **Business Logic Testing / automated vs manual** — workflow bypass, transaction tampering, race conditions; el testing automatizado (rápido, escalable) suele no detectarlos, el manual (preciso, contextual) sí.
- **Herramientas** — Burp Suite (intercepción y pruebas), OWASP ZAP (vulnerability scanning), Nikto (web server), SQLmap (SQL injection), Acunetix (escaneo automatizado).
- **Objetivos del Módulo 14 (repaso)** — 1 Web application concepts · 2 Web application threats · 3 Hacking methodology · 4 APIs and webhooks · 5 Security testing.
- **Gancho del módulo** — **Concept → Threat → Method → API → Test**.

**Trampas de examen**

- _8. CLIENT-SIDE TESTING_: La seguridad del lado del cliente es suficiente → **NO**
- _8. CLIENT-SIDE TESTING_: Se requiere validación del lado del servidor → **SÍ**

**Para recordar**

- _3. TYPES OF WEB APPLICATION SECURITY TESTING_: **Black = Blind, White = All, Gray = Some**
- _Testing Techniques_: **Input = superficie de ataque (attack surface)**
- _Tools_: **Autenticación débil = account takeover**
- _Testing Focus_: **Robar la sesión = robar al usuario**
- _Techniques_: **AuthN ≠ AuthZ**
- _11. BUSINESS LOGIC TESTING_: **Los logic flaws eluden los controles de seguridad**

---

## Módulo 15 — SQL Injection

### Parte 1 — SQL Injection Fundamentals

[Abrir la nota completa](15%20-%20Part%201%20-%20SQL%20Injection%20Fundamentals.md)

**Lo esencial**

- **SQL Injection** — explota la entrada de usuario no sanitizada para ejecutar consultas SQL maliciosas en la base de datos.
- **Causa raíz** — la entrada del usuario se concatena en la consulta SQL sin una validación adecuada.
- **`' OR '1'='1` / `' OR 1=1--`** — payloads clásicos siempre-true: la cláusula WHERE siempre es verdadera → **authentication bypass**.
- **`--` vs `/* */`** — `--` es comentario de una línea, `/* */` de varias líneas; ambos hacen que se ignore el resto de la consulta.
- **Injection points** — formularios de login, campos de búsqueda, parámetros de URL, cookies y HTTP headers (cualquier entrada que toque SQL).
- **GET vs POST** — GET lleva los parámetros en la URL (query string); POST, en el body de la petición.
- **Lenguaje irrelevante** — ASP, ASP.NET, PHP, JSP, Python, Ruby o Perl: el objetivo es la base de datos (MySQL, MSSQL, Oracle, PostgreSQL, SQLite).
- **Impactos** — authentication/authorization bypass, information disclosure, data manipulation, data deletion y remote code execution.
- **Error Message Disclosure** — los errores verbosos de la BD revelan su estructura interna al atacante.
- **DELETE vs DROP** — DELETE elimina datos (filas); DROP elimina objetos (tablas, bases de datos).
- **Spacing technique** — usar espaciado extra en la consulta para evadir las firmas de IDS/WAF.

**Para recordar**

- _Objetivos de aprendizaje_: **Concept → Types → Method → Evasion → Defense → Tools**
- _WHY SQL INJECTION IS DANGEROUS_: **Bypass → Read → Modify → Delete → Execute**
- _COMMON SQL COMMANDS_: **S I U D C D**
- _WHERE SQL INJECTION OCCURS_: **En cualquier lugar donde la entrada toque SQL**
- _WHY IT WORKS_: **Una condición verdadera rompe la lógica**
- _APPLICATION TECHNOLOGIES AFFECTED_: **El lenguaje es irrelevante — SQL es el objetivo**
- _SQL INJECTION — BASIC LOGIC FLOW_: **Input → Query → Execute → Control**
- _COMMENT SYMBOLS IN SQL_: **Comment = ignorar el resto de la consulta**

### Parte 2 — SQLi Types

[Abrir la nota completa](15%20-%20Part%202%20-%20SQLi%20Types.md)

**Lo esencial**

- **In-band SQLi** — usa el mismo canal para inyectar y recibir resultados; la más común y rápida. Subtipos: **Error-based** y **UNION-based**.
- **Inferential (Blind) SQLi** — no hay errores ni salida visible: el atacante infiere el resultado. Subtipos: **Boolean-based** y **Time-based**.
- **Out-of-band SQLi** — exfiltra datos por un canal distinto (**DNS** o **HTTP**); se usa cuando in-band no está disponible y blind es demasiado lenta.
- **Error-based** — aprovecha errores verbosos y un mal manejo de errores: filtran tipo de BD, nombres de tablas y columnas y estructura de la consulta.
- **UNION-based: prerrequisitos** — mismo número de columnas y tipos de datos compatibles (p. ej. `' UNION SELECT 1,2,3--`).
- **Boolean-based** — se compara la respuesta de la página con `' AND 1=1--` (TRUE) frente a `' AND 1=2--` (FALSE).
- **Time-based: funciones por BD** — MySQL `SLEEP()`, MSSQL `WAITFOR DELAY`, PostgreSQL `pg_sleep()`, Oracle `DBMS_LOCK.SLEEP`.
- **Velocidad** — Error-based/UNION-based (rápidas) > Out-of-band (media) > Boolean-based (lenta) > Time-based (muy lenta).

**Para recordar**

- _MASTER CLASSIFICATION_: **In-band → Blind → Out-of-band**
- _EXAM PAYLOADS_: **Error = información**
- _EXAM PAYLOADS_: **UNION = combinar resultados**
- _EXAM PAYLOADS_: **Cambio en la página = respuesta**
- _EXAM FUNCTIONS (DB-SPECIFIC)_: **Delay = TRUE**
- _ATTACK LOGIC_: **Canal distinto = Out-of-band**

### Parte 3 — SQLi Methodology

[Abrir la nota completa](15%20-%20Part%203%20-%20SQLi%20Methodology.md)

**Lo esencial**

- **Orden de las fases** — Detect → Identify DB → Enumerate → Extract → Bypass Auth → Execute OS Commands → Maintain Access (Persist).
- **Phase 1 — Detect** — probar `'`, `"`, `' OR '1'='1`, `' AND 1=2--`; indicios de inyección: error de BD, cambio en la página o retardo en la respuesta.
- **Phase 2 — Identify Database** — tras confirmar la SQLi, lo primero es el tipo/versión del DBMS: `@@version` (MySQL/MSSQL), `version()` (PostgreSQL), `banner from v$version` (Oracle).
- **Phase 3 — Enumerate** — `information_schema` es la base de datos de metadatos: `information_schema.tables`, `.columns`, `.schemata`.
- **Phase 4 — Extract** — nombres de usuario, password hashes, emails y tarjetas, mediante extracción UNION-based, blind o time-based (primero la estructura, luego los datos).
- **Phase 5 — Bypass Authentication** — condición always-true o comentar el resto de la consulta: `' OR '1'='1--`, `admin'--`.
- **Phase 6 — Execute OS Commands** — requiere que la BD permita ejecutar comandos y privilegios elevados: MSSQL `xp_cmdshell`, MySQL `INTO OUTFILE` (escribe archivos), Oracle Java stored procedures.
- **Phase 7 — Maintain Access** — crear usuarios administradores, backdoors y web shells.
- **HTTPS** — es seguridad de transporte: no indica (ni evita) una vulnerabilidad de SQLi.

**Para recordar**

- _SQL INJECTION METHODOLOGY — PHASES_: **Detect → Identify → Enumerate → Extract → Bypass → Execute → Persist**
- _SUCCESS INDICATORS_: **Error / Cambio / Retardo = inyectable**
- _DB-SPECIFIC FUNCTIONS_: **La función de versión revela la BD**
- _IMPORTANT TABLES_: **El schema guarda la estructura**
- _EXTRACTION METHODS_: **Primero la estructura, luego los datos**
- _EXAM PAYLOADS_: **TRUE evade la autenticación**
- _DB-SPECIFIC METHODS_: **Puente BD → SO**

### Parte 4 — SQLi Evasion

[Abrir la nota completa](15%20-%20Part%204%20-%20SQLi%20Evasion.md)

**Lo esencial**

- **SQL Injection Evasion** — técnicas para evadir WAF, input validation, blacklist filters y signature-based detection (Blocked ≠ Secure).
- **URL encoding** — `'` = `%27`, espacio = `%20`, `=` = `%3D`, `OR` = `%4F%52`; `%27%20OR%201%3D1--` es `' OR 1=1--` codificado.
- **Double encoding** — codifica datos ya codificados para evadir una segunda capa de decodificación.
- **Case manipulation** — `SeLeCt`, `UnIoN`, `oR`: evade filtros sensibles a mayúsculas/minúsculas.
- **Comment injection** — `--` (la mayoría de BD), `#` (MySQL), `/* */` (todas las BD): rompen la lógica e ignoran el resto de la consulta.
- **Whitespace manipulation** — sustituir espacios por comentarios, tabulaciones o saltos de línea: `SELECT/**/FROM`.
- **Operator substitution** — `=` → `LIKE`, `AND` → `&&`, `OR` → `||`: misma lógica, otra sintaxis.
- **Logical obfuscation** — expresiones aritméticas o booleanas equivalentes: `1=1` → `2-1=1`, `TRUE` → `NOT FALSE`.
- **CHAR() / CHR()** — construyen cadenas sin comillas: `CHAR()` en MySQL/MSSQL, `CHR()` en Oracle (p. ej. `CHAR(65,66,67)`).
- **Concatenation evasion** — dividir palabras clave con `CONCAT()`, `+` o `||` para sobrevivir a los filtros de palabras clave.
- **Técnica → qué evade** — encoding: filtros de firmas; case: filtros case-sensitive; operator substitution: filtros de palabras clave; obfuscation: detección por patrones.

**Para recordar**

- _WHY EVASION IS REQUIRED_: **Blocked ≠ Secure**
- _EXAM EXAMPLES_: **Encoded ≠ detected**
- _EXAM EXAMPLES_: **Cambiar mayúsculas/minúsculas evade los filtros débiles**
- _EXAM PAYLOADS_: **Comentario = fin de la consulta**
- _EXAM EXAMPLES_: **No space ≠ no SQL**
- _SUBSTITUTIONS_: **Misma lógica, distinta sintaxis**
- _EXAM EXAMPLES_: **La aritmética oculta la condición verdadera**
- _EXAM EXAMPLE_: **Sin comillas no hay filtro**
- _EXAM EXAMPLE_: **La palabra clave dividida sobrevive al filtro**

### Parte 5 — SQLi Countermeasures

[Abrir la nota completa](15%20-%20Part%205%20-%20SQLi%20Countermeasures.md)

**Lo esencial**

- **Root cause** — falta de validación de entrada y construcción insegura de consultas SQL dinámicas (Dynamic SQL = danger).
- **Parameterized queries** — la defensa MÁS eficaz: separan la lógica SQL de la entrada, que se trata siempre como datos (Code ≠ Data).
- **Prepared statements** — se compilan una vez y se ejecutan muchas veces con distintos parámetros; previenen la inyección y mejoran el rendimiento.
- **Stored procedures** — NO son seguros por sí mismos: solo lo son si usan parameterized input (EXAM TRAP).
- **Input validation** — whitelisting > blacklisting, más comprobación de longitud y de tipo; la blacklist se evade con codificación u ofuscación.
- **Escaping user input** — neutraliza caracteres especiales, pero por sí solo NO es suficiente.
- **Least privilege** — permisos mínimos en la BD: nada de usuarios admin, usuarios separados para lectura y escritura.
- **WAF** — detecta y bloquea payloads de SQLi, pero se puede evadir con técnicas de evasión.
- **Prevention checklist** — parameterized queries, prepared statements, validar la entrada, least privilege, ocultar mensajes de error, parchear el DBMS, desplegar un WAF.
- **sqlmap** — herramienta favorita de CEH para detectar y explotar SQLi: `-u` URL objetivo, `--dbs` bases de datos, `--tables`, `--columns`, `--dump` volcar datos, `--os-shell` shell del SO.
- **Otras herramientas** — Havij (GUI), jSQL Injection (Java, multiplataforma), SQLninja (MSSQL), BBQSQL (blind SQLi).
- **Resumen del módulo 15** — Inject → Enumerate → Extract → Evade → Prevent: conceptos, tipos, metodología, evasión, contramedidas y herramientas.

**Para recordar**

- _CAUSA RAÍZ DE SQL INJECTION_: **Dynamic SQL = danger**
- _EXAM NOTE_: **Code ≠ Data**
- _TECHNOLOGIES SUPPORTING IT_: **Se prepara una vez, se ejecuta de forma segura**
- _SECURITY NOTE_: **Stored ≠ secure**
- _EXAM NOTE_: **Permitir solo lo conocido como bueno**
- _LIMITATION_: **El escaping ayuda, pero no basta**
- _IMPLEMENTATION_: **Menos privilegios, menos daño**
- _LIMITATION_: **Un WAF no es la solución definitiva**
- _IMPORTANT SQLMAP OPTIONS_: **sqlmap = automatizarlo todo**

---

## Módulo 16 — Hacking Wireless Networks

### Parte 1 — Wireless Concepts

[Abrir la nota completa](16%20-%20Part%201%20-%20Wireless%20Concepts.md)

**Lo esencial**

- **BSSID** — dirección MAC del access point; **SSID** — nombre lógico legible de la WLAN. SSID ≠ BSSID.
- **Hidden SSID** (SSID oculto) — NO es seguridad: se descubre en las probe requests mediante escaneo pasivo.
- **OFDM** — subportadoras ortogonales = mayor velocidad; **MIMO** — múltiples antenas = más rendimiento; **DSSS** — ensancha la banda (anti-jamming); **FHSS** — salto rápido de frecuencia (reduce interceptación).
- **802.11** (legacy) — 2.4 GHz, DSSS/FHSS, 1–2 Mbps.
- **802.11a** — 5 GHz, OFDM, 6–54 Mbps; **802.11b** — 2.4 GHz, DSSS, 1–11 Mbps; **802.11g** — 2.4 GHz, OFDM, 54 Mbps.
- **802.11n** — primero en usar MIMO-OFDM, 2.4/5 GHz, 54–600 Mbps.
- **802.11ac** — Wi-Fi 5 (alto rendimiento, 5 GHz); **802.11ax** — Wi-Fi 6.
- **802.11i** — estándar de seguridad que define WPA2; **802.11e** — QoS; **802.11h** — control de potencia.
- **Wireless = broadcast** — medio de difusión por ondas de radio, no punto a punto; menos seguro por defecto.
- **Access Point (AP)** — conecta dispositivos inalámbricos a la red cableada (actúa como switch/hub); **Association** — proceso de conectar un cliente al AP.

**Trampas de examen**

- _WIRELESS COMMUNICATION MEDIUM_: Wireless = **broadcast**, not point-to-point.
- _BASIC SERVICE SET IDENTIFIER (BSSID)_: SSID ≠ BSSID
- _DISADVANTAGES OF WIRELESS NETWORKS_: Wireless = **less secure by default**
- _SSID BEHAVIOR_: Hidden SSID ≠ secure network

**Para recordar**

- _WIRELESS NETWORK — CORE DEFINITION_: **No wires = radio waves**
- _3G / 4G / 5G HOTSPOT_: **Extend → Expand → Bridge → Hotspot**

### Parte 2 — Wireless Encryption

[Abrir la nota completa](16%20-%20Part%202%20-%20Wireless%20Encryption.md)

**Lo esencial**

- **WEP** — RC4 con **IV de 24 bits**, clave de 64/128 bits; roto por reutilización de IV (se cracked en minutos).
- **WPA** — **TKIP** sobre RC4 + **MIC**; parche temporal de WEP, hoy obsoleto.
- **WPA2** — estándar **IEEE 802.11i**; **AES con CCMP**, clave de 128 bits.
- **WPA3** — **SAE** (Dragonfly) contra ataques de diccionario offline + forward secrecy; Personal con AES-128, **Enterprise con AES-GCMP-256 (192-bit)**.
- **Cifrado por protocolo** — RC4 → WEP y WPA; TKIP → WPA; **AES-CCMP → WPA2**; **SAE/GCMP → WPA3**.
- **IV de 24 bits** — debilidad central de WEP que causa reutilización y permite el crackeo rápido de la clave.
- **KRACK** — Key Reinstallation Attack; explota el 4-way handshake de WPA2 forzando reutilización de nonce.
- **Dragonblood** — vulnerabilidad que afecta a la implementación SAE de WPA3.
- **Modos** — Personal usa **PSK**; Enterprise usa servidor **RADIUS** (WPA/WPA2/WPA3).
- **Escalera de seguridad** — WEP → WPA → WPA2 → WPA3 (débil → el más fuerte).

**Para recordar**

- _WHY WIRELESS ENCRYPTION EXISTS_: **Wireless = everyone can hear**
- _WEP WEAKNESSES_: **WEP = Weak Encryption Protocol**
- _WPA LIMITATIONS_: **WPA = WEP with patches**
- _WPA2 WEAKNESSES_: **Strong crypto, weak passwords**
- _SIMULTANEOUS AUTHENTICATION OF EQUALS (SAE)_: **WPA3 stops offline guessing**
- _QUICK MEMORY LADDER_: **Weak → Better → Strong → Strongest**

### Parte 3 — Wireless Attacks

[Abrir la nota completa](16%20-%20Part%203%20-%20Wireless%20Attacks.md)

**Lo esencial**

- **Passive attack vs Active attack** — el pasivo solo escucha (difícil de detectar); el activo modifica, inyecta o interrumpe.
- **Rogue AP** — AP no autorizado conectado a la red (puede instalarlo un empleado); NO es necesariamente del atacante ni falso.
- **Evil Twin** — AP falso que imita a uno legítimo (mismo SSID, señal más fuerte) para robo de credenciales y MITM.
- **Rogue AP vs Evil Twin** — el Evil Twin imita señal/SSID de un AP real; el Rogue AP no suplanta identidad.
- **Deauthentication attack** — tramas deauth falsificadas que explotan los **802.11 management frames**; fuerza la reconexión y permite capturar el handshake.
- **Deauth vs Disassociation** — deauth termina la autenticación; disassoc termina la asociación.
- **KRACK** (Key Reinstallation Attack) — ataca el 4-way handshake de **WPA2**; no rompe el cifrado por sí solo, reinstala la clave.
- **Replay attack** — reutiliza paquetes capturados; típico contra redes **WEP**.
- **Packet injection** — inyecta paquetes para acelerar el cracking de WEP o interrumpir el tráfico.
- **Jamming** — inunda el espectro con ruido = **Denial of Service**.
- **MITM** — métodos habituales: Evil Twin, Rogue AP, ARP spoofing.

**Trampas de examen**

- _ROGUE ACCESS POINT ATTACK_: Rogue AP is attacker-owned → **NO**
- _ROGUE ACCESS POINT ATTACK_: Rogue AP can be employee-installed → **YES**
> 🧠 *Para recordar:* **Rogue = unauthorized, not fake**

**Para recordar**

- _WIRELESS THREAT — CORE DEFINITION_: **Wireless = open air = exposed**
- _COMMON PASSIVE WIRELESS ATTACKS_: **Passive = listen only**
- _ACTIVE ATTACK CHARACTERISTICS_: **Active = interfere**
- _EXAM TRAP_: **Rogue = unauthorized, not fake**
- _GOAL_: **Evil Twin = fake AP**
- _PURPOSE_: **Deauth = kick users off**
- _DIFFERENCE FROM DEAUTH_: **Deauth ≠ Disassoc**
- _METHODS_: **MITM = attacker in between**
- _COMMONLY TARGETS_: **Replay = reuse packets**
- _METHOD_: **More IVs = faster crack**
- _IMPACT_: **KRACK breaks handshake**
- _PURPOSE_: **Inject = fake packets**
- _RESULT_: **Noise kills Wi-Fi**

### Parte 4 — Wireless Hacking Methodology

[Abrir la nota completa](16%20-%20Part%204%20-%20Wireless%20Hacking%20Methodology.md)

**Lo esencial**

- **Metodología de 5 fases** — Reconnaissance → Scanning → Gaining Access → Maintaining Access → Covering Tracks.
- **Reconnaissance** (pasivo) — airodump-ng, Kismet, NetStumbler, inSSIDer; recopila SSID, BSSID, canal y tipo de cifrado.
- **Scanning** — airmon-ng (modo monitor), iwconfig, wash (detecta APs con WPS).
- **Monitor mode** — captura todo el tráfico sin asociarse al AP; imprescindible para el sniffing.
- **WEP** — capturar paquetes → recopilar **IVs** → crackear la clave; **WPA/WPA2** — capturar el **4-way handshake** (deauth para forzarlo) → crackear el PSK offline.
- **aircrack-ng** — crackea claves WEP/WPA; **aireplay-ng** — deauth e inyección de paquetes; **reaver / bully** — fuerza bruta de WPS.
- `airmon-ng start wlan0` habilita el modo monitor; `aircrack-ng capture.cap` crackea el handshake capturado.
- **WPS PIN attack** — fuerza bruta del PIN de 8 dígitos para obtener acceso.
- **Deauth NO rompe el cifrado** — solo fuerza la reconexión (para capturar el handshake o habilitar un Evil Twin).
- **MAC spoofing** (macchanger) — suplanta un dispositivo autorizado para eludir el filtrado MAC y mantener acceso.
- El **4-way handshake** de WPA2 debe capturarse ANTES de poder crackear la clave.

**Trampas de examen**

- El modo monitor es necesario para sniffing → **SÍ**
- ¿El SSID oculto es seguro? → **NO**
- ¿WPA2 es inmune a ataques? → **NO**
- ¿El deauth rompe el cifrado? → **NO**

**Para recordar**

- _CEH WIRELESS ATTACK METHODOLOGY_: **Recon → Scan → Access → Persist → Hide**
- _TOOLS USED (PASSIVE MODE)_: **Recon = listen only**
- _COMMAND RECOGNITION_: **Monitor mode = hacking mode**
- _COMMAND RECOGNITION_: **Handshake first, crack later**
- _TOOLS_: **Persistence = stay connected**
- _TECHNIQUES_: **No logs, no proof**

### Parte 5 — Wireless Countermeasures

[Abrir la nota completa](16%20-%20Part%205%20-%20Wireless%20Countermeasures.md)

**Lo esencial**

- **Strong encryption** — el control MÁS importante según CEH: WPA3 recomendado, WPA2-AES como mínimo, deshabilitar WEP/WPA.
- **IEEE 802.11w** (Management Frame Protection) — previene los ataques de **deauthentication / disassociation**.
- **WIDS vs WIPS** — WIDS detecta y alerta; WIPS detecta y **previene activamente** (contiene Rogue AP, Evil Twin, deauth, MAC spoofing).
- **MAC address filtering** — NO es seguridad real: se elude trivialmente con **MAC spoofing** (macchanger); las MAC viajan en claro.
- **Hidden SSID** — solo disuasión, NO protección.
- **Disable WPS** — el PIN es vulnerable a fuerza bruta.
- **Enterprise > Personal** — WPA2/WPA3-Enterprise usan servidor **RADIUS** y certificados.
- **Network segmentation** (VLANs) — separa WLAN de LAN, aísla la red de invitados y limita el movimiento lateral.
- **VPN sobre wireless** — cifra el tráfico de extremo a extremo; protege el Wi-Fi abierto.
- **Attack → countermeasure** — Evil Twin / Rogue AP → WIDS/WIPS; Deauth → 802.11w; WEP cracking → WPA3; MITM → cifrado fuerte; Jamming → spectrum analysis.
- **Firmware patching** y **seguridad física** — firmware antiguo = puerta abierta; acceso físico al AP = acceso total.

**Trampas de examen**

- _4. ACCESS POINT CONFIGURATION HARDENING_: Hidden SSID ≠ seguridad  
  Sigue siendo útil como **disuasión**, no como protección.

**Para recordar**

- _WIRELESS SECURITY — CORE DEFINITION_: **Wireless security = prevención + detección**
- _1. STRONG ENCRYPTION_: **No WEP. No WPA.**
- _2. STRONG AUTHENTICATION_: **Enterprise > Personal**
- _3. DISABLE WPS_: **WPS = weak point**
- _5. MAC ADDRESS FILTERING_: **MAC filtering = speed bump**
- _DETECTED THREATS_: **IDS sees, IPS stops**
- _7. NETWORK SEGMENTATION_: **Compartmentalize damage**
- _8. VPN OVER WIRELESS_: **VPN shields wireless**
- _9. REGULAR PATCHING AND FIRMWARE UPDATES_: **Old firmware = open door**
- _10. PHYSICAL SECURITY_: **Physical access = total access**
- _IEEE 802.11w — MANAGEMENT FRAME PROTECTION_: **11w stops deauth**

---

## Módulo 17 — Hacking Mobile Platforms

### Parte 1 — Mobile Attack Vectors

[Abrir la nota completa](17%20-%20Part%201%20-%20Mobile%20Attack%20Vectors.md)

**Lo esencial**

- **Three primary attack points** — Device → Network → Data Center/Cloud (anatomía de un ataque móvil).
- **OWASP Mobile Top 10 2024** — M1 Improper Credential Usage → M2 Supply Chain → M3 Auth → M4 Input/Output → M5 Communication → M6 Privacy → M7 Binary → M8 Misconfiguration → M9 Data Storage → M10 Cryptography.
- **M1 Improper Credential Usage** — credenciales hardcodeadas o mal gestionadas; no confundir con M3 (Insecure Authentication/Authorization) ni M9 (Insecure Data Storage).
- **M7 Insufficient Binary Protections** — reverse engineering, code tampering y ausencia de ofuscación.
- **Browser-based attacks** — Phishing, Framing (iframes ocultos), Clickjacking (engaño de UI), Man-in-the-Mobile (MITMO).
- **Phone/SMS-based attacks** — Baseband attacks (GSM/3GPP), Smishing (phishing por SMS), call-based attacks (números premium).
- **OS-based attacks** — no passcode, Jailbreaking (iOS), Rooting (Android), OS data caching, password cracking, user-initiated code.
- **Network-level attacks** — Wi-Fi sniffing, rogue access points, MITM, session hijacking, DNS poisoning, SSL stripping, fake certificates.
- **Tras el compromiso (Table 17.1)** — Surveillance, Data theft, Botnet activity (DDoS, click fraud), Impersonation.
- **Trustjacking** — un host comprometido con el que el iPhone sincroniza iTunes puede controlarlo por red inalámbrica.
- **IntentFuzzer / Spearphone / aLTEr** — fuzzing del IPC de Android / altavoz + acelerómetro / metadatos de capa 2 de LTE para saber qué sitios visita el usuario.

**Para recordar**

- _Objetivos de aprendizaje_: **Vectors → Android → iOS → MDM → Defense**
- _WHY MOBILE PLATFORMS ARE TARGETED_: **Always on + personal data = prime target**
- _ENTRY POINTS_: **Device → Network → Cloud**
- _OWASP TOP 10 MOBILE RISKS — 2024_: **Credentials → Supply → Auth → Input → Comm → Privacy → Binary → Config → Storage → Crypto**
- _OWASP TOP 10 MOBILE RISKS — 2024_: **Carlos Se Auto Invita a Comer Para Beber Cerveza Sin Cebada** (C·S·A·I·C·P·B·C·S·C → M1…M10)
- _THREE PRIMARY ATTACK POINTS_: **Device → Network → Cloud**
- _ATTACK VECTORS — NETWORK LEVEL_: **Sniff → Intercept → Redirect**
- _WHAT HAPPENS AFTER DEVICE COMPROMISE_: **Spy → Steal → Spread → Impersonate**

### Parte 2 — Android Threats

[Abrir la nota completa](17%20-%20Part%202%20-%20Android%20Threats.md)

**Lo esencial**

- **Android OS** — SO móvil open-source basado en Linux (Google); su apertura lo hace flexible pero atacable (tiendas de terceros, fragmentación, rooting, weak app vetting).
- **Android architecture** — Linux Kernel → HAL → Native Libraries → Android Runtime (ART) → Application Framework → Applications.
- **Threat categories** — Malware, Spyware, Trojans, Ransomware, Botnets, Backdoors, Adware (MST RBB A).
- **Delivery methods** — malicious apps (tiendas de terceros), repackaged apps, drive-by downloads, phishing (actualizaciones falsas), SMS links (smishing).
- **Dangerous permissions** — READ_SMS = robo de OTP · SEND_SMS = fraude premium · RECORD_AUDIO = escucha · CAMERA = vigilancia · ACCESS_FINE_LOCATION = rastreo.
- **Rooting** — acceso de superusuario en Android (en iOS = jailbreaking): deshabilita el sandboxing, evade el modelo de permisos, permite persistencia de malware y rompe los controles MDM.
- **Rooting methods** — explotar vulnerabilidades del OS, desbloquear el bootloader, flashear una custom ROM, apps de rooting maliciosas.
- **Repackaging attack** — app legítima descompilada, modificada con código malicioso y re-firmada ("same app, evil inside").
- **Drive-by download** — visitar un sitio malicioso descarga malware automáticamente, con mínima o ninguna acción de la víctima (≠ repackaging, que altera la app antes de instalarla).
- **Man-in-the-Mobile (MITMO)** — malware que intercepta el tráfico de apps bancarias mediante overlay + interceptación de SMS.
- **ADB (Android Debug Bridge)** — CLI para controlar el dispositivo: `adb devices` (listar), `adb shell`, `adb pull` (desde el dispositivo), `adb push` (al dispositivo), `adb install` (APK).

**Para recordar**

- _ANDROID OS — CORE DEFINITION_: **Open-source = flexible + attackable**
- _ANDROID ARCHITECTURE_: **Kernel → HAL → Runtime → Framework → Apps**
- _ANDROID THREAT CATEGORIES_: **MST RBB A**
- _ANDROID MALWARE DELIVERY METHODS_: **App + Link + SMS**
- _DANGEROUS PERMISSIONS_: **SMS = money, mic = spy**
- _ROOTING — SECURITY IMPACT_: **Root = no rules**
- _1. REPACKAGING ATTACK_: **Same app, evil inside**
- _4. MAN-IN-THE-MOBILE (MITMO)_: **MITM on mobile = MITMO**
- _COMMON ADB COMMANDS_: **ADB = control channel**

### Parte 3 — iOS Threats

[Abrir la nota completa](17%20-%20Part%203%20-%20iOS%20Threats.md)

**Lo esencial**

- **iOS security model** — Code signing (solo apps firmadas), Sandboxing (aislamiento), Secure Boot Chain (integridad en el arranque), App Store vetting, Data Protection API (cifrado por archivo ligado al passcode).
- **Jailbreaking** — eliminar las restricciones de iOS para obtener root (en Android = rooting): desactiva code signing enforcement y sandbox, permite apps no autorizadas y rompe MDM.
- **Tipos de jailbreak** — Tethered (computadora en cada arranque) · Semi-tethered (re-jailbreak con computadora) · Semi-untethered (re-jailbreak con una app en el propio dispositivo) · Untethered (persistente, sobrevive a reinicios).
- **Enterprise certificate abuse** — certificados empresariales de Apple usados para instalar apps maliciosas sin pasar por la revisión de la App Store.
- **Configuration profile attacks** — perfiles maliciosos que instalan VPN, proxy o certificados para interceptar tráfico (MITM) de forma silenciosa.
- **iOS data storage** — Keychain (credenciales; no invulnerable con jailbreak), SQLite DB (texto plano), Plist files (fugas de configuración), cache files (residuos sensibles).
- **Network-based attacks / spyware** — Rogue Wi-Fi, MITM, SSL stripping, fake certificates / grabación de llamadas, SMS, GPS, datos de apps.
- **Frida / Objection** — instrumentación dinámica en runtime (iOS y Android) / framework de análisis runtime de iOS construido sobre Frida.
- **Cydia / iFunBox** — gestor de paquetes en dispositivos con jailbreak / acceso al sistema de archivos.
- **Android vs iOS** — open vs closed · rooting vs jailbreaking · app vetting débil vs fuerte · custom ROMs sí vs no · enterprise abuse menos vs más.

**Para recordar**

- _iOS — CORE DEFINITION_: **Closed-source ≠ immune**
- _iOS SECURITY MODEL_: **Sign → Sandbox → Secure Boot**
- _JAILBREAKING — DEFINITION_: **Jailbreak = root access**
- _JAILBREAKING — SECURITY IMPACT_: **No sandbox, no trust**
- _TYPES OF JAILBREAK_: **Un-tethered = persistent**
- _2. ENTERPRISE CERTIFICATE ABUSE_: **Enterprise cert = bypass gatekeeper**
- _3. CONFIGURATION PROFILE ATTACKS_: **Profile = silent control**
- _iOS DATA STORAGE LOCATIONS_: **Keychain ≠ invincible**
- _iOS SECURITY TOOLS_: **Frida = runtime control**
- _ANDROID VS iOS — EXAM COMPARISON_: **Android = open risk, iOS = controlled risk**

### Parte 4 — MDM and BYOD

[Abrir la nota completa](17%20-%20Part%204%20-%20MDM%20and%20BYOD.md)

**Lo esencial**

- **MDM (Mobile Device Management)** — monitoriza, gestiona y asegura los móviles de la organización: control + policy + enforcement.
- **MDM architecture** — MDM Server (consola central) → MDM Agent (en el dispositivo) → Policy Engine (aplica las reglas), unidos por un Communication Channel seguro.
- **Deployment models** — On-Premises (interno), Cloud-Based (proveedor), Hybrid.
- **Funcionalidades** — device enrollment, policy enforcement, app management, content control, remote wipe/lock, location tracking, compliance monitoring.
- **Containerization** — aísla datos y apps corporativos de los personales; permite selective wipe y es BYOD-friendly.
- **Remote wipe vs Selective wipe** — remote wipe borra todo el dispositivo; selective wipe solo los datos corporativos y conserva los personales.
- **App whitelisting vs blacklisting** — whitelisting solo permite apps aprobadas (más seguro, "whitelist beats blacklist"); blacklisting bloquea apps de riesgo conocidas.
- **Jailbreak/root detection** — política MDM que detecta y marca/bloquea dispositivos comprometidos.
- **MDM limitations (EXAM TRAP)** — no detiene zero-days ni ingeniería social; los dispositivos rooted/jailbroken evaden los controles; depende de que el usuario cumpla.
- **MDM ⊂ EMM ⊂ UEM** — MDM = dispositivos; EMM = dispositivos + apps + contenido; UEM = todos los endpoints (móvil, escritorio, IoT).
- **MDM solutions** — Microsoft Intune (MDM cloud de Microsoft), VMware Workspace ONE, IBM MaaS360, MobileIron, Cisco Meraki MDM.

**Para recordar**

- _MDM — CORE DEFINITION_: **MDM = control + policy + enforcement**
- _MDM — PRIMARY OBJECTIVES_: **Secure, Enforce, Control, Monitor, Respond**
- _MDM ARCHITECTURE_: **Server → Agent → Policy**
- _MDM FUNCTIONALITIES_: **Enroll → Control → Enforce → Wipe**
- _SECURITY POLICIES ENFORCED BY MDM_: **Password, Encrypt, Detect, Restrict**
- _MDM — APP MANAGEMENT_: **Whitelist beats blacklist**
- _CONTAINERIZATION — DEFINITION_: **Work separated from personal**
- _REMOTE ACTIONS VIA MDM_: **Lost device = wipe**
- _MDM SECURITY LIMITATIONS_: **MDM ≠ invincible**
- _COMMON MDM SOLUTIONS_: **Intune = Microsoft**
- _MDM VS EMM VS UEM_: **MDM ⊂ EMM ⊂ UEM**

### Parte 5 — Mobile Security Tools

[Abrir la nota completa](17%20-%20Part%205%20-%20Mobile%20Security%20Tools.md)

**Lo esencial**

- **Mobile security** — protege dispositivo + app + datos; las amenazas apuntan al SO, las apps, las redes y los usuarios (Android es abierto, iOS es controlado).
- **Device-level guidelines** — bloqueo de pantalla fuerte, biometría, cifrar el almacenamiento, deshabilitar USB debugging y Bluetooth sin uso, remote wipe, actualizar el SO.
- **Network-level guidelines** — evitar Wi-Fi público (o usar VPN), deshabilitar auto-connect, verificar certificados SSL.
- **Enterprise** — MDM + containerization + compliance policies + device posture; MDM impone políticas y permite acciones remotas.
- **SAST vs DAST vs IAST** — SAST analiza código fuente/binario sin ejecutar; DAST prueba la app en runtime; IAST combina ambos.
- **Android tools** — Drozer (security assessment de apps), APKTool (reverse engineering/recompilar APK), JADX (DEX → Java), Androguard (análisis estático de malware).
- **Frida / Objection / Cycript** — hooking e instrumentación en runtime (Android e iOS) / manipulación runtime sobre Frida / inspección runtime en iOS.
- **MobSF / Burp Suite** — análisis estático y dinámico automatizado (Android e iOS) / proxy interceptador HTTP/HTTPS (análisis MITM).
- **Malware analysis tools** — VirusTotal (múltiples motores AV), Androguard (estático), Cuckoo Sandbox (dinámico).
- **VPN & certificate management** — certificados de confianza, bloquear CAs instaladas por el usuario y VPN empresarial para prevenir MITM y SSL stripping ("bad cert = MITM").
- **Attack → Defense** — Malware → app vetting + MDM · Smishing → concienciación · MITM → VPN + TLS · Root/Jailbreak → device compliance checks · Data leakage → cifrado · Rogue Wi-Fi → deshabilitar auto-connect.
- **Defensas obligatorias** — cifrado, actualizaciones, VPN y concienciación del usuario ("human = weakest link").

**Para recordar**

- _MOBILE SECURITY — DEFINICIÓN BÁSICA_: **Device + App + Data**
- _OBJETIVOS DE MOBILE SECURITY_: **Protect, Prevent, Detect**
- _DIRECTRICES DE SEGURIDAD A NIVEL DE DISPOSITIVO_: **Lock, Encrypt, Update**
- _DIRECTRICES DE SEGURIDAD A NIVEL DE APLICACIÓN_: **Trust source, limit permissions**
- _DIRECTRICES DE SEGURIDAD A NIVEL DE RED_: **Public Wi-Fi = VPN required**
- _DIRECTRICES DE SEGURIDAD A NIVEL DE DATOS_: **Encrypt at rest and transit**
- _MOBILE SECURITY PARA AMBIENTES EMPRESARIALES_: **Enterprise = MDM + Policy**
- _MOBILE APPLICATION SECURITY TESTING (MAST)_: **Static sees code, Dynamic sees behavior**
- _HERRAMIENTAS DE SEGURIDAD ANDROID_: **Drozer probes, APKTool breaks**
- _HERRAMIENTAS DE SEGURIDAD iOS_: **Frida everywhere**
- _VPN Y GESTIÓN DE CERTIFICADOS_: **Bad cert = MITM**
- _CONCIENCIACIÓN DEL USUARIO_: **Human = weakest link**

---

## Módulo 18 — IoT and OT Hacking

### Parte 1 — IoT Concepts

[Abrir la nota completa](18%20-%20Part%201%20-%20IoT%20Concepts.md)

**Lo esencial**

- **IoT vs IoE** — IoT ⊂ IoE: Internet of Everything abarca personas, datos, procesos y cosas.
- **Arquitectura IoT (arriba → abajo)** — Application → Middleware → Internet → Access Gateway → Edge Technology Layer.
- **Edge Technology Layer** — capa inferior: sensores, RFID, actuadores y dispositivos embebidos.
- **Access Gateway Layer** — autenticación de dispositivos, enrutamiento de mensajes, traducción de protocolos y agregación de datos.
- **Middleware Layer** — gestión de dispositivos, filtrado de datos, control de acceso y analítica.
- **Modelos de comunicación** — Device-to-Device (Bluetooth, ZigBee), Device-to-Cloud (Wi-Fi, celular), Device-to-Gateway (el gateway intermedia y traduce protocolos), Back-End Data-Sharing (la nube comparte datos con terceros).
- **MQTT vs CoAP** — MQTT: publish/subscribe ligero, "rey de la mensajería IoT" (TCP 1883, 8883 con TLS); CoAP: "HTTP ligero" sobre UDP 5683.
- **Largo alcance y bajo consumo (LPWAN)** — LoRaWAN, Sigfox (cargas pequeñas) y NB-IoT (celular); VSAT = satélite.
- **Corto / medio alcance** — ZigBee (malla, baja tasa de datos), Z-Wave (hogar inteligente), BLE, NFC, ANT (wearables); 6LoWPAN = IPv6 de bajo consumo.
- **PLC en comunicación cableada** — aquí es Power-Line Communication (datos por la red eléctrica), no el Programmable Logic Controller de OT.
- **IoT OS** — Amazon FreeRTOS (AWS), TinyOS (redes de sensores), Ubuntu Core (snaps), RIOT (ligero), Zephyr (bajo consumo), Windows 10 IoT.
- **Desafíos de IoT** — credenciales por defecto, cifrado débil, interfaces web inseguras y parches difíciles: "barato + conectado = vulnerable".

**Trampas de examen**

- _WIRED COMMUNICATION — COMUNICACIÓN CABLEADA_: Aquí **PLC = Power-Line Communication**; en OT, **PLC = Programmable Logic Controller**.

**Para recordar**

- _QUÉ ES IoT — DEFINICIÓN BÁSICA_: **Cosas + Sensores + Internet**
- _IoT vs IoE_: **IoT ⊂ IoE**
- _CÓMO FUNCIONA IoT_: **Sentir → Enviar → Almacenar → Analizar → Actuar**
- _CAPAS DE IoT (ARRIBA → ABAJO)_: **Application → Middleware → Internet → Access Gateway → Edge Technology**
- _ÁREAS DE APLICACIÓN DE IoT_: **Hogar, Salud, Industria, Transporte**
- _LONG-RANGE WIRELESS — INALÁMBRICO DE LARGO ALCANCE_: **LoRa + Sigfox = largo alcance, bajo consumo**
- _SISTEMAS OPERATIVOS DE IoT_: **FreeRTOS = Amazon**
- _PROTOCOLOS DE APLICACIÓN DE IoT_: **MQTT = rey de la mensajería IoT**
- _PROTOCOLOS DE APLICACIÓN DE IoT_: **MQTT: TCP 1883 (8883 con TLS) · CoAP: UDP 5683 (5684 con DTLS)**
- _BACK-END DATA-SHARING — COMPARTICIÓN DE DATOS EN BACK-END_: **D2D, D2C, D2G, Back-end**
- _DESAFÍOS DE IoT_: **Barato + conectado = vulnerable**

### Parte 2 — IoT Threats and Attacks

[Abrir la nota completa](18%20-%20Part%202%20-%20IoT%20Threats%20and%20Attacks.md)

**Lo esencial**

- **IoT attack surface** — todas las capas son atacables: device (firmware, puertos hardware), network, gateway, cloud (APIs) y application.
- **IoT threat categories** — Physical, Network-based, Software, Cloud y Supply chain attacks.
- **Physical tampering** — acceso por JTAG o UART, chip-off y side-channel attacks: "acceso físico = root".
- **Firmware tampering** — modificar la imagen de firmware a través del mecanismo de actualización → backdoor persistente.
- **Default credential attack** — usuarios/contraseñas por defecto → toma de control completa del dispositivo.
- **MQTT attacks** — suscripción no autorizada a topics, message injection y broker compromise ("MQTT sin auth = broadcast").
- **CoAP attacks** — amplification, spoofing y replay (CoAP funciona sobre UDP).
- **Jamming** — interferencia inalámbrica → DoS contra ZigBee y Bluetooth.
- **Mirai** — escanea Telnet/SSH y entra con credenciales por defecto → DDoS masivo; otras botnets IoT: Reaper, Hajime, Bashlite, Mozi.
- **Flujo de un DDoS con botnet IoT** — Scan → Infect → Control (C2) → Flood.
- **Supply chain attacks** — firmware comprometido, actualizaciones maliciosas, backdoors en librerías de terceros y chips maliciosos (hardware backdoors).
- **HMI attack** — ataque a la Human Machine Interface (monitor, pantalla táctil), típico de entornos OT.

**Para recordar**

- _IoT THREAT — CORE DEFINITION_: **Threat exploits weakness**
- _WHY IoT DEVICES ARE HIGHLY VULNERABLE_: **Cheap, old, exposed**
- _IoT ATTACK SURFACE_: **Every layer is attackable**
- _1. DEFAULT CREDENTIAL ATTACK_: **Default creds = instant access**
- _2. FIRMWARE TAMPERING_: **Firmware = permanent control**
- _3. PHYSICAL TAMPERING_: **Physical access = root**
- _MQTT ATTACKS_: **MQTT without auth = broadcast**
- _4. JAMMING ATTACKS_: **Noise = DoS**
- _MIRAI BOTNET_: **Mirai = IoT DDoS**
- _IoT DDoS ATTACK FLOW_: **Scan → Infect → Control → Flood**
- _SUPPLY CHAIN ATTACKS_: **Trust vendor = risk**

### Parte 3 — IoT Hacking Tools and Techniques

[Abrir la nota completa](18%20-%20Part%203%20-%20IoT%20Hacking%20Tools%20and%20Techniques.md)

**Lo esencial**

- **IoT Hacking Methodology (CEH)** — Information Gathering → Vulnerability Scanning → Launch Attacks → Gain Remote Access → Maintain Access.
- **JTAG** — interfaz de depuración hardware: leer memoria (extraer firmware), escribirla (modificar firmware) y controlar la ejecución (bypass de autenticación) = "hardware root shell".
- **UART** — consola serie de depuración, a menudo sin autenticación; con un adaptador USB-to-TTL se obtiene una root shell.
- **Chip-off attack** — extraer físicamente el chip de memoria; se usa cuando JTAG/UART están deshabilitados o el firmware está mal cifrado.
- **Firmware extraction** — JTAG, UART, flash memory dump, OTA update interception o descarga desde la web del fabricante.
- **Static vs Dynamic analysis** — estático: analizar el código sin ejecutarlo; dinámico: ejecutar el firmware en un emulador.
- **Vulnerabilidades de firmware** — hardcoded credentials (el usuario no puede cambiarlas), insecure update mechanism, backdoors, debug code habilitado y cifrado débil.
- **MQTT** — broker (hub central) + topics; ataques: suscribirse sin autenticación, publicar mensajes falsos, broker takeover.
- **CoAP** — "HTTP ligero" sobre UDP → amplification, replay y spoofing ("UDP = spoofable").
- **Shodan vs Censys** — Shodan = "Google para dispositivos" (puertos abiertos, dispositivos IoT, credenciales por defecto, versiones de firmware); Censys = descubrimiento de activos a escala de Internet.
- **Frameworks de explotación** — RouterSploit (routers e IoT), Metasploit (general), ExploitDB (base de datos de vulnerabilidades).
- **Malware/botnets IoT** — escanean la red, hacen fuerza bruta por Telnet/SSH, descargan el payload y se conectan al C2 ("Telnet = IoT graveyard").

**Trampas de examen**

- _IoT HACKING PHASES_: No confundir con el ciclo genérico de hacking (Reconnaissance → Scanning → Gaining access → Maintaining access → Covering tracks): la **IoT Hacking Methodology** de CEH termina en **Maintain Access**.

**Para recordar**

- _WHAT IS IoT HACKING_: **Device + Firmware + Network + Cloud**
- _IoT HACKING PHASES_: **Gather → Scan → Attack → Remote access → Maintain**
- _HOW ATTACKERS USE JTAG_: **JTAG = hardware root shell**
- _ATTACK FLOW_: **UART = hidden console**
- _USED WHEN_: **Chip removed = data exposed**
- _FIRMWARE ANALYSIS TECHNIQUES_: **Firmware = device brain**
- _COMMON FIRMWARE VULNERABILITIES_: **Hardcoded creds never change**
- _ATTACKS ON MQTT_: **No auth MQTT = open mic**
- _ATTACKS_: **UDP = spoofable**
- _WHAT SHODAN FINDS_: **Shodan = Google for devices**
- _NMAP (IoT USE)_: **Scan before exploit**
- _COMMON BOTNET EXPLOIT METHODS_: **Telnet = IoT graveyard**

### Parte 4 — OT Concepts and Attacks

[Abrir la nota completa](18%20-%20Part%204%20-%20OT%20Concepts%20and%20Attacks.md)

**Lo esencial**

- **IT vs OT** — IT prioriza confidentiality; OT prioriza availability y safety (downtime peligroso, parches raros, protocolos industriales).
- **PLC / RTU / HMI** — PLC = "cerebro industrial" (señales de sensores → comandos a actuadores); RTU = "PLC remoto" en SCADA; HMI = panel/pantalla del operador.
- **SCADA** — Supervisory Control and Data Acquisition: monitorización, control, adquisición de datos y gestión de alarmas.
- **Purdue Model (niveles)** — 0 proceso físico → 1 PLC/RTU → 2 SCADA/HMI → 3 operaciones (MES) → IDMZ → 4 business logistics (ERP) → 5 red empresarial.
- **Modbus** — sin autenticación ni cifrado por defecto: permite leer/escribir registros (TCP 502).
- **DNP3** — Distributed Network Protocol de las compañías eléctricas, sin cifrado nativo (puerto 20000).
- **BACnet / PROFIBUS / PROFINET** — BACnet = automatización de edificios y HVAC (UDP 47808); PROFIBUS = bus de campo; PROFINET = basado en Ethernet.
- **Por qué OT es vulnerable** — sistemas legacy, sin autenticación, redes planas, largo ciclo de vida y safety over security.
- **Ataques OT** — unauthorized command execution, process manipulation ("sensores que mienten"), DoS, MITM y ransomware → daño físico y paradas de planta.
- **Stuxnet** — primera ciberarma: atacó PLCs y saboteó centrifugadoras usando zero-days (ataque ciberfísico).
- **Triton/Trisis vs BlackEnergy** — Triton atacó los sistemas de seguridad (SIS), con impacto potencialmente letal; BlackEnergy atacó la red eléctrica (apagón en Ucrania).
- **OT attack flow** — compromiso de la red IT → movimiento lateral a OT → abuso de protocolos → manipulación de procesos → impacto físico.

**Trampas de examen**

- _OT VS IT_: En OT, **safety** = seguridad física (personas, equipos, entorno) y **security** = ciberseguridad; en español ambas se traducen como "seguridad".
- _PURDUE MODEL / ISA-95 — NIVELES_: Los niveles 0–5 son los del **Purdue Model** (ISA-95): Levels 0–3 = Manufacturing Zone (OT), Levels 4–5 = Enterprise Zone (IT), con la IDMZ entre ambas. ISA/IEC 62443 toma este modelo como referencia, pero lo propio de **ISA/IEC 62443** es la segmentación en **zones and conduits** (ver Parte 5).

**Para recordar**

- _WHAT IS OT — CORE DEFINITION_: **OT controls the physical world**
- _OT VS IT_: **IT = data, OT = safety**
- _PLC — DETAILED EXPLANATION_: **PLC = industrial brain**
- _RTU — DETAILED EXPLANATION_: **RTU = remote PLC**
- _HMI — DETAILED EXPLANATION_: **HMI = human control panel**
- _SCADA FUNCTIONS_: **SCADA supervises everything**
- _PURDUE MODEL / ISA-95 — NIVELES_: **0 = process, 5 = business**
- _MODBUS — EXPLAINED_: **Modbus = no auth**
- _BACnet_: **Puertos OT: Modbus TCP 502 · DNP3 20000 · BACnet/IP UDP 47808**
- _WHY OT SYSTEMS ARE VULNERABLE_: **Old + critical = vulnerable**
- _2. PROCESS MANIPULATION_: **Lying sensors = chaos**
- _STUXNET_: **Stuxnet = cyber-physical attack**
- _OT ATTACK FLOW_: **IT breach → OT damage**

### Parte 5 — IoT and OT Countermeasures

[Abrir la nota completa](18%20-%20Part%205%20-%20IoT%20and%20OT%20Countermeasures.md)

**Lo esencial**

- **Device-level** — deshabilitar JTAG/UART/puertos de depuración en producción, secure boot, hardware root of trust y tamper detection.
- **Secure boot** — garantiza que solo arranque firmware de confianza (firmado).
- **Firmware signing vs encrypted firmware** — el cifrado por sí solo NO basta: el firmware debe ir firmado; además, secure OTA updates y eliminar las hardcoded credentials.
- **Autenticación** — contraseñas fuertes, certificate-based authentication, RBAC y least privilege: todo dispositivo debe autenticarse.
- **Protocol hardening** — MQTT → autenticación + TLS; CoAP → DTLS; HTTP → HTTPS.
- **Network segmentation** — IoT nunca en una red plana: segmentación, VLANs y firewalls.
- **Zones and conduits (IEC 62443)** — las zones agrupan activos con el mismo nivel de riesgo; los conduits son las rutas de comunicación controladas entre zones.
- **IT → OT** — nunca comunicación directa: DMZ como zona de amortiguamiento entre IT y OT.
- **Protocolos OT** — la mayoría no tiene seguridad nativa: Modbus → gateways seguros; DNP3 → Secure Authentication; BACnet → aislamiento de red.
- **Patching en OT** — probar parches offline, ventanas de mantenimiento y solo actualizaciones aprobadas por el fabricante ("con cuidado, no con frecuencia").
- **Monitorización en OT** — passive monitoring + anomaly detection; los controles de seguridad no deben interrumpir las operaciones.
- **Estándares** — IEC 62443 = seguridad OT ("la biblia del OT"); NIST SP 800-82 = seguridad ICS; OWASP IoT Top 10 = riesgos IoT.

**Trampas de examen**

- _FIRMWARE-LEVEL COUNTERMEASURES_: El cifrado del firmware (encrypted firmware) por sí solo NO es suficiente sin firma (**firmware signing**).
- _NETWORK SEGMENTATION IN OT_: La comunicación directa de IT a OT no es segura: debe pasar por la DMZ.
- _PROTOCOL SECURITY IN OT_: La mayoría de los protocolos OT carecen de seguridad nativa.
- El cifrado por sí solo es suficiente → **Falso — p. ej., el firmware cifrado debe ir además firmado (firmware signing)**
- Se puede parchear OT como se hace con IT → **Falso — probar offline, ventanas de mantenimiento y parches aprobados por el fabricante**
- Las redes planas son aceptables → **Falso — segmentar (VLANs, firewalls, zones and conduits, DMZ)**
- Safety > security significa ignorar la ciberseguridad → **Falso — se prioriza la seguridad física (safety), pero los controles de ciberseguridad siguen siendo necesarios**

**Para recordar**

- _WHY COUNTERMEASURES ARE CRITICAL_: **Seguridad débil = daño en el mundo real**
- _DEVICE-LEVEL COUNTERMEASURES_: **No hay puertos de depuración en producción**
- _FIRMWARE-LEVEL COUNTERMEASURES_: **Firmware firmado + cifrado (signed + encrypted)**
- _AUTHENTICATION & ACCESS CONTROL_: **Todo dispositivo debe autenticarse**
- _SEGMENTATION_: **IoT nunca en red plana**
- _PROTOCOL HARDENING_: **Los protocolos en texto plano no son seguros**
- _ZONE AND CONDUIT MODEL (IEC 62443)_: **Zones isolate, conduits control — las zonas aíslan, los conductos controlan**
- _ACCESS CONTROL IN OT_: **Operadores ≠ administradores**
- _PATCHING & CHANGE MANAGEMENT_: **Aplicar parches con cuidado, no con frecuencia**
- _PHYSICAL SECURITY (IOT + OT)_: **Acceso físico = compromiso total**
- _SECURITY STANDARDS & FRAMEWORKS_: **62443 = la biblia del OT**

---

## Módulo 19 — Cloud Computing

### Parte 1 — Cloud Concepts

[Abrir la nota completa](19%20-%20Part%201%20-%20Cloud%20Concepts.md)

**Lo esencial**

- **Cloud computing** — entrega bajo demanda de capacidades de TI a través de Internet con pago por uso (*On-demand + Internet + Metered*).
- **NIST SP 800-145** — 5 características esenciales: on-demand self-service, broad network access, resource pooling, rapid elasticity y measured service.
- **On-demand self-service** — el usuario aprovisiona recursos sin interacción humana; **resource pooling** = recursos del proveedor compartidos entre múltiples inquilinos.
- **IaaS** — el proveedor da VMs, almacenamiento y red; el cliente gestiona SO, aplicaciones y datos (el modelo con más control; ej. AWS EC2).
- **PaaS** — plataforma de desarrollo: el cliente solo gestiona el código; el proveedor, SO, runtime y middleware (ej. Google App Engine).
- **SaaS** — aplicación lista para usar desde el navegador (Gmail, Salesforce, Microsoft 365); desventajas: dependencia de Internet y vendor lock-in.
- **IDaaS / SECaaS / CaaS / FaaS / XaaS** — identidad (MFA, SSO; Okta), seguridad (IDS, IPS, DLP, SIEM), contenedores (EKS, GKE), código event-driven sin servidores (AWS Lambda), cualquier servicio.
- **Shared responsibility model** — más servicio = menos control; la seguridad NUNCA es solo del proveedor. Los service models definen la responsabilidad; los deployment models, la propiedad.
- **Hybrid vs multi-cloud** — hybrid = público + privado; multi-cloud = varios proveedores (AWS + Azure) para evitar vendor lock-in.
- **Private vs community cloud** — private = una sola organización (alta seguridad, alto coste); community = varias organizaciones con necesidades regulatorias comunes.
- **NIST cloud reference architecture** — 5 actores: cloud consumer, provider, carrier (conectividad y transporte), broker (negocia entre proveedor y consumidor) y auditor (evaluación independiente).
- **MITC (Man-in-the-Cloud)** — se evita con un **CASB** (Cloud Access Security Broker); **Docker daemon** = atiende las peticiones de la API y gestiona los objetos Docker.

**Trampas de examen**

- _KEY CHARACTERISTICS OF CLOUD COMPUTING_: NIST (SP 800-145) define **5 características esenciales**: on-demand self-service, broad network access, resource pooling, rapid elasticity y measured service. *Automated management* no es una de las 5 de NIST.
- _LIMITATIONS OF CLOUD COMPUTING_: La nube NO garantiza la seguridad automáticamente.
- _TYPES OF CLOUD COMPUTING SERVICES_: NIST solo define **3 service models**: IaaS, PaaS y SaaS. IDaaS, SECaaS, CaaS, FaaS y XaaS son categorías adicionales, no modelos NIST.
- _SHARED RESPONSIBILITY MODEL_: La seguridad NO es responsabilidad exclusiva del proveedor.
- _CLOUD DEPLOYMENT MODELS_: NIST define **4 deployment models**: public, private, community y hybrid. Multi-cloud no es un modelo NIST.

**Para recordar**

- _CLOUD COMPUTING — CORE EXAM DEFINITION_: **On-demand + Internet + Metered**
- _KEY CHARACTERISTICS OF CLOUD COMPUTING_: **On-demand, pooled, elastic, measured**
- _DISADVANTAGES_: **IaaS = alquilar hardware**
- _DISADVANTAGES_: **PaaS = desarrollar apps**
- _DISADVANTAGES_: **SaaS = usar software**
- _DISADVANTAGES_: **IDaaS = identidad / login en la nube**
- _SECURITY-AS-A-SERVICE (SECaaS)_: **SECaaS = externalizar la seguridad**
- _CONTAINER-AS-A-SERVICE (CaaS)_: **CaaS = contenedores**
- _FUNCTION-AS-A-SERVICE (FaaS)_: **FaaS = solo código**
- _ANYTHING-AS-A-SERVICE (XaaS)_: **XaaS = cualquier cosa como servicio**
- _SHARED RESPONSIBILITY MODEL_: **Más servicio = menos control**
- _MULTI-CLOUD_: **Hybrid = mezcla (público + privado), Multi = varios proveedores**

### Parte 2 — Cloud Threats

[Abrir la nota completa](19%20-%20Part%202%20-%20Cloud%20Threats.md)

**Lo esencial**

- **Misconfiguration** — causa nº 1 de brechas en cloud (S3 buckets públicos, almacenamiento abierto, credenciales por defecto, IAM excesivamente permisivo); la mayoría de ataques explotan errores de configuración, no vulnerabilidades.
- **Insecure interfaces and APIs** — las APIs son la superficie de ataque PRINCIPAL en cloud (cloud = API-driven).
- **Account or service hijacking** — el atacante toma la cuenta cloud (phishing, robo de credenciales) y obtiene el control total de los recursos.
- **Data breach vs data loss** — breach = acceso no autorizado (IAM débil, misconfiguration); loss = pérdida permanente (borrado accidental, ransomware).
- **Shared technology vulnerabilities** — debilidades en componentes compartidos (hypervisor) que permiten cross-tenant attacks.
- **Metadata service attack** — SSRF contra la API de metadatos de la instancia para robar credenciales y tokens.
- **Cloud malware injection** — el atacante inyecta un servicio malicioso que la nube trata como una instancia legítima.
- **VM escape vs side-channel** — VM escape = salir de la VM y comprometer el hypervisor/host (raro pero crítico); side-channel = fuga de información entre VMs co-residentes (cache timing).
- **IAM misuse / token theft** — roles con exceso de privilegios, sin MFA, credenciales de larga duración; tokens robados vía XSS, malware o SSRF.
- **Herramientas** — ScoutSuite (auditoría cloud), Prowler (evaluación de seguridad de AWS), Pacu (explotación de AWS), CloudSploit (escaneo de misconfiguration).
- **Cloud attack flow** — recon de activos → misconfiguration → explotar IAM/API → escalar privilegios → mantener acceso.
- **Trampas** — la nube no es segura por defecto, el proveedor no gestiona toda la seguridad, el cifrado no evita brechas y el auto-scaling no frena del todo un DDoS.

**Trampas de examen**

- _DATA BREACH_: El proveedor cloud NO previene las data breaches automáticamente.
- _INSECURE INTERFACES AND APIs_: Las APIs son la superficie de ataque PRINCIPAL en cloud.
- _DENIAL OF SERVICE (DoS/DDoS)_: El auto-scaling NO detiene por completo un DDoS.
- _VM ESCAPE ATTACK_: Poco frecuente, pero crítico.
- La nube es segura por defecto → **Falso**
- El proveedor se encarga de toda la seguridad → **Falso**
- El cifrado (encryption) previene las brechas → **Falso**
- No hace falta monitorizar → **Falso**

**Para recordar**

- _WHY CLOUD IS A TARGET_: **Shared + exposed + misconfigured**
- _DATA BREACH_: **Misconfig = data leak**
- _ACCOUNT OR SERVICE HIJACKING_: **Cuenta = las llaves del reino**
- _INSECURE INTERFACES AND APIs_: **Cloud = API-driven**
- _MISCONFIGURATION_: **La mayoría de brechas cloud = misconfig**
- _SHARED TECHNOLOGY VULNERABILITIES_: **Hardware compartido = riesgo compartido**
- _ABUSE AND NEFARIOUS USE OF CLOUD SERVICES_: **Cloud = infraestructura del atacante**
- _CLOUD MALWARE INJECTION ATTACK_: **Ataque de instancia falsa**
- _METADATA SERVICE ATTACK_: **Metadata = almacén de secretos**
- _IAM MISUSE_: **Errores de IAM = brecha**
- _CLOUD ATTACK FLOW_: **Recon → Misconfig → IAM → Control**

### Parte 3 — Cloud Attacks

[Abrir la nota completa](19%20-%20Part%203%20-%20Cloud%20Attacks.md)

**Lo esencial**

- **Cloud attack surface** — consola de gestión, APIs, IAM, storage, VMs, contenedores y metadata services (*Console + API + IAM = control*).
- **Recon / OSINT** — Shodan y Censys (activos cloud expuestos), Amass (DNS enumeration), theHarvester (correos y dominios).
- **Storage enumeration** — descubrir S3 buckets, Azure blobs y Google buckets públicos adivinando nombres; public storage = data leak.
- **Privilege escalation in cloud** — se basa en POLÍTICAS (role chaining, policy abuse, misconfigured trust relationships), no en exploits de kernel.
- **Metadata service** — endpoint interno accesible sin autenticación desde la VM: SSRF → metadata → credenciales.
- **Credential harvesting** — phishing, malware, secretos filtrados en GitHub y abuso del metadata service.
- **Container escape / image poisoning** — escape por privileged containers, vulnerabilidades del kernel o namespaces mal configurados; poisoning = imágenes con backdoor en registros públicos.
- **Herramientas AWS** — Pacu (framework de explotación), Prowler (auditoría), CloudMapper (visualización); ScoutSuite = auditoría multi-cloud.
- **Herramientas Azure / GCP** — MicroBurst (pentesting de Azure), Stormspotter (mapa de attack paths en Azure), GCPBucketBrute (enumeración de buckets de GCP).
- **API attacks** — broken authentication, broken authorization, excessive data exposure e injection attacks.
- **Cloud log evasion** — deshabilitar logging, borrar trails, rotar keys; el borrado de logs es una señal de alerta.
- **Trampas** — VM escape NO es común, los ataques a IAM no necesitan exploits y los atacantes persisten con keys y roles.

**Trampas de examen**

- _PRIVILEGE ESCALATION IN CLOUD_: La escalada de privilegios en la nube se basa en POLÍTICAS, no en el kernel.
- _CLOUD LOG EVASION TECHNIQUES_: La eliminación de logs es una señal de alerta en los exámenes.
- VM escape es común → **Falso**
- Los ataques IAM necesitan exploits → **Falso**
- Los ataques en la nube se basan en la red → **Falso**
- El cifrado detiene a los atacantes → **Falso**

**Para recordar**

- _CLOUD ATTACK SURFACE_: **Console + API + IAM = control**
- _OSINT TOOLS FOR CLOUD RECON_: **El recon empieza fuera de la nube**
- _STORAGE ENUMERATION_: **Public storage = data leak**
- _CREDENTIAL HARVESTING_: **Credenciales = acceso a la nube**
- _PRIVILEGE ESCALATION IN CLOUD_: **Políticas = poder**
- _ATTACK METHOD_: **SSRF → metadata → creds**
- _CONTAINER ESCAPE_: **Container ≠ VM**
- _API ATTACK TECHNIQUES_: **Las APIs son la nube**
- _CLOUD ATTACK FLOW_: **Find → Misconfig → IAM → Persist**

### Parte 4 — Cloud Security

[Abrir la nota completa](19%20-%20Part%204%20-%20Cloud%20Security.md)

**Lo esencial**

- **Shared responsibility model** — proveedor = security OF the cloud (data centers, hardware, red, hypervisor, seguridad física); cliente = security IN the cloud (datos, IAM, SO y apps, cifrado, parches).
- **Responsabilidad del cliente** — el cliente SÍ responde de las brechas por misconfiguration; la mala configuración de IAM causa la mayoría de las brechas.
- **IAM** — primera línea de defensa: least privilege, MFA, roles en lugar de access keys, key rotation, conditional access y evitar la cuenta root.
- **Security Groups vs NACLs** — Security Groups = stateful, a nivel de instancia; Network ACLs = stateless, a nivel de subnet.
- **Data protection** — encryption at rest y in transit (TLS), KMS, HSM y customer-managed keys con rotación automática; el cifrado solo protege si las claves están seguras.
- **Storage hardening** — desactivar el acceso público, bucket policies, access logging y object versioning; el storage público es la causa más común de filtraciones.
- **Container security** — los contenedores comparten el kernel: trusted images, image scanning, runtime monitoring y least privilege.
- **CloudTrail vs CloudWatch vs GuardDuty** — CloudTrail = registro de la actividad de API; CloudWatch = monitorización de recursos y métricas; GuardDuty = detección de amenazas.
- **Herramientas defensivas** — nativas: GuardDuty (AWS), Defender for Cloud (Azure), Security Command Center (GCP); Prisma Cloud y Wiz = CSPM.
- **Disaster recovery models** — backup and restore → pilot light → warm standby → multi-site (más disponibilidad = más coste).
- **Cloud incident response** — detectar → contener → analizar la causa raíz → erradicar → recuperar → revisión post-incidente.
- **Logging** — los atacantes borran logs para cubrir sus huellas: habilitar logs por defecto, centralizarlos y proteger su integridad.

**Trampas de examen**

- _SHARED RESPONSIBILITY MODEL_: Los clientes SON responsables de las filtraciones de datos causadas por mala configuración.
- _VIRTUAL NETWORK SECURITY_: Los Security Groups son STATEFUL; los NACLs son STATELESS.
- _STORAGE HARDENING_: La exposición pública de almacenamiento es la causa más común de filtraciones en la nube.
- _LOGGING BEST PRACTICES_: Los atacantes eliminan logs para cubrir sus huellas.
- El proveedor maneja toda la seguridad → **Falso**
- El cifrado (encryption) previene filtraciones → **Falso**
- Los logs son opcionales → **Falso**
- La nube es inherentemente segura → **Falso**

**Para recordar**

- _SHARED RESPONSIBILITY MODEL_: **Provider = security OF the cloud · Customer = security IN the cloud** (el proveedor protege la nube; el cliente, lo que pone en ella)
- _IAM SECURITY CONTROLS_: **IAM es la primera línea de defensa**
- _VIRTUAL NETWORK SECURITY_: **Security Groups = firewall de instancia**
- _KEY MANAGEMENT_: **Las claves protegen los datos cifrados**
- _CONTAINER SECURITY_: **Los contenedores comparten el kernel**
- _INCIDENT RESPONSE STEPS_: **Detectar → Contener → Recuperar**
- _DISASTER RECOVERY MODELS_: **Mayor disponibilidad = mayor costo**
- _CLOUD COUNTERMEASURE SUMMARY FLOW_: **IAM → Red → Datos → Monitorear**

---

## Módulo 20 — Cryptography

### Parte 1 — Cryptography Concepts

[Abrir la nota completa](20%20-%20Part%201%20-%20Cryptography%20Concepts.md)

**Lo esencial**

- **Cryptography** — del griego *kryptos* (oculto) + *graphia* (escritura); convierte plaintext en ciphertext mediante encryption
- **Objetivos (CIA + N)** — Confidentiality, Integrity, Authentication y Non-repudiation; el cifrado por sí solo no da authentication ni integrity
- **Symmetric (secret-key)** — una sola clave para cifrar y descifrar: rápida y con poco CPU, pero con key distribution problem y sin authentication
- **Asymmetric (public-key)** — par public key + private key: resuelve la distribución de claves y permite digital signatures, pero es lenta y no apta para datos masivos
- **Flujo asymmetric** — se cifra con la public key del receptor y solo su private key descifra; la public key no descifra lo que ella cifra
- **GAK / key escrow** — Government Access to Keys: un tercero custodia las claves para intercepción legal (key escrow ≠ backdoor, aunque el efecto es similar)
- **Classical ciphers** — substitution (reemplaza caracteres) y transposition (reordena caracteres); ej. Caesar, Hill, Rail fence
- **Block vs stream cipher** — block cifra bloques de tamaño fijo; stream cifra los datos bit a bit
- **AES / Serpent** — AES usa bloque de 128 bits sea cual sea la clave; Serpent: bloque de 128 bits y claves de 128/192/256 bits
- **Blowfish / IDEA** — Blowfish: bloque de 64 bits y clave de 32–448 bits; IDEA: bloque de 64 bits, clave de 128 bits, usado por PGP
- **DROWN attack** — se mitiga deshabilitando SSLv2 (roto); usar TLS 1.2 o 1.3
- **Side-channel attack** — intenta romper el cifrado monitorizando algo externo al algoritmo

**Trampas de examen**

- _CRYPTOGRAPHY PROCESS_: Encryption **no elimina datos**, solo **transforma la representación**.
- _OBJECTIVES OF CRYPTOGRAPHY_: Encryption por sí sola ≠ authentication o integrity.
- _ASYMMETRIC ENCRYPTION MESSAGE FLOW_: La public key **no puede desencriptar** lo que ella misma encripta.
- _GOVERNMENT ACCESS TO KEYS (GAK) — EXAM CONCEPT_: Key escrow ≠ backdoor (pero el efecto es similar).

**Para recordar**

- _Objetivos de aprendizaje_: **Conceptos → Algoritmos → Herramientas → Aplicaciones → Ataques → Análisis**
- _WHAT IS CRYPTOGRAPHY_: **Crypto = escritura oculta**
- _OBJECTIVES OF CRYPTOGRAPHY_: **CIA + N**
- _1. SYMMETRIC KEY CRYPTOGRAPHY_: **Una clave → rápida → difícil de compartir**
- _2. ASYMMETRIC KEY CRYPTOGRAPHY_: **Dos claves → intercambio seguro → más lenta**
- _ASYMMETRIC ENCRYPTION_: **Symmetric = rápida, Asymmetric = confianza**
- _GOVERNMENT ACCESS TO KEYS (GAK) — EXAM CONCEPT_: **Key escrow = una tercera parte guarda las claves**
- _CLASSICAL CIPHERS_: **Clásicos = letras**
- _B. TIPO DE DATOS DE ENTRADA_: **Block = bloques, Stream = flujo**

### Parte 2 — Symmetric Encryption

[Abrir la nota completa](20%20-%20Part%202%20-%20Symmetric%20Encryption.md)

**Lo esencial**

- **DES** — key de 56 bits, bloque de 64 bits, estructura Feistel; roto (cae por brute force)
- **3DES** — DES tres veces en modo Encrypt–Decrypt–Encrypt; key de 112 o 168 bits, bloque de 64 bits; más fuerte que DES, pero lento y obsoleto
- **AES** — keys de 128/192/256 bits y bloque **siempre de 128 bits**; substitution–permutation (NO Feistel); el estándar recomendado
- **Blowfish** — key de 32–448 bits, bloque de 64 bits; de Bruce Schneier, rápido en software y sin patente
- **Twofish** — sucesor de Blowfish: bloque de 128 bits, key de hasta 256 bits; finalista de AES (ganó Rijndael)
- **RC4** — stream cipher con key de 40–2048 bits, usado en SSL y WEP; roto
- **RC6** — bloque de 128 bits, key de hasta 256 bits; finalista de AES
- **ChaCha20** — stream cipher moderno con key de 256 bits (TLS, VPN); sustituto de RC4, más rápido que AES en móviles
- **CAST / GOST / Camellia** — CAST se usa en PGP; GOST es ruso (bloque 64, key 256); Camellia equivale a AES (bloque 128, keys 128/192/256)
- **Block vs stream** — block: bloques fijos, un error afecta a todo el bloque (AES, DES); stream: flujo continuo, afecta a un solo bit (RC4, ChaCha20)
- **Modes of operation** — ECB, CBC, CFB, OFB, CTR, GCM; **ECB es inseguro** (revela patrones); CBC usa IV; GCM da cifrado + autenticación

**Trampas de examen**

- _DATA ENCRYPTION STANDARD (DES)_: DES **NO es seguro**, incluso si se implementa correctamente.
- _TRIPLE DES (3DES)_: 3DES ≠ tres algoritmos diferentes.
- _ADVANCED ENCRYPTION STANDARD (AES)_: AES **NO se basa en Feistel**.
- _TWOFISH_: Twofish fue finalista de AES, pero no ganó: el algoritmo elegido como AES fue Rijndael.
- _RC4 (STREAM CIPHER)_: Las vulnerabilidades de RC4 permiten ataques de keystream reuse.
- _MODES OF OPERATION_: ECB revela patrones.

**Para recordar**

- _SYMMETRIC ENCRYPTION (RECAP)_: **Misma key → velocidad**
- _DATA ENCRYPTION STANDARD (DES)_: **DES = Dead Encryption Standard**
- _TRIPLE DES (3DES)_: **DES × 3 = más lento pero más seguro**
- _ADVANCED ENCRYPTION STANDARD (AES)_: **AES = gold standard**
- _BLOWFISH_: **Blowfish = key size flexible**
- _TWOFISH_: **Twofish = finalista de AES**
- _RC4 (STREAM CIPHER)_: **RC4 = Rapidly Cracked**
- _RC6_: **RC6 = otro finalista de AES**
- _GOST_: **GOST = cripto rusa**
- _CAMELLIA_: **Camellia = alternativa a AES**
- _CHACHA20 (STREAM CIPHER — MODERN)_: **ChaCha20 = sustituto moderno de RC4**
- _MODES OF OPERATION_: **Nunca uses ECB**

### Parte 3 — Asymmetric Encryption

[Abrir la nota completa](20%20-%20Part%203%20-%20Asymmetric%20Encryption.md)

**Lo esencial**

- **Asymmetric encryption** — dos claves relacionadas: public key para cifrar/verificar, private key para descifrar/firmar; lenta, no se usa para datos masivos
- **RSA** — Rivest–Shamir–Adleman, basado en **integer factorization**, keys de 1024–4096 bits; cifra, firma y sirve para key exchange
- **Debilidades de RSA** — key sizes pequeños, poor padding (PKCS#1) y side-channel attacks
- **Diffie-Hellman** — SOLO key exchange (acuerda un shared secret para derivar symmetric keys); no cifra ni autentica → vulnerable a MITM
- **DHE / ECDHE** — Diffie-Hellman ephemeral (claves temporales) → **Perfect Forward Secrecy (PFS)**
- **DSA** — SOLO digital signatures, no cifra; basado en **discrete logarithms**
- **ElGamal** — basado en Diffie-Hellman; cifra y firma, pero genera un ciphertext grande
- **ECC** — claves mucho más pequeñas y más rápida que RSA: **256-bit ECC ≈ 3072-bit RSA**; móviles, IoT, TLS
- **Digital signature** — hash del mensaje cifrado con la private key del emisor; el receptor lo verifica con la public key y compara hashes
- **Comparativa** — RSA, ElGamal y ECC cifran, firman e intercambian claves; Diffie-Hellman solo key exchange; DSA solo firma

**Trampas de examen**

- _ASYMMETRIC ENCRYPTION_: Asymmetric encryption **no se utiliza para datos masivos**.
- _RSA OVERVIEW_: RSA ≠ symmetric encryption.
- _DIFFIE–HELLMAN OVERVIEW_: Diffie-Hellman **no encripta datos**.
- _DSA OVERVIEW_: DSA no puede encriptar datos.
- _ECC USE CASES_: ECC no sustituye a RSA por ser un algoritmo «mejor», sino por eficiencia: misma seguridad con claves más pequeñas.

**Para recordar**

- _ASYMMETRIC ENCRYPTION_: **Public key encripta, private key desencripta**
- _RSA OVERVIEW_: **RSA = factorizar números grandes**
- _DIFFIE–HELLMAN OVERVIEW_: **DH comparte secrets, no mensajes**
- _EPHEMERAL DIFFIE–HELLMAN_: **Ephemeral = claves temporales**
- _DSA OVERVIEW_: **DSA = firmar, no encriptar**
- _ELGAMAL OVERVIEW_: **ElGamal = encriptación basada en DH**
- _ECC OVERVIEW (VERY IMPORTANT MODERN CRYPTO)_: **ECC = claves pequeñas, alta seguridad**
- _DIGITAL SIGNATURE PROCESS_: **Firmar = private, verificar = public**
- _PKI COMPONENTS_: **PKI = sistema de confianza**

### Parte 4 — Hash Functions

[Abrir la nota completa](20%20-%20Part%204%20-%20Hash%20Functions.md)

**Lo esencial**

- **Hash function** — convierte datos de cualquier tamaño en un valor de longitud fija; es unidireccional y **NO es cifrado**
- **Hash = integrity** — un hash aporta integridad, no confidencialidad
- **Propiedades** — deterministic, fixed output size, pre-image resistance, second pre-image resistance y collision resistance
- **MD5** — salida de 128 bits; roto por colisiones, no usar para seguridad
- **SHA-1** — salida de 160 bits; roto por collision attacks
- **SHA-2** — SHA-224/256/384/512; seguro y estándar actual
- **SHA-3 (Keccak)** — sponge construction; respaldo de SHA-2, no una variante suya ni su reemplazo automático
- **RIPEMD-160** — salida de 160 bits; alternativa menos común a SHA
- **HMAC** — hash + secret key: integrity + authentication, pero NO confidentiality; un hash simple no usa clave ni autentica
- **Password hashing** — débil: MD5, SHA-1, hashes sin salt; fuerte: bcrypt (lento, con salt), scrypt (memory-hard), PBKDF2 (iterativo)
- **Salt** — valor aleatorio añadido antes del hashing; derrota las rainbow tables (ataques precalculados)

**Trampas de examen**

- _WHAT IS A HASH FUNCTION_: Hashing **NO** es cifrado.
- _MD5 (MESSAGE DIGEST 5)_: MD5 **no** debe usarse para seguridad.
- _SHA-3 (KECCAK)_: SHA-3 no reemplaza SHA-2 automáticamente.
- _WHAT IS HMAC_: HMAC ≠ cifrado.

**Para recordar**

- _WHAT IS A HASH FUNCTION_: **Hash = huella digital de los datos**
- _PROPERTIES OF A GOOD HASH FUNCTION_: **No hay reversión, no hay colisiones**
- _MD5 (MESSAGE DIGEST 5)_: **MD5 = Mayormente Muerto (Mostly Dead)**
- _SHA-1 (SECURE HASH ALGORITHM 1)_: **SHA-1 ya no es seguro**
- _SHA-2 FAMILY_: **SHA-2 = estándar actual**
- _SHA-3 (KECCAK)_: **SHA-3 ≠ variante de SHA-2**
- _WHAT IS HMAC_: **HMAC = hash + clave**
- _STRONG PASSWORD HASHING METHODS_: **Hashing lento = seguridad fuerte**
- _SALT_: **Salt derrota ataques precalculados**

### Parte 5 — PKI and Digital Certificates

[Abrir la nota completa](20%20-%20Part%205%20-%20PKI%20and%20Digital%20Certificates.md)

**Lo esencial**

- **PKI (Public Key Infrastructure)** — marco que gestiona digital certificates, public keys y relaciones de confianza; resuelve el problema de confiar en una public key
- **CA (Certificate Authority)** — trusted third party que emite y firma certificados (trust anchor); no es un proveedor de cifrado
- **RA (Registration Authority)** — verifica la identidad y aprueba las solicitudes de certificado en nombre de la CA
- **Digital certificate** — vincula identidad y public key: subject name, subject public key, issuer, validity period, serial number y firma de la CA
- **CRL vs OCSP** — CRL: lista de certificados revocados mantenida por la CA; OCSP: estado en tiempo real por consulta, más rápido
- **Emisión** — generar key pair → la RA verifica la identidad → la CA firma → se emite el certificado
- **Validación** — firma de la CA → trust chain → expiración → estado de revocación
- **Trust chain** — Root CA (pre-confiada) → Intermediate CA → end-entity certificate; el navegador confía en las CAs, no en los sitios
- **Self-signed certificate** — issuer = subject; no confiable por defecto, solo para pruebas
- **DV < OV < EV** — niveles de validación; EV es el más alto
- **Certificate vs digital signature** — el certificado prueba QUIÉN (identidad); la firma, hecha con la private key, prueba QUÉ (el mensaje)
- **CA compromise** — si la CA se ve comprometida, toda la PKI se derrumba

**Trampas de examen**

- _1. CERTIFICATE AUTHORITY (CA)_: CA ≠ proveedor de cifrado (emite y firma certificados; no cifra tus datos).
- _5. ONLINE CERTIFICATE STATUS PROTOCOL (OCSP)_: OCSP NO reemplaza a los certificados (solo consulta su estado).
- _TRUST CHAIN EXPLAINED_: Los navegadores NO confían directamente en los sitios web — confían en las CAs.
- _COMMON PKI ATTACKS_: Si la CA se ve comprometida, toda la PKI se derrumba.

**Para recordar**

- _THE CORE PROBLEM PKI SOLVES_: **Las public keys necesitan confianza**
- _WHAT IS PKI_: **PKI = trust framework (marco de confianza)**
- _1. CERTIFICATE AUTHORITY (CA)_: **CA = trust anchor**
- _WHAT A DIGITAL CERTIFICATE CONTAINS_: **Certificate = DNI de la public key**
- _3. REGISTRATION AUTHORITY (RA)_: **RA = verificador de identidad**
- _4. CERTIFICATE REVOCATION LIST (CRL)_: **CRL = lista negra de certificados**
- _5. ONLINE CERTIFICATE STATUS PROTOCOL (OCSP)_: **OCSP = comprobación del certificado en vivo**
- _CERTIFICATE ISSUANCE PROCESS_: **Generar → Verificar → Firmar → Confiar**
- _CERTIFICATE VALIDATION PROCESS_: **Firma → Cadena → Fecha → Revocación**
- _TRUST CHAIN EXPLAINED_: **La confianza fluye hacia abajo**
- _SELF-SIGNED CERTIFICATES_: **Self-signed = sin confianza externa**
- _BASED ON VALIDATION LEVEL_: **DV < OV < EV**
- _APPLICATIONS OF PKI_: **PKI allí donde importa la confianza**
- _DIGITAL SIGNATURES VS CERTIFICATES_: **El certificado prueba QUIÉN, la firma prueba QUÉ**

### Parte 6 — Cryptographic Attacks

[Abrir la nota completa](20%20-%20Part%206%20-%20Cryptographic%20Attacks.md)

**Lo esencial**

- **Cryptanalysis** — analizar sistemas criptográficos para hallar debilidades (algoritmos, claves, implementación) y recuperar plaintext o claves sin autorización
- **Ciphertext-only attack (COA)** — el atacante solo tiene ciphertext: es el ataque más difícil
- **Known-plaintext attack (KPA)** — tiene pares plaintext + ciphertext (p. ej. cabeceras de archivo conocidas) para recuperar la clave
- **Chosen-plaintext (CPA) vs chosen-ciphertext (CCA)** — CPA elige plaintext y observa el ciphertext (encryption oracle); CCA elige ciphertext y observa el descifrado (padding oracle)
- **Birthday attack** — busca colisiones de hash con la birthday paradox: esfuerzo ≈ **2^(n/2)** para un hash de n bits
- **Collision attack** — dos entradas → mismo hash; afecta a MD5 y SHA-1 (rotos) y permite falsificar digital signatures
- **MITM en criptografía** — explota el key exchange sin autenticar (Diffie-Hellman); defensa: autenticación
- **Side-channel attacks** — explotan fugas físicas, no matemáticas: timing attack, power analysis, EM analysis, acoustic
- **Padding oracle attack** — explota los mensajes de error de padding en modo CBC para inferir el plaintext
- **Downgrade / replay attack** — downgrade fuerza cripto débil (TLS → SSL) por backward compatibility (defensa: deshabilitar protocolos legacy); replay se frena con nonces y timestamps
- **Repaso del módulo** — el salting derrota las rainbow tables; AES es seguro; ECC usa claves más pequeñas; PKI resuelve el problema de confianza; CRL (lista) vs OCSP (tiempo real)
- **Herramientas** — Hashcat y John the Ripper (password cracking), Cain & Abel (recuperación de credenciales), OpenSSL (`enc`, `dgst`, `genrsa`, `req`), CrypTool (aprendizaje)

**Trampas de examen**

- _CÓMO FUNCIONA (VISIÓN GENERAL)_: Los mensajes de error filtran información.

**Para recordar**

- _QUÉ ES CRYPTANALYSIS_: **Cryptanalysis = romper la criptografía**
- _CIPHERTEXT-ONLY ATTACK (COA)_: **Ciphertext-only = ataque a ciegas**
- _KNOWN-PLAINTEXT ATTACK (KPA)_: **El known plaintext revela la estructura**
- _CHOSEN-PLAINTEXT ATTACK (CPA)_: **Entrada elegida = atacante fuerte**
- _CHOSEN-CIPHERTEXT ATTACK (CCA)_: **Chosen ciphertext = muy potente**
- _BRUTE-FORCE ATTACK_: **Clave corta = presa fácil del brute force**
- _RAINBOW TABLE ATTACK_: **El salt derrota las rainbow tables**
- _QUÉ ES UN BIRTHDAY ATTACK_: **Bits del hash ÷ 2 = exponente del esfuerzo de colisión (2^(n/2))**
- _MAN-IN-THE-MIDDLE (MITM) EN CRIPTOGRAFÍA_: **DH sin autenticación = riesgo de MITM**
- _TIPOS DE SIDE-CHANNEL ATTACKS_: **No es matemática, es física**
- _CÓMO FUNCIONA (VISIÓN GENERAL)_: **Los errores filtran secretos**
- _DOWNGRADE ATTACK_: **Backward compatibility = debilidad**
- _REPLAY ATTACK_: **El replay se frena con frescura (nonces, timestamps)**
- _CRYPTOGRAPHY MISCONFIGURATION ATTACKS_: **La criptografía falla en la implementación**
- _COMANDOS OPENSSL_: **OpenSSL = la navaja suiza de la criptografía**
