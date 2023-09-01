import { Revenue } from "@/app/lib/definitions";
import { generateYAxis } from "@/app/lib/calculations";

export default function RevenueChart({ data }: { data: Revenue[] }) {
  const chartHeight = 400;
  const { yAxisLabels, topLabel } = generateYAxis(data);

  if (!data || data.length === 0) {
    return (
      <p className="mt-4 font-semibold text-zinc-400">No data available.</p>
    );
  }

  const amount = 32345;
  console.log(
    amount.toLocaleString("en-US", { style: "currency", currency: "USD" }),
  );

  return (
    <div className="rounded-xl border p-6 shadow-sm md:col-span-5">
      <h2 className="font-semibold">Revenue</h2>
      <div className="grid-cols-13 mt-4 grid items-end sm:gap-2 md:gap-4">
        {/* y-axis */}
        <div
          className="flex flex-col justify-between bg-red-50 text-sm text-zinc-400"
          style={{ height: `${chartHeight}px` }}
        >
          {yAxisLabels.map((label, index) => (
            <p key={index}>{label}</p>
          ))}
        </div>

        {data.map((month, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* bars */}
            <div
              className="w-4 rounded-md bg-blue-400 sm:w-6 md:w-10"
              style={{
                height: `${(chartHeight / topLabel) * month.revenue}px`,
              }}
            ></div>
            {/* x-axis */}
            <p className="text-sm text-zinc-400">{month.month}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
