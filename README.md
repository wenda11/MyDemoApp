# My-Demo-App-tests

The test cases are located in src/features/testCases.feature.
This repository consists of three automated test cases for My Demo App, which is located in the /apps directory.

Steps for each test are defined in src/steps/steps.ts.
In src/screens, you can find files for the main screens with defined selectors for the elements used in the tests.

At the moment, the tests cover only the Android version of the application due to time constraints. However, the repository is prepared for both iOS and Android.

# Setup Requirements

Install node

Install Xcode

Install Android studio

Setup ANDROID_HOME and JAVA_HOME paths

Install Appium + WebdriverIO

(Optional) Install and setup Appium inspector (capability builder) - looking up selectors for elements

Setup tconfig and wdio.conf

Setup wdio.android.conf files using Appium inspector (capability builder)

# To enable iOS testing:

Set up wdio.ios.conf.ts

Update selectors as needed

# How to run test

Run the tests with the following command: "npm run test:android"
