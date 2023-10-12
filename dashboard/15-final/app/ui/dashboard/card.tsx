import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import {
  fetchCustomersCount,
  fetchInvoices,
  fetchInvoiceStatus,
} from '@/app/lib/data';

export async function CardCollected() {
  const { numberOfInvoices } = await fetchInvoices();

  return <Card title="Collected">{numberOfInvoices}</Card>;
}

export async function CardPending() {
  const { totalPendingInvoices } = await fetchInvoiceStatus();

  return <Card title="Pending">{totalPendingInvoices}</Card>;
}

export async function CardTotalInvoices() {
  const { totalPaidInvoices } = await fetchInvoiceStatus();

  return <Card title="Invoices">{totalPaidInvoices}</Card>;
}

export async function CardCustomers() {
  const { numberOfCustomers } = await fetchCustomersCount();

  return <Card title="Customers">{numberOfCustomers}</Card>;
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const icons = {
    collected: BanknotesIcon,
    customers: UserGroupIcon,
    pending: ClockIcon,
    invoices: InboxIcon,
  };

  const Icon = icons[title.toLowerCase()];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        <Icon className="h-5 w-5 text-gray-700" />
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {children}
      </p>
    </div>
  );
}
