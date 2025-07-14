const Summary = () => {
  return (
    <article className="w-full md:px-8">
      <div className="flex w-full justify-between mb-2 text-lg">
        <span>
          Subtotal <small className="text-xs">1 item(s)</small>
        </span>
        <span>$35.00</span>
      </div>
      <div className="flex w-full justify-between mb-2 text-lg">
        <span>Shipping discount</span>
        <span>-$5.00</span>
      </div>
      <div className="flex w-full justify-between text-lg">
        <span>
          Tax <small className="text-xs">(Calculated at checkout)</small>
        </span>
        <span>-$5.00</span>
      </div>
    </article>
  );
};

export default Summary;
