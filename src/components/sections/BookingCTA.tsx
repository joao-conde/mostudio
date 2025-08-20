import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

export default function BookingCTA() {
  const { t } = useLanguage();
  const [service, setService] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    toast.success(t('booking.success').replace('{name}', name as string || "there"));
    e.currentTarget.reset();
    setService("");
  };

  return (
    <section id="booking" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl md:text-4xl mb-3">{t('booking.title')}</h2>
          <p className="text-muted-foreground">{t('booking.subtitle')}</p>
        </div>
        <form onSubmit={onSubmit} className="grid gap-6 max-w-2xl">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">{t('booking.name')}</Label>
              <Input id="name" name="name" placeholder={t('booking.placeholder.name')} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">{t('booking.email')}</Label>
              <Input id="email" name="email" type="email" placeholder={t('booking.placeholder.email')} required />
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="phone">{t('booking.phone')}</Label>
              <Input id="phone" name="phone" type="tel" placeholder={t('booking.placeholder.phone')} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="date">{t('booking.date')}</Label>
              <Input id="date" name="date" type="date" required />
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="time">{t('booking.time')}</Label>
              <Input id="time" name="time" type="time" />
            </div>
            <div className="grid gap-2">
              <Label>{t('booking.service')}</Label>
              <Select value={service} onValueChange={setService} name="service" required>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bridal">{t('services.bridal.title')}</SelectItem>
                  <SelectItem value="editorial">{t('services.editorial.title')}</SelectItem>
                  <SelectItem value="event">{t('services.event.title')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="location">{t('booking.location')}</Label>
            <Input id="location" name="location" placeholder={t('booking.placeholder.location')} />
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
            <Button type="submit" className="hover-scale">{t('booking.submit')}</Button>
            <a href="#services" className="story-link self-center text-sm text-muted-foreground">{t('booking.services')}</a>
          </div>
        </form>
      </div>
    </section>
  );
}