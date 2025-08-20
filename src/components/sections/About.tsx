import { useLanguage } from "@/contexts/LanguageContext";
import artistPortrait from "@/assets/artist-portrait.jpg";

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { number: "8+", label: t('about.experience') },
    { number: "200+", label: t('about.clients') },
    { number: "50+", label: t('about.weddings') },
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl mb-3">{t('about.title')}</h2>
            <p className="text-muted-foreground mb-6">{t('about.subtitle')}</p>
            <p className="text-sm leading-relaxed mb-8">{t('about.content')}</p>
            
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl md:text-3xl mb-1">{stat.number}</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] bg-secondary/30 rounded-lg overflow-hidden">
              <img 
                src={artistPortrait} 
                alt="Portrait of makeup artist"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}