type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative min-h-[48vh] overflow-hidden bg-forest-dark">
      <div className="relative z-10 mx-auto flex min-h-[48vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 lg:px-8">
        <h1 className="text-ivory drop-shadow-sm">{title}</h1>
        <p className="mt-4 max-w-xl text-ivory/90">{description}</p>
      </div>
    </section>
  );
}
