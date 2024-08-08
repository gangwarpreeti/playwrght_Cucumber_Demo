@gql
Feature: Demo GQL Steps

Scenario: User perform the demo executions
Given User pass the required data
|title                        |body                     |
|A Very Captivating Post Title|Some interesting content.|
And User hit the POST query
And User verify the response
Then User hit the GET query
And User verify the response