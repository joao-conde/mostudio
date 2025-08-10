import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import imgTrial from "@/assets/gallery3.jpg";
import imgLesson from "@/assets/gallery2.jpg";
import imgEvent from "@/assets/gallery1.jpg";

function Section({
  eyebrow,
  title,
  body,
  cta,
  href,
  image,
  reverse,
}: {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  image: string;
  reverse?: boolean;
}) {
  return (
    <article className={`grid gap-8 items-center md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
      <div>
        <p className="text-[12px] uppercase tracking-[0.25em] text-muted-foreground mb-2">{eyebrow}</p>
        <h3 className="font-display text-3xl md:text-4xl mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6 max-w-prose">{body}</p>
        <a href={href}>
          <Button variant="secondary" className="hover-scale">
            {cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
      <div className="bg-background/80 border-2 border-border p-3 md:p-4 shadow-sm" style={{ boxShadow: "var(--shadow-elegant)" }}>
        <img src={image} alt={`${title} example look`} className="w-full h-72 md:h-80 object-cover" loading="lazy" />
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container">
        <div className="space-y-16">
          <Section
            eyebrow="A dress rehearsal for the big day"
            title="Makeup Trials"
            body="Make your wedding morning effortless. Trials let us collaborate on your perfect look—refined, comfortable, and photo-ready—so there’s zero day-of guesswork."
            cta="Let’s chat"
            href="#booking"
            image={imgTrial}
          />
          <Section
            reverse
            eyebrow="A personalized experience"
            title="Makeup Lessons"
            body="A 1:1 session to build your everyday routine. We’ll choose your shades, simplify techniques, and create an elevated look you can recreate with ease."
            cta="Book now"
            href="#booking"
            image={imgLesson}
          />
          <Section
            eyebrow="Effortless beauty for every occasion"
            title="Event & Evening"
            body="From galas to date nights, achieve a look that turns heads and lasts all night—tailored to your outfit, lighting, and vibe."
            cta="Inquire"
            href="#booking"
            image={imgEvent}
          />
        </div>
      </div>
    </section>
  );
}
