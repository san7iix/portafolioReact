import React, { Component } from 'react';
import './App.css';

//Componentes
import Menu from './componentes/Menu';
import Titulos from './componentes/Titulos';
import Info from './componentes/Info';
import Pie from './componentes/Pie';
import Formulario from './componentes/Formulario';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ct" id="t1">
          <div className="ct" id="t2">
            <div className="ct" id="t3">
              <div className="ct" id="t4">
                <section>
                  <Menu/>
                  <div className="page" id="p1">
                    <Titulos/>
                    <Pie className="pie"/>
                  </div>
                  <div className="page" id="p2">
                    <Info/>
                    <Pie className="pie"/>
                  </div>
                  <div className="page" id="p3">
                    <h1>Esto es un portafolio.</h1>
                  </div>
                  <div className="page" id="p4">
                    <Formulario/>
                    <Pie className="pie"/>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
