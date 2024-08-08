import {BeforeAll, AfterAll, Before, After, Status, AfterStep, setDefaultTimeout} from "@cucumber/cucumber";
import {chromium, Page, Browser, BrowserContext} from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { config } from "../support/config";
import { invokeBrowser } from "../helpers/browsers/browserManager";


let browser: Browser;
let context: BrowserContext;

setDefaultTimeout(60*1000*100);

BeforeAll(async function(){
    // browser = await chromium.launch(config.browserOptions);
    browser=await invokeBrowser();
})

Before(async function(){
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page=page;
});

// AfterStep(async function({pickle}){
//     const img = await pageFixture.page.screenshot({path:`./test-result/Screenshots/${pickle.name}.png`, type:"png"});
//     await this.attach(img,"image.png");
// })

After(async function({pickle, result}) {
    console.log(result?.status)
    //screenShots
    if(result?.status==Status.FAILED){
    const img = await pageFixture.page.screenshot({path:`./test-result/Screenshots/${pickle.name}.png`, type:"png"});
    await this.attach(img,"image.png");
}
    await pageFixture.page.close();
    await context.close();
})

AfterAll(async function(){
    await browser.close();
})