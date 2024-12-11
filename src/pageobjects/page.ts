import { browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

/**
 * Main page object containing all methods, selectors, and functionality
 * that is shared across all page objects.
 */
export default class Page {
  /**
   * Opens a subpage of the page.
   * @param {string} path - The path of the subpage (e.g., /path/to/page.html)
   * @returns {Promise<void>} - A promise that resolves when the URL is opened
   */
  public open(path: string) {
    return browser.url(path);
  }

  /**
   * Retrieves the text content of the specified element.
   * @param {ChainablePromiseElement} element - The element to get the text from
   * @returns {Promise<string>} - The text content of the element
   */
  public getText = async (element: ChainablePromiseElement): Promise<string> => {
    await element.waitForDisplayed({ timeout: 60000 });
    const text = await element.getText();
    return text.trim();
  };

  /**
   * Clicks the specified element.
   * @param {WebdriverIO.Element} element - The element to be clicked
   * @returns {Promise<void>} - A promise that resolves when the click is complete
   */
  public clickElement = async (element: WebdriverIO.Element): Promise<void> => {
    await element.waitForDisplayed({ timeout: 60000 });
    element.click();
  };

  /**
   * Checks whether the specified element is displayed within the given timeout.
   * @param {ChainablePromiseElement} element - The element to check
   * @param {number} timeout - The timeout in milliseconds
   * @returns {Promise<boolean>} - A promise that resolves to true if the element is displayed, otherwise false
   */
  public isDisplayed = async (element: ChainablePromiseElement, timeout: number): Promise<boolean> => {
    await element.waitForDisplayed({ timeout: timeout });
    return await element.isDisplayed();
  };

  /**
   * Checks if the specified element exists.
   * @param {WebdriverIO.Element} element - The element to check
   * @returns {Promise<boolean>} - A promise that resolves to true if the element exists, otherwise false
   */
  public isExists = async (element: WebdriverIO.Element): Promise<boolean> => {
    await element.waitForDisplayed({ timeout: 60000 });
    return await element.isExisting();
  };

  /**
   * Checks if the specified element is selected.
   * @param {WebdriverIO.Element} element - The element to check
   * @returns {Promise<boolean>} - A promise that resolves to true if the element is selected, otherwise false
   */
  public isSelected = async (element: WebdriverIO.Element): Promise<boolean> => {
    await element.waitForDisplayed({ timeout: 60000 });
    return await element.isSelected();
  };

  /**
   * Retrieves the value of the specified attribute from the element.
   * @param {WebdriverIO.Element} element - The element to retrieve the attribute from
   * @param {string} attributeName - The name of the attribute to retrieve
   * @returns {Promise<string>} - A promise that resolves to the value of the attribute
   */
  public async getAttributeValue(element: WebdriverIO.Element, attributeName: string): Promise<string> {
    await element.waitForDisplayed({ timeout: 60000 });
    return await element.getAttribute(attributeName);
  }

  /**
   * Scrolls to the full height of the page.
   * @returns {Promise<void>} - A promise that resolves when the scrolling is completed
   * @private
   */
  private async scrollToFullHeight(): Promise<void> {
    await browser.execute(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  /**
   * Retrieves the height of the page.
   * @returns {Promise<number>} - A promise that resolves to the height of the page
   * @private
   */
  private async getPageHeight(): Promise<number> {
    return await browser.execute(() => {
      return document.body.scrollHeight;
    }) || 0;
  }

  /**
   * Scrolls the page to the bottom, loading content if necessary.
   * @returns {Promise<void>} - A promise that resolves when the page has been scrolled to the bottom
   */
  async scrollToBottomPage(): Promise<void> {
    let pageHeightBeforeScroll = await this.getPageHeight();
    let scroll = true;
    while (scroll) {
      await this.scrollToFullHeight();
      await this.waitForLoadPageCompleted();
      await browser.pause(2000);  // Waits for 2 seconds
      const pageHeightAfterScroll = await this.getPageHeight();
      if (pageHeightAfterScroll > pageHeightBeforeScroll) {
        pageHeightBeforeScroll = pageHeightAfterScroll;
      } else {
        scroll = false;
      }
    }
  }

  /**
   * Waits for the page to load completely.
   * @returns {Promise<void>} - A promise that resolves when the page is fully loaded
   * @private
   */
  private async waitForLoadPageCompleted(): Promise<void> {
    await browser.waitUntil(async () => {
      const readyState = await browser.execute(() => {
        return document.readyState;
      });
      return readyState === 'complete';
    }, { timeout: 5000, timeoutMsg: 'Page did not load within 5 seconds' });
  }
}
