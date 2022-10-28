const altex=require('./ApiAltex')
const axios=require('axios');
const cheerio=require('cheerio');
const sim=require('./similar')

var x =async (produsnume) =>{
   // var data = await altex.ProdusPreluareSpecificatii('https://altex.ro/laptop-apple-macbook-pro-14-mkgr3ze-a-apple-m1-pro-14-2-liquid-retina-xdr-16gb-ssd-512gb-grafica-integrata-macos-monterey-silver-tastatura-layout-int/cpd/LAPMKGR3ZEA/#additional');
   // console.log(data)
   var link ='https://www.emag.ro/search/apple%20macbook%20air%20m1'
   var cod = await axios.get(link).then(res=>{
      const html = res.data;
      console.time("cronometru")
      const $ = cheerio.load(html)
      var list=[]
      try{

         $('#card_grid')
         .find('div[class="card-item card-standard js-product-data"] ')
         .each(function (i, elem) {
            //console.log($(elem).find('div > div > div.card-v2-info > div > a').text())
            // list[i] = new dataProdus();
            // list[i].numeProdus=$(elem).find('div > div > div.card-v2-info > div > a').text();
            // list[i].link=$(elem).find('div > div > div.card-v2-info > div > a').attr('href');
            // list[i].pret=$(elem).find(' div > div > div.card-v2-content > div.card-v2-pricing > p.product-new-price').text()
            // list[i].similar=similar.similar(produsnume,list[i].numeProdus);


            var numeProdus=$(elem).find('div > div > div.card-v2-info > div > a').text()
            var link=$(elem).find('div > div > div.card-v2-info > div > a').attr('href')
            var pret=$(elem).find(' div > div > div.card-v2-content > div.card-v2-pricing > p.product-new-price').text()
            var similar=sim.similar(produsnume,numeProdus)
            list.push({
               numeProdus:numeProdus,
               link:link,
               pret:pret,
               similar:similar
            })
          });
         //console.log(list)
      }catch(e){
         console.log(e)
         return null;
      }
      list=list.sort((a,b)=>{
         if(a.similar<b.similar)
         return 1;
         else
         return -1;
       }).slice(0,10)
      console.timeEnd("cronometru")
      return list
   }).catch((err)=>{
      return null;
   })
   console.log(cod)
   
}
var produsnume='Laptop APPLE MacBook Pro 14 mkgr3ze/a, Apple M1 Pro, 14.2" Liquid Retina XDR, 16GB, SSD 512GB, Grafica integrata, macOS Monterey, Silver - Tastatura layout INT';

x(produsnume)
