# Cypress + Cucumber tests
## For the automated tests

Clone repository:
```
git clone https://github.com/nadya-volna/franx_tech_assignment.git
cd franx_tech_assignment
```
Install dependencies:
```
npm install
```
Run the tests:
```
npx cypress run
```
## Non-automated tests in BDD format
```
  Scenario: Check user can Delete account
    Given User visits profile
    When User clicks Delete account button
    And User press OK
    Then User is redirected to Login page
```
```
  Scenario: Check user can search for the book by name 
    Given User visits profile
    When User types book_name into Books field
    And User press Magnifier button
    Then User see only relevant book in the table 
```
```
  Scenario: Check user can change rows number  
    Given User visits profile
    When User changes rows number
    Then Specified number of rows are displayed in the table 
```    
