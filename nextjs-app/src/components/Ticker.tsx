const ITEMS = [
  { icon: "📱", label: "Cellphone Repair" },
  { icon: "💻", label: "Laptop Repair" },
  { icon: "🖥️", label: "Desktop PC Repair" },
  { icon: "📷", label: "CCTV Installation" },
  { icon: "🔋", label: "Battery Replacement" },
  { icon: "📺", label: "LCD / Screen Replacement" },
  { icon: "⚡", label: "Charging Port Repair" },
  { icon: "💾", label: "SSD & RAM Upgrade" },
  { icon: "🦠", label: "Virus Removal" },
  { icon: "🔒", label: "CCTV Maintenance" },
  { icon: "🖨️", label: "PC Build & Setup" },
  { icon: "🔧", label: "Free Diagnosis" },
];

export default function Ticker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <div className="ticker-item" key={i}>
            <span className="ti-icon">{item.icon}</span> {item.label}
            <span className="ticker-dot"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
