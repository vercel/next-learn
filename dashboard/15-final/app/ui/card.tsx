import clsx from "clsx";
export default function Card({
  title,
  value,
  color,
}: {
  title: string;
  value: number | string;
  color?: "green" | "red";
}) {
  return (
    <div
      className={clsx("rounded-md border border-t-4 bg-white p-4 shadow-sm", {
        "border-t-blue-400": !color,
        "border-t-green-400": color === "green",
        "border-t-red-400": color === "red",
      })}
    >
      <h3 className="text-sm text-zinc-400">{title}</h3>
      <p className="mt-2 text-3xl font-semibold leading-10 tracking-tight">
        {value}
      </p>
    </div>
  );
}
