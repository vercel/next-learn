// This file contains dummy data that you'll be replacing with real data in Chapter 7.
const users = [
  {
    id: 1,
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: 1,
    name: 'Ada Lovelace',
    email: 'ada@lovelace.com',
    image_url: '/customers/ada-lovelace.png',
  },
  {
    id: 2,
    name: 'Grace Hopper',
    email: 'grace@hopper.com',
    image_url: '/customers/grace-hopper.png',
  },
  {
    id: 3,
    name: 'Hedy Lammar',
    email: 'hedy@lammar.com',
    image_url: '/customers/hedy-lammar.png',
  },
  {
    id: 4,
    name: 'Margaret Hamilton',
    email: 'margaret@hamilton.com',
    image_url: '/customers/margaret-hamilton.png',
  },
];

const invoices = [
  {
    customer_id: 1,
    amount: 15795,
    status: 'pending',
    date: '2023-12-06',
  },
  {
    customer_id: 2,
    amount: 20348,
    status: 'pending',
    date: '2023-11-14',
  },
  {
    customer_id: 3,
    amount: 3040,
    status: 'paid',
    date: '2023-10-29',
  },
  {
    customer_id: 4,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: 1,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: 2,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: 3,
    amount: 8945,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: 4,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: 3,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: 1,
    amount: 8945,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: 2,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: 3,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: 3,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: 4,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: 3,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

module.exports = {
  users,
  customers,
  invoices,
  revenue,
};
