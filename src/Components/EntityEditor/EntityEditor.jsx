import React from 'react';
import panelStyles from '../../Styles/Panels.module.css';

function EntityEditor({isActive, state, schema}) {
  if (!isActive || !state) return null;

  const {list, setList, currentID} = state;
  const entity = list.find(e => e.id === currentID);

  if (!entity) {
    return <div className={panelStyles.panel}> No {schema.label} selected</div>;
  }

  function handleDelete() {
    if (!window.confirm(`Are you sure you want to delete this ${schema.label}?`)) return

    const newList = list.filter(c => c.id !== currentID);
    setList(newList);
    state.setCurrentID(null);
  }

  function updateField(key, value) {
    setList(list.map(e => e.id === currentID ? {...e, [key]: value} : e));
  }

  return (
    <div className={panelStyles.panel}>
      <div className={panelStyles.panelHeader}>
        <h3>{schema.label} Editor</h3>
        <div style={{'flex-grow': '1' }} />
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div style={{'padding-top': '1em'}}>
        {schema.fields.map(field => (
          <div key={field.key}>
            <label>
              {field.label}: {' '}
              <input type={field.type}
                value={entity[field.key] ?? ''}
                onChange={e=> updateField(field.key, e.target.value)}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EntityEditor;