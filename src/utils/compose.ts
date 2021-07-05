export const compose = (...fn) => (arg) => fn.reduce((acc, f) => {
  return f(acc);
}, arg);
