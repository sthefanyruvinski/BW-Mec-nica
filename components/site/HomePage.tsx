import type { SiteContent } from "@/lib/content-schema";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Trust } from "./Trust";
import { Services } from "./Services";
import { Catalog } from "./Catalog";
import { Location } from "./Location";
import { Cta } from "./Cta";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";
import { WhatsAppFab } from "./WhatsAppFab";

export function HomePage({ content }: { content: SiteContent }) {
  return (
    <div className="bw-site">
      <Header content={content} />
      <Hero content={content} />
      <Trust content={content} />
      <Reveal>
        <Services content={content} />
      </Reveal>
      <Reveal>
        <Catalog content={content} />
      </Reveal>
      <Reveal>
        <Location content={content} />
      </Reveal>
      <Reveal>
        <Cta content={content} />
      </Reveal>
      <Footer content={content} />
      <WhatsAppFab content={content} />
    </div>
  );
}
