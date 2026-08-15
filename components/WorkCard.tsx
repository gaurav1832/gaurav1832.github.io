import { WorkItem } from "@/app/lib/types";

export default function WorkCard({ item }: { item: WorkItem }) {
  return (
    <div
      style={{
        background: "#fafafa",
        border: "1px solid #ebebeb",
        borderRadius: 8,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          background: "#eee",
          overflow: "hidden",
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <div
        style={{
          padding: "12px 16px 14px",
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: 0 }}>
            {item.title}
          </h3>
          <a
            href={item.href}
            target="_blank"
            style={{
              fontSize: 12,
              color: "#aaa",
              textDecoration: "none",
              flexShrink: 0,
              marginLeft: 8,
            }}
          >
            View →
          </a>
        </div>
        <p
          style={{
            fontSize: 11,
            color: "#bbb",
            margin: 0,
            fontFamily: "monospace",
          }}
        >
          {item.tech}
        </p>
        <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, margin: 0 }}>
          {item.desc}
        </p>
        {item.linkedin && (
          <a
            href={item.linkedin}
            target="_blank"
            style={{
              fontSize: 12,
              color: "#0a66c2",
              textDecoration: "none",
              marginTop: 4,
            }}
          >
            View LinkedIn post →
          </a>
        )}
      </div>
    </div>
  );
}
