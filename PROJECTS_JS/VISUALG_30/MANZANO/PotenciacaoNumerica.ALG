ALGORITMO "PotenciacaoNumerica"

VAR
    exponenciado, expoente, contador, resultado: INTEIRO

INICIO
    ESCREVAL("DIGITE O VALOR DO EXPONENCIADO: ")
    LEIA(exponenciado)

    ESCREVAL("DIGITE O VALOR DO EXPOENTE: ")
    LEIA(expoente)

    resultado <- 1

    PARA contador DE 1 ATE expoente PASSO 1 FACA
        resultado <- resultado * exponenciado
        ESCREVAL(exponenciado, "^", contador, " = ", resultado)
    FIMPARA
FIMALGORITMO