# MODULE 12 — EVADING IDS, FIREWALLS AND HONEYPOTS (EXAM CONTEXT)

|Item|Memorize|
|---|---|
|Module Number|12|
|Module Name|Evading IDS, Firewalls and Honeypots|
|Focus|Detección de intrusiones, firewalls, técnicas de evasion, honeypots, seguridad de endpoint|

---

## LEARNING OBJECTIVES (DO NOT SKIP — EXAM LIST)

|Objective #|Description|
|---|---|
|01|Resumir conceptos de IDS, IPS y firewall|
|02|Explicar técnicas de evasion de IDS/Firewall|
|03|Describir técnicas de evasion de seguridad de endpoint|
|04|Explicar tipos de honeypots y su detección|
|05|Demostrar herramientas de evasion de IDS/Firewall|

---

# IDS CONCEPTS

---

## INTRUSION DETECTION SYSTEM — CORE

|Item|Memorize|
|---|---|
|Main Function|Recopila y analiza información dentro de una computadora o red para identificar accesos no autorizados y uso indebido|
|Nature|Sniffer de paquetes que intercepta paquetes, generalmente TCP/IP|
|Behavior|Los paquetes se analizan y luego se capturan; evalúa el tráfico y genera una alarma|

---

## IDS PLACEMENT

|Placement|Detail|
|---|---|
|Near Firewall|Fuera o dentro del firewall|
|Inside Network|Ubicación ideal cerca del DMZ|
|Best Practice|Uno fuera del FW y uno dentro cerca del DMZ|

MEMORY HOOK:
**Outside + Inside near DMZ = best practice**

---

## HOW IDS WORKS

|Step|Action|
|---|---|
|1|Los IDS tienen sensores para detectar firmas maliciosas; los IDS avanzados incluyen actividad conductual|
|2|Si la firma coincide, el IDS realiza acciones predefinidas|
|3|Cuando la firma coincide, la detección de anomalías se omite|
|4|Cuando los paquetes pasan todas las pruebas, el IDS los reenvía a la red|

---

## HOW IDS DETECTS INTRUSION

|Detection Method|Explanation|EXAM Key|
|---|---|---|
|Signature Recognition|Detección de uso indebido; coincide con patrones conocidos|Método más común|
|Anomaly Detection|Intrusión basada en características conductuales|Comparación con línea base|
|Protocol Anomaly Detection|Desviaciones de los estándares de protocolo establecidos|Verificación de cumplimiento de RFC|

EXAM TRAP:
Signature match → anomaly detection is **skipped**

---

# NIDS VS HIDS COMPARISON

|Feature|NIDS|HIDS|
|---|---|---|
|Type|Network-based|Host-based|
|Placement|Caja negra en red en modo promiscuo|Instalado en un host específico|
|Monitors|Patrones de tráfico de red|Modificación de archivos, llamadas al sistema, registros|
|Detects|DDoS, anomalías de red|Cambios en archivos, ataques locales|
|Resource Usage|Bajo en hosts|Alto — consume muchos recursos|
|Commonality|Común|No común|
|Visibility|En toda la red|Detalle de un solo host|

MEMORY HOOK:
**NIDS = network watchdog; HIDS = host watchdog**

---

# TYPES OF IDS ALERTS

|Alert Type|Action|Explanation|
|---|---|---|
|True Positive|Ataque → Alarma|El IDS genera alarma cuando ocurre un ataque legítimo|
|False Positive|Sin ataque → Alarma|El IDS genera alarma cuando no hay ataque|
|False Negative|Ataque → Sin alarma|El IDS no genera alarma cuando hay un ataque — EL MÁS PELIGROSO|
|True Negative|Sin ataque → Sin alarma|El IDS no genera alarma cuando no ha ocurrido ningún ataque|

MEMORY HOOK:
**True = correct; Positive = alert; Negative = no alert**
**False Negative = worst case = attack missed**

---

# INTRUSION PREVENTION SYSTEM (IPS)

---

## IPS — DEFINITION

|Item|Memorize|
|---|---|
|IPS|Considerado IDS activo; detecta Y previene intrusiones|
|Difference from IDS|El IPS puede bloquear activamente tráfico malicioso|

---

## IPS CAPABILITIES

|Capability|Detail|
|---|---|
|Alerts|Genera alertas si se detecta tráfico anómalo|
|Logging|Registra logs en tiempo real|
|Blocking|Bloquea y filtra tráfico malicioso|
|Elimination|Detecta y elimina amenazas rápidamente|
|Accuracy|Identifica amenazas con precisión sin generar falsos positivos|

---

## IPS CLASSIFICATION

|Type|Placement|
|---|---|
|Host-based IPS (HIPS)|En un host individual|
|Network-based IPS (NIPS)|Inline en segmento de red|

---

# FIREWALL CONCEPTS

---

## FIREWALL — DEFINITION

|Item|Memorize|
|---|---|
|Purpose|Prevenir accesos no autorizados|
|Placement|Unión o puerta de enlace entre dos redes|
|Function|Examina todos los mensajes que entran y salen del internet|

---

## FIREWALL ARCHITECTURE

|Architecture|Definition|
|---|---|
|Bastion Host|Diseñado para defender la red contra ataques; mediador entre dentro y fuera; dos interfaces — pública (directa a internet) y privada (conectada a la red interna)|
|Screened Subnet (DMZ)|Creado con un firewall de dos o tres interfaces detrás del firewall de filtrado; firewall multi-homed = nodo con múltiples NICs que conectan segmentos de red separados|
|DMZ|Ubicada en zona neutral entre la red interna y la red externa no confiable; sirve como búfer entre la red interna segura y el internet inseguro|

MEMORY HOOK:
**Bastion = mediator; Screened subnet = two-firewall DMZ; DMZ = buffer zone**

---

# TYPES OF FIREWALLS

---

## BY CONFIGURATION

|Type|Description|Examples|
|---|---|---|
|Network-based|Ubicado en el perímetro; inspecciona encabezados de paquetes y aplica reglas de seguridad|Cisco Secure Firewall ASA, Palo Alto PA7500, Fortigate 7121F|
|Host-based|En PC o servidores individuales; protege contra accesos no autorizados, troyanos, gusanos|MS Defender, Comodo Firewall, Norton Firewall|

---

## BY WORKING MECHANISM

|Firewall Type|How It Works|Key Features|
|---|---|---|
|Packet Filtering|Compara paquetes con un conjunto de criterios antes de reenviarlos|Filtros: IP src, IP dst, puerto TCP/UDP src/dst, flags TCP, protocolo, dirección, interfaz|
|Circuit-Level Gateway|Valida el three-way handshake de TCP|Funciona en la capa de sesión; proporciona acceso controlado a servicios de red y solicitudes de host; permite o impide flujos de datos|
|Application-Level Firewall|Se enfoca en la capa de aplicación; analiza información de la aplicación|Basado en proxy; puede permitir o denegar tráfico|
|Stateful Multi-Layer Inspection|Puede recordar paquetes que han pasado|Combina las mejores características del filtrado de paquetes y el basado en aplicación; Cisco PIX = stateful|
|Application Proxy|Útil para logging; reduce la carga en la red|Realiza autenticación a nivel de usuario; protege implementaciones de IP débiles o defectuosas|
|Network Address Translation (NAT)|Traduce IPs privadas a IPs públicas|Oculta la estructura de IP interna|
|VPN Firewall|Conecta WAN; cifra el tráfico|Verifica la protección de integridad; descifra el tráfico eventualmente|
|Next-Generation Firewall (NGFW)|Deep packet inspection + application awareness + control|IPS integrado; inteligencia de amenazas basada en la nube; opera en varias capas del OSI|

---

# FIREWALL COMPARISON TABLE (EXAM FAVORITE)

|Firewall Type|OSI Layer|How It Works|CEH Keywords|
|---|---|---|---|
|Packet-Filtering Firewall|L3 / L4|Filtra basándose en IP, puerto, protocolo|Stateless filtering|
|Stateful Firewall|L3 / L4|Rastrea el estado de la conexión|Session awareness|
|Circuit-Level Gateway|L5|Valida handshakes de TCP|Session validation|
|Application-Level Firewall (Proxy)|L7|Inspecciona datos de aplicación|Deep packet inspection|
|Next-Generation Firewall (NGFW)|L3–L7|DPI + IDS/IPS + conciencia de aplicaciones|Application awareness|

---

# YARA RULES (INTRUSION DETECTION)

|Item|Memorize|
|---|---|
|YARA|Herramienta de investigación de malware usando enfoque basado en reglas|
|Condition|Cuando el resultado será verdadero contra un archivo|
|Strings|Define todas las cadenas que necesitan buscarse dentro de los archivos|
|Metadata|Parte de la regla YARA que incluye información general|
|Tool|yarGen|

---

# IDS/IPS TOOLS

|Tool|Type|Key Features|
|---|---|---|
|Snort|IDS|Análisis de tráfico y logging de paquetes; análisis de protocolos y búsqueda/coincidencia de contenido; usa lenguaje de reglas flexible|
|Suricata|IDS/IPS|IDS en tiempo real; IPS inline; monitoreo de seguridad de red; procesamiento offline de pcap|
|Trellix IPS|IPS|Detecta botnets, gusanos y ataques de reconocimiento|
|Check Point Quantum IPS|IPS|Solución IPS de nivel empresarial|
|McAfee Network Security Platform|IPS|Prevención de amenazas integrada|

---

# IDS/FIREWALL EVASION TECHNIQUES

---

## IDENTIFICATION TECHNIQUES

|Technique|Definition|Detail|
|---|---|---|
|Port Scanning|Descubrir puertos abiertos y servicios|Identificar reglas de IDS/firewall|
|Firewalking|Usa valores TTL para determinar filtros ACL de la puerta de enlace|Sondea de la misma manera que traceroute; el paquete tiene un valor TTL un salto mayor que el firewall|
|Banner Grabbing|Intercepta anuncios de servicio|Los banners son anuncios de servicio que revelan versión/configuración|

---

## IP ADDRESS SPOOFING, SOURCE ROUTING, AND FRAGMENTATION

|Technique|Definition|Tool/Detail|
|---|---|---|
|IP Address Spoofing|Alterar la IP de origen; crear paquetes con direcciones de origen falsificadas|Hping para creación de paquetes|
|Source Routing|Paquetes enrutados a través de segmentos menos designados, menos estructurados, menos monitoreados o alternativos|Las soluciones de firewall están parcialmente o no instaladas en esos segmentos|
|Tiny Fragments|Crear fragmentos tiny de paquetes salientes|Fuerza parte de la información del encabezado TCP al siguiente fragmento; el IDS no puede reensamblar a tiempo|

---

## PROXY SERVER BYPASS

|Item|Memorize|
|---|---|
|Method|Agregar configuración de proxy al PC; el tráfico se enruta desde el dispositivo → proxy → firewall|
|Purpose|Ocultar el verdadero origen del tráfico del IDS/firewall|

---

## ICMP TUNNELING

|Item|Memorize|
|---|---|
|Tool|ICMPTX|
|Method|Insertar comandos de cliente maliciosos o payloads en la porción de datos de las solicitudes de eco ICMP|
|Why it works|El IDS asume que es ICMP legítimo y los deja pasar|

---

## ACK TUNNELING

|Step|Action|
|---|---|
|1|Muchos firewalls no filtran paquetes ACK porque provienen de conexiones ya establecidas|
|2|El atacante establece una conexión legítima|
|3|Usando Hping, crea un paquete ACK|
|4|El firewall los deja pasar|

MEMORY HOOK:
**ACK = already established = allowed**

---

## HTTP TUNNELING

|Item|Memorize|
|---|---|
|Method|Tunnelizar tráfico vía TCP port 80 usando herramientas como Chisel|
|Purpose|Ocultar identidad, navegar sitios bloqueados, compartir recursos de forma segura sobre HTTP|

---

## SSH TUNNELING

|Type|Description|
|---|---|
|Local Port Forwarding|LPR para acceder a recursos internos|
|Remote Port Forwarding|Acceder a servicios remotos desde la máquina local|
|Dynamic Port Forwarding|Proxy SOCKS a través de SSH; Tool: Bitvise SSH Client|

---

## DNS TUNNELING

|Item|Memorize|
|---|---|
|Method|Usar el límite de 255 bytes de UDP en consultas salientes|
|Detail|Datos maliciosos incrustados en paquetes DNS; DNSSEC no puede detectar|
|Use Case|El malware evita el IDS y mantiene conexión con C&C|
|Tools|Iodine, dnscat2|

MEMORY HOOK:
**DNS tunnel = 255 bytes of evil in UDP**

---

## EXTERNAL SYSTEM ATTACKS

|Step|Action|
|---|---|
|1|El usuario trabaja desde casa con una laptop que puede acceder al sistema corporativo|
|2|El atacante roba el tráfico del usuario, ID de sesión o cookies|
|3|El atacante accede a la red corporativa|
|4|El atacante ejecuta el comando openURL()|
|5|El navegador del usuario redirige al servidor web del atacante|
|6|Se descarga y ejecuta código malicioso|

---

## MITM ATTACKS (EVASION CONTEXT)

|Step|Action|
|---|---|
|1|El atacante realiza envenenamiento del servidor DNS|
|2|El usuario envía solicitud a facebook.com|
|3|El usuario accede al servidor malicioso|
|4|El atacante tunneliza el tráfico HTTP del usuario|

---

## CONTENT-BASED BYPASS

|Item|Memorize|
|---|---|
|Method|Enviar contenido que contiene código malicioso|
|Techniques|Explot de bypass por macro; formatos ejecutables: .exe, .com, .bat|

---

## XSS ATTACK (EVASION CONTEXT)

|Item|Memorize|
|---|---|
|Cause|Ocurre al procesar parámetros de entrada|
|Method|Inyectar código HTML malicioso|
|Evasion|Usar valores ASCII; codificación HEX; ofuscación|

---

## WAF BYPASS

|Technique|Detail|Tool|
|---|---|---|
|HTTP Header Spoofing|Headers y sintaxis falsificados|Elaboración manual|
|Blacklist Detection|Identificar palabras clave en lista negra (SQL)|Escaneo automatizado|
|Fuzzing/Brute Forcing|Probar listas de palabras contra reglas de WAF|Listas de palabras Assetnote|
|Abusing SSL/TLS Ciphers|Explotar debilidades en la negociación de cifrados|sslscan2|

---

## HTML SMUGGLING

|Method|Detail|
|---|---|
|HTML5 Attachment|Incrustar payload en adjunto HTML5|
|Via JavaScript|JavaScript decodifica y ejecuta payload del lado del cliente|
|URL Lure|Enlace de phishing que activa descarga|

---

## WINDOWS BITS (BACKGROUND INTELLIGENT TRANSFER SERVICE)

|Item|Memorize|
|---|---|
|Purpose|Distribuye actualizaciones automáticas de Windows|
|Attack|bitsadmin puede crear un trabajo para transferir archivo malicioso|
|Goal|Crear persistencia|

---

## OTHER EVASION TECHNIQUES

|Technique|Definition|
|---|---|
|Insertion Attack|Confundir al IDS forzándolo a leer paquetes inválidos|
|Evasion|El IDS descarta paquetes pero el host los acepta; ocurre en la capa IP; la conexión TCP debe estar en estado abierto con handshake|
|DoS|Crear un estado donde todos los recursos son consumidos; causa que el dispositivo se bloquee y no investigue todas las alarmas|
|Ofuscación|Solo el destino puede decodificar, no el IDS|
|False Positive Generation|Paquetes construidos para generar gran cantidad de reportes falsos; oculta el ataque real entre ellos|
|Session Splicing|Divide el tráfico en un número excesivo de paquetes para que ningún paquete individual active el IDS; el IDS no puede manejar paquetes pequeños excesivos; Tool: Nessus|
|Unicode Evasion|Múltiples representaciones de un solo carácter (UTF-16: "/" = "%u2215"; UTF-8: "©" = "%c2%a9")|
|Fragmentation Attack|Si se excede el MTU, los paquetes se dividen en múltiples fragmentos|
|TTL Attack|Cuando el TTL llega a 0, el paquete se descarta; requiere conocimiento de la topología de red de la víctima|
|Urgency Flag|TCP ignora todos los datos antes del puntero URG; los IDS no consideran la característica de urgencia de TCP|
|Invalid RST Packets|Se usan checksums de 16 bits de TCP; paquete RST enviado con checksum inválido|
|Polymorphic Shellcode|NIDS identifica el ataque coincidiendo firmas; el ataque polymorphic incluye múltiples firmas|
|ASCII Shellcode|Solo caracteres del estándar ASCII; evade la detección de firmas binarias|
|Application Layer Attacks|A través de archivos multimedia — imágenes, audios, videos; se explotan fallas en datos comprimidos|
|Desynchronization|SYN pre-conexión con checksum inválido antes de la conexión real; SYN post-conexión con números de secuencia divergentes|
|Domain Generation Algorithms (DGA)|Software genera nuevos nombres de dominio para ejecutar malware; ayuda a cambiar dominios frecuentemente para evadir bloqueos|

MEMORY HOOK:
**Insertion → Evasion → DoS → Obfuscation → False Positives = 5 pillars of evasion**

---

# NAC AND ENDPOINT SECURITY EVASION

---

## NETWORK ACCESS CONTROL (NAC) EVASION

|Technique|Definition|Tool|
|---|---|---|
|VLAN Hopping|Obtener acceso a dynamic trunking protocol (DTP); el atacante cambia el modo del switch de dynamic auto a dynamic desirable|VLANPWN|
|Pre-Authenticated Device|Obtener acceso a un dispositivo autenticado; se usa el dispositivo para iniciar sesión en la red y luego introducir paquetes; generalmente Raspberry Pi|nac_bypass_setup.sh, FENRIR|

---

## BYPASS ENDPOINT SECURITY

|Technique|Definition|
|---|---|
|Ghostwriting|Modificar la estructura del malware sin afectar su funcionalidad; evadir AV usando deconstrucción binaria, inserción de código assembly arbitrario, reconstrucción; Tool: Ghostwriting.sh|
|Application Whitelisting|Hijacking de DLL para colocar una DLL maliciosa con un nombre legítimo que la aplicación busca|
|Dechaining Macros|Generación a través de ShellCOM; referenciar cualquier objeto asociado a COM a través de script VBA; generación usando XMLDOM para descargar y ejecutar código dentro del proceso de Office|
|Clearing Memory Hooks|Encontrar DLLs asociadas con funciones/syscalls exportadas; usar x64dbg para identificar syscalls en memoria; crear payload que sobrescriba los hooks restaurando los bytes exactos de datos|
|Process Injection|Malware en el espacio de memoria de un proceso en ejecución; mantener persistencia, escalar privilegios; funciones API: VirtualAllocEx(), WriteProcessMemory(), CreateRemoteThread()|
|LoL Bins|Binarios Living off the Land; herramientas preinstaladas en el sistema; configurar Deimos C2 para comunicar sobre HTTPS; ejecutar comando para descargar archivo remoto, ejecutar shell personalizado|
|Control Panel Side Loading|Imita la funcionalidad original del applet CPL para ocultarse; Tool: CPLResourceRunner|
|Metasploit Templates|Payloads de msfvenom; probar con VirusTotal para verificar tasa de detección|
|AMSI Bypass|Degradación de PowerShell a 2.0; usar ofuscación; forzar un error; secuestrar memoria|
|Hosting Phishing Sites|Servir contenido malicioso desde infraestructura controlada por el atacante|
|Encoded Commands|Pasar comandos codificados para evadir inspección de contenido|
|Fast Flux|Método DNS que cambia tanto las direcciones IPs como los nombres DNS rápidamente; elude listas negras; oculta C&C|
|Timing-Based Evasion|Parchado de sleep; APIs de retraso; bombas de tiempo|
|Single Binary Proxy Execution|rundll32 para ejecutar código malicioso|
|Shellcode Encryption|Cifrar shellcode para evadir detección de firmas|
|Reducing Entropy|Manipular características binarias para reducir puntuaciones de entropía|
|Escaping Local AV Sandbox|Evadir análisis de sandbox en protección de endpoint|
|Dismanting Event Tracing|Deshabilitar ETW para prevenir el registro de actividad maliciosa|
|Spoofing Thread Call Stack|Falsificar pila de llamadas de hilo para evadir detección|
|In-Memory Encryption|Cifrar beacon en memoria para evitar detección|

MEMORY HOOK:
**Ghostwriting → DLL hijack → Process injection → AMSI bypass = top 4 endpoint evasion**

---

# IDS/FIREWALL EVASION TOOLS

|Tool|Purpose|
|---|---|
|Traffic IQ Professional|Probar efectividad de IDS/firewall con ataques simulados|
|Colasoft Packet Builder|Crear paquetes personalizados para pruebas de evasion|
|Hping|Creación y spoofing de paquetes|
|Chisel|HTTP tunneling|
|Bitvise SSH Client|SSH tunneling / proxy SOCKS|
|Iodine / dnscat2|DNS tunneling|
|Nessus|Ataques de session splicing|
|sslscan2|Abuso de cifrados SSL/TLS|

---

# HONEYPOTS

---

## HONEYPOT — CORE PURPOSE

|Function|Detail|
|---|---|
|Log Port Access|Registrar todos los intentos de conexión|
|Monitor Keystrokes|Capturar la entrada del atacante|
|Early Warnings|Alertar sobre actividad sospechosa|

---

## TYPES OF HONEYPOTS

|Type|Definition|
|---|---|
|Low-Interaction|Emula un número limitado de servicios y aplicaciones; Tools: Tiny-SSH-Honeypot, KFSensor, Honeytrap|
|Medium-Interaction|Simula un sistema operativo, aplicación y servicios reales|
|High-Interaction|Simula todos los servicios y aplicaciones de la red objetivo|
|Pure Honeypot|Emula una red de producción real|
|Production Honeypots|Desplegados dentro de producción; capturan solo información limitada; baja interacción|
|Research Honeypots|Desplegados por instituciones de investigación para estudiar patrones de ataque|
|Malware Honeypots|Usados para atrapar campañas de malware; simulados con APIs obsoletas, protocolos SMBv1 vulnerables|
|Database Honeypots|Atrapar ataques específicos de base de datos|
|Spam Honeypots|Relays de correo abiertos y proxies abiertos|
|Email Honeypots|Direcciones de correo falsas para atraer atacantes|
|Spider Honeypots|Diseñados para atrapar crawlers y spiders web|
|Honeynets|Red de honeypots|

MEMORY HOOK:
**Low = emulate; Medium = simulate partial; High = full simulation**

---

## HONEYPOT TOOLS

|Tool|Type|
|---|---|
|HoneyBOT|Interacción media|
|Blumira|Plataforma de análisis de seguridad|
|NeroSwarm|Honeypot basado en enjambre|

---

# DETECTING HONEYPOTS

|Technique|Method / Command|
|---|---|
|Fingerprinting Running Service|nmap -sV -p 80 ip|
|Analyze Response Time|Medir respuestas de latencia; nmap -p --scan-delay 1s --max-retries 5 ip|
|Examine MAC Addresses|arp-scan --interface=eth0 --localnet; buscar OUI inusuales|
|Enumerate Unexpected Open Ports|nmap -p ip; verificar configuraciones por defecto, banners obsoletos, discrepancias en información del sistema|
|Analyze System Configuration and Metadata|Resumir configuraciones; verificar configuraciones por defecto|

MEMORY HOOK:
**nmap + arp-scan + MAC = honeypot detection trio**

---

# DETECTING AND DEFEATING HONEYPOTS

|Technique|Definition / Detail|
|---|---|
|Layer 7 Tar Pits|Similar a honeypots; ralentizan intentos no autorizados; detectados por latencia de respuesta|
|Layer 4 Tar Pits|Manipular pila TCP/IP; ralentizar propagación de gusanos/backdoors; interruptor iptables a tamaño de ventana cero bloqueando más datos|
|Layer 2 Tar Pits|Proteger de ataques en el mismo segmento de red|
|Honeypots on VMware|Identificar analizando dirección MAC para prefijo OUI de VMware|
|Honeyd Honeypot|Demonio honeypot; crea respuestas SMTP falsas; identificar con fingerprinting TCP basado en tiempo; comportamiento de proxy SYN|
|User-Mode UML Linux|Analizar archivos en /proc/mounts, /proc/interrupts, /proc/cmdline|
|snort_inline|Capaz de manipular paquetes; reescribir reglas en iptables; usado principalmente en honeynets de Gen 2|
|Bait and Switch|Redirigir todo el tráfico al honeypot; desviar la atención del atacante|

---

## HONEYPOT DETECTION TOOLS

|Tool|Purpose|
|---|---|
|Send Safe Honeypot Hunter|Detectar e identificar honeypots|

---

# EXAM FLASHCARDS

|Term|Definition|
|---|---|
|NIDS|IDS basado en red; caja negra en red en modo promiscuo|
|HIDS|IDS basado en host; instalado en host específico; detecta modificación de archivos|
|IPS|IDS activo que detecta Y previene intrusiones|
|Firewalking|Usa TTL para determinar filtros ACL de puerta de enlace; sondea como traceroute|
|Session Splicing|Divide el tráfico en muchos paquetes pequeños para evadir coincidencia de firmas de IDS|
|DGA|Algoritmos de generación de dominios; malware genera nuevos nombres de dominio rápidamente|
|AMSI|Antimalware Scan Interface; evadido mediante degradación de PowerShell a 2.0|
|LoL Bin|Binario Living off the Land; usa herramientas preinstaladas del sistema para atacar|
|Fast Flux|Método DNS que cambia rápidamente IP y nombres DNS para ocultar C&C|
|HTML Smuggling|Payload incrustado en HTML5/JavaScript; decodificado del lado del cliente|
|Bastion Host|Servidor público que media entre redes interna y externa|
|DMZ|Zona búfer entre la red interna segura y el internet inseguro|
|Packet Filtering|Filtra basándose en IP src/dst, puerto, protocolo — stateless|
|Stateful Firewall|Rastrea estado de conexión — conciencia de sesión|
|Honeynet|Red de honeypots trabajando juntos|

---

# PRACTICE QUESTIONS

|Q#|Question|
|---|---|
|1|Which IDS detection method matches traffic against known attack patterns?|
|2|What firewall type tracks the state of active connections and combines packet filtering with application inspection?|
|3|Which evasion technique splits network traffic into many small packets so no single packet triggers IDS signature matching?|
|4|What is the DNS technique that rapidly changes both IP addresses and DNS names to circumvent blacklists and hide command-and-control servers?|
|5|Which honeypot type emulates all services and applications of a target network?|

---

|A#|Answer|
|---|---|
|1|Signature Recognition (misuse detection)|
|2|Stateful Multi-Layer Inspection Firewall|
|3|Session Splicing|
|4|Fast Flux DNS|
|5|High-Interaction Honeypot|

---

MEMORY HOOK (MODULE 12 MASTER):
**Detect (IDS) → Prevent (IPS) → Block (Firewall) → Evade (Techniques) → Lure (Honeypots)**
