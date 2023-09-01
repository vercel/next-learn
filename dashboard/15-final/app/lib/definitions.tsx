// This file contains type definitions for you data.
// These describe the shape of the data, and what data type each property should accept.

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: number;
  name: string;
  email: string;
  imageUrl: string;
};

export type Invoice = {
  id: number;
  customerId: number;
  amount: number;
  status: "pending" | "paid"; // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings.
  date: string;
};

export type Revenue = {
  month: string;
  revenue: number;
};
