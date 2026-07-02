// This sample code supports WebdriverIO client >=9.7.0
// (npm i --save webdriverio)
// Then paste this into a .js file and run with Node:
// node <file>.js
 
import {remote,} from 'webdriverio';
import {expect} from 'expect-webdriverio';
async function main () {
  const caps = {
  "platformName": "Android",
  "appium:platformVersion": "16.0",
  "appium:deviceName": "Google Pixel 6 Emulator",
  "appium:deviceOrientation": "portrait",
  "appium:app": 'storage:filename=mda-2.2.0-25.apk',
  "appium:appPackage": "com.saucelabs.mydemoapp.android",
  "appium:appActivity": "com.saucelabs.mydemoapp.android.view.activities.SplashActivity",
  "appium:automationName": "UiAutomator2",
  "browserName": "",
  "appium:ensureWebviewsHavePages": true,
  "appium:nativeWebScreenshot": true,
  "appium:newCommandTimeout": 3600,
  "appium:connectHardwareKeyboard": true,
  "wdio:enforceWebDriverClassic": true,
  "unhandledPromptBehavior": "ignore"
}
  const driver = await remote({
    user: process.env.SAUCEUSER,
    key: process.env.SAUCEKEY,
    protocol: "https",
    hostname: "ondemand.us-west-1.saucelabs.com",
    port: 443,
    baseUrl: "wd/hub",
    capabilities: caps
  });
  
  const img_produto = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.saucelabs.mydemoapp.android:id/productIV\").instance(0)"); // abre o app
  await img_produto.click(); //clica no produto
  const lbl_nome_produto = await driver.$("id:com.saucelabs.mydemoapp.android:id/productTV");
  await expect(await lbl_nome_produto.getText()).toEqual("Sauce Labs Backpack");//transformar em uma validacao
  const lbl_preco_produto = await driver.$("id:com.saucelabs.mydemoapp.android:id/priceTV");
  await expect(await lbl_preco_produto.getText()).toEqual("$ 29.99"); //transformar em uma validacao
  await driver.action('pointer')
    .move({ duration: 0, x: 601, y: 1948 })
    .down({ button: 0 }) //manter o dedo na tela/clicar
    .move({ duration: 1000, x: 623, y: 847 })
    .up({ button: 0 }) //solta o dedo na tela
    .perform(); //é o que faz ele executar
  await driver.deleteSession();
}
 
main().catch(console.log);