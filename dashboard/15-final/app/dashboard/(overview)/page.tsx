import { Suspense } from 'react';
import {
  CardCollected,
  CardPending,
  CardTotalInvoices,
  CardCustomers,
} from '@/app/ui/dashboard/card';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardSkeleton,
} from '@/app/ui/dashboard/skeletons';

export default function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <CardCollected />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <CardPending />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <CardTotalInvoices />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <CardCustomers />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
