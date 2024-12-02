"use client";

import { ArrowRight } from "lucide-react";
import { MotionDiv } from "./ui/motion-wrapper";
import { BackgroundEffects } from "./ui/background-effects";

export function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <BackgroundEffects />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
              <span className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Transform
              </span>{" "}
              Your Digital Future
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
              Empowering businesses with innovative technology solutions that drive growth,
              efficiency, and digital transformation.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <button className="group w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 sm:w-auto">
                  Get Started{" "}
                  <ArrowRight className="ml-2 inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </MotionDiv>
              <MotionDiv
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <button className="w-full rounded-full border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-lg transition hover:bg-gray-50 sm:w-auto">
                  Learn More
                </button>
              </MotionDiv>
            </div>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}