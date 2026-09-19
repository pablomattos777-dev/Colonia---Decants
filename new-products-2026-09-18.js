(() => {
  const nuevos = [
    { name: "Terre d'Hermès EDT", type: "Diseñador", gender: "Hombre" },
    { name: "Invictus Elixir Rabanne", type: "Diseñador", gender: "Hombre" }
  ];
  nuevos.forEach(item => {
    if (!products.some(p => p.name === item.name)) {
      const nextId = products.reduce((max,p)=>Math.max(max,p.id),0)+1;
      products.push({ id:nextId, name:item.name, type:item.type, gender:item.gender, prices:priceSets[item.type], image:null });
    }
  });
  render();
})();