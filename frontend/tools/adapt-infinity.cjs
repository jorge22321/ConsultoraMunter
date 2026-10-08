/* Public reference -> native Vue templates. No Wix scripts run in the application. */
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const {parse}=require('@vue/compiler-dom');
const root=path.resolve(__dirname,'..');
const base='https://mendark07.wixstudio.com/public_template-132';
const attr=(n,k)=>n.props?.find(p=>p.name===k)?.value?.content;
const plain=n=>n.type===2?n.content:(n.children||[]).map(plain).join('');
const norm=s=>s.replace(/[\s\u200b]+/g,' ').trim();
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const company='Somos una empresa consultora que brinda soluciones personalizadas a tus necesidades. Contamos con profesionales en distintas ramas de la ingeniería, derecho, comercio y logística, administración, finanzas, contabilidad, marketing digital y diseño gráfico.';
const globalText={
 Home:'Inicio',About:'Nosotros',Services:'Servicios',Blog:'Especialidades',Contact:'Contacto',Menu:'Menú',Close:'Cerrar',Site:'Navegación',
 'About Us':'Nosotros','Contact Us':'Contáctanos','More About Us':'Conócenos','Explore Our Services':'Ver nuestros servicios','Skip to Main Content':'Saltar al contenido','top of page':'Inicio de la página','bottom of page':'Final de la página',
 Navigation:'Navegación','Useful Links':'Información','Contact Info':'Contacto','Privacy & Policy':'Privacidad','Terms & Conditions':'Accesibilidad',
 '123-456-7890':'986 994 914','info@infinitytrade.com':'WhatsApp: 986 994 914','500 Terry Francois St':'Of. Mz. C, Lt. 11, A. H. Paul Poblet, Manchay, Pachacámac.',
 '© 2035 by Infinity Trade Exports.':'© 2026 Consultora Munter & Asociados S.A.C.',
 'About Company':'Nuestra consultora','100%':'A tu lado','Satisfied Clients':'Atención personalizada',
 'TRUSTED IMPORT & EXPORT SOLUTIONS':'SOLUCIONES PARA CADA NECESIDAD',
 'Quality Products':'Especialistas','Premium goods sourced from trusted suppliers.':'Profesionales en distintas áreas para atender tu consulta.',
 'Reliable Trade':'Atención cercana','Smooth sourcing, documentation, and global shipping.':'Un servicio que parte de lo que necesitas.',
 'Trusted Partner in Global Trade':'Consultora Munter & Asociados',
 'RELIABLE GLOBAL IMPORT & EXPORT SOLUTIONS':'SOLUCIONES LEGALES, TÉCNICAS Y EMPRESARIALES',
 'From sourcing and quality inspection to logistics and shipping, we ensure smooth international trade with reliable processes, timely delivery, and complete documentation support.':'Te acompañamos en derecho, ingeniería y gestión de negocios. Reunimos distintas especialidades para brindarte soluciones personalizadas, con orientación clara y atención cercana.',
 Global:'Derecho','Trade Solutions':'Asesoría legal',Quality:'Ingeniería','Product Supply':'Tus proyectos',Logistics:'Gestión','Shipping Support':'Tu negocio',Trusted:'Comercio','Business Partners':'Logística y aduanas',
 'Our Strengths':'Nuestro compromiso','RELIABLE GLOBAL TRADE SOLUTIONS':'UN EQUIPO PARA ACOMPAÑARTE','Trusted Network':'Especialistas','Secure Packaging':'Atención cercana','Fast Delivery':'Comunicación clara',
 'Our Services':'Nuestros servicios','RELIABLE GLOBAL TRADE & EXPORT SOLUTIONS':'ASESORÍA PARA TI Y TU NEGOCIO',
 'Agricultural Products Export':'Asesoría legal','Spices & Food Commodities':'Arquitectura e ingeniería','Industrial Products Supply':'Contabilidad y finanzas',
 'We export fresh and processed agricultural products including bananas, onions, garlic, potatoes, and mushrooms to global markets.':'Derecho de familia y derecho tributario municipal. Orientación y acompañamiento según las necesidades de tu caso.',
 'Supplying premium Indian spices such as turmeric, red chilli powder, and other food commodities that meet international quality standards.':'Diseño de planos, modelado 3D, topografía, licencias y regularización de edificaciones para tu proyecto.',
 'Exporting PVC pipes, joints, polymers, and natural stones & minerals for various industrial and construction needs worldwide.':'Asesoría contable, administrativa y financiera para organizar la gestión de tu negocio.',
 'Our Expertise':'Nuestras especialidades','QUALITY PRODUCTS FOR GLOBAL MARKETS':'SOLUCIONES QUE SE COMPLEMENTAN',
 'Premium Indian Spices Supply':'Derecho tributario municipal','Fresh Fruits & Vegetables':'Arquitectura e ingeniería','Industrial PVC Pipes Export':'Contabilidad y finanzas','Natural Minerals & Stones':'Comercio exterior y logística','Food Commodities Trading':'Marketing digital y diseño',
 'Agricultural Products':'Derecho de familia','Premium Indian Spices':'Arquitectura e ingeniería','Quality Dry Fruits':'Contabilidad y finanzas','Industrial PVC Products':'Comercio exterior',
 'Our Process':'Cómo trabajamos','SIMPLE & EFFICIENT TRADE PROCESS':'EL PRIMER PASO ES ESCUCHARTE','Product Sourcing':'Te escuchamos','Finding quality products from trusted suppliers.':'Conocemos tu situación y lo que necesitas resolver.','Safe Delivery':'Te orientamos','Secure packaging and reliable global shipping.':'Coordinamos el servicio y los siguientes pasos.','25+':'Contigo','Trusted Suppliers':'En cada proyecto',
 Testimonials:'Nuestra atención','WHAT OUR CLIENTS SAY':'¿EN QUÉ PODEMOS AYUDARTE?','Ratings 4.9':'Conversemos','Clients praise our exceptional work.':'Cuéntanos qué necesitas resolver.',
 'Michael Johnson':'Derecho de familia','Miami, FL':'Orientación legal','Emily Carter':'Tu construcción','Dallas, TX':'Arquitectura e ingeniería','James Anderson':'Tu negocio','Chicago, IL':'Contabilidad y finanzas','Sophia Martinez':'Tus importaciones','Los Angeles, CA':'Comercio exterior y logística',
 'Our Blog':'Conoce más','LATEST NEWS & INSIGHTS':'ENCUENTRA EL SERVICIO QUE NECESITAS',
 'Our Company Overview':'Quiénes somos','YOUR TRUSTED GLOBAL TRADE PARTNER':'PROFESIONALES PARA TUS PROYECTOS',
 'Reliable Sourcing':'Asesoría legal','Trusted farmers and manufacturers network.':'Especialistas en familia y derecho tributario municipal.','Quality Assurance':'Ingeniería','Products meeting international standards.':'Arquitectura y soluciones técnicas para tus proyectos.','Efficient Logistics':'Gestión empresarial','Smooth packaging and global shipping.':'Contabilidad, finanzas, comercio y logística.',
 'Our Achievements':'Nuestro enfoque','GROWING THROUGH GLOBAL TRADE':'DISTINTAS ÁREAS, UN MISMO COMPROMISO',
 '10+':'Legal','Countries Served':'Familia y tributos','50+':'Obras','Products Exported':'Arquitectura e ingeniería','100+':'Gestión','Our Team':'Nuestro equipo','MEET OUR PROFESSIONAL TEAM':'ESPECIALISTAS EN DISTINTAS ÁREAS',
 'James L.':'Asesoría legal','Export Manager':'Derecho de familia','Emily K.':'Derecho tributario','Sales Manager':'Asesoría municipal','Jessica M.':'Arquitectura','Logistics Manager':'Diseño de planos','Michael R.':'Ingeniería','Quality Manager':'Proyectos de construcción','Daniel W.':'Gestión empresarial','Operations Lead':'Contabilidad y finanzas','Lauren P.':'Comercio y comunicación','Client Manager':'Logística, marketing y diseño',
 'SIMPLE STEPS FOR GLOBAL TRADE':'ASÍ COORDINAMOS TU ATENCIÓN','We source quality products from trusted suppliers.':'Cuéntanos tu situación y el servicio que necesitas.','Quality Inspection':'Identificamos el área','Products are checked to meet export standards.':'Orientamos tu consulta hacia la especialidad adecuada.','Goods are packed safely for transportation.':'Conversamos sobre el alcance del servicio y los siguientes pasos.','Global Shipping':'Coordinamos contigo','Products delivered to international markets.':'Te acompañamos durante la atención de tu consulta.',
 'Let’s Connect':'Conversemos','REACH OUT TO US':'ESTAMOS PARA AYUDARTE',Phone:'Celular',Mail:'WhatsApp',Address:'Ubicación',Support:'Referencia','24/7 Customer Assistance':'Curva de Manchay, a una cuadra de Mi Banco.',
 'SEND US A MESSAGE':'CUÉNTANOS QUÉ NECESITAS','Fill out the contact form with your details and inquiry, and our team will get back to you as soon as possible with the information you need.':'Completa tus datos y describe brevemente tu consulta. Puedes solicitar un servicio o pedir orientación para encontrar el área adecuada.',
 'PRIVACY POLICY':'PRIVACIDAD','1. Information We Collect':'1. Datos de tu consulta','2. How We Use Your Information':'2. Para qué se utilizan','3. Cookies & Tracking Technologies':'3. Almacenamiento y servicios externos','4. Data Protection & Security':'4. Consultas sobre tus datos',
};
const byId={
 'comp-mmlv5tpn':'5','comp-mmlv7rw4':'Áreas de servicio',
 'comp-mmn88d0n6':'Lima','comp-mmn88d0p4':'Manchay · Pachacámac',
 'comp-mmlvqasl':company+'\n\nTe atendemos en Manchay, Pachacámac. Nuestro punto de partida es escucharte y conectar tu necesidad con la especialidad adecuada.',
 'comp-mmn40lil1':'Nuestros servicios principales reúnen derecho, arquitectura e ingeniería, contabilidad y finanzas. También te acompañamos en comercio exterior, logística, marketing digital y diseño gráfico.',
 'comp-mmof787a2':'Cada consulta tiene necesidades diferentes. Por eso reunimos distintas especialidades para acompañar a personas, familias y negocios con soluciones a su medida.',
 'comp-mmof787l__item1':'Derecho de familia',
 'comp-mmn88d0y2':'Cuéntanos tu situación, tus objetivos y lo que necesitas resolver. Identificamos el área que corresponde a tu consulta y coordinamos la atención con el equipo.\n\nAntes de iniciar, conversamos contigo sobre el alcance del servicio, la información necesaria y los siguientes pasos.',
 'comp-mmn936ir2__item1':'Orientación en alimentos, tenencia, régimen de visitas, divorcio, unión de hecho y violencia familiar. Cada situación merece ser escuchada.',
 'comp-mmn936ir2__item-j9ples3e':'Te acompañamos con planos de arquitectura, estructuras e instalaciones, modelado 3D, topografía y trámites de licencias y regularización.',
 'comp-mmn936ir2__item-j9plerjk':'Servicios de administración, contabilidad y finanzas para organizar tu negocio. También contamos con marketing digital y diseño gráfico.',
 'comp-mmn936ir2__item-ml4yku4c':'Seguimiento de proveedores, gestión documentaria, fletes, trámites aduaneros y traslado de mercancías desde su llegada hasta su destino.',
 'comp-mmokxb18':company,
 'comp-mmovbw9b3':'Escuchamos tu situación, identificamos el servicio adecuado y coordinamos contigo los siguientes pasos. Nuestra consultora reúne profesionales para atender necesidades personales, técnicas y empresariales.',
 'comp-mmouziw03__item-mg0inkl3':'Comercio','comp-mmouziw5__item-j9plerjk':'Contabilidad y finanzas','comp-mmouziw5__item-mg0inkl3':'Logística y aduanas',
 'comp-mmsnyede':'Áreas de atención','comp-mmsnyedh1':'ESPECIALIDADES A TU DISPOSICIÓN',
 'comp-miimb1om3':'El formulario solicita nombres, apellidos, celular, correo opcional, área de interés y el motivo de tu consulta. Evita incluir documentos o información confidencial en este primer mensaje.',
 'comp-miimefp5':'Al enviar el formulario autorizas a Consultora Munter & Asociados S.A.C. a utilizar estos datos para atender tu solicitud y coordinar contigo el servicio que necesitas.',
 'comp-miimg204':'Las consultas se guardan en el servidor junto con su referencia, fecha y autorización. Este sitio no incorpora analítica publicitaria. Los enlaces a WhatsApp y Google Maps abren servicios externos con sus propias condiciones.',
 'comp-miimgt2u':'Para consultar, corregir o solicitar la eliminación de tus datos, comunícate al 986 994 914 e indica el código de referencia de tu consulta.',
};
const links={ [base]:'/',[base+'/about']:'/nosotros',[base+'/services']:'/servicios',[base+'/blog']:'/#especialidades',[base+'/contact']:'/contacto',[base+'/legal-pages/privacy-and-policy']:'/privacidad',[base+'/legal-pages/terms-and-conditions']:'/accesibilidad' };
const imagesOverride={'IMG_11.jpg':'/images/consultoria.jpg','IMG_10.jpg':'/images/equipo.jpg','IMG_12.jpg':'/images/finanzas.jpeg','IMG_13.jpg':'/infinity-assets/cab28935363f6e7abbd2.jpg'};
const assetMap=new Map();
function asset(raw){
 if(raw?.startsWith('//'))raw='https:'+raw;
 if(!raw||raw.startsWith('data:')||raw.startsWith('#')||raw.startsWith('/'))return raw;
 let url=raw.replaceAll('&amp;','&');
 if(!url.startsWith('https://'))return url;
 if(url.includes('static.wixstatic.com/media/')&&!url.includes('.svg')){
   const original=url.split('/v1/')[0],name=original.split('/').pop();
   if(/\.(jpe?g|png|webp)$/i.test(name))url=original+'/v1/fit/w_1600,h_1400,q_85/'+name;
 }
 if(!assetMap.has(url)){
   const extension=new URL(url).pathname.match(/\.(woff2?|ttf|otf|svg|png|jpe?g|webp|avif)$/i)?.[1]||'bin';
   assetMap.set(url,'/infinity-assets/'+crypto.createHash('sha256').update(url).digest('hex').slice(0,20)+'.'+extension);
 }
 return assetMap.get(url);
}
function palette(css){
 css=css.replaceAll('8,105,120','41,42,43').replaceAll('#086978','#292a2b').replaceAll('#086978'.toUpperCase(),'#292a2b').replaceAll('253,248,247','249,247,242');
 const colors={'#c14329':'#97763d','#0a6a77':'#292a2b','#076b78':'#292a2b','#0b6c78':'#292a2b','#006b77':'#292a2b'};
 css=css.replace(/#[0-9a-f]{6}\b/gi,m=>colors[m.toLowerCase()]||m);
 for(const [a,b]of [['193,67,41','151,118,61'],['10,106,119','41,42,43'],['11,108,120','41,42,43'],['7,107,120','41,42,43'],['0,107,119','41,42,43']])css=css.replaceAll(a,b);
 return css;
}
fs.mkdirSync(path.join(root,'public/infinity-layout'),{recursive:true});
fs.mkdirSync(path.join(root,'public/infinity-assets'),{recursive:true});
for(const [page,view]of Object.entries({home:'HomeView',about:'AboutView',services:'ServicesView',contact:'ContactView',privacy:'PrivacyView'})){
 const data=JSON.parse(fs.readFileSync(path.join(__dirname,'reference-infinity',page+'.json'),'utf8'));
 let html=fs.readFileSync(path.join(__dirname,'reference-infinity',page+'.html'),'utf8');
 const ast=parse(html),edits=[],used=new Set();
 const replace=(n,text)=>edits.push({start:n.loc.start.offset,end:n.loc.end.offset,text});
 function visit(n,imageInfo){
   if(n.type===2){const next=globalText[norm(n.content)];if(next)replace(n,esc(next));return;}
   if(n.type!==1){(n.children||[]).forEach(c=>visit(c,imageInfo));return;}
   const id=attr(n,'id')||'',classes=attr(n,'class')||'';
   if(id.endsWith('-pinned-layer')&&n.loc.source.includes('minimizedChatButton')){replace(n,'');return;}
   if(n.tag==='svg'&&attr(n,'data-testid')==='animated-svg') { replace(n,'<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg>');return; }
   if(n.tag==='style'||n.tag==='script'||n.tag==='link'||n.tag==='source'||id==='WIX_ADS'||id==='WIX_ADS_MOBILE'){replace(n,'');return;}
   if(classes.includes('wixui-vector-image')&&n.loc.source.includes('1671.73')){used.add('BrandLogo');replace(n,`<div id="${id}" class="${classes}"><BrandLogo /></div>`);return;}
   if(attr(n,'aria-label')==='Social Bar'){used.add('ContactChannels');replace(n,'<ContactChannels />');return;}
   if(id.startsWith('comp-mmn49law__')){used.add('AreaIcon');const kind=id.endsWith('item1')?'legal':id.endsWith('j9ples3e')?'building':'finance';replace(n,`<div id="${id}" class="${classes}"><AreaIcon kind="${kind}" /></div>`);return;}
   if(page==='services'&&id==='comp-mmsob3iw2'){replace(n,`<div id="${id}" class="${classes}"><h1 class="font_0 wixui-rich-text__text">{{ pageTitle }}</h1></div>`);return;}
   if(page==='home'&&id==='comp-mmm06z1u'){used.add('InquiryPanel');replace(n,`<InquiryPanel id="${id}" class="${classes}" />`);return;}
   if(n.tag==='form'){used.add('InquiryForm');replace(n,'<div class="contact-inquiry"><InquiryForm /></div>');return;}
   if(page==='home'&&id==='comp-miidtih9'){used.add('ServiceInsights');replace(n,`<ServiceInsights id="${id}" class="${classes}" />`);return;}
   if(page==='services'&&['comp-mmsofcyg','comp-mmsoqpp3','comp-mmsoteou'].includes(id)){
      if(id==='comp-mmsofcyg'){used.add('ServiceBlocks');replace(n,'<ServiceBlocks class="infinity-service-blocks" />');}else replace(n,'');return;
   }
   if(attr(n,'data-testid')==='richTextElement'){
     const text=norm(plain(n)), next=byId[id]||globalText[text];
     if(next){
       const leaf=n.loc.source.match(/<(h[1-6]|p)(\s[^>]*?)?>/),tag=leaf?.[1]||'p',props=leaf?.[2]||' class="font_8 wixui-rich-text__text"';
       const contactHref=text==='123-456-7890'?'tel:+51986994914':text==='info@infinitytrade.com'?'https://wa.me/51986994914':null;
       const inner=next.split('\n\n').map(s=>`<${tag}${props}>${contactHref?`<a href="${contactHref}">${esc(s)}</a>`:esc(s)}</${tag}>`).join('');
       replace(n,`<div id="${id}" class="${classes}">${inner}</div>`);return;
     }
   }
   if(n.tag==='wow-image'){
     try{imageInfo=JSON.parse(attr(n,'data-image-info')||'{}');}catch{imageInfo={};}
   }
   let hasSrc=false;
   for(const p of n.props||[]){
     if(p.type!==6)continue;
     const value=p.value?.content||'';
     if(['data-image-info','data-svg-id','data-original-string','srcset','slots','wix'].includes(p.name)||p.name.startsWith('on')||p.name==='data-motion-enter'){edits.push({start:p.loc.start.offset,end:p.loc.end.offset,text:''});continue;}
     if(p.name==='src'){
       hasSrc=true;
       const src=imagesOverride[attr(n,'alt')]||asset(value);
       edits.push({start:p.loc.start.offset,end:p.loc.end.offset,text:`src="${esc(src)}"`});continue;
     }
     if(p.name==='href'){
       let next=links[value];
       if(value.startsWith('tel:'))next='tel:+51986994914';
       if(value.startsWith('mailto:'))next='https://wa.me/51986994914';
       if(value.startsWith(base+'/post/'))next='/servicios';
       if(next)edits.push({start:p.loc.start.offset,end:p.loc.end.offset,text:`href="${esc(next)}"`});
     }
     if(p.name==='aria-label'||p.name==='title'){
       const next=globalText[norm(value)];if(next)edits.push({start:p.loc.start.offset,end:p.loc.end.offset,text:`${p.name}="${esc(next)}"`});
     }
     if(p.name==='alt'&&n.tag==='img')edits.push({start:p.loc.start.offset,end:p.loc.end.offset,text:'alt="Fotografía ilustrativa de nuestros servicios"'});
     if(p.name==='style'){
       let style=palette(value).replace(/url\(["']?(https:\/\/[^"')]+)["']?\)/g,(_,u)=>`url('${asset(u)}')`);
       // Entrance effects must not keep static Vue content hidden.
       style=style.replace(/(?:opacity:\s*0|visibility:\s*hidden);?/g,'');
       if(style!==value)edits.push({start:p.loc.start.offset,end:p.loc.end.offset,text:`style="${esc(style)}"`});
     }
   }
   if(n.tag==='img'&&!hasSrc&&imageInfo?.imageData?.uri){
     const src=imagesOverride[attr(n,'alt')]||asset('https://static.wixstatic.com/media/'+imageInfo.imageData.uri);
     edits.push({start:n.loc.start.offset+4,end:n.loc.start.offset+4,text:` src="${src}"`});
   }
   (n.children||[]).forEach(c=>visit(c,imageInfo));
 }
 visit(ast);
 for(const e of edits.sort((a,b)=>b.start-a.start))html=html.slice(0,e.start)+e.text+html.slice(e.end);
 html=palette(html).replace(/<!--[^]*?-->/g,'').replaceAll('required=""','required');
 let css=palette(data.css).replace(/url\(["']?((?:https:)?\/\/[^"')]+)["']?\)/g,(_,u)=>`url('${asset(u)}')`);
 // Reference was measured with its promotional Wix bar hidden.
 css+='\n:root{--wix-ads-height:0px!important;--wix-ads-top-height:0px!important;}\n';
 const imports=[...used].map(n=>`import ${n} from '../components/${n}.vue'`).join('\n');
 const serviceCode=page==='services'?`import { computed } from 'vue'\nimport { useRoute } from 'vue-router'\nimport { services } from '../data/content'\nconst route = useRoute()\nconst pageTitle = computed(() => services.find(s => s.id === route.params.slug)?.title || 'Servicios')\n`:'';
 const source=`<script setup lang="ts">\nimport { useOriginalLayout } from '../composables/useOriginalLayout'\n${imports}\n${serviceCode}useOriginalLayout()\n</script>\n<template>\n${html}\n</template>\n`;
 fs.writeFileSync(path.join(root,'src/views',view+'.vue'),source);
 if(page==='privacy'){
   let accessible=source.replace('>PRIVACIDAD<','>ACCESIBILIDAD<');
   const replacements={
    '1. Datos de tu consulta':'1. Navegación','2. Para qué se utilizan':'2. Formularios','3. Almacenamiento y servicios externos':'3. Pantallas y lectura','4. Consultas sobre tus datos':'4. Otra forma de contactarnos',
    [byId['comp-miimb1om3']]:'Puedes recorrer los enlaces, botones y campos con el teclado. El menú móvil se cierra con Escape y permite volver a la navegación principal.',
    [byId['comp-miimefp5']]:'Los campos del formulario tienen etiquetas, validación y mensajes de confirmación. Las pestañas de consulta se pueden cambiar con las flechas del teclado.',
    [byId['comp-miimg204']]:'El sitio adapta sus bloques a pantallas de escritorio, tabletas y celulares. Puedes utilizar las opciones de ampliación del navegador.',
    [byId['comp-miimgt2u']]:'Si encuentras alguna dificultad para utilizar la web, comunícate al 986 994 914 o por WhatsApp para coordinar la atención.',
   };
   for(const[a,b]of Object.entries(replacements))accessible=accessible.replaceAll(esc(a),esc(b));
   fs.writeFileSync(path.join(root,'src/views/AccessibilityView.vue'),accessible);
 }
 fs.writeFileSync(path.join(root,'public/infinity-layout',page+'.css'),css);
 console.log(page,html.length,css.length,[...used].join(','));
}
fs.writeFileSync(path.join(__dirname,'infinity-assets.json'),JSON.stringify([...assetMap].map(([url,local])=>({url,local})),null,2));
console.log('Assets:',assetMap.size);
