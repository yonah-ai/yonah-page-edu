# yonah-page

React + Vite single-page application for **Yonah**, a dual-audience autonomous AI agent framework with verifiable per-decision provenance for regulated domains. This repository is the **framework-frontend upstream** of the Yonah family: the vertical-agnostic web client that the per-vertical forks derive from.

The frontend talks REST + WebSocket to [yonah-agent](https://github.com/yonah-ai/yonah-agent) (the framework-backend upstream) on AWS Lambda. The org-level profile + brand spec + per-vertical proposals live in the [.github](https://github.com/yonah-ai/.github) repo.

## Status

**Early scaffold.** The directory layout and page skeletons are in place; the components and lib helpers are stubs marked with `TODO`. The visual logic is ported from the production-hardened patterns in `jhcontext-landing` (chat WSS, form submission, Turnstile) and adapted for role-aware dual-audience UX in vertical-agnostic terms.

## Vertical-agnostic vocabulary

The framework frontend uses abstract role labels throughout. Vertical forks rename these to their domain idiom via `vertical.config.ts`:

| Framework default | Edu fork | Health fork | Hire fork |
|---|---|---|---|
| authority audience | professor | clinician | recruiter |
| second audience | student | patient | candidate |
| shared-contract artefact | rubric | care protocol | job criteria |
| decision | grade | treatment | hire decision |

## Layout

```
yonah-page/
  index.html               # Vite entry
  index.tsx                # React Router boot
  vite.config.ts
  tsconfig.json
  vercel.json              # SPA rewrites + /api/* → Chalice
  push.sh                  # one-command Vercel deploy
  package.json
  pages/
    index.tsx                       # landing — introduces Yonah + signup CTAs
    login.tsx                       # API-key entry + role discrimination
    authority_dashboard.tsx         # artefacts, bound cohorts, pending decisions
    second_audience_dashboard.tsx   # active artefacts, past decisions, query-provenance entry
    yonah_chat.tsx                  # primary conversational surface (both audiences, role-aware)
    pipeline.tsx                    # live envelope-flow visualisation (react-flow)
    result.tsx                      # per-decision result + structural-verifier outputs
    account.tsx                     # rotate key, delete account
  components/
    Navbar.tsx
    Footer.tsx
    EnvelopeNode.tsx       # custom react-flow node
    ValidatorBadge.tsx
    ApiKeyInput.tsx        # provider auto-detect (sk-ant-* / sk-* / AIza*)
    ArtefactEditor.tsx     # generic per-criterion editor (vertical forks override)
  lib/
    api.ts                 # REST client (typed) — seven-tool API contract
    wss.ts                 # WSS client with auto-reconnect
    pipelineModel.ts       # envelope-stream → react-flow nodes/edges transform
  styles/
    tailwind.css
  public/
```

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

## Vertical forks (the family)

The framework frontend upstream is the source from which the per-vertical reference frontends derive. Each vertical fork tracks the upstream framework and inherits framework-level improvements via `git pull upstream main`; only the vertical-override surface (vertical-specific copy, vertical artefact editor, vertical landing hero) is fork-specific.

| Vertical | Frontend repo | Status |
|---|---|---|
| Education | [yonah-edu-page](https://github.com/yonah-ai/yonah-edu-page) | reference implementation (companion to the IJAIED paper) |
| Health | `yonah-page-health` | forthcoming — will fork this framework |
| Hire | `yonah-page-hire` | forthcoming — will fork this framework |

## License

Apache-2.0 — see [LICENSE](LICENSE).
