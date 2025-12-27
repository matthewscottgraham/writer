import React from "react";
import entitySchema from "../../Schemas/entitySchemas.js";
import panelStyles from "../../Styles/Panels.module.css";
import ObjectListPanel from "../ObjectListPanel/ObjectListPanel.jsx";

function Sidebar({currentPage, characterState, itemState, sceneState}) {
  return (
      <div className={panelStyles.sidebar}>
        <ObjectListPanel
            isActive={currentPage === 'character'}
            state={characterState}
            createItem={ ()=>
                entitySchema.createEntity(entitySchema.character) }
        />
        <ObjectListPanel
            isActive={currentPage === 'item'}
            state={itemState}
            createItem={ ()=>
                entitySchema.createEntity(entitySchema.item) }
        />
        <ObjectListPanel
            isActive={currentPage === 'scene'}
            state={sceneState}
            createItem={ ()=>
                entitySchema.createEntity(entitySchema.scene) }
        />
      </div>
  );
}

export default Sidebar;