import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* LEFT — Text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8 text-xs tracking-luxury uppercase text-muted-foreground"
            >
              <span className="badge-pill">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-gold" />
                Holding · 04 empresas ativas
              </span>
              <span className="hidden sm:inline text-primary/40">/</span>
              <span className="hidden sm:inline">EST. 2024</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display uppercase text-[14vw] md:text-[9vw] lg:text-[5.5vw] xl:text-[5vw] leading-[1.02] tracking-tight break-words"
            >
              <span className="block text-foreground">CONECTAMOS</span>
              <span className="block text-foreground">VISÃO.</span>
              <span className="block text-gold-gradient">CONSTRUÍMOS</span>
              <span className="block text-gold-gradient">LEGADO.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-10 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              A <span className="text-foreground font-semibold">Scorpion Group</span> é a
              holding por trás de empresas de inteligência artificial, marketing de
              influência, produção com IA e sistemas de indicação. Operações independentes,
              estratégia única.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#negocios"
                className="group inline-flex items-center gap-2 px-7 py-4 text-xs tracking-luxury uppercase font-semibold text-primary-foreground bg-gold-gradient rounded-full shadow-gold hover:shadow-[0_25px_70px_-15px_rgba(212,160,40,0.6)] transition-all"
              >
                Conheça as empresas
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#manifesto"
                className="inline-flex items-center gap-2 px-7 py-4 text-xs tracking-luxury uppercase font-semibold border border-border hover:border-primary/60 hover:text-primary text-foreground/90 rounded-full transition-all"
              >
                Nosso manifesto
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mt-16 grid grid-cols-3 gap-6 max-w-xl border-t border-border pt-8"
            >
              {[
                { v: "04", l: "Empresas no grupo" },
                { v: "+50", l: "Marcas atendidas" },
                { v: "10k+", l: "Horas escaladas" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-4xl md:text-5xl text-foreground">
                    {s.v}
                  </div>
                  <div className="text-[10px] tracking-luxury uppercase text-muted-foreground mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-square max-w-[520px] ml-auto">
              <div className="absolute -inset-10 bg-primary/15 blur-[100px] rounded-full" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border animate-float-slow">
                <img
                  src={heroVisual}
                  alt="Scorpion Group — visual editorial dourado"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
                {/* corner labels */}
                <div className="absolute top-4 left-4 badge-pill bg-background/70 backdrop-blur">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Scorpion Group
                </div>
                <div className="absolute bottom-4 right-4 text-[10px] tracking-luxury uppercase text-foreground/70 bg-background/70 backdrop-blur px-3 py-1.5 border border-border rounded-full">
                  ◆ Holding 2026
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
