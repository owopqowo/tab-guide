function paymentRefund() {
  return (
    <>
      <nav className="overflow-auto py-2 shadow-lg shadow-neutral-200/50">
        <div className="-mx-1 flex w-fit px-3">
          <a href="#payment" className="mx-1 flex-auto rounded-full px-2 py-1 text-sm whitespace-nowrap">
            결제 방법
          </a>
          <a href="#policies" className="mx-1 flex-auto rounded-full px-2 py-1 text-sm whitespace-nowrap">
            환불 정책
          </a>
        </div>
      </nav>
      <article id="payment" className="p-5 pt-10">
        <h2 className="text-2xl font-bold">결제 방법</h2>
      </article>
      <article id="policies" className="p-5 pb-10">
        <h2 className="text-2xl font-bold">환불 정책</h2>
      </article>
    </>
  );
}

export default paymentRefund;
