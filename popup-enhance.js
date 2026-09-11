(() => {
  const descriptions = {
    'Versace Eros Flame':'Cítrica, especiada y amaderada, con un perfil cálido, intenso y muy seductor.',
    'Invictus Parfum':'Aromática y amaderada, fresca al inicio y más profunda y elegante en el secado.',
    'Invictus Victory EDP':'Dulce, ambarada y especiada, con mucha presencia y un carácter nocturno.',
    'Stronger With You Intensely':'Dulce y cálida, con vainilla, especias y un fondo ambarado envolvente.',
    'Bad Boy Cobalt':'Aromática y amaderada con un toque frutal moderno, fresco y magnético.',
    'Acqua di Giò Profondo':'Marina y aromática, muy fresca, limpia y elegante para uso diario.',
    'Le Beau Narcisse JPG':'Sensual y moderna, con un perfil dulce, aromático y amaderado.',
    'MYSLF L’Absolu':'Aromática y elegante, con frescura luminosa y un fondo cálido y sofisticado.',
    'Dolce & Gabbana The One EDP':'Cálida, especiada y ambarada; elegante, seductora y perfecta para la noche.',
    'Bleu de Chanel EDP':'Cítrica, aromática y amaderada, versátil, limpia y muy elegante.',
    'Polo 67':'Fresca, aromática y deportiva, con un toque frutal y amaderado moderno.',
    'One Million Royal':'Dulce, especiada y amaderada, intensa y llamativa con un aire elegante.',
    'Valentino Uomo Coral Fantasy':'Frutal, especiada y amaderada, moderna, dulce y muy atractiva.',
    'Fahrenheit':'Aromática, cuero y maderas, con un carácter clásico, potente e inconfundible.',
    'Invictus EDT':'Fresca, acuática y amaderada, deportiva y muy fácil de llevar.',
    'Acqua di Giò EDT':'Fresca, cítrica y marina, limpia y clásica para todos los días.',
    'Acqua di Giò Elixir':'Marina y amaderada con más profundidad, intensidad y elegancia.',
    'Ralph’s Club Parfum':'Aromática y amaderada, elegante, limpia y con un fondo cálido.',
    'BOSS Bottled':'Aromática, frutal y especiada, clásica, versátil y muy agradable.',
    'Y Le Parfum':'Aromática y amaderada, intensa, limpia y elegante con un fondo oscuro.',
    'Bvlgari Man Wood Essence':'Cítrica y amaderada, verde, elegante y con sensación natural.',
    'Armani Code Parfum':'Aromática, limpia y amaderada, refinada y sensual sin ser pesada.',
    'Nautica Voyage':'Acuática, verde y fresca, ideal para calor y uso diario.',
    '212 VIP Black Elixir Cab':'Dulce, especiada y nocturna, con un perfil intenso y seductor.',
    'Le Male Le Parfum':'Dulce, especiada y ambarada, elegante y cremosa con mucha presencia.',
    'Black Opium':'Dulce y gourmand, con café, vainilla y flores blancas; sensual y nocturna.',
    'Acqua di Gioia':'Fresca, acuática y cítrica, luminosa, limpia y natural.',
    'La Vie Est Belle Soleil Cristal':'Dulce, floral y luminosa, con un toque cremoso y tropical.',
    '212 EDT Carolina Herrera':'Floral, fresca y limpia, con un estilo urbano y elegante.',
    'Good Girl':'Dulce, floral y ambarada, sensual, intensa y sofisticada.',
    'Idôle Aura':'Floral, luminosa y ligeramente salada, femenina y envolvente.',
    'L’Imperatrice':'Frutal, acuática y fresca, jugosa, alegre y muy fácil de usar.',
    'Versace Versense':'Cítrica, verde y amaderada, fresca y elegante para días cálidos.',
    'Valentino Donna Green Stravaganza':'Floral, verde y cremosa, moderna y elegante con un aire luminoso.',
    '212 VIP Rosé Elixir':'Floral, frutal y dulce, femenina, brillante y seductora.',
    'Sì Intense':'Frutal, floral y ambarada, intensa, elegante y sofisticada.',
    'Trésor Midnight Rose':'Frutal y floral con un dulzor romántico, juvenil y seductor.',
    'Olympea Solar':'Floral, cítrica y solar, luminosa, cálida y con sensación de verano.',
    'Narciso Rodríguez Pure Musc Blanc':'Almizclada, floral y limpia, minimalista, suave y elegante.',
    'My Way Parfum':'Floral blanco, dulce y sofisticado, con una estela femenina y cremosa.',
    'Good Girl Blush Elixir':'Floral, dulce y ambarada, más intensa y sensual que la versión Blush.',
    'Miracle Lancôme':'Floral, frutal y especiada, luminosa, fresca y elegante.',
    'Rayhaan Elixir':'Dulce, aromática y ambarada, intensa y moderna con gran presencia.',
    'Odyssey Homme':'Ambarada, especiada y cálida, elegante y envolvente para la noche.',
    'Glacier Bold':'Dulce, aromática y tropical, intensa y seductora.',
    'Safari Breeze':'Fresca, aromática y frutal, con un perfil liviano y moderno.',
    '9 PM Afnan':'Dulce, frutal y especiada, potente y juvenil para salidas nocturnas.',
    'Dubai Night Midnight':'Dulce, especiada y ambarada, oscura, intensa y muy nocturna.',
    'Hawas Malibú':'Fresca, tropical y frutal, vibrante y perfecta para clima cálido.',
    'Atlas Lattafa':'Marina, salina y potente, con un perfil fresco y de gran duración.',
    'Hawas Fire':'Aromática y especiada con un fondo cálido, intensa y moderna.',
    'Club de Nuit Milestone':'Marina, frutal y amaderada, fresca, elegante y con toque salino.',
    'Rayhaan Azul':'Fresca, aromática y cítrica, limpia y versátil para uso diario.',
    'Hawas Verde':'Verde, fresca y aromática, con un carácter energético y moderno.',
    'Club de Nuit Intense Man':'Cítrica, ahumada y amaderada, potente, masculina y muy versátil.',
    'Hawas Ice':'Fresca, dulce y acuática, juvenil y muy agradable para el calor.',
    'Asad Elixir Lattafa':'Especiada, ambarada y cálida, intensa y elegante con gran presencia.',
    'Odyssey Mega':'Aromática, fresca y amaderada, moderna y versátil para todo momento.',
    'Mandarinsky Elixir':'Cítrica, dulce y especiada, vibrante y envolvente con salida frutal.',
    'Momento de Riffs':'Dulce, ambarada y especiada, cálida y atractiva para clima fresco.',
    'Khamrah Qahwa':'Gourmand, especiada y dulce, con café y un fondo cálido y adictivo.',
    'Rayhan Pacific Aloha':'Tropical, fresca y frutal, alegre y muy veraniega.',
    'Haya Lattafa':'Floral, frutal y dulce, femenina, chispeante y delicada.',
    'Delilah Blanc':'Floral, cremosa y elegante, suave y femenina con un aire sofisticado.',
    'Badee Al Oud Blush':'Dulce, floral y cremosa, envolvente y romántica.',
    'Quimmah Woman':'Dulce, floral y cálida, femenina y sensual con un perfil envolvente.',
    'Eclaire Lattafa':'Gourmand, cremosa y muy dulce, con sensación de caramelo y vainilla.',
    'Victoria Lattafa':'Dulce, frutal y floral, femenina, moderna y llamativa.',
    'Eclaire Pistache':'Gourmand y cremosa, con un perfil dulce de pistacho y postre.',
    'Yara Elixir':'Dulce, frutal y cremosa, intensa y femenina con aire gourmand.',
    'Yara Rosa':'Dulce, frutal y cremosa, suave, femenina y muy fácil de llevar.',
    'Yum Yum Armaf':'Frutal, dulce y gourmand, divertida, jugosa y juvenil.',
    'Hawas Diva':'Frutal, floral y dulce, luminosa y femenina con un fondo suave y envolvente.',
    'Angham Second Song':'Dulce, floral y cremosa, elegante y envolvente con carácter moderno.',
    'Odyssey Candee':'Gourmand, frutal y dulce, cremosa y divertida con mucha personalidad.',
    'Odyssey Mandarin Sky':'Cítrica, dulce y ambarada, vibrante y moderna con un fondo cálido.',
    'Lovely Chérie':'Dulce, frutal y licorosa, con un perfil intenso y gourmand.',
    'Al Haramain Conception':'Aromática, amaderada y refinada, con un perfil elegante y moderno.',
    'Honor & Glory':'Dulce, especiada y gourmand, cremosa y exótica con gran presencia.',
    'Khamrah':'Dulce, especiada y gourmand, cálida, intensa y muy envolvente.',
    'Liquid Brun':'Dulce, especiada y amaderada, cremosa, elegante y de gran duración.',
    'Nebras':'Gourmand, dulce y avainillada, cremosa y envolvente con toque de cacao.',
    'Musamam White Intense':'Cremosa, especiada y amaderada, exótica y sofisticada.',
    'Amber Oud Gold Edition':'Frutal, dulce y ambarada, intensa, elegante y de gran proyección.',
    'Vulcan Feu':'Frutal, tropical y amaderada, intensa y exótica con un perfil moderno.',
    'Club de Nuit Untold':'Dulce, ambarada y aireada, elegante y luminosa con gran estela.',
    'Erba Pura Xerjoff':'Frutal, dulce y almizclada, intensa, lujosa y de gran duración.',
    'Tobacco Vanille Tom Ford':'Tabaco dulce, vainilla y especias; cálida, opulenta y muy envolvente.',
    'Arabians Tonka Montale':'Dulce, ambarada y especiada, potente, intensa y de enorme duración.',
    'Glich':'Moderna y versátil, con un perfil atractivo pensado para destacar.',
    'Conquer':'Intensa y elegante, con carácter moderno y una estela envolvente.',
    'Acqua di Giò Profumo':'Marina, aromática e incienso, elegante, profunda y muy masculina.',
    'Le Beau Paradise Garden':'Tropical, verde y dulce, sensual y exótica con un aire de verano.',
    'Y EDP Yves Saint Laurent':'Aromática, fresca y amaderada, limpia, moderna y muy versátil.',
    '212 Sexy Man':'Especiada, dulce y ambarada, cálida y seductora para la noche.',
    'Tag Her':'Dulce, floral y frutal, femenina y envolvente con un perfil moderno.',
    'Fakhar Rose':'Floral blanco, dulce y elegante, femenino y luminoso.',
    'Guess Bella Vita':'Frutal, floral y gourmand, dulce, femenina y seductora.',
    '24 Faubourg':'Floral blanco y ambarado, clásico, elegante y sofisticado.',
    'Coach Dreams Sunset':'Frutal, floral y cálida, juvenil, dulce y luminosa.',
    'Mon Paris':'Frutal, floral y dulce, romántica, intensa y muy femenina.',
    'CK Be':'Almizclada, fresca y suave, limpia, casual y totalmente unisex.',
    'Gucci Guilty Essence':'Aromática y amaderada, limpia, elegante y de estilo contemporáneo.',
    'Azzaro The Most Wanted EDT Intense':'Dulce, especiada y amaderada, intensa, seductora y nocturna.',
    'Versace Eros EDT':'Fresca, dulce y aromática, energética, juvenil y muy llamativa.',
    'La Vie Est Belle Elixir':'Dulce, floral y gourmand, intensa, elegante y muy envolvente.',
    'Kenzo Flower':'Floral empolvada y suave, elegante, femenina y atemporal.',
    'DKNY Be Delicious EDP':'Frutal verde y fresca, jugosa, alegre y perfecta para diario.',
    'Asad Bourbon':'Dulce, especiada y ambarada, cálida, intensa y con aire sofisticado.'
  };

  function fallbackDescription(p){
    const byType={
      'Diseñador':'Una fragancia de diseñador versátil y cuidada, ideal para sumar personalidad sin perder elegancia.',
      'Árabe':'Una fragancia árabe intensa y envolvente, con buena presencia y un perfil moderno.',
      'Nicho':'Una fragancia de nicho con gran personalidad, riqueza aromática y una estela distintiva.',
      'Mykonos':'Una fragancia moderna y atractiva, pensada para destacar con un perfil versátil.'
    };
    return byType[p.type] || 'Una fragancia con personalidad propia, ideal para descubrirla en formato decant.';
  }

  const style=document.createElement('style');
  style.textContent=`
    #modal .modal-card{max-height:88vh;overflow:auto}
    #modal .modal-product{display:grid;grid-template-columns:112px 1fr;gap:16px;align-items:center;margin:4px 0 16px}
    #modal .modal-photo{width:112px;height:112px;border-radius:16px;overflow:hidden;background:#0d1211;border:1px solid #2b3734;display:flex;align-items:center;justify-content:center}
    #modal .modal-photo img{width:100%;height:100%;object-fit:contain;display:block}
    #modal .modal-description{margin:0;color:#b9c2bf;font-size:13px;line-height:1.55}
    #modal #modalName{margin-bottom:6px!important}
    #modal .sizes{margin-top:4px}
    @media(max-width:520px){#modal .modal-product{grid-template-columns:86px 1fr;gap:12px}#modal .modal-photo{width:86px;height:86px}#modal .modal-description{font-size:12px}}
  `;
  document.head.appendChild(style);

  const modalCard=document.querySelector('#modal .modal-card');
  const meta=document.getElementById('modalMeta');
  const name=document.getElementById('modalName');
  if(!modalCard||!meta||!name) return;

  const productInfo=document.createElement('div');
  productInfo.className='modal-product';
  productInfo.innerHTML='<div class="modal-photo" id="modalPhoto"></div><p class="modal-description" id="modalDescription"></p>';
  name.insertAdjacentElement('afterend',productInfo);

  const originalOpen=window.openProduct;
  window.openProduct=id=>{
    originalOpen(id);
    const p=products.find(x=>x.id===id);
    if(!p) return;
    const photo=document.getElementById('modalPhoto');
    photo.innerHTML=p.image?`<img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'">`:'<span style="color:#8e9b97;font-size:11px">Sin foto</span>';
    document.getElementById('modalDescription').textContent=descriptions[p.name]||fallbackDescription(p);
  };
})();
