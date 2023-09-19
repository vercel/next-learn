import { LatestInvoice } from '@/app/lib/definitions';
import Image from 'next/image';

export default async function LatestInvoices({
  latestInvoices,
}: {
  latestInvoices: LatestInvoice[];
}) {
  return (
    <div className="w-full rounded-xl border bg-white p-6 shadow-sm md:col-span-4 lg:col-span-3">
      <h2 className="font-semibold">Latest Invoices</h2>

      {latestInvoices.map((invoice) => {
        return (
          <div
            key={invoice.id}
            className="mt-8 flex flex-row items-center justify-between"
          >
            <div className="flex items-center">
              <Image
                src={invoice.image_url}
                alt={invoice.name}
                className="mr-4 rounded-full"
                width={32}
                height={32}
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold md:text-base">
                  {invoice.name}
                </p>
                <p className="hidden text-sm text-gray-500 sm:block">
                  {invoice.email}
                </p>
              </div>
            </div>
            <p className="truncate text-sm font-medium md:text-base">
              {invoice.amount}
            </p>
          </div>
        );
      })}
    </div>
  );
}
