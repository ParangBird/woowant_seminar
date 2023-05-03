import { PropsWithChildren, createContext } from "react";
import useRemittance from "../hooks/useRemittance";
import { Remittance } from "../../types/Remit";

export const RemittanceContext = createContext<Remittance>({
  amount: 0,
  message: "",
  change: () => null,
});

type Props = {
  account: number;
} & PropsWithChildren;

export default function RemittanceProvider({ account, children }: Props) {
  const remittance = useRemittance(account);
  return (
    <RemittanceContext.Provider value={remittance}>
      <>
        <div className="border-dashed border-2 border-green-300 m-2">
          <span className="text-green-300">I am Provider</span>
          {children}
        </div>
      </>
    </RemittanceContext.Provider>
  );
}
