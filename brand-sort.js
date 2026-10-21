(() => {
  // Set a perfume name to false here when it is temporarily out of stock.
  const stockByName = {};
  const stockStyle = document.createElement('style');
  stockStyle.textContent = `
    #productGrid .stock-status{display:flex;align-items:center;gap:6px;margin:0 0 10px;font-size:11px;font-weight:500;line-height:1.4;color:#86d5a4}
    #productGrid .stock-status .stock-dot{display:inline-block;width:7px;height:7px;flex:0 0 7px;border-radius:50%;background:#4ade80}
    #productGrid .stock-status.is-out{color:#f3a6a6}
    #productGrid .stock-status.is-out .stock-dot{background:#f87171}
  `;
  document.head.appendChild(stockStyle);
  function stockIndicator(p) {
    const available = (stockByName[p.name] ?? p.inStock) !== false;
    return `<div class="stock-status${available ? '' : ' is-out'}"><span class="stock-dot" aria-hidden="true"></span>${available ? 'En stock' : 'Sin stock · Próximamente'}</div>`;
  }

  render = function () {
    const q = $('#search').value.toLowerCase().trim();
    const list = products
      .filter(p => (filter === 'all' || p.type === filter || p.gender === filter) && p.name.toLowerCase().includes(q))
      .sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base', numeric: true }));

    $('#productCount').textContent = `${list.length} fragancias mostradas · ${products.length} cargadas`;
    const grid = $('#productGrid');
    grid.classList.remove('brand-grouped');
    grid.innerHTML = list.map(p => `
      <article class="card">
        <div class="product-art">${art(p)}</div>
        <small>${p.type} · ${p.gender}</small>
        <h3>${p.name}</h3>
        ${stockIndicator(p)}
        <div class="price">desde ${money(p.prices[5])}</div>
        <button onclick="openProduct(${p.id})">Elegir medida</button>
      </article>`).join('');
  };

  render();
})();
