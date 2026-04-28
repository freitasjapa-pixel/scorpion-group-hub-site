import { motion } from "framer-motion";

const lines = [
  { k: "01", t: "Visão", d: "Enxergamos oportunidades onde outros veem ruído. Antecipamos movimentos." },
  { k: "02", t: "Impacto", d: "Cada empresa do grupo nasce para gerar resultado mensurável." },
  { k: "03", t: "Legado", d: "Construímos negócios que duram. Marcas e processos pensados para o longo prazo." },
];

const Manifesto = () => {
  return (
    <section id="manifesto" className="relative py-32 border-t border-border overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="badge-pill mb-6">◆ Manifesto</span>
          <h2 className="font-display uppercase text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
            NÃO FAZEMOS POR <span className="text-gold-gradient italic">FAZER.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            Os três pilares que orientam toda decisão dentro da Scorpion Group — do investimento
            em uma nova vertical à execução do menor projeto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border max-w-5xl mx-auto">
          {lines.map((v, i) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-background p-10 group hover:bg-secondary/40 transition-colors"
            >
              <div className="flex items-baseline justify-between mb-8">
                <span className="text-xs tracking-luxury uppercase text-primary">/ {v.k}</span>
                <span className="text-primary text-lg">◆</span>
              </div>
              <h3 className="font-display uppercase text-5xl tracking-tight text-gold-gradient mb-6">
                {v.t}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
