import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { InvoicesTable } from '@/app/lib/definitions';

export default async function InvoicesTable({
  invoices,
}: {
  invoices: InvoicesTable[];
}) {
  return (
    <div className="mt-4 flow-root">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden rounded-md border">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50 text-left text-sm">
                <tr>
                  <th scope="col" className="px-6 pr-4 font-semibold">
                    Customer
                  </th>
                  <th scope="col" className="px-3 py-4 font-semibold">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-4 font-semibold">
                    Amount
                  </th>
                  <th scope="col" className="px-3 py-4 font-semibold">
                    Date
                  </th>
                  <th scope="col" className="px-3 py-4 font-semibold">
                    Status
                  </th>
                  <th scope="col" className="relative py-4 pl-3 pr-6 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-500">
                {invoices?.map((invoice) => (
                  <tr key={invoice.id}>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      <div className="flex items-center gap-3">
                        <Image
                          src={invoice.image_url}
                          className="rounded-full"
                          width={28}
                          height={28}
                          alt={`${invoice.name}'s profile picture`}
                        />
                        <p>{invoice.name}</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      {invoice.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      {formatCurrency(invoice.amount)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      {formatDateToLocal(invoice.date)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <InvoiceStatus status={invoice.status} />
                    </td>
                    <td className="flex justify-end gap-2 whitespace-nowrap px-6 py-4 text-sm">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
