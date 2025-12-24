import React from "react";
import panelStyles from "../../Styles/Panels.module.css";

function Sidebar({children}) {
  return (
      <div className={panelStyles.sidebar}>
        {children}
      </div>
  );
}

export default Sidebar;