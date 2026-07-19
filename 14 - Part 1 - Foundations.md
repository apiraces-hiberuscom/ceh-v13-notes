# MODULE 14 – HACKING WEB APPLICATIONS

## PART 1: FOUNDATIONS (PAGES 1–14)

---

## 1. MODULE OBJECTIVES (MEMORIZE VERBATIM)

|Objective ID|Objective|
|---|---|
|O1|Summarize web application concepts|
|O2|Demonstrate web application threats|
|O3|Explain web application hacking methodology|
|O4|Explain web API and webhooks|
|O5|Summarize techniques used in web application security|

**Memory Hook:**  
**C-T-M-A-S** → _Concepts, Threats, Methodology, APIs, Security_

---

## 2. WEB APPLICATION – CEH DEFINITION

|Term|Definition|
|---|---|
|Web Application|A software program that runs on a web browser and acts as an interface between users and web servers through HTTP/HTTPS.|

**Key CEH Properties**

- Runs inside a **browser**
    
- Uses **client–server architecture**
    
- Handles **dynamic content**
    
- Communicates via **HTTP/HTTPS**
    
- Interfaces with **databases and services**
    

---

## 3. HOW WEB APPLICATIONS WORK (EXAM FLOW)

|Step|Description|
|---|---|
|1|User enters a URL in the browser|
|2|Browser sends an HTTP request to the web server|
|3|Web server checks requested resource|
|4|Static content → returned directly|
|5|Dynamic content → forwarded to application server|
|6|Application server processes logic|
|7|Database queried if required|
|8|Response returned to browser|

**Memory Hook:**  
**URL → HTTP → Server → App → DB → Response**

---

## 4. ADVANTAGES OF WEB APPLICATIONS (EXAM LIST)

|Advantage|
|---|
|OS-independent|
|Accessible anytime and anywhere|
|Device-independent|
|Centrally managed servers|
|Scalable and cost-effective|
|Uses standard technologies (HTML, JS, JSP, ASP, PHP, .NET)|

---

## 5. WHY WEB APPLICATIONS ARE VULNERABLE

|Reason|
|---|
|Complex architecture|
|Multiple integration points|
|User-controlled input|
|Third-party components|
|Rapid development cycles|
|Poor input validation|

**Exam Trap:**

> CEH always links **user input + poor validation** to **most web attacks**

---

## 6. WEB APPLICATION ARCHITECTURE (3-LAYER MODEL)

### 6.1 ARCHITECTURE OVERVIEW

|Layer|Purpose|
|---|---|
|Presentation Layer|User interface and input handling|
|Business Logic Layer|Application processing and decision logic|
|Database Layer|Data storage and retrieval|

---

### 6.2 PRESENTATION LAYER

|Component|Description|
|---|---|
|Browser|Sends HTTP requests|
|HTML/CSS|UI rendering|
|JavaScript|Client-side logic|

**Exam Note:**  
Client-side validation is **NOT security**

---

### 6.3 BUSINESS LOGIC LAYER

|Component|Description|
|---|---|
|Web Server|Handles HTTP requests|
|Application Server|Executes business logic|
|Firewall|Filters traffic|

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
|DBMS|Stores application data|
|Examples|MySQL, MSSQL, Oracle|

**Exam Trap:**  
Database attacks ≠ web server attacks, but **web apps expose DBs**

---

## 7. WEB SERVICES – CEH DEFINITION

|Term|Definition|
|---|---|
|Web Service|An application or software deployed over the Internet that enables communication between applications using standard protocols.|

---

## 8. WEB SERVICE ROLES (EXAM FAVORITE)

|Role|Description|
|---|---|
|Service Provider|Hosts and publishes the service|
|Service Requester|Requests and consumes the service|
|Service Registry|Stores service descriptions|

---

## 9. WEB SERVICE OPERATIONS (PUB–FIND–BIND)

|Operation|Meaning|
|---|---|
|Publish|Provider publishes service|
|Find|Requester discovers service|
|Bind|Requester connects and uses service|

**Memory Hook:**  
**PFB = Publish → Find → Bind**

---

## 10. TYPES OF WEB SERVICES

|Type|Description|
|---|---|
|SOAP|XML-based, protocol-driven|
|REST|Lightweight, HTTP-based|

---

## 11. SOAP VS REST (EXAM TABLE)

|Feature|SOAP|REST|
|---|---|---|
|Data Format|XML only|JSON, XML|
|Protocol|Strict|HTTP|
|Complexity|High|Low|
|Performance|Slower|Faster|

---

## 12. WEB SERVICE COMPONENTS

|Component|Description|
|---|---|
|UDDI|Service registry|
|WSDL|Service description|
|WS-Security|Secures SOAP messages|

---

## 13. VULNERABILITY STACK (7 LAYERS – VERY IMPORTANT)

|Layer|Target|
|---|---|
|Layer 7|Web application logic|
|Layer 6|Third-party components|
|Layer 5|Web server|
|Layer 4|Database|
|Layer 3|Operating system|
|Layer 2|Network|
|Layer 1|IPS/IDS|

**Memory Hook:**  
**App → Third-Party → Web → DB → OS → Network → Security**

---

## 14. LAYER-WISE ATTACK FOCUS (EXAM GOLD)

|Layer|Typical Attacks|
|---|---|
|7|XSS, input validation|
|6|Payment gateway abuse|
|5|Server misconfig|
|4|SQL injection|
|3|Privilege escalation|
|2|DoS|
|1|IDS evasion|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Web Application | A software program running on a web browser acting as an interface between users and web servers via HTTP/HTTPS |
| Client-Server Architecture | Model where the browser (client) requests resources and the web server responds |
| Presentation Layer | The UI layer handling user input and rendering HTML/CSS/JavaScript |
| Business Logic Layer | The layer that executes application processing and decision logic |
| Database Layer | The layer responsible for data storage and retrieval (e.g., MySQL, Oracle) |
| Web Service | Software deployed over the Internet enabling communication between applications using standard protocols |
| SOAP | XML-based, protocol-driven web service with strict messaging standards |
| REST | Lightweight, HTTP-based web service using JSON or XML |
| UDDI | Universal Description, Discovery, and Integration — a service registry for web services |
| WSDL | Web Services Description Language — describes web service operations and interfaces |
| Vulnerability Stack | 7-layer model mapping targets from web application logic (L7) down to IPS/IDS (L1) |
| Static Content | Web resources returned directly by the server without processing (HTML, images) |
| Dynamic Content | Web content generated on-the-fly by the application server based on user input or logic |

---

# PRACTICE QUESTIONS

**1.** In the CEH 3-layer web application architecture, which layer is responsible for executing business logic and processing decisions?
- a) Presentation Layer
- b) Business Logic Layer
- c) Database Layer
- d) Network Layer
**Answer:** B — The Business Logic Layer executes application processing and decision logic, sitting between the Presentation and Database layers.

**2.** What is the correct order of web service operations according to the Publish-Find-Bind model?
- a) Find → Publish → Bind
- b) Bind → Find → Publish
- c) Publish → Find → Bind
- d) Publish → Bind → Find
**Answer:** C — The provider Publishes the service, the requester Finds it, then Binds to consume it.

**3.** Which of the following is an advantage of web applications over desktop applications?
- a) Requires specific OS installation
- b) OS-independent and accessible from any browser
- c) Cannot handle dynamic content
- d) Must be installed on each client device
**Answer:** B — Web applications run in a browser, making them OS-independent and accessible anytime from any device.

**4.** Which layer of the vulnerability stack is targeted by SQL injection attacks?
- a) Layer 7 — Web application logic
- b) Layer 5 — Web server
- c) Layer 4 — Database
- d) Layer 3 — Operating system
**Answer:** C — SQL injection targets the Database layer (Layer 4) by manipulating queries sent from the application.

**5.** Which statement about client-side validation is correct according to CEH?
- a) It provides sufficient security for web applications
- b) It is the only validation needed
- c) It is NOT security — server-side validation is required
- d) It prevents all injection attacks
**Answer:** C — Client-side validation can be bypassed and is never a substitute for proper server-side input validation.

