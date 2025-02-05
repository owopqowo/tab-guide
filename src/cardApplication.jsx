function cardApplication() {
  return (
    <>
      <nav className="overflow-auto py-2 shadow-lg shadow-neutral-200/50">
        <div className="-mx-1 flex w-fit px-3">
          <a href="#apply" className="mx-1 flex-auto rounded-full px-2 py-1 text-sm whitespace-nowrap">
            신청 방법
          </a>
          <a href="#types" className="mx-1 flex-auto rounded-full px-2 py-1 text-sm whitespace-nowrap">
            카드 종류
          </a>
          <a href="#period" className="mx-1 flex-auto rounded-full px-2 py-1 text-sm whitespace-nowrap">
            발급 기간
          </a>
        </div>
      </nav>
      <article id="apply" className="p-5 pt-10">
        <h2 className="text-2xl font-bold">신청 방법</h2>
      </article>
      <article id="types" className="p-5">
        <h2 className="text-2xl font-bold">카드 종류</h2>
      </article>
      <article id="period" className="p-5 pb-10">
        <h2 className="text-2xl font-bold">발급 기간</h2>
      </article>
    </>
  );
}

export default cardApplication;
