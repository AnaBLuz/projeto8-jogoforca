
import palavras from './palavras';
import Jogo from './components/Jogo';
import Teclado from './components/Teclado';
import { useState } from 'react';


function App() {
  const [iniciarJogo, setIniciarJogo] = useState(false);
  const [renderizarPalavras, setRenderizarPalavras] = useState([]);
  const [chutarLetra, setChutarLetra] = useState([]);
  const [botaoClicado, setBotaoClicado] = useState([]);
  const [erro, setErro] = useState(0);
  const [palavraAcertada, setPalavraAcertada] = useState(false);
  const qntErroMax = 6;

  function escolherPalavra(){
    const embaralhar = Math.floor(Math.random() * palavras.length - 1);
    const palavraSeparada = palavras[embaralhar].split('');
    setRenderizarPalavras(palavraSeparada);
}

function inicioJogo(){
        setIniciarJogo(true);
        escolherPalavra();
        setChutarLetra([]);
        setBotaoClicado([]);
        setErro(0);
        setPalavraAcertada(false);
    }

  function terminarJogo(ganhou) {
      setPalavraAcertada(true);
      !ganhou && setChutarLetra([...renderizarPalavras]);
      setIniciarJogo(false);
  }

    function checarLetra(letra){
      setBotaoClicado([...botaoClicado, letra]);
      const contemLetra = renderizarPalavras.includes(letra);
      const letras = [...chutarLetra, letra]
          if (contemLetra) {
              setChutarLetra(letras);
          } else {
              const quantidadeErros = erro + 1;
              setErro(quantidadeErros);
              if (quantidadeErros === qntErroMax) {
                  terminarJogo(false);
              }
      }
      const palavrasMostradas = [...renderizarPalavras];
      const checarPalavras = palavrasMostradas.every((l) => letras.includes(l));
      if (checarPalavras) {
        terminarJogo(true);
      }
  }

  return (
    <div className="App">
      <Jogo 
      iniciarJogo={iniciarJogo}
      renderizarPalavras={renderizarPalavras}
      chutarLetra={chutarLetra}
      erro={erro}
      palavraAcertada={palavraAcertada}
      inicioJogo={inicioJogo}
      terminarJogo={terminarJogo}
      qntErroMax={qntErroMax}/>
      <Teclado
      checarLetra = {checarLetra}       
      />
    </div>
  );
}

export default App;
