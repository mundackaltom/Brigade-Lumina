"use client";

import { motion } from "framer-motion";
import { isIOS } from "@/lib/isIOS";
import React from "react";

export default function SafeMotion({
  children,
  initial,
  whileInView,
  transition,
  viewport,
  ...rest
}: any) {
  const ios = isIOS();

  if (ios) {
    // iPhone version → opacity only
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }

  // Desktop + Android → full animation
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
