import React from 'react';
import ReactDOM from 'react-dom';
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
    if (this.state.userIsLogged) {
      renderComponent = <MyComponent />;
    } else {
      renderComponent = <LoginForm loginSuccess={this.handleUserLoginSuccess}/>;
    }

    return(
      <div>
        {renderComponent}
      </div>
    );
  }
}

export default Application;
