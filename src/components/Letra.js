
function Letra({
    letras,
    checarLetra,
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