export type Doc = {
  title: string;
  description: string;
  slug: string;
  group: Group;
};

export type Group =
  | "get-started"
  | "layout"
  | "navigation"
  | "data-display"
  | "feedback"
  | "forms"
  | "effects";

export const groups: { key: Group; label: string }[] = [
  { key: "get-started", label: "Get Started" },
  { key: "layout", label: "Layout" },
  { key: "navigation", label: "Navigation" },
  { key: "data-display", label: "Data Display" },
  { key: "feedback", label: "Feedback" },
  { key: "forms", label: "Forms" },
  { key: "effects", label: "Effects" },
];

export const docs: Doc[] = [
  // ─── Get Started ───────────────────────────────────────────────────────────
  {
    title: "Introduction",
    description:
      "Get started with daisyUI React components and explore what's available in this library.",
    slug: "/docs/introduction",
    group: "get-started",
  },
  {
    title: "Installation",
    description:
      "Learn how to install and set up daisyUI JSX in your Next.js or React project.",
    slug: "/docs/installation",
    group: "get-started",
  },
  {
    title: "Theming",
    description:
      "Customize colors, fonts, and styles to match your brand with daisyUI's theming system.",
    slug: "/docs/theming",
    group: "get-started",
  },

  // ─── Layout ────────────────────────────────────────────────────────────────
  {
    title: "Drawer",
    description:
      "A panel that slides in from any edge of the screen, ideal for navigation menus, filters, or secondary content.",
    slug: "/docs/drawer",
    group: "layout",
  },
  {
    title: "Footer",
    description:
      "A structured bottom section for site-wide links, legal text, social icons, and brand information.",
    slug: "/docs/footer",
    group: "layout",
  },
  {
    title: "Hero",
    description:
      "A full-width introductory section with a headline, supporting text, and a prominent call-to-action.",
    slug: "/docs/hero",
    group: "layout",
  },
  {
    title: "Indicator",
    description:
      "Overlays a small badge or dot on a corner of any element to signal status, counts, or notifications.",
    slug: "/docs/indicator",
    group: "layout",
  },
  {
    title: "Join",
    description:
      "Groups adjacent elements — buttons, inputs, selects — into a connected row or column with shared border radius.",
    slug: "/docs/join",
    group: "layout",
  },
  {
    title: "Stack",
    description:
      "Layers child elements on top of each other, useful for overlapping cards, images, or decorative compositions.",
    slug: "/docs/stack",
    group: "layout",
  },

  // ─── Navigation ────────────────────────────────────────────────────────────
  {
    title: "Breadcrumbs",
    description:
      "Shows the current page's location within a hierarchy and lets users navigate back up the tree.",
    slug: "/docs/breadcrumbs",
    group: "navigation",
  },
  {
    title: "Dock",
    description:
      "A macOS-style icon bar fixed to a screen edge, providing quick access to key sections or actions.",
    slug: "/docs/dock",
    group: "navigation",
  },
  {
    title: "Menu",
    description:
      "A vertical or horizontal list of links and actions, commonly used inside sidebars, dropdowns, or drawers.",
    slug: "/docs/menu",
    group: "navigation",
  },
  {
    title: "Link",
    description:
      "A button-styled link that can be used as a navigation element.",
    slug: "/docs/link",
    group: "navigation",
  },
  {
    title: "Navbar",
    description:
      "A top-level navigation bar with support for a logo, links, and actions like search or a user avatar.",
    slug: "/docs/navbar",
    group: "navigation",
  },
  {
    title: "Pagination",
    description:
      "Controls for navigating between pages of content, with first, last, previous, and next page buttons.",
    slug: "/docs/pagination",
    group: "navigation",
  },
  {
    title: "Steps",
    description:
      "A visual progress indicator that guides users through a multi-step process or wizard flow.",
    slug: "/docs/steps",
    group: "navigation",
  },
  {
    title: "Tabs",
    description:
      "Switches between multiple panels of related content within the same view without a page reload.",
    slug: "/docs/tabs",
    group: "navigation",
  },

  // ─── Data Display ──────────────────────────────────────────────────────────
  {
    title: "Accordion",
    description:
      "Expandable sections that reveal or hide content on click, keeping long pages scannable and compact.",
    slug: "/docs/accordion",
    group: "data-display",
  },
  {
    title: "Avatar",
    description:
      "Displays a user's profile picture, initials, or a fallback icon, with optional status indicators.",
    slug: "/docs/avatar",
    group: "data-display",
  },
  {
    title: "Badge",
    description:
      "A small inline label for statuses, categories, or counts — supports colors, sizes, and outline styles.",
    slug: "/docs/badge",
    group: "data-display",
  },
  {
    title: "Calendar",
    description:
      "An interactive monthly calendar for browsing and selecting dates, with optional range support.",
    slug: "/docs/calendar",
    group: "data-display",
  },
  {
    title: "Card",
    description:
      "A contained surface for grouping related content like images, text, and actions in a single unit.",
    slug: "/docs/card",
    group: "data-display",
  },
  {
    title: "Carousel",
    description:
      "A horizontally scrollable sequence of slides, supporting auto-play, indicators, and navigation arrows.",
    slug: "/docs/carousel",
    group: "data-display",
  },
  {
    title: "Chat",
    description:
      "Chat bubble layouts for conversation UIs, with sent and received alignment, avatars, and timestamps.",
    slug: "/docs/chat",
    group: "data-display",
  },
  {
    title: "Collapse",
    description:
      "A single toggleable section that expands to reveal content, similar to a details/summary element.",
    slug: "/docs/collapse",
    group: "data-display",
  },
  {
    title: "Countdown",
    description:
      "Animated digit displays for counting down (or up) to a target time or value.",
    slug: "/docs/countdown",
    group: "data-display",
  },
  {
    title: "Diff",
    description:
      "A split-view component for comparing two pieces of content side by side with a draggable divider.",
    slug: "/docs/diff",
    group: "data-display",
  },
  {
    title: "Kbd",
    description:
      "Renders keyboard shortcut keys in a styled chip, making hotkey documentation clear and consistent.",
    slug: "/docs/kbd",
    group: "data-display",
  },
  {
    title: "List",
    description:
      "A structured vertical list of items with consistent spacing, dividers, and optional leading icons.",
    slug: "/docs/list",
    group: "data-display",
  },
  {
    title: "Mask",
    description:
      "Clips an element into a shape — hexagon, triangle, star, and more — using CSS mask utilities.",
    slug: "/docs/mask",
    group: "data-display",
  },
  {
    title: "Mockup",
    description:
      "Device frame mockups (browser, phone, window) for showcasing screenshots and UI previews.",
    slug: "/docs/mockup",
    group: "data-display",
  },
  {
    title: "Stat",
    description:
      "Highlights a key metric with a value, label, and optional description or trend indicator.",
    slug: "/docs/stat",
    group: "data-display",
  },
  {
    title: "Table",
    description:
      "A styled data table with support for zebra stripes, hover rows, compact density, and pinned columns.",
    slug: "/docs/table",
    group: "data-display",
  },
  {
    title: "Timeline",
    description:
      "A vertical or horizontal sequence of events with timestamps, icons, and descriptive content.",
    slug: "/docs/timeline",
    group: "data-display",
  },

  // ─── Feedback ──────────────────────────────────────────────────────────────
  {
    title: "Alert",
    description:
      "An inline message banner for communicating success, errors, warnings, or neutral information.",
    slug: "/docs/alert",
    group: "feedback",
  },
  {
    title: "Loading",
    description:
      "Animated spinners and dots for indicating background activity or pending async operations.",
    slug: "/docs/loading",
    group: "feedback",
  },
  {
    title: "Modal",
    description:
      "A focused dialog that overlays the page, blocking interaction until the user confirms or dismisses.",
    slug: "/docs/modal",
    group: "feedback",
  },
  {
    title: "Progress",
    description:
      "A bar or radial indicator that visualizes how far along a task or process is.",
    slug: "/docs/progress",
    group: "feedback",
  },
  {
    title: "Skeleton",
    description:
      "Placeholder shapes that mimic content layout during loading, reducing perceived wait time.",
    slug: "/docs/skeleton",
    group: "feedback",
  },
  {
    title: "Status",
    description:
      "A small icon component to visually show the current status of an element, like online, offline, error, etc.",
    slug: "/docs/status",
    group: "feedback",
  },
  {
    title: "Toast",
    description:
      "Brief auto-dismissing notifications that appear at the edge of the screen for non-blocking feedback.",
    slug: "/docs/toast",
    group: "feedback",
  },
  {
    title: "Tooltip",
    description:
      "A small floating label that appears on hover or focus to provide extra context for an element.",
    slug: "/docs/tooltip",
    group: "feedback",
  },

  // ─── Forms ─────────────────────────────────────────────────────────────────
  {
    title: "Button",
    description:
      "A versatile action trigger with variants for primary, ghost, outline, and destructive styles.",
    slug: "/docs/button",
    group: "forms",
  },

  {
    title: "Checkbox",
    description:
      "A binary toggle for selecting one or more items from a list, with indeterminate state support.",
    slug: "/docs/checkbox",
    group: "forms",
  },
  {
    title: "Dropdown",
    description:
      "A contextual menu anchored to a trigger element, exposing a list of selectable options or actions.",
    slug: "/docs/dropdown",
    group: "forms",
  },
  {
    title: "File Input",
    description:
      "A styled file picker that accepts single or multiple file uploads with drag-and-drop support.",
    slug: "/docs/file-input",
    group: "forms",
  },
  {
    title: "Fieldset",
    description:
      "A container for grouping related form elements with a legend title and optional description text.",
    slug: "/docs/fieldset",
    group: "forms",
  },
  {
    title: "Filter",
    description:
      "A set of toggle buttons for filtering lists or grids by one or multiple active categories.",
    slug: "/docs/filter",
    group: "forms",
  },
  {
    title: "Input",
    description:
      "A single-line text field with support for labels, helper text, icons, and validation states.",
    slug: "/docs/input",
    group: "forms",
  },
  {
    title: "Label",
    description:
      "A label component for associating text with form inputs, with support for inline labels and floating labels.",
    slug: "/docs/label",
    group: "forms",
  },
  {
    title: "Radio",
    description:
      "A group of mutually exclusive options where only one item can be selected at a time.",
    slug: "/docs/radio",
    group: "forms",
  },
  {
    title: "Range",
    description:
      "A draggable slider for selecting a numeric value within a defined minimum and maximum range.",
    slug: "/docs/range",
    group: "forms",
  },
  {
    title: "Rating",
    description:
      "A star-based input that lets users submit a score, with half-star and read-only display modes.",
    slug: "/docs/rating",
    group: "forms",
  },
  {
    title: "Select",
    description:
      "A styled native select element for choosing one option from a dropdown list.",
    slug: "/docs/select",
    group: "forms",
  },
  {
    title: "Toggle",
    description:
      "A switch control for turning a boolean setting on or off, styled as a sliding pill.",
    slug: "/docs/toggle",
    group: "forms",
  },
  {
    title: "Textarea",
    description:
      "A multi-line text input field for longer text content, supporting colors, sizes, and variants.",
    slug: "/docs/textarea",
    group: "forms",
  },

  // ─── Effects ───────────────────────────────────────────────────────────────
  {
    title: "Hover 3D Card",
    description:
      "A card that tilts in 3D space in response to the mouse position, adding depth and interactivity.",
    slug: "/docs/hover-3d",
    group: "effects",
  },
  {
    title: "Hover Gallery",
    description:
      "An image grid where hovering one item expands it while the others gracefully shrink away.",
    slug: "/docs/hover-gallery",
    group: "effects",
  },
  {
    title: "Speed Dial",
    description:
      "A floating action button that fans out into a set of secondary action buttons on hover or click.",
    slug: "/docs/speed-dial",
    group: "effects",
  },
  {
    title: "Swap",
    description:
      "Toggles between two content states — such as icons or labels — with a smooth transition animation.",
    slug: "/docs/swap",
    group: "effects",
  },
  {
    title: "Text Rotate",
    description:
      "Cycles through a list of words or phrases with an animated rotation or fade transition effect.",
    slug: "/docs/text-rotate",
    group: "effects",
  },
  {
    title: "Theme Controller",
    description:
      "A UI control for switching between light, dark, or custom themes and persisting the preference.",
    slug: "/docs/theme-controller",
    group: "effects",
  },
  {
    title: "Divider",
    description:
      "A simple horizontal or vertical line that visually separates content sections.",
    slug: "/docs/divider",
    group: "layout",
  },
];

/** Docs pre-grouped for sidebar rendering */
export const docsByGroup = groups.map(({ key, label }) => ({
  key,
  label,
  items: docs.filter((d) => d.group === key),
}));

export const getNextDocsByGroupSlug = (currentSlug: string): Doc | null => {
  const docIndex = docsByGroup.findIndex((group) =>
    group.items.some((item) => item.slug === currentSlug),
  );

  if (docIndex === -1 || docIndex === 0) return null;

  const currentGroup = docsByGroup[docIndex];
  const currentItemIndex = currentGroup.items.findIndex(
    (item) => item.slug === currentSlug,
  );

  if (currentItemIndex === -1) return null;
  if (currentItemIndex === currentGroup.items.length - 1) {
    // If it's the last item in the current group, move to the first item of the next group
    const nextGroup = docsByGroup[docIndex + 1];
    return nextGroup ? nextGroup.items[0] : null;
  }

  return currentGroup.items[currentItemIndex + 1];
};

export const getLastDocsByGroupSlug = (currentSlug: string): Doc | null => {
  const docIndex = docsByGroup.findIndex((group) =>
    group.items.some((item) => item.slug === currentSlug),
  );

  if (docIndex === -1 || docIndex === 0) return null;

  const currentGroup = docsByGroup[docIndex];
  const currentItemIndex = currentGroup.items.findIndex(
    (item) => item.slug === currentSlug,
  );

  if (currentItemIndex === -1) return null;
  if (currentItemIndex === 0) {
    // If it's the last item in the current group, move to the first item of the next group
    const lastGroup = docsByGroup[docIndex - 1];
    console.log(lastGroup);
    return lastGroup ? lastGroup.items[lastGroup.items.length - 1] : null;
  }

  return currentGroup.items[currentItemIndex - 1];
};
