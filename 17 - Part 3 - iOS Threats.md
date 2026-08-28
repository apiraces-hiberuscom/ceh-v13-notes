# OBJECTIVE 03 — iOS THREATS AND ATTACKS

---

## iOS — CORE DEFINITION (EXAM)

|Item|Memorize|
|---|---|
|iOS|Un sistema operativo móvil de código cerrado desarrollado por Apple para dispositivos iPhone y iPad|

MEMORY HOOK:  
**Closed-source ≠ immune**

---

## iOS SECURITY MODEL (EXAM FOUNDATION)

| Security Feature    | Description                |
| ------------------- | -------------------------- |
| Code signing        | Solo las aplicaciones firmadas pueden ejecutarse |
| Sandboxing          | Aislamiento de aplicaciones |
| Secure Boot Chain   | Verifica la integridad al iniciar |
| App Store vetting   | Proceso de revisión de Apple |
| Data Protection API | Cifrado a nivel de archivo |

MEMORY HOOK:  
**Sign → Sandbox → Secure Boot**

---

## WHY iOS IS STILL ATTACKED

|Reason|
|---|
|El jailbyring bypasea los controles|
|Confianza del usuario en App Store|
|Explotaciones de día cero|
|Phishing y abuso de configuración|

---

# iOS THREAT CATEGORIES (EXAM LIST)

|Category|
|---|
|Spyware|
|Malware|
|Troyanos|
|Abuso de perfiles de configuración|
|Ataques basados en jailbreak|
|Ataques basados en red|

---

# JAILBREAKING — iOS (EXAM FAVORITE)

## JAILBREAKING — DEFINITION

|Item|Memorize|
|---|---|
|Jailbreaking|El proceso de eliminar las restricciones de iOS para obtener acceso root|

MEMORY HOOK:  
**Jailbreak = root access**

---

## JAILBREAKING — SECURITY IMPACT

|Impact|
|---|
|Deshabilita la ejecución de firmado de código|
|Bypasea el sandbox|
|Habilita aplicaciones no autorizadas|
|Rompe la ejecución de MDM|

MEMORY HOOK:  
**No sandbox, no trust**

---

## TYPES OF JAILBREAK (EXAM)

|Type|Description|
|---|---|
|Tethered|Requiere computadora al iniciar|
|Semi-tethered|Funcionalidad parcial|
|Untethered|Jailbreak persistente|

MEMORY HOOK:  
**Un-tethered = persistent**

---

# iOS ATTACK VECTORS (MUST MEMORIZE)

---

## 1. MALICIOUS APPLICATIONS

|Aspect|Description|
|---|---|
|Source|Tiendas de terceros|
|Delivery|Dispositivos con jailbreak|
|Impact|Robo de datos, spyware|

---

## 2. ENTERPRISE CERTIFICATE ABUSE

|Aspect|Description|
|---|---|
|What|Uso indebido de certificados empresariales de Apple|
|Result|Aplicaciones sin firmar instaladas|
|Impact|Distribución de malware|

MEMORY HOOK:  
**Enterprise cert = bypass gatekeeper**

---

## 3. CONFIGURATION PROFILE ATTACKS

|Aspect|Description|
|---|---|
|Method|Perfiles maliciosos|
|Abuse|VPN, proxy, instalación de certificados|
|Result|Intercepción de tráfico|

MEMORY HOOK:  
**Profile = silent control**

---

## 4. iOS SPYWARE

|Capability|
|---|
|Grabación de llamadas|
|Monitoreo de SMS|
|Rastreo GPS|
|Robo de datos de aplicaciones|

---

## 5. NETWORK-BASED ATTACKS

|Attack|
|---|
|Rogue Wi-Fi|
|MITM|
|SSL stripping|
|Certificados falsos|

---

# iOS APP VULNERABILITIES (EXAM TABLE)

|Vulnerability|
|---|
|Almacenamiento local inseguro|
|Criptografía débil|
|Manejo inadecuado de sesiones|
|Credenciales hardcodeadas|
|Validación insuficiente de certificados|

---

# iOS DATA STORAGE LOCATIONS (EXAM)

|Location|Risk|
|---|---|
|Keychain|Exposición de credenciales|
|SQLite DB|Datos en texto plano|
|Plist files|Fugas de configuración|
|Cache files|Residuos sensibles|

MEMORY HOOK:  
**Keychain ≠ invincible**

---

# iOS COMMUNICATION THREATS

|Threat|
|---|
|TLS inseguro|
|Aceptación de certificados inválidos|
|Intercepción por proxy|

---

# iOS SECURITY TOOLS (CEH EXPECTS RECOGNITION)

|Tool|Purpose|
|---|---|
|Cydia|Gestor de paquetes (con jailbreak)|
|Frida|Instrumentación en tiempo de ejecución|
|Objection|Análisis en tiempo de ejecución de iOS|
|iFunBox|Acceso al sistema de archivos|
|Burp Suite|Intercepción de tráfico|

MEMORY HOOK:  
**Frida = runtime control**

---

# iOS ATTACK CONSEQUENCES (EXAM TABLE)

|Impact|
|---|
|Fuga de datos|
|Violaciones de privacidad|
|Robo de credenciales|
|Compromiso corporativo|

---

# ANDROID VS iOS — EXAM COMPARISON (VERY HIGH YIELD)

|Feature|Android|iOS|
|---|---|---|
|Source model|Abierto|Cerrado|
|Root access|Rooting|Jailbreaking|
|App vetting|Débil|Fuerte|
|Custom ROMs|Sí|No|
|Enterprise abuse|Menos|Más|

MEMORY HOOK:  
**Android = open risk, iOS = controlled risk**

---

# OBJECTIVE 03 — EXAM MEMORY BLOCK

**iOS se basa en code signing, sandboxing y secure boot.  
El jailbreak elimina todas las protecciones.  
Los ataques utilizan aplicaciones maliciosas, certificados empresariales y perfiles de configuración.  
La interceptación de red y el spyware siguen siendo amenazas clave.**

---

## OBJECTIVE 03 — STATUS

|Item|Status|
|---|---|
|iOS threats|COMPLETE|
|Jailbreaking|COMPLETE|
|Attack vectors|COMPLETE|
|Tools|COMPLETE|
|Exam alignment|EXACT|

---

# EXAM FLASHCARDS

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

# PRACTICE QUESTIONS

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
