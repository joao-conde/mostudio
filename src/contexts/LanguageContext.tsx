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
    // Common
    'common.back': 'Back to Home',
    
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
    'services.social.title': 'Social Makeup',
    'services.social.desc': 'Glamorous makeup for parties, galas, and special social events.',
    'services.social.cta': "Let's chat",
    'services.social.longDesc': 'Perfect for cocktail parties, galas, anniversaries, and any social event where you want to look stunning. Our social makeup service focuses on creating sophisticated, camera-ready looks that last all evening.',
    'services.social.pricing.basic': 'Social Event Look',
    'services.social.pricing.basicPrice': '€80',
    'services.social.pricing.premium': 'Premium + Touch-ups',
    'services.social.pricing.premiumPrice': '€120',
    'services.social.pricing.note': 'Includes consultation, application, and basic touch-up kit.',
    'services.social.faq.q1': 'How long does the social makeup application take?',
    'services.social.faq.a1': 'Typically 45-60 minutes, including consultation to understand your desired look and the event requirements.',
    'services.social.faq.q2': 'Do you provide makeup for photoshoots?',
    'services.social.faq.a2': 'Yes! Our social makeup service is perfect for photoshoots, ensuring you look flawless both in person and on camera.',
    'services.social.faq.q3': 'Can I request a trial session?',
    'services.social.faq.a3': 'Absolutely! We recommend a trial session especially for important events. Trial sessions are charged separately.',
    'services.social.faq.q4': 'What products do you use?',
    'services.social.faq.a4': 'We use high-end, professional makeup brands that are long-lasting and photograph beautifully, including MAC, Urban Decay, and Charlotte Tilbury.',
    
    'services.bride.title': 'Bride Makeup',
    'services.bride.desc': 'Your wedding day deserves perfection. Flawless, long-lasting makeup that photographs beautifully.',
    'services.bride.cta': 'Book consultation',
    'services.bride.longDesc': 'Your wedding day is one of the most important days of your life. Our bridal makeup service ensures you look radiant from the ceremony through the last dance. We specialize in timeless, elegant looks that photograph beautifully and last all day.',
    'services.bride.pricing.basic': 'Bridal Makeup Only',
    'services.bride.pricing.basicPrice': '€150',
    'services.bride.pricing.premium': 'Bridal + Trial Session',
    'services.bride.pricing.premiumPrice': '€250',
    'services.bride.pricing.note': 'Travel fees may apply. Group packages available for bridal party.',
    'services.bride.faq.q1': 'Do you offer bridal trials?',
    'services.bride.faq.a1': 'Yes! We highly recommend a trial session 1-3 months before your wedding to perfect your look and ensure you love it.',
    'services.bride.faq.q2': 'How early should I book?',
    'services.bride.faq.a2': 'We recommend booking 6-12 months in advance, especially for peak wedding season (May-October).',
    'services.bride.faq.q3': 'Do you travel to the venue?',
    'services.bride.faq.a3': 'Yes! We come to your getting-ready location. Travel fees apply for locations outside our standard service area.',
    'services.bride.faq.q4': 'Can you do makeup for my bridal party?',
    'services.bride.faq.a4': 'Absolutely! We offer special group packages for bridal parties. Each bridesmaid application takes about 45 minutes.',
    
    'services.workshop.title': 'Self Makeup Workshop',
    'services.workshop.desc': 'Learn professional makeup techniques in personalized one-on-one sessions.',
    'services.workshop.cta': 'Join workshop',
    'services.workshop.longDesc': 'Master the art of makeup with our personalized workshops. Whether you\'re a complete beginner or looking to refine your skills, we\'ll teach you professional techniques tailored to your face shape, skin tone, and personal style.',
    'services.workshop.pricing.basic': 'Basic Workshop (2h)',
    'services.workshop.pricing.basicPrice': '€120',
    'services.workshop.pricing.premium': 'Advanced Workshop (3h)',
    'services.workshop.pricing.premiumPrice': '€180',
    'services.workshop.pricing.note': 'Includes hands-on practice, personalized face chart, and product recommendations.',
    'services.workshop.faq.q1': 'What will I learn in the workshop?',
    'services.workshop.faq.a1': 'You\'ll learn skincare prep, color matching, contouring, eyeshadow application, and techniques specific to your face shape and style preferences.',
    'services.workshop.faq.q2': 'Do I need to bring my own makeup?',
    'services.workshop.faq.a2': 'No! We provide all professional makeup and tools during the session. We\'ll also recommend products for your personal kit.',
    'services.workshop.faq.q3': 'Is this suitable for beginners?',
    'services.workshop.faq.a3': 'Absolutely! We tailor the workshop to your skill level, from complete beginners to those wanting to refine specific techniques.',
    'services.workshop.faq.q4': 'Can I book a group workshop?',
    'services.workshop.faq.a4': 'Yes! Group workshops are available for 2-4 people and are perfect for bridal parties or friends wanting to learn together.',
    
    'services.pricing.title': 'Pricing',
    'services.bookNow': 'Book Now',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    
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
    // Common
    'common.back': 'Voltar ao Início',
    
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
    'services.social.title': 'Maquilhagem Social',
    'services.social.desc': 'Maquilhagem glamorosa para festas, galas e eventos sociais especiais.',
    'services.social.cta': 'Vamos conversar',
    'services.social.longDesc': 'Perfeito para cocktails, galas, aniversários e qualquer evento social onde quer estar deslumbrante. O nosso serviço de maquilhagem social foca-se em criar looks sofisticados e prontos para fotografia que duram toda a noite.',
    'services.social.pricing.basic': 'Look para Evento Social',
    'services.social.pricing.basicPrice': '€80',
    'services.social.pricing.premium': 'Premium + Retoques',
    'services.social.pricing.premiumPrice': '€120',
    'services.social.pricing.note': 'Inclui consulta, aplicação e kit básico de retoques.',
    'services.social.faq.q1': 'Quanto tempo demora a aplicação da maquilhagem social?',
    'services.social.faq.a1': 'Normalmente 45-60 minutos, incluindo consulta para entender o look desejado e os requisitos do evento.',
    'services.social.faq.q2': 'Fazem maquilhagem para sessões fotográficas?',
    'services.social.faq.a2': 'Sim! O nosso serviço de maquilhagem social é perfeito para sessões fotográficas, garantindo que fica impecável tanto pessoalmente como em câmara.',
    'services.social.faq.q3': 'Posso solicitar uma sessão de teste?',
    'services.social.faq.a3': 'Absolutamente! Recomendamos uma sessão de teste especialmente para eventos importantes. As sessões de teste são cobradas separadamente.',
    'services.social.faq.q4': 'Que produtos usam?',
    'services.social.faq.a4': 'Usamos marcas de maquilhagem profissionais de alta qualidade que são duradouras e ficam lindas em fotografias, incluindo MAC, Urban Decay e Charlotte Tilbury.',
    
    'services.bride.title': 'Maquilhagem de Noiva',
    'services.bride.desc': 'O seu dia de casamento merece perfeição. Maquilhagem impecável e duradoura que fica linda em fotografias.',
    'services.bride.cta': 'Reservar consulta',
    'services.bride.longDesc': 'O seu dia de casamento é um dos dias mais importantes da sua vida. O nosso serviço de maquilhagem nupcial garante que se sente radiante desde a cerimónia até à última dança. Especializamo-nos em looks atemporais e elegantes que ficam lindos em fotografias e duram todo o dia.',
    'services.bride.pricing.basic': 'Apenas Maquilhagem de Noiva',
    'services.bride.pricing.basicPrice': '€150',
    'services.bride.pricing.premium': 'Noiva + Sessão de Teste',
    'services.bride.pricing.premiumPrice': '€250',
    'services.bride.pricing.note': 'Taxas de deslocação podem aplicar-se. Pacotes de grupo disponíveis para madrinhas.',
    'services.bride.faq.q1': 'Oferecem testes de noiva?',
    'services.bride.faq.a1': 'Sim! Recomendamos vivamente uma sessão de teste 1-3 meses antes do casamento para aperfeiçoar o seu look e garantir que adora.',
    'services.bride.faq.q2': 'Com que antecedência devo reservar?',
    'services.bride.faq.a2': 'Recomendamos reservar com 6-12 meses de antecedência, especialmente para a época alta de casamentos (Maio-Outubro).',
    'services.bride.faq.q3': 'Deslocam-se ao local?',
    'services.bride.faq.a3': 'Sim! Vamos ao seu local de preparação. Aplicam-se taxas de deslocação para locais fora da nossa área de serviço padrão.',
    'services.bride.faq.q4': 'Podem fazer maquilhagem para as minhas madrinhas?',
    'services.bride.faq.a4': 'Absolutamente! Oferecemos pacotes especiais para grupos de madrinhas. Cada aplicação de madrinha demora cerca de 45 minutos.',
    
    'services.workshop.title': 'Workshop de Auto-Maquilhagem',
    'services.workshop.desc': 'Aprenda técnicas profissionais de maquilhagem em sessões personalizadas individuais.',
    'services.workshop.cta': 'Juntar-se ao workshop',
    'services.workshop.longDesc': 'Domine a arte da maquilhagem com os nossos workshops personalizados. Seja uma principiante completa ou procure refinar as suas técnicas, ensinaremos técnicas profissionais adaptadas ao formato do seu rosto, tom de pele e estilo pessoal.',
    'services.workshop.pricing.basic': 'Workshop Básico (2h)',
    'services.workshop.pricing.basicPrice': '€120',
    'services.workshop.pricing.premium': 'Workshop Avançado (3h)',
    'services.workshop.pricing.premiumPrice': '€180',
    'services.workshop.pricing.note': 'Inclui prática prática, carta facial personalizada e recomendações de produtos.',
    'services.workshop.faq.q1': 'O que vou aprender no workshop?',
    'services.workshop.faq.a1': 'Aprenderá preparação da pele, correspondência de cores, contorno, aplicação de sombras e técnicas específicas para o formato do seu rosto e preferências de estilo.',
    'services.workshop.faq.q2': 'Preciso de trazer a minha própria maquilhagem?',
    'services.workshop.faq.a2': 'Não! Fornecemos toda a maquilhagem e ferramentas profissionais durante a sessão. Também recomendaremos produtos para o seu kit pessoal.',
    'services.workshop.faq.q3': 'É adequado para principiantes?',
    'services.workshop.faq.a3': 'Absolutamente! Adaptamos o workshop ao seu nível de competência, desde principiantes completas a quem quer refinar técnicas específicas.',
    'services.workshop.faq.q4': 'Posso reservar um workshop de grupo?',
    'services.workshop.faq.a4': 'Sim! Workshops de grupo estão disponíveis para 2-4 pessoas e são perfeitos para grupos de madrinhas ou amigas que querem aprender juntas.',
    
    'services.pricing.title': 'Preços',
    'services.bookNow': 'Reservar Agora',
    
    // FAQ
    'faq.title': 'Perguntas Frequentes',
    
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