# MODULE 06 — SYSTEM HACKING (EXAM CONTEXT)

|Item|Memorize|
|---|---|
|Module Number|06|
|Module Name|System Hacking|
|Focus|Obtención de acceso, password cracking, privilege escalation, mantenimiento de acceso, ocultación de evidencia|

---

## LEARNING OBJECTIVES (DO NOT SKIP — EXAM LIST)

|Objective #|Description|
|---|---|
|01|Describir diversos tipos de ataques de password cracking y herramientas|
|02|Explicar técnicas de privilege escalation y herramientas|
|03|Describir métodos para mantener acceso persistente|
|04|Explicar técnicas para ocultar evidencia de compromiso|
|05|Explicar conceptos de buffer overflow y técnicas de exploit|

---

# 01 — GAINING ACCESS

---

## WINDOWS SAM DATABASE

|Property|Detail|
|---|---|
|Full Name|Windows Security Accounts Manager (SAM)|
|Purpose|Gestionar cuentas y contraseñas en formato hasheado (hash unidireccional)|
|Password Storage|NO almacena texto plano — usa solo hash|
|File Role|Archivo de registro de base de datos|
|Copy Restriction|No se puede copiar el archivo SAM mientras Windows está en ejecución|
|Dump Method|Es posible volcar contenido del disco incluyendo SAM con diversas técnicas|
|Encryption|Usa la función SYSKEY para encriptar parcialmente los password hashes|

|Property|Detail|
|---|---|
|Location|%SystemRoot%\system32\config\SAM|
|Registry Key|HKEY_LOCAL_MACHINE\SAM|
|Hash Types Stored|Contraseñas hasheadas LM o NTLM|

MEMORY HOOK:
**SAM = solo hashes, no se puede copiar mientras está en ejecución, SYSKEY encripta**

---

## NTLM AUTHENTICATION

|Property|Detail|
|---|---|
|Full Name|NT LAN Manager (NTLM)|
|Status|Esquema de autenticación predeterminado|
|Protocol Spec|Sin especificación de protocolo oficial — sin garantía de operación efectiva cada vez|
|LM Status (Vista+)|LM hashing deshabilitado; el valor del LM hash está en blanco|
|Security|NTLMv2 razonablemente seguro pero aún más débil que Kerberos|

|Tool|Purpose|
|---|---|
|pwdump7|Extracción principal de password hashes|
|Mimikatz|Extracción de credenciales|
|DSInternals|Internals de servicios de directorio|
|hashcat|Offline hash cracking|
|PyCrack|Cracking basado en Python|

### NTLM Authentication Process

|Step|Action|
|---|---|
|1|El cliente solicita acceso|
|2|El servidor envía challenge|
|3|El cliente calcula response|
|4|El servidor verifica vía AD o SAM|

EXAM TRAP:
**NTLMv2 es más fuerte que LM pero aún más débil que Kerberos**

---

## KERBEROS AUTHENTICATION

|Component|Full Name|
|---|---|
|KDC|Key Distribution Center|
|AS|Authentication Server|
|TGT|Ticket Granting Ticket|
|TGS|Ticket Granting Service|

|Property|Detail|
|---|---|
|Method|Cryptography de clave secreta|
|Status|Actualización desde NTLM|

### Kerberos Authentication Process

|Step|Action|
|---|---|
|1|Inicio de sesión y solicitud de ticket (AS)|
|2|Recepción de Ticket-Granting Ticket (TGT)|
|3|Solicitud de acceso al servicio|
|4|Recepción de Ticket-Granting Service TGS|
|5|Acceso al servicio|

---

## CRACKING OPTIONS — OVERVIEW

|Category|Methods|
|---|---|
|Dumping Credentials|Volcar credenciales de memoria, robar copia local de SAM, robar archivo AD ntds.dit, extraer SYSKEY boot key|
|Intercept Credentials|Sniffing pasivo, MITM, captura de contraseñas en texto plano|
|Hash Types Intercepted|LM, NTLM, NTLMv2, Kerberos|
|Brute Force Network Services|Logon/SMB (TCP 139, 445), servidores web (80, 443), MS Exchange (TCP 25, 110, 143), MSSQL (1433)|
|Brute Force Remote Control|RDP (TCP 3389), Telnet (23)|

---

# 02 — PASSWORD CRACKING

---

## PASSWORD CRACKING TYPES

|Type|Description|
|---|---|
|Non-Electronic|Ingeniería social, dumpster diving, etc.|
|Active Online|Adivinanza de contraseñas, dictionary/brute forcing, password spraying, mask attack, hash injection, envenenamiento LLMNR/NBT-NS, troyanos/spyware/keyloggers, ataques de monólogo interno, markov-chain|
|Passive Online|No cambia el sistema de ninguna manera; la contraseña se obtiene mediante monitoreo pasivo de datos|
|Offline|Recuperar contraseñas a partir de volcado de hash|

---

## ATTACK TYPES (ACTIVE ONLINE)

|Attack|Description|
|---|---|
|Dictionary Attack|Archivo de diccionario cargado en aplicación de cracking ejecutado contra cuentas de usuario|
|Brute Force Attack|El software usa cada combinación hasta que se descifra la contraseña|
|Rule-Based Attack|Información parcial de contraseña; híbrido usa diccionario + contraseña antigua; syllable attack usa diccionario + otros métodos|
|Password Spraying|Apunta a múltiples cuentas simultáneamente|
|Hash Injection (Pass the Hash)|Inyectar hash comprometido en sesión local para validar recursos de red; usar hash de usuario logueado para acceder al controlador de dominio|
|LLMNR/NBT-NS Poisoning|LLMNR y NBT-NS son dos elementos principales de Windows para resolución de nombres en el mismo enlace (Herramienta: Responder)|
|Internal Monologue Attack|Usa SSPI desde aplicación en modo usuario para calcular respuesta NetNTLM|

|Attack|Description|
|---|---|
|Rainbow Table Attack|Usa información pre-calculada almacenada en memoria para descifrar encriptación; Herramienta: rtgen|
|Distributed Network Attack|Usa múltiples máquinas en la red; Herramienta: Exterro Password Recovery Toolkit|

---

## LLMNR/NBT-NS POISONING DETECTION TOOLS

|Tool|Purpose|
|---|---|
|Vindicate|Detectar envenenamiento LLMNR/NBT-NS|
|Respounder|Detecta presencia de Responder|
|got-responder|Detectar envenenamiento LLMNR/NBT-NS|

---

# 03 — PASSWORD CRACKING TOOLS

---

## PASSWORD CRACKING TOOLS

|Tool|Purpose|
|---|---|
|L0phtCrack|Recuperar contraseñas perdidas de Microsoft|
|THC Hydra|Online brute force (hydra -l login -p password -L logins -P passwords)|
|RainbowCrack|Cracking basado en rainbow table|
|Metasploit|Password spraying|
|Rubeus|Herramienta de ataque Kerberos|
|adfsbrute|ADFS brute force|
|CrackMapExec|Herramienta de ataque de protocolo de red|

---

## MASK ATTACK

|Property|Detail|
|---|---|
|Method|El brute force recupera contraseñas de hashes usando patrón de contraseña|
|Tool|hashcat -m para especificar modo de hash (ej., MD5)|

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
|Definition|Agregar cadena aleatoria de caracteres antes de calcular hashes|

---

## PASSWORD RECOVERY TOOLS

|Tool|Purpose|
|---|---|
|Elcomsoft Distributed Password Recovery|Recuperación de contraseñas empresariales|
|Passware Kit|Recuperación de contraseñas|
|hashcat|Offline hash cracking|
|pcunlocker|Recuperación de contraseñas|
|lazersoft|Recuperación de contraseñas|
|Passper WinSenior|Recuperación de contraseñas de Windows|

---

# 04 — KERBEROS CRACKING

---

## KERBEROS ATTACK TECHNIQUES

|Technique|Description|
|---|---|
|AS-REP Roasting|Descifrar TGT; requiere conectividad al DC y cuenta de dominio; solo apunta a cuentas sin pre-authenticación Kerberos requerida|
|Kerberoasting|Obtener y descifrar hashes de cuentas de servicio; apunta a acceder a cuentas de mayor privilegio y moverse lateralmente; Herramienta: hashcat|
|Pass the Ticket|Usar ticket Kerberos sin proporcionar contraseña; robar ST/TGT de máquina de usuario o servidor; Herramienta: Mimikatz|
|NTLM Relay|Intercepción y retransmisión de solicitudes de autenticación NTLM; Herramientas: Responder, ntlmrelayx; comando: responder -I eth0|
|Fingerprint Attack|Contraseña descifrada carácter por carácter ('p', 'a', 's', etc.)|
|PRINCE Attack|Usa cadenas de palabras combinadas|
|Markov Chain Attack|Divide la contraseña en sílabas de dos-tres caracteres creando nuevo alfabeto|

EXAM TRAP:
**AS-REP Roasting solo funciona en cuentas SIN pre-authenticación Kerberos**

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
|ExploitDB|Base de datos de exploits|
|vulnDB|Base de datos de vulnerabilidades|
|OSV.dev|Vulnerabilidades de proyectos de código abierto|
|MITRE CVE|Common Vulnerabilities and Exposures|
|Windows Exploit Suggester (WES-NG)|Sugerencias de privilege escalation para Windows|

---

## AI-POWERED EXPLOITATION TOOLS

|Tool|Purpose|
|---|---|
|Nebula|Explotación de vulnerabilidades impulsada por IA|
|DeepExploit|Explotación con IA vinculada a Metasploit|

---

# 06 — METASPLOIT

---

## METASPLOIT MODULES

|Module|Description|
|---|---|
|Exploit|1. Configurar exploit activo 2. Verificar opciones del exploit 3. Seleccionar objetivo 4. Seleccionar payload 5. Lanzar exploit|
|Payload|Establece canal de comunicaciones entre Metasploit y víctima; combina código arbitrario ejecutado debido al éxito del exploit; seleccionar: msf payload|
|Auxiliary|Usado para acciones únicas: escaneo de puertos, DoS, fuzzing; Uso: use, exploit; show auxiliary — listar todos los módulos; exploit/run — lanzar comando|
|NOPS|Generar instrucción sin operación para bloquear buffers; msf generate -t c 50 — generar NOP sled de 50 bytes|
|Encoder|Ocultar/codificar payloads para evitar detección por AV, IDS; ofuscación; evasión de detección por firmas; polimorfismo — cambia payload cada vez que se genera|
|Evasion|Modificar comportamiento y características de payloads/exploits para evitar detección; evasion/windows/windows_defender.exe; evasion/windows/antivirus_disable; evasion/unix/antivirus_disable|
|Post-Exploitation|Usado después de compromiso exitoso del sistema; permite interacción adicional; post/windows/gather/enum_logged_on_users; post/linux/gather/enum_configs; post/windows/manage/portproxy|

---

## PAYLOAD MODULE TYPES

|Type|Description|
|---|---|
|Singles|Autónomos y completamente independientes|
|Stagers|Establecen conexión de red entre atacante y víctima|
|Stages|Descargados por módulos stager|

|Capability|Detail|
|---|---|
|Payload Module Functions|Subir/descargar archivos, tomar capturas de pantalla, recopilar password hashes|

---

# 07 — BUFFER OVERFLOW

---

## BUFFER OVERFLOW — CORE CONCEPT

|Property|Detail|
|---|---|
|Buffer|Área de ubicaciones de memoria adyacentes asignadas a programa/aplicación para manejar datos en tiempo de ejecución|
|Buffer Overflow|Vulnerabilidad común en programas que aceptan más datos que el buffer asignado|
|Impact|La aplicación excede el buffer mientras escribe datos, sobrescribiendo ubicaciones de memoria vecinas|
|Attacker Use|Inyectar código malicioso; dañar archivos, modificar datos, acceder a información crítica, escalar privilegios, obtener acceso a shell|

---

## VULNERABLE PROGRAMS/APPLICATIONS

|Vulnerability Factor|
|---|
|No se realizan verificaciones de límites|
|Aplicaciones que usan versiones de lenguajes de programación antiguos|
|Programas que usan funciones inseguras/vulnerables para validar tamaño de buffer|
|Sin buenas prácticas de programación|
|Sin filtrado y validación adecuados|
|Ejecución de código en segmento de pila|
|Asignación y sanitización de memoria inadecuada|
|Uso de punteros para acceder a memoria heap|

---

## BUFFER OVERFLOW TYPES

|Type|Description|
|---|---|
|Stack-Based Overflow|Pila usada para asignación de memoria estática (LIFO); PUSH almacena datos, POP remueve datos; atacante toma control del registro EIP para reemplazar dirección de retorno y obtener acceso a shell|
|Heap-Based Overflow|Memoria heap asignada dinámicamente en tiempo de ejecución; desbordamiento ocurre cuando se asigna bloque de memoria al heap; vulnerabilidad conduce a sobrescribir apuntadores de objetos; heap overflows son inconsistentes con diferentes técnicas de exploit|

---

## x86 REGISTERS (STACK-BASED BUFFER OVERFLOW)

|Register|Full Name|Function|
|---|---|---|
|EBP|Extended Base Pointer|Almacena dirección del primer elemento de datos almacenado en la pila (StackBase)|
|ESP|Extended Stack Pointer|Almacena dirección de la siguiente instrucción|
|EIP|Extended Instruction Pointer|Almacena dirección de la siguiente instrucción a ejecutarse|
|ESI|Extended Source Index|Mantiene índice de origen para varias operaciones de cadena|
|EDI|Extended Destination Index|Mantiene índice de destino para varias operaciones de cadena|

EXAM TRAP:
**EIP es el registro clave — sobrescribir EIP = ejecución de código**

---

## BUFFER OVERFLOW DETECTION TOOLS

|Tool|Purpose|
|---|---|
|OllyDbg|Debugger para análisis de buffer overflow|
|Veracode|Pruebas de seguridad|
|Flawfinder|Revisión de código fuente para C/C++|
|Kiuwan|Análisis de código|
|Splint|Análisis estático para C|
|Valgrind|Depuración y perfilado de memoria|

---

# 08 — WINDOWS BUFFER OVERFLOW

---

## WINDOWS BUFFER OVERFLOW STEPS

|Step|Description|
|---|---|
|Spiking|Paquetes TCP y UDP manipulados para hacer que falle; nc -nv ip port — establecer conexión; generar plantilla usando función STATS; generic_send_tcp ip port spike_script SKIPVAR SKIPSTR|
|Fuzzing|Envía gran cantidad de datos sobrescribiendo el registro EIP; ayuda a identificar número de bytes para que falle el servidor objetivo; ayuda a determinar ubicación del registro EIP para inyección de código; while loop en script Python; usar herramienta pattern_create de Ruby para generar bytes aleatorios; Metasploit pattern_offset para encontrar bytes aleatorios; sobrescribir registro EIP; configurar netcat: nc -nvlp 4444|
|Identify Offset|Herramientas de Ruby de Metasploit pattern_create y pattern_offset para encontrar dónde se está sobrescribiendo el registro EIP|

---

# 09 — ADVANCED EXPLOIT TECHNIQUES

---

## EXPLOIT TECHNIQUES

|Technique|Definition|
|---|---|
|Return Oriented Programming (ROP)|Reutilización de fragmentos de código que ya existen en el código, usualmente en libc o kernel32.dll|
|Heap Spraying|Inundar espacio libre de memoria de proceso escribiendo múltiples copias de código malicioso|
|JIT (Just-In-Time) Spraying|Ejecutar código arbitrario en sistema víctima vía función JIT compilation en navegadores modernos; atacante usa código JavaScript que contiene payload malicioso|
|Exploit Chaining|Combina múltiples exploits y vulnerabilidades|

---

## AD DOMAIN MAPPING WITH BLOODHOUND

|Property|Detail|
|---|---|
|Tool|BloodHound (aplicación web JS)|
|Purpose|Mapeo de dominio AD|

---

# 10 — AD ENUMERATION WITH POWERVIEW

---

## POST AD ENUMERATION COMMANDS

|Command|Description|
|---|---|
|Get-ADomain / Get-NetDomain|Recupera información relacionada con el dominio actual incluyendo DCs|
|Get-DomainSID|Recupera security IDs|
|Get-DomainPolicy|Recupera información relacionada con las configuraciones de política de acceso del sistema del dominio|
|(Get-DomainPolicy)."SystemAccess"|Recupera información relacionada con configuraciones de política en acceso del sistema del dominio|
|(Get-DomainPolicy)."kerberospolicy"|Recupera información relacionada con la política Kerberos del dominio|
|Get-NetDomainController|Recupera información relacionada con el controlador de dominio actual|
|Get-NetUser|Información del usuario actual|
|Get-NetLoggedon -ComputerName|Usuario de dominio activo actual|
|Get-UserProperty -Properties pwdlastset|Fecha y hora en que se estableció la contraseña por última vez para cada usuario del dominio|
|Find-LocalAdminAccess / Invoke-EnumerateLocalAdmin|Recupera usuarios que tienen privilegios administrativos locales (requiere admin)|
|Computer-NetSession -ComputerName|Recupera información del usuario actual logueado en la máquina|

---

## GHOSTPACK SEATBUCKET

|Property|Detail|
|---|---|
|Tool|GhostPack Seatbucket|
|Purpose|Identifica vulnerabilidades; recopila información incluyendo PowerShell, tickets Kerberos, y elementos en RecycleBin|

---

# 11 — DOMAIN TRUST FORESTS

---

## DOMAIN TRUST TYPES

|Trust Type|Description|
|---|---|
|One-Way Trust|Confianza unidireccional; permite a usuarios en dominio de confianza acceder a recursos del dominio que confía|
|Two-Way Trust|Permite a usuarios acceder a otro dominio y viceversa|

|Property|Detail|
|---|---|
|Tool|Utilidad domain_trusts — recopilar información sobre dominios de confianza|

---

# 12 — PRIVILEGE ESCALATION

---

## HORIZONTAL vs VERTICAL PRIVILEGE ESCALATION

|Type|Description|
|---|---|
|Horizontal|Intenta acceder a recursos que pertenecen a un usuario autorizado con permisos similares; mismo nivel de usuario pero desde ubicación protegida|
|Vertical|Un usuario no autorizado obtiene acceso a un usuario con mayores privilegios; el usuario ejecuta código a nivel de privilegio superior|

---

## DLL HIJACKING

|Property|Detail|
|---|---|
|Method|Colocar DLL maliciosa en biblioteca de aplicación|
|Tool|Spartacus|
|Defense|Dependency Walker, Dylib Hijack Scanner|

---

## DYLIB HIJACKING (macOS)

|Property|Detail|
|---|---|
|Method|Ataques de biblioteca dinámica en macOS|
|Tool|Dylib Hijack Scanner|

---

## SPECTRE VULNERABILITY

|Property|Detail|
|---|---|
|Affected Processors|AMD, Apple, ARM, Intel, etc.|
|Method|Engaña al procesador para que explote la ejecución especulativa y lea datos restringidos|

---

## MELTDOWN VULNERABILITY

|Property|Detail|
|---|---|
|Affected Processors|Todos ARM, Intel (desplegados por Apple)|
|Method|Engaña al procesador para que acceda a memoria fuera de límites|

---

## NAMED PIPE IMPERSONATION

|Property|Detail|
|---|---|
|Platform|Windows|
|Mechanism|Los pipes proporcionan comunicación legítima entre procesos en ejecución|
|Tool|Metasploit|

---

## UNSQUOTED SERVICE PATHS

|Property|Detail|
|---|---|
|Mechanism|Ruta del ejecutable encerrada entre comillas "" para que el sistema pueda localizar el binario de la aplicación|
|Exploit|Los atacantes explotan servicios con rutas sin comillas para escalar privilegios|

---

## SERVICE OBJECT PERMISSIONS

|Property|Detail|
|---|---|
|Issue|Los permisos de servicio mal configurados permiten al atacante modificar atributos asociados con ese servicio|
|Impact|Agregar nuevos usuarios, secuestrar cuenta, escalar privilegios|
|Common Source|Zero-days|

---

## PIVOTING

|Property|Detail|
|---|---|
|Purpose|Evadir firewall para pivotear vía sistema comprometido para acceder a otros sistemas vulnerables|

---

## MISCONFIGURED NFS PRIVILEGE ESCALATION

|Step|Command/Action|
|---|---|
|1|nmap -sV ip — verificar si el servicio NFS está en ejecución|
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
|Metasploit vía inyección de memoria|
|Clave de registro FodHelper|
|Clave de registro Eventvwr|
|Secuestro de manejador COM|

---

## BOOT/LOGIN INITIALIZATION PRIVILEGE ESCALATION

|Platform|Method|
|---|---|
|Windows Logon Script|Insertar script en clave de registro: HKEY_CURRENT_USER\environment\userinitMPRLogonScript|
|macOS Logon Script|Conocido como login hooks|
|Network Logon Scripts|Asignados usando AD GPOs|
|UNIX RC Scripts|Binario/shell/ruta malicioso en scripts RC como rc.common o rc.local|
|macOS StartupItems|Los atacantes crean archivos/carpetas maliciosos en /Library/StartupItems — usado para etapa de arranque con privilegios root|

---

## DOMAIN POLICY MODIFICATION

|Method|Description|
|---|---|
|Group Policy Modification|Modificar ScheduledTasks.xml usando scripts como New-GPOImmediateTask|
|Domain Trust Modification|Usar utilidad domain_trusts para recopilar información sobre dominios de confianza|

---

## DCSYNC ATTACK

|Property|Detail|
|---|---|
|Method|El atacante obtiene cuenta privilegiada con derechos de replicación de dominio|
|Result|DC virtual creado similar al AD original; permite hashes NTLM, ataques golden ticket, ataques Living off the Land|
|Tool|mimikatz mimikatz "lsadump::dcsync /domain: (domain name) /user:Administrator"|

---

## ADCS (ACTIVE DIRECTORY CERTIFICATE SERVICES) ABUSE

|Property|Detail|
|---|---|
|Purpose|Infraestructura de clave pública|
|Risk|Puede conducir a vulnerabilidades críticas|
|Tool|Certipy|

---

## OTHER PRIVILEGE ESCALATION TECHNIQUES

|Technique|Description|
|---|---|
|Access Token Manipulation|Los tokens determinan el contexto de seguridad del proceso|
|Parent PID Spoofing|Suplantación de ID de proceso padre vía svchost.exe o consent.exe|
|Application Shimming|Framework de compatibilidad de aplicaciones; evadir UAC e inyectar DLLs maliciosas|
|Filesystem Permission Weakness|Explotar malas configuraciones del sistema de archivos|
|Path Interception|Ejecutar aplicación desde ruta en lugar de la real|
|Abusing Accessibility Features|Aprovechar herramientas de accesibilidad para escalamiento|
|SID-History Injection|Inyectar SID de administrador (Windows Security Identifier)|
|COM Hijacking|Secuestrar referencias válidas de Component Object Model y agregar propias referencias para infectar sistema objetivo|
|Scheduled Tasks (Windows)|Abusar del Programador de Tareas de Windows|
|Scheduled Tasks (Linux)|cron y crond|
|Launch Daemon (macOS)|macOS launchd|
|Plist Modification|Manipulación de plist de macOS|
|Setuid and Setgid|Abuso de permisos en Linux y macOS|
|Web Shell|Permite acceso a servidor web|
|Abusing Sudo Rights|Aprovechar configuración de sudo|
|Abusing SUID/SGID Permissions|Sistemas basados en Unix|
|Abusing '.' Path|Manipulación de ruta|
|Abusing Elevation Mechanism (macOS)|Privilege escalation en macOS|
|Process Injection via Ptrace|Inyección de llamada de sistema Unix/Linux|
|Abusing MSI|Abuso de Microsoft Software Installer|
|Abusing WFP (NoFilter)|Abuso de Windows Filtering Platform|

---

# 13 — PRIVILEGE ESCALATION TOOLS

---

## PRIVILEGE ESCALATION TOOLS

|Tool|Purpose|
|---|---|
|BeRoot|Privilege escalation post-exploitation|
|pwncat|Privilege escalation|
|PowerSploit|PowerShell post-exploitation|
|Traitor|Privilege escalation en Linux|
|PEASS-ng|Privilege Escalation Awesome Scripts Suite|
|FullPowers|Privilege escalation en Windows|

---

## DLL/DYLIB HIJACKING DEFENSE TOOLS

|Tool|Purpose|
|---|---|
|Dependency Walker|Detectar DLL hijacking|
|Dylib Hijack Scanner|Detectar Dylib hijacking|

---

# 14 — MAINTAINING ACCESS

---

## BACKDOORS

|Property|Detail|
|---|---|
|Purpose|Negar o interrumpir operación; obtener acceso no autorizado a recursos del sistema|

---

## REMOTE CODE EXECUTION TECHNIQUES

|Technique|Description|
|---|---|
|Exploitation for Client Execution|Basado en navegador web (spear phishing), basado en aplicación Office (MS Office), explotación de aplicaciones de terceros|
|Service Execution|Explotación directa de servicio|
|Windows Management Instrumentation (WMI)|Ejecución basada en WMI|
|Windows Remote Management (WinRM)|Ejecución basada en WinRM|

|Tool|Purpose|
|---|---|
|Dameware Remote Support|Soporte remoto|
|Ninja|Acceso remoto|
|Pupy|Post-exploitation|
|PDQ Deploy|Despliegue de software|
|ManageEngine Endpoint Central|Gestión de endpoints|
|PsExec|Ejecución remota|

---

## KEYLOGGERS

|Type|Description|
|---|---|
|Software|Metasploit puede crear keylogger remoto|
|Hardware|Dispositivos físicos de keylogging|

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
|Desktop Spyware|Monitoreo de actividad de escritorio|
|Email Spyware|Monitoreo de correo electrónico|
|Internet Spyware|Monitoreo de uso de internet|
|Child Monitoring Spyware|Monitoreo parental|
|Screen Capturing Spyware|Captura de capturas de pantalla|
|USB Spyware|Monitoreo basado en USB|
|Audio Spyware|theOneSpy, Snooper|
|Video Spyware|iSpy, Perfect IP Camera Viewer, Optiview VMS, Eyeline Video Surveillance Software|
|Print Spyware|Monitoreo de impresión|
|Cellphone Spyware|mSpy, XNSPY, iKeyMonitor, ONESPY, Highster Mobile|

---

## ROOTKITS

|Level|Description|
|---|---|
|Hypervisor Level|Basado en máquina virtual|
|Hardware/Firmware|Embebido en hardware|
|Kernel Level|Modificación del kernel|
|Boot-Loader|Modificación del sector de arranque|
|Application Level|Modificación de aplicación|
|Library Level|Modificación de biblioteca|
|Memory|Solo en memoria|

|Rootkit|Note|
|---|---|
|FudModule Rootkit|Rootkit avanzado|
|Fire Chili Rootkit|Explota log4shell|

### Rootkit Detection

|Method|
|---|
|Detección basada en integridad — firmas, tripwire, AIDE para baseline del sistema|
|Análisis de volcados de memoria|

|Anti-Rootkit Tool|Purpose|
|---|---|
|GMER|Detección de rootkit|
|Stinger|Eliminación de rootkit|
|Avast One|Antivirus/anti-rootkit|
|TDSSKiller|Eliminación de rootkit|

---

## NTFS ALTERNATE DATA STREAMS (ADS)

|Property|Detail|
|---|---|
|Full Name|Alternate Data Stream|
|Mechanism|Forkear datos en archivos existentes; stream oculto de Windows|
|Risk|Permite inyección de código malicioso en archivos|

|Detection Tool|Purpose|
|---|---|
|Stream Armor|Detección de ADS|
|GMER|Detección de rootkit/ADS|
|ADS Scanner|Escaneo de ADS|
|Stream|Detección de ADS|
|AlternateStreamView|Visualización de ADS|

---

## STEGANOGRAPHY

|Property|Detail|
|---|---|
|Definition|Ocultar mensaje secreto dentro de mensaje ordinario, utilizando imagen gráfica como cubierta|

### Steganography Tools by Media Type

|Media Type|Tool|Purpose|
|---|---|---|
|Text|SNOW|Steganography de texto|
|Images|OpenStego|Steganography de imágenes|
|Images|StegOnline|Steganography de imágenes|
|Images|Coagula|Steganography de imágenes|
|Images|SSuite Picsel|Steganography de imágenes|
|Images|CryptaPix|Steganography de imágenes|
|Documents|StegoStick|Steganography de documentos|
|Documents|StegJ|Steganography de documentos|
|Documents|Office XML|Steganography de documentos|
|Documents|SNOW|Steganography de documentos|
|Documents|Data Stash|Steganography de documentos|
|Video|OmniHide Pro|Steganography de video|
|Audio|DeepSound|Steganography de audio|
|Folder|GillSoft File Lock Pro|Steganography de carpetas|
|Email|Spam Mimic|Steganography de correo electrónico|

### Steganography Detection Tools

|Tool|Purpose|
|---|---|
|zsteg|Detección|
|StegoVeritas|Detección|
|Stegextract|Detección|
|StegoHunt|Detección|
|Steganography Studio|Detección|
|Virtual Steganographic Laboratory|Detección|

---

# 15 — DOMAIN DOMINANCE

---

## DOMAIN DOMINANCE TECHNIQUES

|Technique|Description|
|---|---|
|Malicious Replication|Crear copia exacta de datos de usuario usando credenciales de administrador|
|Skeleton Key Attack|Inyectar credenciales falsas; virus residente en memoria; Herramienta: Mimikatz|
|Golden Ticket Attack|Post-exploitation; falsificar TGT comprometiendo cuenta de Key Distribution Service|
|Silver Ticket Attack|Robar credenciales de usuario y crear ticket TGS falso; Herramienta: Mimikatz|
|AdminSDHolder|Protege cuentas y grupos con altos privilegios; atacante abusa del proceso SDProp|
|WMI Event Subscription|Mantener persistencia; Herramienta: PowerLurk|
|Overpass the Hash (OPtH)|Extensión de pass-the-ticket y pass-the-hash; Herramienta: Mimikatz|

---

# 16 — HIDING EVIDENCE

---

## HIDING EVIDENCE OF COMPROMISE

|Step|Description|
|---|---|
|1|Deshabilitar auditoría|
|2|Limpiar registros — Metasploit Meterpreter|
|3|Manipular registros|
|4|Cubrir pistas en la red/SO|
|5|Eliminar archivos / ocultar artefactos|
|6|Deshabilitar funcionalidad de Windows|

|Property|Detail|
|---|---|
|File Deletion Tool|cipher.exe|

---

## EXAM EXTRAS (Boson Practice Test)

### MIMIKATZ — PASS THE TICKET

|Item|Memorize|
|---|---|
|Tool|Mimikatz|
|Attack|Pass the ticket — roba Kerberos TGT de máquina de usuario|

---

### SESSION HIJACKING — MAIL SERVER WITH ISN

|Item|Memorize|
|---|---|
|Method|Cancelar conexión tan pronto como se reciba respuesta para obtener Initial Sequence Number (ISN)|
|Target|Servidor de correo que usa IP para autenticación|

---

### MSFVENOM PAYLOAD OPTIONS

|Option|Purpose|
|---|---|
|LHOST|Especifica dirección IP del atacante|
|LPORT|Especifica puerto de escucha (por defecto: 4444)|

---

### RAINBOW TABLES AND SALT

|Item|Memorize|
|---|---|
|Rainbow table|Comparación de hash con lista de hashes conocidos|
|Mitigation|Usar valor salt para prevenir ataques de rainbow table|

---

# EXAM FLASHCARDS

---

|Term|Definition|
|---|---|
|SAM|Security Accounts Manager — base de datos de Windows que almacena contraseñas hasheadas |
|NTLM|NT LAN Manager — esquema de autenticación predeterminado de Windows |
|Kerberos|Autenticación de cryptography de clave secreta usando KDC, AS, y TGS |
|LLMNR|Link Local Multicast Name Resolution — protocolo de resolución de nombres de Windows |
|NBT-NS|NetBIOS Name Service — protocolo de resolución de nombres de Windows |
|AS-REP Roasting|Ataque que apunta a cuentas Kerberos sin pre-authentication |
|Kerberoasting|Ataque para obtener y descifrar hashes de cuentas de servicio |
|Golden Ticket|TGT falsificado comprometiendo cuenta de servicio KDC |
|Silver Ticket|Ticket TGS falsificado usando credenciales de usuario robadas |
|DCSync|Ataque que replica AD para extraer hashes NTLM |
|DLL Hijacking|Colocar DLL maliciosa en biblioteca de aplicación |
|Spectre|Vulnerabilidad de procesador que explota la ejecución especulativa |
|Meltdown|Vulnerabilidad de procesador que accede a memoria fuera de límites |
|ROP|Return Oriented Programming — reutilizar fragmentos de código existentes |
|Heap Spraying|Inundar memoria de proceso con copias de código malicioso |
|JIT Spraying|Ejecutar código arbitrario vía JIT compilation del navegador |
|Exploit Chaining|Combinar múltiples exploits y vulnerabilidades |
|ADS|Alternate Data Stream — stream de datos oculto de NTFS para inyección en archivos |
|Skeleton Key|Inyectar credenciales falsas en virus residente en memoria |
|AdminSDHolder|Objeto AD que protege cuentas privilegiadas; abusado vía SDProp |

---

# PRACTICE QUESTIONS

---

|Q#|Question|
|---|---|
|1|¿Qué colmena de registro de Windows contiene la base de datos Security Accounts Manager (SAM)?|
|2|¿Cuál es la diferencia principal entre autenticación NTLM y Kerberos?|
|3|¿Qué tipo de módulo de Metasploit se usa para ocultar payloads de la detección de antivirus?|
|4|¿A qué apunta AS-REP Roasting en entornos Kerberos?|
|5|¿Qué técnica implica falsificar un Ticket Granting Ticket comprometiendo la cuenta de Key Distribution Service?|

|Q#|Answer|
|---|---|
|1|HKEY_LOCAL_MACHINE\SAM (archivo ubicado en %SystemRoot%\system32\config\SAM)|
|2|NTLM usa challenge-response sin especificación de protocolo oficial; Kerberos usa cryptography de clave secreta con KDC, AS, TGS|
|3|Módulos Encoder — usados para codificar payloads para evitar detección AV/IDS con polimorfismo|
|4|Cuentas sin pre-authentication Kerberos requerida|
|5|Ataque Golden Ticket — falsificar TGT comprometiendo la cuenta de servicio KDC|
