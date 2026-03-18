# Merlin Design System 1.5.1 — Token & Component Reference

> **Fuente:** Figma file `iVTvOaS6i0rqRoOq3ZJZH2`
> **Pagina extraida:** Drop ups (`266:3017`), Buttons (`258:1342`, `258:1547`), Text Inputs (`910:3768`), Icons (`82:2209`)
> **Fecha de extraccion:** 2026-03-06

---

## 1. DESIGN TOKENS — FUNDAMENTOS

### 1.1 Paleta de Colores (CSS Variables)

```css
/* Brand */
--blue/100:   #121e6c   /* Azul principal: titulos, CTAs secundarios */
--blue/30:    #babdd3   /* Azul deshabilitado / subtle */
--blue/10:    #f1f2f6   /* Fondo boton Tertiary */

/* Accent / CTA */
--coral/100:  #ff2947   /* CTA primario, destructivo, ocupado */
--coral/60:   #ffb2bc   /* CTA primary deshabilitado (fondo) */
--coral/30:   #ffdfe4   /* CTA primary deshabilitado (texto) */

/* Neutralos */
--black/0:    #ffffff   /* Fondo cards, boton secondary, white */
--black/10:   #f3f3f3   /* Hover state inputs */
--black/40:   #969696   /* Texto deshabilitado, helper text (alt) */
--black/60:   #606060   /* Placeholder, helper text */
--black/100:  #1e1e1e   /* Texto body principal */

/* Backgrounds */
--background/page: #f7f8fb   /* Fondo de pantalla, inputs activos */

/* Feedback */
--feedback/error/150:  #910022   /* Error: border y texto */
```

### 1.2 Mapa consolidado (CSS custom properties limpias)

```css
:root {
  /* Brand */
  --blue-100:           #121e6c;
  --blue-30:            #babdd3;
  --blue-10:            #f1f2f6;

  /* CTA */
  --coral-100:          #ff2947;
  --coral-60:           #ffb2bc;
  --coral-30:           #ffdfe4;

  /* Neutrals */
  --black-0:            #ffffff;
  --black-10:           #f3f3f3;
  --black-40:           #969696;
  --black-60:           #606060;
  --black-100:          #1e1e1e;

  /* Backgrounds */
  --background-page:    #f7f8fb;

  /* Feedback */
  --feedback-error-150: #910022;

  /* Typography */
  --font-family-main:   'Montserrat', sans-serif;
  --font-size-xxs:      12px;
  --font-size-xs:       14px;
  --font-size-s:        16px;
  --font-height-xxs:    16px;
  --font-height-xs:     20px;
  --font-height-s:      24px;

  /* Border radii */
  --radius-pill:        100px;
  --radius-card:        16px;
  --radius-input:       12px;
  --radius-action-btn:  12px;
  --radius-dropup-top:  32px;   /* 32px 32px 0 0 */
  --radius-20:          20px;   /* alias line-height semibold body */

  /* Shadows */
  --shadow-blue-8:      0px 8px 20px rgba(18, 30, 108, 0.08);
  --shadow-dropup:      0px -4px 8px rgba(0, 0, 0, 0.12);
}
```

---

## 2. TIPOGRAFIA

**Font family unica:** `Montserrat` — referenciada como `--font/family/main`

### 2.1 Escala de tamanos y line-heights

| Token             | px   | Uso                              |
|-------------------|------|----------------------------------|
| `--font/size/xxs` | 12px | Caption, link small              |
| `--font/size/xs`  | 14px | Body, botones, inputs, labels    |
| `--font/size/s`   | 16px | Titulos, subtitulos de seccion   |
| `--font/height/xxs` | 16px | Line height para xxs           |
| `--font/height/xs`  | 20px | Line height para xs            |
| `--font/height/s`   | 24px | Line height para s             |
| `--radius-20`       | 20px | Alias line-height body semibold|

### 2.2 Pesos

| Token                   | Valor | Nombre Montserrat |
|-------------------------|-------|-------------------|
| `--font/weight/regular` | 400   | Regular           |
| `--font/weight/medium`  | 500   | Medium            |
| `--font/weight/semibold`| 600   | SemiBold          |
| `--font/weight/bold`    | 700   | Bold              |

### 2.3 Text Styles completos

| Nombre                  | Size  | Weight | Line Height | Letter Spacing |
|-------------------------|-------|--------|-------------|----------------|
| `[APP]/Caption/Regular` | 12px  | 400    | 16px        | 0              |
| `[APP]/Body/Regular`    | 14px  | 400    | 20px        | 0              |
| `[APP]/Body/Medium`     | 14px  | 500    | 20px        | 0              |
| `[APP]/Body/Semibold`   | 14px  | 600    | 20px        | 0              |
| `[APP]/Body/Bold`       | 14px  | 700    | 20px        | 0              |
| `[APP]/Title`           | 16px  | 700    | 20px        | 0              |
| `[WEB]/Subtitle/Large`  | 16px  | 600    | 24px        | 0              |
| `Link/Small`            | 12px  | 600    | 16px        | 0              |

---

## 3. BUTTONS

**Node IDs:** `258:1342` (Default), `258:1547` (Clustered), `7863:22919` (Action)

### 3.1 APP Button / Default — 5 tipos

| Type              | Estado Default                                | Estado Disabled                        |
|-------------------|-----------------------------------------------|----------------------------------------|
| **Primary**       | bg `#ff2947`, texto `#ffffff`, font Medium    | bg `#ffb2bc`, texto `#ffdfe4`          |
| **Secondary**     | bg `#ffffff`, texto `#ff2947`, font Medium    | bg `#ffffff`, texto `#ffb2bc`          |
| **Tertiary**      | bg `#f1f2f6`, texto `#121e6c`, font Medium    | bg `#f1f2f6`, texto `#babdd3`          |
| **Primary/Text**  | sin fondo, texto `#ff2947`, underline, Semibold 12px | sin fondo, texto `#ffb2bc`  |
| **Secondary/Text**| sin fondo, texto `#121e6c`, underline, Semibold 12px | sin fondo, texto `#babdd3`  |

### 3.2 Dimensiones — APP Button / Default

```
Height:             48px  <- NO modificar nunca
Border-radius:      100px (pill)
Padding horizontal: 25px
Padding vertical:   24px (centra el texto)
Font size:          16px (--font/size/s)
Font weight:        Medium 500 / Semibold 600 (text variants)
Line height:        20px (--font/height/xs)
Text:               normal (sin UPPERCASE)
Gap icono-texto:    16px
Icon size:          24x24px

Fixed (full width):
  Width:            375px (safe area)
  Fondo decorativo: linear-gradient(#f7f8fb -> transparent) detras del boton

Not Fixed (hug):
  Width:            343px o hug content
```

### 3.3 APP Button / Action (`7863:22919`)

Disenados para usarse **dentro de cards u otros componentes** (stepper, etc.).
Crean un segundo nivel de jerarquia; pueden repetirse en pantalla.

```
Height:          40px
Border-radius:   12px
Padding:         8px 16px
Font:            Semibold / 14px / 20px line-height

Primary:   bg coral/100 (#ff2947),  texto white
Secondary: bg white     (#ffffff),  texto coral/100 (#ff2947)
```

### 3.4 APP Button / Clustered (`258:1547`)

| Arrange              | Descripcion                                          |
|----------------------|------------------------------------------------------|
| Vertical / Default   | Primary (coral) arriba + Text link (coral) abajo     |
| Horizontal / Default | Secondary (white) izquierda + Primary (coral) derecha|
| Vertical / Action    | Action Primary + Action Secondary apilados           |
| Horizontal / Action  | Action Secondary + Action Primary en fila            |

**Regla critica:** Maximo 2 `APP Button/Default` por pantalla. Para mas acciones usar `APP Button/Action`.

---

## 4. TEXT INPUTS (`910:3768`)

### 4.1 Tipos

| Type       | Descripcion                            |
|------------|----------------------------------------|
| `Input`    | Campo de texto generico                |
| `Dropdown` | Selector con lista desplegable         |
| `Phone`    | Prefijo de pais + campo de numero      |

### 4.2 Estados

| Status           | Fondo       | Border              | Color texto | Icono trailing        | Opacidad |
|------------------|-------------|---------------------|-------------|-----------------------|----------|
| `Active`         | `#f7f8fb`   | ninguno             | `#606060`   | `ic_star`             | 100%     |
| `Hover`          | `#f3f3f3`   | ninguno             | `#606060`   | `ic_star`             | 100%     |
| `Filled`         | `#f7f8fb`   | ninguno             | `#1e1e1e`   | `ic_check_contained`  | 100%     |
| `Error`          | `#ffffff`   | 1px `#910022`       | `#1e1e1e`   | `ic_error`            | 100%     |
| `Disabled`       | `#f7f8fb`   | ninguno             | `#606060`   | `ic_star`             | 50%      |
| `Filled-Disabled`| `#f7f8fb`   | ninguno             | `#1e1e1e`   | `ic_check_contained`  | 50%      |
| `Open`           | `#f7f8fb`   | ninguno             | `#606060`   | chevron arriba        | 100%     |

### 4.3 Dimensiones

```
Width total:          339px  (safe area 375px - 18px margen cada lado)
Height (field):       40px
Border-radius field:  12px
Padding field:        12px
Gap label -> field:   4px
Gap icono-texto:      12px

Label:
  Font:   SemiBold / 14px / --blue/100 (#121e6c)
  Linea:  20px

Placeholder:
  Font:   Regular / 14px / --black/60 (#606060)

Filled text:
  Font:   Medium (500) / 14px / --black/100 (#1e1e1e)

Helper text (normal):
  Font:   Regular / 12px / --black/40 (#969696)

Helper text (error):
  Font:   Regular / 12px / --feedback/error/150 (#910022)

Dropdown list:
  bg:             #ffffff
  border-radius:  12px
  shadow:         0px 8px 20px rgba(18,30,108,0.08)
  padding:        12px
  gap entre items: 10px
  Item height:    40px
  Item radius:    8px
  Item selected:  bg #f7f8fb
  Item default:   bg #ffffff
```

### 4.4 Regla de uso

> El **label** debe tener la informacion que se le pide al usuario.
> El **placeholder** debe tener una instruccion aclaratoria o complementaria del label.
> Nunca repetir el mismo texto en los dos campos.

---

## 5. DROP UPS (`266:3017`)

### 5.1 Estructura comun

```
Overlay backdrop:     rgba(30, 30, 30, 0.70)
Sheet background:     #ffffff
Border-radius (top):  32px 32px 0 0
Shadow superior:      0px -4px 8px rgba(0, 0, 0, 0.12)
Padding interno:      24px 16px 20px
Gap entre secciones:  16px / 24px
Handle (grip bar):    altura 4px, ancho 36px, color #D1D3D9, margin-top 12px, radius 2px
```

### 5.2 Header del Drop Up

```
Altura header:        ~52px
Padding horizontal:   16px
Gap elementos:        20px
Icono back (chevron): 24x24px
Titulo:               [APP]/Title (Bold 16px / blue/100)
Icono close:          24x24px (ic_close_navigation)
```

### 5.3 Variantes

| Componente                   | Node ID      | Variantes                | Uso                                         |
|------------------------------|--------------|--------------------------|---------------------------------------------|
| `APP Drop Up / Feedback`     | `5042:10533` | —                        | Estado de proceso completado o fallido      |
| `APP Drop Up / Illustration` | `5042:10568` | —                        | Feedback emocional con ilustracion          |
| `APP Drop Up / Selection`    | `5042:10671` | List, Grid               | Lista de seleccion unica                    |
| `APP Drop Up / Input`        | `49946:4951` | Text field, Counter      | Campos de texto dentro de un flujo          |
| `APP Drop Up / Informative`  | `15826:5249` | Bullet list, Icon list, Summary | Contenido informativo / FAQ           |
| `APP Drop Up / Search`       | `44850:6867` | Image, List              | Resultados de busqueda                      |

### 5.4 Botones dentro de Drop Up

Usan `APP Button / Clustered` en el footer:

```
Vertical Default:
  - Primary (coral/100) — accion principal
  - Primary/Text (coral/100, underline) — cancelar o accion secundaria

Padding footer: 24px top + 20px bottom
Width botones:  339px (fixed dentro del sheet)
```

---

## 6. ICONS

**Tamano estandar:** `24x24px`
**Tamano small:** `20x20px` (chevrons, bullets)
**Formato:** SVG inline, mono-color con variante de color

### 6.1 Catalogo extraido

| Nombre                    | Node ID      | Tamano  | Nota                          |
|---------------------------|--------------|---------|-------------------------------|
| `icon/ic_credit`          | `82:2209`    | 24x24   | Pagos / tarjeta               |
| `icon/ic_star`            | `82:2273`    | 24x24   | Trailing en inputs activos    |
| `icon/ic_chevron`         | `199:1182`   | 20x20   | Dropdown, navegacion back     |
| `icon/ic_error`           | `7438:22283` | 24x24   | Color=Error/150               |
| `icon/ic_check_contained` | `7438:22277` | 24x24   | Color=Blue — estado filled    |
| `icon/ic_tooltip`         | `1409:8656`  | 24x24   | Color=Blue — info label       |
| `icon/ic_close_navigation`| `34493:26538`| 24x24   | Cierre de drop ups / headers  |
| `icon/ic_bullet`          | `32941:1576` | 16x16   | Listas informativas           |
| `icon/ic_close/Bold/Small`| `32941:1583` | 16x16   | Variante Bold Small del close |
| `icon/ic_neo`             | instancia    | 24x24   | Decorativo / marca            |
| `icon/ic_feedback`        | `5042:10466` | 48x48   | Feedback drop up (grande)     |

---

## 7. ESPACIADO Y LAYOUT

Todos los valores inferidos de las dimensiones de componentes extraidos.

| Concepto                     | Valor  |
|------------------------------|--------|
| Safe area width (APP)        | 375px  |
| Contenido util               | 343px  |
| Margen lateral               | 16px   |
| Gap entre cards/secciones    | 24px   |
| Gap entre elementos internos | 16px   |
| Gap label -> campo           | 4px    |
| Gap icono -> texto           | 8–16px |
| Padding card interno         | 16px   |
| Padding drop up              | 24px 16px 20px |
| Padding boton action         | 8px 16px |
| Padding boton default        | 24px 25px |

---

## 8. REGLAS DE USO

| Regla                      | Detalle                                                                   |
|----------------------------|---------------------------------------------------------------------------|
| Font family unica          | Solo Montserrat. SF Pro es del sistema iOS, no usar en web                |
| Botones APP != WEB         | Los botones APP van en texto normal (sin UPPERCASE). NO usarlos en contexto web |
| Altura boton inmutable     | `48px` para Default — nunca modificar                                     |
| Maximo botones por pantalla| Max 2 `APP Button/Default`; usar `APP Button/Action` para acciones extra  |
| Inputs width               | `339px` dentro del safe area de `375px` (18px margen cada lado)          |
| Drop ups siempre desde abajo | Con overlay `rgba(30,30,30,0.70)`, nunca centrado en pantalla           |
| Label != Placeholder       | Label = que pedimos; Placeholder = instruccion aclaratoria; no repetir   |
| Boton fijo = full width    | Si `fixed=true`, el boton ocupa el safe area completo (375px)            |
| Boton no fijo = hug        | Si `fixed=false`, el boton puede tener modo hug al contenido             |

---

## 9. PENDIENTES DE EXTRACCION

Los siguientes componentes no estaban accesibles desde los node IDs de la URL compartida.
Para extraerlos: abrir cada pagina en Figma, copiar la URL con el `node-id` y re-ejecutar la extraccion.

| Componente | Estado     |
|------------|------------|
| Cards      | Pendiente  |
| Tabs       | Pendiente  |
| Tags (WEB/APP Tag master) | Parcial — solo visto como instancia en Drop Ups |
| Typography page completa | Parcial — text styles inferidos de componentes |
| Colors page | Pendiente — paleta completa con todos los matices |
