# Módulo 19 · Parte 4 — Cloud Security

> **Módulo 19 — Cloud Computing** · Parte 4 de 4 · Controles y contramedidas de cloud security: shared responsibility model, IAM, seguridad de red, datos, storage y cómputo, logging, incident response, disaster recovery, compliance y herramientas defensivas.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [CLOUD SECURITY RESPONSIBILITY MODEL 🔥](#cloud-security-responsibility-model-high-yield)
- [IDENTITY AND ACCESS MANAGEMENT (IAM) CONTROLS](#identity-and-access-management-iam-controls)
- [CLOUD NETWORK SECURITY CONTROLS](#cloud-network-security-controls)
- [CLOUD DATA SECURITY CONTROLS](#cloud-data-security-controls)
- [CLOUD STORAGE SECURITY CONTROLS](#cloud-storage-security-controls)
- [CLOUD COMPUTE SECURITY CONTROLS](#cloud-compute-security-controls)
- [CLOUD MONITORING AND LOGGING](#cloud-monitoring-and-logging)
- [CLOUD INCIDENT RESPONSE](#cloud-incident-response)
- [CLOUD BACKUP AND DISASTER RECOVERY](#cloud-backup-and-disaster-recovery)
- [CLOUD COMPLIANCE AND GOVERNANCE](#cloud-compliance-and-governance)
- [CLOUD SECURITY TOOLS (DEFENSIVE)](#cloud-security-tools-defensive)
- [CLOUD COUNTERMEASURE SUMMARY FLOW](#cloud-countermeasure-summary-flow)
- [EXAM TRAPS](#exam-traps)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **Shared responsibility model** — proveedor = security OF the cloud (data centers, hardware, red, hypervisor, seguridad física); cliente = security IN the cloud (datos, IAM, SO y apps, cifrado, parches).
- **Responsabilidad del cliente** — el cliente SÍ responde de las brechas por misconfiguration; la mala configuración de IAM causa la mayoría de las brechas.
- **IAM** — primera línea de defensa: least privilege, MFA, roles en lugar de access keys, key rotation, conditional access y evitar la cuenta root.
- **Security Groups vs NACLs** — Security Groups = stateful, a nivel de instancia; Network ACLs = stateless, a nivel de subnet.
- **Data protection** — encryption at rest y in transit (TLS), KMS, HSM y customer-managed keys con rotación automática; el cifrado solo protege si las claves están seguras.
- **Storage hardening** — desactivar el acceso público, bucket policies, access logging y object versioning; el storage público es la causa más común de filtraciones.
- **Container security** — los contenedores comparten el kernel: trusted images, image scanning, runtime monitoring y least privilege.
- **CloudTrail vs CloudWatch vs GuardDuty** — CloudTrail = registro de la actividad de API; CloudWatch = monitorización de recursos y métricas; GuardDuty = detección de amenazas.
- **Herramientas defensivas** — nativas: GuardDuty (AWS), Defender for Cloud (Azure), Security Command Center (GCP); Prisma Cloud y Wiz = CSPM.
- **Disaster recovery models** — backup and restore → pilot light → warm standby → multi-site (más disponibilidad = más coste).
- **Cloud incident response** — detectar → contener → analizar la causa raíz → erradicar → recuperar → revisión post-incidente.
- **Logging** — los atacantes borran logs para cubrir sus huellas: habilitar logs por defecto, centralizarlos y proteger su integridad.

---

## CLOUD SECURITY RESPONSIBILITY MODEL (HIGH YIELD)

### SHARED RESPONSIBILITY MODEL

|Cloud Provider Responsible For|Customer Responsible For|
|---|---|
|Data centers físicos|Datos|
|Hardware|Configuración de IAM|
|Infraestructura de red|SO y aplicaciones|
|Hypervisor|Cifrado (encryption)|
|Seguridad física|Gestión de parches (patch management)|

> 🧠 *Para recordar:* **Provider = security OF the cloud · Customer = security IN the cloud** (el proveedor protege la nube; el cliente, lo que pone en ella)

> ⚠️ *Trampa de examen:* Los clientes SON responsables de las filtraciones de datos causadas por mala configuración.

---

## IDENTITY AND ACCESS MANAGEMENT (IAM) CONTROLS

### IAM SECURITY CONTROLS

|Control|Purpose|
|---|---|
|Least privilege|Restringir permisos|
|Role-based access|Eliminar credenciales compartidas|
|MFA|Prevenir abuso de credenciales|
|Key rotation|Reducir el tiempo de vida de las credenciales|
|Conditional access|Restricciones basadas en contexto|

> 🧠 *Para recordar:* **IAM es la primera línea de defensa**

---

### IAM BEST PRACTICES

|Practice|
|---|
|Evitar uso de cuenta root|
|Aplicar MFA|
|Usar roles en lugar de access keys|
|Auditorías regulares de permisos|

---

## CLOUD NETWORK SECURITY CONTROLS

### VIRTUAL NETWORK SECURITY

|Control|Explanation|
|---|---|
|Security Groups|Firewall stateful (con estado) a nivel de instancia|
|Network ACLs (NACLs)|Filtrado stateless (sin estado) a nivel de subnet|
|Private subnets|Reducir exposición|
|Bastion hosts|Acceso administrativo seguro|

> 🧠 *Para recordar:* **Security Groups = firewall de instancia**

> ⚠️ *Trampa de examen:* Los Security Groups son STATEFUL; los NACLs son STATELESS.

---

## CLOUD DATA SECURITY CONTROLS

### DATA PROTECTION MECHANISMS

|Mechanism|Purpose|
|---|---|
|Encryption at rest|Proteger datos almacenados|
|Encryption in transit|Proteger la transferencia de datos (TLS/SSL)|
|Key management services (KMS)|Control centralizado de claves|
|Tokenization|Reducir exposición de datos sensibles|

---

### KEY MANAGEMENT

|Control|
|---|
|Customer-managed keys (claves gestionadas por el cliente)|
|Automatic key rotation (rotación automática de claves)|
|Hardware Security Modules (HSMs)|

> 🧠 *Para recordar:* **Las claves protegen los datos cifrados**

---

## CLOUD STORAGE SECURITY CONTROLS

### STORAGE HARDENING

|Control|
|---|
|Desactivar acceso público|
|Bucket policies|
|Access logging|
|Object versioning|

> ⚠️ *Trampa de examen:* La exposición pública de almacenamiento es la causa más común de filtraciones en la nube.

---

## CLOUD COMPUTE SECURITY CONTROLS

### VM HARDENING

|Control|
|---|
|OS patching|
|Servicios mínimos|
|Host-based firewall|
|Protección de endpoint|

---

### CONTAINER SECURITY

|Control|
|---|
|Trusted images (imágenes de confianza)|
|Image scanning|
|Runtime monitoring|
|Least privilege containers (contenedores con mínimo privilegio)|

> 🧠 *Para recordar:* **Los contenedores comparten el kernel**

---

## CLOUD MONITORING AND LOGGING

### LOGGING SERVICES

|Service|Purpose|
|---|---|
|CloudTrail|Actividad de API|
|CloudWatch|Monitoreo de recursos|
|Azure Monitor|Métricas y logs|
|GCP Cloud Logging|Logging centralizado|

---

### LOGGING BEST PRACTICES

|Practice|
|---|
|Habilitar logs por defecto|
|Centralizar logs|
|Proteger integridad de logs|
|Monitorear anomalías|

> ⚠️ *Trampa de examen:* Los atacantes eliminan logs para cubrir sus huellas.

---

## CLOUD INCIDENT RESPONSE

### INCIDENT RESPONSE STEPS

1. Detectar incidente
2. Contener recursos afectados
3. Analizar causa raíz
4. Erradicar amenaza
5. Recuperar servicios
6. Realizar revisión post-incidente

> 🧠 *Para recordar:* **Detectar → Contener → Recuperar**

---

## CLOUD BACKUP AND DISASTER RECOVERY

### BACKUP CONTROLS

|Control|
|---|
|Backups automatizados|
|Integridad de snapshots|
|Cross-region replication|
|Immutable backups|

---

### DISASTER RECOVERY MODELS

|Model|Qué es|
|---|---|
|Backup and restore|Solo copias de seguridad que se restauran tras el desastre (menor disponibilidad y coste)|
|Pilot light|Infraestructura mínima siempre en ejecución|
|Warm standby|Entorno completo a escala reducida|
|Multi-site|Entornos completos en varias ubicaciones (mayor disponibilidad y coste)|

> 🧠 *Para recordar:* **Mayor disponibilidad = mayor costo**

---

## CLOUD COMPLIANCE AND GOVERNANCE

### GOVERNANCE CONTROLS

|Control|
|---|
|Políticas de seguridad|
|Monitoreo de cumplimiento|
|Resource tagging|
|Configuration baselines|

---

### COMPLIANCE STANDARDS

|Standard|
|---|
|ISO 27001|
|GDPR|
|HIPAA|
|PCI DSS|

---

## CLOUD SECURITY TOOLS (DEFENSIVE)

### CLOUD NATIVE SECURITY TOOLS

|Platform|Tool|
|---|---|
|AWS|GuardDuty|
|Azure|Defender for Cloud|
|GCP|Security Command Center|

---

### THIRD-PARTY TOOLS

|Tool|Purpose|
|---|---|
|Prisma Cloud|CSPM (Cloud Security Posture Management)|
|Wiz|Análisis de riesgos en la nube|
|Lacework|Monitoreo de comportamiento|

---

## CLOUD COUNTERMEASURE SUMMARY FLOW

1. Endurecer IAM
2. Asegurar red
3. Cifrar datos
4. Monitorear continuamente
5. Responder rápidamente

> 🧠 *Para recordar:* **IAM → Red → Datos → Monitorear**

---

## EXAM TRAPS

|Trap|Reality|
|---|---|
|El proveedor maneja toda la seguridad|Falso|
|El cifrado (encryption) previene filtraciones|Falso|
|Los logs son opcionales|Falso|
|La nube es inherentemente segura|Falso|

---

## Flashcards

| Term | Definition |
|------|------------|
| Shared Responsibility Model | El proveedor asegura la infraestructura en la nube, el cliente asegura los datos y la configuración de IAM |
| IAM | Identity and Access Management — primera línea de defensa para la seguridad en la nube |
| Least Privilege | Conceder los permisos mínimos necesarios para reducir la superficie de ataque |
| MFA | Multi-Factor Authentication — previene el abuso de credenciales |
| Security Groups | Firewalls con estado que controlan el tráfico a nivel de instancia |
| NACLs | Network Access Control Lists — filtrado sin estado a nivel de subnet |
| Encryption at Rest | Proteger los datos almacenados mediante cifrado |
| Encryption in Transit | Proteger los datos durante la transferencia mediante TLS/SSL |
| KMS | Key Management Service — control centralizado de claves de cifrado |
| HSM | Hardware Security Module — hardware criptográfico dedicado |
| CloudTrail | Servicio de AWS que registra actividad de API |
| CloudWatch | Servicio de AWS para monitoreo de recursos y métricas |
| GuardDuty | Servicio nativo de AWS para detección de amenazas |
| Defender for Cloud | Herramienta nativa de seguridad de Azure |
| CSPM | Cloud Security Posture Management — Prisma Cloud, Wiz |
| Immutable Backups | Backups que no pueden ser modificados ni eliminados |
| Pilot Light | Modelo de disaster recovery que mantiene infraestructura mínima en ejecución |
| Warm Standby | Modelo de disaster recovery con un entorno completo a escala reducida |

---

## Preguntas de práctica

**1.** En cloud security, ¿cuál es la diferencia principal entre Security Groups y NACLs?
- a) Security Groups son stateless, NACLs son stateful
- b) Security Groups son stateful, NACLs son stateless
- c) Son idénticos
- d) NACLs son más rápidos
**Respuesta:** b) — Security Groups son stateful (el tráfico de retorno se permite automáticamente), mientras que NACLs son stateless (deben permitir explícitamente ambas direcciones).

**2.** ¿Qué servicio de AWS registra toda la actividad de API para auditoría de seguridad?
- a) CloudWatch
- b) CloudTrail
- c) GuardDuty
- d) IAM
**Respuesta:** b) — CloudTrail registra todas las llamadas de API, mientras que CloudWatch monitorea recursos y GuardDuty detecta amenazas.

**3.** ¿Cuál es el enfoque recomendado para la gestión de claves en la nube?
- a) Almacenar claves en el servicio de metadatos
- b) Usar customer-managed keys con rotación automática y HSMs
- c) Compartir claves en todos los servicios
- d) Nunca rotar las claves
**Respuesta:** b) — Las customer-managed keys con rotación automática y HSMs proporcionan la mayor seguridad de claves.

**4.** ¿Por qué las exposiciones públicas de almacenamiento son la causa más común de filtraciones en la nube?
- a) El almacenamiento siempre es público
- b) La configuración predeterminada a menudo permite acceso público, y la mala configuración es fácil
- c) El encryption es imposible para almacenamiento
- d) Los proveedores de nube exponen datos intencionalmente
**Respuesta:** b) — La configuración predeterminada de almacenamiento a menudo permite acceso público, y la mala configuración es el error de seguridad más frecuente.

**5.** ¿Qué modelo de disaster recovery proporciona la mayor disponibilidad?
- a) Backup and restore
- b) Pilot light
- c) Warm standby
- d) Multi-site
**Respuesta:** d) — Multi-site proporciona la mayor disponibilidad ejecutando entornos completos en múltiples ubicaciones, pero al mayor costo.
