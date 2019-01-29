import React from 'react';
import PropTypes from 'prop-types';

class Menu extends React.Component {
  render () {
    return(
      <aside className="">
        <label>
          <div><i className="fas fa-home"></i></div>
          <div><i className="fas fa-user"></i></div>
          <div><i className="fas fa-images"></i></div>
          <div><i className="far fa-comment"></i></div>
        </label>
      </aside>
    );
  }
}

export default Menu;
