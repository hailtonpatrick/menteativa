function mostrarTela(id) {
  // Oculta todas as telas
  const telas = document.querySelectorAll('div[id^="tela"]');
  telas.forEach(tela => tela.classList.add('tela-oculta'));

  // Mostra a tela escolhida
  const telaEscolhida = document.getElementById(id);
  telaEscolhida.classList.remove('tela-oculta');
}
window.addEventListener('load', function() {
  if (typeof imageMapResize === 'function') {
    imageMapResize();
  }
});

function mostrarTela(id) {
  const telas = document.querySelectorAll('div[id^="tela"]');
  telas.forEach(tela => tela.classList.add('tela-oculta'));
  document.getElementById(id).classList.remove('tela-oculta');
}
function mostrarTela(id) {
  document.getElementById('telaInicial').style.display = (id === 'telaInicial') ? 'block' : 'none';
  document.getElementById('telaQueIsso').style.display = (id === 'telaQueIsso') ? 'block' : 'none';
}

