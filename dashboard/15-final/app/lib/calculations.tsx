import { Invoice, Revenue } from "./definitions";

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

export const generateYAxis = (data: Revenue[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in 1000s
  const yAxisLabels = [];
  const highestRecord = Math.max(...data.map((month) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  console.log(yAxisLabels);

  return { yAxisLabels, topLabel };
};

export const calculateBarHeight = (revenue: Revenue[]) => {};

export const generateXAxis = (revenue: Revenue[]) => {
  const xAxisLabels = revenue.map((month) => month.month);
  const xAxisWidth = xAxisLabels.length * 100;

  const barHeight = revenue.map((month) => month.revenue / 100);

  return { xAxisLabels, xAxisWidth, barHeight };
};
