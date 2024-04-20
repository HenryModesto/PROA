ALGORITMO "AreaCirculo"
VAR
    raio: REAL

FUNCAO retornaArea(raio: REAL): REAL
INICIO
    RETORNE (raio * raio * PI)
FIMFUNCAO

INICIO
    ESCREVA("DIGITE O RAIO DA CIRCUNFERENCIA: ")
    LEIA(raio)

    ESCREVA("AREA DA CIRCUNFERENCIA: ", retornaArea(raio))
FIMALGORITMO