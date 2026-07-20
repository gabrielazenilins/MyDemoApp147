Feature: Comprar produto

Scenario Outline: Comprar produto com sucesso
Given que abro o MyDemoApp
When seleciono o produto na "<posicao>"
Then exibe a pagina de detalhe com o "<nome_produto>"
And o "<preco_produto>"







Examples:
| posicao |      nome_produto         | preco_produto|
|    0    | Sauce Labs Backpack       |    $ 29.99    |
|    3    | Sauce Labs Backpack (red) |    $ 29.99    |