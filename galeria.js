// Classe conteudo (linha 52 de galeria.html)
sr.reveal(`.conteudo`, {origin: 'right',interval:300});

// filtro de categoria 
filtro("todas")
function filtro(c) {
  var x, i;
  x = document.getElementsByClassName("c");
  if (c == "todas") c = "";
  for (i = 0; i < x.length; i++) {
    removerclasse(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addclasse(x[i], "show");
  }
}

// adicionar a classe do filtro
function addclasse(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

// remover a classe do filtro
function removerclasse(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// botoes de categoria
let containerbotao = document.getElementById("container-botao");
let botoes = containerbotao.getElementsByClassName("botao");
for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
