import React from "react";
import buttonStyles from "../../Styles/Buttons.module.css";
import panelStyles from "../../Styles/Panels.module.css";

function ObjectListPanel({isActive, state, createItem, labelKey = 'name'}) {
  if (!isActive) return null;

  const {list, setList, currentID, setCurrentID} = state;
  const getClassName = (id) => currentID === id ? buttonStyles.activeButton : buttonStyles.button;

  const addItem = () => {
    const newItem = createItem();
    setList(prev => [...prev, newItem]);
    setCurrentID(newItem.id);
  }

  return (
      <div className={panelStyles.objectListPanel}>
        {list.map(item => (
           <button
            key={item.id}
            className={getClassName(item.id)}
            onClick={() => setCurrentID(item.id)}>
             {item[labelKey]}
           </button>
        ))}
        <button onClick={addItem}>+</button>
      </div>
  );
}

export default ObjectListPanel;