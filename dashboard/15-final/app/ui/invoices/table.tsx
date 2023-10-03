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
          <div className="overflow-hidden rounded-md bg-gray-50 p-4">
            <table className="min-w-full rounded-md bg-white">
              <thead className="hidden rounded-md bg-gray-50 text-left text-sm">
                <tr>
                  <th
                    scope="col"
                    className="px-6 pb-4 font-normal text-gray-900"
                  >
                    Customer
                  </th>
                  <th
                    scope="col"
                    className="px-3 pb-4 font-normal text-gray-900"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-3 pb-4 font-normal text-gray-900"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-3 pb-4 font-normal text-gray-900"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 pb-4 font-normal text-gray-900"
                  >
                    Status
                  </th>
                  <th scope="col" className="relative pb-4 pl-3 pr-6 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-900">
                {invoices?.map((invoice) => (
                  <tr key={invoice.id}>
                    <td className="whitespace-nowrap px-6 py-5">
                      <div className="flex items-center gap-3">
                        <Image
                          src={invoice.image_url}
                          className="rounded-full"
                          width={28}
                          height={28}
                          alt={`${invoice.name}'s profile picture`}
                        />
                        <p>{invoice.name}</p>
                        <div>hey</div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4">
                      {invoice.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4">
                      {formatCurrency(invoice.amount)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4">
                      {formatDateToLocal(invoice.date)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4">
                      <InvoiceStatus status={invoice.status} />
                    </td>
                    <td className="flex justify-end gap-2 whitespace-nowrap px-6 py-4">
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
