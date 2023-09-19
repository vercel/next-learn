import { CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
        {
          'bg-red-50 text-red-700 ring-red-600/20': status === 'pending',
          'bg-green-50 text-green-700 ring-green-600/20': status === 'paid',
        },
      )}
    >
      {status === 'pending' ? (
        <>
          <ClockIcon className="mr-1 w-4 text-red-700" /> Pending
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          <CheckCircleIcon className="mr-1 w-4 text-green-700" /> Paid
        </>
      ) : null}
    </span>
  );
}
