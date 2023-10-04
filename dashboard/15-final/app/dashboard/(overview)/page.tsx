import Card from '@/app/ui/dashboard/card';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import {
  fetchLatestInvoices,
  fetchCounts,
  fetchTotalAmountByStatus,
} from '@/app/lib/data';
import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';
import { RevenueChartSkeleton } from '@/app/ui/dashboard/skeletons';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const latestInvoices = await fetchLatestInvoices();
  const { numberOfInvoices, numberOfCustomers } = await fetchCounts();
  const { totalPaidInvoices, totalPendingInvoices } =
    await fetchTotalAmountByStatus();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
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
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
