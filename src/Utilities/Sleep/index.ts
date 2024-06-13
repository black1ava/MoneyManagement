const sleep: (duration?: number) => Promise<void> = (duration = 1000) => {
  return new Promise((reslove, reject) => {
    setTimeout(() => reslove(), duration);
  });
};
