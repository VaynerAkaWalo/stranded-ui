export const authPath = () => {
  if (import.meta.env.DEV) {
    return "https://auth.blamedevs.local";
  }

  return "https://auth.blamedevs.com";
};
