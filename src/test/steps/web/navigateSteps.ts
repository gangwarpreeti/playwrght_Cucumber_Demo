import { Given, When, setDefaultTimeout } from "@cucumber/cucumber";
import { config } from "../../../support/config";
import { pageFixture } from "../../../hooks/pageFixture";


Given('User navigate to the google dashboard', async function () {    
await pageFixture.page.goto(config.BASE_URL);
});

When('User verify the dashboard elements', async function () {

});