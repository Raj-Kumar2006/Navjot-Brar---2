import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Learn Fundamentals", desc: "Build a strong foundation of market terminology, instruments, and how markets function." },
  { n: "02", title: "Understand Market Behavior", desc: "Study price action, market structure, and how trends form and shift over time." },
  { n: "03", title: "Build Risk Discipline", desc: "Adopt position sizing, stop-loss thinking, and capital preservation as core habits." },
  { n: "04", title: "Improve Execution", desc: "Translate analysis into clear, repeatable decision-making processes." },
  { n: "05", title: "Develop Consistency", desc: "Refine your edge with journaling, review, and emotional self-awareness." },
];

export function Journey() {
  return (
    <section id="journey" className="relative py-10 md:py-14">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-xs tracking-[0.25em] text-gold uppercase mb-4">The Process</div>
          <h2 className="text-3xl md:text-5xl font-semibold">
            Your <span className="text-gradient-gold font-normal">Learning Path</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

          <div className="space-y-10">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, x: left ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    left ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* dot */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 size-3 rounded-full bg-gold shadow-glow mt-7" />

                  {/* card */}
                  <div className={`pl-16 md:pl-0 md:w-1/2 ${left ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="glass rounded-2xl p-6 hover:bg-white/[0.04] transition">
                      <div className="text-3xl font-display text-gradient-gold mb-1">{s.n}</div>
                      <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
