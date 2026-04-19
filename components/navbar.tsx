"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[min(600px,calc(100%-1.5rem))] -translate-x-1/2">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111115]/92 px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:px-4">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <Image
              src="/images/voyager-logo.png"
              alt="Voyager Logo"
              width={32}
              height={32}
              className="rounded-lg transition-transform duration-200 group-hover:scale-[1.03]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-center gap-4 md:flex lg:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  isActive(item.href)
                    ? "text-white"
                    : "text-white/65 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/65 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Outside overflow-hidden container */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[min(600px,calc(100%-1.5rem))] bg-[#111115]/95 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
          <div className="flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                  isActive(item.href)
                    ? "bg-white/10 text-white"
                    : "text-white/65 hover:bg-white/5 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
