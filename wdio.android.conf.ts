import { config as sharedConfig } from './wdio.shared.conf.ts';

export const config = {
    ...sharedConfig,
    services: [
        [
            'appium',
            {
                command: 'appium',
                args: {
                    debugLogSpacing: true,
                    sessionOverride: true,
                    hostname: 'localhost',
                    port: 4723,
                    allowInsecure: 'chromedriver_autodownload'
                }
            }
        ],
        'shared-store'
    ],
    path: '/wd/hub',
    capabilities: [{
        platformName: 'Android',
        browserName: 'Chrome',
        'appium:deviceName': 'Emulator',
        'appium:platformVersion': '13.0',
        'appium:automationName': 'UiAutomator2'
    }],
};
