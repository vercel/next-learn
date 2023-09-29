import { fetchCustomerNames } from '@/app/lib/data';
import Form from '@/app/ui/invoices/create-form';

export default async function Page() {
  const customerNames = await fetchCustomerNames();

  return (
    <main>
      <Form customerNames={customerNames} />
    </main>
  );
}
