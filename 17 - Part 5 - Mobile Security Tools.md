# OBJETIVO 05 — DIRECTRICES Y HERRAMIENTAS DE MOBILE SECURITY

---

## MOBILE SECURITY — DEFINICIÓN BÁSICA (EXAM)

|Term|Definition|
|---|---|
|Mobile Security|La protección de dispositivos móviles, aplicaciones y datos contra amenazas, vulnerabilidades y accesos no autorizados|

MEMORY HOOK:
**Device + App + Data**

---

# OBJETIVOS DE MOBILE SECURITY (EXAM)

|Goal|
|---|
|Proteger datos sensibles|
|Prevenir accesos no autorizados|
|Detectar actividad maliciosa|
|Asegurar cumplimiento normativo|
|Mantener privacidad del usuario|

MEMORY HOOK:
**Protect, Prevent, Detect**

---

# DIRECTRICES DE MOBILE SECURITY (LISTA CEH — MEMORIZAR OBLIGATORIO)

---

## DIRECTRICES DE SEGURIDAD A NIVEL DE DISPOSITIVO

|Guideline|
|---|
|Habilitar bloqueo de pantalla fuerte|
|Usar autenticación biométrica|
|Cifrar almacenamiento del dispositivo|
|Deshabilitar USB debugging|
|Deshabilitar Bluetooth cuando no se use|
|Habilitar borrado remoto|
|Instalar actualizaciones del SO|

MEMORY HOOK:
**Lock, Encrypt, Update**

---

## DIRECTRICES DE SEGURIDAD A NIVEL DE APLICACIÓN

|Guideline|
|---|
|Instalar apps de fuentes confiables|
|Revisar permisos de la app|
|Evitar dispositivos root/jailbreak|
|Eliminar apps no utilizadas|
|Actualizar apps regularmente|

MEMORY HOOK:
**Trust source, limit permissions**

---

## DIRECTRICES DE SEGURIDAD A NIVEL DE RED

|Guideline|
|---|
|Evitar Wi-Fi público|
|Usar VPN|
|Deshabilitar auto-conexión|
|Verificar certificados SSL|

MEMORY HOOK:
**Public Wi-Fi = VPN required**

---

## DIRECTRICES DE SEGURIDAD A NIVEL DE DATOS

|Guideline|
|---|
|Cifrar datos sensibles|
|Evitar almacenamiento en texto plano|
|Usar gestión segura de claves|
|Habilitar backups seguros|

MEMORY HOOK:
**Encrypt at rest and transit**

---

# MOBILE SECURITY PARA AMBIENTES EMPRESARIALES

|Control|
|---|
|Imponer MDM|
|Aplicar containerization|
|Imponer políticas de cumplimiento|
|Monitorear posture del dispositivo|
|Restringir acceso a recursos corporativos|

MEMORY HOOK:
**Enterprise = MDM + Policy**

---

# TESTING DE MOBILE SECURITY (CONCEPTO DE EXAM)

## MOBILE APPLICATION SECURITY TESTING (MAST)

|Type|Description|
|---|---|
|Static Analysis (SAST)|Analizar código fuente/binario|
|Dynamic Analysis (DAST)|Testing en tiempo de ejecución|
|Interactive Analysis (IAST)|Enfoque combinado|

MEMORY HOOK:
**Static sees code, Dynamic sees behavior**

---

# HERRAMIENTAS DE MOBILE SECURITY (CEH ESPERA RECONOCIMIENTO)

---

## HERRAMIENTAS DE SEGURIDAD ANDROID

|Tool|Purpose|
|---|---|
|Drozer|Evaluación de seguridad de Android|
|APKTool|Ingeniería inversa de APKs|
|JADX|Descompilar DEX a Java|
|Frida|Instrumentación en runtime|
|Burp Suite|Intercepción de tráfico|
|Androguard|Análisis de malware|
|MobSF|Análisis automatizado|

MEMORY HOOK:
**Drozer probes, APKTool breaks**

---

## HERRAMIENTAS DE SEGURIDAD iOS

|Tool|Purpose|
|---|---|
|Frida|Análisis en runtime|
|Objection|Manipulación en runtime|
|iFunBox|Acceso al sistema de archivos|
|Cycript|Inspección en runtime|
|Burp Suite|Análisis MITM|
|MobSF|Análisis de apps iOS|

MEMORY HOOK:
**Frida everywhere**

---

## HERRAMIENTAS DE ANÁLISIS DE MOBILE MALWARE

|Tool|Purpose|
|---|---|
|VirusTotal|Detección de malware|
|Androguard|Análisis estático|
|MobSF|Framework automatizado|
|Cuckoo Sandbox|Análisis dinámico|

---

# VPN Y GESTIÓN DE CERTIFICADOS (EXAM)

|Control|
|---|
|Imponer certificados confiables|
|Bloquear CAs instaladas por el usuario|
|Usar VPN empresarial|
|Prevenir SSL stripping|

MEMORY HOOK:
**Bad cert = MITM**

---

# MAPEO DE ATAQUE → DEFENSA EN MOBILE SECURITY (ALTO RENDIMIENTO)

|Attack|Defense|
|---|---|
|Malware|Validación de apps + MDM|
|Smishing|Concienciación del usuario|
|MITM|VPN + TLS|
|Root/Jailbreak|Verificaciones de cumplimiento del dispositivo|
|Data leakage|Cifrado|
|Rogue Wi-Fi|Deshabilitar auto-conexión|

---

# CONCIENCIACIÓN DEL USUARIO (ÉNFASIS EN EXAM)

|Awareness Topic|
|---|
|Phishing|
|Smishing|
|Apps maliciosas|
|Actualizaciones falsas|
|Riesgos de Wi-Fi público|

MEMORY HOOK:
**Human = weakest link**

---

# ESTÁNDARES DE CUMPLIMIENTO EN MOBILE SECURITY (RECONOCIMIENTO)

|Standard|
|---|
|OWASP Mobile Top 10|
|GDPR|
|HIPAA|
|PCI DSS|

---

# MÓDULOS 17 — BLOQUE FINAL DE MEMORIA

**Mobile security protege dispositivos, apps y datos.
Las amenazas apuntan al SO, apps, redes y usuarios.
Android es abierto; iOS es controlado.
MDM impone políticas y permite acciones remotas.
Herramientas como Drozer, Frida y MobSF analizan apps.
Cifrado, actualizaciones, VPNs y concienciación son obligatorios.**

---

# MÓDULO 17 — ESTADO COMPLETO

|Item|Status|
|---|---|
|Objetivo 01|COMPLETO|
|Objetivo 02|COMPLETO|
|Objetivo 03|COMPLETO|
|Objetivo 04|COMPLETO|
|Objetivo 05|COMPLETO|
|Herramientas cubiertas|COMPLETO|
|Comandos/conceptos|COMPLETO|
|Alineación con examen|EXACTO|

---

## MÓDULO 17 COMPLETO

Has cubierto completamente **Hacking Mobile Platforms** para CEH v13.

Próximas opciones:

- Siguiente módulo de CEH (indica el número/nombre)
    
- Trampas de examen para el módulo 17
    
- Hoja de un página de ataques vs defensas móviles
    
- Ejercicio de reconocimiento de herramientas/comandos
    

---

# TARJETAS DE MEMORIA PARA EXAMEN

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

# PREGUNTAS DE PRÁCTICA

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
