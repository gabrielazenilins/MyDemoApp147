import { Given, Then, When, Before, After } from "@wdio/cucumber-framework";
 
Before(async () => {
  await driver.activateApp("com.saucelabs.mydemoapp.android");
});
 
After(async () => {
  await driver.terminateApp("com.saucelabs.mydemoapp.android");
});
 

Given ('que abro o MyDemoApp', async () => {

const img_produto = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.saucelabs.mydemoapp.android:id/productIV\").instance(0)",

); 
await expect (img_produto).toBeDisplayed();
});
When ('seleciono o produto na {string}', async (posicao)=> {

const img_produto = await driver.$(`-android uiautomator:new UiSelector().resourceId(\"com.saucelabs.mydemoapp.android:id/productIV\").instance(${posicao})`,

);
await img_produto.click();
});

Then ('exibe a pagina de detalhe com o {string}',async (nome_produto)=> {
    const lbl_nome_produto = await driver.$("id:com.saucelabs.mydemoapp.android:id/productTV",

    );
      await expect(await lbl_nome_produto.getText()).toEqual(nome_produto,);

});

Then ('o {string}', async (preco_produto)=> {
    await driver.action('pointer')
    .move({ duration: 0, x: 601, y: 1948 })
    .down({ button: 0 }) 
    .move({ duration: 1000, x: 623, y: 847 })
    .up({ button: 0 }) 
    .perform(); 
    const lbl_preco_produto = await driver.$("id:com.saucelabs.mydemoapp.android:id/priceTV",
    );
    await expect(await lbl_preco_produto.getText()).toEqual(preco_produto); 
      await driver.terminateApp("com.saucelabs.mydemoapp.android");
});