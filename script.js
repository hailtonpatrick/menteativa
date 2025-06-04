function mostrarTela(id) {
  const telas = document.querySelectorAll('div[id^="tela"]');
  telas.forEach(tela => tela.classList.add('tela-oculta'));

  const telaEscolhida = document.getElementById(id);
  if (telaEscolhida) {
    telaEscolhida.classList.remove('tela-oculta');
    if (telaId === 'telaInicial') {
    window.scrollTo(0, 0);
  }
  }
}

window.addEventListener('load', function() {
  if (typeof imageMapResize === 'function') {
    imageMapResize();
  }
});
