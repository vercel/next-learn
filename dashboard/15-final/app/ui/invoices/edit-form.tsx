'use client';

import { CustomerName, InvoiceForm } from '@/app/lib/definitions';
import { updateInvoice } from '@/app/lib/actions';
// @ts-ignore React types do not yet include useFormState
import { experimental_useFormState as useFormState } from 'react-dom';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import { clsx } from 'clsx';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '../button';
import { Breadcrumbs } from './breadcrumbs';

export default function EditInvoiceForm({
  id,
  invoice,
  customerNames,
}: {
  id: string;
  invoice: InvoiceForm;
  customerNames: CustomerName[];
}) {
  const initialState = { message: null, errors: [] };
  const [state, dispatch] = useFormState(updateInvoice, initialState);

  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <form action={dispatch}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          {/* Customer Name */}
          <div className="mb-4">
            <label
              htmlFor="customer"
              className="mb-2 block text-sm font-medium"
            >
              Choose customer
            </label>
            <div className="relative">
              <select
                id="customer"
                name="customerId"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue={invoice.name}
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
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>

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
            <label htmlFor="amount" className="mb-2 block text-sm font-medium">
              Choose an amount
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  defaultValue={invoice.amount}
                  placeholder="Enter USD amount"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  aria-describedby="amount-error"
                  style={
                    { '-moz-appearance': 'textfield' } as React.CSSProperties
                  }
                />
                <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
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
          <div>
            <label htmlFor="status" className="mb-2 block text-sm font-medium">
              Set the invoice status
            </label>
            <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input
                    id="pending"
                    name="status"
                    type="radio"
                    value="pending"
                    defaultChecked={invoice.status === 'pending'}
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-gray-600"
                  />
                  <label
                    htmlFor="pending"
                    className="ml-2 flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300"
                  >
                    Pending <ClockIcon className="h-4 w-4" />
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="paid"
                    name="status"
                    type="radio"
                    value="paid"
                    defaultChecked={invoice.status === 'paid'}
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-gray-600"
                  />
                  <label
                    htmlFor="paid"
                    className="ml-2 flex items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white dark:text-gray-300"
                  >
                    Paid <CheckIcon className="h-4 w-4" />
                  </label>
                </div>
              </div>
            </div>
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
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/invoices"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Edit Invoice</Button>
        </div>
      </form>
    </div>
  );
}
