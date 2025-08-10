import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brush, Sparkles, Heart } from "lucide-react";

const services = [
  {
    icon: Brush,
    title: "Bridal Glam",
    description: "Soft glam to full glam for your big day. Trials available.",
  },
  {
    icon: Sparkles,
    title: "Editorial / Photoshoot",
    description: "Camera-ready looks tailored to concept and lighting.",
  },
  {
    icon: Heart,
    title: "Event & Evening",
    description: "Elevated looks that last through the night.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl md:text-4xl mb-3">Signature Services</h2>
          <p className="text-muted-foreground">Curated offerings crafted by certified artists using premium products.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="hover-scale" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <s.icon className="h-5 w-5 text-primary" />
                  <CardTitle className="font-display text-xl">{s.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
