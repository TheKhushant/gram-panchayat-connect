import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">संपर्क विभाग</h2>
          <p className="section-subtitle">ग्रामपंचायत Amgaon (Deoli) शी संपर्क साधा</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact cards */}
          <div className="space-y-4">
            <div className="bg-card rounded-xl p-5 shadow-md flex items-center gap-4 card-hover">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-accent" size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">आपत्कालीन नंबर</p>
                <a href="tel:8788443189" className="font-bold text-card-foreground hover:text-primary transition-colors">
                  8788443189
                </a>
              </div>
            </div>

            <div className="bg-card rounded-xl p-5 shadow-md flex items-center gap-4 card-hover">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">ईमेल</p>
                <a href="mailto:amgaondeveli@gmail.com" className="font-bold text-card-foreground hover:text-primary transition-colors text-sm">
                  amgaondeveli@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-card rounded-xl p-5 shadow-md flex items-center gap-4 card-hover">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-secondary" size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">पत्ता</p>
                <p className="font-bold text-card-foreground text-sm">
                  Amgaon (Deoli), ता. हिंगणा, जि. नागपूर
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/918788443189"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-600 text-primary-foreground font-bold py-3 rounded-xl hover:bg-green-700 transition-colors shadow-md"
            >
              <MessageCircle size={20} />
              WhatsApp वर संपर्क करा
            </a>
          </div>

          {/* Map */}
          <div className="bg-card rounded-xl overflow-hidden shadow-md h-80 md:h-auto">
            <iframe
              title="Amgaon Deoli Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14879.123456!2d78.9!3d21.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAmgaon+Deoli!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
