'use client';

import { createInvoice } from '@/app/lib/actions';
import { CustomerName } from '@/app/lib/definitions';
// @ts-ignore React types do not yet include useFormState
import { experimental_useFormState as useFormState } from 'react-dom';

export default function Form({
  customerNames,
}: {
  customerNames: CustomerName[];
}) {
  const initialState = { message: null, errors: [] };
  const [state, dispatch] = useFormState(createInvoice, initialState);

  return (
    <div className="mx-auto max-w-sm rounded-lg border px-6 py-8 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">Update Invoice</h2>
      <form action={dispatch}>
        {/* Customer Name */}
        <div className="mb-4">
          <label
            htmlFor="customer"
            className="mb-2 block text-sm font-semibold"
          >
            Customer
          </label>
          <select
            id="customer"
            name="customerId"
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-200"
            defaultValue=""
            aria-describedby="customer-error"
          >
            <option value="" disabled>
              Select a customer
            </option>
            {customerNames.map((name) => (
              <option key={name.id} value={name.id}>
                {name.name}
              </option>
            ))}
          </select>

          {state.errors?.customerId ? (
            <div
              id="customer-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.customerId.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-semibold">
            Amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-600 sm:text-sm">$</span>
            </div>
            <input
              id="amount"
              name="amount"
              type="number"
              step="0.01"
              placeholder="00.00"
              className="block w-full rounded-md border border-gray-200 py-2 pl-6 text-sm outline-2 placeholder:text-gray-200"
              aria-describedby="amount-error"
            />
          </div>

          {state.errors?.amount ? (
            <div
              id="amount-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.amount.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>

        {/* Invoice Status */}
        <div className="mb-4">
          <label htmlFor="status" className="mb-2 block text-sm font-semibold">
            Status
          </label>
          <select
            id="status"
            name="status"
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-200"
            defaultValue="pending"
            aria-describedby="status-error"
          >
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
          </select>

          {state.errors?.status ? (
            <div
              aria-describedby="status-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.status.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>

        {state.message ? (
          <div aria-live="polite" className="my-2 text-sm text-red-500">
            <p>{state.message}</p>
          </div>
        ) : null}

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-2 rounded-md bg-black px-4 py-2 text-center text-sm text-white outline-2 outline-offset-4 hover:bg-gray-800"
        >
          Create Invoice
        </button>
      </form>
    </div>
  );
}
