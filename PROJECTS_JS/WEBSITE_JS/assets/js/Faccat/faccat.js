/*EXERCICIO 5
Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor.*/ 
function Antecessor() {
    let numero1 = parseInt(prompt("digite o numero 1: "));

    alert(`o número antecessor de ${numero1} é ${numero1-1}`);
}

/*EXERCICIO 6
Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo.*/ 
function Retangulo() {
    let base = parseInt(prompt("Digite a base do retângulo: "))
    let altura = parseInt(prompt("Digite a altura do retângulo: "))
    let area = base * altura

    alert(`A Área do retângulo é: ${area}`)
}

/*EXERCICIO 7
Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa
expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.*/
function IdadeDias() {
    let idade = parseInt(prompt("Digite sua idade: "))
    let mesversario = parseInt(prompt( "Digite quantos meses fazem desde sua ultimo aniversario: "))
    let dias = parseInt(prompt("Digite quantos dias se passaram em relação ao mês que você nasceu: "))

    let IdadeDias = idade * 365 + mesversario * 30 + dias
    alert(`voce tem ${IdadeDias} dias de vida`)
}

/*EXERCICIO 8
Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e 
válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.*/
function Votos() {
    let numero_total_votos = parseInt(prompt("digite o numero total de votos:"))
    let numero_votos_brancos = parseInt(prompt("digite o numero de votos brancos:"))
    let numero_votos_nulos = parseInt(prompt("digite o numero de votos nulos:") )
    let numero_votos_validos = parseInt(prompt("digite o numero de votos validos:"))

    let votoBrancos = (numero_votos_brancos / numero_total_votos) * 100
    let votosNulos = (numero_votos_nulos / numero_total_votos) * 100
    let votosValidos =(numero_votos_validos / numero_total_votos) * 100

    alert(`o numero de votos brancos representam ${votoBrancos}%`)
    alert(`o numero de votos nulos representam ${votosValidos}%`)
    alert(`o numero de votos validos representam ${votosNulos}%`)
}

/*EXERCICIO 9
Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e 
escrever o valor do novo salário.*/ 
function Reajuste(){
    let salario = parseInt(prompt("Digite seu salário atual: "))
    let percentReajuste = parseInt(prompt("Digite a porcentagem do reajuste: "))

    let reajuste = salario * (1 + percentReajuste / 100)
    alert(`Seu salário reajustado é: ${reajuste}`)
}

/*EXERCICIO 10
10)	O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos 
impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, 
escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.*/ 
function CustoFinal(){
    let custo = parseInt(prompt("Digite o custo de fábrica do carro: "))
    let valorFinal = custo * (28 / 100) + custo * (45 / 100) + custo

    alert(`O valor final com os impostos é: ${valorFinal}`)
}

/*EXERCICIO 11
Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também
fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o
número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor. */
function Revendedora() {
    let numeroCarrosVendidos = parseInt(prompt("Digite o numero de carros vendidos:"));
    let valorTotalVendas = parseInt(prompt("Digite o valor total de vendas"));
    let salarioFixo = parseInt(prompt("Digite o salario fixo:"));
    let valorComissao = parseInt(prompt("Digite o valor recebido por carro vendido:"));
    
    let salarioFinal = salarioFixo + (numeroCarrosVendidos * valorComissao) + (valorTotalVendas * 0.05);
    
    alert("O salario final do funcionario é de R$:" + salarioFinal);
    
}

/*EXERCICIO 12
Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente 
em graus Celsius.*/
function ConverterFa(){
    let celsius, farenheit;

    farenheit = parseFloat(prompt("Digite a Temperatura em Fahrenheit:"));
    celsius = ((farenheit - 32) * 5) / 9;

    alert("Temperatura em Celsius é: " + celsius);
}

/*EXERCICIO 13
Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. Considerar que 
a média é ponderada e que o peso das notas é 2, 3 e 5.*/
function MediaPonderada(){
    let n1 = parseInt(prompt("Digite a primeira nota: "));
    let n2 = parseInt(prompt("Digite a segunda nota: "));
    let n3 = parseInt(prompt("Digite a terceira nota: "));
    let media = (n1*2 + n2*3 + n3*5) / (2 + 3 + 5);

    alert(`A media do aluno é: ${media}`);
}

/*EXERCICIO 14 
Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário 
escrever NÃO É MAIOR QUE 10!.*/
function MaiorQue(){
    let numero = parseInt(prompt("Digite um número: "))

    if (numero > 10) 
        alert("O número é maior que 10!")
    else 
        alert("O número é menor que 10!")
}

/*EXERCICIO 15 
Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).*/
function PositivoNegativo(){
    let numero = parseInt(prompt('Digite um número: '))

    if (numero >= 0)
        alert(`O número ${numero} é positivo!`)
    else
        alert(`O número ${numero} é negativo`)
}

/*EXERCICIO 16 
As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12.
Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra. */
function Maca(){

    let valorCobrado 
    let macas = parseInt(prompt("Digite a Quantidade de Maçã:"));

    if (macas >= 12) {
        valorCobrado = 1.0;
    } else {
        valorCobrado = 1.3;
    }

    alert("Valor Total: " + (macas * valorCobrado));
}

/*EXERCICIO 17
Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever uma mensagem 
que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado).
Escrever também a média calculada. */
function MediaAritmedica(){
    let n1 = parseFloat(prompt("Digite uma nota:"));
    let n2 = parseFloat(prompt("Digite outra nota:"));

    let media = (n1 + n2) / 2;

    if (media >= 6) {
        alert("Aluno Aprovado com média: " + media);
    } else {
        alert("Aluno Reprovado com média: " + media);
    }
}

/*EXERCICIO 18 
Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não 
votar este ano (não é necessário considerar o mês em que a pessoa nasceu). */
function AprovacaoVotar(){
    let anoAtual, anoNascimento, idade;

    anoAtual = parseInt(prompt("Digite o Ano Atual::"));
    anoNascimento = parseInt(prompt("Digite seu Ano de Nascimento:"));

    idade = anoAtual - anoNascimento;

    if (idade >= 18) {
        alert("Você poderá votar esse ano!");
    } else {
        alert("Você não poderá votar esse ano!");
    }
}

/*EXERCICIO 19 
Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.*/
function NumeroMaior() {

    let valorA = parseInt(prompt("Digite um valor"));
    let valorB = parseInt(prompt("Digite outro valor:"));

    if (valorA > valorB) {
        alert("Maior Valor: " + valorA);
    } else {
        alert("Maior Valor: " + valorB);
    }
}

/*EXERCICIO 20
Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente. */
function Crescente(){
 
    let valorA = parseInt(prompt("Digite um Valor::"));
    let valorB = parseInt(prompt("Digite outro valor:"));

    if (valorA > valorB) {
        alert("ORDENACAO: " + valorB + ", " + valorA);
    } else {
        alert("ORDENACAO: " + valorA + ", " + valorB);
    }
}

/*EXERCICIO 21
Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos)
e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o 
jogo pode iniciar em um dia e terminar no dia seguinte. */
function Xadrez(){
    let horaInicio = parseInt(prompt("DIGITE O HORARIO DE INCIO DA PARTIDA:"));
    let horaTermino = parseInt(prompt("DIGITE O HORARIO DE TERMINO DA PARTIDA:"));

    let duracao = horaTermino - horaInicio;

    if (duracao < 0) {
        duracao = duracao + 24;
     }
    alert("DURACAO DA PARTIDA: " + duracao + "h");
}

/*EXERCICIO 22
A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas 
receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um algoritmo que leia 
o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá
ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas). */
function SalarioFuncionario(){
    let horasTrabalhadas, horasExtras, horasMinimo, valorHora;

    horasTrabalhadas = parseInt(prompt("Digite a quantidade de horas trabalhadas: "));
    valorHora = parseFloat(prompt("Digite o valor da hora: R$"));

    horasMinimo = 40 * 4;

    if (horasTrabalhadas > horasMinimo) {
        horasExtras = horasTrabalhadas - horasMinimo;
        horasTrabalhadas = horasMinimo;
    } else {
        horasExtras = 0;
    }

            alert("SALARIO: R$" + ((horasTrabalhadas * valorHora) + (horasExtras * (valorHora * 1.5))));
}

/*EXERCICIO 23
Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule e mostre seu peso ideal, 
utilizando as seguintes fórmulas: */
function PesoIdeal(){
    let pesoIdeal;

    let nome = prompt("Digite seu nome:");
    let sexo = prompt("Digite seu sexo(F/M):");
    let altura = parseFloat(prompt("Digite sua altura(M):"));

    if (sexo === "M") {
        pesoIdeal = (72.7 * altura) - 58;
    } else {
        pesoIdeal = (62.1 * altura) - 44.7;
    }

    alert(nome + ", seu peso ideal é: " + pesoIdeal + "kg");
}

/*EXERCICIO 24
Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele recebe 
uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que ultrapassar este valor, calcular 
e escrever o seu salário total. */
function SalarioVendedor(){
    let comissao;
    let salarioFixo = parseFloat(prompt("Digite o salário fixo: R$"));
    let valorVendas = parseFloat(prompt("Digite o valor total de vendas: R$"));

    if (valorVendas > 1500) {
        comissao = ((1500 / 100) * 3) + ((valorVendas - 1500) / 100 * 5);
    } else {
        comissao = (valorVendas / 100) * 3;
    }

    alert("Pagamento total de: R$" + (salarioFixo + comissao));
}

/*EXERCICIO 25
Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e escrever 
o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero 
escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'*/
function SaldoAtual(){

    let conta = parseInt(prompt("DIGITE NUMERO DA CONTA:"));
    let saldo = parseFloat(prompt("DIGITE O SALDO: R$"));
    let debito = parseFloat(prompt("DIGITE O DEBITO: R$"));
    let credito = parseFloat(prompt("DIGITE O CREDITO: R$"));

    let saldoAtual = saldo - debito + credito;

    if (saldoAtual >= 0) {
        alert("SALDO POSITIVO");
    } else {
        alert("SALDO NEGATIVO");
    }
}

/*EXERCICIO 26
Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e quantidade mínima em 
estoque de um produto. Calcular e escrever a quantidade média ((quantidade média = quantidade máxima + quantidade
mínima)/2). Se a quantidade em estoque for maior ou igual a quantidade média escrever a mensagem 
'Não efetuar compra', senão escrever a mensagem 'Efetuar compra'. */
function EfetuarCompra(){
    let minimo = parseInt(prompt("DIGITE O MINIMO EM ESTOQUE:"));
    let maximo = parseInt(prompt("DIGITE O MAXIMO EM ESTOQUE:"));
    let atual = parseInt(prompt("DIGITE A QUANTIDADE ATUAL EM ESTOQUE:"));

    let media = (maximo + minimo) / 2;

    if (atual >= media) {
        alert("NAO EFETUAR MAIS COMPRAS");
    } else {
        alert("PERMITIDO A EFETUACAO DE COMPRAS");
    }
}

/*EXERCICIO 27
Ler um valor e escrever se é positivo, negativo ou zero. */
function PositivoNegativoZero(){
    let valor, saida;

    valor = parseInt(prompt("DIGITE UM NUMERO:"));

    if (valor > 0) {
        saida = "VALOR POSITIVO";
    } else {
        if (valor < 0) {
            saida = "VALOR NEGATIVO";
        } else {
            saida = "VALOR IGUAL A ZERO";
        }
    }

    alert(saida);
}

/*EXERCICIO 28
Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. */
function MaiorTresNumeros(){
    let valorA = parseInt(prompt("DIGITE O PRIMEIRO NUMERO:"));
    let valorB = parseInt(prompt("DIGITE O SEGUNDO NUMERO:"));
    let valorC = parseInt(prompt("DIGITE O TERCEIRO NUMERO:"));

    if ((valorA > valorB) && (valorA > valorC)) {
        alert("MAIOR VALOR: " + valorA);
    } else {
        if ((valorB > valorA) && (valorB > valorC)) {
            alert("MAIOR VALOR: " + valorB);
        } else {
            alert("MAIOR VALOR: " + valorC);
        }
    }
}

/*EXERCICIO 29
Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores. */
function SomaDoisValores(){
    let valorA = parseInt(prompt("DIGITE O PRIMEIRO NUMERO:"));
    let valorB = parseInt(prompt("DIGITE O SEGUNDO NUMERO:"));
    let valorC = parseInt(prompt("DIGITE O TERCEIRO NUMERO:"));

    if ((valorA < valorB) && (valorA < valorC)) {
        alert("SOMA RESULTANTE: " + (valorB + valorC));
    } else {
        if ((valorB < valorA) && (valorB < valorC)) {
            alert("SOMA RESULTANTE: " + (valorA + valorC));
        } else {
            alert("SOMA RESULTANTE: " + (valorA + valorB));
        }
    }
}

/*EXERCICIO 30
Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem crescente. */ 
function SomaTresValores(){
    let maior, menor, medio;

    let valorA = parseInt(prompt("DIGITE O PRIMEIRO NUMERO:"));
    let valorB = parseInt(prompt("DIGITE O SEGUNDO NUMERO:"));
    let valorC = parseInt(prompt("DIGITE O TERCEIRO NUMERO:"));

    if ((valorA > valorB) && (valorA > valorC)) {
        maior = valorA;
        if (valorB > valorC) {
            medio = valorB;
            menor = valorC;
        } else {
            medio = valorC;
            menor = valorB;
        }
    } else if ((valorB > valorA) && (valorB > valorC)) {
        maior = valorB;
        if (valorA > valorC) {
            medio = valorA;
            menor = valorC;
        } else {
            medio = valorC;
            menor = valorA;
        }
    } else {
        maior = valorC;
        if (valorA > valorB) {
            medio = valorA;
            menor = valorB;
        } else {
            medio = valorB;
            menor = valorA;
        }
    }

    alert("ORDENACAO: " + menor + ", " + medio + ", " + maior);
}

/*EXERCICIO 31 
Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um 
triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados. */
function TrianguloValido(){
    let valorA = parseInt(prompt("DIGITE O PRIMEIRO LADO:"));
    let valorB = parseInt(prompt("DIGITE O SEGUNDO LADO:"));
    let valorC = parseInt(prompt("DIGITE O TERCEIRO LADO:"));

    if (valorA < (valorB + valorC) && valorB < (valorA + valorC) && valorC < (valorA + valorB)) {
        alert("E UM TRIANGULO");
    } else {
        alert("NAO E TRIANGULO");
    }
}

/*EXERCICIO 32
Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. 
Caso não haja vencedor deverá ser impressa a palavra EMPATE. */
function VencedorEmpate(){

    let nomeA = prompt("DIGITE O PRIMEIRO TIME:");
    let nomeB = prompt("DIGITE O SEGUNDO TIME:");

    let pontoA = parseInt(prompt("DIGITE A PONTUACAO DO TIME " + nomeA + ":"));
    let pontoB = parseInt(prompt("DIGITE A PONTUACAO DO TIME " + nomeB + ":"));

    if (pontoA > pontoB) {
        alert("VENCEDOR: " + nomeA);
    } else if (pontoB > pontoA) {
        alert("VENCEDOR: " + nomeB);
    } else {
        alert("EMPATE");
    }
}

/*EXERCICIO 33
Ler dois valores e imprimir uma das três mensagens a seguir: ‘Números iguais’, caso os números sejam iguais 
‘Primeiro é maior’, caso o primeiro seja maior que o segundo; ‘Segundo maior’, caso o segundo seja maior que o primeiro.*/
function CompararValores(){
    let valorA = parseInt(prompt("DIGITE O PRIMEIRO VALOR:"));
    let valorB = parseInt(prompt("DIGITE O SEGUNDO VALOR:"));

    if (valorA > valorB) {
        alert("PRIMEIRO E MAIOR");
    } else if (valorB > valorA) {
        alert("SEGUNDO E MAIOR");
    } else {
        alert("NUMEROS IGUAIS");
    }
}

/*EXERCICIO 35
Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da seguinte forma: 
A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro 
da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90. */
function Combustivel(){
    let litros, valorPago, descontoLitro, precoLitro, tipoCombustivel;

    litros = parseInt(prompt("DIGITE A QUANTIDADE DE LITROS:"));
    tipoCombustivel = prompt("DIGITE O TIPO DO COMBUSTIVEL [A/G]:");

    if (tipoCombustivel === "A") {
        precoLitro = 2.9;
        descontoLitro = litros * precoLitro * (litros > 20 ? 0.05 : 0.03);
    } else {
        precoLitro = 3.3;
        descontoLitro = litros * precoLitro * (litros > 20 ? 0.06 : 0.04);
    }

    valorPago = (litros * precoLitro) - descontoLitro;
    alert(`VALOR A SER PAGO PELOS ${litros}L DE ${tipoCombustivel}: R$ ${valorPago.toFixed(2)}`);
}

/*EXERCICIO 36
Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades dos homens serão 
sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma das idades do homem mais 
velho com a mulher mais nova, e o produto das idades do homem mais novo com a mulher mais velha. */ 
function ProdutoIdade(){
    let homemA, homemB, mulherA, mulherB;
    let homemVelho, homemNovo, mulherVelha, mulherNova;

    homemA = parseInt(prompt("DIGITE A IDADE DO PRIMEIRO HOMEM:"));
    homemB = parseInt(prompt("DIGITE A IDADE DO SEGUNDO HOMEM:"));
    mulherA = parseInt(prompt("DIGITE A IDADE DA PRIMEIRA MULHER:"));
    mulherB = parseInt(prompt("DIGITE A IDADE DA SEGUNDA MULHER:"));

    if (homemA > homemB) {
        homemVelho = homemA;
        homemNovo = homemB;
    } else {
        homemVelho = homemB;
        homemNovo = homemA;
    }

    if (mulherA > mulherB) {
        mulherVelha = mulherA;
        mulherNova = mulherB;
    } else {
        mulherVelha = mulherB;
        mulherNova = mulherA;
    }

    alert("SOMA DO OPOSTOS: " + (homemVelho + mulherNova));
    alert("PRODUTO DO OPOSTOS: " + (homemNovo * mulherVelha));
}

/*EXERCICIO 37
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda
um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a 
quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. */ 
function CalcularFrutas(){
    let macaQuilo, morangoQuilo;
    let macaPreco, morangoPreco, valorTotal;

    macaQuilo = parseInt(prompt("DIGITE A QUANTIDADE DE MACAS [KG]:"));
    morangoQuilo = parseInt(prompt("DIGITE A QUANTIDADE DE MORANGOS [KG]:"));

    if (macaQuilo > 5) {
        macaPreco = 1.5;
    } else {
        macaPreco = 1.8;
    }

    if (morangoQuilo > 5) {
        morangoPreco = 2.2;
    } else {
        morangoPreco = 2.5;
    }

    valorTotal = (morangoQuilo * morangoPreco) + (macaQuilo * macaPreco);

    if ((macaQuilo + morangoQuilo > 8) || (valorTotal > 25.0)) {
        valorTotal = valorTotal - (valorTotal / 10);
    }

    alert("VALOR A SER PAGO: R$ " + valorTotal.toFixed(2));
}

/*EXERCICIO 38
Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja diferente de um código 
armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a mensagem ‘Usuário inválido!’. 
Caso o Código seja correto, deve ser lido outro valor que é a senha. Se esta senha estiver incorreta 
(a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a senha esteja correta, deve ser 
mostrada a mensagem ‘Acesso permitido’. */ 
function UsuarioSenha(){
    let usuario, senha;
    const usuarioCorreto = 1234;
    const senhaCorreta = 9999;

    usuario = parseInt(prompt("DIGITE O USUARIO:"));

    if (usuario === usuarioCorreto) {
        alert("USUARIO CORRETO");

        senha = parseInt(prompt("DIGITE A SENHA:"));

        if (senha === senhaCorreta) {
            alert("ACESSO PERMITIDO");
        } else {
            alert("SENHA INCORRETA");
        }
    } else {
        alert("USUARIO INCORRETO");
    }
}

/*EXERCICIO 40
Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço unitário.
Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total a pagar
(total a pagar = total - desconto)*/ 
function CalcDesconto(){
    let nome;
    let precoUnitario, total, desconto;
    let quantidade;

    nome = prompt("DIGITE O NOME DO PRODUTO:");
    precoUnitario = parseFloat(prompt("DIGITE O PRECO UNITARIO: R$"));
    quantidade = parseInt(prompt("DIGITE A QUANTIDADE ADQUIRIDA:"));

    total = quantidade * precoUnitario;

    if (quantidade <= 5) {
        desconto = (total / 100) * 2;
    } else if (quantidade > 5 && quantidade <= 10) {
        desconto = (total / 100) * 3;
    } else {
        desconto = (total / 100) * 5;
    }

    alert("TOTAL A PAGAR COM DESCONTO DO PRODUTO " + nome + ": R$ " + (total - desconto).toFixed(2));
}

/*EXERCICIO 41 
Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos exercícios que 
fazem parte da avaliação. */
function Aproveitamento(){
    let notaUm, notaDois, notaTres, mediaAtividade, media;
    let conceito;

    notaUm = parseFloat(prompt("DIGITE A 1 NOTA:"));
    notaDois = parseFloat(prompt("DIGITE A 2 NOTA:"));
    notaTres = parseFloat(prompt("DIGITE A 3 NOTA:"));
    mediaAtividade = parseFloat(prompt("DIGITE A MEDIA DAS ATIVIDADES:"));

    media = (notaUm + (notaDois * 2) + (notaTres * 3) + mediaAtividade) / 7;

    if (media >= 9.0) {
        conceito = "A";
    } else if (media >= 7.5) {
        conceito = "B";
    } else if (media >= 6) {
        conceito = "C";
    } else {
        conceito = "D";
    }

    alert("CONCEITO DO ALUNO: " + conceito);
}

/*EXERCICIO 42
Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano de seu nascimento 
e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo de trabalho do empregado e a 
mensagem 'Requerer aposentadoria'  ou  'Não requerer'. */
function Aposentadoria(){
    let codigo, anoNascimento, anoEntrada, idade, tempoEmpresa;
    let resultante;

    codigo = parseInt(prompt("DIGITE O NUMERO DO EMPREGADO:"));
    anoNascimento = parseInt(prompt("DIGITE O ANO DE NASCIMENTO DO EMPREGADO:"));
    anoEntrada = parseInt(prompt("DIGITE O ANO DE ENTRADA NA EMPRESA:"));

    idade = 2024 - anoNascimento;
    tempoEmpresa = 2024 - anoEntrada;

    if (idade >= 65 || tempoEmpresa >= 30 || (idade >= 60 && tempoEmpresa >= 25)) {
        resultante = "PODE REQUERER APOSENTADORIA";
    } else {
        resultante = "NAO PODE REQUERER APOSENTADORIA";
    }

    alert("FUNCIONARIO: " + codigo +
        "\nIDADE: " + idade + " ANOS" +
        "\nTRABALHANDO: " + tempoEmpresa + " ANOS" +
        "\nSITUACAO: " + resultante
    );
}

/*EXERCICIO 44
Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO, deve ser lido um novo valor, 
ou seja, para o segundo valor não pode ser aceito o valor zero e imprimir o resultado da divisão do primeiro valor 
lido pelo segundo valor lido. (utilizar a estrutura REPITA). */
function DivisaoValida(){
    function divide(valorA, valorB) {
        return valorA / valorB;
    }

    let valorA, valorB;

    valorA = parseInt(prompt("DIGITE O PRIMEIRO VALOR A SER PROCESSADO:"));
    do {
        valorB = parseInt(prompt("DIGITE O SEGUNDO VALOR A SER PROCESSADO:"));
    } while (valorB === 0);

    alert("RESULTANTE: " + divide(valorA, valorB));
}

/*EXERCICIO 45 
Reescreva o exercício anterior utilizando a estrutura ENQUANTO. */
function DivisaoEnquanto(){
    function divide(valorA, valorB) {
        return valorA / valorB;
    }

    let valorA, valorB;

    valorA = parseInt(prompt("DIGITE O PRIMEIRO VALOR A SER PROCESSADO:"));
    do {
        valorB = parseInt(prompt("DIGITE O SEGUNDO VALOR A SER PROCESSADO:"));
    } while (valorB === 0);

    alert("RESULTANTE: " + divide(valorA, valorB));
}

/*EXERCICIO 48 
Escreva um algoritmo para ler as notas da 1a. e 2a. avaliações de um aluno, calcule e imprima a média (simples) 
desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota.  */
function ValidacaoMedia() {
    let totalNotas = 0;
    let contador = 1;
    let nota;

    while (contador <= 2) {
        nota = parseFloat(prompt("DIGITE A " + contador + "ª NOTA:"));

        if (nota >= 0 && nota <= 10) {
            totalNotas += nota;
        } else {
            alert("VALOR INVÁLIDO! INSIRA UMA NOTA ENTRE 0 E 10.");
            continue;
        }

        contador++;
    }

    alert("MÉDIA DO ALUNO: " + (totalNotas / 2));
}

/*EXERCICIO 49 
Acrescente uma mensagem 'NOVO CÁLCULO (S/N)?' ao final do exercício [48]. Se for respondido 'S' deve retornar e 
executar um novo cálculo, caso contrário deverá encerrar o algoritmo. */
function NovoCalculo() {
    let totalNotas = 0;
    let contador = 1;

    while (contador <= 2) {
        let nota;
        do {
            nota = parseFloat(prompt("Digite a " + contador + "ª nota:"));
            if (isNaN(nota) || nota < 0 || nota > 10) {
                alert("Nota inválida! Insira um número entre 0 e 10.");
            }
        } while (isNaN(nota) || nota < 0 || nota > 10);

        totalNotas += nota;
        contador++;
    }

    alert("Média do aluno: " + (totalNotas / 2));
}

/*EXERCICIO 50
Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem crescente. */
function ForOrdemCrescente(){
    for(let numero = 1; numero<=10; numero++)
    alert(numero)
}

/*EXERCICIO 51
Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente. */
function ForOrdemDecrescente(){
    for(let numero = 10; numero>=1; numero=numero-1)
    alert(numero)
}

/*EXERCICIO 52
Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100. */
function DezMaiorCem(){
    for(let numero = 101; numero <=110; numero++)
    alert(numero)
}

/*EXERCICIO 53
Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o 
N será sempre maior que ZERO. */
function NumerosUmN(){
    let numero = parseInt(prompt('Digite um número: '))
    
    if(numero >0)
        for(let contadora = 1; contadora<=numero; contadora++ ){
        alert(contadora)
    }
    else
        alert('Número Inválido, coloque um número maior que 0')
      
}

/*EXERCICIO 54
Modifique o exercício anterior para aceitar somente valores maiores que 0 para N. Caso o valor informado
(para N) não seja maior que 0, deverá ser lido um novo valor para N. */
function NumerosDoWhile() {
    let numero;
    
    do {
        numero = parseInt(prompt('Digite um número maior que 0: '));
    } while (numero <= 0);

    for (let contadora = 1; contadora <= numero; contadora++) {
        alert(contadora);
    }
}

/*EXERCICIO 55
Escreva um algoritmo que calcule e imprima a tabuada do 8 (1 a 10). */
function TabuadaDoOito() {
    let numero = 8;

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        alert(numero + " x " + i + " = " + resultado);
    }
}

/*EXERCICIO 56
Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido. */
function TabuadaNova() {
    let valor = parseInt(prompt("Digite um valor entre 1 e 10:"));

    if (valor >= 1 && valor <= 10) {
        for (let i = 1; i <= 10; i++) {
            let resultado = valor * i;
            alert(valor + " x " + i + " = " + resultado);
        }
    } else {
        alert("Valor inválido. Por favor, digite um valor entre 1 e 10.");
    }
}

/*EXERCICIO 57
Reescreva o exercício 50 utilizando a estrutura REPITA e um CONTADOR. */
function UmDezDoWhile(){
    let contador = 1;

    while (contador <= 10) {
        alert(contador);
        contador++;
    }
}