import React from 'react';
import ReactDOM from 'react-dom';
import Application from './component/Application.js';
import ApiClient from './client/ApiClient.js';

var client = new ApiClient();

ReactDOM.render(
  <Application apiClient={client}/>,
  document.getElementById('app')
);
