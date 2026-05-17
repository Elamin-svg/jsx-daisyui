import { MockupPhone } from "@registry/components/react/data-display/mockup";

export function MockupPhoneApp() {
  return (
    <MockupPhone>
      <MockupPhone.Camera />
      <MockupPhone.Display className="bg-base-200 flex flex-col">
        {/* Status bar */}
        <div className="bg-base-300 px-5 py-2 flex justify-between text-xs text-base-content/50">
          <span>9:41</span>
          <span>●●●</span>
        </div>
        {/* Header */}
        <div className="px-5 pt-4 pb-2">
          <p className="text-xs text-base-content/40">Good morning</p>
          <p className="font-bold text-lg">Dashboard</p>
        </div>
        {/* Cards */}
        <div className="px-4 flex flex-col gap-3">
          {[
            { label: "Balance",  value: "$4,820", color: "bg-primary text-primary-content"   },
            { label: "Spending", value: "$1,240", color: "bg-secondary text-secondary-content" },
          ].map(({ label, value, color }) => (
            <div key={label} className={`card ${color} shadow-sm`}>
              <div className="card-body py-3 px-4 gap-0">
                <p className="text-xs opacity-70">{label}</p>
                <p className="text-2xl font-extrabold">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </MockupPhone.Display>
    </MockupPhone>
  );
}
