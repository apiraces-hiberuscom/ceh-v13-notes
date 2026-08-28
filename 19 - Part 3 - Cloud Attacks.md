# OBJECTIVE 03 — CLOUD COMPUTING ATTACK TOOLS AND TECHNIQUES

---

## CLOUD ATTACK SURFACE (EXAM FOUNDATION)

|Attack Surface|
|---|
|Cloud management console|
|APIs|
|IAM|
|Storage services|
|Virtual machines|
|Containers|
|Metadata services|

MEMORY HOOK:  
**Console + API + IAM = control**

---

# CLOUD RECONNAISSANCE TECHNIQUES

---

## CLOUD ASSET DISCOVERY

|Technique|Explanation|
|---|---|
|DNS enumeration|Identificar dominios alojados en la nube|
|IP range identification|Mapear IPs del proveedor|
|Service fingerprinting|Detectar servicios en la nube|
|OSINT|Metadata pública de la nube|

---

## OSINT TOOLS FOR CLOUD RECON

|Tool|Purpose|
|---|---|
|Shodan|Encontrar servicios en la nube|
|Censys|Descubrir activos expuestos en la nube|
|Amass|DNS enumeration|
|theHarvester|Información de correo electrónico y dominio|

MEMORY HOOK:  
**Recon starts outside cloud**

---

# CLOUD MISCONFIGURATION DISCOVERY (TOP EXAM AREA)

---

## STORAGE ENUMERATION

|Target|Method|
|---|---|
|S3 buckets|Adivinanza de nombres|
|Azure blobs|Verificaciones de acceso público|
|Google buckets|Enumeración|

MEMORY HOOK:  
**Public storage = data leak**

---

## COMMON MISCONFIGURATIONS

|Misconfiguration|
|---|
|Buckets públicos|
|IAM excesivamente permisivo|
|Puertos de gestión abiertos|
|Sin logging habilitado|
|Credenciales por defecto|

---

# CLOUD EXPLOITATION TECHNIQUES

---

## IAM ATTACK TECHNIQUES (VERY IMPORTANT)

---

### CREDENTIAL HARVESTING

|Method|
|---|
|Phishing|
|Malware|
|GitHub secrets leakage|
|Abuso del metadata service|

MEMORY HOOK:  
**Credentials = cloud access**

---

### PRIVILEGE ESCALATION IN CLOUD

|Technique|
|---|
|Role chaining|
|Abuso de políticas|
|Relaciones de confianza mal configuradas|

EXAM TRAP:  
La escalada de privilegios en la nube se basa en POLÍTICAS, no en el kernel.

MEMORY HOOK:  
**Policies = power**

---

## METADATA SERVICE ATTACKS (HIGH-YIELD)

---

### WHAT IS METADATA SERVICE

|Item|Explanation|
|---|---|
|Metadata service|Endpoint interno que proporciona información de la instancia|
|Access|Sin autenticación desde la VM|

---

### ATTACK METHOD

|Step|
|---|
|Explotar SSRF|
|Consultar el endpoint de metadata|
|Extraer credenciales|

MEMORY HOOK:  
**SSRF → metadata → creds**

---

## CLOUD MALWARE INJECTION

|Step|
|---|
|Inyectar servicio malicioso|
|Registrar como instancia válida|
|Ejecutar payload|

---

## VM ATTACK TECHNIQUES

|Technique|
|---|
|Abuso de snapshots|
|Extracción de imágenes de disco|
|Clonación de VMs|

---

## CONTAINER ATTACK TECHNIQUES

---

### CONTAINER ESCAPE

|Cause|
|---|
|Contenedores privilegiados|
|Vulnerabilidades del kernel|
|Namespaces mal configurados|

MEMORY HOOK:  
**Container ≠ VM**

---

### IMAGE POISONING

|Method|
|---|
|Imágenes con backdoors|
|Registros públicos|

---

# CLOUD-SPECIFIC ATTACK TOOLS (EXAM LIST)

---

## AWS ATTACK TOOLS

|Tool|Purpose|
|---|---|
|Pacu|Framework de explotación de AWS|
|Prowler|Auditoría de seguridad de AWS|
|ScoutSuite|Auditoría multi-nube|
|CloudMapper|Visualización de AWS|

---

## AZURE ATTACK TOOLS

|Tool|Purpose|
|---|---|
|MicroBurst|Pruebas de penetración de Azure|
|Stormspotter|Mapeo de rutas de ataque de Azure|

---

## GCP ATTACK TOOLS

|Tool|Purpose|
|---|---|
|GCPBucketBrute|Enumeración de buckets|
|GCPEnum|Descubrimiento de recursos|

---

## GENERIC CLOUD TOOLS

|Tool|Purpose|
|---|---|
|Metasploit|Explotación en la nube|
|Nuclei|Escaneo de malas configuraciones|
|Burp Suite|Pruebas de APIs|

---

# CLOUD API ATTACKS (CRITICAL)

---

## API ATTACK TECHNIQUES

|Technique|
|---|
|Autenticación rota|
|Autorización rota|
|Exposición excesiva de datos|
|Ataques de inyección|

MEMORY HOOK:  
**APIs are the cloud**

---

# CLOUD ATTACK FLOW (EXAM LOGIC)

1. OSINT y recon
    
2. Identificar mala configuración
    
3. Explotar IAM/API
    
4. Escalar privilegios
    
5. Persistir mediante keys o roles
    

MEMORY HOOK:  
**Find → Misconfig → IAM → Persist**

---

# CLOUD LOG EVASION TECHNIQUES

|Technique|
|---|
|Deshabilitar logging|
|Eliminar trails|
|Rotar keys|

EXAM TRAP:  
La eliminación de logs es una señal de alerta en los exámenes.

---

# EXAM TRAPS (VERY IMPORTANT)

|Trap|Correct Understanding|
|---|---|
|VM escape es común|Falso|
|Los ataques IAM necesitan exploits|Falso|
|Los ataques en la nube son basados en red|Falso|
|El cifrado detiene a los atacantes|Falso|

---

# OBJECTIVE 03 — EXAM MEMORY BLOCK

**Los ataques en la nube se centran en el uso indebido de IAM, el abuso de APIs y las malas configuraciones.  
Los servicios de metadata exponen credenciales.  
La mayoría de las escaladas de privilegios se basan en políticas.  
Los atacantes persisten usando keys y roles.**

---

## STATUS

|Objective|Status|
|---|---|
|Recon|COMPLETE|
|Exploitation|COMPLETE|
|Tools|COMPLETE|
|Exam readiness|HIGH|

---

# EXAM FLASHCARDS

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

# PRACTICE QUESTIONS

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
