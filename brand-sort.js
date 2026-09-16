(() => {
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
        <div class="price">desde ${money(p.prices[5])}</div>
        <button onclick="openProduct(${p.id})">Elegir medida</button>
      </article>`).join('');
  };

  render();
})();
