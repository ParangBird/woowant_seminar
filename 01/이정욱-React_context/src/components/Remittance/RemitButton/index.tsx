export default function RemitButton({
  amount,
  account,
}: {
  amount: number;
  account: number;
}) {
  return (
    <button>
      account: {account} / amount: {amount}
    </button>
  );
}
