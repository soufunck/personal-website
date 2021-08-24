// efeito de scroll na pagina
window.sr = ScrollReveal({ reset: true, duration: 2000, distance: '100px'});

sr.reveal(`.title`, {origin: 'left',interval:300});
sr.reveal(`.display-5-subtitle`, {origin: 'top',interval:300});
sr.reveal(`img`, {origin: 'top',interval:300});

// botao de contato
function contato() {
    document.getElementById("conteudo-botao").classList.toggle("show");
  }

// ao clicar no botao, mostra o conteudo  
window.onclick = function(e) {
 if (!e.target.matches('.dropbotao')) {
    let conteudobotao = document.getElementById("conteudo-botao");
 if (conteudobotao.classList.contains('show')) {
     conteudobotao.classList.remove('show');
  }
 }
}
