"use client";

import { useState } from "react";
import { bucketList } from "@/data/data";

import BookCard from "@/components/BookCard";
import { BucketFilter, BucketItem } from "../lib/types";
import Label from "@/components/Label";

import { books } from "../lib/portfolioData";

const HOBBIES = ["Chess", "Reading", "Designing Things", "Singing"];

export default function PersonalPage() {
  const [bucket, setBucket] = useState<BucketItem[]>(
    bucketList as BucketItem[],
  );
  const [filter, setFilter] = useState<BucketFilter>("all");

  const done = bucket.filter((i) => i.done).length;

  const toggle = (id: string | number) =>
    setBucket((b) => b.map((i) => (i.id === id ? { ...i, done: !i.done } : i)));

  const filtered =
    filter === "done"
      ? bucket.filter((i) => i.done)
      : filter === "todo"
      ? bucket.filter((i) => !i.done)
      : bucket;

  return (
    <>
      {/* Hobbies */}
      <section style={{ marginBottom: 36 }}>
        <Label style={{ marginTop: 0 }}>Hobbies</Label>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {HOBBIES.map((s) => (
            <span
              key={s}
              style={{
                fontSize: 13,
                padding: "5px 13px",
                borderRadius: 20,
                background: "#f5f2ed",
                border: "1px solid #e8e3da",
                color: "#555",
              }}
            >
              {s === "Chess" ? (
                <span>
                  <a
                    style={{ color: "#0456c2" }}
                    href="https://www.chess.com/member/gauravgarwa"
                    target="_blank"
                  >
                    Chess.com
                  </a>
                </span>
              ) : (
                s
              )}
            </span>
          ))}
        </div>
      </section>

      {/* Reading list */}
      <section style={{ marginBottom: 36 }}>
        <Label>Reading List</Label>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 6,
          }}
        >
          {books.map((b) => (
            <BookCard key={b.title} book={b} />
          ))}
        </div>
      </section>

      {/* Bucket List */}
      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 14,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Label style={{ margin: 0 }}>Bucket list</Label>
            <span style={{ fontSize: 12, color: "#bbb" }}>
              {done} / {bucket.length} done
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div
              style={{
                width: 80,
                height: 3,
                background: "#eee",
                borderRadius: 4,
              }}
            >
              <div
                style={{
                  height: 3,
                  background: "#aaa",
                  borderRadius: 4,
                  width: `${bucket.length ? (done / bucket.length) * 100 : 0}%`,
                  transition: "width 0.3s",
                }}
              />
            </div>
            <div style={{ display: "flex", gap: 4 }}>
              {(["all", "done", "todo"] as BucketFilter[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{
                    fontSize: 11,
                    padding: "3px 10px",
                    borderRadius: 20,
                    border: "1px solid #e0e0e0",
                    background: filter === f ? "#1a1a1a" : "#fff",
                    color: filter === f ? "#fff" : "#888",
                    cursor: "pointer",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 6,
          }}
        >
          {filtered.map((item) => (
            <div
              key={item.id}
              //   onClick={() => toggle(item.id)}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 9,
                padding: "8px 10px",
                borderRadius: 7,
                cursor: "pointer",
                transition: "background 0.1s",
              }}
            >
              <span
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 3,
                  border: `1.5px solid ${item.done ? "#bbb" : "#d0d0d0"}`,
                  background: item.done ? "#bbb" : "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                {item.done && (
                  <span style={{ color: "#fff", fontSize: 9, lineHeight: 1 }}>
                    ✓
                  </span>
                )}
              </span>
              <span
                style={{
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: item.done ? "#386b3c" : "#333",
                  textDecoration: item.done ? "line-through" : "none",
                  textDecorationColor: "#386b3c",
                }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
