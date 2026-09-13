(() => {
  const retirar = new Set(['Hawas Ice', 'Odyssey Homme']);
  for (let i = products.length - 1; i >= 0; i--) {
    if (retirar.has(products[i].name)) products.splice(i, 1);
  }
  render();
})();
