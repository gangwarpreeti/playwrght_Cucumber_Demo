// import axios from "axios";

export const gqlRequests={

postGqlRequest:async function() {
  `mutation (
$input: CreatePostInput!
) {
createPost(input: $input) {
  id
  title
  body
}
}`
},    

getGqlRequest: async function() {
`query {
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

}