import './App.css';
import { arr_data, StartButton } from './components/StartButton';

function App() {
  return (
    <div className="App">
      <h1 style={{ fontSize: '5rem' }}>SPORT QUIZ!</h1>
      <StartButton />
      <div id="question"></div>
    </div>
  );
}

export default App;
