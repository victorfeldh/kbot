import * as puppeteer from "puppeteer";
import express, { Express, Request, Response } from 'express';
import * as dotenv from "dotenv";

dotenv.config()
const app: Express = express()

app.get("/", async (req: Request, res: Response) => {
    const browser = await puppeteer.launch({headless: false})
    
    const page =  await browser.newPage();

    await page.setViewport({
        width: 1920,
        height: 1080
    })
    const myUrl = "https://www.kabum.com.br/?gclid=Cj0KCQiA6LyfBhC3ARIsAG4gkF9cA55Z8g0-MqzcfXWNIPr4ATVq71rTBj1AwriN5m7xFHt_cu5JygkaAjqOEALw_wcB"
    await page.goto(myUrl)

    await page.click(".sc-dkrFOg.fYUqOA > .sc-hGglLj.iKivlt > #blocoInformacoesCliente > span > a")
    await page.waitForNavigation()
    await page.type('.sc-jSUZER.kquNiK.inputForm > input[type="text"]', `${process.env.K_EMAIL}`)
    await page.type('.sc-jSUZER.kquNiK.inputForm > input[type="password"]', `${process.env.K_PASSWORD}`)

    await page.click('button[type="submit"]')

//     const 
})

app.listen(3000, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:3000`);
  });

// (async () => {
//     const browser = await puppeteer.launch({headless: false});
//     const page = await browser.newPage();

//     const 

// })();