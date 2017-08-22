import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import LoginForm from './LoginForm.js';
import MyComponent from './MyComponent.js';

class Application extends React.Component {
  constructor(props) {
      super(props)
      this.handleUserLoginSuccess = this.handleUserLoginSuccess.bind(this);

      console.log(sessionStorage.getItem('userIsLogged'));

      this.state = {
        userIsLogged: (sessionStorage.getItem('userIsLogged') == null ? false : sessionStorage.getItem('userIsLogged'))
      };
  }

  handleUserLoginSuccess() {
    console.log('user login with success');
    sessionStorage.setItem('userIsLogged', true);
    this.setState({userIsLogged: true});
  }

  render() {
    let renderComponent = null;
    if (!this.state.userIsLogged) {
      return(
        <LoginForm loginSuccess={this.handleUserLoginSuccess}/>
      )
    }

    return(
      <Router>
        <div>
          <Route path="/" component={MyComponent}/>
        </div>
      </Router>
    );
  }
}

export default Application;
