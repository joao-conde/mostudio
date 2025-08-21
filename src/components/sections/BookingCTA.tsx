import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

export default function BookingCTA() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);

  const EMAILJS_SERVICE_ID = 'condado-software-website';
  const EMAILJS_TEMPLATE_ID = 'main';
  const EMAILJS_PUBLIC_KEY = '7O3LhuBrPQinMDKTd';

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      );
      toast.success(t('booking.success').replace('{name}', name || "there"));
      form.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error(t('booking.error') || 'Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="booking" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl md:text-4xl mb-3">{t('booking.title')}</h2>
          <p className="text-muted-foreground">{t('booking.subtitle')}</p>
        </div>
        <form onSubmit={onSubmit} className="grid gap-6 max-w-2xl">
          <div className="grid gap-2">
            <Label htmlFor="name">{t('booking.name')}</Label>
            <Input id="name" name="name" placeholder={t('booking.placeholder.name')} required />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="email">{t('booking.email')}</Label>
            <Input id="email" name="email" type="email" placeholder={t('booking.placeholder.email')} required />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="phone">{t('booking.phone')}</Label>
            <Input id="phone" name="phone" type="tel" placeholder={t('booking.placeholder.phone')} required />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="notes">{t('booking.notes')}</Label>
            <Textarea 
              id="notes" 
              name="notes" 
              placeholder={t('booking.placeholder.notes')}
              className="min-h-[120px]"
            />
          </div>
          
          <div className="flex gap-3">
            <Button type="submit" disabled={isLoading} className="hover-scale">
              {isLoading ? t('booking.sending') || 'Sending...' : t('booking.submit')}
            </Button>
            <a href="#services" className="story-link self-center text-sm text-muted-foreground">{t('booking.services')}</a>
          </div>
        </form>
      </div>
    </section>
  );
}