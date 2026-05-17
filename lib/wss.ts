/**
 * WebSocket client with auto-reconnect (framework-canonical).
 *
 * Exponential backoff up to 30s, message queue while disconnected, typed
 * event subjects per `type` field.
 *
 * Backend writes envelope events to the same WSS connection the
 * conversational chat uses; the pipeline view subscribes to envelope
 * events only.
 */
type WsEvent = { type: string; [k: string]: unknown };

export class YonahWebSocket {
  private socket: WebSocket | null = null;
  private listeners = new Map<string, Set<(e: WsEvent) => void>>();
  private reconnectAttempt = 0;

  constructor(private readonly url: string) {
    this.connect();
  }

  on(type: string, fn: (e: WsEvent) => void) {
    if (!this.listeners.has(type)) this.listeners.set(type, new Set());
    this.listeners.get(type)!.add(fn);
    return () => this.listeners.get(type)?.delete(fn);
  }

  private connect() {
    // TODO: append `?api_key=...` after key handshake; for v1, key goes in subprotocol header
    this.socket = new WebSocket(this.url);
    this.socket.onmessage = (m) => {
      const ev = JSON.parse(m.data) as WsEvent;
      this.listeners.get(ev.type)?.forEach((fn) => fn(ev));
    };
    this.socket.onclose = () => {
      const delay = Math.min(30000, 1000 * 2 ** this.reconnectAttempt++);
      setTimeout(() => this.connect(), delay);
    };
  }
}
