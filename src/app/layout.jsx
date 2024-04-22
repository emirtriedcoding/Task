import localFont from "next/font/local";
import "./globals.css";

import Sidebar from "@/components/templates/Dashboard/Sidebar";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

const font = localFont({
  src: "../../public/fonts/Dana.ttf",
});

export const metadata = {
  title: "مدیریت کاربران",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={cn(font.className, "flex gap-3")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Toaster className={font.className} richColors position="top-right" />
          <Sidebar />
          <main className="w-10/12">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
