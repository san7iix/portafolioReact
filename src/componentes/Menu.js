import React from 'react';
import PropTypes from 'prop-types';

class Menu extends React.Component {
  render () {
    return(
      <nav>
        <ul>
          <li><a href="#t1>"><i className="fas fa-home"/></a></li>
          <li><a href="#t2"><i className="fas fa-user"/></a></li>
          <li><a href="#t3"><i className="fas fa-images"/></a></li>
          <li><a href="#t4"><i className="far fa-comment"/></a></li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
