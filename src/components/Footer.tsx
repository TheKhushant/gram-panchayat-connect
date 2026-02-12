import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">ग्रा</span>
              </div>
              <div>
                <p className="font-bold text-primary-foreground leading-tight text-sm">ग्रामपंचायत</p>
                <p className="text-xs text-footer-foreground/70 leading-tight">Amgaon (Deoli)</p>
              </div>
            </div>
            <p className="text-sm text-footer-foreground/70 leading-relaxed">
              डिजिटल ग्रामपंचायत पोर्टल – नागरिकांसाठी पारदर्शक, सुलभ आणि कार्यक्षम सेवा.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-4">महत्वाचे दुवे</h4>
            <ul className="space-y-2 text-sm text-footer-foreground/70">
              <li><a href="#about" className="hover:text-secondary transition-colors">ग्रामपंचायत माहिती</a></li>
              <li><a href="#schemes" className="hover:text-secondary transition-colors">शासकीय योजना</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">नागरिक सेवा</a></li>
              <li><a href="#projects" className="hover:text-secondary transition-colors">विकास प्रकल्प</a></li>
              <li><a href="#complaint" className="hover:text-secondary transition-colors">तक्रार निवारण</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-4">संपर्क माहिती</h4>
            <ul className="space-y-3 text-sm text-footer-foreground/70">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-secondary flex-shrink-0" />
                <a href="tel:8788443189" className="hover:text-secondary transition-colors">8788443189</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-secondary flex-shrink-0" />
                <a href="mailto:amgaondeveli@gmail.com" className="hover:text-secondary transition-colors text-xs">amgaondeveli@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-secondary flex-shrink-0 mt-0.5" />
                <span>Amgaon (Deoli), ता. हिंगणा, जि. नागपूर</span>
              </li>
            </ul>
          </div>

          {/* Useful */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-4">उपयुक्त दुवे</h4>
            <ul className="space-y-2 text-sm text-footer-foreground/70">
              <li><a href="https://www.maharashtra.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">महाराष्ट्र शासन</a></li>
              <li><a href="https://grfrural.maharashtra.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">ग्रामविकास विभाग</a></li>
              <li><a href="https://www.india.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">भारत सरकार</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-footer-foreground/10 mt-10 pt-6 text-center text-sm text-footer-foreground/50">
          © 2026 ग्रामपंचायत Amgaon (Deoli) | सर्व हक्क राखीव
        </div>
      </div>
    </footer>
  );
};

export default Footer;
