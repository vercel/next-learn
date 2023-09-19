import InvoiceForm from '@/app/ui/invoices/form';
import { notFound } from 'next/navigation';
import { Invoice } from '@/app/lib/definitions';
import { fetchInvoiceById } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id ? parseInt(params.id) : null;
  const invoiceData = await fetchInvoiceById(id);
  const invoice = invoiceData.rows[0] as Invoice;

  if (!invoice) {
    notFound();
  }

  return (
    <div>
      <InvoiceForm type="edit" invoice={invoice} />
    </div>
  );
}
