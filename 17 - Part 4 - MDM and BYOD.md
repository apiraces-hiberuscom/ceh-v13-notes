# OBJECTIVE 04 — MOBILE DEVICE MANAGEMENT (MDM)

---

## MDM — CORE DEFINITION (EXAM)

|Term|Definition|
|---|---|
|Mobile Device Management (MDM)|Solución de seguridad utilizada para monitorear, gestionar y asegurar dispositivos móviles desplegados en las organizaciones|

MEMORY HOOK:  
**MDM = control + policy + enforcement**

---

## WHY MDM IS REQUIRED (EXAM CONTEXT)

|Reason|
|---|
|Entornos BYOD|
|Prevención de filtración de datos|
|Control centralizado|
|Aplicación de cumplimiento normativo|
|Pérdida o robo de dispositivos|

---

## MDM — PRIMARY OBJECTIVES (MUST MEMORIZE)

|Objective|
|---|
|Asegurar datos corporativos|
|Aplicar políticas de seguridad|
|Controlar acceso a dispositivos|
|Monitorear actividad del dispositivo|
|Habilitar acciones remotas|

MEMORY HOOK:  
**Secure, Enforce, Control, Monitor, Respond**

---

# MDM ARCHITECTURE (EXAM)

|Component|Description|
|---|---|
|MDM Server|Consola de gestión centralizada|
|MDM Agent|Instalado en el dispositivo|
|Policy Engine|Aplica las reglas|
|Communication Channel|Enlace seguro dispositivo-servidor|

MEMORY HOOK:  
**Server → Agent → Policy**

---

## MDM DEPLOYMENT MODELS (EXAM)

|Model|Description|
|---|---|
|On-Premises|Alojado internamente|
|Cloud-Based|Alojado por el proveedor|
|Hybrid|Combinación|

---

# MDM FUNCTIONALITIES (HIGH-YIELD TABLE)

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

MEMORY HOOK:  
**Enroll → Control → Enforce → Wipe**

---

# SECURITY POLICIES ENFORCED BY MDM

|Policy|
|---|
|Complejidad de contraseñas|
|Tiempo de bloqueo de pantalla|
|Aplicación de cifrado|
|Detección de jailbreak/root|
|Restricciones de aplicaciones|
|Control de uso de red|

MEMORY HOOK:  
**Password, Encrypt, Detect, Restrict**

---

## MDM — APP MANAGEMENT (EXAM)

|Feature|Description|
|---|---|
|App whitelisting|Permitir aplicaciones aprobadas|
|App blacklisting|Bloquear aplicaciones de riesgo|
|App containerization|Aislar aplicaciones corporativas|
|App updates|Actualizaciones forzadas|

MEMORY HOOK:  
**Whitelist beats blacklist**

---

# CONTAINERIZATION (EXAM FAVORITE)

## CONTAINERIZATION — DEFINITION

|Item|Memorize|
|---|---|
|Containerization|Aislar datos y aplicaciones corporativos de los datos personales en un dispositivo|

MEMORY HOOK:  
**Work separated from personal**

---

## BENEFITS OF CONTAINERIZATION

|Benefit|
|---|
|Aislamiento de datos|
|Borrado selectivo|
|Preservación de privacidad|
|Compatible con BYOD|

---

# REMOTE ACTIONS VIA MDM (EXAM)

|Action|
|---|
|Remote wipe|
|Selective wipe|
|Device lock|
|Password reset|
|Factory reset|

MEMORY HOOK:  
**Lost device = wipe**

---

# MDM SECURITY LIMITATIONS (EXAM TRAP)

|Limitation|
|---|
|No puede detener exploits de día cero|
|Dispositivos rooted/jailbroken evaden los controles|
|Depende del cumplimiento del usuario|
|Limitado contra ingeniería social|

MEMORY HOOK:  
**MDM ≠ invincible**

---

# MDM ATTACK SURFACE (IMPORTANT)

|Attack|
|---|
|Manipulación del agente|
|Bypass de políticas|
|Evasión de jailbreak|
|Perfiles maliciosos|
|Abuso de certificados|

---

# COMMON MDM SOLUTIONS (CEH EXPECTS RECOGNITION)

|Tool|
|---|
|Microsoft Intune|
|VMware Workspace ONE|
|IBM MaaS360|
|MobileIron|
|Cisco Meraki MDM|

MEMORY HOOK:  
**Intune = Microsoft**

---

# MDM VS EMM VS UEM (EXAM COMPARISON)

|Term|Scope|
|---|---|
|MDM|Gestión de dispositivos|
|EMM|Dispositivos + aplicaciones + contenido|
|UEM|Gestión unificada de endpoints|

MEMORY HOOK:  
**MDM ⊂ EMM ⊂ UEM**

---

# OBJECTIVE 04 — EXAM MEMORY BLOCK

**MDM proporciona control centralizado sobre dispositivos móviles.  
Aplica políticas de seguridad, gestiona aplicaciones y habilita acciones remotas.  
Containerization separa datos corporativos y personales.  
MDM mejora la seguridad pero no elimina todos los riesgos.**

---

## OBJECTIVE 04 — STATUS

|Item|Status|
|---|---|
|Conceptos de MDM|COMPLETADO|
|Arquitectura|COMPLETADO|
|Políticas|COMPLETADO|
|Limitaciones|COMPLETADO|
|Alineación con el examen|EXACTO|

---

# EXAM FLASHCARDS

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

# PRACTICE QUESTIONS

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
