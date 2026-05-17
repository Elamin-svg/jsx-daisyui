// AUTO-GENERATED — do not edit by hand.
// Run: node scripts/build-demos.mjs

import React from "react";

export const registry = {
  "accordion-arrow": {
    name: "accordion-arrow",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/accordion/accordion-arrow").then((m) => ({ default: m.AccordionArrow }))
    ),
    source: `import { Accordion } from "@/components/ui/accordion";

export function AccordionArrow() {
  return (
    <Accordion className="w-80">
      <Accordion.Item icon="arrow" defaultOpen>
        <Accordion.Trigger>Click to open</Accordion.Trigger>
        <Accordion.Content>This accordion uses the arrow icon variant.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item icon="arrow">
        <Accordion.Trigger>Another item</Accordion.Trigger>
        <Accordion.Content>Arrow collapses show a chevron that rotates on open.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
`,
  },
  "accordion-default": {
    name: "accordion-default",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/accordion/accordion-default").then((m) => ({ default: m.AccordionDefault }))
    ),
    source: `import { Accordion } from "@/components/ui/accordion";

export function AccordionDefault() {
  return (
    <Accordion className="w-80">
      <Accordion.Item defaultOpen>
        <Accordion.Trigger>What is daisyUI?</Accordion.Trigger>
        <Accordion.Content>
          daisyUI is a component library for Tailwind CSS that adds class names for building UI components.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>How do I install it?</Accordion.Trigger>
        <Accordion.Content>
          Install via npm: <code>npm install daisyui</code> and add it to your Tailwind config.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>Is it free?</Accordion.Trigger>
        <Accordion.Content>
          Yes, daisyUI is free and open-source under the MIT license.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
`,
  },
  "accordion-joined": {
    name: "accordion-joined",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/accordion/accordion-joined").then((m) => ({ default: m.AccordionJoined }))
    ),
    source: `import { Accordion } from "@/components/ui/accordion";

export function AccordionJoined() {
  return (
    <Accordion joined className="w-80">
      <Accordion.Item icon="arrow" joined defaultOpen>
        <Accordion.Trigger>First section</Accordion.Trigger>
        <Accordion.Content>Content for the first section of the joined accordion.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item icon="arrow" joined>
        <Accordion.Trigger>Second section</Accordion.Trigger>
        <Accordion.Content>Content for the second section.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item icon="arrow" joined>
        <Accordion.Trigger>Third section</Accordion.Trigger>
        <Accordion.Content>Content for the third section.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
`,
  },
  "accordion-plus": {
    name: "accordion-plus",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/accordion/accordion-plus").then((m) => ({ default: m.AccordionPlus }))
    ),
    source: `import { Accordion } from "@/components/ui/accordion";

export function AccordionPlus() {
  return (
    <Accordion className="w-80">
      <Accordion.Item icon="plus" defaultOpen>
        <Accordion.Trigger>Click to expand</Accordion.Trigger>
        <Accordion.Content>This accordion uses the plus/minus icon variant.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item icon="plus">
        <Accordion.Trigger>Another item</Accordion.Trigger>
        <Accordion.Content>The plus icon changes to a minus when open.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
`,
  },
  "avatar-default": {
    name: "avatar-default",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/avatar/avatar-default").then((m) => ({ default: m.AvatarDefault }))
    ),
    source: `import { Avatar } from "@/components/ui/avatar";

export function AvatarDefault() {
  return (
    <Avatar
      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      alt="User avatar"
    />
  );
}
`,
  },
  "avatar-group": {
    name: "avatar-group",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/avatar/avatar-group").then((m) => ({ default: m.AvatarGroup }))
    ),
    source: `import { Avatar } from "@/components/ui/avatar";

export function AvatarGroup() {
  return (
    <Avatar.Group>
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" size="sm" ring />
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" size="sm" ring />
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" size="sm" ring />
      <Avatar.Counter count={5} size="sm" />
    </Avatar.Group>
  );
}
`,
  },
  "avatar-placeholder": {
    name: "avatar-placeholder",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/avatar/avatar-placeholder").then((m) => ({ default: m.AvatarPlaceholder }))
    ),
    source: `import { Avatar } from "@/components/ui/avatar";

export function AvatarPlaceholder() {
  return (
    <div className="flex gap-3">
      <Avatar placeholder size="md">
        <Avatar.Placeholder>JD</Avatar.Placeholder>
      </Avatar>
      <Avatar placeholder size="md">
        <Avatar.Placeholder className="text-xl">AB</Avatar.Placeholder>
      </Avatar>
      <Avatar placeholder size="md" status="online">
        <Avatar.Placeholder>XY</Avatar.Placeholder>
      </Avatar>
    </div>
  );
}
`,
  },
  "avatar-shapes": {
    name: "avatar-shapes",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/avatar/avatar-shapes").then((m) => ({ default: m.AvatarShapes }))
    ),
    source: `import { Avatar } from "@/components/ui/avatar";

export function AvatarShapes() {
  return (
    <div className="flex flex-wrap gap-4">
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" shape="circle" />
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" shape="rounded" />
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" shape="square" />
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" shape="squircle" />
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" shape="hexagon" />
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" shape="heart" />
    </div>
  );
}
`,
  },
  "avatar-sizes": {
    name: "avatar-sizes",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/avatar/avatar-sizes").then((m) => ({ default: m.AvatarSizes }))
    ),
    source: `import { Avatar } from "@/components/ui/avatar";

export function AvatarSizes() {
  return (
    <div className="flex items-end gap-3">
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" size="xs" />
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" size="sm" />
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" size="md" />
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" size="lg" />
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" size="xl" />
    </div>
  );
}
`,
  },
  "avatar-status": {
    name: "avatar-status",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/avatar/avatar-status").then((m) => ({ default: m.AvatarStatus }))
    ),
    source: `import { Avatar } from "@/components/ui/avatar";

export function AvatarStatus() {
  return (
    <div className="flex gap-4">
      <Avatar
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        status="online"
      />
      <Avatar
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        status="offline"
      />
    </div>
  );
}
`,
  },
  "badge-colors": {
    name: "badge-colors",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/badge/badge-colors").then((m) => ({ default: m.BadgeColors }))
    ),
    source: `import Badge from "@/components/ui/badge";

export function BadgeColors() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge color="neutral">Neutral</Badge>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="accent">Accent</Badge>
      <Badge color="info">Info</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="error">Error</Badge>
      <Badge color="ghost">Ghost</Badge>
    </div>
  );
}
`,
  },
  "badge-default": {
    name: "badge-default",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/badge/badge-default").then((m) => ({ default: m.BadgeDefault }))
    ),
    source: `import Badge from "@/components/ui/badge";

export function BadgeDefault() {
  return <Badge>Badge</Badge>;
}
`,
  },
  "badge-in-text": {
    name: "badge-in-text",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/badge/badge-in-text").then((m) => ({ default: m.BadgeInText }))
    ),
    source: `import Badge from "@/components/ui/badge";

export function BadgeInText() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-bold">
        Inbox <Badge color="primary" size="sm">4</Badge>
      </h2>
      <p className="text-base-content/70">
        New features <Badge color="success" size="xs">Live</Badge> are now available.
      </p>
    </div>
  );
}
`,
  },
  "badge-sizes": {
    name: "badge-sizes",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/badge/badge-sizes").then((m) => ({ default: m.BadgeSizes }))
    ),
    source: `import Badge from "@/components/ui/badge";

export function BadgeSizes() {
  return (
    <div className="flex items-center gap-2">
      <Badge color="primary" size="xs">XSmall</Badge>
      <Badge color="primary" size="sm">Small</Badge>
      <Badge color="primary" size="md">Medium</Badge>
      <Badge color="primary" size="lg">Large</Badge>
      <Badge color="primary" size="xl">XLarge</Badge>
    </div>
  );
}
`,
  },
  "badge-variants": {
    name: "badge-variants",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/badge/badge-variants").then((m) => ({ default: m.BadgeVariants }))
    ),
    source: `import Badge from "@/components/ui/badge";

export function BadgeVariants() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <Badge color="primary" variant="outline">Outline</Badge>
        <Badge color="secondary" variant="outline">Outline</Badge>
        <Badge color="accent" variant="outline">Outline</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge color="primary" variant="soft">Soft</Badge>
        <Badge color="secondary" variant="soft">Soft</Badge>
        <Badge color="accent" variant="soft">Soft</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge color="primary" variant="dash">Dash</Badge>
        <Badge color="secondary" variant="dash">Dash</Badge>
        <Badge color="accent" variant="dash">Dash</Badge>
      </div>
    </div>
  );
}
`,
  },
  "calendar-default": {
    name: "calendar-default",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/calendar/calendar-default").then((m) => ({ default: m.CalendarDefault }))
    ),
    source: `"use client";
import  Calendar  from "@/components/ui/calendar";
import { useState } from "react";


export function CalendarDefault() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return <Calendar mode="single" selected={date} onSelect={setDate} />;
}
`,
  },
  "card-centered": {
    name: "card-centered",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/card/card-centered").then((m) => ({ default: m.CardCentered }))
    ),
    source: `import { Card } from "@/components/ui/card";
import Button from "@/components/ui/button";

export function CardCentered() {
  return (
    <Card className="w-64 bg-primary text-primary-content">
      <Card.Body centered>
        <Card.Title>Congratulations!</Card.Title>
        <p>You have been selected for a special offer.</p>
        <Card.Actions>
          <Button>Claim now</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}
`,
  },
  "card-default": {
    name: "card-default",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/card/card-default").then((m) => ({ default: m.CardDefault }))
    ),
    source: `import { Card } from "@/components/ui/card";
import Button from "@/components/ui/button";

export function CardDefault() {
  return (
    <Card className="w-72">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <p>A simple card with a title, body text, and action button.</p>
        <Card.Actions>
          <Button color="primary" size="sm">Buy Now</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}
`,
  },
  "card-image": {
    name: "card-image",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/card/card-image").then((m) => ({ default: m.CardImage }))
    ),
    source: `import { Card } from "@/components/ui/card";
import Button from "@/components/ui/button";

export function CardImage() {
  return (
    <Card className="w-72">
      <Card.Figure src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
      <Card.Body>
        <Card.Title>Classic Sneakers</Card.Title>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <Card.Actions>
          <Button color="primary">Buy Now</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}
`,
  },
  "card-side": {
    name: "card-side",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/card/card-side").then((m) => ({ default: m.CardSide }))
    ),
    source: `import { Card } from "@/components/ui/card";
import Button from "@/components/ui/button";

export function CardSide() {
  return (
    <Card side className="max-w-sm">
      <Card.Figure src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="w-32 h-full" />
      <Card.Body>
        <Card.Title>New Arrivals</Card.Title>
        <p>Click the button to listen on Spotiwhy app.</p>
        <Card.Actions>
          <Button color="primary" size="sm">Listen</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}
`,
  },
  "card-variants": {
    name: "card-variants",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/card/card-variants").then((m) => ({ default: m.CardVariants }))
    ),
    source: `import { Card } from "@/components/ui/card";

export function CardVariants() {
  return (
    <div className="flex flex-wrap gap-4">
      <Card variant="shadow" className="w-48">
        <Card.Body><Card.Title>Shadow</Card.Title><p>Default shadow card.</p></Card.Body>
      </Card>
      <Card variant="border" className="w-48">
        <Card.Body><Card.Title>Border</Card.Title><p>Bordered card variant.</p></Card.Body>
      </Card>
      <Card variant="dash" className="w-48">
        <Card.Body><Card.Title>Dash</Card.Title><p>Dashed border card.</p></Card.Body>
      </Card>
    </div>
  );
}
`,
  },
  "carousel-default": {
    name: "carousel-default",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/carousel/carousel-default").then((m) => ({ default: m.CarouselDefault }))
    ),
    source: `import { Carousel } from "@/components/ui/carousel";

export function CarouselDefault() {
  return (
    <Carousel className="rounded-box w-64">
      <Carousel.Item id="item1" full>
        <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" className="w-full" alt="Slide 1" />
      </Carousel.Item>
      <Carousel.Item id="item2" full>
        <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" className="w-full" alt="Slide 2" />
      </Carousel.Item>
      <Carousel.Item id="item3" full>
        <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" className="w-full" alt="Slide 3" />
      </Carousel.Item>
    </Carousel>
  );
}
`,
  },
  "carousel-indicators": {
    name: "carousel-indicators",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/carousel/carousel-indicators").then((m) => ({ default: m.CarouselIndicators }))
    ),
    source: `import { Carousel } from "@/components/ui/carousel";

export function CarouselIndicators() {
  return (
    <div className="flex flex-col gap-2">
      <Carousel className="rounded-box w-64" snap="center">
        <Carousel.Item id="slide1" full>
          <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" className="w-full" alt="Slide 1" />
        </Carousel.Item>
        <Carousel.Item id="slide2" full>
          <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" className="w-full" alt="Slide 2" />
        </Carousel.Item>
        <Carousel.Item id="slide3" full>
          <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" className="w-full" alt="Slide 3" />
        </Carousel.Item>
      </Carousel>
      <Carousel.Indicators count={3} prefix="slide" />
    </div>
  );
}
`,
  },
  "carousel-multi": {
    name: "carousel-multi",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/carousel/carousel-multi").then((m) => ({ default: m.CarouselMulti }))
    ),
    source: `import { Carousel } from "@/components/ui/carousel";

export function CarouselMulti() {
  return (
    <Carousel className="rounded-box w-64 gap-2">
      {["photo-1559703248-dcaaec9fab78", "photo-1565098772267-60af42b81ef2", "photo-1572635148818-ef6fd45eb394", "photo-1559703248-dcaaec9fab78"].map((p, i) => (
        <Carousel.Item key={i} className="w-1/2">
          <img src={\`https://img.daisyui.com/images/stock/\${p}.webp\`} className="w-full rounded-box" alt={\`Slide \${i + 1}\`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
`,
  },
  "chat-colors": {
    name: "chat-colors",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/chat/chat-colors").then((m) => ({ default: m.ChatColors }))
    ),
    source: `import { Chat } from "@/components/ui/chat";

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
  },
  "chat-default": {
    name: "chat-default",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/chat/chat-default").then((m) => ({ default: m.ChatDefault }))
    ),
    source: `import { Chat } from "@/components/ui/chat";

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
  },
  "chat-with-avatar": {
    name: "chat-with-avatar",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/chat/chat-with-avatar").then((m) => ({ default: m.ChatWithAvatar }))
    ),
    source: `import { Chat } from "@/components/ui/chat";

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
  },
  "collapse-arrow": {
    name: "collapse-arrow",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/collapse/collapse-arrow").then((m) => ({ default: m.CollapseArrow }))
    ),
    source: `import { Collapse } from "@/components/ui/collapse";

export function CollapseArrow() {
  return (
    <Collapse icon="arrow" className="w-80">
      <Collapse.Title>Arrow collapse</Collapse.Title>
      <Collapse.Content>The chevron rotates when expanded.</Collapse.Content>
    </Collapse>
  );
}
`,
  },
  "collapse-checkbox": {
    name: "collapse-checkbox",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/collapse/collapse-checkbox").then((m) => ({ default: m.CollapseCheckbox }))
    ),
    source: `import { Collapse } from "@/components/ui/collapse";

export function CollapseCheckbox() {
  return (
    <Collapse icon="arrow" method="checkbox" className="w-80">
      <Collapse.Title>Checkbox collapse</Collapse.Title>
      <Collapse.Content>
        Uses a hidden checkbox for state — stays open even when you click away.
      </Collapse.Content>
    </Collapse>
  );
}
`,
  },
  "collapse-default": {
    name: "collapse-default",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/collapse/collapse-default").then((m) => ({ default: m.CollapseDefault }))
    ),
    source: `import { Collapse } from "@/components/ui/collapse";

export function CollapseDefault() {
  return (
    <Collapse className="w-80">
      <Collapse.Title>Click to open/close</Collapse.Title>
      <Collapse.Content>
        This collapse uses the focus method — click outside to close it.
      </Collapse.Content>
    </Collapse>
  );
}
`,
  },
  "collapse-details": {
    name: "collapse-details",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/collapse/collapse-details").then((m) => ({ default: m.CollapseDetails }))
    ),
    source: `import { Collapse } from "@/components/ui/collapse";

export function CollapseDetails() {
  return (
    <Collapse icon="arrow" method="details" className="w-80">
      <Collapse.Summary>Details/summary collapse</Collapse.Summary>
      <Collapse.Content>
        Renders as a native &lt;details&gt; element — works without JavaScript.
      </Collapse.Content>
    </Collapse>
  );
}
`,
  },
  "collapse-plus": {
    name: "collapse-plus",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/collapse/collapse-plus").then((m) => ({ default: m.CollapsePlus }))
    ),
    source: `import { Collapse } from "@/components/ui/collapse";

export function CollapsePlus() {
  return (
    <Collapse icon="plus" className="w-80">
      <Collapse.Title>Plus/minus collapse</Collapse.Title>
      <Collapse.Content>The icon changes between + and − on toggle.</Collapse.Content>
    </Collapse>
  );
}
`,
  },
  "countdown-clock": {
    name: "countdown-clock",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/countdown/countdown-clock").then((m) => ({ default: m.CountdownClock }))
    ),
    source: `"use client";

import { Countdown, useCountdownTimer } from "@/components/ui/countdown";

export function CountdownClock() {
  const { hours, minutes, seconds } = useCountdownTimer(1 * 3600 + 30 * 60);
  return <Countdown.Clock hours={hours} minutes={minutes} seconds={seconds} colons size="text-4xl" />;
}
`,
  },
  "countdown-ecommerce": {
    name: "countdown-ecommerce",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/countdown/countdown-ecommerce").then((m) => ({ default: m.CountdownEcommerce }))
    ),
    source: `"use client";

import { Countdown, useCountdownTimer } from "@/components/ui/countdown";
import Button from "@/components/ui/button";

export function CountdownEcommerce() {
  const { hours, minutes, seconds } = useCountdownTimer(2 * 3600);
  return (
    <div className="card bg-base-100 shadow-md w-72 border border-base-200">
      <div className="relative">
        <div className="bg-base-200 h-40 rounded-t-box flex items-center justify-center text-4xl">
          👟
        </div>
        <span className="badge badge-error absolute top-3 left-3 font-semibold">−40%</span>
      </div>
      <div className="card-body gap-2 p-4">
        <h2 className="card-title text-base">Air Max Sneaker</h2>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold">€59.99</span>
          <span className="text-sm line-through text-base-content/40">€99.99</span>
        </div>
        <div className="bg-error/10 rounded-box px-3 py-2 flex items-center justify-between mt-1">
          <span className="text-xs text-error font-medium">Deal ends in</span>
          <Countdown className="font-mono text-error text-lg font-semibold">
            <Countdown.Value value={hours} digits={2} />h&nbsp;
            <Countdown.Value value={minutes} digits={2} />m&nbsp;
            <Countdown.Value value={seconds} digits={2} />s
          </Countdown>
        </div>
        <Button color="error" size="sm" className="mt-1 w-full">Add to cart</Button>
      </div>
    </div>
  );
}
`,
  },
  "countdown-simple": {
    name: "countdown-simple",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/countdown/countdown-simple").then((m) => ({ default: m.CountdownSimple }))
    ),
    source: `"use client";

import { Countdown, useCountdown } from "@/components/ui/countdown";

export function CountdownSimple() {
  const seconds = useCountdown(59);
  return (
    <Countdown className="font-mono text-6xl">
      <Countdown.Value value={seconds} />
    </Countdown>
  );
}
`,
  },
  "countdown-timer-boxed": {
    name: "countdown-timer-boxed",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/countdown/countdown-timer-boxed").then((m) => ({ default: m.CountdownTimerBoxed }))
    ),
    source: `"use client";

import { Countdown, useCountdownTimer } from "@/components/ui/countdown";

export function CountdownTimerBoxed() {
  const { days, hours, minutes, seconds } = useCountdownTimer(3 * 86400 + 12 * 3600 + 45 * 60);
  return <Countdown.Timer days={days} hours={hours} minutes={minutes} seconds={seconds} boxed size="text-5xl" />;
}
`,
  },
  "countdown-timer": {
    name: "countdown-timer",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/countdown/countdown-timer").then((m) => ({ default: m.CountdownTimer }))
    ),
    source: `"use client";

import { Countdown, useCountdownTimer } from "@/components/ui/countdown";

export function CountdownTimer() {
  const { days, hours, minutes, seconds } = useCountdownTimer(3 * 86400 + 12 * 3600 + 45 * 60);
  return <Countdown.Timer days={days} hours={hours} minutes={minutes} seconds={seconds} size="text-5xl" />;
}
`,
  },
  "diff-default": {
    name: "diff-default",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/diff/diff-default").then((m) => ({ default: m.DiffDefault }))
    ),
    source: `import { Diff } from "@/components/ui/diff";

export function DiffDefault() {
  return (
    <Diff className="w-full max-w-sm">
      <Diff.Item1>
        <img alt="Before" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
      </Diff.Item1>
      <Diff.Item2>
        <img alt="After" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-bw.webp" />
      </Diff.Item2>
      <Diff.Resizer />
    </Diff>
  );
}
`,
  },
  "diff-text": {
    name: "diff-text",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/diff/diff-text").then((m) => ({ default: m.DiffText }))
    ),
    source: `import { Diff } from "@/components/ui/diff";

export function DiffText() {
  return (
    <Diff aspect="1/1" className="w-64">
      <Diff.Item1 className="bg-base-200 text-base-content grid place-content-center text-3xl font-black">
        daisyUI
      </Diff.Item1>
      <Diff.Item2 className="bg-primary text-primary-content grid place-content-center text-3xl font-black">
        daisyUI
      </Diff.Item2>
      <Diff.Resizer />
    </Diff>
  );
}
`,
  },
  "kbd-combinations": {
    name: "kbd-combinations",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/kbd/kbd-combinations").then((m) => ({ default: m.KbdCombinations }))
    ),
    source: `import Kbd from "@/components/ui/kbd";

export function KbdCombinations() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-1">
        <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>
      </div>
      <div className="flex items-center gap-1">
        <Kbd>⌘</Kbd> + <Kbd>K</Kbd>
      </div>
      <div className="flex items-center gap-1">
        <Kbd>Alt</Kbd> + <Kbd>F4</Kbd>
      </div>
    </div>
  );
}
`,
  },
  "kbd-default": {
    name: "kbd-default",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/kbd/kbd-default").then((m) => ({ default: m.KbdDefault }))
    ),
    source: `import Kbd from "@/components/ui/kbd";

export function KbdDefault() {
  return <Kbd>K</Kbd>;
}
`,
  },
  "kbd-in-text": {
    name: "kbd-in-text",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/kbd/kbd-in-text").then((m) => ({ default: m.KbdInText }))
    ),
    source: `import Kbd from "@/components/ui/kbd";

export function KbdInText() {
  return (
    <p className="text-base-content">
      Press <Kbd size="sm">Ctrl</Kbd> + <Kbd size="sm">S</Kbd> to save, or{" "}
      <Kbd size="sm">⌘</Kbd> + <Kbd size="sm">Z</Kbd> to undo.
    </p>
  );
}
`,
  },
  "kbd-sizes": {
    name: "kbd-sizes",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/kbd/kbd-sizes").then((m) => ({ default: m.KbdSizes }))
    ),
    source: `import Kbd from "@/components/ui/kbd";

export function KbdSizes() {
  return (
    <div className="flex items-center gap-2">
      <Kbd size="xs">Ctrl</Kbd>
      <Kbd size="sm">Ctrl</Kbd>
      <Kbd size="md">Ctrl</Kbd>
      <Kbd size="lg">Ctrl</Kbd>
      <Kbd size="xl">Ctrl</Kbd>
    </div>
  );
}
`,
  },
  "list-default": {
    name: "list-default",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/list/list-default").then((m) => ({ default: m.ListDefault }))
    ),
    source: `import { List } from "@/components/ui/list";

export function ListDefault() {
  return (
    <List className="w-72">
      <List.Row>
        <List.ColGrow>
          <p className="font-semibold">Inbox</p>
          <p className="text-xs text-base-content/60">3 new messages</p>
        </List.ColGrow>
        <span className="badge badge-primary badge-sm">3</span>
      </List.Row>
      <List.Row>
        <List.ColGrow>
          <p className="font-semibold">Drafts</p>
          <p className="text-xs text-base-content/60">1 unsaved draft</p>
        </List.ColGrow>
        <span className="badge badge-ghost badge-sm">1</span>
      </List.Row>
      <List.Row>
        <List.ColGrow>
          <p className="font-semibold">Sent</p>
          <p className="text-xs text-base-content/60">12 messages</p>
        </List.ColGrow>
      </List.Row>
    </List>
  );
}
`,
  },
  "list-labeled": {
    name: "list-labeled",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/list/list-labeled").then((m) => ({ default: m.ListLabeled }))
    ),
    source: `import { List } from "@/components/ui/list";

export function ListLabeled() {
  return (
    <List className="w-72">
      <List.Label>Recent</List.Label>
      <List.Row>
        <List.ColGrow>
          <p className="font-semibold">Project Alpha</p>
          <p className="text-xs text-base-content/60">Updated 2 minutes ago</p>
        </List.ColGrow>
      </List.Row>
      <List.Row>
        <List.ColGrow>
          <p className="font-semibold">Project Beta</p>
          <p className="text-xs text-base-content/60">Updated 1 hour ago</p>
        </List.ColGrow>
      </List.Row>
      <List.Label>Older</List.Label>
      <List.Row>
        <List.ColGrow>
          <p className="font-semibold">Project Gamma</p>
          <p className="text-xs text-base-content/60">Updated 3 days ago</p>
        </List.ColGrow>
      </List.Row>
    </List>
  );
}
`,
  },
  "list-with-avatar": {
    name: "list-with-avatar",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/list/list-with-avatar").then((m) => ({ default: m.ListWithAvatar }))
    ),
    source: `import { List } from "@/components/ui/list";
import Button from "@/components/ui/button";

export function ListWithAvatar() {
  const users = [
    { name: "Alice Johnson", role: "Admin", initials: "AJ" },
    { name: "Bob Martinez", role: "Editor", initials: "BM" },
    { name: "Carol White", role: "Viewer", initials: "CW" },
  ];

  return (
    <List className="w-72">
      {users.map((u) => (
        <List.Row key={u.name}>
          <div className="avatar avatar-placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-10">
              <span className="text-xs">{u.initials}</span>
            </div>
          </div>
          <List.ColGrow>
            <p className="font-semibold">{u.name}</p>
            <p className="text-xs text-base-content/60">{u.role}</p>
          </List.ColGrow>
          <Button variant="ghost" size="xs">···</Button>
        </List.Row>
      ))}
    </List>
  );
}
`,
  },
  "mask-all-shapes": {
    name: "mask-all-shapes",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/mask/mask-all-shapes").then((m) => ({ default: m.MaskAllShapes }))
    ),
    source: `import  Mask, {type MaskShape } from "@/components/ui/mask";

const SHAPES: { shape: MaskShape; label: string }[] = [
  { shape: "squircle",    label: "Squircle"    },
  { shape: "heart",       label: "Heart"       },
  { shape: "hexagon",     label: "Hexagon"     },
  { shape: "hexagon-2",   label: "Hexagon 2"   },
  { shape: "decagon",     label: "Decagon"     },
  { shape: "pentagon",    label: "Pentagon"    },
  { shape: "diamond",     label: "Diamond"     },
  { shape: "square",      label: "Square"      },
  { shape: "circle",      label: "Circle"      },
  { shape: "star",        label: "Star"        },
  { shape: "star-2",      label: "Star 2"      },
  { shape: "triangle",    label: "Triangle ↑"  },
  { shape: "triangle-2",  label: "Triangle ↓"  },
  { shape: "triangle-3",  label: "Triangle ←"  },
  { shape: "triangle-4",  label: "Triangle →"  },
];

export function MaskAllShapes() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {SHAPES.map(({ shape, label }) => (
        <div key={shape} className="flex flex-col items-center gap-2">
          <Mask
            shape={shape}
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
            alt={label}
            className="w-16 h-16"
          />
          <span className="text-xs text-base-content/50">{label}</span>
        </div>
      ))}
    </div>
  );
}
`,
  },
  "mask-avatar-stack": {
    name: "mask-avatar-stack",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/mask/mask-avatar-stack").then((m) => ({ default: m.MaskAvatarStack }))
    ),
    source: `import Mask from "@/components/ui/mask";

const AVATARS = [
  "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp",
  "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
  "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
];

export function MaskAvatarStack() {
  return (
    <div className="flex flex-col gap-6 items-center">
      {/* Circle stack */}
      <div className="flex -space-x-4">
        {AVATARS.map((src, i) => (
          <Mask
            key={i}
            shape="circle"
            src={src}
            alt={\`Avatar \${i + 1}\`}
            className="w-12 h-12 border-2 border-base-100"
          />
        ))}
      </div>
      {/* Hexagon stack */}
      <div className="flex -space-x-3">
        {AVATARS.map((src, i) => (
          <Mask
            key={i}
            shape="hexagon"
            src={src}
            alt={\`Avatar \${i + 1}\`}
            className="w-12 h-12"
          />
        ))}
      </div>
      {/* Squircle stack */}
      <div className="flex -space-x-3">
        {AVATARS.map((src, i) => (
          <Mask
            key={i}
            shape="squircle"
            src={src}
            alt={\`Avatar \${i + 1}\`}
            className="w-12 h-12"
          />
        ))}
      </div>
    </div>
  );
}
`,
  },
  "mask-half": {
    name: "mask-half",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/mask/mask-half").then((m) => ({ default: m.MaskHalf }))
    ),
    source: `import Mask from "@/components/ui/mask";

export function MaskHalf() {
  return (
    <div className="flex items-center gap-1">
      <Mask shape="star-2" half="1" src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" alt="half star 1" className="w-16 h-16 bg-yellow-400" />
      <Mask shape="star-2" half="2" src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" alt="half star 2" className="w-16 h-16 bg-yellow-400" />
    </div>
  );
}
`,
  },
  "mask-team": {
    name: "mask-team",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/mask/mask-team").then((m) => ({ default: m.MaskTeam }))
    ),
    source: `import Mask from "@/components/ui/mask";

const TEAM = [
  { name: "Sarah K.",  role: "CEO",             src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
  { name: "Marcus L.", role: "CTO",             src: "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" },
  { name: "Priya M.",  role: "Head of Design",  src: "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp" },
  { name: "Tom R.",    role: "Lead Engineer",   src: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" },
];

export function MaskTeam() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
      {TEAM.map(({ name, role, src }) => (
        <div key={name} className="flex flex-col items-center gap-3">
          <Mask
            shape="squircle"
            src={src}
            alt={name}
            className="w-20 h-20"
          />
          <div className="text-center">
            <p className="font-semibold text-sm">{name}</p>
            <p className="text-xs text-base-content/50">{role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
`,
  },
  "mockup-browser-colored": {
    name: "mockup-browser-colored",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/mockup/mockup-browser-colored").then((m) => ({ default: m.MockupBrowserColored }))
    ),
    source: `import { MockupBrowser } from "@/components/ui/mockup";

export function MockupBrowserColored() {
  return (
    <MockupBrowser className="bg-base-200 border-base-300">
      <MockupBrowser.Toolbar url="https://example.com" />
      <div className="grid place-content-center h-52 text-base-content/40 text-sm">
        Page content goes here
      </div>
    </MockupBrowser>
  );
}
`,
  },
  "mockup-browser-default": {
    name: "mockup-browser-default",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/mockup/mockup-browser-default").then((m) => ({ default: m.MockupBrowserDefault }))
    ),
    source: `import { MockupBrowser } from "@/components/ui/mockup";

export function MockupBrowserDefault() {
  return (
    <MockupBrowser>
      <MockupBrowser.Toolbar url="https://example.com" />
      <div className="grid place-content-center border-t border-base-300 h-52 text-base-content/40 text-sm">
        Page content goes here
      </div>
    </MockupBrowser>
  );
}
`,
  },
  "mockup-browser-saas": {
    name: "mockup-browser-saas",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/mockup/mockup-browser-saas").then((m) => ({ default: m.MockupBrowserSaas }))
    ),
    source: `import { MockupBrowser } from "@/components/ui/mockup";

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
                <div key={i} className="flex-1 rounded-sm bg-primary/30" style={{ height: \`\${h}%\` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MockupBrowser>
  );
}
`,
  },
  "mockup-code-colored": {
    name: "mockup-code-colored",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/mockup/mockup-code-colored").then((m) => ({ default: m.MockupCodeColored }))
    ),
    source: `import { MockupCode } from "@/components/ui/mockup";

export function MockupCodeColored() {
  return (
    <MockupCode className="bg-primary text-primary-content">
      <MockupCode.Line prefix="$">npx create-next-app@latest</MockupCode.Line>
      <MockupCode.Line prefix=">" className="opacity-70">scaffolding project...</MockupCode.Line>
      <MockupCode.Line prefix=">" className="opacity-70">Done! Run: npm run dev</MockupCode.Line>
    </MockupCode>
  );
}
`,
  },
  "mockup-code-default": {
    name: "mockup-code-default",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/mockup/mockup-code-default").then((m) => ({ default: m.MockupCodeDefault }))
    ),
    source: `import { MockupCode } from "@/components/ui/mockup";

export function MockupCodeDefault() {
  return (
    <MockupCode>
      <MockupCode.Line prefix="$">npm install daisyui</MockupCode.Line>
    </MockupCode>
  );
}
`,
  },
  "mockup-code-highlight": {
    name: "mockup-code-highlight",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/mockup/mockup-code-highlight").then((m) => ({ default: m.MockupCodeHighlight }))
    ),
    source: `import { MockupCode } from "@/components/ui/mockup";

export function MockupCodeHighlight() {
  return (
    <MockupCode>
      <MockupCode.Line prefix="1">import daisyui from "daisyui"</MockupCode.Line>
      <MockupCode.Line prefix="2">{"  "}</MockupCode.Line>
      <MockupCode.Line prefix="3" className="bg-warning text-warning-content">
        plugins: [daisyui], // ← add this
      </MockupCode.Line>
      <MockupCode.Line prefix="4">{"  "}</MockupCode.Line>
      <MockupCode.Line prefix="5">export default config</MockupCode.Line>
    </MockupCode>
  );
}
`,
  },
  "mockup-code-multiline": {
    name: "mockup-code-multiline",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/mockup/mockup-code-multiline").then((m) => ({ default: m.MockupCodeMultiline }))
    ),
    source: `import { MockupCode } from "@/components/ui/mockup";

export function MockupCodeMultiline() {
  return (
    <MockupCode>
      <MockupCode.Line prefix="$">npm install daisyui</MockupCode.Line>
      <MockupCode.Line prefix=">" className="text-warning">installing...</MockupCode.Line>
      <MockupCode.Line prefix=">" className="text-success">Done!</MockupCode.Line>
    </MockupCode>
  );
}
`,
  },
  "mockup-phone-app": {
    name: "mockup-phone-app",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/mockup/mockup-phone-app").then((m) => ({ default: m.MockupPhoneApp }))
    ),
    source: `import { MockupPhone } from "@/components/ui/mockup";

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
            <div key={label} className={\`card \${color} shadow-sm\`}>
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
`,
  },
  "mockup-phone-default": {
    name: "mockup-phone-default",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/mockup/mockup-phone-default").then((m) => ({ default: m.MockupPhoneDefault }))
    ),
    source: `import { MockupPhone } from "@/components/ui/mockup";

export function MockupPhoneDefault() {
  return (
    <MockupPhone>
      <MockupPhone.Camera />
      <MockupPhone.Display className="bg-neutral-900 text-white grid place-content-center text-sm">
        It&apos;s Glowtime.
      </MockupPhone.Display>
    </MockupPhone>
  );
}
`,
  },
  "mockup-window-colored": {
    name: "mockup-window-colored",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/mockup/mockup-window-colored").then((m) => ({ default: m.MockupWindowColored }))
    ),
    source: `import { MockupWindow } from "@/components/ui/mockup";

export function MockupWindowColored() {
  return (
    <MockupWindow className="bg-base-200 border-base-300">
      <div className="grid place-content-center h-52 text-base-content/40 text-sm">
        Window content goes here
      </div>
    </MockupWindow>
  );
}
`,
  },
  "mockup-window-default": {
    name: "mockup-window-default",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/mockup/mockup-window-default").then((m) => ({ default: m.MockupWindowDefault }))
    ),
    source: `import { MockupWindow } from "@/components/ui/mockup";

export function MockupWindowDefault() {
  return (
    <MockupWindow>
      <div className="grid place-content-center border-t border-base-300 h-52 text-base-content/40 text-sm">
        Window content goes here
      </div>
    </MockupWindow>
  );
}
`,
  },
  "stat-centered": {
    name: "stat-centered",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/stat/stat-centered").then((m) => ({ default: m.StatCentered }))
    ),
    source: `import { Stat } from "@/components/ui/stat";

export function StatCentered() {
  return (
    <Stat direction="vertical">
      <Stat.Item centered>
        <Stat.Title>Total Likes</Stat.Title>
        <Stat.Value>25.6K</Stat.Value>
        <Stat.Desc>↗︎ 2.3K (9%)</Stat.Desc>
      </Stat.Item>
      <Stat.Item centered>
        <Stat.Title>Page Views</Stat.Title>
        <Stat.Value>2.6M</Stat.Value>
        <Stat.Desc>↘︎ 90 (14%)</Stat.Desc>
      </Stat.Item>
    </Stat>
  );
}
`,
  },
  "stat-default": {
    name: "stat-default",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/stat/stat-default").then((m) => ({ default: m.StatDefault }))
    ),
    source: `import { Stat } from "@/components/ui/stat";

export function StatDefault() {
  return (
    <Stat>
      <Stat.Item>
        <Stat.Title>Total Page Views</Stat.Title>
        <Stat.Value>89,400</Stat.Value>
        <Stat.Desc>21% more than last month</Stat.Desc>
      </Stat.Item>
      <Stat.Item>
        <Stat.Title>New Users</Stat.Title>
        <Stat.Value>4,200</Stat.Value>
        <Stat.Desc>↗︎ 400 (22%)</Stat.Desc>
      </Stat.Item>
      <Stat.Item>
        <Stat.Title>Revenue</Stat.Title>
        <Stat.Value>$12,600</Stat.Value>
        <Stat.Desc>↘︎ 90 (14%)</Stat.Desc>
      </Stat.Item>
    </Stat>
  );
}
`,
  },
  "stat-vertical": {
    name: "stat-vertical",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/stat/stat-vertical").then((m) => ({ default: m.StatVertical }))
    ),
    source: `import { Stat } from "@/components/ui/stat";

export function StatVertical() {
  return (
    <Stat direction="vertical">
      <Stat.Item>
        <Stat.Title>Downloads</Stat.Title>
        <Stat.Value>31K</Stat.Value>
        <Stat.Desc>Jan 1st - Feb 1st</Stat.Desc>
      </Stat.Item>
      <Stat.Item>
        <Stat.Title>New Registers</Stat.Title>
        <Stat.Value>4,200</Stat.Value>
        <Stat.Desc>↗︎ 400 (22%)</Stat.Desc>
      </Stat.Item>
    </Stat>
  );
}
`,
  },
  "stat-with-figure": {
    name: "stat-with-figure",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/stat/stat-with-figure").then((m) => ({ default: m.StatWithFigure }))
    ),
    source: `import { Stat } from "@/components/ui/stat";

export function StatWithFigure() {
  return (
    <Stat>
      <Stat.Item>
        <Stat.Figure className="text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </Stat.Figure>
        <Stat.Title>Downloads</Stat.Title>
        <Stat.Value className="text-secondary">31K</Stat.Value>
        <Stat.Desc>Jan 1st - Feb 1st</Stat.Desc>
      </Stat.Item>
      <Stat.Item>
        <Stat.Figure className="text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </Stat.Figure>
        <Stat.Title>New Users</Stat.Title>
        <Stat.Value className="text-primary">4,200</Stat.Value>
        <Stat.Desc>↗︎ 400 (22%)</Stat.Desc>
      </Stat.Item>
    </Stat>
  );
}
`,
  },
  "table-bordered": {
    name: "table-bordered",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/table/table-bordered").then((m) => ({ default: m.TableBordered }))
    ),
    source: `import Table from "@/components/ui/table";

export function TableBordered() {
  return (
    <Table bordered>
      <thead>
        <tr><th>Product</th><th>Price</th><th>Stock</th></tr>
      </thead>
      <tbody>
        <tr><td>Widget A</td><td>$9.99</td><td>In stock</td></tr>
        <tr><td>Widget B</td><td>$14.99</td><td>Low stock</td></tr>
        <tr><td>Widget C</td><td>$4.99</td><td>Out of stock</td></tr>
      </tbody>
    </Table>
  );
}
`,
  },
  "table-default": {
    name: "table-default",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/table/table-default").then((m) => ({ default: m.TableDefault }))
    ),
    source: `import Table from "@/components/ui/table";

export function TableDefault() {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Role</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Alice Johnson</td><td>Admin</td><td><span className="badge badge-success badge-sm">Active</span></td></tr>
        <tr><td>2</td><td>Bob Martinez</td><td>Editor</td><td><span className="badge badge-success badge-sm">Active</span></td></tr>
        <tr><td>3</td><td>Carol White</td><td>Viewer</td><td><span className="badge badge-ghost badge-sm">Inactive</span></td></tr>
      </tbody>
    </Table>
  );
}
`,
  },
  "table-sizes": {
    name: "table-sizes",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/table/table-sizes").then((m) => ({ default: m.TableSizes }))
    ),
    source: `import Table from "@/components/ui/table";

const rows = [
  { name: "Alice", role: "Admin" },
  { name: "Bob", role: "Editor" },
];

export function TableSizes() {
  return (
    <div className="flex flex-col gap-4">
      {(["xs", "sm", "md", "lg"] as const).map((size) => (
        <div key={size}>
          <p className="text-xs text-base-content/60 mb-1 uppercase">{size}</p>
          <Table size={size}>
            <thead><tr><th>Name</th><th>Role</th></tr></thead>
            <tbody>{rows.map((r) => <tr key={r.name}><td>{r.name}</td><td>{r.role}</td></tr>)}</tbody>
          </Table>
        </div>
      ))}
    </div>
  );
}
`,
  },
  "table-zebra": {
    name: "table-zebra",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/table/table-zebra").then((m) => ({ default: m.TableZebra }))
    ),
    source: `import Table from "@/components/ui/table";

export function TableZebra() {
  return (
    <Table zebra>
      <thead>
        <tr><th>Name</th><th>Job</th><th>Favourite Color</th></tr>
      </thead>
      <tbody>
        <tr><td>Cy Ganderton</td><td>Quality Control</td><td>Blue</td></tr>
        <tr><td>Hart Hagerty</td><td>Desktop Support</td><td>Purple</td></tr>
        <tr><td>Brice Swyre</td><td>Tax Accountant</td><td>Red</td></tr>
        <tr><td>Marjy Ferencz</td><td>Office Assistant</td><td>Crimson</td></tr>
      </tbody>
    </Table>
  );
}
`,
  },
  "timeline-both-sides": {
    name: "timeline-both-sides",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/timeline/timeline-both-sides").then((m) => ({ default: m.TimelineBothSides }))
    ),
    source: `import { Timeline } from "@/components/ui/timeline";

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
  </svg>
);

export function TimelineBothSides() {
  return (
    <Timeline snapIcon>
      <Timeline.Item first>
        <Timeline.Start box>Plan</Timeline.Start>
        <Timeline.Middle className="text-primary"><CheckIcon /></Timeline.Middle>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Start box>Design</Timeline.Start>
        <Timeline.Middle className="text-primary"><CheckIcon /></Timeline.Middle>
        <Timeline.End box>Research</Timeline.End>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Middle className="text-primary"><CheckIcon /></Timeline.Middle>
        <Timeline.End box>Build</Timeline.End>
      </Timeline.Item>
      <Timeline.Item last>
        <Timeline.Middle><CheckIcon /></Timeline.Middle>
        <Timeline.End box>Launch</Timeline.End>
      </Timeline.Item>
    </Timeline>
  );
}
`,
  },
  "timeline-colored": {
    name: "timeline-colored",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/timeline/timeline-colored").then((m) => ({ default: m.TimelineColored }))
    ),
    source: `import { Timeline } from "@/components/ui/timeline";

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
  </svg>
);

export function TimelineColored() {
  const steps = [
    { label: "Order placed", color: "bg-primary", textColor: "text-primary" },
    { label: "Processing", color: "bg-secondary", textColor: "text-secondary" },
    { label: "Shipped", color: "bg-accent", textColor: "text-accent" },
    { label: "Delivered", color: "", textColor: "" },
  ];

  return (
    <Timeline>
      {steps.map((step, i) => (
        <Timeline.Item key={step.label} first={i === 0} last={i === steps.length - 1} lineColor={step.color}>
          <Timeline.Middle className={step.textColor || "text-base-content/30"}><CheckIcon /></Timeline.Middle>
          <Timeline.End box>{step.label}</Timeline.End>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
`,
  },
  "timeline-default": {
    name: "timeline-default",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/timeline/timeline-default").then((m) => ({ default: m.TimelineDefault }))
    ),
    source: `import { Timeline } from "@/components/ui/timeline";

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
  </svg>
);

export function TimelineDefault() {
  return (
    <Timeline>
      <Timeline.Item first>
        <Timeline.Middle className="text-primary"><CheckIcon /></Timeline.Middle>
        <Timeline.End box>First milestone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Middle className="text-primary"><CheckIcon /></Timeline.Middle>
        <Timeline.End box>Second milestone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Middle><CheckIcon /></Timeline.Middle>
        <Timeline.End box>Third milestone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item last>
        <Timeline.Middle><CheckIcon /></Timeline.Middle>
        <Timeline.End box>Final step</Timeline.End>
      </Timeline.Item>
    </Timeline>
  );
}
`,
  },
  "timeline-vertical": {
    name: "timeline-vertical",
    component: React.lazy(() =>
      import("@registry/demos/react/data-display/timeline/timeline-vertical").then((m) => ({ default: m.TimelineVertical }))
    ),
    source: `import { Timeline } from "@/components/ui/timeline";

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
  </svg>
);

export function TimelineVertical() {
  const steps = [
    { year: "1984", label: "First Macintosh" },
    { year: "1998", label: "iMac" },
    { year: "2001", label: "iPod" },
    { year: "2007", label: "iPhone" },
    { year: "2010", label: "iPad" },
  ];

  return (
    <Timeline direction="vertical" compact>
      {steps.map((step, i) => (
        <Timeline.Item key={step.year} first={i === 0} last={i === steps.length - 1}>
          <Timeline.Start>{step.year}</Timeline.Start>
          <Timeline.Middle className="text-primary"><CheckIcon /></Timeline.Middle>
          <Timeline.End box>{step.label}</Timeline.End>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
`,
  },
  "hover-3d-card": {
    name: "hover-3d-card",
    component: React.lazy(() =>
      import("@registry/demos/react/effects/hover-3d/hover-3d-card").then((m) => ({ default: m.Hover3DCard }))
    ),
    source: `import Hover3D from "@/components/ui/hover-3d";

export function Hover3DCard() {
  return (
    <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
      <Hover3D>
        {/* content */}
        <figure className="  rounded-2xl">
          <img
            src="https://img.daisyui.com/images/stock/card-1.webp?x"
            alt="Tailwind CSS 3D card"
          />
        </figure>
      </Hover3D>

      <Hover3D>
        {/* content */}
        <figure className=" rounded-2xl">
          <img
            src="https://img.daisyui.com/images/stock/card-2.webp?x"
            alt="Tailwind CSS 3D hover"
          />
        </figure>
      </Hover3D>

      <Hover3D>
        {/* content */}
        <figure className=" rounded-2xl">
          <img
            src="https://img.daisyui.com/images/stock/card-3.webp?x"
            alt="Tailwind CSS 3D hover"
          />
        </figure>
      </Hover3D>
    </div>
  );
}

`,
  },
  "hover-3d-default": {
    name: "hover-3d-default",
    component: React.lazy(() =>
      import("@registry/demos/react/effects/hover-3d/hover-3d-default").then((m) => ({ default: m.Hover3DDefault }))
    ),
    source: `import Hover3D from "@/components/ui/hover-3d";

export function Hover3DDefault() {
  return (
    <Hover3D className=" ">
      {/* content */}
      <figure className="max-w-100 rounded-2xl">
        <img
          src="https://img.daisyui.com/images/stock/creditcard.webp"
          alt="3D card"
        />
      </figure>
    </Hover3D>
  );
}
`,
  },
  "hover-gallery-default": {
    name: "hover-gallery-default",
    component: React.lazy(() =>
      import("@registry/demos/react/effects/hover-gallery/hover-gallery-default").then((m) => ({ default: m.HoverGalleryDefault }))
    ),
    source: `import HoverGallery from "@/components/ui/hover-gallery";

const images = [
  { src: "https://picsum.photos/seed/a/200/200", alt: "Photo 1" },
  { src: "https://picsum.photos/seed/b/200/200", alt: "Photo 2" },
  { src: "https://picsum.photos/seed/c/200/200", alt: "Photo 3" },
  { src: "https://picsum.photos/seed/d/200/200", alt: "Photo 4" },
  { src: "https://picsum.photos/seed/e/200/200", alt: "Photo 5" },
];

export function HoverGalleryDefault() {
  return <HoverGallery images={images} />;
}
`,
  },
  "hover-gallery-wide": {
    name: "hover-gallery-wide",
    component: React.lazy(() =>
      import("@registry/demos/react/effects/hover-gallery/hover-gallery-wide").then((m) => ({ default: m.HoverGalleryWide }))
    ),
    source: `import HoverGallery from "@/components/ui/hover-gallery";

const images = [
  { src: "https://picsum.photos/seed/f/200/200", alt: "Photo 1" },
  { src: "https://picsum.photos/seed/g/200/200", alt: "Photo 2" },
  { src: "https://picsum.photos/seed/h/200/200", alt: "Photo 3" },
  { src: "https://picsum.photos/seed/i/200/200", alt: "Photo 4" },
  { src: "https://picsum.photos/seed/j/200/200", alt: "Photo 5" },
  { src: "https://picsum.photos/seed/k/200/200", alt: "Photo 6" },
];

export function HoverGalleryWide() {
  return <HoverGallery images={images} maxWidth="max-w-80" />;
}
`,
  },
  "speed-dial-default": {
    name: "speed-dial-default",
    component: React.lazy(() =>
      import("@registry/demos/react/effects/speed-dial/speed-dial-default").then((m) => ({ default: m.SpeedDialDefault }))
    ),
    source: `import { SpeedDial } from "@/components/ui/speed-dial";

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const PenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6.5-6.5M3 21l4-1.5L20.5 7a2.121 2.121 0 00-3-3L4.5 17 3 21z" />
  </svg>
);

const ShareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

export function SpeedDialDefault() {
  return (
    <div className="flex    items-center justify-center h-48">
      <SpeedDial className="absolute">
        <SpeedDial.Trigger><PlusIcon /></SpeedDial.Trigger>
        <SpeedDial.Action label="Edit"><PenIcon /></SpeedDial.Action>
        <SpeedDial.Action label="Share"><ShareIcon /></SpeedDial.Action>
        <SpeedDial.Action label="Delete"><TrashIcon /></SpeedDial.Action>
      </SpeedDial>
    </div>
  );
}
`,
  },
  "speed-dial-flower": {
    name: "speed-dial-flower",
    component: React.lazy(() =>
      import("@registry/demos/react/effects/speed-dial/speed-dial-flower").then((m) => ({ default: m.SpeedDialFlower }))
    ),
    source: `import { SpeedDial } from "@/components/ui/speed-dial";

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const CogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export function SpeedDialFlower() {
  return (
    <div className="flex items-center justify-center h-48">
      <SpeedDial variant="flower" className="absolute">
        <SpeedDial.MainTrigger><PlusIcon /></SpeedDial.MainTrigger>
        <SpeedDial.Action><HomeIcon /></SpeedDial.Action>
        <SpeedDial.Action><BellIcon /></SpeedDial.Action>
        <SpeedDial.Action><CogIcon /></SpeedDial.Action>
      </SpeedDial>
    </div>
  );
}
`,
  },
  "swap-controlled": {
    name: "swap-controlled",
    component: React.lazy(() =>
      import("@registry/demos/react/effects/swap/swap-controlled").then((m) => ({ default: m.SwapControlled }))
    ),
    source: `"use client";

import * as React from "react";
import { Swap } from "@/components/ui/swap";

export function SwapControlled() {
  const [active, setActive] = React.useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <Swap effect="rotate" checked={active} onChange={setActive}>
        <Swap.On className="text-4xl">🔊</Swap.On>
        <Swap.Off className="text-4xl">🔇</Swap.Off>
      </Swap>
      <p className="text-sm text-base-content/60">
        Sound: <strong>{active ? "on" : "off"}</strong>
      </p>
    </div>
  );
}
`,
  },
  "swap-default": {
    name: "swap-default",
    component: React.lazy(() =>
      import("@registry/demos/react/effects/swap/swap-default").then((m) => ({ default: m.SwapDefault }))
    ),
    source: `import { Swap } from "@/components/ui/swap";

export function SwapDefault() {
  return (
    <Swap defaultChecked>
      <Swap.On className="text-xl font-bold">ON</Swap.On>
      <Swap.Off className="text-xl font-bold">OFF</Swap.Off>
    </Swap>
  );
}
`,
  },
  "swap-flip": {
    name: "swap-flip",
    component: React.lazy(() =>
      import("@registry/demos/react/effects/swap/swap-flip").then((m) => ({ default: m.SwapFlip }))
    ),
    source: `import { Swap } from "@/components/ui/swap";

export function SwapFlip() {
  return (
    <Swap effect="flip" defaultChecked>
      <Swap.On className="text-4xl">😄</Swap.On>
      <Swap.Off className="text-4xl">😑</Swap.Off>
    </Swap>
  );
}
`,
  },
  "swap-rotate": {
    name: "swap-rotate",
    component: React.lazy(() =>
      import("@registry/demos/react/effects/swap/swap-rotate").then((m) => ({ default: m.SwapRotate }))
    ),
    source: `import { Swap } from "@/components/ui/swap";

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="light mode">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="dark mode">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

export function SwapRotate() {
  return (
    <Swap effect="rotate" defaultChecked>
      <Swap.On><SunIcon /></Swap.On>
      <Swap.Off><MoonIcon /></Swap.Off>
    </Swap>
  );
}
`,
  },
  "swap-text": {
    name: "swap-text",
    component: React.lazy(() =>
      import("@registry/demos/react/effects/swap/swap-text").then((m) => ({ default: m.SwapText }))
    ),
    source: `import { Swap } from "@/components/ui/swap";

export function SwapText() {
  return (
    <div className="flex gap-6">
      <Swap defaultChecked className="text-lg font-semibold">
        <Swap.On className="text-success">Active</Swap.On>
        <Swap.Off className="text-error">Inactive</Swap.Off>
      </Swap>
      <Swap effect="flip" className="text-lg font-semibold">
        <Swap.On className="text-primary">Subscribed</Swap.On>
        <Swap.Off className="text-base-content/50">Unsubscribed</Swap.Off>
      </Swap>
    </div>
  );
}
`,
  },
  "text-rotate-centered": {
    name: "text-rotate-centered",
    component: React.lazy(() =>
      import("@registry/demos/react/effects/text-rotate/text-rotate-centered").then((m) => ({ default: m.TextRotateCentered }))
    ),
    source: `import { TextRotate } from "@/components/ui/text-rotate";

export function TextRotateCentered() {
  return (
    <div className="text-center">
      <p className="text-base-content/60 text-sm mb-1">Currently showing</p>
      <TextRotate centered className="text-2xl font-semibold text-secondary">
        <TextRotate.List>
          <TextRotate.Item>Tailwind CSS</TextRotate.Item>
          <TextRotate.Item>DaisyUI</TextRotate.Item>
          <TextRotate.Item>React</TextRotate.Item>
        </TextRotate.List>
      </TextRotate>
    </div>
  );
}
`,
  },
  "text-rotate-default": {
    name: "text-rotate-default",
    component: React.lazy(() =>
      import("@registry/demos/react/effects/text-rotate/text-rotate-default").then((m) => ({ default: m.TextRotateDefault }))
    ),
    source: `import { TextRotate } from "@/components/ui/text-rotate";

export function TextRotateDefault() {
  return (
    <TextRotate>
      <TextRotate.List>
        <TextRotate.Item>React</TextRotate.Item>
        <TextRotate.Item>Vue</TextRotate.Item>
        <TextRotate.Item>Svelte</TextRotate.Item>
        <TextRotate.Item>Angular</TextRotate.Item>
      </TextRotate.List>
    </TextRotate>
  );
}
`,
  },
  "text-rotate-inline": {
    name: "text-rotate-inline",
    component: React.lazy(() =>
      import("@registry/demos/react/effects/text-rotate/text-rotate-inline").then((m) => ({ default: m.TextRotateInline }))
    ),
    source: `import { TextRotate } from "@/components/ui/text-rotate";

export function TextRotateInline() {
  return (
    <h2 className="text-3xl font-bold text-center">
      Build with{" "}
      <TextRotate className="text-primary">
        <TextRotate.List>
          <TextRotate.Item>speed</TextRotate.Item>
          <TextRotate.Item>style</TextRotate.Item>
          <TextRotate.Item>confidence</TextRotate.Item>
          <TextRotate.Item>daisyUI</TextRotate.Item>
        </TextRotate.List>
      </TextRotate>
    </h2>
  );
}
`,
  },
  "theme-controller-default": {
    name: "theme-controller-default",
    component: React.lazy(() =>
      import("@registry/demos/react/effects/theme-controller/theme-controller-default").then((m) => ({ default: m.ThemeControllerDefault }))
    ),
    source: `import ThemeController from "@/components/ui/theme-controller";

export function ThemeControllerDefault() {
  return <ThemeController />;
}
`,
  },
  "theme-controller-navbar": {
    name: "theme-controller-navbar",
    component: React.lazy(() =>
      import("@registry/demos/react/effects/theme-controller/theme-controller-navbar").then((m) => ({ default: m.ThemeControllerNavbar }))
    ),
    source: `import ThemeController from "@/components/ui/theme-controller";
import Button from "@/components/ui/button";

export function ThemeControllerNavbar() {
  return (
    <div className="navbar bg-base-100 rounded-box border border-base-300 shadow-sm">
      <div className="flex-1">
        <span className="text-xl font-bold px-2">MyApp</span>
      </div>
      <div className="flex-none gap-2 px-2">
        <ThemeController />
        <Button color="primary" size="sm">Sign in</Button>
      </div>
    </div>
  );
}
`,
  },
  "theme-controller-swap": {
    name: "theme-controller-swap",
    component: React.lazy(() =>
      import("@registry/demos/react/effects/theme-controller/theme-controller-swap").then((m) => ({ default: m.ThemeControllerSwap }))
    ),
    source: `"use client";

import * as React from "react";
import { Swap } from "@/components/ui/swap";

export function ThemeControllerSwap() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <label className="flex cursor-pointer items-center gap-3">
      <span className="text-sm font-medium">Light</span>
      <Swap
        effect="rotate"
        checked={isDark}
        onChange={setIsDark}
        className="text-base-content"
      >
        <Swap.On>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </Swap.On>
        <Swap.Off>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </Swap.Off>
      </Swap>
      <span className="text-sm font-medium">Dark</span>
    </label>
  );
}
`,
  },
  "alert-default": {
    name: "alert-default",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/alert/alert-default").then((m) => ({ default: m.AlertDefault }))
    ),
    source: `import Alert from "@/components/ui/alert";

export function AlertDefault() {
  return (
    <Alert>
      <span>12 unread messages. Tap to see.</span>
    </Alert>
  );
}
`,
  },
  "alert-styles": {
    name: "alert-styles",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/alert/alert-styles").then((m) => ({ default: m.AlertStyles }))
    ),
    source: `import Alert from "@/components/ui/alert";

export function AlertStyles() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <Alert variant="info" style="solid"><span>Solid style alert</span></Alert>
      <Alert variant="info" style="soft"><span>Soft style alert</span></Alert>
      <Alert variant="info" style="outline"><span>Outline style alert</span></Alert>
      <Alert variant="info" style="dash"><span>Dash style alert</span></Alert>
    </div>
  );
}
`,
  },
  "alert-variants": {
    name: "alert-variants",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/alert/alert-variants").then((m) => ({ default: m.AlertVariants }))
    ),
    source: `import Alert from "@/components/ui/alert";

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const WarnIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const ErrorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export function AlertVariants() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <Alert variant="info"><InfoIcon /><span>New software update available.</span></Alert>
      <Alert variant="success"><CheckIcon /><span>Your purchase has been confirmed!</span></Alert>
      <Alert variant="warning"><WarnIcon /><span>Warning: invalid email address.</span></Alert>
      <Alert variant="error"><ErrorIcon /><span>Error! Task failed successfully.</span></Alert>
    </div>
  );
}
`,
  },
  "loading-colors": {
    name: "loading-colors",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/loading/loading-colors").then((m) => ({ default: m.LoadingColors }))
    ),
    source: `import Loading from "@/components/ui/loading";

export function LoadingColors() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Loading color="primary" />
      <Loading color="secondary" />
      <Loading color="accent" />
      <Loading color="info" />
      <Loading color="success" />
      <Loading color="warning" />
      <Loading color="error" />
    </div>
  );
}
`,
  },
  "loading-default": {
    name: "loading-default",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/loading/loading-default").then((m) => ({ default: m.LoadingDefault }))
    ),
    source: `import Loading from "@/components/ui/loading";

export function LoadingDefault() {
  return <Loading />;
}
`,
  },
  "loading-sizes": {
    name: "loading-sizes",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/loading/loading-sizes").then((m) => ({ default: m.LoadingSizes }))
    ),
    source: `import Loading from "@/components/ui/loading";

export function LoadingSizes() {
  return (
    <div className="flex items-center gap-4">
      <Loading size="xs" />
      <Loading size="sm" />
      <Loading size="md" />
      <Loading size="lg" />
      <Loading size="xl" />
    </div>
  );
}
`,
  },
  "loading-variants": {
    name: "loading-variants",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/loading/loading-variants").then((m) => ({ default: m.LoadingVariants }))
    ),
    source: `import Loading from "@/components/ui/loading";

export function LoadingVariants() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Loading variant="spinner" />
      <Loading variant="dots" />
      <Loading variant="ring" />
      <Loading variant="ball" />
      <Loading variant="bars" />
      <Loading variant="infinity" />
    </div>
  );
}
`,
  },
  "modal-default": {
    name: "modal-default",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/modal/modal-default").then((m) => ({ default: m.ModalDefault }))
    ),
    source: `"use client";
import { Modal, useModal } from "@/components/ui/modal";
import Button from "@/components/ui/button";

export function ModalDefault() {
  const { ref, open, close } = useModal();

  return (
    <>
      <Button onClick={open}>Open modal</Button>

      <Modal ref={ref} onClose={close}>
        <Modal.Box>
          <Modal.Close />
          <Modal.Header title="Hello!" description="Press ESC key or click outside to close" />
          <Modal.Actions>
            <form method="dialog">
              <Button>Close</Button>
            </form>
          </Modal.Actions>
        </Modal.Box>
      </Modal>
    </>
  );
}
`,
  },
  "modal-responsive": {
    name: "modal-responsive",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/modal/modal-responsive").then((m) => ({ default: m.ModalResponsive }))
    ),
    source: `"use client";
import { Modal, useModal } from "@/components/ui/modal";
import Button from "@/components/ui/button";

export function ModalResponsive() {
  const { ref, open, close } = useModal();

  return (
    <>
      <Button onClick={open}>Open modal</Button>

      <Modal ref={ref} onClose={close} responsive>
        <Modal.Box>
          <Modal.Header
            title="Responsive modal"
            description="Opens at bottom on mobile, center on desktop."
          />
          <Modal.Actions>
            <form method="dialog">
              <Button color="primary">Accept</Button>
            </form>
          </Modal.Actions>
        </Modal.Box>
      </Modal>
    </>
  );
}
`,
  },
  "modal-with-actions": {
    name: "modal-with-actions",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/modal/modal-with-actions").then((m) => ({ default: m.ModalWithActions }))
    ),
    source: `"use client";
import { Modal, useModal } from "@/components/ui/modal";
import Button from "@/components/ui/button";

export function ModalWithActions() {
  const { ref, open, close } = useModal();

  return (
    <>
      <Button onClick={open}>Open modal</Button>

      <Modal ref={ref} onClose={close}>
        <Modal.Box>
          <Modal.Close />
          <Modal.Header
            title="Are you sure?"
            description="This action cannot be undone. This will permanently delete your account."
          />
          <Modal.Actions>
            <form method="dialog">
              <Button>Cancel</Button>
            </form>
            <Button color="error">Delete account</Button>
          </Modal.Actions>
        </Modal.Box>
      </Modal>
    </>
  );
}
`,
  },
  "progress-colors": {
    name: "progress-colors",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/progress/progress-colors").then((m) => ({ default: m.ProgressColors }))
    ),
    source: `import Progress from "@/components/ui/progress";

export function ProgressColors() {
  return (
    <div className="space-y-4 w-full max-w-sm">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Neutral</p>
        <Progress color="neutral" value={65} max={100} className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Primary</p>
        <Progress color="primary" value={65} max={100} className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Secondary</p>
        <Progress color="secondary" value={65} max={100} className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Accent</p>
        <Progress color="accent" value={65} max={100} className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Info</p>
        <Progress color="info" value={65} max={100} className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Success</p>
        <Progress color="success" value={65} max={100} className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Warning</p>
        <Progress color="warning" value={65} max={100} className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Error</p>
        <Progress color="error" value={65} max={100} className="w-full" />
      </div>
    </div>
  );
}
`,
  },
  "progress-default": {
    name: "progress-default",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/progress/progress-default").then((m) => ({ default: m.ProgressDefault }))
    ),
    source: `import Progress from "@/components/ui/progress";

export function ProgressDefault() {
  return (
    <div className="flex flex-col gap-2 items-center w-full max-w-sm">
      <Progress value={0} max={100} className="w-full" />
      <Progress value={10} max={100} className="w-full" />
      <Progress value={40} max={100} className="w-full" />
      <Progress value={70} max={100} className="w-full" />
      <Progress value={100} max={100} className="w-full" />
    </div>
  );
}
`,
  },
  "progress-indeterminate": {
    name: "progress-indeterminate",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/progress/progress-indeterminate").then((m) => ({ default: m.ProgressIndeterminate }))
    ),
    source: `import Progress from "@/components/ui/progress";

export function ProgressIndeterminate() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Progress className="w-full" />
      <Progress color="primary" className="w-full" />
      <Progress color="success" className="w-full" />
    </div>
  );
}
`,
  },
  "skeleton-card": {
    name: "skeleton-card",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/skeleton/skeleton-card").then((m) => ({ default: m.SkeletonCard }))
    ),
    source: `import Skeleton from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="card bg-base-100 shadow-sm w-72">
      <div className="card-body gap-4">
        <div className="flex items-center gap-3">
          <Skeleton className="size-12 rounded-full shrink-0" />
          <div className="flex flex-col gap-2 flex-1">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
        <Skeleton className="h-24 w-full rounded-lg" />
        <div className="flex gap-2">
          <Skeleton className="h-8 flex-1 rounded-btn" />
          <Skeleton className="h-8 flex-1 rounded-btn" />
        </div>
      </div>
    </div>
  );
}
`,
  },
  "skeleton-default": {
    name: "skeleton-default",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/skeleton/skeleton-default").then((m) => ({ default: m.SkeletonDefault }))
    ),
    source: `import Skeleton from "@/components/ui/skeleton";

export function SkeletonDefault() {
  return (
    <div className="flex flex-col gap-4 w-52">
      <Skeleton className="h-32 w-full rounded-xl" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}
`,
  },
  "skeleton-text": {
    name: "skeleton-text",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/skeleton/skeleton-text").then((m) => ({ default: m.SkeletonText }))
    ),
    source: `import Skeleton from "@/components/ui/skeleton";

export function SkeletonText() {
  return (
      <Skeleton variant="text">Loading...</Skeleton>
  );
}
`,
  },
  "status-bounce": {
    name: "status-bounce",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/status/status-bounce").then((m) => ({ default: m.StatusBounce }))
    ),
    source: `import Status from "@/components/ui/status";

export function StatusBounce() {
  return (
    <div className="flex items-center gap-2">
      <Status color="info" className="animate-bounce" />
      <span>Unread messages</span>
    </div>
  );
}
`,
  },
  "status-colors": {
    name: "status-colors",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/status/status-colors").then((m) => ({ default: m.StatusColors }))
    ),
    source: `import Status from "@/components/ui/status";

export function StatusColors() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Status color="neutral" />
        <Status color="primary" />
        <Status color="secondary" />
        <Status color="accent" />
      </div>
      <div className="flex items-center gap-4">
        <Status color="info" />
        <Status color="success" />
        <Status color="warning" />
        <Status color="error" />
      </div>
    </div>
  );
}
`,
  },
  "status-default": {
    name: "status-default",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/status/status-default").then((m) => ({ default: m.StatusDefault }))
    ),
    source: `import Status from "@/components/ui/status";

export function StatusDefault() {
  return <Status />;
}
`,
  },
  "status-ping": {
    name: "status-ping",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/status/status-ping").then((m) => ({ default: m.StatusPing }))
    ),
    source: `import Status from "@/components/ui/status";

export function StatusPing() {
  return (
    <div className="flex items-center gap-2">
      <div className="inline-grid *:[grid-area:1/1]">
        <Status color="error" className="animate-ping" />
        <Status color="error" />
      </div>
      <span>Server is down</span>
    </div>
  );
}
`,
  },
  "status-sizes": {
    name: "status-sizes",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/status/status-sizes").then((m) => ({ default: m.StatusSizes }))
    ),
    source: `import Status from "@/components/ui/status";

export function StatusSizes() {
  return (
    <div className="flex items-center gap-4">
      <Status size="xs" color="primary" />
      <Status size="sm" color="primary" />
      <Status size="md" color="primary" />
      <Status size="lg" color="primary" />
      <Status size="xl" color="primary" />
    </div>
  );
}
`,
  },
  "toast-default": {
    name: "toast-default",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/toast/toast-default").then((m) => ({ default: m.ToastDefault }))
    ),
    source: `"use client";

import { toast, Toaster } from "@/components/ui/toast";
import Button from "@/components/ui/button";

export function ToastDefault() {
  return (
    <div className="flex flex-wrap gap-2">
      <Toaster />
      <Button onClick={() => toast("Event has been created")}>Default</Button>
      <Button color="info" onClick={() => toast.info("New message received")}>Info</Button>
      <Button color="success" onClick={() => toast.success("Changes saved successfully")}>Success</Button>
      <Button color="warning" onClick={() => toast.warning("Low storage remaining")}>Warning</Button>
      <Button color="error" onClick={() => toast.error("Failed to save changes")}>Error</Button>
    </div>
  );
}
`,
  },
  "tooltip-colors": {
    name: "tooltip-colors",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/tooltip/tooltip-colors").then((m) => ({ default: m.TooltipColors }))
    ),
    source: `import { Tooltip } from "@/components/ui/tooltip";
import Button from "@/components/ui/button";

export function TooltipColors() {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      <Tooltip content="Primary" color="primary">
        <Tooltip.Trigger>
          <Button color="primary" size="sm">Primary</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Secondary" color="secondary">
        <Tooltip.Trigger>
          <Button color="secondary" size="sm">Secondary</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Accent" color="accent">
        <Tooltip.Trigger>
          <Button color="accent" size="sm">Accent</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Info" color="info">
        <Tooltip.Trigger>
          <Button color="info" size="sm">Info</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Success" color="success">
        <Tooltip.Trigger>
          <Button color="success" size="sm">Success</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Warning" color="warning">
        <Tooltip.Trigger>
          <Button color="warning" size="sm">Warning</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Error" color="error">
        <Tooltip.Trigger>
          <Button color="error" size="sm">Error</Button>
        </Tooltip.Trigger>
      </Tooltip>
    </div>
  );
}
`,
  },
  "tooltip-default": {
    name: "tooltip-default",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/tooltip/tooltip-default").then((m) => ({ default: m.TooltipDefault }))
    ),
    source: `import { Tooltip } from "@/components/ui/tooltip";
import Button from "@/components/ui/button";

export function TooltipDefault() {
  return (
    <Tooltip content="Hello, tooltip!">
      <Tooltip.Trigger>
        <Button>Hover me</Button>
      </Tooltip.Trigger>
    </Tooltip>
  );
}
`,
  },
  "tooltip-placements": {
    name: "tooltip-placements",
    component: React.lazy(() =>
      import("@registry/demos/react/feedback/tooltip/tooltip-placements").then((m) => ({ default: m.TooltipPlacements }))
    ),
    source: `import { Tooltip } from "@/components/ui/tooltip";
import Button from "@/components/ui/button";

export function TooltipPlacements() {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-8">
      <Tooltip content="Top tooltip" placement="top">
        <Tooltip.Trigger>
          <Button size="sm">Top</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Bottom tooltip" placement="bottom">
        <Tooltip.Trigger>
          <Button size="sm">Bottom</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Left tooltip" placement="left">
        <Tooltip.Trigger>
          <Button size="sm">Left</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Right tooltip" placement="right">
        <Tooltip.Trigger>
          <Button size="sm">Right</Button>
        </Tooltip.Trigger>
      </Tooltip>
    </div>
  );
}
`,
  },
  "button-colors": {
    name: "button-colors",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/button/button-colors").then((m) => ({ default: m.ButtonColors }))
    ),
    source: `import Button from "@/components/ui/button";

export function ButtonColors() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button color="neutral">Neutral</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="accent">Accent</Button>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="error">Error</Button>
    </div>
  );
}
`,
  },
  "button-dash": {
    name: "button-dash",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/button/button-dash").then((m) => ({ default: m.ButtonDash }))
    ),
    source: `import Button from "@/components/ui/button";

export function ButtonDash() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="dash">Default</Button>
      <Button color="neutral" variant="dash">Neutral</Button>
      <Button color="primary" variant="dash">Primary</Button>
      <Button color="secondary" variant="dash">Secondary</Button>
      <Button color="accent" variant="dash">Accent</Button>
      <Button color="info" variant="dash">Info</Button>
      <Button color="success" variant="dash">Success</Button>
      <Button color="warning" variant="dash">Warning</Button>
      <Button color="error" variant="dash">Error</Button>
    </div>
  );
}
`,
  },
  "button-default": {
    name: "button-default",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/button/button-default").then((m) => ({ default: m.ButtonDefault }))
    ),
    source: `import Button from "@/components/ui/button";

export function ButtonDefault() {
  return <Button>Click me</Button>;
}
`,
  },
  "button-disabled": {
    name: "button-disabled",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/button/button-disabled").then((m) => ({ default: m.ButtonDisabled }))
    ),
    source: `import Button from "@/components/ui/button";

export function ButtonDisabled() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button color="primary" disabled>Disabled</Button>
      <Button color="secondary" disabled>Disabled</Button>
      <Button color="neutral" variant="outline" disabled>Disabled</Button>
    </div>
  );
}
`,
  },
  "button-loading": {
    name: "button-loading",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/button/button-loading").then((m) => ({ default: m.ButtonLoading }))
    ),
    source: `import Button from "@/components/ui/button";

export function ButtonLoading() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button color="primary" loading>Loading</Button>
      <Button color="secondary" loading>Loading</Button>
      <Button variant="ghost" loading>Loading</Button>
    </div>
  );
}
`,
  },
  "button-outline": {
    name: "button-outline",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/button/button-outline").then((m) => ({ default: m.ButtonOutline }))
    ),
    source: `import Button from "@/components/ui/button";

export function ButtonOutline() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline">Default</Button>
      <Button color="neutral" variant="outline">Neutral</Button>
      <Button color="primary" variant="outline">Primary</Button>
      <Button color="secondary" variant="outline">Secondary</Button>
      <Button color="accent" variant="outline">Accent</Button>
      <Button color="info" variant="outline">Info</Button>
      <Button color="success" variant="outline">Success</Button>
      <Button color="warning" variant="outline">Warning</Button>
      <Button color="error" variant="outline">Error</Button>
    </div>
  );
}
`,
  },
  "button-shapes": {
    name: "button-shapes",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/button/button-shapes").then((m) => ({ default: m.ButtonShapes }))
    ),
    source: `import Button from "@/components/ui/button";

export function ButtonShapes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button color="primary" shape="square">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </Button>
      <Button color="primary" shape="circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </Button>
      <Button variant="ghost" shape="square">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </Button>
      <Button variant="ghost" shape="circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </Button>
    </div>
  );
}
`,
  },
  "button-sizes": {
    name: "button-sizes",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/button/button-sizes").then((m) => ({ default: m.ButtonSizes }))
    ),
    source: `import Button from "@/components/ui/button";

export function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="xs" color="primary">XSmall</Button>
      <Button size="sm" color="primary">Small</Button>
      <Button size="md" color="primary">Medium</Button>
      <Button size="lg" color="primary">Large</Button>
      <Button size="xl" color="primary">XLarge</Button>
    </div>
  );
}
`,
  },
  "button-soft": {
    name: "button-soft",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/button/button-soft").then((m) => ({ default: m.ButtonSoft }))
    ),
    source: `import Button from "@/components/ui/button";

export function ButtonSoft() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="soft">Default</Button>
      <Button color="neutral" variant="soft">Neutral</Button>
      <Button color="primary" variant="soft">Primary</Button>
      <Button color="secondary" variant="soft">Secondary</Button>
      <Button color="accent" variant="soft">Accent</Button>
      <Button color="info" variant="soft">Info</Button>
      <Button color="success" variant="soft">Success</Button>
      <Button color="warning" variant="soft">Warning</Button>
      <Button color="error" variant="soft">Error</Button>
    </div>
  );
}
`,
  },
  "button-variants": {
    name: "button-variants",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/button/button-variants").then((m) => ({ default: m.ButtonVariants }))
    ),
    source: `import Button from "@/components/ui/button";

export function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="default">Default</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="dash">Dash</Button>
      <Button variant="soft">Soft</Button>
    </div>
  );
}
`,
  },
  "button-wide": {
    name: "button-wide",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/button/button-wide").then((m) => ({ default: m.ButtonWide }))
    ),
    source: `import Button from "@/components/ui/button";

export function ButtonWide() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Button color="primary" wide>Wide button</Button>
      <Button color="secondary" block>Block button</Button>
    </div>
  );
}
`,
  },
  "checkbox-colors": {
    name: "checkbox-colors",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/checkbox/checkbox-colors").then((m) => ({ default: m.CheckboxColors }))
    ),
    source: `import Checkbox from "@/components/ui/checkbox";

export function CheckboxColors() {
  return (
    <div className="flex flex-wrap gap-3">
      <Checkbox color="neutral"   defaultChecked />
      <Checkbox color="primary"   defaultChecked />
      <Checkbox color="secondary" defaultChecked />
      <Checkbox color="accent"    defaultChecked />
      <Checkbox color="info"      defaultChecked />
      <Checkbox color="success"   defaultChecked />
      <Checkbox color="warning"   defaultChecked />
      <Checkbox color="error"     defaultChecked />
    </div>
  );
}
`,
  },
  "checkbox-controlled": {
    name: "checkbox-controlled",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/checkbox/checkbox-controlled").then((m) => ({ default: m.CheckboxControlled }))
    ),
    source: `"use client";

import * as React from "react";
import Checkbox from "@/components/ui/checkbox";

export function CheckboxControlled() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      <label className="flex items-center gap-3">
        <Checkbox
          color="primary"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span className="text-sm">Accept terms and conditions</span>
      </label>
      <p className="text-sm text-base-content/60">
        State: <strong>{checked ? "checked" : "unchecked"}</strong>
      </p>
    </div>
  );
}
`,
  },
  "checkbox-default": {
    name: "checkbox-default",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/checkbox/checkbox-default").then((m) => ({ default: m.CheckboxDefault }))
    ),
    source: `import Checkbox from "@/components/ui/checkbox";

export function CheckboxDefault() {
  return (
    <div className="flex flex-col gap-3">
      <label className="flex items-center gap-3">
        <Checkbox defaultChecked />
        <span>Option A</span>
      </label>
      <label className="flex items-center gap-3">
        <Checkbox />
        <span>Option B</span>
      </label>
    </div>
  );
}
`,
  },
  "checkbox-disabled": {
    name: "checkbox-disabled",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/checkbox/checkbox-disabled").then((m) => ({ default: m.CheckboxDisabled }))
    ),
    source: `import Checkbox from "@/components/ui/checkbox";

export function CheckboxDisabled() {
  return (
    <div className="flex items-center gap-4">
      <Checkbox disabled />
      <Checkbox disabled defaultChecked />
    </div>
  );
}
`,
  },
  "checkbox-fieldset": {
    name: "checkbox-fieldset",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/checkbox/checkbox-fieldset").then((m) => ({ default: m.CheckboxFieldset }))
    ),
    source: `import Checkbox from "@/components/ui/checkbox";

export function CheckboxFieldset() {
  return (
    <fieldset className="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-64">
      <legend className="fieldset-legend">Preferences</legend>
      <label className="label">
        <Checkbox defaultChecked />
        Email notifications
      </label>
      <label className="label">
        <Checkbox />
        SMS notifications
      </label>
      <label className="label">
        <Checkbox defaultChecked />
        Push notifications
      </label>
    </fieldset>
  );
}
`,
  },
  "checkbox-indeterminate": {
    name: "checkbox-indeterminate",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/checkbox/checkbox-indeterminate").then((m) => ({ default: m.CheckboxIndeterminate }))
    ),
    source: `"use client";

import * as React from "react";
import Checkbox from "@/components/ui/checkbox";

export function CheckboxIndeterminate() {
  return (
    <div className="flex items-center gap-4">
      <Checkbox indeterminate />
      <Checkbox indeterminate color="primary" />
    </div>
  );
}
`,
  },
  "checkbox-sizes": {
    name: "checkbox-sizes",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/checkbox/checkbox-sizes").then((m) => ({ default: m.CheckboxSizes }))
    ),
    source: `import Checkbox from "@/components/ui/checkbox";

export function CheckboxSizes() {
  return (
    <div className="flex items-center gap-4">
      <Checkbox size="xs" defaultChecked />
      <Checkbox size="sm" defaultChecked />
      <Checkbox size="md" defaultChecked />
      <Checkbox size="lg" defaultChecked />
      <Checkbox size="xl" defaultChecked />
    </div>
  );
}
`,
  },
  "dropdown-align": {
    name: "dropdown-align",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/dropdown/dropdown-align").then((m) => ({ default: m.DropdownAlign }))
    ),
    source: `import { Dropdown } from "@/components/ui/dropdown";

export function DropdownAlign() {
  return (
    <div className="flex flex-wrap gap-4">
      <Dropdown align="start">
        <Dropdown.Trigger>Start</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
      <Dropdown align="end">
        <Dropdown.Trigger>End</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </div>
  );
}
`,
  },
  "dropdown-button": {
    name: "dropdown-button",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/dropdown/dropdown-button").then((m) => ({ default: m.DropdownButton }))
    ),
    source: `import { Dropdown } from "@/components/ui/dropdown";
import Button from "@/components/ui/button";

export function DropdownButton() {
  return (
    <Dropdown>
      <Button>Open Menu</Button>
      <Dropdown.Content>
        <Dropdown.Item>
          <a href="/profile">Profile</a>
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}`,
  },
  "dropdown-default": {
    name: "dropdown-default",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/dropdown/dropdown-default").then((m) => ({ default: m.DropdownDefault }))
    ),
    source: `import { Dropdown } from "@/components/ui/dropdown";

export function DropdownDefault() {
  return (
    <Dropdown>
      <Dropdown.Trigger>Open menu</Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item>Option 1</Dropdown.Item>
        <Dropdown.Item>Option 2</Dropdown.Item>
        <Dropdown.Item>Option 3</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}
`,
  },
  "dropdown-hover": {
    name: "dropdown-hover",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/dropdown/dropdown-hover").then((m) => ({ default: m.DropdownHover }))
    ),
    source: `import { Dropdown } from "@/components/ui/dropdown";

export function DropdownHover() {
  return (
    <Dropdown hover>
      <Dropdown.Trigger>Hover me</Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Reports</Dropdown.Item>
        <Dropdown.Item>Analytics</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}
`,
  },
  "dropdown-positions": {
    name: "dropdown-positions",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/dropdown/dropdown-positions").then((m) => ({ default: m.DropdownPositions }))
    ),
    source: `import { Dropdown } from "@/components/ui/dropdown";

export function DropdownPositions() {
  return (
    <div className="flex flex-wrap gap-4 justify-center py-8">
      <Dropdown position="top">
        <Dropdown.Trigger>Top</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
      <Dropdown position="bottom">
        <Dropdown.Trigger>Bottom</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
      <Dropdown position="left">
        <Dropdown.Trigger>Left</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
      <Dropdown position="right">
        <Dropdown.Trigger>Right</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </div>
  );
}
`,
  },
  "fieldset-default": {
    name: "fieldset-default",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/fieldset/fieldset-default").then((m) => ({ default: m.FieldsetDefault }))
    ),
    source: `import { Fieldset } from "@/components/ui/fieldset";
import { Input } from "@/components/ui/input";

export function FieldsetDefault() {
  return (
    <Fieldset className="w-xs">
      <Fieldset.Legend>Page title</Fieldset.Legend>
      <Input placeholder="My awesome page" />
      <Fieldset.Description>You can edit page title later on from settings</Fieldset.Description>
    </Fieldset>
  );
}
`,
  },
  "fieldset-join": {
    name: "fieldset-join",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/fieldset/fieldset-join").then((m) => ({ default: m.FieldsetJoin }))
    ),
    source: `import { Fieldset } from "@/components/ui/fieldset";
import Join from "@/components/ui/join";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";

export function FieldsetJoin() {
  return (
    <Fieldset className="w-xs bg-base-200 border border-base-300 p-4 rounded-box">
      <Fieldset.Legend>Settings</Fieldset.Legend>
      <Join>
          <Input aria-label="Product name" className="join-item" placeholder="Product name" />
          <Button color="primary" className="join-item">
            Save
          </Button>
      </Join>
    </Fieldset>
  );
}

`,
  },
  "fieldset-login": {
    name: "fieldset-login",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/fieldset/fieldset-login").then((m) => ({ default: m.FieldsetLogin }))
    ),
    source: `import { Fieldset } from "@/components/ui/fieldset";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";

export function FieldsetLogin() {
  return (
    <Fieldset className="w-xs bg-base-200 border border-base-300 p-4 rounded-box space-y-3">
      <Fieldset.Legend>Login</Fieldset.Legend>
      <div>
        <Label>Email</Label>
        <Input type="email" placeholder="Email" />
      </div>
      <div>
        <Label>Password</Label>
        <Input type="password" placeholder="Password" />
      </div>
      <Button color="primary" className="mt-4 w-full">Login</Button>
    </Fieldset>
  );
}
`,
  },
  "fieldset-multiple": {
    name: "fieldset-multiple",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/fieldset/fieldset-multiple").then((m) => ({ default: m.FieldsetMultiple }))
    ),
    source: `import { Fieldset } from "@/components/ui/fieldset";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function FieldsetMultiple() {
  return (
    <Fieldset className="w-xs bg-base-200 border border-base-300 p-4 rounded-box space-y-3">
      <Fieldset.Legend>Page details</Fieldset.Legend>
      <div>
        <Label>Title</Label>
        <Input placeholder="My awesome page" />
      </div>
      <div>
        <Label>Slug</Label>
        <Input placeholder="my-awesome-page" />
      </div>
      <div>
        <Label>Author</Label>
        <Input placeholder="Name" />
      </div>
    </Fieldset>
  );
}
`,
  },
  "fieldset-styled": {
    name: "fieldset-styled",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/fieldset/fieldset-styled").then((m) => ({ default: m.FieldsetStyled }))
    ),
    source: `import { Fieldset } from "@/components/ui/fieldset";
import { Input } from "@/components/ui/input";

export function FieldsetStyled() {
  return (
    <Fieldset className="w-xs bg-base-200 border border-base-300 p-4 rounded-box">
      <Fieldset.Legend>Page title</Fieldset.Legend>
      <Input placeholder="My awesome page" />
      <Fieldset.Description>You can edit page title later on from settings</Fieldset.Description>
    </Fieldset>
  );
}
`,
  },
  "file-input-colors": {
    name: "file-input-colors",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/file-input/file-input-colors").then((m) => ({ default: m.FileInputColors }))
    ),
    source: `import FileInput from "@/components/ui/file-input";

export function FileInputColors() {
  return (
    <div className="flex flex-col gap-3">
      <FileInput color="neutral" />
      <FileInput color="primary" />
      <FileInput color="secondary" />
      <FileInput color="accent" />
      <FileInput color="info" />
      <FileInput color="success" />
      <FileInput color="warning" />
      <FileInput color="error" />
    </div>
  );
}
`,
  },
  "file-input-default": {
    name: "file-input-default",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/file-input/file-input-default").then((m) => ({ default: m.FileInputDefault }))
    ),
    source: `import FileInput from "@/components/ui/file-input";

export function FileInputDefault() {
  return <FileInput />;
}
`,
  },
  "file-input-disabled": {
    name: "file-input-disabled",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/file-input/file-input-disabled").then((m) => ({ default: m.FileInputDisabled }))
    ),
    source: `import FileInput from "@/components/ui/file-input";

export function FileInputDisabled() {
  return <FileInput disabled />;
}
`,
  },
  "file-input-fieldset": {
    name: "file-input-fieldset",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/file-input/file-input-fieldset").then((m) => ({ default: m.FileInputFieldset }))
    ),
    source: `import FileInput from "@/components/ui/file-input";

export function FileInputFieldset() {
  return (
    <fieldset className="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-80">
      <legend className="fieldset-legend">Upload file</legend>
      <FileInput color="primary" />
      <p className="label text-base-content/60 text-sm mt-1">Max file size: 10MB</p>
    </fieldset>
  );
}
`,
  },
  "file-input-ghost": {
    name: "file-input-ghost",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/file-input/file-input-ghost").then((m) => ({ default: m.FileInputGhost }))
    ),
    source: `import FileInput from "@/components/ui/file-input";

export function FileInputGhost() {
  return <FileInput variant="ghost" />;
}
`,
  },
  "file-input-sizes": {
    name: "file-input-sizes",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/file-input/file-input-sizes").then((m) => ({ default: m.FileInputSizes }))
    ),
    source: `import FileInput from "@/components/ui/file-input";

export function FileInputSizes() {
  return (
    <div className="flex flex-col gap-3">
      <FileInput size="xs" />
      <FileInput size="sm" />
      <FileInput size="md" />
      <FileInput size="lg" />
      <FileInput size="xl" />
    </div>
  );
}
`,
  },
  "filter-checkbox": {
    name: "filter-checkbox",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/filter/filter-checkbox").then((m) => ({ default: m.FilterCheckbox }))
    ),
    source: `import { Filter } from "@/components/ui/filter";

export function FilterCheckbox() {
  return (
    <Filter name="tags" asForm={false}>
      <Filter.Item type="checkbox" label="TypeScript" color="primary" defaultChecked />
      <Filter.Item type="checkbox" label="React"      color="primary" defaultChecked />
      <Filter.Item type="checkbox" label="Node.js"    color="primary" />
      <Filter.Item type="checkbox" label="Docker"     color="primary" />
    </Filter>
  );
}
`,
  },
  "filter-colors": {
    name: "filter-colors",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/filter/filter-colors").then((m) => ({ default: m.FilterColors }))
    ),
    source: `import { Filter } from "@/components/ui/filter";

export function FilterColors() {
  return (
    <Filter name="category">
      <Filter.Reset />
      <Filter.Item label="Primary"   color="primary"   defaultChecked />
      <Filter.Item label="Secondary" color="secondary" />
      <Filter.Item label="Accent"    color="accent"    />
      <Filter.Item label="Info"      color="info"      />
      <Filter.Item label="Success"   color="success"   />
      <Filter.Item label="Warning"   color="warning"   />
      <Filter.Item label="Error"     color="error"     />
    </Filter>
  );
}
`,
  },
  "filter-default": {
    name: "filter-default",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/filter/filter-default").then((m) => ({ default: m.FilterDefault }))
    ),
    source: `import { Filter } from "@/components/ui/filter";

export function FilterDefault() {
  return (
    <Filter name="framework">
      <Filter.Reset />
      <Filter.Item label="React" defaultChecked />
      <Filter.Item label="Vue" />
      <Filter.Item label="Svelte" />
      <Filter.Item label="Angular" />
    </Filter>
  );
}
`,
  },
  "filter-sizes": {
    name: "filter-sizes",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/filter/filter-sizes").then((m) => ({ default: m.FilterSizes }))
    ),
    source: `import { Filter } from "@/components/ui/filter";

export function FilterSizes() {
  return (
    <div className="flex flex-col gap-3">
      <Filter name="size-xs">
        <Filter.Reset size="xs" />
        <Filter.Item label="XS-A" size="xs" defaultChecked />
        <Filter.Item label="XS-B" size="xs" />
      </Filter>
      <Filter name="size-sm">
        <Filter.Reset size="sm" />
        <Filter.Item label="SM-A" size="sm" defaultChecked />
        <Filter.Item label="SM-B" size="sm" />
      </Filter>
      <Filter name="size-md">
        <Filter.Reset size="md" />
        <Filter.Item label="MD-A" size="md" defaultChecked />
        <Filter.Item label="MD-B" size="md" />
      </Filter>
      <Filter name="size-lg">
        <Filter.Reset size="lg" />
        <Filter.Item label="LG-A" size="lg" defaultChecked />
        <Filter.Item label="LG-B" size="lg" />
      </Filter>
    </div>
  );
}
`,
  },
  "input-colors": {
    name: "input-colors",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/input/input-colors").then((m) => ({ default: m.InputColors }))
    ),
    source: `import { Input } from "@/components/ui/input";

export function InputColors() {
  return (
    <div className="flex flex-col gap-3">
      <Input color="neutral"   placeholder="Neutral" />
      <Input color="primary"   placeholder="Primary" />
      <Input color="secondary" placeholder="Secondary" />
      <Input color="accent"    placeholder="Accent" />
      <Input color="info"      placeholder="Info" />
      <Input color="success"   placeholder="Success" />
      <Input color="warning"   placeholder="Warning" />
      <Input color="error"     placeholder="Error" />
    </div>
  );
}
`,
  },
  "input-default": {
    name: "input-default",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/input/input-default").then((m) => ({ default: m.InputDefault }))
    ),
    source: `import { Input } from "@/components/ui/input";

export function InputDefault() {
  return <Input type="text" placeholder="Type here..." />;
}
`,
  },
  "input-disabled": {
    name: "input-disabled",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/input/input-disabled").then((m) => ({ default: m.InputDisabled }))
    ),
    source: `import { Input } from "@/components/ui/input";

export function InputDisabled() {
  return (
    <div className="flex flex-col gap-3 w-72">
      <Input disabled placeholder="Disabled input" />
      <Input disabled value="Read-only value" readOnly />
    </div>
  );
}
`,
  },
  "input-fieldset": {
    name: "input-fieldset",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/input/input-fieldset").then((m) => ({ default: m.InputFieldset }))
    ),
    source: `import { Input } from "@/components/ui/input";
import { Fieldset } from "@/components/ui/fieldset";

export function InputFieldset() {
  return (
    <Fieldset>
      <Fieldset.Legend>Email address</Fieldset.Legend>
      <Input type="email" placeholder="user@example.com" />
      <Fieldset.Description>We'll never share your email.</Fieldset.Description>
    </Fieldset>
  );
}
`,
  },
  "input-floating-label": {
    name: "input-floating-label",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/input/input-floating-label").then((m) => ({ default: m.InputFloatingLabel }))
    ),
    source: `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputFloatingLabel() {
  return (
    <div className="flex flex-col gap-4 w-72">
      <Label.FloatingLabel label="Your name">
        <Input type="text" className="input input-md w-full" placeholder=" " />
      </Label.FloatingLabel>
      <Label.FloatingLabel label="Email address">
        <Input type="email" className="input input-md w-full" placeholder=" " />
      </Label.FloatingLabel>
    </div>
  );
}
`,
  },
  "input-ghost": {
    name: "input-ghost",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/input/input-ghost").then((m) => ({ default: m.InputGhost }))
    ),
    source: `import { Input } from "@/components/ui/input";

export function InputGhost() {
  return <Input ghost placeholder="Ghost input..." />;
}
`,
  },
  "input-sizes": {
    name: "input-sizes",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/input/input-sizes").then((m) => ({ default: m.InputSizes }))
    ),
    source: `import { Input } from "@/components/ui/input";

export function InputSizes() {
  return (
    <div className="flex flex-col gap-3">
      <Input size="xs" placeholder="Extra small" />
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
      <Input size="xl" placeholder="Extra large" />
    </div>
  );
}
`,
  },
  "input-wrapper": {
    name: "input-wrapper",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/input/input-wrapper").then((m) => ({ default: m.InputWrapper }))
    ),
    source: `import { Label } from "@/components/ui/label";

export function InputWrapper() {
  return (
    <div className="flex flex-col gap-3 w-72">
      <Label.InputField prefix="https://" className="input-primary">
        <input type="text" className="grow" placeholder="domain.com" />
      </Label.InputField>
      <Label.InputField
        prefix={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
        }
      >
        <input type="email" className="grow" placeholder="Email" />
      </Label.InputField>
    </div>
  );
}
`,
  },
  "label-floating-sizes": {
    name: "label-floating-sizes",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/label/label-floating-sizes").then((m) => ({ default: m.LabelFloatingSizes }))
    ),
    source: `import { Label } from "@/components/ui/label";

export function LabelFloatingSizes() {
  return (
    <div className="space-y-4 w-xs">
      <Label.FloatingLabel label="Extra Small">
        <input type="text" placeholder="Extra Small" className="input input-xs" />
      </Label.FloatingLabel>
      <Label.FloatingLabel label="Small">
        <input type="text" placeholder="Small" className="input input-sm" />
      </Label.FloatingLabel>
      <Label.FloatingLabel label="Medium">
        <input type="text" placeholder="Medium" className="input input-md" />
      </Label.FloatingLabel>
      <Label.FloatingLabel label="Large">
        <input type="text" placeholder="Large" className="input input-lg" />
      </Label.FloatingLabel>
      <Label.FloatingLabel label="Extra Large">
        <input type="text" placeholder="Extra Large" className="input input-xl" />
      </Label.FloatingLabel>
    </div>
  );
}
`,
  },
  "label-floating": {
    name: "label-floating",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/label/label-floating").then((m) => ({ default: m.LabelFloating }))
    ),
    source: `import { Label } from "@/components/ui/label";

export function LabelFloating() {
  return (
    <Label.FloatingLabel label="Your Email" className="w-full max-w-xs">
      <input type="email" placeholder="mail@site.com" className="input input-md" />
    </Label.FloatingLabel>
  );
}
`,
  },
  "label-input-both": {
    name: "label-input-both",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/label/label-input-both").then((m) => ({ default: m.LabelInputBoth }))
    ),
    source: `import { Label } from "@/components/ui/label";

export function LabelInputBoth() {
  return (
    <Label.InputField>
      <Label.Prefix>$</Label.Prefix>
      <input type="number" placeholder="0.00" />
      <Label.Suffix>USD</Label.Suffix>
    </Label.InputField>
  );
}
`,
  },
  "label-input-prefix": {
    name: "label-input-prefix",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/label/label-input-prefix").then((m) => ({ default: m.LabelInputPrefix }))
    ),
    source: `import { Label } from "@/components/ui/label";

export function LabelInputPrefix() {
  return (
    <Label.InputField>
      <Label.Prefix>https://</Label.Prefix>
      <input type="text" placeholder="URL" />
    </Label.InputField>
  );
}
`,
  },
  "label-input-suffix": {
    name: "label-input-suffix",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/label/label-input-suffix").then((m) => ({ default: m.LabelInputSuffix }))
    ),
    source: `import { Label } from "@/components/ui/label";

export function LabelInputSuffix() {
  return (
    <Label.InputField>
      <input type="text" placeholder="domain name" />
      <Label.Suffix>.com</Label.Suffix>
    </Label.InputField>
  );
}
`,
  },
  "label-plain": {
    name: "label-plain",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/label/label-plain").then((m) => ({ default: m.LabelPlain }))
    ),
    source: `import { Label } from "@/components/ui/label";

export function LabelPlain() {
  return (
    <div className="space-y-1">
      <Label htmlFor="username">Username</Label>
      <input id="username" type="text" placeholder="john_doe" className="input" />
    </div>
  );
}
`,
  },
  "label-select": {
    name: "label-select",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/label/label-select").then((m) => ({ default: m.LabelSelect }))
    ),
    source: `import { Label } from "@/components/ui/label";

export function LabelSelect() {
  return (
    <Label.SelectField label="Type">
      <select>
        <option>Personal</option>
        <option>Business</option>
      </select>
    </Label.SelectField>
  );
}
`,
  },
  "radio-colors": {
    name: "radio-colors",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/radio/radio-colors").then((m) => ({ default: m.RadioColors }))
    ),
    source: `import { Radio } from "@/components/ui/radio";

export function RadioColors() {
  return (
    <div className="flex flex-wrap gap-2">
      <Radio name="radio-neutral"   color="neutral"   defaultChecked />
      <Radio name="radio-primary"   color="primary"   defaultChecked />
      <Radio name="radio-secondary" color="secondary" defaultChecked />
      <Radio name="radio-accent"    color="accent"    defaultChecked />
      <Radio name="radio-success"   color="success"   defaultChecked />
      <Radio name="radio-warning"   color="warning"   defaultChecked />
      <Radio name="radio-info"      color="info"      defaultChecked />
      <Radio name="radio-error"     color="error"     defaultChecked />
    </div>
  );
}
`,
  },
  "radio-default": {
    name: "radio-default",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/radio/radio-default").then((m) => ({ default: m.RadioDefault }))
    ),
    source: `import { Radio } from "@/components/ui/radio";

export function RadioDefault() {
  return (
    <div className="flex gap-2">
      <Radio name="radio-default" defaultChecked />
      <Radio name="radio-default" />
    </div>
  );
}
`,
  },
  "radio-disabled": {
    name: "radio-disabled",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/radio/radio-disabled").then((m) => ({ default: m.RadioDisabled }))
    ),
    source: `import { Radio } from "@/components/ui/radio";

export function RadioDisabled() {
  return (
    <div className="flex gap-2">
      <Radio name="radio-disabled" defaultChecked disabled />
      <Radio name="radio-disabled" disabled />
    </div>
  );
}
`,
  },
  "radio-sizes": {
    name: "radio-sizes",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/radio/radio-sizes").then((m) => ({ default: m.RadioSizes }))
    ),
    source: `import { Radio } from "@/components/ui/radio";

export function RadioSizes() {
  return (
    <div className="flex items-center gap-2">
      <Radio name="radio-xs" size="xs" defaultChecked />
      <Radio name="radio-sm" size="sm" defaultChecked />
      <Radio name="radio-md" size="md" defaultChecked />
      <Radio name="radio-lg" size="lg" defaultChecked />
      <Radio name="radio-xl" size="xl" defaultChecked />
    </div>
  );
}
`,
  },
  "range-colors": {
    name: "range-colors",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/range/range-colors").then((m) => ({ default: m.RangeColors }))
    ),
    source: `import Range from "@/components/ui/range";

export function RangeColors() {
  return (
    <div className="flex flex-col gap-4">
      <Range color="neutral"   defaultValue={60} />
      <Range color="primary"   defaultValue={60} />
      <Range color="secondary" defaultValue={60} />
      <Range color="accent"    defaultValue={60} />
      <Range color="info"      defaultValue={60} />
      <Range color="success"   defaultValue={60} />
      <Range color="warning"   defaultValue={60} />
      <Range color="error"     defaultValue={60} />
    </div>
  );
}
`,
  },
  "range-controlled": {
    name: "range-controlled",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/range/range-controlled").then((m) => ({ default: m.RangeControlled }))
    ),
    source: `"use client";

import * as React from "react";
import Range from "@/components/ui/range";

export function RangeControlled() {
  const [value, setValue] = React.useState(50);

  return (
    <div className="flex flex-col gap-3 w-full max-w-xs">
      <Range
        color="primary"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <p className="text-sm text-base-content/60 text-center">
        Value: <strong>{value}</strong>
      </p>
    </div>
  );
}
`,
  },
  "range-default": {
    name: "range-default",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/range/range-default").then((m) => ({ default: m.RangeDefault }))
    ),
    source: `import Range from "@/components/ui/range";

export function RangeDefault() {
  return <Range defaultValue={40} min={0} max={100} />;
}
`,
  },
  "range-sizes": {
    name: "range-sizes",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/range/range-sizes").then((m) => ({ default: m.RangeSizes }))
    ),
    source: `import Range from "@/components/ui/range";

export function RangeSizes() {
  return (
    <div className="flex flex-col gap-4">
      <Range size="xs" defaultValue={40} />
      <Range size="sm" defaultValue={40} />
      <Range size="md" defaultValue={40} />
      <Range size="lg" defaultValue={40} />
      <Range size="xl" defaultValue={40} />
    </div>
  );
}
`,
  },
  "range-steps": {
    name: "range-steps",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/range/range-steps").then((m) => ({ default: m.RangeSteps }))
    ),
    source: `import Range from "@/components/ui/range";

export function RangeSteps() {
  return (
    <div className="flex flex-col gap-2 w-full max-w-xs">
      <Range color="primary" min={0} max={100} step={25} defaultValue={50} />
      <div className="flex justify-between text-xs text-base-content/60 px-1">
        <span>0</span>
        <span>25</span>
        <span>50</span>
        <span>75</span>
        <span>100</span>
      </div>
    </div>
  );
}
`,
  },
  "rating-colors": {
    name: "rating-colors",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/rating/rating-colors").then((m) => ({ default: m.RatingColors }))
    ),
    source: `import { Rating } from "@/components/ui/rating";

const COLOR_DEMOS = [
  { color: "bg-orange-400", label: "Orange" },
  { color: "bg-green-500",  label: "Green"  },
  { color: "bg-red-400",    label: "Red"    },
  { color: "bg-blue-400",   label: "Blue"   },
  { color: "bg-purple-400", label: "Purple" },
];

export function RatingColors() {
  return (
    <div className="flex flex-col gap-3">
      {COLOR_DEMOS.map(({ color, label }, i) => (
        <div key={color} className="flex items-center gap-4">
          <span className="w-16 text-sm text-base-content/60">{label}</span>
          <Rating name={\`rating-color-\${i}\`} defaultValue={3}>
            {[1, 2, 3, 4, 5].map((n) => (
              <Rating.Item
                key={n}
                itemIndex={n}
                mask="mask-star-2"
                color={color}
                aria-label={\`\${n} star\`}
              />
            ))}
          </Rating>
        </div>
      ))}
    </div>
  );
}
`,
  },
  "rating-controlled": {
    name: "rating-controlled",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/rating/rating-controlled").then((m) => ({ default: m.RatingControlled }))
    ),
    source: `"use client";

import * as React from "react";
import { Rating } from "@/components/ui/rating";

export function RatingControlled() {
  const [value, setValue] = React.useState<number>(3);

  return (
    <div className="flex flex-col gap-4">
      <Rating
        name="rating-controlled"
        value={value}
        onValueChange={setValue}
        size="lg"
      >
        <Rating.Hidden onClick={() => setValue(0)} />
        {[1, 2, 3, 4, 5].map((n) => (
          <Rating.Item
            key={n}
            itemIndex={n}
            mask="mask-star-2"
            color="bg-orange-400"
            aria-label={\`\${n} star\`}
          />
        ))}
      </Rating>
      <p className="text-sm text-base-content/60">
        Selected: <strong>{value > 0 ? \`\${value} / 5\` : "none (cleared)"}</strong>
      </p>
    </div>
  );
}
`,
  },
  "rating-default": {
    name: "rating-default",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/rating/rating-default").then((m) => ({ default: m.RatingDefault }))
    ),
    source: `import { Rating } from "@/components/ui/rating";

export function RatingDefault() {
  return (
    <Rating name="rating-default" defaultValue={2}>
      <Rating.Item itemIndex={1} aria-label="1 star" />
      <Rating.Item itemIndex={2} aria-label="2 stars" />
      <Rating.Item itemIndex={3} aria-label="3 stars" />
      <Rating.Item itemIndex={4} aria-label="4 stars" />
      <Rating.Item itemIndex={5} aria-label="5 stars" />
    </Rating>
  );
}
`,
  },
  "rating-half": {
    name: "rating-half",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/rating/rating-half").then((m) => ({ default: m.RatingHalf }))
    ),
    source: `import * as React from "react";
import { Rating } from "@/components/ui/rating";

export function RatingHalf() {
  return (
    <Rating name="rating-half-demo" defaultValue={3} size="lg" half>
      <Rating.Hidden />
      {Array.from({ length: 5 }, (_, star) => (
        <React.Fragment key={star}>
          <Rating.Item
            itemIndex={star * 2 + 1}
            mask="mask-star-2"
            color="bg-green-500"
            halfSide="first"
            aria-label={\`\${star + 0.5} stars\`}
          />
          <Rating.Item
            itemIndex={star * 2 + 2}
            mask="mask-star-2"
            color="bg-green-500"
            halfSide="second"
            aria-label={\`\${star + 1} stars\`}
          />
        </React.Fragment>
      ))}
    </Rating>
  );
}
`,
  },
  "rating-hidden": {
    name: "rating-hidden",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/rating/rating-hidden").then((m) => ({ default: m.RatingHidden }))
    ),
    source: `import { Rating } from "@/components/ui/rating";

export function RatingHidden() {
  return (
    <Rating name="rating-hidden-demo" defaultValue={2} size="lg">
      <Rating.Hidden />
      {[1, 2, 3, 4, 5].map((n) => (
        <Rating.Item
          key={n}
          itemIndex={n}
          mask="mask-star-2"
          aria-label={\`\${n} star\`}
        />
      ))}
    </Rating>
  );
}
`,
  },
  "rating-masks": {
    name: "rating-masks",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/rating/rating-masks").then((m) => ({ default: m.RatingMasks }))
    ),
    source: `import { Rating, type RatingMask } from "@/components/ui/rating";

const MASK_DEMOS: { mask: RatingMask; color: string; label: string }[] = [
  { mask: "mask-star",   color: "bg-yellow-400", label: "Star"   },
  { mask: "mask-star-2", color: "bg-orange-400", label: "Star 2" },
  { mask: "mask-heart",  color: "bg-red-400",    label: "Heart"  },
];

export function RatingMasks() {
  return (
    <div className="flex flex-col gap-4">
      {MASK_DEMOS.map(({ mask, color, label }, i) => (
        <div key={mask} className="flex items-center gap-4">
          <span className="w-16 text-sm text-base-content/60">{label}</span>
          <Rating name={\`rating-mask-\${i}\`} defaultValue={2} size="lg">
            {[1, 2, 3, 4, 5].map((n) => (
              <Rating.Item
                key={n}
                itemIndex={n}
                mask={mask}
                color={color}
                aria-label={\`\${n} star\`}
              />
            ))}
          </Rating>
        </div>
      ))}
    </div>
  );
}
`,
  },
  "rating-readonly": {
    name: "rating-readonly",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/rating/rating-readonly").then((m) => ({ default: m.RatingReadonly }))
    ),
    source: `import { Rating } from "@/components/ui/rating";

export function RatingReadonly() {
  return (
    <Rating name="rating-readonly" value={3} readOnly size="lg">
      {[1, 2, 3, 4, 5].map((n) => (
        <Rating.Item
          key={n}
          itemIndex={n}
          mask="mask-star-2"
          color="bg-orange-400"
          aria-label={\`\${n} star\`}
        />
      ))}
    </Rating>
  );
}
`,
  },
  "rating-sizes": {
    name: "rating-sizes",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/rating/rating-sizes").then((m) => ({ default: m.RatingSizes }))
    ),
    source: `import { Rating } from "@/components/ui/rating";

export function RatingSizes() {
  return (
    <div className="flex flex-col items-center gap-3">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <Rating key={size} name={\`rating-size-\${size}\`} defaultValue={2} size={size}>
          {[1, 2, 3, 4, 5].map((n) => (
            <Rating.Item key={n} itemIndex={n} aria-label={\`\${n} star\`} />
          ))}
        </Rating>
      ))}
    </div>
  );
}
`,
  },
  "select-colors": {
    name: "select-colors",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/select/select-colors").then((m) => ({ default: m.SelectColors }))
    ),
    source: `import Select from "@/components/ui/select";

export function SelectColors() {
  return (
    <div className="flex flex-col gap-3 items-start">
      <Select color="neutral" defaultValue="neutral">
        <option disabled value="neutral">Neutral</option>
        <option>North America</option>
        <option>EU West</option>
      </Select>
      <Select color="primary" defaultValue="primary">
        <option disabled value="primary">Primary</option>
        <option>VSCode</option>
        <option>VSCode fork</option>
      </Select>
      <Select color="secondary" defaultValue="secondary">
        <option disabled value="secondary">Secondary</option>
        <option>Zig</option>
        <option>Rust</option>
      </Select>
      <Select color="accent" defaultValue="accent">
        <option disabled value="accent">Accent</option>
        <option>Light mode</option>
        <option>Dark mode</option>
      </Select>
      <Select color="info" defaultValue="info">
        <option disabled value="info">Info</option>
        <option>React</option>
        <option>Vue</option>
      </Select>
      <Select color="success" defaultValue="success">
        <option disabled value="success">Success</option>
        <option>Bun</option>
        <option>npm</option>
      </Select>
      <Select color="warning" defaultValue="warning">
        <option disabled value="warning">Warning</option>
        <option>Windows</option>
        <option>MacOS</option>
      </Select>
      <Select color="error" defaultValue="error">
        <option disabled value="error">Error</option>
        <option>GPT-4</option>
        <option>Claude</option>
      </Select>
    </div>
  );
}
`,
  },
  "select-controlled": {
    name: "select-controlled",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/select/select-controlled").then((m) => ({ default: m.SelectControlled }))
    ),
    source: `"use client";

import * as React from "react";
import Select from "@/components/ui/select";

export function SelectControlled() {
  const [value, setValue] = React.useState("React");

  return (
    <div className="flex flex-col gap-4">
      <Select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        color="primary"
      >
        <option>React</option>
        <option>Vue</option>
        <option>Svelte</option>
        <option>Angular</option>
      </Select>
      <p className="text-sm text-base-content/60">
        Selected: <strong>{value}</strong>
      </p>
    </div>
  );
}
`,
  },
  "select-default": {
    name: "select-default",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/select/select-default").then((m) => ({ default: m.SelectDefault }))
    ),
    source: `import Select from "@/components/ui/select";

export function SelectDefault() {
  return (
    <Select defaultValue="Pick a color">
      <option disabled value="Pick a color">Pick a color</option>
      <option>Crimson</option>
      <option>Amber</option>
      <option>Velvet</option>
    </Select>
  );
}
`,
  },
  "select-disabled": {
    name: "select-disabled",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/select/select-disabled").then((m) => ({ default: m.SelectDisabled }))
    ),
    source: `import Select from "@/components/ui/select";

export function SelectDisabled() {
  return (
    <Select disabled defaultValue="disabled">
      <option value="disabled">You can't touch this</option>
    </Select>
  );
}
`,
  },
  "select-fieldset": {
    name: "select-fieldset",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/select/select-fieldset").then((m) => ({ default: m.SelectFieldset }))
    ),
    source: `import Select from "@/components/ui/select";

export function SelectFieldset() {
  return (
    <fieldset className="fieldset w-xs">
      <legend className="fieldset-legend">Browsers</legend>
      <Select defaultValue="Pick a browser">
        <option disabled value="Pick a browser">Pick a browser</option>
        <option>Chrome</option>
        <option>Firefox</option>
        <option>Safari</option>
      </Select>
      <span className="label">Optional</span>
    </fieldset>
  );
}
`,
  },
  "select-ghost": {
    name: "select-ghost",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/select/select-ghost").then((m) => ({ default: m.SelectGhost }))
    ),
    source: `import Select from "@/components/ui/select";

export function SelectGhost() {
  return (
    <Select ghost defaultValue="Pick a font">
      <option disabled value="Pick a font">Pick a font</option>
      <option>Inter</option>
      <option>Poppins</option>
      <option>Raleway</option>
    </Select>
  );
}
`,
  },
  "select-native": {
    name: "select-native",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/select/select-native").then((m) => ({ default: m.SelectNative }))
    ),
    source: `import Select from "@/components/ui/select";

export function SelectNative() {
  return (
    <Select className="appearance-none" defaultValue="Pick a color">
      <option disabled value="Pick a color">Pick a color</option>
      <option>Crimson</option>
      <option>Amber</option>
      <option>Velvet</option>
    </Select>
  );
}
`,
  },
  "select-sizes": {
    name: "select-sizes",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/select/select-sizes").then((m) => ({ default: m.SelectSizes }))
    ),
    source: `import Select from "@/components/ui/select";

export function SelectSizes() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <Select size="xs" defaultValue="xs">
        <option disabled value="xs">Extra Small</option>
        <option>Apple</option>
        <option>Orange</option>
      </Select>
      <Select size="sm" defaultValue="sm">
        <option disabled value="sm">Small</option>
        <option>Apple</option>
        <option>Orange</option>
      </Select>
      <Select size="md" defaultValue="md">
        <option disabled value="md">Medium</option>
        <option>Apple</option>
        <option>Orange</option>
      </Select>
      <Select size="lg" defaultValue="lg">
        <option disabled value="lg">Large</option>
        <option>Apple</option>
        <option>Orange</option>
      </Select>
      <Select size="xl" defaultValue="xl">
        <option disabled value="xl">Extra Large</option>
        <option>Apple</option>
        <option>Orange</option>
      </Select>
    </div>
  );
}
`,
  },
  "textarea-colors": {
    name: "textarea-colors",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/textarea/textarea-colors").then((m) => ({ default: m.TextareaColors }))
    ),
    source: `import Textarea from "@/components/ui/textarea";

export function TextareaColors() {
  return (
    <div className="space-y-3">
      <Textarea color="neutral" placeholder="Neutral" className="w-full" />
      <Textarea color="primary" placeholder="Primary" className="w-full" />
      <Textarea color="secondary" placeholder="Secondary" className="w-full" />
      <Textarea color="accent" placeholder="Accent" className="w-full" />
      <Textarea color="info" placeholder="Info" className="w-full" />
      <Textarea color="success" placeholder="Success" className="w-full" />
      <Textarea color="warning" placeholder="Warning" className="w-full" />
      <Textarea color="error" placeholder="Error" className="w-full" />
    </div>
  );
}
`,
  },
  "textarea-default": {
    name: "textarea-default",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/textarea/textarea-default").then((m) => ({ default: m.TextareaDefault }))
    ),
    source: `import Textarea from "@/components/ui/textarea";

export function TextareaDefault() {
  return (
    <Textarea
      placeholder="Your message here"
      className="w-full"
    />
  );
}
`,
  },
  "textarea-disabled": {
    name: "textarea-disabled",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/textarea/textarea-disabled").then((m) => ({ default: m.TextareaDisabled }))
    ),
    source: `import Textarea from "@/components/ui/textarea";

export function TextareaDisabled() {
  return (
    <Textarea
      disabled
      placeholder="This textarea is disabled"
      value="Disabled content"
      className="w-full"
    />
  );
}
`,
  },
  "textarea-form": {
    name: "textarea-form",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/textarea/textarea-form").then((m) => ({ default: m.TextareaForm }))
    ),
    source: `import Textarea from "@/components/ui/textarea";
import Button from "@/components/ui/button";

export function TextareaForm() {
  return (
    <fieldset className="space-y-3">
      <legend className="text-lg font-semibold">Leave us a message</legend>
      <label className="block">
        <span className="text-sm font-medium mb-1 block">Your message</span>
        <Textarea color="primary" placeholder="Tell us what you think..." className="w-full" />
      </label>
      <Button color="primary">Send</Button>
    </fieldset>
  );
}
`,
  },
  "textarea-ghost": {
    name: "textarea-ghost",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/textarea/textarea-ghost").then((m) => ({ default: m.TextareaGhost }))
    ),
    source: `import Textarea from "@/components/ui/textarea";

export function TextareaGhost() {
  return (
    <Textarea
      variant="ghost"
      placeholder="Ghost style textarea"
      className="w-full"
    />
  );
}
`,
  },
  "textarea-sizes": {
    name: "textarea-sizes",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/textarea/textarea-sizes").then((m) => ({ default: m.TextareaSizes }))
    ),
    source: `import Textarea from "@/components/ui/textarea";

export function TextareaSizes() {
  return (
    <div className="space-y-3">
      <Textarea size="xs" placeholder="Extra small" className="w-full" />
      <Textarea size="sm" placeholder="Small" className="w-full" />
      <Textarea size="md" placeholder="Medium" className="w-full" />
      <Textarea size="lg" placeholder="Large" className="w-full" />
      <Textarea size="xl" placeholder="Extra large" className="w-full" />
    </div>
  );
}
`,
  },
  "toggle-colors": {
    name: "toggle-colors",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/toggle/toggle-colors").then((m) => ({ default: m.ToggleColors }))
    ),
    source: `import Toggle from "@/components/ui/toggle";

export function ToggleColors() {
  return (
    <div className="flex flex-wrap gap-3">
      <Toggle color="neutral"   defaultChecked />
      <Toggle color="primary"   defaultChecked />
      <Toggle color="secondary" defaultChecked />
      <Toggle color="accent"    defaultChecked />
      <Toggle color="info"      defaultChecked />
      <Toggle color="success"   defaultChecked />
      <Toggle color="warning"   defaultChecked />
      <Toggle color="error"     defaultChecked />
    </div>
  );
}
`,
  },
  "toggle-controlled": {
    name: "toggle-controlled",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/toggle/toggle-controlled").then((m) => ({ default: m.ToggleControlled }))
    ),
    source: `"use client";

import * as React from "react";
import Toggle from "@/components/ui/toggle";
import { Label } from "@/components/ui/label";

export function ToggleControlled() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Label className="flex items-center gap-3">
        <Toggle
          color="primary"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span className="text-sm">{checked ? "Enabled" : "Disabled"}</span>
      </Label>
      <p className="text-sm text-base-content/60">
        State: <strong>{checked ? "on" : "off"}</strong>
      </p>
    </div>
  );
}
`,
  },
  "toggle-custom-colors": {
    name: "toggle-custom-colors",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/toggle/toggle-custom-colors").then((m) => ({ default: m.ToggleCustomColors }))
    ),
    source: `import Toggle from "@/components/ui/toggle";

export function ToggleCustomColors() {
  return (
    <Toggle
      defaultChecked
      className="border-indigo-600 bg-indigo-500 checked:bg-orange-400 checked:text-orange-800 checked:border-orange-500"
    />
  );
}
`,
  },
  "toggle-default": {
    name: "toggle-default",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/toggle/toggle-default").then((m) => ({ default: m.ToggleDefault }))
    ),
    source: `import Toggle from "@/components/ui/toggle";

export function ToggleDefault() {
  return <Toggle defaultChecked />;
}
`,
  },
  "toggle-disabled": {
    name: "toggle-disabled",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/toggle/toggle-disabled").then((m) => ({ default: m.ToggleDisabled }))
    ),
    source: `import Toggle from "@/components/ui/toggle";

export function ToggleDisabled() {
  return (
    <div className="flex items-center gap-4">
      <Toggle disabled />
      <Toggle disabled defaultChecked />
    </div>
  );
}
`,
  },
  "toggle-fieldset": {
    name: "toggle-fieldset",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/toggle/toggle-fieldset").then((m) => ({ default: m.ToggleFieldset }))
    ),
    source: `import Toggle from "@/components/ui/toggle";
import {Label} from "@/components/ui/label";

export function ToggleFieldset() {
  return (
    <fieldset className="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-64">
      <legend className="fieldset-legend">Login options</legend>
      <Label className="flex items-center gap-2">
        <Toggle defaultChecked />
        Remember me
      </Label>
    </fieldset>
  );
}
`,
  },
  "toggle-icons": {
    name: "toggle-icons",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/toggle/toggle-icons").then((m) => ({ default: m.ToggleIcons }))
    ),
    source: `import Toggle from "@/components/ui/toggle";

const CheckIcon = () => (
  <svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="4" fill="none" stroke="currentColor">
      <path d="M20 6 9 17l-5-5" />
    </g>
  </svg>
);

const XIcon = () => (
  <svg aria-label="disabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export function ToggleIcons() {
  return (
    <label className="toggle text-base-content">
      <input type="checkbox" />
      <CheckIcon />
      <XIcon />
    </label>
  );
}
`,
  },
  "toggle-indeterminate": {
    name: "toggle-indeterminate",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/toggle/toggle-indeterminate").then((m) => ({ default: m.ToggleIndeterminate }))
    ),
    source: `"use client";

import * as React from "react";
import Toggle from "@/components/ui/toggle";

export function ToggleIndeterminate() {
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = true;
  }, []);

  return <Toggle ref={ref} onClick={(e) => e.preventDefault()} />;
}
`,
  },
  "toggle-sizes": {
    name: "toggle-sizes",
    component: React.lazy(() =>
      import("@registry/demos/react/forms/toggle/toggle-sizes").then((m) => ({ default: m.ToggleSizes }))
    ),
    source: `import Toggle from "@/components/ui/toggle";

export function ToggleSizes() {
  return (
    <div className="flex items-center gap-4">
      <Toggle size="xs" defaultChecked />
      <Toggle size="sm" defaultChecked />
      <Toggle size="md" defaultChecked />
      <Toggle size="lg" defaultChecked />
      <Toggle size="xl" defaultChecked />
    </div>
  );
}
`,
  },
  "divider-colors": {
    name: "divider-colors",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/divider/divider-colors").then((m) => ({ default: m.DividerColors }))
    ),
    source: `import Divider from "@/components/ui/divider";

export function DividerColors() {
  return (
    <div className="flex flex-col w-full max-w-sm gap-4">
      <Divider>Default</Divider>
      <Divider color="neutral">Neutral</Divider>
      <Divider color="primary">Primary</Divider>
      <Divider color="secondary">Secondary</Divider>
      <Divider color="accent">Accent</Divider>
      <Divider color="success">Success</Divider>
      <Divider color="warning">Warning</Divider>
      <Divider color="info">Info</Divider>
      <Divider color="error">Error</Divider>
    </div>
  );
}
`,
  },
  "divider-default": {
    name: "divider-default",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/divider/divider-default").then((m) => ({ default: m.DividerDefault }))
    ),
    source: `import Divider from "@/components/ui/divider";

export function DividerDefault() {
  return (
    <div className="flex flex-col w-full max-w-sm">
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        Content
      </div>
      <Divider>OR</Divider>
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        Content
      </div>
    </div>
  );
}
`,
  },
  "divider-horizontal": {
    name: "divider-horizontal",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/divider/divider-horizontal").then((m) => ({ default: m.DividerHorizontal }))
    ),
    source: `import Divider from "@/components/ui/divider";

export function DividerHorizontal() {
  return (
    <div className="flex w-full max-w-sm">
      <div className="grid h-20 grow card bg-base-300 rounded-box place-items-center">
        Content
      </div>
      <Divider direction="horizontal">OR</Divider>
      <div className="grid h-20 grow card bg-base-300 rounded-box place-items-center">
        Content
      </div>
    </div>
  );
}
`,
  },
  "divider-placements": {
    name: "divider-placements",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/divider/divider-placements").then((m) => ({ default: m.DividerPlacements }))
    ),
    source: `import Divider from "@/components/ui/divider";

export function DividerPlacements() {
  return (
    <div className="flex flex-col w-full max-w-sm gap-4">
      <Divider placement="start">Start</Divider>
      <Divider placement="center">Center</Divider>
      <Divider placement="end">End</Divider>
    </div>
  );
}
`,
  },
  "divider-responsive": {
    name: "divider-responsive",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/divider/divider-responsive").then((m) => ({ default: m.DividerResponsive }))
    ),
    source: `import Divider from "@/components/ui/divider";

export function DividerResponsive() {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-2xl gap-4 lg:gap-0">
      <div className="grid grow h-32 card bg-base-300 rounded-box place-items-center">
        Content
      </div>
      <Divider direction="vertical" className="lg:!divider-horizontal">
        OR
      </Divider>
      <div className="grid grow h-32 card bg-base-300 rounded-box place-items-center">
        Content
      </div>
    </div>
  );
}
`,
  },
  "drawer-default": {
    name: "drawer-default",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/drawer/drawer-default").then((m) => ({ default: m.DrawerDefault }))
    ),
    source: `"use client";
import { Drawer, useDrawer } from "@/components/ui/drawer";

export function DrawerDefault() {
  const drawer = useDrawer();

  return (
    <Drawer
      open={drawer.open}
      onOpen={drawer.openDrawer}
      onClose={drawer.close}
      onToggle={drawer.toggle}
    >
      <Drawer.Content>
        <button className="btn btn-primary" onClick={drawer.openDrawer}>
          Open drawer
        </button>
      </Drawer.Content>

      <Drawer.Side>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li><a>Home</a></li>
          <li><a>Profile</a></li>
          <li><a>Settings</a></li>
        </ul>
      </Drawer.Side>
    </Drawer>
  );
}
`,
  },
  "drawer-navbar": {
    name: "drawer-navbar",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/drawer/drawer-navbar").then((m) => ({ default: m.DrawerNavbar }))
    ),
    source: `"use client";
import { Drawer, useDrawer } from "@/components/ui/drawer";

const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export function DrawerNavbar() {
  const drawer = useDrawer();

  return (
    <div className="w-full max-w-2xl rounded-box overflow-hidden border border-base-300">
      <Drawer
        open={drawer.open}
        onOpen={drawer.openDrawer}
        onClose={drawer.close}
        onToggle={drawer.toggle}
      >
        <Drawer.Content className="flex flex-col">
          <div className="navbar bg-base-300 w-full">
            <div className="flex-none">
              <button className="btn btn-square btn-ghost" onClick={drawer.openDrawer}>
                <HamburgerIcon />
              </button>
            </div>
            <div className="mx-2 flex-1 px-2 font-bold text-lg">daisyUI</div>
          </div>

          <div className="p-8 bg-base-100 text-center text-base-content/50">
            Page content
          </div>
        </Drawer.Content>

        <Drawer.Side>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </Drawer.Side>
      </Drawer>
    </div>
  );
}
`,
  },
  "drawer-right": {
    name: "drawer-right",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/drawer/drawer-right").then((m) => ({ default: m.DrawerRight }))
    ),
    source: `"use client";
import { Drawer, useDrawer } from "@/components/ui/drawer";

export function DrawerRight() {
  const drawer = useDrawer();

  return (
    <Drawer
      open={drawer.open}
      onOpen={drawer.openDrawer}
      onClose={drawer.close}
      onToggle={drawer.toggle}
      end
    >
      <Drawer.Content>
        <button className="btn" onClick={drawer.openDrawer}>
          Open right drawer
        </button>
      </Drawer.Content>

      <Drawer.Side>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li><a>Account</a></li>
          <li><a>Privacy</a></li>
          <li><a>Notifications</a></li>
        </ul>
      </Drawer.Side>
    </Drawer>
  );
}
`,
  },
  "footer-centered": {
    name: "footer-centered",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/footer/footer-centered").then((m) => ({ default: m.FooterCentered }))
    ),
    source: `import { Footer } from "@/components/ui/footer";

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

export function FooterCentered() {
  return (
    <Footer center horizontal className="bg-primary text-primary-content p-10 rounded-box">
      <Footer.Aside>
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-primary-content/20" />
          <span className="text-xl font-bold">Acme</span>
        </div>
        <p className="font-medium">Building the future, one commit at a time.</p>
        <p className="text-sm text-primary-content/60">
          © {new Date().getFullYear()} Acme Inc. All rights reserved.
        </p>
      </Footer.Aside>
      <Footer.Nav>
        <div className="flex gap-4">
          <a className="hover:text-primary-content/60 transition-colors"><TwitterIcon /></a>
          <a className="hover:text-primary-content/60 transition-colors"><GithubIcon /></a>
        </div>
      </Footer.Nav>
    </Footer>
  );
}
`,
  },
  "footer-copyright": {
    name: "footer-copyright",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/footer/footer-copyright").then((m) => ({ default: m.FooterCopyright }))
    ),
    source: `import { Footer } from "@/components/ui/footer";

export function FooterCopyright() {
  return (
    <Footer center className="bg-base-300 text-base-content p-4 rounded-box">
      <Footer.Aside>
        <p className="text-sm text-base-content/60">
          © {new Date().getFullYear()} Acme Inc. All rights reserved.
        </p>
      </Footer.Aside>
    </Footer>
  );
}
`,
  },
  "footer-default": {
    name: "footer-default",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/footer/footer-default").then((m) => ({ default: m.FooterDefault }))
    ),
    source: `import { Footer } from "@/components/ui/footer";

export function FooterDefault() {
  return (
    <Footer className="sm:footer-horizontal bg-base-200 text-base-content p-10 rounded-box">
      <Footer.Nav>
        <Footer.Title>Product</Footer.Title>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Pricing</a>
        <a className="link link-hover">Changelog</a>
        <a className="link link-hover">Roadmap</a>
      </Footer.Nav>
      <Footer.Nav>
        <Footer.Title>Company</Footer.Title>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Press</a>
      </Footer.Nav>
      <Footer.Nav>
        <Footer.Title>Legal</Footer.Title>
        <a className="link link-hover">Terms</a>
        <a className="link link-hover">Privacy</a>
        <a className="link link-hover">Cookies</a>
      </Footer.Nav>
    </Footer>
  );
}
`,
  },
  "footer-two-row": {
    name: "footer-two-row",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/footer/footer-two-row").then((m) => ({ default: m.FooterTwoRow }))
    ),
    source: `import { Footer } from "@/components/ui/footer";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

export function FooterTwoRow() {
  return (
    <div className="w-full rounded-box overflow-hidden">
      <Footer className="sm:footer-horizontal bg-base-200 text-base-content p-10">
        <Footer.Nav>
          <Footer.Title>Product</Footer.Title>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Changelog</a>
          <a className="link link-hover">Roadmap</a>
        </Footer.Nav>
        <Footer.Nav>
          <Footer.Title>Company</Footer.Title>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
        </Footer.Nav>
        <Footer.Nav>
          <Footer.Title>Legal</Footer.Title>
          <a className="link link-hover">Terms</a>
          <a className="link link-hover">Privacy</a>
          <a className="link link-hover">Cookies</a>
        </Footer.Nav>
      </Footer>
      <Footer className="bg-base-200 text-base-content border-t border-base-300 px-10 py-4">
        <Footer.Aside className="grid-flow-col items-center">
          <div className="size-6 rounded-full bg-base-content/20" />
          <p className="text-sm text-base-content/60">
            © {new Date().getFullYear()} Acme Inc. All rights reserved.
          </p>
        </Footer.Aside>
        <Footer.Nav className="md:place-self-center md:justify-self-end">
          <div className="flex gap-4">
            <a className="hover:text-base-content/60 transition-colors"><TwitterIcon /></a>
            <a className="hover:text-base-content/60 transition-colors"><GithubIcon /></a>
          </div>
        </Footer.Nav>
      </Footer>
    </div>
  );
}
`,
  },
  "footer-with-logo": {
    name: "footer-with-logo",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/footer/footer-with-logo").then((m) => ({ default: m.FooterWithLogo }))
    ),
    source: `import { Footer } from "@/components/ui/footer";

export function FooterWithLogo() {
  return (
    <Footer className="sm:footer-horizontal bg-base-200 text-base-content p-10 rounded-box">
      <Footer.Aside>
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-primary" />
          <span className="text-lg font-bold">Acme</span>
        </div>
        <p className="text-sm text-base-content/60 max-w-xs">
          Building tools that help teams ship faster since 2018.
        </p>
      </Footer.Aside>
      <Footer.Nav>
        <Footer.Title>Product</Footer.Title>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Pricing</a>
        <a className="link link-hover">Docs</a>
      </Footer.Nav>
      <Footer.Nav>
        <Footer.Title>Company</Footer.Title>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Careers</a>
      </Footer.Nav>
    </Footer>
  );
}
`,
  },
  "footer-with-newsletter": {
    name: "footer-with-newsletter",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/footer/footer-with-newsletter").then((m) => ({ default: m.FooterWithNewsletter }))
    ),
    source: `import { Footer } from "@/components/ui/footer";
import {Input} from "@/components/ui/input";
import Button from "@/components/ui/button";

export function FooterWithNewsletter() {
  return (
    <Footer className="sm:footer-horizontal bg-base-200 text-base-content p-10 rounded-box">
      <Footer.Nav>
        <Footer.Title>Product</Footer.Title>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Pricing</a>
        <a className="link link-hover">Changelog</a>
      </Footer.Nav>
      <Footer.Nav>
        <Footer.Title>Company</Footer.Title>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Press</a>
      </Footer.Nav>
      <Footer.Nav>
        <Footer.Title>Newsletter</Footer.Title>
        <p className="text-sm text-base-content/60">Get updates delivered to your inbox.</p>
        <div className="join mt-1">
          <Input
            type="email"
            placeholder="you@example.com"
            className="join-item w-52"
          />
          <Button color="primary" className="join-item">Subscribe</Button>
        </div>
      </Footer.Nav>
    </Footer>
  );
}
`,
  },
  "footer-with-social": {
    name: "footer-with-social",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/footer/footer-with-social").then((m) => ({ default: m.FooterWithSocial }))
    ),
    source: `import { Footer } from "@/components/ui/footer";

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
);

export function FooterWithSocial() {
  return (
    <Footer className="sm:footer-horizontal bg-neutral text-neutral-content p-10 rounded-box">
      <Footer.Aside>
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-neutral-content/20" />
          <span className="text-lg font-bold">Acme</span>
        </div>
        <p className="text-sm text-neutral-content/60 max-w-xs">
          Providing reliable tech since 1992.
        </p>
      </Footer.Aside>
      <Footer.Nav>
        <Footer.Title>Product</Footer.Title>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Pricing</a>
        <a className="link link-hover">Docs</a>
      </Footer.Nav>
      <Footer.Nav>
        <Footer.Title>Follow us</Footer.Title>
        <div className="flex gap-4">
          <a className="hover:text-neutral-content/60 transition-colors"><TwitterIcon /></a>
          <a className="hover:text-neutral-content/60 transition-colors"><GithubIcon /></a>
          <a className="hover:text-neutral-content/60 transition-colors"><YoutubeIcon /></a>
        </div>
      </Footer.Nav>
    </Footer>
  );
}
`,
  },
  "hero-centered": {
    name: "hero-centered",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/hero/hero-centered").then((m) => ({ default: m.HeroCentered }))
    ),
    source: `import { Hero } from "@/components/ui/hero";
import Button from "@/components/ui/button";

export function HeroCentered() {
  return (
    <Hero className="min-h-80 rounded-box bg-base-200">
      <Hero.Content className="text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6 text-base-content/60">
            Build something amazing. Ship fast, stay lean, and focus on what matters.
          </p>
          <Button color="primary">Get Started</Button>
        </div>
      </Hero.Content>
    </Hero>
  );
}
`,
  },
  "hero-saas-centered": {
    name: "hero-saas-centered",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/hero/hero-saas-centered").then((m) => ({ default: m.HeroSaasCentered }))
    ),
    source: `import { Hero } from "@/components/ui/hero";
import Button from "@/components/ui/button";

export function HeroSaasCentered() {
  return (
    <Hero className="min-h-96 rounded-box bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10">
      <Hero.Content className="text-center flex-col gap-6">
        <div className="badge badge-primary badge-outline text-xs font-medium tracking-wide px-3 py-2">
          Now in public beta
        </div>
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
            Ship features,{" "}
            <span className="text-primary">not infrastructure.</span>
          </h1>
          <p className="mt-4 text-lg text-base-content/60">
            Focus on your product. We handle auth, billing, and deployment so your team can move faster from day one.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button color="primary" size="lg">Start for free</Button>
          <Button variant="ghost" size="lg">See how it works →</Button>
        </div>
        <p className="text-xs text-base-content/40">No credit card required · Free up to 3 projects</p>
      </Hero.Content>
    </Hero>
  );
}
`,
  },
  "hero-saas-split": {
    name: "hero-saas-split",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/hero/hero-saas-split").then((m) => ({ default: m.HeroSaasSplit }))
    ),
    source: `import { Hero } from "@/components/ui/hero";
import Button from "@/components/ui/button";

export function HeroSaasSplit() {
  return (
    <Hero className="min-h-96 rounded-box bg-base-200">
      <Hero.Content className="flex-col lg:flex-row gap-16 items-center">
        <div className="max-w-md">
          <div className="badge badge-secondary badge-outline text-xs mb-4 px-3 py-2">
            Trusted by 10,000+ teams
          </div>
          <h1 className="text-4xl font-extrabold leading-snug">
            Analytics that actually make sense.
          </h1>
          <p className="mt-4 text-base-content/60">
            Understand your users in minutes, not weeks. Beautiful dashboards, zero setup.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button color="primary">Get started free</Button>
            <Button variant="outline">Book a demo</Button>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex -space-x-2">
              {["bg-primary", "bg-secondary", "bg-accent", "bg-neutral"].map((c) => (
                <div key={c} className={\`size-8 rounded-full border-2 border-base-200 \${c}\`} />
              ))}
            </div>
            <span className="text-sm text-base-content/60">Join 10k+ happy teams</span>
          </div>
        </div>

        {/* Mock dashboard card */}
        <div className="w-full max-w-sm shrink-0">
          <div className="card bg-base-100 shadow-2xl">
            <div className="card-body gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-base-content/60">Monthly Revenue</span>
                <span className="badge badge-success badge-sm">+24%</span>
              </div>
              <p className="text-4xl font-bold">$48,200</p>
              <div className="flex gap-1 items-end h-16">
                {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-primary/20"
                    style={{ height: \`\${h}%\` }}
                  />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-base-200">
                <div>
                  <p className="text-xs text-base-content/40">Active users</p>
                  <p className="font-semibold">3,842</p>
                </div>
                <div>
                  <p className="text-xs text-base-content/40">Conversion</p>
                  <p className="font-semibold">5.4%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hero.Content>
    </Hero>
  );
}
`,
  },
  "hero-with-figure-reversed": {
    name: "hero-with-figure-reversed",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/hero/hero-with-figure-reversed").then((m) => ({ default: m.HeroWithFigureReversed }))
    ),
    source: `import { Hero } from "@/components/ui/hero";
import Button from "@/components/ui/button";

export function HeroWithFigureReversed() {
  return (
    <Hero className="min-h-80 rounded-box bg-base-200">
      <Hero.Content className="flex-col lg:flex-row-reverse gap-12">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-52 rounded-box shadow-2xl"
          alt="Hero"
        />
        <div>
          <h1 className="text-4xl font-bold">Something new just dropped.</h1>
          <p className="py-4 text-base-content/60 max-w-sm">
            We just launched a feature you've been waiting for. Check it out and let us know what you think.
          </p>
          <Button color="primary">Explore now</Button>
        </div>
      </Hero.Content>
    </Hero>
  );
}
`,
  },
  "hero-with-figure": {
    name: "hero-with-figure",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/hero/hero-with-figure").then((m) => ({ default: m.HeroWithFigure }))
    ),
    source: `import { Hero } from "@/components/ui/hero";
import Button from "@/components/ui/button";

export function HeroWithFigure() {
  return (
    <Hero className="min-h-80 rounded-box bg-base-200">
      <Hero.Content className="flex-col lg:flex-row gap-12">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-52 rounded-box shadow-2xl"
          alt="Hero"
        />
        <div>
          <h1 className="text-4xl font-bold">Something new just dropped.</h1>
          <p className="py-4 text-base-content/60 max-w-sm">
            We just launched a feature you've been waiting for. Check it out and let us know what you think.
          </p>
          <Button color="primary">Explore now</Button>
        </div>
      </Hero.Content>
    </Hero>
  );
}
`,
  },
  "hero-with-form": {
    name: "hero-with-form",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/hero/hero-with-form").then((m) => ({ default: m.HeroWithForm }))
    ),
    source: `import { Hero } from "@/components/ui/hero";
import Button from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

export function HeroWithForm() {
  return (
    <Hero className="min-h-80 rounded-box bg-base-200">
      <Hero.Content className="flex-col lg:flex-row-reverse gap-12">
        <div className="text-center lg:text-left max-w-sm">
          <h1 className="text-4xl font-bold">Welcome back.</h1>
          <p className="py-4 text-base-content/60">
            Sign in to your account to continue where you left off.
          </p>
        </div>
        <div className="card w-full max-w-sm shrink-0 shadow-2xl bg-base-100">
          <div className="card-body">
            <fieldset className="fieldset gap-1">
              <Label>Email</Label>
              <Input type="email" placeholder="you@example.com" />
              <Label className="mt-2">Password</Label>
              <Input type="password" placeholder="••••••••" />
              <a className="link link-hover text-sm mt-1">Forgot password?</a>
              <Button color="primary" className="mt-4">Sign in</Button>
            </fieldset>
          </div>
        </div>
      </Hero.Content>
    </Hero>
  );
}
`,
  },
  "hero-with-overlay": {
    name: "hero-with-overlay",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/hero/hero-with-overlay").then((m) => ({ default: m.HeroWithOverlay }))
    ),
    source: `import { Hero } from "@/components/ui/hero";
import Button from "@/components/ui/button";

export function HeroWithOverlay() {
  return (
    <Hero
      className="min-h-80 rounded-box"
      backgroundImage="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"
    >
      <Hero.Overlay className="rounded-box" />
      <Hero.Content className="text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-4 text-5xl font-bold">Hello there</h1>
          <p className="mb-6 text-neutral-content/80">
            Build something amazing. Ship fast, stay lean, and focus on what matters.
          </p>
          <Button color="primary">Get Started</Button>
        </div>
      </Hero.Content>
    </Hero>
  );
}
`,
  },
  "indicator-badge": {
    name: "indicator-badge",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/indicator/indicator-badge").then((m) => ({ default: m.IndicatorBadge }))
    ),
    source: `import { Indicator } from "@/components/ui/indicator";

export function IndicatorBadge() {
  return (
    <Indicator>
      <Indicator.Item vertical="top" horizontal="end">
        <div className="badge badge-primary">New</div>
      </Indicator.Item>
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        Content
      </div>
    </Indicator>
  );
}
`,
  },
  "indicator-button": {
    name: "indicator-button",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/indicator/indicator-button").then((m) => ({ default: m.IndicatorButton }))
    ),
    source: `import { Indicator } from "@/components/ui/indicator";
import Button from "@/components/ui/button";

export function IndicatorButton() {
  return (
    <Indicator>
      <Indicator.Item vertical="top" horizontal="end">
        <span className="badge badge-secondary">12</span>
      </Indicator.Item>
      <Button>Inbox</Button>
    </Indicator>
  );
}
`,
  },
  "indicator-placements": {
    name: "indicator-placements",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/indicator/indicator-placements").then((m) => ({ default: m.IndicatorPlacements }))
    ),
    source: `import { Indicator } from "@/components/ui/indicator";

export function IndicatorPlacements() {
  return (
    <Indicator className="max-w-fit">
      <Indicator.Item vertical="top" horizontal="start">
        <span className="badge">↖︎</span>
      </Indicator.Item>
      <Indicator.Item vertical="top" horizontal="center">
        <span className="badge">↑</span>
      </Indicator.Item>
      <Indicator.Item vertical="top" horizontal="end">
        <span className="badge">↗︎</span>
      </Indicator.Item>
      <Indicator.Item vertical="middle" horizontal="start">
        <span className="badge">←</span>
      </Indicator.Item>
      <Indicator.Item vertical="middle" horizontal="center">
        <span className="badge">●</span>
      </Indicator.Item>
      <Indicator.Item vertical="middle" horizontal="end">
        <span className="badge">→</span>
      </Indicator.Item>
      <Indicator.Item vertical="bottom" horizontal="start">
        <span className="badge">↙︎</span>
      </Indicator.Item>
      <Indicator.Item vertical="bottom" horizontal="center">
        <span className="badge">↓</span>
      </Indicator.Item>
      <Indicator.Item vertical="bottom" horizontal="end">
        <span className="badge">↘︎</span>
      </Indicator.Item>
      <div className="grid w-60 h-32 bg-base-300 place-items-center">Box</div>
    </Indicator>
  );
}
`,
  },
  "indicator-responsive": {
    name: "indicator-responsive",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/indicator/indicator-responsive").then((m) => ({ default: m.IndicatorResponsive }))
    ),
    source: `import { Indicator } from "@/components/ui/indicator";

export function IndicatorResponsive() {
  return (
    <Indicator>
      <Indicator.Item vertical="top" horizontal="start" className="sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end">
        <span className="badge badge-secondary">Responsive</span>
      </Indicator.Item>
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        Content
      </div>
    </Indicator>
  );
}
`,
  },
  "indicator-status": {
    name: "indicator-status",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/indicator/indicator-status").then((m) => ({ default: m.IndicatorStatus }))
    ),
    source: `import { Indicator } from "@/components/ui/indicator";

export function IndicatorStatus() {
  return (
    <Indicator>
      <Indicator.Item vertical="top" horizontal="end">
        <span className="status status-online size-3"></span>
      </Indicator.Item>
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        <img
          className="size-10 rounded-full"
          src="https://img.daisyui.com/images/profile/demo/2@94w.webp"
          alt="user"
        />
      </div>
    </Indicator>
  );
}
`,
  },
  "join-default": {
    name: "join-default",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/join/join-default").then((m) => ({ default: m.JoinDefault }))
    ),
    source: `import Join from "@/components/ui/join";
import Button from "@/components/ui/button";

export function JoinDefault() {
  return (
    <Join>
      <Button className="join-item">Button</Button>
      <Button className="join-item">Button</Button>
      <Button className="join-item">Button</Button>
    </Join>
  );
}
`,
  },
  "join-mixed": {
    name: "join-mixed",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/join/join-mixed").then((m) => ({ default: m.JoinMixed }))
    ),
    source: `import Join from "@/components/ui/join";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Select from "@/components/ui/select";

export function JoinMixed() {
  return (  
    <Join >
      <Input className="w-40 join-item" placeholder="Search" />
      <Select defaultValue="" className="join-item">
        <option disabled value="">Filter</option>
        <option>Sci-fi</option>
        <option>Drama</option>
        <option>Action</option>
      </Select>
      <Button color="primary" className="join-item">Search</Button>
    </Join>
  );
}
`,
  },
  "join-responsive": {
    name: "join-responsive",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/join/join-responsive").then((m) => ({ default: m.JoinResponsive }))
    ),
    source: `import Join from "@/components/ui/join";
import Button from "@/components/ui/button";

export function JoinResponsive() {
  return (
    <Join >
        <Button className="join-item">Button</Button>
        <Button className="join-item">Button</Button>
        <Button className="join-item">Button</Button>
    </Join>
  );
}
`,
  },
  "join-rounded": {
    name: "join-rounded",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/join/join-rounded").then((m) => ({ default: m.JoinRounded }))
    ),
    source: `import Join from "@/components/ui/join";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function JoinRounded() {
  return (
    <Join >
        <Input className="w-48 join-item" placeholder="Email address" />
        <Button color="primary" className="join-item rounded-r-full">Subscribe</Button>
    </Join>
  );
}
`,
  },
  "join-vertical": {
    name: "join-vertical",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/join/join-vertical").then((m) => ({ default: m.JoinVertical }))
    ),
    source: `import Join from "@/components/ui/join";
import Button from "@/components/ui/button";

export function JoinVertical() {
  return (
    <Join >
        <Button className="join-item">Top</Button>
        <Button className="join-item">Middle</Button>
        <Button className="join-item">Bottom</Button>
    </Join>
  );
}
`,
  },
  "stack-cards": {
    name: "stack-cards",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/stack/stack-cards").then((m) => ({ default: m.StackCards }))
    ),
    source: `import Stack from "@/components/ui/stack";

export function StackCards() {
  return (
    <Stack>
      <div className="card bg-base-200 text-center shadow-md">
        <div className="card-body">A</div>
      </div>
      <div className="card bg-base-200 text-center shadow">
        <div className="card-body">B</div>
      </div>
      <div className="card bg-base-200 text-center shadow-sm">
        <div className="card-body">C</div>
      </div>
    </Stack>
  );
}
`,
  },
  "stack-default": {
    name: "stack-default",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/stack/stack-default").then((m) => ({ default: m.StackDefault }))
    ),
    source: `import Stack from "@/components/ui/stack";

export function StackDefault() {
  return (
    <Stack className="h-20 w-32">
      <div className="grid rounded-box bg-primary text-primary-content place-content-center">1</div>
      <div className="grid rounded-box bg-accent text-accent-content place-content-center">2</div>
      <div className="grid rounded-box bg-secondary text-secondary-content place-content-center">3</div>
    </Stack>
  );
}
`,
  },
  "stack-directions": {
    name: "stack-directions",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/stack/stack-directions").then((m) => ({ default: m.StackDirections }))
    ),
    source: `import Stack from "@/components/ui/stack";

const DIRS = ["bottom", "top", "start", "end"] as const;

function CardItem({ label }: { label: string }) {
  return (
    <div className="text-center border border-base-content card bg-base-100">
      <div className="card-body py-4 px-6">{label}</div>
    </div>
  );
}

export function StackDirections() {
  return (
    <div className="flex flex-wrap gap-12 justify-center items-end">
      {DIRS.map((align) => (
        <div key={align} className="flex flex-col items-center gap-3">
          <Stack align={align} className="size-28">
            <CardItem label="A" />
            <CardItem label="B" />
            <CardItem label="C" />
          </Stack>
          <span className="text-xs text-base-content/50">{align}</span>
        </div>
      ))}
    </div>
  );
}
`,
  },
  "stack-images": {
    name: "stack-images",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/stack/stack-images").then((m) => ({ default: m.StackImages }))
    ),
    source: `import Stack from "@/components/ui/stack";

export function StackImages() {
  return (
    <Stack className="w-48">
      <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="1" className="rounded-box" />
      <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="2" className="rounded-box" />
      <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"    alt="3" className="rounded-box" />
    </Stack>
  );
}
`,
  },
  "stack-notifications": {
    name: "stack-notifications",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/stack/stack-notifications").then((m) => ({ default: m.StackNotifications }))
    ),
    source: `import Stack from "@/components/ui/stack";

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
`,
  },
  "stack-pricing": {
    name: "stack-pricing",
    component: React.lazy(() =>
      import("@registry/demos/react/layout/stack/stack-pricing").then((m) => ({ default: m.StackPricing }))
    ),
    source: `import Stack from "@/components/ui/stack";
import Button from "@/components/ui/button";

export function StackPricing() {
  return (
    <Stack className="w-72">
      <div className="card bg-base-300 shadow-sm">
        <div className="card-body py-5">
          <p className="text-sm text-base-content/40 font-medium">Enterprise</p>
          <p className="text-2xl font-bold">Custom</p>
        </div>
      </div>
      <div className="card bg-base-200 shadow-md">
        <div className="card-body py-5">
          <p className="text-sm text-base-content/40 font-medium">Pro</p>
          <p className="text-2xl font-bold">$49 <span className="text-sm font-normal text-base-content/50">/ mo</span></p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl border border-primary/20">
        <div className="card-body py-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-primary">Starter</p>
            <span className="badge badge-primary badge-sm">Popular</span>
          </div>
          <p className="text-3xl font-extrabold">$9 <span className="text-sm font-normal text-base-content/50">/ mo</span></p>
          <p className="text-sm text-base-content/60">Everything you need to get started.</p>
          <Button color="primary" size="sm" className="mt-2">Get started</Button>
        </div>
      </div>
    </Stack>
  );
}
`,
  },
  "breadcrumbs-default": {
    name: "breadcrumbs-default",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/breadcrumbs/breadcrumbs-default").then((m) => ({ default: m.BreadcrumbsDefault }))
    ),
    source: `import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export function BreadcrumbsDefault() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.List>
        <Breadcrumbs.Item><a href="#">Home</a></Breadcrumbs.Item>
        <Breadcrumbs.Item><a href="#">Documents</a></Breadcrumbs.Item>
        <Breadcrumbs.Item>Add Document</Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs>
  );
}
`,
  },
  "breadcrumbs-with-icons": {
    name: "breadcrumbs-with-icons",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/breadcrumbs/breadcrumbs-with-icons").then((m) => ({ default: m.BreadcrumbsWithIcons }))
    ),
    source: `import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7a2 2 0 012-2h4l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
  </svg>
);

const FileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export function BreadcrumbsWithIcons() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <a href="#" className="flex items-center gap-1"><HomeIcon />Home</a>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <a href="#" className="flex items-center gap-1"><FolderIcon />Documents</a>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item className="flex items-center gap-1">
          <FileIcon />Report.pdf
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs>
  );
}
`,
  },
  "dock-default": {
    name: "dock-default",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/dock/dock-default").then((m) => ({ default: m.DockDefault }))
    ),
    source: `import { Dock } from "@/components/ui/dock";

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

export function DockDefault() {
  return (
    <Dock defaultValue="home" className="relative w-full max-w-xs">
      <Dock.Item value="home"><HomeIcon /></Dock.Item>
      <Dock.Item value="search"><SearchIcon /></Dock.Item>
      <Dock.Item value="notifications"><BellIcon /></Dock.Item>
    </Dock>
  );
}
`,
  },
  "dock-with-labels": {
    name: "dock-with-labels",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/dock/dock-with-labels").then((m) => ({ default: m.DockWithLabels }))
    ),
    source: `import { Dock } from "@/components/ui/dock";

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const InboxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

export function DockWithLabels() {
  return (
    <Dock defaultValue="home" className="relative w-full max-w-xs">
      <Dock.Item value="home">
        <HomeIcon />
        <Dock.ItemLabel>Home</Dock.ItemLabel>
      </Dock.Item>
      <Dock.Item value="inbox">
        <InboxIcon />
        <Dock.ItemLabel>Inbox</Dock.ItemLabel>
      </Dock.Item>
      <Dock.Item value="profile">
        <UserIcon />
        <Dock.ItemLabel>Profile</Dock.ItemLabel>
      </Dock.Item>
    </Dock>
  );
}
`,
  },
  "link-colors": {
    name: "link-colors",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/link/link-colors").then((m) => ({ default: m.LinkColors }))
    ),
    source: `import Link from "@/components/ui/link";

export function LinkColors() {
  return (
    <div className="flex flex-wrap gap-4">
      <Link href="#" color="neutral">Neutral</Link>
      <Link href="#" color="primary">Primary</Link>
      <Link href="#" color="secondary">Secondary</Link>
      <Link href="#" color="accent">Accent</Link>
      <Link href="#" color="info">Info</Link>
      <Link href="#" color="success">Success</Link>
      <Link href="#" color="warning">Warning</Link>
      <Link href="#" color="error">Error</Link>
    </div>
  );
}
`,
  },
  "link-default": {
    name: "link-default",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/link/link-default").then((m) => ({ default: m.LinkDefault }))
    ),
    source: `import Link from "@/components/ui/link";

export function LinkDefault() {
  return <Link href="#">Click me</Link>;
}
`,
  },
  "link-hover": {
    name: "link-hover",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/link/link-hover").then((m) => ({ default: m.LinkHover }))
    ),
    source: `import Link from "@/components/ui/link";

export function LinkHover() {
  return (
    <Link href="#" variant="hover">Show underline only on hover</Link>
  );
}
`,
  },
  "link-in-text": {
    name: "link-in-text",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/link/link-in-text").then((m) => ({ default: m.LinkInText }))
    ),
    source: `import Link from "@/components/ui/link";

export function LinkInText() {
  return (
    <p>
      Tailwind CSS resets the style of links by default.
      <br />
      Add the <code>link</code> class to make it look like a{" "}
      <Link href="#">normal link</Link> again.
    </p>
  );
}
`,
  },
  "menu-active": {
    name: "menu-active",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/menu/menu-active").then((m) => ({ default: m.MenuActive }))
    ),
    source: `import { Menu } from "@/components/ui/menu";

export function MenuActive() {
  return (
    <Menu active="profile" className="bg-base-200 rounded-box w-56">
      <Menu.Item value="home"><a>Home</a></Menu.Item>
      <Menu.Item value="profile"><a>Profile</a></Menu.Item>
      <Menu.Item value="settings"><a>Settings</a></Menu.Item>
    </Menu>
  );
}
`,
  },
  "menu-controlled": {
    name: "menu-controlled",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/menu/menu-controlled").then((m) => ({ default: m.MenuControlled }))
    ),
    source: `"use client";
import { Menu } from "@/components/ui/menu";
import { useState } from "react";

export function MenuControlled() {
  const [active, setActive] = useState("home");

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-base-content/60">
        Active: <span className="font-mono text-primary">{active}</span>
      </p>
      <Menu active={active} className="bg-base-200 rounded-box w-56">
        <Menu.Item value="home">
          <a onClick={() => setActive("home")}>Home</a>
        </Menu.Item>
        <Menu.Item value="profile">
          <a onClick={() => setActive("profile")}>Profile</a>
        </Menu.Item>
        <Menu.Item value="settings">
          <a onClick={() => setActive("settings")}>Settings</a>
        </Menu.Item>
        <Menu.Item value="billing" disabled>
          <a>Billing</a>
        </Menu.Item>
      </Menu>
    </div>
  );
}
`,
  },
  "menu-default": {
    name: "menu-default",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/menu/menu-default").then((m) => ({ default: m.MenuDefault }))
    ),
    source: `import { Menu } from "@/components/ui/menu";

export function MenuDefault() {
  return (
    <Menu className="bg-base-200 rounded-box w-56">
      <Menu.Item><a>Home</a></Menu.Item>
      <Menu.Item><a>Profile</a></Menu.Item>
      <Menu.Item><a>Settings</a></Menu.Item>
    </Menu>
  );
}
`,
  },
  "menu-disabled": {
    name: "menu-disabled",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/menu/menu-disabled").then((m) => ({ default: m.MenuDisabled }))
    ),
    source: `import { Menu } from "@/components/ui/menu";

export function MenuDisabled() {
  return (
    <Menu className="bg-base-200 rounded-box w-56">
      <Menu.Item><a>Enabled item</a></Menu.Item>
      <Menu.Item disabled><a>Disabled item</a></Menu.Item>
      <Menu.Item disabled><a>Disabled item</a></Menu.Item>
    </Menu>
  );
}
`,
  },
  "menu-horizontal": {
    name: "menu-horizontal",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/menu/menu-horizontal").then((m) => ({ default: m.MenuHorizontal }))
    ),
    source: `import { Menu } from "@/components/ui/menu";

export function MenuHorizontal() {
  return (
    <Menu direction="horizontal" className="bg-base-200 rounded-box">
      <Menu.Item><a>Home</a></Menu.Item>
      <Menu.Item><a>About</a></Menu.Item>
      <Menu.Item><a>Contact</a></Menu.Item>
    </Menu>
  );
}
`,
  },
  "menu-links": {
    name: "menu-links",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/menu/menu-links").then((m) => ({ default: m.MenuLinks }))
    ),
    source: `import { Menu } from "@/components/ui/menu";

export function MenuLinks() {
  return (
    <Menu className="bg-base-200 rounded-box w-56">
      <Menu.Item><a href="/">Home</a></Menu.Item>
      <Menu.Item><a href="/about">About</a></Menu.Item>
      <Menu.Item><a href="/contact">Contact</a></Menu.Item>
    </Menu>
  );
}
`,
  },
  "menu-sizes": {
    name: "menu-sizes",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/menu/menu-sizes").then((m) => ({ default: m.MenuSizes }))
    ),
    source: `import { Menu } from "@/components/ui/menu";

export function MenuSizes() {
  return (
    <div className="grid gap-6">
      <Menu size="xs" className="bg-base-200 rounded-box w-56">
        <Menu.Item><a>Xsmall 1</a></Menu.Item>
        <Menu.Item><a>Xsmall 2</a></Menu.Item>
      </Menu>
      <Menu size="sm" className="bg-base-200 rounded-box w-56">
        <Menu.Item><a>Small 1</a></Menu.Item>
        <Menu.Item><a>Small 2</a></Menu.Item>
      </Menu>
      <Menu size="md" className="bg-base-200 rounded-box w-56">
        <Menu.Item><a>Medium 1</a></Menu.Item>
        <Menu.Item><a>Medium 2</a></Menu.Item>
      </Menu>
      <Menu size="lg" className="bg-base-200 rounded-box w-56">
        <Menu.Item><a>Large 1</a></Menu.Item>
        <Menu.Item><a>Large 2</a></Menu.Item>
      </Menu>
      <Menu size="xl" className="bg-base-200 rounded-box w-56">
        <Menu.Item><a>Xlarge 1</a></Menu.Item>
        <Menu.Item><a>Xlarge 2</a></Menu.Item>
      </Menu>
    </div>
  );
}
`,
  },
  "menu-with-submenu": {
    name: "menu-with-submenu",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/menu/menu-with-submenu").then((m) => ({ default: m.MenuWithSubmenu }))
    ),
    source: `import { Menu } from "@/components/ui/menu";

export function MenuWithSubmenu() {
  return (
    <Menu className="bg-base-200 rounded-box w-56">
      <Menu.Item><a>Home</a></Menu.Item>
      <Menu.Item value="products">
        <a>Products</a>
        <Menu.SubMenu>
          <Menu.Item><a>All Products</a></Menu.Item>
          <Menu.Item><a>Categories</a></Menu.Item>
          <Menu.Item><a>Brands</a></Menu.Item>
        </Menu.SubMenu>
      </Menu.Item>
      <Menu.Item><a>Contact</a></Menu.Item>
    </Menu>
  );
}
`,
  },
  "menu-with-title": {
    name: "menu-with-title",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/menu/menu-with-title").then((m) => ({ default: m.MenuWithTitle }))
    ),
    source: `import { Menu } from "@/components/ui/menu";

export function MenuWithTitle() {
  return (
    <Menu className="bg-base-200 rounded-box w-56">
      <Menu.Title>Main</Menu.Title>
      <Menu.Item><a>Dashboard</a></Menu.Item>
      <Menu.Item><a>Analytics</a></Menu.Item>
      <Menu.Title>Settings</Menu.Title>
      <Menu.Item><a>Account</a></Menu.Item>
      <Menu.Item><a>Privacy</a></Menu.Item>
      <Menu.Item disabled><a>Billing</a></Menu.Item>
    </Menu>
  );
}
`,
  },
  "navbar-default": {
    name: "navbar-default",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/navbar/navbar-default").then((m) => ({ default: m.NavbarDefault }))
    ),
    source: `import { Navbar } from "@/components/ui/navbar";
import Button from "@/components/ui/button";

export function NavbarDefault() {
  return (
    <Navbar className="bg-base-100 shadow-sm rounded-box w-full max-w-2xl">
      <Navbar.Start>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </Navbar.Start>
      <Navbar.Center>
        <div className="flex gap-1">
          <a className="btn btn-ghost btn-sm">Home</a>
          <a className="btn btn-ghost btn-sm">About</a>
          <a className="btn btn-ghost btn-sm">Blog</a>
        </div>
      </Navbar.Center>
      <Navbar.End>
        <Button color="primary" size="sm">Get started</Button>
      </Navbar.End>
    </Navbar>
  );
}
`,
  },
  "navbar-with-dropdown": {
    name: "navbar-with-dropdown",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/navbar/navbar-with-dropdown").then((m) => ({ default: m.NavbarWithDropdown }))
    ),
    source: `import { Navbar } from "@/components/ui/navbar";
import Button from "@/components/ui/button";

export function NavbarWithDropdown() {
  return (
    <Navbar className="bg-base-100 shadow-sm rounded-box w-full max-w-2xl">
      <Navbar.Start>
        <div className="dropdown">
          <Button variant="ghost" shape="circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </Button>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </Navbar.Start>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <Navbar.End>
        <Button variant="ghost" shape="circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </Button>
      </Navbar.End>
    </Navbar>
  );
}
`,
  },
  "pagination-default": {
    name: "pagination-default",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/pagination/pagination-default").then((m) => ({ default: m.PaginationDefault }))
    ),
    source: `import { Pagination } from "@/components/ui/pagination";

export function PaginationDefault() {
  return (
    <Pagination defaultValue={2}>
      <Pagination.Item value={1}>1</Pagination.Item>
      <Pagination.Item value={2}>2</Pagination.Item>
      <Pagination.Item value={3}>3</Pagination.Item>
      <Pagination.Item value={4}>4</Pagination.Item>
      <Pagination.Item value={5}>5</Pagination.Item>
    </Pagination>
  );
}
`,
  },
  "pagination-sizes": {
    name: "pagination-sizes",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/pagination/pagination-sizes").then((m) => ({ default: m.PaginationSizes }))
    ),
    source: `import { Pagination } from "@/components/ui/pagination";

export function PaginationSizes() {
  return (
    <div className="flex flex-col items-start gap-3">
      <Pagination defaultValue={2}>
        <Pagination.Item value={1} size="xs">1</Pagination.Item>
        <Pagination.Item value={2} size="xs">2</Pagination.Item>
        <Pagination.Item value={3} size="xs">3</Pagination.Item>
      </Pagination>
      <Pagination defaultValue={2}>
        <Pagination.Item value={1} size="sm">1</Pagination.Item>
        <Pagination.Item value={2} size="sm">2</Pagination.Item>
        <Pagination.Item value={3} size="sm">3</Pagination.Item>
      </Pagination>
      <Pagination defaultValue={2}>
        <Pagination.Item value={1} size="md">1</Pagination.Item>
        <Pagination.Item value={2} size="md">2</Pagination.Item>
        <Pagination.Item value={3} size="md">3</Pagination.Item>
      </Pagination>
      <Pagination defaultValue={2}>
        <Pagination.Item value={1} size="lg">1</Pagination.Item>
        <Pagination.Item value={2} size="lg">2</Pagination.Item>
        <Pagination.Item value={3} size="lg">3</Pagination.Item>
      </Pagination>
    </div>
  );
}
`,
  },
  "pagination-with-prev-next": {
    name: "pagination-with-prev-next",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/pagination/pagination-with-prev-next").then((m) => ({ default: m.PaginationWithPrevNext }))
    ),
    source: `import { Pagination } from "@/components/ui/pagination";

export function PaginationWithPrevNext() {
  return (
    <Pagination defaultValue={3}>
      <Pagination.Item value="prev" disabled>«</Pagination.Item>
      <Pagination.Item value={1}>1</Pagination.Item>
      <Pagination.Item value={2}>2</Pagination.Item>
      <Pagination.Item value={3}>3</Pagination.Item>
      <Pagination.Item value={4}>4</Pagination.Item>
      <Pagination.Item value="next">»</Pagination.Item>
    </Pagination>
  );
}
`,
  },
  "steps-default": {
    name: "steps-default",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/steps/steps-default").then((m) => ({ default: m.StepsDefault }))
    ),
    source: `import { Steps } from "@/components/ui/steps";

export function StepsDefault() {
  return (
    <Steps activeStep={1}>
      <Steps.Item>Register</Steps.Item>
      <Steps.Item>Choose plan</Steps.Item>
      <Steps.Item>Purchase</Steps.Item>
      <Steps.Item>Receive product</Steps.Item>
    </Steps>
  );
}
`,
  },
  "steps-vertical": {
    name: "steps-vertical",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/steps/steps-vertical").then((m) => ({ default: m.StepsVertical }))
    ),
    source: `import { Steps } from "@/components/ui/steps";

export function StepsVertical() {
  return (
    <Steps direction="vertical" activeStep={2}>
      <Steps.Item>Register</Steps.Item>
      <Steps.Item>Choose plan</Steps.Item>
      <Steps.Item>Purchase</Steps.Item>
      <Steps.Item>Receive product</Steps.Item>
    </Steps>
  );
}
`,
  },
  "tabs-border": {
    name: "tabs-border",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/tabs/tabs-border").then((m) => ({ default: m.TabsBorder }))
    ),
    source: `import { Tabs } from "@/components/ui/tabs";

export function TabsBorder() {
  return (
    <Tabs defaultValue="tab1" variant="border">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p className="py-4">Tab 1 content</p>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <p className="py-4">Tab 2 content</p>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <p className="py-4">Tab 3 content</p>
      </Tabs.Content>
    </Tabs>
  );
}
`,
  },
  "tabs-box": {
    name: "tabs-box",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/tabs/tabs-box").then((m) => ({ default: m.TabsBox }))
    ),
    source: `import { Tabs } from "@/components/ui/tabs";

export function TabsBox() {
  return (
    <Tabs defaultValue="tab1" variant="box">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p className="py-4">Tab 1 content</p>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <p className="py-4">Tab 2 content</p>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <p className="py-4">Tab 3 content</p>
      </Tabs.Content>
    </Tabs>
  );
}
`,
  },
  "tabs-default": {
    name: "tabs-default",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/tabs/tabs-default").then((m) => ({ default: m.TabsDefault }))
    ),
    source: `import { Tabs } from "@/components/ui/tabs";

export function TabsDefault() {
  return (
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p className="py-4">Tab 1 content</p>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <p className="py-4">Tab 2 content</p>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <p className="py-4">Tab 3 content</p>
      </Tabs.Content>
    </Tabs>
  );
}
`,
  },
  "tabs-lift": {
    name: "tabs-lift",
    component: React.lazy(() =>
      import("@registry/demos/react/navigation/tabs/tabs-lift").then((m) => ({ default: m.TabsLift }))
    ),
    source: `import { Tabs } from "@/components/ui/tabs";

export function TabsLift() {
  return (
    <Tabs defaultValue="tab1" variant="lift">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p className="p-4">Tab 1 content</p>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <p className="p-4">Tab 2 content</p>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <p className="p-4">Tab 3 content</p>
      </Tabs.Content>
    </Tabs>
  );
}
`,
  },
};
