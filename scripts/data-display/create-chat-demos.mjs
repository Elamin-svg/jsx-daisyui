// scripts/data-display/create-chat-demos.mjs
import fs from "fs";
import path from "path";
const ROOT = process.cwd();
function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf-8");
  console.log(`✓  ${filePath}`);
}

write(
  "registry/demos/react/data-display/chat/chat-default.tsx",
  `import { Chat } from "@registry/components/react/data-display/chat";

export function ChatDefault() {
  return (
    <div className="w-80">
      <Chat placement="start">
        <Chat.Header name="Obi-Wan Kenobi" time="12:45" />
        <Chat.Bubble>You were the Chosen One!</Chat.Bubble>
        <Chat.Footer>Delivered</Chat.Footer>
      </Chat>
      <Chat placement="end">
        <Chat.Header name="Anakin" time="12:46" />
        <Chat.Bubble color="primary">I hate you!</Chat.Bubble>
        <Chat.Footer>Seen</Chat.Footer>
      </Chat>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/data-display/chat/chat-colors.tsx",
  `import { Chat } from "@registry/components/react/data-display/chat";

export function ChatColors() {
  return (
    <div className="w-80 flex flex-col gap-1">
      <Chat placement="start"><Chat.Bubble color="primary">Primary bubble</Chat.Bubble></Chat>
      <Chat placement="end"><Chat.Bubble color="secondary">Secondary bubble</Chat.Bubble></Chat>
      <Chat placement="start"><Chat.Bubble color="accent">Accent bubble</Chat.Bubble></Chat>
      <Chat placement="end"><Chat.Bubble color="info">Info bubble</Chat.Bubble></Chat>
      <Chat placement="start"><Chat.Bubble color="success">Success bubble</Chat.Bubble></Chat>
      <Chat placement="end"><Chat.Bubble color="warning">Warning bubble</Chat.Bubble></Chat>
      <Chat placement="start"><Chat.Bubble color="error">Error bubble</Chat.Bubble></Chat>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/data-display/chat/chat-with-avatar.tsx",
  `import { Chat } from "@registry/components/react/data-display/chat";

export function ChatWithAvatar() {
  return (
    <div className="w-80">
      <Chat placement="start">
        <Chat.Image src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User" />
        <Chat.Header name="Alice" time="2:30 PM" />
        <Chat.Bubble>Hey! How are you doing?</Chat.Bubble>
        <Chat.Footer>Seen at 2:31 PM</Chat.Footer>
      </Chat>
      <Chat placement="end">
        <Chat.Header name="Bob" time="2:31 PM" />
        <Chat.Bubble color="primary">I'm doing great, thanks for asking!</Chat.Bubble>
        <Chat.Footer>Delivered</Chat.Footer>
      </Chat>
    </div>
  );
}
`,
);

console.log("\nDone!");
