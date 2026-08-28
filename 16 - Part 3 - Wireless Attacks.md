# OBJECTIVE 03 — WIRELESS THREATS & ATTACKS

---

## WIRELESS THREAT — CORE DEFINITION

|Item|Memorize|
|---|---|
|Wireless Threat|Cualquier riesgo potencial que explota debilidades en la comunicación inalámbrica|

MEMORY HOOK:  
**Wireless = open air = exposed**

---

## CLASSIFICATION OF WIRELESS ATTACKS (EXAM STRUCTURE)

|Category|
|---|
|Passive attacks|
|Active attacks|

---

# PASSIVE WIRELESS ATTACKS

---

## PASSIVE ATTACK — DEFINITION

|Item|Memorize|
|---|---|
|Passive Attack|El atacante monitorea el tráfico sin alterarlo|

---

## PASSIVE ATTACK CHARACTERISTICS

|Feature|
|---|
|Difícil de detectar|
|Sin modificación de paquetes|
|Usado para reconocimiento|

---

## COMMON PASSIVE WIRELESS ATTACKS

|Attack|Description|
|---|---|
|Eavesdropping|Captura de tráfico inalámbrico|
|Traffic analysis|Estudio de patrones de comunicación|
|Packet sniffing|Captura de paquetes por aire|

---

MEMORY HOOK:  
**Passive = listen only**

---

# ACTIVE WIRELESS ATTACKS

---

## ACTIVE ATTACK — DEFINITION

|Item|Memorize|
|---|---|
|Active Attack|El atacante modifica, inyecta o interrumpe la comunicación inalámbrica|

---

## ACTIVE ATTACK CHARACTERISTICS

|Feature|
|---|
|Detectable|
|Packet injection|
|Service disruption|

---

MEMORY HOOK:  
**Active = interfere**

---

# MAJOR WIRELESS ATTACKS (EXAM CRITICAL)

---

## ROGUE ACCESS POINT ATTACK

---

### DEFINITION

|Item|Memorize|
|---|---|
|Rogue AP|Punto de acceso inalámbrico no autorizado conectado a una red|

---

### PURPOSE

|Purpose|
|---|
|Eludir los controles de seguridad|
|Proporcionar acceso backdoor|

---

### EXAM TRAP

|Statement|Correct|
|---|---|
|Rogue AP is attacker-owned|NO|
|Rogue AP can be employee-installed|YES|

---

MEMORY HOOK:  
**Rogue = unauthorized, not fake**

---

## EVIL TWIN ATTACK

---

### DEFINITION

|Item|Memorize|
|---|---|
|Evil Twin|AP falso que imita a un AP legítimo|

---

### ATTACK LOGIC

|Step|
|---|
|El atacante crea un AP falso|
|Usa el mismo SSID|
|Señal más fuerte|
|La víctima se conecta|

---

### GOAL

|Goal|
|---|
|Credential harvesting|
|MITM|

---

MEMORY HOOK:  
**Evil Twin = fake AP**

---

## DEAUTHENTICATION ATTACK

---

### DEFINITION

|Item|Memorize|
|---|---|
|Deauthentication Attack|Envía tramas deauth falsificadas para desconectar clientes|

---

### PROTOCOL EXPLOITED

|Protocol|
|---|
|IEEE 802.11 management frames|

---

### PURPOSE

|Purpose|
|---|
|Forzar reconexión|
|Capturar handshakes|
|Habilitar Evil Twin|

---

MEMORY HOOK:  
**Deauth = kick users off**

---

## DISASSOCIATION ATTACK

---

### DEFINITION

|Item|Memorize|
|---|---|
|Disassociation Attack|Fuerza a los clientes a desconectarse del AP|

---

### DIFFERENCE FROM DEAUTH

|Attack|Key Difference|
|---|---|
|Deauth|Terminación de autenticación|
|Disassociation|Terminación de asociación|

---

MEMORY HOOK:  
**Deauth ≠ Disassoc**

---

## MAN-IN-THE-MIDDLE (MITM)

---

### DEFINITION

|Item|Memorize|
|---|---|
|MITM|El atacante intercepta la comunicación entre el cliente y el AP|

---

### METHODS

|Method|
|---|
|Evil Twin|
|Rogue AP|
|ARP spoofing|

---

MEMORY HOOK:  
**MITM = attacker in between**

---

## REPLAY ATTACK

---

### DEFINITION

|Item|Memorize|
|---|---|
|Replay Attack|Reutilización de paquetes capturados para obtener acceso|

---

### COMMONLY TARGETS

|Target|
|---|
|WEP networks|

---

MEMORY HOOK:  
**Replay = reuse packets**

---

## WEP CRACKING ATTACK

---

### PURPOSE

|Purpose|
|---|
|Recuperar clave WEP|

---

### METHOD

|Method|
|---|
|Capturar IVs|
|Analizar patrones|

---

MEMORY HOOK:  
**More IVs = faster crack**

---

## KRACK ATTACK

---

### DEFINITION

|Item|Memorize|
|---|---|
|KRACK|Key Reinstallation Attack|

---

### TARGET

|Target|
|---|
|WPA2|

---

### IMPACT

|Impact|
|---|
|Descifrar tráfico|
|Reenviar paquetes|

---

MEMORY HOOK:  
**KRACK breaks handshake**

---

## PACKET INJECTION ATTACK

---

### DEFINITION

|Item|Memorize|
|---|---|
|Packet Injection|Inyección de paquetes manipulados en la red inalámbrica|

---

### PURPOSE

|Purpose|
|---|
|Acelerar el cracking de WEP|
|Interrumpir el tráfico|

---

MEMORY HOOK:  
**Inject = fake packets**

---

## JAMMING ATTACK

---

### DEFINITION

|Item|Memorize|
|---|---|
|Jamming|Inundación del espectro inalámbrico con ruido|

---

### RESULT

|Result|
|---|
|Denial of Service|

---

MEMORY HOOK:  
**Noise kills Wi-Fi**

---

# COMPARISON — ROGUE AP vs EVIL TWIN (EXAM FAVORITE)

|Feature|Rogue AP|Evil Twin|
|---|---|---|
|Ownership|Legítimo interno|Atacante|
|Purpose|Acceso no autorizado|Suplantación de identidad|
|Signal mimicry|No|Yes|

---

# ATTACK → GOAL MAPPING (MEMORY TABLE)

|Attack|Goal|
|---|---|
|Rogue AP|Backdoor|
|Evil Twin|Credential theft|
|Deauth|Forzar reconexión|
|Replay|Bypass de autenticación|
|KRACK|Descifrado de tráfico|
|Jamming|DoS|

---

# OBJECTIVE 03 — MEMORY BLOCK

**Passive attacks listen.  
Active attacks interfere.  
Rogue AP is unauthorized.  
Evil Twin is fake.  
Deauth kicks users.  
KRACK breaks WPA2.**

---


## EXAM EXTRAS (Boson Practice Test)

### STP ATTACK AND DOUBLE TAGGING

|Attack|Description|
|---|---|
|STP attack|Switch rogue con prioridad baja se convierte en root bridge|
|Double tagging|Uso de tramas 802.1Q para inyección de paquetes|

---

### WASH COMMAND

|Item|Memorize|
|---|---|
|Command|wash -i mon0|
|Purpose|Escanear puntos de acceso con WPS habilitado desde Linux|

---

### BTLEJACK

|Item|Memorize|
|---|---|
|Command|btlejack -s|
|Purpose|Encontrar conexiones Bluetooth Low Energy|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| Passive Attack | El atacante monitorea el tráfico inalámbrico sin alterarlo; difícil de detectar |
| Active Attack | El atacante modifica, inyecta o interrumpe la comunicación inalámbrica |
| Rogue AP | Punto de acceso inalámbrico no autorizado conectado a una red (no necesariamente falso) |
| Evil Twin | AP falso que imita a un AP legítimo para robar credenciales |
| Deauthentication Attack | Envía tramas deauth falsificadas para desconectar clientes del AP |
| Disassociation Attack | Fuerza a los clientes a romper la asociación con el AP |
| MITM | El atacante intercepta la comunicación entre el cliente y el punto de acceso |
| Replay Attack | Reutilización de paquetes capturados para obtener acceso no autorizado |
| KRACK | Key Reinstallation Attack que rompe el handshake 4-way de WPA2 |
| Packet Injection | Inyección de paquetes manipulados para acelerar el cracking o interrumpir el tráfico |
| Jamming | Inundación del espectro inalámbrico con ruido provocando denial of service |
| WEP Cracking | Recuperación de clave WEP mediante captura y análisis de IVs |
| STP Attack | Switch rogue con prioridad baja se convierte en root bridge |
| Double Tagging | Uso de tramas 802.1Q para inyección de paquetes a través de VLANs |

---

# PRACTICE QUESTIONS

**1.** ¿Cuál es la diferencia clave entre un Rogue AP y un Evil Twin?
- a) Rogue AP es propiedad del atacante; Evil Twin es instalado por un empleado
- b) Rogue AP es no autorizado pero legítimo; Evil Twin suplanta a un AP real
- c) Rogue AP usa WEP; Evil Twin usa WPA2
- d) No hay diferencia
**Answer:** B — Un Rogue AP es un AP no autorizado en la red; un Evil Twin es un AP falso creado para imitar a uno legítimo.

**2.** ¿Qué protocolo IEEE se explota en un ataque de deauthentication?
- a) 802.3
- b) 802.11 management frames
- c) 802.1X
- d) 802.1Q
**Answer:** B — Los ataques de deauth explotan las tramas de administración 802.11 no protegidas para forzar la desconexión.

**3.** ¿Cuál es el objetivo principal de un ataque KRACK?
- a) Crackear la encriptación WEP
- b) Descifrar el tráfico WPA2 explotando el handshake 4-way
- c) Provocar jamming en la señal inalámbrica
- d) Robar el SSID
**Answer:** B — KRACK fuerza la reutilización de nonce en el handshake 4-way de WPA2, permitiendo el descifrado del tráfico.

**4.** ¿Qué ataque consiste en inundar el espectro inalámbrico con ruido?
- a) Evil Twin
- b) Replay
- c) Jamming
- d) Packet Injection
**Answer:** C — Jamming inunda el espectro con interferencias, provocando denial of service.

**5.** Un ataque inalámbrico pasivo se caracteriza por:
- a) Inyectar paquetes maliciosos
- b) Desconectar clientes del AP
- c) Monitorear el tráfico sin alterarlo
- d) Crear puntos de acceso falsos
**Answer:** C — Los ataques pasivos solo escuchan, lo que los hace extremadamente difíciles de detectar.
