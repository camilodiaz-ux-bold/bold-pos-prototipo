/* ══════════════════════════════════════════════════════
   data-manager.js — Bold POS · Persistencia localStorage
   Incluir ANTES del script principal en cada pantalla.
══════════════════════════════════════════════════════ */
const DataManager = (function () {
  const KEY = "boldPOS_mesas";

  /* ── Storage helpers ─────────────────────────────── */
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch (e) { return {}; }
  }
  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  /* ── Time helpers ────────────────────────────────── */
  function calcTime(isoString) {
    if (!isoString) return null;
    const diff = Math.floor((Date.now() - new Date(isoString).getTime()) / 60000);
    if (diff < 60) return diff + "min";
    const h = Math.floor(diff / 60);
    const m = diff % 60;
    return m > 0 ? `${h}h ${m}min` : `${h}h`;
  }

  function fmtAmount(n) {
    return "$" + n.toLocaleString("es-CO");
  }

  /* ── Demo data (refleja los estados iniciales del mapa) ─ */
  function buildDemoData() {
    const now = Date.now();
    const min = 60000;

    const demos = [
      // ── Salón ────────────────────────────────────────
      {
        id: "S01", zona: "salon", capacidad: 2, estado: "occupied",
        personas: 2, horaApertura: new Date(now - 105 * min).toISOString(),
        productos: [
          { id: "EF01", nombre: "Carpaccio de Res",    precio: 22000, cantidad: 1, categoria: "entradas-frias" },
          { id: "BE06", nombre: "Copa de Vino",         precio:  6000, cantidad: 1, categoria: "bebidas" },
        ],
      },
      {
        id: "S04", zona: "salon", capacidad: 4, estado: "occupied",
        personas: 4, horaApertura: new Date(now - 140 * min).toISOString(),
        productos: [
          { id: "PR01", nombre: "Spaghetti Bolognese", precio: 38000, cantidad: 2, categoria: "pastas" },
          { id: "CA04", nombre: "Pollo a la Plancha",  precio: 42000, cantidad: 1, categoria: "carnes" },
          { id: "BE05", nombre: "Cerveza Artesanal",   precio: 16000, cantidad: 1, categoria: "bebidas" },
        ],
      },
      {
        id: "S05", zona: "salon", capacidad: 4, estado: "bill_requested",
        personas: 4, horaApertura: new Date(now - 185 * min).toISOString(),
        productos: [
          { id: "CA01", nombre: "Lomo al Trapo",       precio: 68000, cantidad: 2, categoria: "carnes" },
          { id: "PR03", nombre: "Risotto de Hongos",   precio: 42000, cantidad: 1, categoria: "pastas" },
          { id: "PO01", nombre: "Tiramisú",             precio: 22000, cantidad: 2, categoria: "postres" },
          { id: "BE06", nombre: "Copa de Vino",         precio: 22000, cantidad: 3, categoria: "bebidas" },
        ],
      },
      {
        id: "S06", zona: "salon", capacidad: 4, estado: "occupied",
        personas: 2, horaApertura: new Date(now - 45 * min).toISOString(),
        productos: [
          { id: "EF02", nombre: "Ceviche de Camarón",  precio: 32000, cantidad: 1, categoria: "entradas-frias" },
          { id: "BE01", nombre: "Limonada de Coco",     precio: 14000, cantidad: 1, categoria: "bebidas" },
        ],
      },
      {
        id: "S09", zona: "salon", capacidad: 4, estado: "occupied",
        personas: 4, horaApertura: new Date(now - 175 * min).toISOString(),
        productos: [
          { id: "PE01", nombre: "Salmón a la Plancha", precio: 62000, cantidad: 2, categoria: "pescados" },
          { id: "PR06", nombre: "Risotto de Mariscos", precio: 52000, cantidad: 1, categoria: "pastas" },
          { id: "BE06", nombre: "Copa de Vino",         precio: 22000, cantidad: 2, categoria: "bebidas" },
        ],
      },
      {
        id: "S10", zona: "salon", capacidad: 4, estado: "bill_requested",
        personas: 4, horaApertura: new Date(now - 130 * min).toISOString(),
        productos: [
          { id: "CA03", nombre: "Filete Mignon",        precio: 78000, cantidad: 2, categoria: "carnes" },
          { id: "PE04", nombre: "Pulpo a la Gallega",   precio: 68000, cantidad: 1, categoria: "pescados" },
          { id: "PO03", nombre: "Volcán de Chocolate",  precio: 24000, cantidad: 2, categoria: "postres" },
          { id: "BE06", nombre: "Copa de Vino",         precio: 22000, cantidad: 2, categoria: "bebidas" },
        ],
      },
      {
        id: "S11", zona: "salon", capacidad: 4, estado: "occupied",
        personas: 3, horaApertura: new Date(now - 35 * min).toISOString(),
        productos: [
          { id: "EC02", nombre: "Calamares a la Romana", precio: 26000, cantidad: 1, categoria: "entradas-calientes" },
          { id: "CA02", nombre: "Costilla BBQ",           precio: 58000, cantidad: 1, categoria: "carnes" },
        ],
      },
      {
        id: "S13", zona: "salon", capacidad: 4, estado: "occupied",
        personas: 4, horaApertura: new Date(now - 110 * min).toISOString(),
        productos: [
          { id: "PR05", nombre: "Lasaña de la Casa",    precio: 40000, cantidad: 2, categoria: "pastas" },
          { id: "BE05", nombre: "Cerveza Artesanal",    precio: 16000, cantidad: 4, categoria: "bebidas" },
        ],
      },
      {
        id: "S15", zona: "salon", capacidad: 2, estado: "occupied",
        personas: 2, horaApertura: new Date(now - 22 * min).toISOString(),
        productos: [
          { id: "EF03", nombre: "Ensalada Caprese",     precio: 22000, cantidad: 1, categoria: "entradas-frias" },
          { id: "BE03", nombre: "Agua Mineral",          precio:  6000, cantidad: 2, categoria: "bebidas" },
        ],
      },
      // ── Terraza ──────────────────────────────────────
      {
        id: "T03", zona: "terraza", capacidad: 6, estado: "occupied",
        personas: 4, horaApertura: new Date(now - 35 * min).toISOString(),
        productos: [
          { id: "EC04", nombre: "Bruschetta al Pomodoro", precio: 18000, cantidad: 2, categoria: "entradas-calientes" },
          { id: "CA04", nombre: "Pollo a la Plancha",      precio: 42000, cantidad: 2, categoria: "carnes" },
        ],
      },
      {
        id: "T05", zona: "terraza", capacidad: 2, estado: "bill_requested",
        personas: 2, horaApertura: new Date(now - 55 * min).toISOString(),
        productos: [
          { id: "PR02", nombre: "Fettuccine Alfredo",   precio: 36000, cantidad: 1, categoria: "pastas" },
          { id: "BE06", nombre: "Copa de Vino",          precio: 22000, cantidad: 2, categoria: "bebidas" },
        ],
      },
      // ── Barra ────────────────────────────────────────
      {
        id: "B01", zona: "barra", capacidad: 7, estado: "occupied",
        personas: 5, horaApertura: new Date(now - 152 * min).toISOString(),
        productos: [
          { id: "BE05", nombre: "Cerveza Artesanal",    precio: 16000, cantidad: 4, categoria: "bebidas" },
          { id: "EC03", nombre: "Croquetas de Jamón",   precio: 20000, cantidad: 2, categoria: "entradas-calientes" },
          { id: "EC06", nombre: "Patacones con Hogao",  precio: 16000, cantidad: 2, categoria: "entradas-calientes" },
        ],
      },
    ];

    const data = {};
    demos.forEach(m => { data[m.id] = m; });
    return data;
  }

  /* ── Public API ──────────────────────────────────── */

  function init() {
    if (!localStorage.getItem(KEY)) {
      save(buildDemoData());
    }
  }

  function getMesas() {
    return load();
  }

  function getMesa(id) {
    return load()[id] || null;
  }

  function abrirMesa(id, zona, capacidad, personas) {
    const data = load();
    data[id] = {
      id,
      zona,
      capacidad: capacidad || 4,
      estado: "occupied",
      personas: personas || 1,
      horaApertura: new Date().toISOString(),
      productos: [],
    };
    save(data);
  }

  function agregarProducto(mesaId, producto) {
    // producto: { id, nombre, precio, categoria }
    const data = load();
    if (!data[mesaId]) return;
    const mesa = data[mesaId];
    const existing = mesa.productos.find(p => p.id === producto.id);
    if (existing) {
      existing.cantidad++;
    } else {
      mesa.productos.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio, categoria: producto.categoria, cantidad: 1 });
    }
    save(data);
  }

  function quitarProducto(mesaId, productoId) {
    const data = load();
    if (!data[mesaId]) return;
    const mesa = data[mesaId];
    const idx = mesa.productos.findIndex(p => p.id === productoId);
    if (idx === -1) return;
    if (mesa.productos[idx].cantidad > 1) {
      mesa.productos[idx].cantidad--;
    } else {
      mesa.productos.splice(idx, 1);
    }
    save(data);
  }

  function solicitarCuenta(mesaId) {
    const data = load();
    if (!data[mesaId]) return;
    data[mesaId].estado = "bill_requested";
    save(data);
  }

  function cerrarMesa(mesaId) {
    const data = load();
    if (!data[mesaId]) return;
    data[mesaId].estado = "available";
    data[mesaId].personas = 0;
    data[mesaId].horaApertura = null;
    data[mesaId].productos = [];
    save(data);
  }

  function getTotal(mesaId) {
    const mesa = getMesa(mesaId);
    if (!mesa) return 0;
    return mesa.productos.reduce((sum, p) => sum + p.precio * p.cantidad, 0);
  }

  function reset() {
    localStorage.removeItem(KEY);
    init();
    location.reload();
  }

  return {
    init,
    getMesas,
    getMesa,
    abrirMesa,
    agregarProducto,
    quitarProducto,
    solicitarCuenta,
    cerrarMesa,
    getTotal,
    calcTime,
    fmtAmount,
    reset,
  };
})();
