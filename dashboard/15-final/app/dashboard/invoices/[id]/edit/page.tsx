import { fetchInvoiceById, fetchAllCustomers } from '@/app/lib/data';
import { updateInvoice } from '@/app/lib/actions';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const invoice = await fetchInvoiceById(id);
  const customers = await fetchAllCustomers();

  if (!invoice) {
    notFound();
  }

  return (
    <main role="main">
      <div className="mx-auto max-w-sm rounded-lg border px-6 py-8 shadow-sm">
        <h2
          className="mb-6 text-xl font-semibold text-gray-900"
          role="heading"
          aria-level={2}
        >
          Edit Invoice
        </h2>
        <form action={updateInvoice}>
          <input type="hidden" name="id" value={id} />
          {/* Customer selection */}
          <div className="mb-4" role="group">
            <label
              htmlFor="customer"
              className="mb-2 block text-sm font-semibold"
            >
              Customer
            </label>
            <select
              id="customer"
              name="customerId"
              className="block w-full rounded-md border-0 py-1.5 pl-3 text-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-200 focus:ring-blue-200"
              defaultValue={invoice.name}
              aria-label="Select Customer"
            >
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
          </div>

          {/* Invoice amount */}
          <div className="mb-4" role="group">
            <label className="mb-2 block text-sm font-semibold">Amount</label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-600 sm:text-sm" aria-hidden="true">
                  $
                </span>
              </div>
              <input
                name="amount"
                type="number"
                step="0.01"
                defaultValue={invoice.amount}
                placeholder="00.00"
                className="block w-full rounded-md border-0 py-1.5 pl-7 text-sm leading-6 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-blue-200"
                aria-label="Enter Amount"
              />
            </div>
          </div>

          {/* Invoice status */}
          <div className="mb-4" role="group">
            <label
              className="mb-2 block text-sm font-semibold"
              htmlFor="status"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              className="block w-full rounded-md border-0 py-1.5 pl-3 text-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-200 focus:ring-blue-200"
              defaultValue={invoice.status}
              aria-label="Select Status"
            >
              <option value="pending">Pending</option>
              <option value="paid">Paid</option>
            </select>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="rounded-md bg-blue-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Update Invoice"
          >
            Update Invoice
          </button>
        </form>
      </div>
    </main>
  );
}
