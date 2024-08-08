// interface TableCell {
//     value: any; // You can replace `any` with a more specific type if you know what values will be used.
//   }

import { pageFixture } from "../../hooks/pageFixture"

// import { DataTable } from "@cucumber/cucumber";

  
//   interface TableRow {
//     cells: TableCell[];
//   }
  
//   interface Table {
//     rows: TableRow[];
//   }
  
//   interface RowObject {
//     [key: string]: any; // You can replace `any` with a more specific type if you know what values will be used.
//   }
  

export const commonFunction = {

  clickOnArrow: async function(){
    await pageFixture.page.waitForSelector(`//span[text()="QA & Remediation"]/../..//span[@icon="chevron-down"]`);
    await pageFixture.page.locator(`//span[text()="QA & Remediation"]/../..//span[@icon="chevron-down"]`).click();
  },

  clickOnNavigationBarLink: async function(buttonName: string){
    await pageFixture.page.waitForSelector(`//span[contains(text(),"${buttonName}")]`);
    await pageFixture.page.locator(`//span[contains(text(),"${buttonName}")]`).click();
  },

  verifyButton:async function(buttonName: string){
    await pageFixture.page.locator(`//span[text()='${buttonName}']`).isVisible({timeout:10000});
  },

  verifyPagination: async function(){
    await pageFixture.page.locator(`(//div[contains(@class,"TableNextstyles__StyledTablePagination")])[1]`).isVisible({timeout:10000});
  }








    // transformTable: async function(table:any){
    //     let rows = table.rows;
    //     let headerRow = rows.shift();
    //     let headres =headerRow.cells.map((item:any) => item.value);

    //     return rows.map((row:any) => {
    //         let obj = {};
    //         row.cells.forEach((item:any, index:any) => {
    //             obj[headres[index]] = item.value;
    //         });
    //         return obj
    //     })
    // }

  // transformTable: async function(table){
  //   console.log(table)
  //       let rows = table.rows;
  //       let headerRow = rows.shift();
  //       if (!headerRow) {
  //         throw new Error("Table must have at least one row");
  //       }
  //       let headers = headerRow.cells.map((item) => item.value);
    
  //       return rows.map((row) => {
  //         let obj = {};
  //         row.cells.forEach((item, index: number) => {
  //           obj[headers[index]] = item.value;
  //         });
  //         return obj;
  //       });
  //     },
}