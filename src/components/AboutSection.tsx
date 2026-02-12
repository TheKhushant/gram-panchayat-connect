import { Calendar, MapPin, Building, Flag } from "lucide-react";

const details = [
  { icon: Calendar, label: "स्थापना वर्ष", value: "१९४७" },
  { icon: MapPin, label: "तालुका", value: "हिंगणा" },
  { icon: Building, label: "जिल्हा", value: "नागपूर" },
  { icon: Flag, label: "राज्य", value: "महाराष्ट्र" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">ग्रामपंचायत माहिती</h2>
          <p className="section-subtitle">Amgaon (Deoli) गावाचा इतिहास व माहिती</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-md">
            <h3 className="text-xl font-bold text-primary mb-4">गावाचा इतिहास</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ग्रामपंचायत Amgaon (Deoli) ची स्थापना भारताच्या स्वातंत्र्यप्राप्तीनंतर सन १९४७ मध्ये झाली. हे गाव नागपूर जिल्ह्यातील हिंगणा तालुक्यात वसलेले आहे. गावाचे एकूण क्षेत्रफळ ४६३.६ हेक्टर असून येथील लोकसंख्या १६८७ आहे.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              ग्रामपंचायतीच्या माध्यमातून गावातील नागरिकांना विविध शासकीय सेवा, योजना आणि सुविधा पुरवल्या जातात. गावाचा सर्वांगीण विकास हे ग्रामपंचायतीचे प्रमुख उद्दिष्ट आहे.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {details.map((d) => (
              <div key={d.label} className="bg-card rounded-xl p-5 shadow-md text-center card-hover">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <d.icon className="text-primary" size={22} />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{d.label}</p>
                <p className="text-lg font-bold text-card-foreground">{d.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
