import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

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
    <div className="flex justify-between rounded-lg border bg-white p-6 shadow-sm">
      <div>
        <h3 className="text-sm font-semibold text-zinc-400">{title}</h3>
        <p className="mt-3 text-3xl font-semibold">{value}</p>
      </div>
      {Icon ? (
        <Icon className="h-5 w-5 text-zinc-700" aria-label={type} />
      ) : null}
    </div>
  );
}
