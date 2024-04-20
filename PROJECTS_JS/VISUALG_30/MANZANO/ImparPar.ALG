ALGORITMO "ImparPar"
VAR
    numero: INTEIRO

INICIO
    ESCREVA("DIGITE O NUMERO A SER PROCESSADO: ")
    LEIA(numero)

    SE numero MOD 2 = 0 ENTAO
        ESCREVA("O NUMERO ", numero, " E PAR")
    SENAO
        ESCREVA("O NUMERO ", numero, " E IMPAR")
    FIMSE
FIMALGORITMO