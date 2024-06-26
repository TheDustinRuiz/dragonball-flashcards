import './App.css'
import Information from './components/Information.jsx';
// import UserInput from './components/UserInput.jsx';

const App = () => {
  return (
    <div className="App">
      <h1>Dragonball Trivia</h1>
      <h2 className="heading">Learn about the world of Dragon Ball and honor the legacy left behind by its creator,</h2>
      <h2 className="heading">Akira Toriyama, who passed away on March 1st, 2024</h2>
      <h3>Number of cards: 10</h3>
      <Information />
    </div>
  )
}

export default App
