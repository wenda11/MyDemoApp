export interface PlatformSelectors {
  ios: string;
  droid: string;
}

export function define(ios: string, droid: string): PlatformSelectors {
  return { ios: ios, droid: droid };
}

export function use(selectors: PlatformSelectors): string {
  if (browser.isAndroid) {
    return selectors.droid;
  }

  return selectors.ios;
}

export function resourceIdSelector(resourceId: string) {
  return `android=new UiSelector().resourceId("${resourceId}")`;
}

export function androidTextSelector(text: string) {
  return `android=new UiSelector().text("${text}")`;
}

export function iOSTextSelector(text: string) {
  return iOSPredicate(`label == '${text}' OR value == '${text}'`);
}

export function textSelector(text: string): PlatformSelectors {
  return {
    ios: iOSTextSelector(text),
    droid: androidTextSelector(text),
  };
}

/**
 * https://github.com/facebookarchive/WebDriverAgent/wiki/Predicate-Queries-Construction-Rules
 * @param predicateString the predicate string
 */
export function iOSPredicate(predicateString: string) {
  return `-ios predicate string:${predicateString}`;
}
