import { fetchCustomerNames } from '@/app/lib/data';
import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

export default async function Page() {
  const customerNames = await fetchCustomerNames();

  return (
    <main>
      <Form customerNames={customerNames} />
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
    </main>
  );
}
