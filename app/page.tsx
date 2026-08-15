// "use client";
// import { bucketList, greetings, lnk, PAGES, skills } from "@/data/data";
// import { useState, useEffect, useRef, type ReactNode } from "react";
// import pfp from "../data/img/me.png";

// // ── Shared types ──────────────────────────────────────────────//
// type BucketItem = {
//   id: string | number;
//   text: string;
//   done: boolean;
// };

// type BucketFilter = "all" | "done" | "todo";

// // ── Design Tokens ─────────────────────────────────────────────//
// const INK = "#1a1a1a";
// const PAPER = "#ffffff";
// const BG = "#f0eeea";
// const GRAY = "#777";
// const MUTED = "#aaa";
// const MONO = '"Courier New", Courier, monospace';
// const BORDER = `1.5px solid ${INK}`;
// const SHADOW = `4px 4px 0 ${INK}`;
// const SHADOW_SM = `2px 2px 0 ${INK}`;
// // Classic Mac title-bar scanlines
// const SCANLINES = `repeating-linear-gradient(0deg, transparent, transparent 1px, #dddbd3 1px, #dddbd3 2px)`;
// // Diagonal hatch, used for the bucket-list progress fill
// const HATCH = `repeating-linear-gradient(45deg, ${INK}, ${INK} 2px, transparent 2px, transparent 6px)`;
// // Classic Mac window traffic-light dots
// const DOT_COLORS = ["#ff5f57", "#febc2e", "#28c840"]; // red, yellow, green
// // Classic 6-stripe Apple logo palette (green → blue)
// const APPLE_COLORS = ["#61bb46", "#fdb827", "#f5821f", "#e03a3e", "#963d97", "#009ddc"];

// export default function Portfolio() {
//   const [greeting, setGreeting] = useState(greetings[0]);
//   const [fadeIn, setFadeIn] = useState(true);
//   const [page, setPage] = useState<string>("Work");
//   const [bucket, setBucket] = useState<BucketItem[]>(bucketList as BucketItem[]);
//   const [isNarrow, setIsNarrow] = useState(false);
//   const idxRef = useRef(0);

//   useEffect(() => {
//     const iv = setInterval(() => {
//       setFadeIn(false);
//       setTimeout(() => {
//         idxRef.current = (idxRef.current + 1) % greetings.length;
//         setGreeting(greetings[idxRef.current]);
//         setFadeIn(true);
//       }, 400);
//     }, 2500);
//     return () => clearInterval(iv);
//   }, []);

//   useEffect(() => {
//     const check = () => setIsNarrow(window.innerWidth < 960);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   const done = bucket.filter((i) => i.done).length;

//   return (
//     <div
//       style={{
//         fontFamily: "system-ui, sans-serif",
//         color: INK,
//         background: BG,
//         minHeight: "100vh",
//         padding: "40px 28px 68px",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: 1280,
//           margin: "0 auto",
//           display: "grid",
//           gridTemplateColumns: isNarrow ? "1fr" : "270px minmax(0, 1fr) 290px",
//           alignItems: "start",
//           gap: 24,
//         }}
//       >
//         {/* ── Left window: About + Hobbies ── */}
//         <MacWindow title="about-me.txt" order={isNarrow ? 2 : 1}>
//           <AboutSidebar />
//         </MacWindow>

//         {/* ── Center window: header, tabs, and the tabbed page content ── */}
//         <MacWindow title="portfolio.app" order={isNarrow ? 1 : 2} contentPadding="27px 29px 31px">
//           <header
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               flexWrap: "wrap",
//               gap: 14,
//               marginBottom: 20,
//             }}
//           >
//             <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0, fontFamily: MONO }}>
//               <span
//                 style={{
//                   opacity: fadeIn ? 1 : 0,
//                   transition: "opacity 0.4s",
//                   display: "inline-block",
//                 }}
//               >
//                 <AppleText text={greeting} />
//               </span>
//             </h1>
//             <div style={{ display: "flex", gap: 5 }}>
//               {PAGES.map((p: string) => (
//                 <button
//                   key={p}
//                   onClick={() => setPage(p)}
//                   style={{
//                     border: BORDER,
//                     cursor: "pointer",
//                     padding: "7px 17px",
//                     borderRadius: 0,
//                     fontSize: 14,
//                     fontFamily: MONO,
//                     fontWeight: page === p ? 700 : 400,
//                     color: INK,
//                     background: page === p ? "#e7e5df" : PAPER,
//                     boxShadow: page === p ? "inset 1px 1px 0 rgba(0,0,0,0.15)" : "none",
//                   }}
//                 >
//                   {p}
//                 </button>
//               ))}
//             </div>
//           </header>

//           <hr
//             style={{
//               border: "none",
//               borderTop: `1px dashed ${MUTED}`,
//               margin: "0 0 30px",
//             }}
//           />

//           {page === "Work" ? (
//             <WorkPage />
//           ) : page === "Personal" ? (
//             <PersonalPage />
//           ) : (
//             <PlaceholderPage pageName={page} />
//           )}
//         </MacWindow>

//         {/* ── Right window: Bucket List ── */}
//         <MacWindow title="bucket-list.app" order={3}>
//           <BucketListWidget bucket={bucket} setBucket={setBucket} done={done} />
//         </MacWindow>
//       </div>

//       <footer
//         style={{
//           maxWidth: 1280,
//           margin: "46px auto 0",
//           borderTop: `1px dashed ${MUTED}`,
//           paddingTop: 20,
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           flexWrap: "wrap",
//           gap: 12,
//         }}
//       >
//         <span style={{ fontSize: 14, color: GRAY, fontFamily: MONO }}>
//           © 2025 Gaurav Garwa
//         </span>
//         <div style={{ display: "flex", gap: 16 }}>
//           {[
//             { l: "GitHub", h: "https://github.com/gaurav1832" },
//             { l: "LinkedIn", h: "https://www.linkedin.com/in/gaurav1832/" },
//             { l: "Email", h: "mailto:garwagaurav@gmail.com" },
//           ].map((x) => (
//             <a
//               key={x.l}
//               href={x.h}
//               style={{ fontSize: 14, color: GRAY, textDecoration: "none", fontFamily: MONO }}
//             >
//               {x.l}
//             </a>
//           ))}
//         </div>
//       </footer>
//     </div>
//   );
// }

// // ── Renders text with the classic 6-stripe Apple logo palette ─//
// function AppleText({ text }: { text: string }) {
//   return (
//     <>
//       {text.split("").map((ch, i) => (
//         <span
//           key={i}
//           style={{
//             color: ch === " " ? undefined : APPLE_COLORS[i % APPLE_COLORS.length],
//           }}
//         >
//           {ch}
//         </span>
//       ))}
//     </>
//   );
// }

// // ── Mac-style window chrome, reused for all three columns ─────//
// function MacWindow({
//   title,
//   children,
//   order,
//   contentPadding = "20px 20px 22px",
// }: {
//   title: string;
//   children: ReactNode;
//   order?: number;
//   contentPadding?: string;
// }) {
//   return (
//     <div
//       style={{
//         order,
//         background: PAPER,
//         border: BORDER,
//         boxShadow: SHADOW,
//       }}
//     >
//       <div
//         style={{
//           background: SCANLINES,
//           borderBottom: BORDER,
//           padding: "8px 12px",
//           display: "flex",
//           alignItems: "center",
//           gap: 9,
//         }}
//       >
//         <div style={{ display: "flex", gap: 6 }}>
//           {DOT_COLORS.map((c) => (
//             <span
//               key={c}
//               style={{
//                 width: 11,
//                 height: 11,
//                 borderRadius: "50%",
//                 border: `1px solid ${INK}`,
//                 background: c,
//               }}
//             />
//           ))}
//         </div>
//         <span
//           style={{
//             fontFamily: MONO,
//             fontSize: 12,
//             fontWeight: 700,
//             letterSpacing: "0.02em",
//             margin: "0 auto",
//             transform: "translateX(-16px)",
//           }}
//         >
//           {title}
//         </span>
//       </div>
//       <div style={{ padding: contentPadding }}>{children}</div>
//     </div>
//   );
// }

// function SectionLabel({ children }: { children: ReactNode }) {
//   return (
//     <p
//       style={{
//         fontSize: 12,
//         fontWeight: 700,
//         textTransform: "uppercase",
//         letterSpacing: "0.1em",
//         color: GRAY,
//         fontFamily: MONO,
//         margin: "0 0 12px",
//         borderBottom: `1px dashed ${MUTED}`,
//         paddingBottom: 7,
//       }}
//     >
//       {children}
//     </p>
//   );
// }

// // ── Left sidebar: photo, role, hobbies, quick links ────────────//
// function AboutSidebar() {
//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
//       <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
//         <div
//           style={{
//             width: 88,
//             height: 88,
//             border: BORDER,
//             boxShadow: SHADOW_SM,
//             overflow: "hidden",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             background: "#f0efe8",
//           }}
//         >
//           <img
//             src={pfp.src}
//             alt="Gaurav Garwa"
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             onError={(e) => {
//               (e.target as HTMLImageElement).style.display = "none";
//             }}
//           />
//         </div>
//         <div style={{ textAlign: "center" }}>
//           <p style={{ fontSize: 16, fontWeight: 700, margin: "0 0 3px" }}>Gaurav Garwa</p>
//         </div>
//       </div>

//       <div>
//         <SectionLabel>Quick links</SectionLabel>
//         <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
//           {[
//             { label: "GitHub", href: "https://github.com/gaurav1832" },
//             { label: "LinkedIn", href: "https://www.linkedin.com/in/gaurav1832/" },
//             { label: "LeetCode", href: "https://leetcode.com/carlsen_magnus/" },
//             { label: "Chess.com", href: "https://www.chess.com/member/gauravgarwa" },
//             { label: "Email", href: "mailto:garwagaurav@gmail.com" },
//             {
//               label: "Resume ↗",
//               href: "https://drive.google.com/file/d/1EMo-174tGIjw9gPNRTaFwgxwZNTiOmmZ/view?usp=sharing",
//             },
//           ].map((s) => (
//             <a
//               key={s.label}
//               href={s.href}
//               style={{
//                 fontSize: 14,
//                 color: INK,
//                 textDecoration: "none",
//                 fontFamily: MONO,
//                 display: "flex",
//                 justifyContent: "space-between",
//                 borderBottom: "1px dotted #ddd",
//                 paddingBottom: 4,
//               }}
//             >
//               <span>{s.label}</span>
//               <span style={{ color: MUTED }}>→</span>
//             </a>
//           ))}
//         </div>
//       </div>

//       <div>
//         <SectionLabel>Hobbies</SectionLabel>
//         <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
//           {["Chess (1300+)", "Reading", "Designing"].map((s) => (
//             <span
//               key={s}
//               style={{
//                 fontSize: 13,
//                 padding: "5px 11px",
//                 border: "1px solid #ddd8cd",
//                 background: "#f5f2ed",
//                 color: "#555",
//                 fontFamily: MONO,
//               }}
//             >
//               {s}
//             </span>
//           ))}
//         </div>
//       </div>

//       <div>
//         <SectionLabel>Skills</SectionLabel>
//         <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
//           {skills.map((s: string) => (
//             <span
//               key={s}
//               style={{
//                 fontSize: 13,
//                 padding: "5px 11px",
//                 border: "1px solid #e8e8e8",
//                 background: "#f5f5f5",
//                 color: "#444",
//                 fontFamily: MONO,
//               }}
//             >
//               {s}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── Right sidebar: bucket list, with diagonal-hatch progress ──//
// function BucketListWidget({
//   bucket,
//   setBucket,
//   done,
// }: {
//   bucket: BucketItem[];
//   setBucket: React.Dispatch<React.SetStateAction<BucketItem[]>>;
//   done: number;
// }) {
//   const [filter, setFilter] = useState<BucketFilter>("all");

//   const toggle = (id: string | number) =>
//     setBucket((b) => b.map((i) => (i.id === id ? { ...i, done: !i.done } : i)));

//   const filtered =
//     filter === "done" ? bucket.filter((i) => i.done) : filter === "todo" ? bucket.filter((i) => !i.done) : bucket;

//   const pct = bucket.length ? (done / bucket.length) * 100 : 0;

//   return (
//     <div>
//       <SectionLabel>Bucket list</SectionLabel>

//       <div style={{ marginBottom: 14 }}>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             fontSize: 13,
//             fontFamily: MONO,
//             color: GRAY,
//             marginBottom: 6,
//           }}
//         >
//           <span>Progress</span>
//           <span>
//             {done}/{bucket.length}
//           </span>
//         </div>
//         <div style={{ height: 12, border: `1px solid ${INK}`, background: PAPER }}>
//           <div
//             style={{
//               height: "100%",
//               width: `${pct}%`,
//               backgroundImage: HATCH,
//               transition: "width 0.3s",
//             }}
//           />
//         </div>
//       </div>

//       <div style={{ display: "flex", gap: 5, marginBottom: 14 }}>
//         {(["all", "done", "todo"] as BucketFilter[]).map((f) => (
//           <button
//             key={f}
//             onClick={() => setFilter(f)}
//             style={{
//               fontSize: 12,
//               padding: "4px 11px",
//               fontFamily: MONO,
//               border: `1px solid ${INK}`,
//               background: filter === f ? INK : PAPER,
//               color: filter === f ? PAPER : INK,
//               cursor: "pointer",
//               textTransform: "uppercase",
//             }}
//           >
//             {f}
//           </button>
//         ))}
//       </div>

//       <div style={{ display: "flex", flexDirection: "column", gap: 6, maxHeight: 460, overflowY: "auto" }}>
//         {filtered.map((item) => (
//           <div
//             key={item.id}
//             // onClick={() => toggle(item.id)}
//             style={{
//               display: "flex",
//               alignItems: "flex-start",
//               gap: 9,
//               padding: "7px 5px",
//               cursor: "pointer",
//             }}
//           >
//             <span
//               style={{
//                 width: 15,
//                 height: 15,
//                 border: `1.5px solid ${INK}`,
//                 background: item.done ? INK : PAPER,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 flexShrink: 0,
//                 marginTop: 2,
//               }}
//             >
//               {item.done && <span style={{ color: PAPER, fontSize: 10, lineHeight: 1 }}>✓</span>}
//             </span>
//             <span
//               style={{
//                 fontSize: 14,
//                 lineHeight: 1.55,
//                 fontFamily: MONO,
//                 color: item.done ? MUTED : "#333",
//                 textDecoration: item.done ? "line-through" : "none",
//               }}
//             >
//               {item.text}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ── Center content: Work tab (unchanged content, just restyled to fit) ──//
// function WorkPage() {
//   return (
//     <>
//       <section style={{ marginBottom: 38 }}>
//         <p
//           style={{
//             fontSize: 16,
//             lineHeight: 1.8,
//             color: "#444",
//             margin: 0,
//           }}
//         >
//           Angular developer at SBI's{" "}
//           <a href="https://yonobusiness.sbi.bank.in" style={lnk}>
//             yono Business
//           </a>{" "}
//           team. Passionate about web apps and solving complex problems. B.Tech CS from VIT
//           Bhopal. Built{" "}
//           <a href="https://github.com/gaurav1832/autoinbox" style={lnk}>
//             AutoInbox
//           </a>{" "}
//           &{" "}
//           <a href="https://github.com/HarshHrs24/Team-cl_AI_mate" style={lnk}>
//             Cl_AI_mate
//           </a>
//           .
//         </p>
//       </section>

//       <section style={{ marginBottom: 38 }}>
//         <SectionLabel>Experience</SectionLabel>
//         <TimelineItem
//           role="Asst. Manager (Systems) - Developer"
//           org="State Bank of India, Mumbai"
//           period="Jul 2025 – Present"
//           bullets={[
//             "Working on the development of YONO Business web application, improving services and full SDLC ownership for new features.",
//           ]}
//         />
//         <TimelineItem
//           role="Software Developer"
//           org="123 Of AI, Bangalore"
//           period="Sep 2024 – Jul 2025"
//           bullets={["Full-stack with React/Next/Node; reduced bugs, shipped features via Azure CI/CD."]}
//         />
//         <div style={{ marginTop: 24 }}>
//           <SectionLabel>Education</SectionLabel>
//         </div>
//         <TimelineItem
//           role="B.Tech, CSE · CGPA 8.06"
//           org="Vellore Institute of Technology, Bhopal"
//           period="2020 – 2024"
//           bullets={[]}
//         />
//       </section>

//       <section style={{ marginBottom: 38 }}>
//         <SectionLabel>Projects</SectionLabel>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//             gap: 14,
//           }}
//         >
//           <PCard
//             title="AutoInbox"
//             tech="React · Node · Google API · Microsoft Graph · BullMQ"
//             desc="Email management app with AI-driven analysis and automated replies via Google & Outlook APIs."
//             href="https://github.com/gaurav1832/autoinbox"
//           />
//           <PCard
//             title="Cl_AI_mate"
//             tech="Python · Prophet · AI/ML · Streamlit"
//             desc="Time series forecasting for climate change — 90%+ accuracy for heatwaves & AQI in Telangana."
//             href="https://github.com/HarshHrs24/Team-cl_AI_mate"
//           />
//         </div>
//         <div
//           style={{
//             marginTop: 14,
//             background: "#fafafa",
//             border: "1px solid #ebebeb",
//             padding: "16px 18px",
//           }}
//         >
//           <p style={{ fontSize: 15, fontWeight: 500, margin: "0 0 3px" }}>
//             Multifaceted Analysis of Climate Trends and Air Quality in Indian Metropolises
//           </p>
//           <p style={{ fontSize: 14, color: MUTED, margin: "0 0 7px" }}>
//             Machine Intelligence, Tools &amp; Applications — Springer Conference Paper
//           </p>
//           <a
//             href="https://link.springer.com/chapter/10.1007/978-3-031-65392-6_7"
//             style={{ fontSize: 14, color: "#555" }}
//           >
//             View on Springer →
//           </a>
//         </div>
//       </section>

//       <section>
//         <SectionLabel>Achievements</SectionLabel>
//         <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
//           <ARow
//             title="Academic Grand Challenge on Climate Change"
//             desc="Winner among 7,500+ teams · Prize ₹5,00,000"
//             link="https://www.linkedin.com/posts/gaurav1832_winners-taim-hackathon-activity-7043313463275728896-_LZx?utm_source=share&utm_medium=member_desktop&rcm=ACoAADOQcD8BwRD-dSJVZHJNskTXGpHnjqKMCGs"
//           />
//           <ARow
//             title="Amazon ML Summer School"
//             desc="Top 3,500 selected out of thousands"
//             link="https://www.linkedin.com/posts/gaurav1832_amazon-amazonmlsummerschool-machinelearning-activity-7108970319020777472-bw7p?utm_source=share&utm_medium=member_desktop&rcm=ACoAADOQcD8BwRD-dSJVZHJNskTXGpHnjqKMCGs"
//           />
//         </div>
//       </section>
//     </>
//   );
// }

// // ── Center content: Personal tab (hobbies + bucket list now live in
// // the sidebars, so this is free real estate for whatever comes next —
// // e.g. a "now" log, reading list, or blog roll) ──────────────────//
// function PersonalPage() {
//   return (
//     <section
//       style={{
//         border: `1px dashed ${MUTED}`,
//         padding: "32px 22px",
//         textAlign: "center",
//         fontFamily: MONO,
//         color: GRAY,
//         fontSize: 15,
//       }}
//     >
//       Hobbies and the bucket list now live in the side windows. This tab is
//       open space — drop in a "now" log, reading list, or anything else next.
//     </section>
//   );
// }

// // ── Fallback for any additional pages you add to PAGES later ──//
// function PlaceholderPage({ pageName }: { pageName: string }) {
//   return (
//     <section
//       style={{
//         border: `1px dashed ${MUTED}`,
//         padding: "32px 22px",
//         textAlign: "center",
//         fontFamily: MONO,
//         color: GRAY,
//         fontSize: 15,
//       }}
//     >
//       "{pageName}" is wired up in PAGES — add its content here.
//     </section>
//   );
// }

// function TimelineItem({
//   role,
//   org,
//   period,
//   bullets,
// }: {
//   role: string;
//   org: string;
//   period: string;
//   bullets: string[];
// }) {
//   return (
//     <div style={{ display: "flex", gap: 18, marginBottom: 18 }}>
//       <div style={{ width: 1, background: "#ebebeb", flexShrink: 0, marginTop: 5 }} />
//       <div style={{ flex: 1 }}>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             flexWrap: "wrap",
//             gap: 5,
//             marginBottom: 3,
//           }}
//         >
//           <span style={{ fontSize: 16, fontWeight: 500 }}>{role}</span>
//           <span style={{ fontSize: 14, fontFamily: MONO }}>{period}</span>
//         </div>
//         <span style={{ fontSize: 15, color: "#888" }}>{org}</span>
//         {bullets.length > 0 && (
//           <ul style={{ margin: "7px 0 0", paddingLeft: 18 }}>
//             {bullets.map((b, i) => (
//               <li key={i} style={{ fontSize: 15, color: "#666", lineHeight: 1.7 }}>
//                 {b}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// function PCard({
//   title,
//   tech,
//   desc,
//   href,
// }: {
//   title: string;
//   tech: string;
//   desc: string;
//   href: string;
// }) {
//   return (
//     <div
//       style={{
//         background: "#fafafa",
//         border: "1px solid #ebebeb",
//         padding: "16px 18px",
//         display: "flex",
//         flexDirection: "column",
//         gap: 9,
//       }}
//     >
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
//         <h3 style={{ fontSize: 16, fontWeight: 500, margin: 0 }}>{title}</h3>
//         <a
//           href={href}
//           style={{
//             fontSize: 14,
//             color: MUTED,
//             textDecoration: "none",
//             flexShrink: 0,
//             marginLeft: 9,
//           }}
//         >
//           GitHub →
//         </a>
//       </div>
//       <p style={{ fontSize: 13, margin: 0, fontFamily: MONO }}>{tech}</p>
//       <p style={{ fontSize: 15, color: "#666", lineHeight: 1.65, margin: 0 }}>{desc}</p>
//     </div>
//   );
// }

// function ARow({ title, desc, link }: { title: string; desc: string; link: string }) {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         flexWrap: "wrap",
//         gap: 5,
//         padding: "12px 16px",
//         background: "#fafafa",
//         border: "1px solid #ebebeb",
//         flexDirection: "column",
//       }}
//     >
//       <div
//         style={{
//           fontSize: 15,
//           fontWeight: 500,
//           display: "flex",
//           justifyContent: "space-between",
//           flexWrap: "wrap",
//           gap: 5,
//         }}
//       >
//         {title}
//         <span>
//           <a href={link} style={{ fontSize: 14, color: "#555" }}>
//             View on LinkedIn →
//           </a>
//         </span>
//       </div>
//       <p style={{ fontSize: 14, color: MUTED }}>{desc}</p>
//     </div>
//   );
// }

import pfp from "@/data/img/me.png";

export default function HomePage() {
  return (
    <section
      style={{
        display: "flex",
        gap: 24,
        alignItems: "flex-start",
        marginBottom: 48,
        flexWrap: "wrap",
        textAlign: "justify",
      }}
    >
      <div
        style={{
          width: 156,
          height: 156,
          borderRadius: "50%",
          background: "#f0efe8",
          border: "1px solid #e8e8e8",
          flexShrink: 0,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          fontWeight: 500,
          color: "#999",
          padding: "2px",
        }}
      >
        <img
          src={pfp.src}
          alt="Gaurav Garwa"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </div>
      <div style={{ flex: 1, minWidth: 220, padding: "6px" }}>
        {/* <h2 style={{ fontSize: 22, fontWeight: 500, margin: "0 0 2px" }}>
          Gaurav Garwa
        </h2> */}
        {/* <p style={{ fontSize: 18, color: "#888", margin: "0 0 12px" }}>
          Assistant Manager (Systems) · Navi Mumbai, India
        </p> */}
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.75,
            color: "#444",
            margin: "0 0 16px",
          }}
        >
          Hi I'm Gaurav, an IT Professional working on enterprise banking
          applications at SBI's yono Business web application, and worked on
          full-stack web platforms in a startup environment. Experienced in
          Agile delivery, secure coding practices, and applying various
          development tools to improve code quality and productivity.
        </p>

        <p
          style={{
            fontSize: 14,
            lineHeight: 1.75,
            color: "#444",
            margin: "48px 0 32px",
          }}
        >
          Currently working with{" "}
          <a
            style={{ color: "#0456c2", fontStyle: "italic" }}
            target="_blank"
            href="https://yonobusiness.sbi.bank.in"
          >
            yono Business
          </a>
        </p>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1EMo-174tGIjw9gPNRTaFwgxwZNTiOmmZ/view?usp=sharing"
            style={{
              display: "flex",
              alignItems: "center",
              color: "#0456c2",
            }}
          >
            {/* <img
              src="https://play-lh.googleusercontent.com/DcWPEDUZyWYRh8ya7kQ4GE0oISmomuSaLLRmyNCpiTEsslpfYsQZPaG-PlMHeXFWJzwy7zuQ8-Xykjvxz_lG"
              alt="Resume"
              width={30}
              height={30}
              style={{ objectFit: "contain", marginRight: "6px" }}
            /> */}
            Resume
          </a>

          {/* <a
            target="_blank"
            href="https://leetcode.com/u/carlsen_magnus/"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src="https://iconlogovector.com/uploads/images/2025/06/lg-685660bc962f7-LeetCode.webp"
              alt="LeetCode"
              width={70}
              height={70}
              style={{ objectFit: "contain", marginRight: "6px" }}
            />
          </a> */}
          {/* 
          <a
            href="mailto:garwagaurav@gmail.com"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src="https://t3.ftcdn.net/jpg/02/63/09/76/360_F_263097659_XrPDHHsPFEMHzYLlUqZuIunkmlQBc1A0.jpg"
              alt="Mail"
              width={40}
              height={40}
              style={{ objectFit: "contain", marginRight: "6px" }}
            />
          </a>

          <a
            target="_blank"
            href="https://github.com/gaurav1832"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src="https://brand.github.com/_next/static/media/logo-03.cc5e5332.png"
              alt="GitHub"
              width={78}
              height={78}
              style={{ objectFit: "contain", marginRight: "6px" }}
            />
          </a> */}

          {/* <a
            target="_blank"
            href="https://www.linkedin.com/in/gaurav1832/"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LinkedIn_logo.svg"
              alt="LinkedIn"
              width={58}
              height={58}
              style={{ objectFit: "contain", marginRight: "6px" }}
            />
          </a> */}
        </div>
      </div>
    </section>
  );
}
