import { BasePage } from "./base.page";
 
class ProductDetails extends BasePage {
    get lbl_titulo_produto() {
        return driver.$("id:com.saucelabs.mydemoapp.android:id/productTV");
    }
 
    get lbl_preco_produto() {
        return driver.$("id:com.saucelabs.mydemoapp.android:id/priceTV");
    }
}
 
export const productDetails = new ProductDetails();