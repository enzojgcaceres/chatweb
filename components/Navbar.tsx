"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "1.25rem 3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(26, 21, 16, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(200, 137, 58, 0.15)"
          : "none",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
        <span
          style={{
            fontSize: "1.8rem",
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            color: "var(--cream)",
            letterSpacing: "-0.02em",
          }}
        >
          Kanguro
        </span>
        <span
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--amber)",
            fontFamily: "var(--font-body)",
            marginTop: "0.2rem",
          }}
        >
          Insurance
        </span>
      </div>

      {/* Nav links */}
      <div
        style={{
          display: "flex",
          gap: "2.5rem",
          alignItems: "center",
        }}
      >
        {["Coverage", "Plans", "Claims", "About"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(250, 246, 240, 0.65)",
              textDecoration: "none",
              transition: "color 0.25s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--amber)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(250, 246, 240, 0.65)")
            }
          >
            {item}
          </a>
        ))}
        <button className="btn-amber" style={{ padding: "0.6rem 1.5rem" }}>
          Get a Quote
        </button>
      </div>
    </nav>
  );
}
