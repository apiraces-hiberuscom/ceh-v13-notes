# Módulo 17 · Parte 1 — Mobile Attack Vectors

> **Módulo 17 — Hacking Mobile Platforms** · Parte 1 de 5 · Por qué los móviles (siempre conectados y con datos sensibles) son objetivo de alto valor: superficie de ataque, OWASP Mobile Top 10 2024 y vectores de ataque en dispositivo, red y data center/cloud.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
- [OBJECTIVE 01 — MOBILE PLATFORM ATTACK VECTORS](#objective-01--mobile-platform-attack-vectors)
- [OWASP TOP 10 MOBILE RISKS — 2024 🔥](#owasp-top-10-mobile-risks--2024-high-yield)
- [ANATOMY OF A MOBILE ATTACK 🔥](#anatomy-of-a-mobile-attack-high-yield)
- [ATTACK VECTORS — DEVICE LEVEL](#attack-vectors--device-level)
- [ATTACK VECTORS — NETWORK LEVEL](#attack-vectors--network-level)
- [ATTACK VECTORS — DATA CENTER / CLOUD](#attack-vectors--data-center--cloud)
- [WHAT HAPPENS AFTER DEVICE COMPROMISE](#what-happens-after-device-compromise)
- [Extras de examen (Boson Practice Test)](#extras-de-examen-boson-practice-test)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

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

---

## Objetivos de aprendizaje

|Objective No.|Objective|
|---|---|
|01|Explain Mobile Platform Attack Vectors — explicar los vectores de ataque en plataformas móviles|
|02|Explain Various Android OS Threats and Attacks — explicar las amenazas y ataques en Android OS|
|03|Explain Various iOS Threats and Attacks — explicar las amenazas y ataques en iOS|
|04|Summarize Mobile Device Management (MDM) Concepts — resumir los conceptos de MDM|
|05|Present Mobile Security Guidelines and Tools — presentar directrices y herramientas de seguridad móvil|

> 🧠 *Para recordar:* **Vectors → Android → iOS → MDM → Defense**

---

## OBJECTIVE 01 — MOBILE PLATFORM ATTACK VECTORS

### CORE DEFINITION

|Term|Definition|
|---|---|
|Mobile Platform Attack Vector|Una ruta o método utilizado por los atacantes para comprometer dispositivos móviles, redes o sistemas backend|

---

### WHY MOBILE PLATFORMS ARE TARGETED

|Reason|
|---|
|Siempre conectados (Internet, Wi-Fi, Bluetooth, Cellular)|
|Almacenan datos sensibles|
|Se usan para autenticación (OTP, aplicaciones bancarias)|
|Confianza del usuario en las aplicaciones|
|Bring Your Own Device (BYOD)|

> 🧠 *Para recordar:* **Always on + personal data = prime target**

---

### VULNERABLE AREAS IN A MOBILE BUSINESS ENVIRONMENT

#### ENTRY POINTS (HIGH YIELD)

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

> 🧠 *Para recordar:* **Device → Network → Cloud**

---

### MOBILE ATTACK SURFACE (HIGH YIELD)

|Layer|Description|
|---|---|
|Device|Sistema operativo, aplicaciones, hardware|
|Network|Wi-Fi, red celular, Bluetooth|
|Data center / Cloud|Servidores web, bases de datos|

---

## OWASP TOP 10 MOBILE RISKS — 2024 (HIGH YIELD)

|ID|Risk|
|---|---|
|M1|Improper Credential Usage — uso inadecuado de credenciales|
|M2|Inadequate Supply Chain Security — seguridad insuficiente de la cadena de suministro|
|M3|Insecure Authentication/Authorization — autenticación/autorización insegura|
|M4|Insufficient Input/Output Validation — validación insuficiente de entrada/salida|
|M5|Insecure Communication — comunicación insegura|
|M6|Inadequate Privacy Controls — controles de privacidad inadecuados|
|M7|Insufficient Binary Protections — protecciones insuficientes del binario|
|M8|Security Misconfiguration — configuración de seguridad incorrecta|
|M9|Insecure Data Storage — almacenamiento de datos inseguro|
|M10|Insufficient Cryptography — criptografía insuficiente|

> 🧠 *Para recordar:* **Credentials → Supply → Auth → Input → Comm → Privacy → Binary → Config → Storage → Crypto**

> 🧠 *Para recordar:* **Carlos Se Auto Invita a Comer Para Beber Cerveza Sin Cebada** (C·S·A·I·C·P·B·C·S·C → M1…M10)

---

### OWASP MOBILE RISKS — EXPLANATIONS

#### M1 — Improper Credential Usage

|Details|
|---|
|Manejo débil de credenciales|
|Contraseñas hardcodeadas|
|Almacenamiento inseguro|
|Transmisión sin cifrado|

---

#### M2 — Inadequate Supply Chain Security

|Details|
|---|
|Librerías de terceros vulnerables|
|Firma de aplicaciones deficiente|
|Mecanismos de actualización débiles|

---

#### M3 — Insecure Authentication/Authorization

|Details|
|---|
|Políticas de contraseña débiles|
|Gestión de sesiones defectuosa (broken session handling)|
|Bypass de autorización|

---

#### M4 — Insufficient Input/Output Validation

|Details|
|---|
|SQL injection|
|Command injection|
|XSS|

---

#### M5 — Insecure Communication

|Details|
|---|
|SSL/TLS débil|
|Certificados inválidos|
|Transmisión de datos sin cifrar|

---

#### M6 — Inadequate Privacy Controls

|Details|
|---|
|Protección deficiente de PII|
|No cumplimiento de leyes de privacidad|

---

#### M7 — Insufficient Binary Protections

|Details|
|---|
|Reverse engineering (ingeniería inversa)|
|Code tampering (manipulación de código)|
|Sin ofuscación (no obfuscation)|

---

#### M8 — Security Misconfiguration

|Details|
|---|
|Cifrado débil|
|Permisos incorrectos|
|Depuración habilitada|

---

#### M9 — Insecure Data Storage

|Details|
|---|
|Almacenamiento en texto plano|
|Bases de datos sin seguridad|
|Almacenamiento inseguro de credenciales|

---

#### M10 — Insufficient Cryptography

|Details|
|---|
|Algoritmos débiles|
|Gestión deficiente de claves|
|Aleatoriedad inadecuada|

---

## ANATOMY OF A MOBILE ATTACK (HIGH YIELD)

### THREE PRIMARY ATTACK POINTS

|Point|Target|
|---|---|
|Point 01|Device (dispositivo)|
|Point 02|Network (red)|
|Point 03|Data Center / Cloud|

> 🧠 *Para recordar:* **Device → Network → Cloud**

---

## ATTACK VECTORS — DEVICE LEVEL

### BROWSER-BASED ATTACKS

|Attack|Description|
|---|---|
|Phishing|Sitios web falsos|
|Framing|Iframes maliciosos ocultos|
|Clickjacking|Engaño de interfaz de usuario|
|Man-in-the-Mobile|Malware que intercepta datos|

---

### PHONE/SMS-BASED ATTACKS

|Attack|Description|
|---|---|
|Baseband attacks|Explotación de GSM/3GPP|
|Smishing|Phishing mediante SMS|
|Call-based attacks|Números premium|

---

### APPLICATION-BASED ATTACKS

|Attack|Description|
|---|---|
|Insecure data storage|Datos sensibles expuestos|
|Weak encryption|Robo de datos|
|Improper validation|Abuso de entrada|
|Configuration manipulation|Abuso de lógica de aplicación|
|Escalated privileges|Acceso a nivel root|

---

### OS-BASED ATTACKS

|Attack|Description|
|---|---|
|No passcode|Exposición de datos|
|Jailbreaking (iOS)|Bypass de seguridad|
|Rooting (Android)|Escalada de privilegios|
|OS data caching|Fugas de datos sensibles|
|Password cracking|Criptografía débil|
|User-initiated code|Instalaciones maliciosas|

---

## ATTACK VECTORS — NETWORK LEVEL

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

> 🧠 *Para recordar:* **Sniff → Intercept → Redirect**

---

## ATTACK VECTORS — DATA CENTER / CLOUD

### WEB SERVER-BASED

|Attack|
|---|
|Platform vulnerabilities — vulnerabilidades de la plataforma|
|Server misconfiguration — mala configuración del servidor|
|XSS|
|CSRF|
|Web input validation flaws — fallos de validación de entrada web|
|Brute-force|
|SQL injection|

---

## WHAT HAPPENS AFTER DEVICE COMPROMISE

|Category|Examples|
|---|---|
|Surveillance|Cámara, micrófono, registros de llamadas|
|Data theft|Contactos, SMS, archivos|
|Botnet activity|DDoS, fraude de clics|
|Impersonation|Correos falsos, publicaciones en redes sociales|

> 🧠 *Para recordar:* **Spy → Steal → Spread → Impersonate**

---

## Extras de examen (Boson Practice Test)

|Concepto|Qué recordar|
|---|---|
|IntentFuzzer|Fuzzer que ataca la comunicación entre procesos (IPC) de Android|
|Semi-untethered jailbreak|Una app sideloaded en el dispositivo puede volver a hacer jailbreak tras cada reinicio, sin computadora|
|Trident|Monitoriza las llamadas del iPhone; se basa en un jailbreak remoto|
|Trustjacking|Un host comprometido con el que el iPhone sincroniza iTunes puede controlarlo a través de la red inalámbrica|
|Spearphone|Explota el altavoz (loudspeaker) y el acelerómetro del teléfono|
|aLTEr|Ataque a LTE que usa meta-información de capa 2 para determinar qué sitios visita el usuario|

---

## Flashcards

| Term | Definition |
|------|------------|
| Mobile Platform Attack Vector | Una ruta o método utilizado para comprometer dispositivos móviles, redes o sistemas backend |
| OWASP Mobile Top 10 | Lista estándar de la industria de los riesgos de seguridad móvil más críticos |
| Smishing | Ataque de phishing entregado mediante mensajes SMS |
| Man-in-the-Mobile (MITMO) | Malware que intercepta tráfico móvil, dirigido a aplicaciones bancarias |
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

## Preguntas de práctica

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
