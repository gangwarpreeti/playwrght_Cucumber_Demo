import {DataTable, Given, Then, When} from '@cucumber/cucumber';
import axios from "axios";
import { gqlRequests } from '../../queries/demoQueries';
import { gqlModels } from '../../models/gqlModels';
import { commonFunction } from '../../factories/commonFunction';
import { expect, request } from '@playwright/test';
import { table } from 'console';

let postGql={};
let postResponse:any;
let getResponse:any;


Given(`User pass the required data`,async (dataTable: DataTable) => {
    console.log(dataTable.hashes());
    let table: string[]=[];
    let value: string;
    const accountData = dataTable.hashes();
    for (const entry of accountData) {
        for (const key in entry) {
          value = entry[key];
          console.log(`Key: ${key}, Value: ${value}`);
          table.push(value);
        }
      }
      console.log("======================="+table)
    // const table=dataTable.rows();
    // let table = await commonFunction.transformTable(dataTable);
    gqlModels.postRequest.input.title = table[0];
    gqlModels.postRequest.input.body = table[1];
    postGql = gqlModels.postRequest;
    console.log(postGql);
});


Given(`User hit the POST query`,async () => {
    // postResponse = await axios.post(`https://ga-api-gw.wal.int.az.eu.mediaecosystem.io/global-svr/graphql`, (gqlRequests.postGqlRequest, postGql));
    const postResponse = await axios.post(`https://graphqlzero.almansi.me/api`, {
        query: `mutation (
$input: CreatePostInput!
) {
createPost(input: $input) {
  id
  title
  body
}
}`,
        variables: postGql 
    }).then((response) => {
        console.log('Success: ', response)
    });

});

Given(`User verify the response`,async () => {
    await expect(postResponse.status).toEqual(200);
});

Then(`User hit the GET query`,async () => {
    // getResponse = await axios.post(`https://ga-api-gw.wal.int.az.eu.mediaecosystem.io/global-svr/graphql`,(gqlRequests.getGqlRequest));
    getResponse = await axios.post(`https://graphqlzero.almansi.me/api`),{
        query: `query {
    user(id: 1) {
      id
      username
      email
      address {
        geo {
          lat
          lng
        }
      }
    }
  }`
    }
});

Then(`User verify the response`,async () => {
    await expect(getResponse.user.id).toEqual("1");
    await expect(getResponse.userName).toBe("Bret");
    await expect(getResponse.email).toBe("Sincere@april.biz");
    await expect(getResponse.address.geo.lat).toBe(-37.3159);
    await expect(getResponse.address.geo.lng).toBe(81.1496);
});