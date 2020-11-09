import React from 'react';
import accountTestData from '../../../../data/account-test-data';
import '../../../../styles/home/overview/account-overview/account-overview.css';
import {
  retrieveLastInitial,
  retrieveTransactionsAfterLastInitial,
  transactionPipe,
} from '../../../shared/functions/topic/account-balance-activity';

const calculateBalance = () => {
  const lastInitial = retrieveLastInitial();
  const transactionsAfterLastInitial = retrieveTransactionsAfterLastInitial(
    lastInitial
  );

  return lastInitial
    ? transactionPipe(transactionsAfterLastInitial) + lastInitial.amount
    : transactionPipe(accountTestData);
};

function AccountOverview() {
  const balance = calculateBalance();
  const displayableBalance = balance.toFixed(2);

  return (
    <div className="balance">
      <div className="title">Your balance</div>
      <div className="amount">{displayableBalance}</div>
    </div>
  );
}

export default AccountOverview;
