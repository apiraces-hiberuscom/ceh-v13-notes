# Módulo 18 · Parte 5 — IoT and OT Countermeasures

> **Módulo 18 — IoT and OT Hacking** · Parte 5 de 5 · Contramedidas IoT (dispositivo, firmware, autenticación, red y nube) y OT (zones and conduits, DMZ, control de acceso, parcheo y monitorización), seguridad física y estándares (IEC 62443, NIST SP 800-82, OWASP IoT Top 10).

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [OBJECTIVE 05 — IoT AND OT SECURITY COUNTERMEASURES](#objective-05--iot-and-ot-security-countermeasures)
- [IOT SECURITY COUNTERMEASURES](#iot-security-countermeasures)
- [OT SECURITY COUNTERMEASURES](#ot-security-countermeasures)
- [PHYSICAL SECURITY (IOT + OT)](#physical-security-iot--ot)
- [CLOUD & BACKEND SECURITY (IOT)](#cloud--backend-security-iot)
- [SECURITY STANDARDS & FRAMEWORKS](#security-standards--frameworks)
- [COMMON DEFENSIVE TOOLS](#common-defensive-tools)
- [EXAM TRAPS 🔥](#exam-traps-high-yield)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **Device-level** — deshabilitar JTAG/UART/puertos de depuración en producción, secure boot, hardware root of trust y tamper detection.
- **Secure boot** — garantiza que solo arranque firmware de confianza (firmado).
- **Firmware signing vs encrypted firmware** — el cifrado por sí solo NO basta: el firmware debe ir firmado; además, secure OTA updates y eliminar las hardcoded credentials.
- **Autenticación** — contraseñas fuertes, certificate-based authentication, RBAC y least privilege: todo dispositivo debe autenticarse.
- **Protocol hardening** — MQTT → autenticación + TLS; CoAP → DTLS; HTTP → HTTPS.
- **Network segmentation** — IoT nunca en una red plana: segmentación, VLANs y firewalls.
- **Zones and conduits (IEC 62443)** — las zones agrupan activos con el mismo nivel de riesgo; los conduits son las rutas de comunicación controladas entre zones.
- **IT → OT** — nunca comunicación directa: DMZ como zona de amortiguamiento entre IT y OT.
- **Protocolos OT** — la mayoría no tiene seguridad nativa: Modbus → gateways seguros; DNP3 → Secure Authentication; BACnet → aislamiento de red.
- **Patching en OT** — probar parches offline, ventanas de mantenimiento y solo actualizaciones aprobadas por el fabricante ("con cuidado, no con frecuencia").
- **Monitorización en OT** — passive monitoring + anomaly detection; los controles de seguridad no deben interrumpir las operaciones.
- **Estándares** — IEC 62443 = seguridad OT ("la biblia del OT"); NIST SP 800-82 = seguridad ICS; OWASP IoT Top 10 = riesgos IoT.

---

## OBJECTIVE 05 — IoT AND OT SECURITY COUNTERMEASURES

### WHY COUNTERMEASURES ARE CRITICAL

|Reason|
|---|
|Los dispositivos IoT y OT controlan infraestructuras críticas|
|La explotación puede causar daños físicos|
|Los dispositivos son difíciles de actualizar|
|Ciclos de vida operativos largos|

> 🧠 *Para recordar:* **Seguridad débil = daño en el mundo real**

---

## IOT SECURITY COUNTERMEASURES

### DEVICE-LEVEL COUNTERMEASURES

|Countermeasure|Explanation|
|---|---|
|Disable unused interfaces — deshabilitar interfaces no utilizadas|Apagar JTAG, UART y puertos de depuración|
|Secure boot|Asegurar que solo se cargue firmware confiable|
|Hardware root of trust|Verificación criptográfica en el arranque|
|Tamper detection — detección de manipulación|Detectar intentos de acceso físico|

> 🧠 *Para recordar:* **No hay puertos de depuración en producción**

---

### FIRMWARE-LEVEL COUNTERMEASURES

|Countermeasure|Explanation|
|---|---|
|Firmware signing|Prevenir firmware no autorizado|
|Encrypted firmware|Proteger código sensible|
|Secure OTA updates|Autenticar la fuente de la actualización|
|Remove hardcoded credentials — eliminar credenciales hardcodeadas|Prevenir ataques de reutilización|

> ⚠️ *Trampa de examen:* El cifrado del firmware (encrypted firmware) por sí solo NO es suficiente sin firma (**firmware signing**).

> 🧠 *Para recordar:* **Firmware firmado + cifrado (signed + encrypted)**

---

### AUTHENTICATION & ACCESS CONTROL

|Measure|
|---|
|Contraseñas fuertes|
|Certificate-based authentication|
|Role-based access control (RBAC)|
|Least privilege — principio de mínimo privilegio|

> 🧠 *Para recordar:* **Todo dispositivo debe autenticarse**

---

### NETWORK-LEVEL IOT SECURITY

#### SEGMENTATION (HIGH YIELD)

|Measure|Purpose|
|---|---|
|Network segmentation — segmentación de red|Aislar dispositivos IoT|
|VLANs|Separación lógica|
|Firewalls|Restringir acceso|

> 🧠 *Para recordar:* **IoT nunca en red plana**

---

#### PROTOCOL HARDENING

|Protocol|Countermeasure|
|---|---|
|MQTT|Habilitar autenticación y TLS|
|CoAP|DTLS|
|HTTP|HTTPS|

> 🧠 *Para recordar:* **Los protocolos en texto plano no son seguros**

---

### MONITORING & LOGGING

|Measure|
|---|
|Intrusion detection — detección de intrusiones|
|Anomaly detection — detección de anomalías|
|Centralized logging — registro centralizado|

---

## OT SECURITY COUNTERMEASURES

### ARCHITECTURAL CONTROLS (HIGH YIELD)

#### ZONE AND CONDUIT MODEL (IEC 62443)

|Component|Purpose|
|---|---|
|Zones — zonas|Agrupar activos con los mismos requisitos de seguridad (mismo nivel de riesgo)|
|Conduits — conductos|Rutas de comunicación controladas entre zonas|

> 🧠 *Para recordar:* **Zones isolate, conduits control — las zonas aíslan, los conductos controlan**

---

### NETWORK SEGMENTATION IN OT

|Layer|Rule|
|---|---|
|IT|Expuesta a Internet|
|DMZ|Zona de amortiguamiento (buffer zone) entre IT y OT|
|OT|Aislada|

> ⚠️ *Trampa de examen:* La comunicación directa de IT a OT no es segura: debe pasar por la DMZ.

---

### ACCESS CONTROL IN OT

|Control|
|---|
|Autenticación fuerte|
|Multi-factor authentication|
|Separación de roles|
|Registro de accesos|

> 🧠 *Para recordar:* **Operadores ≠ administradores**

---

### PROTOCOL SECURITY IN OT

|Protocol|Countermeasure|
|---|---|
|Modbus|Gateways seguros|
|DNP3|DNP3 Secure Authentication — autenticación segura|
|BACnet|Aislamiento de red|

> ⚠️ *Trampa de examen:* La mayoría de los protocolos OT carecen de seguridad nativa.

---

### PATCHING & CHANGE MANAGEMENT

|Practice|
|---|
|Probar parches offline (fuera de producción)|
|Programar ventanas de mantenimiento|
|Actualizaciones aprobadas por el fabricante|

> 🧠 *Para recordar:* **Aplicar parches con cuidado, no con frecuencia**

---

### MONITORING & INCIDENT RESPONSE

|Measure|
|---|
|Passive monitoring — monitorización pasiva|
|Anomaly detection — detección de anomalías|
|Incident response plans — planes de respuesta a incidentes|

---

## PHYSICAL SECURITY (IOT + OT)

|Measure|
|---|
|Armarios cerrados con llave (locked cabinets)|
|Vigilancia (surveillance)|
|Registros de acceso (access logs)|
|Sellos antimanipulación (tamper-evident seals)|

> 🧠 *Para recordar:* **Acceso físico = compromiso total**

---

## CLOUD & BACKEND SECURITY (IOT)

|Measure|
|---|
|Autenticación de API|
|Expiración de tokens|
|Configuración segura en la nube|
|Auditorías regulares|

---

## SECURITY STANDARDS & FRAMEWORKS

|Standard|Purpose|
|---|---|
|IEC 62443|Seguridad OT/ICS (zones and conduits)|
|NIST SP 800-82|Seguridad ICS|
|OWASP IoT Top 10|Riesgos IoT|

> 🧠 *Para recordar:* **62443 = la biblia del OT**

---

## COMMON DEFENSIVE TOOLS

|Tool|
|---|
|IDS/IPS|
|SIEM|
|Firewalls|
|Herramientas de monitoreo de red|

---

## EXAM TRAPS (HIGH YIELD)

|Trap|Correct Understanding|
|---|---|
|El cifrado por sí solo es suficiente|Falso — p. ej., el firmware cifrado debe ir además firmado (firmware signing)|
|Se puede parchear OT como se hace con IT|Falso — probar offline, ventanas de mantenimiento y parches aprobados por el fabricante|
|Las redes planas son aceptables|Falso — segmentar (VLANs, firewalls, zones and conduits, DMZ)|
|Safety > security significa ignorar la ciberseguridad|Falso — se prioriza la seguridad física (safety), pero los controles de ciberseguridad siguen siendo necesarios|

---

## Flashcards

| Term | Definition |
|------|------------|
| Secure Boot | Asegura que solo se cargue firmware confiable durante el arranque del dispositivo |
| Hardware Root of Trust | Verificación criptográfica en el arranque usando hardware dedicado |
| Firmware Signing | Firma digital que previene la modificación no autorizada del firmware |
| Tamper Detection | Mecanismos que detectan intentos de acceso físico a los dispositivos |
| RBAC | Role-Based Access Control — restringe el acceso basado en roles de usuario |
| Network Segmentation | Aislar dispositivos IoT en segmentos de red separados |
| VLAN | Virtual Local Area Network — separación lógica de red |
| Zone and Conduit Model | Modelo IEC 62443 que agrupa activos por riesgo (zonas) con rutas de comunicación controladas (conductos) |
| IEC 62443 | Estándar internacional para seguridad OT/ICS |
| NIST SP 800-82 | Guía de seguridad ICS para sistemas de control industrial |
| OWASP IoT Top 10 | Lista de los 10 principales riesgos de seguridad IoT |
| Secure OTA Updates | Mecanismos autenticados de actualización de firmware over-the-air (OTA) |
| DMZ | Demilitarized zone — zona de amortiguamiento entre redes IT y OT |
| Least Privilege | Otorgar los permisos mínimos necesarios a usuarios y dispositivos |
| Passive Monitoring | Observar el tráfico de red sin interacción activa para la detección de anomalías |

---

## Preguntas de práctica

**1.** ¿Qué contramedida previene que se cargue firmware no autorizado en un dispositivo IoT?
- a) Segmentación de red
- b) Secure boot
- c) Contraseñas fuertes
- d) Registro centralizado
**Answer:** b) — El secure boot asegura que solo se cargue firmware confiable y firmado durante el arranque del dispositivo.

**2.** En el modelo de zona y conducto de IEC 62443, ¿qué son los conductos?
- a) Cables físicos que conectan dispositivos
- b) Rutas de comunicación controladas entre zonas
- c) Tipos de sensores IoT
- d) Protocolos de encriptación
**Answer:** b) — Los conductos son rutas de comunicación controladas que gestionan el flujo de datos entre zonas de seguridad.

**3.** ¿Por qué se considera insegura la comunicación directa de IT a OT?
- a) Las redes OT siempre son más rápidas
- b) Las redes IT tienen mejor encriptación
- c) Las redes OT deben estar aisladas con una zona de amortiguamiento DMZ
- d) Las redes IT no pueden conectarse a OT
**Answer:** c) — Las redes OT deben estar aisladas de IT con una zona de amortiguamiento DMZ para prevenir la exposición directa.

**4.** ¿Qué contramedida es más efectiva contra ataques al protocolo MQTT?
- a) Deshabilitar MQTT completamente
- b) Habilitar autenticación y encriptación TLS
- c) Usar solo conexiones cableadas
- d) Aumentar el ancho de banda
**Answer:** b) — MQTT debe tener la autenticación habilitada y usar TLS para prevenir el acceso no autorizado y la interceptación.

**5.** ¿Cuál es el principal desafío de seguridad al parchear sistemas OT?
- a) Los parches son demasiado costosos
- b) Los sistemas OT no pueden ser desconectados fácilmente y el tiempo de inactividad es peligroso
- c) Los sistemas OT usan diferentes sistemas operativos
- d) Los parches siempre son incompatibles
**Answer:** b) — Los sistemas OT priorizan la disponibilidad y la seguridad, haciendo que el parcheo sin conexión sea difícil y el tiempo de inactividad inaceptable.  