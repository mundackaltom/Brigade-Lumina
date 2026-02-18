"use client";

import { motion } from "framer-motion";
import { isIOS } from "@/lib/isIOS";

export default function SafeMotion({ children, ...props }: any) {
  const isiOS = isIOS();

  // iPhone → Safe minimal animation
  if (isiOS) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  // Desktop + Android → Full animation
  return (
    <motion.div {...props}>
      {children}
    </motion.div>
  );
}