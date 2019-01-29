import React from 'react'
import PropTypes from 'prop-types'

class Titulos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      texto: 'Hola',
      texto2: 'Tengo lo que necesitas.'
    };
  }

  render () {
    return(
      <div className="containerT">
        <div className="titulos">
          <h1 className="principal">¡{this.state.texto}!</h1>
          <h2>{this.state.texto2}</h2>
        </div>
      </div>
    );
  }
}

export default Titulos;
