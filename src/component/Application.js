import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LoginForm from './LoginForm.js';
import ProductList from './ProductList.js';
import ProductEdit from './ProductEdit.js';

class Application extends React.Component {
  constructor(props) {
      super(props)
      this.handleUserLoginSuccess = this.handleUserLoginSuccess.bind(this);
      this.handleUserLogout = this.handleUserLogout.bind(this);

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

  handleUserLogout(event) {
    console.log('user logout');
    sessionStorage.removeItem('userIsLogged');
    this.setState({userIsLogged: false});
    event.preventDefault();
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
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <ul className="mr-auto">
              <li><img src="https://www.lespepitesdeberiz.fr/bundles/berizfront/images/logo.png"/></li>
            </ul>
            <form className="form-inline my-2 my-lg-0" onSubmit={this.handleUserLogout}>
              <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Déconnexion</button>
            </form>
          </nav>
          <div className="container">
            <Switch>
              <Route exact path="/" render={(props) => (
                <ProductList {...props} apiClient={this.props.apiClient}/>
              )}/>
              <Route path="/create" render={(props) => (
                <ProductEdit {...props}/>
              )}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Application;
