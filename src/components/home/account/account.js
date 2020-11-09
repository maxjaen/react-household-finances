import React from 'react';
import '../../../styles/home/account/account.css';

function Account(props) {

  const displayAccounts = props.accounts !== undefined ? props.accounts.map((entry) => (
        <div className="account-item">
          <div className="account-title">{entry.name}</div>
          <div className="account-balance"></div>
        </div>
  )): undefined;

  return (<div className="account">
    <div className="title">Your accounts</div>
    <div className="account-container">
      {displayAccounts}
    </div>
  </div>);
}

export default Account;
