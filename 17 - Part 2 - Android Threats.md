# Módulo 17 · Parte 2 — Android Threats

> **Módulo 17 — Hacking Mobile Platforms** · Parte 2 de 5 · Amenazas y ataques en Android OS: arquitectura, categorías de malware, abuso de permisos, rooting, ataques (repackaging, drive-by, MITMO...) y ADB.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [OBJECTIVE 02 — ANDROID OS THREATS AND ATTACKS](#objective-02--android-os-threats-and-attacks)
- [ANDROID THREAT CATEGORIES](#android-threat-categories)
- [ANDROID MALWARE DELIVERY METHODS](#android-malware-delivery-methods)
- [ANDROID PERMISSION ABUSE 🔥](#android-permission-abuse-high-yield)
- [ROOTING — ANDROID 🔥](#rooting--android-high-yield)
- [ANDROID OS ATTACKS 🔥](#android-os-attacks-high-yield)
- [ANDROID APP VULNERABILITIES](#android-app-vulnerabilities)
- [ANDROID COMMUNICATION ATTACKS](#android-communication-attacks)
- [ANDROID DEBUG BRIDGE (ADB) — EXAM TOOL](#android-debug-bridge-adb--exam-tool)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

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

---

## OBJECTIVE 02 — ANDROID OS THREATS AND ATTACKS

### ANDROID OS — CORE DEFINITION

|Item|Memorize|
|---|---|
|Android OS|Un sistema operativo móvil de código abierto basado en Linux desarrollado por Google|

> 🧠 *Para recordar:* **Open-source = flexible + attackable**

---

### ANDROID ARCHITECTURE

|Layer|Description|
|---|---|
|Linux Kernel|Abstracción de hardware, drivers|
|HAL|Hardware Abstraction Layer|
|Native Libraries|Bibliotecas C/C++|
|Android Runtime (ART)|Ejecuta aplicaciones|
|Application Framework|APIs|
|Applications|Aplicaciones instaladas por el usuario|

> 🧠 *Para recordar:* **Kernel → HAL → Runtime → Framework → Apps**

---

### WHY ANDROID IS A HIGH-VALUE TARGET

|Reason|
|---|
|Ecosistema abierto|
|Instalación de apps de terceros|
|Fragmentación|
|Rooting posible|
|Revisión de apps débil (weak app vetting)|

---

## ANDROID THREAT CATEGORIES

|Category|
|---|
|Malware|
|Spyware|
|Trojans|
|Ransomware|
|Botnets|
|Backdoors|
|Adware|

> 🧠 *Para recordar:* **MST RBB A**

---

### ANDROID MALWARE — DEFINITION

|Item|Memorize|
|---|---|
|Android Malware|Software malicioso diseñado para comprometer dispositivos Android|

---

### COMMON ANDROID MALWARE BEHAVIORS

|Behavior|
|---|
|Roba credenciales|
|Envía SMS premium|
|Graba llamadas|
|Activa micrófono/cámara|
|Se une a botnets|
|Descarga payloads|

---

## ANDROID MALWARE DELIVERY METHODS

|Method|Description|
|---|---|
|Malicious apps|Tiendas de terceros|
|Repackaged apps|Apps legítimas modificadas|
|Drive-by downloads|Sitios web maliciosos|
|Phishing|Actualizaciones falsas|
|SMS links|Smishing|

> 🧠 *Para recordar:* **App + Link + SMS**

---

## ANDROID PERMISSION ABUSE (HIGH YIELD)

### DANGEROUS PERMISSIONS

|Permission|Abuse|
|---|---|
|READ_SMS|Robo de OTP|
|SEND_SMS|Fraude premium|
|READ_CONTACTS|Robo de datos|
|RECORD_AUDIO|Escucha (eavesdropping)|
|CAMERA|Vigilancia|
|ACCESS_FINE_LOCATION|Rastreo|

> 🧠 *Para recordar:* **SMS = money, mic = spy**

---

## ROOTING — ANDROID (HIGH YIELD)

### ROOTING — DEFINITION

|Item|Memorize|
|---|---|
|Rooting|Obtener acceso de superusuario (root) en Android|

---

### ROOTING — SECURITY IMPACT

|Impact|
|---|
|Deshabilita el sandboxing|
|Bypasea el modelo de permisos|
|Habilita la persistencia de malware|
|Rompe los controles MDM|

> 🧠 *Para recordar:* **Root = no rules**

---

### ROOTING METHODS

|Method|
|---|
|Explotar vulnerabilidades del OS|
|Desbloquear el bootloader|
|Flashear una custom ROM (ROM personalizada)|
|Apps de rooting maliciosas|

---

## ANDROID OS ATTACKS (HIGH YIELD)

### 1. REPACKAGING ATTACK

|Aspect|Description|
|---|---|
|What|Código malicioso añadido a una app legítima|
|How|Descompilada, modificada, re-firmada|
|Result|El usuario instala malware|

> 🧠 *Para recordar:* **Same app, evil inside**

---

### 2. DRIVE-BY DOWNLOAD ATTACK

|Aspect|Description|
|---|---|
|Trigger|Visitar un sitio web malicioso|
|Payload|Descarga automática de malware|
|Victim action|Mínima o ninguna|

---

### 3. SMS-BASED ATTACKS

|Attack|
|---|
|Smishing|
|Premium SMS fraud|
|OTP interception|

---

### 4. MAN-IN-THE-MOBILE (MITMO)

|Aspect|Description|
|---|---|
|What|Malware intercepta el tráfico móvil|
|Target|Aplicaciones bancarias|
|Method|Overlay + interceptación de SMS|

> 🧠 *Para recordar:* **MITM on mobile = MITMO**

---

### 5. CLICKJACKING

|Aspect|Description|
|---|---|
|Method|Engaño mediante overlay de UI|
|Result|Acciones no autorizadas|

---

### 6. ANDROID BOTNETS

|Feature|
|---|
|Comunicación C2|
|DDoS|
|Spam|
|Robo de datos|

---

## ANDROID APP VULNERABILITIES

|Vulnerability|
|---|
|Insecure data storage — almacenamiento inseguro de datos|
|Weak encryption — cifrado débil|
|Improper session handling — manejo inadecuado de sesiones|
|Hardcoded credentials — credenciales hardcodeadas|
|Insecure IPC — comunicación entre procesos insegura|
|Debug mode enabled — modo debug habilitado|

---

## ANDROID COMMUNICATION ATTACKS

|Attack|
|---|
|Wi-Fi sniffing|
|Rogue AP|
|SSL stripping|
|Fake certificates (certificados falsos)|

---

## ANDROID DEBUG BRIDGE (ADB) — EXAM TOOL

### ADB — DEFINITION

|Item|Memorize|
|---|---|
|ADB|Herramienta de línea de comandos para comunicarse con dispositivos Android|

---

### COMMON ADB COMMANDS

|Command|Purpose|
|---|---|
|adb devices|Listar dispositivos|
|adb shell|Acceder al shell del dispositivo|
|adb pull|Copiar archivos desde el dispositivo|
|adb push|Copiar archivos al dispositivo|
|adb install|Instalar APK|

> 🧠 *Para recordar:* **ADB = control channel**

---

## Flashcards

| Term | Definition |
|------|------------|
| Rooting | Obtener acceso de superusuario (root) en Android, bypaseando sandbox y permisos |
| Repackaging Attack | Añadir código malicioso a una app legítima, recompilando y redistribuyendo |
| Drive-by Download | Descarga automática de malware al visitar un sitio web malicioso |
| Man-in-the-Mobile (MITMO) | Malware que intercepta el tráfico móvil mediante overlay e interceptación de SMS |
| ADB | Android Debug Bridge; herramienta de línea de comandos para comunicarse con dispositivos Android |
| Smishing | Ataque de phishing entregado vía mensajes SMS |
| Premium SMS Fraud | Envío de SMS a números tarifarios premium para obtener beneficios |
| OTP Interception | Robo de contraseñas de un solo uso vía SMS o malware |
| Android Botnet | Red de dispositivos Android comprometidos usados para DDoS, spam, robo de datos |
| Clickjacking | Engaño mediante overlay de UI que induce a los usuarios a realizar acciones no deseadas |
| Third-party App Store | Fuente no oficial de apps que puede alojar APKs reempaquetados o maliciosos |
| Android Architecture | Capas: Linux Kernel → HAL → Native Libraries → ART → Framework → Apps |
| Dangerous Permissions | READ_SMS, SEND_SMS, CAMERA, RECORD_AUDIO, ACCESS_FINE_LOCATION |
| APK Decompilation | Ingeniería inversa de un APK para extraer y modificar el código fuente |

---

## Preguntas de práctica

**1.** ¿Cuál es el impacto de seguridad de hacer rooting a un dispositivo Android?
- a) Fortalece el sandbox
- b) Deshabilita el sandboxing, bypasea permisos y rompe los controles MDM
- c) Habilita el cifrado automático
- d) Mejora la revisión de apps
**Answer:** B — Rooting elimina todos los límites de seguridad, dando al malware acceso completo al sistema.

**2.** ¿Qué método de entrega de malware Android implica modificar una app legítima?
- a) Drive-by download
- b) Smishing
- c) Repackaging attack
- d) SMS fraud
**Answer:** C — Repackaging implica descompilar, modificar y re-firmar una app legítima con malware.

**3.** ¿Qué hace el comando ADB `adb devices`?
- a) Instala un APK
- b) Lista los dispositivos Android conectados
- c) Habilita el acceso root
- d) Descarga archivos desde el dispositivo
**Answer:** B — `adb devices` lista todos los dispositivos Android conectados actualmente vía USB o red.

**4.** ¿Qué permiso peligroso de Android se usa para el robo de OTP?
- a) CAMERA
- b) RECORD_AUDIO
- c) READ_SMS
- d) ACCESS_FINE_LOCATION
**Answer:** C — READ_SMS permite a las apps leer mensajes entrantes, incluyendo códigos OTP.

**5.** ¿Cuál es la diferencia principal entre los ataques de repackaging y drive-by download?
- a) Repackaging modifica apps existentes; drive-by descarga automáticamente de sitios maliciosos
- b) Repackaging apunta a iOS; drive-by apunta a Android
- c) No hay diferencia
- d) Drive-by requiere consentimiento del usuario; repackaging no
**Answer:** A — Repackaging corrompe una app legítima antes de la instalación; drive-by downloads ocurren silenciosamente a través del navegador.
