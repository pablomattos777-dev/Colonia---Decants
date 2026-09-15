(() => {
  const nuevos = [
    { name: 'Odyssey Homme White Edition', type: 'Árabe', gender: 'Hombre', image: 'images/odyssey-homme-white-edition.jpg' },
    { name: 'Club de Nuit Maleka', type: 'Árabe', gender: 'Mujer', image: 'images/club-de-nuit-maleka.jpg' },
    { name: 'Nitro Red Dumont', type: 'Árabe', gender: 'Hombre', image: 'images/nitro-red-dumont.jpg' },
    { name: 'Salvo Eau de Parfum', type: 'Árabe', gender: 'Hombre', image: 'images/salvo-eau-de-parfum.jpg' },
    { name: 'Salvo Elixir', type: 'Árabe', gender: 'Hombre', image: 'images/salvo-elixir.jpg' },
    { name: 'Rome Extradose', type: 'Árabe', gender: 'Hombre', image: 'images/rome-extradose.jpg' },
    { name: 'Odyssey Aqua', type: 'Árabe', gender: 'Hombre', image: null },
    { name: 'Yeah! Man Parfum', type: 'Árabe', gender: 'Hombre', image: null },
    { name: 'Le Male Elixir Jean Paul Gaultier', type: 'Diseñador', gender: 'Hombre', image: null }
  ];

  nuevos.forEach(item => {
    if (!products.some(p => p.name === item.name)) {
      const nextId = products.reduce((max, p) => Math.max(max, p.id), 0) + 1;
      products.push({
        id: nextId,
        name: item.name,
        type: item.type,
        gender: item.gender,
        prices: priceSets[item.type],
        image: item.image
      });
    }
  });

  render();
})();
