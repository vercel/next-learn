import InvoiceForm from '@/app/ui/invoices/form';
import { notFound } from 'next/navigation';
import { sql } from '@vercel/postgres';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id ? parseInt(params.id) : null;
  const invoiceData = await sql`SELECT * from INVOICES where id=${id}`;
  const invoice = invoiceData.rows[0];

  if (!invoice) {
    notFound();
  }

  return (
    <div>
      <InvoiceForm type="edit" invoice={invoice} />
    </div>
  );
}
