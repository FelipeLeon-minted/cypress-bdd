/// <reference types="cypress" />

import {Given} from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../pages/LoginPage";
const loginPage = new LoginPage();

Given('I login with {string} and {string}', (username, password) => {
    loginPage.login(username, password);
})

Given('I login with normal user', () => {
    cy.fixture('userLogin').as('userLogin');
    cy.get("@userLogin").then( userLogin => {
        loginPage.login(userLogin.automationUser.username, userLogin.automationUser.password);
    })
})