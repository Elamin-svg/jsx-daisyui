import { Chat } from "@registry/components/react/data-display/chat";

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
