export const users = {
  id: 1,
  name: "User",
  email: "user@nextmail.com",
  password: "123456",
}

export const customers = [
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

export const invoices = [
  {
    id: 1,
    customerId: 1,
    amount: 100,
    status: "pending",
  },
  {
    id: 2,
    customerId: 2,
    amount: 200,
    status: "pending",
  },
  {
    id: 3,
    customerId: 3,
    amount: 300,
    status: "paid",
  },
  {
    id: 4,
    customerId: 4,
    amount: 400,
    status: "paid",
  },
]
