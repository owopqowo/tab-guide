function CardManagement() {
  return (
    <>
      <nav className="overflow-auto py-2 shadow-lg shadow-neutral-200/50">
        <div className="-mx-1 flex w-fit px-3">
          <a href="#activation" className="mx-1 flex-auto rounded-full px-2 py-1 text-sm whitespace-nowrap">
            카드 활성화
          </a>
          <a href="#report" className="mx-1 flex-auto rounded-full px-2 py-1 text-sm whitespace-nowrap">
            분실/도난 신고
          </a>
          <a href="#password" className="mx-1 flex-auto rounded-full px-2 py-1 text-sm whitespace-nowrap">
            비밀번호 설정
          </a>
        </div>
      </nav>
      <article id="activation" className="p-5 pt-10">
        <h2 className="text-2xl font-bold">카드 활성화</h2>
      </article>
      <article id="report" className="p-5">
        <h2 className="text-2xl font-bold">분실/도난 신고</h2>
      </article>
      <article id="password" className="p-5 pb-10">
        <h2 className="text-2xl font-bold">비밀번호 설정</h2>
      </article>
    </>
  );
}

export default CardManagement;
