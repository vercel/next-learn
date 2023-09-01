import {invoices, customers} from "../lib/dummy-data";
import Link from "next/link";

export default function Example() {
  function getNameById(customerId: number) {
    const customerName = customers.find(customer => customer.id === customerId);
    return customerName ? customerName.name : null;
  }
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-base font-semibold text-gray-900">Invoices</h1>
        <Link
          href="/dashboard/invoices/create"
          className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Invoice
        </Link>
      </div>
      <div className="mt-8">
        <div className="overflow-x-auto">
          <div className="overflow-hidden border rounded-md">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    ID
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Customer Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Amount
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Date
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">View</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {invoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {invoice.id}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{getNameById(invoice.customerId)}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{(invoice.amount / 100).toLocaleString("en-US", {style: "currency", currency: "USD"})}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{invoice.status}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{invoice.date}</td>        
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <Link href={`/dashboard/invoices/${invoice.id}`} className="text-indigo-600 hover:text-indigo-900">
                        View<span className="sr-only">, {invoice.id}</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
