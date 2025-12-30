import React from "react";
import panelStyles from "../../Styles/Panels.module.css";

function SequencePreview({ sequence }) {
  return (
      <div className={panelStyles.panel}>
        <div className={panelStyles.panelHeader}>
          <h3>Sequence Preview</h3>
        </div>
      </div>
  )
}

export default SequencePreview;