import heroImage from "@/assets/hero-makeup.jpg";

export default function ServicesHero() {
  return (
    <section id="home" className="relative py-12 md:py-16">
      {/* Soft background image blur */}
      <div className="absolute inset-0 -z-10 opacity-50">
        <img src={heroImage} alt="Soft studio background" className="w-full h-full object-cover blur-sm" />
        <div className="absolute inset-0 bg-background/70" aria-hidden />
      </div>

      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="bg-background/80 border-2 border-border p-3 md:p-4 shadow-sm" style={{ boxShadow: "var(--shadow-elegant)" }}>
            <img src={heroImage} alt="Bridal-inspired portrait with elegant makeup" className="w-full h-[52vh] md:h-[60vh] object-cover" />
          </div>
        </div>
        <div className="mt-6 md:mt-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl tracking-tight">SERVICES</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">A fresh and modern approach to makeup—considered, refined, and designed to last.</p>
        </div>
      </div>
    </section>
  );
}
