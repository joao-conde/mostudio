import { Instagram, Mail } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 grid gap-6 md:grid-cols-2 items-center">
        <div>
          <p className="font-display text-lg">Luxe Bloom Makeup Studio</p>
          <p className="text-sm text-muted-foreground">Premium makeup artistry for weddings, events and editorials.</p>
        </div>
        <div className="flex gap-4 md:justify-end">
          <a href="mailto:hello@luxebloom.example" className="story-link" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
          <a href="#" className="story-link" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-xs text-muted-foreground">© {new Date().getFullYear()} Luxe Bloom. All rights reserved.</div>
      </div>
    </footer>
  );
}
