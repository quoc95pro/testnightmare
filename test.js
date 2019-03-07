const puppeteer = require('puppeteer');
async function main() {
const browser = await puppeteer.launch({headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox']});
const page = await browser.newPage();
// await page.setViewport({width: 1200, height: 720})
await page.goto('https://123link.co/auth/signin', { waitUntil: 'networkidle0' }); // wait until page load
await page.type('#username', 'quoc1995pro@gmail.com');
await page.type('#password', 'aassdd');

// click and wait for navigation
await Promise.all([
          page.click('.btn-flat'),
          page.waitForNavigation({ waitUntil: 'networkidle0' }),
]);

// const h3 = await page.evaluate(() => document.querySelector('.bg-aqua .inner p').textContent);
// console.log(h3);

const elements = await page.$$(".inner h3"); 
for (let index = 0; index < elements.length; index++) {
  const data3 = await (await elements[index].getProperty('innerHTML')).jsonValue();
console.log(data3);
  
}

await browser.close();
}

main();