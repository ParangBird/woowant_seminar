export type Remittance = {
  amount: number;
  message: string;
  change: (amount: number) => void;
};
