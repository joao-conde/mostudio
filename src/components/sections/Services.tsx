import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
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
  const { t } = useLanguage();
  
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container">
        <div className="space-y-16">
          <Section
            eyebrow="A dress rehearsal for the big day"
            title={t('services.bridal.title')}
            body={t('services.bridal.desc')}
            cta={t('services.bridal.cta')}
            href="#booking"
            image={imgTrial}
          />
          <Section
            reverse
            eyebrow="A personalized experience"
            title={t('services.editorial.title')}
            body={t('services.editorial.desc')}
            cta={t('services.editorial.cta')}
            href="#booking"
            image={imgLesson}
          />
          <Section
            eyebrow="Effortless beauty for every occasion"
            title={t('services.event.title')}
            body={t('services.event.desc')}
            cta={t('services.event.cta')}
            href="#booking"
            image={imgEvent}
          />
        </div>
      </div>
    </section>
  );
}