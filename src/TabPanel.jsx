import Article from './Article';

function TabPanel({ id, sectionsData, setSubActiveIndex }) {
  return (
    <div id={id} role="tabpanel" tabIndex="0">
      {sectionsData.map(({ id, label, sections }) => (
        <Article key={id} id={id} title={label} sections={sections} setSubActiveIndex={setSubActiveIndex} />
      ))}
    </div>
  );
}

export default TabPanel;
