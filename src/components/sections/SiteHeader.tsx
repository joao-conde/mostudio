import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#gallery" },
  { label: "Inquire", href: "#booking" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-secondary/80 backdrop-blur supports-[backdrop-filter]:bg-secondary/60 border-b">
      <div className="container flex h-12 md:h-14 items-center justify-between">
        <a href="#home" className="font-display text-base md:text-lg tracking-wide" aria-label="Luxe Bloom Home">
          Luxe Bloom
        </a>
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-[12px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#booking">
            <Button className="hover-scale" size="sm">Book now</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
