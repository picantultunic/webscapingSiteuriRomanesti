const sim=require("string-similarity")
var xx='Laptop, APPLE MacBook Pro 14 Apple M1 Pro, 14.2" Liquid Retina XDR, 16GB, SSD 512GB, Grafica integrata, macOS Monterey, Silver - Tastatura layout INT'
var yy='Laptop Apple MacBook Pro 14 cu procesor Apple M1 Pro. 10 nuclee CPU and 16 nuclee GPU, 16GB, 1TB SSD, Space Grey, Int Kb'
var produse=[
   {
     nume: 'Laptop Apple MacBook Pro 14 (2021) cu procesor Apple M1 Pro. 8 nuclee CPU and 14 nuclee GPU. 16GB. 512GB SSD. Space Grey. Int KB',
     pret: 9699.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 14 (2021) cu procesor Apple M1 Pro. 10 nuclee CPU and 16 nuclee GPU. 16GB. 1TB SSD. Space Grey. Int KB',
     pret: 10799.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 14 (2021) cu procesor Apple M1 Pro. 8 nuclee CPU and 14 nuclee GPU. 16GB. 512GB SSD. Silver. Int KB',
     pret: 9699.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 16 (2021) cu procesor Apple M1 Max. 10 nuclee CPU and 32 nuclee GPU. 32GB. 1TB SSD. Silver. Int KB',
     pret: 16599.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 16 (2021) cu procesor Apple M1 Pro. 10 nuclee CPU and 16 nuclee GPU. 16GB. 512GB SSD. Space Grey. Int KB',
     pret: 11799.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 16 (2021) cu procesor Apple M1 Pro. 10 nuclee CPU and 16 nuclee GPU. 16GB. 1TB SSD. Silver. Int KB',
     pret: 12999.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 14 (2021) cu procesor Apple M1 Pro. 10 nuclee CPU and 16 nuclee GPU. 16GB.1TB SSD. Silver. Int KB',
     pret: 11699.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple 13-inch MacBook Pro: Apple M2 chip with 8-core CPU and 10-core GPU. 256GB SSD - Space Grey',
     pret: 6999.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 16 (2021) cu procesor Apple M1 Pro. 10 nuclee CPU and 16 nuclee GPU. 16GB. 1TB SSD. Space Grey. Int KB',
     pret: 13000,
     similar: 0
   },
   {
     nume: 'Laptop Apple 13-inch MacBook Pro: Apple M2 chip with 8-core CPU and 10-core GPU. 256GB SSD - Silver',
     pret: 7099.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple 13-inch MacBook Pro: Apple M2 chip with 8-core CPU and 10-core GPU. 512GB SSD - Space Grey',
     pret: 7949.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 14 (2021) cu procesor Apple M1 Pro. 10 nuclee CPU and 16 nuclee GPU. 16GB. 1TB SSD. Space Grey. RO Kb',
     pret: 11999.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple 13-inch MacBook Pro: Apple M2 chip with 8-core CPU and 10-core GPU. 512GB SSD - Silver',
     pret: 8099.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 16 (2021) cu procesor Apple M1 Max. 10 nuclee CPU and 32 nuclee GPU. 32GB. 1TB SSD. Space Grey. Int KB',
     pret: 16899.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 14 (2021) cu procesor Apple M1 Pro. 8 nuclee CPU and 14 nuclee GPU. 16GB. 512GB SSD. Space Grey. RO Kb',
     pret: 9999.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 16 (2021) cu procesor M1 Max 10 Core CPU. 32 Core GPU. 64GB. 1TB SSD. INT Kb. Space Gray',
    pret: 20999.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 14 cu procesor Apple M1 Pro. 10 nuclee CPU and 16 nuclee GPU. 32GB. 1TB SSD. Space Grey. Int Kb',
     pret: 16799.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 16 (2021) cu procesor Apple M1 Pro. 10 nuclee CPU and 16 nuclee GPU. 16GB. 512GB SSD. Silver. Int KB',
     pret: 11799.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 14 (2021) cu procesor Apple M1 Pro. 10 nuclee CPU and 16 nuclee GPU. 16GB. 1TB SSD. Silver. RO Kb',
     pret: 11999.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 16 (2021) cu procesor M1 Max 10 Core CPU. 32 Core GPU. 32GB. 2TB SSD. INT Kb. Space Gray',    pret: 20999.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 16" Touch Bar. procesor Intel® Core™ i9 230 GHz. 16GB. 1TB SSD. Radeon Pro 5500M 4GB. Space Grey. INT KB',
     pret: 13949,
     similar: 0
   },
   {
     nume: 'Laptop Apple 13-inch MacBook Pro: Apple M2 chip with 8-core CPU and 10-core GPU. 256GB SSD - Space Grey',
     pret: 7599.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Air 13-inch. True Tone. procesor Apple M1 . 8 nuclee CPU si 7 nuclee GPU. 8GB. 256GB. Space Grey. INT KB',
     pret: 5239.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple 13-inch MacBook Pro: Apple M2 chip with 8-core CPU and 10-core GPU. 16GB. 512GB SSD - Space Grey',    
     pret: 10999.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 16 (2021) cu procesor Apple M1 Pro. 10 nuclee CPU si 16 nuclee GPU. 32GB. 512GB SSD. Space Grey. Int KB',
     pret: 16499.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 13-inch. True Tone. procesor Apple M1. 8 nuclee CPU si 8 nuclee GPU. 8GB. 512GB SSD. Space Grey. INT KB',
     pret: 8299,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Air 13-inch. True Tone. procesor Apple M1 . 8 nuclee CPU si 7 nuclee GPU. 8GB. 256GB. Gold. INT KB',
     pret: 5299.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 16" Touch Bar. procesor Intel® Core™ i9 230 GHz. 16GB. 1TB SSD. Radeon Pro 5500M 4GB. Silver. INT KB',
     pret: 14599,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 16 (2021) cu procesor Apple M1 Pro. 10 nuclee CPU and 16 nuclee GPU. 16GB. 1TB SSD. Space Grey. RO Kb',
     pret: 13899.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 13. True Tone. procesor Apple M1 . 8 nuclee CPU si 8 nuclee GPU. 16GB. 2TB SSD. INT Kb. Space Grey',
     pret: 11199.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 14 (2021) cu procesor Apple M1 Pro. 8 nuclee CPU and 14 nuclee GPU. 16GB. 512GB SSD. Silver. RO Kb',
     pret: 9999.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 13-inch. True Tone. procesor Apple M1. 8 nuclee CPU si 8 nuclee GPU. 16GB. 2TB SSD. Silver. INT KB',
     pret: 11199.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 13. True Tone. procesor Apple M1 . 8 nuclee CPU si 8 nuclee GPU. 16GB. 2TB SSD. RO Kb. Silver',
     pret: 11199.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 16 (2021) cu procesor Apple M1 Max. 10 nuclee CPU and 32 nuclee GPU. 32GB. 1TB SSD. Silver. RO Kb',
     pret: 17499.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple 13-inch MacBook Pro: Apple M2 chip with 8-core CPU and 10-core GPU. 24GB. 2TB SSD - Space Grey',      
     pret: 15999.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 16 (2021) cu procesor Apple M1 Pro. 10 nuclee CPU and 16 nuclee GPU. 16GB. 1TB SSD. Silver. RO Kb',
     pret: 13899.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 15. ecran Retina. Touch Bar. procesor Intel® Core™ i7 260 GHz. 16GB. 256GB SSD. Radeon Pro 555X W 4GB. macOS Mojave. INT KB. Space Grey',
     pret: 10490,
     similar: 0
   },
   {
     nume: 'Laptop Apple 133-inch MacBook Pro. cu procesor Apple M2 cu 8-core CPU and 10-core GPU. 24GB. 1TB SSD. Space Grey. US Keyboard',
     pret: 12999.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 16 (2021) cu procesor Apple M1 Pro chip with 10 nuclee CPU and 16 nuclee GPU. 16GB. 512GB SSD. Space Grey. RO Kb',
     pret: 17973,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 16 (2021) cu procesor Apple M1 Max. 10 nuclee CPU and 32 nuclee GPU. 32GB. 1TB SSD. Space Grey. RO Kb',
     pret: 17499.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Air 13-inch. True Tone. procesor Apple M1 . 8 nuclee CPU si 7 nuclee GPU. 8GB. 256GB. Silver. INT KB',
     pret: 5299.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple 13-inch MacBook Pro: Apple M2 chip with 8-core CPU and 10-core GPU. 256GB SSD - Silver',
     pret: 7599.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple 13-inch MacBook Air: Apple M2 chip with 8-core CPU and 8-core GPU. 256GB - Midnight',
     pret: 6799.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple 13-inch MacBook Pro: Apple M2 chip with 8-core CPU and 10-core GPU. 512GB SSD - Space Grey',
     pret: 8699.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 16 (2021) cu procesor Apple M1 Pro. 10 nuclee CPU and 16 nuclee GPU. 16GB. 512GB SSD. Silver. RO Kb',
     pret: 12999.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 16" Touch Bar. procesor Intel® Core™ i7 260 GHz. 16GB. 512GB SSD. Radeon Pro 5300M 4GB. Silver. INT KB',
     pret: 12898.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 16" Touch Bar. procesor Intel® Core™ i7 260 GHz. 16GB. 512GB SSD. Radeon Pro 5300M 4GB. Space Grey. INT KB',
     pret: 13113.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 13-inch.True Tone. procesor Apple M1. 8 nuclee CPU si 8 nuclee GPU. 8GB. 256GB SSD. Space Grey. ROM KB',
     pret: 6499.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 13. True Tone. procesor Apple M1 . 8 nuclee CPU si 8 nuclee GPU. 16GB. 1TB SSD. RO Kb. Silver',
     pret: 9999.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 16 (2021) cu procesor M1 Pro 10 Core CPU. 16 Core GPU. 32GB. 1TB SSD. INT Kb. Space Gray',    
     pret: 17499.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple 13-inch MacBook Pro: Apple M2 chip with 8-core CPU and 10-core GPU. 16GB. 1TB SSD - Space Grey',      
     similar: 0
   },
   {
     nume: 'Laptop Apple 13-inch MacBook Pro: Apple M2 chip with 8-core CPU and 10-core GPU. 512GB SSD - Silver',
     pret: 8699.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro Liquid Retina XDR Late 2021. 142 inch 3024x1964. Apple M1 (10 C). 32 GB RAM. 512 GB SSD. Apple M1 Pro 14-core. macOS Monterey. Gri',
     pret: 15019,
   },
   {
     nume: 'Laptop Apple 13-inch MacBook Air: Apple M2 chip with 8-core CPU and 8-core GPU. 256GB. Space Grey. INT Kb',        
     pret: 6799.99,
     similar: 0
   },
   {
     nume: 'Laptop MacBook Pro 133". Retina true Tone. cu procesor Apple M1 (CPU 8-core. GPU 8-core. Neural Engine 16-core) 16GB DDR. 1TB SSD. Tastatura Ro. Space Grey',
     pret: 14099,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 13. ecran Retina. Touch Bar. procesor Intel® Core™ i5 240 GHz. 8GB. 512GB SSD. Intel Iris Plus Graphics 655. macOS Mojave. INT KB. Space grey',
     pret: 13209,
     similar: 0
   },
   {
     nume: 'Laptop Apple 13-inch MacBook Air: Apple M2 chip with 8-core CPU and 8-core GPU. 256GB - Starlight',
     pret: 6799.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Air 13-inch. True Tone. procesor Apple M1 . 8 nuclee CPU si 7 nuclee GPU. 8GB. 256GB. Gold. ROM KB',
     pret: 5499.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 16 (2021) cu procesor Apple M1 Max. 10 nuclee CPU and 32 nuclee GPU. 32GB. 1TB SSD. Space Grey. US Keyboard',
     pret: 18199.99,
     similar: 0
   },
   {
     nume: 'Laptop Apple MacBook Pro 13. ecran Retina. Touch Bar. procesor Intel® Core™ i5 240 GHz. 8GB. 256GB SSD. Intel Iris Plus Graphics 655. macOS Mojave. INT KB. Silver',
     pret: 8612.71,
     similar: 0
   }
 ]
function similar(x , y){
   x=x.toLowerCase().replaceAll(",",'').replaceAll('.','').replaceAll('-','').replaceAll('  ','').split(" ").map(x=>{
      return{
         text:x,
         check:false
      }
   });
   y=y.toLowerCase().replaceAll(",",'').replaceAll('.','').replaceAll('-','').replaceAll('  ','').split(" ").map(x=>{
      return{
         text:x,
         check:false
      }
   });
   var xcheck=0,ycheck=0;
   for(i=0;i<x.length;i++){
      for(j=0;j<y.length;j++)
         if(x[i].text==y[j].text){
            x[i].check=true;
            y[j].check=true;
            xcheck++;
            break;
         }

   }
   for(j=0;j<y.length;j++){
      for(i=0;i<x.length;i++)
         if(x[i].text==y[j].text){
            x[i].check=true;
            y[j].check=true;
            ycheck++;
            break;
         }

   }
   
   // console.log(x,y);
   // console.log(xcheck/x.length,xcheck/y.length)
   // console.log(ycheck/x.length,ycheck/y.length)
   return xcheck/x.length;
}
var pr="Laptop Apple MacBook Pro 14 (2021) cu procesor Apple M1 Pro. 8 nuclee CPU and 14 nuclee GPU. 16GB. 512GB SSD. Space Grey"
for(index=0;index<produse.length;index++){
  //  console.log(typeof produse[index].nume,typeof pr,index);
  produse[index].similar = similar(produse[index].nume,pr)
}
produse=produse.sort((a,b)=>{
  if(a.similar>b.similar)
  return 1;
  else
  return -1;
})
console.log(produse)