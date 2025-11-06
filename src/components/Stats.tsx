import { Fragment } from "react";
import type { StatItem } from "../data/constants";

interface StatsProps {
  stats: StatItem[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="py-12 relative">
      {/* Vertical dot pattern - left side */}
      <div className="absolute left-0 top-0 bottom-0 w-8 hidden lg:block pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="absolute left-2 w-1.5 h-1.5 bg-primary/30 rounded-full"
            style={{ top: `${i * 6}%` }}
          />
        ))}
      </div>

      {/* Scattered dots */}
      <div className="absolute top-4 right-8 w-2 h-2 bg-red-500 rounded-full opacity-60"></div>
      <div className="absolute top-8 right-12 w-2 h-2 bg-green-500 rounded-full opacity-60"></div>
      <div className="absolute top-12 right-6 w-2 h-2 bg-blue-500 rounded-full opacity-60"></div>

      <div className="flex items-center justify-between w-full mx-auto px-4">
        {stats.map((stat, index) => (
          <Fragment key={stat.label}>
            <div className="text-center flex-1">
              <div className="text-primary text-5xl lg:text-6xl font-bold leading-none">
                {stat.value}
              </div>
              <div className="mt-2 text-xl text-neutral font-normal">
                {stat.label}
              </div>
            </div>
            {index < stats.length - 1 && (
              <div className="hidden sm:block w-px bg-primary/40 h-12 mx-8 lg:mx-12"></div>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
