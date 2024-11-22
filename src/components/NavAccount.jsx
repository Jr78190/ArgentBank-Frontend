import React from 'react';
import { useSelector } from 'react-redux'; 
import ArgentBankLogo from '../assets/images/ArgentBankLogo.webp';
import '../css/main.css';

function NavAccount() {

  const username = useSelector((state) => state.user.profile.username);

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={ArgentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div className="nav-account">
        <div>
          {username && <span className="username-display"> {username}</span>} 
          <i className="fa-solid fa-circle-user"></i>
        </div>
        <div>
          <i className="fa-solid fa-gear"></i>
        </div>
        <a href="./login">
        <i className="fa-solid fa-power-off"></i>
        </a>
      </div>
    </nav>
  );
}

export default NavAccount;
