
import React from 'react';
import ReactDOM from 'react-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  login(event) {
    console.log('login: ' + this.state.email + ' - password: ' + this.state.password);
    if (this.state.email == 'arnaud.georgin@gmail.com' && this.state.password == 'mdp') {
      this.props.loginSuccess();
    } else {
      this.setState({error: "Error lors de l'authentification"});
    }
    event.preventDefault();
  }

  render() {
    var styles = {
      form: {
        maxWidth: '330px',
        padding: '15px',
        margin: '0 auto'
      },
      h2: {
        marginBottom: '10px'
      },
      button: {
        marginTop: '15px'
      },
      error: {
        color: '#D8000C',
        backgroundColor: '#FFBABA',
        padding: '12px',
        marginBottom: '10px'
      }
    };

    let errorDiv = null;
    if (this.state.error.length > 0) {
        errorDiv = <div style={styles.error}>{this.state.error}</div>;
    }

    return (
      <div className="container">
        <form className="form-signin" style={styles.form} onSubmit={this.login}>
          <h2 className="form-signin-heading" style={styles.h2}>Connexion</h2>
          {errorDiv}
          <label htmlFor="inputEmail" className="sr-only">adresse e-mail</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address"  required autoFocus value={this.state.email} onChange={this.handleEmailChange}/>
          <label htmlFor="inputPassword" className="sr-only">mot de passe</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required value={this.state.password} onChange={this.handlePasswordChange}/>
          <button className="btn btn-lg btn-primary btn-block" type="submit" style={styles.button}>Envoyer</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
