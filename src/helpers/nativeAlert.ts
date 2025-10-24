const selectors = {
  ANDROID: {
    ALERT_TITLE:
      '*//android.widget.TextView[@resource-id="android:id/alertTitle"]',
    ALERT_MESSAGE:
      '*//android.widget.TextView[@resource-id="android:id/message"]',
    ALERT_BUTTON: '*//android.widget.Button[@text="{BUTTON_TEXT}"]',
  },
  IOS: {
    ALERT: '-ios predicate string:type == \'XCUIElementTypeAlert\'',
  },
};

/**
 * Wait for the alert to exist
 */
export async function waitForIsShown(isShown: boolean = true) {
  const selector = browser.isAndroid
    ? selectors.ANDROID.ALERT_TITLE
    : selectors.IOS.ALERT;
  await $(selector)
    .waitForExist({ timeout: 5000, reverse: !isShown });
}
