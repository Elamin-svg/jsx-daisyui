// scripts/index.mjs
// Run: node scripts/index.mjs

import { execFileSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const scripts = [
  "layout/create-divider-demos.mjs",
  "layout/create-drawer-demos.mjs",
  "layout/create-indicator-demos.mjs",
  "layout/create-join-demos.mjs",
  "layout/create-footer-demos.mjs",
  "layout/create-hero-demos.mjs",
  "layout/create-stack-demos.mjs",
  "data-display/create-accordion-demos.mjs",
  "data-display/create-avatar-demos.mjs",
  "data-display/create-badge-demos.mjs",
  "data-display/create-calendar-demos.mjs",
  "data-display/create-card-demos.mjs",
  "data-display/create-carousel-demos.mjs",
  "data-display/create-chat-demos.mjs",
  "data-display/create-collapse-demos.mjs",
  "data-display/create-countdown-demos.mjs",
  "data-display/create-diff-demos.mjs",
  "data-display/create-kbd-demos.mjs",
  "data-display/create-list-demos.mjs",
  "data-display/create-mask-demos.mjs",
  "data-display/create-mockup-demos.mjs",
  "data-display/create-stat-demos.mjs",
  "data-display/create-table-demos.mjs",
  "data-display/create-timeline-demos.mjs",
  "forms/create-button-demos.mjs",
  "forms/create-checkbox-demos.mjs",
  "forms/create-dropdown-demos.mjs",
  "forms/create-fieldset-demos.mjs",
  "forms/create-file-input-demos.mjs",
  "forms/create-filter-demos.mjs",
  "forms/create-input-demos.mjs",
  "forms/create-label-demos.mjs",
  "forms/create-radio-demos.mjs",
  "forms/create-range-demos.mjs",
  "forms/create-rating-demos.mjs",
  "forms/create-select-demos.mjs",
  "forms/create-toggle-demos.mjs",
  "forms/create-textarea-demos.mjs",
  "effects/create-hover-3d-demos.mjs",
  "effects/create-hover-gallery-demos.mjs",
  "effects/create-speed-dial-demos.mjs",
  "effects/create-swap-demos.mjs",
  "effects/create-text-rotate-demos.mjs",
  "effects/create-theme-controller-demos.mjs",
  "navigation/create-breadcrumbs-demos.mjs",
  "navigation/create-dock-demos.mjs",
  "navigation/create-link-demos.mjs",
  "navigation/create-menu-demos.mjs",
  "navigation/create-navbar-demos.mjs",
  "navigation/create-pagination-demos.mjs",
  "navigation/create-steps-demos.mjs",
  "navigation/create-tabs-demos.mjs",
  "feedback/create-alert-demos.mjs",
  "feedback/create-loading-demos.mjs",
  "feedback/create-modal-demos.mjs",
  "feedback/create-progress-demos.mjs",
  "feedback/create-skeleton-demos.mjs",
  "feedback/create-status-demos.mjs",
  "feedback/create-toast-demos.mjs",
  "feedback/create-tooltip-demos.mjs",
  "build-demos.mjs",
];

for (const script of scripts) {
  const full = path.join(__dirname, script);
  console.log(`\n── ${script} ${"─".repeat(Math.max(0, 50 - script.length))}`);
  execFileSync(process.execPath, [full], { stdio: "inherit", cwd: path.resolve(__dirname, "..") });
}

console.log("\n✓  All done.");
