import { CheckCircle, Clock, IndianRupee } from "lucide-react";

const projects = [
  { title: "ग्रामीण रस्ते बांधकाम", status: "चालू", progress: 65, budget: "₹ 15,00,000" },
  { title: "पाणी पुरवठा योजना", status: "पूर्ण", progress: 100, budget: "₹ 8,50,000" },
  { title: "सौर ऊर्जा पथदिवे", status: "चालू", progress: 40, budget: "₹ 5,00,000" },
  { title: "सामुदायिक भवन", status: "पूर्ण", progress: 100, budget: "₹ 20,00,000" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">विकास प्रकल्प</h2>
          <p className="section-subtitle">गावातील चालू आणि पूर्ण प्रकल्पांची माहिती</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p) => (
            <div key={p.title} className="bg-card rounded-xl p-6 shadow-md card-hover">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-card-foreground">{p.title}</h3>
                <span className={`flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full ${
                  p.status === "पूर्ण"
                    ? "bg-green-100 text-green-700"
                    : "bg-secondary/15 text-secondary"
                }`}>
                  {p.status === "पूर्ण" ? <CheckCircle size={12} /> : <Clock size={12} />}
                  {p.status}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-3 bg-muted rounded-full overflow-hidden mb-3">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${
                    p.progress === 100 ? "bg-green-500" : "bg-accent"
                  }`}
                  style={{ width: `${p.progress}%` }}
                />
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">प्रगती: {p.progress}%</span>
                <span className="flex items-center gap-1 font-semibold text-card-foreground">
                  <IndianRupee size={13} /> {p.budget}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
