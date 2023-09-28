import { fetchAllCustomers } from '@/app/lib/data';
import Form from './form';

export default async function Page() {
  const customers = await fetchAllCustomers();

  return (
    <main className="mx-auto max-w-sm rounded-lg border px-6 py-8 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">Create Invoice</h2>
      <Form customers={customers} />
    </main>
  );
}
