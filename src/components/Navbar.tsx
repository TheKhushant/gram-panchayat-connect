import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "मुख्यपृष्ठ", href: "#home" },
  { label: "माहिती", href: "#about" },
  { label: "योजना", href: "#schemes" },
  { label: "सेवा", href: "#services" },
  { label: "प्रकल्प", href: "#projects" },
  { label: "गॅलरी", href: "#gallery" },
  { label: "संपर्क", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">ग्रा</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-bold text-primary leading-tight text-sm">ग्रामपंचायत</p>
            <p className="text-xs text-muted-foreground leading-tight">Amgaon (Deoli)</p>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="tel:8788443189"
            className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-accent bg-accent/10 px-3 py-1.5 rounded-lg"
          >
            <Phone size={14} />
            आपत्कालीन: 8788443189
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md hover:bg-muted"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden border-t bg-card px-4 pb-4 animate-fade-in-up">
          <ul className="flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="tel:8788443189"
            className="mt-3 flex items-center justify-center gap-1.5 text-sm font-semibold text-accent bg-accent/10 px-3 py-2 rounded-lg md:hidden"
          >
            <Phone size={14} />
            आपत्कालीन: 8788443189
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
