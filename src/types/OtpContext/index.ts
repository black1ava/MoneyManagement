export type CodeType = {
  value: string;
  asArr: Array<string>;
};

export type OtpContextType = {
  code: CodeType;
  onCodeChange: (value: string) => void;
};
