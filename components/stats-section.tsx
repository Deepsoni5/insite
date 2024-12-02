"use client";

import { useEffect, useRef, useState } from "react";
import { MotionDiv } from "./ui/motion-wrapper";
import { Users2, Briefcase, Award, Building2 } from "lucide-react";
import { BackgroundEffects } from "./ui/background-effects";

const stats = [
  {
    icon: Users2,
    value: 500,
    label: "Happy Clients",
    suffix: "+",
  },
  {
    icon: Briefcase,
    value: 1000,
    label: "Projects Completed",
    suffix: "+",
  },
  {
    icon: Award,
    value: 25,
    label: "Awards Won",
    suffix: "+",
  },
  {
    icon: Building2,
    value: 10,
    label: "Years Experience",
    suffix: "+",
  },
];

function CounterAnimation({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = value;
          const duration = 2000;
          const increment = Math.ceil(end / (duration / 16));

          const timer = setInterval(() => {
            start += increment;
            if (start > end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={countRef} className="text-4xl font-bold text-gray-900">
      {count}
      {suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="relative bg-gray-50 py-24">
      <BackgroundEffects />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Impact in Numbers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Delivering excellence and driving success across industries
          </p>
        </MotionDiv>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <MotionDiv
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center rounded-2xl bg-white/80 p-8 text-center shadow-lg backdrop-blur-sm"
            >
              <stat.icon className="h-8 w-8 text-blue-600" />
              <CounterAnimation value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm font-medium text-gray-600">{stat.label}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}