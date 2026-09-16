(() => {
  const p = products.find(x => x.name === 'Mandarinsky Elixir');
  if (p) p.name = 'Odyssey Mandarinsky Elixir';
})();
