import { useState } from "react";
const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  return (
    <div>
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
    </div>
  );
};
export default Tabs;
