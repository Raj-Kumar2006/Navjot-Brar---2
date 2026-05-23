import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Brain, ShieldCheck, LineChart, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-dashboard.jpg";

const TELEGRAM = "https://t.me/+DS6t6RVXYNljN2Y1";

const badges = [
  { icon: LineChart, label: "Price Action Learning" },
  { icon: BarChart3, label: "Market Analysis" },
  { icon: ShieldCheck, label: "Risk Management" },
  { icon: Brain, label: "Trading Psychology" },
];

export function Hero() {
  return (
    <section id="top" className="relative pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 size-96 bg-gold/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -right-32 size-96 bg-navy/40 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="glass inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs text-muted-foreground">
            <Sparkles className="size-3.5 text-gold" />
            Educational community for market learners
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] max-w-4xl mx-auto"
        >
          Learn Market Structure & <br className="hidden md:block" />
          <span className="text-gradient-gold font-normal">Trading Psychology</span> with Clarity
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-center text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Educational insights, market analysis, and structured learning for traders who want to improve
          decision-making and discipline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={TELEGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-gold text-gold-foreground px-7 py-3.5 rounded-xl font-semibold inline-flex items-center gap-2 shadow-glow hover:scale-[1.02] transition-transform"
          >
            Join Free Telegram
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#features"
            className="glass px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-white/5 transition"
          >
            Explore Learning Path
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-gold opacity-20 blur-3xl rounded-3xl" />
          <div className="relative glass-strong rounded-2xl p-2 shadow-elegant gold-border">
            <img
              src={heroImg}
              alt="Premium stock market dashboard with candlestick charts and market analytics"
              width={1920}
              height={1080}
              className="rounded-xl w-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {badges.map((b) => (
            <div key={b.label} className="glass rounded-xl px-4 py-3 flex items-center gap-3">
              <div className="size-9 rounded-lg bg-gold/10 flex items-center justify-center gold-border">
                <b.icon className="size-4 text-gold" />
              </div>
              <span className="text-sm font-medium">{b.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
