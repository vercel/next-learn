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
  image_url: string;
};

export type Invoice = {
  id: number;
  customer_id: number;
  amount: number;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
  date: string;
};

export type LatestInvoice = {
  id: number;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

export type Revenue = {
  month: string;
  revenue: number;
};
