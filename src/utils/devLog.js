export const devLog = (...args) => {
  if (import.meta.env.DEV) {
    console.log("[DEV]", ...args);
  }
};