ALGORITMO "PrestacaoAtrasada"
VAR
    valorInicial, percentualTaxa, taxaAdicional, valorTotal: REAL
    tempoAtraso: INTEIRO

FUNCAO calculaTaxaAdicional(percentualTaxa, valor: REAL, tempo: INTEIRO): REAL
INICIO
    RETORNE (valor * (percentualTaxa / 100)) * tempo
FIMFUNCAO

INICIO
    ESCREVA("DIGITE O VALOR INICIAL DA PRESTACAO: R$")
    LEIA(valorInicial)

    ESCREVA("DIGITE O PERCENTUAL DE TAXA: ")
    LEIA(percentualTaxa)

    ESCREVA("DIGITE O TEMPO ATRASADO (D): ")
    LEIA(tempoAtraso)

    taxaAdicional <- calculaTaxaAdicional(percentualTaxa, valorInicial, tempoAtraso)
    valorTotal <- valorInicial + taxaAdicional

    ESCREVA("VALOR DA PRESTACAO A SER PAGA EM ATRASO: R$", valorTotal)
FIMALGORITMO