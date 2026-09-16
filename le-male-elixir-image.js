(() => {
  const p = products.find(x => x.name === 'Le Male Elixir Jean Paul Gaultier');
  if (p) p.image = 'data:image/webp;base64,UklGRpgBAABXRUJQVlA4WAoAAAAQAAAACwAACwAAQUxQSAwAAAAQUFBRUVFRUVFRUVFRVlA4IGABAABwAQCdASoMAAwAPm0wk0akIyIhKAgAgA2JaQAA3pFqv3L7b/2z8sT/7w8A';
  render();
})();