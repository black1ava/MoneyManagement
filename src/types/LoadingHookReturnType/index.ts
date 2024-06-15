export type LoadingHookReturnType = {
  loading: boolean;
  onLoadingToggle: () => void;
  setLoading: (value: boolean) => void;
};
