# MODULE 17 — OVERVIEW (EXAM)

## MODULE NAME

Hacking Mobile Platforms

## WHY THIS MODULE MATTERS

Los dispositivos móviles almacenan datos personales y corporativos sensibles y están siempre conectados a redes, lo que los convierte en objetivos de alto valor para los atacantes.

---

## LEARNING OBJECTIVES (EXAM LIST)

|Objective No.|Objective|
|---|---|
|01|Explicar los Vectores de Ataque en Plataformas Móviles|
|02|Explicar Diversas Amenazas y Ataques en Android OS|
|03|Explicar Diversas Amenazas y Ataques en iOS|
|04|Resumir los Conceptos de Gestión de Dispositivos Móviles (MDM)|
|05|Presentar Herramientas y Directrices de Seguridad Móvil|

MEMORY HOOK:
**Vectors → Android → iOS → MDM → Defense**

---

# OBJECTIVE 01 — MOBILE PLATFORM ATTACK VECTORS

---

## CORE DEFINITION (EXAM)

|Term|Definition|
|---|---|
|Mobile Platform Attack Vector|Una ruta o método utilizado por los atacantes para comprometer dispositivos móviles, redes o sistemas backend|

---

## WHY MOBILE PLATFORMS ARE TARGETED

|Reason|
|---|
|Siempre conectados (Internet, Wi-Fi, Bluetooth, Cellular)|
|Almacenan datos sensibles|
|Se usan para autenticación (OTP, aplicaciones bancarias)|
|Confianza del usuario en las aplicaciones|
|Bring Your Own Device (BYOD)|

MEMORY HOOK:
**Always on + personal data = prime target**

---

## VULNERABLE AREAS IN A MOBILE BUSINESS ENVIRONMENT

### ENTRY POINTS (EXAM FAVORITE)

|Area|
|---|
|Dispositivo móvil|
|Dispositivo Wi-Fi|
|Proveedor de servicios de telecomunicaciones|
|Internet|
|App store|
|Sitio web|
|Intranet corporativa|
|Gateway VPN corporativo|

MEMORY HOOK:
**Device → Network → Cloud**

---

## MOBILE ATTACK SURFACE (HIGH-YIELD)

|Layer|Description|
|---|---|
|Device|Sistema operativo, aplicaciones, hardware|
|Network|Wi-Fi, red celular, Bluetooth|
|Data center / Cloud|Servidores web, bases de datos|

---

# OWASP TOP 10 MOBILE RISKS — 2024 (MUST MEMORIZE)

|ID|Risk|
|---|---|
|M1|Uso Improperio de Credenciales|
|M2|Seguridad Inadecuada de la Cadena de Suministro|
|M3|Autenticación/Autorización Insegura|
|M4|Validación Insuficiente de Entrada/Salida|
|M5|Comunicación Insegura|
|M6|Controles de Privacidad Inadecuados|
|M7|Protecciones Insuficientes de Binarios|
|M8|Configuración de Seguridad Incorrecta|
|M9|Almacenamiento de Datos Inseguro|
|M10|Criptografía Insuficiente|

MEMORY HOOK:
**Credentials → Supply → Auth → Input → Comm → Privacy → Binary → Config → Storage → Crypto**

---

## OWASP MOBILE RISKS — EXPLANATIONS (NOT SKIPPED)

### M1 — Improper Credential Usage

|Details|
|---|
|Manejo débil de credenciales|
|Contraseñas hardcodeadas|
|Almacenamiento inseguro|
|Transmisión sin cifrado|

---

### M2 — Inadequate Supply Chain Security

|Details|
|---|
|Librerías de terceros vulnerables|
|Firma de aplicaciones deficiente|
|Mecanismos de actualización débiles|

---

### M3 — Insecure Authentication/Authorization

|Details|
|---|
|Políticas de contraseña débiles|
|Gestión de sesiones comprometida|
|Bypass de autorización|

---

### M4 — Insufficient Input/Output Validation

|Details|
|---|
|SQL injection|
|Command injection|
|XSS|

---

### M5 — Insecure Communication

|Details|
|---|
|SSL/TLS débil|
|Certificados inválidos|
|Transmisión de datos sin cifrar|

---

### M6 — Inadequate Privacy Controls

|Details|
|---|
|Protección deficiente de PII|
|No cumplimiento de leyes de privacidad|

---

### M7 — Insufficient Binary Protections

|Details|
|---|
|Ingeniería inversa|
|Manipulación de código|
|Sin ofuscación|

---

### M8 — Security Misconfiguration

|Details|
|---|
|Cifrado débil|
|Permisos incorrectos|
|Depuración habilitada|

---

### M9 — Insecure Data Storage

|Details|
|---|
|Almacenamiento en texto plano|
|Bases de datos sin seguridad|
|Almacenamiento inseguro de credenciales|

---

### M10 — Insufficient Cryptography

|Details|
|---|
|Algoritmos débiles|
|Gestión deficiente de claves|
|Aleatoriedad inadecuada|

---

# ANATOMY OF A MOBILE ATTACK (EXAM CRITICAL)

## THREE PRIMARY ATTACK POINTS

|Point|Target|
|---|---|
|Point 01|Dispositivo|
|Point 02|Red|
|Point 03|Data Center / Cloud|

MEMORY HOOK:
**Device → Network → Cloud**

---

# ATTACK VECTORS — DEVICE LEVEL

## BROWSER-BASED ATTACKS

|Attack|Description|
|---|---|
|Phishing|Sitios web falsos|
|Framing|Iframes maliciosos ocultos|
|Clickjacking|Engaño de interfaz de usuario|
|Man-in-the-Mobile|Malware que intercepta datos|

---

## PHONE/SMS-BASED ATTACKS

|Attack|Description|
|---|---|
|Baseband attacks|Explotación de GSM/3GPP|
|Smishing|Phishing mediante SMS|
|Call-based attacks|Números premium|

---

## APPLICATION-BASED ATTACKS

|Attack|Description|
|---|---|
|Insecure data storage|Datos sensibles expuestos|
|Weak encryption|Robo de datos|
|Improper validation|Abuso de entrada|
|Configuration manipulation|Abuso de lógica de aplicación|
|Escalated privileges|Acceso a nivel root|

---

## OS-BASED ATTACKS

|Attack|Description|
|---|---|
|No passcode|Exposición de datos|
|Jailbreaking (iOS)|Bypass de seguridad|
|Rooting (Android)|Escalada de privilegios|
|OS data caching|Fugas de datos sensibles|
|Password cracking|Criptografía débil|
|User-initiated code|Instalaciones maliciosas|

---

# ATTACK VECTORS — NETWORK LEVEL

|Attack|
|---|
|Wi-Fi sniffing|
|Rogue access points|
|Packet sniffing|
|MITM|
|Session hijacking|
|DNS poisoning|
|SSL stripping|
|Fake certificates|

MEMORY HOOK:
**Sniff → Intercept → Redirect**

---

# ATTACK VECTORS — DATA CENTER / CLOUD

## WEB SERVER-BASED

|Attack|
|---|
|Vulnerabilidades de plataforma|
|Mala configuración del servidor|
|XSS|
|CSRF|
|Fallos de validación de entrada web|
|Brute-force|
|SQL injection|

---

# WHAT HAPPENS AFTER DEVICE COMPROMISE (TABLE 17.1)

|Category|Examples|
|---|---|
|Surveillance|Cámara, micrófono, registros de llamadas|
|Data theft|Contactos, SMS, archivos|
|Botnet activity|DDoS, fraude de clics|
|Impersonation|Correos falsos, publicaciones en redes sociales|

MEMORY HOOK:
**Spy → Steal → Spread → Impersonate**

---

# OBJECTIVE 01 — EXAM MEMORY BLOCK

**Los ataques móviles objetivan dispositivos, redes y cloud.
OWASP Mobile Top 10 define el modelo de riesgo.
Las aplicaciones, OS, SMS, navegador y Wi-Fi son puntos de entrada.
La compromisión conduce a vigilancia, robo, suplantación y botnets.**

---

## STATUS CHECK

|Item|Status|
|---|---|
|Objective 01|COMPLETE|
|OWASP Top 10|COMPLETE|
|Attack vectors|COMPLETE|
|Exam alignment|EXACT|

---

## EXAM EXTRAS (Boson Practice Test)

### INTENTFUZZER

|Item|Memorize|
|---|---|
|IntentFuzzer|Objetiva la comunicación inter-procesos (IPC) de Android|

---

### SEMI-TETHERED JAILBREAK

|Item|Memorize|
|---|---|
|Semi-tethered jailbreak|Una aplicación sideloaded puede hacer jailbreak al dispositivo incluso después del reinicio|

---

### TRIDENT

|Item|Memorize|
|---|---|
|Trident|Monitorea llamadas de iPhone; requiere jailbreak remoto|

---

### TRUSTJACKING

|Item|Memorize|
|---|---|
|Trustjacking|Un host comprometido con iTunes puede controlar iPhone a través de red inalámbrica|

---

### SPEARPHONE

|Item|Memorize|
|---|---|
|Spearphone|Explota el altavoz y acelerómetro del teléfono|

---

### ALTER

|Item|Memorize|
|---|---|
|aLTEr|Utiliza meta-información de capa 2 para determinar qué sitios visita el usuario|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Mobile Platform Attack Vector | Una ruta o método utilizado para comprometer dispositivos móviles, redes o sistemas backend |
| OWASP Mobile Top 10 | Lista estándar de la industria de los riesgos de seguridad móvil más críticos |
| Smishing | Ataque de phishing entregado mediante mensajes SMS |
| Man-in-the-Mobile (MITMO) | Malware que intercepta tráfico móvil, objetivando aplicaciones bancarias |
| Clickjacking | Engaño de interfaz de usuario que engaña a los usuarios para realizar acciones no deseadas |
| Baseband Attack | Explotación de la pila de protocolos celulares GSM/3GPP |
| Phishing | Sitios web falsos diseñados para robar credenciales |
| Framing | Iframes maliciosos ocultos inyectados en páginas web legítimas |
| Jailbreaking | Eliminación de restricciones de iOS para obtener acceso root |
| Rooting | Obtención de acceso superusuario en dispositivos Android |
| Botnet Activity | Dispositivos móviles comprometidos utilizados para DDoS o fraude de clics |
| SSL Stripping | Degradación de conexiones HTTPS a HTTP para su interceptación |
| DNS Poisoning | Redireccionamiento de consultas DNS a servidores maliciosos |
| BYOD | Bring Your Own Device; dispositivos personales utilizados para acceso corporativo |

---

# PRACTICE QUESTIONS

**1.** Según OWASP Mobile Top 10, ¿qué riesgo implica un manejo débil de credenciales y contraseñas hardcodeadas?
- a) M3 — Insecure Authentication
- b) M1 — Improper Credential Usage
- c) M9 — Insecure Data Storage
- d) M5 — Insecure Communication
**Answer:** B — M1 aborda específicamente el manejo débil de credenciales, contraseñas hardcodeadas y almacenamiento inseguro.

**2.** ¿Cuáles son los tres puntos principales de ataque en un ataque móvil?
- a) App, Browser, SMS
- b) Dispositivo, Red, Data Center/Cloud
- c) Wi-Fi, Bluetooth, Cellular
- d) OS, Applications, Hardware
**Answer:** B — Los ataques móviles objetivan el dispositivo en sí, la capa de red y el cloud/backend.

**3.** ¿Qué ataque utiliza mensajes SMS para entregar enlaces de phishing?
- a) Clickjacking
- b) Framing
- c) Smishing
- d) Baseband attack
**Answer:** C — Smishing (phishing mediante SMS) entrega enlaces maliciosos a través de mensajes de texto.

**4.** ¿Qué ocurre después de que un dispositivo móvil es comprometido por spyware?
- a) Solo disminuye la velocidad de la red
- b) La cámara, micrófono, registros de llamadas y contactos pueden ser vigilados y robados
- c) El dispositivo se actualiza automáticamente
- d) El cifrado se habilita automáticamente
**Answer:** B — Los dispositivos comprometidos permiten vigilancia (cámara/micrófono), robo de datos y suplantación.

**5.** ¿Cuál es el vector de ataque de Trustjacking?
- a) Explotando conexiones Bluetooth
- b) Un host comprometido con iTunes puede controlar iPhone a través de red inalámbrica
- c) Interceptando mensajes SMS
- d) Haciendo root al dispositivo Android
**Answer:** B — Trustjacking explota la sincronización de iTunes para obtener control de un iPhone a través de la red.
