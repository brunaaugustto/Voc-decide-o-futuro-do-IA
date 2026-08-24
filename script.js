const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const caixaResultado = document.querySelector('.texto-resultado');
const listsa = [item1, item2]
const perguntas = {
    tamanho: 20,
    tipo 'HB',
    cor: 'grafite',
    temBorrachaAtras: false
}
const perguntas = [ 
    {
        enunciado: "Qual é o maior planeta do Sistema Solar?",
        Alternativas: [
            "Marte",
            "Júpiter" 
        ] ,
    },
     {
        enunciado: "Qual é a capital da França?",
        Alternativas: [
            "Paris",
            "Lyon"
        ], 
    },
     {
        enunciado: "Quantos elementos químicos a tabela periódica possui oficialmente?",
        Alternativas: [
            "108",
            "118"
        ], 
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta () {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}
mostraPergunta();