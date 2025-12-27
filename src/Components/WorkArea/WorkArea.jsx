import React from "react";
import entitySchemas from "../../Schemas/entitySchemas.js";
import EntityEditor from "../EntityEditor/EntityEditor.jsx";
import panelStyles from "../../Styles/Panels.module.css";

function WorkArea({currentPage, characterState, itemState, sceneState}) {
  const stateMap = {
    character: characterState,
    item: itemState,
    scene: sceneState
  }

  const schema = entitySchemas[currentPage];
  const state = stateMap[currentPage];

  return (
      <div className={panelStyles.workArea}>
        <EntityEditor
          isActive={schema}
          state={state}
          schema={schema}
        />
      </div>
  );
}

export default WorkArea;