ALGORITMO "Aprovacao"
VAR
    notas, soma, media: REAL
    contador: INTEIRO

INICIO
    soma <- 0

    PARA contador DE 1 ATE 4 PASSO 1 FACA
        ESCREVA("DIGITE A ", contador, " NOTA: ")
        LEIA(notas)
        soma <- soma + notas
    FIMPARA

    media <- soma / 4

    SE media >= 5 ENTAO
        ESCREVA("ALUNO APROVADO COM MEDIA ", media)
    SENAO
        ESCREVA("ALUNO REPROVADO COM MEDIA ", media)
    FIMSE
FIMALGORITMO