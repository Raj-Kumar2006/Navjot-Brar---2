import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-3xl p-8 md:p-14 text-center gold-border relative overflow-hidden"
        >
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 size-60 bg-gold/15 blur-3xl rounded-full" />
          <div className="relative">
            <div className="size-14 mx-auto rounded-xl bg-gradient-gold flex items-center justify-center mb-6 shadow-glow">
              <BookOpen className="size-6 text-gold-foreground" />
            </div>
            <div className="text-xs tracking-[0.25em] text-gold uppercase mb-3">About</div>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6">
              About <span className="text-gradient-gold italic font-normal">Navjot Brar Official</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Navjot Brar Official shares educational market insights, trading concepts, and structured
              learning resources designed for traders and investors interested in improving their market
              understanding.
            </p>
            <div className="mt-8 glass rounded-xl p-4 text-sm text-muted-foreground max-w-xl mx-auto">
              <span className="text-gold font-medium">Disclaimer: </span>
              This platform is for educational purposes only and does not provide financial or investment advice.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
