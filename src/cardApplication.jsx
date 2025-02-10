import SubNav from './SubNav';
import Article from './Article';
import { applySections, typesSections, periodSections } from './sections';

const sectionsData = [
  {
    id: 'apply',
    label: '신청 방법',
    sections: applySections,
  },
  {
    id: 'types',
    label: '카드 종류',
    sections: typesSections,
  },
  {
    id: 'period',
    label: '발급 기간',
    sections: periodSections,
  },
];

function CardApplication() {
  return (
    <>
      <SubNav links={sectionsData.map(({ id, label }) => ({ key: id, href: `#${id}`, label }))} />
      {sectionsData.map(({ id, label, sections }) => (
        <Article key={id} id={id} title={label} sections={sections} />
      ))}
    </>
  );
}

export default CardApplication;
