/* eslint-disable @typescript-eslint/no-explicit-any */
type Sender = (msg: { type: string; payload: any }) => void;
let _sender: Sender | null = null;
export function setBridgeSender(s: Sender) {
  _sender = s;
}
export function getBridgeSender() {
  return _sender;
}
