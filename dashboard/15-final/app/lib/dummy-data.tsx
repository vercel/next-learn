import { User, Customer, Invoice, Revenue } from './definitions';

// This file contains dummy data that you'll be replacing with real data in Chapter 7.
export const users: User[] = [
  {
    id: 1,
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

export const customers: Customer[] = [
  {
    id: 1,
    name: 'Ada Lovelace',
    email: 'ada@lovelace.com',
    imageUrl: '/customers/ada-lovelace.png',
  },
  {
    id: 2,
    name: 'Grace Hopper',
    email: 'grace@hopper.com',
    imageUrl: '/customers/grace-hopper.png',
  },
  {
    id: 3,
    name: 'Hedy Lammar',
    email: 'hedy@lammar.com',
    imageUrl: '/customers/hedy-lammar.png',
  },
  {
    id: 4,
    name: 'Margaret Hamilton',
    email: 'margaret@hamilton.com',
    imageUrl: '/customers/margaret-hamilton.png',
  },
];

export const invoices: Invoice[] = [
  {
    id: 1,
    customerId: 1,
    amount: 15795,
    status: 'pending',
    date: '2023-12-01',
  },
  {
    id: 2,
    customerId: 2,
    amount: 20348,
    status: 'pending',
    date: '2023-11-01',
  },
  {
    id: 3,
    customerId: 3,
    amount: 3040,
    status: 'paid',
    date: '2023-10-01',
  },
  {
    id: 4,
    customerId: 4,
    amount: 44800,
    status: 'paid',
    date: '2023-09-01',
  },
  {
    id: 5,
    customerId: 1,
    amount: 34577,
    status: 'pending',
    date: '2023-08-01',
  },
  {
    id: 6,
    customerId: 2,
    amount: 54246,
    status: 'pending',
    date: '2023-07-01',
  },
  {
    id: 7,
    customerId: 3,
    amount: 8945,
    status: 'pending',
    date: '2023-06-01',
  },
  {
    id: 8,
    customerId: 4,
    amount: 32545,
    status: 'paid',
    date: '2023-06-01',
  },
  {
    id: 9,
    customerId: 3,
    amount: 1250,
    status: 'paid',
    date: '2023-06-02',
  },
  {
    id: 10,
    customerId: 1,
    amount: 8945,
    status: 'paid',
    date: '2023-06-01',
  },
  {
    id: 11,
    customerId: 2,
    amount: 500,
    status: 'paid',
    date: '2023-08-01',
  },
  {
    id: 12,
    customerId: 3,
    amount: 8945,
    status: 'paid',
    date: '2023-06-01',
  },
  {
    id: 13,
    customerId: 3,
    amount: 8945,
    status: 'paid',
    date: '2023-06-01',
  },
  {
    id: 14,
    customerId: 4,
    amount: 8945,
    status: 'paid',
    date: '2023-10-01',
  },
  {
    id: 15,
    customerId: 3,
    amount: 1000,
    status: 'paid',
    date: '2022-06-12',
  },
];

export const revenue: Revenue[] = [
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
