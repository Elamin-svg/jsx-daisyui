import Stack from "@registry/components/react/layout/stack";

const NOTIFICATIONS = [
  { title: "New message",    body: "Alex left a comment on your post.",      time: "2m ago"  },
  { title: "Pull request",   body: "feat/dashboard merged into main.",        time: "14m ago" },
  { title: "Deployment",     body: "Production deploy completed successfully.", time: "1h ago"  },
];

export function StackNotifications() {
  return (
    <Stack className="w-80">
      {NOTIFICATIONS.map(({ title, body, time }) => (
        <div key={title} className="card bg-base-100 shadow-md w-full">
          <div className="card-body py-4 gap-1">
            <div className="flex items-center justify-between">
              <h3 className="card-title text-sm">{title}</h3>
              <span className="text-xs text-base-content/40">{time}</span>
            </div>
            <p className="text-sm text-base-content/60">{body}</p>
          </div>
        </div>
      ))}
    </Stack>
  );
}
