ALGORITMO "ReajusteSalario"
VAR
    salarioAtual, percentualReajuste, salarioReajustado: REAL
    valorReajuste: REAL

FUNCAO calculaValorReajuste(salarioAtual, percentualReajuste: REAL): REAL
INICIO
    RETORNE (percentualReajuste / 100) * salarioAtual
FIMFUNCAO

INICIO
    ESCREVA("DIGITE O SALARIO ATUAL: R$ ")
    LEIA(salarioAtual)

    ESCREVA("DIGITE O PERCENTUAL DE REAJUSTE: ")
    LEIA(percentualReajuste)

    valorReajuste <- calculaValorReajuste(salarioAtual, percentualReajuste)
    salarioReajustado <- salarioAtual + valorReajuste

    ESCREVA("SALARIO REAJUSTADO: R$ ", salarioReajustado)
FIMALGORITMO