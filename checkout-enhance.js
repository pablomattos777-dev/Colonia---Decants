(()=>{
  const checkout=document.querySelector('#checkout');
  const drawerFoot=document.querySelector('.drawer-foot');
  if(!checkout||!drawerFoot)return;

  const style=document.createElement('style');
  style.textContent=`
    .customer-data{margin:18px 0 14px;padding-top:16px;border-top:1px solid #2b3734}
    .customer-data h3{margin:0 0 12px;color:#f5efe8;font-size:16px;font-weight:600}
    .customer-data .field{margin-bottom:10px}
    .customer-data label{display:block;margin-bottom:5px;color:#aab5b1;font-size:11px;letter-spacing:.5px;text-transform:uppercase}
    .customer-data input,.customer-data select,.customer-data textarea{width:100%;box-sizing:border-box;background:#0d1211;color:#f5efe8;border:1px solid #34413e;border-radius:11px;padding:11px 12px;font:inherit;outline:none}
    .customer-data input:focus,.customer-data select:focus,.customer-data textarea:focus{border-color:#d99772}
    .customer-data textarea{min-height:70px;resize:vertical}
    .customer-data .two{display:grid;grid-template-columns:1fr 1fr;gap:9px}
    .customer-data .required{color:#d99772}
    .customer-data .hint{display:block;color:#798580;font-size:11px;margin-top:4px;line-height:1.35}
    .customer-data .conditional{display:none}
    .customer-data .conditional.show{display:block}
    .customer-data .field-error{border-color:#cf6f6f!important}
    @media(max-width:520px){.customer-data .two{grid-template-columns:1fr}}
  `;
  document.head.appendChild(style);

  const form=document.createElement('div');
  form.className='customer-data';
  form.innerHTML=`
    <h3>Datos para tu pedido</h3>
    <div class="field">
      <label for="customerName">Nombre completo <span class="required">*</span></label>
      <input id="customerName" autocomplete="name" placeholder="Nombre y apellido">
    </div>
    <div class="two">
      <div class="field">
        <label for="customerPhone">Teléfono <span class="required">*</span></label>
        <input id="customerPhone" inputmode="tel" autocomplete="tel" placeholder="09X XXX XXX">
      </div>
      <div class="field">
        <label for="customerDocument">Documento <span class="required">*</span></label>
        <input id="customerDocument" inputmode="numeric" placeholder="Cédula / documento">
      </div>
    </div>
    <div class="field">
      <label for="deliveryType">Forma de entrega <span class="required">*</span></label>
      <select id="deliveryType">
        <option value="">Seleccionar...</option>
        <option value="Domicilio">Envío a domicilio</option>
        <option value="Agencia">Retiro en agencia</option>
        <option value="Coordinar">Coordinar entrega</option>
      </select>
    </div>
    <div class="two">
      <div class="field">
        <label for="customerCity">Localidad <span class="required">*</span></label>
        <input id="customerCity" autocomplete="address-level2" placeholder="Ej.: Colonia del Sacramento">
      </div>
      <div class="field">
        <label for="customerDepartment">Departamento <span class="required">*</span></label>
        <input id="customerDepartment" autocomplete="address-level1" placeholder="Ej.: Colonia">
      </div>
    </div>
    <div id="addressField" class="field conditional">
      <label for="customerAddress">Dirección de entrega <span class="required">*</span></label>
      <input id="customerAddress" autocomplete="street-address" placeholder="Calle, número y datos útiles">
    </div>
    <div id="agencyField" class="field conditional">
      <label for="customerAgency">Agencia de destino <span class="required">*</span></label>
      <input id="customerAgency" placeholder="Ej.: DAC, UES, Mirtrans...">
      <small class="hint">Indicá la agencia o sucursal donde querés retirar.</small>
    </div>
    <div class="field">
      <label for="customerNotes">Observaciones</label>
      <textarea id="customerNotes" placeholder="Opcional: horario, referencia u otra aclaración"></textarea>
    </div>
  `;
  drawerFoot.insertBefore(form, checkout);

  const get=id=>document.getElementById(id);
  const delivery=get('deliveryType');
  const addressField=get('addressField');
  const agencyField=get('agencyField');

  function updateConditional(){
    addressField.classList.toggle('show',delivery.value==='Domicilio');
    agencyField.classList.toggle('show',delivery.value==='Agencia');
    get('customerAddress').classList.remove('field-error');
    get('customerAgency').classList.remove('field-error');
  }
  delivery.addEventListener('change',updateConditional);

  function required(el,condition=true){
    if(!condition)return true;
    const ok=el.value.trim().length>0;
    el.classList.toggle('field-error',!ok);
    return ok;
  }

  checkout.onclick=()=>{
    if(typeof cart==='undefined'||!cart.length){alert('Agregá al menos un perfume al carrito.');return;}

    const name=get('customerName');
    const phone=get('customerPhone');
    const documentId=get('customerDocument');
    const city=get('customerCity');
    const department=get('customerDepartment');
    const address=get('customerAddress');
    const agency=get('customerAgency');

    const valid=[
      required(name),required(phone),required(documentId),required(delivery),
      required(city),required(department),
      required(address,delivery.value==='Domicilio'),
      required(agency,delivery.value==='Agencia')
    ].every(Boolean);

    if(!valid){
      alert('Completá los datos obligatorios para continuar.');
      const first=form.querySelector('.field-error');
      if(first)first.scrollIntoView({behavior:'smooth',block:'center'});
      return;
    }

    const lines=cart.map(x=>`• ${x.name} — ${x.size} ml — ${money(x.price)}`);
    const total=cart.reduce((a,x)=>a+x.price,0);
    const deliveryDetail=delivery.value==='Domicilio'
      ? `Dirección: ${address.value.trim()}`
      : delivery.value==='Agencia'
        ? `Agencia de destino: ${agency.value.trim()}`
        : 'Entrega: A coordinar';

    const notes=get('customerNotes').value.trim();
    const text=`Hola Colonia Decants 👋\nQuiero hacer este pedido:\n\n${lines.join('\n')}\n\n*Total: ${money(total)}*\n\n*Datos del cliente*\nNombre: ${name.value.trim()}\nTeléfono: ${phone.value.trim()}\nDocumento: ${documentId.value.trim()}\nForma de entrega: ${delivery.options[delivery.selectedIndex].text}\nLocalidad: ${city.value.trim()}\nDepartamento: ${department.value.trim()}\n${deliveryDetail}${notes?`\nObservaciones: ${notes}`:''}`;

    window.open(`https://wa.me/59898993292?text=${encodeURIComponent(text)}`,'_blank','noopener');
  };
})();
