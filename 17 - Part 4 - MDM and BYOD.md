# Módulo 17 · Parte 4 — MDM and BYOD

> **Módulo 17 — Hacking Mobile Platforms** · Parte 4 de 5 · Mobile Device Management en entornos BYOD: objetivos, arquitectura, funcionalidades y políticas, containerization, acciones remotas, limitaciones y MDM vs EMM vs UEM.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [OBJECTIVE 04 — MOBILE DEVICE MANAGEMENT (MDM)](#objective-04--mobile-device-management-mdm)
- [MDM ARCHITECTURE](#mdm-architecture)
- [MDM FUNCTIONALITIES 🔥](#mdm-functionalities-high-yield)
- [SECURITY POLICIES ENFORCED BY MDM](#security-policies-enforced-by-mdm)
- [CONTAINERIZATION 🔥](#containerization-high-yield)
- [REMOTE ACTIONS VIA MDM](#remote-actions-via-mdm)
- [MDM SECURITY LIMITATIONS 🔥](#mdm-security-limitations-high-yield)
- [MDM ATTACK SURFACE 🔥](#mdm-attack-surface-high-yield)
- [COMMON MDM SOLUTIONS](#common-mdm-solutions)
- [MDM VS EMM VS UEM](#mdm-vs-emm-vs-uem)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **MDM (Mobile Device Management)** — monitoriza, gestiona y asegura los móviles de la organización: control + policy + enforcement.
- **MDM architecture** — MDM Server (consola central) → MDM Agent (en el dispositivo) → Policy Engine (aplica las reglas), unidos por un Communication Channel seguro.
- **Deployment models** — On-Premises (interno), Cloud-Based (proveedor), Hybrid.
- **Funcionalidades** — device enrollment, policy enforcement, app management, content control, remote wipe/lock, location tracking, compliance monitoring.
- **Containerization** — aísla datos y apps corporativos de los personales; permite selective wipe y es BYOD-friendly.
- **Remote wipe vs Selective wipe** — remote wipe borra todo el dispositivo; selective wipe solo los datos corporativos y conserva los personales.
- **App whitelisting vs blacklisting** — whitelisting solo permite apps aprobadas (más seguro, "whitelist beats blacklist"); blacklisting bloquea apps de riesgo conocidas.
- **Jailbreak/root detection** — política MDM que detecta y marca/bloquea dispositivos comprometidos.
- **MDM limitations (EXAM TRAP)** — no detiene zero-days ni ingeniería social; los dispositivos rooted/jailbroken evaden los controles; depende de que el usuario cumpla.
- **MDM ⊂ EMM ⊂ UEM** — MDM = dispositivos; EMM = dispositivos + apps + contenido; UEM = todos los endpoints (móvil, escritorio, IoT).
- **MDM solutions** — Microsoft Intune (MDM cloud de Microsoft), VMware Workspace ONE, IBM MaaS360, MobileIron, Cisco Meraki MDM.

---

## OBJECTIVE 04 — MOBILE DEVICE MANAGEMENT (MDM)

### MDM — CORE DEFINITION

|Term|Definition|
|---|---|
|Mobile Device Management (MDM)|Solución de seguridad utilizada para monitorear, gestionar y asegurar dispositivos móviles desplegados en las organizaciones|

> 🧠 *Para recordar:* **MDM = control + policy + enforcement**

---

### WHY MDM IS REQUIRED

|Reason|
|---|
|Entornos BYOD|
|Prevención de fuga de datos (data leakage prevention)|
|Control centralizado|
|Aplicación del cumplimiento normativo (compliance enforcement)|
|Pérdida o robo de dispositivos|

---

### MDM — PRIMARY OBJECTIVES (HIGH YIELD)

|Objective|
|---|
|Secure corporate data — asegurar los datos corporativos|
|Enforce security policies — aplicar políticas de seguridad|
|Control device access — controlar el acceso a los dispositivos|
|Monitor device activity — monitorizar la actividad del dispositivo|
|Enable remote actions — habilitar acciones remotas (Respond)|

> 🧠 *Para recordar:* **Secure, Enforce, Control, Monitor, Respond**

---

## MDM ARCHITECTURE

|Component|Description|
|---|---|
|MDM Server|Consola de gestión centralizada|
|MDM Agent|Instalado en el dispositivo|
|Policy Engine|Aplica las reglas|
|Communication Channel|Enlace seguro dispositivo-servidor|

> 🧠 *Para recordar:* **Server → Agent → Policy**

---

### MDM DEPLOYMENT MODELS

|Model|Description|
|---|---|
|On-Premises|Alojado internamente|
|Cloud-Based|Alojado por el proveedor|
|Hybrid|Combinación|

---

## MDM FUNCTIONALITIES (HIGH YIELD)

|Function|Description|
|---|---|
|Device enrollment|Registra el dispositivo|
|Policy enforcement|Contraseñas, cifrado|
|App management|Whitelisting/blacklisting|
|Content control|Reglas de acceso a datos|
|Remote wipe|Borra datos|
|Remote lock|Bloquea el dispositivo|
|Location tracking|Basado en GPS|
|Compliance monitoring|Violaciones de políticas|

> 🧠 *Para recordar:* **Enroll → Control → Enforce → Wipe**

---

## SECURITY POLICIES ENFORCED BY MDM

|Policy|
|---|
|Password complexity — complejidad de contraseñas|
|Screen lock timeout — tiempo de bloqueo de pantalla|
|Encryption enforcement — cifrado obligatorio|
|Jailbreak/root detection — detección de jailbreak/root|
|App restrictions — restricciones de aplicaciones|
|Network usage control — control del uso de la red|

> 🧠 *Para recordar:* **Password, Encrypt, Detect, Restrict**

---

### MDM — APP MANAGEMENT

|Feature|Description|
|---|---|
|App whitelisting|Permitir aplicaciones aprobadas|
|App blacklisting|Bloquear aplicaciones de riesgo|
|App containerization|Aislar aplicaciones corporativas|
|App updates|Actualizaciones forzadas|

> 🧠 *Para recordar:* **Whitelist beats blacklist**

---

## CONTAINERIZATION (HIGH YIELD)

### CONTAINERIZATION — DEFINITION

|Item|Memorize|
|---|---|
|Containerization|Aislar datos y aplicaciones corporativos de los datos personales en un dispositivo|

> 🧠 *Para recordar:* **Work separated from personal**

---

### BENEFITS OF CONTAINERIZATION

|Benefit|
|---|
|Aislamiento de datos (data isolation)|
|Borrado selectivo (selective wipe)|
|Preservación de la privacidad|
|Compatible con BYOD (BYOD-friendly)|

---

## REMOTE ACTIONS VIA MDM

|Action|
|---|
|Remote wipe|
|Selective wipe|
|Device lock|
|Password reset|
|Factory reset|

> 🧠 *Para recordar:* **Lost device = wipe**

---

## MDM SECURITY LIMITATIONS (HIGH YIELD)

|Limitation|
|---|
|No puede detener zero-day exploits (exploits de día cero)|
|Los dispositivos rooted/jailbroken evaden los controles|
|Depende de que el usuario cumpla las políticas (user compliance)|
|Limitado contra la ingeniería social|

> 🧠 *Para recordar:* **MDM ≠ invincible**

---

## MDM ATTACK SURFACE (HIGH YIELD)

|Attack|
|---|
|Agent tampering — manipulación del agente MDM|
|Policy bypass — eludir las políticas|
|Jailbreak evasion — evadir la detección de jailbreak|
|Malicious profiles — perfiles maliciosos|
|Certificate abuse — abuso de certificados|

---

## COMMON MDM SOLUTIONS

|Tool|
|---|
|Microsoft Intune|
|VMware Workspace ONE|
|IBM MaaS360|
|MobileIron|
|Cisco Meraki MDM|

> 🧠 *Para recordar:* **Intune = Microsoft**

---

## MDM VS EMM VS UEM

|Term|Scope|
|---|---|
|MDM|Gestión de dispositivos|
|EMM|Dispositivos + aplicaciones + contenido|
|UEM|Gestión unificada de endpoints|

> 🧠 *Para recordar:* **MDM ⊂ EMM ⊂ UEM**

---

## Flashcards

| Term | Definition |
|------|------------|
| MDM | Mobile Device Management; solución centralizada para monitorear, gestionar y asegurar dispositivos móviles |
| BYOD | Bring Your Own Device; dispositivos propiedad del empleado utilizados para trabajo corporativo |
| Containerization | Aislar datos/aplicaciones corporativos de datos personales en un dispositivo compartido |
| Remote Wipe | Borrar todos los datos de un dispositivo perdido o robado remotamente |
| Selective Wipe | Borrar solo los datos corporativos preservando los datos personales |
| App Whitelisting | Permitir solo aplicaciones pre-aprobadas en dispositivos gestionados |
| App Blacklisting | Bloquear aplicaciones conocidas como riesgo o no autorizadas |
| EMM | Enterprise Mobility Management; extiende MDM para incluir aplicaciones y contenido |
| UEM | Unified Endpoint Management; gestiona todos los tipos de endpoints (móviles, de escritorio, IoT) |
| Jailbreak/Root Detection | Función de MDM que identifica y marca dispositivos comprometidos |
| Compliance Monitoring | Rastreo de dispositivos para asegurar que cumplan con las políticas de seguridad |
| MDM Agent | Software instalado en dispositivos móviles que se comunica con el servidor MDM |
| Policy Engine | Componente de MDM que aplica reglas de seguridad en dispositivos inscritos |
| Intune | Solución MDM basada en la nube de Microsoft |

---

## Preguntas de práctica

**1.** ¿Cuál es el propósito principal de containerization en MDM?
- a) Aumentar el almacenamiento del dispositivo
- b) Aislar datos corporativos de datos personales en un dispositivo BYOD
- c) Acelerar las conexiones de red
- d) Habilitar el acceso de escritorio remoto
**Answer:** B — Containerization separa los datos de trabajo y personales, permitiendo el borrado selectivo sin afectar archivos personales.

**2.** ¿Qué función de MDM permite borrar solo los datos corporativos de un dispositivo?
- a) Remote wipe
- b) Selective wipe
- c) Factory reset
- d) Device lock
**Answer:** B — Selective wipe solo apunta a los datos corporativos, preservando el contenido personal del usuario.

**3.** ¿Qué sucede cuando un dispositivo rooted o jailbroken se conecta a una red inscrita en MDM?
- a) El dispositivo se repara automáticamente
- b) MDM detecta el compromiso y puede bloquear el acceso o marcar el dispositivo
- c) El dispositivo obtiene privilegios elevados
- d) MDM se deshabilita automáticamente
**Answer:** B — Las soluciones MDM incluyen detección de jailbreak/root para aplicar el cumplimiento y restringir el acceso.

**4.** ¿Cómo se relacionan MDM, EMM y UEM entre sí?
- a) Son soluciones idénticas
- b) MDM ⊂ EMM ⊂ UEM (cada una es un superconjunto de la anterior)
- c) UEM ⊂ EMM ⊂ MDM
- d) Abordan áreas completamente diferentes
**Answer:** B — MDM gestiona dispositivos; EMM añade aplicaciones y contenido; UEM unifica toda la gestión de endpoints.

**5.** ¿Por qué MDM por sí solo NO puede eliminar todos los riesgos de seguridad móvil?
- a) MDM es demasiado costoso
- b) No puede detener exploits de día cero, ingeniería social o dispositivos completamente comprometidos
- c) MDM solo funciona en iOS
- d) MDM no soporta cifrado
**Answer:** B — MDM tiene limitaciones contra exploits de día cero, ingeniería social y dispositivos con bypass de root/jailbreak.
