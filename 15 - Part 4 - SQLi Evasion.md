# OBJECTIVE 04 — SQL INJECTION EVASION TECHNIQUES

---

## CEH CORE STATEMENT (MEMORIZE)

|Item|Memorize|
|---|---|
|SQL Injection Evasion|Técnicas utilizadas por los atacantes para evadir filtros de seguridad, firewalls y mecanismos de validación de entrada|

---

## WHY EVASION IS REQUIRED

|Reason|
|---|
|Web Application Firewalls (WAFs)|
|Input validation|
|Blacklist filters|
|Signature-based detection|

MEMORY HOOK:  
**Blocked ≠ Secure**

---

## CLASSIFICATION OF EVASION TECHNIQUES (EXAM MUST)

|Category|
|---|
|Encoding techniques|
|Case manipulation|
|Comment injection|
|Whitespace manipulation|
|Operator substitution|
|Logical obfuscation|

---

## 1. ENCODING TECHNIQUES

### PURPOSE

|Purpose|
|---|
|Evadir filtros de entrada codificando los payloads|

---

### TYPES OF ENCODING

|Encoding Type|Description|
|---|---|
|URL encoding|Codifica caracteres como valores %|
|Hex encoding|Utiliza valores hexadecimales|
|Unicode encoding|Codifica caracteres usando Unicode|
|Double encoding|Codifica datos que ya han sido codificados|

---

### EXAM EXAMPLES (RECOGNITION)

|Normal|Encoded|
|---|---|
|'|%27|
|space|%20|
|OR|%4F%52|

---

MEMORY HOOK:  
**Encoded ≠ detected**

---

## 2. CASE MANIPULATION

### PURPOSE

|Purpose|
|---|
|Evadir filtros sensibles a mayúsculas/minúsculas|

---

### TECHNIQUES

|Technique|
|---|
|Uppercase keywords|
|Lowercase keywords|
|Mixed-case keywords|

---

### EXAM EXAMPLES

|Keyword|Variation|
|---|---|
|SELECT|SeLeCt|
|UNION|UnIoN|
|OR|oR|

---

MEMORY HOOK:  
**Case changes bypass weak filters**

---

## 3. COMMENT INJECTION

### PURPOSE

|Purpose|
|---|
|Romper la lógica de la consulta e ignorar el resto del SQL|

---

### COMMENT TYPES (REPEAT – EXAM IMPORTANT)

|Comment|DB Support|
|---|---|
|--|Most DBs|
|#|MySQL|
|/* */|All DBs|

---

### EXAM PAYLOADS

|Payload|
|---|
|' OR 1=1--|
|' OR 1=1#|

---

MEMORY HOOK:  
**Comment = query terminator**

---

## 4. WHITESPACE MANIPULATION

### PURPOSE

|Purpose|
|---|
|Evadir el filtrado basado en espacios|

---

### TECHNIQUES

|Technique|
|---|
|Replace space with comments|
|Replace space with tabs|
|Replace space with newline|

---

### EXAM EXAMPLES

|Normal|Manipulated|
|---|---|
|SELECT * FROM|SELECT/**/FROM|

---

MEMORY HOOK:  
**No space ≠ no SQL**

---

## 5. OPERATOR SUBSTITUTION

### PURPOSE

|Purpose|
|---|
|Reemplazar operadores bloqueados con equivalentes|

---

### SUBSTITUTIONS

|Original|Substitute|
|---|---|
|=|LIKE|
|AND|&&|
|OR||

---

MEMORY HOOK:  
**Same logic, different syntax**

---

## 6. LOGICAL OBFUSCATION

### PURPOSE

|Purpose|
|---|
|Ocultar la lógica maliciosa|

---

### TECHNIQUES

|Technique|
|---|
|Arithmetic expressions|
|Boolean expressions|
|Nested queries|

---

### EXAM EXAMPLES

|Original|Obfuscated|
|---|---|
|1=1|2-1=1|
|TRUE|NOT FALSE|

---

MEMORY HOOK:  
**Math hides truth**

---

## 7. CHAR() AND ASCII FUNCTIONS

### PURPOSE

|Purpose|
|---|
|Construir cadenas sin usar comillas|

---

### DB-SPECIFIC FUNCTIONS

|Database|Function AJ|
|---|---|
|MySQL|CHAR()|
|MSSQL|CHAR()|
|Oracle|CHR()|

---

### EXAM EXAMPLE

|Payload|
|---|
|CHAR(65,66,67)|

---

MEMORY HOOK:  
**No quotes, no filter**

---

## 8. CONCATENATION EVASION

### PURPOSE

|Purpose|
|---|
|Dividir las palabras clave en partes|

---

### TECHNIQUES

|Technique|
|---|
|CONCAT()|
|+ operator|
||

---

### EXAM EXAMPLE

|Keyword|Obfuscated|
|---|---|
|UNION|UN|

---

MEMORY HOOK:  
**Split keyword survives filter**

---

## 9. SQL INJECTION EVASION SUMMARY (EXAM GOLD)

|Technique|Bypasses|
|---|---|
|Encoding|Signature filters|
|Case manipulation|Case-sensitive filters|
|Comments|Query parsing|
|Whitespace tricks|Space filters|
|Operator substitution|Keyword filters|
|Obfuscation|Pattern detection|

---

# EXAM FLASHCARDS

| Term | Definition |
|------|------------|
| SQL Injection Evasion | Técnicas utilizadas para evadir WAFs, validación de entrada y detección basada en firmas |
| URL Encoding | Codifica caracteres como valores % hex (por ejemplo, `'` se convierte en `%27`) |
| Hex Encoding | Representa caracteres usando valores hexadecimales para evadir filtros |
| Double Encoding | Codifica datos ya codificados para evadir capas de decodificación secundarias |
| Case Manipulation | Usa palabras clave en caso mixto (por ejemplo, `SeLeCt`) para evadir filtros sensibles a mayúsculas/minúsculas |
| Comment Injection | Inserta comentarios SQL (`--`, `#`, `/* */`) para romper la lógica de la consulta e ignorar el resto del SQL |
| Whitespace Manipulation | Reemplaza espacios con comentarios, tabulaciones o saltos de línea para evadir filtros basados en espacios |
| Operator Substitution | Reemplaza operadores bloqueados con equivalentes (por ejemplo, `=` con `LIKE`, `AND` con `&&`) |
| Logical Obfuscation | Oculta la lógica maliciosa usando expresiones aritméticas (`2-1=1`) o expresiones booleanas (`NOT FALSE`) |
| CHAR()/CHR() Functions | Construye cadenas sin comillas (MySQL/MSSQL usan CHAR(), Oracle usa CHR()) |
| Concatenation Evasion | Divide las palabras clave en partes usando CONCAT(), `+`, o `\|\|` para sobrevivir a los filtros de palabras clave |
| WAF Bypass Goal | Evadir controles de seguridad que bloquean firmas conocidas de SQL injection |
| `SELECT/**/FROM` | Evasion de whitespace usando comentarios en línea en lugar de espacios |

---

# PRACTICE QUESTIONS

**1.** Un atacante quiere evadir un WAF que bloquea la palabra clave "SELECT". ¿Qué técnica de evasion sería más efectiva?
- a) Usar un payload más largo
- b) Usar palabras clave en caso mixto como `SeLeCt`
- c) Usar un método HTTP diferente
- d) Usar HTTPS en lugar de HTTP
**Answer:** b — Case manipulation (caso mixto como `SeLeCt`) evita los filtros sensibles a mayúsculas/minúsculas que solo bloquean coincidencias exactas de palabras clave.

**2.** ¿Qué representa el payload `%27%20OR%201%3D1--`?
- a) Una inyección ciega basada en tiempo
- b) Una versión codificada en URL de `' OR 1=1--`
- c) Un UNION SELECT codificado en hex
- d) Un payload WAF codificado en doble
**Answer:** b — `%27` = `'`, `%20` = espacio, `%3D` = `=` — esto es la codificación URL estándar del payload de bypass clásico.

**3.** ¿Qué técnica evadiría un WAF que filtra todos los caracteres de espacio en la entrada?
- a) Solo hex encoding
- b) Reemplazar espacios con comentarios en línea como `/**/`
- c) Usar palabras clave en mayúsculas
- d) Usar operator substitution
**Answer:** b — `SELECT/**/FROM` usa comentarios en línea como sustitutos de espacios, evitando el filtrado basado en espacios.

**4.** Un atacante reemplaza `1=1` con `2-1=1` en su payload. ¿Qué técnica de evasion es esta?
- a) Encoding
- b) Comment injection
- c) Logical obfuscation usando aritmética
- d) Operator substitution
**Answer:** c — Las expresiones aritméticas como `2-1=1` son lógicamente equivalentes a `1=1` pero evitan la detección basada en patrones.

**5.** ¿Qué función permite construir cadenas SQL sin usar comillas, evitando así los filtros basados en comillas?
- a) SLEEP()
- b) CHAR()
- c) WAITFOR DELAY
- d) pg_sleep()
**Answer:** b — CHAR() (y CHR() en Oracle) convierte valores ASCII a caracteres, eliminando la necesidad de comillas literales en el payload.
