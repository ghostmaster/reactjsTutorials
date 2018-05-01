import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Github from './Github';
import Header from './Components/Header'
import Auth0Lock from 'auth0-lock';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       accessToken: '',
       profile: {}
    }
  }
  

  componentWillMount = () => {
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);
    this.lock.on('authenticated', (authResult) => {
      // console.log(authResult);
      this.lock.getProfile(authResult.accessToken, (error, profile) => {
        if(error) {
          console.log(error);
          return;
        } else {
          // console.log(profile);
          this.setProfile(authResult.accessToken, profile);
        }
      })
      
    });

    this.getProfile()

  }

  getProfile = () => {
    if(localStorage.getItem('accessToken') !== null) {
      this.setState({
        accessToken: localStorage.getItem('accessToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      }, () => {
        console.log(this.state)
      })
    }
  }

  setProfile = (accessToken, profile) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('profile', JSON.stringify(profile));

    this.setState({
      accessToken: localStorage.getItem('accessToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    })

  }

  showLock() {
    this.lock.show();
  }

  logout() {
    this.setState({
      accessToken: '',
      profile: ''
    }, () => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('profile');
    })
}
  

  render() {
    let gitty, page;

    if(this.state.accessToken) {
      gitty = <Github />;
    } else {
      page ="click on login to vbiew github viewer"
    }

    return (
      <div className="App">
        <Header 
        onLogout={this.logout.bind(this)} 
        onLogin = {this.showLock.bind(this)}
        accessToken={this.state.accessToken}
        profile={this.state.profile}
        />
        {page}{gitty}
      </div>
    );
  }
}

App.defaultProps = {
  clientID: 'ABgCfk5LQAz9dJQ0Z5gxyBLfgSzV9l6l',
  domain: 'sanjeev22.auth0.com'
}

export default App;
