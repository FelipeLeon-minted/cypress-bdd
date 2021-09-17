import {Given, When, defineStep, Then} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pages/HomePage";
const homePage = new HomePage();

Given('I visit the homepage', () => {
    homePage.initialGoToHomePage();
})

When('I go to login page', () => {
    homePage.goToLoginPage();
})

defineStep('I go to my account page', () => {
    homePage.goToAccountDetails();
})

defineStep('I logout from my account', () => {
    homePage.goToAccountDetails();
})

Then('I verify I\'m logged out', () => {
    homePage.verifyUserNotLoggedIn();
})
