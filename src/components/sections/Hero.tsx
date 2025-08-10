import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-makeup.jpg";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div
        ref={ref}
        onMouseMove={onMove}
        className="relative isolate"
        style={{
          // signature interactive light using brand tokens
          // colors come from CSS variables, only position is dynamic
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore - CSS custom properties
          "--mx": `${pos.x}%`,
          "--my": `${pos.y}%`,
        }}
      >
        <div className="relative h-[68vh] md:h-[76vh] w-full">
          <img
            src={heroImage}
            alt="Makeup artist perfecting a client's look in studio"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          {/* gradient overlay */}
          <div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} aria-hidden />
          {/* interactive light */}
          <div
            className="absolute inset-0 mix-blend-soft-light"
            style={{
              background:
                "radial-gradient(600px circle at var(--mx) var(--my), hsl(var(--brand-glow) / 0.25), transparent 50%)",
            }}
            aria-hidden
          />
          <div className="relative z-10 h-full flex items-center">
            <div className="container">
              <div className="max-w-2xl animate-enter">
                <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-4 text-primary-foreground">
                  Luxe Bloom Makeup Studio
                </h1>
                <p className="text-primary-foreground/90 text-base md:text-lg mb-6">
                  Premium makeup artistry for weddings, events, photoshoots, and everything in between.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="#booking">
                    <Button size="lg" className="hover-scale">Book your glow</Button>
                  </a>
                  <a href="#services">
                    <Button variant="secondary" size="lg" className="hover-scale">View services</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
