# Módulo 16 · Parte 3 — Wireless Attacks

> **Módulo 16 — Hacking Wireless Networks** · Parte 3 de 5 — amenazas y ataques inalámbricos: pasivos vs activos, Rogue AP, Evil Twin, deauth, KRACK, jamming.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [OBJECTIVE 03 — WIRELESS THREATS & ATTACKS](#objective-03--wireless-threats--attacks)
- [PASSIVE WIRELESS ATTACKS](#passive-wireless-attacks)
- [ACTIVE WIRELESS ATTACKS](#active-wireless-attacks)
- [MAJOR WIRELESS ATTACKS 🔥](#major-wireless-attacks-high-yield)
- [COMPARISON — ROGUE AP vs EVIL TWIN 🔥](#comparison--rogue-ap-vs-evil-twin-high-yield)
- [ATTACK → GOAL MAPPING](#attack--goal-mapping)
- [Extras de examen (Boson Practice Test)](#extras-de-examen-boson-practice-test)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **Passive attack vs Active attack** — el pasivo solo escucha (difícil de detectar); el activo modifica, inyecta o interrumpe.
- **Rogue AP** — AP no autorizado conectado a la red (puede instalarlo un empleado); NO es necesariamente del atacante ni falso.
- **Evil Twin** — AP falso que imita a uno legítimo (mismo SSID, señal más fuerte) para robo de credenciales y MITM.
- **Rogue AP vs Evil Twin** — el Evil Twin imita señal/SSID de un AP real; el Rogue AP no suplanta identidad.
- **Deauthentication attack** — tramas deauth falsificadas que explotan los **802.11 management frames**; fuerza la reconexión y permite capturar el handshake.
- **Deauth vs Disassociation** — deauth termina la autenticación; disassoc termina la asociación.
- **KRACK** (Key Reinstallation Attack) — ataca el 4-way handshake de **WPA2**; no rompe el cifrado por sí solo, reinstala la clave.
- **Replay attack** — reutiliza paquetes capturados; típico contra redes **WEP**.
- **Packet injection** — inyecta paquetes para acelerar el cracking de WEP o interrumpir el tráfico.
- **Jamming** — inunda el espectro con ruido = **Denial of Service**.
- **MITM** — métodos habituales: Evil Twin, Rogue AP, ARP spoofing.

## OBJECTIVE 03 — WIRELESS THREATS & ATTACKS

### WIRELESS THREAT — CORE DEFINITION

|Item|Memorize|
|---|---|
|Wireless Threat|Cualquier riesgo potencial que explota debilidades en la comunicación inalámbrica|

> 🧠 *Para recordar:* **Wireless = open air = exposed**

---

### CLASSIFICATION OF WIRELESS ATTACKS

|Category|
|---|
|Passive attacks|
|Active attacks|

---

## PASSIVE WIRELESS ATTACKS

### PASSIVE ATTACK — DEFINITION

|Item|Memorize|
|---|---|
|Passive Attack|El atacante monitorea el tráfico sin alterarlo|

---

### PASSIVE ATTACK CHARACTERISTICS

|Feature|
|---|
|Difícil de detectar|
|Sin modificación de paquetes|
|Usado para reconocimiento|

---

### COMMON PASSIVE WIRELESS ATTACKS

|Attack|Description|
|---|---|
|Eavesdropping|Captura de tráfico inalámbrico|
|Traffic analysis|Estudio de patrones de comunicación|
|Packet sniffing|Captura de paquetes por aire|

---

> 🧠 *Para recordar:* **Passive = listen only**

---

## ACTIVE WIRELESS ATTACKS

### ACTIVE ATTACK — DEFINITION

|Item|Memorize|
|---|---|
|Active Attack|El atacante modifica, inyecta o interrumpe la comunicación inalámbrica|

---

### ACTIVE ATTACK CHARACTERISTICS

|Feature|
|---|
|Detectable|
|Packet injection|
|Service disruption|

---

> 🧠 *Para recordar:* **Active = interfere**

---

## MAJOR WIRELESS ATTACKS (HIGH YIELD)

### ROGUE ACCESS POINT ATTACK

#### DEFINITION

|Item|Memorize|
|---|---|
|Rogue AP|Punto de acceso inalámbrico no autorizado conectado a una red|

---

#### PURPOSE

|Purpose|
|---|
|Eludir los controles de seguridad|
|Proporcionar acceso backdoor|

---

#### EXAM TRAP

|Statement|Correct|
|---|---|
|Rogue AP is attacker-owned|NO|
|Rogue AP can be employee-installed|YES|

---

> 🧠 *Para recordar:* **Rogue = unauthorized, not fake**

---

### EVIL TWIN ATTACK

#### DEFINITION

|Item|Memorize|
|---|---|
|Evil Twin|AP falso que imita a un AP legítimo|

---

#### ATTACK LOGIC

|Step|
|---|
|El atacante crea un AP falso|
|Usa el mismo SSID|
|Señal más fuerte|
|La víctima se conecta|

---

#### GOAL

|Goal|
|---|
|Credential harvesting|
|MITM|

---

> 🧠 *Para recordar:* **Evil Twin = fake AP**

---

### DEAUTHENTICATION ATTACK

#### DEFINITION

|Item|Memorize|
|---|---|
|Deauthentication Attack|Envía tramas deauth falsificadas para desconectar clientes|

---

#### PROTOCOL EXPLOITED

|Protocol|
|---|
|IEEE 802.11 management frames|

---

#### PURPOSE

|Purpose|
|---|
|Forzar reconexión|
|Capturar handshakes|
|Habilitar Evil Twin|

---

> 🧠 *Para recordar:* **Deauth = kick users off**

---

### DISASSOCIATION ATTACK

#### DEFINITION

|Item|Memorize|
|---|---|
|Disassociation Attack|Fuerza a los clientes a desconectarse del AP|

---

#### DIFFERENCE FROM DEAUTH

|Attack|Key Difference|
|---|---|
|Deauth|Terminación de autenticación|
|Disassociation|Terminación de asociación|

---

> 🧠 *Para recordar:* **Deauth ≠ Disassoc**

---

### MAN-IN-THE-MIDDLE (MITM)

#### DEFINITION

|Item|Memorize|
|---|---|
|MITM|El atacante intercepta la comunicación entre el cliente y el AP|

---

#### METHODS

|Method|
|---|
|Evil Twin|
|Rogue AP|
|ARP spoofing|

---

> 🧠 *Para recordar:* **MITM = attacker in between**

---

### REPLAY ATTACK

#### DEFINITION

|Item|Memorize|
|---|---|
|Replay Attack|Reutilización de paquetes capturados para obtener acceso|

---

#### COMMONLY TARGETS

|Target|
|---|
|WEP networks|

---

> 🧠 *Para recordar:* **Replay = reuse packets**

---

### WEP CRACKING ATTACK

#### PURPOSE

|Purpose|
|---|
|Recuperar clave WEP|

---

#### METHOD

|Method|
|---|
|Capturar IVs|
|Analizar patrones|

---

> 🧠 *Para recordar:* **More IVs = faster crack**

---

### KRACK ATTACK

#### DEFINITION

|Item|Memorize|
|---|---|
|KRACK|Key Reinstallation Attack|

---

#### TARGET

|Target|
|---|
|WPA2|

---

#### IMPACT

|Impact|
|---|
|Descifrar tráfico|
|Reenviar paquetes|

---

> 🧠 *Para recordar:* **KRACK breaks handshake**

---

### PACKET INJECTION ATTACK

#### DEFINITION

|Item|Memorize|
|---|---|
|Packet Injection|Inyección de paquetes manipulados en la red inalámbrica|

---

#### PURPOSE

|Purpose|
|---|
|Acelerar el cracking de WEP|
|Interrumpir el tráfico|

---

> 🧠 *Para recordar:* **Inject = fake packets**

---

### JAMMING ATTACK

#### DEFINITION

|Item|Memorize|
|---|---|
|Jamming|Inundación del espectro inalámbrico con ruido|

---

#### RESULT

|Result|
|---|
|Denial of Service|

---

> 🧠 *Para recordar:* **Noise kills Wi-Fi**

---

## COMPARISON — ROGUE AP vs EVIL TWIN (HIGH YIELD)

|Feature|Rogue AP|Evil Twin|
|---|---|---|
|Ownership|Legítimo interno|Atacante|
|Purpose|Acceso no autorizado|Suplantación de identidad|
|Signal mimicry|No|Yes|

---

## ATTACK → GOAL MAPPING

|Attack|Goal|
|---|---|
|Rogue AP|Backdoor|
|Evil Twin|Credential theft|
|Deauth|Forzar reconexión|
|Replay|Bypass de autenticación|
|KRACK|Descifrado de tráfico|
|Jamming|DoS|

---

## Extras de examen (Boson Practice Test)

### STP ATTACK AND DOUBLE TAGGING

|Attack|Description|
|---|---|
|STP attack|Switch rogue con prioridad baja se convierte en root bridge|
|Double tagging|Uso de tramas 802.1Q para inyección de paquetes|

---

### COMANDOS WPS / BLE (wash, btlejack)

|Comando|Propósito|
|---|---|
|wash -i mon0|Escanear puntos de acceso con WPS habilitado desde Linux|
|btlejack -s|Encontrar conexiones Bluetooth Low Energy (BLE)|

---

## Flashcards

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

## Preguntas de práctica

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
