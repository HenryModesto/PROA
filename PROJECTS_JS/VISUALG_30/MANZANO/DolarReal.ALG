ALGORITMO "DolarReal"
VAR
    quantidadeDolar, cotacao, valorEmReal: REAL

INICIO
    ESCREVA("DIGITE O VALOR OBTIDO EM DOLAR: U$ ")
    LEIA(quantidadeDolar)

    ESCREVA("DIGITE O VALOR DA COTACAO ATUAL PARA O REAL: R$ ")
    LEIA(cotacao)

    valorEmReal <- quantidadeDolar * cotacao

    ESCREVA("ADJACENCIA DA CONVERSAO EM REAIS: R$ ", valorEmReal)
FIMALGORITMO