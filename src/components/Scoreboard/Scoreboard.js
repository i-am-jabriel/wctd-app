export default function Scoreboard({lowerScore, score, incrementScore}){
  return  <div className='score-container'>
    <button onClick={lowerScore}>-</button>
    <h3>Current Count: {score}</h3>
    <button onClick={incrementScore}>+</button>
</div>
}