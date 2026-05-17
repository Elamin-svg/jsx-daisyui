import { MockupBrowser } from "@registry/components/react/data-display/mockup";

export function MockupBrowserSaas() {
  return (
    <MockupBrowser className="border-base-300 shadow-xl">
      <MockupBrowser.Toolbar url="https://app.acme.io/dashboard" />
      <div className="border-t border-base-300 bg-base-200 p-6 h-56">
        <div className="grid grid-cols-3 gap-4 mb-4">
          {[
            { label: "Revenue",  value: "$48,200", badge: "+24%" },
            { label: "Users",    value: "3,842",   badge: "+12%" },
            { label: "Requests", value: "1.2M",    badge: "+8%"  },
          ].map(({ label, value, badge }) => (
            <div key={label} className="card bg-base-100 shadow-sm">
              <div className="card-body py-3 px-4 gap-1">
                <p className="text-xs text-base-content/40">{label}</p>
                <div className="flex items-end gap-2">
                  <p className="text-xl font-bold">{value}</p>
                  <span className="text-xs text-success mb-0.5">{badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body py-3 px-4">
            <div className="flex gap-1 items-end h-10">
              {[40,65,45,80,55,90,70,95,60,85,75,100,60,80,70].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-primary/30" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MockupBrowser>
  );
}
