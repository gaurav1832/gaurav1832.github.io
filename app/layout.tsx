import Footer from "@/components/Footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Gaurav Garwa",
  description: "Assistant Manager (Systems) · Navi Mumbai, India",
  icons: {
    icon:
      "https://media.licdn.com/dms/image/v2/D4D03AQEfuJXpK3zO9A/profile-displayphoto-shrink_800_800/B4DZVR9bWMG8Ag-/0/1740836812629?e=1788393600&v=beta&t=VdVaj0Fp6JM-vSyxi9qXHZmQkHXWAldxEpcCQPUrl78",
    shortcut:
      "https://media.licdn.com/dms/image/v2/D4D03AQEfuJXpK3zO9A/profile-displayphoto-shrink_800_800/B4DZVR9bWMG8Ag-/0/1740836812629?e=1788393600&v=beta&t=VdVaj0Fp6JM-vSyxi9qXHZmQkHXWAldxEpcCQPUrl78",
    apple:
      "https://media.licdn.com/dms/image/v2/D4D03AQEfuJXpK3zO9A/profile-displayphoto-shrink_800_800/B4DZVR9bWMG8Ag-/0/1740836812629?e=1788393600&v=beta&t=VdVaj0Fp6JM-vSyxi9qXHZmQkHXWAldxEpcCQPUrl78",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          color: "#1a1a1a",
          background: "#fff",
          margin: 0,
        }}
      >
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            padding: "0 24px 60px",
          }}
        >
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
