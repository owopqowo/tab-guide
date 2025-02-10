function CardRecharge() {
  return (
    <>
      <nav className="overflow-auto py-2 shadow-lg shadow-neutral-200/50">
        <div className="-mx-1 flex w-fit px-3">
          <a href="#charge" className="mx-1 flex-auto rounded-full px-2 py-1 text-sm whitespace-nowrap">
            충전 방법
          </a>
          <a href="#minMax" className="mx-1 flex-auto rounded-full px-2 py-1 text-sm whitespace-nowrap">
            최소/최대 충전액
          </a>
          <a href="#limit" className="mx-1 flex-auto rounded-full px-2 py-1 text-sm whitespace-nowrap">
            충전 한도
          </a>
          <a href="#reserve" className="mx-1 flex-auto rounded-full px-2 py-1 text-sm whitespace-nowrap">
            충전 예약
          </a>
        </div>
      </nav>
      <article id="charge" className="p-5 pt-10">
        <h2 className="text-2xl font-bold">충전 방법</h2>
      </article>
      <article id="minMax" className="p-5">
        <h2 className="text-2xl font-bold">최소/최대 충전액</h2>
      </article>
      <article id="limit" className="p-5">
        <h2 className="text-2xl font-bold">충전 한도</h2>
      </article>
      <article id="reserve" className="p-5 pb-10">
        <h2 className="text-2xl font-bold">충전 예약</h2>
      </article>
    </>
  );
}

export default CardRecharge;
