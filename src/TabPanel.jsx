import Article from './Article';

function TabPanel({ sectionsData }) {
  return (
    <>
      {sectionsData.map(({ id, label, sections }) => (
        <Article key={id} id={id} title={label} sections={sections} />
      ))}
    </>
  );
}

export default TabPanel;
