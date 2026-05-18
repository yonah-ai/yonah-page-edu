/**
 * StudentDashboard — Edu vertical's second-audience dashboard.
 *
 * Concrete subclass of the framework's `SecondAudienceDashboard`. Lists
 * active rubrics for the student's class enrolments, past evaluations,
 * and a button to query per-evaluation provenance.
 *
 * See IJAIED paper §5.3 Student flow + Scenarios B, C, E in §6.
 */
import SecondAudienceDashboard from "./second_audience_dashboard";
import { verticalConfig } from "../lib/vertical_config";

export default function StudentDashboard() {
  // TODO: full edu dashboard with active rubrics + past evaluations + provenance button.
  return (
    <section data-vertical={verticalConfig.name}>
      <h1 className="text-2xl font-bold text-slate-900">
        {verticalConfig.roles.second_audience.replace(/^./, (c) =>
          c.toUpperCase(),
        )}{" "}
        dashboard — Yonah-Edu
      </h1>
      <p className="mt-2 text-sm text-slate-600">
        Active {verticalConfig.artefact.pluralName} for your{" "}
        {verticalConfig.cohort.pluralName}, past{" "}
        {verticalConfig.decision.pluralName}, and your right to query the
        per-decision provenance of any of your own evaluations.
      </p>
      <SecondAudienceDashboard />
    </section>
  );
}
