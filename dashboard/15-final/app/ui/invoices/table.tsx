import { invoices, customers } from "@/app/lib/dummy-data";
import { Customer } from "@/app/lib/definitions";
import Link from "next/link";
import {
  PencilSquareIcon,
  ClockIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import DeleteInvoice from "@/app/ui/invoices/delete-invoice-button";

function renderInvoiceStatus(status: string) {
  if (status === "pending") {
    return (
      <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
        <ClockIcon className="mr-1 w-4 text-red-700" />
        Pending
      </span>
    );
  } else {
    return (
      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        <CheckCircleIcon className="mr-1 w-4 text-green-700" />
        Paid
      </span>
    );
  }
}

export default function Table() {
  function getCustomerById(customerId: number): Customer | null {
    const customer = customers.find((customer) => customer.id === customerId);
    return customer ? customer : null;
  }

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-base font-semibold">Invoices</h1>
        <Link
          href="/dashboard/invoices/create"
          className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Add Invoice
        </Link>
      </div>
      <div className="mt-8">
        <div className="overflow-x-auto">
          <div className="rounded-md border">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50 text-left text-sm">
                <tr>
                  <th scope="col" className="px-3.5 py-3.5  sm:pl-6">
                    #
                  </th>
                  <th scope="col" className="px-3 py-3.5 font-semibold">
                    Customer
                  </th>
                  <th scope="col" className="px-3 py-3.5 font-semibold">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3.5 font-semibold">
                    Amount
                  </th>
                  <th scope="col" className="px-3 py-3.5 font-semibold">
                    Date
                  </th>
                  <th scope="col" className="px-3 py-3.5 font-semibold">
                    Status
                  </th>

                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                  {/* <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">View</span>
                  </th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white text-gray-500">
                {invoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-black sm:pl-6">
                      {invoice.id}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <div className="flex items-center gap-3">
                        <img
                          src={getCustomerById(invoice.customerId)?.imageUrl}
                          className="h-7 w-7 rounded-full"
                        />
                        <p>{getCustomerById(invoice.customerId)?.name}</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      {getCustomerById(invoice.customerId)?.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      {(invoice.amount / 100).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      {invoice.date}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      {renderInvoiceStatus(invoice.status)}
                    </td>
                    <td className="flex justify-end gap-2 whitespace-nowrap py-4 pl-3 pr-6 text-sm">
                      <button className="rounded-md border p-1">
                        <PencilSquareIcon className="w-4" />
                      </button>
                      <DeleteInvoice id={invoice.id} />
                    </td>
                    {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <Link
                        href={`/dashboard/invoices/${invoice.id}`}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        View<span className="sr-only">, {invoice.id}</span>
                      </Link>
                    </td> */}
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
