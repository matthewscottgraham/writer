import React from "react";
import styles from "./ItemPanel.module.css";
import buttonStyles from "../../Styles/Buttons.module.css";
import panelStyles from "../../Styles/Panels.module.css";

function ItemPanel({currentPage, items, setItems, currentItemID, setCurrentItemID}) {
  if (currentPage !== 'items') return null;

  const getClassName = (itemID) => currentItemID === itemID ? buttonStyles.activeButton : buttonStyles.button;

  const addItem = () => {
    const newItem = {
      id: crypto.randomUUID(),
      name: 'New Item'
    }

    setItems([...items, newItem]);
    setCurrentItemID(newItem.id);
  }
  return (
      <div className={panelStyles.objectListPanel}>
        {items.map((item)=>(
            <button key={item.id}
                    className={getClassName(item.id)}
                    onClick={() => setCurrentItemID(item.id)}>
              {item.name}
            </button>
        ))}
        <button onClick={addItem}>+</button>
      </div>
  )
}

export default ItemPanel;