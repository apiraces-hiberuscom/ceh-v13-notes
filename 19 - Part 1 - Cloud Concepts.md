# Módulo 19 · Parte 1 — Cloud Concepts

> **Módulo 19 — Cloud Computing** · Parte 1 de 4 · Conceptos de cloud computing: características esenciales, modelos de servicio (IaaS, PaaS, SaaS y XaaS), shared responsibility model, modelos de despliegue y actores de la arquitectura de referencia NIST.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [OBJECTIVE 01 — SUMMARIZE CLOUD COMPUTING CONCEPTS](#objective-01--summarize-cloud-computing-concepts)
- [TYPES OF CLOUD COMPUTING SERVICES 🔥](#types-of-cloud-computing-services-high-yield)
- [SHARED RESPONSIBILITY MODEL 🔥](#shared-responsibility-model-high-yield)
- [CLOUD DEPLOYMENT MODELS 🔥](#cloud-deployment-models-high-yield)
- [Extras de examen (Boson Practice Test)](#extras-de-examen-boson-practice-test)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **Cloud computing** — entrega bajo demanda de capacidades de TI a través de Internet con pago por uso (*On-demand + Internet + Metered*).
- **NIST SP 800-145** — 5 características esenciales: on-demand self-service, broad network access, resource pooling, rapid elasticity y measured service.
- **On-demand self-service** — el usuario aprovisiona recursos sin interacción humana; **resource pooling** = recursos del proveedor compartidos entre múltiples inquilinos.
- **IaaS** — el proveedor da VMs, almacenamiento y red; el cliente gestiona SO, aplicaciones y datos (el modelo con más control; ej. AWS EC2).
- **PaaS** — plataforma de desarrollo: el cliente solo gestiona el código; el proveedor, SO, runtime y middleware (ej. Google App Engine).
- **SaaS** — aplicación lista para usar desde el navegador (Gmail, Salesforce, Microsoft 365); desventajas: dependencia de Internet y vendor lock-in.
- **IDaaS / SECaaS / CaaS / FaaS / XaaS** — identidad (MFA, SSO; Okta), seguridad (IDS, IPS, DLP, SIEM), contenedores (EKS, GKE), código event-driven sin servidores (AWS Lambda), cualquier servicio.
- **Shared responsibility model** — más servicio = menos control; la seguridad NUNCA es solo del proveedor. Los service models definen la responsabilidad; los deployment models, la propiedad.
- **Hybrid vs multi-cloud** — hybrid = público + privado; multi-cloud = varios proveedores (AWS + Azure) para evitar vendor lock-in.
- **Private vs community cloud** — private = una sola organización (alta seguridad, alto coste); community = varias organizaciones con necesidades regulatorias comunes.
- **NIST cloud reference architecture** — 5 actores: cloud consumer, provider, carrier (conectividad y transporte), broker (negocia entre proveedor y consumidor) y auditor (evaluación independiente).
- **MITC (Man-in-the-Cloud)** — se evita con un **CASB** (Cloud Access Security Broker); **Docker daemon** = atiende las peticiones de la API y gestiona los objetos Docker.

---

## OBJECTIVE 01 — SUMMARIZE CLOUD COMPUTING CONCEPTS

### CLOUD COMPUTING — CORE EXAM DEFINITION

|Term|Definition|
|---|---|
|Cloud Computing|Entrega bajo demanda de capacidades de TI, incluyendo infraestructura y aplicaciones, a través de Internet con un modelo de facturación basado en uso|

> 🧠 *Para recordar:* **On-demand + Internet + Metered**

---

### WHAT CLOUD PROVIDES

|Provides|
|---|
|Servers|
|Storage|
|Databases|
|Networking|
|Software|
|Analytics|

---

### KEY CHARACTERISTICS OF CLOUD COMPUTING (HIGH YIELD)

|Characteristic|Explanation|
|---|---|
|On-demand self-service|Los usuarios pueden aprovisionar recursos sin interacción humana|
|Broad network access|Servicios disponibles a través de la red mediante plataformas estándar|
|Resource pooling|El proveedor agrupa recursos para múltiples inquilinos|
|Rapid elasticity|Los recursos escalan hacia arriba y abajo rápidamente|
|Measured service|Modelo de facturación por uso|
|Automated management|Administración manual reducida|

> 🧠 *Para recordar:* **On-demand, pooled, elastic, measured**

> ⚠️ *Trampa de examen:* NIST (SP 800-145) define **5 características esenciales**: on-demand self-service, broad network access, resource pooling, rapid elasticity y measured service. *Automated management* no es una de las 5 de NIST.

---

### LIMITATIONS OF CLOUD COMPUTING

|Limitation|
|---|
|Control y flexibilidad limitados|
|Problemas de seguridad, privacidad y cumplimiento normativo|
|Dependencia de Internet|
|Vendor lock-in|
|Vulnerabilidades técnicas|
|Dificultades de migración|

> ⚠️ *Trampa de examen:* La nube NO garantiza la seguridad automáticamente.

---

## TYPES OF CLOUD COMPUTING SERVICES (HIGH YIELD)

> ⚠️ *Trampa de examen:* NIST solo define **3 service models**: IaaS, PaaS y SaaS. IDaaS, SECaaS, CaaS, FaaS y XaaS son categorías adicionales, no modelos NIST.

---

### INFRASTRUCTURE-AS-A-SERVICE (IaaS)

|Aspect|Details|
|---|---|
|What it provides|Máquinas virtuales, almacenamiento, redes|
|User controls|SO, aplicaciones, datos|
|Provider controls|Hardware, virtualización|
|Examples|AWS EC2, Microsoft Azure, Google Compute Engine|

#### ADVANTAGES

|Advantage|
|---|
|Dynamic scaling|
|Guaranteed uptime|
|Elastic load balancing|
|Global accessibility|

#### DISADVANTAGES

|Disadvantage|
|---|
|Riesgos de seguridad del software|
|Dependencia del rendimiento|

> 🧠 *Para recordar:* **IaaS = alquilar hardware**

---

### PLATFORM-AS-A-SERVICE (PaaS)

|Aspect|Details|
|---|---|
|What it provides|Plataforma de desarrollo de aplicaciones|
|User controls|Código de la aplicación|
|Provider controls|SO, runtime, middleware|
|Examples|Google App Engine, Azure App Service|

#### ADVANTAGES

|Advantage|
|---|
|Simplified deployment|
|Built-in scalability|
|Pay-per-use|

#### DISADVANTAGES

|Disadvantage|
|---|
|Vendor lock-in|
|Problemas de privacidad de datos|

> 🧠 *Para recordar:* **PaaS = desarrollar apps**

---

### SOFTWARE-AS-A-SERVICE (SaaS)

|Aspect|Details|
|---|---|
|What it provides|Aplicaciones listas para usar|
|Access|Basado en navegador|
|Examples|Gmail, Salesforce, Microsoft 365|

#### ADVANTAGES

|Advantage|
|---|
|Low cost|
|Easy administration|
|Global access|

#### DISADVANTAGES

|Disadvantage|
|---|
|Dependencia de Internet|
|Cambiar de proveedor es difícil|

> 🧠 *Para recordar:* **SaaS = usar software**

---

### IDENTITY-AS-A-SERVICE (IDaaS)

|Aspect|Details|
|---|---|
|Purpose|Autenticación y gestión de identidades|
|Functions|MFA, SSO, IAM|
|Examples|Azure AD, Okta|

#### DISADVANTAGES

|Disadvantage|
|---|
|Single point of failure|
|Riesgo de secuestro de cuentas|

> 🧠 *Para recordar:* **IDaaS = identidad / login en la nube**

---

### SECURITY-AS-A-SERVICE (SECaaS)

|Aspect|Details|
|---|---|
|Purpose|Servicios de seguridad basados en cloud|
|Services|IDS, IPS, DLP, SIEM|
|Examples|Trend Micro, IBM Security|

> 🧠 *Para recordar:* **SECaaS = externalizar la seguridad**

---

### CONTAINER-AS-A-SERVICE (CaaS)

|Aspect|Details|
|---|---|
|Purpose|Gestionar contenedores|
|Technology|Docker, Kubernetes|
|Examples|AWS EKS, Google GKE|

> 🧠 *Para recordar:* **CaaS = contenedores**

---

### FUNCTION-AS-A-SERVICE (FaaS)

|Aspect|Details|
|---|---|
|Purpose|Ejecutar código sin servidores|
|Execution|Event-driven|
|Examples|AWS Lambda, Azure Functions|

> 🧠 *Para recordar:* **FaaS = solo código**

---

### ANYTHING-AS-A-SERVICE (XaaS)

|Aspect|Details|
|---|---|
|Meaning|Cualquier servicio de TI entregado a través de cloud|
|Includes|SaaS, PaaS, MaaS, DRaaS|

> 🧠 *Para recordar:* **XaaS = cualquier cosa como servicio**

---

## SHARED RESPONSIBILITY MODEL (HIGH YIELD)

|Layer|On-Prem|IaaS|PaaS|SaaS|
|---|---|---|---|---|
|Applications|User|User|User|Provider|
|Data|User|User|User|Provider|
|OS|User|User|Provider|Provider|
|Virtualization|User|Provider|Provider|Provider|
|Hardware|User|Provider|Provider|Provider|

> ⚠️ *Trampa de examen:* La seguridad NO es responsabilidad exclusiva del proveedor.

> 🧠 *Para recordar:* **Más servicio = menos control**

---

## CLOUD DEPLOYMENT MODELS (HIGH YIELD)

> ⚠️ *Trampa de examen:* NIST define **4 deployment models**: public, private, community y hybrid. Multi-cloud no es un modelo NIST.

---

### PUBLIC CLOUD

|Aspect|Details|
|---|---|
|Ownership|Proveedor de terceros|
|Access|Internet|
|Examples|AWS, Azure|

#### DISADVANTAGES

|Disadvantage|
|---|
|La seguridad no está garantizada|
|Control limitado|

---

### PRIVATE CLOUD

|Aspect|Details|
|---|---|
|Ownership|Una sola organización|
|Security|Alta|
|Cost|Alto|

---

### COMMUNITY CLOUD

|Aspect|Details|
|---|---|
|Shared by|Múltiples organizaciones|
|Use case|Necesidades regulatorias|

---

### HYBRID CLOUD

|Aspect|Details|
|---|---|
|Combination|Público + Privado|
|Benefit|Flexibilidad|

---

### MULTI-CLOUD

|Aspect|Details|
|---|---|
|Uses|Múltiples proveedores|
|Benefit|Evitar vendor lock-in|

> 🧠 *Para recordar:* **Hybrid = mezcla (público + privado), Multi = varios proveedores**

---

## Extras de examen (Boson Practice Test)

|Concepto|Qué recordar|
|---|---|
|PaaS|Platform as a Service|
|MITC (Man-in-the-Cloud)|Man-in-the-Cloud attack — se puede evitar instalando un CASB (Cloud Access Security Broker)|
|Docker daemon|Atiende las solicitudes de la API de Docker y gestiona los objetos de Docker (imágenes, contenedores, redes, volúmenes)|

### CLOUD ROLES — NIST CLOUD REFERENCE ARCHITECTURE

|Role|Description|
|---|---|
|Cloud Consumer|Persona u organización que utiliza los servicios del proveedor de cloud|
|Cloud Provider|Pone el servicio cloud a disposición de los consumidores; en SaaS despliega, configura, mantiene y actualiza las aplicaciones de software|
|Cloud Carrier|Intermediario que proporciona conectividad y transporte de servicios de cloud entre proveedores y consumidores|
|Cloud Broker|Gestiona el uso, rendimiento y entrega de los servicios cloud y negocia relaciones entre proveedores y consumidores|
|Cloud Auditor|Realiza una evaluación independiente de los servicios cloud (operaciones, rendimiento y seguridad)|

---

## Flashcards

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

## Preguntas de práctica

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
