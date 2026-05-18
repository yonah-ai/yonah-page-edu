/**
 * ProfessorDashboard — Edu vertical's authority dashboard.
 *
 * Concrete subclass of the framework's `AuthorityDashboard`. The
 * framework page renders draft + published artefacts, bound cohorts,
 * pending decisions; this file overrides only the copy.
 *
 * See README.md.
 */
import AuthorityDashboard from "./authority_dashboard";
import { verticalConfig } from "../lib/vertical_config";

export default function ProfessorDashboard() {
  // TODO: full edu dashboard with rubric list + class enrolments + pending grades.
  return (
    <section data-vertical={verticalConfig.name}>
      <h1 className="text-2xl font-bold text-slate-900">
        {verticalConfig.roles.authority.replace(/^./, (c) => c.toUpperCase())}{" "}
        dashboard — Yonah-Edu
      </h1>
      <p className="mt-2 text-sm text-slate-600">
        Draft + published {verticalConfig.artefact.pluralName}, bound{" "}
        {verticalConfig.cohort.pluralName}, pending {verticalConfig.decision.pluralName}.
      </p>
      <AuthorityDashboard />
    </section>
  );
}
