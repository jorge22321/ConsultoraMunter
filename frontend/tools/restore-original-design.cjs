/* One-time migration of the locally saved reference to native Vue templates.
 * Generated views and assets are self-contained: example/ is not used at runtime.
 */
const fs = require('node:fs');
const path = require('node:path');
const { parse } = require('@vue/compiler-dom');
const root = path.resolve(__dirname, '..');
const reference = path.resolve(root, '../example');
const normalize = text => text.replace(/[\s\u200b]+/g, ' ').trim();
const escape = text => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
const description = 'En Munter & Asociados brindamos soluciones personalizadas en derecho, ingeniería, contabilidad, finanzas, comercio exterior y marketing. Nuestro equipo te acompaña según lo que necesitas.';
const translations = {
  'top of page':'Inicio de la página', 'bottom of page':'Final de la página', Home:'Inicio', 'About Us':'Nosotros', 'Our Services':'Servicios', 'Contact Us':'Contacto',
  'Book a Free Consultation':'Solicitar una consulta', 'Get Started Today':'Consultar ahora', Menu:'Menú', Close:'Cerrar', Site:'Navegación', 'Learn More':'Más información', 'All Services':'Todos los servicios',
  'Summit Brokers & Investments':'Consultora Munter & Asociados', Summit:'Consultora', 'Brokers & Investments.':'Munter & Asociados.',
  'Trusted financial solutions for individuals and businesses.':'Soluciones legales, técnicas y empresariales a tu medida.',
  '15':'Legal', 'years of experience':'asesoría jurídica', '1000+':'Obras', happy:'arquitectura', clients:'e ingeniería', '99%':'Gestión', client:'contabilidad', retention:'y finanzas', '€500M':'Comercio', 'assets managed':'logística y aduanas',
  'Why choose us?':'¿Por qué elegirnos?', 'Customized Financial Plans':'Soluciones personalizadas', 'Expert Insights and Analysis':'Especialistas en distintas áreas', 'Commitment to Transparency':'Comunicación clara', 'Dedicated Client Support':'Acompañamiento cercano',
  'We create personalized financial plans tailored to your unique goals, ensuring your strategy fits your needs perfectly.':'Escuchamos tu situación y orientamos cada servicio según tus necesidades y los objetivos de tu proyecto.',
  'Our experienced team provides top-tier market analysis and insights, helping you make well-informed investment choices.':'Reunimos profesionales en derecho, ingeniería y gestión empresarial para atender necesidades de distintas especialidades.',
  'We prioritize clear and honest communication, giving you complete information about your investments and our recommendations.':'Conversamos contigo sobre el alcance de tu consulta, la información necesaria y los siguientes pasos.',
  'Your satisfaction is our priority. Our support team is always here to answer your questions and provide exceptional service.':'Puedes contactarnos para conocer nuestros servicios y coordinar la atención del especialista que necesitas.',
  'Empowering Your Financial Future.':'Soluciones para tus proyectos.', 'Our approach is tailored to you.':'Un servicio pensado para ti.',
  'Personalised Strategies':'Atención personalizada', 'Tailored financial plans to meet individual goals.':'Orientación que parte de tus necesidades.',
  'Comprehensive Services':'Distintas especialidades', 'One-stop solution for all financial needs.':'Áreas que se complementan para ayudarte.',
  'Proven Results':'Acompañamiento cercano', 'Consistent track record of client success and satisfaction':'Comunicación clara durante tu consulta y proyecto.',
  'See how we’ve helped clients achieve their financial goals.':'Conoce cómo podemos ayudarte a dar el siguiente paso.',
  '"Outstanding financial guidance!"':'Asesoría legal para tu familia',
  'Their personalized approach has significantly boosted my investments. I appreciate their clear and transparent communication.':'Orientación en alimentos, tenencia, régimen de visitas, divorcio, unión de hecho y violencia familiar.',
  'Sarah C':'Derecho de familia', 'Marketing Manager':'Consulta tu caso',
  '"Trustworthy and reliable service."':'Apoyo para tu construcción',
  '"I\'ve always felt confident with their expert advice and market insights. Their support team is exceptional.':'Diseño de planos, modelado 3D, levantamientos topográficos y trámites de licencias y regularización.',
  'James R':'Arquitectura e ingeniería', 'Small Business Owner':'Cuéntanos tu proyecto',
  '"Exceptional client support!"':'Orientación para tu negocio',
  'They consistently address my concerns with professionalism and care. I\'ve seen great returns on my portfolio.':'Servicios de contabilidad, administración, finanzas, importaciones, logística, marketing digital y diseño gráfico.',
  'Emily W':'Gestión empresarial', 'Software Engineer':'Conversemos sobre tu negocio',
  'Talk to us today.':'Conversemos hoy.',
  'We\'re here to help you achieve your financial goals. Fill out the form below to schedule a consultation.':'Cuéntanos qué necesitas. Completa el formulario para registrar tu consulta y coordinar la atención.',
  'Explore our':'Conoce nuestros', 'financial services':'servicios',
  'Empowering your financial journey with trust and expertise.':'Asesoría para tu familia, tu negocio y tus proyectos.',
  'We’ve been helping clients achieve their financial goals for over a decade.':'Profesionales de distintas especialidades a tu disposición.',
  COMPANY:'CONSULTORA', Services:'Servicios', 'OUR SERVICES':'NUESTROS SERVICIOS',
  'Insurance Options':'Asesoría legal', 'Mortgage Consultations':'Arquitectura e ingeniería', 'Mortgage Consultation':'Arquitectura e ingeniería', 'Investment Services':'Contabilidad y finanzas', 'Financial Planning':'Comercio exterior',
  'Contact: (123) 456-7890':'Contacto: 986 994 914', 'Privacy Policy':'Privacidad', 'Accessibility Statement':'Accesibilidad', 'Back to top of the page':'Volver al inicio',
  'About Our Services':'Nuestros servicios',
  'We offer a variety of insurance options to protect you and your assets. Our team will help you choose the right coverage to meet your specific needs and ensure peace of mind.':'Asesoría en derecho de familia y derecho tributario municipal. Orientación en alimentos, tenencia, divorcio, reclamaciones y otros trámites de tu caso.',
  'Our mortgage consultation service helps you navigate the complexities of home financing. We provide expert guidance to find the best mortgage options tailored to your financial situation.':'Diseño de planos, instalaciones, modelado 3D, topografía y trámites de licencias y regularización de edificaciones. Soluciones técnicas para tu proyecto.',
  'We offer comprehensive investment services, providing expert advice and diversified portfolio management. Our goal is to maximize your returns while managing risk effectively.':'Asesoría contable, administrativa y financiera para organizar la gestión de tu negocio y atender sus necesidades.',
  'Our financial planning service creates customized strategies to help you achieve your long-term financial goals. We assess your current financial situation and design a plan tailored to your unique needs.':'Acompañamiento en importaciones, proveedores, documentación, trámites aduaneros, fletes y traslado de mercancías.',
  'About Summit':'Consultora',
  'Founded in 2010, we offer personalized financial solutions tailored to your unique needs. Our expert team combines industry experience with innovative strategies to help you achieve your financial goals. Committed to transparency and client-focused service, we build lasting relationships based on trust and results.':description + ' Nos encuentras en Manchay, Pachacámac, Lima.',
  'Empowering your financial future.':'Especialistas para cada necesidad.', 'Our Story':'Nuestra consultora', 'Our Mission':'Nuestro enfoque', 'Our Values':'Nuestro compromiso',
  'Founded in 2010, our mission is to provide reliable and personalized financial services.':'Somos una empresa consultora que ofrece soluciones personalizadas para personas y negocios.',
  'To empower individuals and businesses to make informed financial decisions with confidence and clarity.':'Conectar tu necesidad con los profesionales y las especialidades que requiere.',
  'Integrity, transparency, and client-first approach are at the core of our business.':'Escuchar tu situación y conversar contigo sobre el alcance y los siguientes pasos.',
  'John R':'Munter & Asociados', 'CEO & Founder':'Consultoría multidisciplinaria', 'Our Team':'Nuestras especialidades', 'Leadership Team':'Profesionales de distintas áreas', 'Ariana R':'Atención personalizada', COO:'Orientación y acompañamiento',
  'John Ro':'Derecho de familia', 'Lisa Anderson':'Derecho tributario', 'Portfolio Manager':'Asesoría municipal', 'Robert Taylor':'Arquitectura', 'Financial Advisor':'Diseño de planos', 'Emily Moore':'Ingeniería', 'Risk Officer':'Desarrollo de proyectos', 'David Wilson':'Contabilidad', 'CRM Manager':'Administración y finanzas', 'Sarah Davis':'Comercio exterior', 'Income Specialist':'Importaciones y aduanas', 'Michael Brown':'Logística', 'Research Analyst':'Gestión de mercancías', 'Emma Johnson':'Marketing y diseño', 'Investment Strategist':'Comunicación de tu negocio',
  'Privacy Policy Statement':'Privacidad y datos personales',
};
function translate(text) {
  const key = normalize(text);
  if (key.startsWith('At Summit')) return description;
  return translations[key] ?? text;
}
const links = {
  './index.html':'/', './about-us.html':'/nosotros', './our-services.html':'/servicios', './contact-us.html':'/contacto', './privacy.html':'/privacidad', './accessibility-statement.html':'/accesibilidad',
  './our-services-insurance-options.html':'/servicios/asesoria-legal', './our-services-mortgage-consultation.html':'/servicios/arquitectura-ingenieria', './our-services-investment-services.html':'/servicios/contabilidad-finanzas', './our-services-financial-planning.html':'/servicios/comercio-exterior',
};
const colors = { '#03045e':'#826332', '#02022f':'#151515', '#6667fd':'#bc9858', '#4d4dbe':'#997b42', '#454686':'#78663f', '#cfe1f5':'#eee5d2', '#150b5c':'#3b3325', '#1a6aff':'#997b42' };
function recolor(css) {
  css=css.replaceAll('217,227,226','235,232,226').replaceAll('#d9e3e2','#ebe8e2').replaceAll('#D9E3E2','#EBE8E2');
  css=css.replace(/#[0-9a-f]{6}\b/gi,m=>colors[m.toLowerCase()] || m);
  for (const [before,after] of [['102,103,253','188,152,88'],['77,77,190','153,123,66'],['51,51,127','114,95,57'],['26,26,63','60,50,33'],['3,4,94','130,99,50'],['2,2,47','21,21,21'],['69,70,134','120,102,63'],['56,74,211','153,123,66']]) css=css.replaceAll(before,after);
  return css;
}
const attr=(node,name)=>node.props?.find(p=>p.name===name)?.value?.content;
const walk=(node,callback)=>{callback(node);(node.children||[]).forEach(child=>walk(child,callback));};
const sourceFiles = { HomeView:'index', AboutView:'about-us', ServicesView:'our-services', ContactView:'contact-us', ServiceView:'our-services-financial-planning', PrivacyView:'privacy', AccessibilityView:'accessibility-statement' };
const assets=new Set();
fs.mkdirSync(path.join(root,'public/original-layout'),{recursive:true});
fs.mkdirSync(path.join(root,'public/template-assets'),{recursive:true});
for(const [view,file] of Object.entries(sourceFiles)) {
  const raw=fs.readFileSync(path.join(reference,file+'.html'),'utf8');
  let html=raw.match(/<body[^>]*>([\s\S]*?)<\/body>/)[1];
  const ast=parse(html);
  const edits=[];
  const replace=(node,text)=>edits.push({start:node.loc.start.offset,end:node.loc.end.offset,text});
  let catalogLast;
  function visit(node,footerServices=false) {
    if(node.type===2) { const next=translate(node.content); if(next!==node.content)replace(node,escape(next)); return; }
    if(node.type!==1){(node.children||[]).forEach(c=>visit(c,footerServices));return;}
    const id=attr(node,'id')||'';
    footerServices ||= id.endsWith('_r_comp-lzejttm612');
    if(node.tag==='form') { replace(node,'<OriginalContactForm />'); return; }
    if(id.includes('comp-lzejttmp11')||id.includes('comp-lzejttmo')) {
      replace(node,`<div id="${id}" class="${attr(node,'class')}"><p class="font_9 wixui-rich-text__text">© {{ new Date().getFullYear() }} Consultora Munter &amp; Asociados S.A.C.</p></div>`);return;
    }
    if(id.endsWith('_r_comp-lzejttmb12')) {
      replace(node,`<div id="${id}" class="${attr(node,'class')}"><p class="font_8 wixui-rich-text__text"><a href="https://wa.me/51986994914" target="_blank" rel="noopener noreferrer">WhatsApp: 986 994 914</a></p></div>`);return;
    }
    if(node.tag==='svg'&&attr(node,'aria-label')==='Logo') {
      replace(node,'<svg viewBox="235 65 360 395" role="img" aria-label="Logo de Munter y Asociados" xmlns="http://www.w3.org/2000/svg"><image href="/images/logo-munter.png" width="831" height="719" /></svg>'); return;
    }
    if(view==='PrivacyView'&&id==='comp-m2k49it84') {
      replace(node,`<div id="${id}" class="${attr(node,'class')}"><p class="font_8 wixui-rich-text__text">El formulario solicita tus nombres, apellidos, celular, correo opcional y el motivo de tu consulta. Al enviarlo, autorizas a Consultora Munter &amp; Asociados S.A.C. a utilizar esta información para atender tu solicitud.</p><p class="font_8 wixui-rich-text__text">Los datos se guardan en el servidor junto con la fecha, el código de referencia y tu autorización. Evita incluir documentación o información confidencial en el mensaje inicial.</p><p class="font_8 wixui-rich-text__text">Para consultar, corregir o solicitar la eliminación de tus datos, comunícate al 986 994 914 e indica tu referencia. WhatsApp es un servicio externo y tiene sus propias condiciones de privacidad.</p></div>`);return;
    }
    if(view==='AccessibilityView'&&attr(node,'data-testid')==='richTextElement'&&node.loc.source.includes('Lorem ipsum')){
      replace(node,`<div id="${id}" class="${attr(node,'class')}"><p class="font_8 wixui-rich-text__text">Puedes navegar por el sitio con teclado, abrir el menú y los acordeones y completar el formulario con campos identificados. El diseño se adapta a pantallas de diferentes tamaños.</p><p class="font_8 wixui-rich-text__text">Si encuentras una dificultad para acceder a nuestros servicios, comunícate con Munter &amp; Asociados al 986 994 914 para coordinar otra forma de atención.</p></div>`);return;
    }
    const detailMap={'comp-lzl0ilgx1':'service.title','comp-lzl0ilgz4':'service.intro','comp-lzl0iukc5':'blocks[0]?.title','comp-lzl0mmfk10':'blocks[1]?.title','comp-lzl0n1k310':'blocks[2]?.title'};
    const detailLists={'comp-lzl0iuke':0,'comp-lzl0mmfn':1,'comp-lzl0n1k5':2};
    if(view==='ServiceView'&&(detailMap[id]||detailLists[id]!==undefined)){
      const leaf=node.loc.source.match(/<(h[1-6]|p)(\s[^>]*)?>/);
      const tag=leaf?.[1]||'p', attrs=leaf?.[2]||' class="font_8 wixui-rich-text__text"';
      const inner=detailMap[id]?`{{ ${detailMap[id]} }}`:`<span v-for="item in blocks[${detailLists[id]}]?.items" :key="item" class="original-service-line">{{ item }}</span>`;
      replace(node,`<div id="${id}" class="${attr(node,'class')}"><${tag}${attrs}>${inner}</${tag}></div>`);return;
    }
    if(footerServices && node.tag==='a' && attr(node,'href')==='./our-services.html'){
      replace(node,node.loc.source.replace('./our-services.html','/servicios/marketing-diseno').replace('>Services<','>Marketing y diseño<'));return;
    }
    if(id==='comp-lzl25gb9__7e9794af-f9f8-4f8e-8c48-f07eb28243dd') catalogLast=node;
    if(node.tag==='img'&&attr(node,'alt')){
      const altProp=node.props.find(p=>p.name==='alt');
      edits.push({start:altProp.loc.start.offset,end:altProp.loc.end.offset,text:'alt="Fotografía ilustrativa de nuestros servicios"'});
    }
    for(const prop of node.props||[]){
      if(prop.type!==6||!prop.value)continue;
      if(prop.name==='href') {
        const href=prop.value.content;
        let next=links[href];
        if(attr(node,'data-anchor')==='SCROLL_TO_TOP')next='#SCROLL_TO_TOP';
        if(view==='ServiceView'&&next==='/contacto'){
          edits.push({start:prop.loc.start.offset,end:prop.loc.end.offset,text:':href="`/contacto?servicio=${service.id}`"'});continue;
        }
        if(next)edits.push({start:prop.loc.start.offset,end:prop.loc.end.offset,text:`href="${next}"`});
      }
      if(['aria-label','placeholder'].includes(prop.name)){
        const next=translate(prop.value.content);
        if(next!==prop.value.content)edits.push({start:prop.loc.start.offset,end:prop.loc.end.offset,text:`${prop.name}="${escape(next)}"`});
      }
    }
    (node.children||[]).forEach(c=>visit(c,footerServices));
  }
  visit(ast);
  for(const edit of edits.sort((a,b)=>b.start-a.start)) html=html.slice(0,edit.start)+edit.text+html.slice(edit.end);
  if(catalogLast){
    const start=html.indexOf('<div id="comp-lzl25gb9__7e9794af-f9f8-4f8e-8c48-f07eb28243dd"');
    const fragmentAst=parse(html);let last;
    walk(fragmentAst,n=>{if(n.type===1&&attr(n,'id')==='comp-lzl25gb9__7e9794af-f9f8-4f8e-8c48-f07eb28243dd')last=n;});
    if(start>=0&&last){
      const cloned=last.loc.source.replaceAll('7e9794af-f9f8-4f8e-8c48-f07eb28243dd','munter-marketing').replaceAll('/servicios/comercio-exterior','/servicios/marketing-diseno').replaceAll('Comercio exterior','Marketing digital y diseño').replace('Acompañamiento en importaciones, proveedores, documentación, trámites aduaneros, fletes y traslado de mercancías.','Asesoría en marketing digital y diseño gráfico para comunicar tu negocio y desarrollar su presencia en el entorno digital.');
      html=html.slice(0,last.loc.end.offset)+cloned+html.slice(last.loc.end.offset);
    }
  }
  html=html.replace(/\.\/assets\/([\w.-]+)/g,(_,name)=>{assets.add(name);return '/template-assets/'+name;});
  html=html.replaceAll('data-motion-enter=""','data-motion-enter="done"').replaceAll('</link>','').replace(/\n\s*\n/g,'\n');
  if(view==='ContactView') html=html.replace('Cuéntanos qué necesitas. Completa el formulario para registrar tu consulta y coordinar la atención.','Cuéntanos qué necesitas. Llámanos al 986 994 914 o completa el formulario. Nos encuentras en Of. Mz. C, Lt. 11, A. H. Paul Poblet, Manchay, Pachacámac. Curva de Manchay, a una cuadra de Mi Banco.');
  const imports=`import { useOriginalLayout } from '../composables/useOriginalLayout'\n${html.includes('<OriginalContactForm')?"import OriginalContactForm from '../components/OriginalContactForm.vue'\n":''}`;
  const detail=view==='ServiceView'?`import { computed } from 'vue'\nimport { useRoute } from 'vue-router'\nimport { services } from '../data/content'\nconst route = useRoute()\nconst service = computed(() => services.find(s => s.id === route.params.slug) || services[0]!)\nconst blocks = computed(() => {\n const s=service.value\n if(s.groups) return [...s.groups,{title:'Consulta y coordinación',items:['Cuéntanos tu situación para identificar el servicio y coordinar los siguientes pasos.']} ]\n const size=Math.ceil(s.items.length/3)\n return [0,1,2].map((i)=>({title:['Nuestros servicios','Asesoría especializada','Atención a tu medida'][i],items:s.items.slice(i*size,(i+1)*size).length?s.items.slice(i*size,(i+1)*size):['Consulta el alcance de tu servicio con nuestro equipo.']}))\n})\n`:'';
  fs.writeFileSync(path.join(root,'src/views',view+'.vue'),`<script setup lang="ts">\n${imports}${detail}useOriginalLayout()\n</script>\n<template>\n${html}\n</template>\n`);
  let css=recolor(fs.readFileSync(path.join(reference,file+'.css'),'utf8'));
  css=css.replace(/\.\/assets\/([\w.-]+)/g,(_,name)=>{assets.add(name);return '/template-assets/'+name;});
  fs.writeFileSync(path.join(root,'public/original-layout',file+'.css'),css);
}
for(const name of assets)fs.copyFileSync(path.join(reference,'assets',name),path.join(root,'public/template-assets',name));
fs.writeFileSync(path.join(root,'public/original-layout/manifest.json'),JSON.stringify({pages:sourceFiles,assets:[...assets]},null,2));
console.log(`Restored ${Object.keys(sourceFiles).length} Vue layouts and ${assets.size} local assets.`);
