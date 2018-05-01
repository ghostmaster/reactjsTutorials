import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export class Header extends Component {

    onLogin() {
        this.props.onLogin();
    }

    onLogout() {
        this.props.onLogout();
    }

  render() {
    return (
      <div>
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    Github Searcher
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem href="#" onClick={!this.props.accessToken ? this.onLogin.bind(this) : this.onLogout.bind(this)}>
                    { !this.props.accessToken ? 'Login' : 'Logout' }
                </NavItem>
            </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Header
