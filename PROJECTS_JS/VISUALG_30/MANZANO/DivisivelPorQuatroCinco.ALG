ALGORITMO "DivisivelPorQuatroCinco"
VAR
    entrada: INTEIRO

INICIO
    ESCREVA("DIGITE O NUMERO A SER VERIFICADO: ")
    LEIA(entrada)

    SE (entrada MOD 4 = 0) E (entrada MOD 5 = 0) ENTAO
        ESCREVA("O NUMERO ", entrada, " E DIVISIVEL POR 4 E 5")
    SENAO
        ESCREVA("O NUMERO ", entrada, " NAO E DIVISIVEL POR 4 E 5")
    FIMSE
FIMALGORITMO