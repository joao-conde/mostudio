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
    'services.social.faq.q1': 'How far in advance should I book?',
    'services.social.faq.a1': 'I recommend booking at least 2-3 weeks in advance, especially for special occasions or weekends.',
    'services.social.faq.q2': 'Do you travel to homes or hotels?',
    'services.social.faq.a2': 'Yes, I offer mobile makeup services and can come to your location within the city area.',
    'services.social.faq.q3': 'What are your rates and service duration?',
    'services.social.faq.a3': 'Services typically range from €50-120 depending on the complexity, and take 60-90 minutes.',
    'services.social.faq.q4': 'Can I also book hairstyling?',
    'services.social.faq.a4': 'Yes, I offer hairstyling services as an add-on to makeup appointments.',
    
    'services.bride.title': 'Bride Makeup',
    'services.bride.desc': 'Your wedding day deserves perfection. Flawless, long-lasting makeup that photographs beautifully.',
    'services.bride.cta': 'Book consultation',
    'services.bride.longDesc': 'Your wedding day is one of the most important days of your life. Our bridal makeup service ensures you look radiant from the ceremony through the last dance. We specialize in timeless, elegant looks that photograph beautifully and last all day.',
    'services.bride.pricing.basic': 'Bridal Makeup Only',
    'services.bride.pricing.basicPrice': '€150',
    'services.bride.pricing.premium': 'Bridal + Trial Session',
    'services.bride.pricing.premiumPrice': '€250',
    'services.bride.pricing.note': 'Travel fees may apply. Group packages available for bridal party.',
    'services.bride.faq.q1': 'How far in advance should I book the trial?',
    'services.bride.faq.a1': 'I recommend booking your bridal trial 2-3 months before your wedding date.',
    'services.bride.faq.q2': 'Can I hire makeup for my mother and bridesmaids?',
    'services.bride.faq.a2': 'Absolutely! I offer bridal party packages for mothers, bridesmaids, and other family members.',
    'services.bride.faq.q3': 'What does the Bridal Makeup include?',
    'services.bride.faq.a3': 'The service includes a pre-wedding trial, wedding day makeup, touch-up kit, and timeline coordination.',
    'services.bride.faq.q4': 'Is there an option to book both hairstyling and makeup?',
    'services.bride.faq.a4': 'Yes, I can coordinate with trusted hairstylists or provide both services for a complete bridal look.',
    'services.bride.faq.q5': 'What are your rates and service duration?',
    'services.bride.faq.a5': 'Bridal makeup starts at €150 including trial, with additional services priced separately.',
    
    'services.workshop.title': 'Self Makeup Workshop',
    'services.workshop.desc': 'Learn the art of makeup with personalized one-on-one workshops tailored to your skill level.',
    'services.workshop.longDesc': 'Master the fundamentals of makeup application in a hands-on workshop designed just for you. Whether you\'re a complete beginner or looking to refine your skills, I\'ll guide you through techniques that enhance your natural beauty.',
    'services.workshop.cta': 'Book Workshop',
    'services.workshop.levels.beginner.title': 'Beginner',
    'services.workshop.levels.beginner.desc': 'Perfect for those starting their makeup journey. Learn basic techniques, color theory, and essential application methods.',
    'services.workshop.levels.beginner.duration': '2 hours',
    'services.workshop.levels.beginner.price': '€60',
    'services.workshop.levels.amateur.title': 'Amateur',
    'services.workshop.levels.amateur.desc': 'Build on your existing knowledge with intermediate techniques, contouring, and advanced color application.',
    'services.workshop.levels.amateur.duration': '3 hours',
    'services.workshop.levels.amateur.price': '€90',
    'services.workshop.levels.professional.title': 'Professional',
    'services.workshop.levels.professional.desc': 'Master advanced techniques, editorial looks, and professional application methods for special occasions.',
    'services.workshop.levels.professional.duration': '4 hours',
    'services.workshop.levels.professional.price': '€120',
    'services.workshop.pricing.basic': '2-hour session',
    'services.workshop.pricing.basicPrice': '€80',
    'services.workshop.pricing.premium': '4-hour intensive',
    'services.workshop.pricing.premiumPrice': '€150',
    'services.workshop.pricing.note': 'All makeup products and tools provided during workshop',
    'services.workshop.faq.q1': 'What skill levels do you accommodate?',
    'services.workshop.faq.a1': 'I offer workshops for all levels - from complete beginners to those wanting to refine advanced techniques.',
    'services.workshop.faq.q2': 'Are makeup products included?',
    'services.workshop.faq.a2': 'Yes, all professional makeup products and tools are provided during the workshop.',
    'services.workshop.faq.q3': 'Can I bring my own makeup to learn with?',
    'services.workshop.faq.a3': 'Absolutely! We can work with your existing products and I\'ll recommend additions if needed.',
    'services.workshop.faq.q4': 'Do you offer group workshops?',
    'services.workshop.faq.a4': 'Yes, I offer group sessions for up to 4 people, perfect for friends or bridal parties.',
    
    'services.pricing.title': 'Pricing',
    'services.pricing.duration': 'Duration',
    'services.pricing.price': 'Price',
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
    'services.social.faq.q1': 'Com quanta antecedência devo reservar?',
    'services.social.faq.a1': 'Recomendo reservar com pelo menos 2-3 semanas de antecedência, especialmente para ocasiões especiais ou fins de semana.',
    'services.social.faq.q2': 'Desloca-se a domicílio ou hotel?',
    'services.social.faq.a2': 'Sim, ofereço serviços de maquilhagem ao domicílio e posso deslocar-me à sua localização dentro da área da cidade.',
    'services.social.faq.q3': 'Quais os valores e duração do serviço?',
    'services.social.faq.a3': 'Os serviços variam tipicamente entre €50-120 dependendo da complexidade e demoram 60-90 minutos.',
    'services.social.faq.q4': 'É possível reservar penteado?',
    'services.social.faq.a4': 'Sim, ofereço serviços de penteado como complemento aos serviços de maquilhagem.',
    
    'services.bride.title': 'Maquilhagem de Noiva',
    'services.bride.desc': 'O seu dia de casamento merece perfeição. Maquilhagem impecável e duradoura que fica linda em fotografias.',
    'services.bride.cta': 'Reservar consulta',
    'services.bride.longDesc': 'O seu dia de casamento é um dos dias mais importantes da sua vida. O nosso serviço de maquilhagem nupcial garante que se sente radiante desde a cerimónia até à última dança. Especializamo-nos em looks atemporais e elegantes que ficam lindos em fotografias e duram todo o dia.',
    'services.bride.pricing.basic': 'Apenas Maquilhagem de Noiva',
    'services.bride.pricing.basicPrice': '€150',
    'services.bride.pricing.premium': 'Noiva + Sessão de Teste',
    'services.bride.pricing.premiumPrice': '€250',
    'services.bride.pricing.note': 'Taxas de deslocação podem aplicar-se. Pacotes de grupo disponíveis para madrinhas.',
    'services.bride.faq.q1': 'Com quanta antecedência devo reservar?',
    'services.bride.faq.a1': 'Recomendo reservar o ensaio de noiva 2-3 meses antes da data do casamento.',
    'services.bride.faq.q2': 'É possível contratar maquilhagem para a minha mãe e damas de honor?',
    'services.bride.faq.a2': 'Absolutamente! Ofereço pacotes para grupos de noivas incluindo mães, damas de honor e outros familiares.',
    'services.bride.faq.q3': 'O que incluí a Maquilhagem de Noiva?',
    'services.bride.faq.a3': 'O serviço inclui ensaio pré-casamento, maquilhagem do dia do casamento, kit de retoques e coordenação de horários.',
    'services.bride.faq.q4': 'Existe opção de reservar penteado e maquilhagem?',
    'services.bride.faq.a4': 'Sim, posso coordenar com cabeleireiros de confiança ou fornecer ambos os serviços para um visual nupcial completo.',
    'services.bride.faq.q5': 'Quais os valores e duração do serviço?',
    'services.bride.faq.a5': 'A maquilhagem de noiva começa nos €150 incluindo ensaio, com serviços adicionais com preço separado.',
    
    'services.workshop.title': 'Workshop de Automaquilhagem',
    'services.workshop.desc': 'Aprenda a arte da maquilhagem com workshops personalizados individuais adaptados ao seu nível de habilidade.',
    'services.workshop.longDesc': 'Domine os fundamentos da aplicação de maquilhagem num workshop prático desenhado especialmente para si. Seja uma principiante completa ou procure refinar as suas habilidades, eu guio-a através de técnicas que realçam a sua beleza natural.',
    'services.workshop.cta': 'Reservar Workshop',
    'services.workshop.levels.beginner.title': 'Iniciante',
    'services.workshop.levels.beginner.desc': 'Perfeito para quem está a começar a sua jornada na maquilhagem. Aprenda técnicas básicas, teoria das cores e métodos essenciais de aplicação.',
    'services.workshop.levels.beginner.duration': '2 horas',
    'services.workshop.levels.beginner.price': '€60',
    'services.workshop.levels.amateur.title': 'Amador',
    'services.workshop.levels.amateur.desc': 'Construa sobre o seu conhecimento existente com técnicas intermédias, contorno e aplicação avançada de cor.',
    'services.workshop.levels.amateur.duration': '3 horas',
    'services.workshop.levels.amateur.price': '€90',
    'services.workshop.levels.professional.title': 'Profissional',
    'services.workshop.levels.professional.desc': 'Domine técnicas avançadas, looks editoriais e métodos de aplicação profissional para ocasiões especiais.',
    'services.workshop.levels.professional.duration': '4 horas',
    'services.workshop.levels.professional.price': '€120',
    'services.workshop.pricing.basic': 'Sessão de 2 horas',
    'services.workshop.pricing.basicPrice': '€80',
    'services.workshop.pricing.premium': 'Intensivo de 4 horas',
    'services.workshop.pricing.premiumPrice': '€150',
    'services.workshop.pricing.note': 'Todos os produtos e ferramentas de maquilhagem fornecidos durante o workshop',
    'services.workshop.faq.q1': 'Que níveis de habilidade acomoda?',
    'services.workshop.faq.a1': 'Ofereço workshops para todos os níveis - desde principiantes completas até quem quer refinar técnicas avançadas.',
    'services.workshop.faq.q2': 'Os produtos de maquilhagem estão incluídos?',
    'services.workshop.faq.a2': 'Sim, todos os produtos e ferramentas de maquilhagem profissionais são fornecidos durante o workshop.',
    'services.workshop.faq.q3': 'Posso trazer a minha própria maquilhagem para aprender?',
    'services.workshop.faq.a3': 'Absolutamente! Podemos trabalhar com os seus produtos existentes e eu recomendarei adições se necessário.',
    'services.workshop.faq.q4': 'Oferece workshops em grupo?',
    'services.workshop.faq.a4': 'Sim, ofereço sessões em grupo para até 4 pessoas, perfeito para amigas ou grupos de noivas.',
    
    'services.pricing.title': 'Preços',
    'services.pricing.duration': 'Duração',
    'services.pricing.price': 'Preço',
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