import { FileCheck, FileX, Home, Wallet, Search } from "lucide-react";

const services = [
  { icon: FileCheck, title: "जन्म प्रमाणपत्र", desc: "जन्म नोंदणी व प्रमाणपत्र मिळवा" },
  { icon: FileX, title: "मृत्यू प्रमाणपत्र", desc: "मृत्यू नोंदणी व प्रमाणपत्र" },
  { icon: Home, title: "निवास प्रमाणपत्र", desc: "रहिवासी प्रमाणपत्र अर्ज" },
  { icon: Wallet, title: "कर भरणा", desc: "पाणी, घरपट्टी कर ऑनलाइन भरा" },
  { icon: Search, title: "अर्ज ट्रॅकिंग", desc: "आपल्या अर्जाची स्थिती तपासा" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">नागरिक सेवा</h2>
          <p className="section-subtitle">ग्रामपंचायतीच्या सेवा ऑनलाइन उपलब्ध</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-xl p-6 shadow-md card-hover group cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <s.icon className="text-accent" size={28} />
              </div>
              <h3 className="font-bold text-card-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
