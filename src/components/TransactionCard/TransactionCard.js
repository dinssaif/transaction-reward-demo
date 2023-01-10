const TransactionCard = ({
  description,
  tranractionAmount,
  currency,
  points,
}) => {
  return (
    <div className="flex justify-between px-8 py-4 bg-blue-100 my-2 rounded-3xl items-center shadow-black shadow-sm hover:translate-x-2 transition-all duration-300 ease-in-out cursor-pointer">
      <p>{description}</p>
      <div>
        <strong>
          {currency}
          {tranractionAmount}
        </strong>
        <p>{`${points} points`}</p>
      </div>
    </div>
  );
};

export default TransactionCard;
