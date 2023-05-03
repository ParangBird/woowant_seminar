import { memo } from "react";
import {
  RemitButton,
  RemittanceInputWithContext,
  RemittanceProvider,
} from "../components/Remittance";
import { RemittanceContext } from "../components/Remittance/RemittanceProvider";
import useAccount from "../components/Remittance/hooks/useAccount";

export default function Context() {
  return (
    <>
      <h1 className="text-3xl">Context</h1>
      <App />
    </>
  );
}

function App() {
  const [account, setAccount] = useAccount();
  return (
    <>
      <div className="m-2 border-dashed border-2 border-white-500 p-3">
        <label>Account: </label>
        <input
          className="border-solid border-2 rounded-md p-1"
          type="number"
          value={account || ""}
          placeholder="잔액을 입력해 주세요"
          onChange={(e) => setAccount(+e.target.value)}
        />
      </div>
      <RemittanceProvider account={account}>
        {/* <RemittanceInputWithContext context={RemittanceContext} /> */}
        <ChildThatNotConsume />
        {/* <MemoizedChildThatNotConsume /> */}
        <RemittanceContext.Consumer>
          {({ amount }) => <RemitButton amount={amount} account={account} />}
        </RemittanceContext.Consumer>
      </RemittanceProvider>
    </>
  );
}

const MemoizedChildThatNotConsume = memo(ChildThatNotConsume);

function ChildThatNotConsume() {
  return (
    <div className="border-dashed border-2 border-blue-500 m-5">
      <span className="text-blue-500">I am Not Consumer</span>
      <RemittanceInputWithContext context={RemittanceContext} />
    </div>
  );
}
