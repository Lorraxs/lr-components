// Will return whether the current environment is in a regular browser
// and not CEF
export const isEnvBrowser = (): boolean => !(window as any).invokeNative;

// Basic no operation function
export const noop = () => {};

export const radToDeg = (rad: number): number => rad * (180 / Math.PI);

export const Sleep = (ms: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms));
