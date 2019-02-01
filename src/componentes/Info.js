import React from 'react'
import PropTypes from 'prop-types'

class Info extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      texto1: '¿Quién soy?',
      texto2: 'Desarrollador junior, programador.',
      texto3: 'Estudiante de ingeniería de sistemas de la Universidad del Magdalena, desarrollador con conocimientos en NodeJS, ReacJS, MySQL, MongoDB, HTML5, CSS3, Bootstrap; con ánimos de trabajar activamente en nuevos proyectos. Me gusta compartir el conocimiento adquirido, pienso que esta es la mejor forma de reforzar lo que se sabe e incluso aprender nuevas cosas.'
    };
  }

  render () {
    return(
      <div className="titulos">
        <h1 className="principal">{this.state.texto1}</h1>
        <h2>{this.state.texto2}</h2>
        <br/>
        <p>{this.state.texto3}</p>
      </div>
    );
  }
}

export default Info;
