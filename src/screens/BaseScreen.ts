/**
 * BaseScreen
 *
 * @class BaseScreen
 */
export class BaseScreen {
  public readonly selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  /**
   * Wait for the login screen to be visible
   *
   * @param {boolean} isShown
   * @return {boolean}
   */
  public waitForIsShown(isShown: boolean = true): any {
    return $(this.selector)
      .waitForDisplayed({timeout: '30000', reverse: !isShown});
  }

  public async isShown(): Promise<boolean> {
    return await $(this.selector)
      .isDisplayed();
  }
}
