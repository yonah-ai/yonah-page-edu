<p align="center">
  <img src="public/logo.jpg" alt="yonah-page-edu" width="280"/>
</p>

# yonah-page-edu

React + Vite single-page application for **Yonah-Edu**, a dual-audience autonomous evaluator agent for education whose compliance posture under EU AI Act Annex III §3 is verifiable case-by-case by construction. Deployed to Vercel; speaks REST + WebSocket to the [yonah-agent-edu](https://github.com/yonah-ai/yonah-agent-edu) Chalice API on AWS Lambda.

The org-level profile + brand spec + per-vertical proposals live in the [.github](https://github.com/yonah-ai/.github) repo.

## Relationship to the framework

This repository derives from the framework upstream [**yonah-page**](https://github.com/yonah-ai/yonah-page) (Apache-2.0), which is the vertical-agnostic frontend source of:

- The vertical-agnostic page surface (`pages/login`, `pages/yonah_chat`, `pages/pipeline`, `pages/result`, `pages/account`, `pages/authority_dashboard`, `pages/second_audience_dashboard`)
- The framework components (`Navbar`, `Footer`, `EnvelopeNode`, `ValidatorBadge`, `ApiKeyInput`, `ArtefactEditor`)
- The framework libs (`api.ts`, `wss.ts`, `pipelineModel.ts`)
- The Tailwind theme tokens (the canonical Yonah palette)
- The Vite + Vercel deployment scaffolding

This fork overrides files inside the framework's documented override surface only:

- `vertical.config.ts` — single source of truth for edu vocabulary, role labels, regulatory badges
- `lib/vertical_config.ts` — thin re-export consumed by framework pages
- `pages/index.tsx` — edu landing hero
- `pages/professor_dashboard.tsx` — edu authority dashboard (wraps `AuthorityDashboard`)
- `pages/student_dashboard.tsx` — edu second-audience dashboard (wraps `SecondAudienceDashboard`)
- `components/RubricEditor.tsx` — concrete edu artefact editor (wraps `ArtefactEditor`)
- `public/logo.jpg`, `public/favicon.ico`, `src/assets/logo.jpg`, `.github/social-preview.jpg` — edu logo
- `package.json` — `name: yonah-page-edu`
- `README.md` — this file

Framework changes pull in via:

```bash
git fetch upstream && git merge upstream/main
```

Conflicts are expected only inside the override surface above. If a non-override file conflicts, the framework has changed something this vertical depends on — read the framework's CHANGELOG before merging.

## Edu vocabulary (vs the framework defaults)

| Framework default | Edu fork (this repo) |
|---|---|
| authority audience | professor |
| second audience | student |
| shared-contract artefact | rubric |
| decision | grade |
| cohort | class enrolment |
| `ArtefactEditor` | `RubricEditor` (typology-aware: analytic / holistic / single-point / checklist) |
| `AuthorityDashboard` | `ProfessorDashboard` |
| `SecondAudienceDashboard` | `StudentDashboard` |

All of these are localisations of the framework's wire-level API contract; the seven framework tool names (`build_artefact`, `publish_artefact`, `commit_decision`, `tutor_me`, `submit_draft`, `query_my_provenance`, `delete_my_data`) remain canonical at the network boundary.

## Companion paper

Companion paper: **"Yonah: An Auditable Autonomous AI Agent for Professors and Students"**, International Journal of Artificial Intelligence in Education (IJAIED), Elsevier, submission Q3 2026. This repository is the paper's canonical §5 prototype reference (frontend), together with the backend at [yonah-agent-edu](https://github.com/yonah-ai/yonah-agent-edu).

## Status

**Early scaffold inheriting framework abstractions.** The directory layout is in place; every override file is a thin wrapper around the framework page or component plus a `TODO` marker on the production-grade UX. Pin React 18 + Vite 6 + react-flow 11 from `package.json` when first running `npm install`.

## Quick start

```bash
npm install
npm run dev    # http://localhost:5173

# Build for production
npm run build  # outputs to dist/

# Deploy to Vercel
./push.sh
```

Set `VITE_API_BASE` to the Chalice REST URL and `VITE_WSS_URL` to the WebSocket URL before building.

## Sibling repositories

- Framework: [yonah-agent](https://github.com/yonah-ai/yonah-agent), [yonah-page](https://github.com/yonah-ai/yonah-page)
- Other verticals: [yonah-page-health](https://github.com/yonah-ai/yonah-page-health) (forthcoming), [yonah-page-hire](https://github.com/yonah-ai/yonah-page-hire) (forthcoming), and the symmetric `-agent-` backends
- Org profile: [yonah-ai/.github](https://github.com/yonah-ai/.github)

## License

Apache-2.0 — see [LICENSE](LICENSE). Same as the framework.
