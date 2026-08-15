interface TimelineItemProps {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export default function TimelineItem({
  role,
  org,
  period,
  bullets,
}: TimelineItemProps) {
  return (
    <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
      <div
        style={{ width: 1, background: "#ebebeb", flexShrink: 0, marginTop: 5 }}
      />
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 4,
            marginBottom: 2,
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 500 }}>{role}</span>
          <span style={{ fontSize: 14, color: "#292929" }}>
            {" "}
            <span style={{ fontSize: 16, color: "#1162c5" }}>{org}</span>,{" "}
            {period}
          </span>
        </div>

        {bullets.length > 0 && (
          <ul style={{ margin: "18px 0 12px", paddingLeft: 16 }}>
            {bullets.map((b, i) => (
              <li
                key={i}
                style={{ fontSize: 16, color: "#666", lineHeight: 1.65 }}
              >
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
