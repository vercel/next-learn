import { fetchInvoiceById, fetchCustomerNames } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import Form from '@/app/ui/invoices/edit-form';

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
