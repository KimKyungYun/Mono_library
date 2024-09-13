type Procedure = (...args: any[]) => void;

const debounce = (func: Procedure, delay: number): Procedure => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return (...args: any[]) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default debounce;
