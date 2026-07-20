import { BasePage } from "./base.page";

class CartPage extends BasePage {

    async get_lbl_nome_produto(index) {
        return this.roloAteElemento(
            "com.saucelabs.mydemoapp.android:id/titleTV",
            index
        );
    }

    async get_lbl_quantidade_produto(index) {
        return this.roloAteElemento(
            "com.saucelabs.mydemoapp.android:id/noTV",
            index
        );
    }

    get lbl_preco_total() {
        return driver.$(
            "id:com.saucelabs.mydemoapp.android:id/totalPriceTV"
        );
    }

    get btn_finalizar_compra() {
        return driver.$(
            "id:com.saucelabs.mydemoapp.android:id/cartBt"
        );
    }
}

export const cartPage = new CartPage();