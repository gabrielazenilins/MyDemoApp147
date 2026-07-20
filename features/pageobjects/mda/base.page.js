export class BasePage {
    async roloAteElemento(resourceId, instance = 0) {
        const seletor = `-android uiautomator:new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("${resourceId}").instance(${instance}))`;
        const elemento = driver.$(seletor);
        await elemento.waitForDisplayed({ timeout: 15000 });
        return elemento;
    }

    async abroMenu(){
        const btn_menu = driver.$("id:com.saucelabs.mydemoapp.android:id/menuIV");
        await btn_menu.click();
    }

    async clicoItemMenu(texto){
        const item_menu = driver.$(
            `-android uiautomator:new UiSelector().text("${texto}")`
        );
        await item_menu.click();
    }

    async voltoParaCatalogo(){
        await this.abroMenu();
        await this.clicoItemMenu("Catalog");
    }
}