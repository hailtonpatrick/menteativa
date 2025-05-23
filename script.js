function mostrarTela(id) {
  // Oculta todas as telas que comecem com "tela"
  const telas = document.querySelectorAll('div[id^="tela"]');
  telas.forEach(tela => tela.classList.add('tela-oculta'));

  // Mostra a tela desejada
  const telaEscolhida = document.getElementById(id);
  if (telaEscolhida) {
    telaEscolhida.classList.remove('tela-oculta');
  }
}

// Redimensiona o mapa interativo ao carregar
window.addEventListener('load', function() {
  if (typeof imageMapResize === 'function') {
    imageMapResize();
  }
});
