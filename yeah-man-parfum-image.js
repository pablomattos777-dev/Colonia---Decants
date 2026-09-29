(() => {
  const p = products.find(x => x.name === 'Yeah! Man Parfum');
  if (p) { p.image = 'images/yeah-man-parfum.jpg'; render(); }
})();
