import { createSignal } from "solid-js";

const [getShowBreakpointDebugger, setShowBreakpointDebugger] =
  createSignal(false);
const [getShowTanstackDevtools, setShowTanstackDevtools] = createSignal(false);

export { getShowBreakpointDebugger, getShowTanstackDevtools };

export function toggleBreakpointDebugger(): void {
  setShowBreakpointDebugger((show) => !show);
}

export function toggleTanstackDevtools(): void {
  setShowTanstackDevtools((show) => !show);
}
