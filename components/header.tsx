"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { greetings } from "@/data/data";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/personal" },
];

// Animation phases for the greeting swap:
// visible  -> resting state, fully shown
// leaving  -> slides up + fades out (transition enabled)
// entering -> instantly repositioned below, invisible (transition disabled),
//             then flipped back to "visible" on the next frame so the browser
//             animates the slide-up + fade-in
type GreetingPhase = "visible" | "leaving" | "entering";

const MOBILE_QUERY = "(max-width: 640px)";

export default function Header() {
  const pathname = usePathname();
  const [greeting, setGreeting] = useState<string>(greetings[0]);
  const [phase, setPhase] = useState<GreetingPhase>("visible");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const idxRef = useRef<number>(0);

  useEffect(() => {
    const iv = setInterval(() => {
      setPhase("leaving");
      setTimeout(() => {
        idxRef.current = (idxRef.current + 1) % greetings.length;
        setGreeting(greetings[idxRef.current]);
        setPhase("entering");
        // Two rAFs so the browser paints the "entering" (no-transition) position
        // first, then we flip to "visible" to trigger the animated transition.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setPhase("visible"));
        });
      }, 400);
    }, 2500);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    setIsMobile(mq.matches);
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  const greetingStyle: React.CSSProperties = {
    display: "block",
    height: 21,
    lineHeight: "21px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    fontSize: 16,
    fontWeight: 500,
    padding: "2px",
    color: "gray",
    transform:
      phase === "leaving"
        ? "translateY(-6px)"
        : phase === "entering"
        ? "translateY(6px)"
        : "translateY(0)",
    opacity: phase === "visible" ? 1 : 0,
    transition:
      phase === "entering" ? "none" : "transform 0.4s ease, opacity 0.4s ease",
  };

  return (
    <>
      <header
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          padding: "28px 0 0",
          flexWrap: "nowrap",
          gap: isMobile ? 10 : 12,
          marginBottom: "5rem",
        }}
      >
        <div style={{ maxWidth: isMobile ? "100%" : "55%", flexShrink: 1 }}>
          <h2 style={{ fontSize: 26, fontWeight: 500, margin: "0 0 2px" }}>
            Gaurav Garwa
          </h2>
          <span style={greetingStyle}>{greeting}</span>
        </div>
        <div style={{ display: "flex", gap: 4, flexShrink: 0 }}>
          {NAV_LINKS.map((p) => {
            const active = pathname === p.href;
            return (
              <Link
                key={p.href}
                href={p.href}
                style={{
                  border: "none",
                  cursor: "pointer",
                  padding: "5px 14px",
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: active ? 500 : 400,
                  color: active ? "#1a1a1a" : "#888",
                  background: active ? "#f0f0f0" : "transparent",
                  transition: "all 0.15s",
                  textDecoration: "none",
                }}
              >
                {p.label}
              </Link>
            );
          })}
        </div>
      </header>
    </>
  );
}
