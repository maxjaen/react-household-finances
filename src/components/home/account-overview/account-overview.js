import React from 'react';
import accountTestData from '../../../data/account-test-data';
import '../../../styles/home/account-overview/account-overview.css';

const last = (array) => {
  return array[array.length - 1];
};

const isInitial = (data) => {
  return data.type === 'initial';
};

const isTransaction = (data) => {
  return data.type === 'transaction';
};

const retrieveLastInitial = () => {
  return last(accountTestData.filter((e) => isInitial(e)));
};

const retrieveTransactionsAfterLastInitial = (lastInitial) => {
  return accountTestData.filter(
    (e) =>
      isTransaction(e) &&
      new Date(e.transactionDate).getTime() >
        new Date(lastInitial.initialDate).getTime()
  );
};

const calculateBalance = () => {
  const lastInitial = retrieveLastInitial();
  const transactionsAfterLastInitial = lastInitial
    ? retrieveTransactionsAfterLastInitial(lastInitial)
    : [];

  return lastInitial
    ? transactionPipe(transactionsAfterLastInitial) + lastInitial.amount
    : transactionPipe(accountTestData);
};

const transactionPipe = (data) => {
  return data
    .filter((e) => isTransaction(e))
    .map((e) => e.amount)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

function AccountOverview() {
  const balance = calculateBalance();
  const displayableBalance = balance.toFixed(2);

  return (
    <div className="account">
      <div className="title">Account Balance</div>
      <div className="amount">{displayableBalance}</div>
    </div>
  );
}

export default AccountOverview;
