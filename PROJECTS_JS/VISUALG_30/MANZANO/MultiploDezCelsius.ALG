ALGORITMO "MultiploDezCelsius"

FUNCAO converteCelsiusParaFahrenheit(celsius: INTEIRO): REAL
INICIO
    RETORNE ((9 * celsius) + 160) / 5
FIMFUNCAO

VAR 
    contador : INTEIRO

INICIO
    PARA contador DE 1 ATE 10 PASSO 1 FACA
        ESCREVAL(contador * 10, " C = ", converteCelsiusParaFahrenheit(contador * 10), " F")
    FIMPARA
FIMALGORITMO