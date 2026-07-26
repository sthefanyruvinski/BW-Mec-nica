import type { SiteContent } from "@/lib/content-schema";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Trust } from "./Trust";
import { Services } from "./Services";
import { Catalog } from "./Catalog";
import { Location } from "./Location";
import { Cta } from "./Cta";
import { Footer } from "./Footer";

export function HomePage({ content }: { content: SiteContent }) {
  return (
    <div className="bw-site">
      <div style={{ maxWidth: 1440, margin: "0 auto", background: "#fff", overflow: "hidden" }}>
        <Header content={content} />
        <Hero content={content} />
        <Trust content={content} />
        <Services content={content} />
        <Catalog content={content} />
        <Location content={content} />
        <Cta content={content} />
        <Footer content={content} />
      </div>
    </div>
  );
}
