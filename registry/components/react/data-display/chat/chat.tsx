import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const chatVariants = tv({
  slots: {
    root: "chat",
    bubble: "chat-bubble",
    image: "chat-image avatar",
    imageInner: "w-10 rounded-full",
    header: "chat-header",
    footer: "chat-footer opacity-50",
    headerTime: "text-xs opacity-50 ml-1",
  },
  variants: {
    placement: {
      start: { root: "chat-start" },
      end: { root: "chat-end" },
    },
    color: {
      neutral: { bubble: "chat-bubble-neutral" },
      primary: { bubble: "chat-bubble-primary" },
      secondary: { bubble: "chat-bubble-secondary" },
      accent: { bubble: "chat-bubble-accent" },
      info: { bubble: "chat-bubble-info" },
      success: { bubble: "chat-bubble-success" },
      warning: { bubble: "chat-bubble-warning" },
      error: { bubble: "chat-bubble-error" },
    },
  },
  defaultVariants: {
    placement: "start",
  },
});

type ChatVariants = VariantProps<typeof chatVariants>;

export type ChatProps = Omit<React.ComponentProps<"div">, "color"> & ChatVariants;

const Chat = React.forwardRef<HTMLDivElement, ChatProps>(
  ({ placement, className, ...props }, ref) => {
    const { root } = chatVariants({ placement });
    return <div ref={ref} className={root({ className })} {...props} />;
  }
);

Chat.displayName = "Chat";

export type ChatBubbleProps = Omit<React.ComponentProps<"div">, "color"> &
  Pick<ChatVariants, "color">;

const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ color, className, ...props }, ref) => {
    const { bubble } = chatVariants({ color });
    return <div ref={ref} className={bubble({ className })} {...props} />;
  }
);

ChatBubble.displayName = "ChatBubble";

export type ChatImageProps = Omit<React.ComponentProps<"div">, "color"> & {
  src: string;
  alt?: string;
};

const ChatImage = React.forwardRef<HTMLDivElement, ChatImageProps>(
  ({ src, alt = "", className, ...props }, ref) => {
    const { image, imageInner } = chatVariants();
    return (
      <div ref={ref} className={image({ className })} {...props}>
        <div className={imageInner()}>
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
);

ChatImage.displayName = "ChatImage";

export type ChatHeaderProps = Omit<React.ComponentProps<"div">, "color"> & {
  name: string;
  time?: string;
};

const ChatHeader = React.forwardRef<HTMLDivElement, ChatHeaderProps>(
  ({ name, time, className, ...props }, ref) => {
    const { header, headerTime } = chatVariants();
    return (
      <div ref={ref} className={header({ className })} {...props}>
        {name}
        {time && <time className={headerTime()}>{time}</time>}
      </div>
    );
  }
);

ChatHeader.displayName = "ChatHeader";

export type ChatFooterProps = Omit<React.ComponentProps<"div">, "color">;

const ChatFooter = React.forwardRef<HTMLDivElement, ChatFooterProps>(
  ({ className, ...props }, ref) => {
    const { footer } = chatVariants();
    return <div ref={ref} className={footer({ className })} {...props} />;
  }
);

ChatFooter.displayName = "ChatFooter";

const ChatComponent = Object.assign(Chat, {
  Bubble: ChatBubble,
  Image: ChatImage,
  Header: ChatHeader,
  Footer: ChatFooter,
});

export { ChatComponent as Chat };
