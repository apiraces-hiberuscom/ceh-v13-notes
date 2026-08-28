# OBJECTIVE 02 — ANDROID OS THREATS AND ATTACKS

---

## ANDROID OS — CORE DEFINITION (EXAM)

|Item|Memorize|
|---|---|
|Android OS|Un sistema operativo móvil de código abierto basado en Linux desarrollado por Google|

MEMORY HOOK:  
**Open-source = flexible + attackable**

---

## ANDROID ARCHITECTURE (EXAM FOUNDATION)

|Layer|Description|
|---|---|
|Linux Kernel|Abstracción de hardware, drivers|
|HAL|Hardware Abstraction Layer|
|Native Libraries|Bibliotecas C/C++|
|Android Runtime (ART)|Ejecuta aplicaciones|
|Application Framework|APIs|
|Applications|Aplicaciones instaladas por el usuario|

MEMORY HOOK:  
**Kernel → HAL → Runtime → Framework → Apps**

---

## WHY ANDROID IS A HIGH-VALUE TARGET

|Reason|
|---|
|Ecosistema abierto|
|Instalación de apps de terceros|
|Fragmentación|
|Rooting posible|
|Débil revisión de apps|

---

# ANDROID THREAT CATEGORIES (EXAM LIST)

|Category|
|---|
|Malware|
|Spyware|
|Trojans|
|Ransomware|
|Botnets|
|Backdoors|
|Adware|

MEMORY HOOK:  
**MST RBB A**

---

## ANDROID MALWARE — DEFINITION

|Item|Memorize|
|---|---|
|Android Malware|Software malicioso diseñado para comprometer dispositivos Android|

---

## COMMON ANDROID MALWARE BEHAVIORS

|Behavior|
|---|
|Roba credenciales|
|Envía SMS premium|
|Graba llamadas|
|Activa micrófono/cámara|
|Se une a botnets|
|Descarga payloads|

---

# ANDROID MALWARE DELIVERY METHODS

|Method|Description|
|---|---|
|Malicious apps|Tiendas de terceros|
|Repackaged apps|Apps legítimas modificadas|
|Drive-by downloads|Sitios web maliciosos|
|Phishing|Actualizaciones falsas|
|SMS links|Smishing|

MEMORY HOOK:  
**App + Link + SMS**

---

# ANDROID PERMISSION ABUSE (HIGH-YIELD)

## DANGEROUS PERMISSIONS

|Permission|Abuse|
|---|---|
|READ_SMS|Robo de OTP|
|SEND_SMS|Fraude premium|
|READ_CONTACTS|Robo de datos|
|RECORD_AUDIO|Escucha|
|CAMERA|Vigilancia|
|ACCESS_FINE_LOCATION|Rastreo|

MEMORY HOOK:  
**SMS = money, mic = spy**

---

# ROOTING — ANDROID (EXAM FAVORITE)

## ROOTING — DEFINITION

|Item|Memorize|
|---|---|
|Rooting|Obtener acceso de superusuario (root) en Android|

---

## ROOTING — SECURITY IMPACT

|Impact|
|---|
|Deshabilita el sandboxing|
|Bypasea el modelo de permisos|
|Habilita la persistencia de malware|
|Rompe los controles MDM|

MEMORY HOOK:  
**Root = no rules**

---

## ROOTING METHODS (EXAM)

|Method|
|---|
|Explotar vulnerabilidades del OS|
|Desbloquear bootloader|
|Flashear ROM personalizada|
|Apps de rooting maliciosas|

---

# ANDROID OS ATTACKS (MUST MEMORIZE)

---

## 1. REPACKAGING ATTACK

|Aspect|Description|
|---|---|
|What|Código malicioso añadido a una app legítima|
|How|Descompilada, modificada, re-firmada|
|Result|El usuario instala malware|

MEMORY HOOK:  
**Same app, evil inside**

---

## 2. DRIVE-BY DOWNLOAD ATTACK

|Aspect|Description|
|---|---|
|Trigger|Visitar un sitio web malicioso|
|Payload|Descarga automática de malware|
|Victim action|Mínima o ninguna|

---

## 3. SMS-BASED ATTACKS

|Attack|
|---|
|Smishing|
|Premium SMS fraud|
|OTP interception|

---

## 4. MAN-IN-THE-MOBILE (MITMO)

|Aspect|Description|
|---|---|
|What|Malware intercepta el tráfico móvil|
|Target|Aplicaciones bancarias|
|Method|Overlay + interceptación de SMS|

MEMORY HOOK:  
**MITM on mobile = MITMO**

---

## 5. CLICKJACKING

|Aspect|Description|
|---|---|
|Method|Engaño mediante overlay de UI|
|Result|Acciones no autorizadas|

---

## 6. ANDROID BOTNETS

|Feature|
|---|
|Comunicación C2|
|DDoS|
|Spam|
|Robo de datos|

---

# ANDROID APP VULNERABILITIES (EXAM TABLE)

|Vulnerability|
|---|
|Almacenamiento inseguro de datos|
|Cifrado débil|
|Manejo inadecuado de sesiones|
|Credenciales hardcodeadas|
|IPC inseguro|
|Modo debug habilitado|

---

# ANDROID COMMUNICATION ATTACKS

|Attack|
|---|
|Wi-Fi sniffing|
|Rogue AP|
|SSL stripping|
|Certificados falsos|

---

# ANDROID DEBUG BRIDGE (ADB) — EXAM TOOL

## ADB — DEFINITION

|Item|Memorize|
|---|---|
|ADB|Herramienta de línea de comandos para comunicarse con dispositivos Android|

---

## COMMON ADB COMMANDS (CEH EXPECTS RECOGNITION)

|Command|Purpose|
|---|---|
|adb devices|Listar dispositivos|
|adb shell|Acceder al shell del dispositivo|
|adb pull|Copiar archivos desde el dispositivo|
|adb push|Copiar archivos al dispositivo|
|adb install|Instalar APK|

MEMORY HOOK:  
**ADB = control channel**

---

# ANDROID SECURITY RISKS SUMMARY (EXAM BLOCK)

**Los ataques Android explotan la apertura, permisos, rooting, apps débiles y redes inseguras.  
El malware entra a través de apps, SMS y web.  
Rooting rompe la seguridad.  
ADB permite el control.**

---

## OBJECTIVE 02 — STATUS

|Item|Status|
|---|---|
|Android threats|COMPLETE|
|Android attacks|COMPLETE|
|Rooting|COMPLETE|
|Permissions|COMPLETE|
|Tools|COMPLETE|
|Exam alignment|EXACT|

---

# EXAM FLASHCARDS

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

# PRACTICE QUESTIONS

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
