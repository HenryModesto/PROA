ALGORITMO "SalarioProfessor"
VAR
    horasTrabalhadas: INTEIRO
    valorHoraTrabalhada, percentualDesconto, salarioBruto, valorDesconto, salarioLiquido: REAL

FUNCAO calculaSalarioBruto(horasTrabalhadas: INTEIRO, valorHoraTrabalhada: REAL): REAL
INICIO
    RETORNE horasTrabalhadas * valorHoraTrabalhada
FIMFUNCAO

FUNCAO calculaValorDesconto(salarioBruto, percentualDesconto: REAL): REAL
INICIO
    RETORNE (percentualDesconto / 100) * salarioBruto
FIMFUNCAO

FUNCAO calculaSalarioLiquido(salarioBruto, valorDesconto: REAL): REAL
INICIO
    RETORNE salarioBruto - valorDesconto
FIMFUNCAO

INICIO
    ESCREVA("DIGITE A QUANTIDADE DE HORAS TRABALHADAS: ")
    LEIA(horasTrabalhadas)

    ESCREVA("DIGITE O VALOR DA HORA TRABALHADA: R$ ")
    LEIA(valorHoraTrabalhada)

    ESCREVA("DIGITE O PERCENTUAL DE CONTRIBUICAO AO INSS: ")
    LEIA(percentualDesconto)

    salarioBruto <- calculaSalarioBruto(horasTrabalhadas, valorHoraTrabalhada)
    valorDesconto <- calculaValorDesconto(salarioBruto, percentualDesconto)
    salarioLiquido <- calculaSalarioLiquido(salarioBruto, valorDesconto)

    ESCREVA("SALARIO LIQUIDO: R$ ", salarioLiquido:0:2, "\nSALARIO BRUTO: R$ ", salarioBruto:0:2, "\nVALOR DESCONTADO: R$ ", valorDesconto:0:2)
FIMALGORITMO