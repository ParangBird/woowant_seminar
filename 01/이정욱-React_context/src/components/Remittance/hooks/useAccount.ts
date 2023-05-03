import { useCallback, useState } from "react";

export default function useAccount() {
  const [account, setAccount] = useState(0);
  const change = useCallback((account: number) => {
    // 계좌에 대한 유효성 검증를 위한 무언가
    setAccount(account);
  }, []);
  return [account, change] as const;
}
