import Link from 'next/link';
import {invoices} from '../lib/dummy-data';

export default function Example() {
  return (
    <div className="px-4 md:px-8">
    <div className="flex items-center justify-between">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Invoices</h3>
      <button className="rounded-md bg-blue-600 text-white p-2 text-sm">
        Add Invoice
      </button>
    </div>
    <div className="mt-4 overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-300">
    <thead>
      <tr>
        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
          ID
        </th>
        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
          Customer ID
        </th>
        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
          Amount
        </th>
        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
          Status
        </th>
        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
          <span className="sr-only">View</span>
        </th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {invoices.map((invoice) => (
        <tr key={invoice.id}>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
            {invoice.id}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{invoice.customerId}</td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{invoice.amount}</td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{invoice.status}</td>
          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
            <Link href={`/dashboard/invoices/${invoice.id}`} className="text-indigo-600 hover:text-indigo-900">
              View
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>
  </div>
  )
}
