const fs = require('node:fs');
const {parse}=require('@vue/compiler-dom');
const attr=(n,k)=>n.props?.find(p=>p.name===k)?.value?.content;
const plain=n=>n.type===2?n.content:(n.children||[]).map(plain).join('');
for(const page of ['home','about','services','contact','privacy']){
 const data=JSON.parse(fs.readFileSync(`tools/reference-infinity/${page}.json`,'utf8'));
 let html=data.html.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,'').replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'').replace(/<link\b[^>]*>/gi,'').replaceAll('</link>','');
 fs.writeFileSync(`tools/reference-infinity/${page}.html`,html);
 const ast=parse(html),texts=[],sections=[],logos=[];
 function w(n){
  if(n.type===1){
   if(attr(n,'data-testid')==='richTextElement')texts.push({id:attr(n,'id'),text:plain(n).replace(/\s+/g,' ').trim()});
   if(n.tag==='section')sections.push({id:attr(n,'id'),text:plain(n).replace(/\s+/g,' ').slice(0,150)});
   if(n.tag==='img')logos.push({src:attr(n,'src'),alt:attr(n,'alt')});
  }
  (n.children||[]).forEach(w);
 }
 w(ast);fs.writeFileSync(`tools/reference-infinity/${page}-structure.json`,JSON.stringify({texts,sections,images:logos},null,2));
 console.log(page,html.length,JSON.stringify(sections));
}
