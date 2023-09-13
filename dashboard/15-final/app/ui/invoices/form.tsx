'use client';

import { Invoice } from '@/app/lib/definitions';
import { customers } from '@/app/lib/dummy-data';
import { useState, FormEvent } from 'react';

// import { addOrUpdateInvoice } from "@/app/lib/actions";
// export const dynamic = "force-dynamic";

export default function InvoiceForm({
  type,
  invoice,
}: {
  type: 'new' | 'edit';
  invoice?: Invoice;
}) {
  // TO DO: Replace state and handleSubmit with a Server Action
  const customer = customers.find(
    (customer) => customer.id === invoice?.customerId,
  );
  const initialCustomer = customer ? customer.id : 0;
  const initialAmount = invoice?.amount ? invoice.amount / 100 : 0;
  const initialStatus = invoice?.status || 'pending';

  const [selectedCustomer, setSelectedCustomer] = useState(initialCustomer);
  const [amount, setAmount] = useState<number>(initialAmount);
  const [status, setStatus] = useState<'pending' | 'paid'>(initialStatus);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedCustomer && amount) {
      const newInvoice: Invoice = {
        customerId: selectedCustomer,
        amount: amount * 100, // Convert to cents

        // These would be generated on the server
        id: 1, // Record ID will be automatically incremented
        status: status, // Default status for a new invoice
        date: new Date().toISOString().split('T')[0],
      };

      // TODO: Add this invoice to the database
      console.log('New Invoice:', newInvoice);
    }
  };

  return (
    <div className="mx-auto max-w-sm rounded-lg border px-6 py-8 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-gray-900">
        {type === 'new' ? 'New Invoice' : 'Edit Invoice'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="customer"
            className="mb-2 block text-sm font-semibold"
          >
            Customer
          </label>

          <select
            id="customer"
            onChange={(e) => setSelectedCustomer(Number(e.target.value))}
            className="block w-full rounded-md border-0 py-1.5 pl-3 text-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-200"
            value={selectedCustomer}
          >
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm font-semibold">Amount</label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-600 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              value={amount}
              placeholder="00.00"
              onChange={(e) => setAmount(Number(e.target.value))}
              className="block w-full rounded-md border-0 py-1.5 pl-7 text-sm leading-6 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400"
            />
          </div>
        </div>

        {type === 'edit' ? (
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-semibold"
              htmlFor="status"
            >
              Status
            </label>
            <select
              id="status"
              className="block w-full rounded-md border-0 py-1.5 pl-3 text-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-200"
              onChange={(e) => {
                const value = e.target.value;

                if (value === 'paid' || value === 'pending') {
                  setStatus(value);
                }
              }}
              value={status}
            >
              <option value="pending">Pending</option>
              <option value="paid">Paid</option>
            </select>
          </div>
        ) : null}

        <button
          type="submit"
          className="rounded-md bg-blue-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-600"
        >
          Create Invoice
        </button>
      </form>
    </div>
  );
}
