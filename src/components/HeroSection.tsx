import heroBg from "@/assets/hero-bg.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroBg}
        alt="Fresh healthy food on dark wooden table"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        loading="eager"
        style={{ filter: "brightness(0.6) saturate(1.2)" }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div
        ref={ref}
        className={`relative z-10 text-center px-6 max-w-3xl mx-auto reveal ${visible ? "visible" : ""}`}
      >
        <p className="text-gradient-primary font-semibold tracking-[0.25em] uppercase text-sm mb-4">
          Student-Led Contribution
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 text-foreground">
          Healthy Nutrition
          <br />
          <span className="text-gradient-warm">Starts With Our Values</span>
        </h1>
        <p className="text-lg text-muted-foreground italic mb-4">
          "Discipline in nutrition creates freedom in life"
        </p>
        <p className="text-base text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
          We're a team of students reshaping how young people think about food —
          connecting everyday nutrition choices with the personal values that
          drive lasting change.
        </p>
        <a
          href="#progress"
          className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 text-sm animate-glow-pulse"
        >
          Follow Our Weekly Progress
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
