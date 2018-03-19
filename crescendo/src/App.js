import React, { Component } from 'react';
import firebase, { auth, provider } from './components/firebase.js';
import Main from './components/Main';

class App extends Component {
  constructor() {
    super();
    this.db = firebase.firestore();
    this.state = {
      user: null
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });
  }

  logout() {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
  }

  login() {
    auth.signInWithPopup(provider) 
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.user ?
          <Main user={this.state.user}/>
        :
          <div>
            <h1>Welcome to Crescendo</h1>
            <button onClick={this.login}>Log In</button>              
          </div>
        }
      </div>
    );
  }
}

export default App;
