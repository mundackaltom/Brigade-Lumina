"use client";

import Link from "next/link";

export default function TopStrip() {
  return (
    <div className="w-full bg-black text-white overflow-hidden border-b border-white/10">
      <div className="flex animate-marquee w-max tracking-wide text-sm font-medium gap-8 py-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex gap-8 px-6">
            <a href="tel:9036747821" className="font-semibold hover:text-amber-400 transition">
              📞 90367 47821
            </a>
            <span className="text-white/40">•</span>
            <Link href="/contact" className="hover:text-amber-400 transition">
              Submit Expression of Interest
            </Link>
            <span className="text-white/40">•</span>
            <Link href="/contact" className="hover:text-amber-400 transition">
              Book Your Site Visit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}