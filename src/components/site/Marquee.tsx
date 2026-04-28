const items = [
  "Inteligência Artificial",
  "Marketing de Influência",
  "Produção com IA",
  "Indicação para Empresas",
  "Estratégia Digital",
  "Crescimento Escalável",
];

const Marquee = () => {
  return (
    <section className="relative py-10 border-y border-border overflow-hidden bg-secondary/30">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-8 px-8 shrink-0">
            <span className="font-display text-2xl md:text-3xl uppercase tracking-tight text-foreground/80">
              {it}
            </span>
            <span className="text-primary text-2xl">◆</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
