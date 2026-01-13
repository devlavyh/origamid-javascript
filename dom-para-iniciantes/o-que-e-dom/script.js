// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector(".ativo");

// Retorne a linguagem do navegador
const languageNav = window.navigator.language;
console.log(languageNav);

const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  if(languageNav.toLowerCase() === 'pt-br') {
    window.alert("O navegador está em pt-BR!");
  }

  window.alert("O navegador está em pt-BR!");
});

// Retorne a largura da janela
const larguraTela = window.innerHeight;
console.log(larguraTela);