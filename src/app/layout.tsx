import "./globals.css";
import { Inter } from "@next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body
        className={clsx(
          inter.className,
          "container m-auto flex flex-col flex-grow h-screen items-center px-4 lg:px-0"
        )}
      >
      {children}</body>
    </html>
  );
}
