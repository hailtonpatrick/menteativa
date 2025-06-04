function mostrarTela(id) {
  const telas = document.querySelectorAll('div[id^="tela"]');
  telas.forEach(tela => tela.classList.add('tela-oculta'));

  const telaEscolhida = document.getElementById(id);
  if (telaEscolhida) {
    telaEscolhida.classList.remove('tela-oculta');

    // Sempre volta ao topo quando qualquer tela abrir
    window.scrollTo(0, 0);

    // Reajusta mapa interativo só na tela inicial
    if (id === 'telaInicial') {
      if (typeof imageMapResize === 'function') {
        imageMapResize();
      }
    }
  }
}

window.addEventListener('load', function() {
  if (typeof imageMapResize === 'function') {
    imageMapResize();
  }
});
