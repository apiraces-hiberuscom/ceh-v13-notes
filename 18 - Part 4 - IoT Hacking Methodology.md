# OBJECTIVE 04 — OT (OPERATIONAL TECHNOLOGY) CONCEPTS AND ATTACKS

---

## WHAT IS OT — CORE DEFINITION (EXAM)

|Term|Definition|
|---|---|
|Operational Technology (OT)|Hardware and software systems used to monitor, control, and automate physical industrial processes|

MEMORY HOOK:  
**OT controls the physical world**

---

## OT VS IT (VERY HIGH-YIELD EXAM TABLE)

| Aspect       | IT              | OT                    |
| ------------ | --------------- | --------------------- |
| Focus        | Data            | Physical processes    |
| Priority     | Confidentiality | Availability & Safety |
| Downtime     | Tolerable       | Dangerous             |
| Patch cycles | Frequent        | Rare                  |
| Devices      | Servers, PCs    | PLCs, RTUs            |
| Protocols    | TCP/IP          | Industrial protocols  |

MEMORY HOOK:  
**IT = data, OT = safety**

---

# WHERE OT IS USED (EXAM CONTEXT)

|Industry|
|---|
|Power plants|
|Water treatment|
|Oil & gas|
|Manufacturing|
|Transportation|
|Chemical plants|
|Smart grids|

---

# CORE OT COMPONENTS (MUST MEMORIZE)

---

## PLC — DETAILED EXPLANATION

|Item|Explanation|
|---|---|
|PLC|Programmable Logic Controller|
|Purpose|Control machinery and processes|
|Input|Sensor signals|
|Output|Actuator commands|

MEMORY HOOK:  
**PLC = industrial brain**

---

## RTU — DETAILED EXPLANATION

|Item|Explanation|
|---|---|
|RTU|Remote Terminal Unit|
|Purpose|Monitor and control remote systems|
|Used in|SCADA|

MEMORY HOOK:  
**RTU = remote PLC**

---

## HMI — DETAILED EXPLANATION

|Item|Explanation|
|---|---|
|HMI|Human Machine Interface|
|Purpose|Operator interaction|
|Example|Control panel screen|

MEMORY HOOK:  
**HMI = human control panel**

---

## SCADA — CORE DEFINITION

|Term|Definition|
|---|---|
|SCADA|Supervisory Control and Data Acquisition|

### SCADA FUNCTIONS

- Monitoring
    
- Control
    
- Data acquisition
    
- Alarm handling
    

MEMORY HOOK:  
**SCADA supervises everything**

---

# OT ARCHITECTURE (EXAM FAVORITE)

## ISA/IEC 62443 ZONE MODEL

|Level|Description|
|---|---|
|Level 0|Physical process|
|Level 1|Sensors & actuators|
|Level 2|Control systems (PLCs)|
|Level 3|Operations (SCADA/HMI)|
|Level 4|IT systems|
|Level 5|Enterprise network|

MEMORY HOOK:  
**0 = process, 5 = business**

---

# COMMON OT PROTOCOLS (CRITICAL)

---

## MODBUS — EXPLAINED

|Item|Explanation|
|---|---|
|Modbus|Industrial communication protocol|
|Security|NONE by default|
|Risk|Read/write registers|

MEMORY HOOK:  
**Modbus = no auth**

---

## DNP3 — EXPLAINED

|Item|Explanation|
|---|---|
|DNP3|Distributed Network Protocol|
|Used in|Power utilities|
|Risk|Weak encryption|

---

## PROFIBUS / PROFINET

|Protocol|Use|
|---|---|
|PROFIBUS|Field-level comms|
|PROFINET|Ethernet-based|

---

## BACnet

|Use|
|---|
|Building automation|
|HVAC systems|

---

# OT THREAT LANDSCAPE (EXAM)

---

## WHY OT SYSTEMS ARE VULNERABLE

|Reason|
|---|
|Legacy systems|
|No authentication|
|Flat networks|
|Long lifecycle|
|Safety over security|

MEMORY HOOK:  
**Old + critical = vulnerable**

---

# OT ATTACK TYPES (MUST MEMORIZE)

---

## 1. UNAUTHORIZED COMMAND EXECUTION

|Impact|
|---|
|Equipment damage|
|Safety incidents|

---

## 2. PROCESS MANIPULATION

|Example|
|---|
|Altering sensor values|
|False readings|

MEMORY HOOK:  
**Lying sensors = chaos**

---

## 3. DENIAL OF SERVICE (OT)

|Impact|
|---|
|Production shutdown|
|Physical damage|

---

## 4. MAN-IN-THE-MIDDLE (OT)

|Effect|
|---|
|Command modification|
|Data manipulation|

---

## 5. RANSOMWARE IN OT

|Impact|
|---|
|Plant shutdown|
|Safety risk|

---

# FAMOUS OT ATTACKS (EXAM RECOGNITION)

---

## STUXNET (VERY IMPORTANT)

|Feature|
|---|
|Targeted PLCs|
|Sabotaged centrifuges|
|Used zero-days|
|First cyber-weapon|

MEMORY HOOK:  
**Stuxnet = cyber-physical attack**

---

## TRITON / TRISIS

|Feature|
|---|
|Targeted safety systems|
|Potential lethal impact|

---

## BLACKENERGY

|Feature|
|---|
|Power grid attack|
|Ukraine blackout|

---

# OT ATTACK FLOW (EXAM LOGIC)

1. Initial IT network compromise
    
2. Lateral movement to OT
    
3. Protocol abuse
    
4. Process manipulation
    
5. Physical impact
    

MEMORY HOOK:  
**IT breach → OT damage**

---

# OT SECURITY CHALLENGES (EXAM TRAPS)

|Challenge|
|---|
|Cannot patch easily|
|Downtime unacceptable|
|Limited logging|
|No encryption|

---

# OBJECTIVE 04 — EXAM MEMORY BLOCK

**OT systems control physical processes and prioritize availability and safety.  
They use PLCs, RTUs, HMIs, and SCADA systems.  
Legacy protocols lack authentication and encryption.  
Attacks can cause real-world physical damage.  
Stuxnet proved cyber attacks can destroy infrastructure.**

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
| OT | Operational Technology — hardware/software monitoring, controlling, and automating physical industrial processes |
| PLC | Programmable Logic Controller — industrial brain controlling machinery and processes |
| RTU | Remote Terminal Unit — monitors and controls remote systems in SCADA environments |
| HMI | Human Machine Interface — operator control panel for interacting with industrial systems |
| SCADA | Supervisory Control and Data Acquisition — system for monitoring and controlling industrial processes |
| Modbus | Industrial communication protocol with NO security by default — allows read/write of registers |
| DNP3 | Distributed Network Protocol used in power utilities with weak encryption |
| PROFIBUS | Field-level communication protocol for industrial automation |
| PROFINET | Ethernet-based industrial communication protocol |
| BACnet | Protocol for building automation and HVAC systems |
| ISA/IEC 62443 | Zone model defining OT security levels from Level 0 (physical process) to Level 5 (enterprise) |
| Stuxnet | First cyber-weapon targeting PLCs, sabotaged centrifuges using zero-day exploits |
| Triton/Trisis | Attack targeting safety systems with potential lethal impact |
| BlackEnergy | Attack targeting power grids, caused Ukraine blackout |
| Process Manipulation | Altering sensor values to cause false readings and chaos in OT systems |

---

# PRACTICE QUESTIONS

**1.** In the ISA/IEC 62443 zone model, which level represents the physical process?
- a) Level 0
- b) Level 2
- c) Level 3
- d) Level 5
**Answer:** a) — Level 0 is the physical process, while Level 5 is the enterprise network.

**2.** Which industrial protocol has NO security by default and allows attackers to read/write registers?
- a) DNP3
- b) BACnet
- c) Modbus
- d) PROFINET
**Answer:** c) — Modbus has no authentication or encryption by default, making it highly vulnerable.

**3.** The Stuxnet attack is significant because it:
- a) Was the first ransomware attack
- b) Was the first cyber-weapon that caused physical damage to infrastructure
- c) Only targeted IT networks
- d) Used social engineering exclusively
**Answer:** b) — Stuxnet was the first cyber-weapon that targeted PLCs and caused physical damage to centrifuges.

**4.** What is the primary difference between IT and OT priorities?
- a) IT prioritizes availability, OT prioritizes confidentiality
- b) IT prioritizes confidentiality, OT prioritizes availability and safety
- c) Both prioritize the same things
- d) OT prioritizes speed over safety
**Answer:** b) — IT focuses on data confidentiality, while OT prioritizes availability and safety of physical processes.

**5.** An attacker compromises an IT network and then moves laterally to OT systems. What is this attack flow called?
- a) Supply chain attack
- b) IT-to-OT lateral movement
- c) Firmware tampering
- d) Physical intrusion
**Answer:** b) — The attack flow starts with IT compromise, then lateral movement to OT, leading to process manipulation and physical impact.

