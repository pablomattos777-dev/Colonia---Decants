(()=>{
  const links={
    instagram:'https://www.instagram.com/colonia.decants/',
    tiktok:'https://www.tiktok.com/@colonia.decants',
    whatsapp:'https://wa.me/59898993292'
  };

  const style=document.createElement('style');
  style.textContent=`
    .social-links{display:flex;align-items:center;gap:8px}
    .social-link{width:36px;height:36px;border:1px solid #34413e;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;color:#f5efe8;text-decoration:none;background:rgba(13,18,17,.72);transition:.2s ease;flex:0 0 auto}
    .social-link:hover{transform:translateY(-2px);border-color:#d99772;color:#efb28d;background:#151d1b}
    .social-link svg{width:17px;height:17px;fill:currentColor}
    header .social-links{margin-left:10px}
    footer .footer-social-wrap{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
    footer .footer-social-label{font-size:11px;letter-spacing:1.2px;color:#8e9b97;text-transform:uppercase}
    @media(max-width:820px){header .social-links{order:3;margin-left:0}.social-link{width:34px;height:34px}}
  `;
  document.head.appendChild(style);

  const icons={
    instagram:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm11.5 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>',
    tiktok:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2h3a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.7V16a6 6 0 1 1-6-6c.35 0 .69.03 1 .09v3.05A3 3 0 1 0 14 16V2Z"/></svg>',
    whatsapp:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"/></svg>'
  };

  const makeLinks=()=>{
    const box=document.createElement('div'); box.className='social-links';
    [['instagram','Instagram'],['tiktok','TikTok'],['whatsapp','WhatsApp']].forEach(([key,label])=>{
      const a=document.createElement('a'); a.className='social-link'; a.href=links[key]; a.target='_blank'; a.rel='noopener noreferrer'; a.setAttribute('aria-label',label); a.title=label; a.innerHTML=icons[key]; box.appendChild(a);
    });
    return box;
  };

  const header=document.querySelector('header');
  if(header){
    const wa=header.querySelector('.header-wa');
    const social=makeLinks();
    if(wa){wa.style.display='none'; wa.insertAdjacentElement('afterend',social);} else header.appendChild(social);
  }

  const footer=document.querySelector('footer');
  if(footer){
    const wrap=document.createElement('div'); wrap.className='footer-social-wrap';
    const label=document.createElement('span'); label.className='footer-social-label'; label.textContent='Seguinos y conocé nuestro trabajo';
    wrap.append(label,makeLinks()); footer.appendChild(wrap);
  }
})();
