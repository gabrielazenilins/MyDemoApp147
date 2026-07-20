import { BasePage } from "./base.page";

class ProductsPage extends BasePage {

    get_img_produto(index) {
        return driver.$(
            `-android uiautomator:new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV").instance(${Number(index)})`
        );
    }

    async selecionarProduto(index) {

        const produto = this.get_img_produto(index);

        await produto.scrollIntoView();

        await produto.click();
    }
}

export const productsPage = new ProductsPage();