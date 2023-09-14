import { sql } from '@vercel/postgres';
import { formatCurrency } from './utils';

export async function fetchAllRevenue() {
  const revenueData = await sql`SELECT * FROM revenue`;
  return revenueData.rows;
}

export async function fetchNumberOfInvoices() {
  const count = await sql`SELECT COUNT(*) FROM invoices`;
  const numberOfInvoices = parseInt(count.rows[0].count, 10);
  return numberOfInvoices;
}

export async function fetchNumberOfCustomers() {
  const count = await sql`SELECT COUNT(*) FROM customers`;
  const numberOfCustomers = parseInt(count.rows[0].count, 10);
  return numberOfCustomers;
}

export async function fetchTotalAmountByStatus() {
  const totalAmount = await sql`SELECT 
    SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
    SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
    FROM invoices`;
  const totalPaidInvoices = formatCurrency(totalAmount.rows[0].paid);
  const totalPendingInvoices = formatCurrency(totalAmount.rows[0].pending);
  return { totalPaidInvoices, totalPendingInvoices };
}

export async function fetchLatestInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name, customers.image_url, customers.email 
    FROM invoices 
    JOIN customers ON invoices.customer_id = customers.id
    ORDER BY invoices.date DESC
    LIMIT 5`;

  const latestInvoices = data.rows.map((invoice) => ({
    ...invoice,
    amount: formatCurrency(invoice.amount),
  }));

  return latestInvoices;
}

export async function fetchAllInvoices() {
  const invoicesData = await sql`SELECT * FROM invoices`;
  return {
    invoices: invoicesData.rows,
    numberOfInvoices: invoicesData.rowCount,
  };
}

export async function fetchAllCustomers() {
  const customersData = await sql`SELECT * FROM customers`;
  return {
    customers: customersData.rows,
    numberOfCustomers: customersData.rowCount,
  };
}

export async function fetchFilteredInvoices(
  searchTerm: string,
  currentPage: number,
  ITEMS_PER_PAGE: number,
) {
  const invoicesData = await sql`
    SELECT 
      invoices.*, 
      customers.name AS customer_name, 
      customers.email AS customer_email, 
      customers.image_url AS customer_image
    FROM 
      invoices
    JOIN 
      customers ON invoices.customer_id = customers.id
    WHERE 
      invoices.id::text ILIKE ${`%${searchTerm}%`} OR
      customers.name ILIKE ${`%${searchTerm}%`} OR
      customers.email ILIKE ${`%${searchTerm}%`} OR
      invoices.amount::text ILIKE ${`%${searchTerm}%`} OR
      invoices.date::text ILIKE ${`%${searchTerm}%`} OR
      invoices.status ILIKE ${`%${searchTerm}%`}
    LIMIT ${ITEMS_PER_PAGE}
    OFFSET ${(currentPage - 1) * ITEMS_PER_PAGE}
  `;
  return invoicesData.rows;
}

export async function fetchInvoiceCountBySearchTerm(searchTerm: string) {
  const { rows: countRows } = await sql`
  SELECT COUNT(*) 
  FROM invoices 
  LEFT JOIN customers ON invoices.customer_id = customers.id 
  WHERE (invoices.id::text ILIKE ${`%${searchTerm}%`} OR customers.name ILIKE ${`%${searchTerm}%`} OR customers.email ILIKE ${`%${searchTerm}%`})
`;
  return countRows[0].count;
}

export async function fetchInvoiceById(id: number | null) {
  return await sql`SELECT * from INVOICES where id=${id}`;
}
