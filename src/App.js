import React, { Component } from 'react';
import './App.css';

//Componentes
import Menu from './componentes/Menu';
import Titulos from './componentes/Titulos';
import Info from './componentes/Info';
import Pie from './componentes/Pie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="ct" id="t1">
          <div class="ct" id="t2">
            <div class="ct" id="t3">
              <div class="ct" id="t4">
                <section>
                  <Menu/>
                  <div class="page" id="p1">
                    <Titulos/>
                    <Pie className="pie"/>
                  </div>
                  <div class="page" id="p2">
                    <Info/>
                    <Pie className="pie"/>
                  </div>
                  <div class="page" id="p3">
                    <h1>Esto es un portafolio.</h1>
                  </div>
                  <div class="page" id="p4">
                    <h1>Esto es un formulario de contacto.</h1>
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
