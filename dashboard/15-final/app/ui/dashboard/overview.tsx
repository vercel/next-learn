import Card from '@/app/ui/dashboard/card';
import { calculateAllInvoices } from '@/app/lib/calculations';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { sql } from '@vercel/postgres';
import { Customer, Invoice, Revenue } from '@/app/lib/definitions';

export default async function DashboardOverview() {
  const invoicesData = await sql`SELECT * FROM invoices`;
  const invoices = invoicesData.rows as Invoice[];

  const customersData = await sql`SELECT * FROM customers`;
  const customers = customersData.rows as Customer[];

  const revenueData = await sql`SELECT * FROM revenue`;
  const revenue = revenueData.rows as Revenue[];

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
