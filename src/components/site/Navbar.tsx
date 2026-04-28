import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/scorpion-logo.jpeg";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Negócios", href: "#negocios" },
  { label: "Manifesto", href: "#manifesto" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 inset-x-4 z-50 flex justify-center pointer-events-none"
    >
      <div
        className={`pointer-events-auto w-full max-w-6xl flex items-center justify-between gap-4 px-4 md:px-6 py-3 transition-all duration-500 rounded-full border ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-border/80 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.7)]"
            : "bg-background/40 backdrop-blur-md border-border/40"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 group shrink-0">
          <img src={logo} alt="Scorpion Group" className="h-8 w-8 object-contain" />
          <span className="font-display text-base tracking-[0.18em] text-foreground">
            SCORPION<span className="text-primary">GROUP</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-wider uppercase font-semibold text-primary-foreground bg-gold-gradient rounded-full shadow-gold hover:opacity-90 transition"
        >
          Fale com a holding <ArrowUpRight size={14} />
        </a>

        <button
          className="md:hidden text-primary p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-auto absolute top-full mt-2 inset-x-4 md:hidden bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-6 flex flex-col gap-4"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-foreground/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs tracking-wider uppercase font-semibold text-primary-foreground bg-gold-gradient rounded-full"
          >
            Fale com a holding
          </a>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
