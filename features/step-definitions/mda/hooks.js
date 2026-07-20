import { Before, After } from "@wdio/cucumber-framework";

Before(async () => {

    await driver.terminateApp(
        "com.saucelabs.mydemoapp.android"
    );

    await driver.activateApp(
        "com.saucelabs.mydemoapp.android"
    );

    await driver.pause(2000);
});

After(async () => {

    await driver.terminateApp(
        "com.saucelabs.mydemoapp.android"
    );
});