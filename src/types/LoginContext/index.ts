export type LoginContextType = {
  phone: string;
  setPhone: (value: string) => void;
  onLoginWithPhoneNumber: () => Promise<void>;
};
