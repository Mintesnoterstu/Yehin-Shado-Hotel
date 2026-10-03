import { Star } from "lucide-react";

type TestimonialProps = {
  quote: string;
  name: string;
  context: string;
};

export function Testimonial({ quote, name, context }: TestimonialProps) {
  return (
    <blockquote className="rounded-2xl border border-sage bg-white p-6 shadow-sm">
      <div className="mb-4 flex gap-1" aria-label="5 star rating">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-sand text-sand" />
        ))}
      </div>
      <p className="text-moss">“{quote}”</p>
      <footer className="mt-4">
        <cite className="not-italic font-medium text-ink">{name}</cite>
        <p className="text-sm text-fog">{context}</p>
      </footer>
    </blockquote>
  );
}
