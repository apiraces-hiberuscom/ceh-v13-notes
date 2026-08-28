# OBJECTIVE 04 — WEB APIs AND WEBHOOKS

---

## 1. WEB API — CEH DEFINITION

|Item|Memorize|
|---|---|
|Web API|Una interfaz de programación de aplicaciones que permite la interacción entre diferentes aplicaciones de software a través de HTTP/HTTPS|

---

## 2. PURPOSE OF WEB APIs

|Purpose|
|---|
|Permitir la comunicación entre sistemas|
|Intercambiar datos|
|Integrar servicios de terceros|
|Soportar clientes móviles y web|

---

## 3. COMMON WEB API TYPES (EXAM MUST)

|API Type|Description|
|---|---|
|REST API|Utiliza métodos HTTP y comunicación sin estado|
|SOAP API|Utiliza XML y estándares estrictos de mensajería|
|GraphQL API|Consultas de datos definidas por el cliente|

---

## 4. REST API — CORE CONCEPTS

### REST ARCHITECTURAL PRINCIPLES

|Principle|
|---|
|Comunicación sin estado|
|Separación cliente-servidor|
|Respuestas con caché|
|Interfaz uniforme|

---

### HTTP METHODS USED IN REST APIs

|Method|Purpose|
|---|---|
|GET|Obtener datos|
|POST|Enviar datos|
|PUT|Actualizar datos|
|PATCH|Actualización parcial|
|DELETE|Eliminar datos|

MEMORY HOOK:  
**G P P P D**

---

### REST API COMPONENTS

|Component|Description|
|---|---|
|Endpoint|URL de la API|
|Headers|Metadatos|
|Body|Payload|
|Parameters|Valores de entrada|

---

## 5. SOAP API — CORE CONCEPTS

|Item|Memorize|
|---|---|
|SOAP|Simple Object Access Protocol|
|Data Format|Solo XML|
|Security|WS-Security|

---

### SOAP COMPONENTS

|Component|Description|
|---|---|
|WSDL|Descripción del servicio|
|Envelope|Envoltorio del mensaje|
|Header|Seguridad y metadatos|
|Body|Solicitud/respuesta|

---

## 6. API AUTHENTICATION METHODS (VERY IMPORTANT)

|Method|Description|
|---|---|
|API Keys|Token estático|
|Basic Auth|Nombre de usuario/contraseña|
|OAuth 2.0|Acceso delegado basado en tokens|
|JWT|Tokens JSON firmados|

MEMORY HOOK:  
**Key → Basic → Token → JWT**

---

## 7. COMMON API VULNERABILITIES (CEH LIST)

|Vulnerability|
|---|
|Broken Object Level Authorization (BOLA)|
|Broken User Authentication|
|Excessive Data Exposure|
|Lack of Rate Limiting|
|Mass Assignment|
|Injection|
|Improper Assets Management|

---

## 8. API ATTACK SURFACE

|Attack Surface|
|---|
|Endpoints|
|Parameters|
|Headers|
|Authentication tokens|
|API versions|

---

## 9. API ATTACK LOGIC (GENERIC)

|Step|Action|
|---|---|
|1|Descubrir los endpoints de la API|
|2|Analizar la autenticación|
|3|Probar la autorización|
|4|Manipular parámetros|
|5|Explotar la vulnerabilidad|

---

## 10. API TESTING TOOLS (CEH-EXPECTED)

|Tool|Purpose|
|---|---|
|Postman|Testing de API|
|Burp Suite|Intercepción|
|SoapUI|Testing de SOAP API|
|OWASP ZAP|Escaneo de API|
|Insomnia|Testing de REST API|

---

## 11. WEBHOOK — CEH DEFINITION

|Item|Memorize|
|---|---|
|Webhook|Un mecanismo que envía datos en tiempo real de una aplicación a otra cuando ocurre un evento|

---

## 12. HOW WEBHOOKS WORK (EXAM FLOW)

|Step|Action|
|---|---|
|1|Ocurre un evento|
|2|Se activa el webhook|
|3|Se envía un HTTP POST|
|4|El receptor procesa el payload|

MEMORY HOOK:  
**Event → Trigger → POST → Process**

---

## 13. WEBHOOK SECURITY RISKS

|Risk|
|---|
|Sin autenticación|
|Manipulación del payload|
|Ataques de repetición (replay attacks)|
|Filtración de datos|

---

## 14. WEBHOOK ATTACK LOGIC

|Step|Action|
|---|---|
|1|El atacante descubre la URL del webhook|
|2|Crea un payload falso|
|3|Envía una solicitud POST|
|4|El receptor procesa los datos maliciosos|

---

## 15. API VS WEBHOOK (EXAM COMPARISON)

|Feature|API|Webhook|
|---|---|---|
|Communication|El cliente obtiene datos (pull)|El servidor envía datos (push)|
|Trigger|Basado en solicitudes|Basado en eventos|
|Direction|Bidireccional|Unidireccional|

---

## 16. API SECURITY CONTROLS (MEMORIZE)

|Control|
|---|
|Autenticación robusta|
|Verificaciones de autorización|
|Validación de entradas|
|Rate limiting|
|Registro y monitoreo|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Web API | Una interfaz que permite la interacción entre diferentes aplicaciones de software a través de HTTP/HTTPS |
| REST API | API sin estado que utiliza métodos HTTP (GET, POST, PUT, PATCH, DELETE) con JSON o XML |
| SOAP API | Protocolo basado en XML que utiliza estándares estrictos de mensajería y WS-Security |
| GraphQL API | API que permite a los clientes definir las consultas exactas de datos que necesitan |
| API Key | Token estático utilizado para autenticar solicitudes de API |
| OAuth 2.0 | Marco de autorización de acceso delegado basado en tokens |
| JWT — JSON Web Token | Tokens JSON firmados utilizados para la autenticación segura de API e intercambio de datos |
| BOLA — Broken Object Level Authorization | Vulnerabilidad que permite acceder a objetos no autorizados manipulando IDs |
| Mass Assignment | Vulnerabilidad donde un atacante modifica propiedades no deseadas de objetos a través de parámetros de API |
| Webhook | Un mecanismo que envía datos en tiempo real de una aplicación a otra mediante HTTP POST cuando ocurre un evento |
| API Endpoint | La URL específica donde se puede acceder a un recurso de API |
| Rate Limiting | Mecanismo de control que restringe el número de solicitudes de API por período de tiempo |
| API vs Webhook | Las APIs son bidireccionales basadas en solicitudes; los webhooks son notificaciones push unidireccionales basadas en eventos |

---

# PRACTICE QUESTIONS

**1.** ¿Qué método HTTP se utiliza para enviar datos a un endpoint de REST API?
- a) GET
- b) DELETE
- c) POST
- d) PATCH
**Answer:** C — POST se utiliza para enviar datos a un servidor; GET obtiene datos, PATCH actualiza parcialmente, DELETE elimina.

**2.** ¿Cuál es la diferencia clave entre una API y un webhook?
- a) Las APIs usan solo XML; los webhooks usan solo JSON
- b) Las APIs son bidireccionales basadas en solicitudes; los webhooks son push unidireccionales basados en eventos
- c) Las APIs son más seguras que los webhooks
- d) Los webhooks requieren polling; las APIs envían datos automáticamente
**Answer:** B — Las APIs siguen un modelo de pull del cliente (bidireccional, basado en solicitudes); los webhooks siguen un modelo de push del servidor (unidireccional, basado en eventos).

**3.** Un atacante modifica los IDs de objetos en los parámetros de una API para acceder a los registros de otro usuario. ¿Qué vulnerabilidad es esta?
- a) Mass Assignment
- b) Broken Object Level Authorization (BOLA)
- c) Excessive Data Exposure
- d) Lack of Rate Limiting
**Answer:** B — BOLA ocurre cuando una API no verifica si el usuario autenticado está autorizado para acceder al objeto solicitado.

**4.** ¿Qué componente de SOAP describe las operaciones e interfaz de un servicio web?
- a) Envelope
- b) Header
- c) WSDL
- d) Body
**Answer:** C — WSDL (Web Services Description Language) describe las operaciones del servicio, los endpoints y los tipos de datos.

**5.** ¿Qué control de seguridad impide que un atacante inunde una API con solicitudes excesivas?
- a) OAuth 2.0
- b) Input validation
- c) Rate limiting
- d) JWT signing
**Answer:** C — Rate limiting restringe el número de solicitudes que un cliente puede realizar dentro de un período de tiempo dado, previniendo el abuso.
