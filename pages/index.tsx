/**
 * Landing — Education vertical's hero. Introduces Yonah-Edu and routes new
 * visitors to login. See README.
 *
 * The framework default renders vertical-agnostic copy ("authority audience" /
 * "second audience"). This file overrides the default with edu-specific
 * copy from `verticalConfig`.
 */
import { verticalConfig } from "../lib/vertical_config";

export default function Landing() {
  // TODO: replace this scaffold with the production-grade landing
  // (two-audience composition, rubric + five-scenario teaser, badges).
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold text-slate-900">
        {verticalConfig.displayName}
      </h1>
      <p className="mt-2 text-slate-600">{verticalConfig.tagline}</p>
      <ul className="mt-6 list-disc pl-6 text-sm text-slate-600">
        <li>
          For {verticalConfig.roles.authority}s — author a{" "}
          {verticalConfig.artefact.name}, publish to a{" "}
          {verticalConfig.cohort.name}, review-and-commit a{" "}
          {verticalConfig.decision.name}.
        </li>
        <li>
          For {verticalConfig.roles.second_audience}s — be tutored against the
          active {verticalConfig.artefact.name}, submit a draft, query the
          per-decision provenance of your own evaluation.
        </li>
      </ul>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs">
        {verticalConfig.regulatoryBadges.map((b) => (
          <li key={b} className="rounded-full bg-slate-100 px-2 py-1 text-slate-700">
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
