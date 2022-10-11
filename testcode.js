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
var program = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

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
      (h1) => parseFloat(h1.innerText.replace('.','').replace(',','.'))
    );
    var nume = await produseHtml[i].$eval(
      "div > div.card-v2-info > div > a",
      (n) => n.innerText
    );
    produse.push({
      nume:nume,
      pret:pret
    })
  }
  for(i=0;i<produse.length;i++)
   console.log(produse[i])
  //merge , yepeeeeeeee
  console.log("finish");
};
program();
