import { useState } from 'react';
import Jogo from './components/Jogo';
import Teclado from './components/Teclado';
import palavras from './palavras';



function App() {
  const [entrarJogo, setEntrarJogo] = useState(false);
  const [mostrarPalavra, setmostrarPalavra] = useState([]);
  const [chutarLetra, setChutarLetra] = useState([]);
  const [botaoClicado, setBotaoClicado] = useState([]);
  const [erro, setErro] = useState(0);
  const [palavraAcertada, setPalavraAcertada] = useState(false);
  const qntErroMax = 6;

  
   function inicializar(){
        setEntrarJogo(true);
        escolherPalavra();
        setChutarLetra([]);
        setBotaoClicado([]);
        setErro(0);
        setPalavraAcertada(false);
    }

    function escolherPalavra(){
      const embaralhar = Math.floor(Math.random() * palavras.length - 1);
      const palavraSorteada = palavras[embaralhar].split('');
      setmostrarPalavra(palavraSorteada);
  }

  function terminarJogo(ganhou) {
      setPalavraAcertada(true);
      !ganhou && setChutarLetra([...mostrarPalavra]);
      setEntrarJogo(false);
  }

    function checarLetra(letra){
      setBotaoClicado([...botaoClicado, letra]);
      const contemLetra = mostrarPalavra.includes(letra);
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
      const palavrasMostradas = [...mostrarPalavra];
      const checarPalavras = palavrasMostradas.map((l) => { return (letras.includes(l) ? true: false)});
      if (checarPalavras) {
        terminarJogo(true);
      }
  }

  return (
    <div className="App">
      <Jogo 
      entrarJogo={entrarJogo}
      mostrarPalavra={mostrarPalavra}
      chutarLetra={chutarLetra}
      erro={erro}
      palavraAcertada={palavraAcertada}
      inicializar={inicializar}
      terminarJogo={terminarJogo}
      qntErroMax={qntErroMax}/>
      <Teclado
      entrarJogo={entrarJogo}
      botaoClicado={botaoClicado}
      checarLetra = {checarLetra}  
           
      />
    </div>
  );
}

export default App;
