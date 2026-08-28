# OBJECTIVE 05 — WIRELESS ATTACK COUNTERMEASURES

---

## WIRELESS SECURITY — CORE DEFINITION (EXAM)

|Item|Memorize|
|---|---|
|Wireless Security|Medidas implementadas para proteger redes inalámbricas contra accesos no autorizados y ataques|

MEMORY HOOK:  
**Wireless security = prevención + detección**

---

## WHY WIRELESS NETWORKS NEED COUNTERMEASURES

|Reason|
|---|
|Medio de transmisión abierto|
|Interceptación fácil|
|Riesgo de dispositivos no autorizados|
|Configuraciones débiles predeterminadas|

---

# PRIMARY WIRELESS SECURITY CONTROLS

---

## 1. STRONG ENCRYPTION (MOST IMPORTANT)

|Control|Description|
|---|---|
|WPA3|Estándar de seguridad recomendado|
|WPA2-AES|Mínimo aceptable|
|Disable WEP/WPA|Obligatorio|

MEMORY HOOK:  
**No WEP. No WPA.**

---

## 2. STRONG AUTHENTICATION

|Control|Description|
|---|---|
|Strong passphrases|Previenen ataques de diccionario|
|WPA2/WPA3-Enterprise|Utiliza RADIUS|
|Certificates|Autenticación más robusta|

MEMORY HOOK:  
**Enterprise > Personal**

---

## 3. DISABLE WPS

|Reason|
|---|
|Vulnerable a fuerza bruta|
|Debilidad basada en PIN|

MEMORY HOOK:  
**WPS = weak point**

---

## 4. ACCESS POINT CONFIGURATION HARDENING

|Hardening Step|
|---|
|Cambiar credenciales predeterminadas|
|Desactivar broadcast de SSID|
|Reducir potencia de señal|
|Cambiar SSID predeterminado|

EXAM TRAP:  
Hidden SSID ≠ seguridad  
Sigue siendo útil como **disuasión**, no como protección.

---

## 5. MAC ADDRESS FILTERING

|Feature|Reality|
|---|---|
|Permite dispositivos conocidos|SÍ|
|Previene ataques|NO|
|Fácilmente falsificable|SÍ|

MEMORY HOOK:  
**MAC filtering = speed bump**

---

## 6. WIRELESS INTRUSION DETECTION / PREVENTION SYSTEMS (WIDS/WIPS)

---

### WIDS — DEFINITION

|Item|Memorize|
|---|---|
|WIDS|Monitorea tráfico inalámbrico en busca de ataques|

---

### WIPS — DEFINITION

|Item|Memorize|
|---|---|
|WIPS|Detecta y previene activamente ataques|

---

### DETECTED THREATS

|Threat|
|---|
|Rogue AP|
|Evil Twin|
|Deauth attacks|
|MAC spoofing|

MEMORY HOOK:  
**IDS sees, IPS stops**

---

## 7. NETWORK SEGMENTATION

|Technique|
|---|
|Separar WLAN de LAN|
|Usar VLANs|
|Aislamiento de red de invitados|

MEMORY HOOK:  
**Compartmentalize damage**

---

## 8. VPN OVER WIRELESS

|Benefit|
|---|
|Cifra el tráfico de extremo a extremo|
|Protege Wi-Fi abierto|

MEMORY HOOK:  
**VPN shields wireless**

---

## 9. REGULAR PATCHING AND FIRMWARE UPDATES

|Component|
|---|
|Access points|
|Routers|
|Wireless controllers|

MEMORY HOOK:  
**Old firmware = open door**

---

## 10. PHYSICAL SECURITY

|Measure|
|---|
|Ubicación segura del AP|
|Prevenir instalación de dispositivos no autorizados|
|Controlar acceso al hardware de red|

MEMORY HOOK:  
**Physical access = total access**

---

# WIRELESS ATTACK → COUNTERMEASURE MAPPING (EXAM FAVORITE)

|Attack|Countermeasure|
|---|---|
|Evil Twin|WIPS|
|Rogue AP|WIDS/WIPS|
|Deauth|802.11w|
|WEP cracking|WPA3|
|MITM|Strong encryption|
|Jamming|Spectrum analysis|

---

## IEEE 802.11w — MANAGEMENT FRAME PROTECTION

|Item|Memorize|
|---|---|
|802.11w|Protege tramas de gestión|
|Prevents|Ataques de Deauth/Disassoc|

MEMORY HOOK:  
**11w stops deauth**

---

# WIRELESS SECURITY BEST PRACTICES (CEH LIST)

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

# MODULE 16 — COMPLETE MEMORY BLOCK

**Wireless es transmisión por broadcast.  
El cifrado es obligatorio.  
WEP está roto.  
WPA3 es el mejor.  
Recon escucha.  
Deauth fuerza reconexión.  
Aircrack rompe claves.  
WIPS detiene ataques.**

---

# MODULE 16 — FINAL STATUS

|Item|Status|
|---|---|
|Objectives covered|100%|
|Tools covered|100%|
|Commands covered|100%|
|Attacks covered|100%|
|Countermeasures covered|100%|
|Exam alignment|Exact|

---

## MODULE 16 COMPLETE

You are now ready for:

- **Module 17 – Hacking Mobile Platforms**
    
- **Wireless attack scenario drills**
    
- **Aircrack / Reaver command flash review**
    
- **One-page wireless exam cheat sheet**
    

---

# EXAM FLASHCARDS

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

# PRACTICE QUESTIONS

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
