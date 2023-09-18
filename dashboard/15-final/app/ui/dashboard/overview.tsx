import Card from '@/app/ui/dashboard/card';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import {
  fetchRevenueDelayed,
  fetchLatestInvoices,
  fetchCounts,
  fetchTotalAmountByStatus,
} from '@/app/lib/data';

export const dynamic = 'force-dynamic';

export default async function DashboardOverview() {
  const [
    revenueResult,
    latestInvoicesResult,
    countsResult,
    totalAmountByStatusResult,
  ] = await Promise.allSettled([
    fetchRevenueDelayed(),
    fetchLatestInvoices(),
    fetchCounts(),
    fetchTotalAmountByStatus(),
  ]);

  let revenue;
  let latestInvoices;
  let numberOfInvoices;
  let numberOfCustomers;
  let totalPaidInvoices;
  let totalPendingInvoices;

  if (revenueResult.status === 'fulfilled') {
    revenue = revenueResult.value;
  }

  if (latestInvoicesResult.status === 'fulfilled') {
    latestInvoices = latestInvoicesResult.value;
  }

  if (countsResult.status === 'fulfilled') {
    numberOfInvoices = countsResult.value.numberOfInvoices;
    numberOfCustomers = countsResult.value.numberOfCustomers;
  }

  if (totalAmountByStatusResult.status === 'fulfilled') {
    totalPaidInvoices = totalAmountByStatusResult.value.totalPaidInvoices;
    totalPendingInvoices = totalAmountByStatusResult.value.totalPendingInvoices;
  }

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
