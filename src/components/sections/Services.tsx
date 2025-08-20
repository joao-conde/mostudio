import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import socialMakeupImg from "@/assets/social-makeup.jpg";
import brideMakeupImg from "@/assets/bride-makeup.jpg";
import workshopImg from "@/assets/workshop-makeup.jpg";

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
        <Link to={href}>
          <Button variant="secondary" className="hover-scale">
            {cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      <Link to={href} className="cursor-pointer">
        <div className="bg-background/80 border-2 border-border p-3 md:p-4 shadow-sm hover:shadow-lg transition-shadow" style={{ boxShadow: "var(--shadow-elegant)" }}>
          <img src={image} alt={`${title} example look`} className="w-full h-72 md:h-80 object-cover" loading="lazy" />
        </div>
      </Link>
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
            eyebrow="For special occasions and events"
            title={t('services.social.title')}
            body={t('services.social.desc')}
            cta={t('services.social.cta')}
            href="/service/social-makeup"
            image={socialMakeupImg}
          />
          <Section
            reverse
            eyebrow="A dress rehearsal for the big day"
            title={t('services.bride.title')}
            body={t('services.bride.desc')}
            cta={t('services.bride.cta')}
            href="/service/bride-makeup"
            image={brideMakeupImg}
          />
          <Section
            eyebrow="Learn the art of makeup"
            title={t('services.workshop.title')}
            body={t('services.workshop.desc')}
            cta={t('services.workshop.cta')}
            href="/service/self-makeup-workshop"
            image={workshopImg}
          />
        </div>
      </div>
    </section>
  );
}