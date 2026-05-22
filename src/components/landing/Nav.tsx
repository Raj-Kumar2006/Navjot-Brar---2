import { motion } from "framer-motion";
import logoImg from "@/assets/navjot-brar-code logo.jpg";

const TELEGRAM = "https://t.me/+DS6t6RVXYNljN2Y1";

export function Nav() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50 px-4 pt-4"
    >
      <div className="max-w-6xl mx-auto glass-strong rounded-2xl px-5 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="size-9 rounded-full overflow-hidden border border-gold/40 shadow-glow bg-navy/50">
            <img src={logoImg} alt="Navjot Brar" className="size-full object-cover" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-semibold">Navjot Brar</div>
            <div className="text-[10px] tracking-[0.2em] text-gold uppercase">Official</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition">Why Us</a>
          <a href="#journey" className="hover:text-foreground transition">Learning Path</a>
          <a href="#about" className="hover:text-foreground transition">About</a>
        </nav>
        <a
          href={TELEGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-gold text-gold-foreground text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition shadow-glow"
        >
          Join Telegram
        </a>
      </div>
    </motion.header>
  );
}
