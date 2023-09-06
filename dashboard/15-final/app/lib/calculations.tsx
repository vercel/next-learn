import { Invoice, Revenue } from "./definitions";

export const calculateAllInvoices = (
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

export const calculateCustomerInvoices = (
  invoices: Invoice[],
  status: "pending" | "paid",
  customerId: number,
) => {
  return invoices
    .filter((invoice) => invoice.customerId === customerId)
    .filter((invoice) => !status || invoice.status === status)
    .reduce((total, invoice) => total + invoice.amount / 100, 0)
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
};

// Once a database is connected, we can use SQL to query the database directly
// This will be more efficient than querying all invoices and then filtering them
// E.g. "SELECT * FROM invoices
// ORDER BY date DESC
// LIMIT 5;"

export const countCustomerInvoices = (
  invoices: Invoice[],
  customerId: number,
) => {
  return invoices.filter((invoice) => invoice.customerId === customerId).length;
};

export const findLatestInvoices = (invoices: Invoice[]) => {
  return [...invoices]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);
};

export const generateYAxis = (revenue: Revenue[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in 1000s
  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  return { yAxisLabels, topLabel };
};
