"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/data/site";
import { Container } from "./Container";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75">
      <Container className="flex h-16 items-center justify-between sm:h-[72px]">
        <Link
          href="/"
          className="-mx-2 flex min-h-11 items-center px-2 text-[15px] font-semibold tracking-tight"
        >
          aiden aho
        </Link>
        <nav aria-label="Main">
          <ul className="flex items-center gap-1 sm:gap-2">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-11 items-center rounded-md px-2.5 text-[15px] transition-colors duration-200 sm:px-3 ${
                      active ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    <span
                      className={`border-b pb-0.5 ${active ? "border-ink" : "border-transparent"}`}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
