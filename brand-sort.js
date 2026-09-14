(() => {
  const brandRules = [
    ['Armani', /Acqua di Gi[oò]|Stronger With You|Sì Intense|My Way/i],
    ['Afnan', /9 PM Afnan/i],
    ['Al Haramain', /Al Haramain|Amber Oud/i],
    ['Armaf', /Club de Nuit|Club de la Nuit|Odyssey|Tag Her|Yum Yum|Dubai Night/i],
    ['Azzaro', /Azzaro/i],
    ['Bvlgari', /Bvlgari/i],
    ['Calvin Klein', /CK Be/i],
    ['Carolina Herrera', /212 |Good Girl|Bad Boy/i],
    ['Chanel', /Bleu de Chanel/i],
    ['Coach', /Coach/i],
    ['Dior', /Fahrenheit/i],
    ['DKNY', /DKNY/i],
    ['Dolce & Gabbana', /Dolce & Gabbana/i],
    ['Dumont', /Nitro Red Dumont/i],
    ['French Avenue', /Liquid Brun/i],
    ['Givenchy', /L[’']Imperatrice/i],
    ['Gucci', /Gucci/i],
    ['Guess', /Guess/i],
    ['Hermès', /24 Faubourg/i],
    ['Jean Paul Gaultier', /Le Beau|Le Male/i],
    ['Kenzo', /Kenzo/i],
    ['Lancôme', /Idôle|La Vie Est Belle|Trésor|Miracle/i],
    ['Lattafa', /Lattafa|Asad |Khamrah|Nebras|Yara |Badee Al Oud|Fakhar Rose/i],
    ['Maison Alhambra', /Glacier Bold|Lovely Chérie/i],
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

  render = function () {
    const q = $('#search').value.toLowerCase().trim();
    const list = products
      .filter(p => (filter === 'all' || p.type === filter || p.gender === filter) && p.name.toLowerCase().includes(q))
      .sort((a, b) => {
        const byBrand = brandOf(a.name).localeCompare(brandOf(b.name), 'es', { sensitivity: 'base' });
        if (byBrand !== 0) return byBrand;
        return modelName(a).localeCompare(modelName(b), 'es', { sensitivity: 'base', numeric: true });
      });

    $('#productCount').textContent = `${products.length} fragancias cargadas`;
    $('#productGrid').innerHTML = list.map(p => `
      <article class="card">
        <div class="product-art">${art(p)}</div>
        <small>${brandOf(p.name)} · ${p.type} · ${p.gender}</small>
        <h3>${p.name}</h3>
        <div class="price">desde ${money(p.prices[5])}</div>
        <button onclick="openProduct(${p.id})">Elegir medida</button>
      </article>`).join('');
  };

  render();
})();
