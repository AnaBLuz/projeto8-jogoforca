
function Letra(props){
    return(
        <>
        <button  data-test="letter" className="letra" >
              {props.letras}
        </button>
        </>
    );
    
}
export default Letra;