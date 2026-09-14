(() => {
  const brandRules = [
    ['Armani', /Acqua di Gi[oò]|Stronger With You|Sì Intense|My Way/i],
    ['Afnan', /9 PM Afnan/i],
    ['Al Haramain', /Al Haramain|Amber Oud/i],
    ['Armaf', /Club de Nuit|Club de la Nuit|Odyssey|Tag Her|Yum Yum|Dubai Night|Mandarinsky Elixir/i],
    ['Azzaro', /Azzaro/i],
    ['Bvlgari', /Bvlgari/i],
    ['Calvin Klein', /CK Be/i],
    ['Carolina Herrera', /212 |Good Girl|Bad Boy/i],
    ['Chanel', /Bleu de Chanel/i],
    ['Coach', /Coach/i],
    ['Dior', /Fahrenheit/i],
    ['DKNY', /DKNY/i],
    ['Dolce & Gabbana', /Dolce & Gabbana|L[’']Imperatrice/i],
    ['Dumont', /Nitro Red Dumont/i],
    ['French Avenue', /Liquid Brun|Safari Breeze|Vulcan Feu/i],
    ['Gucci', /Gucci/i],
    ['Guess', /Guess/i],
    ['Hermès', /24 Faubourg/i],
    ['Jean Paul Gaultier', /Le Beau|Le Male/i],
    ['Kenzo', /Kenzo/i],
    ['Lancôme', /Idôle|La Vie Est Belle|Trésor|Miracle/i],
    ['Lattafa', /Lattafa|Asad |Khamrah|Nebras|Yara |Badee Al Oud|Fakhar Rose|Angham Second Song|Eclaire Pistache|Honor & Glory/i],
    ['Maison Alhambra', /Glacier Bold|Lovely Chérie|Delilah Blanc|Delilha Blanc/i],
    ['Montale', /Arabians Tonka/i],
    ['Mykonos', /Glich|Conquer/i],
    ['Narciso Rodriguez', /Narciso Rodríguez/i],
    ['Nautica', /Nautica/i],
    ['Paco Rabanne', /Invictus|Olympea|One Million/i],
    ['Paris Corner', /Musamam White Intense/i],
    ['Ralph Lauren', /Polo 67|Ralph[’']s Club/i],
    ['Rasasi', /Hawas /i],
    ['Rayhaan', /Rayhaan|Rayhan Pacific Aloha/i],
    ['Riffs', /Momento de Riffs/i],
    ['Tom Ford', /Tobacco Vanille/i],
    ['Valentino', /Valentino /i],
    ['Versace', /Versace /i],
    ['Xerjoff', /Erba Pura/i],
    ['Yves Saint Laurent', /MYSLF|Y Le Parfum|Y EDP Yves Saint Laurent|Black Opium|Mon Paris/i]
  ];

  function brandOf(name) {
    const rule = brandRules.find(([, regex]) => regex.test(name));
    if (rule) return rule[0];
    return name.split(/\s+/)[0];
  }

  function modelName(product) {
    return product.name;
  }

  function ensureBrandStyles() {
    if (document.getElementById('brand-group-styles')) return;
    const style = document.createElement('style');
    style.id = 'brand-group-styles';
    style.textContent = `
      #productGrid.brand-grouped { display:block; }
      .brand-section { margin: 0 0 34px; }
      .brand-heading { display:flex; align-items:center; gap:12px; margin: 4px 0 16px; }
      .brand-heading h2 { margin:0; font-size:clamp(1.15rem, 2.4vw, 1.55rem); letter-spacing:.08em; text-transform:uppercase; }
      .brand-heading::after { content:''; height:1px; flex:1; background:linear-gradient(90deg, rgba(212,175,55,.65), rgba(255,255,255,.08)); }
      .brand-count { opacity:.62; font-size:.82rem; white-space:nowrap; }
      .brand-products { display:grid; grid-template-columns:repeat(auto-fit,minmax(210px,1fr)); gap:18px; }
      @media (max-width:600px) {
        .brand-section { margin-bottom:28px; }
        .brand-products { grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; }
        .brand-heading { margin-bottom:12px; }
        .brand-count { font-size:.74rem; }
      }
    `;
    document.head.appendChild(style);
  }

  render = function () {
    ensureBrandStyles();
    const q = $('#search').value.toLowerCase().trim();
    const list = products
      .filter(p => (filter === 'all' || p.type === filter || p.gender === filter) && p.name.toLowerCase().includes(q))
      .sort((a, b) => {
        const byBrand = brandOf(a.name).localeCompare(brandOf(b.name), 'es', { sensitivity: 'base' });
        if (byBrand !== 0) return byBrand;
        return modelName(a).localeCompare(modelName(b), 'es', { sensitivity: 'base', numeric: true });
      });

    const groups = list.reduce((acc, product) => {
      const brand = brandOf(product.name);
      (acc[brand] ||= []).push(product);
      return acc;
    }, {});

    $('#productCount').textContent = `${list.length} fragancias mostradas · ${products.length} cargadas`;
    const grid = $('#productGrid');
    grid.classList.add('brand-grouped');
    grid.innerHTML = Object.entries(groups).map(([brand, items]) => `
      <section class="brand-section" data-brand="${brand}">
        <div class="brand-heading">
          <h2>${brand}</h2>
          <span class="brand-count">${items.length} ${items.length === 1 ? 'fragancia' : 'fragancias'}</span>
        </div>
        <div class="brand-products">
          ${items.map(p => `
            <article class="card">
              <div class="product-art">${art(p)}</div>
              <small>${p.type} · ${p.gender}</small>
              <h3>${p.name}</h3>
              <div class="price">desde ${money(p.prices[5])}</div>
              <button onclick="openProduct(${p.id})">Elegir medida</button>
            </article>`).join('')}
        </div>
      </section>`).join('');
  };

  render();
})();
