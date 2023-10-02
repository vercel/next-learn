import { createInvoice } from '@/app/lib/actions';
import { fetchAllCustomers } from '@/app/lib/data';

export default async function Page() {
  const customers = await fetchAllCustomers();

  return (
    <div className="mx-auto max-w-sm rounded-lg border px-6 py-8 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-gray-900">
        Create Invoice
      </h2>

      <form action={createInvoice}>
        {/* Customer */}
        <div className="mb-4">
          <label
            htmlFor="customer"
            className="mb-2 block text-sm font-semibold"
            aria-label="Select Customer"
          >
            Customer
          </label>
          <select
            id="customer"
            name="customerId"
            className="block w-full rounded-md border-0 py-1.5 pl-3 text-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-200"
            defaultValue=""
            aria-label="Select Customer"
            aria-required="true"
            required
          >
            <option value="" disabled>
              Select a customer
            </option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
        </div>

        {/* Amount */}
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-semibold"
            htmlFor="amount"
            id="amount-label"
          >
            Amount
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-600 sm:text-sm" aria-hidden="true">
                $
              </span>
            </div>
            <input
              id="amount"
              name="amount"
              type="number"
              step="0.01"
              placeholder="00.00"
              className="block w-full rounded-md border-0 py-1.5 pl-7 text-sm leading-6 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400"
              aria-describedby="amount-label"
            />
          </div>
        </div>

        {/* Invoice Status */}
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-semibold"
            htmlFor="status"
            id="status-label"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            className="block w-full rounded-md border-0 py-1.5 pl-3 text-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-200"
            defaultValue="pending"
            aria-describedby="status-label"
          >
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="rounded-md bg-blue-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-600 focus:border-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
        >
          Create
        </button>
      </form>
    </div>
  );
}
