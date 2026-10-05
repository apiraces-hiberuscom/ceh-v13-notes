# Módulo 19 · Parte 3 — Cloud Attacks

> **Módulo 19 — Cloud Computing** · Parte 3 de 4 · Técnicas y herramientas de ataque a la nube: recon y enumeración de storage, ataques a IAM y al metadata service, VMs y contenedores, APIs, evasión de logs y herramientas para AWS, Azure y GCP.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [OBJECTIVE 03 — CLOUD COMPUTING ATTACK TOOLS AND TECHNIQUES](#objective-03--cloud-computing-attack-tools-and-techniques)
- [CLOUD RECONNAISSANCE TECHNIQUES](#cloud-reconnaissance-techniques)
- [CLOUD MISCONFIGURATION DISCOVERY 🔥](#cloud-misconfiguration-discovery-high-yield)
- [CLOUD EXPLOITATION TECHNIQUES](#cloud-exploitation-techniques)
- [CLOUD-SPECIFIC ATTACK TOOLS](#cloud-specific-attack-tools)
- [CLOUD API ATTACKS 🔥](#cloud-api-attacks-high-yield)
- [CLOUD ATTACK FLOW](#cloud-attack-flow)
- [CLOUD LOG EVASION TECHNIQUES](#cloud-log-evasion-techniques)
- [EXAM TRAPS 🔥](#exam-traps-high-yield)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **Cloud attack surface** — consola de gestión, APIs, IAM, storage, VMs, contenedores y metadata services (*Console + API + IAM = control*).
- **Recon / OSINT** — Shodan y Censys (activos cloud expuestos), Amass (DNS enumeration), theHarvester (correos y dominios).
- **Storage enumeration** — descubrir S3 buckets, Azure blobs y Google buckets públicos adivinando nombres; public storage = data leak.
- **Privilege escalation in cloud** — se basa en POLÍTICAS (role chaining, policy abuse, misconfigured trust relationships), no en exploits de kernel.
- **Metadata service** — endpoint interno accesible sin autenticación desde la VM: SSRF → metadata → credenciales.
- **Credential harvesting** — phishing, malware, secretos filtrados en GitHub y abuso del metadata service.
- **Container escape / image poisoning** — escape por privileged containers, vulnerabilidades del kernel o namespaces mal configurados; poisoning = imágenes con backdoor en registros públicos.
- **Herramientas AWS** — Pacu (framework de explotación), Prowler (auditoría), CloudMapper (visualización); ScoutSuite = auditoría multi-cloud.
- **Herramientas Azure / GCP** — MicroBurst (pentesting de Azure), Stormspotter (mapa de attack paths en Azure), GCPBucketBrute (enumeración de buckets de GCP).
- **API attacks** — broken authentication, broken authorization, excessive data exposure e injection attacks.
- **Cloud log evasion** — deshabilitar logging, borrar trails, rotar keys; el borrado de logs es una señal de alerta.
- **Trampas** — VM escape NO es común, los ataques a IAM no necesitan exploits y los atacantes persisten con keys y roles.

---

## OBJECTIVE 03 — CLOUD COMPUTING ATTACK TOOLS AND TECHNIQUES

### CLOUD ATTACK SURFACE

|Attack Surface|
|---|
|Cloud management console|
|APIs|
|IAM|
|Storage services|
|Virtual machines|
|Containers|
|Metadata services|

> 🧠 *Para recordar:* **Console + API + IAM = control**

---

## CLOUD RECONNAISSANCE TECHNIQUES

### CLOUD ASSET DISCOVERY

|Technique|Explanation|
|---|---|
|DNS enumeration|Identificar dominios alojados en la nube|
|IP range identification|Mapear IPs del proveedor|
|Service fingerprinting|Detectar servicios en la nube|
|OSINT|Metadata pública de la nube|

---

### OSINT TOOLS FOR CLOUD RECON

|Tool|Purpose|
|---|---|
|Shodan|Encontrar servicios en la nube|
|Censys|Descubrir activos expuestos en la nube|
|Amass|DNS enumeration|
|theHarvester|Información de correo electrónico y dominio|

> 🧠 *Para recordar:* **El recon empieza fuera de la nube**

---

## CLOUD MISCONFIGURATION DISCOVERY (HIGH YIELD)

### STORAGE ENUMERATION

|Target|Method|
|---|---|
|S3 buckets|Name guessing (adivinar nombres de bucket)|
|Azure blobs|Verificaciones de acceso público|
|Google buckets|Enumeración|

> 🧠 *Para recordar:* **Public storage = data leak**

---

### COMMON MISCONFIGURATIONS

|Misconfiguration|
|---|
|Buckets públicos|
|IAM excesivamente permisivo|
|Puertos de gestión abiertos|
|Sin logging habilitado|
|Credenciales por defecto|

---

## CLOUD EXPLOITATION TECHNIQUES

### IAM ATTACK TECHNIQUES (HIGH YIELD)

#### CREDENTIAL HARVESTING

|Method|
|---|
|Phishing|
|Malware|
|GitHub secrets leakage|
|Abuso del metadata service|

> 🧠 *Para recordar:* **Credenciales = acceso a la nube**

---

#### PRIVILEGE ESCALATION IN CLOUD

|Technique|
|---|
|Role chaining|
|Policy abuse (abuso de políticas)|
|Misconfigured trust relationships (relaciones de confianza mal configuradas)|

> ⚠️ *Trampa de examen:* La escalada de privilegios en la nube se basa en POLÍTICAS, no en el kernel.

> 🧠 *Para recordar:* **Políticas = poder**

---

### METADATA SERVICE ATTACKS (HIGH YIELD)

#### WHAT IS METADATA SERVICE

|Item|Explanation|
|---|---|
|Metadata service|Endpoint interno que proporciona información de la instancia|
|Access|Sin autenticación desde la VM|

---

#### ATTACK METHOD

|Step|
|---|
|Explotar SSRF|
|Consultar el endpoint de metadata|
|Extraer credenciales|

> 🧠 *Para recordar:* **SSRF → metadata → creds**

---

### CLOUD MALWARE INJECTION

|Step|
|---|
|Inyectar servicio malicioso|
|Registrar como instancia válida|
|Ejecutar payload|

---

### VM ATTACK TECHNIQUES

|Technique|
|---|
|Snapshot abuse (abuso de snapshots)|
|Disk image extraction (extracción de imágenes de disco)|
|VM cloning (clonación de VMs)|

---

### CONTAINER ATTACK TECHNIQUES

#### CONTAINER ESCAPE

|Cause|
|---|
|Privileged containers (contenedores privilegiados)|
|Kernel vulnerabilities (vulnerabilidades del kernel)|
|Misconfigured namespaces (namespaces mal configurados)|

> 🧠 *Para recordar:* **Container ≠ VM**

---

#### IMAGE POISONING

|Method|
|---|
|Backdoored images (imágenes con backdoors)|
|Public registries (registros públicos)|

---

## CLOUD-SPECIFIC ATTACK TOOLS

### AWS ATTACK TOOLS

|Tool|Purpose|
|---|---|
|Pacu|Framework de explotación de AWS|
|Prowler|Auditoría de seguridad de AWS|
|ScoutSuite|Auditoría multi-nube|
|CloudMapper|Visualización de AWS|

---

### AZURE ATTACK TOOLS

|Tool|Purpose|
|---|---|
|MicroBurst|Pruebas de penetración de Azure|
|Stormspotter|Mapeo de rutas de ataque de Azure|

---

### GCP ATTACK TOOLS

|Tool|Purpose|
|---|---|
|GCPBucketBrute|Enumeración de buckets|
|GCPEnum|Descubrimiento de recursos|

---

### GENERIC CLOUD TOOLS

|Tool|Purpose|
|---|---|
|Metasploit|Explotación en la nube|
|Nuclei|Escaneo de malas configuraciones|
|Burp Suite|Pruebas de APIs|

---

## CLOUD API ATTACKS (HIGH YIELD)

### API ATTACK TECHNIQUES

|Technique|
|---|
|Broken authentication (autenticación rota)|
|Broken authorization (autorización rota)|
|Excessive data exposure (exposición excesiva de datos)|
|Injection attacks (ataques de inyección)|

> 🧠 *Para recordar:* **Las APIs son la nube**

---

## CLOUD ATTACK FLOW

1. OSINT y recon
2. Identificar mala configuración
3. Explotar IAM/API
4. Escalar privilegios
5. Persistir mediante keys o roles

> 🧠 *Para recordar:* **Find → Misconfig → IAM → Persist**

---

## CLOUD LOG EVASION TECHNIQUES

|Technique|
|---|
|Deshabilitar logging|
|Eliminar trails|
|Rotar keys|

> ⚠️ *Trampa de examen:* La eliminación de logs es una señal de alerta en los exámenes.

---

## EXAM TRAPS (HIGH YIELD)

|Trap|Correct Understanding|
|---|---|
|VM escape es común|Falso|
|Los ataques IAM necesitan exploits|Falso|
|Los ataques en la nube se basan en la red|Falso|
|El cifrado detiene a los atacantes|Falso|

---

## Flashcards

| Term | Definition |
|------|------------|
| Cloud Attack Surface | Consola de gestión, APIs, IAM, almacenamiento, VMs, contenedores, servicios de metadata |
| Cloud Asset Discovery | Enumeración DNS, mapeo de rangos de IPs, fingerprinting de servicios, OSINT |
| Storage Enumeration | Descubrimiento y explotación de buckets S3, Azure blobs y Google buckets públicos |
| Credential Harvesting | Recolección de credenciales en la nube mediante phishing, malware, filtraciones en GitHub y abuso del metadata service |
| Privilege Escalation in Cloud | Escalada basada en políticas a través de role chaining, abuso de políticas y explotación de relaciones de confianza |
| Metadata Service | Endpoint interno que proporciona información de la instancia; accesible desde la VM sin autenticación |
| Container Escape | Escapar de un contenedor debido a contenedores privilegiados, vulnerabilidades del kernel o namespaces mal configurados |
| Image Poisoning | Inyección de backdoors en imágenes de contenedores en registros públicos |
| Pacu | Framework de explotación de AWS para escalada de privilegios y persistencia |
| Prowler | Herramienta de auditoría de seguridad de AWS |
| ScoutSuite | Herramienta de auditoría multi-nube |
| MicroBurst | Herramienta de pruebas de penetración de Azure |
| Stormspotter | Herramienta de mapeo de rutas de ataque de Azure |
| CloudMapper | Herramienta de visualización de AWS |
| GCPBucketBrute | Herramienta de enumeración de buckets de GCP |
| API Attack | Autenticación rota, autorización rota, exposición excesiva de datos, ataques de inyección |
| Cloud Log Evasion | Deshabilitar logging, eliminar trails, rotar keys para cubrir los rastros |

---

## Preguntas de práctica

**1.** Un atacante descubre un bucket S3 accesible públicamente que contiene datos sensibles. ¿Qué técnica utilizó?
- a) Privilege escalation
- b) Storage enumeration
- c) Container escape
- d) Metadata service attack
**Answer:** b) — Storage enumeration implica descubrir y explotar almacenamiento público en la nube como buckets S3.

**2.** ¿Cómo difiere la escalada de privilegios en entornos en la nube comparado con sistemas tradicionales?
- a) Utiliza exploits del kernel
- b) Se basa en políticas, explotando roles IAM y relaciones de confianza
- c) Requiere acceso físico
- d) Es imposible en la nube
**Answer:** b) — La escalada de privilegios en la nube se basa en políticas, explotando roles IAM mal configurados y relaciones de confianza en lugar de vulnerabilidades del kernel.

**3.** ¿Cuál es el riesgo principal del metadata service en la nube?
- a) Almacena contraseñas de usuarios
- b) Proporciona credenciales de la instancia sin autenticación desde dentro de la VM
- c) Cifra todos los datos por defecto
- d) No se puede acceder remotamente
**Answer:** b) — El metadata service proporciona credenciales y tokens que pueden extraerse mediante ataques SSRF.

**4.** ¿Qué herramienta se utiliza para pruebas de penetración en Azure?
- a) Pacu
- b) Prowler
- c) MicroBurst
- d) CloudMapper
**Answer:** c) — MicroBurst está diseñado específicamente para pruebas de penetración en Azure.

**5.** Un atacante modifica los logs de auditoría en la nube para ocultar su actividad. ¿Qué técnica es esta?
- a) Credential harvesting
- b) Cloud log evasion
- c) Storage enumeration
- d) Container escape
**Answer:** b) — Cloud log evasion implica deshabilitar logging, eliminar trails o rotar keys para cubrir los rastros.
