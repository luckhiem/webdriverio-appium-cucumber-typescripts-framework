

export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    specs: [
        './src/features/**.feature'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    capabilities: [
        {
            browserName: 'chrome',
            acceptInsecureCerts: true,
        },
    ],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results', // Directory where allure results will be stored
            disableWebdriverStepsReporting: true, // Optional: Disable WebDriver commands in steps
            disableWebdriverScreenshotsReporting: false, // Optional: Capture screenshots for failed tests
        }]
    ],
    cucumberOpts: {
        require: ['./src/step_definitions/*.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    }
}
