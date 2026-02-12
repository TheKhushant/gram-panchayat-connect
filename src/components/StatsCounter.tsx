import { useEffect, useState, useRef } from "react";
import { Users, UserCheck, User, MapPin } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  label: string;
  value: number;
  suffix?: string;
}

const stats: StatItem[] = [
  { icon: Users, label: "एकूण लोकसंख्या", value: 1687 },
  { icon: UserCheck, label: "पुरुष संख्या", value: 665 },
  { icon: User, label: "स्त्री संख्या", value: 703 },
  { icon: MapPin, label: "क्षेत्रफळ (हेक्टर)", value: 463.6, suffix: " हे." },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target * 10) / 10);
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const StatCard = ({ icon: Icon, label, value, suffix = "" }: StatItem & { inView: boolean }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(value, 2000, visible);

  return (
    <div ref={ref} className="bg-card rounded-xl p-6 text-center card-hover shadow-md">
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
        <Icon className="text-primary" size={28} />
      </div>
      <p className="text-3xl md:text-4xl font-extrabold text-primary counter-glow mb-1">
        {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}
        {suffix}
      </p>
      <p className="text-muted-foreground font-medium text-sm">{label}</p>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">गावाची आकडेवारी</h2>
          <p className="section-subtitle">Amgaon (Deoli) गावाची सांख्यिकी माहिती</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} inView={false} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
