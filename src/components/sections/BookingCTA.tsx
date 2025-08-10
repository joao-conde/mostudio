import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export default function BookingCTA() {
  const [service, setService] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    toast.success(`Thanks ${name || "there"}! We'll be in touch shortly.`);
    e.currentTarget.reset();
    setService("");
  };

  return (
    <section id="booking" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl md:text-4xl mb-3">Book Your Appointment</h2>
          <p className="text-muted-foreground">Tell us a little about your date and desired look. We’ll confirm availability.</p>
        </div>
        <form onSubmit={onSubmit} className="grid gap-6 max-w-2xl">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your full name" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="date">Event Date</Label>
            <Input id="date" name="date" type="date" required />
          </div>
          <div className="grid gap-2">
            <Label>Service</Label>
            <Select value={service} onValueChange={setService} name="service" required>
              <SelectTrigger>
                <SelectValue placeholder="Choose a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bridal">Bridal Glam</SelectItem>
                <SelectItem value="editorial">Editorial / Photoshoot</SelectItem>
                <SelectItem value="event">Event & Evening</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-3">
            <Button type="submit" className="hover-scale">Request booking</Button>
            <a href="#services" className="story-link self-center text-sm text-muted-foreground">See services & pricing</a>
          </div>
        </form>
      </div>
    </section>
  );
}
