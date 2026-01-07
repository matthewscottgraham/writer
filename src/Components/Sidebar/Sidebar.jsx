import React from "react";
import ObjectListPanel from "../ObjectListPanel/ObjectListPanel.jsx";
import {createNewCharacter, createNewItem, createNewScene} from "../../Utilities/CreateEntity.js";
import panelStyles from "../../Styles/Panels.module.css";

function Sidebar({currentPage, characterState, itemState, sceneState}) {
  return (
      <div className={panelStyles.sidebar}>
        <ObjectListPanel
            isActive={currentPage === 'character'}
            state={characterState}
            createItem={ ()=>
                createNewCharacter(characterState.list, characterState.setList) }
        />
        <ObjectListPanel
            isActive={currentPage === 'item'}
            state={itemState}
            createItem={ ()=>
                createNewItem(itemState.list, itemState.setList) }
        />
        <ObjectListPanel
            isActive={currentPage === 'scene'}
            state={sceneState}
            createItem={ ()=>
                createNewScene(sceneState.list, sceneState.setList) }
        />
      </div>
  );
}

export default Sidebar;