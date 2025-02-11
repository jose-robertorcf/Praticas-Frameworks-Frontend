import logo from './logo.svg';
import './App.css';
import {Ola} from './Ola';


function App() {

  const nome = 'João das Neves';

  const elemento = <h1>Olá {nome}!</h1>;


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edite <code>src/App.js</code> e salve para recarregar.
        </p>
        <Ola nomecompleto='Uzumaki Naruto' nomemae='Maria'/>
        {elemento}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda React
        </a>
      </header>
    </div>
  );
}

export default App;
