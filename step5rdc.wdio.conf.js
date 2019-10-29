const rdcOptions = {
    // protocol: 'https',
    // host: 'app.testobject.com',
    // port: 443,
    // path: '/api/appium/wd/hub',

    capabilities: [{
        testobject_api_key: process.env.SDTESTOBJECT_API_KEY,
        platformName: 'Android',
        browserName: 'Chrome',
        platformVersion: '7',
        name: 'sdla'
        //privateDevicesOnly: 'true'
        //deviceOrientation: 'portrait', or 'landscape'
        //deviceType: 'phone' or 'tablet'
        //appiumVersion: specify version or will use default version
        //platformName: 'iPhone.*' - any iPhone
        //testobject_device: process.env.TESTOBJECT_DEVICE,
        // testobject_appium_version: process.env.TESTOBJECT_APPIUM_VERSION,
    
    }

    ]
}
{
exports.config = {
    ...rdcOptions,
    runner: 'local',
    region: 'us',
    specs: ['./test/specs/**/*.js'],
    exclude: [],
    maxInstances: 10,
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {ui: 'bdd', timeout: 60000},
    services: ['Sauce'],


}

}
