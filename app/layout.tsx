import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emily Grinshpun Portfolio",
  description: "Technical Product Manager and builder turning complex problems into products people can use.",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
