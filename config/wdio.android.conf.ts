import { config as base } from './wdio.conf.ts';

export const mobilePlatform = 'ANDROID';

export const config = {
  ...base,
  cucumberOpts: {
    ...base.cucumberOpts,
    require: [
      ...(base.cucumberOpts?.require ?? []),
      './src/steps/**.ts',
    ],
  },
  specs: [
    '/Users/test/Downloads/My Demo App tests/src/features/testCases.feature'
  ],
  capabilities: [
    {
  "platformName": "Android",
  "appium:maxInstances": 1,
  "appium:deviceName": "Pixel_9",
  "appium:platformVersion": "16.0",
  "appium:orientation": "PORTRAIT",
  "appium:automationName": "UiAutomator2",
  "appium:app": "./apps/app-debug.apk",
  "appium:fullReset": true,
  "appium:newCommandTimeout": 30000,
  "appium:appPackage": "com.saucelabs.mydemoapp.android",
  "appium:appActivity": "com.saucelabs.mydemoapp.android/.view.activities.SplashActivity",
  "appium:avd": "Pixel_9",
  "appium:avdArgs": "-no-audio -no-snapshot-save -no-boot-anim -camera-back none -camera-front none",
  "appium:avdLaunchTimeout": "300000",
  "appium:avdReadyTimeout": "300000",
  "appium:language": "en",
  "appium:locale": "GB"
},
  ],
};
