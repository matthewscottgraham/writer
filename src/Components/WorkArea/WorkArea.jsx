import React from "react";
import EntityEditor from "../EntityEditor/EntityEditor.jsx";
import panelStyles from "../../Styles/Panels.module.css";

function WorkArea({currentPage, characterState, itemState, sceneState}) {
  const editors = [
    {key: 'characters', label: 'Character', state: characterState},
    {key: 'items', label: 'Item', state: itemState},
    {key: 'scenes', label: 'Scenes', state: sceneState},
  ]

  return (
      <div className={panelStyles.workArea}>
        {editors.map(e => (
          <EntityEditor
            isActive={currentPage === e.key}
            entityState={e.state}
            label={e.label}
          />
        ))}
      </div>
  );
}

export default WorkArea;