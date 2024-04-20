ALGORITMO "CalculoProdutos"
VAR
    primeiroValor, segundoValor, terceiroValor, quartoValor: INTEIRO

FUNCAO calcularProduto(valor1, valor2: INTEIRO): INTEIRO
INICIO
    RETORNE valor1 * valor2
FIMFUNCAO

FUNCAO calcularSoma(valor1, valor2: INTEIRO): INTEIRO
INICIO
    RETORNE valor1 + valor2
FIMFUNCAO

INICIO
    ESCREVA("DIGITE O PRIMEIRO VALOR: ")
    LEIA(primeiroValor)

    ESCREVA("DIGITE O SEGUNDO VALOR: ")
    LEIA(segundoValor)

    ESCREVA("DIGITE O TERCEIRO VALOR: ")
    LEIA(terceiroValor)

    ESCREVA("DIGITE O QUARTO VALOR: ")
    LEIA(quartoValor)

    ESCREVA("RESULTANTE DO PRODUTO DO 1 COM O 3 VALOR: ", calcularProduto(primeiroValor, terceiroValor))
    ESCREVA("RESULTANTE DA SOMA DO 2 COM O 4 VALOR: ", calcularSoma(segundoValor, quartoValor))
FIMALGORITMO