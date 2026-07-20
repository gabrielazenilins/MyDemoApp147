Feature: Comprar produto

Scenario Outline: Comprar dois produtos com quantidades diferentes
Given que abro o MyDemoApp
When seleciono o produto na "<posicao1>" e altero a quantidade para "<quantidade1>"
And adiciono o produto ao carrinho
And volto para o catalogo
And seleciono o produto na "<posicao2>" e altero a quantidade para "<quantidade2>"
And adiciono o produto ao carrinho
When acesso o carrinho de compras
Then valido no carrinho o produto "0" com nome "<nome1>" e quantidade "<quantidade1>"
And valido no carrinho o produto "1" com nome "<nome2>" e quantidade "<quantidade2>"
And valido o preço total "<preco_total>"
And clico em proceed to checkout

Examples:
| posicao1 |            nome1            | quantidade1 | posicao2 |            nome2            | quantidade2 | preco_total |
|    0     |     Sauce Labs Backpack     |     2       |    3     | Sauce Labs Backpack (red)   |     3       |   $ 149.95  |
|    3     | Sauce Labs Backpack (red)   |     3       |    2     | Sauce Labs Backpack (orange)|     1       |    $ 119.96 |

