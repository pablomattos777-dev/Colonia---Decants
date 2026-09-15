(() => {
  const p = products.find(x => x.name === 'Le Male Elixir Jean Paul Gaultier');
  if (p) p.image = 'images/le-male-elixir.jpg';
  render();
})();
