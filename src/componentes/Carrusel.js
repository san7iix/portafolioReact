import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const content = [
	{
		title: 'Ejemplo 1',
		description:
		'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
		button: 'Read More',
		image: 'http://i68.tinypic.com/14bovew.jpg',
		user: 'Luan Gjokaj',
		userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: 'Ejemplo 2',
		description:
		'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
		button: 'Discover',
		image: 'https://i.ibb.co/80xvhcB/motos.jpg',
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
          <div key={index} className="notran">
            <h2 >{article.title}</h2>
            <p>{article.description}</p>
						<img src={article.image} alt=""/>
						<br/>
            <button>{article.button}</button>
          </div>
          )
        }
      </Slider>
    );
  }
}

export default Carrusel;
