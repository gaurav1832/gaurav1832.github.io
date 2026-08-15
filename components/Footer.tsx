const FOOTER_LINKS = [
  { l: "GitHub", h: "https://github.com/gaurav1832" },
  { l: "LinkedIn", h: "https://www.linkedin.com/in/gaurav1832/" },
  { l: "Email", h: "mailto:garwagaurav@gmail.com" },
  { l: "LeetCode", h: "https://leetcode.com/u/carlsen_magnus/" },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #ebebeb",
        paddingTop: 20,
        marginTop: 96,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 10,
      }}
    >
      <span style={{ fontSize: 12, color: "#bbb" }}>© 2025 Gaurav Garwa</span>
      <div style={{ display: "flex", gap: 14 }}>
        {FOOTER_LINKS.map((x) => (
          <a
            target="_blank"
            key={x.l}
            href={x.h}
            style={{ fontSize: 12, color: "#aaa", textDecoration: "none" }}
          >
            {x.l}
          </a>
        ))}
      </div>
    </footer>
  );
}
