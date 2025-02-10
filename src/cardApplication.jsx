import Article from './Article';
import { applySections, typesSections, periodSections } from './sections';

function CardApplication() {
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
      <Article id="apply" title="신청 방법" sections={applySections} />
      <Article id="types" title="카드 종류" sections={typesSections} />
      <Article id="period" title="발급 기간" sections={periodSections} />
    </>
  );
}

export default CardApplication;
