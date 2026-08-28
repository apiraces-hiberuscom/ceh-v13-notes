# OBJECTIVE 02 — CLOUD COMPUTING THREATS AND ATTACKS

---

## WHY CLOUD IS A TARGET (EXAM LOGIC)

|Razón|
|---|
|Infraestructura compartida|
|Exposición a Internet|
|Mala configuración|
|Control de acceso débil|
|Dependencia de APIs|

MEMORY HOOK:  
**Shared + exposed + misconfigured**

---

# CLOUD THREAT ACTORS (EXAM)

|Actores de Amenazas|
|---|
|Atacantes externos|
|Empleados maliciosos|
|Cuentas comprometidas|
|Administradores no autorizados|

---

# CLOUD-SPECIFIC THREATS (MUST MEMORIZE)

---

## DATA BREACH

|Aspecto|Explicación|
|---|---|
|Qué|Acceso no autorizado a datos sensibles|
|Causa|IAM débil, mala configuración|
|Impacto|Pérdida de datos, violación de cumplimiento|

EXAM TRAP:  
Cloud provider does NOT prevent data breaches automatically.

MEMORY HOOK:  
**Misconfig = data leak**

---

## DATA LOSS

|Aspecto|Explicación|
|---|---|
|Qué|Pérdida permanente de datos|
|Causa|Eliminación accidental, ransomware|
|Impacto|Interrupción del negocio|

---

## ACCOUNT OR SERVICE HIJACKING (VERY IMPORTANT)

|Aspecto|Explicación|
|---|---|
|Qué|El atacante obtiene el control de una cuenta cloud|
|Método|Phishing, robo de credenciales|
|Impacto|Control total de los recursos|

MEMORY HOOK:  
**Account = keys to kingdom**

---

## INSECURE INTERFACES AND APIs

|Aspecto|Explicación|
|---|---|
|Qué|APIs cloud mal protegidas|
|Riesgo|Acceso no autorizado|
|Ejemplo|Sin autenticación, tokens débiles|

EXAM TRAP:  
APIs are the PRIMARY cloud attack surface.

MEMORY HOOK:  
**Cloud = API-driven**

---

## MISCONFIGURATION (TOP EXAM ITEM)

|Ejemplo|
|---|
|S3 buckets públicos|
|Almacenamiento abierto|
|Credenciales predeterminadas|
|IAM excesivamente permisivo|

MEMORY HOOK:  
**Most cloud breaches = misconfig**

---

## MALICIOUS INSIDERS

|Aspecto|Explicación|
|---|---|
|Quién|Empleados, contratistas|
|Riesgo|Abuso de privilegios|
|Impacto|Robo de datos, sabotaje|

---

## SHARED TECHNOLOGY VULNERABILITIES

|Aspecto|Explicación|
|---|---|
|Qué|Debilidades en componentes compartidos|
|Ejemplo|Escapar del hypervisor|
|Impacto|Ataques entre inquilinos|

MEMORY HOOK:  
**Shared hardware = shared risk**

---

## DENIAL OF SERVICE (DoS/DDoS)

|Aspecto|Explicación|
|---|---|
|Qué|Agotamiento de recursos|
|Objetivo|Disponibilidad|
|Impacto|Interrupción del servicio|

EXAM TRAP:  
Auto-scaling does NOT stop DDoS completely.

---

## ABUSE AND NEFARIOUS USE OF CLOUD SERVICES

|Ejemplo|
|---|
|Minería de criptomonedas|
|Alojamiento de malware|
|Botnet C2|

MEMORY HOOK:  
**Cloud = attacker infrastructure**

---

# CLOUD ATTACK TYPES (DETAILED)

---

## CLOUD MALWARE INJECTION ATTACK

|Paso|
|---|
|El atacante inyecta un servicio malicioso|
|La instancia se trata como legítima|
|El malware se ejecuta|

MEMORY HOOK:  
**Fake instance attack**

---

## METADATA SERVICE ATTACK

|Aspecto|Explicación|
|---|---|
|Objetivo|API de metadatos cloud|
|Datos|Credenciales, tokens|
|Ejemplo|SSRF hacia metadatos|

MEMORY HOOK:  
**Metadata = secret store**

---

## VM ESCAPE ATTACK

|Aspecto|Explicación|
|---|---|
|Qué|Escapar de la VM|
|Objetivo|Hypervisor|
|Impacto|Compromiso del host|

EXAM TRAP:  
Rare but critical.

---

## SIDE-CHANNEL ATTACKS

|Aspecto|Explicación|
|---|---|
|Qué|Fuga de información|
|Método|Análisis de tiempo de caché|
|Objetivo|VMs co-residentes|

---

# CLOUD IDENTITY & ACCESS ATTACKS

---

## IAM MISUSE

|Problema|
|---|
|Roles con exceso de privilegios|
|Sin MFA|
|Credenciales de larga duración|

MEMORY HOOK:  
**IAM mistakes = breach**

---

## TOKEN THEFT

|Método|
|---|
|XSS|
|Malware|
|SSRF|

---

# CLOUD ATTACK FLOW (EXAM LOGIC)

1. Reconocer activos cloud
    
2. Identificar mala configuración
    
3. Explotar IAM o API
    
4. Escalar privilegios
    
5. Mantener acceso
    

MEMORY HOOK:  
**Recon → Misconfig → IAM → Control**

---

# COMMON CLOUD ATTACK TOOLS (EXAM)

|Herramienta|Propósito|
|---|---|
|ScoutSuite|Auditoría de seguridad cloud|
|Prowler|Evaluación de seguridad AWS|
|Pacu|Explotación de AWS|
|CloudSploit|Escaneo de mala configuración|
|Metasploit|Explotación cloud|

---

# EXAM TRAPS (VERY IMPORTANT)

|Trampa|Comprensión Correcta|
|---|---|
|Cloud is secure by default|Falso|
|Provider handles all security|Falso|
|Encryption prevents breaches|Falso|
|No need for monitoring|Falso|

---

# OBJECTIVE 02 — EXAM MEMORY BLOCK

**Las amenazas cloud surgen principalmente de la mala configuración, IAM débil y APIs inseguras.  
El secuestro de cuentas lleva a un compromiso total.  
La mayoría de los ataques explotan errores de configuración en lugar de vulnerabilidades.  
La infraestructura compartida introduce riesgos únicos.**

---

## STATUS

|Objetivo|Estado|
|---|---|
|Cloud threats|COMPLETADO|
|Attack types|COMPLETADO|
|Tools|COMPLETADO|
|Exam readiness|ALTO|

---

# EXAM FLASHCARDS

| Término | Definición |
|------|------------|
| Data Breach | Acceso no autorizado a datos sensibles causado por IAM débil o mala configuración |
| Data Loss | Pérdida permanente de datos debido a eliminación accidental o ransomware |
| Account Hijacking | El atacante obtiene el control de una cuenta cloud a través de phishing o robo de credenciales |
| Insecure APIs | APIs cloud mal protegidas que permiten acceso no autorizado |
| Misconfiguration | Causa más común de brechas cloud — S3 buckets públicos, almacenamiento abierto, credenciales predeterminadas |
| Malicious Insiders | Empleados o contratistas que abusan de privilegios para robo de datos o sabotaje |
| Shared Technology Vulnerabilities | Debilidades en componentes compartidos como hypervisores que permiten ataques entre inquilinos |
| Hypervisor Escape | Escapar de una VM para comprometer el sistema host |
| Cloud Malware Injection | Inyección de servicio malicioso que aparece como instancia legítima |
| Metadata Service Attack | Explotación de SSRF para acceder a endpoints de metadatos cloud que contienen credenciales |
| VM Escape Attack | Ataque raro pero crítico que escapa de los límites de la máquina virtual |
| Side-Channel Attack | Fuga de información a través de análisis de tiempo de caché o análisis de energía en VMs co-residentes |
| IAM Misuse | Roles con exceso de privilegios, MFA ausente, credenciales de larga duración |
| Token Theft | Robo de tokens cloud a través de XSS, malware o SSRF |
| ScoutSuite | Herramienta de auditoría de seguridad cloud |
| Prowler | Herramienta de evaluación de seguridad AWS |
| Pacu | Framework de explotación de AWS |

---

# PRACTICE QUESTIONS

**1.** ¿Cuál es la causa más común de brechas de datos en cloud?
- a) Robo físico de servidores
- b) Mala configuración de servicios cloud
- c) Fallo de hardware
- d) Desastres naturales
**Respuesta:** b) — La mala configuración, como S3 buckets públicos e IAM excesivamente permisivo, es la causa principal de brechas en cloud.

**2.** Un atacante explota SSRF para acceder al servicio de metadatos cloud y extraer credenciales de la instancia. ¿Qué tipo de ataque es este?
- a) Side-channel attack
- b) VM escape attack
- c) Metadata service attack
- d) Cloud malware injection
**Respuesta:** c) — Los metadata service attacks utilizan SSRF para consultar endpoints internos que contienen credenciales y tokens.

**3.** ¿Qué herramienta está diseñada específicamente para la explotación de AWS?
- a) ScoutSuite
- b) CloudSploit
- c) Pacu
- d) Metasploit
**Respuesta:** c) — Pacu es un framework de explotación de AWS, mientras que ScoutSuite es para auditoría y CloudSploit para escaneo.

**4.** ¿Por qué se consideran las APIs como la superficie principal de ataque en cloud?
- a) Las APIs siempre están sin cifrar
- b) Cloud es completamente impulsado por APIs, y una protección deficiente conduce a acceso no autorizado
- c) Las APIs son más lentas que las conexiones directas
- d) Las APIs no se pueden monitorear
**Respuesta:** b) — Los servicios cloud se acceden a través de APIs, convirtiéndolas en el vector de ataque principal cuando están mal protegidas.

**5.** ¿Qué es una vulnerabilidad de tecnología compartida en cloud computing?
- a) Usar la misma contraseña en todos los servicios
- b) Debilidades en componentes compartidos como hypervisores que permiten ataques entre inquilinos
- c) Compartir archivos con colegas
- d) Usar Wi-Fi público
**Respuesta:** b) — Las vulnerabilidades de tecnología compartida explotan debilidades en hypervisores o infraestructura compartida que afectan a múltiples inquilinos.
