import Card from '@/app/ui/dashboard/card';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { Revenue, LatestInvoice } from '@/app/lib/definitions';
import {
  fetchAllRevenue,
  fetchLatestInvoices,
  fetchNumberOfInvoices,
  fetchNumberOfCustomers,
  fetchTotalAmountByStatus,
} from '@/app/lib/data';

export default async function DashboardOverview() {
  const revenue = (await fetchAllRevenue()) as Revenue[];
  const latestInvoices = (await fetchLatestInvoices()) as LatestInvoice[];
  const numberOfInvoices = await fetchNumberOfInvoices();
  const numberOfCustomers = await fetchNumberOfCustomers();
  const { totalPaidInvoices, totalPendingInvoices } =
    await fetchTotalAmountByStatus();

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
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </>
  );
}
