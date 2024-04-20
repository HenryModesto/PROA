const faccatExercicesList = document.getElementById('faccat-exercices');
const manzanoExercicesList = document.getElementById('manzano-exercices');

const exerciciosFaccat = [
  { apostila: "Faccat", titulo: "Antecessor", lista: faccatExercicesList, subtitulo: "Exercicio 05 / Pg 4", operacao: "Antecessor()" },
  { apostila: "Faccat", titulo: "Área Retangulo", lista: faccatExercicesList, subtitulo: "Exercicio 06 / Pg 4", operacao: "Retangulo()" },
  { apostila: "Faccat", titulo: "Idade em Dias", lista: faccatExercicesList, subtitulo: "Exercicio 07 / Pg 4", operacao: "IdadeDias()" },
  { apostila: "Faccat", titulo: "Percentual Votos", lista: faccatExercicesList, subtitulo: "Exercicio 08 / Pg 4", operacao: "Votos()" },
  { apostila: "Faccat", titulo: "Salário Reajuste", lista: faccatExercicesList, subtitulo: "Exercicio 09 / Pg 4", operacao: "Reajuste()" },
  { apostila: "Faccat", titulo: "Custo Final", lista: faccatExercicesList, subtitulo: "Exercicio 10 / Pg 4", operacao: "CustoFinal()" },
  { apostila: "Faccat", titulo: "Revendedora", lista: faccatExercicesList, subtitulo: "Exercicio 11 / Pg 4", operacao: "Revendedora()" },
  { apostila: "Faccat", titulo: "Converter Celsius", lista: faccatExercicesList, subtitulo: "Exercicio 12 / Pg 5", operacao: "ConverterFa()" },
  { apostila: "Faccat", titulo: "Média Ponderada", lista: faccatExercicesList, subtitulo: "Exercicio 13 / Pg 5", operacao: "MediaPonderada()" },
  { apostila: "Faccat", titulo: "Maior que 10", lista: faccatExercicesList, subtitulo: "Exercicio 14 / Pg 5", operacao: "MaiorQue()" },
  { apostila: "Faccat", titulo: "Positivo/Negativo", lista: faccatExercicesList, subtitulo: "Exercicio 15 / Pg 5", operacao: "PositivoNegativo()"},
  { apostila: "Faccat", titulo: "Valor da Maçã", lista: faccatExercicesList, subtitulo: "Exercicio 16 / Pg 5", operacao: "Maca()" },
  { apostila: "Faccat", titulo: "Média Aritmédica", lista: faccatExercicesList, subtitulo: "Exercicio 17 / Pg 5", operacao: "MediaAritmedica()" },
  { apostila: "Faccat", titulo: "Aprovação Votar ", lista: faccatExercicesList, subtitulo: "Exercicio 18 / Pg 5", operacao: "AprovacaoVotar()" },
  { apostila: "Faccat", titulo: "Número Maior", lista: faccatExercicesList, subtitulo: "Exercicio 19 / Pg 5", operacao: "NumeroMaior()" },
  { apostila: "Faccat", titulo: "Ordem Crescente", lista: faccatExercicesList, subtitulo: "Exercicio 20 / Pg 5", operacao: "Crescente()" },
  { apostila: "Faccat", titulo: "Duração do Jogo", lista: faccatExercicesList, subtitulo: "Exercicio 21 / Pg 6", operacao: "Xadrez()" },
  { apostila: "Faccat", titulo: "Sálario Funcionário", lista: faccatExercicesList, subtitulo: "Exercicio 22 / Pg 6", operacao: "SalarioFuncionario()" },
  { apostila: "Faccat", titulo: "Peso Ideal", lista: faccatExercicesList, subtitulo: "Exercicio 23 / Pg 6", operacao: "PesoIdeal()" },
  { apostila: "Faccat", titulo: "Salário Vendedor", lista: faccatExercicesList, subtitulo: "Exercicio 24 / Pg 6", operacao: "SalarioVendedor()" },
  { apostila: "Faccat", titulo: "Saldo Atual", lista: faccatExercicesList, subtitulo: "Exercicio 25 / Pg 6", operacao: "SaldoAtual()" },
  { apostila: "Faccat", titulo: "Efetuar Compra", lista: faccatExercicesList, subtitulo: "Exercicio 26 / Pg 6", operacao: "EfetuarCompra()" },
  { apostila: "Faccat", titulo: "Positivo/Negativo", lista: faccatExercicesList, subtitulo: "Exercicio 27 / Pg 6", operacao: "PositivoNegativoZero()" },
  { apostila: "Faccat", titulo: "Maior 3 números", lista: faccatExercicesList, subtitulo: "Exercicio 28 / Pg 6", operacao: "MaiorTresNumeros()" },
  { apostila: "Faccat", titulo: "Soma 2 Valores", lista: faccatExercicesList, subtitulo: "Exercicio 29 / Pg 6", operacao: "SomaDoisValores()" },
  { apostila: "Faccat", titulo: "Crescente/3 Valores", lista: faccatExercicesList, subtitulo: "Exercicio 30 / Pg 7", operacao: "SomaTresValores()" },
  { apostila: "Faccat", titulo: "Triângulo Válido", lista: faccatExercicesList, subtitulo: "Exercicio 31 / Pg 7", operacao: "TrianguloValido()" },
  { apostila: "Faccat", titulo: "Vencedor ou Empate", lista: faccatExercicesList, subtitulo: "Exercicio 32 / Pg 7", operacao: "VencedorEmpate()" },
  { apostila: "Faccat", titulo: "Comparar Valores", lista: faccatExercicesList, subtitulo: "Exercicio 33 / Pg 7", operacao: "CompararValores()" },
  { apostila: "Faccat", titulo: "Calc Combústivel", lista: faccatExercicesList, subtitulo: "Exercicio 35 / Pg 7", operacao: "Combustivel()" },
  { apostila: "Faccat", titulo: "Produto Idades", lista: faccatExercicesList, subtitulo: "Exercicio 36 / Pg 8", operacao: "ProdutoIdade()" },
  { apostila: "Faccat", titulo: "Calcular Frutas", lista: faccatExercicesList, subtitulo: "Exercicio 37 / Pg 8", operacao: "CalcularFrutas()" },
  { apostila: "Faccat", titulo: "Usuário e senha", lista: faccatExercicesList, subtitulo: "Exercicio 38 / Pg 8", operacao: "UsuarioSenha()" },
  { apostila: "Faccat", titulo: "Calc Desconto", lista: faccatExercicesList, subtitulo: "Exercicio 40 / Pg 8", operacao: "CalcDesconto()" },
  { apostila: "Faccat", titulo: "Aproveitamento", lista: faccatExercicesList, subtitulo: "Exercicio 41 / Pg 9", operacao: "Aproveitamento()" },
  { apostila: "Faccat", titulo: "Aposentadoria", lista: faccatExercicesList, subtitulo: "Exercicio 42 / Pg 9", operacao: "Aposentadoria()" },
  { apostila: "Faccat", titulo: "Divisão Validada", lista: faccatExercicesList, subtitulo: "Exercicio 44 / Pg 10", operacao: "DivisaoValida()" },
  { apostila: "Faccat", titulo: "Divisão(Enquanto)", lista: faccatExercicesList, subtitulo: "Exercicio 45 / Pg 10", operacao: "DivisaoEnquanto()" },
  { apostila: "Faccat", titulo: "Validação(Média)", lista: faccatExercicesList, subtitulo: "Exercicio 48 / Pg 10", operacao: "ValidacaoMedia()" },
  { apostila: "Faccat", titulo: "Novo Calculo", lista: faccatExercicesList, subtitulo: "Exercicio 49 / Pg 10", operacao: "NovoCalculo()" },
  { apostila: "Faccat", titulo: "1 a 10 crescente", lista: faccatExercicesList, subtitulo: "Exercicio 50 / Pg 10", operacao: "ForOrdemCrescente()" },
  { apostila: "Faccat", titulo: "1 a 10 decrescente", lista: faccatExercicesList, subtitulo: "Exercicio 51 / Pg 10", operacao: "ForOrdemDecrescente()" },
  { apostila: "Faccat", titulo: "10 > 100", lista: faccatExercicesList, subtitulo: "Exercicio 52 / Pg 10", operacao: "DezMaiorCem()" },
  { apostila: "Faccat", titulo: "Números de 1 a N", lista: faccatExercicesList, subtitulo: "Exercicio 53 / Pg 10", operacao: "NumerosUmN()" },
  { apostila: "Faccat", titulo: "1 a N(N > 0)", lista: faccatExercicesList, subtitulo: "Exercicio 54 / Pg 11", operacao: "NumerosDoWhile()" },
  { apostila: "Faccat", titulo: "Tabuada do 8", lista: faccatExercicesList, subtitulo: "Exercicio 55 / Pg 11", operacao: "TabuadaDoOito()" },
  { apostila: "Faccat", titulo: "Tabuada 1 a 10", lista: faccatExercicesList, subtitulo: "Exercicio 56 / Pg 11", operacao: "TabuadaNova()" },
  { apostila: "Faccat", titulo: "1 a 10(Do While)", lista: faccatExercicesList, subtitulo: "Exercicio 57 / Pg 11", operacao: "UmDezDoWhile()" }
];

const exerciciosManzano = [
  { apostila: "Manzano", titulo: "Celsius > Fahrenheit", lista: manzanoExercicesList, subtitulo: "Exercicio 7) a. / Pg 28", operacao: "CelsiusFarenheit()" },
  { apostila: "Manzano", titulo: "Fahrenheit > Celsius", lista: manzanoExercicesList, subtitulo: "Exercicio 7) b. / Pg 28", operacao: "FahrenheitCelsius()" },
  { apostila: "Manzano", titulo: "Volume Lata Oléo", lista: manzanoExercicesList, subtitulo: "Exercicio 7) c. / Pg 28", operacao: "VolumeLataOleo()" },
  { apostila: "Manzano", titulo: "Combústivel", lista: manzanoExercicesList, subtitulo: "Exercicio 7) d. / Pg 28", operacao: "LitrosComustivel()" },
  { apostila: "Manzano", titulo: "Prestação Atraso", lista: manzanoExercicesList, subtitulo: "Exercicio 7) e / Pg 28", operacao: "PrestacaoAtraso()" },
  { apostila: "Manzano", titulo: "Troca Valores", lista: manzanoExercicesList, subtitulo: "Exercicio 7) f. / Pg 28", operacao: "TrocaValores()" },
  { apostila: "Manzano", titulo: "Distributiva", lista: manzanoExercicesList, subtitulo: "Exercicio 7) g. / Pg 28", operacao: "OperacaoDistributiva()" },
  { apostila: "Manzano", titulo: "Caixa Retangular", lista: manzanoExercicesList, subtitulo: "Exercicio 7) h. / Pg 28", operacao: "calcularVolumeCaixa()" },
  { apostila: "Manzano", titulo: "Quadrado Diferença", lista: manzanoExercicesList, subtitulo: "Exercicio 7) i. / Pg 28", operacao: "QuadradoDiferenca()" },
  { apostila: "Manzano", titulo: "Dolar > Real", lista: manzanoExercicesList, subtitulo: "Exercicio 7) j. / Pg 28", operacao: "DolaresParaReais()" },
  { apostila: "Manzano", titulo: "Real > Dolar", lista: manzanoExercicesList, subtitulo: "Exercicio 7) k. / Pg 28", operacao: "ReaisParaDolares()" },
  { apostila: "Manzano", titulo: "Soma Quadrados ", lista: manzanoExercicesList, subtitulo: "Exercicio 7) l. / Pg 28", operacao: "SomaDosQuadrados()" },
  { apostila: "Manzano", titulo: "Quadrado Soma", lista: manzanoExercicesList, subtitulo: "Exercicio 7) m. / Pg 28", operacao: "SomaDeTresNumeros()" },
  { apostila: "Manzano", titulo: "Diferença do Maior", lista: manzanoExercicesList, subtitulo: "Exercicio 4) a. / Pg 44", operacao: "MaiorPeloMenor()" },
  { apostila: "Manzano", titulo: "Módulo Número", lista: manzanoExercicesList, subtitulo: "Exercicio 4) b. / Pg 44", operacao: "ModuloDeUmNumero()" },
  { apostila: "Manzano", titulo: "Média de 4 notas", lista: manzanoExercicesList, subtitulo: "Exercicio 4) c. / Pg 44", operacao: "MediaQuatroNotasc()" },
  { apostila: "Manzano", titulo: "Média de 4 notas", lista: manzanoExercicesList, subtitulo: "Exercicio 4) d. / Pg 44", operacao: "MediaQuatroNotasD()" },
  { apostila: "Manzano", titulo: "Equação 2 Grau", lista: manzanoExercicesList, subtitulo: "Exercicio 4) e. / Pg 44", operacao: "EquacaoSegundoGrau()" },
  { apostila: "Manzano", titulo: "Ordem 3 Valores", lista: manzanoExercicesList, subtitulo: "Exercicio 4) f. / Pg 44", operacao: "OrdenacaoTresValores()" },
  { apostila: "Manzano", titulo: "Divisiveis 2 e 3", lista: manzanoExercicesList, subtitulo: "Exercicio 4) g. / Pg 44", operacao: "Divisiveis()" },
  { apostila: "Manzano", titulo: "Leitura 5 numeros", lista: manzanoExercicesList, subtitulo: "Exercicio 4) h. / Pg 44", operacao: "NumeroEntreCinco()" },
  { apostila: "Manzano", titulo: "Par ou Impar", lista: manzanoExercicesList, subtitulo: "Exercicio 4) i. / Pg 44", operacao: "ParOuImpar()" },
  { apostila: "Manzano", titulo: "Faixa de 1 a 9", lista: manzanoExercicesList, subtitulo: "Exercicio 4) j. / Pg 44", operacao: "VerificacaoIntervalo()" },
  { apostila: "Manzano", titulo: "Numero > 3", lista: manzanoExercicesList, subtitulo: "Exercicio 4) k. / Pg 44", operacao: "VerificacaoNumero()" },
  { apostila: "Manzano", titulo: "Sexo da Pessoa", lista: manzanoExercicesList, subtitulo: "Exercicio 4) l. / Pg 44", operacao: "SaudacaoSexo()" },
  { apostila: "Manzano", titulo: "Tabuada", lista: manzanoExercicesList, subtitulo: "Exercicio 1) a. / Pg 48", operacao: "TabuadaNumero()" },
  { apostila: "Manzano", titulo: "Soma 100 Números", lista: manzanoExercicesList, subtitulo: "Exercicio 1) b. / Pg 49", operacao: "SomaCemPrimeirosNumeros()" },
  { apostila: "Manzano", titulo: "Pares 1 > 500 ", lista: manzanoExercicesList, subtitulo: "Exercicio 1) c. / Pg 49", operacao: "SomaNumerosPares()" },
  { apostila: "Manzano", titulo: "Ímpares 1 > 20", lista: manzanoExercicesList, subtitulo: "Exercicio 1) d. / Pg 49", operacao: "ExibicaoNumerosImpares()" },
  { apostila: "Manzano", titulo: "Potências de 3", lista: manzanoExercicesList, subtitulo: "Exercicio 1) e. / Pg 49", operacao: "ExibicaoPotenciasDeTres()" },
  { apostila: "Manzano", titulo: "Potência de base", lista: manzanoExercicesList, subtitulo: "Exercicio 1) f. / Pg 49", operacao: "PotenciaBase()" },
  { apostila: "Manzano", titulo: "Sequência Fibonacci", lista: manzanoExercicesList, subtitulo: "Exercicio 1) g. / Pg 49", operacao: "SerieFibonacci()" },
  { apostila: "Manzano", titulo: "Conversão Tempo", lista: manzanoExercicesList, subtitulo: "Exercicio 1) h. / Pg 49", operacao: "CoverterTemp()" },
  { apostila: "Manzano", titulo: "Soma e Média", lista: manzanoExercicesList, subtitulo: "Exercicio 1) i. / Pg 49", operacao: "SomaMedia()" },
  { apostila: "Manzano", titulo: "Valores Pares", lista: manzanoExercicesList, subtitulo: "Exercicio 1) j. / Pg 49", operacao: "ValoresPares()" },
  { apostila: "Manzano", titulo: "Área da Residência", lista: manzanoExercicesList, subtitulo: "Exercicio 1) k. / Pg 49", operacao: "AreaResidencia()" },
  { apostila: "Manzano", titulo: "Valores Positivos", lista: manzanoExercicesList, subtitulo: "Exercicio 1) l. / Pg 49", operacao: "ValoresPositivos()" },
  { apostila: "Manzano", titulo: "Calcular Quadrados", lista: manzanoExercicesList, subtitulo: "Exercicio 1) a. / Pg 52", operacao: "CalcularQuadrado()" },
  { apostila: "Manzano", titulo: "Pares(1 > 500)", lista: manzanoExercicesList, subtitulo: "Exercicio 1) b. / Pg 52", operacao: "SomarNumerosPares()" },
  { apostila: "Manzano", titulo: "Divisiveis por 4", lista: manzanoExercicesList, subtitulo: "Exercicio 1) c. / Pg 52", operacao: "MostrarDivisiveis()" },
  { apostila: "Manzano", titulo: "Grãos Xadrez", lista: manzanoExercicesList, subtitulo: "Exercicio 1) d. / Pg 52", operacao: "NumerosGraosXadrez()" },
  { apostila: "Manzano", titulo: "Somatória Fatorial", lista: manzanoExercicesList, subtitulo: "Exercicio 1) e. / Pg 52", operacao: "SomaDosFatoriais()" },
  { apostila: "Manzano", titulo: "Valores Númericos", lista: manzanoExercicesList, subtitulo: "Exercicio 1) f. / Pg 52", operacao: "SomaMediaDeValores()" },
  { apostila: "Manzano", titulo: "Fatorial Impares", lista: manzanoExercicesList, subtitulo: "Exercicio 1) g. / Pg 52", operacao: "FatorialNumerosImpares()" },
  { apostila: "Manzano", titulo: "Área de Cômodos", lista: manzanoExercicesList, subtitulo: "Exercicio 1) h. / Pg 52", operacao: "CalcularAreaDeComodos()" },
  { apostila: "Manzano", titulo: "Divisão Inteira", lista: manzanoExercicesList, subtitulo: "Exercicio 1) j. / Pg 52", operacao: "CalcularDivisaoInteira()" },
  { apostila: "Manzano", titulo: "Quadrados 15>200", lista: manzanoExercicesList, subtitulo: "Exercicio 1) a. / Pg 68", operacao: "SalcularQuadradosDe15A200()" },
  { apostila: "Manzano", titulo: "Tabuada Qualquer", lista: manzanoExercicesList, subtitulo: "Exercicio 1) b. / Pg 68", operacao: "SabuadaPersonalizada()" },
  { apostila: "Manzano", titulo: "Soma 100 números", lista: manzanoExercicesList, subtitulo: "Exercicio 1) c. / Pg 68", operacao: "SomarNumerosDe1A100()" },
  { apostila: "Manzano", titulo: "Somatório  1>500", lista: manzanoExercicesList, subtitulo: "Exercicio 1) d. / Pg 68", operacao: "SomarParesDe1A500()" },
  { apostila: "Manzano", titulo: "Id Número Impares", lista: manzanoExercicesList, subtitulo: "Exercicio 1) e. / Pg 68", operacao: "IdentificarNumerosImpares()" },
  { apostila: "Manzano", titulo: "Divisiveis 4 < 20", lista: manzanoExercicesList, subtitulo: "Exercicio 1) f. / Pg 68", operacao: "NumerosDivisiveisPor4s()" },
  { apostila: "Manzano", titulo: "Potência de 3", lista: manzanoExercicesList, subtitulo: "Exercicio 1) g. / Pg 68", operacao: "CalcularPotenciasDe3()" },
  { apostila: "Manzano", titulo: "Potência de B^E", lista: manzanoExercicesList, subtitulo: "Exercicio 1) h. / Pg 68", operacao: "PotenciasPersonalizadas()" },
  { apostila: "Manzano", titulo: "Termos Fibonacci", lista: manzanoExercicesList, subtitulo: "Exercicio 1) i. / Pg 68", operacao: "CalcularTermosFibonacci()" },
  { apostila: "Manzano", titulo: "Converter Celsius", lista: manzanoExercicesList, subtitulo: "Exercicio 1) j. / Pg 68", operacao: "ConverterCelsius()" },
  { apostila: "Manzano", titulo: "Fatorial Impar 1-10", lista: manzanoExercicesList, subtitulo: "Exercicio 1) k. / Pg 68", operacao: "FatorialDeImpares()" },
];

// Loop para criar os exercícios da Faccat
for (let i = 0; i < 48; i++) {
  const exercicioInfo = exerciciosFaccat[i % exerciciosFaccat.length];
  const titulo = exercicioInfo.titulo;
  const lista = exercicioInfo.lista;
  const subtitulo = exercicioInfo.subtitulo;
  const operacao = exercicioInfo.operacao;

  const exercicio = criarExercicio(titulo, exercicioInfo.apostila, subtitulo, operacao, './assets/images/faccatLogo.png');
  lista.appendChild(exercicio);
}

// Loop para criar os exercícios da Manzano
for (let i = 0; i < 57; i++) {
  const exercicioInfo = exerciciosManzano[i % exerciciosManzano.length];
  const titulo = exercicioInfo.titulo;
  const lista = exercicioInfo.lista;
  const subtitulo = exercicioInfo.subtitulo;
  const operacao = exercicioInfo.operacao;

  const exercicio = criarExercicio(titulo, exercicioInfo.apostila, subtitulo, operacao, './assets/images/manzanoLogo.png');
  lista.appendChild(exercicio);
}

function criarExercicio(nome, apostila, subtitulo, operacao, imagem) {
  const exercicio = document.createElement('li');
  exercicio.classList.add('grid-item'); // Adiciona a classe para manter a estilização da grid
  exercicio.innerHTML = `
    <div class="card category-card" onclick="${operacao}">
      <div class="card-icon">
        <img src="${imagem}" width="72" height="72" loading="lazy" alt="Data Science icon">
      </div>
      <div>
        <h3 class="title-lg">${nome}</h3>
        <p class="title-sm">${subtitulo}</p>
      </div>
      <a href="#" class="layer-link" aria-label="${nome}"></a>
    </div>
  `;
  return exercicio;
}


const preloader = document.querySelector("[data-preloader]");
const circle = document.querySelector("[data-circle]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  circle.style.animation = "none";
  document.body.classList.add("loaded");
});



window.addEventListener("scroll", headerActive);