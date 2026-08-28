# MODULE 14 – HACKING WEB APPLICATIONS

## PART 1: FOUNDATIONS (PAGES 1–14)

---

## 1. MODULE OBJECTIVES (MEMORIZE VERBATIM)

|Objective ID|Objective|
|---|---|
|O1|Resumir los conceptos de web application|
|O2|Demostrar las amenazas de web application|
|O3|Explicar la metodología de hacking de web application|
|O4|Explicar web API y webhooks|
|O5|Resumir las técnicas utilizadas en la seguridad de web applications|

**Memory Hook:**  
**C-T-M-A-S** → _Concepts, Threats, Methodology, APIs, Security_

---

## 2. WEB APPLICATION – CEH DEFINITION

|Term|Definition|
|---|---|
|Web Application|Un programa de software que se ejecuta en un web browser y actúa como una interfaz entre los usuarios y los web servers a través de HTTP/HTTPS.|

**Key CEH Properties**

- Se ejecuta dentro de un **browser**
    
- Utiliza **arquitectura cliente–servidor**
    
- Maneja **contenido dinámico**
    
- Se comunica a través de **HTTP/HTTPS**
    
- Se interconecta con **bases de datos y servicios**
    

---

## 3. HOW WEB APPLICATIONS WORK (EXAM FLOW)

|Step|Description|
|---|---|
|1|El usuario ingresa una URL en el browser|
|2|El browser envía una solicitud HTTP al web server|
|3|El web server verifica el recurso solicitado|
|4|Contenido estático → devuelto directamente|
|5|Contenido dinámico → reenviado al application server|
|6|El application server procesa la lógica|
|7|Se consulta la base de datos si es necesario|
|8|La respuesta se devuelve al browser|

**Memory Hook:**  
**URL → HTTP → Server → App → DB → Response**

---

## 4. ADVANTAGES OF WEB APPLICATIONS (EXAM LIST)

|Advantage|
|---|
|Independiente del OS|
|Accesible en cualquier momento y lugar|
|Independiente del dispositivo|
|Servidores gestionados centralmente|
|Escalable y rentable|
|Utiliza tecnologías estándar (HTML, JS, JSP, ASP, PHP, .NET)|

---

## 5. WHY WEB APPLICATIONS ARE VULNERABLE

|Reason|
|---|
|Arquitectura compleja|
|Múltiples puntos de integración|
|Entrada controlada por el usuario|
|Componentes de terceros|
|Ciclos de desarrollo rápidos|
|Mala validación de entradas|

**Exam Trap:**

> CEH siempre vincula **entrada del usuario + mala validación** con **la mayoría de los ataques web**

---

## 6. WEB APPLICATION ARCHITECTURE (3-LAYER MODEL)

### 6.1 ARCHITECTURE OVERVIEW

|Layer|Purpose|
|---|---|
|Presentation Layer|Interfaz de usuario y manejo de entradas|
|Business Logic Layer|Procesamiento de la aplicación y lógica de decisiones|
|Database Layer|Almacenamiento y recuperación de datos|

---

### 6.2 PRESENTATION LAYER

|Component|Description|
|---|---|
|Browser|Envía solicitudes HTTP|
|HTML/CSS|Renderizado de UI|
|JavaScript|Lógica del lado del cliente|

**Exam Note:**  
La validación del lado del cliente **NO ES SEGURIDAD**

---

### 6.3 BUSINESS LOGIC LAYER

|Component|Description|
|---|---|
|Web Server|Maneja las solicitudes HTTP|
|Application Server|Ejecuta la lógica de negocio|
|Firewall|Filtra el tráfico|

**Technologies**

- Java
    
- PHP
    
- Python
    
- .NET
    
- Node.js
    

---

### 6.4 DATABASE LAYER

|Component|Description|
|---|---|
|DBMS|Almacena los datos de la aplicación|
|Examples|MySQL, MSSQL, Oracle|

**Exam Trap:**  
Los ataques a bases de datos ≠ ataques al web server, pero **las web apps exponen las bases de datos**

---

## 7. WEB SERVICES – CEH DEFINITION

|Term|Definition|
|---|---|
|Web Service|Una aplicación o software desplegado a través de Internet que permite la comunicación entre aplicaciones utilizando protocolos estándar.|

---

## 8. WEB SERVICE ROLES (EXAM FAVORITE)

|Role|Description|
|---|---|
|Service Provider|Aloja y publica el servicio|
|Service Requester|Solicita y consume el servicio|
|Service Registry|Almacena las descripciones de los servicios|

---

## 9. WEB SERVICE OPERATIONS (PUB–FIND–BIND)

|Operation|Meaning|
|---|---|
|Publish|El provider publica el servicio|
|Find|El requester descubre el servicio|
|Bind|El requester se conecta y utiliza el servicio|

**Memory Hook:**  
**PFB = Publish → Find → Bind**

---

## 10. TYPES OF WEB SERVICES

|Type|Description|
|---|---|
|SOAP|Basado en XML, orientado a protocolo|
|REST|Ligero, basado en HTTP|

---

## 11. SOAP VS REST (EXAM TABLE)

|Feature|SOAP|REST|
|---|---|---|
|Data Format|Solo XML|JSON, XML|
|Protocol|Estricto|HTTP|
|Complexity|Alta|Baja|
|Performance|Más lento|Más rápido|

---

## 12. WEB SERVICE COMPONENTS

|Component|Description|
|---|---|
|UDDI|Service registry|
|WSDL|Descripción del servicio|
|WS-Security|Asegura los mensajes SOAP|

---

## 13. VULNERABILITY STACK (7 LAYERS – VERY IMPORTANT)

|Layer|Target|
|---|---|
|Layer 7|Lógica de la web application|
|Layer 6|Componentes de terceros|
|Layer 5|Web server|
|Layer 4|Base de datos|
|Layer 3|Sistema operativo|
|Layer 2|Red|
|Layer 1|IPS/IDS|

**Memory Hook:**  
**App → Third-Party → Web → DB → OS → Network → Security**

---

## 14. LAYER-WISE ATTACK FOCUS (EXAM GOLD)

|Layer|Typical Attacks|
|---|---|
|7|XSS, validación de entradas|
|6|Abuso de pasarela de pago (payment gateway)|
|5|Mala configuración del servidor|
|4|SQL injection|
|3|Elevación de privilegios (privilege escalation)|
|2|DoS|
|1|Evasión de IDS|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Web Application | Un programa de software que se ejecuta en un web browser y actúa como interfaz entre usuarios y web servers a través de HTTP/HTTPS |
| Client-Server Architecture | Modelo donde el browser (cliente) solicita recursos y el web server responde |
| Presentation Layer | La capa de UI que maneja las entradas del usuario y renderiza HTML/CSS/JavaScript |
| Business Logic Layer | La capa que ejecuta el procesamiento de la aplicación y la lógica de decisiones |
| Database Layer | La capa responsable del almacenamiento y recuperación de datos (ej. MySQL, Oracle) |
| Web Service | Software desplegado a través de Internet que permite la comunicación entre aplicaciones utilizando protocolos estándar |
| SOAP | Web service basado en XML, orientado a protocolo con estándares de mensajería estrictos |
| REST | Web service ligero, basado en HTTP que utiliza JSON o XML |
| UDDI | Universal Description, Discovery, and Integration — un service registry para web services |
| WSDL | Web Services Description Language — describe las operaciones e interfaces de web services |
| Vulnerability Stack | Modelo de 7 capas que mapea objetivos desde la lógica de la web application (L7) hasta IPS/IDS (L1) |
| Static Content | Recursos web devueltos directamente por el servidor sin procesamiento (HTML, imágenes) |
| Dynamic Content | Contenido web generado dinámicamente por el application server según la entrada del usuario o la lógica |

---

# PRACTICE QUESTIONS

**1.** En la arquitectura de 3 capas de web application del CEH, ¿qué capa es responsable de ejecutar la lógica de negocio y el procesamiento de decisiones?
- a) Presentation Layer
- b) Business Logic Layer
- c) Database Layer
- d) Network Layer
**Answer:** B — La Business Logic Layer ejecuta el procesamiento de la aplicación y la lógica de decisiones, situándose entre las capas Presentation y Database.

**2.** ¿Cuál es el orden correcto de las operaciones de web service según el modelo Publish-Find-Bind?
- a) Find → Publish → Bind
- b) Bind → Find → Publish
- c) Publish → Find → Bind
- d) Publish → Bind → Find
**Answer:** C — El provider publica (Publishes) el servicio, el requester lo encuentra (Finds), y luego se enlaza (Binds) para consumirlo.

**3.** ¿Cuál de las siguientes es una ventaja de las web applications sobre las aplicaciones de escritorio?
- a) Requiere una instalación específica de OS
- b) Independiente del OS y accesible desde cualquier browser
- c) No puede manejar contenido dinámico
- d) Debe instalarse en cada dispositivo cliente
**Answer:** B — Las web applications se ejecutan en un browser, lo que las hace independientes del OS y accesibles en cualquier momento desde cualquier dispositivo.

**4.** ¿Qué capa del vulnerability stack es atacada por los ataques de SQL injection?
- a) Layer 7 — Lógica de la web application
- b) Layer 5 — Web server
- c) Layer 4 — Base de datos
- d) Layer 3 — Sistema operativo
**Answer:** C — El SQL injection ataca la capa de base de datos (Layer 4) manipulando las consultas enviadas desde la aplicación.

**5.** ¿Qué afirmación sobre la validación del lado del cliente es correcta según CEH?
- a) Proporciona seguridad suficiente para las web applications
- b) Es la única validación necesaria
- c) NO ES SEGURIDAD — se requiere validación del lado del servidor
- d) Previene todos los ataques de inyección
**Answer:** C — La validación del lado del cliente puede ser eludida y nunca es un sustituto de la validación de entradas del lado del servidor.
