import './App.css';
import Navbar from './components/Navbar/Navbar';
import Scoreboard from './components/Scoreboard/Scoreboard';
import { useState, useEffect } from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);

  const updateSeconds = () => setSeconds(seconds + 1);

  // run this code only when the component is loaded
  useEffect(() => {
    setTimeout(updateSeconds, 1000);
  },[]);

  const [score, setScore] = useState(100);
  const incrementScore = () => setScore(score + 1);
  const lowerScore = () => setScore(score - 1);

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  
  // create variable for form data
  const [data, setData] = useState({});
  
  // updates the data based on the input name and sets it to the inputs value
  const updateData = (e) => {
    setData({
      // store the previous value of data
      ...data, 
      // set the key of the input name to the inputs value
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="App">
      <div className='main-container'>
        <p> You have been on my site for {seconds} seconds</p>
        <Navbar title='My new Navbar title'/>
        <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png' alt='charizard' className='app-logo'/>
        <h1>Hello World</h1>
        <p>
          This is a homepage for all fans of the best pokemon ever charizard
        </p>
        <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png' alt='dragonite' className='app-logo'/>
        <p>Dragonite is rad too but he's no charizard</p>
        <h2>Join our mailing list</h2>
        <input placeholder='Name' name='name' onInput={updateData}/>
        <input placeholder='Email Address' name='email' onInput={updateData}/>
        <input placeholder='Phone Number' name='phone' onInput={updateData}/>
        <button>Submit</button>
        <Navbar title='This is the scoreboard'/>
       <Scoreboard score={score} incrementScore={incrementScore} lowerScore={lowerScore}/>
       {score}
      </div>
    </div>
  );
}

export default App;
