import {Given, When, And} from "cypress-cucumber-preprocessor/steps";
import MyAccountPage from "../pages/MyAccountPage";
const myAccountPage = new MyAccountPage();

Then('The registered user is {string}', (username) => {
    myAccountPage.emailAddressLabel().should('contain.text', username);
})