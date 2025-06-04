// Função para mostrar uma tela e ocultar as outras
function mostrarTela(id) {
  const telas = document.querySelectorAll('div[id^="tela"]');
  telas.forEach(tela => tela.classList.add('tela-oculta'));

  const telaEscolhida = document.getElementById(id);
  if (telaEscolhida) {
    telaEscolhida.classList.remove('tela-oculta');

    // Se quiser, pode resetar scroll da tela inicial
    if (id === 'telaInicial') {
      window.scrollTo(0, 0);
      if (typeof imageMapResize === 'function') {
        imageMapResize();
      }
    }
  }
}

window.addEventListener('load', function () {
  if (typeof imageMapResize === 'function') {
    imageMapResize();
  }
});


// --- Jogo de reação ---

let esperandoReacao = false;
let tempoInicio = 0;

function iniciarJogoReacao() {
  // Esconde todas as telas e mostra a tela do jogo
  mostrarTela('telaJogoReacao');

  const jogoArea = document.getElementById('jogoArea');
  const resultado = document.getElementById('resultadoJogo');
  const distanciaElemento = document.getElementById('distanciaJogo');

  resultado.textContent = '';
  distanciaElemento.textContent = '';
  jogoArea.style.backgroundColor = 'red';
  jogoArea.textContent = 'Aguarde a cor verde...';
  esperandoReacao = false;

  // Tempo aleatório entre 1 e 4 segundos para ficar verde
  const tempoEspera = 1000 + Math.random() * 3000;

  setTimeout(() => {
    jogoArea.style.backgroundColor = 'green';
    jogoArea.textContent = 'TOQUE AGORA!';
    tempoInicio = performance.now();
    esperandoReacao = true;
  }, tempoEspera);
}

function finalizarReacao() {
  if (!esperandoReacao) return;

  const tempoFim = performance.now();
  const tempoReacao = tempoFim - tempoInicio;
  esperandoReacao = false;

  const resultado = document.getElementById('resultadoJogo');
  const jogoArea = document.getElementById('jogoArea');

  jogoArea.style.backgroundColor = '#004880';
  jogoArea.textContent = 'Teste concluído!';

  // Mensagens baseadas no tempo em ms
  let frase = '';
  if (tempoReacao < 150) frase = 'Incrível! Sua reação é excelente.';
  else if (tempoReacao < 250) frase = 'Muito bom! Continue assim.';
  else if (tempoReacao < 400) frase = 'Bom, mas pode melhorar.';
  else frase = 'Tente focar mais da próxima vez.';

  resultado.textContent = `Seu tempo de reação foi: ${tempoReacao.toFixed(0)} ms. ${frase}`;

  // Cálculo da distância percorrida
  const tempoReacaoSegundos = tempoReacao / 1000;
  const distancia = tempoReacaoSegundos * 28;

  const distanciaElemento = document.getElementById('distanciaJogo');
  distanciaElemento.textContent = `Se estivesse em um carro a 100 km/h e um imprevisto acontecesse, você andaria ${distancia.toFixed(2)} metros até seu cérebro entender o que aconteceu.`;
}

// Eventos para clique ou toque na área do jogo
document.getElementById('jogoArea').addEventListener('click', finalizarReacao);
document.getElementById('jogoArea').addEventListener('touchstart', e => {
  e.preventDefault();
  finalizarReacao();
});

// Botão para voltar para tela inicial
document.getElementById('btnVoltarJogo').addEventListener('click', () => {
  mostrarTela('telaInicial');
});
