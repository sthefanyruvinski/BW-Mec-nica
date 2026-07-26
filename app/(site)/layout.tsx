import { Inter, Barlow_Condensed } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow-condensed",
});

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${inter.variable} ${barlowCondensed.variable}`}>{children}</div>;
}
