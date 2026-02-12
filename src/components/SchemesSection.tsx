import { Building2, Landmark, Users, Tractor, GraduationCap } from "lucide-react";

const schemes = [
  { icon: Landmark, title: "केंद्र सरकार योजना", desc: "प्रधानमंत्री आवास, उज्ज्वला, किसान सन्मान निधी", count: "१५+" },
  { icon: Building2, title: "राज्य सरकार योजना", desc: "महात्मा फुले, रमाई आवास, शेतकरी योजना", count: "२०+" },
  { icon: Users, title: "महिला योजना", desc: "लाडली बहना, महिला बचत गट, कौशल्य विकास", count: "१०+" },
  { icon: Tractor, title: "शेतकरी योजना", desc: "कृषी उपकरणे, सिंचन, पीक विमा", count: "१२+" },
  { icon: GraduationCap, title: "विद्यार्थी योजना", desc: "शिष्यवृत्ती, मोफत शिक्षण, वसतिगृह", count: "८+" },
];

const SchemesSection = () => {
  return (
    <section id="schemes" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">शासकीय योजना</h2>
          <p className="section-subtitle">नागरिकांसाठी उपलब्ध शासकीय योजनांची माहिती</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {schemes.map((s) => (
            <div key={s.title} className="bg-card rounded-xl p-6 shadow-md card-hover group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/25 transition-colors">
                  <s.icon className="text-secondary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-card-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                  <span className="inline-block text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {s.count} योजना उपलब्ध
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchemesSection;
