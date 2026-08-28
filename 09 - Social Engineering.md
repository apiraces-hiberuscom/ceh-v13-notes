# MODULE 09 — OVERVIEW (EXAM CONTEXT)

|Item|Memorize|
|---|---|
|Module Number|09|
|Module Name|Social Engineering|
|Focus|Conceptos, tipos, técnicas de ataque, ataques impulsados por IA, contramedidas|

---

## LEARNING OBJECTIVES (DO NOT SKIP — EXAM LIST)

|Objective #|Description|
|---|---|
|01|Comprender los conceptos y el ciclo de vida de social engineering|
|02|Explicar los principios de social engineering y los desencadenantes psicológicos|
|03|Identificar todos los tipos de ataques de social engineering|
|04|Describir las amenazas de social engineering impulsadas por IA|
|05|Aplicar contramedidas de social engineering|

---

# OBJECTIVE 01 — SOCIAL ENGINEERING CONCEPTS

---

## SOCIAL ENGINEERING — CORE DEFINITION

|Term|Definition|
|---|---|
|Social Engineering|Manipulación de personas para que realicen acciones o divulguen información confidencial, explotando la psicología humana en lugar de vulnerabilidades técnicas|

MEMORY HOOK:  
**Hacking humans, not machines**

---

## SOCIAL ENGINEERING LIFECYCLE (EXAM CRITICAL)

|Phase|Action|Detail|
|---|---|---|
|1. Research|Recopilar información|OSINT, redes sociales, registros públicos|
|2. Develop|Crear vector de ataque|Personalizar el pretext, elegir objetivo|
|3. Launch|Ejecutar el ataque|Entregar email, llamada o enfoque presencial|
|4. Access|Obtener entrada o datos|Credenciales, acceso físico, compromiso del sistema|
|5. Analyze|Evaluar resultados|Assess qué se obtuvo, planificar próximos pasos|

MEMORY HOOK:  
**R-D-L-A-A = "Really Devious Lying Attacker Achieves"**

EXAM TRAP:  
Las fases del ciclo de vida son secuenciales — el examen puede reordenarlas como distractores.

---

## SOCIAL ENGINEERING PRINCIPLES (CIALDINI'S 6 — VERY HIGH YIELD)

|Principle|Definition|Attack Example|
|---|---|---|
|Authority|Las personas obedecen a figuras de autoridad|El atacante se hace pasar por un CEO exigiendo una transferencia bancaria|
|Scarcity|La disponibilidad limitada impulsa la acción|"Solo quedan 2 plazas — actúa ahora"|
|Urgency|La presión del tiempo fuerza decisiones rápidas|"Cuenta suspendida — verifica en 1 hora"|
|Social Proof|Las personas siguen lo que hacen otros|"1,000 empleados ya están inscritos"|
|Likability|Las personas confían en quienes les caen bien|El atacante amistoso genera rapport antes de pedir información|
|Reciprocity|Las personas devuelven favores|"Te ayudé — ¿puedes compartir tu inicio de sesión?"|

MEMORY HOOK:  
**A-S-U-S-L-R = "A Smart Undercover Spy Leverages Rapport"**

EXAM TRAP:  
Reciprocity = hacer algo primero para que el objetivo se sienta obligado. No confundir con quid pro quo.

---

# OBJECTIVE 03 — TYPES OF SOCIAL ENGINEERING ATTACKS

---

## SOCIAL ENGINEERING ATTACKS — MASTER TABLE

|Attack|Medium|Description|Key Detail|
|---|---|---|
|Phishing|Email|Emails fraudulentos masivos que suplantan entidades confiables|Objetivo amplio, baja especificidad|
|Spear Phishing|Email|Phishing dirigido a individuos específicos|Usa información personal recopilada en la fase de Research|
|Vishing|Voice/Phone|Phishing basado en voz utilizando llamadas telefónicas|A menudo con ID de llamada falsificado|
|Smishing|SMS/Mobile|Phishing a través de SMS o mensajes de texto|Enlaces cortos, lenguaje urgente|
|Pharming|DNS/Network|Redirige tráfico al sitio web del atacante|DNS cache poisoning, modificaciones en archivos hosts|
|Baiting|Physical/Media|Deja medios infectados (USB, CDs) para que las víctimas los encuentran|Explota la curiosidad|
|Pretexting|In-person/Phone|El atacante crea un escenario fabricado (pretext) para ganar confianza|Ejemplos: soporte de TI, auditor, proveedor|
|Tailgating|Physical|Sigue a una persona autorizada a través de una puerta asegurada|No se necesita consentimiento — simplemente entra detrás|
|Piggybacking|Physical|Sigue a una persona autorizada CON consentimiento|La víctima sostiene la puerta abierta para el atacante|
|Quid Pro Quo|Phone/Email|Ofrece un servicio a cambio de datos o credenciales|"Auditoría de seguridad gratuita — solo proporciona tu inicio de sesión"|
|Honey Trap|Online/Romance|Usa atracción romántica o sexual para extraer información|Dirigido a ejecutivos, militares, gobierno|
|Watering Hole|Web|Compromete un sitio web frecuentado por el grupo objetivo|Infecta el sitio, espera a que los objetivos lo visiten|
|Diversion Theft|Physical/Logistics|Engaña al repartidor para enviar el paquete a la ubicación incorrecta|Redirige envíos o paquetes|
|Shoulder Surfing|Physical|Observa a la víctima ingresando PIN, contraseña o datos sensibles|Funciona en cafés, cajeros automáticos, aeropuertos|

---

## ADVANCED PHISHING VARIANTS (EXAM FAVORITES)

|Variant|Description|Key Detail|
|---|---|---|
|Clone Phishing|Clona un email, sitio web o contenido digital legítimo|Reemplaza enlaces/adjuntos con versiones maliciosas|
|E-wallet Phishing|Dirigido a credenciales de billetera electrónica|Páginas de inicio de sesión falsas para PayPal, Venmo, etc.|
|Tabnabbing / Reverse Tabnabbing|Dirigido a usuarios con múltiples pestañas abiertas|La pestaña inactiva se transforma silenciosamente en una página de inicio de sesión falsa|
|Consent Phishing|Explota permisos OAuth|Engaña al usuario para que otorgue acceso de aplicaciones a sus cuentas|
|Search Engine Phishing|Manipula resultados de motores de búsqueda|Sitios falsos aparecen en los primeros resultados de búsqueda|
|Angler Phishing|Cuenta falsa de redes sociales que suplanta a una organización|Publica enlaces falsos de servicio de asistencia en respuestas/comentarios|

MEMORY HOOK (ADVANCED VARIANTS):  
**C-E-T-C-S-A = "Cow Eats Tab Cookies So A"**

EXAM TRAP:  
Clone phishing utiliza un email PREVIAMENTE legítimo — no es una creación nueva.  
Tabnabbing se dirige a pestañas INACTIVAS, no activas.  
Consent phishing explota OAuth, NO contraseñas directamente.

---

## PHARMING — DEEP DIVE

|Technique|Description|
|---|---|
|DNS Cache Poisoning|Corrompe la caché del resolvedor DNS para redirigir el tráfico|
|Hosts File Modification|Modifica el archivo hosts local para apuntar dominios a la IP del atacante|
|Domain Spoofing|Registra dominios con apariencia similar|

MEMORY HOOK:  
**Pharming = "Phake DNS"**

EXAM TRAP:  
Pharming NO requiere que la víctima haga clic en un enlace — funciona a nivel de DNS/red.

---

## SPIMMING

|Item|Memorize|
|---|---|
|Spimming|Spam enviado a través de plataformas de mensajería instantánea|
|Target|Servicios de mensajería instantánea (Skype, Slack, Teams, etc.)|

---

## QRL JACKING

|Item|Memorize|
|---|---|
|QRL Jacking|Ataque a Quick Response Login (inicio de sesión basado en QR)|
|Tool|QRTiger (usado para generar códigos QR falsos)|
|Method|El atacante crea una página de phishing con un código QR falso|

---

## ELICITATION

|Item|Memorize|
|---|---|
|Elicitation|Técnica de extracción de información a través de conversación casual y despreocupada|
|Nature|Diálogo no confrontativo y natural|

MEMORY HOOK:  
**Elicitation = "Casual chat that steals data"**

---

## SOCIAL ENGINEERING TOOLS

|Tool|Use Case|Detail|
|---|---|---|
|ShellPhish|Phishing en redes sociales|Crea páginas de inicio de sesión falsas para plataformas sociales|
|Social Engineering Toolkit (SET)|Email, Web, USB attacks|Framework de ataque multi-vector|
|OhPhish|Phishing simulation|Simula campañas de phishing para capacitación|
|Netcraft|Anti-phishing toolbar|Extensión del navegador para reputación de sitios|
|PhishTank|Anti-phishing database|Base de datos comunitaria verificada de URLs de phishing|
|QRTiger|QR code generation|Usado en ataques de QRL jacking|

---

# OBJECTIVE 03 (CONTINUED) — INSIDER THREATS

---

## INSIDER THREATS — DEFINITION

|Term|Definition|
|---|---|
|Insider Threat|Riesgo de seguridad que se origina dentro de la organización — empleados, contratistas o asociados comerciales|

---

## TYPES OF INSIDER THREATS

|Type|Description|Motivation|
|---|---|---|
|Malicious Insider|Daña deliberadamente a la organización|Ganancia financiera, venganza, ideología|
|Negligent Insider|Causa incidentes de seguridad accidentalmente|Falta de capacitación, descuido|
|Compromised Insider|Cuenta o credenciales tomadas por un atacante|Participante involuntario — credenciales robadas mediante phishing|

MEMORY HOOK:  
**M-N-C = "Malicious Needs Compensation"**

EXAM TRAP:  
Compromised insider AÚN es una amenaza interna aunque no actuó intencionalmente.  
Negligent insider es el tipo MÁS COMÚN.

---

## INSIDER THREAT MOTIVATIONS

|Motivation|Description|
|---|---|
|Financial|Soborno, venta de datos, malversación|
|Revenge|Empleado descontento buscando represalias|
|Ideology|Creencias políticas o sociales|
|Curiosity|Accidental a datos fuera del alcance del puesto|
|Coercion|Forzado por un actor de amenaza externo|

---

# OBJECTIVE 04 — AI-POWERED SOCIAL ENGINEERING

---

## AI-POWERED SOCIAL ENGINEERING — CORE CONCEPT

|Term|Definition|
|---|---|
|AI-Powered Social Engineering|Usa inteligencia artificial para generar contenido falso realista (video, audio, texto) para engañar a gran escala|

MEMORY HOOK:  
**AI makes social engineering scalable and realistic**

---

## DEEPFAKES

|Item|Memorize|
|---|---|
|Deepfake|Medios sintéticos generados por IA — video o audio que imita convincentemente a una persona real|
|Use in attacks|Suplantar ejecutivos, fabricar evidencias, evadir verificación biométrica|
|Risk|Extremadamente difícil de detectar a simple vista|

---

## AI DEEPFAKE TOOLS

|Tool|Type|
|---|---|
|Synthesia|AI video generation — avatar-based|
|DeepBrain AI|AI video generation|
|Deepfakesweb|Deepfake video creation|
|Deepfake Lab|Deepfake video creation|
|Vidnaz|Deepfake video creation|
|Hoodem|Deepfake creation|

---

## AI VOICE CLONING TOOLS

|Tool|Detail|
|---|---|
|ElevenLabs|Clonación de voz de alta fidelidad|
|Resemble.AI|Clonación de voz en tiempo real|
|Murf.AI|Generación de voz con IA|
|PlayHT|Texto a voz con clonación de voz|
|VEED.IO|Herramientas de IA para video y voz|
|voice.ai|Cambiador y clonador de voz en tiempo real|

MEMORY HOOK:  
**"Eleven Labs Resembles Murf Playing at Voice"**

EXAM TRAP:  
La clonación de voz con IA puede evadir autenticación basada en voz (biometría de voz).  
Los deepfakes pueden usarse para fraude de CEO (llamada de video falsa aprobando una transferencia).

---

# OBJECTIVE 05 — SOCIAL ENGINEERING COUNTERMEASURES

---

## SOCIAL ENGINEERING COUNTERMEASURES — MASTER TABLE

|Countermeasure|Description|
|---|---|
|Security Awareness Training|Capacitación regular sobre cómo reconocer tácticas de social engineering|
|Phishing Simulations|Campañas de phishing simuladas usando herramientas como OhPhish|
|Email Filtering|Bloquear emails de phishing antes de que lleguen a los usuarios|
|Anti-Phishing Toolbars|Herramientas del navegador como Netcraft, PhishTank para advertencias en tiempo real|
|Verification Procedures|Siempre verificar la identidad a través de un canal secundario|
|Least Privilege|Limitar el acceso solo a lo necesario|
|Data Classification|Etiquetar y proteger datos sensibles|
|Incident Response Plan|Establecer procedimientos para reportar ataques sospechosos|
|Physical Security|Insignias, mantraps, controles de acceso para prevenir tailgating/piggybacking|
|Multi-Factor Authentication|Reduce el impacto de credenciales comprometidas|
|Patch Management|Previene ataques de watering hole y pharming|
|DNS Security (DNSSEC)|Previene DNS cache poisoning (pharming)|
|Content Inspection|Detectar medios deepfake usando herramientas de detección con IA|

MEMORY HOOK:  
**"Train, Simulate, Filter, Verify, Limit, Classify, Respond, Secure, Patch, DNS"**

---

## EXAM EXTRAS (Boson Practice Test)

### SPIMMING AND SMISHING

|Term|Description|
|---|---|
|Spimming|Spam enviado a través de plataformas de mensajería instantánea|
|Smishing|Phishing a través de SMS/mensajes de texto|

---

### WATERING HOLE

|Item|Memorize|
|---|---|
|Watering hole|Infectar un sitio web que los usuarios probablemente visitarán|

---

### MEDUSA AND HOOTSUITE

|Tool|Purpose|
|---|---|
|MEDUSA|Herramienta OSINT para redes sociales|
|Hootsuite|Plataforma de gestión de redes sociales|

---

### EVILGINX

|Item|Memorize|
|---|---|
|Evilginx|Herramienta MITM que suplanta un sitio web|

---

### CLICKJACKING

|Item|Memorize|
|---|---|
|Clickjacking|Técnica de iframe falsa para engañar a los usuarios|

---

### VAWTRAK

|Item|Memorize|
|---|---|
|VAWTRAK|Email disfrazado de notificación de entrega de paquete; Trojan|

---

# EXAM FLASHCARDS

---

|Term|Quick Definition|
|---|---|
|Social Engineering|Explotar la psicología humana para evadir la seguridad|
|Phishing|Emails fraudulentos masivos que suplantan entidades confiables|
|Spear Phishing|Phishing dirigido usando información personal|
|Vishing|Phishing basado en voz a través de llamadas telefónicas|
|Smishing|Phishing a través de SMS/mensajes de texto|
|Pharming|Redirección DNS a un sitio web controlado por el atacante|
|Pretexting|Escenario fabricado para ganar confianza y extraer datos|
|Tailgating|Seguir a una persona autorizada a través de una puerta asegurada sin consentimiento|
|Piggybacking|Seguir a una persona autorizada CON consentimiento|
|Quid Pro Quo|Ofrecer un servicio a cambio de credenciales|
|Baiting|Dejar medios infectados para víctimas curiosas|
|Watering Hole|Comprometer un sitio web frecuentado por el grupo objetivo|
|Diversion Theft|Redirigir entregas a la ubicación incorrecta|
|Clone Phishing|Clonar un email legítimo con reemplazos maliciosos|
|Tabnabbing|Una pestaña inactiva del navegador se transforma en una página de inicio de sesión falsa|
|Consent Phishing|Explotar OAuth para obtener permisos de cuenta|
|Deepfake|Video o audio sintético generado por IA|
|Insider Threat|Riesgo de seguridad desde dentro de la organización|
|Angler Phishing|Cuenta falsa de asistencia en redes sociales que publica enlaces maliciosos|
|QRL Jacking|Phishing a través de inicio de sesión con código QR falso|

---

# PRACTICE QUESTIONS

---

**Q1.** Un atacante llama a un empleado haciéndose pasar por soporte de TI y solicita su contraseña para "arreglar un problema remoto". ¿Qué tipo de social engineering es esto?

|Answer|
|---|
|**Vishing** — phishing basado en voz que utiliza un pretext fabricado (también está involucrado pretexting, pero el medio lo convierte en vishing) |

---

**Q2.** ¿Cuál de las siguientes redirige a un usuario a un sitio web falso SIN requerir que haga clic en un enlace?

|Answer|
|---|
|**Pharming** — funciona a través de DNS cache poisoning o modificación del archivo hosts a nivel de red |

---

**Q3.** ¿Cuál es la diferencia entre tailgating y piggybacking?

|Answer|
|---|
|**Tailgating** = seguir sin consentimiento. **Piggybacking** = seguir con consentimiento (la víctima sostiene la puerta abierta) |

---

**Q4.** Un atacante compromete un sitio web que los CFOs de la industria financiera frecuentan frecuentemente. Inyectan un keylogger en el sitio. ¿Qué ataque es este?

|Answer|
|---|
|**Watering Hole** — comprometer un sitio frecuentado por el grupo objetivo |

---

**Q5.** ¿Qué principio de Cialdini se explota cuando un atacante dice "Solo quedan 2 licencias — compra ahora"?

|Answer|
|---|
|**Scarcity** — la disponibilidad limitada impulsa la urgencia en la toma de decisiones |

---

*Fin del Module 09 — Social Engineering*