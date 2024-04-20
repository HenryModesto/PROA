ALGORITMO "CelsiusFahrenheit"
VAR
    temperaturaCelsius, temperaturaFahrenheit: REAL

FUNCAO converteCelsiusParaFahrenheit(celsius: REAL): REAL
{ Esta função converte uma temperatura de graus Celsius para Fahrenheit. }
INICIO
    RETORNE ((9 * celsius) + 160) / 5
FIMFUNCAO

INICIO
    ESCREVA("DIGITE A TEMPERATURA EM CELSIUS: ")
    LEIA(temperaturaCelsius)

    temperaturaFahrenheit <- converteCelsiusParaFahrenheit(temperaturaCelsius)

    ESCREVA("TEMPERATURA EM FAHRENHEIT: ", temperaturaFahrenheit)
FIMALGORITMO