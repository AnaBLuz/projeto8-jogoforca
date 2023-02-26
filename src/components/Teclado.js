
import Letra from './Letra';

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function Teclado() {
    return (
      <div className="teclado">
        <>
        {alfabeto.map((l, index) => <Letra
        key={index}
        
        letras={l}
        
        
        />
        )}
        </>
      </div>
    );
  }
  
export default Teclado;
  