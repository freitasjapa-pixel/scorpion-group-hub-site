import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/scorpion-logo.jpeg";

const Contact = () => {
  return (
    <section id="contato" className="relative py-32 border-t border-border overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <span className="badge-pill mb-8">◆ Contato</span>
          <h2 className="font-display uppercase text-6xl md:text-8xl lg:text-9xl leading-[0.88] tracking-tight">
            VAMOS CONSTRUIR <span className="text-gold-gradient">ALGO MEMORÁVEL.</span>
          </h2>

          <p className="mt-10 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Quer conversar sobre uma das empresas do grupo, parcerias estratégicas ou
            entender como a holding pode acelerar seu negócio? Fale direto com a Scorpion
            Group.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="mailto:freitasjapa@scorpionsquad.com.br"
              className="group inline-flex items-center gap-3 px-8 py-5 text-xs tracking-luxury uppercase font-semibold text-primary-foreground bg-gold-gradient rounded-full shadow-gold hover:opacity-90 transition"
            >
              <Mail className="w-4 h-4" strokeWidth={2} />
              freitasjapa@scorpionsquad.com.br
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-border text-foreground/70 hover:border-primary hover:text-primary transition-all"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Scorpion Group" className="w-9 h-9 object-contain" />
        <div className="font-display tracking-[0.18em] text-sm">
          SCORPION<span className="text-primary">GROUP</span>
        </div>
      </div>
      <div className="text-[10px] tracking-luxury uppercase text-muted-foreground text-center md:text-right">
        © {new Date().getFullYear()} Scorpion Group · Conectamos visão. Construímos legado.
      </div>
    </div>
  </footer>
);

export default Contact;
