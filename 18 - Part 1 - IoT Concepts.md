# Módulo 18 · Parte 1 — IoT Concepts

> **Módulo 18 — IoT and OT Hacking** · Parte 1 de 5 · Qué es IoT y cómo funciona, arquitectura en 5 capas, tecnologías de comunicación, protocolos, IoT OS, modelos de comunicación y desafíos de seguridad.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [OBJECTIVE 01 — IoT CONCEPTS AND ATTACKS](#objective-01--iot-concepts-and-attacks)
- [CÓMO FUNCIONA IoT 🔥](#cómo-funciona-iot-high-yield)
- [ARQUITECTURA DE IoT 🔥](#arquitectura-de-iot-high-yield)
- [ÁREAS DE APLICACIÓN DE IoT](#áreas-de-aplicación-de-iot)
- [TECNOLOGÍAS DE COMUNICACIÓN IoT 🔥](#tecnologías-de-comunicación-iot-high-yield)
- [SISTEMAS OPERATIVOS DE IoT](#sistemas-operativos-de-iot)
- [PROTOCOLOS DE APLICACIÓN DE IoT 🔥](#protocolos-de-aplicación-de-iot-high-yield)
- [MODELOS DE COMUNICACIÓN DE IoT 🔥](#modelos-de-comunicación-de-iot-high-yield)
- [DESAFÍOS DE IoT 🔥](#desafíos-de-iot-high-yield)
- [TIPOS COMUNES DE ATAQUES IoT (INTRODUCCIÓN)](#tipos-comunes-de-ataques-iot-introducción)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **IoT vs IoE** — IoT ⊂ IoE: Internet of Everything abarca personas, datos, procesos y cosas.
- **Arquitectura IoT (arriba → abajo)** — Application → Middleware → Internet → Access Gateway → Edge Technology Layer.
- **Edge Technology Layer** — capa inferior: sensores, RFID, actuadores y dispositivos embebidos.
- **Access Gateway Layer** — autenticación de dispositivos, enrutamiento de mensajes, traducción de protocolos y agregación de datos.
- **Middleware Layer** — gestión de dispositivos, filtrado de datos, control de acceso y analítica.
- **Modelos de comunicación** — Device-to-Device (Bluetooth, ZigBee), Device-to-Cloud (Wi-Fi, celular), Device-to-Gateway (el gateway intermedia y traduce protocolos), Back-End Data-Sharing (la nube comparte datos con terceros).
- **MQTT vs CoAP** — MQTT: publish/subscribe ligero, "rey de la mensajería IoT" (TCP 1883, 8883 con TLS); CoAP: "HTTP ligero" sobre UDP 5683.
- **Largo alcance y bajo consumo (LPWAN)** — LoRaWAN, Sigfox (cargas pequeñas) y NB-IoT (celular); VSAT = satélite.
- **Corto / medio alcance** — ZigBee (malla, baja tasa de datos), Z-Wave (hogar inteligente), BLE, NFC, ANT (wearables); 6LoWPAN = IPv6 de bajo consumo.
- **PLC en comunicación cableada** — aquí es Power-Line Communication (datos por la red eléctrica), no el Programmable Logic Controller de OT.
- **IoT OS** — Amazon FreeRTOS (AWS), TinyOS (redes de sensores), Ubuntu Core (snaps), RIOT (ligero), Zephyr (bajo consumo), Windows 10 IoT.
- **Desafíos de IoT** — credenciales por defecto, cifrado débil, interfaces web inseguras y parches difíciles: "barato + conectado = vulnerable".

---

## OBJECTIVE 01 — IoT CONCEPTS AND ATTACKS

### QUÉ ES IoT — DEFINICIÓN BÁSICA

| Término                  | Definición                                                                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Internet of Things (IoT) | Una red de objetos físicos ("cosas") con sensores, software y conectividad integrados que les permite recopilar e intercambiar datos a través de Internet |

> 🧠 *Para recordar:* **Cosas + Sensores + Internet**

---

### IoT vs IoE (HIGH YIELD)

|Término|Significado|
|---|---|
|IoT|Internet of Things|
|IoE|Internet of Everything (personas, datos, procesos, cosas)|

> 🧠 *Para recordar:* **IoT ⊂ IoE**

---

### POR QUÉ IoT ES IMPORTANTE

|Razón|
|---|
|Automatización|
|Monitoreo remoto|
|Decisiones basadas en datos|
|Reducción de costos|
|Entornos inteligentes|

---

## CÓMO FUNCIONA IoT (HIGH YIELD)

1. Los sensores recopilan datos del entorno
2. Los datos se envían al **IoT gateway** (puerta de enlace)
3. El gateway reenvía los datos a la nube (**cloud server**)
4. Los datos se procesan y analizan
5. El usuario accede a los datos mediante una aplicación remota (**remote app**)
6. Se activan acciones/alertas si se cumplen las condiciones

> 🧠 *Para recordar:* **Sentir → Enviar → Almacenar → Analizar → Actuar**

---

### COMPONENTES BÁSICOS DE IoT

|Componente|Descripción|
|---|---|
|Sensors — sensores|Recopilan datos|
|Actuators — actuadores|Realizan acciones|
|IoT Gateway — puerta de enlace IoT|Conecta los dispositivos a Internet|
|Cloud Server — servidor en la nube|Almacenamiento y procesamiento de datos|
|Remote App — aplicación remota|Interacción del usuario|

---

## ARQUITECTURA DE IoT (HIGH YIELD)

### CAPAS DE IoT (ARRIBA → ABAJO)

|Capa|Propósito|
|---|---|
|Application Layer — capa de aplicación|Servicios orientados al usuario|
|Middleware Layer — capa de middleware|Procesamiento y gestión de datos|
|Internet Layer — capa de Internet|Comunicación|
|Access Gateway Layer — capa de puerta de enlace de acceso|Traducción de protocolos|
|Edge Technology Layer — capa de tecnología de borde|Sensores y dispositivos|

> 🧠 *Para recordar:* **Application → Middleware → Internet → Access Gateway → Edge Technology**

---

### EDGE TECHNOLOGY LAYER — CAPA DE TECNOLOGÍA DE BORDE

|Incluye|
|---|
|Sensores|
|RFID|
|Actuadores|
|Dispositivos embebidos|

---

### ACCESS GATEWAY LAYER — CAPA DE PUERTA DE ENLACE DE ACCESO

|Función|
|---|
|Autenticación de dispositivos|
|Enrutamiento de mensajes|
|Traducción de protocolos|
|Agregación de datos|

---

### INTERNET LAYER — CAPA DE INTERNET

|Propósito|
|---|
|Device-to-device — dispositivo a dispositivo|
|Device-to-cloud — dispositivo a nube|
|Device-to-gateway — dispositivo a puerta de enlace|

---

### MIDDLEWARE LAYER — CAPA DE MIDDLEWARE

|Funciones|
|---|
|Gestión de dispositivos|
|Filtrado de datos|
|Control de acceso|
|Analítica|

---

### APPLICATION LAYER — CAPA DE APLICACIÓN

|Ejemplos|
|---|
|Aplicaciones de hogar inteligente|
|Dashboards sanitarios (healthcare)|
|Aplicaciones de control industrial|

---

## ÁREAS DE APLICACIÓN DE IoT

|Sector|Ejemplos|
|---|---|
|Smart Home — hogar inteligente|Iluminación, HVAC|
|Healthcare — salud|Wearables (dispositivos vestibles), implantes|
|Industrial|IIoT, automatización|
|Transportation — transporte|Tráfico inteligente|
|Retail — comercio|Estanterías inteligentes (smart shelves)|
|Energy — energía|Smart grids (redes eléctricas inteligentes)|
|Security — seguridad|Vigilancia|

> 🧠 *Para recordar:* **Hogar, Salud, Industria, Transporte**

---

## TECNOLOGÍAS DE COMUNICACIÓN IoT (HIGH YIELD)

### SHORT-RANGE WIRELESS — INALÁMBRICO DE CORTO ALCANCE

|Tecnología|Uso|
|---|---|
|Bluetooth LE|Bajo consumo|
|NFC|Autenticación de corto alcance|
|RFID|Identificación|
|ZigBee|Baja tasa de datos, red en malla (mesh)|
|Z-Wave|Hogares inteligentes|
|ANT|Wearables (dispositivos vestibles)|
|Wi-Fi|Ancho de banda alto|

---

### MEDIUM-RANGE WIRELESS — INALÁMBRICO DE MEDIO ALCANCE

|Tecnología|Uso|
|---|---|
|HaLow (Wi-Fi 802.11ah)|Wi-Fi para IoT con más alcance y menor consumo|
|LTE-A|Mayor rendimiento|
|6LoWPAN|IPv6 de bajo consumo|

---

### LONG-RANGE WIRELESS — INALÁMBRICO DE LARGO ALCANCE

|Tecnología|Uso|
|---|---|
|LPWAN|IoT de largo alcance|
|LoRaWAN|Bajo consumo, largo alcance|
|Sigfox|Cargas útiles pequeñas (small payloads)|
|NB-IoT|IoT celular|
|VSAT|Satelital|

> 🧠 *Para recordar:* **LoRa + Sigfox = largo alcance, bajo consumo**

---

### WIRED COMMUNICATION — COMUNICACIÓN CABLEADA

|Tecnología|Uso|
|---|---|
|Ethernet|Conexión cableada estable|
|MoCA (Multimedia over Coax Alliance)|Red sobre cable coaxial|
|PLC (Power-Line Communication)|Datos sobre las líneas eléctricas|

> ⚠️ *Trampa de examen:* Aquí **PLC = Power-Line Communication**; en OT, **PLC = Programmable Logic Controller**.

---

## SISTEMAS OPERATIVOS DE IoT

|SO|Notas|
|---|---|
|Windows 10 IoT|Microsoft|
|RIOT|Ligero|
|Ubuntu Core|Basado en Snap|
|Amazon FreeRTOS|AWS|
|Zephyr|Bajo consumo|
|Embedded Linux — Linux embebido|Muy común|
|TinyOS|Redes de sensores|

> 🧠 *Para recordar:* **FreeRTOS = Amazon**

---

## PROTOCOLOS DE APLICACIÓN DE IoT (HIGH YIELD)

|Protocolo|Propósito|
|---|---|
|CoAP|HTTP ligero sobre UDP (dispositivos restringidos)|
|MQTT|Publicación/suscripción|
|AMQP|Cola de mensajes|
|XMPP|Mensajería|
|LWM2M|Gestión de dispositivos|

> 🧠 *Para recordar:* **MQTT = rey de la mensajería IoT**

> 🧠 *Para recordar:* **MQTT: TCP 1883 (8883 con TLS) · CoAP: UDP 5683 (5684 con DTLS)**

---

## MODELOS DE COMUNICACIÓN DE IoT (HIGH YIELD)

### DEVICE-TO-DEVICE — DISPOSITIVO A DISPOSITIVO

|Descripción|
|---|
|Los dispositivos se comunican directamente|
|Usa Bluetooth, ZigBee|
|Escenarios de hogar inteligente|

---

### DEVICE-TO-CLOUD — DISPOSITIVO A NUBE

|Descripción|
|---|
|El dispositivo se comunica directamente con la nube|
|Usa Wi-Fi, Celular|

---

### DEVICE-TO-GATEWAY — DISPOSITIVO A PUERTA DE ENLACE

|Descripción|
|---|
|El gateway actúa como intermediario|
|Traducción de protocolos|

---

### BACK-END DATA-SHARING — COMPARTICIÓN DE DATOS EN BACK-END

|Descripción|
|---|
|La nube comparte datos IoT con terceros|
|Se usa para analítica|

> 🧠 *Para recordar:* **D2D, D2C, D2G, Back-end**

---

## DESAFÍOS DE IoT (HIGH YIELD)

|Desafío|
|---|
|Falta de seguridad y privacidad (lack of security and privacy)|
|Credenciales por defecto (default credentials)|
|Cifrado débil|
|Interfaces web inseguras (insecure web interfaces)|
|Almacenamiento limitado|
|Dificultad para aplicar parches|
|Problemas de interoperabilidad|
|Manipulación física (physical tampering)|
|Dependencia del proveedor (vendor lock-in)|
|Datos no estructurados|

> 🧠 *Para recordar:* **Barato + conectado = vulnerable**

---

## TIPOS COMUNES DE ATAQUES IoT (INTRODUCCIÓN)

|Ataque|
|---|
|DDoS|
|Botnets|
|Jamming|
|BlueBorne|
|Rolling code attack — ataque de código rodante|
|Firmware tampering — manipulación de firmware|

---

## Flashcards

| Término | Definición |
|---------|------------|
| IoT | Red de objetos físicos con sensores, software y conectividad que intercambian datos a través de Internet |
| IoE | Internet of Everything — incluye personas, datos, procesos y cosas |
| IoT Gateway | Puente entre dispositivos IoT e Internet; maneja la traducción de protocolos |
| MQTT | Protocolo de mensajería ligero de publicación/suscripción; el "rey de la mensajería IoT" |
| CoAP | Protocolo ligero similar a HTTP que se ejecuta sobre UDP para dispositivos restringidos |
| ZigBee | Protocolo de red en malla de baja tasa de datos para IoT |
| 6LoWPAN | Red IPv6 de bajo consumo para dispositivos restringidos |
| LoRaWAN | Protocolo WAN de largo alcance y bajo consumo para IoT |
| LPWAN | Low Power Wide Area Network — comunicación IoT de largo alcance |
| Edge Technology Layer | Capa inferior de IoT que contiene sensores, RFID, actuadores y dispositivos embebidos |
| Access Gateway Layer | Capa de IoT responsable de la autenticación de dispositivos, enrutamiento de mensajes y traducción de protocolos |
| Device-to-Device | Modelo de comunicación IoT donde los dispositivos se comunican directamente usando Bluetooth o ZigBee |
| Device-to-Cloud | Modelo de comunicación IoT donde los dispositivos envían datos directamente a servicios en la nube |
| Device-to-Gateway | Modelo de comunicación IoT donde una puerta de enlace actúa como intermediario con traducción de protocolos |
| TinyOS | Sistema operativo diseñado para redes de sensores inalámbricos |

---

## Preguntas de práctica

**1.** ¿Qué modelo de comunicación IoT utiliza una puerta de enlace como intermediario entre dispositivos y la nube?
- a) Dispositivo a dispositivo
- b) Dispositivo a nube
- c) Dispositivo a puerta de enlace
- d) Compartición de datos en back-end
**Respuesta:** c) — Dispositivo a puerta de enlace usa una puerta de enlace para la traducción de protocolos entre dispositivos y la nube.

**2.** ¿Cuál es el propósito principal del protocolo MQTT en IoT?
- a) Autenticación de dispositivos
- b) Mensajería de publicación/suscripción
- c) Actualizaciones de firmware
- d) Gestión de energía
**Respuesta:** b) — MQTT es un protocolo de mensajería ligero de publicación/suscripción ampliamente utilizado en IoT.

**3.** ¿Qué capa de la arquitectura IoT contiene sensores, RFID y actuadores?
- a) Capa de aplicación
- b) Capa de middleware
- c) Capa de puerta de enlace de acceso
- d) Capa de tecnología de borde
**Respuesta:** d) — La capa de tecnología de borde es la capa inferior que contiene sensores físicos y dispositivos.

**4.** IoT vs IoE — ¿qué afirmación es correcta?
- a) IoE es un subconjunto de IoT
- b) IoT es un subconjunto de IoE
- c) Son idénticos
- d) IoE solo cubre dispositivos
**Respuesta:** b) — IoE (Internet of Everything) es más amplio e incluye personas, datos, procesos y cosas; IoT es un subconjunto.

**5.** ¿Qué tecnología inalámbrica de largo alcance está diseñada para bajo consumo de energía y comunicación de largo alcance?
- a) Wi-Fi
- b) Bluetooth LE
- c) LoRaWAN
- d) ZigBee
**Respuesta:** c) — LoRaWAN está específicamente diseñado para comunicación IoT de largo alcance y bajo consumo.
