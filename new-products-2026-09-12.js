(() => {
  const nuevos = [
    { name: 'Odyssey Homme White Edition', type: 'Árabe', gender: 'Hombre', image: 'images/odyssey-homme-white-edition.jpg' },
    { name: 'Club de Nuit Maleka', type: 'Árabe', gender: 'Mujer', image: 'images/club-de-nuit-maleka.jpg' },
    { name: 'Nitro Red Dumont', type: 'Árabe', gender: 'Hombre', image: 'images/nitro-red-dumont.jpg' }
  ];

  nuevos.forEach(item => {
    if (!products.some(p => p.name === item.name)) {
      const nextId = products.reduce((max, p) => Math.max(max, p.id), 0) + 1;
      products.push({
        id: nextId,
        name: item.name,
        type: item.type,
        gender: item.gender,
        prices: priceSets['Árabe'],
        image: item.image
      });
    }
  });

  render();
})();
