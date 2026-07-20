// Steps do PageObject

import { Given, When, Then } from "@wdio/cucumber-framework";
import { productsPage } from "../../pageobjects/mda/products.page";
import { productDetails } from "../../pageobjects/mda/product.details.page";
 
Given("que abro o MyDemoApp", async () => {
    const img_produto = productsPage.get_img_produto(0);
    await expect(img_produto).toBeDisplayed();
});
 
When("seleciono o produto na {string}", async (posicao) => {
    await productsPage.get_img_produto(posicao).click();
});
 
Then("exibe a pagina de detalhe com o {string}", async (nome_produto) => {
    const lbl_nome_produto = productDetails.lbl_titulo_produto;
    await expect(lbl_nome_produto).toHaveText(nome_produto);
});
 
Then("o {string}", async (preco_produto) => {
    await productDetails.arrastaParaCima();
    const lbl_preco_produto = productDetails.lbl_preco_produto;
    await expect(lbl_preco_produto).toHaveText(preco_produto); 
});