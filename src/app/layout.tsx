import type { Metadata } from "next";
import "./globals.css";
import StartupLoader from "@/components/gyq/StartupLoader";
import Footer from "@/components/gyq/Footer";
import { StudentAuthProvider } from "@/components/gyq/StudentAuth";

export const metadata: Metadata = {
  title: "GYQ — Get Your Questions",
  description: "Pattern-predicted CBSE exam engine",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body><StudentAuthProvider><StartupLoader>{children}</StartupLoader><Footer /></StudentAuthProvider></body>
    </html>
  );
}
