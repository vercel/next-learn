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
  const styles = `
    /* Round top-left and top-right corners of the first row in tbody */
    tbody tr:first-child td:first-child {
        border-top-left-radius: 8px;
    }
    tbody tr:first-child td:last-child {
        border-top-right-radius: 8px;
    }

    /* Round bottom-left and bottom-right corners of the last row in tbody */
    tbody tr:last-child td:first-child {
        border-bottom-left-radius: 8px;
    }
    tbody tr:last-child td:last-child {
        border-bottom-right-radius: 8px;
    }
  `;
  return (
    <div className="mt-4 flow-root">
      <style>{styles}</style>
      <div>
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2">
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
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg  text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-6 pb-4 pt-2">
                    Customer
                  </th>
                  <th scope="col" className="px-3 pb-4 pt-2">
                    Email
                  </th>
                  <th scope="col" className="px-3 pb-4 pt-2">
                    Amount
                  </th>
                  <th scope="col" className="px-3 pb-4 pt-2">
                    Date
                  </th>
                  <th scope="col" className="px-3 pb-4 pt-2">
                    Status
                  </th>
                  <th
                    scope="col"
                    className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                  >
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
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
