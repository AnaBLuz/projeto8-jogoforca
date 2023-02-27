
import Letra from './Letra';

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function Teclado( 
  {entrarJogo,
  botaoClicado,
  checarLetra}) {
    return (
      <div className="teclado">
        <>
        {alfabeto.map((l, index) => <Letra
        key={index}
        entrarJogo={entrarJogo}
        letras={l}
        botaoClicado={botaoClicado}
        checarLetra={checarLetra}
        />
        )}
        </>
      </div>
    );
  }
  
export default Teclado;
  