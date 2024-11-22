import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import LoginForm from '../../components/LoginForm';

const Login = () => {
  return (
    <>
      <Nav />
      <div>
        <main className="main bg-dark">
          <div className="all-form">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <LoginForm />
            </section>
          </div>  
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Login;
