'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export async function deleteInvoice(id: number) {
  await sql`DELETE FROM invoices WHERE id = ${id}`;
  revalidatePath('/dashboard/invoices');
}

const NewInvoice = z.object({
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
});

const UpdatedInvoice = NewInvoice.extend({
  id: z.string(),
  date: z.string(),
});

export async function createInvoice(formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries());
  const { customerId, amount, status } = NewInvoice.parse(rawFormData);
  const date = new Date().toISOString().split('T')[0];
  const ammountInCents = amount * 100;

  await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${ammountInCents}, ${status}, ${date})
  `;

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateInvoice(formData: FormData) {
  const { id, date, customerId, amount, status } = UpdatedInvoice.parse(
    Object.fromEntries(formData.entries()),
  );
  const ammountInCents = amount * 100;

  await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${ammountInCents}, status = ${status}, date = ${date}
    WHERE id = ${id}
  `;

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}
