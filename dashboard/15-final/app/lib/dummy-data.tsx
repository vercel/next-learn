import { User, Customer, Invoice } from "./definitions"

// This file contains dummy data that you'll be replacing with real data in Chapter 7.
export const users: User[] = [
  {
    id: 1,
    name: "User",
    email: "user@nextmail.com",
    password: "123456",
  },
]

export const customers: Customer[] = [
  {
    id: 1,
    name: "Lee",
    email: "lee@nextmail.com",
  },
  {
    id: 2,
    name: "Michael",
    email: "michael@nextmail.com",
  },
  {
    id: 3,
    name: "Steph",
    email: "steph@nextmail.com",
  },
  {
    id: 4,
    name: "Delba",
    email: "delba@nextmail.com",
  },
]

export const invoices: Invoice[] = [
  {
    id: 1,
    customerId: 1,
    amount: 10000,
    status: "pending",
  },
  {
    id: 2,
    customerId: 2,
    amount: 20000,
    status: "pending",
  },
  {
    id: 3,
    customerId: 3,
    amount: 30000,
    status: "paid",
  },
  {
    id: 4,
    customerId: 4,
    amount: 40000,
    status: "paid",
  },
]
