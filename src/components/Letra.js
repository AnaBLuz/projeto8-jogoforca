
function Letra({
    letras,
    checarLetra,
    entrarJogo
    }){
        
    return(
        <>
        <button  data-test="letter" className="letra" onClick={() => checarLetra(letras)}>
              {letras}
        </button>
        </>
    );
    
}
export default Letra;