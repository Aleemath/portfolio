import { Fragment } from "react";
import type { StatItem } from "../data/constants";

interface StatsProps {
  stats: StatItem[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="bg-white py-16 relative">
      {/* Scattered dots */}
      <div className="absolute top-4 right-8 w-2 h-2 bg-red-500 rounded-full opacity-60"></div>
      <div className="absolute top-8 right-12 w-2 h-2 bg-green-500 rounded-full opacity-60"></div>
      <div className="absolute top-12 right-6 w-2 h-2 bg-blue-500 rounded-full opacity-60"></div>

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between w-full max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Fragment key={stat.label}>
              <div className="text-center flex-1">
                <div className="text-primary text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
                  {stat.value}
                </div>
                <div className="mt-3 text-base text-neutral font-normal">
                  {stat.label}
                </div>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden sm:block w-px bg-primary/40 h-16 mx-8 lg:mx-12 shrink-0"></div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
