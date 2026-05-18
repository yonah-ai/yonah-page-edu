/**
 * lib/vertical_config.ts — re-export of the vertical config for framework pages.
 *
 * Framework pages import from `@/lib/vertical_config` (this file).
 * Vertical forks override only the top-level `vertical.config.ts` and
 * keep this thin re-export untouched so upstream framework changes that
 * touch lib/* merge cleanly.
 */
export { verticalConfig, type VerticalConfig } from "../vertical.config";
