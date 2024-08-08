import { pageFixture } from "../../hooks/pageFixture";
// import { expect } from "@playwright/test";
import { cms } from "../../utils/cms";
import { config } from "../../support/config";


export const overviewPage = {
    fields: {
        userName: `[id='idp-discovery-username']`,
        password: `[name='password']`,
        nextButton: `[id="idp-discovery-submit"]`,
        nextButton1:`//input[@class='button button-primary']`,
        verifyBtn: `//input[@class="button button-primary"]`,
        liveClientField: `//div[text()="Client Fields"]`,
        navigationBarLink: `//a[contains(text(),"Taxonomy compliance")]`,
        locationFilter: `//a[@label='Location']`
    },

    navigateToURL: async function(){
        await pageFixture.page.goto(config.BASE_URL, {timeout: 20000}); 
    },

    login: async function (userName: string, passWord: string) {
        await pageFixture.page.locator(overviewPage.fields.userName).fill(userName);
        await pageFixture.page.locator(overviewPage.fields.nextButton).click();
        await pageFixture.page.waitForSelector(overviewPage.fields.nextButton, {timeout:10000});
        await pageFixture.page.locator(overviewPage.fields.nextButton).click();
        await pageFixture.page.locator(overviewPage.fields.password).fill(passWord);
        await pageFixture.page.locator(overviewPage.fields.verifyBtn).click();
    },

    verifyHomePage: async function () {
        await pageFixture.page.getByText(cms.overviewheader.hearderText).isVisible({timeout:5000});
        await pageFixture.page.getByText(cms.overviewheader.subHeaderText).isVisible({timeout:5000});
    },

    verifyComponentsOfTrendGraph: async function() {
        await pageFixture.page.locator(`#lineChart`).isVisible({timeout: 5000});
        await pageFixture.page.getByAltText(cms.trendGraphText.header).isVisible({timeout: 5000});
        await pageFixture.page.getByAltText(cms.trendGraphText.subHeaderText).isVisible({timeout: 5000});
    },

    verifyComponenetsOfDataSourceGraph: async function(){
        await pageFixture.page.getByAltText(cms.dataSourcesGraphText.header).isVisible({timeout:5000});
        await pageFixture.page.getByAltText(cms.dataSourcesGraphText.subHeaderText).isVisible({timeout:5000});
    },

    verifyComponentsOfHierarchyGraph: async function (){
        await pageFixture.page.locator(`#responsiveChart`).first().isVisible({timeout:5000});
        await pageFixture.page.getByAltText(cms.hierarchyGraphText.header).isVisible({timeout:5000});
        await pageFixture.page.getByAltText(cms.hierarchyGraphText.subHeaderText).isVisible({timeout:5000});
    },

    verifyComponentsOfMarketGraph: async function () {
        await pageFixture.page.locator(`#responsiveChart`).nth(1).isVisible({timeout:5000});
        await pageFixture.page.getByAltText(cms.marketsGraphTest.header).isVisible({timeout:5000});
        await pageFixture.page.getByAltText(cms.marketsGraphTest.subHeaderText).isVisible({timeout:5000});    
    },
    
    verifyLocationFilter: async function () {
        await pageFixture.page.locator(overviewPage.fields.locationFilter).isVisible({timeout:5000});
    },

    verifyBrandFilter: async function () {
        
    },

    verifySourceFilter: async function () {
        
    },

    verifyHierarchyFilter: async function () {
        
    },

    verifyTimeFrameFilter: async function () {
        
    }
}