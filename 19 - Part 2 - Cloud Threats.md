# Módulo 19 · Parte 2 — Cloud Threats

> **Módulo 19 — Cloud Computing** · Parte 2 de 4 · Amenazas y ataques específicos de la nube: misconfiguration, account hijacking, APIs inseguras, shared technology, ataques a metadata, VM escape, side-channel y abuso de IAM.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [OBJECTIVE 02 — CLOUD COMPUTING THREATS AND ATTACKS](#objective-02--cloud-computing-threats-and-attacks)
- [CLOUD THREAT ACTORS](#cloud-threat-actors)
- [CLOUD-SPECIFIC THREATS 🔥](#cloud-specific-threats-high-yield)
- [CLOUD ATTACK TYPES](#cloud-attack-types)
- [CLOUD IDENTITY & ACCESS ATTACKS](#cloud-identity--access-attacks)
- [CLOUD ATTACK FLOW](#cloud-attack-flow)
- [COMMON CLOUD ATTACK TOOLS](#common-cloud-attack-tools)
- [EXAM TRAPS 🔥](#exam-traps-high-yield)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **Misconfiguration** — causa nº 1 de brechas en cloud (S3 buckets públicos, almacenamiento abierto, credenciales por defecto, IAM excesivamente permisivo); la mayoría de ataques explotan errores de configuración, no vulnerabilidades.
- **Insecure interfaces and APIs** — las APIs son la superficie de ataque PRINCIPAL en cloud (cloud = API-driven).
- **Account or service hijacking** — el atacante toma la cuenta cloud (phishing, robo de credenciales) y obtiene el control total de los recursos.
- **Data breach vs data loss** — breach = acceso no autorizado (IAM débil, misconfiguration); loss = pérdida permanente (borrado accidental, ransomware).
- **Shared technology vulnerabilities** — debilidades en componentes compartidos (hypervisor) que permiten cross-tenant attacks.
- **Metadata service attack** — SSRF contra la API de metadatos de la instancia para robar credenciales y tokens.
- **Cloud malware injection** — el atacante inyecta un servicio malicioso que la nube trata como una instancia legítima.
- **VM escape vs side-channel** — VM escape = salir de la VM y comprometer el hypervisor/host (raro pero crítico); side-channel = fuga de información entre VMs co-residentes (cache timing).
- **IAM misuse / token theft** — roles con exceso de privilegios, sin MFA, credenciales de larga duración; tokens robados vía XSS, malware o SSRF.
- **Herramientas** — ScoutSuite (auditoría cloud), Prowler (evaluación de seguridad de AWS), Pacu (explotación de AWS), CloudSploit (escaneo de misconfiguration).
- **Cloud attack flow** — recon de activos → misconfiguration → explotar IAM/API → escalar privilegios → mantener acceso.
- **Trampas** — la nube no es segura por defecto, el proveedor no gestiona toda la seguridad, el cifrado no evita brechas y el auto-scaling no frena del todo un DDoS.

---

## OBJECTIVE 02 — CLOUD COMPUTING THREATS AND ATTACKS

### WHY CLOUD IS A TARGET

|Razón|
|---|
|Infraestructura compartida|
|Exposición a Internet|
|Misconfiguration (mala configuración)|
|Control de acceso débil|
|Dependencia de APIs|

> 🧠 *Para recordar:* **Shared + exposed + misconfigured**

---

## CLOUD THREAT ACTORS

|Actores de amenazas|
|---|
|External attackers — atacantes externos|
|Malicious insiders — empleados o contratistas maliciosos|
|Compromised accounts — cuentas comprometidas|
|Rogue administrators — administradores no autorizados|

---

## CLOUD-SPECIFIC THREATS (HIGH YIELD)

### DATA BREACH

|Aspecto|Explicación|
|---|---|
|Qué|Acceso no autorizado a datos sensibles|
|Causa|IAM débil, mala configuración|
|Impacto|Pérdida de datos, violación de cumplimiento|

> ⚠️ *Trampa de examen:* El proveedor cloud NO previene las data breaches automáticamente.

> 🧠 *Para recordar:* **Misconfig = data leak**

---

### DATA LOSS

|Aspecto|Explicación|
|---|---|
|Qué|Pérdida permanente de datos|
|Causa|Eliminación accidental, ransomware|
|Impacto|Interrupción del negocio|

---

### ACCOUNT OR SERVICE HIJACKING (HIGH YIELD)

|Aspecto|Explicación|
|---|---|
|Qué|El atacante obtiene el control de una cuenta cloud|
|Método|Phishing, robo de credenciales|
|Impacto|Control total de los recursos|

> 🧠 *Para recordar:* **Cuenta = las llaves del reino**

---

### INSECURE INTERFACES AND APIs

|Aspecto|Explicación|
|---|---|
|Qué|APIs cloud mal protegidas|
|Riesgo|Acceso no autorizado|
|Ejemplo|Sin autenticación, tokens débiles|

> ⚠️ *Trampa de examen:* Las APIs son la superficie de ataque PRINCIPAL en cloud.

> 🧠 *Para recordar:* **Cloud = API-driven**

---

### MISCONFIGURATION (HIGH YIELD)

|Ejemplo|
|---|
|S3 buckets públicos|
|Almacenamiento abierto|
|Credenciales predeterminadas|
|IAM excesivamente permisivo|

> 🧠 *Para recordar:* **La mayoría de brechas cloud = misconfig**

---

### MALICIOUS INSIDERS

|Aspecto|Explicación|
|---|---|
|Quién|Empleados, contratistas|
|Riesgo|Abuso de privilegios|
|Impacto|Robo de datos, sabotaje|

---

### SHARED TECHNOLOGY VULNERABILITIES

|Aspecto|Explicación|
|---|---|
|Qué|Debilidades en componentes compartidos|
|Ejemplo|Hypervisor escape (escapar del hypervisor)|
|Impacto|Cross-tenant attacks (ataques entre inquilinos)|

> 🧠 *Para recordar:* **Hardware compartido = riesgo compartido**

---

### DENIAL OF SERVICE (DoS/DDoS)

|Aspecto|Explicación|
|---|---|
|Qué|Agotamiento de recursos|
|Objetivo|Disponibilidad|
|Impacto|Interrupción del servicio|

> ⚠️ *Trampa de examen:* El auto-scaling NO detiene por completo un DDoS.

---

### ABUSE AND NEFARIOUS USE OF CLOUD SERVICES

|Ejemplo|
|---|
|Crypto mining (minería de criptomonedas)|
|Alojamiento de malware|
|Botnet C2|

> 🧠 *Para recordar:* **Cloud = infraestructura del atacante**

---

## CLOUD ATTACK TYPES

### CLOUD MALWARE INJECTION ATTACK

|Paso|
|---|
|El atacante inyecta un servicio malicioso|
|La instancia se trata como legítima|
|El malware se ejecuta|

> 🧠 *Para recordar:* **Ataque de instancia falsa**

---

### METADATA SERVICE ATTACK

|Aspecto|Explicación|
|---|---|
|Objetivo|API de metadatos cloud|
|Datos|Credenciales, tokens|
|Ejemplo|SSRF hacia metadatos|

> 🧠 *Para recordar:* **Metadata = almacén de secretos**

---

### VM ESCAPE ATTACK

|Aspecto|Explicación|
|---|---|
|Qué|Escapar de la VM|
|Objetivo|Hypervisor|
|Impacto|Compromiso del host|

> ⚠️ *Trampa de examen:* Poco frecuente, pero crítico.

---

### SIDE-CHANNEL ATTACKS

|Aspecto|Explicación|
|---|---|
|Qué|Fuga de información|
|Método|Cache timing (análisis de tiempos de caché)|
|Objetivo|VMs co-residentes|

---

## CLOUD IDENTITY & ACCESS ATTACKS

### IAM MISUSE

|Problema|
|---|
|Roles con exceso de privilegios|
|Sin MFA|
|Credenciales de larga duración|

> 🧠 *Para recordar:* **Errores de IAM = brecha**

---

### TOKEN THEFT

|Método|
|---|
|XSS|
|Malware|
|SSRF|

---

## CLOUD ATTACK FLOW

1. Reconocer activos cloud
2. Identificar mala configuración
3. Explotar IAM o API
4. Escalar privilegios
5. Mantener acceso

> 🧠 *Para recordar:* **Recon → Misconfig → IAM → Control**

---

## COMMON CLOUD ATTACK TOOLS

|Herramienta|Propósito|
|---|---|
|ScoutSuite|Auditoría de seguridad cloud|
|Prowler|Evaluación de seguridad AWS|
|Pacu|Explotación de AWS|
|CloudSploit|Escaneo de mala configuración|
|Metasploit|Explotación cloud|

---

## EXAM TRAPS (HIGH YIELD)

|Trampa|Comprensión correcta|
|---|---|
|La nube es segura por defecto|Falso|
|El proveedor se encarga de toda la seguridad|Falso|
|El cifrado (encryption) previene las brechas|Falso|
|No hace falta monitorizar|Falso|

---

## Flashcards

| Término | Definición |
|------|------------|
| Data Breach | Acceso no autorizado a datos sensibles causado por IAM débil o mala configuración |
| Data Loss | Pérdida permanente de datos debido a eliminación accidental o ransomware |
| Account Hijacking | El atacante obtiene el control de una cuenta cloud a través de phishing o robo de credenciales |
| Insecure APIs | APIs cloud mal protegidas que permiten acceso no autorizado |
| Misconfiguration | Causa más común de brechas cloud — S3 buckets públicos, almacenamiento abierto, credenciales predeterminadas |
| Malicious Insiders | Empleados o contratistas que abusan de privilegios para robo de datos o sabotaje |
| Shared Technology Vulnerabilities | Debilidades en componentes compartidos como hypervisors que permiten ataques entre inquilinos (cross-tenant) |
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

## Preguntas de práctica

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
