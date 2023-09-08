import { sql } from "@vercel/postgres";

export async function fetchData(tableName: string, seedFunction: Function) {
    let data;
    try {
      if (tableName === 'invoices') {
        data = await sql`SELECT * FROM invoices`;
      } else if (tableName === 'customers') {
        data = await sql`SELECT * FROM customers`;
      } if(tableName === 'revenue') {
        data = await sql`SELECT * FROM revenue`
      } else {
        throw new Error("Invalid table name");
      }
    } catch (e: any) {
      await seedFunction();
      if (tableName === 'invoices') {
        data = await sql`SELECT * FROM invoices`;
      } else if (tableName === 'customers') {
        data = await sql`SELECT * FROM customers`;
      } else if(tableName === 'revenue') {
        data = await sql`SELECT * FROM revenue`
      }
    }
    return data?.rows;
  }