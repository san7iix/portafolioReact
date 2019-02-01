import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const content = [
	{
		title: 'landing web',
		description:
		'Ejemplo de landing web sencilla con 5 secciones y optimizada en tiempos de carga.',
		button: 'Leer más',
		image: 'https://i.imgur.com/MkabVWj.jpg',
		user: 'Luan Gjokaj',
		userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: 'RMproject',
		description:
		'Sistema de gestión de entrada y salida de vehículos automotor realizado como proyecto de áula.',
		button: 'Descubrir',
		image: 'https://i.imgur.com/C5boPw4.jpg',
		user: 'Erich Behrens',
		userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},
];

class Carrusel extends React.Component {

  render () {
    return(
      <Slider className="slider" autoplay="4000" infinite = "true">
        {content.map(

          (article, index) =>
					<div>
						<div class="tituloD">
							<h2 >{article.title}</h2>
							<p>{article.description}</p>
							<br/>
							<a>{article.button}</a>
						</div>
						<br/>
	          <div key={index} className="imagen" style={{ background: `url('${article.image}') no-repeat center center` }}>
	          </div>
					</div>
          )
        }
      </Slider>
    );
  }
}

export default Carrusel;
