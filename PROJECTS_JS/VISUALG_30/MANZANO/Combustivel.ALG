ALGORITMO "Combustivel"
VAR
    tempoNecessario, velocidadeMedia: INTEIRO
    litrosNecessarios: REAL

FUNCAO calculaDistancia(tempo, velocidade: INTEIRO): INTEIRO

INICIO
    RETORNE tempo * velocidade
FIMFUNCAO

FUNCAO calculaCombustivelNecessario(distancia, consumoPorQuilometro: REAL): REAL

INICIO
    RETORNE distancia / consumoPorQuilometro
FIMFUNCAO

INICIO
    ESCREVA("DIGITE O TEMPO NECESSARIO (H): ")
    LEIA(tempoNecessario)

    ESCREVA("DIGITE A VELOCIDADE MEDIA (KM): ")
    LEIA(velocidadeMedia)

    litrosNecessarios <- calculaCombustivelNecessario(calculaDistancia(tempoNecessario, velocidadeMedia), 12.0)

    ESCREVA("LITROS NECESSARIOS PARA A VIAGEM: ", litrosNecessarios, " L")
FIMALGORITMO