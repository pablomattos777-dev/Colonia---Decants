(() => {
  const p = products.find(x => ['yeah man parfum','yeah! parfum','yeah parfum'].includes(x.name.toLowerCase()));
  if (p) {
    p.image = 'images/yeah-man-parfum.webp';
    render();
  }
})();
