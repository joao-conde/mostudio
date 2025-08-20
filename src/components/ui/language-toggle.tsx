import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
      className="text-[12px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground h-auto p-1"
    >
      {language === 'en' ? 'PT' : 'EN'}
    </Button>
  );
}