# OBJECTIVO 01 — CONCEPTOS Y ATAQUES IoT

---

## QUÉ ES IoT — DEFINICIÓN BÁSICA (EXAMEN)

| Término                  | Definición                                                                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Internet of Things (IoT) | Una red de objetos físicos ("cosas") con sensores, software y conectividad integrados que les permite recopilar e intercambiar datos a través de Internet |

GANCHO DE MEMORIA:  
**Cosas + Sensores + Internet**

---

## IoT vs IoE (TRAMPA DEL EXAMEN)

|Término|Significado|
|---|---|
|IoT|Internet of Things|
|IoE|Internet of Everything (personas, datos, procesos, cosas)|

GANCHO DE MEMORIA:  
**IoT ⊂ IoE**

---

## POR QUÉ IoT ES IMPORTANTE (CONTEXTO DEL EXAMEN)

|Razón|
|---|
|Automatización|
|Monitoreo remoto|
|Decisiones basadas en datos|
|Reducción de costos|
|Entornos inteligentes|

---

# CÓMO FUNCIONA IoT (FLUJO DE PASOS — DEBE MEMORIZARSE)

1. Los sensores recopilan datos del entorno
    
2. Los datos se envían a la puerta de enlace
    
3. La puerta de enlace reenvía los datos a la nube
    
4. Los datos se procesan y analizan
    
5. El usuario accede a los datos mediante una aplicación remota
    
6. Se activan acciones/alertas si se cumplen las condiciones
    

GANCHO DE MEMORIA:  
**Sentir → Enviar → Almacenar → Analizar → Actuar**

---

## COMPONENTES BÁSICOS DE IoT (TABLA DEL EXAMEN)

|Componente|Descripción|
|---|---|
|Sensores|Recopilan datos|
|Actuadores|Realizan acciones|
|Puerta de enlace IoT|Conecta dispositivos a Internet|
|Servidor en la nube|Almacenamiento y procesamiento de datos|
|Aplicación remota|Interacción del usuario|

---

# ARQUITECTURA DE IoT (FAVORITO DEL EXAMEN)

## CAPAS DE IoT (ARRIBA → ABAJO)

|Capa|Propósito|
|---|---|
|Capa de aplicación|Servicios orientados al usuario|
|Capa de middleware|Procesamiento y gestión de datos|
|Capa de Internet|Comunicación|
|Capa de puerta de enlace de acceso|Traducción de protocolos|
|Capa de tecnología de borde|Sensores y dispositivos|

GANCHO DE MEMORIA:  
**Aplicación → Middleware → Internet → Puerta de enlace → Borde**

---

## CAPA DE TECNOLOGÍA DE BORDE (EXAMEN)

|Incluye|
|---|
|Sensores|
|RFID|
|Actuadores|
|Dispositivos embebidos|

---

## CAPA DE PUERTA DE ENLACE DE ACCESO

|Función|
|---|
|Autenticación de dispositivos|
|Enrutamiento de mensajes|
|Traducción de protocolos|
|Agregación de datos|

---

## CAPA DE INTERNET

|Propósito|
|---|
|Dispositivo a dispositivo|
|Dispositivo a nube|
|Comunicación dispositivo a puerta de enlace|

---

## CAPA DE MIDDLEWARE

|Funciones|
|---|
|Gestión de dispositivos|
|Filtrado de datos|
|Control de acceso|
|Analítica|

---

## CAPA DE APLICACIÓN

|Ejemplos|
|---|
|Aplicaciones de hogar inteligente|
|Tableros de atención médica|
|Aplicaciones de control industrial|

---

# ÁREAS DE APLICACIÓN DE IoT (TABLA DEL EXAMEN)

|Sector|Ejemplos|
|---|---|
|Hogar inteligente|Iluminación, HVAC|
|Atención médica|Dispositivos vestibles, implantes|
|Industrial|IIoT, automatización|
|Transporte|Tráfico inteligente|
|Comercio|Estantes inteligentes|
|Energía|Redes inteligentes|
|Seguridad|Vigilancia|

GANCHO DE MEMORIA:  
**Hogar, Salud, Industria, Transporte**

---

# TECNOLOGÍAS DE COMUNICACIÓN IoT (RENDIMIENTO MUY ALTO)

---

## INALÁMBRICO DE CORTO ALCANCE

|Tecnología|Uso|
|---|---|
|Bluetooth LE|Bajo consumo|
|NFC|Autenticación de corto alcance|
|RFID|Identificación|
|ZigBee|Baja tasa de datos, malla|
|Z-Wave|Hogares inteligentes|
|ANT|Dispositivos vestibles|
|Wi-Fi|Ancho de banda alto|

---

## INALÁMBRICO DE MEDIANO ALCANCE

|Tecnología|Uso|
|---|---|
|Wi-Fi|Conectividad estándar|
|LTE-A|Mayor rendimiento|
|6LoWPAN|IPv6 de bajo consumo|

---

## INALÁMBRICO DE LARGO ALCANCE

|Tecnología|Uso|
|---|---|
|LPWAN|IoT de largo alcance|
|LoRaWAN|Bajo consumo, largo alcance|
|Sigfox|Cargas pequeñas|
|NB-IoT|IoT celular|
|VSAT|Satelital|

GANCHO DE MEMORIA:  
**LoRa + Sigfox = largo alcance, bajo consumo**

---

## COMUNICACIÓN CON CABLE

|Tecnología|Uso|
|---|---|
|Ethernet|Conexión cableada estable|
|MoCA|Coaxial|
|PLC|Líneas eléctricas|

---

# SISTEMAS OPERATIVOS DE IoT (LISTA DEL EXAMEN)

|SO|Notas|
|---|---|
|Windows 10 IoT|Microsoft|
|RIOT|Ligero|
|Ubuntu Core|Basado en Snap|
|Amazon FreeRTOS|AWS|
|Zephyr|Bajo consumo|
|Linux embebido|Común|
|TinyOS|Redes de sensores|

GANCHO DE MEMORIA:  
**FreeRTOS = Amazon**

---

# PROTOCOLOS DE APLICACIÓN DE IoT (CRÍTICO)

|Protocolo|Propósito|
|---|---|
|CoAP|HTTP ligero|
|MQTT|Publicación/suscripción|
|AMQP|Cola de mensajes|
|XMPP|Mensajería|
|LWM2M|Gestión de dispositivos|

GANCHO DE MEMORIA:  
**MQTT = rey de la mensajería IoT**

---

# MODELOS DE COMUNICACIÓN DE IoT (FAVORITO DEL EXAMEN)

---

## DISPOSITIVO A DISPOSITIVO

|Descripción|
|---|
|Los dispositivos se comunican directamente|
|Usa Bluetooth, ZigBee|
|Escenarios de hogar inteligente|

---

## DISPOSITIVO A NUBE

|Descripción|
|---|
|El dispositivo se comunica directamente con la nube|
|Usa Wi-Fi, Celular|

---

## DISPOSITIVO A PUERTA DE ENLACE

|Descripción|
|---|
|La puerta de enlace actúa como intermediario|
|Traducción de protocolos|

---

## COMPARTICIÓN DE DATOS EN BACK-END

|Descripción|
|---|
|La nube comparte datos IoT con terceros|
|Se usa para analítica|

GANCHO DE MEMORIA:  
**D2D, D2C, D2G, Back-end**

---

# DESAFÍOS DE IoT (TRAMPAS DEL EXAMEN)

|Desafío|
|---|
|Falta de seguridad y privacidad|
|Credenciales predeterminadas|
|Cifrado débil|
|Interfaces web inseguras|
|Almacenamiento limitado|
|Dificultad de parches|
|Problemas de interoperabilidad|
|Manipulación física|
|Bloqueo del proveedor|
|Datos no estructurados|

GANCHO DE MEMORIA:  
**Barato + conectado = vulnerable**

---

# TIPOS COMUNES DE ATAQUES IoT (INTRODUCCIÓN — PROFUNDIZACIÓN DESPUÉS)

|Ataque|
|---|
|DDoS|
|Botnets|
|Jamming|
|BlueBorne|
|Ataques de código rodante|
|Manipulación de firmware|

---

# OBJETIVO 01 — BLOQUE DE MEMORIA PARA EL EXAMEN

**IoT conecta dispositivos físicos utilizando sensores, puertas de enlace y servicios en la nube.  
Utiliza una arquitectura en capas, protocolos ligeros y diversas tecnologías de comunicación.  
La seguridad es débil debido a credenciales predeterminadas, recursos limitados y parches deficientes.  
Existen múltiples modelos de comunicación, cada uno con riesgos únicos.**

---

## OBJETIVO 01 — ESTADO

|Elemento|Estado|
|---|---|
|Conceptos de IoT|COMPLETO|
|Arquitectura|COMPLETO|
|Protocolos|COMPLETO|
|SO|COMPLETO|
|Modelos de comunicación|COMPLETO|
|Desafíos|COMPLETO|
|Alineación con el examen|EXACTO|

---

# TARJETAS DE MEMORIA PARA EL EXAMEN

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
| Capa de tecnología de borde | Capa inferior de IoT que contiene sensores, RFID, actuadores y dispositivos embebidos |
| Capa de puerta de enlace de acceso | Capa de IoT responsable de la autenticación de dispositivos, enrutamiento de mensajes y traducción de protocolos |
| Dispositivo a dispositivo | Modelo de comunicación IoT donde los dispositivos se comunican directamente usando Bluetooth o ZigBee |
| Dispositivo a nube | Modelo de comunicación IoT donde los dispositivos envían datos directamente a servicios en la nube |
| Dispositivo a puerta de enlace | Modelo de comunicación IoT donde una puerta de enlace actúa como intermediario con traducción de protocolos |
| TinyOS | Sistema operativo diseñado para redes de sensores inalámbricos |

---

# PREGUNTAS DE PRÁCTICA

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
