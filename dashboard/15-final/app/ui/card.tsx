import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";

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
  type: "invoices" | "customers" | "pending" | "collected";
}) {
  const Icon = iconMap[type];

  return (
    <div className="flex justify-between rounded-xl border bg-white p-6 shadow-sm">
      <div>
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="mt-2 text-3xl font-semibold tracking-wide">{value}</p>
        <p className="mt-1.5 text-sm text-zinc-400">+00% since last month</p>
      </div>
      {Icon ? (
        <Icon className="h-5 w-5 text-zinc-700" aria-label={type} />
      ) : null}
    </div>
  );
}
