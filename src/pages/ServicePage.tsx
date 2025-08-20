import { useParams, Link } from "react-router-dom";
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
  
  const service = serviceData[serviceId as keyof typeof serviceData];
  
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
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl mb-4">{t(`services.${service.key}.title`)}</h1>
              <p className="text-lg text-muted-foreground mb-6">{t(`services.${service.key}.longDesc`)}</p>
              
              {/* Pricing */}
              <div className="bg-secondary/30 p-6 rounded-lg mb-8">
                <h3 className="font-display text-xl mb-4">{t('services.pricing.title')}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{t(`services.${service.key}.pricing.basic`)}</span>
                    <span className="font-semibold">{t(`services.${service.key}.pricing.basicPrice`)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t(`services.${service.key}.pricing.premium`)}</span>
                    <span className="font-semibold">{t(`services.${service.key}.pricing.premiumPrice`)}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">{t(`services.${service.key}.pricing.note`)}</p>
              </div>
              
              <Link to="/#booking">
                <Button size="lg" className="hover-scale">
                  {t('services.bookNow')}
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-secondary/30 rounded-lg overflow-hidden">
                <img 
                  src={service.image} 
                  alt={t(`services.${service.key}.title`)}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12">{t('faq.title')}</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[1, 2, 3, 4].map((index) => (
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