import React, {useRef} from "react";
import styles from "./EntityPicker.module.css";
import entitySchemas from "../../Schemas/entitySchemas.js";

function EntityPicker({schema, list, setList, onSelect}){
  const inputRef = useRef(null);
  if (!list) return null;

  const handleEntityClicked = (entity) => {
    if (onSelect) onSelect(entity.id);
  }

  const handleAddEntity = () => {
    const input = inputRef.current.value.trim();
    const baseId = input.toLowerCase().replace(/\s+/g, "_");
    const matching = list
      .map(e => e.id)
      .filter(id => id === baseId || id.startsWith(`${baseId}_`));

    const newEntity = entitySchemas.createEntity(schema)

    newEntity.id = matching.length === 0
      ? baseId
      : `${baseId}_${matching.length}`;

    newEntity.name = input;
    setList([...list, newEntity]);
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