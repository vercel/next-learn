import Card from '@/app/ui/dashboard/card';
import { calculateAllInvoices } from '@/app/lib/calculations';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { seedCustomers, seedInvoices, seedRevenue } from '@/app/lib/seed';
import { sql } from '@vercel/postgres';

export default async function DashboardOverview() {
  let invoicesData;
  let customersData;
  let revenueData;

  try {
    invoicesData = await sql`SELECT * FROM invoices`
  } catch (e: any) {
    await seedInvoices()
    invoicesData = await sql`SELECT * FROM invoices`
  }
  try {
    customersData = await sql`SELECT * FROM customers`
  } catch (e: any) {
    await seedCustomers()
    customersData = await sql`SELECT * FROM customers`
  }
  try {
    revenueData = await sql`SELECT * FROM revenue`
  } catch (e: any) {
    await seedRevenue()
    revenueData = await sql`SELECT * FROM revenue`
  }

  const invoices = invoicesData.rows;
  const customers = customersData.rows;
  const revenue = revenueData.rows;

  const totalPaidInvoices = calculateAllInvoices(invoices, 'paid');
  const totalPendingInvoices = calculateAllInvoices(invoices, 'pending');
  const numberOfInvoices = invoices.length;
  const numberOfCustomers = customers.length;

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices invoices={invoices} customers={customers} />
      </div>
    </>
  );
}
