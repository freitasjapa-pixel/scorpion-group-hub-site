import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import About from "@/components/site/About";
import Businesses from "@/components/site/Businesses";
import Manifesto from "@/components/site/Manifesto";
import Contact, { Footer } from "@/components/site/Contact";

const Index = () => {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Scorpion Group",
    url: "https://scorpiongroup.com.br",
    logo: "https://scorpiongroup.com.br/og-scorpion.jpg",
    description:
      "Holding de negócios digitais: inteligência artificial, marketing de influência, vídeos com IA e sistemas de indicação.",
    subOrganization: [
      { "@type": "Organization", name: "Scorpion AI", url: "https://inteligencia.scorpiongroup.com.br/" },
      { "@type": "Organization", name: "Scorpion Influence", url: "https://influence.scorpiongroup.com.br/" },
      { "@type": "Organization", name: "Scorpion Strike", url: "https://strike.scorpiongroup.com.br/" },
      { "@type": "Organization", name: "Cliente que Vende", url: "https://clientequevende.scorpiongroup.com.br/" },
    ],
  };

  return (
    <main className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Businesses />
      <Manifesto />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
