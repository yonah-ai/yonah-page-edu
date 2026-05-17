/**
 * Envelope-stream → react-flow nodes + edges transform (framework-canonical).
 *
 * Each incoming envelope event becomes a node (the producing agent) and
 * an edge (from the previous agent in the seq# ordering to this one).
 * Validator chips are attached as edge data and rendered by EnvelopeNode.
 */
import type { Node, Edge } from "reactflow";

type EnvelopeEvent = {
  type: "envelope";
  seq: number;
  from: string;
  to: string;
  validators: { name: string; passed: boolean }[];
  risk_level: string;
  hash: string;
};

export function reduceEvents(events: EnvelopeEvent[]): { nodes: Node[]; edges: Edge[] } {
  const nodes = new Map<string, Node>();
  const edges: Edge[] = [];
  for (const ev of events) {
    nodes.set(ev.from, { id: ev.from, data: { label: ev.from }, position: { x: 0, y: 0 } });
    nodes.set(ev.to,   { id: ev.to,   data: { label: ev.to   }, position: { x: 0, y: 0 } });
    edges.push({
      id: `e${ev.seq}`,
      source: ev.from,
      target: ev.to,
      animated: true,
      data: { validators: ev.validators, hash: ev.hash.slice(0, 8) },
    });
  }
  // TODO: layout pass (dagre or elkjs) to place nodes nicely
  return { nodes: [...nodes.values()], edges };
}
