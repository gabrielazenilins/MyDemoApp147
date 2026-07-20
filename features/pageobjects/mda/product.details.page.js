import { BasePage } from "./base.page";

class ProductDetails extends BasePage {

    get lbl_titulo_produto() {

        return driver.$("id:com.saucelabs.mydemoapp.android:id/productTV"
        );
    }

    get lbl_preco_produto() {

        return driver.$("id:com.saucelabs.mydemoapp.android:id/priceTV"
        );
    }

    get icon_carrinho() {

        return driver.$("id:com.saucelabs.mydemoapp.android:id/cartIV"
        );
    }

    get btn_incrementar_quantidade() {

        return driver.$("id:com.saucelabs.mydemoapp.android:id/plusIV"
        );
    }

    get btn_decrementar_quantidade() {

        return driver.$("id:com.saucelabs.mydemoapp.android:id/minusIV"
        );
    }

    get lbl_quantidade() {

        return driver.$("id:com.saucelabs.mydemoapp.android:id/noTV"
        );
    }

    async alteroQuantidadePara(quantidadeAlvo) {

        await this.lbl_quantidade.waitForDisplayed({
                timeout: 15000
            });

        const quantidadeAtual =parseInt(await this.lbl_quantidade.getText()
            );

        const diferenca =quantidadeAlvo - quantidadeAtual;

        if (diferenca > 0) {

            for (
                let i = 0;
                i < diferenca;
                i++
            ) {

                await this.btn_incrementar_quantidade
                    .click();
            }

        } else if (diferenca < 0) {

            for (
                let i = 0;
                i < Math.abs(diferenca);
                i++
            ) {

                await this.btn_decrementar_quantidade
                    .click();
            }
        }
    }

    async clicoAdicionarCarrinho() {

        const btn =await this.roloAteElemento("com.saucelabs.mydemoapp.android:id/cartBt"
            );

        await btn.click();
    }
}

export const productDetails =
    new ProductDetails();