import { Given,When,Then } from "@cucumber/cucumber";
import { LoginPage } from "../pages/loginPage";
import {chromium,Browser,Page} from 'playwright';

let browser: Browser;
let page:Page;
let loginPage :LoginPage;

Given('Launch Application', async function () {
    browser = await chromium.launch({
        headless:false
    });
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    await loginPage.navigate();
    console.log("Launch")
   
});

When('Enter the username {string} and password {string}', async function (user, pass) {
    await loginPage.login(user,pass);
});

When('Click the login button', async function () {
    await loginPage.loginButton();
});

Then('Validate the HomePage', async function () {
   await console.log("home page")
});