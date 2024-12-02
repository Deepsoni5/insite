"use client";

import { MotionDiv } from "./motion-wrapper";

export function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-200 opacity-20 blur-[100px]"
      />
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5, 1] }}
        transition={{ duration: 5, delay: 1, repeat: Infinity }}
        className="absolute right-[10%] top-[30%] h-[400px] w-[400px] rounded-full bg-purple-200 opacity-20 blur-[100px]"
      />
      <div className="pointer-events-none absolute inset-x-0 -bottom-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-bottom-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-purple-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  );
}