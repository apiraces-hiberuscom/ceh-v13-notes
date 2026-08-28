# MODULE 11 — SESSION HIJACKING (CONTEXTO DEL EXAMEN)

|Item|Memorize|
|---|---|
|Número de Módulo|11|
|Nombre del Módulo|Session Hijacking|
|Enfoque|Conceptos de session hijacking, fases, ataques a nivel de aplicación/red, herramientas, contramedidas|

---

## OBJETIVOS DE APRENDIZAJE (NO SALTAR — LISTA DEL EXAMEN)

|Objetivo #|Descripción|
|---|---|
|01|Comprender los conceptos de session hijacking y por qué tiene éxito|
|02|Identificar las fases del session hijacking|
|03|Explicar hijacking pasivo vs activo y spoofing vs hijacking|
|04|Demostrar técnicas de session hijacking a nivel de aplicación|
|05|Explicar técnicas de session hijacking a nivel de red|
|06|Identificar herramientas y contramedidas de session hijacking|

---

# CONCEPTOS DE SESSION HIJACKING

|Item|Memorize|
|---|---|
|Definición|Tomar el control de una sesión de comunicación TCP válida y establecida|
|Mecanismo Central|Robar un session ID válido para autenticarse con el servidor después de la autenticación inicial|
|Cuándo Ocurre la Autenticación|Solo al inicio de la sesión TCP (en la mayoría de los casos)|

---

## POR QUÉ EL SESSION HIJACKING TIENE ÉXITO

|Motivo|Detalle|
|---|---|
|Sin bloqueo de cuenta|Los session IDs inválidos no son rechazados|
|Generación débil de session ID|Session IDs pequeños o algoritmos débiles|
|Manejo inseguro de session IDs|Session IDs transmitidos o almacenados de forma insegura|
|Tiempo de sesión indefinido|Las sesiones nunca expiran|
|Vulnerabilidad de TCP/IP|La mayoría de las computadoras que usan TCP/IP son vulnerables|
|Ausencia de cifrado|La mayoría de las contramedidas fallan sin cifrado|

MEMORY HOOK:
**Sin bloqueo + ID débil + sin tiempo de expiración + sin cifrado = hijacking exitoso**

---

# FASES DEL SESSION HIJACKING

|Fase|Acción|Herramientas / Detalle|
|---|---|---|
|1. Seguimiento de la conexión|Sniffear tráfico de la víctima, identificar objetivo|Sniffer, Nmap (números de secuencia TCP predecibles)|
|2. Desincronización de la conexión|Cambiar números SEQ/ACK del servidor|Enviar datos nulos o bandera RST para desincronizar|
|3. Inyección del paquete del atacante|Insertar datos en la red o actuar como MITM|Paquetes fabricados con número de secuencia predicho|

EXAM TRAP:
El análisis de paquetes de session hijacking local requiere conocer el **Next Sequence Number (NSN)**.

---

# HIJACKING PASIVO vs ACTIVO

|Característica|Hijacking Pasivo|Hijacking Activo|
|---|---|---|
|Actividad del atacante|Solo observar y registrar tráfico|Romper activamente la conexión o participar|
|Datos capturados|Session IDs y contraseñas|Control completo de la sesión|
|Ejemplo|Sniffear cookies del tráfico de red|MITM — adivinar número de secuencia antes de que responda el objetivo|
|Riesgo de detección|Bajo|Alto|
|Adivinanza de números de secuencia|No requerida|A menudo requerida (la generación aleatoria limita el éxito)|

MEMORY HOOK:
**Pasivo = observar, Activo = actuar**

---

# SPOOFING vs HIJACKING

|Característica|Spoofing|Hijacking|
|---|---|---|
|Definición|Fingir ser otro usuario o máquina|Tomar el control de una sesión activa existente|
|Estado de sesión|Inicia una nueva sesión usando credenciales robadas|Depende de que el usuario ya haya establecido la conexión|
|Diferencia clave|Robo de identidad|Robo de sesión|

MEMORY HOOK:
**Spoofing = nueva sesión, Hijacking = sesión existente**

---

# SESSION HIJACKING A NIVEL DE APLICACIÓN

---

## ROBO DE SESSION IDS

|Técnica|Descripción|
|---|---|
|Stealing|Usar diferentes técnicas (XSS, sniffing, malware) para robar session IDs|
|Guessing|Intentar adivinar el session ID observando variables de sesión|
|Brute forcing|Probar todas las permutaciones posibles del session ID|

---

## SESSION SNIFFING

|Item|Memorize|
|---|---|
|Objetivo|Cabecera de petición HTTP (cookie) o cuerpo de petición HTTP|
|Método|Sniffear tráfico de red para capturar tokens de sesión|

---

## PREDICCIÓN DE TOKENS DE SESIÓN

|Debilidad|Detalle|
|---|---|
|Sequential tokens|Los tokens siguen un orden predecible|
|Timestamp-based tokens|Tokens derivados de valores de tiempo|
|Small token space|Rango limitado (ej., 01–55)|
|Weak PRNG|Generadores de números pseudoaleatorios con baja entropía|
|No rate limiting|Sin limitación en los intentos de adivinanza de tokens|

---

# MAN-IN-THE-MIDDLE (MITM) — CONEXIONES TCP DIVIDIDAS

|Item|Memorize|
|---|---|
|Concepto|Dividir la conexión TCP en dos conexiones separadas|
|Conexión 1|Cliente → Atacante|
|Conexión 2|Atacante → Servidor|
|Capacidad|El atacante puede modificar e insertar en la comunicación interceptada|
|Objetivo HTTP|La conexión TCP se convierte en el objetivo de la transacción HTTP|

MEMORY HOOK:
**MITM divide la tubería: Cliente ↔ Atacante ↔ Servidor**

---

# MAN IN THE BROWSER (MITB)

|Paso|Descripción|
|---|---|
|1|El troyano infecta el software de la computadora|
|2|El troyano instala código malicioso|
|3|Después del reinicio del navegador, el código se carga|
|4|Se registra un manejador para cada visita a una página web|
|5|La extensión coincide la URL con sitios objetivo conocidos|
|6|El usuario inicia sesión en el sitio|
|7|La extensión registra el manejador de eventos|
|8|La extensión extrae valores del DOM y los modifica|
|9|El navegador envía valores modificados al servidor|
|10|El servidor recibe valores modificados|
|11|Se otorga el recibo|
|12|El navegador recibe el recibo de la transacción modificada|
|13|El navegador muestra el recibo con los detalles originales|
|14|El usuario no sabe que algo ha ocurrido|

MEMORY HOOK:
**MITB = Troyano → modificar DOM → usuario ve original, servidor ve modificado**

---

# ATAQUES DE SESIÓN DEL LADO DEL CLIENTE

|Ataque|Idea Central|Cómo Funciona|Requisito Clave|Palabra Clave CEH|Prevención|
|---|---|---|---|---|---|
|**Cross-Site Scripting (XSS)**|Inyectar JS para robar session cookies|`<SCRIPT>alert(document.cookie);</SCRIPT>` se ejecuta en el navegador de la víctima; la aplicación web no depura la entrada|Depuración de entrada deficiente|Ejecución de código del lado del cliente|Validación de entrada, codificación de salida, cookies HttpOnly|
|**JavaScript Malicioso|Payload JS roba o reenvía tokens|JS captura session ID y lo envía al atacante|Vector de inyección de scripts|Exfiltración de session tokens|CSP, depuración, HttpOnly|
|**Troyano|Malware roba datos de sesión|El troyano lee la memoria del navegador o las cookies|Sistema de la víctima infectado|Compromiso del cliente|AV, seguridad de endpoint|
|**Cross-Site Request Forgery (CSRF)**|Abusar de sesión autenticada|Session riding de un clic; la víctima hace clic en un enlace → el navegador envía cookies válidas automáticamente; la aplicación no verifica el origen de la petición|El usuario ya ha iniciado sesión|Ataque de un clic / Session riding|Tokens anti-CSRF, cookies SameSite|
|**Session Replay Attack|Capturar y reutilizar token de autenticación|Sniffear tráfico, capturar token de autenticación, repetir petición al servidor|Reutilización de tokens permitida|Autenticación por repetición|TLS, nonce, expiración de tokens|
|**Session Fixation|El atacante establece el session ID de antemano|El atacante obtiene session ID, la víctima abre enlace e ingresa credenciales, validando la sesión del atacante|Session ID no regenerado|Session ID pre-autenticación|Regenerar session ID después del login|
|**Proxy-based Session Hijacking|Robar sesión mediante proxy falso|Usar servidor proxy como sitio, luego repetir token|El usuario confía en el proxy|Man-in-the-Browser|HTTPS, validación de certificados|
|**CRIME Attack|Filtrar secretos mediante compresión|Compression Ratio Information Leak Made Easy; explota vulnerabilidades de compresión TLS/SPDY/HTTPS|Compresión TLS habilitada|Canal lateral de compresión|Deshabilitar compresión TLS|
|**Forbidden Attack|Romper criptografía TLS mediante reutilización de nonce|MITM explota la reutilización de nonce criptográfico durante el handshake TLS; inyecta código malicioso y contenido falsificado; afecta a AES-GCM|Configuración TLS débil|Reutilización de nonce TLS|Cifrados fuertes, hardening TLS|
|**Session Donation Attack|La víctima se autentica en la sesión del atacante|El atacante inicia sesión → la víctima hace clic en un enlace → el atacante obtiene acceso a la información de la víctima|Sesión compartida o reutilizada|Sesión mal vinculada|Vincular sesión a usuario/IP/dispositivo|

MEMORY HOOK (ATAQUES DEL CLIENTE):
**CÓDIGO → XSS, JS Malicioso | CONFIANZA → CSRF, Session Donation | REUTILIZACIÓN → Replay, Fixation | RED → Proxy, CRIME | CRIPTOGRAFÍA → Forbidden**

---

# TABLA DE COMPARACIÓN DE ATAQUES (TODOS LOS ATAQUES)

|Ataque|Idea Central (1 línea)|Cómo Funciona (Flujo Resumido)|Requisito Clave|Palabra Clave CEH|Prevención|
|---|---|---|---|---|---|
|**XSS**|Inyectar JS para robar session cookies|Script malicioso se ejecuta en navegador de víctima → lee `document.cookie`|Depuración de entrada deficiente|Ejecución de código del lado del cliente|Validación de entrada, codificación de salida, cookies HttpOnly|
|**JavaScript Malicioso|Payload JS roba o reenvía tokens|JS captura session ID → envía al atacante|Vector de inyección de scripts|Exfiltración de session tokens|CSP, depuración, HttpOnly|
|**Troyano|Malware roba datos de sesión|El troyano lee la memoria del navegador o cookies|Sistema de víctima infectado|Compromiso del cliente|AV, seguridad de endpoint|
|**CSRF**|Abusar de sesión autenticada|Víctima hace clic en enlace → navegador envía cookies válidas automáticamente|Usuario ya ha iniciado sesión|Ataque de un clic / Session riding|Tokens anti-CSRF, cookies SameSite|
|**Session Replay|Capturar y reutilizar token de autenticación|Sniffear tráfico → capturar token de auth → repetir petición|Reutilización de tokens permitida|Autenticación por repetición|TLS, nonce, expiración de tokens|
|**Session Fixation|El atacante establece session ID de antemano|Víctima inicia sesión usando session ID conocido por el atacante|Session ID no regenerado|Session ID pre-autenticación|Regenerar session ID después del login|
|**Proxy-based|Robar sesión mediante proxy falso|Víctima se conecta a través de proxy controlado por atacante|Usuario confía en proxy|Man-in-the-Browser|HTTPS, validación de certificados|
|**CRIME|Filtrar secretos mediante compresión|Explota ratio de compresión TLS/HTTP para inferir cookies|Compresión TLS habilitada|Canal lateral de compresión|Deshabilitar compresión TLS|
|**Forbidden|Romper criptografía TLS|MITM fuerza reutilización de nonce (AES-GCM)|Configuración TLS débil|Reutilización de nonce TLS|Cifrados fuertes, hardening TLS|
|**Session Donation|Víctima se autentica en sesión del atacante|Atacante inicia sesión → víctima hace clic en enlace → atacante obtiene acceso|Sesión compartida o reutilizada|Sesión mal vinculada|Vincular sesión a usuario/IP/dispositivo|

---

# SESSION HIJACKING A NIVEL DE RED

**Explota vulnerabilidades en el handshake de tres vías de TCP.**

---

## TCP/IP HIJACKING

|Paso|Descripción|
|---|---|
|1|Sniffear conexión de la víctima|
|2|Enviar paquete falsificado con número de secuencia predicho|
|3|El receptor procesa el paquete e incrementa el número de secuencia|
|4|La máquina de la víctima ignora el paquete ACK con número de secuencia fuera de secuencia|
|5|El receptor recibe paquetes con número de secuencia incorrecto|
|6|El atacante fuerza la conexión de la víctima a un estado desincronizado|
|7|Rastrea números de secuencia y continua falsificando paquetes desde la IP de la víctima|
|8|El atacante se comunica mientras la conexión de la víctima queda colgada|

---

## IP SPOOFING — PAQUETES SOURCE ROUTED

|Paso|Descripción|
|---|---|
|1|Obtener acceso usando la IP del host de confianza|
|2|El atacante falsifica la IP para que el servidor acepte paquetes del atacante|
|3|Inyectar paquetes falsificados antes de que el host responda al servidor|
|4|El paquete original se pierde; el servidor recibe paquete con número de secuencia ya usado por el atacante|
|5|Los paquetes están source-routed con IP de destino especificada por el atacante|

---

## RST HIJACKING

|Item|Memorize|
|---|---|
|Método|Inyectar paquete TCP falsificado con bandera RST y número ACK preciso|
|Efecto|La víctima cree que el par reinició la conexión → la sesión cae|
|Herramientas|Colasoft Packet Builder, tcpdump|

---

## BLIND HIJACKING

|Item|Memorize|
|---|---|
|Método|Inyectar datos maliciosos o comandos en una sesión TCP sin ver las respuestas|
|Limitación|El atacante no puede sniffear tráfico; debe predecir números de secuencia|
|Aplicabilidad|Funciona incluso cuando el source routing está deshabilitado|

---

## UDP HIJACKING

|Paso|Descripción|
|---|---|
|1|El atacante envía respuesta falsificada del servidor a la petición UDP de la víctima|
|2|Usa MITM para interceptar la respuesta real del servidor|
|3|La víctima acepta los datos falsos|

---

## MITM USANDO ICMP FALSIFICADO

|Item|Memorize|
|---|---|
|Método|Falsificar paquetes de error ICMP para redirigir tráfico entre cliente y host a través del atacante|
|Mecanismo|Los mensajes de error engañan al servidor para que enrute a través del atacante|

---

## ARP SPOOFING

|Item|Memorize|
|---|---|
|Método|Difundir petición ARP y cambiar tablas ARP de la víctima enviando respuestas falsificadas|
|Efecto|El tráfico se redirige al atacante|

---

## PETITPOTAM HIJACKING

|Paso|Descripción|
|---|---|
|1|Forzar al controlador de dominio a iniciar autenticación hacia el servidor del atacante|
|2|Usar la API MS-EFSRPC para session hijacking de autenticación|
|3|Relevar autenticación NTLM compartida por el controlador de dominio a AD Certificate Services|
|4|Obtener privilegios de administrador|

MEMORY HOOK:
**PetitPotam = Forzar auth del DC → relevar NTLM → admin**

---

# CLASIFICACIÓN DE ATAQUES DE RED

|Categoría|Ataques|
|---|---|
|Abuso de Secuencia TCP|TCP/IP Hijacking, Blind Hijacking, RST Hijacking|
|Abuso de Confianza|IP Spoofing, PetitPotam|
|Abuso sin Estado|UDP Hijacking|
|Abuso de Enrutamiento|ICMP Forgery|
|Envenenamiento LAN|ARP Spoofing|

---

# TABLA DE COMPARACIÓN DE ATAQUES DE RED

|Ataque|Idea Central (1 línea)|Cómo Funciona el Ataque (Flujo Resumido)|Requisito Clave|Palabras Clave CEH|
|---|---|---|---|---|
|**TCP/IP Hijacking**|Tomar control de sesión TCP activa desincronizando números de secuencia|Sniffear conexión → enviar paquete falsificado con seq predicho → receptor incrementa seq → víctima ignora ACK → conexión desincronizada → atacante sigue falsificando paquetes como víctima|Capacidad de sniffear o predecir números de secuencia TCP|Predicción de números de secuencia, desincronización|
|**IP Spoofing (Source Routing)**|Impersonar host de confianza usando IP falsificada|Atacante falsifica IP de confianza → inyecta paquetes falsificados antes de que el host real responda → servidor acepta paquetes del atacante → paquetes source-routed controlan la ruta|Source routing habilitado + IP de confianza|Abuso de host de confianza, source routing|
|**RST Hijacking**|Terminar forzosamente una sesión TCP|Atacante inyecta paquete TCP falsificado con bandera RST + ACK válido → víctima cree que el par reinició conexión → sesión cae|Número de secuencia/ACK preciso|Bandera TCP RST, reset forzado|
|**Blind Hijacking**|Inyectar datos sin ver respuestas|Atacante no puede sniffear tráfico → predice números de secuencia → inyecta datos → no puede ver respuestas|Números de secuencia predecibles|Inyección a ciegas, sin sniffing|
|**UDP Hijacking**|Inyectar o reemplazar comunicación UDP|Atacante envía respuesta UDP falsificada → compite o MITM con respuesta real del servidor → víctima acepta datos falsos|Comunicación UDP sin estado|Falsificación de paquetes, sin conexión|
|**MITM usando ICMP Falsificado**|Redirigir tráfico usando errores ICMP falsos|Atacante falsifica mensajes de error ICMP → cliente/servidor redirigen tráfico a través del atacante → MITM logrado|Confianza en mensajes de enrutamiento ICMP|Redirect ICMP, redirección de tráfico|
|**ARP Spoofing**|Envenenar caché ARP para interceptar tráfico|Atacante envía respuestas ARP falsificadas → víctimas actualizan tablas ARP → tráfico enruta al atacante|Acceso a red local|Envenenamiento ARP, falsificación MAC|
|**PetitPotam Hijacking**|Forzar autenticación del DC y relevarla|Atacante abusa de MS-EFSRPC → fuerza al DC a autenticar → releva NTLM a AD CS → obtiene privilegios de admin|NTLM habilitado + AD CS|Coacción de autenticación, relevo NTLM|

---

# HERRAMIENTAS DE SESSION HIJACKING

|Herramienta|Descripción|
|---|---|
|Hetty|Proxy MITM; cliente HTTP para crear peticiones manualmente y repetir peticiones proxy|
|Caido|Kit de auditoría de seguridad|
|bettercap|Escrito en Go; framework de ataques y monitoreo de red|

---

# DETECCIÓN DE SESSION HIJACKING

|Herramienta|Uso|
|---|---|
|USM Anywhere|Monitoreo de seguridad unificado y detección de anomalías de sesión|
|Wireshark|Análisis de paquetes para detectar anomalías de sesión e intentos de hijacking|

---

# PREVENCIÓN DEL SESSION HIJACKING

|Contramedida|Descripción|
|---|---|
|HTTP Strict Transport Security (HSTS)|Fuerza conexiones HTTPS, previene ataques de downgrade|
|Token Binding|Vincula tokens de sesión a la conexión TLS, previene robo de tokens|
|Herramientas: Checkmarx One (SAST)|Pruebas estáticas de seguridad de aplicaciones para encontrar vulnerabilidades de sesión|
|Herramientas: Fiddler|Inspección de tráfico y proxy de depuración|

MEMORY HOOK:
**HSTS + Token Binding = columna vertebral de protección de sesión**

---

# PREVENCIÓN DE MAN-IN-THE-MIDDLE

|Contramedida|Descripción|
|---|---|
|DNS over HTTPS (DoH)|Cifra consultas DNS para prevenir DNS spoofing|
|WPA3|Cifrado inalámbrico más fuerte que WPA2|
|VPN|Cifra todo el tráfico entre endpoints|
|Two-Factor Authentication (2FA)|Agrega una segunda capa de autenticación|
|Password Manager|Previene reutilización de credenciales y phishing|
|Zero-Trust Architecture|Nunca confiar, siempre verificar — todo acceso autenticado y cifrado|
|PKI|Public Key Infrastructure para confianza basada en certificados|
|Network Segmentation|Limita movimiento lateral si un segmento es comprometido|

---

# IPsec

|Modo|Qué Cifra|
|---|---|
|Transport Mode|Cifra solo el payload del paquete IP|
|Tunnel Mode|IPsec encapsula y cifra el paquete IP completo|

MEMORY HOOK:
**Transport = solo payload, Tunnel = paquete completo**

---

## EXTRAS DE EXAMEN (Examen de Práctica Boson)

### DEFINICIONES DE XSS, CSRF, SSRF

|Término|Definición|
|---|---|
|Cross-Site Scripting (XSS)|Mitigado estableciendo la bandera HttpOnly en cookies; ocurre cuando el atacante inyecta código en una página web para recolectar session cookies|
|Cross-Site Request Forgery (CSRF)|Envía peticiones autenticadas no intencionadas|
|Server-Side Request Forgery (SSRF)|Hace que la aplicación envíe peticiones a otros dominios|

---

# FLASHCARDS DE EXAMEN

|Término|Definición|
|---|---|
|Session Hijacking|Tomar el control de una sesión de comunicación TCP válida y establecida|
|Session ID|Identificador único asignado a una sesión de usuario; robado para autenticar|
|Hijacking Pasivo|Observar y registrar tráfico para capturar session IDs sin alterar datos|
|Hijacking Activo|Romper o participar activamente en una conexión para tomar control de la sesión|
|Spoofing|Fingir ser otro usuario o máquina; inicia nueva sesión con credenciales robadas|
|MITM (Split TCP)|Dividir una conexión TCP en dos: cliente↔atacante y atacante↔servidor|
|MITB|El troyano modifica el DOM en el navegador; el usuario ve lo original, el servidor recibe datos modificados|
|XSS|Inyectar scripts maliciosos en aplicaciones web para robar session cookies|
|CSRF|Ataque de un clic que explota la confianza en la sesión autenticada del usuario|
|Session Fixation|El atacante preestablece el session ID antes de que la víctima se autentique|
|TCP/IP Hijacking|Desincronizar números de secuencia para tomar control de sesión TCP activa|
|RST Hijacking|Inyectar paquetes RST falsificados para terminar forzosamente la conexión de la víctima|
|Blind Hijacking|Inyectar datos en sesión TCP sin ver respuestas del servidor|
|ARP Spoofing|Envenenar caché ARP para redirigir tráfico de red local a través del atacante|
|PetitPotam|Forzar autenticación del controlador de dominio y relevar NTLM para obtener admin|
|HSTS|HTTP Strict Transport Security; fuerza HTTPS para prevenir ataques de downgrade|
|IPsec Transport|Cifra solo el payload del paquete IP|
|IPsec Tunnel|Cifra el paquete IP completo|

---

# PREGUNTAS DE PRÁCTICA

**Q1.** Un probador de penetración sniffear tráfico de red y captura una session cookie válida de una petición HTTP sin modificar ningún paquete. ¿Qué tipo de session hijacking es este?
- A) Hijacking Activo
- B) Hijacking Pasivo
- C) TCP/IP Hijacking
- D) RST Hijacking

**Respuesta:** B — El Hijacking Pasivo implica observar y registrar tráfico sin alterar la conexión.

---

**Q2.** Un atacante preestablece un session ID en una aplicación web, luego envía a la víctima un enlace que contiene ese session ID. Cuando la víctima inicia sesión, la sesión del atacante se autentica. ¿Qué ataque es este?
- A) Session Replay
- B) Session Fixation
- C) CSRF
- D) CRIME Attack

**Respuesta:** B — Session Fixation ocurre cuando el atacante establece el session ID de antemano y la víctima se autentica usando él.

---

**Q3.** ¿Cuál de las siguientes opciones describe MEJOR la diferencia entre spoofing e hijacking?
- A) Spoofing toma control de una sesión existente; hijacking crea una nueva
- B) Spoofing inicia una nueva sesión con credenciales robadas; hijacking toma control de una sesión existente
- C) Ambos requieren que el usuario esté conectado actualmente
- D) Hijacking siempre usa técnicas pasivas

**Respuesta:** B — Spoofing crea una nueva sesión usando credenciales robadas; hijacking toma el control de una sesión ya activa.

---

**Q4.** Un atacante usa MS-EFSRPC para forzar a un controlador de dominio a autenticar hacia su servidor, luego releva NTLM a AD Certificate Services para obtener admin. ¿Qué ataque es este?
- A) ARP Spoofing
- B) TCP/IP Hijacking
- C) PetitPotam
- D) RST Hijacking

**Respuesta:** C — PetitPotam fuerza la autenticación del DC vía MS-EFSRPC y releva NTLM a AD CS.

---

**Q5.** ¿Qué contramedida vincula los tokens de sesión a la conexión TLS para prevenir el robo de tokens?
- A) VPN
- B) Token Binding
- C) WPA3
- D) DoH

**Respuesta:** B — Token Binding vincula criptográficamente los tokens de sesión a la conexión TLS, previniendo su interceptación y reutilización.
