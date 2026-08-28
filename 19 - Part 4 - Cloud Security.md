# OBJETIVO 04 — CONTROLES Y CONTRAMEDIDAS DE CLOUD SECURITY

---

## MODELO DE RESPONSABILIDAD EN CLOUD SECURITY (ABSOLUTAMENTE CRÍTICO)

### MODELO DE RESPONSABILIDAD COMPARTIDA

|Cloud Provider Responsible For|Customer Responsible For|
|---|---|
|Data centers físicos|Datos|
|Hardware|Configuración de IAM|
|Infraestructura de red|SO y aplicaciones|
|Hypervisor|Encryption|
|Seguridad física|Gestión de parches|

MEMORY HOOK:  
**El proveedor asegura la nube, el cliente asegura lo que está en la nube**

EXAM TRAP:  
Los clientes SON responsables de las filtraciones de datos causadas por mala configuración.

---

## CONTROLES DE IDENTITY AND ACCESS MANAGEMENT (IAM)

---

### CONTROLES DE SEGURIDAD IAM

|Control|Purpose|
|---|---|
|Least privilege|Restringir permisos|
|Role-based access|Eliminar credenciales compartidas|
|MFA|Prevenir abuso de credenciales|
|Key rotation|Reducir el tiempo de vida de las credenciales|
|Conditional access|Restricciones basadas en contexto|

MEMORY HOOK:  
**IAM es la primera línea de defensa**

---

### MEJORES PRÁCTICAS DE IAM

|Practice|
|---|
|Evitar uso de cuenta root|
|Aplicar MFA|
|Usar roles en lugar de claves|
|Auditorías regulares de permisos|

---

## CONTROLES DE CLOUD NETWORK SECURITY

---

### SEGURIDAD DE RED VIRTUAL

|Control|Explanation|
|---|---|
|Security Groups|Firewall con estado|
|Network ACLs|Filtrado sin estado|
|Private subnets|Reducir exposición|
|Bastion hosts|Acceso administrativo seguro|

MEMORY HOOK:  
**Security Groups = firewall de instancia**

EXAM TRAP:  
Los Security Groups son STATEFUL; los NACLs son STATELESS.

---

## CONTROLES DE CLOUD DATA SECURITY

---

### MECANISMOS DE PROTECCIÓN DE DATOS

|Mechanism|Purpose|
|---|---|
|Encryption at rest|Proteger datos almacenados|
|Encryption in transit|Segurar transferencia de datos|
|Key management services|Control centralizado de claves|
|Tokenization|Reducir exposición de datos sensibles|

---

### GESTIÓN DE CLAVES

|Control|
|---|
|Customer-managed keys|
|Rotación automática de claves|
|Hardware Security Modules (HSMs)|

MEMORY HOOK:  
**Las claves protegen los datos encriptados**

---

## CONTROLES DE CLOUD STORAGE SECURITY

---

### ENDURECIMIENTO DE ALMACENAMIENTO

|Control|
|---|
|Desactivar acceso público|
|Bucket policies|
|Access logging|
|Object versioning|

EXAM TRAP:  
La exposición pública de almacenamiento es la causa más común de filtraciones en la nube.

---

## CONTROLES DE CLOUD COMPUTE SECURITY

---

### ENDURECIMIENTO DE VM

|Control|
|---|
|OS patching|
|Servicios mínimos|
|Host-based firewall|
|Protección de endpoint|

---

### SEGURIDAD DE CONTENEDORES

|Control|
|---|
|Imágenes confiables|
|Image scanning|
|Runtime monitoring|
|Contenedores con least privilege|

MEMORY HOOK:  
**Los contenedores comparten el kernel**

---

## MONITOREO Y LOGGING EN LA NUBE

---

### SERVICIOS DE LOGGING

|Service|Purpose|
|---|---|
|CloudTrail|Actividad de API|
|CloudWatch|Monitoreo de recursos|
|Azure Monitor|Métricas y logs|
|GCP Cloud Logging|Logging centralizado|

---

### MEJORES PRÁCTICAS DE LOGGING

|Practice|
|---|
|Habilitar logs por defecto|
|Centralizar logs|
|Proteger integridad de logs|
|Monitorear anomalías|

EXAM TRAP:  
Los atacantes eliminan logs para cubrir sus huellas.

---

## RESPUESTA A INCIDENTES EN LA NUBE

---

### PASOS DE RESPUESTA A INCIDENTES

1. Detectar incidente
    
2. Contener recursos afectados
    
3. Analizar causa raíz
    
4. Erradicar amenaza
    
5. Recuperar servicios
    
6. Realizar revisión post-incidente
    

MEMORY HOOK:  
**Detectar → Contener → Recuperar**

---

## BACKUP Y DISASTER RECOVERY EN LA NUBE

---

### CONTROLES DE BACKUP

|Control|
|---|
|Backups automatizados|
|Integridad de snapshots|
|Cross-region replication|
|Immutable backups|

---

### MODELOS DE DISASTER RECOVERY

|Model|
|---|
|Backup and restore|
|Pilot light|
|Warm standby|
|Multi-site|

MEMORY HOOK:  
**Mayor disponibilidad = mayor costo**

---

## CUMPLIMIENTO Y GOBERNANZA EN LA NUBE

---

### CONTROLES DE GOBERNANZA

|Control|
|---|
|Políticas de seguridad|
|Monitoreo de cumplimiento|
|Resource tagging|
|Configuration baselines|

---

### ESTÁNDARES DE CUMPLIMIENTO (LISTA DE EXAMEN)

|Standard|
|---|
|ISO 27001|
|GDPR|
|HIPAA|
|PCI DSS|

---

## HERRAMIENTAS DE CLOUD SECURITY (DEFENSIVAS)

---

### HERRAMIENTAS NATIVAS DE SEGURIDAD EN LA NUBE

|Platform|Tool|
|---|---|
|AWS|GuardDuty|
|Azure|Defender for Cloud|
|GCP|Security Command Center|

---

### HERRAMIENTAS DE TERCEROS

|Tool|Purpose|
|---|---|
|Prisma Cloud|CSPM|
|Wiz|Análisis de riesgos en la nube|
|Lacework|Monitoreo de comportamiento|

---

## FLUJO RESUMEN DE CONTRAMEDIDAS EN LA NUBE

1. Endurecer IAM
    
2. Asegurar red
    
3. Encriptar datos
    
4. Monitorear continuamente
    
5. Responder rápidamente
    

MEMORY HOOK:  
**IAM → Red → Datos → Monitorear**

---

## OBJETIVO 04 — BLOQUE DE MEMORIA PARA EL EXAMEN

**La seguridad en la nube depende de la responsabilidad compartida.  
La mala configuración de IAM causa la mayoría de las filtraciones.  
El logging y monitoreo detectan ataques.  
El encryption protege los datos, pero las claves deben estar seguras.**

---

## EXAM TRAPS (FINAL)

|Trap|Reality|
|---|---|
|El proveedor maneja toda la seguridad|Falso|
|El encryption previene filtraciones|Falso|
|Los logs son opcionales|Falso|
|La nube es inherentemente segura|Falso|

---

## ESTADO DEL MÓDULO 19

|Section|Status|
|---|---|
|Attacks|COMPLETE|
|Tools|COMPLETE|
|Countermeasures|COMPLETE|
|Exam readiness|VERY HIGH|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Shared Responsibility Model | El proveedor asegura la infraestructura en la nube, el cliente asegura los datos y la configuración de IAM |
| IAM | Identity and Access Management — primera línea de defensa para la seguridad en la nube |
| Least Privilege | Conceder los permisos mínimos necesarios para reducir la superficie de ataque |
| MFA | Multi-Factor Authentication — previene el abuso de credenciales |
| Security Groups | Firewalls con estado que controlan el tráfico a nivel de instancia |
| NACLs | Network Access Control Lists — filtrado sin estado a nivel de subnet |
| Encryption at Rest | Proteger datos almacenados utilizando encryption |
| Encryption in Transit | Segurar datos durante la transferencia utilizando TLS/SSL |
| KMS | Key Management Service — control centralizado de claves de encryption |
| HSM | Hardware Security Module — hardware criptográfico dedicado |
| CloudTrail | Servicio de AWS que registra actividad de API |
| CloudWatch | Servicio de AWS para monitoreo de recursos y métricas |
| GuardDuty | Servicio nativo de AWS para detección de amenazas |
| Defender for Cloud | Herramienta nativa de Azure |
| CSPM | Cloud Security Posture Management — Prisma Cloud, Wiz |
| Immutable Backups | Backups que no pueden ser modificados ni eliminados |
| Pilot Light | Modelo de disaster recovery que mantiene infraestructura mínima en ejecución |
| Warm Standby | Modelo de disaster recovery con entorno completo reducido |

---

# PREGUNTAS DE PRÁCTICA

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
