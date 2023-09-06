'use client';

import { TrashIcon } from '@heroicons/react/24/outline';
import { useTransition } from 'react';
import { deleteInvoice } from '@/app/lib/actions';

export default function DeleteInvoice({ id }: { id: number }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => deleteInvoice(id))}
      className="rounded-md border p-1"
    >
      <TrashIcon className="w-4" />
    </button>
  );
}
