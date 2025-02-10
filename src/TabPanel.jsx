import SubNav from './SubNav';
import Article from './Article';

function TabPanel({ sectionsData }) {
  return (
    <>
      <SubNav links={sectionsData.map(({ id, label }) => ({ key: id, href: `#${id}`, label }))} />
      {sectionsData.map(({ id, label, sections }) => (
        <Article key={id} id={id} title={label} sections={sections} />
      ))}
    </>
  );
}

export default TabPanel;
