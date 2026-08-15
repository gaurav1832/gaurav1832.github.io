interface ProjectCardProps {
  title: string;
  tech: string;
  desc: string;
  href: string;
  img: any;
}

export default function ProjectCard({
  title,
  tech,
  desc,
  href,
  img,
}: ProjectCardProps) {
  return (
    <div
      style={{
        background: "#fafafa",
        border: "1px solid #ebebeb",
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "0px 0 16px 0",
      }}
    >
      <img
        src={img}
        alt=""
        width="100%"
        style={{
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "8px",
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 500, margin: 0 }}>{title}</h3>
        <a
          href={href}
          target="_blank"
          style={{
            fontSize: 14,
            color: "#aaa",
            textDecoration: "none",
            flexShrink: 0,
            marginLeft: 8,
          }}
        >
          GitHub →
        </a>
      </div>
      <p
        style={{
          fontSize: 12,
          color: "#1162c5",
          margin: 0,
          fontFamily: "monospace",
          padding: "8px",
        }}
      >
        {tech}
      </p>
      <p
        style={{
          fontSize: 13,
          color: "#666",
          lineHeight: 1.6,
          margin: 0,
          padding: "0 8px",
        }}
      >
        {desc}
      </p>
    </div>
  );
}
