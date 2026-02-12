import { Megaphone } from "lucide-react";

const announcements = [
  "🔔 ग्रामसभा दि. १५ फेब्रुवारी रोजी सकाळी ११ वाजता आयोजित",
  "📋 पाणी कर भरणा शेवटची तारीख: २८ फेब्रुवारी",
  "🌳 वृक्षारोपण मोहीम – सर्व नागरिकांनी सहभागी व्हा",
  "📞 आपत्कालीन संपर्क: 8788443189",
];

const AnnouncementTicker = () => {
  return (
    <div className="bg-primary overflow-hidden">
      <div className="container mx-auto flex items-center">
        <div className="flex-shrink-0 bg-secondary px-4 py-2.5 flex items-center gap-2">
          <Megaphone size={16} className="text-secondary-foreground" />
          <span className="font-bold text-secondary-foreground text-sm">सूचना</span>
        </div>
        <div className="overflow-hidden flex-1">
          <div className="ticker-scroll whitespace-nowrap py-2.5 px-4">
            {announcements.map((a, i) => (
              <span key={i} className="text-primary-foreground text-sm mx-8 inline">
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementTicker;
