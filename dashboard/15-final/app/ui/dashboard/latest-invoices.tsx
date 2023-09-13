// InvoiceList.tsx
import { Customer, Invoice } from '@/app/lib/definitions';
import { findLatestInvoices } from '@/app/lib/calculations';
import Image from 'next/image';

export default async function LatestInvoices({
  invoices,
  customers,
}: {
  invoices: Invoice[];
  customers: Customer[];
}) {
  const lastFiveInvoices = await findLatestInvoices();

  return (
    <div className="w-full rounded-xl border p-6 shadow-sm md:col-span-4 lg:col-span-3">
      <h2 className="font-semibold">Latest Invoices</h2>

      {lastFiveInvoices.map((invoice) => {
        const customer = customers.find(
          (customer) => customer.id === invoice.customer_id,
        );
        return (
          <div
            key={invoice.id}
            className="mt-8 flex flex-row items-center justify-between"
          >
            <div className="flex items-center">
              <Image
                src={customer?.image_url || ''}
                alt={customer?.name || ''}
                className="mr-4 rounded-full"
                width={32}
                height={32}
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold md:text-base">
                  {customer?.name}
                </p>
                <p className="hidden text-sm text-gray-500 sm:block">
                  {customer?.email}
                </p>
              </div>
            </div>
            <p className="truncate text-sm font-medium md:text-base">
              {(invoice.amount / 100).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </p>
          </div>
        );
      })}
    </div>
  );
}
