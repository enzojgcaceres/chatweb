// "use client";

// import dynamic from "next/dynamic";
// import Navbar from "@/components/Navbar";

// // Dynamic import for LiquidEther (WebGL — client only)
// const LiquidEther = dynamic(() => import("@/components/LiquidEther"), {
//   ssr: false,
// });

// const plans = [
//   {
//     name: "Essential",
//     price: "$29",
//     period: "/mo",
//     description: "Core protection for everyday pets",
//     features: [
//       "Accident & illness coverage",
//       "Up to $5,000 annual limit",
//       "80% reimbursement",
//       "Any licensed vet",
//       "24/7 telehealth access",
//     ],
//     featured: false,
//   },
//   {
//     name: "Premium",
//     price: "$59",
//     period: "/mo",
//     description: "Complete care for the beloved member of your family",
//     features: [
//       "Everything in Essential",
//       "Up to $15,000 annual limit",
//       "90% reimbursement",
//       "Wellness & preventive care",
//       "Dental coverage included",
//       "Prescription food coverage",
//     ],
//     featured: true,
//   },
//   {
//     name: "Elite",
//     price: "$89",
//     period: "/mo",
//     description: "Unlimited peace of mind, zero compromises",
//     features: [
//       "Everything in Premium",
//       "Unlimited annual coverage",
//       "100% reimbursement",
//       "Alternative therapies",
//       "Behavioral therapy",
//       "International coverage",
//     ],
//     featured: false,
//   },
// ];

// const stats = [
//   { value: "98%", label: "Claims approved" },
//   { value: "< 3 days", label: "Average reimbursement" },
//   { value: "200k+", label: "Happy pet families" },
//   { value: "Any vet", label: "No network restrictions" },
// ];

// const steps = [
//   {
//     num: "01",
//     title: "Tell us about your pet",
//     body: "Name, breed, age — takes 2 minutes. We don't ask for unnecessary information.",
//   },
//   {
//     num: "02",
//     title: "Pick your plan",
//     body: "Choose the coverage level that fits your life. No hidden fees, ever.",
//   },
//   {
//     num: "03",
//     title: "Visit any vet",
//     body: "Take your pet to any licensed veterinarian. We don't limit your choice.",
//   },
//   {
//     num: "04",
//     title: "Get reimbursed fast",
//     body: "Submit a claim from your phone. Most reimbursements land in 72 hours.",
//   },
// ];

// export default function Home() {
//   return (
//     <main style={{ background: "var(--charcoal)", minHeight: "100vh" }}>
//       <Navbar />

//       {/* ── HERO ── */}
//       <section
//         style={{
//           position: "relative",
//           minHeight: "100vh",
//           display: "flex",
//           alignItems: "center",
//           overflow: "hidden",
//         }}
//       >
//         {/* Layer 0: Liquid Ether background */}
//         <LiquidEther className="liquid-wrap" />

//         {/* Layer 1: Overlay */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             background:
//               "linear-gradient(135deg, rgba(26,21,16,0.75) 0%, rgba(26,21,16,0.45) 50%, rgba(26,21,16,0.8) 100%)",
//             zIndex: 1,
//           }}
//         />

//         {/* Layer 2: Content */}
//         <div
//           style={{
//             position: "relative",
//             zIndex: 10,
//             maxWidth: "1200px",
//             margin: "0 auto",
//             padding: "8rem 3rem 5rem",
//             width: "100%",
//           }}
//         >
//           <div className="ornament fade-up fade-up-1" style={{ marginBottom: "2rem", maxWidth: "220px" }}>
//             Pet Insurance
//           </div>

//           <h1
//             className="fade-up fade-up-2"
//             style={{
//               fontFamily: "var(--font-display)",
//               fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
//               fontWeight: 300,
//               color: "var(--cream)",
//               lineHeight: 1.0,
//               marginBottom: "2rem",
//               maxWidth: "820px",
//             }}
//           >
//             Because your pet
//             <br />
//             <em style={{ color: "var(--amber-light)", fontStyle: "italic" }}>
//               deserves the best.
//             </em>
//           </h1>

//           <p
//             className="fade-up fade-up-3"
//             style={{
//               fontFamily: "var(--font-body)",
//               fontSize: "1.15rem",
//               color: "rgba(250, 246, 240, 0.7)",
//               maxWidth: "520px",
//               lineHeight: 1.7,
//               marginBottom: "3rem",
//               fontWeight: 300,
//             }}
//           >
//             Premium pet insurance with no network restrictions, fast
//             reimbursements, and coverage that actually covers. From $29/month.
//           </p>

//           <div
//             className="fade-up fade-up-4"
//             style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
//           >
//             <button className="btn-amber">Get a Free Quote</button>
//             <button className="btn-ghost">See Plans ↓</button>
//           </div>

//           {/* Trust badges */}
//           <div
//             className="fade-up fade-up-5"
//             style={{
//               display: "flex",
//               gap: "3rem",
//               marginTop: "5rem",
//               borderTop: "1px solid rgba(200, 137, 58, 0.2)",
//               paddingTop: "2rem",
//               flexWrap: "wrap",
//             }}
//           >
//             {stats.map((s) => (
//               <div key={s.value}>
//                 <div
//                   style={{
//                     fontFamily: "var(--font-display)",
//                     fontSize: "2rem",
//                     color: "var(--amber-light)",
//                     fontWeight: 400,
//                   }}
//                 >
//                   {s.value}
//                 </div>
//                 <div
//                   style={{
//                     fontFamily: "var(--font-body)",
//                     fontSize: "0.75rem",
//                     color: "rgba(250, 246, 240, 0.5)",
//                     letterSpacing: "0.08em",
//                     textTransform: "uppercase",
//                     marginTop: "0.2rem",
//                   }}
//                 >
//                   {s.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── HOW IT WORKS ── */}
//       <section
//         id="coverage"
//         style={{
//           padding: "var(--section-pad) 3rem",
//           maxWidth: "1200px",
//           margin: "0 auto",
//         }}
//       >
//         <div className="ornament" style={{ marginBottom: "1.5rem" }}>
//           How it works
//         </div>
//         <h2
//           style={{
//             fontFamily: "var(--font-display)",
//             fontSize: "clamp(2.5rem, 5vw, 4rem)",
//             color: "var(--cream)",
//             marginBottom: "1rem",
//           }}
//         >
//           Insurance that makes sense.
//         </h2>
//         <p
//           style={{
//             color: "rgba(250, 246, 240, 0.55)",
//             fontFamily: "var(--font-body)",
//             fontSize: "1rem",
//             maxWidth: "480px",
//             lineHeight: 1.7,
//             marginBottom: "4rem",
//           }}
//         >
//           We stripped out the complexity so you can focus on what matters —
//           your pet's health.
//         </p>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
//             gap: "1px",
//             background: "rgba(200, 137, 58, 0.15)",
//             border: "1px solid rgba(200, 137, 58, 0.15)",
//           }}
//         >
//           {steps.map((step, i) => (
//             <div
//               key={i}
//               className="glass-card"
//               style={{ padding: "2.5rem", background: "rgba(26, 21, 16, 0.9)" }}
//             >
//               <div
//                 style={{
//                   fontFamily: "var(--font-display)",
//                   fontSize: "3.5rem",
//                   color: "rgba(200, 137, 58, 0.25)",
//                   lineHeight: 1,
//                   marginBottom: "1rem",
//                 }}
//               >
//                 {step.num}
//               </div>
//               <h3
//                 style={{
//                   fontFamily: "var(--font-display)",
//                   fontSize: "1.4rem",
//                   color: "var(--cream)",
//                   marginBottom: "0.75rem",
//                 }}
//               >
//                 {step.title}
//               </h3>
//               <p
//                 style={{
//                   fontFamily: "var(--font-body)",
//                   fontSize: "0.9rem",
//                   color: "rgba(250, 246, 240, 0.55)",
//                   lineHeight: 1.65,
//                 }}
//               >
//                 {step.body}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── PLANS ── */}
//       <section
//         id="plans"
//         style={{
//           padding: "var(--section-pad) 3rem",
//           background: "rgba(250, 246, 240, 0.02)",
//           borderTop: "1px solid rgba(200, 137, 58, 0.1)",
//           borderBottom: "1px solid rgba(200, 137, 58, 0.1)",
//         }}
//       >
//         <div
//           style={{ maxWidth: "1200px", margin: "0 auto" }}
//         >
//           <div className="ornament" style={{ marginBottom: "1.5rem" }}>
//             Coverage Plans
//           </div>
//           <h2
//             style={{
//               fontFamily: "var(--font-display)",
//               fontSize: "clamp(2.5rem, 5vw, 4rem)",
//               color: "var(--cream)",
//               marginBottom: "1rem",
//             }}
//           >
//             Simple pricing. Serious coverage.
//           </h2>
//           <p
//             style={{
//               color: "rgba(250, 246, 240, 0.55)",
//               fontFamily: "var(--font-body)",
//               maxWidth: "420px",
//               lineHeight: 1.7,
//               marginBottom: "4rem",
//             }}
//           >
//             No annual price hikes based on claims. Your premium only adjusts
//             with your pet's age.
//           </p>

//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//               gap: "1.5rem",
//             }}
//           >
//             {plans.map((plan) => (
//               <div
//                 key={plan.name}
//                 className={`plan-card ${plan.featured ? "featured" : ""}`}
//               >
//                 <div
//                   style={{
//                     fontFamily: "var(--font-body)",
//                     fontSize: "0.7rem",
//                     letterSpacing: "0.2em",
//                     textTransform: "uppercase",
//                     color: "var(--amber)",
//                     marginBottom: "1.5rem",
//                   }}
//                 >
//                   {plan.name}
//                 </div>
//                 <div style={{ display: "flex", alignItems: "baseline", gap: "0.2rem", marginBottom: "0.75rem" }}>
//                   <span
//                     style={{
//                       fontFamily: "var(--font-display)",
//                       fontSize: "3.5rem",
//                       color: "var(--cream)",
//                       fontWeight: 300,
//                     }}
//                   >
//                     {plan.price}
//                   </span>
//                   <span
//                     style={{
//                       fontFamily: "var(--font-body)",
//                       color: "rgba(250,246,240,0.45)",
//                       fontSize: "0.85rem",
//                     }}
//                   >
//                     {plan.period}
//                   </span>
//                 </div>
//                 <p
//                   style={{
//                     fontFamily: "var(--font-body)",
//                     fontSize: "0.85rem",
//                     color: "rgba(250,246,240,0.5)",
//                     marginBottom: "2rem",
//                     lineHeight: 1.6,
//                   }}
//                 >
//                   {plan.description}
//                 </p>
//                 <ul style={{ listStyle: "none", marginBottom: "2.5rem" }}>
//                   {plan.features.map((f) => (
//                     <li
//                       key={f}
//                       style={{
//                         display: "flex",
//                         gap: "0.75rem",
//                         alignItems: "flex-start",
//                         fontFamily: "var(--font-body)",
//                         fontSize: "0.85rem",
//                         color: "rgba(250,246,240,0.7)",
//                         padding: "0.5rem 0",
//                         borderBottom: "1px solid rgba(200,137,58,0.08)",
//                       }}
//                     >
//                       <span style={{ color: "var(--amber)", flexShrink: 0, marginTop: "1px" }}>✦</span>
//                       {f}
//                     </li>
//                   ))}
//                 </ul>
//                 <button
//                   className={plan.featured ? "btn-amber" : "btn-ghost"}
//                   style={{ width: "100%" }}
//                 >
//                   Choose {plan.name}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CTA SECTION ── */}
//       <section
//         style={{
//           position: "relative",
//           padding: "var(--section-pad) 3rem",
//           overflow: "hidden",
//         }}
//       >
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             background:
//               "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(200, 137, 58, 0.12) 0%, transparent 70%)",
//             zIndex: 0,
//           }}
//         />
//         <div
//           style={{
//             position: "relative",
//             zIndex: 1,
//             maxWidth: "700px",
//             margin: "0 auto",
//             textAlign: "center",
//           }}
//         >
//           <div
//             className="ornament"
//             style={{ justifyContent: "center", marginBottom: "2rem" }}
//           >
//             Get started today
//           </div>
//           <h2
//             style={{
//               fontFamily: "var(--font-display)",
//               fontSize: "clamp(3rem, 6vw, 5rem)",
//               color: "var(--cream)",
//               marginBottom: "1.5rem",
//               lineHeight: 1.05,
//             }}
//           >
//             Your pet's health,{" "}
//             <em style={{ color: "var(--amber-light)", fontStyle: "italic" }}>
//               protected.
//             </em>
//           </h2>
//           <p
//             style={{
//               fontFamily: "var(--font-body)",
//               color: "rgba(250,246,240,0.55)",
//               fontSize: "1rem",
//               lineHeight: 1.7,
//               marginBottom: "3rem",
//               maxWidth: "480px",
//               margin: "0 auto 3rem",
//             }}
//           >
//             Join 200,000+ pet families who trust Kanguro. Get a personalized
//             quote in 2 minutes — no commitment required.
//           </p>
//           <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
//             <button className="btn-amber" style={{ padding: "1.1rem 3rem", fontSize: "0.95rem" }}>
//               Get My Free Quote
//             </button>
//             <button
//               className="btn-ghost"
//               style={{ padding: "1.1rem 2rem" }}
//               onClick={() => {
//                 // Opens Intercom messenger programmatically
//                 if (typeof window !== "undefined" && window.Intercom) {
//                   window.Intercom("show");
//                 }
//               }}
//             >
//               Chat with us
//             </button>
//           </div>
//           <p
//             style={{
//               fontFamily: "var(--font-body)",
//               fontSize: "0.75rem",
//               color: "rgba(250,246,240,0.3)",
//               marginTop: "1.5rem",
//               letterSpacing: "0.05em",
//             }}
//           >
//             No credit card required · Cancel anytime · 30-day money back guarantee
//           </p>
//         </div>
//       </section>

//       {/* ── FOOTER ── */}
//       <footer
//         style={{
//           borderTop: "1px solid rgba(200, 137, 58, 0.15)",
//           padding: "3rem",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           flexWrap: "wrap",
//           gap: "1.5rem",
//           maxWidth: "1200px",
//           margin: "0 auto",
//         }}
//       >
//         <div
//           style={{
//             fontFamily: "var(--font-display)",
//             fontSize: "1.4rem",
//             color: "rgba(250,246,240,0.4)",
//           }}
//         >
//           Kanguro Insurance
//         </div>
//         <p
//           style={{
//             fontFamily: "var(--font-body)",
//             fontSize: "0.75rem",
//             color: "rgba(250,246,240,0.25)",
//             letterSpacing: "0.05em",
//           }}
//         >
//           © 2025 Kanguro Insurance · Privacy · Terms · hello@kanguro.com
//         </p>
//       </footer>
//     </main>
//   );
// }

"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";

// Dynamic import for LiquidEther (WebGL — client only)
const LiquidEther = dynamic(() => import("@/components/LiquidEther"), {
  ssr: false,
});

// ─────────────────────────────────────────────────────────────────────────────
// DATA — kept here for when sections are re-enabled
// ─────────────────────────────────────────────────────────────────────────────

/* const plans = [
  { name: "Essential", price: "$29", period: "/mo", description: "Core protection for everyday pets",
    features: ["Accident & illness coverage","Up to $5,000 annual limit","80% reimbursement","Any licensed vet","24/7 telehealth access"], featured: false },
  { name: "Premium", price: "$59", period: "/mo", description: "Complete care for the beloved member of your family",
    features: ["Everything in Essential","Up to $15,000 annual limit","90% reimbursement","Wellness & preventive care","Dental coverage included","Prescription food coverage"], featured: true },
  { name: "Elite", price: "$89", period: "/mo", description: "Unlimited peace of mind, zero compromises",
    features: ["Everything in Premium","Unlimited annual coverage","100% reimbursement","Alternative therapies","Behavioral therapy","International coverage"], featured: false },
]; */

const stats = [
  { value: "98%", label: "Claims approved" },
  { value: "< 3 days", label: "Average reimbursement" },
  { value: "200k+", label: "Happy pet families" },
  { value: "Any vet", label: "No network restrictions" },
];

/* const steps = [
  { num: "01", title: "Tell us about your pet", body: "Name, breed, age — takes 2 minutes. We don't ask for unnecessary information." },
  { num: "02", title: "Pick your plan", body: "Choose the coverage level that fits your life. No hidden fees, ever." },
  { num: "03", title: "Visit any vet", body: "Take your pet to any licensed veterinarian. We don't limit your choice." },
  { num: "04", title: "Get reimbursed fast", body: "Submit a claim from your phone. Most reimbursements land in 72 hours." },
]; */

export default function Home() {
  return (
    <main style={{ background: "var(--charcoal)", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>

        {/* Layer 0: Liquid Ether background */}
        <LiquidEther className="liquid-wrap" />

        {/* Layer 1: Overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(26,21,16,0.75) 0%, rgba(26,21,16,0.45) 50%, rgba(26,21,16,0.8) 100%)", zIndex: 1 }} />

        {/* Layer 2: Content */}
        <div style={{ position: "relative", zIndex: 10, maxWidth: "1200px", margin: "0 auto", padding: "8rem 3rem 5rem", width: "100%" }}>

          {/* <div className="ornament fade-up fade-up-1" style={{ marginBottom: "2rem", maxWidth: "220px" }}>
            Pet Insurance
          </div> */}

          {/* <h1 className="fade-up fade-up-2" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 8vw, 7.5rem)", fontWeight: 300, color: "var(--cream)", lineHeight: 1.0, marginBottom: "2rem", maxWidth: "820px" }}>
            Because your pet
            <br />
            <em style={{ color: "var(--amber-light)", fontStyle: "italic" }}>deserves the best.</em>
          </h1> */}

          {/* <p className="fade-up fade-up-3" style={{ fontFamily: "var(--font-body)", fontSize: "1.15rem", color: "rgba(250, 246, 240, 0.7)", maxWidth: "520px", lineHeight: 1.7, marginBottom: "3rem", fontWeight: 300 }}>
            Premium pet insurance with no network restrictions, fast reimbursements, and coverage that actually covers. From $29/month.
          </p> */}

          {/* <div className="fade-up fade-up-4" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button className="btn-amber">Get a Free Quote</button>
            <button className="btn-ghost" onClick={() => { if (typeof window !== "undefined" && window.Intercom) { window.Intercom("show"); } }}>
              Chat with us
            </button>
          </div> */}

          {/* Trust badges */}
          {/* <div className="fade-up fade-up-5" style={{ display: "flex", gap: "3rem", marginTop: "5rem", borderTop: "1px solid rgba(200, 137, 58, 0.2)", paddingTop: "2rem", flexWrap: "wrap" }}>
            {stats.map((s) => (
              <div key={s.value}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--amber-light)", fontWeight: 400 }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(250, 246, 240, 0.5)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "0.2rem" }}>{s.label}</div>
              </div>
            ))}
          </div> */}

        </div>
      </section>

      {/* ── HOW IT WORKS — COMMENTED OUT ──
      <section id="coverage" ...> ... </section>
      ── END HOW IT WORKS ── */}

      {/* ── PLANS — COMMENTED OUT ──
      <section id="plans" ...> ... </section>
      ── END PLANS ── */}

      {/* ── CTA — COMMENTED OUT ──
      <section ...> ... </section>
      ── END CTA ── */}

      {/* ── FOOTER — COMMENTED OUT ──
      <footer ...> ... </footer>
      ── END FOOTER ── */}

    </main>
  );
}