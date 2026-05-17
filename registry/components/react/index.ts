// registry/components/react/index.ts
const baseDependency = ["tailwind-variants"];

export const registry = {
  // ──────────────────── FORMS ────────────────────
  button: {
    file: "forms/button/button.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  checkbox: {
    file: "forms/checkbox/checkbox.tsx",
    dependencies: baseDependency,
    isClient: true,
  },
  dropdown: {
    file: "forms/dropdown/dropdown.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  fieldset: {
    file: "forms/fieldset/fieldset.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  "file-input": {
    file: "forms/file-input/file-input.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  filter: {
    file: "forms/filter/filter.tsx",
    dependencies: baseDependency,
    isClient: true,
  },
  input: {
    file: "forms/input/input.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  label: {
    file: "forms/label/label.tsx",
    dependencies: baseDependency,
    isClient: true,
  },
  radio: {
    file: "forms/radio/radio.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  range: {
    file: "forms/range/range.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  rating: {
    file: "forms/rating/rating.tsx",
    dependencies: baseDependency,
    isClient: true,
  },
  select: {
    file: "forms/select/select.tsx",
    dependencies: baseDependency,
    isClient: true,
  },
  textarea: {
    file: "forms/textarea/textarea.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  toggle: {
    file: "forms/toggle/toggle.tsx",
    dependencies: baseDependency,
    isClient: true,
  },

  // ──────────────────── DATA DISPLAY ────────────────────
  accordion: {
    file: "data-display/accordion/accordion.tsx",
    dependencies: baseDependency,
    isClient: true,
  },
  avatar: {
    file: "data-display/avatar/avatar.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  badge: {
    file: "data-display/badge/badge.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  calendar: {
    file: "data-display/calendar/calendar.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  card: {
    file: "data-display/card/card.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  carousel: {
    file: "data-display/carousel/carousel.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  chat: {
    file: "data-display/chat/chat.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  collapse: {
    file: "data-display/collapse/collapse.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  countdown: {
    file: "data-display/countdown/countdown.tsx",
    dependencies: baseDependency,
    isClient: true,
  },
  diff: {
    file: "data-display/diff/diff.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  kbd: {
    file: "data-display/kbd/kbd.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  list: {
    file: "data-display/list/list.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  mask: {
    file: "data-display/mask/mask.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  mockup: {
    file: "data-display/mockup/mockup.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  stat: {
    file: "data-display/stat/stat.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  table: {
    file: "data-display/table/table.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  timeline: {
    file: "data-display/timeline/timeline.tsx",
    dependencies: baseDependency,
    isClient: false,
  },

  // ──────────────────── FEEDBACK ────────────────────
  alert: {
    file: "feedback/alert/alert.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  loading: {
    file: "feedback/loading/loading.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  modal: {
    file: "feedback/modal/modal.tsx",
    dependencies: baseDependency,
    isClient: true,
  },
  progress: {
    file: "feedback/progress/progress.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  skeleton: {
    file: "feedback/skeleton/skeleton.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  status: {
    file: "feedback/status/status.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  toast: {
    file: "feedback/toast/toast.tsx",
    dependencies: [...baseDependency, "sonner", "lucide-react"],
    isClient: false,
  },
  tooltip: {
    file: "feedback/tooltip/tooltip.tsx",
    dependencies: baseDependency,
    isClient: false,
  },

  // ──────────────────── NAVIGATION ────────────────────
  breadcrumbs: {
    file: "navigation/breadcrumbs/breadcrumbs.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  dock: {
    file: "navigation/dock/dock.tsx",
    dependencies: baseDependency,
    isClient: true,
  },
  link: {
    file: "navigation/link/link.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  menu: {
    file: "navigation/menu/menu.tsx",
    dependencies: baseDependency,
    isClient: true,
  },
  navbar: {
    file: "navigation/navbar/navbar.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  pagination: {
    file: "navigation/pagination/pagination.tsx",
    dependencies: baseDependency,
    isClient: true,
  },
  steps: {
    file: "navigation/steps/steps.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  tabs: {
    file: "navigation/tabs/tabs.tsx",
    dependencies: baseDependency,
    isClient: true,
  },

  // ──────────────────── LAYOUT ────────────────────
  divider: {
    file: "layout/divider/divider.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  drawer: {
    file: "layout/drawer/drawer.tsx",
    dependencies: baseDependency,
    isClient: true,
  },
  footer: {
    file: "layout/footer/footer.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  hero: {
    file: "layout/hero/hero.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  indicator: {
    file: "layout/indicator/indicator.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  join: {
    file: "layout/join/join.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  stack: {
    file: "layout/stack/stack.tsx",
    dependencies: baseDependency,
    isClient: false,
  },

  // ──────────────────── EFFECTS ────────────────────
  "hover-3d": {
    file: "effects/hover-3d/hover-3d.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  "hover-gallery": {
    file: "effects/hover-gallery/hover-gallery.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  "speed-dial": {
    file: "effects/speed-dial/speed-dial.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  swap: {
    file: "effects/swap/swap.tsx",
    dependencies: baseDependency,
    isClient: true,
  },
  "text-rotate": {
    file: "effects/text-rotate/text-rotate.tsx",
    dependencies: baseDependency,
    isClient: false,
  },
  "theme-controller": {
    file: "effects/theme-controller/theme-controller.tsx",
    dependencies: baseDependency,
    isClient: true,
  },
};
