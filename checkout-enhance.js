(()=>{
  const checkout=document.querySelector('#checkout');
  const drawerFoot=document.querySelector('.drawer-foot');
  const cartItems=document.querySelector('#cartItems');
  const totalEl=document.querySelector('#total');
  if(!checkout||!drawerFoot)return;

  const style=document.createElement('style');
  style.textContent=`
    .drawer{overflow-y:auto;padding-bottom:120px!important}
    .drawer-foot{display:block!important;padding-bottom:36px!important}
    #cartItems{display:block!important;max-height:210px!important;overflow-y:auto!important;margin-bottom:8px!important;flex:none!important;min-height:0!important}
    #cartItems .cart-row{display:block!important;padding:9px 0!important;border-bottom:1px solid #25302e!important;line-height:1.25!important}
    #cartItems .cart-row b{font-size:14px!important;font-weight:600!important}
    #cartItems .cart-row small{font-size:11px!important;color:#a8adaa!important}
    #cartItems .cart-row button{float:right!important;margin-top:-18px!important}
    .drawer-foot>.customer-data{display:block!important;margin:10px 0 10px!important;padding-top:10px!important;border-top:1px solid #2b3734!important;width:100%!important}
    .customer-data h3{margin:0 0 10px!important;color:#f5efe8;font-size:16px;font-weight:700;line-height:1.2}
    .customer-data .field{display:block!important;width:100%!important;margin:0 0 8px!important;min-width:0!important}
    .customer-data .two{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important;gap:8px!important;width:100%!important;margin:0!important}
    .customer-data label{display:block!important;margin:0 0 4px!important;color:#b8c1be;font-size:10px;line-height:1.2;letter-spacing:.35px;text-transform:uppercase}
    .customer-data input,.customer-data select,.customer-data textarea{display:block!important;width:100%!important;min-width:0!important;box-sizing:border-box;background:#0d1211;color:#f5efe8;border:1px solid #34413e;border-radius:9px;padding:7px 10px!important;font:inherit;font-size:14px;line-height:1.2;outline:none}
    .customer-data input,.customer-data select{height:36px!important}
    .customer-data input::placeholder,.customer-data textarea::placeholder{color:#68736f;opacity:1}
    .customer-data input:focus,.customer-data select:focus,.customer-data textarea:focus{border-color:#d99772;box-shadow:0 0 0 1px rgba(217,151,114,.12)}
    .customer-data textarea{min-height:52px!important;height:52px;resize:vertical}
    .customer-data .required{color:#d99772}
    .customer-data .hint{display:block;color:#798580;font-size:10px;margin-top:3px;line-height:1.25}
    .customer-data .conditional{display:none!important}
    .customer-data .conditional.show{display:block!important}
    .customer-data .field-error{border-color:#cf6f6f!important}
    #checkout{display:flex!important;position:sticky!important;bottom:28px!important;z-index:30!important;width:100%!important;min-height:48px!important;margin:10px 0 0!important;align-items:center!important;justify-content:center!important;box-shadow:0 -8px 24px rgba(10,13,13,.72),0 8px 24px rgba(0,0,0,.25)!important}
    @media(max-width:620px){
      .drawer{width:min(100%,430px);padding-bottom:135px!important;overscroll-behavior:contain!important}
      .drawer-foot{padding-bottom:52px!important}
      .customer-data .two{grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important}
      .customer-data input,.customer-data select,.customer-data textarea{font-size:14px!important}
      #cartItems{max-height:180px!important}
      #checkout{bottom:max(32px,calc(env(safe-area-inset-bottom) + 18px))!important}
    }
    @media(max-width:390px){.customer-data .two{grid-template-columns:1fr!important}}
  `;
  document.head.appendChild(style);

  if(cartItems&&drawerFoot.parentElement){const drawer=drawerFoot.parentElement;if(cartItems.parentElement!==drawer)drawer.insertBefore(cartItems,drawerFoot)}
  if(totalEl)totalEl.style.display='';

  const form=document.createElement('div');
  form.className='customer-data';
  form.innerHTML=`
    <h3>Datos para tu pedido</h3>
    <div class="field"><label for="customerName">Nombre completo <span class="required">*</span></label><input id="customerName" autocomplete="name" placeholder="Nombre y apellido"></div>
    <div class="two"><div class="field"><label for="customerPhone">Teléfono <span class="required">*</span></label><input id="customerPhone" inputmode="tel" autocomplete="tel" placeholder="09X XXX XXX"></div><div class="field"><label for="customerDocument">Documento <span class="required">*</span></label><input id="customerDocument" inputmode="numeric" placeholder="Cédula / documento"></div></div>
    <div class="field"><label for="deliveryType">Forma de entrega <span class="required">*</span></label><select id="deliveryType"><option value="">Seleccionar...</option><option value="Domicilio">Envío a domicilio</option><option value="Agencia">Retiro en agencia</option><option value="Coordinar">Coordinar entrega</option></select></div>
    <div class="two"><div class="field"><label for="customerCity">Localidad <span class="required">*</span></label><input id="customerCity" autocomplete="address-level2" placeholder="Localidad"></div><div class="field"><label for="customerDepartment">Departamento <span class="required">*</span></label><input id="customerDepartment" autocomplete="address-level1" placeholder="Departamento"></div></div>
    <div id="addressField" class="field conditional"><label for="customerAddress">Dirección de entrega <span class="required">*</span></label><input id="customerAddress" autocomplete="street-address" placeholder="Calle, número y datos útiles"></div>
    <div id="agencyField" class="field conditional"><label for="customerAgency">Agencia de destino <span class="required">*</span></label><input id="customerAgency" placeholder="Ej.: DAC, UES, Mirtrans..."><small class="hint">Indicá la agencia o sucursal donde querés retirar.</small></div>
    <div class="field"><label for="customerNotes">Observaciones</label><textarea id="customerNotes" placeholder="Opcional: horario, referencia u otra aclaración"></textarea></div>`;
  drawerFoot.insertBefore(form,checkout);

  const get=id=>document.getElementById(id),delivery=get('deliveryType'),addressField=get('addressField'),agencyField=get('agencyField');
  function updateConditional(){addressField.classList.toggle('show',delivery.value==='Domicilio');agencyField.classList.toggle('show',delivery.value==='Agencia');get('customerAddress').classList.remove('field-error');get('customerAgency').classList.remove('field-error')}
  delivery.addEventListener('change',updateConditional);
  function required(el,condition=true){if(!condition)return true;const ok=el.value.trim().length>0;el.classList.toggle('field-error',!ok);return ok}
  checkout.onclick=()=>{
    if(typeof cart==='undefined'||!cart.length){alert('Agregá al menos un perfume al carrito.');return}
    const name=get('customerName'),phone=get('customerPhone'),documentId=get('customerDocument'),city=get('customerCity'),department=get('customerDepartment'),address=get('customerAddress'),agency=get('customerAgency');
    const valid=[required(name),required(phone),required(documentId),required(delivery),required(city),required(department),required(address,delivery.value==='Domicilio'),required(agency,delivery.value==='Agencia')].every(Boolean);
    if(!valid){alert('Completá los datos obligatorios para continuar.');const first=form.querySelector('.field-error');if(first)first.scrollIntoView({behavior:'smooth',block:'center'});return}
    const lines=cart.map(x=>`• ${x.name} — ${x.size} ml — ${money(x.price)}`),total=cart.reduce((a,x)=>a+x.price,0);
    const deliveryDetail=delivery.value==='Domicilio'?`Dirección: ${address.value.trim()}`:delivery.value==='Agencia'?`Agencia de destino: ${agency.value.trim()}`:'Entrega: A coordinar';
    const notes=get('customerNotes').value.trim();
    const text=`Hola Colonia Decants 👋\nQuiero hacer este pedido:\n\n${lines.join('\n')}\n\n*Total: ${money(total)}*\n\n*Datos del cliente*\nNombre: ${name.value.trim()}\nTeléfono: ${phone.value.trim()}\nDocumento: ${documentId.value.trim()}\nForma de entrega: ${delivery.options[delivery.selectedIndex].text}\nLocalidad: ${city.value.trim()}\nDepartamento: ${department.value.trim()}\n${deliveryDetail}${notes?`\nObservaciones: ${notes}`:''}`;
    window.open(`https://wa.me/59898993292?text=${encodeURIComponent(text)}`,'_blank','noopener');
  };
})();