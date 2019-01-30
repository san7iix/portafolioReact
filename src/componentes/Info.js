import React from 'react'
import PropTypes from 'prop-types'

class Info extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      texto1: '¿Quién soy?',
      texto2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    };
  }

  render () {
    return(
      <div className="titulos">
        <h1 className="principal">¡{this.state.texto1}!</h1>
        <p>{this.state.texto2}</p>
      </div>
    );
  }
}

export default Info;
