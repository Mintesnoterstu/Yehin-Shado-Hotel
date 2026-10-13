import { Star } from "lucide-react";

type TestimonialProps = {
  quote: string;
  name: string;
  context: string;
};

export function Testimonial({ quote, name, context }: TestimonialProps) {
  return (
    <blockquote className="border-t border-sage pt-6">
      <div className="mb-5 flex gap-1" aria-label="5 star rating">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-3.5 w-3.5 fill-sand text-sand" />
        ))}
      </div>
      <p className="font-serif text-xl leading-snug text-ink">“{quote}”</p>
      <footer className="mt-6">
        <cite className="not-italic text-sm font-medium uppercase tracking-[0.14em] text-ink">{name}</cite>
        <p className="mt-1 text-sm text-fog">{context}</p>
      </footer>
    </blockquote>
  );
}
