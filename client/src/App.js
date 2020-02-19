import React from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios').default;

function App() {

  function sayHello(){
    axios.get('/postagens')
  .then(response => {console.log(response)
    axios.get('/comentario/um')
    .then(function(response) {console.log(response)} )
  })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={sayHello}> BOTÃO XD! kkkk</button>
      </header>
    </div>
  );
}

export default App;
