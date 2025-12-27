import React from 'react';
import panelStyles from '../../Styles/Panels.module.css';

function EntityEditor({isActive, entityState, label}) {
  if (!isActive || !entityState) return null;

  const {list, setList, currentID} = entityState;
  const entity = list.find(e => e.id === currentID);

  if (!entity) {
    return <div className={panelStyles.panel}> No {label} selected</div>;
  }

  function handleDelete() {
    if (!window.confirm('Are you sure you want to delete this character?')) return

    const newList = list.filter(c => c.id !== currentID);
    setList(newList);
    entityState.setCurrentID(null);
  }

  function handleNameChange(e) {
    const newName = e.target.value;
    setList(list.map(c => c.id === currentID ? {...c, name: newName} : c));
  }

  return (
    <div className={panelStyles.panel}>
      <div className={panelStyles.panelHeader}>
        <h3>{label} Editor</h3>
        <div style={{'flex-grow': '1' }} />
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div>ID: {entity.id}</div>
      <div>Name: <input value={entity.name} onChange={handleNameChange}></input></div>
    </div>
  );
}

export default EntityEditor;