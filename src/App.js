import './App.css';
import Teste from './components/Teste';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Teste />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Teste de Deploy sem Source Map</p>
      </header>
    </div>
  );
}

export default App;
