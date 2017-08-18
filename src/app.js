import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm.js';
import MyComponent from './MyComponent.js';

ReactDOM.render(
  <div>
    <LoginForm />
    <MyComponent />
  </div>,
  document.getElementById('app')
);
