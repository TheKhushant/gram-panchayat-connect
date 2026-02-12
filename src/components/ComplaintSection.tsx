import { useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ComplaintSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", type: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "तक्रार नोंदवली!", description: "आपली तक्रार यशस्वीरित्या नोंदवली गेली आहे." });
    setForm({ name: "", phone: "", type: "", message: "" });
  };

  return (
    <section id="complaint" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="section-title">तक्रार निवारण</h2>
          <p className="section-subtitle">आपली तक्रार ऑनलाइन नोंदवा</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-8 shadow-md space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5 text-card-foreground">नाव *</label>
              <input
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="आपले संपूर्ण नाव"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5 text-card-foreground">फोन नंबर *</label>
              <input
                required
                maxLength={10}
                pattern="[0-9]{10}"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="10 अंकी मोबाइल नंबर"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-card-foreground">तक्रार प्रकार *</label>
            <select
              required
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              <option value="">तक्रार प्रकार निवडा</option>
              <option value="water">पाणी पुरवठा</option>
              <option value="road">रस्ते</option>
              <option value="electricity">वीज</option>
              <option value="sanitation">स्वच्छता</option>
              <option value="other">इतर</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-card-foreground">तक्रार तपशील *</label>
            <textarea
              required
              maxLength={1000}
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              placeholder="आपली तक्रार विस्तृतपणे लिहा..."
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Send size={16} /> तक्रार नोंदवा
          </button>
        </form>
      </div>
    </section>
  );
};

export default ComplaintSection;
