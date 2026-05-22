import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Journey } from "@/components/landing/Journey";
import { About } from "@/components/landing/About";
import { TelegramCTA } from "@/components/landing/TelegramCTA";
import { Footer } from "@/components/landing/Footer";
import { StickyCTA } from "@/components/landing/StickyCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Navjot Brar Official | Trading Education & Market Learning Community" },
      {
        name: "description",
        content:
          "Join Navjot Brar Official for educational stock market insights, trading psychology, risk management concepts, and structured market learning resources.",
      },
      {
        name: "keywords",
        content:
          "stock market learning, trading education, price action learning, trading psychology, market analysis, risk management, Indian traders, stock market community",
      },
      { property: "og:title", content: "Navjot Brar Official | Trading Education & Market Learning" },
      {
        property: "og:description",
        content:
          "Educational market insights, trading psychology and structured learning for Indian traders and investors.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Features />
      <Journey />
      <About />
      <TelegramCTA />
      <Footer />
      <StickyCTA />
    </main>
  );
}
