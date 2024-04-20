function CelsiusFarenheit(){
    let grausCelsius = parseFloat(prompt("Digite a temperatura em Celsius: "));
    let grausFahrenheit = (9 * grausCelsius + 160) / 5;

    alert(`Em Fahrenheit, a temperatura é: ${grausFahrenheit}`);

}

function FahrenheitCelsius(){
    let grausFahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));
    let grausCelsius = (grausFahrenheit - 32) / 1.8;

    alert(`Em Celsius, a temperatura é: ${grausCelsius}`);
}

function VolumeLataOleo(){
    let alturaLata = parseFloat(prompt("Digite a altura da Lata de óleo (em cm): "));
    let raioLata = parseFloat(prompt("Digite o raio da Lata de óleo: "));

    const pi = 3.14;
    let volume = pi * Math.pow(raioLata, 2) * alturaLata;

    alert(`O Volume é: ${volume}`);
}

function LitrosComustivel(){
    let tempoGasto = parseInt(prompt("Digite o tempo necessário (horas): "));
    let velocidade = parseInt(prompt("Digite a velocidade média (km/h): "));
    let distancia = tempoGasto * velocidade;
    let combustivelNecessario = distancia / 12;
    alert(`Litros necessários para a viagem: ${combustivelNecessario} L`);
}

function PrestacaoAtraso(){
    let valor = parseFloat(prompt("Digite o valor inicial da prestação: R$"));
    let percentualTaxa = parseFloat(prompt("Digite o percentual de taxa: "));
    let tempo = parseInt(prompt("Digite o tempo atrasado (dias): "));

    let taxaAdicional = (valor * (percentualTaxa / 100)) * tempo;
    let valorTotal = valor + taxaAdicional;

    alert(`Valor da prestação a ser paga em atraso: R$ ${valorTotal.toFixed(2)}`);
}

function TrocaValores(){
    let a = parseFloat(prompt("Digite o primeiro valor: "));
    let b = parseFloat(prompt("Digite o segundo valor: "));
    [b, a] = [a, b];

    alert(`Os valores trocados são: ${a}, ${b}`);
}

function OperacaoDistributiva() {
    let a = parseInt(prompt("Digite o valor de A: "));
    let b = parseInt(prompt("Digite o valor de B: "));
    let c = parseInt(prompt("Digite o valor de C: "));
    let d = parseInt(prompt("Digite o valor de D: "));

    let plusResults = `
        Resultados Das Somas:
        A soma de A com B é: ${a + b}
        A soma de A com C é: ${a + c}
        A soma de A com D é: ${a + d}
        A soma de B com C é: ${b + c}
        A soma de B com D é: ${b + d}
        A soma de C com D é: ${c + d}
    `;

    let multResults = `
        Resultados Das Multiplicações:
        A multiplicação de A com B é: ${a * b}
        A multiplicação de A com C é: ${a * c}
        A multiplicação de A com D é: ${a * d}
        A multiplicação de B com C é: ${b * c}
        A multiplicação de B com D é: ${b * d}
        A multiplicação de C com D é: ${c * d}
    `;
    alert(plusResults + "\n" + multResults);
}

function calcularVolumeCaixa() {
    let comprimento = parseFloat(prompt("Digite o valor do comprimento da caixa: "));
    let altura = parseFloat(prompt("Digite o valor da altura da caixa: "));
    let largura = parseFloat(prompt("Digite o valor da largura da caixa: "));
    let vol = comprimento * altura * largura;
    alert(`O Volume da caixa é: ${vol}`);
}

function QuadradoDiferenca() {
    let num1 = parseInt(prompt("Digite o primeiro valor: "));
    let num2 = parseInt(prompt("Digite o segundo valor: "));
    let calc = (num1 - num2) ** 2;

    alert(`A diferença do primeiro pelo segundo é: ${num1 - num2}`);
    alert(`O quadrado da diferença é: ${calc}`);
}

function DolaresParaReais() {
    let cotacao = parseFloat(prompt("Digite a cotação atual do Dólar (em R$): "));
    let quantidade = parseFloat(prompt("Digite a quantidade de dólares para conversão em reais: "));
    alert(`O valor convertido em R$: ${cotacao * quantidade}`);
}

function ReaisParaDolares() {
    let cotacao = parseFloat(prompt("Digite a cotação atual do Dólar (em R$): "));
    let quantidade = parseFloat(prompt("Digite a quantidade de reais para conversão em dólares: "));
    alert(`O valor convertido em US$: ${quantidade / cotacao}`);
}

function SomaDosQuadrados() {
    let num1 = parseFloat(prompt("Digite o primeiro número: "));
    let num2 = parseFloat(prompt("Digite o segundo número: "));
    let num3 = parseFloat(prompt("Digite o terceiro número: "));
    let somaDosQuadrados = num1 ** 2 + num2 ** 2 + num3 ** 2;

    alert(`
        O Quadrado do primeiro número: ${num1 ** 2}
        O Quadrado do segundo número: ${num2 ** 2}
        O Quadrado do terceiro número: ${num3 ** 2}
        A Soma dos Quadrados: ${somaDosQuadrados}
    `);
}

function SomaDeTresNumeros() {
    let numero1 = parseFloat(prompt("Digite o primeiro número: "));
    let numero2 = parseFloat(prompt("Digite o segundo número: "));
    let numero3 = parseFloat(prompt("Digite o terceiro número: "));

    let soma = numero1 + numero2 + numero3;
    let quadradoDaSoma = soma ** 2;

    alert(`A Soma dos 3 números: ${soma}\nO Quadrado da Soma: ${quadradoDaSoma}`);
}

function MaiorPeloMenor() {
    const valor1 = parseInt(prompt("Digite o primeiro valor: "));
    const valor2 = parseInt(prompt("Digite o segundo valor: "));

    if (valor1 > valor2)
        alert(`O produto do maior pelo menor é: ${valor1 - valor2}`);
    else alert(`O produto do maior pelo menor é: ${valor2 - valor1}`);
}

function ModuloDeUmNumero() {
    const numero = parseInt(prompt("Digite um valor: "));

    if (numero < 0) alert(`O módulo de ${numero} é: ${-numero}`);
    else alert(`O módulo de ${numero} é: ${numero}`);
}

function MediaQuatroNotasC() {
    const nota1 = parseFloat(prompt("Digite a primeira nota: "));
    const nota2 = parseFloat(prompt("Digite a segunda nota: "));
    const nota3 = parseFloat(prompt("Digite a terceira nota: "));
    const nota4 = parseFloat(prompt("Digite a quarta nota: "));

    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    alert(`Média: ${media}`);
    if (media >= 5) alert("Aluno aprovado!");
    else alert("Aluno não foi aprovado");
}


function MediaQuatroNotasD() {
    const nota1 = parseFloat(prompt("Digite a primeira nota: "));
    const nota2 = parseFloat(prompt("Digite a segunda nota: "));
    const nota3 = parseFloat(prompt("Digite a terceira nota: "));
    const nota4 = parseFloat(prompt("Digite a quarta nota: "));

    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media >= 7) alert("Aluno aprovado!");
    else {
        const exame = parseFloat(prompt("Digite a nota de Exame: "));

        media = (media + exame) / 2;
        if (media >= 5) alert("Aluno em Exame!");
        else alert("Aluno não foi aprovado");
    }

    alert(`Média final: ${media}`);
}

function EquacaoSegundoGrau() {
    const a = parseFloat(prompt("Digite o valor de A: "));
    const b = parseFloat(prompt("Digite o valor de B: "));
    const c = parseFloat(prompt("Digite o valor de C: "));

    const delta = b ** 2 - 4 * a * c;

    if (a !== 0) {
        if (delta > 0) {
            const x1 = (-b + Math.sqrt(delta)) / (2 * a);
            const x2 = (-b - Math.sqrt(delta)) / (2 * a);
            alert("Raiz 1: " + x1);
            alert("Raiz 2: " + x2);
        } else if (delta === 0) {
            const x1 = -b / (2 * a);
            alert("A Equação possui uma raiz real: " + x1);
        } else {
            alert("A Equação não possui raízes reais");
        }
    } else {
        alert("A = 0, cálculo não possível");
    }
}

function OrdenacaoTresValores() {
    const a = parseFloat(prompt("Digite o valor de A: "));
    const b = parseFloat(prompt("Digite o valor de B: "));
    const c = parseFloat(prompt("Digite o valor de C: "));

    let order = "";

    if (a > b && a > c) {
        order = b > c ? `${c}, ${b}, ${a}` : `${b}, ${c}, ${a}`;
    } else if (b > a && b > c) {
        order = a > c ? `${c}, ${a}, ${b}` : `${a}, ${c}, ${b}`;
    } else if (c > a && c > b) {
        order = b > a ? `${a}, ${b}, ${c}` : `${b}, ${a}, ${c}`;
    }

    alert(`Em ordem crescente: ${order}`);
}

function Divisiveis() {
    const num1 = parseFloat(prompt("Digite o valor 1: "));
    const num2 = parseFloat(prompt("Digite o valor 2: "));
    const num3 = parseFloat(prompt("Digite o valor 3: "));
    const num4 = parseFloat(prompt("Digite o valor 4: "));

    let divisibles = "Os números divisíveis por 2 e 3 são:\n";

    if (num1 % 2 === 0 && num1 % 3 === 0) divisibles += num1 + "\n";
    if (num2 % 2 === 0 && num2 % 3 === 0) divisibles += num2 + "\n";
    if (num3 % 2 === 0 && num3 % 3 === 0) divisibles += num3 + "\n";
    if (num4 % 2 === 0 && num4 % 3 === 0) divisibles += num4 + "\n";

    alert(divisibles);
}

function NumeroEntreCinco() {
    const numero1 = parseInt(prompt("Digite o valor 1: "));
    const numero2 = parseInt(prompt("Digite o valor 2: "));
    const numero3 = parseInt(prompt("Digite o valor 3: "));
    const numero4 = parseInt(prompt("Digite o valor 4: "));
    const numero5 = parseInt(prompt("Digite o valor 5: "));

    let maior = numero1;
    let menor = numero1;

    if (numero2 > maior) maior = numero2;
    else if (numero2 < menor) menor = numero2;
    if (numero3 > maior) maior = numero3;
    else if (numero3 < menor) menor = numero3;
    if (numero4 > maior) maior = numero4;
    else if (numero4 < menor) menor = numero4;
    if (numero5 > maior) maior = numero5;
    else if (numero5 < menor) menor = numero5;

    alert(`O menor número é: ${menor}\nO maior número é: ${maior}`);
}

function ParOuImpar() {
    const num = parseInt(prompt("Digite um valor: "));

    if (num % 2 === 0) 
        alert("O valor é par");
    else 
        alert("O valor é ímpar");
}

function VerificacaoIntervalo() {
    const num = parseInt(prompt("Digite um valor (de 1 a 9): "));

    if (num < 1 || num > 9) 
        alert("Número fora do intervalo permitido");
    else 
        alert("Número dentro do intervalo permitido");
}

function VerificacaoNumero() {
    const num = parseInt(prompt("Digite um valor (menor que 3): "));

    if (num > 3) alert("Número maior que 3!");
    else alert("Número é: " + num);
}

function SaudacaoSexo() {
    const nome = prompt("Digite seu nome: ");
    const sexo = prompt("Digite seu sexo (M/F): ");

    if (sexo.toUpperCase() === "M") 
        alert("Ilmo Sr. " + nome);
    else if (sexo.toUpperCase() === "F") 
        alert("Ilma Sra.: " + nome);
    else 
        alert("Opção inválida");
}

function TabuadaNumero() {
    let num = parseInt(prompt("Digite um número para ver a tabuada: "));
    let i = 1;
    let tabuada = "";

    tabuada += `Tabuada de multiplicação do ${num}:\n`;
    do {
        tabuada += `${num} x ${i} = ${num * i}\n`;
        i++;
    } while (i <= 10);

    alert(tabuada);
}

function SomaCemPrimeirosNumeros() {
    let count = 1;
    let soma = 0;

    console.clear();
    while (count <= 100) {
        console.log(`${soma} + ${count} = ${soma + count}`);
        soma += count;
        count++;
    }

    alert("A soma de todos os cem primeiros números é: " + soma);
}

function SomaNumerosPares() {
    let count = 0;

    while (count <= 20) {
        if (count % 2 !== 0) {
            alert(count + " é ímpar");
        }
        count++;
    }
}

function ExibicaoNumerosImpares() {
    let count = 1;

    console.clear();
    while (count <= 20) {
        if (count % 2 === 1) {
            console.log(count + " é ímpar");
        }
        count++;
    }

    alert("Entre nas ferramentas de desenvolvedor para ver os ímpares");
}

function ExibicaoPotenciasDeTres() {
    let base = 3;
    let resultado = 1;

    alert(`3^0 = 1`);

    for (let expoente = 1; expoente <= 15; expoente++) {
        resultado *= base;
        alert(`3^${expoente} = ${resultado}`);
    }
}

function PotenciaBase() {
    let base = parseInt(prompt("Digite a Base: "));
    let expoente = parseInt(prompt("Digite o Expoente: "));

    let count = 0;
    let elevado = 1;

    let resultado = "";

    while (count <= expoente) {
        if (count === 0) {
            elevado = 1;
        } else {
            elevado *= base;
        }
        resultado += `${base} elevado a ${count}: ${elevado}\n`;
        count++;
    }

    alert(resultado);
}

function SerieFibonacci() {
    let termo = 1;
    let atual = 0;
    let posterior = 1;
    let contador = 1;

    while (termo <= 15) {
        posterior += atual;
        atual = posterior - atual;
        termo++;
    }

    alert("15 TERMO DA SEQUENCIA FIBONACCI: " + atual);
}

function CoverterTemp() {
    let celsius = 10;
    let count = 0;
    let resultado = "";

    while (count < 10) {
        let fahrenheit = (9 * celsius + 160) / 5;
        resultado += `${celsius}º em Fahrenheit: ${fahrenheit}\n`;
        celsius += 10;
        count++;
    }

    alert(resultado);
}

function SomaMedia() {
    let contador = 1;
    let soma = 0;

    while (contador <= 10) {
        let valor = parseFloat(prompt("Digite o " + contador + " valor a ser computado: "));
        soma += valor;
        contador++;
    }

    alert(`Somatória:  ${soma} \nMédia Aritmética: ${(soma/10)} `);
   
}

function ValoresPares() {
    let somaPares = 0;
    let quantidadePares = 0;
    let media = 0;

    let count = 50;
    while (count <= 70) {
        if (count % 2 === 0) {
            somaPares += count;
            quantidadePares++;
        }
        count++;
    }

    if (quantidadePares > 0) {
        media = somaPares / quantidadePares;
    }

    alert(`A média da soma dos números pares (entre 50 e 70) é: ${media}`)
}

function AreaResidencia(){
    const comodos = [];
    const areas = [];
    let totalArea = 0;
    let continuarAdicionando = true;

    alert("Bem-vindo à sua calculadora de cômodos!");

    while (continuarAdicionando) {
        const nomeComodo = prompt("Qual o nome do Cômodo:");
        const comprimento = parseFloat(prompt(`Qual o comprimento do(a) ${nomeComodo}:`));
        const largura = parseFloat(prompt(`Qual a largura do(a) ${nomeComodo}:`));

        const area = largura * comprimento;

        alert(`Área do cômodo ${nomeComodo}: ${area}`);

        comodos.push(nomeComodo);
        areas.push(area);
        totalArea += area;

        const resposta = prompt("Deseja adicionar outro cômodo? (s/n): ");
        if (resposta.toLowerCase() !== "s") {
            continuarAdicionando = false;
        }
    }

    for (let i = 0; i < comodos.length; i++) {
        if (comodos[i] && areas[i] > 0) {
            alert(`O cômodo ${comodos[i]} tem ${areas[i]} de área.`);
        }
    }

    alert(`Área total da casa: ${totalArea}`);
}

function ValoresPositivos(){
    let menor, maior, valor;
    let continuar = "s";

    alert(
        "Você pode digitar quantos valores quiser.\nMas valores negativos encerram!"
)   ;

    do {
        valor = parseInt(prompt("Digite o valor: "));
    if (!menor && !maior) {
        maior = valor;
        menor = valor;
    } else {
        if (valor < 0) {
            alert("Valor negativo! O programa irá encerrar");
            break;
        } else {
            if (valor > maior) maior = valor;
            if (valor < menor) menor = valor;
        }
    }
    continuar = prompt("Deseja continuar? (s/n)").toLowerCase();
    } while (continuar === "s");

    alert(
        `O menor valor foi: ${menor}\nO maior valor foi: ${maior}\nÚltimo valor digitado: ${valor}`
    );
}

function CalcularQuadrado() {
    let numero = 15;

    do {
        alert(`O número ${numero} ao quadrado é: ${numero ** 2}`);
        numero++;
    } while (numero <= 200);

    alert("Confira os resultados na ferramenta de desenvolvedor.");
}

function SomarNumerosPares() {
    let contador = 1;
    let soma = 0;

    do {
        if (contador % 2 === 0) soma += contador;
        contador++;
    } while (contador <= 500);

    alert(`A soma dos números pares de 1 a 500 é: ${soma}`);
}

function MostrarDivisiveis() {
    let numero = 1;

    do {
        if (numero % 4 === 0) alert(`O número ${numero} é divisível por 4`);
        numero++;
    } while (numero <= 200);

    alert("Confira os resultados na ferramenta de desenvolvedor.");
}

function NumerosGraosXadrez() {
    let count = 0;
    let soma = 0;

    do {
        soma += 2 ** count;
        count++;
    } while (count <= 64);

    alert("A soma dos números de grãos em um tabuleiro de xadrez é: " + soma);
}

function SomaDosFatoriais() {
    let count = 0;
    let somatorio = 0;

    do {
        count++;
        let valor = parseInt(prompt(`Digite o ${count}º valor:`));
        let fatorial = 1;

        for (let i = 1; i <= valor; i++) {
            fatorial *= i;
        }

        somatorio += fatorial;
    } while (count < 15);

    alert(`O somatório de todos os fatoriais dos números solicitados é: ${somatorio}`);
}

function SomaMediaDeValores() {
    let count = 1;
    let soma = 0;

    alert("Você poderá digitar quantos valores quiser, mas se for negativo, o programa encerra.");

    do {
        let valor = parseFloat(prompt(`Digite o ${count}º valor:`));
        if (valor < 0) {
            alert("Valor digitado é negativo. Encerrando o programa.");
            break;
        }

        soma += valor;
        count++;
    } while (true);

    let media = soma / (count - 1);

    alert(`Soma de todos os valores: ${soma}\nMédia da soma: ${media}\nQuantidade de elementos: ${count - 1}`);
}

function FatorialNumerosImpares() {
    let count = 1;
    let fatorial = 1;

    do {
        if (count % 2 === 1) {
            fatorial *= count;
        }
        count++;
    } while (count <= 10);

    alert(`Fatorial dos números ímpares entre 1 e 10: ${fatorial}`);
}

function CalcularAreaDeComodos() {
    let count = 1;
    let totalArea = 0;
    let comodos = [];
    let areas = [];

    alert("Bem vindo a sua calculadora de cômodos!");

    do {
        comodos[count] = prompt(`Qual o nome do Cômodo:`);

        let comprimento = parseFloat(prompt(`Qual o comprimento do(a) ${comodos[count]}:`));
        let largura = parseFloat(prompt(`Qual a largura do(a) ${comodos[count]}:`));

        let area = largura * comprimento;
        areas[count] = area;
        totalArea += area;

        alert(`Área do cômodo ${comodos[count]}: ${areas[count]}`);

        count++;

        let vaiContinuar = prompt("Deseja adicionar outro cômodo? (s/n):");
        if (vaiContinuar.toLowerCase() === "n") {
            break;
        }
    } while (true);

    count = 1;
    do {
        if (comodos[count] !== "" && areas[count] > 0) {
            alert(`Cômodo ${comodos[count]} tem ${areas[count]} de área`);
        }
        count++;
    } while (count <= 10);

    alert(`Área total da Casa: ${totalArea}`);
}

function CalcularDivisaoInteira() {
    let divisor = 0;
    let dividendo = 0;
    let count = 0;

    dividendo = parseInt(prompt("Digite o dividendo:"));
    divisor = parseInt(prompt("Digite o divisor:"));

    do {
        if (dividendo >= divisor) {
            dividendo -= divisor;
            count++;
        } else {
            break;
        }
    } while (true);

    alert(`A parte inteira da divisão é: ${count}`);
}

function CalcularQuadradosDe15A200() {
    let resultado = "";
    for (let contadora = 15; contadora <= 200; contadora++) {
        resultado += `O número ${contadora} ao quadrado é: ${contadora ** 2}\n`;
    }

    alert(resultado);
}

function TabuadaPersonalizada() {
    let num = parseInt(prompt("Digite um número:"));
    let resultado = "";
    for (let count = 1; count <= 10; count++) {
        resultado += `${num} x ${count} = ${num * count}\n`;
    }

    alert(resultado );
}

function SomarNumerosDe1A100() {
    let somados = 0;
    for (let count = 1; count <= 100; count++) {
        somados += count;
    }

    alert(`O Somatório dos números de 1 a 100: ${somados}`);
}

function SomarParesDe1A500() {
    let somados = 0;
    for (let count = 1; count <= 500; count++) {
        if (count % 2 === 0) {
            somados += count;
        }
    }

    alert(`O Somatório dos pares de 1 a 500: ${somados}`);
}

function IdentificarNumerosImpares() {
    let resultado = "";
    for (let count = 0; count <= 20; count++) {
        if (count % 2 === 1) {
            resultado += `O número ${count} é ímpar.\n`;
        }
    }

    alert(resultado);
}

function NumerosDivisiveisPor4() {
    let resultado = "";
    for (let count = 1; count <= 200; count++) {
        if (count % 4 === 0) {
            resultado += `O número ${count} é divisível por 4.\n`;
        }
    }

    alert(resultado);
}

function CalcularPotenciasDe3() {
    let base = 3;
    let resultado = "";
    for (let count = 0; count <= 15; count++) {
        let calc = count === 0 ? 1 : base ** count;
        resultado += `${base} ^ ${count} = ${calc}\n`;
    }

    alert(resultado);
}

function PotenciasPersonalizadas() {
    let base = parseInt(prompt("Digite a base:"));
    let expoente = parseInt(prompt("Digite o expoente:"));
    let resultado = "";
    for (let count = 0; count <= expoente; count++) {
        let calc = count === 0 ? 1 : base ** count;
        resultado += `${base} ^ ${count} = ${calc}\n`;
    }

    alert(resultado);
}

function CalcularTermosFibonacci() {
    let resultado = "";
    let n1 = 1;
    let n2 = 1;
    for (let count = 0; count <= 15; count++) {
        let nth = count <= 1 ? 1 : n1 + n2;
        n1 = n2;
        n2 = nth;
        resultado += `${count}º termo de Fibonacci: ${nth}\n`;
    }

    alert(resultado);
}

function ConverterCelsius() {
    let celsius = 10;
    let resultado = "";
    while (celsius <= 100) {
        let fahrenheit = (9 * celsius + 160) / 5;
        resultado += `${celsius}°C em Fahrenheit: ${fahrenheit}\n`;
        celsius += 10;
    }
    alert(resultado);
}

function FatorialDeImpares() {
    let fatorial = 1;
    let resultado = "";
    for (let num = 1; num <= 10; num += 2) {
        fatorial *= num;
        resultado += `Fatorial de ${num}: ${fatorial}\n`;
    }
    alert(resultado);
}