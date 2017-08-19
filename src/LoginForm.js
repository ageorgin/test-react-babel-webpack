
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
      password: ''
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
      }
    };

    return (
      <div className="container">
        <form className="form-signin" style={styles.form} onSubmit={this.login}>
          <h2 className="form-signin-heading" style={styles.h2}>Please sign in</h2>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address"  required autoFocus value={this.state.email} onChange={this.handleEmailChange}/>
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required value={this.state.password} onChange={this.handlePasswordChange}/>
          <button className="btn btn-lg btn-primary btn-block" type="submit" style={styles.button}>Sign in</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
