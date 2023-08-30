import { Invoice } from "./definitions";

export const calculateInvoices = (
  invoices: Invoice[],
  status: "pending" | "paid",
) => {
  return invoices
    .filter((invoice) => !status || invoice.status === status)
    .reduce((total, invoice) => total + invoice.amount / 100, 0)
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
};
