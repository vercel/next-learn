import { sql } from '@vercel/postgres';
import { formatCurrency } from './utils';
import {
  Revenue,
  InvoicesTable,
  CustomersTable,
  InvoiceForm,
  CustomerName,
  LatestInvoiceRaw,
} from './definitions';

export async function fetchRevenue() {
  try {
    // We artificially delay a reponse for demo purposes.
    // Don't do this in real life :)
    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Revenue>`SELECT * FROM revenue`;

    // console.log('Data fetch complete after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
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
    console.error('Database Error:', error);
    throw new Error('Failed to fetch counts.');
  }
}

export async function fetchTotalAmountByStatus() {
  try {
    const data = await sql`SELECT 
      SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
      SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
      FROM invoices`;
    const totalPaidInvoices = formatCurrency(data.rows[0].paid);
    const totalPendingInvoices = formatCurrency(data.rows[0].pending);

    return { totalPaidInvoices, totalPendingInvoices };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total amounts by status.');
  }
}

export async function fetchLatestInvoices() {
  try {
    const data = await sql<LatestInvoiceRaw>`
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
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  const itemsPerPage = 10;
  const offset = (currentPage - 1) * itemsPerPage;

  try {
    const data = await sql<InvoicesTable>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name, 
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${itemsPerPage} OFFSET ${offset}
    `;

    const count = await sql`
      SELECT COUNT(*)
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
    `;

    const totalRecords = Number(count.rows[0].count);
    const totalPages = Math.ceil(totalRecords / itemsPerPage);

    return {
      invoices: data.rows,
      totalPages,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchInvoiceById(id: string) {
  try {
    const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.status,
        customers.name
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE invoices.id = ${id};
    `;

    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    }));

    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchCustomerNames() {
  try {
    const data = await sql<CustomerName>`
      SELECT 
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchCustomersTable() {
  try {
    const data = await sql<CustomersTable>`
      SELECT 
        customers.id,
        customers.name,
        customers.email,
        customers.image_url,
        COUNT(invoices.id) AS total_invoices,
        SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending, 
        SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid 
      FROM customers 
      LEFT JOIN invoices ON customers.id = invoices.customer_id 
      GROUP BY customers.id, customers.name, customers.email, customers.image_url  
      ORDER BY customers.name ASC
    `;

    const customers = data.rows.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));

    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}
