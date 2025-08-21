import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SiteHeader from "@/components/sections/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";
import BookingCTA from "@/components/sections/BookingCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import socialMakeupImg from "@/assets/social-makeup.jpg";
import brideMakeupImg from "@/assets/bride-makeup.jpg";
import workshopImg from "@/assets/workshop-makeup.jpg";

const serviceData = {
  'social-makeup': {
    image: socialMakeupImg,
    key: 'social'
  },
  'bride-makeup': {
    image: brideMakeupImg,
    key: 'bride'
  },
  'self-makeup-workshop': {
    image: workshopImg,
    key: 'workshop'
  }
};

export default function ServicePage() {
  const { serviceId } = useParams();
  const { t } = useLanguage();
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  
  const service = serviceData[serviceId as keyof typeof serviceData];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <div className="container py-24 text-center">
          <h1 className="text-4xl font-display mb-4">Service Not Found</h1>
          <Link to="/">
            <Button variant="secondary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Workshop page has different layout
  if (serviceId === 'self-makeup-workshop') {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        
        {/* Hero Section with overlay text */}
        <section className="relative h-96 md:h-[500px]">
          <div className="absolute inset-0">
            <img 
              src={service.image} 
              alt={t(`services.${service.key}.title`)}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="font-display text-4xl md:text-6xl text-white text-center px-4">
              {t(`services.${service.key}.title`)}
            </h1>
          </div>
          <Link to="/" className="absolute top-8 left-8 inline-flex items-center text-sm text-white hover:text-white/80">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('common.back')}
          </Link>
        </section>

        {/* Workshop Levels */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              {['beginner', 'amateur', 'professional'].map((level) => (
                <div key={level} className="text-center">
                  <h3 className="font-display text-2xl mb-4">{t(`services.workshop.levels.${level}.title`)}</h3>
                  <div 
                    className="cursor-pointer mb-4 transition-transform hover:scale-105"
                    onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
                  >
                    <img 
                      src={service.image} 
                      alt={t(`services.workshop.levels.${level}.title`)}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  {selectedLevel === level && (
                    <div className="bg-secondary/30 p-6 rounded-lg">
                      <p className="text-muted-foreground">{t(`services.workshop.levels.${level}.desc`)}</p>
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between">
                          <span>{t('services.pricing.duration')}</span>
                          <span className="font-semibold">{t(`services.workshop.levels.${level}.duration`)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{t('services.pricing.price')}</span>
                          <span className="font-semibold">{t(`services.workshop.levels.${level}.price`)}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <BookingCTA />
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('common.back')}
          </Link>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img 
                src={service.image} 
                alt={t(`services.${service.key}.title`)}
                className="w-full max-w-2xl mx-auto h-80 object-cover rounded-lg"
              />
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl mb-6">{t(`services.${service.key}.title`)}</h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">{t(`services.${service.key}.longDesc`)}</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12">{t('faq.title')}</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[1, 2, 3, 4, 5].map((index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background border rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    {t(`services.${service.key}.faq.q${index}`)}
                  </AccordionTrigger>
                  <AccordionContent>
                    {t(`services.${service.key}.faq.a${index}`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <BookingCTA />
      <SiteFooter />
    </div>
  );
}