import React from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios').default;

function App() {
 


  function criarRelatorio(){
    axios.get('/relatorio/asdfa')
    .then(function(response) {console.log('1',response)} )
  }

  function imprimirRelatorio(){
    window.open('http://localhost:3001/api/pdf/asdfa','__blank')
  }

  function sayHello(){
    axios.get('/postagens')
  .then(response => {console.log(response)
    axios.get('/comentario/1')
    .then(function(response) {console.log('1',response)} )  
    axios.get('/comentario/2')
    .then(response=>{console.log('2', response)} )
    axios.get('/comentario/3')
    .then(function(response){console.log('3',response)})
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
       
        <button onClick={criarRelatorio}> Criar Relatório </button>
        <button onClick={imprimirRelatorio}> Imprimir Relatório </button>
      </header>
    </div>
  );
}

export default App;
