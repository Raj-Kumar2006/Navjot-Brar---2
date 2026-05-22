import { motion } from "framer-motion";
import { Send } from "lucide-react";

const TELEGRAM = "https://t.me/+DS6t6RVXYNljN2Y1";

export function StickyCTA() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="md:hidden fixed bottom-4 inset-x-4 z-50"
    >
      <a
        href={TELEGRAM}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-gold text-gold-foreground rounded-xl py-3.5 px-6 flex items-center justify-center gap-2 font-semibold shadow-glow"
      >
        <Send className="size-4" />
        Join Free Telegram
      </a>
    </motion.div>
  );
}
