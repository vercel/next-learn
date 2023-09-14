import { Invoice, Revenue, Customer, LatestInvoice } from './definitions';

export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const calculateCustomerInvoices = (
  invoices: Invoice[],
  status: 'pending' | 'paid',
  customerId: number,
) => {
  return invoices
    .filter((invoice) => invoice.customer_id === customerId)
    .filter((invoice) => !status || invoice.status === status)
    .reduce((total, invoice) => total + invoice.amount / 100, 0)
    .toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
};

export const countCustomerInvoices = (
  invoices: Invoice[],
  customerId: number,
) => {
  return invoices.filter((invoice) => invoice.customer_id === customerId)
    .length;
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
