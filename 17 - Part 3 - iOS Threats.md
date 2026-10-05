# Módulo 17 · Parte 3 — iOS Threats

> **Módulo 17 — Hacking Mobile Platforms** · Parte 3 de 5 · Amenazas y ataques en iOS: modelo de seguridad, jailbreaking y sus tipos, vectores de ataque (enterprise certificates, configuration profiles, spyware), almacenamiento de datos, herramientas y comparación Android vs iOS.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [OBJECTIVE 03 — iOS THREATS AND ATTACKS](#objective-03--ios-threats-and-attacks)
- [iOS THREAT CATEGORIES](#ios-threat-categories)
- [JAILBREAKING — iOS 🔥](#jailbreaking--ios-high-yield)
- [iOS ATTACK VECTORS 🔥](#ios-attack-vectors-high-yield)
- [iOS APP VULNERABILITIES](#ios-app-vulnerabilities)
- [iOS DATA STORAGE LOCATIONS](#ios-data-storage-locations)
- [iOS COMMUNICATION THREATS](#ios-communication-threats)
- [iOS SECURITY TOOLS](#ios-security-tools)
- [iOS ATTACK CONSEQUENCES](#ios-attack-consequences)
- [ANDROID VS iOS — EXAM COMPARISON 🔥](#android-vs-ios--exam-comparison-high-yield)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

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

---

## OBJECTIVE 03 — iOS THREATS AND ATTACKS

### iOS — CORE DEFINITION

|Item|Memorize|
|---|---|
|iOS|Un sistema operativo móvil de código cerrado desarrollado por Apple para dispositivos iPhone y iPad|

> 🧠 *Para recordar:* **Closed-source ≠ immune**

---

### iOS SECURITY MODEL

| Security Feature    | Description                |
| ------------------- | -------------------------- |
| Code signing        | Solo las aplicaciones firmadas pueden ejecutarse |
| Sandboxing          | Aislamiento de aplicaciones |
| Secure Boot Chain   | Verifica la integridad al iniciar |
| App Store vetting   | Proceso de revisión de Apple |
| Data Protection API | Cifrado a nivel de archivo |

> 🧠 *Para recordar:* **Sign → Sandbox → Secure Boot**

---

### WHY iOS IS STILL ATTACKED

|Reason|
|---|
|El jailbreaking evade los controles|
|Confianza del usuario en la App Store|
|Zero-day exploits (exploits de día cero)|
|Phishing y abuso de configuración|

---

## iOS THREAT CATEGORIES

|Category|
|---|
|Spyware|
|Malware|
|Trojans (troyanos)|
|Configuration profile abuse — abuso de perfiles de configuración|
|Jailbreak-based attacks — ataques basados en jailbreak|
|Network-based attacks — ataques basados en red|

---

## JAILBREAKING — iOS (HIGH YIELD)

### JAILBREAKING — DEFINITION

|Item|Memorize|
|---|---|
|Jailbreaking|El proceso de eliminar las restricciones de iOS para obtener acceso root|

> 🧠 *Para recordar:* **Jailbreak = root access**

---

### JAILBREAKING — SECURITY IMPACT

|Impact|
|---|
|Deshabilita la obligatoriedad de la firma de código (code signing enforcement)|
|Evade el sandbox|
|Habilita aplicaciones no autorizadas|
|Rompe la aplicación de políticas MDM (MDM enforcement)|

> 🧠 *Para recordar:* **No sandbox, no trust**

---

### TYPES OF JAILBREAK

|Type|Description|
|---|---|
|Tethered|Requiere computadora en cada arranque; sin ella el dispositivo no arranca con el kernel parcheado|
|Semi-tethered|Arranca solo y funciona con normalidad, pero sin jailbreak; para recuperarlo necesita computadora|
|Semi-untethered|Como semi-tethered, pero el jailbreak se reaplica sin computadora mediante una app instalada (sideloaded) en el dispositivo|
|Untethered|Jailbreak persistente: sobrevive a los reinicios sin ayuda externa|

> 🧠 *Para recordar:* **Un-tethered = persistent**

---

## iOS ATTACK VECTORS (HIGH YIELD)

### 1. MALICIOUS APPLICATIONS

|Aspect|Description|
|---|---|
|Source|Tiendas de terceros|
|Delivery|Dispositivos con jailbreak|
|Impact|Robo de datos, spyware|

---

### 2. ENTERPRISE CERTIFICATE ABUSE

|Aspect|Description|
|---|---|
|What|Uso indebido de certificados empresariales de Apple|
|Result|Aplicaciones sin firmar instaladas|
|Impact|Distribución de malware|

> 🧠 *Para recordar:* **Enterprise cert = bypass gatekeeper**

---

### 3. CONFIGURATION PROFILE ATTACKS

|Aspect|Description|
|---|---|
|Method|Perfiles maliciosos|
|Abuse|VPN, proxy, instalación de certificados|
|Result|Intercepción de tráfico|

> 🧠 *Para recordar:* **Profile = silent control**

---

### 4. iOS SPYWARE

|Capability|
|---|
|Grabación de llamadas|
|Monitoreo de SMS|
|Rastreo GPS|
|Robo de datos de aplicaciones|

---

### 5. NETWORK-BASED ATTACKS

|Attack|
|---|
|Rogue Wi-Fi|
|MITM|
|SSL stripping|
|Certificados falsos|

---

## iOS APP VULNERABILITIES

|Vulnerability|
|---|
|Insecure local storage — almacenamiento local inseguro|
|Weak cryptography — criptografía débil|
|Improper session handling — manejo inadecuado de sesiones|
|Hardcoded credentials — credenciales hardcodeadas|
|Insufficient certificate validation — validación insuficiente de certificados|

---

## iOS DATA STORAGE LOCATIONS

|Location|Risk|
|---|---|
|Keychain|Exposición de credenciales|
|SQLite DB|Datos en texto plano|
|Plist files|Fugas de configuración|
|Cache files|Residuos sensibles|

> 🧠 *Para recordar:* **Keychain ≠ invincible**

---

## iOS COMMUNICATION THREATS

|Threat|
|---|
|Insecure TLS — TLS inseguro|
|Invalid certificate acceptance — aceptación de certificados inválidos|
|Proxy interception — intercepción mediante proxy|

---

## iOS SECURITY TOOLS

|Tool|Purpose|
|---|---|
|Cydia|Gestor de paquetes (con jailbreak)|
|Frida|Instrumentación en tiempo de ejecución|
|Objection|Análisis en tiempo de ejecución de iOS|
|iFunBox|Acceso al sistema de archivos|
|Burp Suite|Intercepción de tráfico|

> 🧠 *Para recordar:* **Frida = runtime control**

---

## iOS ATTACK CONSEQUENCES

|Impact|
|---|
|Data leakage — fuga de datos|
|Privacy violations — violaciones de privacidad|
|Credential theft — robo de credenciales|
|Corporate compromise — compromiso corporativo|

---

## ANDROID VS iOS — EXAM COMPARISON (HIGH YIELD)

|Feature|Android|iOS|
|---|---|---|
|Source model|Abierto|Cerrado|
|Root access|Rooting|Jailbreaking|
|App vetting|Débil|Fuerte|
|Custom ROMs|Sí|No|
|Enterprise abuse|Menos|Más|

> 🧠 *Para recordar:* **Android = open risk, iOS = controlled risk**

---

## Flashcards

| Term | Definition |
|------|------------|
| Jailbreaking | Eliminar las restricciones de iOS para obtener acceso root, bypaseando el code signing y sandbox |
| Tethered Jailbreak | Requiere conexión a computadora en cada inicio para funcionar |
| Semi-tethered Jailbreak | Parcialmente funcional después de reiniciar sin computadora; necesita re-jailbreak |
| Untethered Jailbreak | Jailbreak persistente que sobrevive a los reinicios del dispositivo sin asistencia |
| Enterprise Certificate Abuse | Uso indebido de certificados empresariales de Apple para instalar aplicaciones maliciosas sin firmar |
| Configuration Profile Attack | Perfiles maliciosos que instalan VPN, proxy o certificados para interceptar tráfico |
| Cydia | Gestor de paquetes para dispositivos iOS con jailbreak para instalar software no autorizado |
| Frida | Kit de instrumentación dinámica para análisis en tiempo de ejecución en iOS y Android |
| Objection | Framework de análisis y manipulación en tiempo de ejecución de iOS construido sobre Frida |
| Data Protection API | Cifrado a nivel de archivo de iOS vinculado al código de acceso del dispositivo |
| Secure Boot Chain | Verifica la integridad de cada etapa de inicio antes de cargar |
| Code Signing | Requisito de iOS de que solo el código firmado por Apple pueda ejecutarse |
| Sandboxing | Mecanismo de aislamiento de aplicaciones que impide que las aplicaciones accedan a datos entre sí |
| Keychain | Almacenamiento seguro de credenciales de iOS; no es inmune a ataques en dispositivos con jailbreak |

---

## Preguntas de práctica

**1.** ¿Qué deshabilita el jailbreaking de un dispositivo iOS?
- a) Funcionalidad Bluetooth
- b) Ejecución de firmado de código y sandboxing
- c) Acceso a red celular
- d) Rastreo GPS
**Answer:** B — El jailbreak elimina las protecciones de code signing y sandbox, otorgando acceso root.

**2.** ¿Qué tipo de jailbreak persiste a través de reinicios del dispositivo sin una computadora?
- a) Tethered
- b) Semi-tethered
- c) Untethered
- d) Semi-untethered
**Answer:** C — Los jailbreaks untethered son completamente persistentes a través de reinicios sin asistencia externa.

**3.** ¿Cuál es el riesgo del abuso de certificados empresariales en iOS?
- a) Mejora el rendimiento de las aplicaciones
- b) Permite la instalación de aplicaciones maliciosas sin firmar bypaseando App Store
- c) Cifra todos los datos del dispositivo
- d) Deshabilita las conexiones Wi-Fi
**Answer:** B — Los certificados empresariales pueden ser mal utilizados para distribuir malware sin la revisión de Apple App Store.

**4.** ¿Cómo comprometen los ataques de perfiles de configuración el tráfico de iOS?
- a) Mediante fuerza bruta del código de acceso
- b) Instalando perfiles maliciosos de VPN, proxy o certificados para interceptar tráfico
- c) Mediante jailbreak remoto del dispositivo
- d) Deshabilitando el firewall
**Answer:** B — Los perfiles maliciosos configuran silenciosamente VPNs, proxies o instalan certificados rogue para MITM.

**5.** ¿Qué herramienta permite la instrumentación en tiempo de ejecución de aplicaciones iOS?
- a) iFunBox
- b) Cydia
- c) Frida
- d) MobSF
**Answer:** C — Frida proporciona instrumentación dinámica para hook y analizar el comportamiento de las aplicaciones en tiempo de ejecución.
