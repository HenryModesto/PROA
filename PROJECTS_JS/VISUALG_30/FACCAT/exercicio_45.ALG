ALGORITMO "exercicio_45"

VAR
    valorA, valorB: INTEIRO

FUNCAO divide(valorA, valorB: INTEIRO): REAL
INICIO
    RETORNE valorA / valorB
FIMFUNCAO

INICIO
    ESCREVAL("DIGITE O PRIMEIRO VALOR A SER PROCESSADO: ")
    LEIA(valorA)

    REPITA
        ESCREVAL("DIGITE O SEGUNDO VALOR A SER PROCESSADO: ")
        LEIA(valorB)
    ATE valorB <> 0

    ESCREVAL("RESULTANTE: ", divide(valorA, valorB))
FIMALGORITMO
