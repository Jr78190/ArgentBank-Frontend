import React, { useState } from 'react';
import '../css/view.css';
import transactionData from '../data/TransactionsData';

const ViewAccount = ({ title, amount, amountDescription }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
      <div className="account-header">
        <p className="account-amount">{amount}</p>
        <button className="transaction-button" onClick={toggleOpen}>
          {isOpen ? 'X' : 'View transactions'}
        </button>
      </div>
        <p className="account-amount-description">{amountDescription}</p>

      {isOpen && (
        <div className="transactions-all">
          <div className="transaction-header">
            <div className="transactions-date">Date</div>
            <div className="transactions-description">Description</div>
            <div className="transactions-amount">Amount</div>
            <div className="transactions-balance">Balance</div>
          </div>

          {transactionData.map((item) => (
            <div className="transaction-row">
                <div className="transactions-date">
                    {item.date}
                    <div className="transaction-extra-info">
                        {item.type && <div className="transactions-type">Transaction Type:</div>}
                        {item.category && <div className="transactions-category">Category:</div>}
                        {item.note && <div className="transactions-note">Note:</div>}
                    </div>
                </div>
          
                <div className="transactions-description">
                    {item.description}
                    <div className="transaction-extra-info">
                        {item.type && <div className="item-type">{item.type}</div>}
                        {item.category && <div className="item-category">{item.category} ✏️</div>}
                        {item.note && <div className="item-note">{item.note} ✏️</div>}
                    </div>
                </div>
          
                <div className="transactions-amount">{item.amount}</div>
                <div className="transactions-balance">{item.balance}</div>
                <div className="transactions-b">V</div>
          </div>
          
            
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewAccount;
