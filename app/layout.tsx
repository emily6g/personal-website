import type { Metadata } from "next";
import "./globals.css";
import { BASE_PATH } from "./site-config";

export const metadata: Metadata = {
  title: "Emily Grinshpun Portfolio",
  description: "Technical Product Manager and builder turning complex problems into products people can use.",
  other: { "codex-preview": "development" },
  icons: { icon: `${BASE_PATH}/favicon.svg`, shortcut: `${BASE_PATH}/favicon.svg` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
