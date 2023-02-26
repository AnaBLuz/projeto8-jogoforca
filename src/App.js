import Teclado from './components/Teclado';

function App() {
  return (
    <div className="App">
      <div className="imgbotao">
      <img data-test="game-image" src="/assets/img/forca0.png" alt="imagem da forca"/>
      <button data-test="choose-word" className='escolher'>Escolher Palavra</button>
      </div>
      <Teclado />
    </div>
  );
}

export default App;
