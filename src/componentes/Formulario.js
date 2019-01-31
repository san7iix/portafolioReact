import React from 'react'
import PropTypes from 'prop-types'

class Formulario extends React.Component {
  render () {
    return (
      <div className="form">
        <h1 class="principal">Contacto</h1>
        <form className="" action="index.html" method="post">
          <p>
            <label for="nombre">Mi nombre es </label>
            <input type="text" name="nombre" className="raya"/>
          </p>
          <p>
            <label for="select">y quiero </label>
            <select name="select" className="raya">
              <option value="value1">solo decir hola</option>
              <option value="value2">conocer más de ti</option>
              <option value="value3">contactarte para un proyecto</option>
            </select>
            </p>
            <p>
              <label for="mensaje">Mensaje (opcional):</label>
            </p>
            <textarea name="mensaje" rows="8" cols="80" id="mensaje"></textarea>
            <div className="bot">
              <input type="submit" name="enviar" value="Enviar" id="enviar"/>
            </div>
        </form>
      </div>
    );
  }
}

export default Formulario;
