import { useState } from 'react';
import Jogo from './components/Jogo';
import Teclado from './components/Teclado';
import palavras from './palavras';



function App() {
  const [entrarJogo, setEntrarJogo] = useState(false);
  const [mostrarPalavra, setmostrarPalavra] = useState([]);
  const [chutarLetra, setChutarLetra] = useState([]);
  const [letraClicada, setLetraClicada] = useState([]);
  const [erro, setErro] = useState(0);
  const [corPalavra, setCorPalavra] = useState("preto")
  const ErroLimite = 6;
  const [desabilitado,setDesabilitado] = useState(true)
  
   function inicializar(){
        setEntrarJogo(true);
        sortearPalavra();
        setChutarLetra([]);
        setLetraClicada([]);
        setErro(0);
        setCorPalavra('preto')
        setDesabilitado(false)

    }

    function sortearPalavra(){
      const embaralhar = Math.floor(Math.random() * palavras.length - 1);
      const palavraSorteada = palavras[embaralhar].split('');
      setmostrarPalavra(palavraSorteada);
      console.log(palavraSorteada)
  }

  function FimJogo(ganhou) {
      setEntrarJogo(false);
      setDesabilitado(true)
    if(ganhou){
      setCorPalavra('verde')
    }
    else{
      setCorPalavra('vermelho')
      setChutarLetra(mostrarPalavra)
    }
  }

  function testarLetra(letra){
    
    setLetraClicada([...letraClicada, letra]);
      
      const letras = [...chutarLetra, letra]
      const incluiLetra = mostrarPalavra.includes(letra);

          if (incluiLetra) {
              setChutarLetra(letras);
          } else {
              const quantErros = erro + 1;
              console.log(quantErros);
              setErro(quantErros);
              if (quantErros === ErroLimite) {
                FimJogo(false)
              
              }
      }
      const palavrasMostradas = [...mostrarPalavra];

      const checarPalavra = palavrasMostradas.every((l) => letras.includes(l));

      if (checarPalavra) {
        FimJogo(true);
      }
  }

  return (
    <div className="App">
      <Jogo 
      entrarJogo={entrarJogo}
      mostrarPalavra={mostrarPalavra}
      chutarLetra={chutarLetra}
      erro={erro}
      inicializar={inicializar}
      corPalavra={corPalavra}/>
      <Teclado
      testarLetra = {testarLetra}   
      desabilitado = {desabilitado}
      chutarLetra = {chutarLetra}    
      />
    </div>
  );
}

export default App;
