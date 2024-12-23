import React from 'react'
import ArgentBankLogo from '../assets/images/ArgentBankLogo.webp';
import { Link } from 'react-router-dom';
import '../css/main.css'

function Nav() {
  return (
    <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={ArgentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
    </nav>
  )
}

export default Nav