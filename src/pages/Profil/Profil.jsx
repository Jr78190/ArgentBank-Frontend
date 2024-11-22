import React from 'react';
import '../../css/main.css';
import NavAccount from '../../components/NavAccount';
import Footer from '../../components/Footer';
import UserProfile from '../../components/UserProfil';
import ViewAccount from '../../components/ViewAccount';

const Profil = () => {
  return (
    <>
      <NavAccount />
      <div>
        <main className="main bg-dark2">
          <div className="header">
            <h2>Edit user info</h2>
            <UserProfile />
          </div>
          <h2 className="sr-only">Accounts</h2>

          <section className="account">
          <ViewAccount
            title="Argent Bank Checking (x3448)"
            amount="$48,098.43"
            amountDescription="Available balance"
          />
          </section>

          <section className="account">
            <ViewAccount
              title="Argent Bank Savings (x6712)"
              amount="$10,928.42"
              amountDescription="Available Balance"
              content="Transaction details for credit card."
            />
          </section>

          <section className="account">
            <ViewAccount
              title="Argent Bank Credit Card"
              amount="$184.30"
              amountDescription="Current Balance"
              content="Transaction details for credit card."
            />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Profil;

