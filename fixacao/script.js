/*
// Seleciona o elemento p usando seu id
const paragrafo = document.getElementById("paragrafo");

// Lê o valor innerHTML do elemento e o armazena em uma variável
const valorParagrafo = paragrafo.innerHTML;

// Exibe o valor lido no console do navegador
console.log(valorParagrafo);

const input = document.getElementById('texto');
input.addEventListener('input', function() {
  const valorAtual = input.value;
  console.log(valorAtual);
});


const button = document.querySelector('button');
const p = document.querySelector('#paragrafo');
const inputUm = document.querySelector('#texto');

button.addEventListener('click', function() {
  p.innerHTML = inputUm.value;
});
*/





// PARTE 1: acessando o p
const paragrafo = document.getElementsByTagName('p')[0]

// imprimindo innerHTML do p
console.log(paragrafo.innerHTML)


// PARTE 2: acessando o input
const input = document.getElementById('texto')

console.log(input)
console.log(input.value)

// função para imprimir value
const digitaInput = () => {
    console.log(input.value)
}


// PARTE 3: trocando conteúdos
const trocaConteudo = () => {
    paragrafo.innerHTML = input.value

    // extra: para limpar o input depois
    input.value = ''
}

