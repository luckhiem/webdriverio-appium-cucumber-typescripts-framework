# webdriverio-appium-cucumber-typescripts-framework
This project is a test automation framework built using WebdriverIO (WDIO), TypeScript, Appium, and Cucumber. It supports mobile application testing on both Android and iOS platforms.

## Frameworks:

- WebdriverIO v8
- Cucumber v8

## Features:
- Typescript v5
- Page Object Pattern
- Prettier
- Crossbrowser parallel execution
- Appium
- Docker service
- Share data serice
- Reporting
  - Allure
  - Spec
- Github actions for Github repository
- Docker compose for setting up the docker hub
- Log mechansim

## Test execution:
- Checkout the codebase
- Install the packages using npm install
- Run the tests by using `npm run test-android` or `npm run test-ios` Please refer the `package.json` scripts.

## Report
This project uses Allure for reporting. After running tests, generate and open the report with:
```
allure generate ./allure-results --clean
allure open
```
## Configuration
- Example Android Configuration:
```
capabilities: [{
    platformName: 'Android',
    deviceName: 'Pixel_4_API_30',
    app: '/path/to/app.apk',
    automationName: 'UiAutomator2',
}]
```
- Example iOS Configuration:
```
capabilities: [{
    platformName: 'iOS',
    deviceName: 'iPhone 13',
    app: '/path/to/app.ipa',
    automationName: 'XCUITest',
}]
```

