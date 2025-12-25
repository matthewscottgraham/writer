import React from "react";
import CharacterEditor from "../CharacterEditor/CharacterEditor.jsx";
import panelStyles from "../../Styles/Panels.module.css";

function WorkArea({currentPage, characterState, itemState, sceneState}) {
  return (
      <div className={panelStyles.workArea}>
        <CharacterEditor isActive={currentPage === 'characters'} characterState={characterState} />
        {/*<ItemEditor isActive={currentPage === 'items'} itemState={itemState} />*/}
        {/*<SceneEditor isActive={currentPage === 'scenes'} sceneState={sceneState} />*/}
      </div>
  );
}

export default WorkArea;