import { Send } from "lucide-react";
import logoImg from "@/assets/navjot-brar-code logo.jpg";

const TELEGRAM = "https://t.me/+DS6t6RVXYNljN2Y1";

export function Footer() {
  return (
    <footer className="border-t border-border/50 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full overflow-hidden border border-gold/40 shadow-glow bg-navy/50">
              <img src={logoImg} alt="Navjot Brar" className="size-full object-cover" />
            </div>
            <div>
              <div className="font-display text-lg font-semibold">Navjot Brar Official</div>
              <div className="text-[10px] tracking-[0.2em] text-gold uppercase">Trading Education</div>
            </div>
          </div>
          <a
            href={TELEGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-white/5 transition"
          >
            <Send className="size-4 text-gold" />
            Join Telegram Community
          </a>
        </div>

        <div className="glass rounded-2xl p-6 text-xs md:text-sm text-muted-foreground leading-relaxed space-y-3">
          <p>
            <span className="text-gold font-semibold">Disclaimer: </span>
            Investments in securities market are subject to market risks. This platform is intended only for
            educational and informational purposes and should not be considered financial advice.
          </p>
          <p>
            <span className="text-foreground font-medium">Educational Purpose Notice: </span>
            All content shared by Navjot Brar Official is for learning and informational purposes only. We do
            not offer buy/sell recommendations, guaranteed returns, or personalized investment advisory
            services. Please consult a SEBI-registered financial advisor before making any investment decisions.
          </p>
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Navjot Brar Official. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
