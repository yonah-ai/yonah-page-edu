/**
 * vertical.config.ts — Education vertical configuration for yonah-page-edu.
 *
 * Single source of truth for the edu vertical's UI vocabulary, role
 * labels, and regulatory badges. Consumed by every framework page that
 * imports `verticalConfig` from `@/lib/vertical_config`.
 *
 * The framework's wire-level API contract (seven canonical tool names,
 * two abstract role axes) is preserved at the network boundary; this
 * config only localises the *labels* shown to humans.
 *
 * Sibling configs in future verticals: yonah-page-health, yonah-page-hire.
 */
export const verticalConfig = {
  name: "edu",
  displayName: "Yonah-Edu",
  tagline:
    "Autonomous AI agent for education. Professors author rubrics; students learn against them; every grade carries a verifiable per-decision provenance.",

  // Audience role labels (framework axes -> edu names).
  roles: {
    authority: "professor",
    second_audience: "student",
  },

  // Artefact + decision vocabulary (framework -> edu).
  artefact: {
    name: "rubric",
    pluralName: "rubrics",
    editorRoute: "/rubric-editor",
  },
  decision: {
    name: "grade",
    pluralName: "grades",
  },
  cohort: {
    name: "class enrolment",
    pluralName: "class enrolments",
  },

  // User-facing tool labels (wire-level names preserved at network boundary).
  toolLabels: {
    build_artefact: "Build rubric",
    publish_artefact: "Publish rubric",
    commit_decision: "Commit grade",
    tutor_me: "Tutor me",
    submit_draft: "Submit draft",
    query_my_provenance: "Query my provenance",
    delete_my_data: "Delete my data",
  },

  // Regulatory anchors shown as badges in the result + dashboard views.
  regulatoryBadges: [
    "EU AI Act Annex III §3",
    "EU AI Act Art. 12–15",
    "EU AI Act Art. 86 (right to explanation)",
    "GDPR Art. 17 (right to erasure)",
    "FERPA (US student records)",
  ],

  // Companion paper for the "About" + footer surface.
  companionPaper: {
    title: "Yonah: An Auditable Autonomous AI Agent for Professors and Students",
    venue:
      "International Journal of Artificial Intelligence in Education (IJAIED)",
    publisher: "Elsevier (from 2026)",
    status: "in submission",
    year: 2026,
  },

  // Pre-existing companion repositories for cross-linking.
  repos: {
    backend: "https://github.com/yonah-ai/yonah-agent-edu",
    frontend: "https://github.com/yonah-ai/yonah-page-edu",
    frameworkBackend: "https://github.com/yonah-ai/yonah-agent",
    frameworkFrontend: "https://github.com/yonah-ai/yonah-page",
    frozenBackend: "https://github.com/yonah-ai/yonah-edu-agent",
    frozenFrontend: "https://github.com/yonah-ai/yonah-edu-page",
  },
} as const;

export type VerticalConfig = typeof verticalConfig;
