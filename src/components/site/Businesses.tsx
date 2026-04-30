import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const businesses = [
  {
    n: "01",
    code: "INTELIGENCIA",
    name: "Scorpion AI",
    tagline: "Inteligência Artificial",
    description:
      "Automações e soluções de IA que eliminam processos manuais e colocam empresas à frente da concorrência.",
    url: "https://inteligencia.scorpiongroup.com.br/",
    accent: "from-orange-400 to-amber-500",
  },
  {
    n: "02",
    code: "INFLUENCE",
    name: "Scorpion Influence",
    tagline: "Marketing de Influência",
    description:
      "Estratégias com creators relevantes que conectam marcas a audiências reais e geram resultado mensurável.",
    url: "https://influence.scorpiongroup.com.br/",
    accent: "from-pink-400 to-fuchsia-500",
  },
  {
    n: "03",
    code: "STRIKE",
    name: "Scorpion Strike",
    tagline: "Clones & Vídeos com IA",
    description:
      "Clones digitais e vídeos hiper-realistas em escala. Seu rosto, sua voz, todo dia, em todo lugar.",
    url: "https://strike.scorpiongroup.com.br/",
    accent: "from-violet-400 to-indigo-500",
  },
  {
    n: "04",
    code: "VENDE",
    name: "Cliente que Vende",
    tagline: "Sistema de Indicação",
    description:
      "Sistema estruturado de indicação para empresas que querem multiplicar a base de clientes pelo boca a boca.",
    url: "https://clientequevende.scorpiongroup.com.br/",
    accent: "from-emerald-400 to-teal-500",
  },
  {
    n: "05",
    code: "VORTEX",
    name: "Vórtex Scorpion",
    tagline: "Automação de WhatsApp",
    description:
      "Automação de WhatsApp para pequenos negócios: atendimento, vendas e follow-up rodando 24/7 sem perder lead.",
    url: "https://vortex.scorpiongroup.com.br/",
    accent: "from-cyan-400 to-blue-500",
  },
];

const Businesses = () => {
  return (
    <section id="negocios" className="relative py-32 border-t border-border noise">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20"
        >
          <div>
            <span className="badge-pill mb-6">◆ Portfólio</span>
            <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.9] tracking-tight max-w-2xl">
              CINCO EMPRESAS.
              <br />
              <span className="text-gold-gradient">UMA ESTRATÉGIA.</span>
            </h2>
          </div>
          <p className="md:text-right text-muted-foreground max-w-sm leading-relaxed">
            Cada operação resolve uma dor específica. Juntas, cobrem o ciclo completo de
            crescimento digital de uma marca.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {businesses.map((b, i) => (
            <motion.a
              key={b.code}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-background p-8 lg:p-12 transition-all duration-500 hover:bg-secondary/40 overflow-hidden"
            >
              {/* number watermark */}
              <div className="absolute top-6 right-8 font-display text-7xl text-foreground/[0.04] group-hover:text-primary/10 transition-colors duration-500">
                {b.n}
              </div>

              <div className="relative">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${b.accent}`} />
                    <span className="text-[10px] tracking-luxury uppercase text-muted-foreground">
                      / {b.code}
                    </span>
                  </div>
                  <ArrowUpRight
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                <div className="text-[11px] tracking-luxury uppercase text-primary/80 mb-3">
                  {b.tagline}
                </div>
                <h3 className="font-display uppercase text-4xl md:text-5xl leading-[0.95] tracking-tight mb-6 group-hover:text-gold-gradient transition-all">
                  {b.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
                  {b.description}
                </p>

                <div className="flex items-center gap-3 text-xs tracking-luxury uppercase text-foreground/70 group-hover:text-primary transition-colors">
                  <span>Acessar site</span>
                  <span className="h-px w-10 bg-current group-hover:w-20 transition-all duration-500" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Businesses;
