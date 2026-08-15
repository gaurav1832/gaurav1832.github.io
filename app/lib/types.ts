// ── Shared types ──────────────────────────────────────────────//

export type BucketItem = {
  id: string | number;
  text: string;
  done: boolean;
};

export type BucketFilter = "all" | "done" | "todo";

// "Things I've worked on" — projects/initiatives with a thumbnail image.
// Swap the `image` paths for real screenshots (drop them in /public/img/work/…)
// and add a `linkedin` link on any entry that has a related achievement post.
export interface WorkItem {
  title: string;
  tech: string;
  desc: string;
  image: string;
  href: string;
  linkedin?: string;
}

// Personal corner — reading list. Swap covers for real thumbnails
// (drop them in /public/img/books/…) and edit freely.
export interface BookItem {
  title: string;
  author: string;
  cover: string;
  note?: string;
}
