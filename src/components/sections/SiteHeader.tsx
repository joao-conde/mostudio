import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Booking", href: "#booking" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="font-display text-xl tracking-wide story-link" aria-label="Luxe Bloom Home">
          Luxe Bloom
        </a>
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground story-link">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#booking">
            <Button className="hover-scale">Book now</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
