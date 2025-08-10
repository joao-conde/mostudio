import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";

export default function Gallery() {
  const items = [
    { src: gallery1, alt: "Bridal soft glam makeup close-up" },
    { src: gallery2, alt: "Bold editorial makeup with vibrant eyeshadow" },
    { src: gallery3, alt: "Natural glow everyday makeup portrait" },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl md:text-4xl mb-3">Recent Work</h2>
          <p className="text-muted-foreground">A glimpse of our artistry across bridal, editorial and natural looks.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((img) => (
            <figure key={img.alt} className="overflow-hidden rounded-lg">
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
