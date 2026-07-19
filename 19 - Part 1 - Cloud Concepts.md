# OBJECTIVE 01 — SUMMARIZE CLOUD COMPUTING CONCEPTS

---

## CLOUD COMPUTING — CORE EXAM DEFINITION

|Term|Definition|
|---|---|
|Cloud Computing|On-demand delivery of IT capabilities, including infrastructure and applications, over the Internet on a metered basis|

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
|On-demand self-service|Users can provision resources without human interaction|
|Broad network access|Services available over network via standard platforms|
|Resource pooling|Provider pools resources for multiple tenants|
|Rapid elasticity|Resources scale up/down quickly|
|Measured service|Pay-per-use billing model|
|Automated management|Reduced manual administration|

MEMORY HOOK:  
**On-demand, pooled, elastic, measured**

---

## LIMITATIONS OF CLOUD COMPUTING (EXAM)

|Limitation|
|---|
|Limited control and flexibility|
|Security, privacy, and compliance issues|
|Dependency on Internet|
|Vendor lock-in|
|Technical vulnerabilities|
|Migration difficulties|

EXAM TRAP:  
Cloud does NOT automatically guarantee security.

---

# TYPES OF CLOUD COMPUTING SERVICES (CRITICAL)

---

## INFRASTRUCTURE-AS-A-SERVICE (IaaS)

|Aspect|Details|
|---|---|
|What it provides|Virtual machines, storage, networks|
|User controls|OS, applications, data|
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
|Software security risks|
|Performance dependency|

MEMORY HOOK:  
**IaaS = rent hardware**

---

## PLATFORM-AS-A-SERVICE (PaaS)

|Aspect|Details|
|---|---|
|What it provides|Application development platform|
|User controls|Application code|
|Provider controls|OS, runtime, middleware|
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
|Data privacy issues|

MEMORY HOOK:  
**PaaS = build apps**

---

## SOFTWARE-AS-A-SERVICE (SaaS)

|Aspect|Details|
|---|---|
|What it provides|Ready-to-use applications|
|Access|Browser-based|
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
|Internet dependency|
|Switching vendors difficult|

MEMORY HOOK:  
**SaaS = use software**

---

## IDENTITY-AS-A-SERVICE (IDaaS)

|Aspect|Details|
|---|---|
|Purpose|Authentication and identity management|
|Functions|MFA, SSO, IAM|
|Examples|Azure AD, Okta|

### DISADVANTAGES

|Disadvantage|
|---|
|Single point of failure|
|Account hijacking risk|

MEMORY HOOK:  
**IDaaS = cloud login**

---

## SECURITY-AS-A-SERVICE (SECaaS)

|Aspect|Details|
|---|---|
|Purpose|Cloud-based security services|
|Services|IDS, IPS, DLP, SIEM|
|Examples|Trend Micro, IBM Security|

MEMORY HOOK:  
**SECaaS = outsource security**

---

## CONTAINER-AS-A-SERVICE (CaaS)

|Aspect|Details|
|---|---|
|Purpose|Manage containers|
|Technology|Docker, Kubernetes|
|Examples|AWS EKS, Google GKE|

MEMORY HOOK:  
**CaaS = containers**

---

## FUNCTION-AS-A-SERVICE (FaaS)

|Aspect|Details|
|---|---|
|Purpose|Run code without servers|
|Execution|Event-driven|
|Examples|AWS Lambda, Azure Functions|

MEMORY HOOK:  
**FaaS = code only**

---

## ANYTHING-AS-A-SERVICE (XaaS)

|Aspect|Details|
|---|---|
|Meaning|Any IT service delivered via cloud|
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
Security is NOT fully provider’s responsibility.

MEMORY HOOK:  
**More service = less control**

---

# CLOUD DEPLOYMENT MODELS (CRITICAL)

---

## PUBLIC CLOUD

|Aspect|Details|
|---|---|
|Ownership|Third-party provider|
|Access|Internet|
|Examples|AWS, Azure|

### DISADVANTAGES

|Disadvantage|
|---|
|Security not guaranteed|
|Limited control|

---

## PRIVATE CLOUD

|Aspect|Details|
|---|---|
|Ownership|Single organization|
|Security|High|
|Cost|High|

---

## COMMUNITY CLOUD

|Aspect|Details|
|---|---|
|Shared by|Multiple organizations|
|Use case|Regulatory needs|

---

## HYBRID CLOUD

|Aspect|Details|
|---|---|
|Combination|Public + Private|
|Benefit|Flexibility|

---

## MULTI-CLOUD

|Aspect|Details|
|---|---|
|Uses|Multiple providers|
|Benefit|Avoid vendor lock-in|

MEMORY HOOK:  
**Hybrid = mix, Multi = many**

---

# OBJECTIVE 01 — EXAM MEMORY BLOCK

**Cloud computing delivers on-demand IT services over the Internet using a pay-per-use model.  
Service models define responsibility.  
Deployment models define ownership.  
Shared responsibility is always tested.**

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
|Cloud Consumer|Uses services of cloud provider|
|Cloud Provider|Offers SaaS, deploys, configures, maintains software applications for cloud consumer|
|Cloud Carrier|Provides connectivity and transport of cloud services between consumers and providers|
|Cloud Broker|Negotiates relationships between providers and consumers|
|Cloud Auditor|Independent assessment of cloud provider|

---

### PAAS

|Item|Memorize|
|---|---|
PaaS|Platform as a Service|

---

### MITM / CASB

|Item|Memorize|
|---|---|
|MITC|Man in the Cloud attack — can be avoided by installing CASB (Cloud Access Security Broker)|

---

### DOCKER DAEMON

|Item|Memorize|
|---|---|
|Docker daemon|Processes API requests and handles Docker objects|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Cloud Computing | On-demand delivery of IT capabilities over the Internet on a metered basis |
| IaaS | Infrastructure as a Service — provides VMs, storage, networks; user manages OS and apps |
| PaaS | Platform as a Service — provides application development platform; user manages code only |
| SaaS | Software as a Service — ready-to-use applications accessed via browser |
| IDaaS | Identity as a Service — cloud-based authentication and identity management |
| SECaaS | Security as a Service — cloud-based security services like IDS, IPS, DLP, SIEM |
| CaaS | Container as a Service — manages Docker/Kubernetes containers |
| FaaS | Function as a Service — runs code without servers, event-driven execution |
| XaaS | Anything as a Service — any IT service delivered via cloud |
| Shared Responsibility Model | Framework defining security responsibilities between provider and customer |
| Public Cloud | Third-party provider owns infrastructure, accessed over Internet |
| Private Cloud | Single organization owns and controls infrastructure |
| Hybrid Cloud | Combination of public and private clouds |
| Multi-Cloud | Using multiple cloud providers simultaneously |
| Cloud Consumer | Uses services of cloud provider |
| Cloud Provider | Offers and maintains cloud services |
| Cloud Carrier | Provides connectivity between consumers and providers |

---

# PRACTICE QUESTIONS

**1.** In the shared responsibility model, who is responsible for data security in an IaaS deployment?
- a) Cloud provider only
- b) Customer only
- c) Both equally
- d) Neither
**Answer:** b) — In IaaS, the customer is responsible for data, applications, and OS security.

**2.** Which cloud service model provides the most control to the customer?
- a) SaaS
- b) PaaS
- c) IaaS
- d) FaaS
**Answer:** c) — IaaS gives customers control over OS, applications, and data while provider manages hardware.

**3.** A company uses both AWS and Azure for different workloads. What deployment model is this?
- a) Hybrid cloud
- b) Private cloud
- c) Multi-cloud
- d) Community cloud
**Answer:** c) — Multi-cloud uses multiple providers, while hybrid combines public and private.

**4.** Which key characteristic of cloud computing allows users to provision resources without human interaction?
- a) Resource pooling
- b) Rapid elasticity
- c) On-demand self-service
- d) Measured service
**Answer:** c) — On-demand self-service enables users to provision resources automatically.

**5.** What is the primary disadvantage of SaaS?
- a) High cost
- b) Complex management
- c) Internet dependency and vendor lock-in
- d) Limited scalability
**Answer:** c) — SaaS requires Internet access and makes switching vendors difficult due to data migration challenges.
