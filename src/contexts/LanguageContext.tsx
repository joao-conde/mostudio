import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio', 
    'nav.about': 'About',
    'nav.inquire': 'Inquire',
    'nav.bookNow': 'Book now',
    
    // Hero
    'hero.title': 'SERVICES',
    'hero.subtitle': 'Luxury makeup artistry for your most important moments',
    
    // Services
    'services.bridal.title': 'Bridal Glam',
    'services.bridal.desc': 'Your wedding day deserves perfection. Flawless, long-lasting makeup that photographs beautifully.',
    'services.bridal.cta': "Let's chat",
    'services.editorial.title': 'Editorial / Photoshoot',
    'services.editorial.desc': 'Bold, creative looks for fashion shoots, magazines, and artistic projects.',
    'services.editorial.cta': 'Book now',
    'services.event.title': 'Event & Evening',
    'services.event.desc': 'Glamorous makeup for special occasions, galas, and evening events.',
    'services.event.cta': 'Inquire',
    
    // Gallery
    'gallery.title': 'Recent Work',
    'gallery.subtitle': 'A glimpse of our artistry across bridal, editorial and natural looks.',
    'gallery.instagram': 'View on Instagram',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Passionate makeup artist dedicated to enhancing your natural beauty',
    'about.content': "With over 8 years of experience in the beauty industry, I specialize in creating stunning looks that enhance your natural features. My approach combines technical expertise with artistic vision, ensuring each client feels confident and radiant. I've worked with brides, models, and celebrities, always focusing on creating personalized looks that reflect individual style and personality.",
    'about.experience': 'Years of Experience',
    'about.clients': 'Happy Clients',
    'about.weddings': 'Weddings',
    
    // Testimonials
    'testimonials.title': 'What Clients Say',
    'testimonials.subtitle': 'Real experiences from our beautiful clients.',
    
    // Booking
    'booking.title': 'Book Your Appointment',
    'booking.subtitle': 'Tell us about your event and desired look. We\'ll confirm availability.',
    'booking.name': 'Name',
    'booking.email': 'Email',
    'booking.phone': 'Phone',
    'booking.date': 'Event Date',
    'booking.time': 'Preferred Time',
    'booking.service': 'Service',
    'booking.location': 'Location',
    'booking.notes': 'Additional Notes',
    'booking.submit': 'Request booking',
    'booking.services': 'See services & pricing',
    'booking.placeholder.name': 'Your full name',
    'booking.placeholder.email': 'you@example.com',
    'booking.placeholder.phone': '+1 (555) 123-4567',
    'booking.placeholder.location': 'Event location or studio',
    'booking.placeholder.notes': 'Tell us about your vision, inspiration, or special requests...',
    'booking.success': 'Thanks {name}! We\'ll be in touch shortly.',
    
    // Footer
    'footer.rights': 'All rights reserved.',
  },
  pt: {
    // Header
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.portfolio': 'Portfólio',
    'nav.about': 'Sobre',
    'nav.inquire': 'Contacto',
    'nav.bookNow': 'Reservar',
    
    // Hero
    'hero.title': 'SERVIÇOS',
    'hero.subtitle': 'Maquilhagem de luxo para os seus momentos mais importantes',
    
    // Services
    'services.bridal.title': 'Noiva Glamour',
    'services.bridal.desc': 'O seu dia de casamento merece perfeição. Maquilhagem impecável e duradoura que fica linda em fotografias.',
    'services.bridal.cta': 'Vamos conversar',
    'services.editorial.title': 'Editorial / Sessão Fotográfica',
    'services.editorial.desc': 'Looks arrojados e criativos para sessões de moda, revistas e projetos artísticos.',
    'services.editorial.cta': 'Reservar',
    'services.event.title': 'Eventos & Noite',
    'services.event.desc': 'Maquilhagem glamorosa para ocasiões especiais, galas e eventos noturnos.',
    'services.event.cta': 'Contactar',
    
    // Gallery
    'gallery.title': 'Trabalhos Recentes',
    'gallery.subtitle': 'Um vislumbre da nossa arte em looks de noiva, editorial e naturais.',
    'gallery.instagram': 'Ver no Instagram',
    
    // About
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Maquilhadora apaixonada dedicada a realçar a sua beleza natural',
    'about.content': 'Com mais de 8 anos de experiência na indústria da beleza, especializo-me em criar looks deslumbrantes que realçam as suas características naturais. A minha abordagem combina expertise técnica com visão artística, garantindo que cada cliente se sinta confiante e radiante. Já trabalhei com noivas, modelos e celebridades, focando sempre em criar looks personalizados que refletem o estilo e personalidade individual.',
    'about.experience': 'Anos de Experiência',
    'about.clients': 'Clientes Felizes',
    'about.weddings': 'Casamentos',
    
    // Testimonials
    'testimonials.title': 'O Que Dizem os Clientes',
    'testimonials.subtitle': 'Experiências reais das nossas lindas clientes.',
    
    // Booking
    'booking.title': 'Reserve o Seu Agendamento',
    'booking.subtitle': 'Conte-nos sobre o seu evento e look desejado. Confirmaremos a disponibilidade.',
    'booking.name': 'Nome',
    'booking.email': 'Email',
    'booking.phone': 'Telefone',
    'booking.date': 'Data do Evento',
    'booking.time': 'Hora Preferida',
    'booking.service': 'Serviço',
    'booking.location': 'Localização',
    'booking.notes': 'Notas Adicionais',
    'booking.submit': 'Solicitar reserva',
    'booking.services': 'Ver serviços e preços',
    'booking.placeholder.name': 'O seu nome completo',
    'booking.placeholder.email': 'voce@exemplo.com',
    'booking.placeholder.phone': '+351 912 345 678',
    'booking.placeholder.location': 'Local do evento ou estúdio',
    'booking.placeholder.notes': 'Conte-nos sobre a sua visão, inspiração ou pedidos especiais...',
    'booking.success': 'Obrigada {name}! Entraremos em contacto em breve.',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados.',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};