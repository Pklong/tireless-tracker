import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link, withRouter } from 'react-router';
import { login, signup } from '../actions/session_actions';


const mapStateToProps = state => ({
  loggedIn: Boolean(state.currentUser),
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({ user });
  }

  render() {
    const { username, pw } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Welcome!
          <br />
          <label htmlFor={username}> Username:
            <input
              type="text"
              value={username}
              id="username"
              onChange={this.update('username')}
            />
          </label>
          <br />
          <label htmlFor={pw}> Password:
            <input
              type="password"
              value={pw}
              id="pw"
              onChange={this.update('password')}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
