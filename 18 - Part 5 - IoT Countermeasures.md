# OBJECTIVE 05 — IoT AND OT SECURITY COUNTERMEASURES

---

## WHY COUNTERMEASURES ARE CRITICAL (EXAM LOGIC)

|Reason|
|---|
|Los dispositivos IoT y OT controlan infraestructuras críticas|
|La explotación puede causar daños físicos|
|Los dispositivos son difíciles de actualizar|
|Ciclos de vida operativos largos|

MEMORY HOOK:  
**Seguridad débil = daño del mundo real**

---

# IOT SECURITY COUNTERMEASURES

---

## DEVICE-LEVEL COUNTERMEASURES

|Countermeasure|Explanation|
|---|---|
|Deshabilitar interfaces no utilizadas|Apagar JTAG, UART, puertos de depuración|
|Secure boot|Asegurar que solo se cargue firmware confiable|
|Hardware root of trust|Verificación criptográfica en el arranque|
|Detección de manipulación|Detectar intentos de acceso físico|

MEMORY HOOK:  
**No hay puertos de depuración en producción**

---

## FIRMWARE-LEVEL COUNTERMEASURES

|Countermeasure|Explanation|
|---|---|
|Firmware signing|Prevenir firmware no autorizado|
|Encrypted firmware|Proteger código sensible|
|Secure OTA updates|Autenticar la fuente de la actualización|
|Eliminar credenciales hardcodeadas|Prevenir ataques de reutilización|

EXAM TRAP:  
La encriptación de firmware por sí sola NO es suficiente sin firma.

MEMORY HOOK:  
**Firmware firmado + encriptado**

---

## AUTHENTICATION & ACCESS CONTROL

|Measure|
|---|
|Contraseñas fuertes|
|Certificate-based authentication|
|Role-based access control (RBAC)|
|Principio de mínimo privilegio|

MEMORY HOOK:  
**Todo dispositivo debe autenticarse**

---

## NETWORK-LEVEL IOT SECURITY

---

### SEGMENTATION (VERY IMPORTANT)

|Measure|Purpose|
|---|---|
|Segmentación de red|Aislar dispositivos IoT|
|VLANs|Separación lógica|
|Firewalls|Restringir acceso|

MEMORY HOOK:  
**IoT nunca en red plana**

---

### PROTOCOL HARDENING

|Protocol|Countermeasure|
|---|---|
|MQTT|Habilitar autenticación y TLS|
|CoAP|DTLS|
|HTTP|HTTPS|

MEMORY HOOK:  
**Los protocolos en texto plano no son seguros**

---

## MONITORING & LOGGING

|Measure|
|---|
|Detección de intrusiones|
|Detección de anomalías|
|Registro centralizado|

---

# OT SECURITY COUNTERMEASURES

---

## ARCHITECTURAL CONTROLS (EXAM FAVORITE)

---

### ZONE AND CONDUIT MODEL (IEC 62443)

|Component|Purpose|
|---|---|
|Zonas|Agrupar activos con el mismo riesgo|
|Conductos|Rutas de comunicación controladas|

MEMORY HOOK:  
**Las zonas aíslan, los conductos controlan**

---

## NETWORK SEGMENTATION IN OT

|Layer|Rule|
|---|---|
|IT|Expuesto a internet|
|DMZ|Zona de amortiguamiento|
|OT|Aislado|

EXAM TRAP:  
La comunicación directa de IT a OT no es segura.

---

## ACCESS CONTROL IN OT

|Control|
|---|
|Autenticación fuerte|
|Multi-factor authentication|
|Separación de roles|
|Registro de accesos|

MEMORY HOOK:  
**Operadores ≠ administradores**

---

## PROTOCOL SECURITY IN OT

|Protocol|Countermeasure|
|---|---|
|Modbus|Gateways seguros|
|DNP3|Autenticación segura|
|BACnet|Aislamiento de red|

EXAM TRAP:  
La mayoría de los protocolos OT carecen de seguridad nativa.

---

## PATCHING & CHANGE MANAGEMENT

|Practice|
|---|
|Probar parches sin conexión|
|Programar ventanas de mantenimiento|
|Actualizaciones aprobadas por el fabricante|

MEMORY HOOK:  
**Aplicar parches con cuidado, no con frecuencia**

---

## MONITORING & INCIDENT RESPONSE

|Measure|
|---|
|Monitoreo pasivo|
|Detección de anomalías|
|Planes de respuesta a incidentes|

---

# PHYSICAL SECURITY (IOT + OT)

| Measure              |     |
| -------------------- | --- |
| Gabinetes cerrados con llave      |     |
| Vigilancia         |     |
| Registros de acceso          |     |
| Sellos antimanipulación |     |

MEMORY HOOK:  
**Acceso físico = compromiso total**

---

# CLOUD & BACKEND SECURITY (IOT)

|Measure|
|---|
|Autenticación de API|
|Expiración de tokens|
|Configuración segura en la nube|
|Auditorías regulares|

---

# SECURITY STANDARDS & FRAMEWORKS (EXAM)

|Standard|Purpose|
|---|---|
|IEC 62443|Seguridad OT|
|NIST SP 800-82|Seguridad ICS|
|OWASP IoT Top 10|Riesgos IoT|

MEMORY HOOK:  
**62443 = la biblia del OT**

---

# COMMON DEFENSIVE TOOLS (EXAM)

|Tool|
|---|
|IDS/IPS|
|SIEM|
|Firewalls|
|Herramientas de monitoreo de red|

---

# EXAM TRAPS (VERY IMPORTANT)

|Trap|Correct Understanding|
|---|---|
|La encriptación por sí sola es suficiente|Falso|
|Se puede parchear OT como se hace con IT|Falso|
|Las redes planas son aceptables|Falso|
|Seguridad > seguridad significa ignorar la seguridad|Falso|

---

# OBJECTIVE 05 — EXAM MEMORY BLOCK

**La seguridad de IoT y OT requiere defensas en capas.  
Deshabilitar interfaces de depuración, asegurar firmware y reforzar la autenticación.  
Segmentar redes usando zonas y conductos.  
La mayoría de los protocolos OT son inseguros por defecto.  
Los controles de seguridad no deben interrumpir las operaciones.**

---

# MODULE 18 — FINAL MEMORY CHECKLIST

|Item|
|---|
|Vulnerabilidades de dispositivos IoT|
|Riesgos JTAG/UART|
|Análisis de firmware|
|Ataques MQTT/CoAP|
|Roles de PLC/RTU/HMI|
|Protocolos OT|
|Stuxnet|
|Modelo de zona y conducto|
|Contramedidas|

---

## MODULE 18 — STATUS

|Module|Status|
|---|---|
|IoT concepts|COMPLETE|
|IoT attacks|COMPLETE|
|OT concepts|COMPLETE|
|OT attacks|COMPLETE|
|Countermeasures|COMPLETE|
|Exam readiness|HIGH|

---

# EXAM FLASHCARDS

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
| Secure OTA Updates | Mecanismos de actualización de firmware autenticados por aire |
| DMZ | Demilitarized zone — zona de amortiguamiento entre redes IT y OT |
| Least Privilege | Otorgar los permisos mínimos necesarios a usuarios y dispositivos |
| Passive Monitoring | Observar el tráfico de red sin interacción activa para la detección de anomalías |

---

# PRACTICE QUESTIONS

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