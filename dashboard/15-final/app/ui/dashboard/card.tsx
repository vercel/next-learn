import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex justify-between ">
        <h3 className="text-sm font-medium">{title}</h3>
        {Icon ? (
          <Icon className="h-5 w-5 text-gray-700" aria-label={type} />
        ) : null}
      </div>
      <p className="mt-2 truncate text-2xl font-semibold tracking-wide md:text-3xl">
        {value}
      </p>
    </div>
  );
}
