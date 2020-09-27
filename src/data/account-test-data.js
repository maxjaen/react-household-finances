// =======================
// TEST DATA
// =======================
const accountTestData = [
  {
    id: 1,
    ownerId: 1,
    type: 'transaction',
    transactionDate:
      'Sat Sep 26 2020 20:17:02 GMT+0000 (Coordinated Universal Time)',
    transactionDescription: 'Buy a new light.',
    amount: -32.93,
    // maybe insert unit too..
    tag: 'Weekend',
    regular: false,
  },
  {
    id: 2,
    ownerId: 1,
    type: 'transaction',
    transactionDate:
      'Sat Sep 26 2020 23:59:46 GMT+0000 (Coordinated Universal Time)',
    transactionDescription: 'Buy food for the week.',
    amount: -79.24,
    // maybe insert unit too..
    tag: 'Food',
    regular: false,
  },
  {
    id: 3,
    ownerId: 1,
    type: 'transaction',
    transactionDate:
      'Sat Sep 29 2020 13:02:14 GMT+0000 (Coordinated Universal Time)',
    transactionDescription: 'Work at some cool job',
    amount: +1954.61,
    // maybe insert unit too..
    tag: 'Work',
    regular: false,
  },
  {
    id: 4,
    ownerId: 1,
    type: 'initial',
    initialDate:
      'Sat Sep 29 2020 13:02:15 GMT+0000 (Coordinated Universal Time)',
    amount: +15368.89,
    // maybe insert unit too..
  },
  {
    id: 5,
    ownerId: 1,
    type: 'transaction',
    transactionDate:
      'Sat Sep 30 2020 13:02:15 GMT+0000 (Coordinated Universal Time)',
    transactionDescription: 'Amazon prime subscription',
    amount: -169.0,
    // maybe insert unit too..
    tag: 'Life',
    regular: true,
  },
];

export default accountTestData;
