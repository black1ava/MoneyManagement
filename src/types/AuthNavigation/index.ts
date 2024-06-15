export type AuthNavigationType = {
  Login: undefined;
  Otp: {verificationId: string | null; phone: string};
};
