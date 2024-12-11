import { $ } from '@wdio/globals';
import Page from './page';

/**
 * Page object representing the Google search page.
 */
class HomePage extends Page {
    /**
     * Get the logo element.
     */
    get logo() {
        return $('.header-logo');
    }

    /**
     * Get the hamburger menu element.
     */
    get hamburgerMenu() {
        return $('div[aria-label="menu"]');
    }

    /**
     * Get the hero section container element.
     */
    get heroSectionContainer() {
        return $('.main-hero-container');
    }

    /**
     * Get the close ("X") button element.
     */
    get closeButton() {
        return $('.menu-button.w-nav-button.w--open');
    }

    /**
     * Get the copyright text element.
     */
    get copyrightText() {
        return $('.footer-content-bottom .text-block');
    }

    /**
     * Get the accept all cookies button element.
     */
    get acceptAllCookieButton() {
        return $('//button[@aria-label="Accept All"][@data-cky-tag="accept-button"]');
    }

    /**
     * Verify that the logo is displayed on the page.
     * @returns {Promise<void>} A promise that resolves when the logo is displayed.
     */
    async verifyLogoDisplayed(): Promise<void> {
        await expect(this.logo).toBeDisplayed();
    }

    /**
     * Click on the hamburger menu.
     * @returns {Promise<void>} A promise that resolves when the hamburger menu is clicked.
     */
    async clickHamburgerMenu(): Promise<void> {
        await this.hamburgerMenu.click();
    }

    /**
     * Click the "Accept All" cookie prompt button if it is displayed.
     * @returns {Promise<void>} A promise that resolves when the cookie button is clicked, if displayed.
     */
    async acceptCookiePromt(): Promise<void> {
        const isButtonDisplayed = await this.isDisplayed(this.acceptAllCookieButton, 5);
        console.log(isButtonDisplayed);
        if (isButtonDisplayed) {
            await this.acceptAllCookieButton.click();
        }
    }

    /**
     * Click on the close hamburger menu button.
     * @returns {Promise<void>} A promise that resolves when the close button is clicked.
     */
    async clickCloseHamburgerMenu(): Promise<void> {
        await this.closeButton.click();
    }

    /**
     * Verify that the hamburger menu changes to a close ("X") button.
     * @returns {Promise<void>} A promise that resolves when the close button is displayed.
     */
    async verifyHamburgerMenuChanged(): Promise<void> {
        await expect(this.closeButton).toBeDisplayed();
    }

    /**
     * Verify that the home page is displayed by checking the hero section container.
     * @returns {Promise<void>} A promise that resolves when the home page is displayed.
     */
    async isHomePageDisplayed(): Promise<void> {
        await this.isDisplayed(this.heroSectionContainer, 30);
    }

    /**
     * Scroll to the bottom of the page.
     * @returns {Promise<void>} A promise that resolves when the page is scrolled to the bottom.
     */
    async scrollToBottom(): Promise<void> {
        await this.scrollToBottomPage();
    }

    /**
     * Retrieve the text of the copyright section.
     * @returns {Promise<string>} A promise that resolves to the copyright text.
     */
    async getCopyrightText(): Promise<string> {
       return await this.getText(this.copyrightText);
    }
}

export default new HomePage();
