import { BookItem } from "@/app/lib/types";

export default function BookCard({ book }: { book: BookItem }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        alignItems: "flex-start",
        padding: "8px 10px",
        marginBottom: "8px",
      }}
    >
      <div
        style={{
          width: 40,
          height: 56,
          borderRadius: 4,
          overflow: "hidden",
          background: "#eee",
          flexShrink: 0,
        }}
      >
        <img
          src={book.cover}
          alt={book.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <div>
        <p style={{ fontSize: 13, fontWeight: 500, margin: "0 0 2px" }}>
          {book.title}
        </p>
        <p style={{ fontSize: 12, color: "#aaa", margin: 0 }}>{book.author}</p>
        {book.note && (
          <p style={{ fontSize: 12, color: "#888", margin: "4px 0 0" }}>
            {book.note}
          </p>
        )}
      </div>
    </div>
  );
}
