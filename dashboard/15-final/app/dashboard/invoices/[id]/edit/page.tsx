import { fetchInvoiceById, fetchCustomerNames } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import Form from '@/app/ui/invoices/edit-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Invoice',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const invoice = await fetchInvoiceById(id);
  const customerNames = await fetchCustomerNames();

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Form invoice={invoice} customerNames={customerNames} id={id} />
    </main>
  );
}
