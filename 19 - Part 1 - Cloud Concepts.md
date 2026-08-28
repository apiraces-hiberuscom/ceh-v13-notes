# OBJECTIVE 01 — SUMMARIZE CLOUD COMPUTING CONCEPTS

---

## CLOUD COMPUTING — CORE EXAM DEFINITION

|Term|Definition|
|---|---|
|Cloud Computing|Entrega bajo demanda de capacidades de TI, incluyendo infraestructura y aplicaciones, a través de Internet con un modelo de facturación basado en uso|

MEMORY HOOK:  
**On-demand + Internet + Metered**

---

## WHAT CLOUD PROVIDES (EXAM)

|Provides|
|---|
|Servers|
|Storage|
|Databases|
|Networking|
|Software|
|Analytics|

---

## KEY CHARACTERISTICS OF CLOUD COMPUTING (VERY IMPORTANT)

|Characteristic|Explanation|
|---|---|
|On-demand self-service|Los usuarios pueden aprovisionar recursos sin interacción humana|
|Broad network access|Servicios disponibles a través de la red mediante plataformas estándar|
|Resource pooling|El proveedor agrupa recursos para múltiples inquilinos|
|Rapid elasticity|Los recursos escalan hacia arriba y abajo rápidamente|
|Measured service|Modelo de facturación por uso|
|Automated management|Administración manual reducida|

MEMORY HOOK:  
**On-demand, pooled, elastic, measured**

---

## LIMITATIONS OF CLOUD COMPUTING (EXAM)

|Limitation|
|---|
|Control y flexibilidad limitados|
|Problemas de seguridad, privacidad y cumplimiento normativo|
|Dependencia de Internet|
|Vendor lock-in|
|Vulnerabilidades técnicas|
|Dificultades de migración|

EXAM TRAP:  
Cloud does NOT automatically guarantee security.

---

# TYPES OF CLOUD COMPUTING SERVICES (CRITICAL)

---

## INFRASTRUCTURE-AS-A-SERVICE (IaaS)

|Aspect|Details|
|---|---|
|What it provides|Máquinas virtuales, almacenamiento, redes|
|User controls|SO, aplicaciones, datos|
|Provider controls|Hardware, virtualization|
|Examples|AWS EC2, Microsoft Azure, Google Compute Engine|

### ADVANTAGES

|Advantage|
|---|
|Dynamic scaling|
|Guaranteed uptime|
|Elastic load balancing|
|Global accessibility|

### DISADVANTAGES

|Disadvantage|
|---|
|Riesgos de seguridad del software|
|Dependencia del rendimiento|

MEMORY HOOK:  
**IaaS = rent hardware**

---

## PLATFORM-AS-A-SERVICE (PaaS)

|Aspect|Details|
|---|---|
|What it provides|Plataforma de desarrollo de aplicaciones|
|User controls|Código de la aplicación|
|Provider controls|SO, runtime, middleware|
|Examples|Google App Engine, Azure App Service|

### ADVANTAGES

|Advantage|
|---|
|Simplified deployment|
|Built-in scalability|
|Pay-per-use|

### DISADVANTAGES

|Disadvantage|
|---|
|Vendor lock-in|
|Problemas de privacidad de datos|

MEMORY HOOK:  
**PaaS = build apps**

---

## SOFTWARE-AS-A-SERVICE (SaaS)

|Aspect|Details|
|---|---|
|What it provides|Aplicaciones listas para usar|
|Access|Basado en navegador|
|Examples|Gmail, Salesforce, Microsoft 365|

### ADVANTAGES

|Advantage|
|---|
|Low cost|
|Easy administration|
|Global access|

### DISADVANTAGES

|Disadvantage|
|---|
|Dependencia de Internet|
|Cambiar de proveedor es difícil|

MEMORY HOOK:  
**SaaS = use software**

---

## IDENTITY-AS-A-SERVICE (IDaaS)

|Aspect|Details|
|---|---|
|Purpose|Autenticación y gestión de identidades|
|Functions|MFA, SSO, IAM|
|Examples|Azure AD, Okta|

### DISADVANTAGES

|Disadvantage|
|---|
|Single point of failure|
|Riesgo de secuestro de cuentas|

MEMORY HOOK:  
**IDaaS = cloud login**

---

## SECURITY-AS-A-SERVICE (SECaaS)

|Aspect|Details|
|---|---|
|Purpose|Servicios de seguridad basados en cloud|
|Services|IDS, IPS, DLP, SIEM|
|Examples|Trend Micro, IBM Security|

MEMORY HOOK:  
**SECaaS = outsource security**

---

## CONTAINER-AS-A-SERVICE (CaaS)

|Aspect|Details|
|---|---|
|Purpose|Gestionar contenedores|
|Technology|Docker, Kubernetes|
|Examples|AWS EKS, Google GKE|

MEMORY HOOK:  
**CaaS = containers**

---

## FUNCTION-AS-A-SERVICE (FaaS)

|Aspect|Details|
|---|---|
|Purpose|Ejecutar código sin servidores|
|Execution|Event-driven|
|Examples|AWS Lambda, Azure Functions|

MEMORY HOOK:  
**FaaS = code only**

---

## ANYTHING-AS-A-SERVICE (XaaS)

|Aspect|Details|
|---|---|
|Meaning|Cualquier servicio de TI entregado a través de cloud|
|Includes|SaaS, PaaS, MaaS, DRaaS|

MEMORY HOOK:  
**XaaS = everything**

---

# SHARED RESPONSIBILITY MODEL (EXAM FAVORITE)

|Layer|On-Prem|IaaS|PaaS|SaaS|
|---|---|---|---|---|
|Applications|User|User|User|Provider|
|Data|User|User|User|Provider|
|OS|User|User|Provider|Provider|
|Virtualization|User|Provider|Provider|Provider|
|Hardware|User|Provider|Provider|Provider|

EXAM TRAP:  
Security is NOT fully provider's responsibility.

MEMORY HOOK:  
**More service = less control**

---

# CLOUD DEPLOYMENT MODELS (CRITICAL)

---

## PUBLIC CLOUD

|Aspect|Details|
|---|---|
|Ownership|Proveedor de terceros|
|Access|Internet|
|Examples|AWS, Azure|

### DISADVANTAGES

|Disadvantage|
|---|
|La seguridad no está garantizada|
|Control limitado|

---

## PRIVATE CLOUD

|Aspect|Details|
|---|---|
|Ownership|Una sola organización|
|Security|Alta|
|Cost|Alto|

---

## COMMUNITY CLOUD

|Aspect|Details|
|---|---|
|Shared by|Múltiples organizaciones|
|Use case|Necesidades regulatorias|

---

## HYBRID CLOUD

|Aspect|Details|
|---|---|
|Combination|Público + Privado|
|Benefit|Flexibilidad|

---

## MULTI-CLOUD

|Aspect|Details|
|---|---|
|Uses|Múltiples proveedores|
|Benefit|Evitar vendor lock-in|

MEMORY HOOK:  
**Hybrid = mix, Multi = many**

---

# OBJECTIVE 01 — EXAM MEMORY BLOCK

**Cloud computing entrega servicios de TI bajo demanda a través de Internet usando un modelo de pago por uso.  
Los modelos de servicio definen la responsabilidad.  
Los modelos de despliegue definen la propiedad.  
La responsabilidad compartida siempre se evalúa.**

---

## STATUS

|Objective|Status|
|---|---|
|Concepts|COMPLETE|
|Service models|COMPLETE|
|Deployment models|COMPLETE|
|Shared responsibility|COMPLETE|

---

## EXAM EXTRAS (Boson Practice Test)

### CLOUD ROLES

|Role|Description|
|---|---|
|Cloud Consumer|Utiliza los servicios del proveedor de cloud|
|Cloud Provider|Ofrece SaaS, despliega, configura y mantiene aplicaciones de software para el consumidor de cloud|
|Cloud Carrier|Proporciona conectividad y transporte de servicios de cloud entre consumidores y proveedores|
|Cloud Broker|Negocia relaciones entre proveedores y consumidores|
|Cloud Auditor|Evaluación independiente del proveedor de cloud|

---

### PAAS

|Item|Memorize|
|---|---|
PaaS|Platform as a Service|

---

### MITM / CASB

|Item|Memorize|
|---|---|
|MITC|Man in the Cloud attack — se puede evitar instalando CASB (Cloud Access Security Broker)|

---

### DOCKER DAEMON

|Item|Memorize|
|---|---|
|Docker daemon|Procesa solicitudes de API y maneja objetos de Docker|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Cloud Computing | Entrega bajo demanda de capacidades de TI a través de Internet con un modelo de pago por uso |
| IaaS | Infrastructure as a Service — provee VMs, almacenamiento, redes; el usuario gestiona SO y aplicaciones |
| PaaS | Platform as a Service — provee plataforma de desarrollo de aplicaciones; el usuario solo gestiona código |
| SaaS | Software as a Service — aplicaciones listas para usar accedidas a través de navegador |
| IDaaS | Identity as a Service — autenticación y gestión de identidades basadas en cloud |
| SECaaS | Security as a Service — servicios de seguridad basados en cloud como IDS, IPS, DLP, SIEM |
| CaaS | Container as a Service — gestiona contenedores de Docker/Kubernetes |
| FaaS | Function as a Service — ejecuta código sin servidores, ejecución basada en eventos |
| XaaS | Anything as a Service — cualquier servicio de TI entregado a través de cloud |
| Shared Responsibility Model | Marco que define las responsabilidades de seguridad entre el proveedor y el cliente |
| Public Cloud | Proveedor de terceros posee la infraestructura, accedida a través de Internet |
| Private Cloud | Una sola organización posee y controla la infraestructura |
| Hybrid Cloud | Combinación de cloud público y privado |
| Multi-Cloud | Uso de múltiples proveedores de cloud simultáneamente |
| Cloud Consumer | Utiliza los servicios del proveedor de cloud |
| Cloud Provider | Ofrece y mantiene servicios de cloud |
| Cloud Carrier | Proporciona conectividad entre consumidores y proveedores |

---

# PRACTICE QUESTIONS

**1.** En el modelo de responsabilidad compartida, ¿quién es responsable de la seguridad de datos en un despliegue IaaS?
- a) Solo el proveedor de cloud
- b) Solo el cliente
- c) Ambos por igual
- d) Ninguno
**Answer:** b) — En IaaS, el cliente es responsable de los datos, aplicaciones y seguridad del SO.

**2.** ¿Qué modelo de servicio de cloud brinda más control al cliente?
- a) SaaS
- b) PaaS
- c) IaaS
- d) FaaS
**Answer:** c) — IaaS da a los clientes control sobre el SO, aplicaciones y datos mientras el proveedor gestiona el hardware.

**3.** Una empresa usa tanto AWS como Azure para diferentes cargas de trabajo. ¿Qué modelo de despliegue es este?
- a) Hybrid cloud
- b) Private cloud
- c) Multi-cloud
- d) Community cloud
**Answer:** c) — Multi-cloud usa múltiples proveedores, mientras que hybrid combina público y privado.

**4.** ¿Qué característica clave de cloud computing permite a los usuarios aprovisionar recursos sin interacción humana?
- a) Resource pooling
- b) Rapid elasticity
- c) On-demand self-service
- d) Measured service
**Answer:** c) — On-demand self-service permite a los usuarios aprovisionar recursos automáticamente.

**5.** ¿Cuál es la principal desventaja de SaaS?
- a) Alto costo
- b) Gestión compleja
- c) Dependencia de Internet y vendor lock-in
- d) Escalabilidad limitada
**Answer:** c) — SaaS requiere acceso a Internet y dificulta el cambio de proveedores debido a los desafíos de migración de datos.
