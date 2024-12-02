"use client";

import { CheckCircle2 } from "lucide-react";
import { MotionDiv } from "./ui/motion-wrapper";
import { BackgroundEffects } from "./ui/background-effects";

export function AboutSection() {
  return (
    <section id="about" className="relative bg-white py-24">
      <BackgroundEffects />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Our Company
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              With over a decade of experience in delivering innovative IT solutions,
              we've helped countless businesses transform their digital presence and
              achieve their technological goals.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Industry-leading expertise",
                "Cutting-edge technology solutions",
                "Dedicated support team",
                "Proven track record of success",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="h-full w-full object-cover opacity-80"
              />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}