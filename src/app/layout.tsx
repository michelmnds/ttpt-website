import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globalStyles.css";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TTPT",
  description: "O website oficial do Tournament Tracker Portugal.",
  icons: {
    icon: "/icons/logo.png",
  },
  appleWebApp: {
    capable: true,
    title: "TTPT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className={`${poppins.className} antialiased bg-secondary`}>
        {children}
      </body>
    </html>
  );
}
