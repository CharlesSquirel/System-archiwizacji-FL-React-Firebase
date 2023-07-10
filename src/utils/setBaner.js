export const setBaner = (func) => {
  func(true);
  setTimeout(() => {
    func(false);
  }, 3000);
};
