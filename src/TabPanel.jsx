import Article from './Article';

function TabPanel({ sectionsData, setSubActiveIndex }) {
  return (
    <>
      {sectionsData.map(({ id, label, sections }) => (
        <Article key={id} id={id} title={label} sections={sections} setSubActiveIndex={setSubActiveIndex} />
      ))}
    </>
  );
}

export default TabPanel;
