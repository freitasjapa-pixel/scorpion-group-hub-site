import { motion } from "framer-motion";
import { Eye, Target, Gem } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Visão",
    description:
      "Enxergamos oportunidades onde outros veem ruído. Antecipamos movimentos e construímos com propósito.",
  },
  {
    icon: Target,
    title: "Impacto",
    description:
      "Não fazemos por fazer. Cada projeto, cada empresa do grupo nasce para gerar resultado mensurável.",
  },
  {
    icon: Gem,
    title: "Legado",
    description:
      "Construímos negócios que duram. Marcas, processos e relações pensadas para o longo prazo.",
  },
];

const Values = () => {
  return (
    <section id="valores" className="relative py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="text-xs tracking-luxury text-primary mb-6">
            ◆ NOSSOS VALORES
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Os três pilares que{" "}
            <span className="text-gold-gradient italic">nos movem.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="text-center group"
              >
                <div className="relative inline-flex mb-8">
                  <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-20 h-20 flex items-center justify-center border border-primary/40 rotate-45 group-hover:rotate-[225deg] transition-transform duration-700">
                    <Icon className="w-8 h-8 text-primary -rotate-45 group-hover:-rotate-[225deg] transition-transform duration-700" strokeWidth={1.3} />
                  </div>
                </div>
                <h3 className="font-display text-3xl font-medium mb-4 text-gold-gradient">
                  {v.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {v.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
