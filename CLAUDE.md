# CLAUDE.md — Bold POS Restaurantes APP

## Qué es este proyecto
Prototipo mobile del sistema Bold POS Restaurantes V1. Está dirigido al mesero como usuario principal. Es una adaptación de Bold POS Retail hacia una experiencia especializada para restaurantes con servicio a la mesa.

## Stack técnico
- HTML, CSS, JavaScript vanilla
- Sin frameworks ni bundlers
- Persistencia: localStorage via data-manager.js
- Deploy: GitHub Pages

## Archivos principales
- dashboard.html → Pantalla principal con mapa de mesas
- venta-mesas.html → Vista de venta con mapa de mesas
- detalle-mesa.html → Detalle de mesa ocupada con pedido
- checkout.html → Flujo de pago
- data-manager.js → Gestión de estado con localStorage
- Referencia de tokens en MERLIN-SYSTEM.md

## Design System — Merlin
- Fuente siempre Montserrat
- Nunca hardcodear colores, usar siempre variables CSS del sistema
- Referencia de tokens en MERLIN-TOKENS.md

## Flujo de estados de mesa
Mesa disponible → Abrir mesa → Mesa ocupada
Mesa ocupada → Enviar comanda → Comanda enviada
Comanda enviada → Solicitar cuenta → Checkout

## Reglas críticas
- NO modificar data-manager.js sin entender el modelo de estado completo
- NO cambiar IDs ni clases que conectan HTML con JS
- Antes de editar cualquier archivo, confirmar que es el correcto
- Un archivo por flujo, no mezclar lógicas entre pantallas

## URLs
- Producción: https://camilodiaz-ux-bold.github.io/bold-pos-prototipo/dashboard.html