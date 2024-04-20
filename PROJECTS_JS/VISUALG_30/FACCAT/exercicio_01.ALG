ALGORITMO "exercicio_01"

VAR
   valorA, valorB, auxiliar : inteiro

INICIO
   // Inicializa os valores de valorA e valorB
   valorA <- 10
   valorB <- 20

   // Troca os valores de valorA e valorB usando uma variável auxiliar
   auxiliar <- valorB
   valorB <- valorA
   valorA <- auxiliar

   // Exibe os novos valores de valorA e valorB
   ESCREVA("VALOR A: " , valorA)
   ESCREVA("VALOR B: " , valorB)

FIMALGORITMO