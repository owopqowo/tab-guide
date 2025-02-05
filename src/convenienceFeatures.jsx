function convenienceFeatures() {
  return (
    <>
      <nav className="overflow-auto py-2 shadow-lg shadow-neutral-200/50">
        <div className="-mx-1 flex w-fit px-3">
          <a href="#auto" className="mx-1 flex-auto rounded-full px-2 py-1 text-sm whitespace-nowrap">
            자동 충전
          </a>
          <a href="#analysis" className="mx-1 flex-auto rounded-full px-2 py-1 text-sm whitespace-nowrap">
            지출 내역 분석
          </a>
          <a href="#card" className="mx-1 flex-auto rounded-full px-2 py-1 text-sm whitespace-nowrap">
            주 카드 설정
          </a>
        </div>
      </nav>
      <article id="auto" className="p-5 pt-10">
        <h2 className="text-2xl font-bold">자동 충전</h2>
      </article>
      <article id="analysis" className="p-5">
        <h2 className="text-2xl font-bold">지출 내역 분석</h2>
      </article>
      <article id="card" className="p-5 pb-10">
        <h2 className="text-2xl font-bold">주 카드 설정</h2>
      </article>
    </>
  );
}

export default convenienceFeatures;
