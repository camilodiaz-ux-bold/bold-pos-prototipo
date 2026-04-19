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
        id: "S01", zona: "salon", capacidad: 2, estado: "bill_requested",
        personas: 2, horaApertura: new Date(now - 95 * min).toISOString(),
        productos: [
          { id: "EF01", nombre: "Carpaccio de Res", precio: 22000, cantidad: 1, categoria: "entradas-frias" },
          { id: "BE06", nombre: "Copa de Vino",      precio:  6000, cantidad: 1, categoria: "bebidas" },
        ],
      },
      {
        id: "S03", zona: "salon", capacidad: 4, estado: "occupied",
        personas: 3, horaApertura: new Date(now - 40 * min).toISOString(),
        productos: [
          { id: "CA04", nombre: "Pollo a la Plancha", precio: 42000, cantidad: 2, categoria: "carnes" },
          { id: "BE01", nombre: "Limonada de Coco",   precio: 14000, cantidad: 2, categoria: "bebidas" },
        ],
      },
      {
        id: "S04", zona: "salon", capacidad: 4, estado: "occupied",
        personas: 4, horaApertura: new Date(now - 75 * min).toISOString(),
        productos: [
          { id: "PR01", nombre: "Spaghetti Bolognese", precio: 38000, cantidad: 2, categoria: "pastas" },
          { id: "BE05", nombre: "Cerveza Artesanal",   precio: 16000, cantidad: 2, categoria: "bebidas" },
        ],
      },
      // ── Terraza ──────────────────────────────────────
      {
        id: "T05", zona: "terraza", capacidad: 2, estado: "bill_requested",
        personas: 2, horaApertura: new Date(now - 55 * min).toISOString(),
        productos: [
          { id: "PR02", nombre: "Fettuccine Alfredo", precio: 36000, cantidad: 1, categoria: "pastas" },
          { id: "BE06", nombre: "Copa de Vino",        precio: 22000, cantidad: 2, categoria: "bebidas" },
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

  function liberarMesa(mesaId) {
    cerrarMesa(mesaId);
  }

  function actualizarEstadoMesa(mesaId, estadoDM, productos) {
    const data = load();
    if (!data[mesaId]) {
      data[mesaId] = {
        id: mesaId,
        zona: '',
        capacidad: 4,
        estado: estadoDM,
        personas: 0,
        horaApertura: new Date().toISOString(),
        productos: [],
      };
    }
    data[mesaId].estado = estadoDM;
    if (productos && productos.length > 0) {
      data[mesaId].productos = productos.map(p => ({
        id: p.id, nombre: p.nombre, precio: p.precio,
        cantidad: p.cantidad, categoria: p.categoria || ''
      }));
      data[mesaId].total = productos.reduce((s, p) => s + p.precio * p.cantidad, 0);
    }
    save(data);
  }

  function getTotal(mesaId) {
    const mesa = getMesa(mesaId);
    if (!mesa) return 0;
    return mesa.productos.reduce((sum, p) => sum + p.precio * p.cantidad, 0);
  }

  function reset() {
    // Clear comanda/mesa state keys alongside main key
    Object.keys(localStorage)
      .filter(k => k.startsWith('mesa_') || k.startsWith('boldPOS_comanda_'))
      .forEach(k => localStorage.removeItem(k));
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
    liberarMesa,
    actualizarEstadoMesa,
    getTotal,
    calcTime,
    fmtAmount,
    reset,
  };
})();
