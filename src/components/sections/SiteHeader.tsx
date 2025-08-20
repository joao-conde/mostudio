import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SiteHeader() {
  const { t } = useLanguage();
  
  const navItems = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.portfolio"), href: "#gallery" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.inquire"), href: "#booking" },
  ];

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
          <LanguageToggle />
          <a href="#booking">
            <Button className="hover-scale" size="sm">{t("nav.bookNow")}</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
