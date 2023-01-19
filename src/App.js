import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <Navbar/>
        <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png' alt='charizard' className='app-logo'/>
        <h1>Hello World</h1>
        <p>
          This is a homepage for all fans of the best pokemon ever charizard
        </p>
        <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png' alt='dragonite' className='app-logo'/>
        <p>Dragonite is rad too but he's no charizard</p>
        <h2>Join our mailing list</h2>
        <input placeholder='Email Address'/>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
