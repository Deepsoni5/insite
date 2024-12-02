"use client";

import { motion, type MotionProps } from "framer-motion";

interface MotionWrapperProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export function MotionDiv({ children, className, ...props }: MotionWrapperProps) {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
}