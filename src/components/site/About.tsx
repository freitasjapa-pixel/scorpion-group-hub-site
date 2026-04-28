import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="sobre" className="relative py-32 noise">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <span className="badge-pill mb-6">◆ Sobre</span>
            <h2 className="font-display uppercase text-5xl md:text-6xl leading-[0.9] tracking-tight">
              UMA <span className="text-gold-gradient">HOLDING</span> CONSTRUÍDA PARA ESCALAR.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              A Scorpion Group nasceu para integrar empresas que se complementam — unindo
              <span className="text-foreground"> inteligência artificial</span>,{" "}
              <span className="text-foreground">marketing de influência</span>,{" "}
              <span className="text-foreground">produção criativa com IA</span> e{" "}
              <span className="text-foreground">sistemas de indicação</span> em uma única
              estratégia de crescimento.
            </p>
            <p>
              Cada empresa do grupo é especialista no seu mercado e opera de forma
              independente. Juntas, formam um ecossistema raro: capaz de atender uma marca
              do diagnóstico ao impacto, da automação à viralização.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                { k: "Independência", v: "Cada vertical com DNA próprio." },
                { k: "Sinergia", v: "Operações que se potencializam." },
                { k: "Resultado", v: "Métrica antes da estética." },
              ].map((it) => (
                <div key={it.k}>
                  <div className="text-xs tracking-luxury uppercase text-primary mb-2">
                    {it.k}
                  </div>
                  <div className="text-sm text-foreground/80 leading-relaxed">{it.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
