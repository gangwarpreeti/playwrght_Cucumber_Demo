import { cms } from "../../utils/cms";
import { pageFixture } from "../../hooks/pageFixture";

export const compliancePage = {
    fields:{

    },


    verifyComplianceHeader: async function(){
        await pageFixture.page.getByAltText(cms.complianceHeader.headerText).isVisible({timeout:5000});
        await pageFixture.page.getByAltText(cms.complianceHeader.subHeaderText).isVisible({timeout:5000});
    },

    verifyComponentsOfComplianceSummaryBlock: async function(){
        await pageFixture.page.getByAltText(cms.complianceSummaryBlock.header).isVisible({timeout:5000});
        await pageFixture.page.getByAltText(cms.complianceSummaryBlock.subHeader1).isVisible({timeout:5000});
        await pageFixture.page.getByAltText(cms.complianceSummaryBlock.subHeaderSupportText1).isVisible({timeout:5000});
        await pageFixture.page.getByAltText(cms.complianceSummaryBlock.subHeaderSupportText12).isVisible({timeout:5000});
        await pageFixture.page.getByAltText(cms.complianceSummaryBlock.subHeader2).isVisible({timeout:5000});
        await pageFixture.page.getByAltText(cms.complianceSummaryBlock.subHeaderSupportText2).isVisible({timeout:5000});
        await pageFixture.page.getByAltText(cms.complianceSummaryBlock.subHeaderSupportText22).isVisible({timeout:5000});
        await pageFixture.page.getByAltText(cms.complianceSummaryBlock.subHeader3).isVisible({timeout:5000});
        await pageFixture.page.getByAltText(cms.complianceSummaryBlock.subHeaderSupportText3).isVisible({timeout:5000});
        await pageFixture.page.getByAltText(cms.complianceSummaryBlock.subHeaderSupportText32).isVisible({timeout:5000});
    },

    verifyComplianceTableCompTexts: async function(){
        await pageFixture.page.getByAltText(cms.monitoredDataSources.header).isVisible({timeout:5000});
        await pageFixture.page.getByAltText(cms.monitoredDataSources.subHeader).isVisible({timeout:5000});
        await pageFixture.page.locator(`#market`).isVisible({timeout:5000});
    }
}