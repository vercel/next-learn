import Card from '@/app/ui/dashboard/card';
import { calculateAllInvoices } from '@/app/lib/calculations';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { seedCustomers, seedInvoices, seedRevenue } from '@/app/lib/seed';
import { fetchData } from '@/app/lib/fetch-data';
import { Invoice, Customer, Revenue } from '@/app/lib/definitions';

export default async function DashboardOverview() {
  const invoices = await fetchData('invoices', seedInvoices) as Invoice[];
  const customers = await fetchData('customers', seedCustomers) as Customer[];
  const revenue = await fetchData('revenue', seedRevenue) as Revenue[];

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
