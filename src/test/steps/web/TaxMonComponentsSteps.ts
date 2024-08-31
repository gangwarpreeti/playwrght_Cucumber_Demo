
import {Given, Then, When} from '@cucumber/cucumber';
import { overviewPage } from '../../pages/overviewpage';
import { compliancePage } from '../../pages/compliancePage';
import { commonFunction } from '../../factories/commonFunction';
import { testData } from '../../../utils/testData';
const taxmon_Pass = process.env.taxmon_Pass;


Given(/^User is on login page$/, async function () {
    await overviewPage.navigateToURL();
});

When(/^User enter credentials$/, async function () {
    await overviewPage.login(testData.userName, taxmon_Pass);
});

Then(/^User verify the successful login$/, async function () {
    await overviewPage.verifyHomePage();
});

When(/^User verify the components of trend Graph$/, async function () {
    await overviewPage.verifyComponentsOfTrendGraph();
});

When(`User verify the filters present on the page`,async function () {
    
});

Then(/^User verify the components of data source graph$/, async function () {
    await overviewPage.verifyComponenetsOfDataSourceGraph();
});

Then(`User verify the {string} button`,async (buttonName: string) => {
    await commonFunction.verifyButton(buttonName);
});

Then(/^User verify the components of hierarchy graph$/, async function () {
    await overviewPage.verifyComponentsOfHierarchyGraph();
});

Then(/^User verify the components of market graph$/, async function () {
    await overviewPage.verifyComponentsOfMarketGraph();
});

Given(`User click on arrowdown button`, async function() {
    await commonFunction.clickOnArrow();
});

Given(`User click on the {string} on side navigation`,async function(complianceTab: string) {
    await commonFunction.clickOnNavigationBarLink(complianceTab);
});

Given(`User verify the header of the compliance page`,async function() {
        await compliancePage.verifyComplianceHeader();
});

Given(`User verify the compliance summary block`,async function() {
    await compliancePage.verifyComponentsOfComplianceSummaryBlock();
});

Given(`User verify the Table component texts`,async function() {
    await compliancePage.verifyComplianceTableCompTexts();
});

Given(`User verify the pagination presented on compliance page`,async function() {
    await commonFunction.verifyPagination();
});

// Then(`User logout the application`,async function() {
// });
