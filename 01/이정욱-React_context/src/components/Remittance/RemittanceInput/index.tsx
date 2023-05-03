import { Remittance } from "../../types/Remit";

export default function RemittanceInput({
  remittance,
}: {
  remittance: Remittance;
}) {
  return (
    <div className="border-dashed border-2 border-white-500 m-5 p-4">
      <label>Amount : </label>
      <input
        className="border-solid border-2 rounded-md p-1"
        name="remittance"
        type="number"
        value={remittance.amount || ""}
        placeholder="송금액을 입력해 주세요."
        onChange={(e) => remittance.change(+e.target.value)}
      />
      <p className="text-red-400">{remittance.message}</p>
    </div>
  );
}
