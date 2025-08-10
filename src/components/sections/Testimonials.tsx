import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "I felt absolutely stunning on my wedding day. The makeup lasted all night!",
    author: "Amelia R.",
  },
  {
    quote: "They nailed our editorial brief with precision and creativity.",
    author: "Studio Orion",
  },
  {
    quote: "Flawless yet natural. Exactly what I wanted for my event.",
    author: "Priya S.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl md:text-4xl mb-3">What Clients Say</h2>
          <p className="text-muted-foreground">Real words from real clients who trusted us with their moments.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.author} className="hover-scale" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <CardContent className="pt-6">
                <blockquote className="text-base">“{t.quote}”</blockquote>
                <figcaption className="mt-3 text-sm text-muted-foreground">— {t.author}</figcaption>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
