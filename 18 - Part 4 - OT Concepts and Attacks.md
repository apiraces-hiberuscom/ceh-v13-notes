# OBJECTIVE 04 — OT (OPERATIONAL TECHNOLOGY) CONCEPTS AND ATTACKS

---

## WHAT IS OT — CORE DEFINITION (EXAM)

|Term|Definition|
|---|---|
|Operational Technology (OT)|Sistemas de hardware y software utilizados para monitorear, controlar y automatizar procesos industriales físicos|

MEMORY HOOK:  
**OT controls the physical world**

---

## OT VS IT (VERY HIGH-YIELD EXAM TABLE)

| Aspect       | IT              | OT                    |
| ------------ | --------------- | --------------------- |
| Focus        | Datos           | Procesos físicos      |
| Priority     | Confidencialidad| Disponibilidad y Seguridad |
| Downtime     | Tolerable       | Peligroso             |
| Patch cycles | Frecuentes      | Raros                 |
| Devices      | Servidores, PCs | PLCs, RTUs            |
| Protocols    | TCP/IP          | Protocolos industriales |

MEMORY HOOK:  
**IT = data, OT = safety**

---

# WHERE OT IS USED (EXAM CONTEXT)

|Industry|
|---|
|Centrales eléctricas|
|Tratamiento de agua|
|Petróleo y gas|
|Manufactura|
|Transporte|
|Plantas químicas|
|Smart grids|

---

# CORE OT COMPONENTS (MUST MEMORIZE)

---

## PLC — DETAILED EXPLANATION

|Item|Explanation|
|---|---|
|PLC|Programmable Logic Controller|
|Purpose|Controlar maquinaria y procesos|
|Input|Señales de sensores|
|Output|Comandos de actuadores|

MEMORY HOOK:  
**PLC = industrial brain**

---

## RTU — DETAILED EXPLANATION

|Item|Explanation|
|---|---|
|RTU|Remote Terminal Unit|
|Purpose|Monitorear y controlar sistemas remotos|
|Used in|SCADA|

MEMORY HOOK:  
**RTU = remote PLC**

---

## HMI — DETAILED EXPLANATION

|Item|Explanation|
|---|---|
|HMI|Human Machine Interface|
|Purpose|Interacción del operador|
|Example|Pantalla de panel de control|

MEMORY HOOK:  
**HMI = human control panel**

---

## SCADA — CORE DEFINITION

|Term|Definition|
|---|---|
|SCADA|Supervisory Control and Data Acquisition|

### SCADA FUNCTIONS

- Monitoreo
    
- Control
    
- Adquisición de datos
    
- Manejo de alarmas
    

MEMORY HOOK:  
**SCADA supervises everything**

---

# OT ARCHITECTURE (EXAM FAVORITE)

## ISA/IEC 62443 ZONE MODEL

|Level|Description|
|---|---|
|Level 0|Proceso físico|
|Level 1|Sensores y actuadores|
|Level 2|Sistemas de control (PLCs)|
|Level 3|Operaciones (SCADA/HMI)|
|Level 4|Sistemas IT|
|Level 5|Red empresarial|

MEMORY HOOK:  
**0 = process, 5 = business**

---

# COMMON OT PROTOCOLS (CRITICAL)

---

## MODBUS — EXPLAINED

|Item|Explanation|
|---|---|
|Modbus|Protocolo de comunicación industrial|
|Security|NINGUNO por defecto|
|Risk|Lectura/escritura de registros|

MEMORY HOOK:  
**Modbus = no auth**

---

## DNP3 — EXPLAINED

|Item|Explanation|
|---|---|
|DNP3|Distributed Network Protocol|
|Used in|Utilidades de energía|
|Risk|Cifrado débil|

---

## PROFIBUS / PROFINET

|Protocol|Use|
|---|---|
|PROFIBUS|Comunicaciones a nivel de campo|
|PROFINET|Basado en Ethernet|

---

## BACnet

|Use|
|---|
|Automatización de edificios|
|Sistemas HVAC|

---

# OT THREAT LANDSCAPE (EXAM)

---

## WHY OT SYSTEMS ARE VULNERABLE

|Reason|
|---|
|Sistemas legacy|
|Sin autenticación|
|Redes planas|
|Largo ciclo de vida|
|Seguridad sobre protección|

MEMORY HOOK:  
**Old + critical = vulnerable**

---

# OT ATTACK TYPES (MUST MEMORIZE)

---

## 1. UNAUTHORIZED COMMAND EXECUTION

|Impact|
|---|
|Daño a equipos|
|Incidentes de seguridad|

---

## 2. PROCESS MANIPULATION

|Example|
|---|
|Alterar valores de sensores|
|Lecturas falsas|

MEMORY HOOK:  
**Lying sensors = chaos**

---

## 3. DENIAL OF SERVICE (OT)

|Impact|
|---|
|Apagón de producción|
|Daño físico|

---

## 4. MAN-IN-THE-MIDDLE (OT)

|Effect|
|---|
|Modificación de comandos|
|Manipulación de datos|

---

## 5. RANSOMWARE IN OT

|Impact|
|---|
|Apagón de planta|
|Riesgo de seguridad|

---

# FAMOUS OT ATTACKS (EXAM RECOGNITION)

---

## STUXNET (VERY IMPORTANT)

|Feature|
|---|
|Objetivo: PLCs|
|Saboteó centrifugadoras|
|Usó zero-days|
|Primer ciberarma|

MEMORY HOOK:  
**Stuxnet = cyber-physical attack**

---

## TRITON / TRISIS

|Feature|
|---|
|Objetivo: sistemas de seguridad|
|Impacto potencialmente letal|

---

## BLACKENERGY

|Feature|
|---|
|Ataque a red eléctrica|
|Apagón en Ucrania|

---

# OT ATTACK FLOW (EXAM LOGIC)

1. Compromiso inicial de red IT
    
2. Movimiento lateral hacia OT
    
3. Abuso de protocolos
    
4. Manipulación de procesos
    
5. Impacto físico
    

MEMORY HOOK:  
**IT breach → OT damage**

---

# OT SECURITY CHALLENGES (EXAM TRAPS)

|Challenge|
|---|
|No se pueden parchear fácilmente|
|El downtime es inaceptable|
|Registro limitado|
|Sin cifrado|

---

# OBJECTIVE 04 — EXAM MEMORY BLOCK

**Los sistemas OT controlan procesos físicos y priorizan la disponibilidad y la seguridad.  
Usan PLCs, RTUs, HMIs y sistemas SCADA.  
Los protocolos legacy carecen de autenticación y cifrado.  
Los ataques pueden causar daño físico real en el mundo.  
Stuxnet demostró que los ciberataques pueden destruir infraestructura.**

---

## OBJECTIVE 04 — STATUS

|Item|Status|
|---|---|
|OT concepts|COMPLETE|
|PLC/RTU/HMI|COMPLETE|
|Protocols|COMPLETE|
|Attacks|COMPLETE|
|Exam alignment|EXACT|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| OT | Operational Technology — hardware/software que monitorea, controla y automatiza procesos industriales físicos |
| PLC | Programmable Logic Controller — cerebro industrial que controla maquinaria y procesos |
| RTU | Remote Terminal Unit — monitorea y controla sistemas remotos en entornos SCADA |
| HMI | Human Machine Interface — panel de control del operador para interactuar con sistemas industriales |
| SCADA | Supervisory Control and Data Acquisition — sistema para monitorear y controlar procesos industriales |
| Modbus | Protocolo de comunicación industrial SIN seguridad por defecto — permite lectura/escritura de registros |
| DNP3 | Distributed Network Protocol utilizado en utilidades de energía con cifrado débil |
| PROFIBUS | Protocolo de comunicación a nivel de campo para automatización industrial |
| PROFINET | Protocolo de comunicación industrial basado en Ethernet |
| BACnet | Protocolo para automatización de edificios y sistemas HVAC |
| ISA/IEC 62443 | Modelo de zonas que define niveles de seguridad OT desde Level 0 (proceso físico) hasta Level 5 (empresarial) |
| Stuxnet | Primer ciberarma que apuntó a PLCs, saboteó centrifugadoras usando exploits de día cero |
| Triton/Trisis | Ataque que apuntó a sistemas de seguridad con impacto potencialmente letal |
| BlackEnergy | Ataque que apuntó a redes eléctricas, causó apagón en Ucrania |
| Process Manipulation | Alteración de valores de sensores para causar lecturas falsas y caos en sistemas OT |

---

# PRACTICE QUESTIONS

**1.** En el modelo de zonas ISA/IEC 62443, ¿qué nivel representa el proceso físico?
- a) Level 0
- b) Level 2
- c) Level 3
- d) Level 5
**Answer:** a) — Level 0 es el proceso físico, mientras que Level 5 es la red empresarial.

**2.** ¿Qué protocolo industrial NO tiene seguridad por defecto y permite a los atacantes leer/escribir registros?
- a) DNP3
- b) BACnet
- c) Modbus
- d) PROFINET
**Answer:** c) — Modbus no tiene autenticación ni cifrado por defecto, lo que lo hace altamente vulnerable.

**3.** El ataque Stuxnet es significativo porque:
- a) Fue el primer ataque de ransomware
- b) Fue el primer ciberarma que causó daño físico a la infraestructura
- c) Solo apuntó a redes IT
- d) Usó ingeniería social exclusivamente
**Answer:** b) — Stuxnet fue el primer ciberarma que apuntó a PLCs y causó daño físico a centrifugadoras.

**4.** ¿Cuál es la principal diferencia entre las prioridades de IT y OT?
- a) IT prioriza la disponibilidad, OT prioriza la confidencialidad
- b) IT prioriza la confidencialidad, OT prioriza la disponibilidad y la seguridad
- c) Ambos priorizan lo mismo
- d) OT prioriza la velocidad sobre la seguridad
**Answer:** b) — IT se enfoca en la confidencialidad de datos, mientras que OT prioriza la disponibilidad y seguridad de procesos físicos.

**5.** Un atacante compromete una red IT y luego se mueve lateralmente hacia sistemas OT. ¿Cómo se llama este flujo de ataque?
- a) Ataque de cadena de suministro
- b) Movimiento lateral de IT a OT
- c) Alteración de firmware
- d) Intrusión física
**Answer:** b) — El flujo de ataque comienza con el compromiso de IT, luego el movimiento lateral hacia OT, lo que lleva a la manipulación de procesos y el impacto físico.
