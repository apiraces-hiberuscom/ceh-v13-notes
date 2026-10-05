# Módulo 16 · Parte 5 — Wireless Countermeasures

> **Módulo 16 — Hacking Wireless Networks** · Parte 5 de 5 — contramedidas de ataques inalámbricos: cifrado fuerte, 802.11w, WIDS/WIPS, segmentación y hardening.

<!-- toc -->
<details>
<summary><b>Índice</b></summary>

- [Lo esencial para el examen](#lo-esencial-para-el-examen)
- [OBJECTIVE 05 — WIRELESS ATTACK COUNTERMEASURES](#objective-05--wireless-attack-countermeasures)
- [PRIMARY WIRELESS SECURITY CONTROLS](#primary-wireless-security-controls)
- [WIRELESS ATTACK → COUNTERMEASURE MAPPING 🔥](#wireless-attack--countermeasure-mapping-high-yield)
- [WIRELESS SECURITY BEST PRACTICES](#wireless-security-best-practices)
- [Flashcards](#flashcards)
- [Preguntas de práctica](#preguntas-de-práctica)

</details>
<!-- /toc -->

## Lo esencial para el examen

- **Strong encryption** — el control MÁS importante según CEH: WPA3 recomendado, WPA2-AES como mínimo, deshabilitar WEP/WPA.
- **IEEE 802.11w** (Management Frame Protection) — previene los ataques de **deauthentication / disassociation**.
- **WIDS vs WIPS** — WIDS detecta y alerta; WIPS detecta y **previene activamente** (contiene Rogue AP, Evil Twin, deauth, MAC spoofing).
- **MAC address filtering** — NO es seguridad real: se elude trivialmente con **MAC spoofing** (macchanger); las MAC viajan en claro.
- **Hidden SSID** — solo disuasión, NO protección.
- **Disable WPS** — el PIN es vulnerable a fuerza bruta.
- **Enterprise > Personal** — WPA2/WPA3-Enterprise usan servidor **RADIUS** y certificados.
- **Network segmentation** (VLANs) — separa WLAN de LAN, aísla la red de invitados y limita el movimiento lateral.
- **VPN sobre wireless** — cifra el tráfico de extremo a extremo; protege el Wi-Fi abierto.
- **Attack → countermeasure** — Evil Twin / Rogue AP → WIDS/WIPS; Deauth → 802.11w; WEP cracking → WPA3; MITM → cifrado fuerte; Jamming → spectrum analysis.
- **Firmware patching** y **seguridad física** — firmware antiguo = puerta abierta; acceso físico al AP = acceso total.

## OBJECTIVE 05 — WIRELESS ATTACK COUNTERMEASURES

### WIRELESS SECURITY — CORE DEFINITION

|Item|Memorize|
|---|---|
|Wireless Security|Medidas implementadas para proteger redes inalámbricas contra accesos no autorizados y ataques|

> 🧠 *Para recordar:* **Wireless security = prevención + detección**

---

### WHY WIRELESS NETWORKS NEED COUNTERMEASURES

|Reason|
|---|
|Medio de transmisión abierto|
|Interceptación fácil|
|Riesgo de dispositivos no autorizados|
|Configuraciones débiles predeterminadas|

---

## PRIMARY WIRELESS SECURITY CONTROLS

### 1. STRONG ENCRYPTION (HIGH YIELD)

|Control|Description|
|---|---|
|WPA3|Estándar de seguridad recomendado|
|WPA2-AES|Mínimo aceptable|
|Disable WEP/WPA|Obligatorio|

> 🧠 *Para recordar:* **No WEP. No WPA.**

---

### 2. STRONG AUTHENTICATION

|Control|Description|
|---|---|
|Strong passphrases|Previenen ataques de diccionario|
|WPA2/WPA3-Enterprise|Utiliza RADIUS|
|Certificates|Autenticación más robusta|

> 🧠 *Para recordar:* **Enterprise > Personal**

---

### 3. DISABLE WPS

|Reason|
|---|
|Vulnerable a fuerza bruta|
|Debilidad basada en PIN|

> 🧠 *Para recordar:* **WPS = weak point**

---

### 4. ACCESS POINT CONFIGURATION HARDENING

|Hardening Step|
|---|
|Cambiar credenciales predeterminadas|
|Desactivar broadcast de SSID|
|Reducir potencia de señal|
|Cambiar SSID predeterminado|

> ⚠️ *Trampa de examen:* Hidden SSID ≠ seguridad  
> Sigue siendo útil como **disuasión**, no como protección.

---

### 5. MAC ADDRESS FILTERING

|Feature|Reality|
|---|---|
|Permite dispositivos conocidos|SÍ|
|Previene ataques|NO|
|Fácilmente falsificable|SÍ|

> 🧠 *Para recordar:* **MAC filtering = speed bump**

---

### 6. WIRELESS INTRUSION DETECTION / PREVENTION SYSTEMS (WIDS/WIPS)

#### WIDS — DEFINITION

|Item|Memorize|
|---|---|
|WIDS|Monitorea tráfico inalámbrico en busca de ataques|

---

#### WIPS — DEFINITION

|Item|Memorize|
|---|---|
|WIPS|Detecta y previene activamente ataques|

---

#### DETECTED THREATS

|Threat|
|---|
|Rogue AP|
|Evil Twin|
|Deauth attacks|
|MAC spoofing|

> 🧠 *Para recordar:* **IDS sees, IPS stops**

---

### 7. NETWORK SEGMENTATION

|Technique|
|---|
|Separar WLAN de LAN|
|Usar VLANs|
|Aislamiento de red de invitados|

> 🧠 *Para recordar:* **Compartmentalize damage**

---

### 8. VPN OVER WIRELESS

|Benefit|
|---|
|Cifra el tráfico de extremo a extremo|
|Protege Wi-Fi abierto|

> 🧠 *Para recordar:* **VPN shields wireless**

---

### 9. REGULAR PATCHING AND FIRMWARE UPDATES

|Component|
|---|
|Access points|
|Routers|
|Wireless controllers|

> 🧠 *Para recordar:* **Old firmware = open door**

---

### 10. PHYSICAL SECURITY

|Measure|
|---|
|Ubicación segura del AP|
|Prevenir instalación de dispositivos no autorizados|
|Controlar acceso al hardware de red|

> 🧠 *Para recordar:* **Physical access = total access**

---

## WIRELESS ATTACK → COUNTERMEASURE MAPPING (HIGH YIELD)

|Attack|Countermeasure|
|---|---|
|Evil Twin|WIPS|
|Rogue AP|WIDS/WIPS|
|Deauth|802.11w|
|WEP cracking|WPA3|
|MITM|Strong encryption|
|Jamming|Spectrum analysis|

---

### IEEE 802.11w — MANAGEMENT FRAME PROTECTION

|Item|Memorize|
|---|---|
|802.11w|Protege tramas de gestión|
|Prevents|Ataques de Deauth/Disassoc|

> 🧠 *Para recordar:* **11w stops deauth**

---

## WIRELESS SECURITY BEST PRACTICES

|#|Practice|
|---|---|
|1|Usar WPA3|
|2|Desactivar WPS|
|3|Activar WIPS|
|4|Usar contraseñas fuertes|
|5|Segmentar redes|
|6|Actualizar firmware|
|7|Monitorear continuamente|

---

## Flashcards

| Term | Definition |
|------|------------|
| WPA3 | Estándar de seguridad inalámbrica recomendado que utiliza autenticación SAE |
| WPA2-AES | Estándar de cifrado mínimo aceptable para redes inalámbricas |
| WIDS | Sistema de detección de intrusiones inalámbricas; monitorea tráfico en busca de ataques |
| WIPS | Sistema de prevención de intrusiones inalámbricas; detecta y previene activamente ataques |
| 802.11w | Estándar de protección de tramas de gestión que previene ataques de deauth/disassoc |
| WPS | Wi-Fi Protected Setup; función de conveniencia vulnerable a ataques de fuerza bruta |
| MAC Filtering | Permite solo dispositivos conocidos pero fácilmente eludible mediante MAC spoofing |
| Containerization | Aislamiento de datos y aplicaciones corporativas de datos personales en un dispositivo |
| Network Segmentation | Separación de WLAN de LAN usando VLANs para limitar el impacto de ataques |
| VPN over Wireless | Cifra todo el tráfico de extremo a extremo, protegiendo datos en Wi-Fi abierto |
| Firmware Patching | Actualización regular de firmware de AP, router y controladores para corregir vulnerabilidades |
| RADIUS Server | Servidor de autenticación empresarial utilizado en modo WPA2/WPA3-Enterprise |
| Spectrum Analysis | Técnica utilizada para detectar jamming e interferencias inalámbricas |
| SSID Hiding | Desactivación del broadcast de SSID; proporciona disuasión pero NO seguridad real |

---

## Preguntas de práctica

**1.** ¿Qué contramedida previene directamente los ataques de deauthentication?
- a) MAC filtering
- b) IEEE 802.11w (Management Frame Protection)
- c) Disabling SSID broadcast
- d) WPA3-SAE
**Respuesta:** B — 802.11w protege las tramas de gestión, previniendo tramas de deauth/disassoc falsificadas.

**2.** Un WIDS detecta un Rogue AP en la red. ¿Qué hace un WIPS diferente?
- a) Solo registra el evento
- b) Bloquea o contiene activamente el Rogue AP
- c) Desactiva todo el tráfico inalámbrico
- d) Cambia el canal del AP
**Respuesta:** B — WIDS monitorea y alerta; WIPS va más allá previniendo activamente la amenaza.

**3.** ¿Por qué se considera que MAC address filtering no es suficiente?
- a) Ralentiza el rendimiento de la red
- b) Las MAC addresses pueden ser fácilmente falsificadas con herramientas como macchanger
- c) Solo funciona con WEP
- d) Impide que usuarios legítimos se conecten
**Respuesta:** B — Las MAC addresses se transmiten en texto claro y pueden ser falsificadas trivialmente.

**4.** ¿Cuál es el control de seguridad inalámbrica MÁS importante según CEH?
- a) Disabling SSID broadcast
- b) Usando MAC filtering
- c) Cifrado fuerte (WPA3/WPA2-AES)
- d) Reduciendo la potencia de señal
**Respuesta:** C — El cifrado fuerte es la defensa principal; todos los demás controles son complementarios.

**5.** ¿Cuál es el beneficio de segmentar la red inalámbrica de la LAN cableada?
- a) Aumenta el rendimiento
- b) Limita el daño si un dispositivo inalámbrico es comprometido
- c) Elimina la necesidad de cifrado
- d) Previene todos los ataques MITM
**Respuesta:** B — La segmentación de red usando VLANs contiene brechas y limita el movimiento lateral.
