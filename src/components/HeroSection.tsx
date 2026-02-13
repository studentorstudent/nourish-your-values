import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroBg}
        alt="Fresh healthy food on dark wooden table"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
          Student-Led Contribution
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-foreground">
          Healthy Nutrition Starts With Our Values
        </h1>
        <p className="text-lg text-muted-foreground italic mb-4">
          "Discipline in nutrition creates freedom in life"
        </p>
        <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto">
          We're a team of students reshaping how young people think about food —
          connecting everyday nutrition choices with the personal values that
          drive lasting change.
        </p>
        <a
          href="#progress"
          className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors text-sm"
        >
          Follow Our Weekly Progress
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
