import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <div>MyComponent</div>
        <div className="fixed-action-btn">
          <Link to="/create" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">+</i></Link>
          </div>
        </div>
    )
  }
}

export default MyComponent;
