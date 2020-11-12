import React from 'react';
import '../../../styles/home/account/account.css';
import {remove} from '../../shared/functions/http.js'

import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';

function Account(props) {

  const accounts = props.accounts !== undefined ? props.accounts.map((entry) => (
        <div className="account-item">
          <div className="account-title">{entry.name}</div>
          <div className="account-content">
            <div className="account-details">
              <div className="account-description">{entry.description}</div>
              <div className="account-balance">10000.35</div>
            </div>
            <div className="account-nav">
              <div className="account-update">
                <UpdateIcon/>
              </div>
              <div className="account-delete">
                <DeleteIcon onClick={() => {
                  remove(entry.id, 'account').then(() => {
                    props.getAccounts();
                  });
                }}/>
              </div>
            </div>
          </div>
        </div>
  )): undefined; // TOOD think about the else case

  return (<div className="account">
    <div className="title">Your accounts</div>
    <div className="account-container">
      {accounts}
    </div>
  </div>);
}

export default Account;
