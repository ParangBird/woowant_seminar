import React, { useContext } from "react";
import RemittanceInput from "../RemittanceInput";
import { Remittance } from "../../types/Remit";

export default function RemittanceInputWithContext({
  context,
}: {
  context: React.Context<Remittance>;
}) {
  const remittance = useContext(context);
  return <RemittanceInput remittance={remittance} />;
}
