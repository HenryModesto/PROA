ALGORITMO "ValoresDescrecentes"
VAR
    valorA, valorB, diferenca: INTEIRO

INICIO
    ESCREVA("DIGITE O PRIMEIRO VALOR: ")
    LEIA(valorA)

    ESCREVA("DIGITE O SEGUNDO VALOR: ")
    LEIA(valorB)

    diferenca <- ABS(valorA - valorB)

    ESCREVA("A DIFERENCA DO MAIOR VALOR PELO MENOR E: ", diferenca)
FIMALGORITMO