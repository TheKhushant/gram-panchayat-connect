import heroImage from "@/assets/hero-village.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Amgaon (Deoli) गावाचे दृश्य"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-block bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-5 py-1.5 mb-6">
            <span className="text-secondary font-semibold text-sm tracking-wide">
              डिजिटल ग्रामपंचायत पोर्टल
            </span>
          </div>
        </div>

        <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-4">
          आपले गाव – आपली जबाबदारी
        </h1>

        <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          डिजिटल ग्रामपंचायत Amgaon (Deoli), ता. हिंगणा, जि. नागपूर
        </p>

        <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            className="px-8 py-3.5 rounded-lg bg-secondary text-secondary-foreground font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            नागरिक सेवा
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 rounded-lg bg-primary-foreground/15 backdrop-blur text-primary-foreground border border-primary-foreground/30 font-bold text-lg hover:bg-primary-foreground/25 transition-all"
          >
            अधिक माहिती
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
