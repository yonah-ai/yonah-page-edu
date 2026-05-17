/**
 * Typed REST client for the Chalice backend (framework upstream).
 *
 * All seven tools have a corresponding function here. Each function injects
 * the Bearer API key from session storage and returns a typed response.
 *
 * See yonah-agent/app.py for the route table.
 */
const API_BASE = import.meta.env.VITE_API_BASE ?? "/api";

function authHeaders(): HeadersInit {
  const key = sessionStorage.getItem("yonah.apiKey") ?? "";
  return key ? { Authorization: `Bearer ${key}`, "Content-Type": "application/json" } : { "Content-Type": "application/json" };
}

// Authority-audience tools
export const buildArtefact    = (payload: unknown) => post("/artefact/build", payload);
export const publishArtefact  = (payload: unknown) => post("/artefact/publish", payload);
export const commitDecision   = (payload: unknown) => post("/eval/commit", payload);

// Second-audience tools
export const tutorMe            = (payload: unknown) => post("/tutor/start", payload);
export const submitDraft        = (payload: unknown) => post("/eval/start", payload);
export const queryMyProvenance  = (decisionId: string) => get(`/eval/${decisionId}/provenance`);

// Universal
export const deleteMyData = () => del("/account");

async function post(path: string, body: unknown) {
  const r = await fetch(`${API_BASE}${path}`, { method: "POST", headers: authHeaders(), body: JSON.stringify(body) });
  if (!r.ok) throw new Error(`${path} ${r.status}`);
  return r.json();
}

async function get(path: string) {
  const r = await fetch(`${API_BASE}${path}`, { headers: authHeaders() });
  if (!r.ok) throw new Error(`${path} ${r.status}`);
  return r.json();
}

async function del(path: string) {
  const r = await fetch(`${API_BASE}${path}`, { method: "DELETE", headers: authHeaders() });
  if (!r.ok) throw new Error(`${path} ${r.status}`);
  return r.json();
}
