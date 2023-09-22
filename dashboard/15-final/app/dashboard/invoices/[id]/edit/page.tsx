import InvoiceForm from '@/app/ui/invoices/form';
import { notFound } from 'next/navigation';
import { fetchInvoiceById } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id ? Number(params.id) : null;
  const invoice = await fetchInvoiceById(id);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <InvoiceForm type="edit" invoice={invoice} />
    </main>
  );
}
