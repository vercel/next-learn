// This file contains type definitions for you data.
// These describe the shape of the data, and what data type each property should accept.

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  status: 'pending' | 'paid';
};

export type TableInvoice = {
  id: string;
  customer_id: string;
  customer_name: string;
  customer_email: string;
  customer_image: string;
  date: string;
  amount: number;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type FormInvoice = {
  id: string;
  name: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: number;
};

export type Revenue = {
  month: string;
  revenue: number;
};
