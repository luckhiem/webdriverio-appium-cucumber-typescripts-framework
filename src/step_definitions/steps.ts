import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'

import GooglePage from '../pageobjects/google.page';
import HomePage from '../pageobjects/home.page';
import ConfigLoader from '../env/configLoader';

// Usage
const config = ConfigLoader.loadConfig();

/**
 * Step definition for interacting with the Google and Elfie website.
 */
Given(/^I am on the Google homepage$/, async () => {
    await browser.url(config.googleURL);
});

When(/^I search for "(.*)"$/, async (keyword: string) => {
    await GooglePage.search(keyword);
});

When(/^I click on the first search result$/, async () => {
    await GooglePage.clickFirstResult();
});

Then(/^the logo should be displayed$/, async () => {
    await HomePage.verifyLogoDisplayed();
    await browser.saveScreenshot('./screenshot/logo-step.png');
});

When(/^I click on the hamburger menu$/, async () => {
    await HomePage.clickHamburgerMenu();
});

When(/^I accept cookie promt if it displayed$/, async () => {
    await HomePage.acceptCookiePromt();
});

When(/^I click close the hamburger menu$/, async () => {
    await HomePage.clickCloseHamburgerMenu();
});

Then(/^the hamburger menu should change to "X"$/, async () => {
    await HomePage.verifyHamburgerMenuChanged();
    await browser.saveScreenshot('./screenshot/hamburger-to-x-step.png');
});

Then(/^the home page should be displayed$/, async () => {
    expect(await HomePage.isHomePageDisplayed()).toBeTruthy
});

Then(/^I scroll to the bottom$/, async () => {
    await HomePage.scrollToBottom();
});

Then(/^I should see the copyright text "(.*)"$/, async (text: string) => {
    const copyrightText = await HomePage.getCopyrightText();
    await browser.saveScreenshot('./screenshot/copyright-step.png');
    expect(copyrightText).toBe(text)
});

