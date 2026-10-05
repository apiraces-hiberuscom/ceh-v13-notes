# Módulo 01 — Introduction to Ethical Hacking

> **Enfoque:** fundamentos de seguridad de la información, análisis de riesgos, marcos de trabajo (Cyber Kill Chain, MITRE ATT&CK, Diamond Model), threat intelligence, leyes, tipos de ataques y fases del pen testing.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
- [ELEMENTS OF INFORMATION SECURITY](#elements-of-information-security)
- [RISK ANALYSIS](#risk-analysis)
- [CIA TRIAD — DETAILED](#cia-triad--detailed)
- [INCIDENT RESPONSE (IR) — 9 PHASES](#incident-response-ir--9-phases)
- [HACKING METHODOLOGY — 5 STEPS](#hacking-methodology--5-steps)
- [CYBER KILL CHAIN — 7 PHASES](#cyber-kill-chain--7-phases)
- [TTPS AND ADVERSARY BEHAVIORAL IDENTIFICATION](#ttps-and-adversary-behavioral-identification)
- [IOC — INDICATORS OF COMPROMISE](#ioc--indicators-of-compromise)
- [MITRE ATT&CK FRAMEWORK](#mitre-attck-framework)
- [DIAMOND MODEL](#diamond-model)
- [INFORMATION ASSURANCE (IA)](#information-assurance-ia)
- [RISK FORMULAS](#risk-formulas)
- [CYBER THREAT INTELLIGENCE (CTI)](#cyber-threat-intelligence-cti)
- [THREAT MODELING](#threat-modeling)
- [INCIDENT MANAGEMENT](#incident-management)
- [LAWS AND STANDARDS](#laws-and-standards)
- [HACKING TERMINOLOGY](#hacking-terminology)
- [ATTACK TYPES](#attack-types)
- [PEN TEST PHASES](#pen-test-phases)
- [Extras de examen (Boson Practice Test)](#extras-de-examen-boson-practice-test)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **Elements of information security** — 5: Confidentiality, Integrity, Availability, Authenticity, Non-repudiation.
- **Integrity** — se garantiza con **hash functions** (checksums), no con cifrado.
- **ALE = SLE × ARO** — pérdida anual esperada = coste de un incidente × nº de ocurrencias al año.
- **Hacking methodology (5 fases)** — Footprinting → Scanning → Enumeration → Vulnerability Analysis → System Hacking (Gaining Access → Escalating Privileges → Maintaining Access → Clearing Logs).
- **Cyber Kill Chain (7 fases)** — Reconnaissance → Weaponization (se crea el payload) → Delivery → Exploitation → Installation → Command & Control → Actions on Objectives.
- **MITRE ATT&CK** — 14 tactics (de Reconnaissance a Impact); tactic = el porqué (objetivo), technique = el cómo; marco gratuito y sin ánimo de lucro.
- **Diamond Model** — Adversary, Capability, Infrastructure, Victim.
- **Incident Response (9 fases)** — Preparation → Recording and Assignment → Triage → Notification → Containment → Evidence Gathering → Eradication → Recovery → Post-Incident Activity.
- **Tipos de CTI** — Strategic = alto nivel para directivos; Tactical = TTPs para el personal de seguridad; Operational = ataques/campañas concretas próximas (chat rooms, redes sociales, foros); Technical = IoCs para el SOC y sus herramientas.
- **Passive vs Active attack** — passive no modifica nada (sniffing, eavesdropping) y es más difícil de detectar; active altera datos (SQL injection, DDoS).
- **Leyes** — PCI DSS = tarjetas de pago, HIPAA = salud (EE. UU.), SOX = información financiera, DMCA = copyright digital, FISMA = agencias federales de EE. UU. (NIST), DPA 2018 = Reino Unido, ISO/IEC 27001 = ISMS.
- **SIEM (p. ej. Splunk)** — herramienta para detectar y responder a incidentes, no para atacar.

---

## Objetivos de aprendizaje

|Objective #|Description|
|---|---|
|01|Comprender los elementos de la seguridad informática (CIA + Authenticity + Non-repudiation)|
|02|Explicar los conceptos de análisis de riesgos (ARO, SLE, ALE)|
|03|Describir las fases de respuesta a incidentes|
|04|Describir la metodología de hacking y la cyber kill chain|
|05|Identificar TTPs, IoCs y patrones de comportamiento de adversarios|
|06|Resumir los marcos MITRE ATT&CK y Diamond Model|
|07|Explicar information assurance y el ciclo de vida de threat intelligence|
|08|Reconocer leyes y estándares relevantes (PCI DSS, ISO 27001, HIPAA, SOX, DMCA, FISMA, DPA 2018)|
|09|Diferenciar tipos de hacking (white hat, black hat, gray hat, etc.)|
|10|Categorizar tipos de ataques (passive, active, close-in, insider, distribution)|
|11|Describir las fases de pen testing|

---

## ELEMENTS OF INFORMATION SECURITY

|Element|Definition|
|---|---|
|Confidentiality|Datos accesibles solo para personas autorizadas|
|Integrity|Prevenir cambios no autorizados para que los datos sean confiables|
|Availability|Recursos disponibles para usuarios autorizados cuando se necesitan|
|Authenticity|Garantía de que archivos, comunicaciones y transacciones son genuinos|
|Non-repudiation|Garantía de que el remitente no puede negar haber enviado un mensaje|

> 🧠 *Para recordar:* **CIA + A + N = Can I Always Authenticate? No!**

---

## RISK ANALYSIS

|Term|Definition|
|---|---|
|Risk Matrix|Herramienta para visualizar y priorizar riesgos según probabilidad e impacto|
|ARO|Annual Rate of Occurrence — frecuencia esperada de una amenaza por año|
|SLE|Single Loss Expectancy — costo de un evento de pérdida individual|
|ALE|Annualized Loss Expectancy — pérdida anual esperada de un riesgo|
|BCP|Business Continuity Plan — estrategia para mantener operaciones durante una interrupción|

### Key Formula

`ALE = SLE × ARO`

---

## CIA TRIAD — DETAILED

|Element|Security Focus|Example Controls|
|---|---|---|
|Confidentiality|Secreto, privacidad|Contraseñas, user IDs, cifrado (encryption), controles de acceso|
|Integrity|Exactitud, fiabilidad|Hash functions, checksums, control de versiones|
|Availability|Disponibilidad (uptime), acceso|Redundancia, backups, protección contra DoS, failover|

> ⚠️ *Trampa de examen:* Integrity se garantiza con **hash functions**, no con cifrado.

---

## INCIDENT RESPONSE (IR) — 9 PHASES

|Phase|Description|
|---|---|
|1. Preparation|Establecer capacidad de IR, capacitar al equipo, equipar herramientas|
|2. Recording and Assignment|Registrar el incidente y asignar responsabilidad|
|3. Triage|Evaluar la severidad y priorizar|
|4. Notification|Alertar a las partes interesadas y relevantes|
|5. Containment|Aislar el incidente para prevenir su propagación|
|6. Evidence Gathering|Recopilar datos forenses para análisis|
|7. Eradication|Eliminar la causa raíz del incidente|
|8. Recovery|Restaurar sistemas a operación normal|
|9. Post-Incident Activity|Revisar, documentar lecciones aprendidas, mejorar|

> 🧠 *Para recordar:* **Prep → Record → Triage → Notify → Contain → Evidence → Erase → Recover → Review**

---

## HACKING METHODOLOGY — 5 STEPS

|Step|Phase|Description|
|---|---|---|
|1|Footprinting|Recopilar información sobre el objetivo. Passive = sin interacción directa. Active = requiere acción.|
|2|Scanning|Identificar hosts activos, puertos abiertos, SO, arquitectura y vulnerabilidades|
|3|Enumeration|Extraer información detallada (generalmente del entorno intranet)|
|4|Vulnerability Analysis|Identificar y evaluar debilidades de seguridad|
|5|System Hacking|Obtener acceso → Escalar privilegios → Mantener acceso → Limpiar registros|

### System Hacking Sub-Steps

|Action|Description|
|---|---|
|Gaining Access|Password cracking, SQL injection|
|Escalation of Privileges|Aumentar derechos de acceso, cambiar contraseñas, eliminar archivos|
|Maintaining Access|Asegurar acceso persistente (backdoors, rootkits)|
|Clearing Logs|Ocultar el ataque alterando registros, ocultando archivos, usando túneles|

> ⚠️ *Trampa de examen:* Las herramientas **SIEM** (Security Information and Event Management) como **Splunk** se usan para detectar y responder a incidentes — no para realizar ataques.

---

## CYBER KILL CHAIN — 7 PHASES

|Phase|Description|
|---|---|
|1. Reconnaissance|Recopilar datos, identificar vulnerabilidades|
|2. Weaponization|Crear un payload malicioso usando vulnerabilidades y backdoors|
|3. Delivery|Enviar el payload al objetivo (email, USB, web)|
|4. Exploitation|Ejecutar el código entregado en el sistema objetivo|
|5. Installation|Instalar malware o backdoor en el objetivo|
|6. Command & Control (C2)|Establecer un canal para exfiltración de datos y control remoto|
|7. Actions on Objectives|Ejecutar la misión: robo de datos, destrucción, despliegue de botnets|

> 🧠 *Para recordar:* **Recon → Weapon → Deliver → Exploit → Install → C2 → Act**

---

## TTPS AND ADVERSARY BEHAVIORAL IDENTIFICATION

|Term|Definition|
|---|---|
|Tactics|Cómo opera un actor de amenazas durante las diferentes fases de un ataque (ej. patrones de comportamiento APT)|
|Techniques|Los métodos técnicos específicos utilizados (ej. herramientas para privilege escalation)|
|Procedures|Una secuencia de acciones o pasos tomados para ejecutar un ataque|

> 🧠 *Para recordar:* **TTP = cómo piensan (tactics) → qué hacen (techniques) → paso a paso (procedures)**

---

## IOC — INDICATORS OF COMPROMISE

|Indicator Type|Examples|
|---|---|
|Email Indicators|Remitentes específicos, direcciones, líneas de asunto, tipos de adjuntos|
|Network Indicators|URLs maliciosas, dominios, direcciones IP|
|Host-Based Indicators|Nombres de archivo específicos, hashes de archivos, claves de registro|
|Behavioral Indicators|Ejecución de PowerShell, ejecución de comandos remotos, comportamiento inusual de procesos|

> 🧠 *Para recordar:* **IoC = pistas que deja el atacante. Revisa: Email → Network → Host → Behavioral**

---

## MITRE ATT&CK FRAMEWORK

|Element|Description|
|---|---|
|Tactics|Por qué el atacante realiza una acción (el objetivo) — 14 tactics en total|
|Techniques|Cómo el atacante logra el objetivo|
|Sub-Techniques|Descripción de nivel más bajo del comportamiento adversarial|
|Procedures|Implementación específica o uso en el mundo real de las techniques|

### 14 Tactics

|#|Tactic|
|---|---|
|1|Reconnaissance|
|2|Resource Development|
|3|Initial Access|
|4|Execution|
|5|Persistence|
|6|Privilege Escalation|
|7|Defense Evasion|
|8|Credential Access|
|9|Discovery|
|10|Lateral Movement|
|11|Collection|
|12|Command and Control|
|13|Exfiltration|
|14|Impact|

> 🧠 *Para recordar:* **Recon → Resource → Access → Execute → Persist → Escalate → Evade → Credentials → Discover → Move → Collect → C2 → Exfil → Impact**

> ⚠️ *Trampa de examen:* MITRE ATT&CK es un marco de trabajo **gratuito y sin fines de lucro** — no es un producto comercial. Úsalo para mapear el comportamiento de adversarios de forma sistemática.

---

## DIAMOND MODEL

|Element|Question|Examples|
|---|---|---|
|Adversary|¿Quién?|Grupos APT, organizaciones de ciberdelincuentes|
|Capability|¿Qué?|Malware, exploits, ransomware|
|Infrastructure|¿Dónde?|Servidores C2, dominios maliciosos, direcciones IP|
|Victim|¿Quién es el objetivo?|Organizaciones, individuos, industrias|

> 🧠 *Para recordar:* **Diamond = Who + What + Where + Whom**

---

## INFORMATION ASSURANCE (IA)

|Definition|La IA empieza con las políticas y termina con las personas — todo lo intermedio es gestión de riesgos|
|---|---|

### IA Lifecycle

|Step|Action|
|---|---|
|1|Plan — desarrollar políticas, procesos y guías locales|
|2|Design — diseñar la estrategia de autenticación de red y de usuarios|
|3|Find problems — identificar vulnerabilidades y amenazas de la red|
|4|Get resources — identificar problemas y requisitos de recursos|
|5|Plan fixes — crear planes para los requisitos de recursos identificados|
|6|Apply controls — aplicar los controles de information assurance adecuados|
|7|Verify — certificación y acreditación|
|8|Train people — formación en information assurance|

> 🧠 *Para recordar:* **Plan → Design → Find → Fund → Fix → Apply → Verify → Train**

---

## RISK FORMULAS

|Formula|Meaning|
|---|---|
|RISK = Threats × Vulnerabilities × Impact|Ecuación estándar de riesgo|
|RISK = Threat × Vulnerability × Asset Value|Ecuación alternativa de riesgo|
|Level of RISK = Consequence × Likelihood|Cálculo de matriz de riesgo|

> ⚠️ *Trampa de examen:* El riesgo es multiplicativo — un cero en cualquier factor significa sin riesgo.

---

## CYBER THREAT INTELLIGENCE (CTI)

|Definition|Conocimiento basado en evidencia sobre amenazas que ayuda a las organizaciones a tomar mejores decisiones de seguridad|
|---|---|

### CTI Types

|Type|Audience|Purpose|
|---|---|---|
|Strategic Intelligence|Ejecutivos y alta dirección|Información de alto nivel y poco técnica: tendencias, impacto financiero, postura de riesgo, decisiones de negocio|
|Tactical Intelligence|Personal de seguridad (administradores, responsables de IT/SOC)|TTPs de los atacantes: herramientas, técnicas, procedimientos y vulnerabilidades explotadas|
|Operational Intelligence|Responsables de seguridad / Incident Response|Ataques y campañas concretas próximas contra la organización: intención, capacidad y cronograma; se obtiene de salas de chat, redes sociales, foros|
|Technical Intelligence|SOC y herramientas (SIEM, IDS, firewalls)|IoCs: IPs, hashes, dominios, URLs, firmas, muestras de malware y phishing|

> ⚠️ *Trampa de examen:* "Ataque concreto que se está preparando" o fuentes como chat rooms/redes sociales = **Operational**. TTPs = **Tactical**. IoCs = **Technical**. Visión de alto nivel para directivos = **Strategic**.

### CTI Lifecycle

|Phase|Description|
|---|---|
|1. Direction|Definir qué saber y por qué|
|2. Collection|Recopilar datos (registros, OSINT, feeds)|
|3. Processing|Limpiar, normalizar, enriquecer datos sin procesar|
|4. Analysis|Transformar datos en inteligencia accionable|
|5. Dissemination|Entregar inteligencia a las personas adecuadas|
|6. Feedback|Refinar requisitos según los resultados|

> 🧠 *Para recordar:* **Direction → Collect → Process → Analyze → Disseminate → Feedback**

---

## THREAT MODELING

|Definition|Proceso de identificar qué puede salir mal, cómo puede ser atacado, y cómo mitigarlo|
|---|---|

---

## INCIDENT MANAGEMENT

|Definition|Identificar, priorizar, analizar, resolver y mejorar el manejo de incidentes|
|---|---|

### Comparison

|Model|Phases|
|---|---|
|Incident Management|Identify → Prioritize → Analyze → Resolve → Improve|
|Incident Response|Preparation → Recording → Triage → Notification → Containment → Evidence → Eradication → Recovery → Post-Incident|

> ⚠️ *Trampa de examen:* Incident **Management** es más amplio (identify → improve). Incident **Response** es táctico (contain → recover).

---

## LAWS AND STANDARDS

|Standard / Law|Full Name|Scope|
|---|---|---|
|PCI DSS|Payment Card Industry Data Security Standard|Organizaciones que manejan datos de tarjetas de pago|
|ISO/IEC 27001|Information Security Management Framework|Marco para establecer, mantener y mejorar ISMS|
|HIPAA|Health Insurance Portability and Accountability Act|Protege información de salud identificable (EE.UU.)|
|SOX|Sarbanes-Oxley Act|Protege inversores, exige divulgaciones corporativas, incluye PCAOB (EE.UU.)|
|DMCA|Digital Millennium Copyright Act|Ley de derechos de autor de EE.UU. que protege contenido digital (DRM)|
|FISMA|Federal Information Security Management Act|Agencias federales de EE.UU. y contratistas; usa estándares NIST|
|DPA 2018|Data Protection Act 2018|Ley principal de protección de datos personales del Reino Unido|

> 🧠 *Para recordar:* **PCI = Cards, ISO = Framework, HIPAA = Health, SOX = Finance, DMCA = Copyright, FISMA = Federal, DPA = UK**

---

## HACKING TERMINOLOGY

|Term|Definition|
|---|---|
|White Hat|Hackers éticos — trabajan con permiso|
|Black Hat|Hackers maliciosos — violan la ley|
|Gray Hat|Ni completamente buenos ni malos — pueden hackear sin permiso pero no maliciosamente|
|Script Kiddies|Individuos sin habilidades que usan herramientas prefabricadas|
|Cyber Terrorists|Motivados por creencias religiosas o políticas|
|State-Sponsored|Empleados por un estado-nación para atacar a otras naciones|
|Hacktivists|Motivados por una agenda política — hacen defacement de sitios web o los inutilizan|
|Hacker Teams|Hackers hábiles que operan con sus propios recursos|
|Industrial Spies|Participan en espionaje corporativo|
|Insiders|Usuarios de confianza que ejecutan ataques desde dentro de la organización|
|Criminal Syndicates|Crimen organizado que opera para obtener ganancias financieras|
|Organized Hackers|Alquilan activos hackeados, obtienen beneficios de víctimas|

---

## ATTACK TYPES

|Type|Description|Examples|
|---|---|---|
|Passive Attack|Monitoreo sin alterar nada|Sniffing, eavesdropping|
|Active Attack|Intentos de cambiar, alterar o eliminar datos|SQL injection, DDoS, paquetes modificados|
|Close-In Attack|Físicamente cerca del objetivo|Shoulder surfing, social engineering|
|Insider Attack|Ejecutado por alguien con acceso autorizado|Empleado descontento, abuso de credenciales|
|Distribution Attack|Ocurre antes de que el sistema llegue al cliente|Hardware manipulado, cadena de suministro infectada|

> ⚠️ *Trampa de examen:* Los ataques passive = **sin modificación**, más difíciles de detectar. Los ataques active = **datos alterados**, mayor riesgo de ser descubiertos.

---

## PEN TEST PHASES

|Phase|Description|
|---|---|
|1. Preparation|Definir período de tiempo, alcance, tipos de ataque permitidos, asignaciones de equipo|
|2. Assessment|Ejecutar la prueba de penetración real|
|3. Conclusion (Post-Assessment)|Preparación del informe, hallazgos, recomendaciones|

> 🧠 *Para recordar:* **Prep → Assess → Report**

---

## Extras de examen (Boson Practice Test)

|Concepto|Qué recordar|
|---|---|
|Actions on Objectives (Cyber Kill Chain)|Fase de destrucción del sistema — ejecución de la misión final|
|SOX (Sarbanes-Oxley)|Requiere que las empresas divulguen información financiera|

### APT LIFECYCLE

|Phase|Description|
|---|---|
|1. Preparation|Identificar e investigar el objetivo|
|2. Initial Intrusion|Infiltrar el entorno del objetivo, desplegar malware|
|3. Expansion|Expandir acceso, obtener privilegios administrativos|
|4. Persistence|Crear puntos de apoyo adicionales, establecer C2|
|5. Search and Exfiltration|Localizar y exfiltrar los datos objetivo|
|6. Cleanup|Evadir detección, eliminar evidencia|

---

### THREAT INTELLIGENCE TYPES

|Type|Focus|
|---|---|
|Tactical|Tools, techniques and procedures (TTPs) y vulnerabilidades — para el personal de seguridad|
|Strategic|Visión general del panorama de amenazas, poco técnica — para directivos|
|Technical|Indicators of compromise (IoCs), muestras de malware, muestras de phishing, URLs — para SOC y herramientas|
|Operational|Ataques concretos próximos; recopila información de discusiones en línea, redes sociales, salas de chat|

---

## Flashcards

|Term|Answer|
|---|---|
|Fórmula de ALE|`ALE = SLE × ARO`|
|CIA + A + N|Confidentiality, Integrity, Availability, Authenticity, Non-repudiation|
|Integrity se garantiza con|Hash functions|
|Fases de la hacking methodology|Footprinting → Scanning → Enumeration → Vulnerability Analysis → System Hacking|
|Subpasos de System Hacking|Gaining Access → Escalating Privileges → Maintaining Access → Clearing Logs|
|Fases de la Cyber Kill Chain|Recon → Weaponize → Deliver → Exploit → Install → C2 → Act|
|Número de tactics en MITRE ATT&CK|14|
|Elementos del Diamond Model|Adversary, Capability, Infrastructure, Victim|
|Categorías de IoC|Email, Network, Host-Based, Behavioral|
|Ámbito de PCI DSS|Datos de tarjetas de pago|
|HIPAA protege|Información de salud|
|DMCA protege|Contenido digital con copyright (DRM)|
|ISO 27001 trata de|Marco para el ISMS|
|Ejemplo de passive attack|Sniffing, eavesdropping|
|Ejemplo de active attack|SQL injection, DDoS|
|CTI lifecycle|Direction → Collection → Processing → Analysis → Dissemination → Feedback|
|Fórmula de riesgo|`Risk = Threat × Vulnerability × Impact`|
|Incident Management vs IR|Management = identify→improve; IR = preparation→post-incident|
|Ejemplo de herramienta SIEM|Splunk|
|Definición de threat modeling|Identificar qué puede salir mal, cómo se puede atacar y cómo mitigarlo|

---

## Preguntas de práctica

**Q1:** ¿Cuál es la fórmula correcta para Annualized Loss Expectancy (ALE)?

> A) ALE = SLE + ARO
> B) ALE = SLE × ARO
> C) ALE = SLE / ARO
> D) ALE = SLE - ARO

**Answer: B**

---

**Q2:** ¿Qué fase de la Cyber Kill Chain implica crear un payload malicioso?

> A) Reconnaissance
> B) Weaponization
> C) Delivery
> D) Exploitation

**Answer: B**

---

**Q3:** Un atacante monitorea el tráfico de red sin modificar ningún dato. ¿Qué tipo de ataque es este?

> A) Active attack
> B) Close-in attack
> C) Passive attack
> D) Distribution attack

**Answer: C**

---

**Q4:** ¿Cuál de los siguientes NO es uno de los cinco elementos de la seguridad informática?

> A) Confidentiality
> B) Authenticity
> C) Scalability
> D) Non-repudiation

**Answer: C**

---

**Q5:** ¿Qué ley protege específicamente la información de salud identificable en los Estados Unidos?

> A) PCI DSS
> B) SOX
> C) DMCA
> D) HIPAA

**Answer: D**