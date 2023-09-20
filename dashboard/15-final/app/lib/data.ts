import { sql } from '@vercel/postgres';
import { formatCurrency } from './utils';
import { Revenue, LatestInvoice, Invoice } from './definitions';

export async function fetchRevenue(): Promise<Revenue[]> {
  try {
    const revenueData = await sql`SELECT * FROM revenue`;
    return revenueData.rows as Revenue[];
  } catch (error) {
    console.error('Failed to fetch revenue data:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchRevenueDelayed(): Promise<Revenue[]> {
  try {
    // We artificially delay a reponse for demo purposes.
    // Don't do this in real life :)
    console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const revenueData = await sql`SELECT * FROM revenue`;
    console.log('Data fetch complete after 3 seconds.');

    return revenueData.rows as Revenue[];
  } catch (error) {
    console.error('Failed to fetch revenue data:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchCounts() {
  try {
    const invoiceCount = await sql`SELECT COUNT(*) FROM invoices`;
    const numberOfInvoices = parseInt(invoiceCount.rows[0].count, 10);

    const customerCount = await sql`SELECT COUNT(*) FROM customers`;
    const numberOfCustomers = parseInt(customerCount.rows[0].count, 10);

    return { numberOfCustomers, numberOfInvoices };
  } catch (error) {
    console.error('Failed to fetch counts:', error);
    throw new Error('Failed to fetch counts.');
  }
}

export async function fetchTotalAmountByStatus() {
  try {
    const totalAmount = await sql`SELECT 
      SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
      SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
      FROM invoices`;
    const totalPaidInvoices = formatCurrency(totalAmount.rows[0].paid);
    const totalPendingInvoices = formatCurrency(totalAmount.rows[0].pending);

    return { totalPaidInvoices, totalPendingInvoices };
  } catch (error) {
    console.error('Failed to fetch total amounts by status:', error);
    throw new Error('Failed to fetch total amounts by status.');
  }
}

export async function fetchLatestInvoices() {
  try {
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
    return latestInvoices as LatestInvoice[];
  } catch (error) {
    console.error('Failed to fetch the latest invoices:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

export async function fetchAllInvoices() {
  const invoicesData = await sql`SELECT * FROM invoices`;
  return invoicesData.rows;
}

export async function fetchAllCustomers() {
  const customersData = await sql`SELECT * FROM customers`;
  return customersData.rows;
}

export async function fetchFilteredInvoices(
  searchTerm: string,
  currentPage: number,
  ITEMS_PER_PAGE: number,
) {
  console.log(`Searching... ${searchTerm}`);

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const data = await sql`
  SELECT 
    invoices.id,
    invoices.amount,
    invoices.date,
    invoices.status,
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
  OFFSET ${offset}
`;

  const invoicesData = await data;

  console.log(`Found ${invoicesData.rowCount} invoices.`);

  return {
    invoices: invoicesData.rows as Invoice[],
    count: invoicesData.rowCount,
  };
}

export async function fetchInvoiceById(id: number | null) {
  return await sql`SELECT * from INVOICES where id=${id}`;
}
