interface AchievementRowProps {
  title: string;
  desc: string;
  link: string;
}

export default function AchievementRow({
  title,
  desc,
  link,
}: AchievementRowProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 4,
        padding: "10px 14px",
        background: "#fafafa",
        border: "1px solid #ebebeb",
        borderRadius: 8,
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontSize: 14,
          fontWeight: 500,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        {title}
        <span>
          <a
            href={link}
            target="_blank"
            style={{ fontSize: 12, color: "#555" }}
          >
            View on LinkedIn →
          </a>
        </span>
      </div>
      <p style={{ fontSize: 13, color: "#aaa" }}>{desc}</p>
    </div>
  );
}
