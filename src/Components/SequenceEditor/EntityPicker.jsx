import React, {useRef} from "react";
import styles from "./EntityPicker.module.css";
import {createNewEntity} from "../../Utilities/CreateEntity.js";

function EntityPicker({schema, list, setList, onSelect}){
  const inputRef = useRef(null);
  if (!list) return null;

  const handleEntityClicked = (entity) => {
    if (onSelect) onSelect(entity.id);
  }

  const handleAddEntity = () => {
    const value = inputRef.current.value;
    createNewEntity(schema, value, list, setList);
    inputRef.current.value = "";
  }

  return (
      <div className={styles.entityPickerPanel}>
        <div style={{flexDirection: 'column'}}>
          { list.map((entity) => (
            <button
                key={entity.id}
                onClick={()=>handleEntityClicked(entity)}
            >
              { entity.name }
            </button>
            ))
          }
        </div>
        <div>
          <input type='text' ref={inputRef}></input>
          <button onClick={handleAddEntity}>Add {schema.label}</button>
        </div>
      </div>
  )
}

export default EntityPicker;