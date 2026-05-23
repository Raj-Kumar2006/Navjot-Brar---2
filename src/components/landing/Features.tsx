import { motion } from "framer-motion";
import { LayoutGrid, LineChart, ShieldCheck, Brain } from "lucide-react";

const features = [
  {
    icon: LayoutGrid,
    title: "Structured Learning",
    desc: "Understand market structure, trend behavior, and price action concepts in a simplified way.",
  },
  {
    icon: LineChart,
    title: "Educational Market Analysis",
    desc: "Get regular educational breakdowns and chart-based explanations for learning purposes.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Awareness",
    desc: "Focus on disciplined execution, risk management, and long-term consistency.",
  },
  {
    icon: Brain,
    title: "Trading Psychology",
    desc: "Learn mindset frameworks and emotional discipline used by experienced traders.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="text-xs tracking-[0.25em] text-gold uppercase mb-4">Why Choose</div>
          <h2 className="text-3xl md:text-5xl font-semibold">
            Why Traders Follow <br />
            <span className="text-gradient-gold font-normal">Navjot Brar Official</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-2xl p-7 hover:bg-white/[0.04] transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="flex items-start gap-5">
                <div className="size-14 shrink-0 rounded-xl bg-gradient-gold flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <f.icon className="size-6 text-gold-foreground" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
