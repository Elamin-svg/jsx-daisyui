import { Chat } from "@registry/components/react/data-display/chat";

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
