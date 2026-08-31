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
            {
                texto:"Júpiter",
                afirmacao:"afirmacao"
            }
            "Marte" 
        ] ,
    },
     {
        enunciado: "Qual é a capital da França?",
        Alternativas: [
             {
                texto:"Paris",
                afirmacao:"afirmacao"
            }
            "Lyon"
        ], 
    },
     {
        enunciado: "Quantos elementos químicos a tabela periódica possui oficialmente?",
        Alternativas: [
          {
                texto:"118",
                afirmacao:"afirmacao"
            }
            "108"
        ], 
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta () {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativa ();
}

function mostraAlternativa(){
    for (const alternativa of perguntaAtual.alternativas) {
       const botaoAlternativa = document.createElement("button");
       botaoAlternativa.textContent = alternativa.texto;
       botaoAlternativa.addEventListener("click", function (){
        atual++;
        mostraPergunta();
       })
    }
}
