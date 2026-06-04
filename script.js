
const textoElemento = document.querySelector(".texto");
const frases = ["Impressora 3D", "Super Rápida", "Baixo Nível de Ruído", "Alta Performance", "Firmware Marlin", "Ideal para PETG, PLA, TPU"];
let fraseAtual = 0;
let letraAtual = 0;
let apagando = false;

function digitar() {
  const fraseCompleta = frases[fraseAtual];
  
  if (apagando) {
    // Apaga o texto: remove a última letra
    textoElemento.innerText = fraseCompleta.substring(0, letraAtual - 1);
    letraAtual--;
  } else {
    // Escreve o texto: adiciona a próxima letra
    textoElemento.innerText = fraseCompleta.substring(0, letraAtual + 1);
    letraAtual++;
  }

  // Define a velocidade da digitação/apagamento
  let velocidade = apagando ? 25 : 50;

  // Verifica se terminou de escrever a frase
  if (!apagando && letraAtual === fraseCompleta.length) {
    apagando = true;
    velocidade = 2000; // Pausa antes de começar a apagar
  } 
  // Verifica se terminou de apagar a frase
  else if (apagando && letraAtual === 0) {
    apagando = false;
    fraseAtual = (fraseAtual + 1) % frases.length; // Passa para a próxima frase
    velocidade = 500; // Pequena pausa antes de escrever a nova
  }

  setTimeout(digitar, velocidade);
}

// Inicia a função
digitar();

//fim texto digitado secaoIncial


const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});

//fim cursor personalizado


$(document).ready(function() {
    $(".mobile_btn").on('click', function() {
      $(".mobile-menu").toggleClass('active');
    });
});

const observadorNomes = new IntersectionObserver((entradas) => {
  entradas.forEach((entry) => {
    if(entry.isIntersecting){
        entry.target.classList.add('nomevisivel')
        entry.target.classList.remove('nomenaovisivel')
    }else{
        entry.target.classList.remove('nomevisivel')
        entry.target.classList.add('nomenaovisivel')  
    }
  })
})

const nomesEquipe = document.querySelectorAll('.nomenaovisivel')

nomesEquipe.forEach((nomeEquipe) => observadorNomes.observe(nomeEquipe))

//fim nomes equipe

const textoElementoEquipe = document.querySelector(".texto2");
const frasesEquipe = ["Equipe", "Quem Somos", "NexLayer"];
let fraseAtualEquipe = 0;
let letraAtualEquipe = 0;
let apagandoEquipe = false;

function digitarEquipe() {
  const fraseCompletaEquipe = frasesEquipe[fraseAtualEquipe];
  
  if (apagandoEquipe) {
    // Apaga o texto: remove a última letra
    textoElementoEquipe.innerText = fraseCompletaEquipe.substring(0, letraAtualEquipe - 1);
    letraAtualEquipe--;
  } else {
    // Escreve o texto: adiciona a próxima letra
    textoElementoEquipe.innerText = fraseCompletaEquipe.substring(0, letraAtualEquipe + 1);
    letraAtualEquipe++;
  }

  // Define a velocidade da digitação/apagamento
  let velocidade = apagandoEquipe ? 25 : 50;

  // Verifica se terminou de escrever a frase
  if (!apagandoEquipe && letraAtualEquipe === fraseCompletaEquipe.length) {
    apagandoEquipe = true;
    velocidade = 2000; // Pausa antes de começar a apagar
  } 
  // Verifica se terminou de apagar a frase
  else if (apagandoEquipe && letraAtualEquipe === 0) {
    apagandoEquipe = false;
    fraseAtualEquipe = (fraseAtualEquipe + 1) % frasesEquipe.length; // Passa para a próxima frase
    velocidade = 500; // Pequena pausa antes de escrever a nova
  }

  setTimeout(digitarEquipe, velocidade);
}

// Inicia a função
digitarEquipe();
console.log(textoElementoEquipe)

//fim texto digitado secao equipe


const observadorLinks = new IntersectionObserver((entries) => {
  entries.forEach((entry2) => {
    if(entry2.isIntersecting){
        entry2.target.classList.add('linkvisivel')
        entry2.target.classList.remove('linknaovisivel')
    }
  })
})

const linksDocumentacao = document.querySelectorAll('.linknaovisivel')

linksDocumentacao.forEach((linkDocs) => observadorLinks.observe(linkDocs))

console.log(linksDocumentacao)