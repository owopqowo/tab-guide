function balanceCheck() {
  return (
    <>
      <nav className="overflow-auto py-2 shadow-lg shadow-neutral-200/50">
        <div className="-mx-1 flex w-fit px-3">
          <a href="#inquiry" className="mx-1 flex-auto rounded-full px-2 py-1 text-sm whitespace-nowrap">
            잔액 조회
          </a>
          <a href="#notification" className="mx-1 flex-auto rounded-full px-2 py-1 text-sm whitespace-nowrap">
            잔액 알림
          </a>
        </div>
      </nav>
      <article id="inquiry" className="p-5 pt-10">
        <h2 className="text-2xl font-bold">잔액 조회</h2>
      </article>
      <article id="notification" className="p-5 pb-10">
        <h2 className="text-2xl font-bold">잔액 알림</h2>
      </article>
    </>
  );
}

export default balanceCheck;
