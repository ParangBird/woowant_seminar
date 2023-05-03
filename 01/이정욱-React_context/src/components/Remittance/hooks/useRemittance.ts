import { useCallback, useState } from "react";

export default function useRemittance(account: number) {
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");

  const change = useCallback(
    (amount: number) => {
      if (amount > account) {
        setMessage("계좌 잔액이 부족합니다.");
        setAmount(account);
      } else {
        setMessage("");
        setAmount(amount);
      }
    },
    [account]
  );
  return {
    amount,
    message,
    change,
  };
}
