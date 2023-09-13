import { sql } from '@vercel/postgres';

export async function fetchAllInvoices() {
  const invoicesData = await sql`SELECT * FROM invoices`;
  return invoicesData.rows;
}

export async function fetchAllCustomers() {
  const customersData = await sql`SELECT * FROM customers`;
  return customersData.rows;
}

export async function fetchAllRevenue() {
  const revenueData = await sql`SELECT * FROM revenue`;
  return revenueData.rows;
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

export async function fetchLatestInvoices() {
  const latestInvoices = await sql`SELECT * FROM invoices
    ORDER BY date DESC
    LIMIT 5;`;
  return latestInvoices.rows;
}
