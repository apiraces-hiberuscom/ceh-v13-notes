# Módulo 13 — Hacking Web Servers

> **Enfoque:** Arquitectura y plataformas de web servers (Apache, IIS, Nginx), sus vulnerabilidades, los ataques contra ellos y sus contramedidas

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
- [WEB SERVER CONCEPTS](#web-server-concepts)
- [WEB SERVER PLATFORMS](#web-server-platforms)
- [WEB SERVER ATTACKS](#web-server-attacks)
- [OTHER WEB SERVER ATTACKS](#other-web-server-attacks)
- [MASTER MEMORY MAP — MODULE 13](#master-memory-map--module-13)
- [Extras de examen (Boson Practice Test)](#extras-de-examen-boson-practice-test)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

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

---

## Objetivos de aprendizaje

|Objective #|Description|
|---|---|
|01|Identificar la arquitectura, componentes y plataformas de web servers (Apache, IIS, Nginx)|
|02|Describir ataques a web servers como DNS hijacking, DNS amplification, directory traversal, misconfiguration, response-splitting, cache poisoning, brute force, HTTP/2 flood y frontjacking|
|03|Explicar las contramedidas contra ataques a web servers|
|04|Realizar penetration testing de web servers|

---

## WEB SERVER CONCEPTS

### What Is a Web Server

|Concept|Memorize Exactly|
|---|---|
|Web Server|Un sistema informático que almacena, procesa y entrega páginas web a clientes usando HTTP/HTTPS|
|Client|Navegador que genera solicitudes HTTP|
|Server Role|Recibe la solicitud, la procesa y devuelve una respuesta HTTP|
|Failure Case|Si el recurso solicitado no está disponible, el servidor devuelve un mensaje de error|

> 🧠 *Para recordar:* **El navegador pide → el servidor busca → el servidor responde**

---

### Web Server Components (HIGH YIELD)

|Component|Purpose|Exam Hook|
|---|---|---|
|Document Root|Almacena los archivos HTML relacionados con el nombre de dominio|Los archivos web públicos se encuentran aquí|
|Server Root|Almacena configuración, logs y ejecutables|Directorio a nivel de administrador|
|conf|Archivos de configuración|Comportamiento del servidor|
|logs|Logs del servidor|Mina de oro para reconocimiento|
|cgi-bin|Scripts CGI|Riesgo de ejecución de comandos|

> 🧠 *Para recordar:* **Document root = contenido | Server root = control**

---

### Virtual Document Tree

|Feature|Memorize|
|---|---|
|Purpose|Proporciona almacenamiento en una máquina o disco diferente|
|Trigger|Se utiliza cuando el disco original está lleno|
|Security Impact|Puede proporcionar seguridad a nivel de objetos|

---

### Virtual Hosting (HIGH YIELD)

|Type|Description|
|---|---|
|Name-based|Múltiples dominios en la misma IP|
|IP-based|Cada dominio tiene una IP única|
|Port-based|Múltiples sitios usando diferentes puertos|

> 🧠 *Para recordar:* **Name, IP, Port = las tres formas de Virtual Hosting**

---

### Web Proxy

|Feature|Memorize|
|---|---|
|Location|Entre el cliente y el web server|
|Purpose|Prevenir bloqueo de IP, mantener anonimato|
|Function|Reenvía las solicitudes del cliente|

---

### Why Web Servers Are Compromised

|Cause|Memorize|
|---|---|
|Improper configuration|El más común|
|Weak/default credentials|Fácil explotación|
|Unpatched software|Exploits conocidos|
|Misconfigured SSL/TLS|Riesgo de MITM|
|Third-party plugins|Riesgo de cadena de suministro|

> 🧠 *Para recordar:* **Config > Passwords > Patching > Crypto > Plugins**

---

### Impact of Web Server Attacks

|Impact Category|Memorize|
|---|---|
|Compromise of user accounts|Robo de credenciales|
|Website defacement|Manipulación visual|
|Secondary attacks|Ataques lanzados desde el servidor|
|Root access|Control total|
|Data tampering|Alteración/eliminación de datos|
|Reputation damage|Impacto en el negocio|

---

### Common Goals of Web Server Attackers

|Goal|Exam Phrase|
|---|---|
|Steal credentials|Phishing, sniffing|
|Botnet integration|DoS/DDoS|
|Database compromise|Robo de datos|
|Obtain source code|Propiedad intelectual|
|Redirect traffic|Monetización|
|Privilege escalation|Persistencia|

> 🧠 *Para recordar:* **Steal, Bot, Break DB, Copy Code, Redirect, Escalate**

---

### Security Flaws Due to Admin Negligence

|Flaw|Result|
|---|---|
|Same admin credentials reused|Movimiento lateral|
|Unrestricted inbound/outbound traffic|Fácil explotación|
|Unhardened servers|Amplia superficie de ataque|
|Verbose errors|Ventaja para reconocimiento|
|Weak SSL/TLS algorithms|MITM|
|Third-party plugins|Backdoors|

---

### Oversights That Compromise Web Servers (HIGH YIELD)

|Oversight|
|---|
|Improper file and directory permissions — permisos inadecuados de archivos y directorios|
|Installed server with default settings — servidor instalado con la configuración por defecto|
|Unnecessary services enabled — servicios innecesarios habilitados|
|Security conflicts with business requirements — conflictos entre la seguridad y los requisitos del negocio|
|Lack of security policy — falta de una política de seguridad|
|Improper authentication with external systems — autenticación inadecuada con sistemas externos|
|Default accounts without passwords — cuentas por defecto sin contraseña|
|Sample/backup files left — archivos de ejemplo o de backup olvidados en el servidor|
|OS, server, app misconfigurations — errores de configuración del SO, del servidor o de la aplicación|
|SSL certificate mismanagement — mala gestión de los certificados SSL|
|Admin/debug functions exposed — funciones de administración o depuración expuestas|
|Self-signed certificates — certificados autofirmados|
|Excessive privileges — privilegios excesivos|

> 🧠 *Para recordar:* **Defaults, Files, Services, Crypto, Privileges**

---

### Why Web Servers Get Compromised — Perspectives

#### Webmaster Perspective

|Risk|Memorize|
|---|---|
|LAN exposure|Compromiso de la red corporativa|
|Arbitrary script execution|RCE|
|Insecure scripts|Ejecución de código|

#### Network Administrator Perspective

|Risk|Memorize|
|---|---|
|Improper access control|Bypass de administrador|
|Poor segmentation|Exposición completa de la LAN|
|Weak privilege assignment|Escalación|

#### End User Perspective

|Risk|Memorize|
|---|---|
|Malicious scripts|Compromiso del navegador|
|Session hijacking|Account takeover (toma de control de la cuenta)|
|LAN access|Ataque interno|

---

## WEB SERVER PLATFORMS

### Apache Web Server

#### Apache Core Architecture

|Component|Memorize Exactly|
|---|---|
|Apache HTTP Server|Web server de código abierto desarrollado por Apache Software Foundation|
|Role|Intermediario — acepta solicitudes, aplica reglas y lógica de seguridad, sirve contenido o reenvía al application server|
|Process Model|Multi-proceso o multi-hilo|
|Configuration Files|httpd.conf, apache2.conf|
|Modules|Extienden la funcionalidad del servidor|

> 🧠 *Para recordar:* **Apache = process-based + modular**

Apache sirve el contenido estático por sí mismo; las solicitudes dinámicas se reenvían al application server.

---

#### Apache Process Models (HIGH YIELD)

|Model|Description|
|---|---|
|Prefork MPM|Múltiples procesos hijos, una solicitud por proceso|
|Worker MPM|Múltiples hilos por proceso|
|Event MPM|Modelo worker optimizado que maneja conexiones keep-alive|

> 🧠 *Para recordar:* **Prefork = procesos | Worker = hilos | Event = worker optimizado**

---

#### Apache Modules (HIGH YIELD)

|Module|Purpose|
|---|---|
|mod_ssl|Habilita el cifrado SSL/TLS|
|mod_rewrite|Reescribe URLs dinámicamente|
|mod_proxy|Permite a Apache actuar como proxy o gateway|
|mod_auth|Controla autenticación y autorización|
|mod_cgi|Ejecuta scripts CGI|
|mod_headers|Manipula headers HTTP|

> 🧠 *Para recordar:* **SSL, Rewrite, Proxy, Auth, CGI, Headers**

Apache es peligroso si los módulos están mal configurados.

---

#### Apache Vulnerabilities

|Vulnerability|Memorize|
|---|---|
|Misconfigured permissions|Acceso no autorizado a archivos|
|Directory listing enabled|Exposición de archivos sensibles|
|Default/sample files|Divulgación de información|
|mod_cgi misconfiguration|Ejecución de comandos|
|mod_proxy abuse|SSRF|
|Weak SSL configuration|MITM|
|Verbose error messages|Ventaja para reconocimiento|
|HTTP response splitting|Valida incorrectamente la entrada|
|SQL injection in components|Neutraliza incorrectamente elementos SQL|
|Code injection / env variable injection|Manipula código o variables|
|Memory exhaustion (HTTP/2)|DoS mediante continuation frames infinitos|

---

#### Apache Attack Surface Summary

|Attack Vector|Result|
|---|---|
|Directory traversal|Acceso fuera del web root|
|File inclusion|Ejecución de código|
|Buffer overflow|DoS / RCE|
|Misconfigured modules|Escalación de privilegios|

> 🧠 *Para recordar:* **Apache cae por módulos + misconfiguration**

---

### IIS Web Server

#### IIS Core Architecture

|Component|Purpose|
|---|---|
|IIS (Internet Information Services)|Plataforma web server de Microsoft|
|Supported Protocols|HTTP/HTTPS, FTP/FTPS, SMTP, NNTP|
|Application Pool|Aísla las aplicaciones web|
|Worker Process (w3wp.exe)|Maneja solicitudes en modo usuario|
|web.config|Archivo de configuración de IIS|
|inetmgr|Consola de administración de IIS|

> 🧠 *Para recordar:* **IIS = App Pool isolation**

---

#### IIS Request Flow

|Step|Memorize|
|---|---|
|1. Client sends request|Punto de entrada|
|2. HTTP.sys receives request|Driver en modo kernel escucha solicitudes|
|3. WAS (Windows Process Activation Service)|Lee ApplicationHost.config, decide qué app pool maneja la solicitud, inicia worker process si es necesario|
|4. WWW Service|Usa información de configuración; servicio de publicación web|
|5. Worker process (w3wp.exe)|Se ejecuta en modo usuario — procesa solicitud, realiza autenticación, ejecuta código de la app, escribe logs, genera respuesta|
|6. Response goes back|Regresa al cliente|

Clave: HTTP.sys gestiona el tráfico en modo kernel; w3wp.exe ejecuta en modo usuario; WAS lo coordina todo a partir de los archivos de configuración.

---

#### IIS Vulnerabilities

|Vulnerability|Result|
|---|---|
|Authentication & authorization failures|Acceso no autorizado|
|Trust boundary violation|No separa correctamente los niveles de privilegios|
|File and directory access problems|Exposición de archivos sensibles|
|Privilege escalation|Compromiso total|
|Input handling and injection issues (XSS, CRLF)|Inyección de scripts|
|Directory browsing enabled|Exposición de archivos sensibles|
|Unrestricted file upload|Web shell|
|Weak NTFS permissions|Escalación de privilegios|
|web.config exposure|Fuga de credenciales|
|Default ISAPI filters|RCE|
|Verbose errors|Reconocimiento|
|TYPO3 XSS — PATH_INFO|Variables de entorno no filtradas|
|XSS in password manager|Entrada controlada por el usuario neutralizada incorrectamente|
|Credential exposure|IIS registra credenciales sensibles incorrectamente|
|Mail-related vulnerability|Subida de archivos en directorios públicos → RCE|

---

#### IIS Attack Surface Summary

|Vector|Impact|
|---|---|
|File upload|Ejecución de shell|
|Config exposure|Compromiso total|
|Permission flaws|Acceso SYSTEM|
|Legacy components|Servicios explotables|

> 🧠 *Para recordar:* **IIS cae por configuración + permisos**

---

### Nginx Web Server

#### Nginx Core Design

|Feature|Memorize|
|---|---|
|Architecture|Master–worker|
|Worker Model|Single-threaded (un solo hilo)|
|I/O Model|Event-driven, non-blocking|
|Role|Web server, reverse proxy, load balancer|
|Strength|Extremadamente rápido, eficiente en memoria|

---

#### Nginx Components

|Component|Function|
|---|---|
|Master Process|Controla los workers|
|Worker Processes|Manejan solicitudes de clientes (un solo hilo, I/O no bloqueante — pueden manejar miles de conexiones)|
|Proxy Cache|Almacena contenido en caché|
|Cache Loader|Carga la caché al iniciar|
|Cache Manager|Elimina la caché expirada|

Otros componentes:
- **Web server** — maneja solicitudes HTTP, sirve contenido estático, enruta solicitudes dinámicas
- **Application server** — procesa scripts del lado del servidor, genera contenido dinámico
- **Memcache** — almacenamiento clave-valor

---

#### Nginx Process

|Step|Action|
|---|---|
|1|El cliente se conecta — un solo hilo mantiene conexiones abiertas usando event loop|
|2|Worker process acepta la solicitud|
|3|Interacción con backend — HTTP, FastCGI, PHP-FPM, Memcache|
|4|Respuesta + caché — envía respuesta, almacena en proxy cache|

> 🧠 *Para recordar:* **El master controla, los workers sirven**

---

#### Nginx Vulnerabilities

|Vulnerability|Impact|
|---|---|
|NULL pointer dereference (HTTP/3)|DoS / RCE|
|SSRF|Acceso a red interna|
|RCE via Nginx-UI|Compromiso total|
|Improper certificate validation|Escritura de archivos|
|SQL injection|Fuga de datos|
|Unauthenticated private key access|Compromiso de TLS|
|HTTP/2 memory exhaustion|DoS|
|OS command injection|Ejecución remota|
|Default file permissions|Modificación sensible|
|Access control failures|Nginx no soporta .htaccess|

#### Nginx Dangers

|Danger|
|---|
|Los errores de configuración afectan a todos los workers|
|Las interfaces de administración expuestas son peligrosas|
|La caché puede filtrar datos sensibles|
|El modelo event-driven amplifica el impacto de DoS|

---

## WEB SERVER ATTACKS

### DNS Server Hijacking

|Item|Memorize|
|---|---|
|Attack Type|Ataque a infraestructura DNS|
|Target|Configuración del servidor DNS|
|Result|Redirección silenciosa a sitio malicioso|

#### Attack Flow

|Step|Action|
|---|---|
|1|El atacante compromete el servidor DNS objetivo y modifica la configuración DNS|
|2|El usuario intenta acceder a un sitio web legítimo ingresando la URL correcta|
|3|La solicitud se envía al servidor DNS comprometido|
|4|El servidor comprometido redirige al usuario a un sitio web malicioso|

#### Key Characteristics

|Characteristic|
|---|
|El ataque se realiza a la configuración del servidor DNS, no al lado del usuario|
|La redirección ocurre antes de que comience la comunicación HTTP|
|Los usuarios no son conscientes porque la URL parece legítima|

---

### DNS Amplification Attack

|Item|Memorize|
|---|---|
|Attack Type|DDoS|
|Exploits|Consultas DNS recursivas|
|Mechanism|Solicitudes pequeñas falsificadas → respuestas DNS grandes|
|Protocol|Generalmente UDP (sin estado)|
|Result|Indisponibilidad del servicio DNS|

Usa IP spoofing y explota el comportamiento recursivo.

---

### Directory Traversal Attacks

|Item|Memorize|
|---|---|
|Attack Type|Ataque al sistema de archivos|
|Exploits|Validación de entrada incorrecta|
|Mechanism|Usa ../ para navegar fuera del web root|
|Targets|Estructura del sistema de archivos|
|Result|Acceso a archivos fuera del directorio web root|

---

### Web Server Misconfiguration

|Item|Memorize|
|---|---|
|Attack Type|Debilidad de infraestructura|
|Scope|Debilidad de configuración en la infraestructura web|

#### Common Issues

|Issue|
|---|
|Mensajes de depuración o error detallados|
|Credenciales por defecto|
|Configuraciones y scripts de ejemplo|
|Funciones de administración remota|
|Servicios innecesarios habilitados|
|Problemas de SSL|

#### Apache Misconfiguration Example

```apache
<Location "/server-status">
  SetHandler server-status
  Require host example.com
</Location>
```

#### Verbose PHP Messages

```ini
display_error = On
log_errors = On
error_log = syslog
ignore_repeated_errors = Off
```

#### IIS Misconfiguration Example

Tener habilitado el directory browsing en IIS expone los archivos del sitio.

---

### HTTP Response-Splitting Attack (HIGH YIELD)

|Item|Memorize|
|---|---|
|Attack Type|Ataque basado en web|
|Exploits|Validación de entrada incorrecta|
|Mechanism|Inyección de caracteres de nueva línea (CRLF) en headers de respuesta HTTP|
|Result|El servidor divide una respuesta en dos|
|Injection Type|CRLF (Carriage Return + Line Feed)|

#### Attack Flow

|Step|Action|
|---|---|
|1|El atacante inyecta CRLF en la entrada|
|2|El servidor incluye los datos inyectados en el header|
|3|El servidor genera dos respuestas HTTP|
|4|El atacante controla la primera respuesta|
|5|El navegador descarta la segunda respuesta|

> 🧠 *Para recordar:* **CRLF → se rompe el header → doble respuesta**

#### Exploitable Outcomes

|Outcome|
|---|
|Cross-Site Scripting (XSS)|
|Cross-Site Request Forgery (CSRF)|
|SQL Injection|
|Web Cache Poisoning|
|User redirection (redirección del usuario)|

Ocurre a nivel de header HTTP. Habilita cache poisoning y XSS.

#### Exam Traps

|Trap|Correct|
|---|---|
|Ocurre en el body|NO (en los headers)|
|El navegador ejecuta ambas respuestas|NO|
|Requiere autenticación|NO|

---

### Web Cache Poisoning Attack

|Item|Memorize|
|---|---|
|Attack Type|Ataque de integridad de caché|
|Target|Caché web intermedia|
|Result|Los usuarios reciben contenido envenenado sin saberlo|
|Persistence|Hasta que la caché se vacíe|
|Depends On|Fallos de HTTP response-splitting|

#### Attack Flow

|Step|Action|
|---|---|
|1|El atacante fuerza la limpieza de la caché|
|2|El atacante envía una solicitud elaborada|
|3|La respuesta maliciosa se almacena en la caché|
|4|Los usuarios solicitan el recurso en caché|
|5|Los usuarios reciben contenido malicioso|

> 🧠 *Para recordar:* **Envenena una vez → infecta a muchos**

#### Key Dependencies

|Dependency|
|---|
|HTTP response-splitting flaws (fallos de response-splitting)|
|Improper cache key handling (manejo inadecuado de la cache key)|
|Inadequate validation (validación insuficiente)|

Afecta a múltiples usuarios. Persistente hasta la expiración de la caché.

#### Exam Traps

|Trap|Correct|
|---|---|
|Es DNS poisoning|NO|
|Afecta a un solo usuario|NO|
|Es temporal|NO (persiste hasta que se vacía la caché)|

---

### SSH Brute Force Attack

|Item|Memorize|
|---|---|
|Protocol|SSH|
|Port|TCP 22|
|Attack Type|Brute force de credenciales|
|Goal|Acceso SSH no autorizado|

#### Attack Flow

|Step|Action|
|---|---|
|1|El atacante escanea el puerto 22|
|2|Se identifica el servicio SSH|
|3|Intentos de login automatizados por brute force|
|4|Se encuentran credenciales válidas|
|5|Se compromete el túnel SSH|

Herramientas: Nmap (descubrimiento), Ncrack (brute force de SSH), THC Hydra (ataques de credenciales)

Precede al movimiento lateral.

> 🧠 *Para recordar:* **Túnel cifrado ≠ login seguro**

#### Exam Traps

|Trap|Correct|
|---|---|
|El cifrado de SSH impide el brute force|NO|
|El ataque va contra el cifrado|NO|
|Basta un solo intento de login|NO|

---

### FTP Brute Force with AI

|Item|Memorize|
|---|---|
|Protocol|FTP|
|Attack Type|Autenticación por brute force|
|Enhancement|Comandos de ataque generados por AI|
|Credential Exposure|Texto plano|

#### Attack Flow

|Step|Action|
|---|---|
|1|El atacante usa AI para generar comandos|
|2|Hydra realiza el ataque brute force|
|3|Se usan wordlists para credenciales|
|4|Se obtiene acceso FTP|

#### Hydra Command Structure

|Flag|Meaning|
|---|---|
|hydra|Ejecuta Hydra|
|-L|Lista de nombres de usuario|
|-P|Lista de contraseñas|
|ftp://IP|Servidor FTP objetivo|

#### Exam Traps

|Trap|Correct|
|---|---|
|La AI ejecuta el ataque|NO (genera los comandos; ataca Hydra)|
|FTP cifra las credenciales|NO|
|Hydra es opcional|NO|

---

### HTTP/2 Continuation Flood Attack

|Item|Memorize|
|---|---|
|Attack Type|Denial-of-Service|
|Protocol|HTTP/2|
|Exploited Element|CONTINUATION frames|
|Target|Memoria y CPU del servidor|

#### Attack Flow

|Step|Action|
|---|---|
|1|El atacante establece una conexión TCP|
|2|Envía un HEADERS frame|
|3|Se omite el flag END_HEADERS|
|4|Envía múltiples CONTINUATION frames|
|5|El servidor asigna memoria repetidamente|
|6|Los recursos se agotan|
|7|El servidor entra en crash o se bloquea|

En HTTP/2, los headers grandes se dividen en un HEADERS frame y varios CONTINUATION frames. El servidor espera el flag END_HEADERS, pero en este ataque nunca se establece.

Impacto: memory exhaustion (agotamiento de memoria), CPU exhaustion (agotamiento de CPU), DoS.

> 🧠 *Para recordar:* **Sin END_HEADERS → espera infinita → DoS**

#### Exam Traps

|Trap|Correct|
|---|---|
|Requiere muchas conexiones|NO|
|Usa mucho ancho de banda|NO|
|Explota HTTP/1.1|NO|

---

### Frontjacking

|Item|Memorize|
|---|---|
|Attack Type|Ataque a web server|
|Target|Componentes front-end de la aplicación web|
|Exploits|Mala configuración de reverse proxy|
|Common Platform|Nginx reverse proxy|
|Environment|Alojamiento compartido (shared hosting)|

#### Attack Components

|Component|Role|
|---|---|
|Attacker|Inyecta headers maliciosos|
|Vulnerable Reverse Proxy|Acepta headers inyectados|
|Attacker-controlled Server|Sirve contenido malicioso|
|User Browser|Muestra la respuesta maliciosa|

#### Attack Flow

|Step|Action|
|---|---|
|1|El atacante envía una solicitud HTTP con caracteres CRLF|
|2|Se inyecta un Host header malicioso|
|3|El Nginx reverse proxy vulnerable procesa el header|
|4|El proxy enruta la solicitud al servidor controlado por el atacante|
|5|El servidor del atacante responde con contenido malicioso|
|6|El navegador del usuario muestra el contenido malicioso|

> 🧠 *Para recordar:* **CRLF → Host header → el proxy redirige → contenido falso**

#### Exploited Weaknesses

|Weakness|
|---|
|Improper sanitization of $uri (saneamiento incorrecto de $uri)|
|Improper sanitization of $document_uri (saneamiento incorrecto de $document_uri)|
|Host header injection|
|CRLF injection|
|Reverse proxy misconfiguration (mala configuración del reverse proxy)|

#### Impact

|Impact|
|---|
|Phishing|
|Fake websites (sitios web falsos)|
|Reflected XSS|
|Malware injection (inyección de malware)|

#### Exam Traps

|Trap|Correct|
|---|---|
|Es una vulnerabilidad del servidor backend|NO|
|Es solo del lado del cliente|NO|
|Se basa en DNS|NO|

---

## OTHER WEB SERVER ATTACKS

### Password Cracking Techniques

#### Common Targets

|Target|
|---|
|SMTP servers (servidores SMTP)|
|FTP servers (servidores FTP)|
|Web shares (recursos compartidos web)|
|SSH tunnels (túneles SSH)|
|Web form authentication (autenticación por formularios web)|

#### Attack Enablers

|Enabler|
|---|
|Weak passwords (contraseñas débiles)|
|Default credentials (credenciales por defecto)|
|Poor authentication mechanisms (mecanismos de autenticación deficientes)|

#### Guessing

|Feature|Memorize|
|---|---|
|Method|Adivinanza manual o automatizada|
|Common Inputs|Nombres, mascotas, fechas|
|Weak Password Examples|password, admin, qwerty|
|Exploited Factor|Comportamiento humano|

#### Dictionary Attack

|Feature|Memorize|
|---|---|
|Method|Usa una wordlist predefinida|
|Speed|Más rápido que brute force|
|Weakness|Ineficaz contra contraseñas complejas|

#### Brute-Force Attack

|Feature|Memorize|
|---|---|
|Method|Prueba todas las combinaciones|
|Character Sets|A–Z, a–z, 0–9, símbolos|
|Time|Muy largo|
|Effectiveness|Garantizado eventualmente|

#### Hybrid Attack

|Feature|Memorize|
|---|---|
|Method|Diccionario + brute force|
|Modification|Agrega números/símbolos|
|Strength|Más poderoso que los demás|

> 🧠 *Para recordar:* **Guess → Dictionary → Brute → Hybrid**

---

### DoS/DDoS Attacks on Web Servers

|Item|Memorize|
|---|---|
|Attack Type|Ataque de disponibilidad|
|Method|Inundar con solicitudes falsas|
|Result|Servicio no disponible|

#### Targeted Resources

|Resource|
|---|
|Network bandwidth (ancho de banda de red)|
|Server memory (memoria del servidor)|
|CPU|
|Disk space (espacio en disco)|
|Database resources (recursos de base de datos)|
|Application exception handling (manejo de excepciones de la aplicación)|

#### High-Value Targets

|Target|
|---|
|Bank servers (servidores bancarios)|
|Payment gateways (pasarelas de pago)|
|Root DNS servers (servidores DNS raíz)|

---

### MITM Attack

|Item|Memorize|
|---|---|
|Attack Type|Ataque de interceptación|
|Position|Entre el usuario y el servidor|
|Goal|Robar o modificar datos|

#### Attack Flow

|Step|Action|
|---|---|
|1|El atacante se posiciona entre el usuario y el servidor|
|2|Intercepta el tráfico|
|3|Roba credenciales|
|4|Reenvía el tráfico para evitar detección|

#### Stolen Data

|Data|
|---|
|Usernames (nombres de usuario)|
|Passwords (contraseñas)|
|Session IDs|
|Banking details (datos bancarios)|

---

### Phishing Attacks

|Item|Memorize|
|---|---|
|Attack Type|Ingeniería social|
|Delivery|Email malicioso|
|Deception|Sitio web legítimo falso|

#### Attack Flow

|Step|Action|
|---|---|
|1|El atacante envía un email de phishing|
|2|La víctima hace clic en el enlace malicioso|
|3|Se redirige a un sitio web falso|
|4|La víctima ingresa sus credenciales|
|5|El atacante captura las credenciales|
|6|El atacante se hace pasar por la víctima|

#### Exam Traps

|Trap|Correct|
|---|---|
|Requiere malware|NO|
|Requiere explotar el servidor|NO|
|Es puramente técnico|NO|

---

## MASTER MEMORY MAP — MODULE 13

### Attack → Root Cause → Result

|Attack|Root Cause|Result|
|---|---|---|
|Misconfiguration|Malas prácticas de administración|Compromiso total|
|Directory Traversal|Fallo en validación de entrada|Acceso a archivos|
|DNS Hijacking|Compromiso de DNS|Redirección silenciosa|
|DNS Amplification|Abuso de DNS recursivo|DDoS|
|Response Splitting|Inyección CRLF|Cache poisoning|
|Cache Poisoning|Lógica de caché defectuosa|Infección masiva|
|SSH Brute Force|Credenciales débiles|Acceso al servidor|
|FTP Brute Force|Autenticación en texto plano|Robo de credenciales|
|HTTP/2 Flood|Abuso de protocolo|DoS|
|Frontjacking|Mala configuración de proxy|Phishing/XSS|
|Password Cracking|Autenticación débil|Movimiento lateral|
|MITM|Comunicaciones inseguras|Robo de credenciales|
|Phishing|Engaño al usuario|Account takeover|
|Defacement|Post-compromiso|Daño a la reputación|

---

## Extras de examen (Boson Practice Test)

|Concepto|Qué recordar|
|---|---|
|robots.txt|Archivo que lista ubicaciones de archivos y directorios restringidos|

---

## Flashcards

|Term|Definition|
|---|---|
|HTTP Response-Splitting|Ataque web donde la inyección CRLF en headers causa que el servidor envíe dos respuestas HTTP en lugar de una|
|Web Cache Poisoning|Ataque que afecta la integridad de las cachés web intermedias, causando que los usuarios reciban contenido envenenado|
|DNS Server Hijacking|Compromiso de la configuración del servidor DNS para redirigir silenciosamente a los usuarios a sitios web maliciosos|
|DNS Amplification|Ataque DDoS que explota consultas DNS recursivas con solicitudes pequeñas falsificadas para generar respuestas grandes|
|Directory Traversal|Ataque que usa secuencias ../ para acceder a archivos fuera del web root|
|Frontjacking|Ataque que inyecta headers maliciosos en un reverse proxy vulnerable para secuestrar interacciones del usuario|
|HTTP/2 Continuation Flood|Ataque DoS donde la bandera END_HEADERS nunca se establece, causando asignación infinita de memoria mediante CONTINUATION frames|
|Web Server Misconfiguration|Debilidades en la configuración de la infraestructura web como credenciales por defecto, errores detallados, servicios innecesarios|
|Virtual Hosting|Técnica que permite múltiples dominios en un solo servidor mediante métodos basados en nombre, IP o puerto|
|SSH Brute Force|Ataques automatizados de credenciales contra el servicio SSH en el puerto TCP 22|
|FTP Brute Force with AI|Uso de comandos generados por AI para mejorar ataques brute force contra la autenticación en texto plano de FTP|
|Application Pool (IIS)|Componente que aísla aplicaciones web en IIS para separación a nivel de proceso|
|Prefork MPM (Apache)|Modelo de proceso de Apache que usa múltiples procesos hijos, una solicitud por proceso|
|Master-Worker (Nginx)|Arquitectura de Nginx donde el master process controla los worker processes que manejan solicitudes|
|CRLF|Carriage Return Line Feed — secuencia de caracteres usada para inyectar saltos de línea en headers HTTP|

---

## Preguntas de práctica

**Q1.** ¿Qué módulo de Apache habilita el cifrado SSL/TLS?
**A:** mod_ssl

**Q2.** En IIS, ¿qué componente escucha solicitudes en modo kernel y las pasa al worker process apropiado?
**A:** HTTP.sys

**Q3.** ¿Cuál es la diferencia clave entre DNS hijacking y DNS amplification?
**A:** DNS hijacking compromete el servidor DNS para redirigir usuarios; DNS amplification usa solicitudes pequeñas falsificadas para generar respuestas DNS grandes para DDoS.

**Q4.** Un atacante envía un HEADERS frame HTTP/2 sin establecer la bandera END_HEADERS y luego envía múltiples CONTINUATION frames. ¿Qué ataque es este?
**A:** HTTP/2 Continuation Flood — un ataque DoS que agota la memoria y CPU del servidor.

**Q5.** ¿Qué variables de Nginx, cuando se sanitizan incorrectamente, habilitan ataques Frontjacking?
**A:** $uri y $document_uri
