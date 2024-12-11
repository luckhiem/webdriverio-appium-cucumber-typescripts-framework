import { $ } from '@wdio/globals'
import Page from './page';
/**
 * Page object representing the Google search page.
 */
class GooglePage extends Page {
    /**
     * Get the search box element.
     */
    get searchBox() {
        return $('textarea[name="q"]');
    }

    /**
     * Get the first search result element for "Elfie".
     */
    get firstResult() {
        return $$('//div[@data-async-context]//a[@role][@href]')[0];
    }

    /**
     * Perform a search for the given keyword on Google.
     * @param {string} keyword - The search term to search for.
     */
    async search(keyword: string) {
        await this.searchBox.waitForDisplayed();
        await this.searchBox.setValue(keyword);
        await browser.keys('Enter');
    }

    /**
     * Click on the first search result.
     */
    async clickFirstResult() {
        await this.firstResult.waitForDisplayed();
        await this.firstResult.click();
    }
}

export default new GooglePage();
