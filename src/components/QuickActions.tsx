import { FileText, Users, AlertTriangle, Phone, Landmark, Download } from "lucide-react";

const actions = [
  { icon: Landmark, label: "शासकीय योजना", desc: "केंद्र व राज्य योजना", href: "#schemes", color: "bg-primary/10 text-primary" },
  { icon: Users, label: "नागरिक सेवा", desc: "प्रमाणपत्र व अर्ज", href: "#services", color: "bg-accent/10 text-accent" },
  { icon: AlertTriangle, label: "तक्रार नोंदणी", desc: "ऑनलाइन तक्रार करा", href: "#complaint", color: "bg-destructive/10 text-destructive" },
  { icon: Phone, label: "संपर्क", desc: "ग्रामपंचायत संपर्क", href: "#contact", color: "bg-secondary/10 text-secondary" },
  { icon: FileText, label: "प्रकल्प माहिती", desc: "विकास प्रकल्प", href: "#projects", color: "bg-primary/10 text-primary" },
  { icon: Download, label: "दस्तऐवज डाउनलोड", desc: "PDF डाउनलोड", href: "#documents", color: "bg-accent/10 text-accent" },
];

const QuickActions = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">जलद सेवा</h2>
          <p className="section-subtitle">आपल्याला हव्या असलेल्या सेवा एका क्लिकवर</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {actions.map((a) => (
            <a
              key={a.label}
              href={a.href}
              className="bg-card rounded-xl p-5 text-center card-hover shadow-sm group"
            >
              <div className={`w-14 h-14 rounded-xl ${a.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <a.icon size={26} />
              </div>
              <h3 className="font-bold text-sm text-card-foreground mb-1">{a.label}</h3>
              <p className="text-xs text-muted-foreground">{a.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
