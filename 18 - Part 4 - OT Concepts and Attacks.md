# Módulo 18 · Parte 4 — OT Concepts and Attacks

> **Módulo 18 — IoT and OT Hacking** · Parte 4 de 5 · Operational Technology: OT vs IT, componentes (PLC, RTU, HMI, SCADA), Purdue Model, protocolos industriales y ataques OT (Stuxnet, Triton, BlackEnergy).

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [OBJECTIVE 04 — OT (OPERATIONAL TECHNOLOGY) CONCEPTS AND ATTACKS](#objective-04--ot-operational-technology-concepts-and-attacks)
- [WHERE OT IS USED](#where-ot-is-used)
- [CORE OT COMPONENTS 🔥](#core-ot-components-high-yield)
- [OT ARCHITECTURE 🔥](#ot-architecture-high-yield)
- [COMMON OT PROTOCOLS 🔥](#common-ot-protocols-high-yield)
- [OT THREAT LANDSCAPE](#ot-threat-landscape)
- [OT ATTACK TYPES 🔥](#ot-attack-types-high-yield)
- [FAMOUS OT ATTACKS](#famous-ot-attacks)
- [OT ATTACK FLOW](#ot-attack-flow)
- [OT SECURITY CHALLENGES 🔥](#ot-security-challenges-high-yield)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **IT vs OT** — IT prioriza confidentiality; OT prioriza availability y safety (downtime peligroso, parches raros, protocolos industriales).
- **PLC / RTU / HMI** — PLC = "cerebro industrial" (señales de sensores → comandos a actuadores); RTU = "PLC remoto" en SCADA; HMI = panel/pantalla del operador.
- **SCADA** — Supervisory Control and Data Acquisition: monitorización, control, adquisición de datos y gestión de alarmas.
- **Purdue Model (niveles)** — 0 proceso físico → 1 PLC/RTU → 2 SCADA/HMI → 3 operaciones (MES) → IDMZ → 4 business logistics (ERP) → 5 red empresarial.
- **Modbus** — sin autenticación ni cifrado por defecto: permite leer/escribir registros (TCP 502).
- **DNP3** — Distributed Network Protocol de las compañías eléctricas, sin cifrado nativo (puerto 20000).
- **BACnet / PROFIBUS / PROFINET** — BACnet = automatización de edificios y HVAC (UDP 47808); PROFIBUS = bus de campo; PROFINET = basado en Ethernet.
- **Por qué OT es vulnerable** — sistemas legacy, sin autenticación, redes planas, largo ciclo de vida y safety over security.
- **Ataques OT** — unauthorized command execution, process manipulation ("sensores que mienten"), DoS, MITM y ransomware → daño físico y paradas de planta.
- **Stuxnet** — primera ciberarma: atacó PLCs y saboteó centrifugadoras usando zero-days (ataque ciberfísico).
- **Triton/Trisis vs BlackEnergy** — Triton atacó los sistemas de seguridad (SIS), con impacto potencialmente letal; BlackEnergy atacó la red eléctrica (apagón en Ucrania).
- **OT attack flow** — compromiso de la red IT → movimiento lateral a OT → abuso de protocolos → manipulación de procesos → impacto físico.

---

## OBJECTIVE 04 — OT (OPERATIONAL TECHNOLOGY) CONCEPTS AND ATTACKS

### WHAT IS OT — CORE DEFINITION

|Term|Definition|
|---|---|
|Operational Technology (OT)|Sistemas de hardware y software utilizados para monitorear, controlar y automatizar procesos industriales físicos|

> 🧠 *Para recordar:* **OT controls the physical world**

---

### OT VS IT (HIGH YIELD)

| Aspect       | IT              | OT                    |
| ------------ | --------------- | --------------------- |
| Focus        | Datos           | Procesos físicos      |
| Priority     | Confidentiality — confidencialidad | Availability & Safety — disponibilidad y seguridad física |
| Downtime     | Tolerable       | Peligroso             |
| Patch cycles | Frecuentes      | Raros                 |
| Devices      | Servidores, PCs | PLCs, RTUs            |
| Protocols    | TCP/IP          | Protocolos industriales |

> 🧠 *Para recordar:* **IT = data, OT = safety**

> ⚠️ *Trampa de examen:* En OT, **safety** = seguridad física (personas, equipos, entorno) y **security** = ciberseguridad; en español ambas se traducen como "seguridad".

---

## WHERE OT IS USED

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

## CORE OT COMPONENTS (HIGH YIELD)

### PLC — DETAILED EXPLANATION

|Item|Explanation|
|---|---|
|PLC|Programmable Logic Controller|
|Purpose|Controlar maquinaria y procesos|
|Input|Señales de sensores|
|Output|Comandos a los actuadores|

> 🧠 *Para recordar:* **PLC = industrial brain**

---

### RTU — DETAILED EXPLANATION

|Item|Explanation|
|---|---|
|RTU|Remote Terminal Unit|
|Purpose|Monitorear y controlar sistemas remotos|
|Used in|SCADA|

> 🧠 *Para recordar:* **RTU = remote PLC**

---

### HMI — DETAILED EXPLANATION

|Item|Explanation|
|---|---|
|HMI|Human Machine Interface|
|Purpose|Interacción del operador|
|Example|Pantalla de panel de control|

> 🧠 *Para recordar:* **HMI = human control panel**

---

### SCADA — CORE DEFINITION

|Term|Definition|
|---|---|
|SCADA|Supervisory Control and Data Acquisition|

#### SCADA FUNCTIONS

- Monitoreo
- Control
- Adquisición de datos
- Gestión de alarmas (alarm handling)

> 🧠 *Para recordar:* **SCADA supervises everything**

---

## OT ARCHITECTURE (HIGH YIELD)

### PURDUE MODEL / ISA-95 — NIVELES

|Level|Description|
|---|---|
|Level 0|Physical Process — proceso físico: sensores, actuadores y demás dispositivos de campo|
|Level 1|Basic Control / Intelligent Devices — PLCs y RTUs que leen los sensores y mandan a los actuadores|
|Level 2|Control Systems (Area Supervisory Control) — SCADA, HMI, DCS|
|Level 3|Manufacturing Operations Systems (Site Operations) — MES, historian, gestión de la producción|
|Level 3.5|IDMZ (Industrial DMZ) — barrera entre la zona OT y la zona IT|
|Level 4|Business Logistics Systems — sistemas IT de negocio (ERP, planificación)|
|Level 5|Enterprise Network — red empresarial/corporativa|

> 🧠 *Para recordar:* **0 = process, 5 = business**

> ⚠️ *Trampa de examen:* Los niveles 0–5 son los del **Purdue Model** (ISA-95): Levels 0–3 = Manufacturing Zone (OT), Levels 4–5 = Enterprise Zone (IT), con la IDMZ entre ambas. ISA/IEC 62443 toma este modelo como referencia, pero lo propio de **ISA/IEC 62443** es la segmentación en **zones and conduits** (ver Parte 5).

---

## COMMON OT PROTOCOLS (HIGH YIELD)

### MODBUS — EXPLAINED

|Item|Explanation|
|---|---|
|Modbus|Protocolo de comunicación industrial|
|Security|NINGUNA por defecto (sin autenticación ni cifrado)|
|Risk|Lectura/escritura de registros|

> 🧠 *Para recordar:* **Modbus = no auth**

---

### DNP3 — EXPLAINED

|Item|Explanation|
|---|---|
|DNP3|Distributed Network Protocol|
|Used in|Compañías eléctricas (power utilities)|
|Risk|Cifrado débil o inexistente (no lleva cifrado nativo)|

---

### PROFIBUS / PROFINET

|Protocol|Use|
|---|---|
|PROFIBUS|Bus de campo (fieldbus) para comunicaciones a nivel de campo|
|PROFINET|Basado en Ethernet industrial|

---

### BACnet

|Use|
|---|
|Automatización de edificios (Building Automation and Control Networks)|
|Sistemas HVAC|

> 🧠 *Para recordar:* **Puertos OT: Modbus TCP 502 · DNP3 20000 · BACnet/IP UDP 47808**

---

## OT THREAT LANDSCAPE

### WHY OT SYSTEMS ARE VULNERABLE

|Reason|
|---|
|Sistemas legacy|
|Sin autenticación|
|Redes planas (flat networks)|
|Largo ciclo de vida|
|Safety over security — se prioriza la seguridad física sobre la ciberseguridad|

> 🧠 *Para recordar:* **Old + critical = vulnerable**

---

## OT ATTACK TYPES (HIGH YIELD)

### 1. UNAUTHORIZED COMMAND EXECUTION

|Impact|
|---|
|Daño a equipos|
|Incidentes de safety (riesgo para personas y equipos)|

---

### 2. PROCESS MANIPULATION

|Example|
|---|
|Alterar valores de sensores|
|Lecturas falsas|

> 🧠 *Para recordar:* **Lying sensors = chaos**

---

### 3. DENIAL OF SERVICE (OT)

|Impact|
|---|
|Parada de la producción|
|Daño físico|

---

### 4. MAN-IN-THE-MIDDLE (OT)

|Effect|
|---|
|Modificación de comandos|
|Manipulación de datos|

---

### 5. RANSOMWARE IN OT

|Impact|
|---|
|Parada de la planta|
|Riesgo para la safety (seguridad física)|

---

## FAMOUS OT ATTACKS

### STUXNET (HIGH YIELD)

|Feature|
|---|
|Objetivo: PLCs|
|Saboteó centrifugadoras|
|Usó zero-days|
|Primera ciberarma (cyber-weapon)|

> 🧠 *Para recordar:* **Stuxnet = cyber-physical attack**

---

### TRITON / TRISIS

|Feature|
|---|
|Objetivo: sistemas de seguridad (Safety Instrumented Systems, SIS)|
|Impacto potencialmente letal|

---

### BLACKENERGY

|Feature|
|---|
|Ataque a red eléctrica|
|Apagón en Ucrania|

---

## OT ATTACK FLOW

1. Compromiso inicial de red IT
2. Movimiento lateral hacia OT
3. Abuso de protocolos
4. Manipulación de procesos
5. Impacto físico

> 🧠 *Para recordar:* **IT breach → OT damage**

---

## OT SECURITY CHALLENGES (HIGH YIELD)

|Challenge|
|---|
|No se pueden parchear fácilmente|
|El downtime es inaceptable|
|Logging (registro de eventos) limitado|
|Sin cifrado|

---

## Flashcards

| Term | Definition |
|------|------------|
| OT | Operational Technology — hardware/software que monitorea, controla y automatiza procesos industriales físicos |
| PLC | Programmable Logic Controller — cerebro industrial que controla maquinaria y procesos |
| RTU | Remote Terminal Unit — monitorea y controla sistemas remotos en entornos SCADA |
| HMI | Human Machine Interface — panel de control del operador para interactuar con sistemas industriales |
| SCADA | Supervisory Control and Data Acquisition — sistema para monitorear y controlar procesos industriales |
| Modbus | Protocolo de comunicación industrial SIN seguridad por defecto — permite lectura/escritura de registros |
| DNP3 | Distributed Network Protocol utilizado en compañías eléctricas (power utilities); sin cifrado nativo |
| PROFIBUS | Protocolo de comunicación a nivel de campo para automatización industrial |
| PROFINET | Protocolo de comunicación industrial basado en Ethernet |
| BACnet | Protocolo para automatización de edificios y sistemas HVAC |
| Purdue Model (ISA-95) | Modelo de referencia que organiza la red OT en niveles, de Level 0 (proceso físico) a Level 5 (red empresarial), con la IDMZ entre OT e IT; ISA/IEC 62443 lo usa como referencia y segmenta en zones and conduits |
| Stuxnet | Primera ciberarma: apuntó a PLCs y saboteó centrifugadoras usando exploits zero-day |
| Triton/Trisis | Ataque que apuntó a los sistemas de seguridad (Safety Instrumented Systems, SIS) con impacto potencialmente letal |
| BlackEnergy | Ataque que apuntó a redes eléctricas, causó apagón en Ucrania |
| Process Manipulation | Alteración de valores de sensores para causar lecturas falsas y caos en sistemas OT |

---

## Preguntas de práctica

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
