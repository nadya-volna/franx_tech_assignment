import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LOCATORS } from '../../../support/locators';

const loginPage = require("../../../pages/LoginPage");

Given("User LogsIn as {string} with {string}", (username,password) => {
  cy.visit("/login");
  loginPage.Login(username, password);
  cy.url().should('be.equal', 'https://demoqa.com/profile')
});

Given("User visits profile", () => {
  cy.visit("/profile");
});

When("User clicks log out button", () => {
  cy.get(LOCATORS.logOutBtn).should('have.text','Log out').click();
});

Then("User see Welcome user form", () => {
  cy.get(LOCATORS.welcomeUser).should('be.visible').contains('Welcome'); 
});

Then("User press OK", () => {
  cy.get(LOCATORS.okBtn).click(); 
});

When("User clicks Go To Book Store button", () => {
  cy.get(LOCATORS.toStoreBtn).should('be.enabled').click({force: true}); 
});

Then("User see Book Store page", () => {
  cy.get(LOCATORS.mainHeader).should('be.visible').should('have.text','Book Store'); 
});

Then("User see No rows in the table", () => {
  cy.get(LOCATORS.noBooks).should('be.visible').should('have.text','No rows found'); 
});

When("User clicks Delete All Books button", () => {
  cy.get(LOCATORS.Btn).eq(4).should('be.enabled').click({force: true}); 
});