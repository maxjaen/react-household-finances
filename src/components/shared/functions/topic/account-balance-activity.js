import accountTestData from '../../../../data/account-test-data';
import { isLaterDate } from '../time';
import { last } from '../array';

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
  return lastInitial
    ? accountTestData.filter(
        (e) =>
          isTransaction(e) &&
          isLaterDate(e.transactionDate, lastInitial.initialDate)
      )
    : [];
};

const transactionPipe = (data) => {
  return data
    .filter((e) => isTransaction(e))
    .map((e) => e.amount)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

export {
  retrieveLastInitial,
  retrieveTransactionsAfterLastInitial,
  transactionPipe,
};
