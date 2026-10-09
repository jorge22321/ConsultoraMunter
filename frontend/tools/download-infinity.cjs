const fs=require('node:fs/promises');
const path=require('node:path');
const root=path.resolve(__dirname,'../public');
async function main(){
 const assets=JSON.parse(await fs.readFile(path.join(__dirname,'infinity-assets.json'),'utf8'));
 let next=0,done=0;const errors=[];
 await Promise.all(Array.from({length:6},async()=>{
   while(next<assets.length){const a=assets[next++],dest=path.join(root,a.local);
    try{
     try{if((await fs.stat(dest)).size>0){done++;continue;}}catch{/* Not yet downloaded. */}
     const response=await fetch(a.url,{signal:AbortSignal.timeout(60000)});
     if(!response.ok)throw new Error('HTTP '+response.status);
     await fs.mkdir(path.dirname(dest),{recursive:true});await fs.writeFile(dest,Buffer.from(await response.arrayBuffer()));done++;
    }catch(error){errors.push({url:a.url,error:error.message});}
   }
 }));
 console.log(JSON.stringify({downloaded:done,total:assets.length,errors},null,2));
 if(errors.length)process.exitCode=1;
}
main();
