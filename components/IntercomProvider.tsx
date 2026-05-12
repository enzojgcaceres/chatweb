"use client";

import { useEffect } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// INTERCOM CONFIG
// Replace YOUR_APP_ID with your actual Intercom app_id (e.g. "vb9i346o")
// For anonymous visitors: Intercom stores conversation in browser cookie.
// No user identity data is sent — perfect for demo/prospect websites.
// ─────────────────────────────────────────────────────────────────────────────
const INTERCOM_APP_ID = "YOUR_APP_ID"; // 🔑 Replace this

declare global {
  interface Window {
    Intercom: (...args: unknown[]) => void;
    intercomSettings: Record<string, unknown>;
  }
}

export default function IntercomProvider() {
  useEffect(() => {
    // Step 1: Set settings BEFORE loading the script
    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: INTERCOM_APP_ID,
      // Optional: customize launcher appearance
      // custom_launcher_selector: '#my-custom-button',
      // hide_default_launcher: false,
    };

    // Step 2: Load Intercom async snippet
    (function () {
      const w = window;
      const ic = w.Intercom;
      if (typeof ic === "function") {
        ic("reattach_activator");
        ic("update", w.intercomSettings);
      } else {
        const d = document;
        const i = function (...args: unknown[]) {
          (i as unknown as { q: unknown[] }).q.push(args);
        } as unknown as ((...args: unknown[]) => void) & { q: unknown[]; l: number };
        i.q = [];
        i.l = 1 * new Date().getTime();
        w.Intercom = i;
        const s = d.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = `https://widget.intercom.io/widget/${INTERCOM_APP_ID}`;
        const x = d.getElementsByTagName("script")[0];
        x.parentNode!.insertBefore(s, x);
      }
    })();

    // Step 3: Boot Intercom for anonymous visitor
    window.Intercom("boot", {
      api_base: "https://api-iam.intercom.io",
      app_id: INTERCOM_APP_ID,
    });

    // Cleanup on unmount
    return () => {
      if (typeof window.Intercom === "function") {
        window.Intercom("shutdown");
      }
    };
  }, []);

  return null;
}
