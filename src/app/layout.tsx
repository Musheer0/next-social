import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import { ClerkProvider } from "@clerk/nextjs";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev Social Media App",
  description: "Social media app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<ClerkProvider>
<body className={`${inter.className} w-full h-screen text-zinc-50 bg-zinc-950 flex flex-col items-center `}>
        <Navbar/>
      <main className="w-full flex-1  overflow-auto py-2">  {children}</main>
        <BottomNav/>
        </body>
</ClerkProvider>
    </html>
  );
}