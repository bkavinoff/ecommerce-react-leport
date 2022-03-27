//css:
import './App.css';

//Componentes:
import Navbar from './components/Navbar/Navbar'
import ListProducts from './components/ListProducts/ListProducts'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ListProducts>
        <p>Productos en Oferta</p>
      </ListProducts>
    </div>
  );
}

export default App;
