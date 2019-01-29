import React, { Component } from 'react';
import './App.css';

//Componentes
import Menu from './componentes/Menu';
import Titulos from './componentes/Titulos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Titulos />
        <footer>
          <div className="derechos">
            <p>Santiago Martínez - Copyrigth 2019 todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
