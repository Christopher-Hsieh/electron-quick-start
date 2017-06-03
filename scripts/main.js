import React from 'react';
import ReactDOM from 'react-dom';
import CentralNav from '../views/centralNav.jsx';
import Aside from '../views/aside.jsx';

window.onload = function(){
  ReactDOM.render(<CentralNav />, document.getElementById('central-nav'));
  ReactDOM.render(<Aside />, document.getElementById('aside-react'));
}
