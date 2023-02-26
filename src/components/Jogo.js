

function Jogo({
    iniciarJogo,
    renderizarPalavras,
    chutarLetra,
    erro,
    palavraAcertada,
    inicioJogo,
    qntErroMax,
    }) {
return(
    <div className="imgbotao">
      <img data-test="game-image" src="/assets/img/forca0.png" alt="imagem da forca"/>
      <button data-test="choose-word" className='escolher' onClick={inicioJogo}>{iniciarJogo ? "Mudar Palavra" : "Escolher Palavra"}</button>
    </div>
);

}

export default Jogo;

