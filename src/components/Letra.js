
function Letra({
    letras,
    testarLetra,
    desabilitado,
    
    }){
        
    return(
        <>
        <button  data-test="letter" className="letra" disabled={desabilitado} onClick={ (() => testarLetra(letras)) }>
              {letras}
        </button>
        </>
    );

}
export default Letra;