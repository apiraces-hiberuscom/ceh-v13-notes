# Módulo 14 · Parte 4 — APIs and Webhooks

> **Módulo 14 — Hacking Web Applications** · Parte 4 de 5 · Web APIs (REST, SOAP, GraphQL), métodos de autenticación, vulnerabilidades y superficie de ataque de las APIs, y funcionamiento y riesgos de los webhooks.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [1. WEB API — CEH DEFINITION](#1-web-api--ceh-definition)
- [2. PURPOSE OF WEB APIs](#2-purpose-of-web-apis)
- [3. COMMON WEB API TYPES 🔥](#3-common-web-api-types-high-yield)
- [4. REST API — CORE CONCEPTS](#4-rest-api--core-concepts)
- [5. SOAP API — CORE CONCEPTS](#5-soap-api--core-concepts)
- [6. API AUTHENTICATION METHODS 🔥](#6-api-authentication-methods-high-yield)
- [7. COMMON API VULNERABILITIES](#7-common-api-vulnerabilities)
- [8. API ATTACK SURFACE](#8-api-attack-surface)
- [9. API ATTACK LOGIC (GENERIC)](#9-api-attack-logic-generic)
- [10. API TESTING TOOLS](#10-api-testing-tools)
- [11. WEBHOOK — CEH DEFINITION](#11-webhook--ceh-definition)
- [12. HOW WEBHOOKS WORK](#12-how-webhooks-work)
- [13. WEBHOOK SECURITY RISKS](#13-webhook-security-risks)
- [14. WEBHOOK ATTACK LOGIC](#14-webhook-attack-logic)
- [15. API VS WEBHOOK](#15-api-vs-webhook)
- [16. API SECURITY CONTROLS 🔥](#16-api-security-controls-high-yield)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **Web API types** — REST (métodos HTTP, stateless), SOAP (solo XML, mensajería estricta, WS-Security), GraphQL (el cliente define la consulta de datos).
- **REST principles** — stateless, separación client-server, cacheable, uniform interface.
- **HTTP methods** — GET obtiene, POST envía, PUT actualiza, PATCH actualiza parcialmente, DELETE elimina (**G P P P D**).
- **SOAP components** — WSDL (describe operaciones e interfaz del servicio), Envelope (envoltorio), Header (seguridad y metadatos), Body (petición/respuesta).
- **API authentication** — API Keys (token estático), Basic Auth (usuario/contraseña), OAuth 2.0 (acceso delegado basado en tokens), JWT (tokens JSON firmados).
- **BOLA (Broken Object Level Authorization)** — cambiar IDs de objetos en los parámetros para acceder a registros de otro usuario.
- **Mass Assignment** — el atacante modifica propiedades del objeto no previstas a través de los parámetros de la API.
- **Lack of Rate Limiting** — se mitiga con **rate limiting**: límite de peticiones por periodo de tiempo.
- **API testing tools** — Postman e Insomnia (REST), SoapUI (SOAP), Burp Suite (intercepción), OWASP ZAP (escaneo).
- **Webhook** — envía datos en tiempo real vía **HTTP POST** cuando ocurre un evento: Event → Trigger → POST → Process.
- **API vs Webhook** — API: el cliente pide (pull), basada en peticiones, bidireccional; webhook: el servidor envía (push), basado en eventos, unidireccional.
- **Webhook risks** — sin autenticación, payload tampering, replay attacks, data leakage.

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

## 3. COMMON WEB API TYPES (HIGH YIELD)

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
|Stateless — comunicación sin estado|
|Client-server — separación cliente-servidor|
|Cacheable — respuestas que se pueden cachear|
|Uniform interface — interfaz uniforme|

---

### HTTP METHODS USED IN REST APIs

|Method|Purpose|
|---|---|
|GET|Obtener datos|
|POST|Enviar datos|
|PUT|Actualizar datos|
|PATCH|Actualización parcial|
|DELETE|Eliminar datos|

> 🧠 *Para recordar:* **G P P P D**

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

## 6. API AUTHENTICATION METHODS (HIGH YIELD)

|Method|Description|
|---|---|
|API Keys|Token estático|
|Basic Auth|Nombre de usuario/contraseña|
|OAuth 2.0|Acceso delegado basado en tokens|
|JWT|Tokens JSON firmados|

> 🧠 *Para recordar:* **Key → Basic → Token → JWT**

---

## 7. COMMON API VULNERABILITIES

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
|Parámetros|
|Headers|
|Tokens de autenticación|
|Versiones de la API|

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

## 10. API TESTING TOOLS

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

## 12. HOW WEBHOOKS WORK

|Step|Action|
|---|---|
|1|Ocurre un evento|
|2|Se activa el webhook|
|3|Se envía un HTTP POST|
|4|El receptor procesa el payload|

> 🧠 *Para recordar:* **Event → Trigger → POST → Process**

---

## 13. WEBHOOK SECURITY RISKS

|Risk|
|---|
|Sin autenticación|
|Payload tampering — manipulación del payload|
|Replay attacks — ataques de repetición|
|Data leakage — filtración de datos|

---

## 14. WEBHOOK ATTACK LOGIC

|Step|Action|
|---|---|
|1|El atacante descubre la URL del webhook|
|2|Crea un payload falso|
|3|Envía una solicitud POST|
|4|El receptor procesa los datos maliciosos|

---

## 15. API VS WEBHOOK

|Feature|API|Webhook|
|---|---|---|
|Communication|El cliente obtiene datos (pull)|El servidor envía datos (push)|
|Trigger|Basado en solicitudes|Basado en eventos|
|Direction|Bidireccional|Unidireccional|

---

## 16. API SECURITY CONTROLS (HIGH YIELD)

|Control|
|---|
|Autenticación robusta|
|Verificaciones de autorización|
|Validación de entradas|
|Rate limiting|
|Logging y monitorización|

---

## Flashcards

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

## Preguntas de práctica

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
