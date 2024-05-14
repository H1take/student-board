import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Providers} from "@/app/providers";
import styles from "../styles/global.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ТПЭК СПОРТ",
  description: "Generated by @H1takeee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={styles.container}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
