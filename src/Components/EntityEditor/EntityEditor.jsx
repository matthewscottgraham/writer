import React from 'react';
import panelStyles from '../../Styles/Panels.module.css';
import FieldEditor from './FieldEditor.jsx';

function EntityEditor({isActive, state, schema}) {
  if (!isActive || !state) return null;

  const {list, setList, currentID, setCurrentID} = state;
  const entity = list.find(e => e.id === currentID);

  if (!entity) {
    return <div className={panelStyles.panel}> No {schema.label} selected</div>;
  }

  function handleDelete() {
    if (!window.confirm(`Are you sure you want to delete this ${schema.label}?`)) return

    const newList = list.filter(e => e.id !== currentID);
    setList(newList);
    state.setCurrentID(null);
    setCurrentID(newList[0]?.id ?? null);
  }

  function updateEntity(updater) {
    setList(list.map(e => (e.id === currentID ? updater(e) : e)));
  }

  return (
    <div className={panelStyles.panel}>

      <div className={panelStyles.panelHeader}>
        <h3>{schema.label} Editor</h3>
        <div style={{ flexGrow: 1}} />
        <button onClick={handleDelete}>Delete</button>
      </div>

      <div className={panelStyles.workAreaContent}>
        <div>
          id: {entity.id}
        </div>
        { schema.fields.map(field => (
          <FieldEditor
            key={field.id}
            field={field}
            value={entity[field.key]}
            onChange={value =>
              updateEntity(e => ({ ...e, [field.key]: value })
            )}
            selectedID={ field.key === 'sequences'
                ? state.currentSequenceID
                : undefined
            }
            onSelect={ field.key === 'sequences'
                ? state.setCurrentSequenceID
                : undefined
            }
          />
        ))}
      </div>
    </div>
  );
}

export default EntityEditor;