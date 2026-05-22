import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";

const TELEGRAM = "https://t.me/+DS6t6RVXYNljN2Y1";

export function TelegramCTA() {
  return (
    <section className="relative py-14 md:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center gold-border"
          style={{
            background:
              "linear-gradient(145deg, oklch(0.18 0.06 258) 0%, oklch(0.12 0.04 255) 100%)",
          }}
        >
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[500px] bg-gold/20 blur-[120px] rounded-full" />

          <div className="relative">
            <div className="inline-flex size-16 rounded-2xl bg-gradient-gold items-center justify-center mb-6 shadow-glow">
              <Send className="size-7 text-gold-foreground" />
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 max-w-2xl mx-auto">
              Join the <span className="text-gradient-gold italic font-normal">Free Trading Community</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-9 text-base md:text-lg">
              Access educational market discussions, chart studies, and learning-focused trading insights.
            </p>
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-gradient-gold text-gold-foreground px-8 py-4 rounded-xl font-semibold text-base shadow-glow hover:scale-[1.03] transition-transform"
            >
              Join Telegram
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="mt-6 text-xs text-muted-foreground">
              Free to join · Educational community · No financial advice
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
