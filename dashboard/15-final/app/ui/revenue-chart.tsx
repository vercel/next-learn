import { Revenue } from "@/app/lib/definitions";
import { generateYAxis } from "@/app/lib/calculations";

// This component is representational only.
// For data visualization UI, check out:
// https://www.chartjs.org/
// https://airbnb.io/visx/
// https://www.tremor.so/
export default function RevenueChart({ revenue }: { revenue: Revenue[] }) {
  const chartHeight = 350;
  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-zinc-400">No data available.</p>;
  }

  return (
    <div className="rounded-xl border p-6 shadow-sm md:col-span-5">
      <h2 className="font-semibold">Revenue</h2>
      <div className="sm:grid-cols-13 mt-4 grid grid-cols-12 items-end gap-2 md:gap-4">
        {/* y-axis */}
        <div
          className="mb-6 hidden flex-col justify-between text-sm text-zinc-400 sm:flex"
          style={{ height: `${chartHeight}px` }}
        >
          {yAxisLabels.map((label, index) => (
            <p key={index}>{label}</p>
          ))}
        </div>

        {revenue.map((month, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            {/* bars */}
            <div
              className="w-full rounded-md bg-gradient-to-t from-blue-200 via-blue-300 to-blue-400"
              style={{
                height: `${(chartHeight / topLabel) * month.revenue}px`,
              }}
            ></div>
            {/* x-axis */}
            <p className="-rotate-90 text-sm text-zinc-400 sm:rotate-0">
              {month.month}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
