import { sql } from '@vercel/postgres';
import { formatCurrency } from './utils';
import { Revenue } from './definitions';

export async function fetchRevenue() {
  try {
    // We artificially delay a reponse for demo purposes.
    // Don't do this in real life :)
    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql`SELECT * FROM revenue`;

    // console.log('Data fetch complete after 3 seconds.');

    return data.rows as Revenue[];
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
    const data = await sql`SELECT 
      SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
      SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
      FROM invoices`;
    const totalPaidInvoices = formatCurrency(data.rows[0].paid);
    const totalPendingInvoices = formatCurrency(data.rows[0].pending);

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
    return latestInvoices as {
      id: string;
      name: string;
      image_url: string;
      email: string;
      amount: string;
    }[];
  } catch (error) {
    console.error('Failed to fetch the latest invoices:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  // console.log(`Searching... ${searchTerm}`);

  const itemsPerPage = 10;
  const offset = (currentPage - 1) * itemsPerPage;

  const data = await sql`
    SELECT
      invoices.id,
      invoices.amount,
      invoices.date,
      invoices.status,
      customers.name AS customer_name,
      customers.email AS customer_email,
      customers.image_url AS customer_image
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

  // console.log(`Found ${data.rowCount} invoices.`);

  return {
    invoices: data.rows as {
      id: string;
      customer_id: string;
      customer_name: string;
      customer_email: string;
      customer_image: string;
      date: string;
      amount: number;
      status: 'pending' | 'paid';
    }[],
    totalPages,
  };
}

export async function fetchInvoiceById(id: string) {
  const data = await sql`
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
    amount: invoice.amount / 100,
  }));

  return invoice[0] as {
    id: string;
    amount: number;
    status: string;
    name: string;
  };
}

export async function fetchAllCustomers() {
  const data = await sql`
    SELECT 
      id,
      name
    FROM customers
    ORDER BY name ASC
  `;

  const customers = data.rows;
  return customers as { id: string; name: string }[];
}

export async function fetchCustomersTable() {
  const data = await sql`
    SELECT 
      customers.id,
      customers.name,
      customers.email,
      customers.image_url,
      COUNT(invoices.id) AS total_invoices,
      SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,  -- Added a comma here
      SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid  -- Fixed by adding comma before this line
    FROM customers 
    LEFT JOIN invoices ON customers.id = invoices.customer_id  -- Changed to LEFT JOIN
    GROUP BY customers.id, customers.name, customers.email, customers.image_url  -- Added GROUP BY
    ORDER BY customers.name ASC
  `;

  const customers = data.rows.map((customer) => ({
    ...customer,
    total_pending: formatCurrency(customer.total_pending),
    total_paid: formatCurrency(customer.total_paid),
  }));

  return customers as {
    id: string;
    name: string;
    email: string;
    image_url: string;
    total_invoices: number;
    total_pending: string;
    total_paid: string;
  }[];
}
