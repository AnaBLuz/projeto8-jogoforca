import imagem0 from '../assets/img/forca0.png';
import imagem1 from '../assets/img/forca1.png';
import imagem2 from '../assets/img/forca2.png';
import imagem3 from '../assets/img/forca3.png';
import imagem4 from '../assets/img/forca4.png';
import imagem5 from '../assets/img/forca5.png';
import imagem6 from '../assets/img/forca6.png';

function Jogo({
    iniciarJogo,
    renderizarPalavras,
    chutarLetra,
    erro,
    palavraAcertada,
    inicioJogo,
    qntErroMax,
    }) {
        const forcas = [imagem0, imagem1, imagem2, imagem3, imagem4, imagem5, imagem6];
   return(
    <>
    <div className="imgbotao">
      <img data-test="game-image" src={forcas[erro]} alt="imagem da forca"/>
      <button data-test="choose-word" className='escolher' onClick={inicioJogo}>{iniciarJogo ? "Mudar Palavra" : "Escolher Palavra"}</button>
    </div>
    <p data-test="word" style={{display: renderizarPalavras.length <= 0 ? 'none' : "initial"}}
      className={erro === qntErroMax ? 'errou' : palavraAcertada ? 'acertou' : 'normal'}>
      {renderizarPalavras.map((l) => {return chutarLetra.includes(l) ? l : "_";})}
    </p>
    </>

    );

}

export default Jogo;

