(() => {
  const item = { name: 'My Way Ylang Giorgio Armani', type: 'Diseñador', gender: 'Mujer', image: null };
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
  render();
})();
