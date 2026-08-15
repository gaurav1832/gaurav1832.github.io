import type { ReactNode, CSSProperties } from "react";

interface LabelProps {
  children: ReactNode;
  style?: CSSProperties;
}

export default function Label({ children, style }: LabelProps) {
  return (
    <p
      style={{
        fontSize: 14,
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.09em",
        color: "#312f2f",
        margin: "40px 0 18px",
        ...style,
      }}
    >
      {children}
    </p>
  );
}
