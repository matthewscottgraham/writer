import React from "react";
import panelStyles from "../../Styles/Panels.module.css";
import ObjectListPanel from "../ObjectListPanel/ObjectListPanel.jsx";

function Sidebar({currentPage, characterState, itemState, sceneState}) {
  return (
      <div className={panelStyles.sidebar}>
        <ObjectListPanel
            isActive={currentPage === 'characters'}
            state={characterState}
            createItem={()=> ({
              id: crypto.randomUUID(),
              name: 'New Character'
            })} />
        <ObjectListPanel
            isActive={currentPage === 'items'}
            state={itemState}
            createItem={()=> ({
              id: crypto.randomUUID(),
              name: 'New Item'
            })} />
        <ObjectListPanel
            isActive={currentPage === 'scenes'}
            state={sceneState}
            createItem={()=> ({
              id: crypto.randomUUID(),
              name: 'New Scene'
            })} />
      </div>
  );
}

export default Sidebar;