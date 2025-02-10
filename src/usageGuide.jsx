function UsageGuide() {
  return (
    <>
      <nav className="overflow-auto py-2 shadow-lg shadow-neutral-200/50">
        <div className="-mx-1 flex w-fit px-3">
          <a href="#places" className="mx-1 flex-auto rounded-full px-2 py-1 text-sm whitespace-nowrap">
            결제 사용처
          </a>
          <a href="#restrictions" className="mx-1 flex-auto rounded-full px-2 py-1 text-sm whitespace-nowrap">
            사용 제한
          </a>
        </div>
      </nav>
      <article id="places" className="p-5 pt-10">
        <h2 className="text-2xl font-bold">결제 사용처</h2>
      </article>
      <article id="restrictions" className="p-5 pb-10">
        <h2 className="text-2xl font-bold">사용 제한</h2>
      </article>
    </>
  );
}

export default UsageGuide;
