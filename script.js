function mostrarTela(id) {
  // Oculta todas as telas
  const telas = document.querySelectorAll('div[id^="tela"]');
  telas.forEach(tela => tela.classList.add('tela-oculta'));

  // Mostra a tela escolhida
  const telaEscolhida = document.getElementById(id);
  telaEscolhida.classList.remove('tela-oculta');
}

