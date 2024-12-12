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
        platformName: 'iOS',
        browserName: 'Chrome',
        'appium:deviceName': 'iPhone 13 Pro Max',
        'appium:platformVersion': '18.0.1',
        'appium:automationName': 'xcuitest'
    }],
};
