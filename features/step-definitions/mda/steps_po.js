import { Given, When, Then } from "@wdio/cucumber-framework";
import { productsPage } from "../../pageobjects/mda/products.page";
import { productDetails } from "../../pageobjects/mda/product.details.page";
import { cartPage } from "../../pageobjects/mda/cart.page";

Given("que abro o MyDemoApp", async () => {
    const img_produto = productsPage.get_img_produto(0);
    await expect(img_produto).toBeDisplayed();
});

When(
    "seleciono o produto na {string} e altero a quantidade para {string}",
    async (posicao, quantidade) => {

        await productsPage.selecionarProduto(Number(posicao));

        await expect(productDetails.lbl_titulo_produto).toBeDisplayed();

        await productDetails.alteroQuantidadePara(Number(quantidade));
    }
);

When("adiciono o produto ao carrinho", async () => {
    await productDetails.clicoAdicionarCarrinho();
});

When("volto para o catalogo", async () => {
    await productDetails.voltoParaCatalogo();
});

Then("acesso o carrinho de compras", async () => {
    await productDetails.icon_carrinho.click();
});

Then("valido no carrinho o produto {string} com nome {string} e quantidade {string}",
    async (indice, nome_produto, quantidade) => {
        const idx = parseInt(indice);
        const el_nome = await cartPage.get_lbl_nome_produto(idx);
        const el_quantidade = await cartPage.get_lbl_quantidade_produto(idx);
        await expect(el_nome).toHaveText(nome_produto);
        await expect(el_quantidade).toHaveText(quantidade);
    }
);
Then(
    "valido o preço total {string}",
    async (preco_total) => {

        await expect(cartPage.lbl_preco_total).toHaveText(preco_total);
    }
);
Then("clico em proceed to checkout", async () => {
    await cartPage.btn_finalizar_compra.click();
});