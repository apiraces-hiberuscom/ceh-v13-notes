# Módulo 17 · Parte 5 — Mobile Security Tools

> **Módulo 17 — Hacking Mobile Platforms** · Parte 5 de 5 · Directrices de seguridad móvil (dispositivo, app, red, datos, empresa), testing (SAST/DAST/IAST), herramientas Android/iOS y de análisis de malware, y mapeo ataque → defensa.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [OBJECTIVE 05 — MOBILE SECURITY GUIDELINES AND TOOLS](#objective-05--mobile-security-guidelines-and-tools)
- [OBJETIVOS DE MOBILE SECURITY](#objetivos-de-mobile-security)
- [DIRECTRICES DE MOBILE SECURITY 🔥](#directrices-de-mobile-security-high-yield)
- [MOBILE SECURITY PARA AMBIENTES EMPRESARIALES](#mobile-security-para-ambientes-empresariales)
- [TESTING DE MOBILE SECURITY](#testing-de-mobile-security)
- [HERRAMIENTAS DE MOBILE SECURITY](#herramientas-de-mobile-security)
- [VPN Y GESTIÓN DE CERTIFICADOS](#vpn-y-gestión-de-certificados)
- [MAPEO DE ATAQUE → DEFENSA EN MOBILE SECURITY 🔥](#mapeo-de-ataque--defensa-en-mobile-security-high-yield)
- [CONCIENCIACIÓN DEL USUARIO 🔥](#concienciación-del-usuario-high-yield)
- [ESTÁNDARES DE CUMPLIMIENTO EN MOBILE SECURITY](#estándares-de-cumplimiento-en-mobile-security)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **Mobile security** — protege dispositivo + app + datos; las amenazas apuntan al SO, las apps, las redes y los usuarios (Android es abierto, iOS es controlado).
- **Device-level guidelines** — bloqueo de pantalla fuerte, biometría, cifrar el almacenamiento, deshabilitar USB debugging y Bluetooth sin uso, remote wipe, actualizar el SO.
- **Network-level guidelines** — evitar Wi-Fi público (o usar VPN), deshabilitar auto-connect, verificar certificados SSL.
- **Enterprise** — MDM + containerization + compliance policies + device posture; MDM impone políticas y permite acciones remotas.
- **SAST vs DAST vs IAST** — SAST analiza código fuente/binario sin ejecutar; DAST prueba la app en runtime; IAST combina ambos.
- **Android tools** — Drozer (security assessment de apps), APKTool (reverse engineering/recompilar APK), JADX (DEX → Java), Androguard (análisis estático de malware).
- **Frida / Objection / Cycript** — hooking e instrumentación en runtime (Android e iOS) / manipulación runtime sobre Frida / inspección runtime en iOS.
- **MobSF / Burp Suite** — análisis estático y dinámico automatizado (Android e iOS) / proxy interceptador HTTP/HTTPS (análisis MITM).
- **Malware analysis tools** — VirusTotal (múltiples motores AV), Androguard (estático), Cuckoo Sandbox (dinámico).
- **VPN & certificate management** — certificados de confianza, bloquear CAs instaladas por el usuario y VPN empresarial para prevenir MITM y SSL stripping ("bad cert = MITM").
- **Attack → Defense** — Malware → app vetting + MDM · Smishing → concienciación · MITM → VPN + TLS · Root/Jailbreak → device compliance checks · Data leakage → cifrado · Rogue Wi-Fi → deshabilitar auto-connect.
- **Defensas obligatorias** — cifrado, actualizaciones, VPN y concienciación del usuario ("human = weakest link").

---

## OBJECTIVE 05 — MOBILE SECURITY GUIDELINES AND TOOLS

### MOBILE SECURITY — DEFINICIÓN BÁSICA

|Term|Definition|
|---|---|
|Mobile Security|La protección de dispositivos móviles, aplicaciones y datos contra amenazas, vulnerabilidades y accesos no autorizados|

> 🧠 *Para recordar:* **Device + App + Data**

---

## OBJETIVOS DE MOBILE SECURITY

|Goal|
|---|
|Proteger datos sensibles|
|Prevenir accesos no autorizados|
|Detectar actividad maliciosa|
|Asegurar cumplimiento normativo|
|Mantener privacidad del usuario|

> 🧠 *Para recordar:* **Protect, Prevent, Detect**

---

## DIRECTRICES DE MOBILE SECURITY (HIGH YIELD)

### DIRECTRICES DE SEGURIDAD A NIVEL DE DISPOSITIVO

|Guideline|
|---|
|Habilitar bloqueo de pantalla fuerte|
|Usar autenticación biométrica|
|Cifrar almacenamiento del dispositivo|
|Deshabilitar USB debugging|
|Deshabilitar Bluetooth cuando no se use|
|Habilitar remote wipe (borrado remoto)|
|Instalar actualizaciones del SO|

> 🧠 *Para recordar:* **Lock, Encrypt, Update**

---

### DIRECTRICES DE SEGURIDAD A NIVEL DE APLICACIÓN

|Guideline|
|---|
|Instalar apps de fuentes confiables|
|Revisar permisos de la app|
|Evitar dispositivos root/jailbreak|
|Eliminar apps no utilizadas|
|Actualizar apps regularmente|

> 🧠 *Para recordar:* **Trust source, limit permissions**

---

### DIRECTRICES DE SEGURIDAD A NIVEL DE RED

|Guideline|
|---|
|Evitar Wi-Fi público|
|Usar VPN|
|Deshabilitar auto-connect (conexión automática)|
|Verificar certificados SSL|

> 🧠 *Para recordar:* **Public Wi-Fi = VPN required**

---

### DIRECTRICES DE SEGURIDAD A NIVEL DE DATOS

|Guideline|
|---|
|Cifrar datos sensibles|
|Evitar almacenamiento en texto plano|
|Usar gestión segura de claves|
|Habilitar backups seguros|

> 🧠 *Para recordar:* **Encrypt at rest and transit**

---

## MOBILE SECURITY PARA AMBIENTES EMPRESARIALES

|Control|
|---|
|Imponer MDM|
|Aplicar containerization|
|Imponer políticas de cumplimiento (compliance policies)|
|Monitorizar la postura del dispositivo (device posture)|
|Restringir el acceso a recursos corporativos|

> 🧠 *Para recordar:* **Enterprise = MDM + Policy**

---

## TESTING DE MOBILE SECURITY

### MOBILE APPLICATION SECURITY TESTING (MAST)

|Type|Description|
|---|---|
|Static Analysis (SAST)|Analizar código fuente/binario|
|Dynamic Analysis (DAST)|Testing en tiempo de ejecución|
|Interactive Analysis (IAST)|Enfoque combinado|

> 🧠 *Para recordar:* **Static sees code, Dynamic sees behavior**

---

## HERRAMIENTAS DE MOBILE SECURITY

### HERRAMIENTAS DE SEGURIDAD ANDROID

|Tool|Purpose|
|---|---|
|Drozer|Evaluación de seguridad de Android|
|APKTool|Ingeniería inversa de APKs|
|JADX|Descompilar DEX a Java|
|Frida|Instrumentación en runtime|
|Burp Suite|Intercepción de tráfico|
|Androguard|Análisis de malware|
|MobSF|Análisis automatizado|

> 🧠 *Para recordar:* **Drozer probes, APKTool breaks**

---

### HERRAMIENTAS DE SEGURIDAD iOS

|Tool|Purpose|
|---|---|
|Frida|Análisis en runtime|
|Objection|Manipulación en runtime|
|iFunBox|Acceso al sistema de archivos|
|Cycript|Inspección en runtime|
|Burp Suite|Análisis MITM|
|MobSF|Análisis de apps iOS|

> 🧠 *Para recordar:* **Frida everywhere**

---

### HERRAMIENTAS DE ANÁLISIS DE MOBILE MALWARE

|Tool|Purpose|
|---|---|
|VirusTotal|Detección de malware|
|Androguard|Análisis estático|
|MobSF|Framework automatizado|
|Cuckoo Sandbox|Análisis dinámico|

---

## VPN Y GESTIÓN DE CERTIFICADOS

|Control|
|---|
|Imponer certificados confiables|
|Bloquear CAs instaladas por el usuario|
|Usar VPN empresarial|
|Prevenir SSL stripping|

> 🧠 *Para recordar:* **Bad cert = MITM**

---

## MAPEO DE ATAQUE → DEFENSA EN MOBILE SECURITY (HIGH YIELD)

|Attack|Defense|
|---|---|
|Malware|App vetting (revisión de apps) + MDM|
|Smishing|User awareness (concienciación del usuario)|
|MITM|VPN + TLS|
|Root/Jailbreak|Device compliance checks (verificación de cumplimiento del dispositivo)|
|Data leakage|Cifrado|
|Rogue Wi-Fi|Deshabilitar auto-connect (conexión automática)|

---

## CONCIENCIACIÓN DEL USUARIO (HIGH YIELD)

|Awareness Topic|
|---|
|Phishing|
|Smishing|
|Apps maliciosas|
|Actualizaciones falsas|
|Riesgos de Wi-Fi público|

> 🧠 *Para recordar:* **Human = weakest link**

---

## ESTÁNDARES DE CUMPLIMIENTO EN MOBILE SECURITY

|Standard|
|---|
|OWASP Mobile Top 10|
|GDPR|
|HIPAA|
|PCI DSS|

---

## Flashcards

| Term | Definition |
|------|------------|
| Drozer | Framework de evaluación de seguridad Android para testing de vulnerabilidades en apps |
| APKTool | Herramienta de ingeniería inversa para descompilar y recompilar APKs de Android |
| JADX | Descompilador que convierte archivos DEX de Android en código Java legible |
| Frida | Toolkit de instrumentación dinámica para hooking en runtime en Android y iOS |
| Objection | Framework de manipulación en runtime construido sobre Frida para análisis de iOS/Android |
| Burp Suite | Proxy interceptador para analizar y manipular tráfico HTTP/HTTPS |
| MobSF | Mobile Security Framework para análisis estático y dinámico automatizado |
| Androguard | Herramienta de análisis de malware Android para ingeniería inversa estática |
| Cycript | Herramienta de inspección en runtime para análisis de aplicaciones iOS |
| iFunBox | Herramienta de acceso al sistema de archivos para navegar contenidos de dispositivos iOS |
| Cuckoo Sandbox | Plataforma automatizada de análisis dinámico de malware |
| VirusTotal | Servicio online para escanear archivos contra múltiples motores antivirus |
| SAST | Static Application Security Testing; analiza código fuente o binario sin ejecución |
| DAST | Dynamic Application Security Testing; testea apps en tiempo de ejecución |
| IAST | Interactive Application Security Testing; combina enfoques estáticos y dinámicos |

---

## Preguntas de práctica

**1.** ¿Qué herramienta se usa para descompilar un APK de Android en código Java legible?
- a) Drozer
- b) Frida
- c) JADX
- d) Burp Suite
**Respuesta:** C — JADX convierte el bytecode DEX de vuelta a código fuente Java para análisis estático.

**2.** ¿Cuál es la diferencia entre SAST y DAST en el testing de mobile security?
- a) SAST testea en runtime; DAST analiza código fuente
- b) SAST analiza código fuente/binario sin ejecución; DAST testea en runtime
- c) No hay diferencia
- d) SAST es solo para iOS; DAST es solo para Android
**Respuesta:** B — SAST inspecciona código estáticamente; DAST realiza testing conductual en runtime.

**3.** ¿Qué herramienta permite hooking e instrumentación en runtime de aplicaciones móviles?
- a) APKTool
- b) VirusTotal
- c) Frida
- d) MobSF
**Respuesta:** C — Frida inyecta scripts en procesos en ejecución para análisis dinámico y hooking.

**4.** ¿Cuál es el propósito de Burp Suite en mobile security?
- a) Ingeniería inversa de APKs
- b) Interceptar y manipular tráfico HTTP/HTTPS (análisis MITM)
- c) Analizar muestras de malware
- d) Descompilar binarios iOS
**Respuesta:** B — Burp Suite actúa como proxy interceptador para inspeccionar y modificar tráfico de apps.

**5.** ¿Por qué se deben imponer VPN y gestión de certificados en dispositivos móviles?
- a) Para aumentar la velocidad de descarga
- b) Para prevenir ataques MITM y asegurar conexiones confiables
- c) Para habilitar rastreo GPS
- d) Para permitir instalación de apps de terceros
**Respuesta:** B — Imponer VPNs y bloquear CAs instaladas por el usuario previene intercepción y suplantación de certificados.
