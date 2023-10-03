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
          <div className="overflow-hidden rounded-md bg-gray-50 p-2">
            <div className="md:hidden">
              {invoices?.map((invoice) => (
                <div
                  key={invoice.id}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <div className="mb-2 flex items-center">
                        <Image
                          src={invoice.image_url}
                          className="mr-2 rounded-full"
                          width={28}
                          height={28}
                          alt={`${invoice.name}'s profile picture`}
                        />
                        <p>{invoice.name}</p>
                      </div>
                      <p className="text-sm text-gray-500">{invoice.email}</p>
                    </div>
                    <InvoiceStatus status={invoice.status} />
                  </div>
                  <div className="flex w-full items-center justify-between pt-4">
                    <div>
                      <p className="text-xl font-medium">
                        {formatCurrency(invoice.amount)}
                      </p>
                      <p>{formatDateToLocal(invoice.date)}</p>
                    </div>
                    <div className="flex justify-end gap-2">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <table className="hidden min-w-full rounded-md bg-white md:table">
              <thead className="rounded-md bg-gray-50 text-left text-sm">
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
                  <tr key={invoice.id} className="w-full">
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
