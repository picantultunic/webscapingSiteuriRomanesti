// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch({
//    headless:false,
//    defaultViewport:false,
//    userDataDir:"./tmp"
//   });
//   const page = await browser.newPage();
//   await page.goto('https://www.instagram.com/');
//   await page.waitForTimeout(500);
//   await page.screenshot({path: 'example.png'});
//   await page.click('button.aOOlW .HoLwm ')
//    // await browser.close();
// })();

const puppeteer = require("puppeteer");

// console.log(utilizator)

var xx='Laptop, APPLE MacBook Pro 14 Apple M1 Pro, 14.2" Liquid Retina XDR, 16GB, SSD 512GB, Grafica integrata, macOS Monterey, Silver - Tastatura layout INT'
var yy='Laptop Apple MacBook Pro 14 cu procesor Apple M1 Pro. 10 nuclee CPU and 16 nuclee GPU, 16GB, 1TB SSD, Space Grey, Int Kb'

// var sim=comp.similar(xx,yy);
// console.log(sim);
async function similar(x , y){
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
  // for(j=0;j<y.length;j++){
  //    for(i=0;i<x.length;i++)
  //       if(x[i].text==y[j].text){
  //          x[i].check=true;
  //          y[j].check=true;
  //          ycheck++;
  //          break;
  //       }

  // }
  
  // console.log(x,y);
  // console.log(xcheck/x.length,xcheck/y.length)
  // console.log(ycheck/x.length,ycheck/y.length)
  return xcheck/x.length;
}
var program = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  var produsnume="apple macbook pro 14 16gb ";
  const page = await browser.newPage();
  await page.goto("https://www.emag.ro/");
  var searchbar = await page.$("#searchboxTrigger");
  await searchbar.focus();
  await searchbar.type("apple macbook pro");
  await searchbar.press("Enter");
  //ce ii mai jos ar fi o metoda mai antica , am gasit una mai buna
  // var produse = await page.$$(".card-item .card-standard .js-product-data")
  // for (produs in produse){
  //    const numeProdus=await page.evaluate
  // }
  //  await page.click(winner._remoteObject.description)
  console.log("astept sa se incarce");
  await page.waitForTimeout(2000);
  console.log("sa incarcat");
  var produseHtml = await page.$$(".card-item.card-standard ");
  var produse = [];
  for (i = 0; i < produseHtml.length; i++) {
    var pret = await produseHtml[i].$eval(
      "div > div.card-v2-content > div.card-v2-pricing > p.product-new-price",
      (h1) => parseFloat(h1.innerText.replaceAll('.','').replaceAll(',','.'))
    );
    var nume = await produseHtml[i].$eval(
      "div > div.card-v2-info > div > a",
      (n) => n.innerText.replaceAll('.','').replaceAll(',','.')
    );
    var link = await produseHtml[i].$eval(
      " div > div.card-v2-info > a",
      (n) => n.getAttribute('href')
    );
    // console.log(link)
    //sare de la 0 la un numar foarte aiurea 
    // console.log(i)
    // var sim=comp.similar(nume,produsnume);
    // console.log(sim);
    produse.push({
      link:link,
      nume:nume,
      pret:pret,
      similar:0
    })
  }
  for(index=0;index<produse.length;index++){
    produse[index].similar=await similar(produsnume,produse[index].nume);
  }
  produse=produse.sort((a,b)=>{
    if(a.similar>b.similar)
    return 1;
    else
    return -1;
  })
  console.log(produse);
  //merge , yepeeeeeeee
  console.log("finish");
};
//SA DECOMENTEZI PENTRU A RULA CODUL
program();
