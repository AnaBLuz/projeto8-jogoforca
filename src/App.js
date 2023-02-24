import Teclado from './components/Teclado';

function App() {
  return (
    <div className="App">
      <div className="imgbotao">
      <img src="/assets/img/forca0.png" alt="imagem da forca"/>
      <button>Escolher Palavra</button>
      </div>
      <Teclado />
    </div>
  );
}

export default App;
