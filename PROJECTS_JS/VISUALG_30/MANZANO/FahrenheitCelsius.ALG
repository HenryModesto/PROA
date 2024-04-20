ALGORITMO "FahrenheitCelsius"
VAR
    temperaturaFahrenheit, temperaturaCelsius: REAL

INICIO
    ESCREVA("DIGITE A TEMPERATURA EM FAHRENHEIT: ")
    LEIA(temperaturaFahrenheit)

    temperaturaCelsius <- ((temperaturaFahrenheit - 32) * 5) / 9

    ESCREVA("TEMPERATURA EM CELSIUS: ", temperaturaCelsius)
FIMALGORITMO