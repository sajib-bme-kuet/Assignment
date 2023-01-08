const Tabs = ({ activeTab, setActiveTab, children }) => {
  // const [activeTab, setActiveTab] = useState(children[0].props.label);

  return (
    <>
      <div>{!activeTab && "Select a tab to begin with"}</div>
      <div>
        {children.map((child) => (
          <button
            key={child.props.label}
            onClick={() => setActiveTab(child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div>
        {children.map((child) => {
          if (child.props.label !== activeTab) return null;
          return child.props.children;
        })}
      </div>
    </>
  );
};
export default Tabs;
