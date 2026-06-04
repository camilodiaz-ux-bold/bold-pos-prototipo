# Bold POS Restaurantes — APP

Prototipo mobile del sistema Bold POS Restaurantes V1. Dirigido al mesero como usuario principal para la gestión de mesas, toma de pedidos y checkout.

## Descripción
Adaptación de Bold POS Retail hacia una experiencia especializada para restaurantes con servicio a la mesa. Prototipo funcional en HTML/CSS/JS vanilla con persistencia en localStorage.

## Stack
- HTML + CSS + JavaScript vanilla
- Sin frameworks ni bundlers
- Persistencia: localStorage
- Deploy: GitHub Pages

## URL
- Producción: https://camilodiaz-ux-bold.github.io/bold-pos-prototipo/dashboard.html

## Estructura de archivos
- dashboard.html → Mapa de mesas principal
- venta-mesas.html → Vista de venta
- detalle-mesa.html → Detalle de mesa ocupada
- checkout.html → Flujo de pago
- data-manager.js → Estado global con localStorage
- MERLIN-TOKENS.md → Tokens del design system

## Flujo principal
1. Dashboard → ver mapa de mesas
2. Abrir mesa → tomar pedido
3. Enviar comanda → cocina
4. Solicitar cuenta → checkout
5. Confirmar pago → liberar mesa

## Diseño
- Figma: https://www.figma.com/design/D3Xwy9lUguiy1dBmtHn7CT/POS-APP-Restaurantes-V1
- Design System: Merlin (Bold) — ver MERLIN-SYSTEM.md