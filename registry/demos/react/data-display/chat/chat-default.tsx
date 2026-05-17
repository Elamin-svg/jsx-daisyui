import { Chat } from "@registry/components/react/data-display/chat";

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
