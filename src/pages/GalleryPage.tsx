import MainLayout from "@/layouts/MainLayout";
import { Camera } from "lucide-react";

const categories = ["सर्व", "ग्रामपंचायत", "अंगणवाडी", "शाळा", "कार्यक्रम", "विकास प्रकल्प"];

const galleryItems = [
  { src: "/placeholder.svg", title: "ग्रामपंचायत कार्यालय", category: "ग्रामपंचायत" },
  { src: "/placeholder.svg", title: "अंगणवाडी केंद्र", category: "अंगणवाडी" },
  { src: "/placeholder.svg", title: "प्राथमिक शाळा", category: "शाळा" },
  { src: "/placeholder.svg", title: "स्वातंत्र्यदिन कार्यक्रम", category: "कार्यक्रम" },
  { src: "/placeholder.svg", title: "रस्ता बांधकाम", category: "विकास प्रकल्प" },
  { src: "/placeholder.svg", title: "ग्रामसभा", category: "ग्रामपंचायत" },
  { src: "/placeholder.svg", title: "वृक्षारोपण", category: "कार्यक्रम" },
  { src: "/placeholder.svg", title: "पाणी पुरवठा योजना", category: "विकास प्रकल्प" },
];

import { useState } from "react";

const GalleryPage = () => {
  const [active, setActive] = useState("सर्व");
  const filtered = active === "सर्व" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <MainLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
              <Camera size={16} />
              फोटो गॅलरी
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">गाव गॅलरी</h1>
            <p className="text-muted-foreground mt-2">आमच्या गावातील विविध उपक्रम आणि सुविधांचे छायाचित्रे</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-card"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-white text-sm font-medium">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default GalleryPage;
